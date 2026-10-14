#!/usr/bin/env python3
"""Capture public detail data for the first visible scenic cards in each city."""

import argparse
import concurrent.futures
import hashlib
import json
import sys
import time
import urllib.parse
from datetime import datetime, timezone

from capture_destination_first_pages import FIXTURES, SCENIC_PATH, get_public_json
from capture_public_images import capture, urls_in


DETAIL_PATH = SCENIC_PATH + "/getAppScenicSpotDetail"
TICKET_PATH = "/product/app/v1/item/getScenicItemList"
EVALUATION_PATH = "/base/app/v1/evaluation/getEvaluation"


def fixture_key(path, query):
    return "GET|{}|{}".format(path, query)


def capture_image_with_retry(url):
    for attempt in range(3):
        try:
            return capture(url, timeout=40)
        except Exception:
            if attempt == 2:
                raise
            time.sleep(1.0 * (attempt + 1))


def read_or_capture(records, path, params):
    query = urllib.parse.urlencode(sorted(params.items()))
    key = fixture_key(path, query)
    if key in records:
        row = records[key]
        return json.loads((FIXTURES / row["file"]).read_text(encoding="utf-8")), False
    last_error = None
    for attempt in range(3):
        try:
            payload = get_public_json(path, query)
            time.sleep(0.1)
            break
        except Exception as error:
            last_error = error
            if attempt < 2:
                time.sleep(1.0 * (attempt + 1))
    else:
        raise last_error
    fixture_id = hashlib.sha256(key.encode()).hexdigest()[:16]
    filename = fixture_id + ".json"
    (FIXTURES / filename).write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    records[key] = {
        "id": fixture_id,
        "method": "GET",
        "path": path,
        "query": query,
        "file": filename,
        "status": 200,
        "dataKeys": list(payload["data"]) if isinstance(payload.get("data"), dict) else [],
        "capturedAt": datetime.now(timezone.utc).isoformat(),
    }
    return payload, True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--per-city", type=int, default=1, help="cards to capture on each page per city (default: 1)")
    parser.add_argument("--pages", type=int, default=1, help="number of already captured list pages per city")
    args = parser.parse_args()
    if not 1 <= args.per_city <= 10:
        parser.error("--per-city must be between 1 and 10")
    if args.pages < 1:
        parser.error("--pages must be positive")

    index_path = FIXTURES / "index.json"
    index = json.loads(index_path.read_text(encoding="utf-8"))
    records = {"|".join((row["method"], row["path"], row["query"])): row for row in index}
    city_row = next(row for row in index if row["path"] == "/base/app/v1/city/queryCityList")
    cities = json.loads((FIXTURES / city_row["file"]).read_text(encoding="utf-8"))["data"]
    all_urls = set()
    added = 0
    seen_ids = set()

    for city in cities:
        for page in range(1, args.pages + 1):
            list_query = urllib.parse.urlencode(sorted({"cityId": city["id"], "current": page, "size": 10}.items()))
            list_row = records.get(fixture_key(SCENIC_PATH, list_query))
            if not list_row:
                raise ValueError("Missing city list fixture: {} page {}".format(city["cityName"], page))
            cards = json.loads((FIXTURES / list_row["file"]).read_text(encoding="utf-8"))["data"]["scenicSpotVoList"]
            for card in cards[:args.per_city]:
                scenic_id = str(card["scenicId"])
                if scenic_id in seen_ids:
                    continue
                seen_ids.add(scenic_id)
                detail, was_added = read_or_capture(records, DETAIL_PATH, {"scenicId": scenic_id})
                added += was_added
                ticket, was_added = read_or_capture(records, TICKET_PATH, {"scenicId": scenic_id})
                added += was_added
                if detail.get("data", {}).get("evaluation") == 1:
                    evaluation, was_added = read_or_capture(records, EVALUATION_PATH, {"scenicSpotId": scenic_id})
                    added += was_added
                    all_urls.update(urls_in(evaluation))
                all_urls.update(urls_in(detail))
                all_urls.update(urls_in(ticket))
                print("{} page {}: {} ({})".format(city["cityName"], page, card["scenicName"], scenic_id), flush=True)

    ordered = sorted(records.values(), key=lambda row: (row["path"], row["query"]))
    index_path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (FIXTURES / "index.tsv").write_text("".join(
        "\t".join(str(row[key]) for key in ("id", "method", "path", "query", "file")) + "\n"
        for row in ordered
    ), encoding="utf-8")

    image_map = FIXTURES / "image-map.tsv"
    mapped = {line.split("\t", 1)[0]: line for line in image_map.read_text(encoding="utf-8").splitlines()}
    pending = sorted(url for url in all_urls - set(mapped)
                     if urllib.parse.urlparse(url).hostname == "eshopfile.zhiyousx.com"
                     and urllib.parse.urlparse(url).path.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".gif")))
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        futures = {pool.submit(capture_image_with_retry, url): url for url in pending}
        for future in concurrent.futures.as_completed(futures):
            try:
                result = future.result()
                if result:
                    url, local_path, size = result
                    mapped[url] = "{}\t{}\t{}".format(url, local_path, size)
            except Exception as error:
                errors.append((futures[future], str(error)))
    image_map.write_text("".join(mapped[url] + "\n" for url in sorted(mapped)), encoding="utf-8")
    print("Added {} public GET fixtures; cached {} / {} new images".format(
        added, len(pending) - len(errors), len(pending)))
    for url, error in errors:
        print("IMAGE FAILED {}: {}".format(url, error), file=sys.stderr)
    if errors:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
