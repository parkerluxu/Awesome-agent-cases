---
id: "case-1dmu8xax"
title: "用 Codex、Python 和 FFmpeg，把 330 个旅行素材剪成横竖两版 Vlog"
canonical_url: "https://agentcaseshare.cn/tasks/case-1dmu8xax"
category: "内容与传媒"
difficulty: "ADVANCED"
author: "luxu"
updated_at: "2026-07-22T15:50:25.959Z"
tags:
  - "AI Video Editing"
  - "FFmpeg"
  - "Python"
  - "codex"
  - "Vlog"
  - "Automation"
  - "Local AI"
  - "Tutorial"
---

<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->

# 用 Codex、Python 和 FFmpeg，把 330 个旅行素材剪成横竖两版 Vlog

> 把 94 段视频、152 张照片和 84 个 DJI 代理文件整理成可重复构建的本地剪辑工程，输出 415 秒横屏成片与 77 秒竖屏精华，并记录驱动、CUDA、版权和自动验收的完整实践。

[在 Agent Case Share 查看完整案例、文章和可复用资产](https://agentcaseshare.cn/tasks/case-1dmu8xax?utm_source=github&utm_medium=repository&utm_campaign=case-1dmu8xax)

## 要解决的问题

南宁两日游留下 330 个分散素材文件，其中 DJI 时间戳错误、手机视频存在可变帧率、照片有连拍重复，既要做 6 至 8 分钟横屏情侣 Vlog，也要重选镜头做 60 至 90 秒竖屏精华，同时必须保护原片并控制事实与音乐版权风险。

## 实现方案

以只读素材清单为基础，用 Python 编排 scan、analyze、render 三阶段流程，FFmpeg 负责媒体处理，OpenCV 与感知哈希辅助选片，faster-whisper 转写对白，YAML 保存可审计时间线，并用分段缓存、NVENC/CPU 回退和自动 QA 保证可恢复、可重复渲染。

## Agent 工作流

1. 递归扫描并用 ffprobe/Pillow 建立 assets.json；
2. 校正 DJI 日期与时区并配对 LRF；
3. 生成代理、缩略图、联系表、质量评分和转写；
4. 在 edit.yaml 中编排横竖两条时间线；
5. 分段渲染、响度归一化并导出 H.264/AAC；
6. 验证时长、规格、黑帧、素材引用和源文件完整性。

## 效果与复盘

输出 1920x1080、415.006 秒横屏版和 1080x1920、77.194 秒竖屏版，约 -14.1 LUFS，时间线三项测试全部通过，246 个原视频和照片保持不变。保守估计节省 6 至 10 小时的盘点、批处理和反复导出时间。

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | 内容与传媒 |
| 难度 | 高级 |
| 作者 | luxu |
| 工具与技术栈 | Codex Desktop + Python 3.12 + FFmpeg 8.1.2 + OpenCV + faster-whisper + NVIDIA NVENC |
| 标签 | AI Video Editing、FFmpeg、Python、codex、Vlog、Automation、Local AI、Tutorial |
| 案例 ID | `case-1dmu8xax` |
| 最后更新 | 2026-07-22 |

## 关联资源

- [我如何让 Codex 用 Python 和 FFmpeg，把 330 个旅行素材剪成两版 Vlog](https://agentcaseshare.cn/articles/article-vw14ab44)
- [可复现视频剪辑 Skill](https://agentcaseshare.cn/assets/cmrusr3zz001mwjozfmmh6uos)

---

本页是 [Agent Case Share](https://agentcaseshare.cn) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
