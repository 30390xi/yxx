#!/usr/bin/env python3
"""Build a static inventory from the supplied compiled WeChat mini program.

This does not execute the target or make network requests. The output records
literal request paths and preserves links back to the compiled code.
"""
import csv
import json
import re
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1] / "wxf2cca76ae0520e33 2"
OUT = Path(__file__).resolve().parent
REQUEST = re.compile(
    r"\b(?:dataRequestNoLoading|dataRequestYesLoading|"
    r"getRequestNoLoading|getRequestYesLoading|getRequest)\s*\(\s*"
    r"['\"](GET|POST|PUT|DELETE|PATCH)['\"]\s*,\s*['\"]([^'\"]+)['\"]",
    re.I,
)
MODULE = re.compile(r"(?m)^    ([\"']?[a-zA-Z0-9]+[\"']?): function\([^\n]*\) \{")


def is_business_file(path):
    parts = path.relative_to(ROOT).parts
    return not (
        path.name.startswith("chunk_")
        or parts[0] in {"_commons", "wxlive-components", "uview-ui", "@babel", "miniprogram_dist", "uni_modules"}
    )


def main():
    config = json.loads((ROOT / "app.json").read_text())
    pages = [("main", p) for p in config["pages"]]
    for pack in config["subPackages"]:
        pages.extend((pack["root"].rstrip("/"), pack["root"] + p) for p in pack["pages"])
    with (OUT / "pages.csv").open("w", newline="") as file:
        writer = csv.writer(file)
        writer.writerow(["subpackage", "page", "js", "wxml", "wxss", "json"])
        for package, page in pages:
            writer.writerow([package, page] + [int((ROOT / (page + "." + ext)).exists()) for ext in ("js", "wxml", "wxss", "json")])

    requests = []
    for path in ROOT.rglob("*.js"):
        if not is_business_file(path):
            continue
        source = path.read_text(errors="replace")
        for match in REQUEST.finditer(source):
            requests.append({
                "method": match.group(1).upper(),
                "path_prefix": match.group(2),
                "source": str(path.relative_to(ROOT)),
                "line": source.count("\n", 0, match.start()) + 1,
                "has_dynamic_suffix": bool(re.match(r"\s*(?:\.concat\(|\+)", source[match.end():])),
            })
    requests.sort(key=lambda row: (row["path_prefix"], row["method"], row["source"], row["line"]))
    with (OUT / "requests.csv").open("w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=["method", "path_prefix", "source", "line", "has_dynamic_suffix"])
        writer.writeheader()
        writer.writerows(requests)

    # webpack modules are already formatted as sibling definitions in this
    # package. Save the best page script candidate for inspection. It remains
    # compiled JavaScript, not the original Vue SFC source.
    extracted = []
    for _, page in pages:
        path = ROOT / (page + ".js")
        source = path.read_text(errors="replace")
        matches = list(MODULE.finditer(source))
        candidates = []
        for index, match in enumerate(matches):
            end = matches[index + 1].start() if index + 1 < len(matches) else len(source)
            section = source[match.start():end]
            score = sum((3 if token == "data: function" else 2) for token in ("data: function", "methods:", "onLoad:", "onShow:", "computed:") if token in section)
            if "__esModule" in section:
                score += 2
            if score:
                candidates.append((score, match, section))
        if not candidates:
            continue
        score, match, section = max(candidates, key=lambda item: item[0])
        if section.rstrip().endswith("]);"):
            marker = section.rfind("\n  },\n  [")
            if marker >= 0:
                section = section[:marker]
        target = OUT / "page_modules" / (page + ".js")
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(
            "// Extracted from " + str(path.relative_to(ROOT)) + "; webpack module " + match.group(1) + ".\n"
            "// Compiled code for analysis; not an original source file.\n"
            + "module.exports = {\n" + section.rstrip() + "\n};\n"
        )
        extracted.append({"page": page, "module": match.group(1), "score": score, "source_line": source.count("\n", 0, match.start()) + 1})
    (OUT / "page_modules.json").write_text(json.dumps(extracted, ensure_ascii=False, indent=2) + "\n")
    summary = {
        "declared_pages": len(pages),
        "subpackages": len(config["subPackages"]),
        "literal_request_calls": len(requests),
        "unique_method_path_prefixes": len({(r["method"], r["path_prefix"]) for r in requests}),
        "request_domains": dict(Counter(r["path_prefix"].split("/")[0] for r in requests)),
        "extracted_page_modules": len(extracted),
        "missing_page_wxss": sum(not (ROOT / (p + ".wxss")).exists() for _, p in pages),
    }
    (OUT / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
