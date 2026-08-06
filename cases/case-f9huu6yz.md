---
id: "case-f9huu6yz"
title: "用 Codex 从需求到真机：声音地图微信小程序"
canonical_url: "https://agentcaseshare.cn/tasks/case-f9huu6yz"
category: "研发与 IT"
difficulty: "ADVANCED"
author: "luxu"
updated_at: "2026-08-01T16:27:14.176Z"
tags:
  - "codex"
  - "微信小程序"
  - "TypeScript"
  - "Node.js"
  - "Playwright"
  - "AI"
  - "真机联调"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 用 Codex 从需求到真机：声音地图微信小程序

> 用 Codex 将“校园地点 + 10-60 秒环境声音 + 当下感受”的想法落成原生 TypeScript 微信小程序，覆盖产品拆解、本地体验、自托管 API、真机联调、测试、部署说明与教程素材生成。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-f9huu6yz?utm_source=github&utm_medium=repository&utm_campaign=case-f9huu6yz)

## 要解决的问题

如何把一个校园声音地图的产品想法，落成能定位、录音、上传、播放、收藏与举报的微信小程序，并在不依赖付费云开发的前提下同时支持低成本本地体验和多人真机联调。

## 实现方案

Codex 先把目标拆成页面流、数据模型、业务边界和测试用例，再实现统一 API 层，让同一套页面可在 LOCAL、SELF_HOSTED 与 CLOUDBASE 三种模式间切换。自托管路径使用 Node.js/Express、JWT 和音频上传接口，并补齐契约测试、服务端行为测试、部署检查与可复用视觉素材工作流。

## Agent 工作流

1. 明确地图浏览、选点、10-60 秒录音、感受与标签的 MVP 边界；2. 设计 MapPost、媒体与审核状态，并拆分地图、录音、详情和我的记录页面；3. 实现本地体验模式验证设备交互；4. 通过统一 API 层接入自托管 REST 服务；5. 加入微信登录、JWT、音频上传、服务端校验、收藏与举报；6. 运行契约测试与服务端测试；7. 在开发者工具和真机检查定位、麦克风、HTTPS 域名、上传与播放；8. 生成教程配图、文章与社媒长图。

## 效果与复盘

交付了可运行的小程序前端、自托管 API、可切换的运行模式、7 项自动化测试、真机联调路径、完整复盘文章，以及可重复生成教程配图和社媒长图的 Skill。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 研发与 IT |
| 难度 | 高级 |
| 作者 | luxu |
| 工具与技术栈 | Codex Desktop；微信开发者工具；Playwright 浏览器渲染 |
| 标签 | codex、微信小程序、TypeScript、Node.js、Playwright、AI、真机联调 |
| 案例 ID | `case-f9huu6yz` |
| 最后更新 | 2026-08-01 |

## 关联资源

- [从一句需求到可真机联调：声音地图微信小程序复盘](https://agentcaseshare.cn/articles/article-349hv3ng)
- [sound-map](https://gitee.com/handsomest/sound-map)
- [小程序案例教程与社媒配图生成 Skill](https://agentcaseshare.cn/assets/cmsaeqpgm002qwj3dfmp2gta5)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
