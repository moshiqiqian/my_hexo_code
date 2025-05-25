---
title: markdown语法教学
tags:
  - markdown
categories:
  - 教学
  - 计算机基础
  - markdown
mathjax: true
description: 简单的markdown语法教学，包括平时常用的语法格式以及示例
abbrlink: eed5a137
date: 2025-04-07 21:22:51
---
## 标题（"Title"）

~~~
井号加空格，几个井号就是几级标题 
# 一级标题
## 二级标题
~~~



***

## 字体标记（"Font markup"）

~~~ 
**加粗**
*斜体*
~~删除~~
==高亮==
~~~

**加粗**  *斜体*  ~~删除~~  ==高亮== 

***

## 列表（"List"）

###  有序列表（"Ordered list"）

~~~
数字加“."
1. abc
2. abc
~~~

1. abc
2. abc

### 无序列表（"Unordered list"）

~~~
+,—,* 加空格
+ abc
- abc
* abc
~~~

+ abc

- abc

* abc



### 列表的嵌套（"Nesting of lists"）

~~~
会回车然后使用tab使得列表缩进
shift加tab取消缩进
~~~

（1）缩进( "indentation")

* 

  * 

  


（2）有序无序嵌套(Nested ordered lists and unordered lists.)

* 1. 1
  2. 2
  3. 3
     1. 1.
     2. 1
     3. 3



***



## 段落(Paragraph.)



### 引用语法(Quotation syntax.)

~~~ 
>引用
~~~

> 这是一段引用

 git push new-origin main --forcebash


### 分割线(Horizontal rule.)

~~~
***加回车
---加回车
~~~

***

***

## 代码(Code.)

### 单行代码(Inline code.)

~~~
`单行代码`
~~~

这是一段`单行代码`的样子

**注意** ：单行代码可以在任意位置使用

### 代码块(Code block.)

~~~
~~~加回车
~~~

**注意** :部分软件可以直接回车，部分软件需要在后面加上～～～

***





## 超链接(Hyperlink.)

### 普通超链接(Regular hyperlink.)

~~~
[超链接](网址)
~~~

[github](https://github.com/)

### 高级超链接(Advanced hyperlink.)

~~~
[网站名称][变量]
[1]:网址
~~~

[github][1]

[1]:https://github.com/

## 脚注(Footnote.)

~~~
[^1]
~~~

脚注[^1]

[^1]: 脚注





***

## 图片(Image.)

~~~
![](图片链接)
~~~



**注意**：可以用html的格式来添加图片，实现改变图片大小等。

## 图床(Image hosting service.)

所谓的图床就是⽤来在线存放图片的地方。

图床上的每⼀张图⽚都能够⽣成⼀个唯⼀的访问链接，使⽤这个链接，任何⼈都能

够在线读取你的图⽚。

### 为什么需要图床

因为markdown编辑器文档无法存放图片，只能通过链接来调用，一旦分享文档，文档里的图片就无法显示。

### 获取图床

* 使用现成的图床网站。[聚合图床 - 免费无限图片上传 ](https://www.superbed.cn/)
* 自己搭建图床。[搭建图床教程](https://moshiqiqian.github.io/post/7d6919a5.html)



## 表格(Table.)

~~~
|表头|表头|
|---|---|
|单元格|单元格|
~~~

~~~
左对齐
|：---|
~~~

~~~
右对齐
|---：|
~~~

~~~
居中对齐
|：———：|
~~~

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| a      |    b     |      c |



