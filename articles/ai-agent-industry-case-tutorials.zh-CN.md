# 用 AI Agent 做真实作品：跨行业案例、教程与 GitHub 项目调研

调研日期：2026-06-13

本文刻意不收录 Dify、Coze、LangGraph、CrewAI 这类“搭 Agent 的框架/平台”为主体的资料，而是聚焦另一类更接近实战的问题：用 Claude Code、OpenAI Codex、Cursor/Replit/Lovable 一类代码 Agent，或用多模态/创意 Agent，实际做出电商网站、小游戏、App、电子系统设计、平面设计、短视频、音乐等行业产物。

## 一句话结论

目前最值得关注的不是“有没有 Agent”，而是“Agent 是否已经能闭环完成某种产出”。调研下来，成熟度大致如下：

1. 小型 Web/App/工具：最成熟，Claude Code、Codex、Replit/Lovable/Cursor 类工具已经能做出可运行原型。
2. 小游戏：非常适合验证 Agent 能力，因为规则、交互、UI、音效、移动端适配都能测出来。
3. 短视频/内容生产：开源项目很多，MoneyPrinterTurbo、ShortGPT、NarratoAI 已经形成脚本、素材、配音、字幕、剪辑的流水线。
4. 电子系统/EDA/PCB：从科研到商业化都在加速，已有 AI 设计 Linux 单板电脑、RISC-V CPU、RTL-to-GDSII 自动化的案例，但生产门槛仍高。
5. 平面设计/品牌物料：更多依赖 Claude Artifacts、Claude Design、Figma MCP、Canva/Adobe 等组合，公开可复刻项目相对少，但工作流清晰。
6. 音乐/MV：MusicAgent、AutoMV 这类研究项目表明“音乐理解 + 歌词/结构分析 + 分镜 + 视频生成”正在变成多 Agent 流程。

## 1. 电商网站与商业 Web 应用

### 案例 A：非程序员用 vibe coding 做个人软件和电商原型

纽约时报记者 Kevin Roose 在 2025 年用 AI coding 工具尝试构建多个小应用，并把它们称为 “software for one”。公开资料提到，他的一个电商网站实验甚至出现了 AI 自动捏造商品评价的问题。这是一个很典型的电商 Agent 案例：Agent 可以快速完成商品页、购物车、评价区、视觉布局，但数据真实性、支付安全、库存逻辑、隐私合规仍需要人工把关。

可复刻方式：

- 用 Claude Code 或 Codex 创建 Next.js/React 项目。
- 让 Agent 先生成商品数据结构、商品列表页、详情页、购物车、订单确认页。
- 第二轮再要求接入真实数据库、Stripe/PayPal 沙箱、库存字段、管理后台。
- 最后必须人工审查所有“用户评价、销量、折扣、认证标志”等可能误导消费者的内容。

适合行业：

- 独立站原型
- 跨境电商落地页
- 小商家商品目录
- A/B 测试页面
- 内部采购商城 Demo

来源：

- Vibe coding 条目汇总了该类实验、风险和“fake reviews for an e-commerce site”的案例：https://en.wikipedia.org/wiki/Vibe_coding

### 案例 B：Claude Code vs OpenAI Codex 做 3 个真实工具型 App

Tom's Guide 在 2026 年做了一组实测：分别让 Claude Code 和 OpenAI Codex 构建订阅追踪器、杂货价格比较工具、贷款/现金购买计算器。结论是 Claude Code 更适合快速给出“开箱即用、界面友好”的小应用；Codex 更偏高级逻辑、数据管理和分析深度，并在价格比较和金融计算类任务中表现更强。

可复刻方式：

- 把任务拆成“目标用户、输入数据、核心计算、页面、验收标准”五段提示。
- 第一轮让 Agent 只生成本地可运行版本。
- 第二轮加入真实数据导入、图表、导出 CSV、持久化存储。
- 第三轮让另一个 Agent 做代码审查和测试补齐。

适合行业：

- 财务计算器
- 报价/比价工具
- SaaS 小组件
- 运营报表
- 客户成功/销售辅助工具

来源：

- Tom's Guide 实测摘要：https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict

## 2. 小游戏与互动体验

### 案例 A：四个 Coding Agent 生成扫雷游戏

Ars Technica/Tom's Hardware 报道了一组很有参考价值的测试：让 OpenAI Codex、Claude Code、Mistral Vibe、Gemini CLI 构建一个网页版扫雷克隆，要求包括可玩性、音效、触屏支持和创意变化。结果 Codex 得分最高，生成了较完整的玩法、响应式设计、Lucky Sweep 创意机制和关键的 chording 操作；Claude Code 视觉精致、速度快，但漏掉了部分扫雷核心机制。

为什么这个案例重要：

- 游戏能同时测试逻辑、状态管理、UI、音频、移动端和边界条件。
- “看起来像游戏”和“规则完整可玩”差距很大，适合做 Agent 能力评估。
- 同一个需求可让多个 Agent 并行实现，再人工挑选和合并最佳方案。

可复刻方式：

- 提示中明确写出游戏规则、胜负判定、交互方式、移动端适配、音效、键盘/触摸操作。
- 要求 Agent 先写测试或至少列出验收用例。
- 运行后把失败现象截图/报错喂回 Agent 迭代。
- 最后让 Agent 做“规则完整性审查”，检查是否漏掉 chording、首点安全、计时、旗帜计数等细节。

适合行业：

- 教育小游戏
- 品牌互动营销
- 展会互动屏
- 小程序玩法原型
- 游戏策划验证

来源：

- Tom's Hardware 对 Ars Technica 测试的报道：https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst

### 案例 B：个人软件革命与“只为自己做的 App”

The Verge 在 2026 年的一篇文章讨论了 Claude Code、Codex、GitHub Copilot 等工具带来的“personal software”趋势：用户不再只等通用产品，而是让 Agent 做高度个人化的小工具。文章作者也指出，当前 coding agents 在 UI 审美上经常翻车，容易给出俗套渐变、奇怪图标和不成熟的设计选择。

可复刻方向：

- 私人日记/计划器
- 家庭预算工具
- 自定义读书/追剧/健身记录
- 针对某个工作流的单人后台
- 游戏化习惯养成 App

关键提醒：

- Agent 很擅长把功能做出来，但不等于有产品品味。
- 对 UI 的提示要尽量给参考图、设计系统、颜色限制、动效边界和移动端截图验收。

来源：

- The Verge “You can make an app for that”：https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution

## 3. App、社交产品与内容推荐

### 案例 A：Bluesky 的 Attie，用自然语言定制社交 Feed

Bluesky 推出的 Attie 是一个很有代表性的“AI Agent 赋能社交产品”的案例。它不是让用户手写算法，而是让用户用自然语言描述想看的内容，比如某个主题、风格、圈层或过滤规则，然后由 AI 帮用户生成个性化 feed。报道还提到 Attie 的方向不止是 feed 定制，未来也会走向让用户 vibe-code 自己的应用。

可借鉴点：

- Agent 不只是生成代码，也可以生成“算法配置”。
- 对开放协议或开放 API 的平台，Agent 可以把非技术用户带进产品扩展生态。
- 对社区产品来说，AI 需要谨慎处理用户信任，尤其是推荐、过滤和内容审查。

适合行业：

- 社交媒体
- 知识社区
- 内部信息流
- 学术/行业资讯聚合
- 内容平台个性化推荐

来源：

- The Verge 对 Attie 的报道：https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds
- TechCrunch/PC World 等报道也记录了该方向，Bluesky 和 AT Protocol 的开放 feed 机制是它的基础。

### 案例 B：Claude Cowork 基本由 Claude Code 构建

Axios 和 Business Insider 报道称，Anthropic 的 Claude Cowork 工具很大程度上由 Claude Code 自己参与开发，工程师主要负责描述需求、架构引导和反馈修正。这个案例虽然不是开源教程，但它说明了一个重要变化：Agent 不只是给业务团队做工具，也开始参与构建下一代 Agent 产品本身。

可借鉴点：

- 产品经理/工程师可以用“需求描述 + 交互反馈 + 代码审查”方式推进功能。
- 对复杂产品，Agent 适合承担 feature implementation、bug fix、研究和小型重构。
- 人类仍需要控制架构边界、权限、安全和发布流程。

来源：

- Axios 报道：https://www.axios.com/2026/01/13/anthropic-claude-code-cowork-vibe-coding
- Business Insider 报道：https://www.businessinsider.com/anthropic-claude-cowork-release-ai-vibecoded-2026-1

## 4. 电子系统设计、PCB、EDA、芯片

### 案例 A：Quilter 用 AI 设计 Linux 单板电脑，首次上电即启动

Tom's Hardware 报道了 Quilter 的 Project Speedrun：AI 辅助设计一块包含 843 个元件、双 PCB 的 Linux 单板电脑，一周完成，38.5 小时人工参与，首次上电成功启动 Debian。报道中对比称传统人工流程可能需要约 430 小时。

为什么重要：

- 这是从“画 PCB 更快”走向“复杂电子系统设计闭环”的例子。
- AI 在 setup、execution、cleanup 等环节减少大量重复工作。
- 和纯软件不同，硬件设计有物理约束、供应链、制造和调试风险，因此人工专家仍非常关键。

可复刻思路：

- 先从简单电源板、传感器板、开发板扩展模块开始，而不是直接做高复杂度 SBC。
- 用代码化电路工具或 EDA 脚本让 Agent 生成可审查的结构化设计。
- 每一步都用 DRC/ERC、BOM 检查、封装检查、仿真和人工 review 做门禁。

来源：

- Tom's Hardware Project Speedrun 报道：https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work

### 案例 B：Diode Computers 用 LLM + 强化学习自动化 PCB 设计

Business Insider 报道 Diode Computers 获得 a16z 领投融资。该公司用 OpenAI、Anthropic 的 LLM，加上强化学习检测和修正设计错误，把传统视觉化 PCB 设计变成更接近代码化的流程，目标是把 PCB 设计周期从数周/数月压缩到数天。报道提到客户包括机器人、海事技术等方向。

适合行业：

- 机器人
- 医疗设备
- 航空航天
- 国防制造
- 创客硬件和小批量板卡

来源：

- Business Insider 报道：https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7

### 案例 C：tscircuit，用 TypeScript 写电路和 PCB

tscircuit 是一个开源、代码化的电子设计平台，用 TypeScript 定义电路，并生成原理图、PCB 布局、3D 预览和 Gerber 等制造文件。它本身不是 AI Agent，但非常适合作为 Claude Code/Codex 这类 Agent 的“可编程硬件设计底座”：Agent 更擅长写代码和改代码，因此代码化 PCB 比纯 GUI PCB 更适合 Agent 接管。

可复刻方式：

- 让 Agent 生成 tscircuit 组件代码。
- 通过自动检查和预览图迭代布局。
- 把常用模块封装成可复用组件，例如电源、USB、传感器、驱动器。

来源：

- tscircuit 介绍：https://en.wikipedia.org/wiki/Tscircuit
- GitHub：https://github.com/tscircuit/tscircuit

### 案例 D：AutoEDA / ChatEDA / VeriOpt，Agent 进入芯片设计流程

EDA 方向已有多篇研究把 LLM Agent 用到 RTL-to-GDSII、TCL 脚本生成、Verilog 生成、PPA 优化等流程。

代表项目：

- AutoEDA：用 MCP 和微服务式 LLM Agent 自动化 EDA flow，开源地址指向 MCP-EDA-Server。
- ChatEDA：把 LLM 作为 autonomous agent，负责任务分解、脚本生成、调用 EDA 工具执行。
- VeriOpt：用 Planner、Programmer、Reviewer、Evaluator 等多角色 LLM 流程生成 PPA-aware Verilog。

适合行业：

- 芯片设计自动化
- FPGA/RTL 教学
- EDA 工具脚本生成
- 设计空间探索
- 初步验证和工程助理

来源：

- AutoEDA 论文：https://arxiv.org/abs/2508.01012
- ChatEDA 论文：https://arxiv.org/abs/2308.10204
- VeriOpt 论文：https://arxiv.org/abs/2507.14776

### 案例 E：Verkor.io 的 Design Conductor 生成 RISC-V CPU

Tom's Hardware 报道 Verkor.io 的 Design Conductor 从 219 字规格说明生成 RISC-V CPU core，用约 12 小时完成从规格到 GDSII 的流程。报道也指出这仍是相对简单的 CPU，没有 cache 和乱序执行，且主要在仿真与学术工艺上验证，不等于已经能替代完整芯片团队。

可借鉴点：

- Agent 做硬件不能只看功能正确，还要看时序、功耗、面积、可制造性和验证覆盖率。
- “从规格生成设计”是方向，但生产级芯片仍需要严密验证和专家审查。

来源：

- Tom's Hardware 报道：https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours

## 5. 平面设计、品牌物料与视觉原型

### 案例 A：Claude Artifacts / Claude Design 类自然语言视觉创作

Claude 的 Artifacts 让用户可以生成和交互代码片段、网页、文档和可视化内容。2026 年后，公开资料也出现了 Claude Design 方向：用自然语言生成设计、原型、幻灯片、营销物料，并可把品牌系统、代码库或设计文件作为上下文，再交给 Claude Code 落地开发。

可复刻工作流：

- 用 Claude/ChatGPT 先生成品牌 brief：受众、调性、竞品、色彩、字体、版式规则。
- 用图像模型或设计工具生成主视觉、Logo 草案、海报、封面。
- 用 Claude Code/Codex 把设计转成 HTML/CSS/React 页面或导出可编辑模板。
- 用 Playwright 截图让 Agent 反复修正移动端、文本溢出、层级和色彩对比。

适合行业：

- 电商详情页
- 小红书/公众号封面
- 活动海报
- SaaS 产品落地页
- 品牌提案 PPT

提醒：

- 代码 Agent 的默认审美经常偏模板化，尤其容易过度使用紫蓝渐变、大圆角卡片和泛科技风。
- 平面设计任务要提供参考图、品牌禁区、版式尺寸、导出格式和人工审核环节。

来源：

- Claude Artifacts 背景资料：https://en.wikipedia.org/wiki/Claude_%28language_model%29
- The Verge 关于 coding agent 设计短板的讨论：https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution

### 案例 B：Figma MCP / Design-to-code 工作流

虽然本次调研没有把 Figma MCP 作为单一项目重点展开，但它代表了一个非常重要的方向：把设计工具暴露给 Agent，让 Agent 读取设计稿、生成组件、同步设计 token、补齐交互状态。对于“平面设计到网页/App”的场景，最佳实践不是让 Agent 凭空想象，而是让它围绕已有设计资产工作。

可复刻选题：

- 海报转落地页
- Figma 组件库转 React/Tailwind
- 品牌规范转设计 token
- 多尺寸广告图批量生成
- 产品截图自动排版成营销素材

## 6. 短剧、短视频、视频解说与营销视频

### 案例 A：MoneyPrinterTurbo，一键生成高清短视频

MoneyPrinterTurbo 是中文社区热度很高的开源项目，调研时约 86.8k star。README 写得很清楚：只需提供视频主题或关键词，就能自动生成文案、素材、字幕、背景音乐，并合成高清短视频。它支持 Web/API、批量生成、字幕样式、横竖屏、多模型接入、Pexels/Pixabay/Coverr 等素材源。

适合行业：

- 短视频矩阵号
- 电商种草视频
- 知识科普号
- 营销短片
- 批量本地化视频

可复刻方式：

- 输入产品/知识点/故事主题。
- Agent 生成脚本和分镜。
- 自动拉取素材、配音、字幕、BGM。
- 人工审核版权、事实准确性、平台合规和品牌调性。

来源：

- GitHub：https://github.com/harry0703/MoneyPrinterTurbo

### 案例 B：ShortGPT，YouTube Shorts / TikTok 自动化框架

ShortGPT 是一个面向 YouTube Shorts 和 TikTok 创意自动化的开源项目，调研时约 7.4k star。它把视频创作拆成脚本、素材搜集、配音、字幕、剪辑语言和持久化变量等环节，适合学习“LLM + 素材 API + TTS + MoviePy/剪辑”的流水线。

适合行业：

- 海外短视频频道
- TikTok 创意测试
- 自动化内容农场研究
- 教育类短内容
- 视频剪辑 Agent 学习

来源：

- GitHub：https://github.com/RayVentura/ShortGPT

### 案例 C：NarratoAI，一键影视解说与视频剪辑

NarratoAI 是一个中文开源项目，调研时约 9.8k star，定位是“利用 AI 大模型，一键解说并剪辑视频”。它基于 MoneyPrinter 等项目重构，增加影视解说能力，适合学习影视/长视频素材到解说短视频的自动化流程。

适合行业：

- 影视解说
- 课程切片
- 长视频二创摘要
- 本地素材自动剪辑
- 企业培训视频重剪

来源：

- GitHub：https://github.com/linyqh/NarratoAI

### 案例 D：Creatify / Higgsfield / LTX Studio，商业化视频 Agent 工作流

商业产品也在走“端到端视频 Agent”路线。例如 Creatify 可从商品链接或描述生成 TikTok/Instagram/YouTube 视频广告；Higgsfield 强调面向营销和社媒的短视频工作流；LTX Studio 则偏故事、分镜、镜头控制和视频项目编辑。

它们不一定开源，但很适合拆解成可复刻流程：

- 输入商品链接/脚本/人物设定。
- Agent 抽取卖点、生成脚本和镜头。
- 生成或检索画面素材。
- 配音、字幕、口型、BGM。
- 输出多平台比例和多个广告版本。

来源：

- Creatify 概述：https://en.wikipedia.org/wiki/Creatify
- Higgsfield AI 概述：https://en.wikipedia.org/wiki/Higgsfield_AI
- LTX Studio 概述：https://en.wikipedia.org/wiki/LTX_Studio

## 7. 音乐、MV 与声音内容

### 案例 A：MusicAgent，音乐理解与生成 Agent

Microsoft 的 Muzic 仓库中包含 MusicAgent，调研时仓库约 4.9k star。MusicAgent 是 LLM-powered autonomous agent，目标是把 Hugging Face 模型、GitHub 项目、Web API 等音乐工具统一起来，让用户不需要理解所有音乐 AI 工具，也能完成音乐理解、生成、转换等任务。

适合行业：

- 音乐教育
- 作曲辅助
- 音乐检索和分析
- 配乐生成
- 声音实验

可复刻方式：

- 把音乐任务拆成“理解、生成、转换、评价、导出”几个工具节点。
- 用 Agent 根据用户需求动态选择工具。
- 对输出做人工听感审核和版权检查。

来源：

- GitHub MusicAgent：https://github.com/microsoft/muzic/tree/main/musicagent
- 论文：https://arxiv.org/abs/2310.11954

### 案例 B：AutoMV，多 Agent 生成完整音乐视频

AutoMV 是 2025 年提出的自动多 Agent 音乐视频生成系统。它先从歌曲里提取结构、人声、歌词时间轴等信息，再让 screenwriter Agent 和 director Agent 设计短剧本、人物、镜头，随后调用图像生成和视频生成模型，最后由 Verifier Agent 评估输出。这个流程很接近“短剧/MV 导演组”的自动化版本。

适合行业：

- 音乐 MV
- 歌曲宣发短片
- 虚拟歌手内容
- KTV/歌词视频升级
- 音乐平台自动视觉化

来源：

- AutoMV 论文：https://arxiv.org/abs/2512.12196

## 8. 科研、专业工具与大型工程

### 案例 A：Claude Code 构建 Ring 语言 TUI 框架

一篇 2026 年论文记录了用 Claude Code 和 Opus 4.5 在三天内、约十小时主动工作时间，通过 107 个提示构建 7420 行 Terminal User Interface 框架的过程。人类主要负责需求、验证、修正提示和少量架构引导，不手写代码。最终系统包含窗口管理、事件驱动架构、交互控件、菜单、表格、树组件、多窗口桌面环境等。

为什么值得学：

- 这是少数有量化提示统计的 Claude Code 案例。
- 它说明 Agent 可以维护多模块系统的架构一致性，但大量 bug fix prompt 仍不可避免。
- 对新语言/小生态尤其有价值，因为 Agent 可以快速补齐缺失工具。

来源：

- 论文：https://arxiv.org/abs/2601.17584

### 案例 B：AI coding agents 在真实 GitHub PR 中大规模出现

AIDev 数据集研究收集了 OpenAI Codex、Devin、GitHub Copilot、Cursor、Claude Code 等五类 Agent 生成的 932,791 个 agent-authored pull requests，覆盖 116,211 个仓库和 72,189 名开发者。这说明“Agent 写真实项目代码”已经不是少量演示，而是正在成为开源协作的一部分。

来源：

- AIDev 论文：https://arxiv.org/abs/2602.09185

## 9. 推荐整理成自己的案例库

如果你后续要持续收集“AI Agent 赋能各行各业”的案例，建议按下面字段建表，而不是只存链接：

| 字段 | 说明 |
|---|---|
| 行业 | 电商、游戏、App、硬件、设计、短视频、音乐、教育等 |
| 产物 | 网站、小游戏、PCB、MV、海报、App、脚本、自动化工具 |
| Agent 类型 | Claude Code、Codex、Cursor、Replit、开源多 Agent、视频 Agent、音乐 Agent |
| 是否开源 | GitHub / 论文 / 商业报道 / 教程 |
| 可复刻度 | 高、中、低 |
| 输入 | 自然语言需求、商品链接、歌曲、视频素材、规格书、Figma 文件等 |
| 输出 | 代码、视频、设计稿、PCB 文件、RTL、文档、部署包 |
| 人工环节 | 审核、测试、版权、合规、安全、制造验证 |
| 风险 | 幻觉、版权、支付安全、隐私、硬件损失、平台封号 |
| 下一步实验 | 可在本地用什么工具复刻 |

## 10. 可优先复刻的 12 个选题

1. 用 Claude Code/Codex 做一个垂直电商 Demo：商品页、购物车、后台、Stripe 沙箱。
2. 用 Codex 做扫雷/2048/塔防小游戏，并让另一个 Agent 写验收测试。
3. 用 Claude Code 做“个人订阅追踪器”或“家庭预算 App”。
4. 用 Agent 把一个 Figma 风格规范转成 React 组件库。
5. 用 MoneyPrinterTurbo 批量生成 10 条知识科普短视频。
6. 用 NarratoAI 做一条影视/课程解说自动剪辑。
7. 用 ShortGPT 做 TikTok/YouTube Shorts 频道自动化 PoC。
8. 用 MusicAgent 做“输入旋律/主题，输出改编建议和音频处理流程”。
9. 用 AutoMV 思路做一首歌的 MV 分镜和关键帧脚本。
10. 用 tscircuit + Claude Code 做一个简单传感器扩展板。
11. 用 AutoEDA/ChatEDA 思路让 Agent 生成 EDA 工具脚本。
12. 用 Agent 做一个 Bluesky/微博/公众号信息流筛选器。

## 11. 风险清单

- 电商：不能让 Agent 自动生成虚假评价、虚假销量、夸大宣传；支付和隐私必须人工审查。
- 游戏/App：AI 生成代码可玩不等于可维护，必须补测试、移动端验收和错误边界。
- 短视频：素材版权、配音版权、事实错误、平台规则是核心风险。
- 平面设计：品牌一致性和审美需要人类把关，Agent 默认设计容易模板化。
- 音乐：训练数据、旋律相似性、声音克隆、发行版权都需要确认。
- 硬件/EDA：AI 生成 PCB/RTL 的错误可能带来真实物理损失，必须经过 DRC/ERC/仿真/专家 review。
- Coding Agent：权限过大可能误删文件、改错配置、引入依赖或泄露密钥，建议用沙箱、Git、最小权限和分步审批。

## 参考链接汇总

- Vibe coding 概述与案例：https://en.wikipedia.org/wiki/Vibe_coding
- Claude Code / Claude 能力概述：https://en.wikipedia.org/wiki/Claude_%28language_model%29
- OpenAI Codex Agent 概述：https://en.wikipedia.org/wiki/Codex_%28AI_agent%29
- The Verge personal software：https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution
- Tom's Guide Claude Code vs Codex App 实测：https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict
- Tom's Hardware 扫雷 Agent 测试：https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst
- Bluesky Attie：https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds
- Claude Cowork built with Claude Code：https://www.axios.com/2026/01/13/anthropic-claude-code-cowork-vibe-coding
- Claude Cowork Business Insider：https://www.businessinsider.com/anthropic-claude-cowork-release-ai-vibecoded-2026-1
- MoneyPrinterTurbo：https://github.com/harry0703/MoneyPrinterTurbo
- ShortGPT：https://github.com/RayVentura/ShortGPT
- NarratoAI：https://github.com/linyqh/NarratoAI
- MusicAgent：https://github.com/microsoft/muzic/tree/main/musicagent
- MusicAgent 论文：https://arxiv.org/abs/2310.11954
- AutoMV 论文：https://arxiv.org/abs/2512.12196
- Claude Code TUI 框架论文：https://arxiv.org/abs/2601.17584
- AIDev 数据集：https://arxiv.org/abs/2602.09185
- Quilter Project Speedrun：https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work
- Diode Computers PCB 设计报道：https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7
- tscircuit：https://github.com/tscircuit/tscircuit
- AutoEDA：https://arxiv.org/abs/2508.01012
- ChatEDA：https://arxiv.org/abs/2308.10204
- VeriOpt：https://arxiv.org/abs/2507.14776
- Verkor RISC-V CPU：https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours
