#!/usr/bin/env python3
"""Replace captured WXML images and inline small WXSS background assets."""
import base64
from pathlib import Path
import re

root = Path(__file__).resolve().parent
project = root.parent / "runnable-miniapp"
mapping = {}
for line in (root / "fixtures/image-map.tsv").read_text(encoding="utf-8").splitlines():
    url, local, _size = line.split("\t")
    mapping[url] = local

changed = 0
replaced = 0
for path in project.rglob("*"):
    if path.suffix not in (".wxml", ".wxss"):
        continue
    source = path.read_text(encoding="utf-8")
    updated = source
    for url, local in mapping.items():
        if url in updated:
            replaced += updated.count(url)
            updated = updated.replace(url, local)
    if path.suffix == ".wxss":
        # WXSS cannot load background-image from a mini-program local file.
        # The captured background in this project is a small PNG (under 3 KiB).
        def inline_captured(match):
            relative = match.group(1)
            asset = project / relative.lstrip("/")
            if not asset.is_file() or asset.stat().st_size > 16 * 1024:
                return match.group(0)
            mime = "image/png" if asset.suffix.lower() == ".png" else "image/jpeg"
            return "url(data:{};base64,{})".format(
                mime, base64.b64encode(asset.read_bytes()).decode("ascii"))
        updated = re.sub(r"url\(['\"]?(/static/captured/[^)'\"]+)['\"]?\)", inline_captured, updated)
    if updated != source:
        path.write_text(updated, encoding="utf-8")
        changed += 1
print("Localized {} hardcoded image references in {} WXML/WXSS files".format(replaced, changed))
