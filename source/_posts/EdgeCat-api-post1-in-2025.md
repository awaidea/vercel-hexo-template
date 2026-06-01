---
abbrlink: ''
aplayer: null
aside: null
categories:
- - 自建服务
comments: null
cover: https://ts3.tc.mm.bing.net/th/id/OIP-C.ETErxtwUHRrqwwtDUhJQwwHaEK?dpr=2&pid=ImgDetMain
date: '2025-08-09T16:29:30.334+08:00'
description: null
excerpt: ''
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags:
- API
title: '[持续更新]EdgeCatAPI公开版'
top_img: null
type: null
updated: '2026-06-01T17:29:20.167+08:00'
---
> 三个API炸了一个

# 前言

**严禁利用本API从事任何违反中华人民共和国法律的行为**

这个是之前搭WordPress站点的主机，因弃用了WordPress，遂用此机搭建API

统一基础URL：`api.catp.cc`

# 现状

拥有3个API，2个可用

- [x] IP查询
- [x] 延迟获取
- [ ] ~~EverydayOne Cat 随机图片~~(抢修中)

# IP查询

Endpoint `GET /ip`

返回-JSON

```JSON
{
"ip": "125.71.116.195",
"timestamp": "2025-08-09 09:21:09",
"user_agent": "Mozilla\/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Version\/16.6 Mobile\/15E148 Safari\/604.1",
"method": "GET",
"protocol": "HTTP\/1.1",
"host": "api.catp.cc",
"success": true
}
```

---

# 延迟查询

Endpoint `GET /delay`

参数：
url  必须  请求url

返回-JSON

```JSON
{
"status": "success",
"timestamp": 1754708741,
"delay": 0,
"request_params": {
"https://bing_com": ""
},
"server_info": {
"server_time": "2025-08-09 10:05:41",
"php_version": "8.4.5",
"request_method": "GET"
}
}
```

---

# EverydayOneCat Random Image (Broken)

**此API已炸，正在抢修**

Endpoint `GET /eoc`

返回-Image/GIF（自动重定向）

---

# 速率限制

暂未Rate Limit，但严禁滥用

# 帮助

直接评论本文或者发送给 `i@catp.cc`

