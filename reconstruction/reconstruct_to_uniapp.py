#!/usr/bin/env python3
"""Uni-app Mini Program Reconstructor (Method B & C)

Reconstructs a full uni-app / Vue source code project from compiled/unpacked
WeChat Mini Program files and extracted page modules.
"""

import collections
import json
import os
import re
import shutil
from pathlib import Path

ROOT_DIR = Path("/Users/xgs/逆向")
SOURCE_MP_DIR = ROOT_DIR / "runnable-miniapp"
PAGE_MODULES_DIR = ROOT_DIR / "reconstruction" / "page_modules"
OUT_DIR = ROOT_DIR / "uniapp-src"


def extract_balanced_object(text, start_pos):
    depth = 0
    in_string = False
    quote_char = ""
    escape = False
    for i in range(start_pos, len(text)):
        ch = text[i]
        if escape:
            escape = False
            continue
        if ch == "\\":
            escape = True
            continue
        if in_string:
            if ch == quote_char:
                in_string = False
            continue
        if ch in ('"', "'", "`"):
            in_string = True
            quote_char = ch
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[start_pos : i + 1]
    return None


def parse_event_opts_to_directives(opts_str, tag_content):
    """Convert uni-app compiled data-event-opts into Vue event directives."""
    opts_clean = opts_str.replace("'", '"')
    try:
        data = json.loads(opts_clean)
    except Exception:
        return []

    event_dict = collections.defaultdict(list)

    for ev in data:
        if not isinstance(ev, list) or len(ev) < 2:
            continue
        ev_name = ev[0]
        is_catch = bool(
            re.search(r"catch:?" + re.escape(ev_name) + r'="[^"]*"', tag_content)
            or ('catchtap=' in tag_content and ev_name == "tap")
        )
        mod = ".stop" if is_catch else ""
        clean_ev = ev_name.lstrip("^").lstrip(":")
        v_name = (
            "@click" + mod
            if clean_ev in ("tap", "click")
            else ("@" + clean_ev + mod)
        )

        handlers = ev[1]
        for h in handlers:
            if not isinstance(h, list) or len(h) == 0:
                continue
            h_name = h[0]

            # 1. Handle __set_model and __set_sync (uni-app compiler helpers for v-model and .sync)
            if h_name in ("__set_model", "__set_sync"):
                if len(h) > 1 and isinstance(h[1], list) and len(h[1]) >= 2:
                    param_table = h[2] if len(h) > 2 else []
                    obj_name = h[1][0]
                    prop_name = h[1][1]
                    if isinstance(obj_name, str) and obj_name.startswith("$") and obj_name[1:].isdigit():
                        idx = int(obj_name[1:])
                        if idx < len(param_table):
                            p = param_table[idx]
                            if isinstance(p, str):
                                p = re.sub(r"\.__\$n(\d+)", r"[\1]", p)
                                p = re.sub(r"\.\$orig\b", "", p)
                                obj_name = p
                    target_var = f"{obj_name}.{prop_name}" if obj_name else prop_name
                    event_dict[v_name].append(f"{target_var} = $event")
                continue

            args = []
            if len(h) > 1 and h[1]:
                arg_specs = h[1]
                param_table = h[2] if len(h) > 2 else []
                for a in arg_specs:
                    if a == "$event":
                        args.append("$event")
                    elif (
                        isinstance(a, str)
                        and a.startswith("$")
                        and a[1:].isdigit()
                    ):
                        idx = int(a[1:])
                        if idx < len(param_table):
                            p = param_table[idx]
                            if isinstance(p, str):
                                p = re.sub(r"\.__\$n(\d+)", r"[\1]", p)
                                p = re.sub(r"\.\$orig\b", "", p)
                                if not p:
                                    args.append("''")
                                else:
                                    args.append(p)
                            elif isinstance(p, list):
                                if len(p) == 1 and isinstance(p[0], list):
                                    arr, _, idx_var = p[0]
                                    args.append(f"{arr}[{idx_var}]")
                                else:
                                    args.append(str(p))
                            else:
                                args.append(str(p))
                    elif isinstance(a, list) and a and a[0] == "o":
                        pairs = []
                        for item in a[1:]:
                            if isinstance(item, list) and len(item) == 2:
                                pairs.append(f"{item[0]}: '{item[1]}'")
                        args.append("{ " + ", ".join(pairs) + " }")
                    elif isinstance(a, str):
                        # Literal string argument: must be quoted with single quotes
                        args.append(f"'{a}'")
                    elif isinstance(a, bool):
                        args.append("true" if a else "false")
                    elif isinstance(a, (int, float)):
                        args.append(str(a))
                    else:
                        args.append("null" if a is None else f"'{str(a)}'")

            arg_str = "(" + ", ".join(args) + ")" if args else "()"
            event_dict[v_name].append(f"{h_name}{arg_str}")

    directives = []
    for v_name, handler_list in event_dict.items():
        unique_handlers = []
        for h_code in handler_list:
            if h_code not in unique_handlers:
                unique_handlers.append(h_code)
        combined = "; ".join(unique_handlers)
        if '"' in combined:
            directives.append(f"{v_name}='{combined}'")
        else:
            directives.append(f'{v_name}="{combined}"')

    return directives


def clean_tag(tag):
    """Clean compiler metadata and convert directives on an open tag."""
    # 1. Event options (data-event-opts)
    m_opts = re.search(
        r'data-event-opts="\{\{(.*?)\}\}"', tag
    )
    if m_opts:
        directives = parse_event_opts_to_directives(m_opts.group(1), tag)
        tag = re.sub(r'\s*data-event-opts="\{\{.*?\}\}"', "", tag)
        tag = re.sub(r'\s*(?:bind|catch):?[a-zA-Z0-9_]+="[^"]*"', "", tag)
        if directives:
            insert_str = " " + " ".join(directives)
            if tag.endswith("/>"):
                tag = tag[:-2] + insert_str + "/>"
            elif tag.endswith(">"):
                tag = tag[:-1] + insert_str + ">"

    # 2. General bind/catch events (only if not already handled by data-event-opts)
    tag = re.sub(r'\bcatchtouchmove="\{\{.*?\}\}"', '@touchmove.stop.prevent=""', tag)
    tag = re.sub(r'\bcatchtouchmove="[^"]*"', '@touchmove.stop.prevent=""', tag)
    tag = re.sub(r'\bbindtap="([^"]+)"', r'@tap="\1"', tag)
    tag = re.sub(r'\bcatchtap="([^"]+)"', r'@tap.stop="\1"', tag)
    tag = re.sub(r'\bbind:?([a-zA-Z0-9_]+)="([^"]+)"', r'@\1="\2"', tag)
    tag = re.sub(r'\bcatch:?([a-zA-Z0-9_]+)="([^"]+)"', r'@\1.stop="\2"', tag)

    # 3. Remove compiler internal attributes
    tag = re.sub(r"\s*data-v-[0-9a-fA-F]+", "", tag)
    tag = re.sub(r'\s*vueId="[^"]*"', "", tag)
    tag = re.sub(r'\s*(?:bind|@):?__l="[^"]*"', "", tag)
    tag = re.sub(r'\s*data-custom-hidden="[^"]*"', "", tag)
    tag = re.sub(r'\s*data-ref="([^"]*)"', r' ref="\1"', tag)

    # 4. wx:for
    m_for = re.search(r'wx:for="\{\{(.*?)\}\}"', tag)
    if m_for:
        list_expr = m_for.group(1).strip()
        m_item = re.search(r'wx:for-item="([^"]+)"', tag)
        item_var = m_item.group(1).strip() if m_item else "item"
        m_index = re.search(r'wx:for-index="([^"]+)"', tag)
        index_var = m_index.group(1).strip() if m_index else "index"

        tag = re.sub(r'\s*wx:for="\{\{.*?\}\}"', "", tag)
        tag = re.sub(r'\s*wx:for-item="[^"]+"', "", tag)
        tag = re.sub(r'\s*wx:for-index="[^"]+"', "", tag)

        for_directive = f'v-for="({item_var}, {index_var}) in {list_expr}"'
        if tag.endswith("/>"):
            tag = tag[:-2] + " " + for_directive + "/>"
        elif tag.endswith(">"):
            tag = tag[:-1] + " " + for_directive + ">"

    # wx:key
    tag = re.sub(r'wx:key="(?:index|\*this)"', ':key="index"', tag)
    tag = re.sub(r'wx:key="([^"]+)"', r':key="\1"', tag)

    # 5. wx:if, wx:elif, wx:else
    tag = re.sub(r'wx:if="\{\{(.*?)\}\}"', r'v-if="\1"', tag)
    tag = re.sub(r'wx:elif="\{\{(.*?)\}\}"', r'v-else-if="\1"', tag)
    tag = re.sub(r"\bwx:else\b", "v-else", tag)

    # 6. Bound attributes like attr="{{ ... }}" -> :attr="..."
    # Matches nested object literals like loadText="{{ {loadmore:'...'} }}"
    def bound_attr(m):
        attr_name = m.group(1)
        expr = m.group(2).strip()
        expr = re.sub(r"\.\$orig\b", "", expr)
        if attr_name in ("v-if", "v-else-if", "v-for", ":key"):
            return f'{attr_name}="{expr}"'
        if attr_name.startswith(":") or attr_name.startswith("@"):
            return f'{attr_name}="{expr}"'
        if '"' in expr:
            return f":{attr_name}='{expr}'"
        return f':{attr_name}="{expr}"'

    tag = re.sub(r'\b([a-zA-Z0-9_\-]+)="\{\{(.*?)\}\}"', bound_attr, tag)

    # Clean double spaces inside tags
    tag = re.sub(r"\s{2,}", " ", tag)
    return tag


def convert_wxml_to_vue_template(wxml_content):
    """Transform full WXML into Vue template syntax using quote-aware tag scanner."""
    i = 0
    n = len(wxml_content)
    output_chars = []
    while i < n:
        if (
            wxml_content[i] == "<"
            and i + 1 < n
            and (wxml_content[i + 1].isalpha() or wxml_content[i + 1] in ("/", "?", "!"))
        ):
            start = i
            i += 1
            in_quote = False
            q_char = ""
            while i < n:
                ch = wxml_content[i]
                if in_quote:
                    if ch == q_char:
                        in_quote = False
                elif ch in ('"', "'"):
                    in_quote = True
                    q_char = ch
                elif ch == ">":
                    tag_str = wxml_content[start : i + 1]
                    if not tag_str.startswith("</") and not tag_str.startswith("<!--"):
                        tag_str = clean_tag(tag_str)
                    output_chars.append(tag_str)
                    break
                i += 1
        else:
            output_chars.append(wxml_content[i])
        i += 1

    res = "".join(output_chars)

    # Clean compiler text interpolation wrappers: {{''+var+''}} -> {{ var }}
    res = re.sub(r"\{\{''\+(.*?)\+''\}\}", r"{{ \1 }}", res)
    # Clean $orig in interpolations: {{ item.$orig.title }} -> {{ item.title }}
    res = re.sub(r"\.\$orig\b", "", res)

    return "<template>\n" + res + "\n</template>\n"


def extract_js_component(page_path):
    """Extract component options object from page_modules or runnable-miniapp."""
    pm_file = PAGE_MODULES_DIR / (page_path + ".js")
    if not pm_file.exists():
        pm_file = SOURCE_MP_DIR / (page_path + ".js")

    if not pm_file.exists():
        return "export default {\n  data() {\n    return {};\n  }\n};\n"

    content = pm_file.read_text(errors="replace")

    # Match component options start
    m = re.search(
        r"(?:(?:var|,)\s*([a-zA-Z0-9_$]+)\s*=\s*)?\{\s*(?:name|mixins|components|data|props|methods|onLoad|onShow|computed|watch|created|mounted)\s*:",
        content,
    )
    if not m:
        return "export default {\n  data() {\n    return {};\n  }\n};\n"

    brace_idx = content.find("{", m.start())
    obj_str = extract_balanced_object(content, brace_idx)
    if not obj_str:
        return "export default {\n  data() {\n    return {};\n  }\n};\n"

    # Normalize obfuscated webpack uni calls: e.g. t.getStorageSync(...) -> uni.getStorageSync(...)
    uni_apis = (
        r"canvasToTempFilePath|chooseImage|createIntersectionObserver|createSelectorQuery|"
        r"getLocation|getMenuButtonBoundingClientRect|getStorageSync|getSystemInfo|"
        r"getSystemInfoSync|getUpdateManager|hideLoading|hideShareMenu|hideToast|"
        r"makePhoneCall|navigateBack|navigateTo|onAppHide|onAppShow|openLocation|"
        r"previewImage|removeStorageSync|requestPayment|requestSubscribeMessage|"
        r"setClipboardData|setNavigationBarColor|setNavigationBarTitle|setStorageSync|"
        r"showActionSheet|showLoading|showModal|showShareMenu|showToast|stopPullDownRefresh|"
        r"pageScrollTo|reLaunch|switchTab|redirectTo|uploadFile|downloadFile|scanCode"
    )
    obj_str = re.sub(rf"\b[a-zA-Z0-9_$]+\.({uni_apis})\b", r"uni.\1", obj_str)

    js_code = (
        "// Reconstructed Vue Component\n"
        + "const t = uni;\n"
        + "export default "
        + obj_str.strip()
        + ";\n"
    )
    return js_code


def convert_wxss_to_vue_style(wxss_content):
    """Clean WXSS and wrap in scoped style tag."""
    if not wxss_content or not wxss_content.strip():
        return ""

    cleaned = wxss_content
    # 1. Remove .data-v-[0-9a-fA-F]+ scoped markers
    cleaned = re.sub(r"\.data-v-[0-9a-fA-F]+", "", cleaned)

    # 2. Replace massive unquoted base64 @font-face that causes PostCSS syntax errors
    cleaned = re.sub(
        r"@font-face\s*\{[^}]*?data:(?:application|font)/[^}]*?\}",
        r"@font-face{font-family:iconfont;src:url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff2?t=1589338239928')format('woff2'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.woff?t=1589338239928')format('woff'),url('https://at.alicdn.com/t/font_1135293_z1315ov8k2t.ttf?t=1589338239928')format('truetype')}",
        cleaned,
    )

    # 3. Ensure all url(...) calls are strictly quoted and protocol-relative // is prefixed with https:
    def fix_all_urls(m):
        val = m.group(1).strip()
        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
            inner = val[1:-1].strip()
            if inner.startswith("//"):
                inner = "https:" + inner
                q = val[0]
                return f"url({q}{inner}{q})"
            return m.group(0)
        val = val.strip('\"\'')
        if val.startswith("//"):
            val = "https:" + val
        return f"url('{val}')"

    cleaned = re.sub(r'url\(([^)]+)\)', fix_all_urls, cleaned)

    return (
        "<style scoped>\n"
        + "/* Reconstructed page stylesheet */\n"
        + cleaned.strip()
        + "\n</style>\n"
    )


def reconstruct_page(page_path, is_subpackage=False):
    """Reconstruct a single page as a .vue single file component."""
    target_vue = OUT_DIR / (page_path + ".vue")
    target_vue.parent.mkdir(parents=True, exist_ok=True)

    wxml_file = SOURCE_MP_DIR / (page_path + ".wxml")
    wxss_file = SOURCE_MP_DIR / (page_path + ".wxss")

    # 1. Template
    if wxml_file.exists():
        wxml_content = wxml_file.read_text(errors="replace")
        template_part = convert_wxml_to_vue_template(wxml_content)
    else:
        template_part = (
            "<template>\n  <view class=\"container\">\n    <!-- "
            + page_path
            + " -->\n  </view>\n</template>\n"
        )

    # 2. Script
    js_part = (
        "<script>\n" + extract_js_component(page_path).strip() + "\n</script>\n"
    )

    # 3. Style
    style_part = ""
    if wxss_file.exists():
        wxss_content = wxss_file.read_text(errors="replace")
        style_part = convert_wxss_to_vue_style(wxss_content)

    full_vue = template_part + "\n" + js_part + ("\n" + style_part if style_part else "")
    target_vue.write_text(full_vue, encoding="utf-8")


def generate_pages_json(app_config):
    """Generate pages.json from app.json and page configurations."""
    def clean_style(style_obj):
        for k in ("usingComponents", "__warning__", "softinputMode", "allowsBounceVertical"):
            style_obj.pop(k, None)
        return style_obj

    pages = []
    for p in app_config.get("pages", []):
        style = {}
        p_json_file = SOURCE_MP_DIR / (p + ".json")
        if p_json_file.exists():
            try:
                style = json.loads(p_json_file.read_text(errors="replace"))
                clean_style(style)
            except Exception:
                pass
        pages.append({"path": p, "style": style})

    sub_packages = []
    for pack in app_config.get("subPackages", []):
        root = pack.get("root", "").rstrip("/")
        sub_pages = []
        for p in pack.get("pages", []):
            full_p = f"{root}/{p}"
            style = {}
            p_json_file = SOURCE_MP_DIR / (full_p + ".json")
            if p_json_file.exists():
                try:
                    style = json.loads(p_json_file.read_text(errors="replace"))
                    clean_style(style)
                except Exception:
                    pass
            sub_pages.append({"path": p, "style": style})
        sub_packages.append({"root": root, "pages": sub_pages})

    tab_bar = app_config.get("tabBar", {})
    pages_json_data = {
        "pages": pages,
        "subPackages": sub_packages,
        "globalStyle": {
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "游陕西",
            "navigationBarBackgroundColor": "#FFFFFF",
            "backgroundColor": "#FFFFFF",
        },
        "tabBar": tab_bar,
    }

    out_file = OUT_DIR / "pages.json"
    out_file.write_text(
        json.dumps(pages_json_data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def main():
    print(f"Starting Uni-app reconstruction into: {OUT_DIR}")
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    app_json_path = SOURCE_MP_DIR / "app.json"
    app_config = json.loads(app_json_path.read_text(encoding="utf-8"))

    # 1. Generate pages.json
    print("Generating pages.json...")
    generate_pages_json(app_config)

    # 2. Reconstruct all pages
    total_pages = []
    for p in app_config.get("pages", []):
        total_pages.append((p, False))
    for pack in app_config.get("subPackages", []):
        root = pack.get("root", "").rstrip("/")
        for p in pack.get("pages", []):
            total_pages.append((f"{root}/{p}", True))

    print(f"Reconstructing {len(total_pages)} pages into .vue files...")
    count = 0
    for page_path, is_sub in total_pages:
        try:
            reconstruct_page(page_path, is_sub)
            count += 1
        except Exception as e:
            print(f"Error reconstructing {page_path}: {e}")

    print(f"Successfully reconstructed {count}/{len(total_pages)} pages.")

    # 3. Copy components
    components_dir = SOURCE_MP_DIR / "components"
    ignore_native_components = {
        "components/msg/msg",
        "components/verify/verify",
        "components/agreement/agreement",
        "components/pendant/pendant",
        "components/subscribe/subscribe",
        "components/list/list",
        "components/half-screen-dialog/half-screen-dialog",
    }
    if components_dir.exists():
        print("Reconstructing components...")
        for comp_js in components_dir.rglob("*.js"):
            comp_rel = comp_js.relative_to(SOURCE_MP_DIR).with_suffix("")
            rel_str = str(comp_rel)
            if rel_str in ignore_native_components:
                continue
            try:
                reconstruct_page(rel_str)
            except Exception as e:
                pass

    print("Reconstruction script completed.")


if __name__ == "__main__":
    main()
