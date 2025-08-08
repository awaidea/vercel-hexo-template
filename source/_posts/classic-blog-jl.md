---
abbrlink: ''
aplayer: null
aside: null
categories: []
comments: null
cover: https://ts1.tc.mm.bing.net/th/id/OIP-C.Dd8ssS0xls3lj7WkCQluPQHaD5?cb=thfc1&dpr=2&pid=ImgDetMain
date: null
description: null
excerpt:  抽象玩意  起因  第六代博客 一说到第六代博客，我就想到了Markdown语法写的有多重要 当时偷懒，又不想用Hexo，于是试图用Markdown写网站 当时才发现Markdown语法有多重要，因为GHP内置的JL可以直接渲染Markdown页面！ 这可能是学习成本最低的建站方法了吧😅  这是我之前写的一段话，而今天聊的主角就是它  特性  毫无技术含量 使用难 再（低）开发 没主题 没插件...
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags: []
title: 一个神奇的博客“框架”
top_img: null
type: null
updated: '2025-08-08T11:02:00.050+08:00'
---
> 抽象玩意

# 起因

> 第六代博客
> 
> 一说到第六代博客，我就想到了Markdown语法写的有多重要
> 
> 当时偷懒，又不想用Hexo，于是试图用Markdown写网站
> 
> 当时才发现Markdown语法有多重要，因为GHP内置的JL可以直接渲染Markdown页面！
> 
> 这可能是学习成本最低的建站方法了吧😅

这是我之前写的一段话，而今天聊的主角就是它

![](https://bgithub.xyz/awaidea/pics/raw/main/25/8/b96c34fd03e0e067b2cf5d6db6db27e4.png)

# 特性

- 毫无技术含量
- 使用难
- 再（低）开发
- 没主题
- 没插件
- 依赖JL和GHP
- 速度快
- **不**支持
  - Vercel
  - Netlify
  - EdgeOne
  - ~~Glitch~~（已再见）
  - Herku
  - Render
  - Railway
  - Docker单容器
  - Docker Compose
  - 本地部署
- 支持
  - GitHubPages
- 绝对抽象

# 安装

Fork [这个仓库](https://github.com/awaidea/WinterCat)
在Pages中设置从main部署

# 使用指南

1. 改仓库名为网站标题
2. 改index.md顶部html标签来解决图标问题
3. 改作者名和关于页
4. 把Giscus替换掉，比如替换为Twikoo

<div id="tcomment"></div>
<script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js"></script>
<script>
twikoo.init({
  envId: '您的环境id', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
  el: '#tcomment', // 容器元素
  // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
  // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
  // lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
})
</script>
```

# 后记

不能说好用，只能说抽象

~~**一坨大便**~~

