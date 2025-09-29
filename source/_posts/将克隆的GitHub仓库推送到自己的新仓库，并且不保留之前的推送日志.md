---
title: 如何clon项目为自己所用
tags:
  - github
categories:
  - 解决问题
  - github clon

description: 通过git指令将克隆的GitHub仓库推送到自己的新仓库，并且不保留之前的推送日志
abbrlink: bf2768f1
date: 2025-04-07 21:24:59
---
## 如何克隆新项目为自己所用

### 创建一个新的仓库

- 在 GitHub 上创建一个新的仓库，记录下新仓库的地址（例如：https://github.com/your-username/new-repo.git）。

### 克隆原始仓库到本地


```bash
git clone https://github.com/original-owner/original-repo.git
cd original-repo
```

### 清空本地仓库的 Git 历史



```bash
git checkout --orphan temp
git add -A
git commit -m "Initial commit"
git branch -D master
git branch -m master
```

这些命令的含义：

- `git checkout --orphan temp`：创建一个孤立的分支 `temp`，该分支没有父提交。
- `git add -A`：将所有文件添加到暂存区。
- `git commit -m "Initial commit"`：提交所有文件，创建一个新的提交。
- `git branch -D master`：强制删除本地的 `master` 分支（如果存在）。
- `git branch -m master`：将当前的 `temp` 分支重命名为 `master`。

**注意**：如果当前分支不是 `master`，而是 `main`，你需要根据实际分支名称调整后续命令。

如果分支是 `main`：将所有命令中的 `master` 换成 `main`。



```bash
git branch -D main
git branch -m main
git push new-origin main
```

### 添加新仓库的远程地址

- **HTTP**：

  ```bash
  git remote add new-origin https://github.com/your-username/new-repo.git
  ```

  

- **SSH**：


  ```bash
  git remote add origin git@github.com:your-username/new-repo.git
  ```

  

### 推送代码到新仓库


```bash
git push new-origin master
```

若是出现如下报错：



```bash
$ git push new-origin main
To github.com:moshiqiqian/hexo.git
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'github.com:moshiqiqian/hexo.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

这个错误表明你在尝试将本地的 `main` 分支推送到远程仓库时，远程仓库中的 `main` 分支包含了你本地没有的更改。换句话说，远程仓库比你的本地仓库“新”，Git 拒绝了你的推送操作，以防止覆盖远程仓库中的更改。

**解决办法**：

- **拉取远程更改并合并**

  如果你希望保留远程仓库中的更改，并将它们合并到你的本地仓库中，可以使用以下命令：



  ```bash
  git pull new-origin main
  ```

  

- **强制推送**

  如果你确定远程仓库中的更改不重要，或者你希望完全覆盖远程仓库的内容，可以使用强制推送：



  ```bash
  git push new-origin main --force
  ```