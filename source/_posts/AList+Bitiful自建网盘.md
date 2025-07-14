---
abbrlink: ''
aplayer: null
aside: null
categories: []
comments: null
cover: https://alistgo.com/logo.svg
date: '2025-07-13'
description: null
excerpt:  Huang1111盘的5TB的免费空间没了，呜呜呜～  准备工作  一个注册时间超过180天的GitHub账号 一个手机号 一个域名  注册Bitiful  打开Bitiful官网 Bitiful  注册/登录  先搞个桶   注册ClawCloudRun  官网ClawCloudRun    点那个Get Started for free  用你超过180天的GitHub账号登录  登录之后区...
highlight_shrink: null
katex: null
keywords: null
limit:
  type: null
  value: null
mathjax: null
random: null
tags:
- ClawCloudRun
- A/Oplist
title: AList+Bitiful自建网盘
top_img: null
type: null
updated: '2025-07-14T12:19:26.165+08:00'
---
> Huang1111盘的5TB的免费空间没了，呜呜呜～

# 准备工作

- 一个注册时间超过180天的GitHub账号
- 一个手机号
- 一个域名

# 注册Bitiful

1. 打开Bitiful官网
   [Bitiful](https://www.bitiful.com)
   ![截屏 2025-07-12 09.17.15.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/a5c57cddf3d1d0afebda74342798b7c6.png)
2. 注册/登录
   ![截屏 2025-07-12 09.17.36.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/54e5063a9472435aaa51cc3e57c71ec4.png)
3. 先搞个桶
   ![截屏 2025-07-12 09.32.09.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/34ab31b980c0e6fbeeb66ad1f34fa860.png)

# 注册ClawCloudRun

- 官网[ClawCloudRun](https://run.claw.cloud)

---

1. 点那个Get Started for free
   ![截屏 2025-07-12 09.37.18.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/8b651f150388349e0ae380350f52d4fd.png)
2. 用你超过180天的GitHub账号登录
   ![IMG_3980.jpg](https://bgithub.xyz/awaidea/pics/raw/main/25/7/169a9a2482cd4b70731340cf46851be8.jpg)
3. 登录之后区域建议选Japan，更稳定一点，然后进入
   ![截屏 2025-07-12 09.50.52.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/f5b088206614fde436c4093cc0a03184.png)
4. 打开App Store，搜索list，可以看到有三个结果
   ![list-search.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/19612ad511dd57ed0b2067b324f9c8c0.png)
5. 选择AList（但也可以使用OpenList）

> AList上个月被收购了，OpenList是它的开源继任者，但AList比opl稳定是真的，CCR更推荐用AList商业化前的最后版本

6. 先在那里设置好密码，然后点右上角的Deploy
   ![alist-ins.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/d9f8af76cf72b95017e761d780fe6fc7.png)
7. 回到主页，点App Launchpad，这时候你就能看到你的AList实例，点进去
   ![alp.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/2429d8aba2ad607a3b20a294adaa3f56.png)
8. 点击Update
   ![截屏 2025-07-13 10.13.05.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/32b14a9dc1a751c337e752c26d647090.png)
9. 找到Network，点后面的Custom Domain
   ![network.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/d852c2628ebd7072aa16177f75ab38f6.png)
10. 按要求做完之后保存重启（设置好DNS后先等一会儿再点确认）
11. 这时候它会自动返回并重启，接下来看到你的域名旁边的字变成Available就部署成功了
    ![site.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/599c0c65e7bc86c6ab7f8bf5013eb450.png)

---

# 配置AList

1. 先改密码和用户名
2. 切换到存储页，点击添加，驱动选S3
3. 回到BitiFul
4. 先点击桶，切换到桶信息
   ![bf-1.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/a81fea010699af7b3945a74e628c3e0e.png)
5. 复制桶名、Endpoint和Region到你的AList中
6. 在Bitiful侧边栏中切换到Accesskey选项卡
   ![截屏 2025-07-13 10.23.11.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/e11f9e990d7d84e54c425806e801b5ca.png)
7. 新建子用户
8. 复制Ak和Sk到AList中
   ![截屏 2025-07-13 10.23.32.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/ef30d7349396c1430b198a66e5c0a09c.png)
9. 设置挂载路径，保存完事
   ![result.png](https://bgithub.xyz/awaidea/pics/raw/main/25/7/bde044b97968dbce84b39b54dbdf11f1.png)

# 后记

不愧是CCR
![IMG_3996.PNG](https://bgithub.xyz/awaidea/pics/raw/main/25/7/686d7758da0866c08ba1a11e8c40f9ff.PNG)连接速度高达无法连接
