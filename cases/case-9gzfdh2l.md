---
id: "case-9gzfdh2l"
title: "用 cc-switch 将国家超算平台模型接入 Claude Code 与 Codex"
canonical_url: "https://agentcaseshare.cn/tasks/case-9gzfdh2l"
category: "其他"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-07-10T16:43:24.777Z"
tags:
  - "cc-switch"
  - "Claude Code"
  - "codex"
  - "国家超算"
  - "scnet"
  - "GLM"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 用 cc-switch 将国家超算平台模型接入 Claude Code 与 Codex

> 国家超算互联网平台(scnet)同时提供 OpenAI 与 Anthropic 兼容端点。用 cc-switch 把 GLM-5.2 同时接入 Claude Code(走 Anthropic 端点)与 Codex CLI(走 OpenAI 端点),并让 AI Agent 自动完成配置与验证。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-9gzfdh2l?utm_source=github&utm_medium=repository&utm_campaign=case-9gzfdh2l)

## 要解决的问题

希望把国家超算平台的大模型当作后端,同时驱动 Claude Code 与 Codex CLI 两个编程 Agent;手动改 settings.json / config.toml 易错,且在不同模型/平台间切换麻烦。

## 实现方案

利用 scnet 同时提供的 Anthropic 兼容端点(给 Claude Code)与 OpenAI 兼容端点(给 Codex),用 cc-switch 统一管理两套 Provider 配置,一键切换。

## Agent 工作流

1) 平台控制台获取 API Key;2) cc-switch 新建 Claude Code Provider 指向 Anthropic 端点;3) cc-switch 新建 Codex Provider 指向 OpenAI 端点;4) 各跑一次对话验证;5) 把整套步骤交给 AI Agent 自动执行并验证。

## 效果与复盘

日常可在不同模型/平台间一键切换;接入流程脚本化、可复用、可交给 AI 自动完成,省去手动改配置的出错成本。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 其他 |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | cc-switch, Claude Code, Codex CLI, 国家超算互联网平台 API |
| 标签 | cc-switch、Claude Code、codex、国家超算、scnet、GLM |
| 案例 ID | `case-9gzfdh2l` |
| 最后更新 | 2026-07-10 |

## 关联资源

- [用 cc-switch 把国家超算平台模型接入 Claude Code 与 Codex(附 AI 自动执行)](https://agentcaseshare.cn/articles/article-liokk4tg)
- [用 cc-switch 将国家超算平台模型接入 Claude Code 与 Codex 复盘](https://agentcaseshare.cn/articles/article-qs56mc7v)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
