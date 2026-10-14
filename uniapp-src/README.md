# 游陕西小程序 - uni-app 源码还原工程

本项目是由已打包的小程序运行时文件（WXML + WXSS + 编译后 Webpack 模块）通过 **AST 语法树逆向分析与核心业务重构（方法 B + 方法 C）** 还原生成的 **uni-app (Vue 2) 源码工程**。

---

## 目录结构

```text
uniapp-src/
├── api/                           # 业务接口统一封装 (依据 564 处请求静态证据抽象)
│   ├── home.js                    # 首页广告、轮播、导航与推荐接口
│   ├── scenic.js                  # 景区详情、标签筛选与门票列表接口
│   ├── ticket.js                  # 门票预订、订单创建与微信支付接口
│   └── user.js                    # 用户登录、授权与短信验证码 (带 AES 加密)
├── common/                        # 样式与公共资源
│   └── util.js                    # 业务跳转与公共辅助工具
├── utils/                         # 核心底层工具
│   ├── crypto.js                  # AES-128-ECB 签名与加解密 (独立无第三方依赖)
│   ├── request.js                 # 统一 HTTP 客户端 (带 Token、重试与登录拦截)
│   └── util.js                    # 路由、Toast、rpx/px 转换等辅助函数
├── components/                    # 公共可复用单文件组件 (.vue)
│   ├── tabBar/                    # 底部自定义 TabBar 组件
│   └── ...                        # 其余 20+ 个公共组件
├── pages/                         # 主包页面 (29 个页面)
│   ├── index/index.vue            # 首页核心业务页面
│   ├── spotDetailNew/             # 景区详情核心页面
│   └── ...
├── subPage/                       # 分包 1 (含门票下单 ticketFillOrder 等)
├── subPack/                       # 分包 2 (含支付 ticketPay 等)
├── yearCard/                      # 年卡业务分包
├── union/                         # AI 导游与文创分包
├── static/                        # 静态本地图片资源库
├── App.vue                        # 应用生命周期、全局数据与基础样式
├── main.js                        # Vue 入口文件与原型扩展挂载
├── pages.json                     # 页面路由与分包完整配置 (314 个页面)
├── manifest.json                  # 应用清单配置 (含 AppID 与微信权限配置)
└── package.json                   # 项目依赖与构建脚本
```

---

## 还原特性与重构说明

1. **模板指令还原 (WXML -> Vue Template)**：
   - 提取并消除了小程序编译器特有的 `$orig` 表达式包装（如 `item.$orig` -> `item`）；
   - 将混淆压缩的 `data-event-opts` 与 `bindtap="__e"` 还原为标准 Vue 事件指令（如 `@click="goSearch(item)"`、`@scroll="tabScrollToLeft($event)"`）；
   - 将 `wx:for`、`wx:for-item`、`wx:for-index` 还原为 `v-for="(item, index) in list" :key="..."`；
   - 将 `wx:if`、`wx:elif`、`wx:else` 还原为 `v-if`、`v-else-if`、`v-else`；
   - 将 `class="{{[...]}}"`、`style="{{...}}"` 还原为 `:class`、`:style` 绑定。

2. **核心业务架构重构 (Method C)**：
   - **`utils/crypto.js`**：还原了客户端原生使用的 AES-128-ECB PKCS7 加密模块，已对齐原包测试向量；预置了短信签名密钥 `8nXB5qupfE2mwSeZ` 与事件埋点密钥 `xsYc029dbPhO6sI9`；
   - **`utils/request.js`**：还原了 `02e3` 模块的完整网络拦截，包括渠道来源头、Token 自动携带、401 / 101 登录失效跳转、以及业务高并发重试机制；
   - **`api/` 层**：依据静态索引的 564 处接口调用，对高频模块（首页、景区、门票、用户）进行了模块化抽象。

3. **路由配置完整性**：
   - `pages.json` 严格保留了原 `app.json` 声明的 29 个主包页面、10 个分包以及 285 个分包页面，每个页面内联了对应的原生导航栏配置。

---

## 运行与编译方式

### 方式 1：使用 HBuilderX (推荐)

1. 下载并安装 [HBuilderX](https://www.dcloud.io/hbuilderx.html)。
2. 在 HBuilderX 中点击 **文件 -> 打开目录**，选择当前 `uniapp-src` 目录。
3. 点击上方菜单 **运行 -> 运行到小程序模拟器 -> 微信开发者工具**。
4. HBuilderX 将自动编译项目并在微信开发者工具中预览。

### 方式 2：使用命令行 (Vue CLI)

```bash
# 1. 安装项目依赖
npm install

# 2. 编译并监听开发模式 (微信小程序)
npm run dev:mp-weixin

# 3. 发布生产构建
npm run build:mp-weixin
```
编译产物位于 `dist/dev/mp-weixin` 或 `dist/build/mp-weixin`，可直接导入微信开发者工具进行真机调试。
