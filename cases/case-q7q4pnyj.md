---
id: "case-q7q4pnyj"
title: "DeepSeek Harness 全景拆解：从插件运行时到子 Agent 的五课系列"
canonical_url: "https://agentcaseshare.cn/tasks/case-q7q4pnyj"
category: "研发与 IT"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-08-23T13:32:51.567Z"
tags:
  - "DeepSeek Harness"
  - "Cordis"
  - "Agent Runtime"
  - "插件架构"
  - "Capability Seam"
  - "Subagent"
  - "Job Panel"
  - "Agent"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# DeepSeek Harness 全景拆解：从插件运行时到子 Agent 的五课系列

> 一套面向开发者的 DeepSeek Harness 技术学习案例，循序拆解 Model、Harness、Agent、Cordis、Profile/Bundle/Patch、Agent Loop、Session、Capability Seam、Tool、Job、Subagent、Codex/Claude Code Provider，以及 CLI、Web、Headless、ACP 和插件开发贡献路径。首篇从设计哲学和整体定位开始，后续课程将继续深入运行时执行、能力系统、多 Agent 协作与扩展开发。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-q7q4pnyj?utm_source=github&utm_medium=repository&utm_campaign=case-q7q4pnyj)

## 要解决的问题

DeepSeek Harness 同时涉及插件运行时、Agent Loop、会话事件、Provider、Capability Seam、工具、权限、后台 Job、Subagent 和多种入口。只把它当作另一个 Claude Code 或 Codex，容易混淆产品层与运行时层，难以读懂源码和判断适合扩展的位置。

## 实现方案

通过五课建立一条从设计哲学到工程实践的学习路径：第一课解释 Model/Harness/Agent、Cordis、一切皆插件和 Capability Seam；第二课解释 Profile、Bundle、Patch、Host/Agent/Client 分层与一次任务执行；第三课深入 Tool、Provider、Session、权限、错误处理和能力替换；第四课拆解 one-shot、continuable、Job、Codex/Claude Code Provider 和 Job Panel；第五课给出插件、Provider、UI、ACP/MCP 集成与社区贡献方法。

## Agent 工作流

1. 先区分 Model、Agent 和 Harness，建立整体心智模型
2. 理解 Cordis、Context、inject、apply、生命周期和插件作用域
3. 追踪 Profile、Bundle、Patch、Agent Loop、Session、Tool 和 Capability Seam
4. 学习 one-shot、continuable、Job、Subagent，以及 Codex/Claude Code Provider
5. 根据能力边界开发插件、Provider、Web UI 或其他扩展，并补充测试和文档

## 效果与复盘

帮助读者从“使用一个 AI 编程产品”切换到“理解和构建 Agent Runtime”，能够读懂 DSH 的插件组合方式、执行链路和扩展边界，并为后续开发和贡献建立可复用的方法论。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 研发与 IT |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | DeepSeek Harness; Cordis; TypeScript; Agent Runtime; CLI; Web UI; Headless; ACP |
| 标签 | DeepSeek Harness、Cordis、Agent Runtime、插件架构、Capability Seam、Subagent、Job Panel、Agent |
| 案例 ID | `case-q7q4pnyj` |
| 最后更新 | 2026-08-23 |

## 关联资源

- [第一课：DeepSeek Harness 到底是什么？它为什么不急着再做一个 Claude Code](https://agentcaseshare.cn/articles/article-3ai6qwcz)
- [第二课：你以为是在启动 Agent？其实 DSH 每次都在现场组装它](https://agentcaseshare.cn/articles/article-r6vzaw5n)
- [第三课：一个 Agent 任务到底是怎么跑起来的？从 Agent Loop 到 Trajectory](https://agentcaseshare.cn/articles/article-0m4vj16k)
- [第四课：Codex / Claude Code 子 Agent 是怎么接进来的？一文看懂 Job Panel](https://agentcaseshare.cn/articles/article-pjiqdg7e)
- [第五课：如何给 DeepSeek Harness 开发插件并贡献新特性？官方开发指南拆解](https://agentcaseshare.cn/articles/article-9vca1ex1)
- [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
