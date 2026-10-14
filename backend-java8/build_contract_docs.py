#!/usr/bin/env python3
"""Regenerate the observed API field reference from fixture files."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FIXTURES = ROOT / "fixtures"
records = json.loads((FIXTURES / "index.json").read_text(encoding="utf-8"))
lines = [
    "# 实测接口与字段",
    "",
    "以下字段来自微信开发者工具抓包和原服务公开 GET 实测响应。接口外层通常为 `code`、`data`、`msg`、`success`。线路资源日期与票种是 2026-10-13 的时点样本，库存和价格会变化。",
    "",
    "| 方法 | 路径与查询 | `data` 结构 | 已观察字段 |",
    "| --- | --- | --- | --- |",
]
for record in records:
    payload = json.loads((FIXTURES / record["file"]).read_text(encoding="utf-8"))
    data = payload.get("data")
    shape = "对象" if isinstance(data, dict) else "数组" if isinstance(data, list) else "null" if data is None else type(data).__name__
    keys = "、".join("`{}`".format(key) for key in record["dataKeys"]) or "—"
    url = record["path"] + ("?" + record["query"] if record["query"] else "")
    lines.append("| `{}` | `{}` | {} | {} |".format(record["method"], url, shape, keys))
lines += ["", "## 说明", "", "- 查询参数只覆盖已实测组合；日期和库存样本可能过期，后续页码需要继续抓取。", "- 登录 code、Cookie、令牌、请求头及原始 HAR 均未存储在项目中。", "- 详情页中的记录字段与图片 URL 可在对应 JSON 样本中检查。", ""]
(ROOT / "接口字段.md").write_text("\n".join(lines), encoding="utf-8")
print("Documented {} observed routes".format(len(records)))
