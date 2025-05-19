---
title: 修复SourceTree无效源路径/URL问题
tags:
  - source tree
categories:
  - 解决问题
  - source tree
description: 通过SSH连接来解决sourcetree这是一个无效源路径/URL的问题
abbrlink: ed8acac5
date: 2025-04-26 23:50:33
---
SourceTree 这是一个无效源路径/URL 的解决方法
前言
在使用 SourceTree 的时候，可能会出现以下错误提示：
https://moshiqiqian.github.io/picx-images-hosting/image.32i62f8s0l.webp
网络上有很多教程，例如使用内置的 Git，或者更新自己的 Git，但是发现按照教程做完之后，都不能很好地解决问题。本文介绍一个百分百成功，并且一劳永逸的方法！
配置 SSH
执行以下命令生成 SSH 公钥，此公钥用于你的计算机连接 GitHub：
bash
复制
ssh-keygen -t rsa -C "你的邮箱"
之后打开 C 盘下用户文件夹下的 .ssh 文件夹，会看到 id_rsa.pub，用记事本打开，复制代码。
将 SSH KEY 配置到 GitHub
进入 GitHub，点击右上角头像，选择 Settings，进入设置页后选择 SSH and GPG keys，名字随便起，公钥填到 Key 那一栏。
测试连接，输入以下命令：
bash
复制
ssh -T git@github.com
出现如下信息代表成功：
plaintext
复制
Hi '你的名字'! You've successfully authenticated, but GitHub does not provide shell access.
配置 SourceTree
点击工具 -> 选项。
找到 SSH 客户端配置，将 SSH 客户端选项换成 OpenSSH，这时候 SSH 密钥会自动弹出你的 SSH 的地址，如果没有或者错误，请自行找到，选择正确的文件。
https://moshiqiqian.github.io/picx-images-hosting/image.9gwry0uxz3.webp
这时候再试一下，是否可以克隆成功，注意要使用 SSH 协议来 clone。
https://moshiqiqian.github.io/picx-images-hosting/image.8ojwgaexav.webp
https://moshiqiqian.github.io/picx-images-hosting/image.7p3t34dcp8.webp
大功告成！