---
id: "case-7uwq9otu"
title: "AgentDock：统一管理 Codex、Claude Code 等本地 AI Agent，支持环境隔离与运行审计"
canonical_url: "https://agentcaseshare.cn/tasks/case-7uwq9otu"
category: "研发与 IT"
difficulty: "ADVANCED"
author: "luxu"
updated_at: "2026-09-13T14:12:14.667Z"
tags:
  - "codex"
  - "Claude Code"
  - "Agent Runtime"
  - "TypeScript"
  - "SQLite"
  - "本地优先"
  - "开源项目"
  - "AgentDock"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# AgentDock：统一管理 Codex、Claude Code 等本地 AI Agent，支持环境隔离与运行审计

> AgentDock 是面向 Codex、Claude Code 等本地 Agent CLI 的 local-first 控制面。它统一 Engine、Environment、Permission、Agent、Project、Session 与 Run，提供确定性路由、dry-run、SQLite 审计、回环 HTTP API、可恢复 SSE、零依赖 Node SDK、Control Center 和第三方 Adapter 生命周期管理。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-7uwq9otu?utm_source=github&utm_medium=repository&utm_campaign=case-7uwq9otu)

## 要解决的问题

多个代码 Agent CLI 各自拥有二进制、认证目录、配置、权限、会话和输出格式。个人与团队难以统一调度、隔离工作环境、在执行前确认真实边界，并在终端断开后追溯一次任务使用的 Agent、目录、权限、Session、事件和终态。

## 实现方案

以 AgentDock 作为本机 Agent Runtime 控制面：用 Adapter 统一 CLI 差异；用 Engine、Environment、Permission、Agent 和 Project 固化路由与边界；用 dry-run 在执行前解释计划；用 Session、Run、不可变快照、有序事件和 SQLite 保留证据；通过仅回环 API、Bearer Token、SSE、Node SDK 与 Control Center 服务脚本、IDE、CI 和人工审计。

## Agent 工作流

1. 安装依赖并运行 typecheck、测试和构建
2. 校验配置并使用 doctor 检查 Engine、Project 与 SQLite
3. 配置 Agent Engine、Agent Environment、Environment Permission、Agent 与 Project
4. 使用 dry-run 核对路由、工作目录、网络和写入边界
5. 通过 CLI 或本地 API 执行真实 Run
6. 在 CLI 或 Control Center 查看 Run 快照、Session 和事件时间线
7. 通过 JSONL 导出、SSE 或 Node SDK 接入脚本、IDE 与 CI
8. 按需安装并显式授权第三方 Adapter

## 效果与复盘

形成一套可运行、可审计、可扩展的本地多 Agent 控制面：同一套配置和证据链可同时服务 Codex、Claude Code、脚本、IDE、CI 与人工排查。2026-09-13 实测 typecheck、构建、配置校验、doctor 通过，24 个测试文件共 95 项测试全部通过。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 研发与 IT |
| 难度 | 高级 |
| 作者 | luxu |
| 工具与技术栈 | Codex、Claude Code、Node.js、TypeScript、SQLite |
| 标签 | codex、Claude Code、Agent Runtime、TypeScript、SQLite、本地优先、开源项目、AgentDock |
| 案例 ID | `case-7uwq9otu` |
| 最后更新 | 2026-09-13 |

## 关联资源

- [从一个统一入口的想法，到真实 Runtime 联调：我和 Codex 共同实现 AgentDock 的开发记录](https://agentcaseshare.cn/articles/article-odhsn1ur)
- [AgentDock 详细使用指南：统一管理 Codex、Claude Code 与本地 Agent Runtime](https://agentcaseshare.cn/articles/article-9eg4qz85)
- [AgentDock](https://github.com/parkerluxu/AgentDock.git)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
