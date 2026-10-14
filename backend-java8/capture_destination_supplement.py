#!/usr/bin/env python3
"""Record introduction, weather, and media GET responses for captured scenic cards."""

import concurrent.futures
import json
import sys
import urllib.parse

from capture_destination_details import read_or_capture, capture_image_with_retry
from capture_destination_first_pages import FIXTURES, SCENIC_PATH
from capture_public_images import urls_in


INTRO = SCENIC_PATH + "/getAppUpgradeScenicSpot"
MEDIA = SCENIC_PATH + "/getPicVideoAbout"
WEATHER = "/base/v1/common/get3DayWeather"


def main():
    index_path = FIXTURES / "index.json"
    records = {
        "|".join((row["method"], row["path"], row["query"])): row
        for row in json.loads(index_path.read_text(encoding="utf-8"))
    }
    cards = {}
    for row in records.values():
        if row["method"] == "GET" and row["path"] == SCENIC_PATH:
            payload = json.loads((FIXTURES / row["file"]).read_text(encoding="utf-8"))
            for card in payload["data"]["scenicSpotVoList"]:
                cards[str(card["scenicId"])] = card

    added = 0
    urls = set()
    city_ids = set()
    for count, scenic_id in enumerate(cards, 1):
        intro, fresh = read_or_capture(records, INTRO, {"scenicId": scenic_id})
        added += fresh
        urls.update(urls_in(intro))
        city_id = (intro.get("data") or {}).get("cityId")
        if city_id:
            city_ids.add(str(city_id))
        for resource_type in (1, 2):
            media, fresh = read_or_capture(records, MEDIA, {
                "id": scenic_id, "resourcesType": resource_type, "type": 0,
            })
            added += fresh
            urls.update(urls_in(media))
        print("{}/{} {} introduction and media".format(count, len(cards), scenic_id), flush=True)

    for city_id in sorted(city_ids):
        weather, fresh = read_or_capture(records, WEATHER, {"id": city_id})
        added += fresh
        urls.update(urls_in(weather))

    ordered = sorted(records.values(), key=lambda row: (row["path"], row["query"], row["method"]))
    index_path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (FIXTURES / "index.tsv").write_text("".join(
        "\t".join(str(row[key]) for key in ("id", "method", "path", "query", "file")) + "\n"
        for row in ordered
    ), encoding="utf-8")
    print("Saved {} new GET fixtures; {} scenic cards; {} weather cities".format(
        added, len(cards), len(city_ids)), flush=True)

    image_map = FIXTURES / "image-map.tsv"
    mapped = {line.split("\t")[0]: line for line in image_map.read_text(encoding="utf-8").splitlines()}
    pending = sorted(url for url in urls if url not in mapped and
                     urllib.parse.urlparse(url).hostname == "eshopfile.zhiyousx.com" and
                     urllib.parse.urlparse(url).path.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".gif")))
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        futures = {pool.submit(capture_image_with_retry, url): url for url in pending}
        for number, future in enumerate(concurrent.futures.as_completed(futures), 1):
            try:
                result = future.result()
                if result:
                    url, local_path, size = result
                    mapped[url] = "{}\t{}\t{}".format(url, local_path, size)
            except Exception as error:
                errors.append((futures[future], str(error)))
            if number % 100 == 0 or number == len(pending):
                print("Images {}/{}; errors {}".format(number, len(pending), len(errors)), flush=True)
    image_map.write_text("\n".join(mapped[url] for url in sorted(mapped)) + "\n", encoding="utf-8")
    print("Added {} local images".format(len(pending) - len(errors)), flush=True)
    for url, error in errors:
        print("FAILED {}: {}".format(url, error), flush=True)
    if errors:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
