---
date: '2025-07-06T22:17:49+08:00'
excerpt: Friend's links         Apply for Apursuer's friend chain 基本要求  有一个完整的可访问的地址 不允许像CSDN这一类的博客（博客园除外 添加本站地址 没有违反中华人民共和国法律的内容，没有黄、赌、毒内容（重要）  这是加分项  支持IPV6 自托管域名后没有端口 域名后缀位于公共域名列表中（非常规域名除外，比如“.手机”、“.移动”或者这样...
title: 友情链接
type: link
updated: '2025-07-10T11:59:06.581+08:00'
---
# Friend's links

<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>

<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>

<script>loadQexoFriends("qexo-friends", "https://qexo.apursuer.com")</script>

# Apply for Apursuer's friend chain

## 基本要求

- 有一个完整的可访问的地址
- 不允许像CSDN这一类的博客（博客园除外
- 添加本站地址
- **没有违反中华人民共和国法律的内容，没有黄、赌、毒内容（重要）**

## 这是加分项

- 支持IPV6
- 自托管域名后没有端口
- 域名后缀位于公共域名列表中（非常规域名除外，比如“.手机”、“.移动”或者这样的“💩💩.to”、“你好.cn”，少来哈）
- 没有广告（但允许Google Ads）
- 速度快
- 排版正常
- 有SSL证书
- 评论友好
- 青少年优先



## 这是减分项

- 无SSL
- 加载失败/超过5分钟
- 有广告（Google Ads除外）
- 非常规域名
- 四级域名
- DNS污染
- 百度/必应完全没收录（你百度没收录还好，必应没收录就怪了）
- 排版混乱
- 单页（个人主页除外
- And so on…



## 我的信息

```Text
Title:EdgeCat's Homepage
URL:https://Catp.cc
Avatar:https://file.catp.cc/avatar.png
Describe:说时依旧，有泪如倾
#如果主页没看到贵站友链，请点击个人主页右上方的My Friends按钮或者返回本页就能看到了
```

## 提交友链

**确认无误后，在下面提交你的友链，如需更改，请在评论区留言，谢谢**
<link rel="stylesheet" href="https://unpkg.com/apursuer-qexo-friend-links@1.0.2/apursuer-hexo-friend-links.css"/>

<article class="message is-info">
    <div class="message-header">
        Apply for friend chain
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Your site name" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Link</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="A link to your site's homepage" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">Please make sure the site is accessible!</p>
            </div>
            <div class="field">
                <label class="label">Icon</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="Your website icon (as round as possible)" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Please describe your site in one sentence." id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> I am not submitting nonsense information.
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">Apply</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://recaptcha.net/recaptcha/api.js?render=你的recaptcha网页秘钥"></script>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
function TestUrl(url) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        return false;
    }
    return true;
}
function askFriend (event) {
    let check = $("#friend-check").is(":checked");
    let name = $("#friend-name").val();
    let url = $("#friend-link").val();
    let image = $("#friend-icon").val();
    let des = $("#friend-des").val();
    if(!check){
        alert("Please check \"I am not submitting nonsense information\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("The information is incomplete! ");
        return;
    }
    if (!(TestUrl(url))){
        alert("URL format error! Need to include HTTP protocol header! ");
        return;
    }
    if (!(TestUrl(image))){
        alert("The format of the slice URL is wrong! It needs to contain the HTTP protocol header! ");
        return;
    }
    event.target.classList.add('is-loading');
    grecaptcha.ready(function() {
          grecaptcha.execute('你的recaptcha网页秘钥', {action: 'submit'}).then(function(token) {
              $.ajax({
                type: 'get',
                cache: false,
                url: url,
                dataType: "jsonp",
                async: false,
                processData: false,
                //timeout:10000, 
                complete: function (data) {
                    if(data.status==200){
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        data: {
                            "name": name,
                            "url": url,
                            "image": image,
                            "description": des,
                            "verify": token,
                        },
                        url: 'https://panel.catp.cc/pub/ask_friend/',
                        success: function (data) {
                            alert(data.msg);
                        }
                    });}
                    else{
                        alert("The URL cannot be reached!");
                    }
                    event.target.classList.remove('is-loading');
                }
          });
        });
    });
}
</script>

