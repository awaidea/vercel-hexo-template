---
abbrlink: 一个简易的Hexo Blog搭建教程
aplayer: null
aside: null
categories:
- - 建站
comments: null
cover: ''
date: null
description: null
excerpt: '...'
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags:
- hexo
title: 从Hexo出发，写下你的Hello World!
top_img: null
type: null
updated: '2026-07-21T18:00:38.316+08:00'
---
## What's this?

Hexo is a *“快速、简洁且高效的博客框架”*(Copied from offical site)

<a href="https://s4.catp.cc/2026/07/21/批注 2026-07-20 211158.png"><img                                                            src="https://s4.catp.cc/2026/07/21/批注 2026-07-20 211158.png"></a>

## Get Started

### Requirements

需要准备这些东西喵：
{% note warning simple %}
从 Hexo 8.0 开始，请使用Windows 10及以上版本运行，否则可能会引起严重的兼容性问题！
{% endnote %}

- `NodeJS` >=22 (Recommend) [Download](https://nodejs.cn/en/download)
- `Git` for Linux/Windows  [Download Windows Edition](https://registry.npmmirror.com/binary.html?path=git-for-windows/)
- `GitHub`/`Gitee`Account
- `E-mail`*1/`EdgeOne`Acconut
- 手

### Step by step

- 1. 检查前置状态,结果参考下图
     - npm:`npm -v`
     - Git:`git -v`
     - NodeJS:`node -v`
       ![2.png](https://s4.catp.cc/2026/07/21/2.png)
- 2. 安装Hexo-CLI
     通过终端执行`npm install hexo-cli -g`
     ![3.png](https://s4.catp.cc/2026/07/21/3.png)
- 3. 初始化Hexo
     依次执行：
     
     ```
     hexo init <folder>
     cd <folder>
     npm install
     ```

