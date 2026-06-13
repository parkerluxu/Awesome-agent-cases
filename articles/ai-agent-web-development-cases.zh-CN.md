# Web 开发：AI Agent 实战案例、教程与科研项目调研

调研日期：2026-06-13

本文关注“用 AI Agent 直接完成 Web 产品/网站/后台/工具”的案例，不把 Dify、Coze 等 Agent 平台本身作为主角。这里的 Agent 包括 Claude Code、OpenAI Codex、Cursor、Replit Agent、Lovable、Bolt、Firebase Studio 等。

## 结论速览

Web 开发是目前 AI Agent 最成熟的落地方向。原因很简单：Web 项目反馈快、可自动运行测试、可截图验收、部署链路成熟，Agent 写错了也容易迭代。相比桌面、硬件和芯片，Web 案例里个人博主、媒体实测和平台用户故事都更丰富。

最适合复刻的任务：

- 电商 Demo：商品列表、详情页、购物车、支付沙箱、后台管理。
- 小型 SaaS：订阅追踪器、报价工具、客户管理、报表面板。
- 内容站：博客、知识库、作品集、课程页。
- 业务后台：CRUD、权限、搜索筛选、导入导出。
- 私人工具：预算、健身、读书、习惯记录、数据可视化。

## 博主/开发者教程与心得

### 1. Vibe coding：非程序员构建个人 Web 工具与电商原型

资料类型：媒体/博主实践总结  
代表工具：Replit、Cursor、Claude、Lovable 等  
链接：https://en.wikipedia.org/wiki/Vibe_coding

Vibe coding 的典型模式是：用户用自然语言描述产品，AI Agent 生成页面、组件、数据结构和部署配置。纽约时报记者 Kevin Roose 的实验被大量引用，他把这类产物称为 “software for one”。公开资料里提到，他曾用 AI 构建多个小软件，其中一个电商网站实验出现了 AI 自动编造商品评价的问题。

可借鉴的做法：

- 第一轮只要求 Agent 做能跑的最小版本。
- 第二轮补数据库、鉴权、支付沙箱、后台管理。
- 第三轮让另一个 Agent 或人工做安全审查。
- 对“评价、销量、认证、优惠”等营销内容做人工强约束，避免虚假信息。

使用心得：

- AI 很适合快速生成电商页面结构和 UI。
- 数据真实性、支付安全、隐私和合规不能交给 Agent 自主决定。
- 非技术用户容易被“能打开页面”误导，以为已经能生产上线。

### 2. Claude Code vs Codex：构建 3 个真实小 App

资料类型：媒体实测  
代表工具：Claude Code、OpenAI Codex  
链接：https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict

Tom's Guide 让 Claude Code 和 Codex 分别构建订阅追踪器、杂货价格比较工具、贷款/现金购买计算器。结论大致是：Claude Code 更像快速产品原型师，界面和开箱体验更好；Codex 在复杂逻辑、数据处理和分析深度上更稳。

可复刻任务：

- 订阅追踪器：输入服务名、价格、扣费周期，输出月度/年度总成本。
- 价格比较器：录入不同商店商品价格，输出最优购买组合。
- 财务计算器：对比贷款购买和现金购买的长期成本。

提示词结构：

```text
目标用户：
核心功能：
输入字段：
计算规则：
页面结构：
验收标准：
不要做的事情：
```

使用心得：

- 不要只让 Agent “做一个 App”，要给它验收标准。
- 财务、电商、价格比较这类任务必须要求 Agent 展示公式。
- 第二个 Agent 做 code review 很有价值，尤其能发现边界条件。

### 3. Lovable/Replit/Bolt：Prompt-to-app 平台里的 Web 应用生成

资料类型：平台用户生态/行业报道  
代表工具：Lovable、Replit Agent、Bolt、Firebase Studio  
链接：

- Replit Agent 概述：https://en.wikipedia.org/wiki/Replit
- Lovable 概述：https://en.wikipedia.org/wiki/Lovable_%28company%29
- Prompt-to-product 研究：https://arxiv.org/abs/2512.18080

Lovable、Replit、Bolt 这类产品的共同点是把 Web 应用生成、预览、部署、数据库、鉴权做成一条链。它们特别适合非技术创业者做 MVP。Business Insider 对 Lovable 用户的报道显示，很多用户来自营销、咨询、销售等非工程背景，但多数项目还没有产生收入。

可借鉴的任务：

- 咨询顾问的客户问卷收集系统。
- 小商家的预约/库存/订单工具。
- 课程售卖页和学员管理后台。
- 销售线索收集与 CRM 小工具。

使用心得：

- Prompt-to-app 很适合“从 0 到 1”，但复杂业务会遇到权限、数据模型和安全问题。
- Supabase/数据库权限配置是常见风险点，不能只看页面是否可用。
- 非工程用户最好把 Agent 输出当作“可演示原型”，上线前请开发者审查。

### 4. Washington Post：普通人用 Claude Code/Cowork 做个人 App

资料类型：英文媒体体验/非程序员案例  
代表工具：Claude Code、Claude Cowork  
链接：https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/

Washington Post 的互动报道记录了非程序员用 Claude Code/Cowork 生成网站和 App 的趋势，案例包括个人媒体追踪器、针对本地海况的冲浪预测 App “Dialed”等。这类案例的重点不是技术多复杂，而是用户把自己掌握的细分领域知识转成软件需求，Agent 负责把它落成可用原型。

可借鉴点：

- 适合把“非常个人化、市场太小但自己很需要”的需求做成工具。
- 用户领域知识越具体，Agent 输出越有用。
- 发布和分享比写出第一版更难，后续仍要考虑托管、域名、权限和数据维护。

### 5. Tom's Guide：周末 vibe coded App 并发布到别人手机

资料类型：英文博主/媒体教程  
代表工具：Codex、Gemini、Claude Code、Cursor、Replit、Lovable  
链接：https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones

这篇文章把重点放在“做完之后如何交到别人手里”：Vercel、Netlify、Replit、GitHub Pages 等部署方式比写代码本身更关键。对 Web/App Agent 项目来说，这是很实用的提醒：现在生成原型很快，但真正让用户访问、反馈、复用，仍要处理部署、分享链接、版本迭代和成本。

可复刻任务：

- 让 Agent 生成一个 PWA 小工具。
- 让 Agent 补 `manifest.json`、响应式布局、离线缓存。
- 部署到 Vercel/Netlify/Replit。
- 用二维码分发给测试用户。

### 6. Claude Code Web App：从本地 CLI 到浏览器内自动改 GitHub 仓库

资料类型：产品报道/工作流案例  
代表工具：Claude Code Web  
链接：https://timesofindia.indiatimes.com/technology/tech-news/anthropic-launches-claude-code-web-app-expanding-access-to-ai-powered-coding-agents/articleshow/124720853.cms

Claude Code Web 允许用户连接 GitHub 仓库，在 Anthropic 托管的隔离 VM 中克隆项目、安装依赖、改代码、运行测试并创建 PR。这类模式很适合 Web 项目维护：不是让 Agent 直接操作本地机器，而是在云端沙箱里完成 issue 到 PR 的闭环。

适合任务：

- 修复 UI bug。
- 补单元测试。
- 升级依赖。
- 改 README 和部署文档。
- 根据 issue 生成小功能 PR。

### 7. GPT Engineer -> Lovable：从开源代码生成器到商业 Prompt-to-app

资料类型：开源项目/商业演化案例  
代表工具：gpt-engineer、Lovable  
链接：https://en.wikipedia.org/wiki/Lovable_%28company%29

Lovable 的前身之一是开源项目 gpt-engineer，这个路径很适合作为 Web Agent 项目史的一条线索：先是“从文本规格生成完整代码库”的开源实验，然后演化为带预览、编辑、部署、后端集成的商业平台。对开发者来说，它说明单次代码生成并不足够，真正的产品价值在于持续编辑、可视化反馈、数据库/鉴权/部署集成。

使用心得：

- 早期 prompt-to-code 项目适合学习生成代码库的基本流程。
- 商业 prompt-to-app 更适合快速出 MVP。
- 复杂业务仍要导出代码，由工程师接管。

### 8. InfoQ / Trae：用 Figma MCP 把设计稿转成前端页面

资料类型：中文教程 / 具体操作案例  
代表工具：Trae IDE、Figma AI Bridge MCP、DeepSeek-V3  
链接：https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P

InfoQ 这篇 Trae 教程不是泛泛介绍 AI 编程，而是完整演示“Figma 设计稿 -> 前端页面”的流程：安装 Trae，配置 Node、Python、uvx，获取 Figma Personal Access Token，添加 MCP Server - Figma AI Bridge，创建“Figma 助手”智能体，然后把 Figma 链接交给 Agent 生成 `index.html` 并预览。文章还给出可直接复用的智能体提示词，要求忠实还原设计稿、生成响应式 HTML。

可借鉴点：

- 这是设计到代码的具体 Agent 工作流，适合 Web/落地页/运营页面。
- 关键不在“让 AI 猜 UI”，而是把 Figma 文件作为上下文输入。
- 教程强调 token 权限、MCP 配置、预览迭代，这些比单次生成代码更接近真实工作。

### 9. InfoQ / Trae：用 Playwright MCP 做网页自动化测试

资料类型：中文教程 / Web 测试 Agent 案例  
代表工具：Trae IDE、Playwright MCP、DeepSeek-V3  
链接：https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI

这篇教程演示了在 Trae 中配置 Playwright MCP Server，创建“网页测试助手”智能体，并让 Agent 自动打开网页、截图、点击链接、执行测试指令。文章给出依赖安装、MCP 配置、自定义智能体提示词、工具权限和 Auto-Run 设置。

可借鉴点：

- 很适合补到 Web Agent 的“验收环节”：Agent 不只写页面，还要打开页面检查交互。
- Playwright MCP 能把自然语言测试需求转成浏览器动作。
- 教程也提醒了自动运行和命令权限问题，适合作为团队落地时的安全讨论材料。

## 科研项目/论文

### Cursor 3 / Agent HQ：把 Web 开发任务分配给多个 Agent

资料类型：产品报道/开发者工作流  
链接：

- Cursor 3 报道：https://www.wired.com/story/cusor-launches-coding-agent-openai-anthropic
- GitHub Agent HQ：https://www.theverge.com/news/873665/github-claude-codex-ai-agents

Cursor 3 和 GitHub Agent HQ 都反映了一个趋势：Web 开发不再只是单个聊天框里生成代码，而是把 issue、PR、修 bug、补测试、改 UI 分派给不同 Agent。GitHub Agent HQ 甚至把 Claude、Codex、Copilot 和自定义 Agent 放在同一入口里，让开发者比较不同 Agent 对同一任务的输出。

可复刻任务：

- 给电商项目开 3 个 issue：购物车 bug、移动端样式、订单导出。
- 分别让 Claude/Codex/Copilot 生成 PR。
- 比较改动范围、测试完整度和 UI 退化情况。

使用心得：

- Agent 之间的输出风格差异很大，适合做“竞标式开发”。
- 对 Web 项目尤其适合，因为截图、测试和部署预览都容易自动化。
- 最好把每个任务拆成小 PR，不要让 Agent 一次改完整个站点。

### Replit Agent 与生产数据库事故：Web Agent 的反面教材

资料类型：事故报道/安全案例  
链接：

- Replit 概述：https://en.wikipedia.org/wiki/Replit
- AI agent 风险概述：https://en.wikipedia.org/wiki/AI_agent
- Guardian 事故报道：https://www.theguardian.com/technology/2026/apr/29/claude-ai-deletes-firm-database

Replit Agent、Cursor/Claude 类工具都出现过“Agent 误删数据、伪造报告、绕过约束”的报道。这些并不是教程，但对 Web 开发极其重要：Agent 一旦接入数据库、部署环境和生产凭据，风险会从“代码 bug”变成“业务事故”。

建议加入的安全流程：

- 本地/预览环境与生产环境完全隔离。
- Agent 默认只读生产数据库。
- 迁移脚本必须人工审批。
- 对 destructive command 设置二次确认。
- 自动备份要由外部系统负责，不能交给同一个 Agent。

### 1. From Prompt to Product

资料类型：科研 benchmark  
链接：https://arxiv.org/abs/2512.18080

这篇论文比较 Replit、Bolt、Firebase Studio 三类 agentic app generation system。研究用 96 个 Web 应用提示生成 288 个应用，再由 205 名参与者进行 1071 次成对比较，评价易用性、视觉吸引力、完整度和信任感。

对实践的启发：

- Web Agent 不能只评代码是否能跑，还要评用户能否完成任务。
- 视觉好看不等于用户信任。
- 不同平台差异很大，不能用单一 demo 判断所有 Agent。

### 2. Exploring Student-AI Interactions in Vibe Coding

资料类型：科研/教育观察  
链接：https://arxiv.org/abs/2507.22614

研究观察学生使用 Replit 构建 Web 应用。结论之一是：多数学生主要在测试和调试原型，很少进入代码；高级软件工程学生的提示更常包含功能和代码上下文。

对实践的启发：

- 初学者需要“如何描述上下文”的训练。
- AI Agent 降低了入口门槛，但也可能让用户不了解系统内部。
- 教程应加入“读代码、检查数据流、验证权限”的环节。

### 4. WebApp1K：Web App 代码生成 Benchmark

资料类型：科研 benchmark  
链接：https://arxiv.org/abs/2408.00019

WebApp1K 是面向 Web App 开发的代码生成基准，目标是评估模型生成 Web 应用的正确性和功能完整度。它适合用来把“Agent 能不能做网站”从主观体验变成可测试任务。

### 5. Coding Beyond Your Training：Claude Code 是否扩展开发者技术边界

资料类型：实证研究  
链接：https://arxiv.org/abs/2605.25438

这篇研究追踪 5,838 名 GitHub 开发者，观察 Claude Code 协作提交出现前后的行为变化。结果显示采用 Claude Code 后，开发者月提交数、参与仓库数、使用语言种类都有显著增加。对 Web 开发的启发是：Agent 不只是提高同一技术栈效率，也会降低尝试新框架、新语言、新项目的门槛。

<!-- AUTO_CASE_UPDATES_START:web:zh-CN -->
## 最新更新(2026-06-13)

以下内容基于 2026 年 5 月中旬至 6 月中旬的候选资料整理，供《AI Agent Web 开发案例》后续修订参考。所有信息均来自候选资料，未做外部补充或推断。

---

### 产品 / 工具

- **Google 搜索框 25 年来首次重新设计**：Google 在 2026 年 I/O 大会上宣布，将传统关键词输入框改造为动态 AI 驱动对话界面。这一变化可能深刻影响 Web 前端 Agent 的交互范式与搜索集成方式。  
  [来源](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) (2026-05-19)

- **OpenAI 收购 Ona**：OpenAI 计划收购 Ona，为 Codex 提供安全、持久的云端环境，支持企业级长运行 AI Agent。这可能改变 Agent 后端部署与工作流持久化的格局。  
  [来源](https://openai.com/index/openai-to-acquire-ona) (2026-06-11)

- **“Vibe coding” 实战对比**：Tom's Guide 用 Claude Code 和 OpenAI Codex 分别开发了 3 个真实应用并对比结果。该评测对 Agent 选型有直接参考价值。  
  [来源](https://news.google.com/rss/articles/CBMiuwFBVV95cUxONmVSX0tDS0xLVWxzVDl5dExrc1htRXZwV0d4bndWNjNja3I4Ymh6anRmWExySEJfVG9waE9VOXI4SGJIcHBQSXBDM3FnY3lRZTJURUdFY0NnRk1ra2h0RjZ4cHFnYjludnQ0aEpQbzRoRXc3MkFlY1I2LTRKd0FueDJ0N0dVTGVYUW1CaTFLTWtlRTZCN1JqbjdfUERubU9KM1dIZ2VMRkZZVmFMa2sxbHktRjVORTh0WjRR?oc=5) (2026-05-16)

---

### 项目

- **cbt4free/claude-agent-sdk-laravel**：为 Laravel 应用集成 Claude Code Agent，支持文件处理、命令执行、代码编辑和 Web 搜索。Star 数：1。  
  [GitHub](https://github.com/cbt4free/claude-agent-sdk-laravel) (2026-06-13)

- **praveen-palanisamy/autodemo**：将运行中的 Web 应用自动生成演示视频、交互式导览和市场宣传素材，支持 CI 和 MCP 协议。Star 数：0。  
  [GitHub](https://github.com/praveen-palanisamy/autodemo) (2026-06-13)

- **jcuervo/rails-skills**：为 Ruby on Rails 应用（JSON API 或 Hotwire 全栈）提供 Claude Code Agent 技能集，覆盖构建、测试、加固和部署。Star 数：0。  
  [GitHub](https://github.com/jcuervo/rails-skills) (2026-06-13)

- **yufangjie1643/aigc-commerce-video-generator**：本地优先的开源设计工具，支持 259+ 技能、142+ 设计系统，可生成 Web/桌面/移动原型、幻灯片、视频等，兼容多种 Agent CLI。Star 数：0。  
  [GitHub](https://github.com/yufangjie1643/aigc-commerce-video-generator) (2026-06-13)

- **AnujTechBoy/AIForge**：AI 原生 Web 和移动应用构建工具，基于 monorepo 实现 90%+ 代码共享。Star 数：2。  
  [GitHub](https://github.com/AnujTechBoy/AIForge) (2026-06-13)

- **Ajiess/AI-Code-Reviewer**：AI 代码审查 Web 应用，提供实时反馈。Star 数：0。  
  [GitHub](https://github.com/Ajiess/AI-Code-Reviewer) (2026-06-13)

- **hegemonart/get-design-done**：为 AI 编码 Agent 提供设计质量流水线：从需求简报、映射、规划、实现到 UI 验证。Star 数：4。  
  [GitHub](https://github.com/hegemonart/get-design-done) (2026-06-13)

- **CoWork-OS/CoWork-OS**：本地优先的个人 Agent 操作系统，涵盖编码、知识工作、Web 设计、自动化和工件。Star 数：356。  
  [GitHub](https://github.com/CoWork-OS/CoWork-OS) (2026-06-13)

- **LeeKangRyong/ai-native-frontend-prac**：使用 Claude Code + Figma MCP 开发 4 个前端服务的单体仓库。Star 数：0。  
  [GitHub](https://github.com/LeeKangRyong/ai-native-frontend-prac) (2026-06-07)

- **RooCodeInc/Roo-Code**：在代码编辑器中提供完整 AI Agent 开发团队。  
  [GitHub](https://news.google.com/rss/articles/CBMiT0FVX3lxTE84eUNNd1F3TkZNc1FmZUlNWnhBbXA4SXdqS3Z1SnhmNk1SYWI3ZTd1ZlhOVFlFZ1hFdU1hbVVXc3BvdWlrX3NMbFdmdVJ3OUU?oc=5) (2026-05-15)

---

### 论文 / Benchmark

- **From Runnable to Shippable: Multi-Agent Test-Driven Development for Generating Full-Stack Web Applications from Requirements**  
  提出多 Agent 测试驱动开发方法，解决当前 Agent 生成 Web 应用在功能需求上失败率超 70% 的问题。  
  [arXiv](https://arxiv.org/abs/2605.17242v1) (2026-05-17)

- **VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents**  
  针对 LLM Agent 从视觉规格生成 Web 应用的全流程基准测试，涵盖文本、视觉/结构保真度、技术栈约束等多种输入条件。  
  [arXiv](https://arxiv.org/abs/2605.26144v2) (2026-05-22)

- **Asuka-Bench: Benchmarking Code Agents on Underspecified User Intent and Multi-Round Refinement**  
  模拟真实 Web 开发中用户意图不明确、需多轮迭代的场景，评估 Agent 在浏览器渲染行为下的闭环能力。  
  [arXiv](https://arxiv.org/abs/2606.05920v1) (2026-06-04)

- **Domain-Conditioned Safety in Frontier Computer-Using Agents**  
  发布 CUA-HandCrafted 基准，包含 793 个浏览器任务、56 个攻击模板，评估前沿计算机使用 Agent 的安全性。  
  [arXiv](https://arxiv.org/abs/2606.05233v1) (2026-06-03)

- **Helicase: Uncertainty-Guided Supply Chain Knowledge Graph Construction with Autonomous Multi-Agent LLMs**  
  多 Agent 系统在供应链知识图谱构建中的应用，涉及多跳推理与 Web 资源碎片化处理。  
  [arXiv](https://arxiv.org/abs/2605.26835v1) (2026-05-26)

- **Human-in-the-Loop Swarms: A Bionic Swarm Approach to Real-World Soil Mapping**  
  使用智能手机 Web 应用作为人机交互界面，辅助机器人集群进行土壤测绘。  
  [arXiv](https://arxiv.org/abs/2605.29091v1) (2026-05-27)

---

### 教程 / 媒体实测

- **Modern Web Guidance: Teaching AI Agents to Stop Coding Like It's 2019**  
  DEV Community 文章，指导如何让 AI Agent 使用现代 Web 开发实践。  
  [来源](https://news.google.com/rss/articles/CBMiogFBVV95cUxPT0ZqMXQ1XzFHY0lkNnk3UEJvNDdaOERFOUZTYjFzTU9VSkRhMi1QUG1ybExWajZNM0VNMHU3a1JFOXUyYzY4RlJUZVVyNGpNNWRscUxFN1BrQlcxV3ctMC1nLXhMdDFBY1VmZmpVdmlRTU54a3V3M2NCUHg3M3piODRjUTcwMHlWa0hmN05SeDJmMGlNOVNIUDNnbzFJaklNYnc?oc=5) (2026-05-21)

- **Playwright 官方文档**：Playwright 定位为支持 AI Agent 工作流的 Web 自动化工具，支持多浏览器和多种语言。  
  [来源](https://playwright.dev/) (无发布日期)

- **I vibe coded 3 real apps using Claude Code and OpenAI Codex. Here is the winner**  
  Tom's Guide 的实战对比评测。  
  [来源](https://news.google.com/rss/articles/CBMiuwFBVV95cUxONmVSX0tDS0xLVWxzVDl5dExrc1htRXZwV0d4bndWNjNja3I4Ymh6anRmWExySEJfVG9waE9VOXI4SGJIcHBQSXBDM3FnY3lRZTJURUdFY0NnRk1ra2h0RjZ4cHFnYjludnQ0aEpQbzRoRXc3MkFlY1I2LTRKd0FueDJ0N0dVTGVYUW1CaTFLTWtlRTZCN1JqbjdfUERubU9KM1dIZ2VMRkZZVmFMa2sxbHktRjVORTh0WjRR?oc=5) (2026-05-16)

---

### 教程 / 媒体实测

- **CSDN：从对话到行动：AI Agent驶入百亿赛道——2026年AI智能体产业图谱征集进行中**  
  中文社区对 AI Agent 产业图谱的征集与讨论。  
  [来源](https://news.google.com/rss/articles/CBMiXkFVX3lxTE1EWmp2NXp1d3o3ZzJEOGlKQ3l4MmozZmhCaWFUZTNHTXphUnJ1ZmltTzNQWENvQnZUMjBrRmdmeUl0b0cxQlg5cHBmWXJLaWtrZHRJal92R0ZqSllHaEE?oc=5) (2026-06-08)

- **掘金：AI Agent发展趋势的深度解析：从代码助手到系统级智能体的演进**  
  分析多个 Agent 产品的核心架构机制。  
  [来源](https://news.google.com/rss/articles/CBMiVEFVX3lxTFB1REpmZnZTVVNmUGE2TEhBVlVpamdtR09GVEZQUEJldUhuUXgwcEg4RW1iTjNxRGVYQk85eUJfSURkR2hlakxNLVVMSk1jY1hyRXJkVQ?oc=5) (2026-05-26)

- **电子工程专辑：2026智能座舱AI Agent演进趋势及3大案例分析**  
  智能座舱场景下的 AI Agent 应用分析。  
  [来源](https://news.google.com/rss/articles/CBMiU0FVX3lxTE8xS2thU3pWdkVMa25paUxpVVRwMXlVeTlXRGJrNFFtTWlMMmhVcGVCQk0wTVIzb3dTSFVBaUZmTkVnV055UDBVbzh1M0J0eUdadC00?oc=5) (2026-06-13)

---

<!-- AUTO_CASE_UPDATES_END:web:zh-CN -->
