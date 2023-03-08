## 介绍

cz-cache.js 是一个基于 Storage 技术抽象出来的工具类。

## 设计初衷

- 统一团队编码输出规范

* - 提高开发效率
* - 降低多余的代码输出和低级错误
* - 增强代码可读性与扩展性

## 安装

```
npm i cz-cache

or

yarn add cz-cache
```

## 使用

**node 环境引入**

```
import { localCache, sessCache } from 'cz-cache'
```

## 示例

**存**

```
localCache.setKey('token',edkjfkdsfj23jk34)
```

**读**

```
localCache.getKey('token')
```

**删**

```
localCache.removeKey('token')
```

**清空**

```
localCache.setKey()
```

## 鸣谢

<a href="https://github.com/cz-frontend/cz-cache">GitHub</a>
<a href="https://www.npmjs.com/package/cz-cache">NPM</a>

欢迎 star、issues！
