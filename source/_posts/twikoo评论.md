---
title: twikoo评论
tags:
  - twikoo
categories:
  - 教学
  
mathjax: true
description: 简单的markdown语法教学，包括平时常用的语法格式以及示例
swiper_index: 2
abbrlink: daeb7f65
date: 2025-04-30 19:09:48
---
## Twikoo评论系统

### 一、注册MongoDB

网址：[MongoDB](https://www.mongodb.com/cloud/atlas/register)

- 建议直接谷歌注册
- 之后的小问卷随便填写,注意选择node.js就行

![image](https://moshiqiqian.github.io/picx-images-hosting/image.6f0vzgtdw5.webp)



![image](https://moshiqiqian.github.io/picx-images-hosting/image.7egzcmyhul.webp)


- 填写名字就行，key，value不必要填写

![image](https://moshiqiqian.github.io/picx-images-hosting/image.45hvfzbj4r.webp)

- 不需要加入别的成员，直接创建

![image](https://moshiqiqian.github.io/picx-images-hosting/image.1e8t7wq4s4.webp))

- 接下来构建集群

![image](https://moshiqiqian.github.io/picx-images-hosting/image.3nrtrec979.webp)

- 选择免费的就可以

![image](https://moshiqiqian.github.io/picx-images-hosting/image.5xauavxeqz.webp)

- 如图选择

![image](https://moshiqiqian.github.io/picx-images-hosting/image.6t7bqc83t2.webp)

- 点击添加用户（create database user），不要选择proceed to connect现在还不能直接连接

![image](https://moshiqiqian.github.io/picx-images-hosting/image.8hgonj07v5.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.8hgonj0wgr.webp)

- 修改ip为（0.0.0.0）

![image](https://moshiqiqian.github.io/picx-images-hosting/image.77drh7l0fh.webp)   

![image](https://moshiqiqian.github.io/picx-images-hosting/image.6pnpsmnuiv.webp)

- 选择Divers，Node.js，别关掉页面，接下来要用划线代码

![image](https://moshiqiqian.github.io/picx-images-hosting/image.4qrj2ig5ci.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.b93x171de.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.99tk59r8ac.webp)

### 二、vercel部署

首先注册vercel，直接github登录就行

打开网站：[[云函数部署 | Twikoo 文档]](https://twikoo.js.org/backend.html#vercel-部署)

- 点击vercel部署

![image](https://moshiqiqian.github.io/picx-images-hosting/image.7phza6ryp.webp)

- 点击Deploy，接下来如图所示

![image](https://moshiqiqian.github.io/picx-images-hosting/image.9dd62yb7sm.webp)

- 添加github账户,起一个名字为你的仓库

![image](https://moshiqiqian.github.io/picx-images-hosting/image.6ikhxexgu7.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.77drh6k9xc.webp)





- 等待至出现以下页面

![image](https://moshiqiqian.github.io/picx-images-hosting/image.99tk58tx88.webp)

- 回到vercel主页面，接下来如图所示

![image](https://moshiqiqian.github.io/picx-images-hosting/image.86tuucysub.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.8adgs2s127.webp)

- key：MONGODB_URI
- value：上文提到的代码注意要把<db_password>换成自己设置的密码（尖括号也要去掉）
- save

![image](https://moshiqiqian.github.io/picx-images-hosting/image.8s3ignu2il.webp)

- 进入 Settings - Deployment Protection，设置 Vercel Authentication 为 Disabled
- Save

![image](https://moshiqiqian.github.io/picx-images-hosting/image.pfjnvm8e8.webp)

- 部署

![image](https://moshiqiqian.github.io/picx-images-hosting/image.60ug8l8nbq.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.1vyuwhbvfc.webp)

- 显示以下为成功

![image](https://moshiqiqian.github.io/picx-images-hosting/image.b93x0fd2n.webp)

- 点击划线

![image](https://moshiqiqian.github.io/picx-images-hosting/image.3yenkjbhcn.webp)

- 如图正常，复制网址

![image](https://moshiqiqian.github.io/picx-images-hosting/image.lvxq5v14e.webp)

### 三、博客部署

- 修改为twikoo

![image](https://moshiqiqian.github.io/picx-images-hosting/image.lvxqenv1j.webp)

- 粘贴网址到这里，之后hexo 三连就行(在终端里hexo cl;hexo g;hexo d)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.2yyk7d9ahk.webp)




### 四、删除MingoDB
- 如图

![image](https://moshiqiqian.github.io/picx-images-hosting/image.4qrj29sw22.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.5mo0hq367n.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.5tr8d5pp6j.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.6m43uw6ur4.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.3d4zy8jpmu.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.8dx2psqymg.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.4g4p94gmb7.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.5tr8d5s0bz.webp)

![image](https://moshiqiqian.github.io/picx-images-hosting/image.1zigu7ae5k.webp)