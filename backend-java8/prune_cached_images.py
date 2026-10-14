#!/usr/bin/env python3
"""Keep a small, useful image sample while retaining all captured API JSON."""

import argparse
import json
import re
import urllib.parse
from pathlib import Path

from capture_public_images import urls_in


ROOT = Path(__file__).resolve().parent.parent
FIXTURES = ROOT / "backend-java8" / "fixtures"
MINIAPP = ROOT / "runnable-miniapp"
ASSETS = MINIAPP / "static" / "captured"
IMAGE_RE = re.compile(r"/static/captured/[0-9a-f]{16}\.(?:png|jpg|jpeg|gif|webp)")
BULK_PATHS = {
    "/base/app/v1/scenicSpot",
    "/base/app/v1/scenicSpot/getAppScenicSpotDetail",
    "/base/app/v1/scenicSpot/getAppUpgradeScenicSpot",
    "/base/app/v1/scenicSpot/getPicVideoAbout",
    "/product/app/v1/item/getScenicItemList",
    "/base/app/v1/evaluation/getEvaluation",
    "/base/app/v1/contentRanking/selectRankingPage",
    "/base/app/v1/contentRanking/selectRankingDetails",
}


def query(row):
    return urllib.parse.parse_qs(row["query"], keep_blank_values=True)


def response(row):
    return json.loads((FIXTURES / row["file"]).read_text(encoding="utf-8"))


def first_urls(value, limit=20):
    return list(dict.fromkeys(urls_in(value)))[:limit]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true", help="delete unneeded files and rewrite the image map")
    args = parser.parse_args()
    index = json.loads((FIXTURES / "index.json").read_text(encoding="utf-8"))
    rows = [line.split("\t") for line in (FIXTURES / "image-map.tsv").read_text(encoding="utf-8").splitlines()]
    mapped = {url: local for url, local, _size in rows}
    kept_paths = set()
    for file in MINIAPP.rglob("*"):
        if file.suffix in (".wxml", ".wxss", ".js") and file.name != "captured-image-map.js":
            kept_paths.update(IMAGE_RE.findall(file.read_text(encoding="utf-8", errors="ignore")))

    keep_urls = set()
    scenic_ids = set()
    ranking_ids = set()
    for row in index:
        path = row["path"]
        params = query(row)
        page = params.get("current", ["1"])[0]
        if path == "/base/app/v1/scenicSpot" and page == "1":
            payload = response(row)
            cards = payload["data"]["scenicSpotVoList"]
            if cards:
                scenic_ids.add(str(cards[0]["scenicId"]))
            keep_urls.update(first_urls(payload))
            keep_urls.update(card["mainPicture"] for card in cards if card.get("mainPicture"))
        elif path == "/base/app/v1/contentRanking/selectRankingPage" and page == "1":
            payload = response(row)
            keep_urls.update(first_urls(payload))
            for card in payload["data"]["records"]:
                ranking_ids.add(str(card["id"]))
                if card.get("rankingMainPictureUrl"):
                    keep_urls.add(card["rankingMainPictureUrl"])
                for item in card.get("rankingItemList", [])[:3]:
                    if item.get("originUrl"):
                        keep_urls.add(item["originUrl"])
        elif path not in BULK_PATHS:
            keep_urls.update(first_urls(response(row)))

    for row in index:
        path = row["path"]
        params = query(row)
        if path == "/base/app/v1/contentRanking/selectRankingDetails":
            if params.get("contentId", [""])[0] in ranking_ids and params.get("current", [""])[0] == "1":
                keep_urls.update(first_urls(response(row), 10))
        elif path in BULK_PATHS and path not in ("/base/app/v1/scenicSpot", "/base/app/v1/contentRanking/selectRankingPage"):
            scenic_id = params.get("scenicId", params.get("id", [""]))[0]
            if scenic_id in scenic_ids:
                keep_urls.update(first_urls(response(row), 10))

    kept_paths.update(mapped[url] for url in keep_urls if url in mapped)
    files = [file for file in ASSETS.iterdir() if file.is_file()]
    remove = [file for file in files if "/static/captured/" + file.name not in kept_paths]
    kept = [file for file in files if file not in remove]
    print("Keeping {} images ({:.1f} MiB); removing {} images ({:.1f} MiB)".format(
        len(kept), sum(f.stat().st_size for f in kept) / 1048576,
        len(remove), sum(f.stat().st_size for f in remove) / 1048576))
    if args.apply:
        for file in remove:
            file.unlink()
        retained = [row for row in rows if row[1] in kept_paths and (MINIAPP / row[1].lstrip("/")).is_file()]
        (FIXTURES / "image-map.tsv").write_text("".join("\t".join(row) + "\n" for row in retained), encoding="utf-8")
        print("Updated image map: {} entries".format(len(retained)))


if __name__ == "__main__":
    main()
