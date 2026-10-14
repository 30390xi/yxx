#!/usr/bin/env python3
"""Record the public destination tab's first N pages for each observed city.

Only the city header and visible scenic card images are cached. The original
API response is retained so fields remain inspectable in the fixture backend.
"""
import argparse
import concurrent.futures
import hashlib
import json
import sys
import urllib.parse
import urllib.request
from pathlib import Path

from capture_public_images import capture


ROOT = Path(__file__).resolve().parent
FIXTURES = ROOT / "fixtures"
API = "https://eshopapi.zhiyousx.com"
SCENIC_PATH = "/base/app/v1/scenicSpot"


def get_public_json(path, query):
    url = API + path + ("?" + query if query else "")
    request = urllib.request.Request(url, headers={"version": "1.0.5", "product": "Wxmp"})
    with urllib.request.urlopen(request, timeout=20) as response:
        if response.status != 200 or "json" not in response.headers.get("Content-Type", ""):
            raise ValueError("Unexpected response from " + path)
        payload = json.load(response)
    if payload.get("code") != 1 or payload.get("success") is not True:
        raise ValueError("Public API rejected " + path + ": " + str(payload.get("msg")))
    return payload


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pages", type=int, default=1, help="number of first pages per city (default: 1)")
    args = parser.parse_args()
    if args.pages < 1:
        parser.error("--pages must be positive")
    index_path = FIXTURES / "index.json"
    index = json.loads(index_path.read_text(encoding="utf-8"))
    records = {"|".join((r["method"], r["path"], r["query"])): r for r in index}
    city_record = next(r for r in index if r["method"] == "GET" and r["path"] == "/base/app/v1/city/queryCityList")
    cities = json.loads((FIXTURES / city_record["file"]).read_text(encoding="utf-8"))["data"]
    if not isinstance(cities, list) or not cities:
        raise ValueError("City fixture is empty")

    visible_urls = set()
    added = 0
    for city in cities:
        if city.get("cityPic"):
            visible_urls.add(city["cityPic"])
        seen_scenic_ids = set()
        for page in range(1, args.pages + 1):
            query = urllib.parse.urlencode(sorted({"cityId": city["id"], "current": page, "size": 10}.items()))
            key = "GET|" + SCENIC_PATH + "|" + query
            if key in records:
                payload = json.loads((FIXTURES / records[key]["file"]).read_text(encoding="utf-8"))
            else:
                payload = get_public_json(SCENIC_PATH, query)
                scenic = payload.get("data", {}).get("scenicSpotVoList")
                if not isinstance(scenic, list):
                    raise ValueError("Unexpected scenic list for " + city["cityName"])
                fixture_id = hashlib.sha256(key.encode()).hexdigest()[:16]
                filename = fixture_id + ".json"
                (FIXTURES / filename).write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
                records[key] = {
                    "id": fixture_id, "method": "GET", "path": SCENIC_PATH,
                    "query": query, "file": filename, "status": 200,
                    "dataKeys": list(payload["data"]),
                }
                added += 1
            scenic = payload.get("data", {}).get("scenicSpotVoList")
            if not isinstance(scenic, list):
                raise ValueError("Unexpected scenic list for " + city["cityName"])
            ids = {item["scenicId"] for item in scenic}
            if ids & seen_scenic_ids:
                raise ValueError("Repeated scenic card across pages for " + city["cityName"])
            seen_scenic_ids.update(ids)
            for item in scenic:
                images = item.get("pictureResources") or []
                if images and images[0].get("resourcesUrl"):
                    visible_urls.add(images[0]["resourcesUrl"])
            print("{} page {}: {} visible scenic cards".format(city["cityName"], page, len(scenic)))
            if page * 10 >= payload["data"]["total"] or not scenic:
                break

    ordered = sorted(records.values(), key=lambda row: (row["path"], row["query"]))
    index_path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (FIXTURES / "index.tsv").write_text("".join(
        "\t".join(str(row[key]) for key in ("id", "method", "path", "query", "file")) + "\n"
        for row in ordered
    ), encoding="utf-8")

    image_map = FIXTURES / "image-map.tsv"
    mapped = {line.split("\t")[0]: line for line in image_map.read_text(encoding="utf-8").splitlines()}
    pending = sorted(visible_urls - set(mapped))
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(capture, url): url for url in pending}
        for future in concurrent.futures.as_completed(futures):
            try:
                result = future.result()
                if result:
                    url, local_path, size = result
                    mapped[url] = "{}\t{}\t{}".format(url, local_path, size)
            except Exception as error:
                errors.append((futures[future], str(error)))
    image_map.write_text("".join(mapped[url] + "\n" for url in sorted(mapped)), encoding="utf-8")
    print("Added {} public GET fixtures; cached {} / {} new visible images".format(
        added, len(pending) - len(errors), len(pending)))
    for url, error in errors:
        print("IMAGE FAILED {}: {}".format(url, error), file=sys.stderr)


if __name__ == "__main__":
    main()
