#!/usr/bin/env python3
"""Cache public CDN images hardcoded in the recovered WXML views."""

import concurrent.futures
import re
import time
import urllib.error
from pathlib import Path

from capture_public_images import capture


ROOT = Path(__file__).resolve().parent
PROJECT = ROOT.parent / "runnable-miniapp"
IMAGE_MAP = ROOT / "fixtures/image-map.tsv"
URL_PATTERN = re.compile(
    r"https?://eshopfile\.zhiyousx\.com/[^\s\"'<>]+?\.(?:jpg|jpeg|png|webp|gif)",
    re.IGNORECASE,
)


def cache_one(url):
    for attempt in range(3):
        try:
            return capture(url, timeout=40, max_bytes=20 * 1024 * 1024), None
        except urllib.error.HTTPError as error:
            return None, "HTTP {}".format(error.code)
        except Exception as error:
            if attempt == 2:
                return None, str(error)
            time.sleep(attempt + 1)


def main():
    urls = set()
    for path in PROJECT.rglob("*.wxml"):
        urls.update(URL_PATTERN.findall(path.read_text(encoding="utf-8", errors="ignore")))
    mapped = {row.split("\t")[0]: row for row in IMAGE_MAP.read_text(encoding="utf-8").splitlines()}
    pending = sorted(urls - mapped.keys())
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        jobs = {pool.submit(cache_one, url): url for url in pending}
        for count, job in enumerate(concurrent.futures.as_completed(jobs), 1):
            result, error = job.result()
            if result:
                url, local_path, size = result
                mapped[url] = "{}\t{}\t{}".format(url, local_path, size)
            else:
                failures.append((jobs[job], error))
            if count % 50 == 0 or count == len(pending):
                IMAGE_MAP.write_text("\n".join(mapped[url] for url in sorted(mapped)) + "\n", encoding="utf-8")
                print("WXML images {}/{}; unavailable {}".format(count, len(pending), len(failures)), flush=True)
    for url, error in failures:
        print("UNAVAILABLE {}: {}".format(url, error), flush=True)
    print("Mapped {} public images total".format(len(mapped)), flush=True)


if __name__ == "__main__":
    main()
