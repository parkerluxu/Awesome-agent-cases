---
id: "case-7uwq9otu"
title: "使用Codex实现一个AgentDock"
canonical_url: "https://agentcaseshare.cn/tasks/case-7uwq9otu"
category: "研发与 IT"
difficulty: "ADVANCED"
author: "luxu"
updated_at: "2026-08-22T13:12:14.014Z"
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

# 使用Codex实现一个AgentDock

> 一项持续演进的开源实践：以 Codex 为主要结对开发伙伴，构建面向 Claude Code、Codex 等 Agent Runtime 的本地优先控制面。案例将长期记录从领域建模、双 Adapter、Run/Session 生命周期、SQLite 事件存储，到 API、路由、SDK、团队治理与远程执行的完整过程。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-7uwq9otu?utm_source=github&utm_medium=repository&utm_campaign=case-7uwq9otu)

## 要解决的问题

不同代码 Agent 的 CLI、会话、权限、工作目录和输出格式各自独立，个人与团队难以统一调度、隔离执行环境并追溯一次任务的实际执行条件。

## 实现方案

以 AgentDock 作为 Runtime 控制面：用 Adapter 统一 CLI 差异，以 Profile、Project、Policy 描述执行边界，以 Session、Run、RunEvent 保存生命周期和证据链；先完成本地 CLI 闭环，再逐步扩展本地 API、路由和第三方 Adapter SDK。

## Agent 工作流

1. 访谈并收敛统一 Runtime 调度的真实需求
2. 固化 Runtime、Adapter、Profile、Project、Policy、Session、Run 与事件模型
3. 为 Claude Code 和 Codex 实现并验证 Adapter
4. 接入配置校验、策略解析、SQLite 持久化和 CLI
5. 用真实 Runtime 输出修正 Session 与参数映射假设
6. 建立仅回环监听的 HTTP API 与事件流
7. 继续迭代认证、路由、SDK、团队治理与远程能力

## 效果与复盘

形成一套可复查、可复现、可持续扩展的 Agent Runtime 控制面实践记录；后续文章将保留设计取舍、失败日志、修复过程和完整项目演进，而不只展示最终结果。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 研发与 IT |
| 难度 | 高级 |
| 作者 | luxu |
| 工具与技术栈 | Codex、Claude Code |
| 标签 | codex、Claude Code、Agent Runtime、TypeScript、SQLite、本地优先、开源项目、AgentDock |
| 案例 ID | `case-7uwq9otu` |
| 最后更新 | 2026-08-22 |

## 关联资源

- [从一个统一入口的想法，到真实 Runtime 联调：我和 Codex 共同实现 AgentDock 的开发记录](https://agentcaseshare.cn/articles/article-odhsn1ur)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
