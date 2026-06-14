# 嵌入式设计：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（0+7）

本节分为两类：`教程 / 案例 0 条` 和 `项目 / 论文 7 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 0 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|

### 项目 / 论文 7 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | EmbedAgent/EmbedBench | 论文 | EmbedAgent与EmbedBench论文，为嵌入式智能体设计专用基准，涵盖任务定义、评估指标与实验设计，填补该领域评测空白。 | https://arxiv.org/abs/2506.11003 |
| 2 | IoT-SkillsBench | 论文 | IoT-SkillsBench论文聚焦物联网场景下的技能评估，构建了问题定义与数据集，用于分析智能体在真实设备交互中的性能。 | https://arxiv.org/abs/2603.19583 |
| 3 | Grounded Copilot | 论文 | Grounded Copilot论文提出基于上下文的代码生成方法，通过技术框架与评估结果，展示如何提升生成代码在嵌入式场景的适配性。 | https://arxiv.org/abs/2206.15000 |
| 4 | CodegenBench | 论文 | CodegenBench论文提出代码生成基准测试，包含任务设定、数据来源与性能对比，为嵌入式代码生成模型提供标准化评测工具。 | https://arxiv.org/abs/2606.04023 |
| 5 | LLM-aided Design | 综述 | LLM-aided Design维基百科综述，概述大语言模型辅助设计领域，涵盖关键概念与研究方向，为嵌入式设计中的AI应用提供宏观视角。 | https://en.wikipedia.org/wiki/LLM_aided_design |
| 6 | TensorFlow Lite Micro | 开源项目 | 专为 MCU 优化的机器学习推理引擎，提供从模型转换到部署的完整流程。在嵌入式 Agent 中，它是微控制器上运行轻量级 AI 模型的标准方案。 | https://github.com/tensorflow/tflite-micro |
| 7 | Edge Impulse SDK | 开源项目 | Edge Impulse SDK 提供了嵌入式设备上的推理运行时，通过 C++ API 支持 ARM Cortex-M 等平台。其价值在于将训练好的模型高效部署到资源受限的硬件上，是边缘 AI 落地的实用工具。 | https://github.com/edgeimpulse/inferencing-sdk-cpp |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| open-agent-sdk-go | Go 轻量级 Agent SDK | 在 Go 中构建 AI Agent，支持工具执行、MCP 和多提供商 LLM 兼容 | [GitHub](https://github.com/Sammyblear596/open-agent-sdk-go) |
| ESP32-LLM-Agent-Bridge | ESP32 与 LLM Agent 桥接 | 通过轻量级 UART 协议桥接 LLM AI Agent 与 ESP32 IoT 设备，受 DCP 启发 | [GitHub](https://github.com/kushagrabansal-IOT/ESP32-LLM-Agent-Bridge) |
| TuyaOpen | AI+IoT 框架 | 面向 T2/T3/T5AI/ESP32 等硬件的下一代 AI+IoT 框架，支持快速 IoT 与 AI Agent 硬件集成 | [GitHub](https://github.com/tuya/TuyaOpen) |
| zenclaw | ESP32 端侧自主 Agent | 在 ESP32 微控制器上运行的完全自主 AI Agent，支持工具使用、持久记忆、定时任务、多通道消息 | [GitHub](https://github.com/bennyzen/zenclaw) |
| project-nova | 多 Agent 架构 | 连接 25+ 专业 Agent 的多 Agent AI 架构，通过 n8n 和 MCP 服务器路由请求，覆盖知识库、DAW、家庭自动化等 | [GitHub](https://github.com/PradeepaRW/project-nova) |
| AIOS | 生产级多 Agent 系统 | 包含 8 个自主 Agent（规划、记忆、研究、简历、工作、编码、评估、文档），展示 LLM 编排、RAG 流水线、语义搜索等 | [GitHub](https://github.com/nalla-dinesh/AIOS) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Device Context Protocol | 论文 | 面向受限设备的紧凑、安全优先架构，用于 LLM 控制微控制器，解决 MCP 无法下沉到 MCU 及幻觉安全问题 | [arXiv](https://arxiv.org/abs/2605.26159v1) |
| PI-Hunter | 论文 | 自动化红队测试，暴露和定位 Agent 系统中的提示注入攻击 | [arXiv](https://arxiv.org/abs/2606.12737v1) |
| ProPlay | 论文 | 程序化世界模型，使 LLM Agent 在部分可观测环境中通过交互自我进化 | [arXiv](https://arxiv.org/abs/2606.12780v1) |
| AI Agents Enable Adaptive Computer Worms | 论文 | 展示 AI Agent 可生成针对每个目标定制攻击策略的自适应计算机蠕虫 | [arXiv](https://arxiv.org/abs/2606.03811v1) |
| CORE-Bench | Benchmark | 面向 Agent 编码时代的代码检索综合基准，评估 Agent 在仓库中定位相关文件和函数的能力 | [arXiv](https://arxiv.org/abs/2606.11864v1) |
| LLM Agent Based Renewable Energy Forecasting | 论文 | 基于 LLM Agent 的可再生能源预测，利用边缘和 IoT 数据实现太阳能、风能、天气感知的决策支持 | [arXiv](https://arxiv.org/abs/2605.25141v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框 25 年来首次重新设计 | 媒体实测 | Google I/O 宣布将搜索框从简单关键词输入改造为动态 AI 驱动对话界面 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI 收购 Ona | 媒体实测 | OpenAI 计划收购 Ona，为 Codex 扩展安全、持久的云端环境，支持企业工作流中的长时间运行 AI Agent | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Antigravity Awesome Skills | Agent 技能集合 | 1,527+ 个 Agent 技能，适用于 Claude Code、Gemini CLI、Cursor、Copilot 等 | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tNl9NbVNGU214YXktUlkyVU5SM24xdkdYeUtGS0pXcTNPM0g0VnNmOVB1alc3S2NQcUR2cFhrLWZMR0p0UV85TjFvME5lRUowWW4yNnZkeEZMZnpVbjBjdlNCNA?oc=5) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| luxar-embedded-agent | STM32 嵌入式 AI Agent 工具包 | 面向 STM32 的嵌入式 AI Agent 工具包，支持固件生成、审查、构建、烧录、监控和调试工作流 | [GitHub](https://github.com/neltharion11/luxar-embedded-agent) |
| IntegratedPipeline-Specialized-Non-LLM-AI-Agent-Framework | 非 LLM 内存增强 Agent 框架 | 专为非 LLM 内存增强 Agent 框架设计的独立 AI Agent 库，可在消费级设备到高端嵌入式系统上高效运行，支持持续学习 | [GitHub](https://github.com/Micro-Novelty/IntegratedPipeline-Specialized-Non-LLM-AI-Agent-Framework) |
| ori-runtime | 离线 Agentic IoT 运行时 | 开源、可离线的 Agentic IoT 运行时，支持物理执行信任，通过分层 LLM 推理和分级授权模型实现安全的自主物理行动，可在树莓派上运行 | [GitHub](https://github.com/ori-platform/ori-runtime) |
| SFES | STM32 固件工程标准 | STM32 商业固件项目工程标准，包含 AI Agent 协作规则 | [GitHub](https://github.com/grailguo/SFES) |
| stm32-dev | STM32 开发模板 | STM32F103C8T6 开箱即用开发模板，支持 Makefile 增量编译、HAL 精简、AI Agent 友好 | [GitHub](https://github.com/SlumberMin/stm32-dev) |
| stm32-ai-agent | STM32 自动化编程 Agent | 可自动化进行 STM32 单片机编程的 AI Agent | [GitHub](https://github.com/zhang137-zhang/stm32-ai-agent) |
| voxedge | 全离线语音 Agent | 在骁龙手机上运行的全离线语音到语音 Agent，集成端侧 ASR、4B LLM 和 TTS，首次音频延迟约 0.6 秒 | [GitHub](https://github.com/GT-KIM/voxedge) |
| SKY_Agentic-AI-Robot | 医疗保健机器人 | 集成 LLM、计算机视觉、语音和移动控制的 Agentic AI 医疗机器人，基于 Arduino Mega + ESP32 | [GitHub](https://github.com/MasterWise23/SKY_Agentic-AI-Robot) |
| EmbedClaw | ESP32-S3 模块化 Agent 运行时 | 在 ESP32-S3 上运行模块化 Agent 运行时，管理 LLM、工具、内存和通道，实现高效消息处理 | [GitHub](https://github.com/Laureenundecided267/EmbedClaw) |
| streamcore-server | 实时语音 Agent 服务器 | 开源实时语音 Agent 服务器（Go 语言），支持 WebRTC、流式 STT/LLM/TTS 管道、ESP32 支持和全本地模式 | [GitHub](https://github.com/streamcoreai/streamcore-server) |
| flashprobe-mcp | 嵌入式固件烧录/监控 MCP 服务器 | MCP 服务器，通过 probe-rs 或 espflash 烧录和监控嵌入式固件，支持 STM32、nRF、RP2350、ESP 等目标 | [GitHub](https://github.com/okhsunrog/flashprobe-mcp) |
| ESP-32-s3-Story-maker-LLM | 跨芯片 LLM 部署 | 将 15M/42M 参数 Llama 模型拆分到两个 ESP32-S3 上运行，INT4 量化，位精确验证 | [GitHub](https://github.com/harmansingh4163-ai/ESP-32-s3-Story-maker-LLM) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Toward a Modular Architecture for Embedded AI Agent Systems at the Edge | 论文 | 提出面向嵌入式 Agent 系统的模块化参考架构，解决微控制器上部署 LLM Agent 的内存和能耗约束 | [arXiv](https://arxiv.org/abs/2606.02862v1) |
| AutoMCU: Feasibility-First MCU Neural Network Customization via LLM-based Multi-Agent Systems | 论文 | 基于 LLM 多 Agent 系统的 MCU 神经网络定制方法，优先考虑可行性，解决内存、存储和计算约束 | [arXiv](https://arxiv.org/abs/2605.21560v1) |
| The Energy Blind Spot: NVIDIA's Flagship Edge AI Hardware Cannot Support Process-Level Energy Attribution | 论文 | 揭示 Agentic AI 工作负载在边缘部署中的能耗问题，指出编排结构主导能耗成本 | [arXiv](https://arxiv.org/abs/2605.27599v1) |
| AI-IoT-Robotics Integration: Survey of Frameworks, Emerging Trends, and the Path Toward Connected Robotics | 论文 | 综述 AI、IoT 和机器人融合的框架、新兴趋势及统一设计框架的缺失 | [arXiv](https://arxiv.org/abs/2606.01015v1) |
| Semantic Multi-Agent Intrusion Detection for IoT: Zero-Day and Adversarial Threats with Risk-Aware Reasoning | 论文 | 面向 IoT 的语义多 Agent 入侵检测系统，应对零日攻击和对抗性威胁 | [arXiv](https://arxiv.org/abs/2606.10323v1) |
| From Rocq to Metal: A Pipeline for Formally Verified Microcontroller Firmware | 论文 | 展示如何在微控制器上实现形式化验证的固件，构建裸机 CPS 虚拟机运行 Rocq 提取的 Scheme | [arXiv](https://arxiv.org/abs/2606.02651v1) |
| Energy-Efficient On-Device RAG on a Mobile NPU: System Design and Benchmark on Snapdragon X Elite | 论文 | 首个在骁龙 X Elite NPU 上运行端到端 RAG 管道的系统，所有神经阶段均在 NPU 上执行 | [arXiv](https://arxiv.org/abs/2606.11257v1) |
| AlignFed: Alignment-Aware Asynchronous Federated Fine-Tuning for LLMs in Heterogeneous Edge Environments | 论文 | 面向异构边缘环境的 LLM 异步联邦微调方法，解决数据隐私和计算资源异构挑战 | [arXiv](https://arxiv.org/abs/2606.08197v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Programming an Arduino with Codex - Agentic Embedded Coding, No IDE | 视频教程 | 使用 Codex 对 Arduino 进行 Agentic 嵌入式编程，无需 IDE | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9JZnJHTDdZZGVQZG1DU0w3cngyRHBuSlM4MTB6LUpmckd4SkxFSmxRcWhIek9wRXFXREgwdUNSZjE5M09XNkJyTE5JV3pMbTZIbFJaLVV3?oc=5) |
| AI Agents at the Edge, Robotics, Motor Control ICs: Embedded Week Insights | 行业洞察 | 嵌入式周洞察：边缘 AI Agent、机器人、电机控制 IC | [embedded.com](https://news.google.com/rss/articles/CBMinAFBVV95cUxPdnpDS1JZeEh0MjJ5RDJNZ3RiZ29UZUhfdERrNTdNVE5PVFNrRnNsWjZROFU1R2NaWXppWDVQS3daRTYtaFM3YS02OU4zZ2pZOG1ocWkxQWVnQWFJTFRFM1ZUTkl2OXRFTVFjOG5ST0llUFpBUXJPSzZDX0VrdVZwUzEzZDRWbFR2SnpyWVRGMlg4U2J3aHVGS01GU0E?oc=5) |
| Anthropic's open-source Claude Desktop Buddy turns ESP32-S3 devices into interactive AI desk companions | 产品实测 | Anthropic 开源 Claude Desktop Buddy，将 ESP32-S3 设备变为交互式 AI 桌面伴侣 | [CNX Software](https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRU9vdW91bV9tUmV6VHZEVUNUa2RPeGJaSEZUcE5KbzNGbzN3MTdBdS0yUXE4UjV5STlzRFFoUzZGeVhiWXZENnFHSFZsZ3ZnMFRkbjRJcEVVeHpGVGltenpmMXF3RDB3bzhNb0lLcVJNLVBaS2Z1Y1lsUmV6Zm00X2hFXzJSN2dLSUhmM2doLVdfWWwyQVFMbWtmWVpKUjk3VFRqdVBPam9oa2UyNVpmRnE1Rm1CVGhRRWxydlBZV2xzRXpUa05kdFd2WGY0WmVSWGVzcms0b1l1NzTSAeMBQVVfeXFMTlNaMFUzNUdGbzBFNU8yOG5YOXIxcF8wU2hTaVdfSXJQejdNWmJWMVZVbGFVSElYelJORUo5RlZtd3hYajM5MXc5UklFSFFFRFdZcmpmWDVKUW9uQk5jUXgzSkdLb2hYNEUtbzBfOTg2bnZCLTd5eVpuSE9KNWc4MENfdWhjYnhhdVRVNDNvZlBCNVlBMlI3Z0Vmb0lVQWJYby1nSHp0TjVZWk80cGs4UDJuLUdaZ2wwWGF1SXI2dC0teV85OXd2NEY3SlROcnFlZk9ISE93QXJsTzlIVllzSVFlZ2c?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| How to use NIST and ISO frameworks to govern AI agents | 治理框架指南 | 如何使用 NIST 和 ISO 框架治理 AI Agent | [Help Net Security](https://news.google.com/rss/articles/CBMihwFBVV95cUxOOVp4NFcydW5WcG5RaC1vb1RVSzJYVFR2U3Y4T1JVcmdzZ01ZbHFOekwycFBuSlNqR0h3aEZmQTRKTi1EZDF5SWdWR0E0SGtvQVhOM2VvTks2Z1hHdDdpb0hYVjgta29UNlJ3ak1mNUFtRGlkUmVwXzFvaFdEeVVDUmtZSmZsX0k?oc=5) |
| 30+ Industrial AI Agents to Watch | 行业报告 | 值得关注的 30+ 工业 AI Agent | [AIMultiple](https://news.google.com/rss/articles/CBMiVkFVX3lxTE16WndndUhzVUtXRDNRZ1BqSzZFTE1zSEtkckZqYlg1cWxFUnNqMmxBMUhTQlptVjhJa09JOUNhYUlTNlBmSnNKVXYtS3o2Qks0VnhLZHln?oc=5) |
| Advancing AI Infrastructure for Agentic AI with NVIDIA DOCA In-Silicon Security | 技术博客 | 使用 NVIDIA DOCA 硅内安全技术推进 Agentic AI 基础设施 | [NVIDIA Developer](https://news.google.com/rss/articles/CBMitAFBVV95cUxOcVZYR1lPd1NtcTg0c0I0Rl9pX3ZtWEd4VlJ3em5ULWFpX0RzUDF1aHY3bkFHOFpGelZPNUNNTnhDbHBHY3NqV1p0MUdsaU10aGE0a0phdDljNW4xMWx1Y2JsdzNWRHVwbW8tQlBiMHRJd2JjbEFwWm5DVHdkVTZyd3lnbTJidmxPRW82UDRnUWF4WkxVY0RKV1dpY1RhR0JLNzFxTlNiTGlodjNKOTlXclNsZGQ?oc=5) |
