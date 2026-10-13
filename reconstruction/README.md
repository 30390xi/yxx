# 小程序静态还原索引

目标：`../wxf2cca76ae0520e33 2/`。本目录是从现有编译包生成的检索材料，不包含原始 uni-app/Vue 单文件组件，也不替换目标包。

## 文件

- [`逆向报告.md`](逆向报告.md)：包的完整度、功能流程、请求与加密逻辑、证据及限制。
- [`pages.csv`](pages.csv)：`app.json` 声明的页面和对应文件是否存在。
- [`requests.csv`](requests.csv)：静态可识别的请求方法、路径前缀、调用文件和行号。
- [`page_modules.json`](page_modules.json)：从 webpack 文件中定位的业务模块索引。
- [`page_modules/`](page_modules/)：203 个业务页面的独立 webpack 模块，保留原变量名和编译语义，便于逐页阅读；并非可直接编辑编译的原始源码。
- [`java8/MiniProgramCrypto.java`](java8/MiniProgramCrypto.java)：客户端 AES 加密函数的 JDK 8 等价实现。
- [`build_inventory.py`](build_inventory.py)：重建上述机器可读索引，仅读取本地文件。

运行 `python3 reconstruction/build_inventory.py` 可重新生成索引。原包中的 `.wxml`、`.wxss`、`.json` 和 `.js` 本身也保留在原目录。
