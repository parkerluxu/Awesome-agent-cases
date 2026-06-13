# 桌面应用：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（7+15）

本节分为两类：`教程 / 案例 7 条` 和 `项目 / 论文 15 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 7 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | Trae Figma MCP 教程 | 中文教程 | InfoQ 中文教程，讲解如何将 Figma 设计稿上下文交给 Agent 并生成可预览页面，是参考设计到代码自动化转换流程的实操案例。 | https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P |
| 2 | Trae Playwright MCP 教程 | 中文教程 | InfoQ 上的中文教程，聚焦 Playwright 在 Agent 产物验收中的角色。演示如何用浏览器操作脚本验证 Web 页面，是端到端测试在 AI 工作流中的具体实践。 | https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI |
| 3 | Tom Guide Claude Code vs Codex | 媒体实测 | Tom's Guide 媒体实测，通过构建三个真实应用对比 Claude Code 与 OpenAI Codex，是评估两者在开发任务中性能差异与适用场景的实证报告。 | https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict |
| 4 | Tom Guide weekend app | 媒体教程 | Tom's Guide 的周末编码实录，展示用 AI 工具从零构建应用并分发至手机的全过程。案例价值在于快速原型迭代与移动端部署的实操细节。 | https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones |
| 5 | The Verge personal software | 媒体体验 | The Verge 的观察文章，探讨 AI 辅助编码如何催生个人软件新范式。记录实际任务中 AI 工具的使用流程与产出效果，是趋势与实操并重的参考。 | https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution |
| 6 | Washington Post Claude app | 媒体体验 | 华盛顿邮报互动报道，展示使用 Claude Code 作为编程伙伴构建应用的真实体验，是提炼任务流程与踩坑教训的第一人称记录。 | https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/ |
| 7 | Vibe coding overview | 百科/案例汇总 | 维基百科词条，系统梳理 Vibe coding 的概念、典型案例与社区实践。作为百科入口，可快速把握这一 AI 编程范式的演变脉络与核心特征。 | https://en.wikipedia.org/wiki/Vibe_coding |

### 项目 / 论文 15 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | OSWorld | Benchmark | OSWorld 基准评估 AI 在操作系统层面执行跨应用任务的能力，涵盖屏幕观察与控件操作。 | https://arxiv.org/abs/2404.07972 |
| 2 | Agent S | 开源项目/论文 | Agent S 开源项目与论文，实现可扩展的桌面自动化代理，支持跨应用任务执行与 GUI 交互。 | https://github.com/simular-ai/Agent-S |
| 3 | OSWorld | Benchmark | OSWorld 是桌面 GUI Agent 基准测试，提供跨应用任务环境，用于评估模型在屏幕观察、控件定位与操作执行上的综合能力。 | https://os-world.github.io/ |
| 4 | OpenCUA | 项目/论文 | OpenCUA 是通用计算机使用 Agent 的开源实现，聚焦屏幕理解与跨应用操作，可复现其任务拆解与执行流程。 | https://github.com/OpenCUA/OpenCUA |
| 5 | UI-TARS | 项目 | 字节跳动开源的 GUI Agent UI-TARS，基于视觉界面交互方案。通过截图定位并操作控件，适合研究纯视觉驱动的桌面自动化，无需依赖控件树。 | https://github.com/bytedance/UI-TARS |
| 6 | WindowsAgentArena | Benchmark | WindowsAgentArena 是微软开发的 Windows 环境 Agent 评测平台，在真实桌面应用中测试自动化任务执行效果，提供标准化评估场景。 | https://github.com/microsoft/WindowsAgentArena |
| 7 | AppAgent | 论文 | AppAgent 提出基于 LLM 的移动端 GUI Agent 框架，通过视觉观察实现应用内操作，其探索-执行循环可迁移至桌面场景。 | https://arxiv.org/abs/2312.13771 |
| 8 | ScreenAgent | 项目/论文 | ScreenAgent 介绍通过屏幕截图驱动 Agent 执行桌面任务的方法，展示了视觉语言模型在 GUI 自动化中的端到端应用。 | https://arxiv.org/abs/2402.07945 |
| 9 | SeeAct | 论文 | SeeAct 提出基于视觉理解的网页操作 Agent，从屏幕截图直接生成动作指令，其截图-动作映射思路适用于桌面环境。 | https://arxiv.org/abs/2401.01614 |
| 10 | CogAgent | 项目/论文 | CogAgent 结合视觉与语言模型实现 GUI 操作，提供屏幕理解与动作生成的完整方案，是多模态桌面 Agent 的参考架构。 | https://arxiv.org/abs/2312.08914 |
| 11 | OmniParser | 项目 | OmniParser 是微软开源的 UI 元素解析工具，将截图转换为结构化控件信息，为 Agent 提供可编程的屏幕理解层。 | https://github.com/microsoft/OmniParser |
| 12 | AnythingLLM Desktop | 开源项目 | 本地运行的 LLM 聊天应用，支持多种模型后端和文档私密问答。可作为 Agent 本地知识管理与对话界面的开箱即用方案。 | https://github.com/Mintplex-Labs/anything-llm |
| 13 | Jan | 开源项目 | 开源桌面 AI 助手，支持本地运行多种大语言模型，注重隐私和离线使用。其插件架构和模型管理方式对构建 Agent 桌面客户端有借鉴意义。 | https://github.com/menloresearch/jan |
| 14 | LM Studio docs | 产品/文档 | LM Studio 的官方文档，详述在桌面端运行和调试本地 LLM 的流程，包括模型加载、API 配置和性能调优。是搭建本地 Agent 推理环境的操作指南。 | https://lmstudio.ai/docs |
| 15 | LM Studio | 桌面应用 | 桌面应用，允许用户下载、运行和测试本地大语言模型，无需联网即可推理。是快速验证 Agent 模型选择和本地部署效果的实用工具。 | https://lmstudio.ai/ |
