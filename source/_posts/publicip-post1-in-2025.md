---
abbrlink: ''
aplayer: null
aside: null
categories:
- - 网络
comments: null
cover: https://ts1.tc.mm.bing.net/th/id/R-C.817e3aee31fdcc8592cec9b333c8dd7e?rik=Oc%2fMCSugodyXAg&pid=ImgRaw&r=0
date: null
description: null
excerpt:  IPv4，又是老生常谈的问题  起因 打算明年搞一台NAS，但考虑到IPv6的访问没有全覆盖，再加上我家也没有IPv6访问，于是找找自家IPv4能用不 查找 之前用EOP部署了一个GeoLocation，刚好来用用，比如我家IP是125.71.116.195  如果不知道的在local.catp.cc上查看 定性 网上找的到的分类国内一般是：   私网IP段  A类  10.0.0.0～10.2...
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags:
- IPv4
title: 浅浅检查下自家是不是完全公网IP(v4)
top_img: null
type: null
updated: '2025-08-08T16:58:11.532+08:00'
---
> IPv4，又是老生常谈的问题

# 起因

打算明年搞一台NAS，但考虑到IPv6的访问没有全覆盖，再加上我家也没有IPv6访问，于是找找自家IPv4能用不

# 查找

之前用EOP部署了一个GeoLocation，刚好来用用，比如我家IP是125.71.116.195

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/46066edad9fad9d1d9d00478631858a3.png)

如果不知道的在[local.catp.cc](https://local.catp.cc)上查看

# 定性

网上找的到的分类国内一般是：

- 私网IP段

  - A类
    - 10.0.0.0～10.255.255.255(/8)
  - B类
    - 172.16.0.0～172.31.255.255(/12
  - C类
    - 192.168.0.0～192.168.255.255(/16)
- 公网IP段

# 结论

显然，125.71.116.195不属于私网IP段，那么可以得出这个IP属于可直接联网的公网IP(v4)

嘿嘿，以后就可以直接IP+端口和朋友一块打MC了～
