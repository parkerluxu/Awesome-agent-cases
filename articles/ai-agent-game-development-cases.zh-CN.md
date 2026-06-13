# 游戏开发：AI Agent 实战案例、教程与科研项目调研

调研日期：2026-06-13

游戏开发是 AI Agent 很适合展示能力的领域，因为它同时考验规则逻辑、状态管理、美术、音效、交互、移动端适配和性能。公开案例里，以 Web 小游戏、Unity/Godot 原型、game jam 和媒体横评居多。

## 结论速览

AI Agent 最适合的游戏任务：

- Web 小游戏：扫雷、2048、贪吃蛇、塔防、卡牌、解谜。
- 快速原型：核心玩法验证。
- 关卡生成：地图、道具、敌人参数。
- UI/HUD 和菜单。
- 音效、粒子、反馈动画。
- 自动写测试和玩法验收清单。

不适合完全交给 Agent：

- 大型商业游戏架构。
- 复杂多人联网同步。
- 高性能 3D 引擎底层。
- 需要统一美术风格的大量资产生产。
- 涉及付费、抽卡、未成年人合规的上线逻辑。

## 博主/开发者教程与心得

### 1. Codex/Claude Code/Gemini/Mistral 生成扫雷游戏横评

资料类型：媒体实测  
代表工具：OpenAI Codex、Claude Code、Mistral Vibe、Gemini CLI  
链接：https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst

Ars Technica/Tom's Hardware 让四个 Agent 生成网页版扫雷，要求包括可玩性、音效、触屏支持和创意 twist。Codex 得分最高，做出了 chording、响应式设计、音效和 Lucky Sweep 机制；Claude Code 视觉更精致但漏了 chording；Gemini CLI 生成结果不可玩。

为什么值得学：

- 扫雷看似简单，但有真实规则细节。
- UI 好看不等于玩法完整。
- 游戏是评估 Agent 的好试金石。

可复刻提示：

```text
请用纯 HTML/CSS/JS 写一个扫雷游戏。
必须支持：
首点安全、计时、旗帜计数、胜负判定、chording、移动端触摸、音效开关。
加入一个创意机制，但不能破坏经典规则。
请先列验收清单，再写代码。
```

使用心得：

- 必须把游戏规则写清楚，不然 Agent 会漏核心机制。
- 让 Agent 先写验收清单能显著减少“看起来能玩”的假完成。
- 第二轮最好让另一个 Agent 专门找规则漏洞。

### 2. Vibe coding 做个人小游戏

资料类型：开发者实践归纳  
代表工具：Claude Code、Cursor、Codex、Replit Agent、Bolt

很多个人开发者用 AI Agent 做小游戏，不一定发布长文，但模式高度一致：

- 用户描述玩法。
- Agent 生成 HTML5/Canvas/React 游戏。
- 用户截图指出 UI/规则问题。
- Agent 迭代音效、粒子、移动端。
- 最后部署到 Vercel/Netlify/itch.io。

适合选题：

- 2048 + 新道具机制。
- 贪吃蛇 + 任务系统。
- 打砖块 + 技能升级。
- 卡牌对战原型。
- 单屏解谜游戏。
- 儿童教育小游戏。

使用心得：

- 最好限制技术栈：例如 “纯 HTML5 Canvas，无外部依赖”。
- 要求固定画布比例，避免移动端布局崩掉。
- 明确输入方式：键盘、鼠标、触摸、手柄。
- 要求 Agent 加入暂停、重开、音量、教程和失败反馈。

### 3. The Verge：个人软件革命中的游戏化小工具

资料类型：媒体/体验文章  
链接：https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution

The Verge 讨论了 Claude Code、Codex、GitHub Copilot 等推动的 personal software 趋势。虽然文章不只谈游戏，但其中对 AI 生成 UI 的批评很适合游戏开发：Agent 经常给出俗套视觉、怪异图标和不成熟的设计。

对游戏的启发：

- 玩法逻辑可以交给 Agent 快速验证。
- 视觉风格要给参考图和明确限制。
- 需要人类做美术方向、手感和节奏把关。

### 4. Caleb Leak：让宠物键盘输入驱动 Claude 生成 Godot 游戏

资料类型：英文 YouTuber/媒体趣味实验  
代表工具：Claude、Godot 4.6、Raspberry Pi、Rust 工具  
链接：https://www.pcgamer.com/software/ai/i-taught-my-dog-to-vibe-code-games-yup-someone-actually-managed-to-get-claude-ai-to-code-a-game-based-on-the-keyboard-inputs-of-a-pooch/

这个案例质量偏娱乐，但很适合作为“Agent 游戏开发边界探索”：YouTuber Caleb Leak 用 Raspberry Pi 5、蓝牙键盘和自定义 Rust app DogKeyboard，把宠物随机按键解释成神秘游戏设计语言，再由 Claude 生成 Godot C# 游戏。重点不是宠物真会开发，而是系统使用了强 guardrails、自动截图反馈、shader validation 等机制，让无意义输入也能被 Agent 转成可玩原型。

可借鉴点：

- 对游戏 Agent，自动截图和运行反馈非常关键。
- 即使创意输入很混乱，也可以通过 prompt 约束成可执行设计。
- Godot/Unity 项目需要明确版本、脚本语言和资源规则。

### 5. Karpathy 的 MenuGen / vibe coding 小项目路线

资料类型：开发者实践线索  
链接：https://en.wikipedia.org/wiki/Vibe_coding

vibe coding 资料中提到 Karpathy 的 MenuGen 等小项目，这类案例适合游戏开发者参考：把一次性、周末型、可丢弃原型作为 Agent 的最佳用武之地。游戏领域尤其适合这种方式，因为玩法验证比工程长期维护更重要。

### 6. Business Insider：用 Replit Agent 做 Musk vs Altman 赛车游戏

资料类型：英文媒体实测 / 游戏原型案例  
代表工具：Replit Agent  
链接：https://www.businessinsider.com/vibe-coding-game-replit-elon-musk-sam-altman-racing-2025-3

Business Insider 作者用 Replit Agent 做了一个在线赛车游戏，主题是 Elon Musk 和 Sam Altman 竞争实现 AGI，游戏名为 “The Final Boss of AGI”。文章的价值不在游戏多成熟，而在完整记录了非专业开发者通过自然语言指挥 Agent 生成游戏、反复遇到 bug、继续修复并最终得到可玩网页游戏的过程。

可借鉴点：

- 适合做“新闻热点 + 轻量玩法”的营销小游戏原型。
- Replit Agent 的优势是从代码到在线运行环境较顺。
- 作者遇到不少技术问题，说明游戏 Agent 仍需要多轮调试，而不是一句话成品。

### 7. The Times：用 Claude / Lovable 做复古小游戏 Meatball Mania

资料类型：英文媒体体验 / 非程序员游戏案例  
代表工具：Claude、Lovable  
链接：https://www.thetimes.co.uk/article/i-built-a-game-in-minutes-with-ai-the-thrill-took-me-back-years-27mljwx6j

The Times 作者尝试用 AI 工具生成复古风小游戏 “Meatball Mania”。Claude 生成了简陋但可玩的版本，Lovable 的版本没有正常工作。这个案例适合作为“降低门槛但不保证质量”的例子：Agent 可以让非程序员快速获得游戏雏形，但游戏规则完整性、可玩性和部署仍需要人工判断。

可借鉴点：

- 适合用来比较不同 Agent 对同一游戏需求的表现。
- “能玩”和“好玩”差距很大，教程应加入 playtest 环节。
- Lovable/Replit 这类 Web App 工具做游戏时，最好限制玩法复杂度。

### 8. Tom's Guide 周末 App 发布经验对小游戏的启发

资料类型：英文教程迁移  
链接：https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones

小游戏生成后最大的差距往往不是代码，而是分享：部署到 itch.io、Vercel、Netlify、GitHub Pages，适配手机，生成二维码，收集反馈。很多 Agent 游戏原型止步于本地可玩，教程应把“发布给别人玩”作为验收标准。

## 科研项目/论文

### Codex / Claude Code / Cursor 做游戏原型的最佳任务形态

资料类型：开发者实践归纳  
参考背景：

- Codex 概述：https://en.wikipedia.org/wiki/Codex_%28AI_agent%29
- Cursor 3 报道：https://www.wired.com/story/cusor-launches-coding-agent-openai-anthropic
- GitHub Agent HQ：https://www.theverge.com/news/873665/github-claude-codex-ai-agents

游戏开发公开案例里，最容易成功的是 Web/Canvas 小游戏，其次是 Godot/Unity 原型。核心原因是 Agent 可以快速运行、截图、修 UI、迭代规则。复杂 3D 资产、联网同步、物理手感仍然需要人类深度参与。

扩展可复刻题目：

- Roguelike 地牢：地图生成、怪物 AI、道具系统。
- 卡牌构筑：牌库、抽牌、能量、回合制状态。
- 塔防：路径、敌人波次、升级、经济系统。
- 节奏游戏：音频节拍检测、判定窗口、连击 UI。
- 教育游戏：题库、关卡、反馈、进度记录。

推荐 Agent 分工：

- Designer Agent：定义玩法和数值。
- Programmer Agent：实现核心循环。
- QA Agent：找规则漏洞。
- UX Agent：检查移动端和反馈。
- Producer Agent：控制功能范围。

### 游戏 Agent 的验收清单模板

可加到所有游戏教程：

- 是否有开始/暂停/重开。
- 是否有胜负条件。
- 是否有移动端输入。
- 是否有错误状态处理。
- 是否有音效开关。
- 是否有规则说明。
- 是否能连续玩 5 分钟无崩溃。
- 是否有固定随机种子便于复现 bug。

### 1. 多 Agent 视频/游戏式内容生成的启发

资料类型：科研方向借鉴  
代表论文：

- StoryAgent：https://arxiv.org/abs/2411.04925
- Kubrick：https://arxiv.org/abs/2408.10453

虽然这些论文面向视频生成，但“导演 Agent、程序 Agent、审查 Agent、迭代反馈”的结构可以迁移到游戏开发：

- Designer Agent：拆解玩法。
- Programmer Agent：写核心代码。
- Artist Agent：生成视觉资源。
- QA Agent：按规则和体验测试。
- Producer Agent：控制范围和迭代。

### 2. Prompt-to-app benchmark 对游戏原型的启发

资料类型：科研 benchmark  
链接：https://arxiv.org/abs/2512.18080

游戏 Web 原型也属于 prompt-to-app。研究提醒我们：评价 Agent 产物不能只看视觉，还要看任务完成度、用户信任和可用性。

### 3. GamED.AI：多 Agent 自动生成教育游戏

资料类型：科研项目  
链接：https://arxiv.org/abs/2604.23947

GamED.AI 把教师给出的题目转成可玩的教育游戏，使用分层多 Agent、LangGraph 子图、Pydantic schema 和 deterministic Quality Gates。它覆盖 15 种互动机制，在 200 个跨学科问题上评估。对教育游戏开发者来说，这是很直接的 Agent 案例。

### 4. GBQA：用游戏评估 LLM 作为 QA 工程师

资料类型：科研 benchmark  
链接：https://arxiv.org/abs/2604.02648

GBQA 包含 30 个游戏和 124 个经人工验证的 bug，用来评估 LLM 是否能自主发现游戏 bug。结果显示即使最强模型也只能找到约一半 bug，说明游戏 QA Agent 很有价值但仍需人工测试。

### 5. DSGBench / SmartPlay：把游戏作为 Agent 决策能力评测场

资料类型：科研 benchmark  
链接：

- DSGBench：https://arxiv.org/abs/2503.06047
- SmartPlay：https://arxiv.org/abs/2310.01557

DSGBench 用复杂策略游戏评估 LLM Agent 的长期决策，SmartPlay 用剪刀石头布、汉诺塔、Minecraft 等游戏评估规划、空间推理、学习历史等能力。它们不一定生成游戏，但能帮助游戏开发者评估游戏 NPC、策略 AI 和自动测试 Agent。

## 推荐复刻路线

1. 从经典小游戏开始，例如扫雷/2048/贪吃蛇。
2. 写出完整规则和验收清单。
3. 要求 Agent 先实现最小可玩版。
4. 加音效、动效、移动端。
5. 让另一个 Agent 做玩法漏洞审查。
6. 最后再加主题美术和发布页面。

## 主要风险

- 漏核心规则。
- UI 好看但状态机错误。
- 移动端不可玩。
- 音效和资源版权不清。
- 复杂度失控，Agent 堆功能导致代码难维护。

<!-- AUTO_CASE_UPDATES_START:game:zh-CN -->
## 最新自动发现更新

### 重点新增线索

- **Godot 引擎 Agent 开发工具集中涌现**：2026年6月13日前后，多个面向 Godot 引擎的 AI Agent 开发项目集中发布，包括 `godot-agent`（Agent-first CLI + MCP 服务器）、`godot-dotnet-mcp`（Godot 4.6+ 编辑器 MCP 接口插件）、`claude_agents_gamekit`（多 Agent 游戏开发工作流，支持 Unity、Godot、Web、微信小游戏、Cocos Creator）等。这标志着 AI Agent 在 Godot 生态中的工具链正在快速成型。
- **“Vibe Coding” 实践案例增多**：多个项目明确标注使用 Claude Code、Codex、Cursor 等 Agent 进行“Vibe Coding”开发，如 `crystal-kingdom-defenders`（塔防游戏，TypeScript + Phaser 3 + Vite）、`hadoken-high-roller-web`（街霸主题老虎机游戏，Cloudflare Workers + React + TypeScript）、`vibecraft`（体素游戏，Three.js + TypeScript）。这些案例为“用 Agent 开发游戏”提供了可复现的参考。
- **OpenAI 收购 Ona 扩展 Codex 能力**：2026年6月11日，OpenAI 宣布收购 Ona，旨在为 Codex 提供安全、持久的云端环境，支持企业级长运行 AI Agent。这可能影响未来基于 Codex 的游戏开发 Agent 能力。
- **Google 搜索框 25 年来首次重新设计**：2026年5月19日，Google 在 I/O 大会上宣布将搜索框从简单关键词输入转变为动态 AI 驱动对话界面。这一变化可能影响游戏开发中信息检索和 Agent 交互的方式。

### GitHub/开源项目

- **`aigengame/godot-agent`**（2026-06-13，⭐0）：Agent-first CLI 和 MCP 服务器，让 AI Agent 驱动 Godot 引擎构建游戏，输出结构化为程序化消费设计。
  - 来源：https://github.com/aigengame/godot-agent
- **`LuoxuanLove/godot-dotnet-mcp`**（2026-06-13，⭐30）：Godot 4.6+ 编辑器插件，为 AI Agent 提供实时 MCP 接口，支持项目状态、场景编辑、脚本分析、运行时控制、截图、日志等。
  - 来源：https://github.com/LuoxuanLove/godot-dotnet-mcp
- **`maybugwaterbutt646/claude_agents_gamekit`**（2026-06-13，⭐1）：使用 Claude Code 构建多 Agent 游戏开发工作流，支持 Unity、Godot、Web、微信小游戏和 Cocos Creator。
  - 来源：https://github.com/maybugwaterbutt646/claude_agents_gamekit
- **`bullish0x/GameStudio`**（2026-06-13，⭐0）：将任何支持的编码 Agent 框架转变为完整游戏开发工作室，包含 55 个专业 AI Agent 和 182 项技能，支持 Godot、Unity、Unreal、Three.js、PixiJS、Phaser、R3F。
  - 来源：https://github.com/bullish0x/GameStudio
- **`ludenio/WebGameTemplateForAgents`**（2026-06-12，⭐11）：为编码 Agent 辅助构建浏览器游戏而设计的项目模板。
  - 来源：https://github.com/ludenio/WebGameTemplateForAgents
- **`ds-mrtq/crystal-kingdom-defenders`**（2026-05-25，⭐0）：2D 塔防游戏（TypeScript + Phaser 3 + Vite），使用 Claude Code 通过 Agentic Vibe Coding 开发。
  - 来源：https://github.com/ds-mrtq/crystal-kingdom-defenders
- **`everscending/hadoken-high-roller-web`**（2026-06-03，⭐0）：街霸主题老虎机游戏（Cloudflare Workers + React + TypeScript），主要使用 Cursor/OpenCode/BMAD 等 Agent 编码工作流构建。
  - 来源：https://github.com/everscending/hadoken-high-roller-web
- **`Uzzoper/vibecraft`**（2026-06-10，⭐0）：浏览器体素游戏（Three.js + TypeScript），使用 OpenCode、Claude Code 和 Codex AI 助手开发，测试免费 LLM 模型在游戏开发中的实际表现。
  - 来源：https://github.com/Uzzoper/vibecraft
- **`RorriMaesu/gemma4-uefn-game-planner`**（2026-06-12，⭐0）：由 Gemma 4 12B 驱动的 Agent 化 Web 仪表盘和本地编排器，用于设计高留存 Fortnite UEFN 游戏，包含 Architect 与 Critic 双管线、Verse 代码蓝图等。
  - 来源：https://github.com/RorriMaesu/gemma4-uefn-game-planner
- **`minigraphx/godot-native-rl`**（2026-06-13，⭐0）：Godot 中原生强化学习集成，使用 ncnn 支持小型 AI Agent，甚至可在 Web 应用中使用。
  - 来源：https://github.com/minigraphx/godot-native-rl
- **`rhythmkr360-png/faster-vibe-coded-apps-games-website.-`**（2026-06-01，⭐0）：为 Codex、Claude Code 等 Agent 加速“Vibe Coding”应用、游戏和网站的项目。
  - 来源：https://github.com/rhythmkr360-png/faster-vibe-coded-apps-games-website.-
- **`alessandrahighvoltage217/claude-code-build`**（2026-06-13，⭐0）：从源码构建非官方 Claude Code CLI，用于研究、Bun 构建和 Node.js 使用，支持自定义 API 端点。
  - 来源：https://github.com/alessandrahighvoltage217/claude-code-build
- **`burfthdae-oss/audio-mcp`**（2026-06-13，⭐1）：在 macOS 上捕获麦克风和系统音频，以显式 MCP 会话暴露原始 WAV 文件供 AI Agent 分析。
  - 来源：https://github.com/burfthdae-oss/audio-mcp

### 论文/Benchmark

- **《Game-Theoretic Multi-Agent Control for Robust Contextual Reasoning in LLMs》**（2026-06-09）：提出基于博弈论的多 Agent 控制框架，应对 LLM 在多轮交互中的上下文中毒攻击。虽非直接游戏开发论文，但其多 Agent 推理框架可能适用于游戏 AI 安全场景。
  - 来源：https://arxiv.org/abs/2606.10322v1
- **《RogueAI: A Reverse Turing Test for Detecting Licensed AI Deception in Dialogue》**（2026-06-11）：提出反向图灵测试 Web 应用，以“一对一二人审讯游戏”形式检测 AI 欺骗行为。与游戏 Agent 的信任与安全相关。
  - 来源：https://arxiv.org/abs/2606.13310v1
- **《From Player to Master: Enhancing Test-Time Learning of LLM Agents via Reinforcement Learning over Memory》**（2026-06-07）：提出 MemoPilot，通过强化学习优化 LLM Agent 的测试时记忆更新策略，提升长期运行 Agent 的学习能力。对游戏 Agent 的持续学习有参考价值。
  - 来源：https://arxiv.org/abs/2606.08656v1
- **《LLM-Mediated Demand Response Coordination in Smart Microgrids》**（2026-06-09）：多 Agent 模拟中 LLM 作为协调者，博弈论基础与混合决策架构。虽非游戏领域，但多 Agent 协调机制可借鉴。
  - 来源：https://arxiv.org/abs/2606.11050v1

### 产品教程/媒体实测

- **《10分钟 0基础 一句代码没写 用Codex开发一个小游戏 Vibe Coding实战教程》**（2026-06-09，YouTube）：中文视频教程，展示使用 Codex 零代码开发小游戏的完整流程。
  - 来源：https://news.google.com/rss/articles/CBMiVkFVX3lxTE1VUk5BWjlxUlZFSk13SGx1UXIydmFqSl9PUGxWQzlBRTRwaFd2N21RVGtmSi1fVWpESFhySzRNQXNyb2t3UEJvd3k1aC1nMUN5Njc5dnNR?oc=5
- **《Graphify + code-review-graph: Build a Self-Updating Knowledge Graph for Claude Code and other AI Coding Agent》**（2026-05-17，DEV Community）：教程，介绍如何为 Claude Code 等 AI 编码 Agent 构建自更新知识图谱。
  - 来源：https://news.google.com/rss/articles/CBMiywFBVV95cUxQcnB3R0N1LXdHa2hjX1BiUVVMMm9fVDlVT0o2UXZmWGptbkFlLVZVU1dMSXppQlZ2ZDNPWlRJTC1LUXlhZURtQTVXT25tZkNVTWJVdGRzaDZjWkVVaXYyQTFLWFVYOWRuYndVSThLMlZ4LUlaczg0U043TzBDX0NYNHhfcDA1VjN6Y0NrU3NwczdVdDNQVHlabFMxdGZhVHRQbFUtZ3pnbkoxM05CZGVfMVpkZm8tZW81MWpBQ2o0aE1hc2EycDlGUm1lQQ?oc=5

### 中文社区线索

- **《Spring AI完整学习路线：从Java开发到AI Agent的进阶之路（附15篇实战教程）》**（2026-05-16，CSDN）：从 Java 开发视角切入 AI Agent 学习路线，可能包含游戏开发相关案例。
  - 来源：https://news.google.com/rss/articles/CBMickFVX3lxTE51MWVkcUg0U1o1TGdJYVFhU1FhMXBFcGRmSlVOd0NUMnhBRkg2OEJpM2hxVS1UVWNlVGk3TVVlTnM5V0hQRGhtaTVadS1BTmRMRHZLbXJFTFg4OEEtTU9nV3RiMkZ4dXA1T2pZcU5kRUthZw?oc=5
- **《2026年，AI Agent 开发踩坑实录：MCP 协议落地，我总结了这三条铁律》**（2026-05-26，掘金）：中文开发者分享 MCP 协议在实际 AI Agent 开发中的经验教训，可能包含游戏开发场景。
  - 来源：https://news.google.com/rss/articles/CBMiVEFVX3lxTE5sNmxPcUdUSEZRd3JNRjZmd0lZMnFacGFfeUY5VnRpaDhLTWxHWE1wQVZfWFBIUkxDcGd0ZHpEUE9TVjlybzJfa0tWODNIU09RYTJibQ?oc=5
- **《10分钟 0基础 一句代码没写 用Codex开发一个小游戏 Vibe Coding实战教程》**（2026-06-09，YouTube）：中文视频教程，见“产品教程/媒体实测”小节。
- **`ds-mrtq/crystal-kingdom-defenders`** 项目描述为越南语（“phong cách chibi”），但属于中文社区常见开发语言（TypeScript + Phaser 3 + Vite），待确认具体社区归属。

### 值得后续复核

- **`rhythmkr360-png/faster-vibe-coded-apps-games-website.-`**（⭐0）：项目名和描述较模糊，无详细文档或演示，**待人工复核**其实际内容和可用性。
- **`alessandrahighvoltage217/claude-code-build`**（⭐0）：从源码构建非官方 Claude Code CLI，与游戏开发关联度较低，**待人工复核**是否包含游戏相关功能。
- **`burfthdae-oss/audio-mcp`**（⭐1）：音频捕获 MCP 工具，与游戏开发间接相关（可能用于语音交互或音频分析），**待人工复核**具体应用场景。
- **`minigraphx/godot-native-rl`**（⭐0）：Godot 原生强化学习集成，但星数极少且无详细说明，**待人工复核**实际可用性和文档完整性。
- **《Game-Theoretic Multi-Agent Control for Robust Contextual Reasoning in LLMs》** 和 **《LLM-Mediated Demand Response Coordination in Smart Microgrids》**：非直接游戏开发论文，但多 Agent 博弈论框架可能适用于游戏 AI，**待人工复核**其与游戏开发的具体关联度。
- **《RogueAI: A Reverse Turing Test for Detecting Licensed AI Deception in Dialogue》**：与游戏 Agent 信任和安全相关，但非直接游戏开发，**待人工复核**是否包含游戏场景应用。
- **K-Dense-AI/scientific-agent-skills**（2026-06-11，GitHub）：科学 Agent 技能库，与游戏开发无直接关联，**待人工复核**是否包含可复用的游戏相关技能。
  - 来源：https://news.google.com/rss/articles/CBMiY0FVX3lxTE1nS0lZYUhjYnFGN0NqSTdIdGpfekhSMmlsY3NhX1Atamk2RXpPNGwwOE1paXhUazRzWDlZYTdxcEs4OTBSZkhXT0xMTU82OHMyMEVBLVFuOGh6bmVjdVlKb05mQQ?oc=5
<!-- AUTO_CASE_UPDATES_END:game:zh-CN -->

## 参考链接

- 扫雷 Agent 横评：https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst
- The Verge personal software：https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution
- Prompt-to-product benchmark：https://arxiv.org/abs/2512.18080
- StoryAgent：https://arxiv.org/abs/2411.04925
- Kubrick：https://arxiv.org/abs/2408.10453

