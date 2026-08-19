---
id: "case-i8tkwke4"
title: "AI 看板：用 AI 开发并跨设备监控 Codex、Claude Code 与 Gemini CLI"
canonical_url: "https://agentcaseshare.cn/tasks/case-i8tkwke4"
category: "研发与 IT"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-08-19T04:32:33.521Z"
tags:
  - "AI"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# AI 看板：用 AI 开发并跨设备监控 Codex、Claude Code 与 Gemini CLI

> 介绍如何借助 AI coding agent 开发 AI 看板应用，如何使用 AI Connector 与 AgentBoard 在其他设备监控 Codex、Claude Code 和 Gemini CLI，以及本地观察、加密中继和隐私保护原理

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-i8tkwke4?utm_source=github&utm_medium=repository&utm_campaign=case-i8tkwke4)

## 要解决的问题

AI Agent CLI 通常运行在开发电脑的本地终端中，用户难以从手机或另一台电脑了解任务状态，也不希望把终端或完整会话日志暴露到公网。

## 实现方案

通过 AI coding agent 构建 AI Board 与本地 AI Connector：Connector 在配对设备本地观察多个 CLI 的会话日志，只发送白名单状态，并使用认证的出站 WebSocket 连接将实时数据转发到 AgentBoard。

## Agent 工作流

1. 使用 AI coding agent 设计并实现 AI Board 与本地 Connector 的分层架构
2. 为 Codex、Claude Code 和 Gemini CLI 编写本地会话观察适配器
3. 在 AgentBoard 生成一次性配对码并在目标电脑运行 ai-connector pair
4. 启动 ai-connector observe serve，通过出站加密连接同步实时状态
5. 在手机或另一台电脑查看设备、会话状态、按需详情并继续符合条件的原会话

## 效果与复盘

在不开放目标电脑入站端口的情况下提供跨设备可见性，同时将会话正文、推理、本地文件和工具输入输出留在配对设备本地。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 研发与 IT |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | Codex, Claude Code, Gemini CLI, AI Connector, AgentBoard |
| 标签 | AI |
| 案例 ID | `case-i8tkwke4` |
| 最后更新 | 2026-08-19 |

## 关联资源

- [How to Use AI Connector with AgentBoard to Monitor Codex, Claude Code, and Gemini CLI from Another Device](https://agentcaseshare.cn/articles/article-8fg9a3c6)
- [使用 AI Connector 配合 AgentBoard 跨设备监控 Codex、Claude Code 和 Gemini CLI](https://agentcaseshare.cn/articles/article-nnr3pa7s)
- [ai-connector](https://github.com/parkerluxu/ai-connector)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
