---
abbrlink: ''
aplayer: null
aside: null
categories: []
comments: null
cover: https://ts3.tc.mm.bing.net/th/id/OIP-C.ETErxtwUHRrqwwtDUhJQwwHaEK?dpr=2&pid=ImgDetMain
date: null
description: null
excerpt:  三个API炸了一个  前言 严禁利用本API从事任何违反中华人民共和国法律的行为 这个是之前搭WordPress站点的主机，因弃用了WordPress，遂用此机搭建API 现状 拥有3个API，2个可用   IP查询  延迟获取  EverydayOne Cat 随机图片(抢修中)  IP查询 位于https://api.catp.cc/ip 返回-JSON { &quot;ip&quot;: ...
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags: []
title: '[持续更新]EdgeCatAPI公开版'
top_img: null
type: null
updated: '2025-08-09T11:15:12.114+08:00'
---
> 三个API炸了一个

# 前言

**严禁利用本API从事任何违反中华人民共和国法律的行为**

这个是之前搭WordPress站点的主机，因弃用了WordPress，遂用此机搭建API

# 现状

拥有3个API，2个可用

- [x] IP查询
- [x] 延迟获取
- [ ] ~~EverydayOne Cat 随机图片~~(抢修中)

# IP查询

位于`https://api.catp.cc/ip`

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

位于`https://api.catp.cc/delay`

这里需要注意，获取延迟需要在`delay`后加上`?<url>`

返回-JSON


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

---

# EverydayOneCat (Broken)

API已炸，正在抢修

位于`https://api.catp.cc/gif/eoc`

返回-Image（自动重定向）

---

# 速率限制

暂未Rate Limit，但严禁滥用

# 帮助

直接评论本文或者发送给`i@catp.cc`

