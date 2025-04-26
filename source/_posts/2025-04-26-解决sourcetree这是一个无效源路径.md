---
title: 修复SourceTree无效源路径/URL问题
date: 2025-04-26 23:50:33
tags:
  - source tree
categories:
  - 解决问题
description: 通过SSH连接来解决sourcetree这是一个无效源路径/URL的问题
swiper_index: 3
---
## SourceTree这是一个无效源路径/URL的解决方法

### 前言

在使用sourcetree的时候,可能会出现.

![20250426234612](https://raw.githubusercontent.com/moshiqiqian/picture/main/picture/20250426234612.png)

网络上很多教程,例如使用内置的git,或者更新自己的git,但是发现按着教程做完之后,都不能很好的解决问题,本文章介绍一个百分百成功,并且一劳永逸的方法!

### 配置SSH

1. 执行以下命令生成ssh公钥，此公钥用于你的计算机连接Github

~~~
ssh-keygen -t rsa -C "你的邮箱"
~~~

之后打开C盘下用户文件夹下的.ssh的文件夹，会看到 id_rsa.pub,用记事本打开,复制代码.

2. 将 SSH KEY 配置到 GitHub

进入github，点击右上角头像 选择`settings`，进入设置页后选择 `SSH and GPG keys`，名字随便起，公钥填到`Key`那一栏.

3. 测试连接，输入以下命令

~~~
ssh -T git@github.com
~~~

出现如下信息代表成功

~~~
Hi '你的名字'! You've successfully authenticated, but GitHub does not provide shell access.

~~~

### 配置sourcetree

点击工具,随后点击选项

找到ssh客户端配置,将ssh客户端选项换成OpenSSH,这时候SSH密钥会自动弹出你的SSH的地址,如果没有或者错误,请自行找到,选择正确的文件.
![20250426234737](https://raw.githubusercontent.com/moshiqiqian/picture/main/picture/20250426234737.png)

这时候在试一下,是否可以克隆成功,注意要使用SSH协议来clon.
![20250426234834](https://raw.githubusercontent.com/moshiqiqian/picture/main/picture/20250426234834.png)

![20250426234919](https://raw.githubusercontent.com/moshiqiqian/picture/main/picture/20250426234919.png)

大功告成!
