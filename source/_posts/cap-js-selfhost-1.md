---
abbrlink: ''
aplayer: null
aside: null
categories: []
comments: null
cover: https://capjs.js.org/logo.png
date: '2025-08-27'
description: null
excerpt:  Cloudflare Trustlite太智障，于是用Capjs自建人机验证码  何为Capjs A modern, lightning-quick PoW captcha Cap is a lightweight, modern open-source CAPTCHA alternative using proof-of-work 何为 Cap-Worker CAP CAPTCHA 是基于 C...
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags:
- Cap
title: 使用Cap-Worker搭建自己的Cap PoW Captcha服务
top_img: null
type: null
updated: '2026-01-25T19:54:07.154+08:00'
---
> Cloudflare Trustlite太智障，于是用Capjs自建人机验证码

# 何为Capjs

**A modern, lightning-quick PoW captcha**

Cap is a lightweight, modern open-source CAPTCHA alternative using proof-of-work

# 何为 Cap-Worker

CAP CAPTCHA 是基于 Cloudflare Workers 构建的下一代验证码服务，采用 SHA-256 工作量证明算法提供强大的机器人防护能力，由[@xyTom](https://github.com/xyTom)开发

# 准备工作

- Github账号*1
- Cloudflare账号*1
- 浏览器
- 手

# 开始实践

1. 点下面这个按钮

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xyTom/cap-worker)

2. 到达这个页面，直接点击部署

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/77fff6be33365374e14c955c3f529687.png)

3. 部署完成后可以看到这个页面，点击继续处理项目

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/0ffaca46c20be0db88929ae345e8b57d.png)

4. 路由到设置>域和路由，跟随向导连接域

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/128004e9679bf023682543110c32fd88.png)

5. 访问刚刚绑定的域，看到这个说明部署成功了

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/6c30d0a06f6f0da2e478a3f5423bf238.png)

# 应用

HTML实例

```html
<script src="https://captcha.gurl.eu.org/cap.min.js"></script>


<cap-widget 
  id="cap" 
  data-cap-api-endpoint="https://captcha.gurl.eu.org/api/">
</cap-widget>
```

<script src="https://captcha.gurl.eu.org/cap.min.js"></script>

<cap-widget 
id="cap" 
data-cap-api-endpoint="https://capjs.catp.cc/api/">
</cap-widget>
