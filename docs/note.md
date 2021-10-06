# 笔记

## Websocket 资料

### 教程

1. [WebSocket](https://zh.javascript.info/websocket)
2. [introduction-to-websockets-creating-a-node-js-server-and-using-websocket-api-in-the-browser](https://wanago.io/2018/09/24/introduction-to-websockets-creating-a-node-js-server-and-using-websocket-api-in-the-browser/)

### 文章

1. [WebSocket 浅析](https://zhuanlan.zhihu.com/p/25592934)
2. [原来你是这样的 Websocket--抓包分析](https://www.cnblogs.com/songwenjie/p/8575579.html)

### 规范

1. [rfc6455](https://datatracker.ietf.org/doc/html/rfc6455)

### 开源包

1. [ws](https://github.com/websockets/ws)
2. [socket.io](https://github.com/socketio/socket.io)

## 二进制数据相关

### 教程

1. [ArrayBuffer，二进制数组](https://zh.javascript.info/arraybuffer-binary-arrays)

2. [ArrayBuffer](https://es6.ruanyifeng.com/#docs/arraybuffer)

### 文档

1.[TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

## Unicode 和 UTF-8 相关

### 文章

1. [字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

2. [Unicode 与 JavaScript 详解](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

3. [通过 javascript 进行 UTF-8 编码](https://segmentfault.com/a/1190000005794963)

### 问答

1. [How many characters can UTF-8 encode?](https://stackoverflow.com/questions/10229156/how-many-characters-can-utf-8-encode/45042566#45042566)

### 文档

1. [Unicode](https://zh.wikipedia.org/wiki/Unicode)
2. [UTF-8](https://zh.wikipedia.org/wiki/UTF-8#%E6%AD%B7%E5%8F%B2)
3. [https://home.unicode.org/](https://home.unicode.org/)

### 思考总结

> Unicode,即统一字符集, 为全世界所有符号指定一个“码点”， 负责将码点解析成字符。目前的 Unicode 字符分为 17 组编排，每组称为平面（Plane），而每平面拥有 65536（即 216）个代码点。然而目前只用了少数平面。覆盖世界各个的文字符号，目前仍在不断新增的。

> Unicode，有多种编码实现方式，比如“UTF-32、UTF-16、UTF-8“， 其 UTF-8 是一种变长的编码方法，字符长度从 1 个字节到 4 个字节不等。由于其节省了空间，目前是互联网比较常见的编码格式。Unicode 目前最多能表示 17 \* 65536, 而 UTF-8 能表示的字符量远远大于此

> JavaScript 采用 Unicode 字符集,但 UCS-2 编码方式, 只能支持 16 位字符,所以 Unicode 码中操作两个字节的字符的话, 会把它当作两个字符处理, 比如`'𝌆'.slice(0,1)`。 后来 ES6 增加一些 API 做了处理, 比如`Array.from(string).length`, 码点表示法, 字符串处理函数(fromCodePoint, codePointAt, at)
