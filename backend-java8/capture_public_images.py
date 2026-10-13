#!/usr/bin/env python3
"""Cache images referenced by captured public API JSON responses."""
import concurrent.futures
import hashlib
import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT.parent / "runnable-miniapp" / "static" / "captured"
MAX_BYTES = 10 * 1024 * 1024


def urls_in(value):
    if isinstance(value, str):
        yield from re.findall(r"https?://[^\s\"'<>\\]+", value)
    elif isinstance(value, dict):
        for child in value.values():
            yield from urls_in(child)
    elif isinstance(value, list):
        for child in value:
            yield from urls_in(child)


def capture(url):
    parsed = urllib.parse.urlparse(url)
    if parsed.hostname != "eshopfile.zhiyousx.com":
        return None
    suffix = Path(parsed.path).suffix.lower()
    if suffix not in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
        return None
    name = hashlib.sha256(url.encode()).hexdigest()[:16] + suffix
    destination = ASSETS / name
    if not destination.exists():
        safe_url = urllib.parse.urlunparse(parsed._replace(path=urllib.parse.quote(parsed.path, safe="/")))
        request = urllib.request.Request(safe_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, timeout=20) as response:
            content_type = response.headers.get("Content-Type", "")
            if not content_type.startswith("image/"):
                raise ValueError("Unexpected MIME type for {}: {}".format(url, content_type))
            data = response.read(MAX_BYTES + 1)
            if len(data) > MAX_BYTES:
                raise ValueError("Image too large: " + url)
            destination.write_bytes(data)
    return url, "/static/captured/" + name, destination.stat().st_size


def main(extra_urls=()):
    ASSETS.mkdir(parents=True, exist_ok=True)
    urls = set(extra_urls)
    image_map = ROOT / "fixtures" / "image-map.tsv"
    if image_map.exists():
        urls.update(line.split("\t", 1)[0] for line in image_map.read_text(encoding="utf-8").splitlines())
    for fixture in (ROOT / "fixtures").glob("*.json"):
        if fixture.name == "index.json":
            continue
        urls.update(urls_in(json.loads(fixture.read_text(encoding="utf-8"))))
    urls = sorted(url for url in urls if urllib.parse.urlparse(url).hostname == "eshopfile.zhiyousx.com")
    found = []
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        futures = {executor.submit(capture, url): url for url in urls}
        for future in concurrent.futures.as_completed(futures):
            try:
                result = future.result()
                if result:
                    found.append(result)
            except Exception as exc:
                errors.append((futures[future], str(exc)))
    found.sort()
    image_map.write_text(
        "".join("{}\t{}\t{}\n".format(*row) for row in found), encoding="utf-8"
    )
    print("Captured {} / {} images, {} bytes".format(len(found), len(urls), sum(row[2] for row in found)))
    for url, error in errors:
        print("FAILED {}: {}".format(url, error))


if __name__ == "__main__":
    main()
