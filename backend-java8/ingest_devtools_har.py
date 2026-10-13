#!/usr/bin/env python3
"""Keep public response fixtures and actually loaded images; delete raw HAR immediately."""
import base64
import binascii
import hashlib
import json
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlparse

from capture_public_images import ASSETS, MAX_BYTES

root = Path(__file__).resolve().parent
har_path = Path(sys.argv[1]).resolve()
image_urls = set()
embedded_images = 0


def valid_image(data):
    return (data.startswith(b"\x89PNG\r\n\x1a\n")
            or data.startswith(b"\xff\xd8\xff")
            or data.startswith((b"GIF87a", b"GIF89a"))
            or (data.startswith(b"RIFF") and data[8:12] == b"WEBP"))


try:
    subprocess.run([sys.executable, str(root / "extract_public_fixtures.py"), str(har_path)], check=True)
    for entry in json.loads(har_path.read_text(encoding="utf-8"))["log"]["entries"]:
        request = entry.get("request", {})
        response = entry.get("response", {})
        url = request.get("url", "")
        content = response.get("content", {})
        if (request.get("method", "").upper() == "GET"
                and response.get("status") == 200
                and urlparse(url).hostname == "eshopfile.zhiyousx.com"
                and content.get("mimeType", "").startswith("image/")):
            image_urls.add(url)
            suffix = Path(urlparse(url).path).suffix.lower()
            if suffix not in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
                continue
            encoded = content.get("text")
            if (content.get("encoding") != "base64" or not isinstance(encoded, str)
                    or not encoded or len(encoded) > 4 * (MAX_BYTES + 2) // 3 + 128):
                continue
            try:
                data = base64.b64decode(encoded, validate=True)
            except (binascii.Error, ValueError):
                continue
            if not (0 < len(data) <= MAX_BYTES and valid_image(data)):
                continue
            ASSETS.mkdir(parents=True, exist_ok=True)
            destination = ASSETS / (hashlib.sha256(url.encode()).hexdigest()[:16] + suffix)
            if not destination.exists():
                destination.write_bytes(data)
                embedded_images += 1
finally:
    har_path.unlink(missing_ok=True)

from capture_public_images import main as capture_images
capture_images(image_urls)
subprocess.run([sys.executable, str(root / "build_image_map.py")], check=True)
subprocess.run([sys.executable, str(root / "build_client_routes.py")], check=True)
subprocess.run([sys.executable, str(root / "localize_static_assets.py")], check=True)
print("Imported {} observed image URLs; {} image bodies copied directly from HAR".format(len(image_urls), embedded_images))
