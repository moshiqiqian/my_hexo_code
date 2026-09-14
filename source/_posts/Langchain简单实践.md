---
title: Langchain 简单实践
tags:
  - LangChain
  - 人工智能
  - LangGraph
categories:
  - 教学
  - 人工智能
  - LangChain
description: LangChain 环境搭建以及简单实践
abbrlink: bcce08d0
date: 2026-09-14 15:23:37
---

## LangChain 环境搭建以及简单实践

### 一、用 Anaconda 配置环境
不懂什么是anaconda？
详见文章：https://www.moshiqiqian.top/post/f795ecf0.html


#### 1. 环境导入命令汇总

本项目的 Python 环境已经导出为 `environment-langchain_env.yml`，直接用 conda 导入即可。

powershell

```
conda env create -f environment-langchain_env.yml
conda activate langchain_env
```



#### 2. 该 yml 中关键包及用途

| 包名                       | 用途                                                         |
| :------------------------- | :----------------------------------------------------------- |
| `langchain`                | LangChain 核心框架，提供链、提示词模板、输出解析器等基础组件 |
| `langchain-core`           | LangChain 的核心抽象，被其他 LangChain 包依赖                |
| `langchain-openai`         | OpenAI 适配器，提供 `ChatOpenAI`。兼容 OpenAI API 的服务（DeepSeek、通义千问等）都通过它调用 |
| `langchain-community`      | 社区集成包，包含 PDF/Word/网页加载器、向量库适配器、第三方工具 |
| `langchain-text-splitters` | 文本分割器，LangChain 1.x 之后从主包拆出的独立包             |
| `langchain-classic`        | 兼容包，存放 LangChain 1.x 移除的旧 API，例如旧版 `AgentExecutor` |
| `langgraph`                | LangChain 生态的工作流编排库，用于构建状态机、多节点、并行分支、循环 Agent |
| `langsmith`                | LangSmith SDK，负责把 LangChain / LangGraph 的调用过程上传到 LangSmith 平台 |
| `python-dotenv`            | 从 `.env` 读取 API Key，避免密钥硬编码                       |
| `faiss-cpu`                | 本地向量索引，用于 RAG 检索                                  |
| `fastembed`                | 本地嵌入模型，用于把 PDF 切块转成向量，无需调用远程 embedding 接口 |
| `pypdf`                    | PDF 解析，用于 RAG 读取 `islr.pdf`                           |
| `ddgs`                     | DuckDuckGo 搜索，用于 Agent 联网查询                         |
| `grandalf`                 | LangGraph 图形可视化辅助包                                   |
| `requests`                 | HTTP 客户端，被多数包依赖                                    |

### 二、文件夹中的操作

#### 1. 创建项目文件夹

在桌面创建项目目录：

Plaintext

```
C:\Users\yurui\Desktop\LangChain
```

这个文件夹将存放所有项目代码和配置文件。

#### 2. 创建 `.env` 配置文件

在 `LangChain` 文件夹中创建 `.env` 文件，内容如下：

代码段

```
OPENAI_API_KEY=***
OPENAI_API_BASE=https://api.deepseek.com/v1
```

- **文件作用：**
  - `OPENAI_API_KEY`：你的 DeepSeek API 密钥，用于身份认证
  - `OPENAI_API_BASE`：API 服务地址，DeepSeek 的接口地址
- **重要：** 文件名必须是 `.env`

#### 3. 创建基础测试代码文件 (`test.py`)

在 `LangChain` 文件夹中创建 `test.py` 文件，写入以下代码测试基础大模型连通性：

Python

```
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

# 加载 .env 文件中的环境变量
load_dotenv()

# 初始化 DeepSeek 大模型
llm = ChatOpenAI(
    model="deepseek-chat",                      # DeepSeek 模型名称
    temperature=0.7,                            # 控制回答的随机性
    api_key=os.getenv("OPENAI_API_KEY"),        # 从 .env 读取 Key
    base_url=os.getenv("OPENAI_API_BASE"),      # 从 .env 读取 API 地址
)

# 调用模型
response = llm.invoke("用一句话介绍什么是LangChain")
print(response.content)
```
会得到以下结果：
![image](https://moshiqiqian.github.io/picx-images-hosting/Langchain简单实践/image.2h92fv5572.webp)

#### 4. 创建 LangGraph 工作流测试文件 (`graph_test.py`)

在 `LangChain` 文件夹中创建 `graph_test.py` 文件，体验用 **LangGraph** 编排一个最简单的状态图工作流：

Python

```
import os
from typing import TypedDict
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, START, END

# 加载环境变量
load_dotenv()

# 初始化大模型
llm = ChatOpenAI(
    model="deepseek-chat",
    temperature=0.7,
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_API_BASE"),
)

# 定义 LangGraph 的状态结构 (State)
class State(TypedDict):
    message: str
    response: str

# 定义一个处理节点：调用大模型
def call_model(state: State):
    res = llm.invoke(state["message"])
    return {"response": res.content}

# 构建 LangGraph 工作流图
workflow = StateGraph(State)

# 添加节点
workflow.add_node("model_node", call_model)

# 设置流向：从开始 -> 进入模型节点 -> 结束
workflow.add_edge(START, "model_node")
workflow.add_edge("model_node", END)

# 编译工作流
app = workflow.compile()

# 运行 LangGraph 应用
result = app.invoke({"message": "用一句话介绍什么是LangGraph"})
print("LangGraph 运行结果：")
print(result["response"])
```
得到以下结果
![image](https://moshiqiqian.github.io/picx-images-hosting/Langchain简单实践/image.9kgxvhedxp.webp)

进入最下面的网址可以查看自己的相关的逻辑。