
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- test
    - [TestFeature](#/test/TestFeature)

---

## test

### TestFeature <a id="/test/TestFeature"></a>

**路径**
- POST `/test/TestFeature`

**请求**
```ts
interface ReqTestFeature {
    test: string,
    _token?: string
}
```

**响应**
```ts
interface ResTestFeature {
    data: string,
    _token?: string,
    _timestamp?: number
}
```

