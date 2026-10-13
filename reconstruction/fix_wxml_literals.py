#!/usr/bin/env python3
"""Wrap extracted object literal bindings in valid WXML expression braces."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "runnable-miniapp"
PATTERN = re.compile(r'([\w:-]+)="\{\{([A-Za-z_$][\w$]*:[^{}]*?)\}\}"')


def fix(match):
    return match.group(1) + '="{{ {' + match.group(2) + '} }}"'


count = 0
for path in ROOT.rglob("*.wxml"):
    original = path.read_text(encoding="utf-8")
    updated, n = PATTERN.subn(fix, original)
    if n:
        path.write_text(updated, encoding="utf-8")
        count += n
        print("{}: {}".format(path.relative_to(ROOT), n))
print("Fixed {} object-literal attributes".format(count))
