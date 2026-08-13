---
id: "case-sopyouc8"
title: "如何用 AI 制作一个完整的教学短视频"
canonical_url: "https://agentcaseshare.cn/tasks/case-sopyouc8"
category: "教育内容制作"
difficulty: "INTERMEDIATE"
author: "luxu"
updated_at: "2026-08-13T15:30:08.397Z"
tags:
  - "教学视频"
  - "神经配音"
  - "字幕"
  - "FFmpeg"
  - "音频混音"
  - "钢琴音乐"
  - "版权合规"
  - "HTML游戏"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 如何用 AI 制作一个完整的教学短视频

> 完整记录 AI 如何从课程目标和逐字稿生成教学画面、命令动画、神经配音、逐字字幕、背景音乐和最终 MP4，并总结真实迭代中的音频排障、版权核验与人工验收方法。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-sopyouc8?utm_source=github&utm_medium=repository&utm_campaign=case-sopyouc8)

## 要解决的问题

希望建立一套可复用的 AI 教学短视频生产流程：由 AI 生成教学画面和动画，生成自然配音与同步字幕，选择并混合合规背景音乐，最后导出可发布的视频。实际制作中还需要解决音乐听不见、混音衰减、字幕同步和版权归因等问题。

## 实现方案

让 AI 负责脚本拆解、分镜、HTML/CSS/JavaScript 动画、逐段神经 TTS、SRT 时间轴和 FFmpeg 命令；通过 volumedetect 分离诊断音乐母带与成片，使用 amix=normalize=0 的固定增益混音保持旁白优先，使用授权清晰的钢琴纯音乐并保存归因信息，最后由人工核验内容、画面、音频和版权。

## Agent 工作流

1. 输入课程目标、逐字稿、受众和安全要求
2. 由 AI 生成章节结构、分镜表和镜头级讲解文案
3. 由 AI 生成 HTML/CSS/JavaScript 教学画面和命令动画
4. 渲染 1920×1080 视频并校准画面时间线
5. 按语义切分文案，逐段生成自然中文神经配音
6. 记录实际音频时长并自动生成 SRT 字幕
7. 使用 FFmpeg/libass 烧录字幕并抽帧检查
8. 选择、核验许可证并循环处理背景音乐
9. 用固定增益和 amix=normalize=0 混音，确保旁白明显更大
10. 使用 alimiter、AAC 和 faststart 导出最终 MP4
11. 检查编码、时长、响度、字幕、归因文本和真实播放效果
12. 由人工确认教学准确性、音画质量和版权责任

## 效果与复盘

沉淀一套面向软件操作、编程入门、数据分析和安全培训等课程的 AI 视频生产方法，明确 AI 生成内容、工具链执行和人工验收的边界，并能快速定位音乐过小、旁白被衰减和字幕错位等常见问题。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 教育内容制作 |
| 难度 | 中级 |
| 作者 | luxu |
| 工具与技术栈 | Codex + HTML/CSS/JavaScript + 神经 TTS + FFmpeg + libass |
| 标签 | 教学视频、神经配音、字幕、FFmpeg、音频混音、钢琴音乐、版权合规、HTML游戏 |
| 案例 ID | `case-sopyouc8` |
| 最后更新 | 2026-08-13 |

## 关联资源

- [如何用 AI 制作一个完整的教学短视频](https://agentcaseshare.cn/articles/article-wkwdnqy0)
- [AI 教学短视频端到端制作工作流](https://agentcaseshare.cn/assets/cmsrm67oa001nwjziqokyukoq)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
