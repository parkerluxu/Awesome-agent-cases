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
