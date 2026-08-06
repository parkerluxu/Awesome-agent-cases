---
id: "case-sftf51x7"
title: "项目周报助手 PPT 迭代案例：从原始资料到老板汇报"
canonical_url: "https://agentcaseshare.cn/tasks/case-sftf51x7"
category: "企业协作 / 项目管理"
difficulty: "BEGINNER"
author: "luxu"
updated_at: "2026-07-10T16:43:24.766Z"
tags:
  - "PPT"
  - "周报"
  - "项目复盘"
  - "老板汇报"
  - "Markdown"
  - "Skill"
  - "案例教程"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 项目周报助手 PPT 迭代案例：从原始资料到老板汇报

> 读取 PRD、上线目标、埋点数据、反馈和客服记录后，借助可复用 Skill 与多轮反馈，把一份 14 页资料型 PPT 重构成 8 页决策汇报。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-sftf51x7?utm_source=github&utm_medium=repository&utm_campaign=case-sftf51x7)

## 要解决的问题

面对 PRD、目标文档、CSV 埋点、用户反馈、客服记录和聊天纪要等多源资料，直接让 AI 生成 PPT 往往会得到信息完整但逻辑分裂、图表不可读、文案像报告不像汇报的结果。

## 实现方案

先用 report-ppt-from-raw-materials Skill 让 AI 识别汇报类型、提炼主线并规划图表，再基于用户对信息密度、逻辑、标注、字号和文案压缩的多轮反馈，持续合并页面、重做图表和收敛叙事，最终生成 8 页老板可直接使用的决策型 PPT。

## Agent 工作流

阅读 6 份原始资料，判断汇报属于需求验证复盘
先输出 PPT 逻辑脉络、每页结论和图表规划
生成 14 页 v1 完整版 PPT 作为覆盖性初稿
根据信息密度低、逻辑分裂、缺少标注等反馈压缩到 10 页 v2
进一步放大图表字号、压缩文案，得到 v3
按业务问题重新合并证据页，压缩为 8 页 v4 最终推荐版
沉淀案例教程 Markdown 与可复用 Skill 作为资产复用

## 效果与复盘

从无到有完成 4 轮迭代：页数从 14 页压缩到 8 页，汇报主线从资料陈列转为结论先行，图表标签和文字可读性显著提升，并沉淀出一套可复用的 AI 协作做 PPT 方法。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 企业协作 / 项目管理 |
| 难度 | 入门 |
| 作者 | luxu |
| 工具与技术栈 | Codex, Markdown, PowerPoint, Node.js, CSV |
| 标签 | PPT、周报、项目复盘、老板汇报、Markdown、Skill、案例教程 |
| 案例 ID | `case-sftf51x7` |
| 最后更新 | 2026-07-10 |

## 关联资源

- [项目周报助手 PPT 迭代案例：从原始资料到老板汇报 复盘](https://agentcaseshare.cn/articles/article-0wuzw8ej)
- [案例教程：如何和 AI 多轮协作，把原始资料做成一份老板汇报 PPT](https://agentcaseshare.cn/articles/article-qe9lu4sk)
- [项目周报助手 PPT 生成 Skill](https://agentcaseshare.cn/assets/cmr54rt19000hwjde3rch06b7)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
