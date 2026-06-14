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

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AURA OS | 桌面编排层 | 为 AI 代理（Claude Code, Codex, Gemini, Hermes, Ollama）提供桌面编排层，集成 Obsidian 共享内存和 Telegram 远程终端，独立 Electron 应用，支持 Windows 和 Linux。 | [GitHub](https://github.com/Ursegorus/AURA-OS) |
| PawWork | 开源桌面 AI 代理 | 免费开源桌面 AI 代理，支持 macOS 和 Windows，可替代 Codex App 和 Claude Cowork。自带密钥，支持 75+ 提供商、ChatGPT OAuth、本地模型和 Office 文件，无需终端。 | [GitHub](https://github.com/Astro-Han/pawwork) |
| EverFern | 本地优先 AI 代理 | 免费、本地优先的 AI 代理，可像人类一样操作电脑（点击按钮、导航应用、填写表单、运行工作流），无订阅、无云端、数据不离开机器，开源替代 Claude Cowork 和 Manas Desktop。 | [GitHub](https://github.com/Everfern-AI/Everfern) |
| clawdcursor | MCP 回退层 | 基于 MCP 的回退层，当 API、工具或直接集成不可用时，允许 AI 代理通过 GUI 执行任务。跨操作系统、无障碍优先、仅本地运行。 | [GitHub](https://github.com/AmrDab/clawdcursor) |
| SplunkLens AI | 基础设施事件响应 | Electron 桌面应用，部署自主 AI 代理实时检测、调查和修复基础设施事件，连接 Splunk Enterprise，运行 30+ MCP 工具，支持 10 个 LLM 提供商，人工审批闭环。 | [GitHub](https://github.com/hm2325876-droid/log_book) |
| OpenAver | 元数据刮削工具 | 免费开源桌面应用，刮削 JAV 元数据并生成 NFO 和封面图，支持 Jellyfin/Emby/Kodi。一键安装，内置 8 个数据源，可选 Metatube 联盟，提供 REST API 供 AI 代理使用。 | [GitHub](https://github.com/slive777/OpenAver) |
| easiest-claw | OpenClaw 桌面 GUI | 为 OpenClaw 提供桌面 GUI，无需编码或额外设置即可在 Windows 和 macOS 上运行和管理 AI 代理团队。 | [GitHub](https://github.com/Liviastrange489/easiest-claw) |
| mcode | AI 代理编排桌面应用 | 高性能 AI 代理编排桌面应用，基于 Electron 构建，T3Code 替代品。 | [GitHub](https://github.com/Mzeey-Empire/mcode) |
| All-in-One | 多功能桌面应用 | 将多个生产力工具、游戏、PDF 工具和 AI 代理整合到一个桌面应用中，具有现代 GUI 和操作历史追踪功能。 | [GitHub](https://github.com/nickoder635-ai/All-in-One) |
| MyBoTeam | 个人 AI 代理团队 | 开源桌面应用，本地、私密、高效地运行个人 AI 代理团队。 | [GitHub](https://github.com/MyBoTeam/MyBoTeam) |
| agent-atlas-studio | 可视化建模器 | 类 Erwin 的可视化建模器，用于编排 AI 代理平台（编排器、任务、代理、MCP 工具、作业、路由器、系统），支持实时验证和导出注册表，基于 Vite + React + Tauri。 | [GitHub](https://github.com/Fox-River-AI/agent-atlas-studio) |
| laravel-mcp-inspector | Laravel AI 反馈工具 | 免费的 Laravel AI 反馈工具，提供实时可视化代理调试功能。 | [GitHub](https://github.com/Jimmyjamjam11/laravel-mcp-inspector) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| EpiBench | 表观基因组学分析基准 | 可验证的短周期表观基因组学分析基准，包含 106 个评估任务，覆盖 CUT&Tag/CUT&RUN、ATAC-seq、ChIP-seq 和 DNA 甲基化工作流。在 5,088 条有效轨迹中，GPT-5.5/Pi 以 45.0% 领先。 | [arXiv](https://arxiv.org/abs/2606.13602v1) |
| DeskCraft | 专业工作流基准 | 针对专业创意和工程软件中的长周期桌面工作流及人机协作的基准，强调代理需主动寻求信息和用户反馈。 | [arXiv](https://arxiv.org/abs/2606.03103v1) |
| Workflow-GYM | 长周期专业工作流评估 | 评估 AI 代理在真实专业领域中使用 GUI 完成长周期、高价值工作流的能力，覆盖多个领域。 | [arXiv](https://arxiv.org/abs/2606.11042v3) |
| Multi-Agent Computer Use | 多代理计算机使用 | 论证应从单代理计算机使用转向多代理系统，强调规划与并行执行，以应对复杂长周期任务。 | [arXiv](https://arxiv.org/abs/2606.01533v1) |
| GUI-RobustEval | GUI 代理错误恢复基准 | 包含 1,216 个可执行测试用例，系统衡量 GUI 代理从错误中恢复的能力，并提出了鲁棒性驱动的轨迹合成方法 RoTS。 | [arXiv](https://arxiv.org/abs/2605.29447v1) |
| UXBench | 移动端用户体验基准 | 基于 UI 截图评估用户体验的多模态基准，关注可用性、一致性和功能清晰度。 | [arXiv](https://arxiv.org/abs/2606.13192v1) |
| WeaveBench | 混合接口长周期基准 | 包含 114 个任务，覆盖 8 个真实工作领域，评估计算机使用代理在视觉桌面控制、命令行、代码编辑、浏览器和外部工具之间的跨接口编排能力。 | [arXiv](https://arxiv.org/abs/2606.09426v2) |
| DragOn | 拖拽交互基准与数据集 | 拖拽式 GUI 交互（如拖放、滑动、高亮）的基准和训练数据集，弥补当前模型在复杂拖拽操作上的不足。 | [arXiv](https://arxiv.org/abs/2606.06322v1) |
| MacArena | macOS 环境基准 | 在线 macOS 环境下的计算机使用代理基准，弥补 macOS 在现有基准中的缺失，覆盖更广泛的应用和更复杂的任务。 | [arXiv](https://arxiv.org/abs/2606.06560v1) |
| MedCUA-Bench | 临床计算机使用代理基准 | 仅基于截图的临床计算机使用代理基准，验证代理在医疗 GUI 中的可靠性，包含 5 个临床工作流和 30 个任务。 | [arXiv](https://arxiv.org/abs/2606.03203v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框 25 年来首次重新设计 | 行业动态 | Google 在 I/O 大会上宣布将搜索框从简单的关键词输入转变为动态 AI 驱动对话界面，标志着搜索范式的重大转变。 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| OpenAI 收购 Ona | 企业级 AI 代理 | OpenAI 计划收购 Ona，以扩展 Codex 的安全持久云端环境，支持企业工作流中的长周期 AI 代理。 | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| thewolffish/wolffish-extension | GitHub | 本地优先、Markdown 驱动的个人 AI 桌面应用，基于 Electron，将人脑架构映射到确定性 Agent 软件流水线，含 15 个运行时模块。 | [https://github.com/thewolffish/wolffish-extension](https://github.com/thewolffish/wolffish-extension) |
| cocode-kuma/CocodeAI | GitHub | 专为开发者设计的本地桌面 AI 编程助理，基于 Tauri v2 + React 19 + Bun，融合终端 AI Coding Agent 与图形界面。 | [https://github.com/cocode-kuma/CocodeAI](https://github.com/cocode-kuma/CocodeAI) |
| agent-sh/agent-workspace-linux | GitHub | 为 AI 代理提供隔离的 Linux 桌面工作区，通过 MCP 提供隐藏的代理专属桌面和浏览器，不触及用户真实桌面。 | [https://github.com/agent-sh/agent-workspace-linux](https://github.com/agent-sh/agent-workspace-linux) |
| electron-stagewright/electron-stagewright | GitHub | 像 Playwright 驱动浏览器一样驱动 Electron 应用，为 AI 代理提供 MCP 服务器。 | [https://github.com/electron-stagewright/electron-stagewright](https://github.com/electron-stagewright/electron-stagewright) |
| wardian-app/Wardian | GitHub | 本地桌面指挥中心，用于监督和塑造 AI 代理团队。 | [https://github.com/wardian-app/Wardian](https://github.com/wardian-app/Wardian) |
| openai/codex | GitHub | OpenAI 出品的轻量级终端编码代理，可本地运行，也支持 VS Code、Cursor、Windsurf 等 IDE 安装。 | [https://github.com/openai/codex](https://github.com/openai/codex) |
| oywq00008-cell/BroadlinkAC-For-Agent | GitHub | 让 AI 接管空调的多品牌红外控制器，通过 Broadlink RM 设备控制 17 种空调品牌，支持无头代理模式和桌面 GUI。 | [https://github.com/oywq00008-cell/BroadlinkAC-For-Agent](https://github.com/oywq00008-cell/BroadlinkAC-For-Agent) |
| junainfinity/VibeStudio | GitHub | 本地优先的 AI 编码代理，专为 Apple Silicon 设计，基于 Tauri + React，使用 mlx-mtp 推理，完全本地运行。 | [https://github.com/junainfinity/VibeStudio](https://github.com/junainfinity/VibeStudio) |
| ryantsai/KKTerm | GitHub | Windows 优先的 AI 代理超级工具，集成终端、SSH、SFTP、RDP/VNC、仪表盘、安装助手和内置 AI 助手。 | [https://github.com/ryantsai/KKTerm](https://github.com/ryantsai/KKTerm) |
| GCWing/BitFun | GitHub | 桌面级 Agent 运行时及桌面 Agent 应用套件，内置 Code Agent、Cowork Agent、Computer Use，具备记忆、个性和进化能力。 | [https://github.com/GCWing/BitFun](https://github.com/GCWing/BitFun) |
| mblua/AgentsCommander | GitHub | 跨工作组实例协调多组 AI 编码代理，支持根代理路由、可见终端和基于文件的交接。 | [https://github.com/mblua/AgentsCommander](https://github.com/mblua/AgentsCommander) |
| MMinasyan/lightcode | GitHub | 模型无关的编码代理，支持任意 OpenAI 兼容的 LLM 提供商，提供桌面 GUI、HTTP 守护进程和 ACP stdio 适配器。 | [https://github.com/MMinasyan/lightcode](https://github.com/MMinasyan/lightcode) |
| zosmaai/zosma-cowork | GitHub | pi 编码代理的桌面 GUI，开源的 Claude Cowork 替代方案。 | [https://github.com/zosmaai/zosma-cowork](https://github.com/zosmaai/zosma-cowork) |
| Alien0013/aegis | GitHub | 自改进、多提供商、多通道的终端代理工具集，包含有界代理循环、MCP、技能市场、浏览器/计算机使用等功能。 | [https://github.com/Alien0013/aegis](https://github.com/Alien0013/aegis) |
| IDanK0/CoworkLocal | GitHub | 自托管、本地优先的 AI 计算机使用代理，适用于 Windows，基于 Tauri + Rust + React，模型无关、隐私优先。 | [https://github.com/IDanK0/CoworkLocal](https://github.com/IDanK0/CoworkLocal) |
| imthegoodboy/Computer-use | GitHub | 计算机使用工具，代理可通过视觉控制电脑，受 OpenAI Computer Use 启发。 | [https://github.com/imthegoodboy/Computer-use](https://github.com/imthegoodboy/Computer-use) |
| Empty-democritus307/AutoProber | GitHub | 利用计算机视觉和代理自动探测电路板上的目标引脚，实现硬件探测自动化。 | [https://github.com/Empty-democritus307/AutoProber](https://github.com/Empty-democritus307/AutoProber) |
| umarkhanif28/ApexUIBridge | GitHub | 桥接 UI 自动化和 AI 的可定制工具包，集成 LlamaSharp 和 FlaUI。 | [https://github.com/umarkhanif28/ApexUIBridge](https://github.com/umarkhanif28/ApexUIBridge) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Fara1.5 – A family of frontier computer use agent models | 论文 | Microsoft 发布的计算机使用代理模型系列。 | [https://news.google.com/rss/articles/CBMigwJBVV95cUxQS0FIV2ZOZjZRdDdGMW5OUkZDaXlZU18yR2NXeFhCbHZaX2RpTEsxMFd0MWJVVmNsUEZtYlkyRkx1QXhNUVdOMEtzQlBQYTgwSVpWV00xR3VqTVZVa2s0WWw2SmhRY2M2YjduNnBsSVNvMlBLNWNDQlJURTBZdjA0dURhYw?oc=5](https://news.google.com/rss/articles/CBMigwJBVV95cUxQS0FIV2ZOZjZRdDdGMW5OUkZDaXlZU18yR2NXeFhCbHZaX2RpTEsxMFd0MWJVVmNsUEZtYlkyRkx1QXhNUVdOMEtzQlBQYTgwSVpWV00xR3VqTVZVa2s0WWw2SmhRY2M2YjduNnBsSVNvMlBLNWNDQlJURTBZdjA0dURhYw?oc=5) |
| Holo3.1: Fast & Local Computer Use Agents | 论文 | 快速、本地的计算机使用代理。 | [https://huggingface.co/blog/Hcompany/holo31](https://huggingface.co/blog/Hcompany/holo31) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| DeepSeek NEW Desktop App - The 24/7 Self-Evolving AI Agent! | 视频 | DeepSeek 新桌面应用介绍，号称 24/7 自进化 AI 代理。 | [https://news.google.com/rss/articles/CBMiVkFVX3lxTE1EN3F6WUt4NGJxQWxnREl4S1pOcE9ab3JTNHpKYnExbjB6emx5S3diV1pvNE5QQXBIS3ZUZGozVjlDX24zU2h0RTVCd0ZUX1JwMFhwYnB3?oc=5](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1EN3F6WUt4NGJxQWxnREl4S1pOcE9ab3JTNHpKYnExbjB6emx5S3diV1pvNE5QQXBIS3ZUZGozVjlDX24zU2h0RTVCd0ZUX1JwMFhwYnB3?oc=5) |
| 手机、平板、电脑同时控制Claude Code / Codex ?：Paseo实战指南 | 教程 | 跨设备控制 Claude Code 和 Codex 的实战指南。 | [https://news.google.com/rss/articles/CBMiZEFVX3lxTE44cWtDNjFlVER4OW1EYmtnNVZYckdGNkc4d2g1NU81MmFFRkhWQm84c3ZFdFUyOXBja2U3UkVqX3VKVFVNN1lrV2tsQ0VyVzJScDdxQmtzV0VtRU5ZSWItb05IT08?oc=5](https://news.google.com/rss/articles/CBMiZEFVX3lxTE44cWtDNjFlVER4OW1EYmtnNVZYckdGNkc4d2g1NU81MmFFRkhWQm84c3ZFdFUyOXBja2U3UkVqX3VKVFVNN1lrV2tsQ0VyVzJScDdxQmtzV0VtRU5ZSWItb05IT08?oc=5) |
| 2 分钟，教你国内爽用 Claude Code + Codex！保姆级教程 | 教程 | 国内环境下使用 Claude Code 和 Codex 的保姆级教程。 | [https://news.google.com/rss/articles/CBMiXEFVX3lxTE1MaWp3Q3FXR2NHMzlzTTBUbGV6N2pHX1UzZEs4NTAyVmRuSmxQYmJ1dzdvbERTM3NkNTluOFVyUHhwUkNyWmZjNmF2aTRiNFMxTFRLbUEyRi1JWU5h?oc=5](https://news.google.com/rss/articles/CBMiXEFVX3lxTE1MaWp3Q3FXR2NHMzlzTTBUbGV6N2pHX1UzZEs4NTAyVmRuSmxQYmJ1dzdvbERTM3NkNTluOFVyUHhwUkNyWmZjNmF2aTRiNFMxTFRLbUEyRi1JWU5h?oc=5) |
| Claude Code vs Codex vs Cursor: The Best AI Coding Tool in 2026 | 评测 | 2026 年三大 AI 编码工具对比评测。 | [https://news.google.com/rss/articles/CBMilwFBVV95cUxPenZHSXdkTXE3TUlQUWlZMExVZC0wX3BkdVVPd3dJQmpYYzVVY04tZjZlU19kMUtTVTFqcDFMbEZMb0xsLVQ4VmtUbG9rTHpYRVdNbnFDNW1LcGhJZE4yOHJFYm4zVXptN09IaEstYkxBVlhweDg2NnFkQS1DT0NIYVJZNTFzcmFWNk4weUpZY3pzaVRZSXcw?oc=5](https://news.google.com/rss/articles/CBMilwFBVV95cUxPenZHSXdkTXE3TUlQUWlZMExVZC0wX3BkdVVPd3dJQmpYYzVVY04tZjZlU19kMUtTVTFqcDFMbEZMb0xsLVQ4VmtUbG9rTHpYRVdNbnFDNW1LcGhJZE4yOHJFYm4zVXptN09IaEstYkxBVlhweDg2NnFkQS1DT0NIYVJZNTFzcmFWNk4weUpZY3pzaVRZSXcw?oc=5) |
| DeepSeek GUI：把终端里的 AI Agent 搬进桌面工作台 | 教程 | 将终端 AI Agent 迁移到桌面工作台的实践指南。 | [https://news.google.com/rss/articles/CBMiVEFVX3lxTE5CY3NuRXRmdDBzcmxXT2UwZ2RJQU9aN3lFR244cjUwNndTMUcybDQwWklDcXFKTy1Sc1FRa1IwS1BaTnlmeDlQQ1VjSXdiV2hnR0twSQ?oc=5](https://news.google.com/rss/articles/CBMiVEFVX3lxTE5CY3NuRXRmdDBzcmxXT2UwZ2RJQU9aN3lFR244cjUwNndTMUcybDQwWklDcXFKTy1Sc1FRa1IwS1BaTnlmeDlQQ1VjSXdiV2hnR0twSQ?oc=5) |
| How to Combine Claude Code and Codex for Maximum Coding Power | 教程 | 如何结合 Claude Code 和 Codex 实现最大编码效率。 | [https://news.google.com/rss/articles/CBMilgFBVV95cUxQYnZzNmsybm1vWGpCdjdUcFBwdzY4VEhaTkV3di1WNUpYLXNlSnY4WXFyZlVCVC04ejNaSVdrTnlQRmNFajdWWDU2a3pad0duMnFhNlNpck94ZmtSUVNXZTVqZDdON0JRM0ktWG90MEVkeWhUcnlYOFJXSTBYdFhQOHlCbUl0OUNHQXJKLXVyNDN1SVJKVVE?oc=5](https://news.google.com/rss/articles/CBMilgFBVV95cUxQYnZzNmsybm1vWGpCdjdUcFBwdzY4VEhaTkV3di1WNUpYLXNlSnY4WXFyZlVCVC04ejNaSVdrTnlQRmNFajdWWDU2a3pad0duMnFhNlNpck94ZmtSUVNXZTVqZDdON0JRM0ktWG90MEVkeWhUcnlYOFJXSTBYdFhQOHlCbUl0OUNHQXJKLXVyNDN1SVJKVVE?oc=5) |
| Codex App实测：跟龙虾思路迥异，OpenAI终于挽回点颜面 | 评测 | Codex 应用实测，对比 Claude Code 的差异。 | [https://news.google.com/rss/articles/CBMiYEFVX3lxTE0wMGFtYThPYTFFUnp3RmFzZEZUaHg1ZndUUTdWWGtpX3hRUzVkVl9neFBQSTVmRk9STVQxVDRqa2ZGSUwzOUxlQkRsWkdZV2c0aVI4MHk4aEluTEpRTHVkZQ?oc=5](https://news.google.com/rss/articles/CBMiYEFVX3lxTE0wMGFtYThPYTFFUnp3RmFzZEZUaHg1ZndUUTdWWGtpX3hRUzVkVl9neFBQSTVmRk9STVQxVDRqa2ZGSUwzOUxlQkRsWkdZV2c0aVI4MHk4aEluTEpRTHVkZQ?oc=5) |
| 终于来了！Hermes Agent 桌面版正式发布，支持 Windows、macOS、Linux | 视频 | Hermes Agent 桌面版发布介绍。 | [https://news.google.com/rss/articles/CBMiVkFVX3lxTE5JV2RuU2Zabi1uRzZidFZ4bVB4STlsZzRWWHJhSS12dUpDNi02blFrYmtBVTdsQ3I4X1FtdHdmVzVRUWhMcFpjRlZkUnByN0hMSEM4RFVn?oc=5](https://news.google.com/rss/articles/CBMiVkFVX3lxTE5JV2RuU2Zabi1uRzZidFZ4bVB4STlsZzRWWHJhSS12dUpDNi02blFrYmtBVTdsQ3I4X1FtdHdmVzVRUWhMcFpjRlZkUnByN0hMSEM4RFVn?oc=5) |
| 2026 年国内 Codex 安装与使用指南：GPT-5.3-Codex 完整实测流程 | 教程 | 国内环境下 Codex 的安装与使用完整流程。 | [https://zhuanlan.zhihu.com/p/2011928155204645696](https://zhuanlan.zhihu.com/p/2011928155204645696) |
| Codex 安装与使用 | 教程 | Codex 安装与使用的基础教程。 | [https://www.runoob.com/codex/codex-install.html](https://www.runoob.com/codex/codex-install.html) |
| 普通人能用 Codex 做什么：不会写代码也能上手的 9 种玩法 | 教程 | 面向非开发者的 Codex 使用指南。 | [https://news.google.com/rss/articles/CBMiXEFVX3lxTE5pTi1SLXlFTW1ybHFHc25vSHJndm9PSjlIaXZEckRNY3NOS1prNDltMnVxZDJVZ3pFckNKZ0VvTDFQWnBQam1WYXJTNHBiOGtRRHhSYmN6V1h1QlFC?oc=5](https://news.google.com/rss/articles/CBMiXEFVX3lxTE5pTi1SLXlFTW1ybHFHc25vSHJndm9PSjlIaXZEckRNY3NOS1prNDltMnVxZDJVZ3pFckNKZ0VvTDFQWnBQam1WYXJTNHBiOGtRRHhSYmN6V1h1QlFC?oc=5) |
| 实测真香！Claude Code 桌面端正式上线，开发体验直接拉满✨ | 评测 | Claude Code 桌面端上线实测。 | [https://news.google.com/rss/articles/CBMiXEFVX3lxTE03eEZrMVhPa2xlY3U3RTVIWDdvckJDRUVQeEtSUk52VFM0dzlMZFFIVV9rMGJxVy1Zd3pHelViLXVJTk5Nb1QxRVpONjhYbUdHM1VmMlFlUU02dmo3?oc=5](https://news.google.com/rss/articles/CBMiXEFVX3lxTE03eEZrMVhPa2xlY3U3RTVIWDdvckJDRUVQeEtSUk52VFM0dzlMZFFIVV9rMGJxVy1Zd3pHelViLXVJTk5Nb1QxRVpONjhYbUdHM1VmMlFlUU02dmo3?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Codex - Windows官方下载 | 应用 | OpenAI Codex 的官方 Windows 桌面应用，代理式软件开发的指挥中心。 | [https://apps.microsoft.com/detail/9plm9xgg6vks?hl=zh-CN&gl=CN](https://apps.microsoft.com/detail/9plm9xgg6vks?hl=zh-CN&gl=CN) |
| MoonPay推出MoonAgents桌面应用 | 应用 | 连接 Claude 与 Codex 的桌面应用。 | [https://news.google.com/rss/articles/CBMi7AFBVV95cUxOdDBWUFBSREhNUUE0OUcyWVZNR0FkeUlfbUZONE1EOUxUMXEwUmhCbmpzME5icnBjbmF1bEYxQS00UFBSbkdyT0xzbkktTFBLYnYxWkY5d2k2NXhUaWRpSnJwa1FGSjBmbVdwbEp0UUIzWW1WSmVWeVc1RGhWdGN0eTJwQldPZHFFWHNyeHB3LTRxdE9CRk1VbGg2YU5OV20yMFBUOWEzSlFGVVVqMnk3TEpWdm9lT0FWMWhPVkx4NklGSWVxRFh3M2FEVEMyd0xxZ2k4Q3I4REVMVXlIaWN6WFR2NW84cXVjTXF3Vw?oc=5](https://news.google.com/rss/articles/CBMi7AFBVV95cUxOdDBWUFBSREhNUUE0OUcyWVZNR0FkeUlfbUZONE1EOUxUMXEwUmhCbmpzME5icnBjbmF1bEYxQS00UFBSbkdyT0xzbkktTFBLYnYxWkY5d2k2NXhUaWRpSnJwa1FGSj
