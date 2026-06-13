# 游戏开发：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（3+25）

本节分为两类：`教程 / 案例 3 条` 和 `项目 / 论文 25 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 3 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | Replit racing game article | 媒体案例 | Business Insider 案例，记录用 Replit Agent 从零构建赛车游戏的过程，观察自然语言需求到可运行原型的转化。 | https://www.businessinsider.com/vibe-coding-game-replit-elon-musk-sam-altman-racing-2025-3 |
| 2 | The Times Meatball Mania | 媒体案例 | The Times 报道，讲述作者用 AI 在几分钟内构建游戏 Meatball Mania 的经历，感受快速原型开发的乐趣与挑战。 | https://www.thetimes.co.uk/article/i-built-a-game-in-minutes-with-ai-the-thrill-took-me-back-years-27mljwx6j |
| 3 | Tom Hardware Minesweeper | 媒体实测 | Tom's Hardware 实测，对比四款 AI 编程代理构建扫雷游戏的表现，提供各工具在游戏开发中的性能评测。 | https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst |

### 项目 / 论文 25 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | GamED.AI | 论文 | GamED.AI 论文提出面向游戏开发全流程的 AI 应用框架，覆盖玩法原型自动生成与智能体行为评测，为游戏 AI 研究提供可复现的评估基准。 | https://arxiv.org/abs/2604.23947 |
| 2 | DSGBench | 论文 | DSGBench 聚焦动态策略游戏，设计包含多智能体协作与对抗的评测框架，强调实验可复现性与场景多样性。 | https://arxiv.org/abs/2503.06047 |
| 3 | SmartPlay | 论文 | SmartPlay 整合多种游戏环境构建智能体评测平台，提供标准化任务设定与性能指标，便于横向比较不同算法。 | https://arxiv.org/abs/2310.01557 |
| 4 | Unity ML-Agents | 开源项目 | 将强化学习与Unity游戏引擎深度集成的官方工具包，支持在3D环境中训练智能体并直接用于游戏逻辑，是游戏AI开发的成熟基础设施。 | https://github.com/Unity-Technologies/ml-agents |
| 5 | Voyager | 论文/项目 | 在Minecraft中实现基于大模型的自主探索智能体，通过技能库持续学习与环境交互，展示了开放式任务求解能力，是游戏内Agent研究的标杆工作。 | https://arxiv.org/abs/2305.16291 |
| 6 | MineDojo | 论文/项目 | MineDojo 提供 Minecraft 研究框架与大规模多模态数据集，涵盖任务、演示与知识图谱，支撑智能体训练与评测。 | https://arxiv.org/abs/2206.08853 |
| 7 | Generative Agents | 论文 | Generative Agents 通过记忆、反思与社交架构模拟可信人类行为，在沙盒环境中实现长期角色互动与群体演化。 | https://arxiv.org/abs/2304.03442 |
| 8 | StoryAgent | 论文 | StoryAgent 研究基于 AI 的叙事生成，提出故事规划与角色交互的联合评测方法，关注叙事连贯性与用户参与度。 | https://arxiv.org/abs/2411.04925 |
| 9 | Kubrick | 论文 | Kubrick 论文提出基于生成模型的游戏关卡自动生成算法，涵盖设计约束与玩家体验优化，附带实验复现细节。 | https://arxiv.org/abs/2408.10453 |
| 10 | OpenSpiel | 开源项目 | DeepMind博弈论研究框架，内置多种游戏环境和算法。提供标准化的多智能体强化学习基准，可用于训练和对比Agent的竞争与协作策略。 | https://github.com/google-deepmind/open_spiel |
| 11 | PettingZoo | 开源项目 | 多智能体强化学习库，提供Gymnasium兼容API。统一环境接口和内置合作/对抗场景，简化了多Agent实验的搭建与评估流程。 | https://github.com/Farama-Foundation/PettingZoo |
| 12 | MiniGrid | 开源项目 | 轻量级网格世界环境，专为强化学习教学与基准测试设计。简洁的观察空间和可配置任务，能快速验证Agent的导航与基础推理能力。 | https://github.com/Farama-Foundation/Minigrid |
| 13 | Procgen Benchmark | 开源项目 | OpenAI过程生成环境套件，包含16种游戏。收录理由：其无限关卡变化特性，专门用于测试Agent的泛化能力和对未见场景的鲁棒性。 | https://github.com/openai/procgen |
| 14 | NetHack Learning Environment | 开源项目 | 基于经典Roguelike游戏NetHack的强化学习环境。复杂交互和长期规划需求，为研究Agent在稀疏奖励下的探索与策略提供挑战。 | https://github.com/facebookresearch/nle |
| 15 | GVGAI | 开源项目 | 通用视频游戏AI框架，支持多种游戏和控制器。收录理由：其竞赛机制和未知游戏测试，推动设计能跨游戏迁移的通用Agent架构。 | https://github.com/GAIGResearch/GVGAI |
| 16 | MineDojo | 开源项目/论文 | Minecraft研究平台，提供大规模数据集与模拟器。收录理由：其开放世界和复杂生存任务，为具身Agent的感知、规划和工具使用提供基准。 | https://github.com/MineDojo/MineDojo |
| 17 | Voyager | 开源项目/论文 | 基于MineDojo的自主Agent，具备技能库自动扩展机制。自我探索和技能解锁流程，展示了Agent在开放世界中持续学习的能力。 | https://github.com/MineDojo/Voyager |
| 18 | Crafter | 开源项目 | 类Minecraft的2D生存游戏环境，提供强化学习接口。资源收集与合成任务链，适合测试Agent在组合性目标下的学习效率。 | https://github.com/danijar/crafter |
| 19 | MiniHack | 开源项目 | NetHack的简化版环境，支持自定义关卡生成。收录理由：其可编程任务生成器，能快速创建多样化场景以评估Agent的策略适应能力。 | https://github.com/facebookresearch/minihack |
| 20 | ViZDoom | 开源项目 | 基于Doom的第一人称射击强化学习环境。视觉输入和动态战斗场景，用于训练Agent在实时对抗中的感知与决策。 | https://github.com/Farama-Foundation/ViZDoom |
| 21 | Pommerman | 开源项目 | Pommerman 是炸弹人风格的多智能体环境，支持竞技与协作。其有限地图和空间推理需求，适合研究Agent在局部信息下的对抗策略。 | https://github.com/MultiAgentLearning/playground |
| 22 | Melting Pot | 开源项目 | DeepMind社会交互环境套件，包含资源分配与合作博弈场景。收录理由：其精心设计的社交困境，用于分析Agent在群体中的行为模式与公平性。 | https://github.com/google-deepmind/meltingpot |
| 23 | Griddly | 开源项目 | Griddly 是网格世界环境生成器，支持自定义规则和渲染。高度可配置性允许快速构建独特任务，用于测试Agent的泛化学习能力。 | https://github.com/Bam4d/Griddly |
| 24 | Unity ML-Agents | 开源项目 | Unity ML-Agents 是Unity的机器学习工具包，提供3D环境训练框架。其物理模拟和视觉渲染能力，支持开发具备空间感知的具身Agent。 | https://github.com/Unity-Technologies/ml-agents |
| 25 | OpenAI Retro | 开源项目 | OpenAI Retro 是复古游戏强化学习平台，支持多种经典游戏。有限状态空间和确定性规则，适合研究Agent在离散动作空间中的策略优化。 | https://github.com/openai/retro |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| everything-game-dev-code | 通用游戏开发脚手架 | 42 个 Agent、51 条命令、86 项技能，支持 Unity、Unreal、Godot、HTML 等多引擎及 Claude Code、Codex、Cursor 等工具链 | [GitHub](https://github.com/MRCalderon3D/everything-game-dev-code) |
| godot-agent | Godot 专用 Agent 工具 | Agent 优先的 CLI 和 MCP 服务器，让 AI Agent 直接驱动 Godot 引擎构建游戏 | [GitHub](https://github.com/aigengame/godot-agent) |
| GameStudio | 多引擎游戏开发工作室 | 55 个专用 AI Agent 和 182 项技能，支持 Godot、Unity、Unreal、Three.js、PixiJS、Phaser、R3F | [GitHub](https://github.com/bullish0x/GameStudio) |
| claude_agents_gamekit | 多 Agent 游戏开发工作流 | 为 Unity、Godot、Web、微信小游戏、Cocos Creator 构建多 Agent 工作流 | [GitHub](https://github.com/maybugwaterbutt646/claude_agents_gamekit) |
| Autonomous-Game-Developer-Studio | 自主游戏开发工作室 | 专用 Agent 协作设计、构建、测试和优化 Python/Pygame 冒险游戏 | [GitHub](https://github.com/MustfZTRK/Autonomous-Game-Developer-Studio) |
| godot-native-rl | Godot 强化学习集成 | 使用 ncnn 在 Godot 中原生集成强化学习，支持小型 AI Agent 及 Web 应用 | [GitHub](https://github.com/minigraphx/godot-native-rl) |
| gemma4-uefn-game-planner | Fortnite UEFN 游戏规划器 | 基于 Gemma 4 12B 的 Agent 化 Web 仪表盘，设计高留存率 Fortnite UEFN 游戏 | [GitHub](https://github.com/RorriMaesu/gemma4-uefn-game-planner) |
| WebGameTemplateForAgents | 浏览器游戏模板 | 专为配合编码 Agent 构建浏览器游戏设计的项目模板 | [GitHub](https://github.com/ludenio/WebGameTemplateForAgents) |
| crystal-kingdom-defenders | 塔防游戏示例 | 使用 TypeScript + Phaser 3 + Vite 构建的 2D 塔防游戏，通过 Agentic Vibe Coding 开发 | [GitHub](https://github.com/ds-mrtq/crystal-kingdom-defenders) |
| hadoken-high-roller-web | 街机风格老虎机游戏 | 基于 Cloudflare Workers + React + TypeScript 的《街霸》主题老虎机游戏，使用 Agentic 编码工作流 | [GitHub](https://github.com/everscending/hadoken-high-roller-web) |
| vibecraft | 体素沙盒游戏 | 基于 Three.js 和 TypeScript 的浏览器体素游戏，使用 OpenCode、Claude Code、Codex 开发 | [GitHub](https://github.com/Uzzoper/vibecraft) |
| graphia | 文本界面黑手党游戏 | 基于 LLM 的文本 UI 黑手党游戏，使用 LangGraph + Bedrock Agent Core + Terraform | [GitHub](https://github.com/tigra/graphia) |
| faster-vibe-coded-apps-games-website | 快速 Vibe Coding 模板 | 适用于 Codex、Claude Code 等 Agent 的快速应用、游戏、网站模板 | [GitHub](https://github.com/rhythmkr360-png/faster-vibe-coded-apps-games-website.-) |
| claude-code-build | Claude Code CLI 构建工具 | 从源码构建非官方 Claude Code CLI，支持 Bun 构建和 Node.js 自定义 API 端点 | [GitHub](https://github.com/alessandrahighvoltage217/claude-code-build) |
| audio-mcp | 音频 MCP 工具 | 在 macOS 上捕获麦克风和系统音频，暴露原始 WAV 文件供 AI Agent 分析 | [GitHub](https://github.com/burfthdae-oss/audio-mcp) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Game-Theoretic Multi-Agent Control for Robust Contextual Reasoning in LLMs | 论文 | 博弈论多 Agent 控制框架，应对 LLM 在多轮交互中的上下文投毒攻击 | [arXiv](https://arxiv.org/abs/2606.10322v1) |
| RogueAI: A Reverse Turing Test for Detecting Licensed AI Deception in Dialogue | 论文 | 反向图灵测试交互式 Web 应用，通过 1v2 审讯游戏检测 AI 欺骗 | [arXiv](https://arxiv.org/abs/2606.13310v1) |
| From Player to Master: Enhancing Test-Time Learning of LLM Agents via Reinforcement Learning over Memory | 论文 | MemoPilot 插件，通过强化学习优化 LLM Agent 的测试时记忆更新策略 | [arXiv](https://arxiv.org/abs/2606.08656v1) |
| The Shibboleth Effect: Auditing the Cross-Lingual Distributional Skew of LLMs | 论文 | 使用多 Agent 地缘政治兵棋推演（Cerulean Sea Crisis）审计 LLM 跨语言分布偏差 | [arXiv](https://arxiv.org/abs/2606.11082v1) |
| LLM-Mediated Demand Response Coordination in Smart Microgrids | 论文 | 多 Agent 模拟中 LLM 协调智能微电网需求响应，结构等价于重复囚徒困境 | [arXiv](https://arxiv.org/abs/2606.11050v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AI-Coding-Guide-Zh: Subagent 子代理完整指南 | 中文教程 | Claude Code Subagent 子代理完整使用指南 | [GitHub](https://news.google.com/rss/articles/CBMi5wFBVV95cUxPMnMweC1LVHRtaDhoQVh1V0VNMzZ5Q2Nqb2VUcFEwejM0Nk90YldlQjJoV0s4b0FwVDk1N3diV1JIMVY2djNObnBKOUNscmY5S1JGQUpROXI2OWdhTGxpSU11NUlhTlIybk1STGVSYnJGWkdScks4T2FhWkIxSWFRZ0JydlNYTGptY0tpQ1hIdUdiVUhxcTN2MGVnLXdMcTZvNXl4eTRpcFBFWGFObldXYXVhOFg3ZThYSXhrLXNDbG5mQlhSN3R3M3JEYnd0UGwyOVVQSThmb3ZPeFBLOTRTQnhqTnhQc2s?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框 AI 改造 | 搜索引擎更新 | Google 将搜索框从关键词输入改造为动态 AI 对话界面 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI 收购 Ona | 企业收购 | OpenAI 计划收购 Ona，为 Codex 扩展安全持久云环境，支持长期运行 AI Agent | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| scientific-agent-skills | 科学 Agent 技能库 | 140 个即用技能 + 100+ 科学数据库，将 AI Agent 转化为 AI 科学家 | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE1nS0lZYUhjYnFGN0NqSTdIdGpfekhSMmlsY3NhX1Atamk2RXpPNGwwOE1paXhUazRzWDlZYTdxcEs4OTBSZkhXT0xMTU82OHMyMEVBLVFuOGh6bmVjdVlKb05mQQ?oc=5) |
