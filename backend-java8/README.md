# 游陕西接口样本后台

基于微信开发者工具中实际收到的公开接口响应，以及按已观察路径与参数复测的公开 GET 响应，提供 Java 8 可运行的本地 API 和数据管理页。它是接口样本后台，适合复刻页面与联调；用户认证、订单、支付等尚无可靠运行时返回证据，因此没有伪造这些功能。

## 运行

macOS 已安装 JDK 8 时：

```sh
./run.sh
```

打开 [管理页](http://127.0.0.1:8787/admin)。可选择接口查看和编辑 JSON，保存后本地接口立即返回新内容。默认只监听本机 `127.0.0.1`，端口可用 `./run.sh 8788` 修改。

接口例子：

```sh
curl 'http://127.0.0.1:8787/product/app/v1/line/product/home/list?current=1&size=11'
```

运行 `node verify_local_routes.js` 可核对全部 GET 样本在“参数写在 URL”及“参数作为请求对象”两种调用方式下都会生成正确的本地地址，并检查首页 POST 请求体、榜单 POST 查询参数及不匹配时的回退行为。

路由按 HTTP 方法、路径和查询参数精确匹配。未知接口返回 HTTP 404 和 `{code,data,msg,success}` 错误体。POST 样本目前未按照请求体细分。

小七对话使用独立动态路由：`/ai/aiEscort/session/create`、`/ai/aiEscort/dialogue/record`、`/ai/app/escort/ai/chat`、`/ai/app/dialogue/add|delete`。流式回复采用原页面解析的 `^` 帧分隔协议，当前由本地关键词逻辑生成。聊天历史与评价只保存在本机 `fixtures/ai-*.jsonl`，已加入 `.gitignore`。语音识别、真实 AI 模型和旅行计划生成没有可用的原服务授权。

## 数据来源与范围

`fixtures/` 中只保留原始后台的公开浏览响应及其字段；抓包中的微信登录 code、请求头、Cookie、令牌和原始 HAR 均未进入此项目。现有 1418 条样本（1196 条 GET、222 条 POST），涵盖首页、11 个城市前两页景区列表、前两页 212 张卡片的详情与票型、榜单四分类 22 页列表及 96 个榜单详情前两页、门票商品、攻略和线路。图片原始 URL 仍保留在样本中，小程序工程仅将 1257 张页面引用图及代表性样本映射到本地文件（约 184 MiB），其余图片按原 URL 请求。线路日期和票价为 2026-10-13 的响应快照，不保证之后仍有效。字段索引见 [接口字段.md](接口字段.md)。

从微信开发者工具导出 HAR 后，运行 `python3 ingest_devtools_har.py /path/to/capture.har`。脚本提取公开 JSON 与图片请求；HAR 包含图片正文时直接保存响应字节，否则按已观察 URL 缓存图片。提取后立即删除原始 HAR，再生成客户端路由及图片映射。原始 HAR 可能包含会话数据，请勿手动归档或提交。客户端路由包含精确匹配的 GET 样本、按页面源码请求体限定的首页广告和权益卡列表两条 POST 样本，以及按查询参数精确匹配的榜单列表和详情 POST 样本；其余请求仍使用原接口。

目的地页的城市列表已取得后，`python3 capture_destination_first_pages.py --pages 2` 可按列表中的 11 个城市 ID 复测前两页公开景区接口。`python3 capture_destination_details.py --pages 2 --per-city 10` 抓取前两页全部 212 张卡片的景区详情、票型和需要的评价响应；`python3 capture_destination_supplement.py` 再抓取介绍、图片/视频列表和三日天气。`python3 capture_rankings.py` 抓取榜单列表及详情，默认只抓接口；只有显式加 `--images` 才下载榜单图片。`python3 prune_cached_images.py --apply` 可将图片缓存收缩到页面引用图和代表性样本。之后运行 `python3 build_client_routes.py`、`python3 build_image_map.py` 和 `python3 build_contract_docs.py` 更新生成文件，再重启本地后台载入新增路由。

## 限制

- 该服务重放已观察到的响应，不代表完整原始后台业务规则。
- 所用 AppID `wxf8549078eee81f5f` 与原服务登录会话未对上；会话接口观察到的是失败返回，故未实现真实登录。
- `fixtures` 可直接编辑，也可通过管理页编辑。请勿将含私人数据的响应添加到此目录。
- 已观察的图片引用中有 4 个源地址返回 HTTP 404；本地只保留用于页面验证的图片子集，未缓存的引用由客户端按原 URL 加载。
