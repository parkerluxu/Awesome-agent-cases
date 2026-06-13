# Web 开发：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（32+15）

本节分为两类：`教程 / 案例 32 条` 和 `项目 / 论文 15 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 32 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | Anthropic Claude Code docs | 官方文档 | Anthropic 官方文档，详述 Claude Code 如何读取代码库、编辑文件、执行命令并委派子任务，是研究代码生成 Agent 工作流与权限管理的核心参考。 | https://docs.anthropic.com/en/docs/claude-code/overview |
| 2 | OpenAI Codex docs | 官方文档 | OpenAI 官方指南，阐述 Codex 理解仓库结构、修改代码、运行测试并生成可审查变更的机制，为 coding agent 的工程化能力提供基准。 | https://platform.openai.com/docs/guides/codex |
| 3 | Cursor docs | 官方文档 | Cursor 官方文档，介绍其代码库索引、自动编辑与多文件修改的实现细节，是理解 AI IDE 如何提升交互式开发效率的关键资料。 | https://docs.cursor.com/ |
| 4 | GitHub Copilot docs | 官方文档 | GitHub 官方文档，覆盖 Copilot 在 issue、PR、代码补全及团队协作中的集成方式，是理解 AI 编程助手在真实开发流程中落地的核心参考。 | https://docs.github.com/en/copilot |
| 5 | Replit Agent docs | 官方文档 | Replit 官方文档，描述 Agent 将自然语言需求转化为在线运行原型的完整路径，涵盖从零到部署的端到端开发流程。 | https://docs.replit.com/replitai/agent |
| 6 | Lovable docs | 官方文档 | Lovable 官方文档，覆盖 prompt-to-app 的页面生成、后端集成与可视化迭代，是研究快速构建全栈应用 Agent 的实践指南。 | https://docs.lovable.dev/ |
| 7 | Bolt.new docs | 官方文档 | Bolt.new 支持文档，解释如何在浏览器内生成、运行和修改全栈应用，展示了无环境配置的云端开发工作方式。 | https://support.bolt.new/ |
| 8 | Firebase Studio docs | 官方文档 | Firebase 官方文档，说明 Studio 如何连接数据库、鉴权、托管和后端服务，是研究 AI 原型与云服务深度集成的技术参考。 | https://firebase.google.com/docs/studio |
| 9 | Trae Figma MCP 教程 | 中文教程 | InfoQ 中文教程，讲解通过 Trae 与 Figma MCP 将设计稿上下文交给 Agent 并生成可预览页面，是设计转代码的实操案例。 | https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P |
| 10 | Trae Playwright MCP 教程 | 中文教程 | InfoQ 中文教程，介绍 Trae 结合 Playwright MCP 进行 Web 页面操作与自动化验收，为 Agent 产物的质量检测提供可复现方案。 | https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI |
| 11 | Tom Guide Claude Code vs Codex | 媒体实测 | Tom's Guide 实测对比，通过构建三个真实应用评估 Claude Code 与 OpenAI Codex 在代码库读取、文件编辑和任务委派中的表现差异。 | https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict |
| 12 | Tom Guide weekend app | 媒体教程 | Tom's Guide 分享用 AI 辅助在一个周末内完成应用开发并部署到他人手机的全过程，涵盖从创意到上线的完整工作流与实用技巧。 | https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones |
| 13 | The Verge personal software | 媒体体验 | The Verge 探讨个人软件开发变革，通过实际体验展示非专业开发者如何借助 AI 工具创建满足个人需求的定制化应用。 | https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution |
| 14 | Washington Post Claude app | 媒体体验 | 华盛顿邮报交互式报道，记录记者使用 Claude Code 作为编程搭档构建应用的亲身经历，揭示 AI 辅助开发中的协作模式与产出效果。 | https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/ |
| 15 | Vibe coding overview | 百科/案例汇总 | 维基百科词条系统梳理 Vibe Coding 的概念、起源与实践方法，汇总社区案例，是理解这种依赖 AI 生成代码的新编程范式的基础资料。 | https://en.wikipedia.org/wiki/Vibe_coding |
| 16 | Vercel AI SDK examples | 官方示例 | Vercel AI SDK 官方文档提供完整示例，涵盖流式响应、工具调用和前端交互，是快速搭建具备 AI 能力的 Web 应用的技术起点。 | https://sdk.vercel.ai/docs |
| 17 | Supabase AI docs | 官方文档 | Supabase AI 文档聚焦数据库、鉴权、向量检索和后端集成，为构建 AI 应用提供开箱即用的后端基础设施与操作指南。 | https://supabase.com/docs/guides/ai |
| 18 | LangChain JS tutorials | 官方教程 | LangChain.js 官方教程，指导构建 RAG 系统、工具调用链和多步骤推理 Agent，是掌握 JavaScript 环境下复杂 AI 工作流的关键资料。 | https://js.langchain.com/docs/tutorials/ |
| 19 | OpenAI Agents SDK Python quickstart | 官方教程 | OpenAI Agents SDK Python 快速入门，指导安装与基础示例，帮助快速构建基于 Agent 的 AI 应用。 | https://openai.github.io/openai-agents-python/quickstart/ |
| 20 | OpenAI Realtime API guide | 官方教程 | OpenAI Realtime API 指南，讲解实时语音与文本交互能力，适用于构建低延迟的对话式 AI 应用。 | https://platform.openai.com/docs/guides/realtime |
| 21 | Anthropic tool use docs | 官方教程 | Anthropic 工具使用文档，介绍如何集成 Claude 的工具调用功能，实现模型与外部 API 或数据的交互。 | https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview |
| 22 | Anthropic MCP connector docs | 官方教程 | Anthropic MCP 连接器文档，讲解如何通过模型上下文协议连接外部工具与数据源，扩展 Agent 能力。 | https://docs.anthropic.com/en/docs/agents-and-tools/mcp-connector |
| 23 | Google ADK quickstart | 官方教程 | Google ADK 快速入门，指导安装与初始配置，帮助快速上手 Agent 开发工具包。 | https://google.github.io/adk-docs/get-started/quickstart/ |
| 24 | Mastra getting started | 官方教程 | Mastra 入门指南，涵盖安装与基础用法，助力快速搭建可扩展的 AI Agent 框架。 | https://mastra.ai/docs/getting-started/installation |
| 25 | Agno quickstart | 官方教程 | Agno 快速入门文档，介绍安装与核心概念，帮助快速构建和部署 AI 代理应用。 | https://docs.agno.com/introduction |
| 26 | Convex AI quickstart | 官方教程 | Convex AI 快速入门，讲解如何结合 Convex 后端与 AI 功能，实现实时数据驱动的智能应用。 | https://docs.convex.dev/ai |
| 27 | Postgres pgvector tutorial | 官方教程 | pgvector 官方教程，展示如何在 PostgreSQL 中存储和检索向量数据，适用于 RAG 与语义搜索场景。 | https://github.com/pgvector/pgvector |
| 28 | Qdrant RAG tutorial | 官方教程 | Qdrant RAG 教程，指导使用向量数据库构建检索增强生成系统，提升问答与知识库应用的准确性。 | https://qdrant.tech/documentation/tutorials/ |
| 29 | Chroma getting started | 官方教程 | Chroma 入门指南，介绍轻量级向量数据库的安装与基本操作，适合快速集成到 AI 应用中。 | https://docs.trychroma.com/getting-started |
| 30 | Pinecone RAG guide | 官方教程 | Pinecone RAG 指南，讲解如何利用托管向量数据库实现高效语义检索，优化知识库问答流程。 | https://docs.pinecone.io/guides/get-started/overview |
| 31 | Weaviate quickstart | 官方教程 | Weaviate 快速入门，展示云原生向量数据库的配置与查询，支持混合搜索与 AI 工作流集成。 | https://weaviate.io/developers/weaviate/quickstart |
| 32 | Streamlit LLM tutorials | 官方教程 | Streamlit LLM 教程，提供构建大语言模型交互界面的示例，帮助快速创建数据驱动的 AI 演示应用。 | https://docs.streamlit.io/develop/tutorials/llms |

### 项目 / 论文 15 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | AIDev | 论文/数据集 | AIDev 论文提出评估 AI 开发能力的基准，涵盖问题设定、数据集构建和模型表现分析，为衡量 Agent 编码能力提供标准化测试。 | https://arxiv.org/abs/2602.09185 |
| 2 | Agentic Much | 论文 | Agentic Much 论文研究 AI 代理在软件开发中的自主性，包含实验设计、评测指标和关键发现，揭示 Agent 自主编码的边界与潜力。 | https://arxiv.org/abs/2601.18341 |
| 3 | Configuring Agentic AI Coding Tools | 论文 | Configuring Agentic AI Coding Tools 论文探讨 AI 编码工具配置对代码生成质量的影响，为优化 Agent 编码输出提供可操作的配置策略。 | https://arxiv.org/abs/2602.14690 |
| 4 | Fingerprinting AI Coding Agents | 论文 | Fingerprinting AI Coding Agents 论文提出识别不同 AI 编码代理的方法，通过行为特征和溯源技术，为 Agent 审计与安全提供技术支撑。 | https://arxiv.org/abs/2601.17406 |
| 5 | Dive into Claude Code | 论文 | Dive into Claude Code 论文深入分析 Claude 编码代理在代码库操作和任务委派中的实际表现，为 Agent 协作工作流设计提供实证。 | https://arxiv.org/abs/2604.14228 |
| 6 | From Prompt to Product | 论文/Benchmark | From Prompt to Product 论文与基准研究从提示到完整产品的生成过程，提供评估框架和实验结果，衡量 Agent 端到端开发能力。 | https://arxiv.org/abs/2512.18080 |
| 7 | WebApp1K | 论文/Benchmark | WebApp1K 论文与基准提供一千个网页应用生成任务，包含数据集构建和模型生成效果评测，是测试 Agent 前端生成能力的标准化资源。 | https://arxiv.org/abs/2408.00019 |
| 8 | Student-AI Vibe Coding | 论文 | Student-AI Vibe Coding 论文研究学生与 AI 协作编程的模式，分析人机协作对学习效果的影响，为 Agent 教育场景设计提供参考。 | https://arxiv.org/abs/2507.22614 |
| 9 | gpt-engineer | 开源项目 | 通过自然语言描述自动生成代码的开源项目。核心工作流是用户输入需求，AI 自主完成代码编写、迭代与文件生成，适合研究从需求到代码的端到端 Agent 实现路径。 | https://github.com/AntonOsika/gpt-engineer |
| 10 | OpenHands | 开源项目 | 让 AI 自主编写和调试代码的开源平台。它模拟人类开发者与代码仓库的交互，能处理复杂的软件工程任务，是研究代码生成 Agent 在真实项目环境中表现的典型案例。 | https://github.com/All-Hands-AI/OpenHands |
| 11 | SWE-agent | 开源项目 | 专注于让 AI 自主解决 GitHub 上的软件工程问题。它通过 Agent-Computer Interface 与代码仓库交互，执行修复 bug、添加功能等任务，可复现其工具调用与任务分解策略。 | https://github.com/SWE-agent/SWE-agent |
| 12 | browser-use | 开源项目 | 让 AI 直接操控浏览器的开源工具。它模拟用户点击、输入和导航，实现自动化网页交互与数据采集，是研究 Agent 在真实 Web 环境中执行任务的实用参考。 | https://github.com/browser-use/browser-use |
| 13 | bolt.diy | 开源项目 | StackBlitz 推出的浏览器内全栈应用生成工具。它允许用户通过自然语言描述直接生成、运行和修改代码，零配置即可体验从需求到可运行应用的完整流程。 | https://github.com/stackblitz-labs/bolt.diy |
| 14 | v0 | 产品案例 | Vercel 推出的 AI 驱动 UI 生成工具。它通过自然语言描述快速创建 React 组件和页面原型，是研究 AI 辅助前端开发工作流的典型产品案例。 | https://v0.dev/ |
| 15 | Open Lovable | 开源项目 | 通过自然语言描述生成 Web 页面与后端的 prompt-to-app 工具。基于 Firecrawl 页面抓取与 LLM 代码生成，适合快速原型验证与 MVP 开发。 | https://github.com/firecrawl/open-lovable |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| cbt4free/claude-agent-sdk-laravel | Laravel SDK | 让 Laravel 应用使用 Claude Code 构建 AI Agent，支持文件处理、命令执行、代码编辑和网络搜索集成 | [GitHub](https://github.com/cbt4free/claude-agent-sdk-laravel) |
| Chillin-spree/claude-code-system-template | 项目模板 | 基于 Claude Code 的轻量级 Web 应用构建模板，技能优先、可切换技术栈，含工作流技能、Agent 和提交推送安全门 | [GitHub](https://github.com/Chillin-spree/claude-code-system-template) |
| cicy-ai/cicy-code | Agent 工作空间 | AI Agent 工作空间：在 tmux 中运行、编排和对话编码 Agent（Claude / Codex / OpenCode 等），管理团队，驱动浏览器和桌面；Go 服务端 + React 工作区，支持原生、Web/PWA 及 Telegram Mini App 客户端 | [GitHub](https://github.com/cicy-ai/cicy-code) |
| jcuervo/rails-skills | Rails 技能套件 | 一套 Claude Code Agent Skills，用于构建、测试、加固和发布 Ruby on Rails 应用（JSON API 后端或全栈 Hotwire Web 应用），基于 Ruby 4.0.x 和 Rails 8.1.x | [GitHub](https://github.com/jcuervo/rails-skills) |
| yufangjie1643/aigc-commerce-video-generator | 设计生成工具 | 本地优先、开源的 Claude Design 替代方案；原生桌面应用，259+ 技能、142+ 设计系统，支持 Web/桌面/移动原型、幻灯片、图片、视频、HyperFrames，沙盒预览，HTML/PDF/PPTX/MP4 导出，兼容 Claude Code / OpenClaw / Codex 等 17+ CLI | [GitHub](https://github.com/yufangjie1643/aigc-commerce-video-generator) |
| AnujTechBoy/AIForge | 应用构建框架 | 使用单体仓库构建和管理 AI 原生 Web 与移动应用，支持 90% 以上代码共享以加速开发 | [GitHub](https://github.com/AnujTechBoy/AIForge) |
| Ajiess/AI-Code-Reviewer | 代码审查工具 | AI 代码审查器 Web 应用，即时分析并改进代码质量，提供实时反馈 | [GitHub](https://github.com/Ajiess/AI-Code-Reviewer) |
| hegemonart/get-design-done | 设计质量管线 | 面向 AI 编码 Agent 的设计质量管线：需求简报、映射、规划、实现，并对照设计系统验证 UI | [GitHub](https://github.com/hegemonart/get-design-done) |
| LeeKangRyong/ai-native-frontend-prac | 前端实践仓库 | 使用 Claude Code（+Figma MCP）在一个仓库中开发 4 个前端服务 | [GitHub](https://github.com/LeeKangRyong/ai-native-frontend-prac) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| From Runnable to Shippable: Multi-Agent Test-Driven Development for Generating Full-Stack Web Applications from Requirements | 论文 | 提出多 Agent 测试驱动开发方法，解决编码 Agent 生成 Web 应用时功能需求满足率低（基准测试显示超 70% 失败）的问题，通过部署、浏览器交互模拟和失败信号转化实现可修复闭环 | [arXiv](https://arxiv.org/abs/2605.17242v1) |
| VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents | Benchmark | 端到端 Web 应用生成基准，评估 LLM Agent 从视觉规格生成功能完整、视觉连贯应用的能力，定义了五种提示信息条件（文本/视觉/结构约束/技术栈约束等） | [arXiv](https://arxiv.org/abs/2605.26144v2) |
| Asuka-Bench: Benchmarking Code Agents on Underspecified User Intent and Multi-Round Refinement | Benchmark | 针对真实 Web 开发中用户需求不完整、需多轮迭代的场景，提出配对不完整用户意图与多轮精炼的基准，基于浏览器渲染行为闭环评估 | [arXiv](https://arxiv.org/abs/2606.05920v1) |
| Domain-Conditioned Safety in Frontier Computer-Using Agents: A 793-Episode Browser Benchmark | 论文/Benchmark | 发布 CUA-HandCrafted 基准（793 个 episode，24 个多步 Web 任务，56 个攻击模板），评估前沿计算机使用 Agent 在浏览器环境中的提示注入安全性 | [arXiv](https://arxiv.org/abs/2606.05233v1) |
| Helicase: Uncertainty-Guided Supply Chain Knowledge Graph Construction with Autonomous Multi-Agent LLMs | 论文 | 提出基于不确定性引导的多 Agent 系统，用于从碎片化 Web 资源中构建供应链知识图谱，解决多跳推理和结构推断问题 | [arXiv](https://arxiv.org/abs/2605.26835v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google just redesigned the search box for the first time in 25 years | 行业报道 | Google I/O 宣布搜索框全面改版，从简单关键词输入转变为动态 AI 驱动对话界面 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| Modern Web Guidance: Teaching AI Agents to Stop Coding Like It's 2019 | 技术文章 | 指导 AI Agent 使用现代 Web 开发实践，避免过时的编码方式 | [DEV Community](https://news.google.com/rss/articles/CBMiogFBVV95cUxPT0ZqMXQ1XzFHY0lkNnk3UEJvNDdaOERFOUZTYjFzTU9VSkRhMi1QUG1ybExWajZNM0VNMHU3a1JFOXUyYzY4RlJUZVVyNGpNNWRscUxFN1BrQlcxV3ctMC1nLXhMdDFBY1VmZmpVdmlRTU54a3V3M2NCUHg3M3piODRjUTcwMHlWa0hmN05SeDJmMGlNOVNIUDNnbzFJaklNYnc?oc=5) |
| I vibe coded 3 real apps using Claude Code and OpenAI Codex. Here is the winner | 实测对比 | 使用 Claude Code 和 OpenAI Codex 构建 3 个真实应用的对比评测 | [Tom's Guide](https://news.google.com/rss/articles/CBMiuwFBVV95cUxONmVSX0tDS0xLVWxzVDl5dExrc1htRXZwV0d4bndWNjNja3I4Ymh6anRmWExySEJfVG9waE9VOXI4SGJIcHBQSXBDM3FnY3lRZTJURUdFY0NnRk1ra2h0RjZ4cHFnYjludnQ0aEpQbzRoRXc3MkFlY1I2LTRKd0FueDJ0N0dVTGVYUW1CaTFLTWtlRTZCN1JqbjdfUERubU9KM1dIZ2VMRkZZVmFMa2sxbHktRjVORTh0WjRR?oc=5) |
| Roo Code gives you a whole dev team of AI agents in your code editor | 工具介绍 | Roo Code 在代码编辑器中提供完整的 AI Agent 开发团队 | [GitHub](https://news.google.com/rss/articles/CBMiT0FVX3lxTE84eUNNd1F3TkZNc1FmZUlNWnhBbXA4SXdqS3Z1SnhmNk1SYWI3ZTd1ZlhOVFlFZ1hFdU1hbVVXc3BvdWlrX3NMbFdmdVJ3OUU?oc=5) |
| Hermes Agent Desktop App: Everything You Need to Know | 工具介绍 | Nous Research 自改进 AI Agent 桌面应用介绍 | [Medium](https://news.google.com/rss/articles/CBMi1gFBVV95cUxPcTVPeXJ6NktnM015eHJTVzJUdVNCdFpIWHc1Y2dlLVBEc1d0cDRIckNNOW1jRElmTnMxWlhRQ1RxYmd0OU1sUWlDLWoxWUVaWHRCN1BpUmZKb3FiQkttSDRLQlFlZXJEZlRXNDY0dmJUaUhYN2owQW8zbFdiVmI1ckpuQkxGR1JJVmNjRGp0dU9qUks3WWp1NFoxc3V6RHZRdWhyTU9VUWpqZkF1QVVQNkpCNV95TUFSVnhocDh4Wi1pMEJOX1hfa3lMT3FQWEE1bVBUSzJR?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Playwright | 浏览器自动化工具 | 支持 Chromium、Firefox、WebKit 的可靠 Web 自动化工具，适用于测试、脚本和 AI Agent 工作流，支持 TypeScript、Python、.NET、Java | [Playwright](https://playwright.dev/) |
| OpenAI 收购 Ona | 收购事件 | OpenAI 计划收购 Ona，为 Codex 扩展安全、持久的云端环境，支持企业工作流中的长期运行 AI Agent | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| Google DeepMind 关注多 Agent 交互风险 | 安全研究 | Google DeepMind 资助研究数百万 AI Agent 在线交互的潜在危险，关注无人类监督的 Agent 大规模部署风险 | [MIT Technology Review](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/) |
