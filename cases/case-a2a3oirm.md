---
id: "case-a2a3oirm"
title: "订单需求邮件处理 Agent"
canonical_url: "https://agentcaseshare.cn/tasks/case-a2a3oirm"
category: "餐饮 / 食品批发供应链"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-07-10T16:43:24.774Z"
tags:
  - "订单处理"
  - "AI Agent"
  - "结构化抽取"
  - "LLM"
  - "人工审核"
  - "DeepSeek"
  - "JSON Schema"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 订单需求邮件处理 Agent

> 将客户邮件、聊天记录和附件表格中的非结构化订单需求自动抽取为标准订单 JSON，并通过置信度、人审规则、LLM 归一化和人工审核兜底降低错单风险。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-a2a3oirm?utm_source=github&utm_medium=repository&utm_campaign=case-a2a3oirm)

## 要解决的问题

B2B 食品批发订单入口来自邮件、聊天记录和附件表格，客户表达常常不完整、不标准、跨多条消息且包含历史引用、改单、取消、价格阈值和脏数据，人工录单容易遗漏上下文并产生错单。

## 实现方案

构建一个 AI + 规则混合的订单处理 Agent：先加载邮件、聊天和附件，优先使用 LLM 抽取订单语义，再通过字段映射、类型归一化、本地规则回退、业务人审规则和 Schema 校验生成可下游消费的标准订单 JSON。

## Agent 工作流

读取 inputs/emails、inputs/chats、inputs/attachments 中的样例输入
统一封装为 InputBundle
调用 OpenAI/DeepSeek 兼容接口抽取订单语义
对 LLM 输出做字段和类型归一化
在 items 为空或关键信息缺失时回退本地规则解析
应用 SKU、日期、地址、改单、取消、价格阈值等人审规则
用 schema 校验后批量输出 JSON 和 summary

## 效果与复盘

离线规则版可稳定处理全部 23 个样例；LLM 版在兼容 DeepSeek 的 json_object 输出后，通过归一化和兜底策略显著减少格式不一致导致的失败。该方案减少人工录单和复核成本，让运营人员聚焦于真正需要确认的高风险订单。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 餐饮 / 食品批发供应链 |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | Python 标准库, OpenAI/DeepSeek 兼容 Chat Completions, 本地规则解析器, LLM 输出归一化层, JSON Schema 校验, 批处理脚本, unittest |
| 标签 | 订单处理、AI Agent、结构化抽取、LLM、人工审核、DeepSeek、JSON Schema |
| 案例 ID | `case-a2a3oirm` |
| 最后更新 | 2026-07-10 |

## 关联资源

- [订单需求邮件处理 Agent：AI 实现需求文档](https://agentcaseshare.cn/articles/article-m969ikgf)
- [订单需求邮件处理 Agent 实现教程](https://agentcaseshare.cn/articles/article-35syv8ag)
- [订单需求邮件处理 Agent Skill](https://agentcaseshare.cn/assets/cmr3ove0e0008wjde5006uat3)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
