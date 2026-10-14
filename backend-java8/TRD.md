# 本地接口后台技术说明

## 目标

用可检查、可编辑的实测响应支撑小程序页面复刻和接口联调。当前实现覆盖 1418 条公开浏览接口，包括首页、11 个城市前两页景区列表、榜单四分类、门票商品、攻略、线路商品及线路资源页。

## 组成

- `src/FixtureServer.java`：JDK 8 内置 `HttpServer`，按 HTTP 方法、路径和排序后的查询参数定位样本。
- `src/AiChatService.java`：小七动态会话、历史记录、评价与 `^` 分隔流式响应。使用原页面的字段名和 `extend.type/code` 消息格式。
- `fixtures/index.tsv`：服务端路由索引；`index.json`：管理页元数据。
- `fixtures/*.json`：接口响应体，保存后立即生效。
- `ingest_devtools_har.py`：从开发者工具 HAR 导入公开样本和已加载图片；有内嵌图片正文时直接保存字节，否则记录图片 URL 供缓存，并在提取后删除原始 HAR。
- `capture_public_images.py`、`capture_destination_first_pages.py`、`capture_destination_details.py`、`capture_destination_supplement.py`、`capture_rankings.py`、`prune_cached_images.py`、`build_image_map.py`：抓取公开接口样本，按需缓存图片并生成映射。榜单抓取默认只保存 JSON；图片修剪保留直接引用图和代表性样本。WXSS 中已缓存的小背景图内联为 data URI，以兼容开发者工具的样式加载限制。
- `build_client_routes.py`：生成小程序端精确匹配的 GET 路由白名单、两条按完整请求体限定的首页 POST 路由和按查询参数限定的榜单 POST 路由。
- `admin.html`：本机管理页，可搜索、查看、校验并保存 JSON。
- `extract_public_fixtures.py`：从 HAR 中筛选 `/base/app/` 和 `/product/app/` 的 JSON 成功响应；不会存储原始请求数据。

## 请求流程

1. 客户端对方法、路径和查询参数与抓包记录完全一致的公开 GET 请求使用本地 `127.0.0.1:8787`。路径内参数与请求对象参数统一拼入本地 URL；调用 `wx.request` 时不再重复传入数据对象，避免查询参数重复。首页广告及权益卡按完整 POST 请求体匹配，榜单列表及详情按完整查询参数和空请求体匹配。公开样本请求失败时回退原接口；AI 动态请求只发本机，失败时不会携带本地用户标识回退线上。其他请求直接走原接口。
2. 服务端对查询参数排序并匹配路由索引。
3. 命中时从磁盘读取当前 JSON 文件并返回；未命中时返回明确的 404 错误体。
4. 管理页更新样本时先使用 JDK 8 的 JSON 解析器校验，再写入对应文件。

### 小七对话流程

首页入口打开 `union/pages/aiNew/index`。页面先 POST `ai/aiEscort/session/create`，取得 `flowId` 后 GET `ai/aiEscort/dialogue/record`；同时请求 `base/app/v1/sysParam/getSysParamForApp` 与 `ai/planCard/queryTopRecent`。输入框发出 `{language,question,userId,sessionId,bussType,location}` 到 `ai/app/escort/ai/chat`，本地服务按原页可解析的 `{"extend":{"type":0,"code":"c001"},"data":"..."}^` 返回文本。评价使用 `ai/app/dialogue/add|delete`。历史按用户标识分页，每条记录保留 `type` 与 `content`；页面无微信 openId 时生成本机稳定标识。会话与评价写入 `fixtures/ai-history.jsonl`、`fixtures/ai-feedback.jsonl`，两者已从版本控制排除。

原包依赖的 `WechatSI` 语音插件并未配置，输入框在该插件不可用时只显示文本输入。`XIAOQI_MENU` 当前返回空菜单配置；AI 定制攻略等关联服务尚无本地动态实现。本地答复按问题关键词给出通用旅行引导，不冒充原线上模型。

## 范围与后续

公开读取接口可以驱动已抓取的页面内容。登录、订单创建、支付、退款等写操作需要在有授权的测试账户和明确返回证据下另行实现，并采用真实状态模型与数据库；当前后台不会对这些操作返回虚假交易成功。222 条 POST 样本在服务端按路径和查询参数匹配，尚未区分请求体；小程序端只允许两条请求体与页面源码已知调用完全一致的首页 POST，以及 214 条查询参数匹配且请求体为空的榜单 POST 使用本地样本。图片样本保留原 URL，小程序运行时只映射 1257 张本地图片。日期和票价为 2026-10-13 的响应快照。本地服务绑定 `127.0.0.1`，不应直接作为线上服务部署。

## 验证

使用 Amazon Corretto JDK 8 编译和启动。对全部当前样本路由请求并验证外层响应结构；验证管理页与索引可读取、合法 JSON 可保存、错误 JSON 被拒绝且原文件不变。小程序已在微信开发者工具 Stable 2.02.2608060 编译，并逐页观察首页、景区、门票、攻略及线路商品的公开浏览页面。线路地图使用抓包中的路线节点呈现；原地图密钥与新 AppID 不匹配。

小七动态接口已通过建会话、发送帧、读取历史的本机 HTTP 测试；微信开发者工具中已实际显示文本回复、建议问题和历史记录，建议问题点击后可继续对话。点赞评价已显示成功提示并写入本机反馈记录。清空旧日志后复测追问，调试器新增 0 个错误。
