---
id: "case-o9cfvknt"
title: "从一句话需求到可运行的客服机器人"
canonical_url: "https://agentcaseshare.cn/tasks/case-o9cfvknt"
category: "其他"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-07-10T16:43:24.778Z"
tags:
  - "AI 客服"
  - "Agent"
  - "Skill"
  - "人机协作"
  - "FastAPI"
  - "电商"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 从一句话需求到可运行的客服机器人

> 一次完整的人机协作实录：用户带着两份需求文档来，最后得到一个 56 个测试全绿、可切换真实 AI 的电商客服机器人。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-o9cfvknt?utm_source=github&utm_medium=repository&utm_campaign=case-o9cfvknt)

## 要解决的问题

电商平台客服面临高频重复咨询、大促期间响应慢的问题。传统方案只是把 FAQ 页面换成聊天界面，但真正的 AI 客服应该是：用户用自然语言描述问题，AI 识别意图，调用不同 Skill 完成查询、判断、创建工单、发起售后、转人工等操作。

## 实现方案

构建了一个 Agent + 多 Skill 调度系统的电商客服 Demo：意图识别 → 参数抽取 → 权限/风险判断 → Skill 编排 → mock API 调用 → 结果翻译 → 二次确认 → 转人工。核心设计：权限、风险、转人工用显式代码硬控制，不交给 LLM 自由判断；LLM 失败自动回退到规则模式，保证服务永远可用。

## Agent 工作流

1. 用户先让 AI 读两份需求文档并提炼需求（先对齐理解，不急着写代码）
2. 在关键决策点做选择（技术栈/范围/交付形式），避免 AI 按错误假设跑偏
3. 让 AI 先出 P0~P6 分阶段计划，每阶段产出可运行、可验证的结果
4. 逐阶段实现：P0 脚手架 → P1 mock 数据 → P2 Skill 层 → P3 Agent 路由 → P4 前端 → P5 场景测试 → P6 验收
5. 需求升级：接入真实 AI（DeepSeek API），从规则模式升级为 LLM 优先、规则回退
6. 细节打磨：配置文件取代命令行配置，56 个测试全绿

## 效果与复盘

56 个测试全绿，8 个演示场景通过端到端验证。6 类核心场景 + 多轮对话 + 二次确认 + 转人工 + 权限校验全覆盖。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 其他 |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | Python, FastAPI, DeepSeek, pytest, Mermaid |
| 标签 | AI 客服、Agent、Skill、人机协作、FastAPI、电商 |
| 案例 ID | `case-o9cfvknt` |
| 最后更新 | 2026-07-10 |

## 关联资源

- [原始需求材料解读](https://agentcaseshare.cn/articles/article-0d805vx0)
- [系统架构图解](https://agentcaseshare.cn/articles/article-c236uuvw)
- [从一句话需求到可运行的客服机器人](https://agentcaseshare.cn/articles/article-8mro2sj0)
- [从一句话需求到可运行的客服机器人](https://agentcaseshare.cn/articles/article-avtfbo2t)
- [E-commerce Customer Service Bot - Source Code](https://agentcaseshare.cn/assets/cmrc2rrw401t1wj9p1qle1owi)
- [Human-AI Collaboration Development Methodology](https://agentcaseshare.cn/assets/cmrc2rrw501t2wj9p72eckq0r)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
