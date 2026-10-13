#!/usr/bin/env python3
"""Generate a small runtime mapper for previously captured image URLs."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent
mapping = {}
for line in (root / "fixtures/image-map.tsv").read_text(encoding="utf-8").splitlines():
    url, local_path, _size = line.split("\t")
    mapping[url] = local_path
source = ("// Generated from captured public API image URLs.\n"
          "var images = " + json.dumps(mapping, ensure_ascii=False, separators=(",", ":")) + ";\n"
          "function localize(value) {\n"
          "  if (typeof value === 'string') return images[value] || value;\n"
          "  if (Array.isArray(value)) { for (var i=0;i<value.length;i++) value[i]=localize(value[i]); return value; }\n"
          "  if (value && typeof value === 'object') { for (var key in value) if (Object.prototype.hasOwnProperty.call(value,key)) value[key]=localize(value[key]); }\n"
          "  return value;\n"
          "}\n"
          "module.exports = { localize: localize, images: images };\n")
destination = root.parent / "runnable-miniapp/common/captured-image-map.js"
destination.write_text(source, encoding="utf-8")
print("Generated {} mappings in {}".format(len(mapping), destination))
