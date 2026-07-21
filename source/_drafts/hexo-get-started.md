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
updated: '2026-07-21T19:09:42.997+08:00'
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
- 一个位于[PSL](https://publicsuffix.org/list/public_suffix_list.dat)中的域名
- `Git` for Linux/Windows  [Download Windows Edition](https://registry.npmmirror.com/binary.html?path=git-for-windows/)
- `GitHub`/`Gitee`Account
- `EdgeOne`Acconut
- 手

### Set up

- 1. 检查前置状态,结果参考下图
     - npm:`npm -v`
     - Git:`git -v`
     - NodeJS:`node -v`
       ![2.png](https://s4.catp.cc/2026/07/21/2.png)
- 2. 安装Hexo-CLI
     通过终端执行 `npm install hexo-cli -g`
     ![3.png](https://s4.catp.cc/2026/07/21/3.png)
- 3. 初始化Hexo
     生成Hexo工作区：
     
     ```
     hexo init <folder>
     cd <folder>
     npm install
     ```
     
     构建Hexo&启动本地服务器
     
     ```
     hexo cl&&hexo g&&hexo s
     ```
  
  效果:
  ![5.png](https://s4.catp.cc/2026/07/21/5.png)

### Configuration

[](https://github.com/hexojs/site/edit/master/source/docs/configuration.md "Improve this doc")

- 1. 检查文件夹结构
     ![7.png](https://s4.catp.cc/2026/07/21/7.png)
     功能对应？

| File Name             | Usage                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| _config.yml           | 站点主要配置信息                                                                                         |
| _config.landscape.yml | 默认主题LandScape的配置文件，如果你不使用LandScape，留空即可                                             |
| *.json                | 构建配置，一般无需修改                                                                                   |
| source/*              | 资源文件(夹)，里面可以装你的文章/草稿/自定义文件之类的                                                   |
| themes/*              | 主题文件夹，用于存放主题                                                                                 |
| scaffolds/*           | 可以理解成模板文件夹，但非必要尽量不要修改                                                               |
| public/*              | 构建目录，后面会讲到，这里存放着你站点构建产物                                                           |
| node_modules/*        | Node包文件夹，存放站点构建所用的工具/依赖包，**切记：若要安装/卸载包，请使用 `npm`操作，万不可手动删除** |

{% note info simple %}
node_modules: 如果你正在使用Butterfly主题，对于使用`npm`的用户来讲，你的`Pug`和`Stylus`就会存储在这里(`pnpm`另论)，用途你自己品
{% endnote %}

- 2. 配置站点信息
     
     > 官方文档[https://hexo.io/zh-cn/docs/configuration](https://hexo.io/zh-cn/docs/configuration)
     > 
     > 不是我懒，是这字太多码起来把我的猫爪码坏了咋办，你说呢，喵~
     
     截图摘要:
     ![1-1.png](https://s4.catp.cc/2026/07/21/1-1.png)
     ![1-2.png](https://s4.catp.cc/2026/07/21/1-2.png)
     ![1-3.png](https://s4.catp.cc/2026/07/21/1-3.png)
     ![1-4.png](https://s4.catp.cc/2026/07/21/1-4.png)
     ![1-5.png](https://s4.catp.cc/2026/07/21/1-5.png)
     ![1-6.png](https://s4.catp.cc/2026/07/21/1-6.png)
     ![1-7.png](https://s4.catp.cc/2026/07/21/1-7.png)
- 3. 安装主题
     - 前往[https://hexo.io/themes/](https://hexo.io/themes/)选择你喜欢的主题
     - 点击主题名转至GithHub下载主题
     - 把主题文件夹解压到`~/themes/`
     - 依据**主题**官方文档配置主题，比如[Butterfly](https://butterfly.js.org/)

### Make it online

> 现在，让我们把它送到云端。

- 1. 登录到GitHub/Gitee(此处以Gitee为例）
     ![a1.png](https://s4.catp.cc/2026/07/21/a1.png)
- 2. 创建远程仓库，随便填一个**只有英文和连字符**的仓库名
     ![a2.png](https://s4.catp.cc/2026/07/21/a2.png)
- 3. 创建本地仓库并连接至远程仓库
     执行:
     ```
     cd /PATH/
     git init
     git remote add origin https://gitee.com/<username>/<repo>.git
     ```

{% note warning simple %}
这里的远端url`(https://...)请根据你仓库上所提示的url填写`，具体如下图：
{% endnote %}





