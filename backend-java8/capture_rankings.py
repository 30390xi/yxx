#!/usr/bin/env python3
"""Record the ranking tab's public list and detail POST responses."""

import concurrent.futures
import argparse
import hashlib
import json
import math
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone

from capture_destination_first_pages import API, FIXTURES
from capture_destination_details import capture_image_with_retry
from capture_public_images import urls_in


LIST_PATH = "/base/app/v1/contentRanking/selectRankingPage"
DETAIL_PATH = "/base/app/v1/contentRanking/selectRankingDetails"


def capture_post(records, path, params):
    query = urllib.parse.urlencode(sorted(params.items()))
    key = "POST|{}|{}".format(path, query)
    if key in records:
        row = records[key]
        return json.loads((FIXTURES / row["file"]).read_text(encoding="utf-8")), False
    request = urllib.request.Request(
        API + path + "?" + query, data=b"",
        headers={"version": "1.0.5", "product": "Wxmp", "Content-Type": "application/json"},
        method="POST",
    )
    last_error = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                payload = json.load(response)
            if payload.get("code") != 1 or payload.get("success") is not True:
                raise ValueError("Public ranking API rejected {}?{}: {}".format(path, query, payload.get("msg")))
            break
        except Exception as error:
            last_error = error
            if attempt < 2:
                time.sleep(attempt + 1)
    else:
        raise last_error
    fixture_id = hashlib.sha256(key.encode()).hexdigest()[:16]
    filename = fixture_id + ".json"
    (FIXTURES / filename).write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    records[key] = {
        "id": fixture_id, "method": "POST", "path": path, "query": query,
        "file": filename, "status": 200,
        "dataKeys": list(payload["data"]) if isinstance(payload.get("data"), dict) else [],
        "capturedAt": datetime.now(timezone.utc).isoformat(),
    }
    return payload, True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--images", action="store_true", help="also cache every image in the ranking responses")
    args = parser.parse_args()
    index_path = FIXTURES / "index.json"
    records = {
        "|".join((row["method"], row["path"], row["query"])): row
        for row in json.loads(index_path.read_text(encoding="utf-8"))
    }
    ranking_ids = set()
    urls = set()
    added = 0
    for ranking_class in ("", "1", "2", "0"):
        page = 1
        total_pages = 1
        while page <= total_pages:
            payload, fresh = capture_post(records, LIST_PATH, {
                "current": page, "size": 10, "rankingClass": ranking_class,
            })
            added += fresh
            urls.update(urls_in(payload))
            items = payload["data"]["records"]
            ranking_ids.update(str(item["id"]) for item in items)
            total_pages = math.ceil(float(payload["data"].get("total") or 0) / 10)
            print("Ranking class {!r} page {}: {} records".format(ranking_class, page, len(items)), flush=True)
            page += 1

    for count, ranking_id in enumerate(sorted(ranking_ids), 1):
        for page in (1, 2):
            payload, fresh = capture_post(records, DETAIL_PATH, {
                "contentId": ranking_id, "size": 10, "current": page,
            })
            added += fresh
            urls.update(urls_in(payload))
        if count % 10 == 0 or count == len(ranking_ids):
            print("Ranking details {}/{}".format(count, len(ranking_ids)), flush=True)

    ordered = sorted(records.values(), key=lambda row: (row["path"], row["query"], row["method"]))
    index_path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (FIXTURES / "index.tsv").write_text("".join(
        "\t".join(str(row[key]) for key in ("id", "method", "path", "query", "file")) + "\n"
        for row in ordered
    ), encoding="utf-8")
    print("Saved {} new POST fixtures for {} ranking IDs".format(added, len(ranking_ids)), flush=True)

    if not args.images:
        print("Skipped image downloads; pass --images to cache them", flush=True)
        return 0

    image_map = FIXTURES / "image-map.tsv"
    mapped = {line.split("\t")[0]: line for line in image_map.read_text(encoding="utf-8").splitlines()}
    pending = sorted(url for url in urls if url not in mapped and
                     urllib.parse.urlparse(url).hostname == "eshopfile.zhiyousx.com" and
                     urllib.parse.urlparse(url).path.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".gif")))
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        jobs = {pool.submit(capture_image_with_retry, url): url for url in pending}
        for count, job in enumerate(concurrent.futures.as_completed(jobs), 1):
            try:
                result = job.result()
                if result:
                    url, local_path, size = result
                    mapped[url] = "{}\t{}\t{}".format(url, local_path, size)
            except Exception as error:
                failures.append((jobs[job], str(error)))
            if count % 50 == 0 or count == len(pending):
                image_map.write_text("\n".join(mapped[url] for url in sorted(mapped)) + "\n", encoding="utf-8")
                print("Ranking images {}/{}; unavailable {}".format(count, len(pending), len(failures)), flush=True)
    for url, error in failures:
        print("UNAVAILABLE {}: {}".format(url, error), flush=True)
    return 0 if not failures else 1


if __name__ == "__main__":
    sys.exit(main())
