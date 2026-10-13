#!/usr/bin/env python3
"""Extract public API responses from a DevTools HAR; discard request credentials."""
import hashlib
import json
import sys
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlparse


def main():
    source = Path(sys.argv[1])
    output = Path(__file__).resolve().parent / "fixtures"
    output.mkdir(exist_ok=True)
    har = json.loads(source.read_text(encoding="utf-8"))
    index_path = output / "index.json"
    existing = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else []
    records = {"|".join((r["method"], r["path"], r["query"])): r for r in existing}
    for entry in har["log"]["entries"]:
        request = entry["request"]
        url = urlparse(request["url"])
        if url.hostname != "eshopapi.zhiyousx.com":
            continue
        if not url.path.startswith(("/base/app/", "/product/app/")):
            continue
        response = entry["response"]
        if response["status"] != 200:
            continue
        content = response.get("content", {})
        if "json" not in content.get("mimeType", "") or "text" not in content:
            continue
        payload = json.loads(content["text"])
        query = urlencode(sorted(parse_qsl(url.query, keep_blank_values=True)))
        method = request["method"].upper()
        key = "|".join((method, url.path, query))
        fixture_id = hashlib.sha256(key.encode()).hexdigest()[:16]
        filename = fixture_id + ".json"
        (output / filename).write_text(
            json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        records[key] = {
            "id": fixture_id,
            "method": method,
            "path": url.path,
            "query": query,
            "file": filename,
            "status": response["status"],
            "dataKeys": list(payload.get("data", {}).keys()) if isinstance(payload.get("data"), dict) else [],
        }
    index = sorted(records.values(), key=lambda x: (x["path"], x["query"]))
    (output / "index.json").write_text(
        json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (output / "index.tsv").write_text(
        "".join("\t".join(r[k] for k in ("id", "method", "path", "query", "file")) + "\n" for r in index),
        encoding="utf-8",
    )
    print("Stored {} public API fixtures ({} previously indexed)".format(len(index), len(existing)))


if __name__ == "__main__":
    main()
