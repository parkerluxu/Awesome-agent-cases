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

## 资料更新（2026-06-14）

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AI Coding Agents Can Reproduce Social Science Findings | 论文 | 提出 SocSci-Repro-Bench，包含 221 个跨学科任务，系统评估 AI 编码代理复现社会科学发现的能力 | https://arxiv.org/abs/2606.11447v1 |
| Agentic Agile-V: From Vibe Coding to Verified Engineering in Software and Hardware Development | 论文 | 分析代理式 AI 编码系统在软件和硬件开发中的实际收益与局限，指出自主代码生成并非自动改善工程产出 | https://arxiv.org/abs/2605.20456v1 |
| AgentBeats: Agentifying Agent Assessment for Openness, Standardization, and Reproducibility | 论文 | 提出 AAA（Agentified Agent Assessment）评估框架，由裁判代理通过标准化协议评估各类代理系统 | https://arxiv.org/abs/2606.13608v1 |
| Frontier Coding Agents Use Metaprogramming to Adapt to Unfamiliar Programming Languages | 论文 | 在四种冷门编程语言上评估六个当代编码代理，揭示主流基准测试中隐藏的能力差异 | https://arxiv.org/abs/2606.10933v1 |
| Mining Architectural Quality Under Agentic AI Adoption: A Causal Study of Java Repositories | 论文 | 对 151 个开源 Java 仓库进行因果分析，研究代理式 AI 采用对软件架构质量的影响 | https://arxiv.org/abs/2606.13298v1 |
| Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks | 论文 | 提出多语言 SWE-bench 风格基准和适配器协议，使异构代理框架可在公平条件下比较 | https://arxiv.org/abs/2606.12344v1 |
| MoCA-Agent: A Market-of-Claims Code Agent for Financial and Numerical Reasoning | 论文 | 引入基于声明级验证的市场机制代码代理，用于金融和表格问答中的精确推理 | https://arxiv.org/abs/2606.11537v1 |
| CORE-Bench: A Comprehensive Benchmark for Code Retrieval in the Era of Agentic Coding | 论文 | 提出面向代理式编码的代码检索基准，评估代理在仓库中定位相关文件和函数的能力 | https://arxiv.org/abs/2606.11864v1 |
| From Prompting to Verification: How Experience Shapes Vibe Coding Practices | 论文 | 通过 162 份问卷调研，分析不同经验水平的用户在 Vibe Coding 实践中的差异 | https://arxiv.org/abs/2605.24521v1 |
| Human-in-the-Loop Swarms: A Bionic Swarm Approach to Real-World Soil Mapping | 论文 | 介绍“仿生蜂群”系统，通过智能手机 Web 应用实现人机协同的土壤测绘 | https://arxiv.org/abs/2605.29091v1 |
| DeepResearch Bench: A Comprehensive Benchmark for Deep Research Agents | Benchmark | 面向深度研究代理的综合基准测试 | https://news.google.com/rss/articles/CBMieEFVX3lxTE1SWUVfWm1NQjlYak5mQnZlTzM3VkhmUE9mQjFnbS1KWV9PNXRWYkxQYTcycEZ6eThmSmRBVFVqSV8zNUxJRUFmb2dkaEd3Uy1EaVJXLWRuNkpmUWw3Y2hpVUhWYzRjSDBEWjYxSG9FdWl6RFBjNEYxYQ |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Open Design 免费替代 Claude Design！开源设计神器 | 视频教程 | 保姆级教程与多场景实战测评，支持 Codex/Claude Code/Antigravity | https://news.google.com/rss/articles/CBMiVkFVX3lxTE9HR3hPVTR0X0RQblA3Wjhsa2ZlYnV4WUh3ZTMtNkVFeWNWMWJZelVHbmY5cDRyWWlYQ0ZoQ0tUVEs3Z0ZjLVViTjFuMXNJelV4NEFhMTBR |
| AI Coding Agent 时代：Claude Code 已 100% 自编写代码 | 深度解析 | 开发者如何应对 AI 编码代理时代的深度分析与实战 | https://news.google.com/rss/articles/CBMiZEFVX3lxTFAycllsTVlMZ2xSUmFuXzBjS2FrMTlFa0FuT1FtdWY4WXJkdk5yZ3FWY0pHbFdOLXB6SjVaOFc2UDFhM3o1Z0x3TDlGMUJaNFlOT3lIYmdtNG0wcy1yRHdyUTl6YTQ |
| Pi Agent：比 Claude Code 和 Codex 更适合普通人的 AI 工具 | 工具测评 | Bilibili 视频介绍 Pi Agent 的使用体验 | https://news.google.com/rss/articles/CBMiV0FVX3lxTE45OHlNWXptU28yT2dvZEMzZ1hwZGdGU2hmZVNObk1WVXc4a0JHRlR4VmZ6dmZqbEJsNXJZYWhVbHU0TEduNkF4elVHMDU1dmF3bDdNQmp6SQ |
| AI 编程革命！Claude Code Workflow 自动生成 Harness | 视频教程 | 介绍 ultrawork 自动多 Agent 编程开发工作流 | https://news.google.com/rss/articles/CBMiVkFVX3lxTE94VHFDMlVEVHluWjlQWm1ZMUxJRjAzSHdsaTVwVHJNRlFfck5HLTJGbXVnUTRJUXhYRUR5TGhiZXNLb1JVWHVReHZ5dHRORG1aOUMyeE1R |
| 手机、平板、电脑同时控制 Claude Code / Codex？Paseo 实战指南 | 实战教程 | CSDN 专栏介绍跨设备控制编码代理的方法 | https://news.google.com/rss/articles/CBMiZEFVX3lxTE44cWtDNjFlVER4OW1EYmtnNVZYckdGNkc4d2g1NU81MmFFRkhWQm84c3ZFdFUyOXBja2U3UkVqX3VKVFVNN1lrV2tsQ0VyVzJScDdxQmtzV0VtRU5ZSWItb05IT08 |
| Introducing Shortcuts Playground: Create Apple Shortcuts with Claude Code or Codex | 教程 | MacStories 介绍如何使用编码代理创建 Apple Shortcuts | https://news.google.com/rss/articles/CBMid0FVX3lxTE80STFYaERuaHRzeXQ5dUpGSFY3MDlIbXBVeU9VbmtLZkplRTZ3QU5LNFdCRHN3ZzNzX2dHdGZaSlpRem8wNXlVSl9obUZ3bndWQTNfOFNEVTgzM1p4WE5CZjdYYm9idE5Ib05lMGVSd2dfdFF1ZDNB |
| Graphify + code-review-graph: Build a Self-Updating Knowledge Graph for Claude Code | 教程 | DEV Community 介绍为 AI 编码代理构建自更新知识图谱 | https://news.google.com/rss/articles/CBMiywFBVV95cUxQcnB3R0N1LXdHa2hjX1BiUVVMMm9fVDlVT0o2UXZmWGptbkFlLVZVU1dMSXppQlZ2ZDNPWlRJTC1LUXlhZURtQTVXT25tZkNVTWJVdGRzaDZjWkVVaXYyQTFLWFVYOWRuYndVSThLMlZ4LUlaczg0U043TzBDX0NYNHhfcDA1VjN6Y0NrU3NwczdVdDNQVHlabFMxdGZhVHRQbFUtZ3pnbkoxM05CZGVfMVpkZm8tZW81MWpBQ2o0aE1hc2EycDlGUm1lQQ |
| Claude Code vs. Cursor vs. Codex vs. Antigravity — six months in | 对比评测 | The New Stack 对四大编码代理的六个月使用对比 | https://news.google.com/rss/articles/CBMif0FVX3lxTE1ERDBKWmlOMnI1ZXhXaEo2Yi13OGdaS1g1al9yRTIxampTdmpfbU5SZ0ZoSzZOaDQ5ZkFpcjVRbXNqb3hBd2c3UWFrX3NmR1ViZDlJSzFjQm5GYVZDLTVoeUJVaFB0eW9WYW5VTGpMMzJoMEpaa3JYbl9CVFlmQUk |
| The Best LOCAL Agentic Coding Workflow (Complete Guide) | 视频教程 | YouTube 完整指南：本地代理式编码工作流 | https://news.google.com/rss/articles/CBMiVkFVX3lxTE16TlNlSHRFaWxOdmQ2T2lEM2U3TEdUa2diZnluZUF6TlVqQ2NxbTNsQXp0eDJrT2FLTW9GZi1fTmVHak5kdHhZMTZaYVBRRVNaeXFYWGJR |
| Supercharge your AI coding workflow with Chrome DevTools for agents | 视频教程 | 使用 Chrome DevTools 增强 AI 编码工作流 | https://news.google.com/rss/articles/CBMiVkFVX3lxTE9zb3lZUUpQcFdJTVFrc0NwVFVmRGcwTVlXX0lmaFpscmJYTTJxaDRTc3VsbDNTMDZZS3AtcWhnZEFEZTlXLUNSM01HNVdycm8xSllCTmZn |
| Codex 入门实战指南：从桌面端到 CLI 审批模式一次跑通 | 实战教程 | 知乎专栏的 Codex 入门与实战指南 | https://news.google.com/rss/articles/CBMiXEFVX3lxTE1LRUp4ODVrYzAydjh0LXAxcEZlMVJ4Rno4RnBoYVFUX3gxMmFwbnlxS25UaFR1VkVOTWFiWFFRUTVwRTJwTTlaZ3FBRFlZYW5QemNLS1A2VmMyWDZY |
| Superpowers Skill - 让 Claude Code 和 Codex 按工程流程做开发 | 教程 | 知乎专栏介绍按工程流程开发的自定义技能 | https://news.google.com/rss/articles/CBMiXEFVX3lxTFBJdDh6MWZ3M3BiVDRqZHo4Mkt4QlExQkNWX0hRTkVMUDFiN1R6WUtWNFpNazZCQ0FabEVUMW5zVUZ1ZWJmcUtkWVo0bWFFZGJOSi15ZTNvVzdNcEpC |
| The Complete Claude /goal Guide for AI Agents (2026) | 教程 | Linas's Newsletter 的 Claude /goal 指令完整指南 | https://news.google.com/rss/articles/CBMia0FVX3lxTE05aFRqdWFGY0xpb3duTXkxSGR6SnVlZzl5RjFnSFVRbVNXOEVTbEh3ZzBGeEpaT2NadGhHbFM1Z253N21TUWdnalRpdWpwTU91NEZtQkU2ZzVLRGR1R0lMVlZvZkt6ZExZQktv |
| WTF Is an "AI Agent Loop"? Genius or Hype? | 视频分析 | YouTube 视频分析 AI Agent 循环的概念与价值 | https://news.google.com/rss/articles/CBMiVkFVX3lxTE4zWktqX2VrNnUwV29NeDdSUEdjUF9TZ1d4enZDR2Y3ZnBMbVhMYWctaEZKNmJLR3Exc2RfTkV5cnhEX3picVZQY1Bpa3ZCTkNHYWVVVDhn |
| 从 0 到 1 带你速通 Codex，我整理的终极保姆教程来了 | 教程 | 投资界发布的 Codex 入门教程 | https://news.google.com/rss/articles/CBMiVkFVX3lxTE1xUnh0NVBFaUtiaWxYSWMyeW5ROTA4ZTZFZk1ldWRIY004Rm9haUlkWVpiY19lMmdCd1V1XzFSaW5rR0FOZ0tKN3FERmQ3TzJJWWRiQUFB |
| 外行式 Vibe Coding 正跟专业的 Agent 工程走向融合 | 深度分析 | Infoq.cn 分析 Vibe Coding 与专业 Agent 工程的融合趋势 | https://news.google.com/rss/articles/CBMiXkFVX3lxTE5hYTdraDduVFE0aFZNRUJJeWZDczBVd0hlSDNUX2s4U3g2SW92RWdQcm8zNHY5T2pMUllMSTBpSkRKdmM5OXE5T2xYWFVTeTU1WkkxLWlMSXJ4N3NsZHc |
| A practitioner's guide to getting more value out of AI coding | 实践指南 | DEV Community 关于代理质量与 Token 优化的实践指南 | https://news.google.com/rss/articles/CBMivwFBVV95cUxPYk5OZGpkLXpRYmJJOUpjRFgwdnlrUnZVbW9PTnRwSU5nalFzaHVJTm9xU1diN09MMFg1NldDQlhQbzBQUXh1R1RtbFRjamt5UVBUUmFKelFnUVNhZ2Z0QV9teHJPMkhvNEFWZDJ4UjRFaWhWWEdlZ213ZFhNUlFnZm5ZQ2xId29mV2VydWVPR2d6a1ZkRVB3dXA5ZnRmR3A3NE0tYnUxeVFyWWNUMTdNdzZGVi0zQVdVNUtiNTJsMA |
| Claude vs. Codex isn't about code. It's about whether you steer or dispatch. | 观点分析 | Nate's Substack 对比 Claude 与 Codex 的设计哲学 | https://news.google.com/rss/articles/CBMidEFVX3lxTE15Tlh0MjFBTDhWSDBxclBVNXYtUENqdFdNcVYtOGVVUzdiT21qTmNmaUpleXFOR3ItRGhnQkZkdFZpQ3ZlMnFDSllTYXgyOFNrbEpjdzlYakNfODZuLWdtSXp1UmdxU1hEemp1MmN6a2JnLWtH |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| alirezarezvani/claude-skills | 技能集合 | 337 个 Claude Code 技能与插件，支持 30+ 代理、70+ 自定义命令，兼容 Claude Code、Codex、Gemini CLI、Cursor 等 8 种编码代理 | https://news.google.com/rss/articles/CBMiW0FVX3lxTE55M0pPTGlvV2ZSN293YUZGSHNCOEp0MDdnTGpMN3hRS2txbXk1X3BuVS1PRURINmg4RW4zTm4xOWY0dWNIREhjNkEtZ3hGTHJ3dG9qTjhtTGpBS0U |
| hoangsonww/Claude-Code-Agent-Monitor | 监控仪表盘 | 基于 SQLite3、Node.js、React、WebSockets 的实时监控仪表盘，追踪 Claude Code 会话、代理活动、工具使用和子代理编排 | https://github.com/hoangsonww/Claude-Code-Agent-Monitor |
| 0xb007ab1e/claude-analyzer | 本地 Web 应用 | 零依赖本地 Web 应用，浏览、读取和编辑 Claude Code 的 .claude 目录文件，含实时监视和关系图谱 | https://github.com/0xb007ab1e/claude-analyzer |
| whiskfernlowdensitylipoprotein154/figma-console-mcp-skills | MCP 技能 | 通过可复用的 MCP 技能和预定义脚本自动化 Figma 设计系统工作流 | https://github.com/whiskfernlowdensitylipoprotein154/figma-console-mcp-skills |
| kymostudio/kymostudio | 图表生成工具 | 从文本或编码代理通过 MCP 生成动画 SVG 图表，支持 PNG、WebP、Figma 和 Excalidraw 导出 | https://github.com/kymostudio/kymostudio |
| sandorarthropodous723/groovy-web-ai-agents | 代理配置模板 | 构建可复用的 AI 代理配置和提示词，支持多代理编排和 TypeScript | https://github.com/sandorarthropodous723/groovy-web-ai-agents |
| Respectful-judasiscariot925/autocli-skill | CLI 工具 | 通过自然语言解锁 55+ 平台的 Web 访问，支持 Chrome 登录复用和快速 Rust CLI | https://github.com/Respectful-judasiscariot925/autocli-skill |
| agerelated-clioquinol357/ACI | 开放协议 | ACI 开放协议，使 AI 代理能够与 Web 和桌面软件进行结构化交互 | https://github.com/agerelated-clioquinol357/ACI |
| kographh/skillforge | 技能生成平台 | 通过验证的 7 步流程生成生产级 AI 代理技能，含自动审计、优化和打包的完整 Web 应用 | https://github.com/kographh/skillforge |
| CoWork-OS/CoWork-OS | 本地优先操作系统 | 本地优先的个人代理化操作系统，集编码、知识工作、Web 设计、自动化和工件于一体 | https://github.com/CoWork-OS/CoWork-OS |
| magicpro97/vibeflow | 编排 CLI | 本地优先 CLI，编排 Claude Code、Codex 和 GitHub Copilot CLI，带安全护栏 | https://github.com/magicpro97/vibeflow |
| Signpainterreverberation581/ux-collab | UI 协作工具 | 通过 agent-browser、Figma MCP 和 Lucid 构建 AI 驱动的 UI 协作，将线框图转换为匹配设计系统的代码 | https://github.com/Signpainterreverberation581/ux-collab |
| PratikMahara/voice-agent | 面试练习应用 | AI 面试官 Web 应用，根据职位生成面试问题，以视频通话形式提问并给出评分反馈 | https://github.com/PratikMahara/voice-agent |
| TwoApps/twoapps-website | 公司网站 | 基于 Next.js 的代理化 AI 软件公司网站，SEO 就绪 | https://github.com/TwoApps/twoapps-website |
| nexu-io/open-design | 开源设计工具 | 本地优先、开源的 Claude Design 替代品，含 259+ 技能、142+ 设计系统，支持 Web/桌面/移动原型、幻灯片、图片、视频 | https://news.google.com/rss/articles/CBMiT0FVX3lxTFBCam5FQ1ZTS2l4amc3MjFXelNhM0NBZ0k1aldCZkdGaUtxb1RmUnBHUkh3RTJKM0w5WkhzODFuVFJVeEUxX0w0NkRSOTE3TkU |
| claude_codex_bridge | 桥接工具 | 在 Claude Code 和 Codex 之间建立桥接，实现协同工作 | https://news.google.com/rss/articles/CBMiekFVX3lxTFBPdk5pSFlRVE1oZDd1RlFsR2R5WThRSEhGS3BDMElXNk92ZndwOFBteHNoNk41b1lCQzc5aW9yM1ROWjJ3VThOc0w2OHpCaG4xVXQyVTBUTXlBeE0xcjR1TTdrZU85NldVWlpLeFBaU3FWdDhyYlEzd1JR |
| Claude SEO: SEO Analysis Skill for Claude Code | SEO 技能 | 为 Claude Code 提供的 SEO 分析技能 | https://news.google.com/rss/articles/CBMiVEFVX3lxTE01R3RwWWpwTWNCN3FkeTFJbXNDeDhhSXJUMldTd0xuM0pGNXNZS21PWVhXaXJCQmRqVS1vVzFPc1RhYk1HZzEtY3dld3ktZmhWYXBscA |
| deepseek-ai/awesome-deepseek-agent | 资源集合 | DeepSeek 代理相关资源汇总 | https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OdTdJLUNuSWFRYUprTWFHcnNMV1Q1aS1qTmhGNkRnRkI1d2h3SC0wRjh1WG53MFRhQ0J4WnVBUFJzdWtn

## 资料更新（2026-06-23）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| CloudBase-MCP | 开源项目 | 腾讯云 CloudBase MCP 服务，连接 AI Agent 实现从提示词到上线应用 | [GitHub](https://github.com/TencentCloudBase/CloudBase-MCP) |
| agentic-kanban | 开源项目 | 自托管 AI Agent 任务中心，含 MCP 端点、角色权限控制与状态机，单二进制 SQLite 后端，提供实时 Web UI | [GitHub](https://github.com/codehand/agentic-kanban) |
| three.ws | 开源项目 | 开源 3D AI Agent 框架，支持 GLB/glTF 虚拟人、LLM 大脑、记忆、情感与自主支付，MCP 服务器，可嵌入为 Web Component | [GitHub](https://github.com/nirholas/three.ws) |
| taOS | 开源项目 | 自托管 AI Agent 操作系统，离线记忆、多框架群聊、完整 Web 桌面与应用商店，支持消费级硬件自动集群 | [GitHub](https://github.com/jaylfc/taOS) |
| agency-orchestrator | 开源项目 | 一句话调度多 AI 角色协作，基于 216+ 专家角色库，零代码 YAML 配置，含 Web Studio 与桌面应用 | [GitHub](https://github.com/jnMetaCode/agency-orchestrator) |
| june | 开源项目 | Agent 就绪的 React 框架，同一定义同时服务人类（流式 HTML）和 Agent（Markdown、JSON、MCP），部署于 Cloudflare Workers | [GitHub](https://github.com/junebuild/june) |
| figma-mcp-loop | 开源项目 | Figma → Claude Code → 无头浏览器 → 像素对比，AI 生成前端完整验证循环 | [GitHub](https://github.com/kripy/figma-mcp-loop) |
| search_evals | 开源项目 | 评估 Web 搜索 API 的框架，测试多个 AI Agent 的准确性与相关性 | [GitHub](https://github.com/Omg1221/search_evals) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AgentCyberRange | Benchmark | 在真实网络靶场中评估前沿 AI 系统的代码库检查、漏洞检测与利用能力 | [arXiv](https://arxiv.org/abs/2606.14295v2) |
| Meta-Agent | 论文 | 从自然语言任务描述自动构建并执行专用多 Agent 系统的两阶段框架 | [arXiv](https://arxiv.org/abs/2605.25233v1) |
| FraudSMSWalker | Benchmark | 面向短信到网页跨渠道诈骗检测的 Agent 大模型基准，URL 屏蔽下判断短信与网页内容一致性 | [arXiv](https://arxiv.org/abs/2606.16659v1) |
| Who Pays the Price? | 论文 | 面向真实 Web Agent 的提示注入基准，从利益相关者视角评估攻击影响 | [arXiv](https://arxiv.org/abs/2606.13385v1) |
| Mellum2 Technical Report | 论文 | 12B 参数 MoE 开源模型，专精软件工程：代码生成、编辑、调试、多步推理、工具调用与 Agent 编程 | [arXiv](https://arxiv.org/abs/2605.31268v1) |
| Beyond Domains | 论文 | 通过可迁移交互模式复用 Web 技能，将重复交互片段封装为可调用工具，降低 LLM Web Agent 延迟与成本 | [arXiv](https://arxiv.org/abs/2606.17645v1) |
| RunAgent SuperBrowser | 论文 | 模拟人类浏览行为的自主 Web 导航 Agent，基于视觉优先的边界框标注与感知-认知-行动三元机制 | [arXiv](https://arxiv.org/abs/2606.09399v1) |
| Benchmarking Multimodal LLMs on Code Generation for Complex Interactive Webpages | 论文 | 评估多模态大模型将视觉设计转化为可执行代码的能力，聚焦动态交互网页 | [arXiv](https://arxiv.org/abs/2606.00154v1) |
| When Web Agents Finish but Still Fail | 论文 | 研究长周期 Web Agent 在并行探索中的隐性失败模式，提出 Parallel WebBench 基准与轨迹诊断方法 | [arXiv](https://arxiv.org/abs/2606.20724v1) |
| Self-Distillation Policy Optimization via Visual Feedback | 论文 | 通过视觉反馈自蒸馏优化代码生成模型，修复图表、网页等视觉产物中的重叠、截断、对齐等缺陷 | [arXiv](https://arxiv.org/abs/2606.10334v1) |
| AliyunConsoleAgent | 论文 | 基于蒸馏与强化学习在真实云控制台环境中训练 Web Agent，用于自动化文档验证 | [arXiv](https://arxiv.org/abs/2606.09447v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| The Complete Playwright End-to-End Story | 教程 | 介绍 Playwright MCP 如何让 AI Agent 探索应用、建议测试用例、通过自然语言生成新测试 | [Microsoft Blog](https://developer.microsoft.com/blog/the-complete-playwright-end-to-end-story-tools-ai-and-real-world-workflows) |
| Omnigent 实战 | 教程 | 使用 Omnigent 框架编排 Claude Code、Codex、Cursor 等所有 AI 编程 Agent | [AI编程社区](https://news.google.com/rss/articles/CBMiZkFVX3lxTFBxTDlyaExGMVB3Rndia3p6dXBzZ1pvTkZnSTNZenJ2ZHFhWWhSNVJXWTMwMDZxLTR6dUprRnZDYnFRTUZDQjFsbVlLdUo3WUVGX0VSczJTQjRzSWNoNlAySWt5NUJRQQ?oc=5) |
| DeepSeek 桌面智能体应用全解析 | 教程 | 开源 AI Agent 平台实战部署与 API 调用指南 | [CSDN](https://news.google.com/rss/articles/CBMiZEFVX3lxTE1yUWJGMHptZHlUZXBYcmZYMHFnYmJHcEVueWR4U3RZdDlabFBBeXhNcEs4SXlxbjU2YWZzRzVad2txczNkazkyejFGRTY3UEF4Z3F3WmZVLTFLY1J6dll2RUhKdms?oc=5) |
| Beyond chatbots: How AI agents built a full OS, web apps, and more | 视频 | AI Agent 构建完整操作系统与 Web 应用的实测演示 | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1wSXlMa0dlX0V6ZGNKSmJjMlRBclhHWThac0txSEpwVFg0ZWpfa0RhNFppU1NRcHJBYzJWcDRDRkR0QVdsSnI2TWNCb284dlZFRXA1QUt3?oc=5) |
| 深度拆解：Claude Code、Codex、Cursor、OpenCode 的 Harness 设计与实战差异 | 教程 | 对比主流 AI 编程 Agent 的 Harness 架构与实战差异 | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTE1GNVhiUnllWlljc2tFTExPalVkWnJSaVIteDNwVkVFU19YZjZLQ3pnWXJ3M3daS29JdVNRY3BYRy1pMjlDamp6N2JzTS10aXFTV3Z6V0c3QzVFeWlE?oc=5) |
| 用 Codex + iLink Bot API 给 Agent 接入微信 | 教程 | 基于开源 Skill 为 AI Agent 接入微信的实战指南 | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTE9CTnpKQTRBM3NUR1I5OTkzQ0VMeENqcjBnU0d2MmYwWXBwMjBNOTY0dXhPajZ0TVdhV2QxSGtNSHprekEtUERwWXlBN3k5U0lkM21uT2FTUEJHeHVf?oc=5) |
| Web MCP: give some tools to your agent | 教程 | 为 AI Agent 提供 Web MCP 工具的实践指南 | [DEV Community](https://news.google.com/rss/articles/CBMiggFBVV95cUxPYlNoSS1JQjhkZDBmTmN0RTduT1AxWFdpY0lXZVdiX2ttVFJfVTc1Z2ZMenAxYnMtcVdlTVhKeW9fLXFROVNRNzRaOTNtUW1ueHNnUGRDTUxfYXkzbjl6QTFITkNXV0ZtVHlKcEFJcnlpLWdhQm8tNjJhS1ZuUHRmeXlR?oc=5) |
| 扣子 3.0 上线，支持 Claude Code、Codex CLI 本地 Agent 接入 | 新闻 | 扣子平台 3.0 版本新增对本地 AI 编程 Agent 的接入支持 | [51CTO](https://news.google.com/rss/articles/CBMiU0FVX3lxTFB4NkRBYm1wR3FWcFc5c3prMkQ4WDBLUUtHeDVWWDN2bFJVekxERGNiZi1mZmZlaTU0X2N6czVSVlJqcTExS245ekk0VXZZV2dSeFQ0?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ai-coding-guide | 教程合集 | 「可能是全网最全的」AI 编程 CLI 中文教程，涵盖 Claude Code + Codex 共 92 篇精修文章 | [GitHub](https://news.google.com/rss/articles/CBMiWEFVX3lxTFBtREFBSkdYcjRyXy1nR0c2RmcyRktLalE3VzVzYmgyX0toQ2EwcmtIazZJUlRSaVhpZ1FydndwYl96dWhacFcwS3NtS3pvWFpXWkxJeDcxRFE?oc=5) |
| codex-orange-book | 教程 | Codex 橙皮书：从安装到实战案例的全链路使用指南（非官方开源，含可下载 PDF） | [GitHub](https://news.google.com/rss/articles/CBMiWkFVX3lxTFB2aGhtc0JDY1F4cEVWX0dna0xRa0FPYW5UeU1mUko2Y1I0ZDdBbjFpSmRMUzNSUEc5TUs1NVBvdmhZb2RHd3diT2JXS2FieWF5RzhLMm5LMFg3dw?oc=5) |
| deepagents-in-action | 教程 | 《Deep Agents 实战》—— LangChain 官方大使出品，基于 LangChain/LangGraph 生态，从零构建生产级 AI Agent | [GitHub](https://news.google.com/rss/articles/CBMiZEFVX3lxTE52Y1FjUHg1c2dQWHd2MmZGZzlvMW50SXdvbWV5Z0JERWlXMU1NOGZxc2FsT2FYaGJ0SXJ2OUloZEIyM0pqcnhnMHdmQjF2YXVLYV9DLTYtN3Ytc3lrajROaUswM0o?oc=5) |

## 资料更新（2026-07-05）

### 项目

| 名称 | 类型 | 用途 / 摘要 | 链接 |
|------|------|-------------|------|
| zhikunqingtao/zhikuncode | 开源项目 | Claude Code / Cursor 的开源替代方案，支持 CLI 与 Web UI 双入口、Multi-Agent 协作，可直接连接千问、DeepSeek 等国产大模型，SWE-bench Lite 得分 56%。 | https://github.com/zhikunqingtao/zhikuncode |
| Clouderavine/Bolt-New-Web-Development-Agent-Professional-Complete-Edition | 开源项目 | Bolt.new 的 AI 辅助 Web 开发环境，可通过自然语言提示生成、预览和迭代全栈应用。 | https://github.com/Clouderavine/Bolt-New-Web-Development-Agent-Professional-Complete-Edition |
| as9978/designfit | 开源项目 | 用于验证 AI 构建的前端是否与 Figma 设计一致的工具，基于确定性 Token 与几何结构比对，提供 MCP 服务器与 Claude Code 技能。 | https://github.com/as9978/designfit |

### 论文 / Benchmark

| 名称 | 类型 | 用途 / 摘要 | 链接 |
|------|------|-------------|------|
| SoK: AI Secure Code Generation: Progress, Pitfalls, and Paths Forward | 论文 | 系统化梳理 AI 安全代码生成领域的进展、缺陷与未来方向，涵盖提示、微调、强化学习及 Agent 工作流等技术。 | https://arxiv.org/abs/2606.25195v1 |
| NatureBench: Can Coding Agents Match the Published SOTA of Nature-Family Papers? | Benchmark | 基于 Nature 系列期刊论文构建的跨学科基准，包含 90 个任务，用于评估 AI 编码 Agent 在真实科学问题上的发现能力。 | https://arxiv.org/abs/2606.24530v1 |
| Distributed Attacks in Persistent-State AI Control | 论文 | 研究 AI 编码 Agent 在持续状态下的分布式攻击面，提出 Iterative VibeCoding 设定以分析跨 PR 的隐蔽攻击行为。 | https://arxiv.org/abs/2607.02514v1 |
| JAMER: Project-Level Code Framework Dataset and Benchmark on Professional Game Engines | Benchmark | 首个基于专业游戏引擎的项目级游戏代码框架数据集与基准 JamSet/JamBench，源自 Game Jam 社区活动。 | https://arxiv.org/abs/2606.19830v2 |
| Animation2Code: Evaluating Temporal Visual Reasoning in Video-to-Code Generation | Benchmark | 用于评估视频到代码生成中时序视觉推理能力的基准，包含 1,069 个 Web 动画视频。 | https://arxiv.org/abs/2606.28593v1 |
| The Verification Horizon: No Silver Bullet for Coding Agent Rewards | 论文 | 探讨编码 Agent 奖励验证的局限性，指出验证器只是人类意图的代理，无法完全消除奖励黑客问题。 | https://arxiv.org/abs/2606.26300v2 |
| ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration | Benchmark | 用于评估 AI Agent 在企业级 Java 框架迁移中表现的基准。 | https://huggingface.co/blog/ibm-research/scarfbench |

### 教程 / 媒体实测

| 名称 | 类型 | 用途 / 摘要 | 链接 |
|------|------|-------------|------|
| SWE-Benchmark 综合指南：评估 AI 智能体在真实世界软件工程任务中的表现 | 教程 | 介绍 SWE-bench 生态系统，包括 SWE-agent、SWE-rex 和 SWE-bench CLI 等工具。 | https://zhuanlan.zhihu.com/p/1914663162680181121 |
| ReActAgent 使用指南：构建会思考、能行动的 AI Agent | 教程 | 基于 Solon AI 4.0 的 ReActAgent 构建生产级 AI Agent 的指南。 | https://www.oschina.net/news/471482 |
| A2UI + MCP Apps: Combining the best of declarative and custom agentic UIs | 教程 | 介绍如何结合声明式 UI 与自定义 Agent UI 构建应用。 | https://news.google.com/rss/articles/CBMiYkFVX3lxTE5MYThqNlIycmg5NmN4bE5GX0c3RUZidkNVMW5xeUM5cG50M3pvdjh6M1RUVUNmY0RCUkVBYV92SGc0QlNva05pOGNZb3RmMXdaenRNNGQ3ZzY0Qi04QTVpYWxB?oc=5 |
| Evaluate AI agents systematically with Agent-EvalKit | 教程 | AWS 提供的使用 Agent-EvalKit 系统化评估 AI Agent 的方法。 | https://news.google.com/rss/articles/CBMioAFBVV95cUxQeldfMDFMWnNrN3oxZFJsMjVWSEtWaGtWdzRDR2pZVGxaWDlsb0otVEtTQ0dzR2R6blZjUENETm9WZGQ1R0xpUU03MGlyS0swTjlIWU5PRV9RcXd4UDlGSnZBVUw4NFR4N2hqNjFOdzVyQVhRaXdZdWVpMXhVU2hsUlAwWU1RZWpyQzgwZ2JjaHc5TGE4RzE2c1Z2RVFWWVRz?oc=5 |
| 国产版Codex？阿里QoderWork有点东西 | 媒体实测 | 介绍阿里 QoderWork 并附使用教程。 | https://news.google.com/rss/articles/CBMiVEFVX3lxTE5OOUJQR0FrUkpIM01SSVBVNHBjOWwyUGxuUGpka09VWnZmN1FJM2h1Ykg5NmktRDl6YXE0X0lUU0tYNkVmX1VWUTdSSGxTSTBPT185UQ?oc=5 |
| How agents are transforming work | 媒体实测 | OpenAI 研究论文解读，展示 AI Agent 如何改变工作方式，支持更长、更复杂的任务。 | https://openai.com/index/how-agents-are-transforming-work |
| Harness Engineering 实践案例：给编码 Agent 写行为规范教程 | 教程 | 介绍如何为编码 Agent 编写行为规范的实践案例。 | https://news.google.com/rss/articles/CBMiXEFVX3lxTE9XM05rak5jT01RenhIaGdvNkl5cTYtNVhfSnB0UmtnVVBVU2lVcE9CQm9ETzIyenVOSEdZOUxRUWtmYVRvR21KejRwUms1VVdzQ3FJd3VlVmhNa2t4?oc=5 |
| Create your own web-based AI assistant with lite experience of Copilot Studio | 教程 | 微软提供的在 Microsoft 365 Copilot 中构建 Web 端 AI 助手的教程。 | https://news.google.com/rss/articles/CBMibEFVX3lxTE9fTnZDcVExdHd6SGExY203dU55VVVHSDc5VllJN0xNS3hqeHp6UmZXWVVLanZpU2Y5TkhNZTQtc3poWlFPTGNSX3NMSmZJa1dEYm1KSWpMX3JQc3ZmSkZRR2NGcDVXVUJNOHp4Zw?oc=5 |
| Build reliable multi-agent applications with ADK Go 2.0 | 教程 | 介绍 ADK Go 2.0 的图工作流引擎、人机协同与动态编排能力。 | https://news.google.com/rss/articles/CBMiZkFVX3lxTE5EeFJFaWhEM3V4UjlyZFo3S0dtRTJSOHA4MUZMX1FmbmppWXdyVjZtQWg1QjBqRUdlRXlUUTAzdFRMcTZWRWxESUpxQUtMeVdhallBSEthWDFZalozdTN6dDhyZHpTUQ?oc=5 |
| Claude Code × DeepSeek × 积木报表：AI 报表到底有多智能？ | 媒体实测 | 结合 Claude Code、DeepSeek 与积木报表的 AI 报表落地案例。 | https://news.google.com/rss/articles/CBMiS0FVX3lxTE9Ud2dFYkljSlJhbmlhQ2poM1hpY1lzdlJGajlqQkdTM2VQTnRPWUJxRGtsZlNGcHBCVGk4RWJwV0JtdjF0ak1PNWZZNA?oc=5 |
| Cursor 教程 | 教程 | 菜鸟教程提供的 Cursor 编辑器使用教程。 | https://www.runoob.com/cursor/cursor-tutorial.html |
| AutoJack: How a single page can RCE the host running your AI agent | 媒体实测 | 微软披露的通过单个页面远程代码执行攻击 AI Agent 宿主的案例。 | https://news.google.com/rss/articles/CBMipwFBVV95cUxQWkJCU0tFankzSmVreVVycHBQc3UtcUJIWmxnZzVzaVhCeTdCSXdXbFBhN2w3aXJTNzhQZ21SQW9DT1IySkNKSWZxR3lrOFd6dGFIdENSdElGUGl3Q2NEZHdscXpNVDg3eDYwY3Y3Q1pNQmhIRWltRmhUb2x4bVJsSFp5bjRGdmxGOVNuTkk4NWc1S0F1Q1FaV3BMYWI3WGY2MXNQdVJXYw?oc=5 |
| Top AI Coding Agents and Development Platforms in 2026 | 媒体实测 | 对比 Atoms、Devin、Windsurf、Cursor、Warp 等主流 AI 编码 Agent 与开发平台。 | https://news.google.com/rss/articles/CBMijAFBVV95cUxOUFRXU1lETzA5Mm5DWU1RY2RLS3Y0N1RjZnJ6SjJWYnVPQ2tVekhPa0hma3VHZy15VnBjYUNWSVN5OWVNT0NxRGZlRnM4VFE2NjBBZkFaY05SdUxvaVlDRWFoMjlFXzlfVmtPUzhUN3A3Q29yWTZuU2MwMkh0VlhUTlVFNnFweHJYRmxGdA?oc=5 |
| Vercel's Andrew Qu on why agents are a new kind of software | 媒体实测 | Vercel 首席软件官解释其 Agent 框架 eve 的创建背景，以及技能、沙箱和 Agent 可读网站的重要性。 | https://www.latent.space/p/vercel-agents-new-software |
| The website of the future may assemble itself for every visitor | 媒体实测 | Adobe 正在实验“Agent 化网站”，可根据用户意图动态生成页面。 | https://www.latent.space/p/the-website-of-the-future |
| Vibe Coding 入门教程 | 教程 | 菜鸟教程提供的 Vibe Coding 入门指南。 | https://www.runoob.com/ai-agent/vibe-coding-start.html |
| Direct agents with visual prompts in Design Mode | 教程 | Cursor 设计模式中使用视觉提示引导 Agent 的方法。 | https://news.google.com/rss/articles/CBMiS0FVX3lxTE1hSTYzV2psYzFmbW9tZTFKelFVQm9LbmpjZjRUT1pfZlBRdUgzUVJFcldyS2ZuUEpxQUJRanUtTkhyb0hZSnNRODRaNA?oc=5 |
| How Cursor deploys AI inside the enterprise | 媒体实测 | Cursor 的 Forward Deployed Engineers 团队如何帮助企业落地 AI Agent。 | https://www.latent.space/p/cursor-forward-deployed-engineers |
| Evaluating performance and efficiency of the GitHub Copilot agentic harness across models and tasks | 媒体实测 | GitHub 博客对 Copilot Agent 框架在不同模型与任务上的性能与效率评估。 | https://news.google.com/rss/articles/CBMi3gFBVV95cUxPTFF2R252NjNzX0stNDFHSTA5X2NaVlBmdHl2bjBPMFhjWmNZb0dJZWxXT0V0ZFZwVWVWZWszNkZRN2NaRk9qb2tOSWY3RW0xbndQV1drOXpFRlpWR2xTT3FrRUFjOGlraHhnM1pmdzdaaUlBbmpfN1Y1Q3V4Z1drUWZzUXBVLXBjNVp3dEs3enA2SWF2QWVhWlQ1b3U4QUpIWkFjbUxCYW1WSk1HdFZrNWdKMFpKUjZjenpCZzRrVHBHSVNtNHVjTGdwSGhrRllLYmRER19BbnVBZXIwREE?oc=5 |

### 产品 / 工具

| 名称 | 类型 | 用途 / 摘要 | 链接 |
|------|------|-------------|------|
| Cursor: AI coding agent | 产品 | 提供桌面版与 CLI 界面的 AI 编码 Agent。 | https://cursor.com/ |

## 资料更新（2026-07-12）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| conduit | 自托管 Web 应用 | 管理和运行 AI CLI 代理（Claude Code、Amp、Cursor）的 Web 界面 | [GitHub](https://github.com/dougrathbone/conduit) |
| vybe-intelligence-vault | 开源知识库 | 面向 AI 代理、RAG 系统、MCP 服务器、提示词、工具、模板和下一代 Web 开发的自动更新知识库 | [GitHub](https://github.com/sairaman436/vybe-intelligence-vault) |
| claude-code-web-embed-skill | 嵌入组件 | 将本地运行的 Claude Code 嵌入到任意现有 Web 应用中，支持会话持久化和可移动终端面板 | [GitHub](https://github.com/santa-monica-johnson/claude-code-web-embed-skill) |
| webdev-skills | 技能集合 | 为 AI 编码代理量身定制的 Web 开发技能集合，增强现代命令行工具和工作流 | [GitHub](https://github.com/ZayZay1nonly/webdev-skills) |
| agentforge-web-agent-framework | 浏览器端代理编排框架 | 基于浏览器的多代理软件开发工作流框架，支持规划、代码生成、审查、测试和部署（v2.4.1） | [GitHub](https://github.com/westcaleb2005/agentforge-web-agent-framework) |
| nuncio | 自托管移动优先 Web 应用 | 将任务委派给 AI 编码代理（Pi、Cursor）的自托管应用，类似 Devin 但提供商中立 | [GitHub](https://github.com/oscarlehuu/nuncio) |
| Multi-Agent-AI-Research-Code-Intelligence-Platform | 多代理研究平台 | 用户输入研究问题或 GitHub 仓库后，系统创建编排代理、研究代理、代码代理、评论代理等，生成总结报告和引用 | [GitHub](https://github.com/Adhithyaa1/Multi-Agent-AI-Research-Code-Intelligence-Platform) |
| autonomous-web3-ai-agent | Web3 多代理系统 | 利用 AI 驱动的多代理系统自动化智能合约创建和 Web3 开发部署 | [GitHub](https://github.com/omarmedaoui-pixel/autonomous-web3-ai-agent) |
| figma-to-product | Codex 技能 | 将 Figma Desktop MCP 导出转换为前端项目的 Codex 技能 | [GitHub](https://github.com/wdcodecn/figma-to-product) |
| podium-app | 无限空间画布 | 为 AI 编码代理的终端窗口提供无限空间画布，可连接代理、传递提示词、捕获输出到笔记（Tauri + React） | [GitHub](https://github.com/abrahao-dev/podium-app) |
| figma-ai-bridge | Figma 插件与桥接 | 本地 Figma 插件和 localhost 桥接，用于 AI 就绪的设计交接包，无需 Figma API 或 Dev Mode MCP | [GitHub](https://github.com/Kacep91/figma-ai-bridge) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Agent Data Injection Attacks are Realistic Threats to AI Agents | 论文 | 提出一种新的间接提示注入类别——代理数据注入，揭示 AI 代理在处理外部数据时面临的安全威胁 | [arXiv](https://arxiv.org/abs/2607.05120v1) |
| NatureBench: Can Coding Agents Match the Published SOTA of Nature-Family Papers? | Benchmark | 跨学科基准，包含 90 个来自 Nature 系列论文的任务，评估 AI 编码代理在真实科学问题上的表现 | [arXiv](https://arxiv.org/abs/2606.24530v2) |
| WebRetriever: A Large-Scale Comprehensive Benchmark for Efficient Web Agent Evaluation | Benchmark | 大规模 Web 代理评估基准，解决现有基准规模不足、领域多样性有限以及 LLM 评估方法偏差的问题 | [arXiv](https://arxiv.org/abs/2607.06118v1) |
| When Web Agents Finish but Still Fail: Reproducible Triggers and Trace Diagnostics for Parallel Web Exploration | 论文 | 研究长周期 Web 代理在最终答案评估中隐藏的失败模式，提出 Parallel WebBench 基准和 WebExplorer 诊断工具 | [arXiv](https://arxiv.org/abs/2606.20724v2) |
| Ko-WideSearch: A Korean Breadth-Search Benchmark for Exhaustive Set Enumeration by Web Agents | Benchmark | 韩语广度搜索基准，评估 Web 代理在非英语环境下穷举枚举封闭集合并填充属性值的能力 | [arXiv](https://arxiv.org/abs/2606.27595v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Build generative UI for AI agents on Amazon Bedrock AgentCore with the AG-UI protocol | 教程 | AWS 官方教程，介绍如何在 Bedrock AgentCore 上使用 AG-UI 协议构建生成式 UI | [AWS](https://news.google.com/rss/articles/CBMizAFBVV95cUxOeldlSjhNSmVsVk1rLUZoS21panB3NzVsa1d0aVl0SGVTSmwwX21wWHJ5Ukk5bHdkcExVT1cxNVdMdUJyMnhYSC0xOUtpUjEwSXlWM21JdUN1YS1Hc05ENkhGTFFMLTJZT244Z1ExQXZDcWRrNjZkaloxS3oyN0FaUzlQbk9zOUNmaWJsbGhnRHluaHRoNXN5RWJ4a1VEWHhWaV9meFZzTlhIcmFFRkNsV0tNbnpnQ0pTOWhHcWZmcVZBSXFwNW9lWnRkd28?oc=5) |
| Chrome 推出 WebMCP 标准提案（Origin Trial） | 媒体报道 | Chrome 为智能体提供原生 Web 操作能力的 WebMCP 标准提案进入 Origin Trial 阶段 | [Infoq.cn](https://news.google.com/rss/articles/CBMiXkFVX3lxTE12MnlORzI0eE1xUG8wRS1OVU9sMGpWUWlmb09XeGZ3WWdpcjkzVE5PYlNzNjJrWE1GUnpvcXY4M0xDZk42Z21aV3RSQXdxTzAxelZzTU1NVEpWOHk3QlE?oc=5) |
| Building a Self-Healing Playwright MCP Multi Agent Framework with Integrating Angular Dashboard | 教程 | 使用 Playwright MCP 构建自愈多代理框架并与 Angular 仪表盘集成的实践教程 | [Medium](https://news.google.com/rss/articles/CBMizAFBVV95cUxORnRvRFZQZVgydlBfanN0U2ZhblFKMWxpSU03YThKMmtrcjJsZVdhWEIzWVBBcWhURTRpdHlUYUFSUnhwc2RzTnQxdGZhdEZVc0JHM3NiVTlPRTNvSkxCTzQ2ZERHRFRqalFSeFJyRjlNaHZ4c2dLLVM3R1Q5Tmpld0FrdDlSTkNwOVVFbUhaMVROTXR6Y0gxMkpoVy14eGZMcDJ5QzNSb3ZKYXViTUNUaWZZNElPX2tybzQ4UE9VQ1Vycl9OOEctb2ZLQU8?oc=5) |
| Benchmarking Coding Agents on Databricks’ Multi-Million Line Codebase | 实测报告 | Databricks 在数百万行代码库上对编码代理进行基准测试的实践报告 | [Databricks](https://news.google.com/rss/articles/CBMingFBVV95cUxPYlk4RktXSHFjZDZTUjQ0U05MODVoY1FxMGhjZUdhN3RETWJuTEZNcTA5cS1iRnFiVWZ5aDJNelhkWk1fRjExaTVvVXlEWmh3OUdPcEdSWEp2V3BsU3plajhnYXVJWE9xRmpQNnVtdXF3Y1ZoLTV6RDdVWElQUTlUUEdGTlBoMmJ4bk5qNHpJWGF3ZWpGQlRlQ2RCRVFWZw?oc=5) |
| Devin 评测 2026：AI 工程师真能替代初级开发吗 | 媒体实测 | 对 Cognition 公司全自主 AI 软件工程师 Devin 在 2026 年的真实表现进行实测 | [vibecoding.app](https://vibecoding.app/blog/zh/devin-pingce-2026) |
| The Rise of AI Website Builders: Where Bezier AI Fits Among Cursor, Lovable, Bolt.new, v0, Replit, and GitHub | 行业分析 | 分析 AI 网站构建工具生态，比较 Bezier AI 与 Cursor、Lovable、Bolt.new、v0、Replit 和 GitHub 的定位 | [EIN News](https://news.google.com/rss/articles/CBMi7gFBVV95cUxNczFyVkRxVXY2ekRrSk0yc1d6akp5QU83QVdkNV9heUNTZklVSWJReGN0aG5LNkRwZ1M5SV8tdXhmWlBlZUdBT2dScWJJRmZWY3JaUExvcXR0YjY1MTFNZ0E4SXVmWUlVS1N0ejBmMVdKcjdaeUhpTlRldnFzS01oejNMUzRuZFR0WEJkZm5WVmNLNUZMSWlzUjd5MEw3R0VUb3dGV0hfWlhxVW40dEo2VWhBTnl3b1pFSnM0LXRTVTNETkROcThOVVhkQ0VTSmNCZ3ZpWnpMcHpzTENnc2RoR1ZjSUd5RjVzWHFERXh30gHuAUFVX3lxTE1zMXJWRHFVdjZ6RGtKTTJzV3pqSnlBTzdBV2Q1X2F5Q1NmSVVJYlF4Y3Robks2RHBnUzlJXy11eGZaUGVlR0FPZ1JxYklGZlZjclpQTG9xdHRiNjUxMU1nQThJdWZZSVVLU3R6MGYxV0pyN1p5SGlOVGV2cXNLTWh6M0xTNG5kVHRYQmRmblZWY0s1RkxJaXNSN3kwTDdHRVRvd0ZXSF9aWHFVbjR0SjZVaEFOeXdvWkVKczQtdFNVM0RORE5xOE5VWGRDRVNKY0JndmlaekxwenNMQ2dzZGhHVmNJR3lGNXNYcURFeHc?oc=5) |
| Build agentic full-stack apps with Genkit | 教程 | Google 官方教程，介绍如何使用 Genkit 构建代理式全栈应用 | [blog.google](https://news.google.com/rss/articles/CBMiggFBVV95cUxNU0VWZExGR0s2RjRZV2hueG9za2FDWlFXSUFiV2p0ZUs2NzVTMlNjdnRvR0ZBSS1PZktSTnJCb0hYT1BfYUM4YU8xcFBWWFotaUsweGwxR2twbVBONEVZcnRfaXMyZko4OThzdk9kX0s3eG00MENmRl9LZFhYSXNfUjJn?oc=5) |
| Why Terminal AI Coding Agents Are Beating IDE Extensions | 技术分析 | 分析终端 AI 编码代理为何在效率上超越 IDE 扩展 | [DEV Community](https://news.google.com/rss/articles/CBMilwFBVV95cUxNbm5jOUlLWFFmX0wtOFNfaW1mSHp2WDFLRzdSaklocjVOWlVxQjk3ZldRNjZzVzg5Y05wMmlDb05hRUZKRDh0S0F3WE9zZDZ5a0lwUVpzZlZrNm9aQ19wMmRWWFo3dGRrTkRvY0puNEd3elU2bU9GQ2NxZi1CTm9ZNzkzSFdhZmFwXzhQd3NoS082cGFHU1l3?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ChatGPT Work | 代理产品 | OpenAI 推出的代理产品，可在应用和文件间执行操作，持续跟踪项目数小时，将目标转化为完成的工作 | [OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work) |
| APM - Agent Package Manager | 包管理工具 | 微软开源的代理包管理器，用于管理 AI 代理的依赖和包 | [Microsoft Open Source](https://news.google.com/rss/articles/CBMiR0FVX3lxTE5FR1hGb1dybFNqNUNuOFBqZjlWRkR4UTlOd3RVYTd5SmY2UUxzWmZPM0dwRm9fQnR5QVlnQjRDdVUxc3lzMW00?oc=5) |
| Audit & Compliance - Agent Governance Toolkit | 治理工具 | 微软开源的代理治理工具包，提供审计与合规功能 | [Microsoft Open Source](https://news.google.com/rss/articles/CBMikAFBVV95cUxQU25MYTdSUjhQblQ1TFBac2dIRl9ja2xuVkdWN2R5UUZKcFJVRExOb0RfQzA1anBvaDd0bXFLaG5OZkd0Zjh3b19YemNGV1JreklGMDFSUk9XNHdBQy1XRWprLXE4eFdIaUZ6UENhV1lLMUVRUlpWTmVHT3l1N1IyM1pYQUNlOFg3OUh0OEdhdDI?oc=5) |
| Lyzr AI Agent | 企业代理 | Lyzr 公司使用自己的 AI 代理完成了 1 亿美元融资，证明产品实际可用 | [TechCrunch](https://techcrunch.com/2026/07/09/an-ai-agent-startup-just-let-its-agent-run-its-100-million-fundraise/) |
| Securing the future of AI agents | 安全框架 | Google DeepMind 发布的 AI 代理安全控制路线图，结合传统防护和实时监控 | [DeepMind](https://deepmind.google/blog/securing-the-future-of-ai-agents/) |
| OpenAI Atlas（已关闭） | 浏览器产品 | OpenAI 关闭其 AI 浏览器 Atlas，但将部分代理浏览功能迁移至桌面应用和 Chrome 扩展 | [TechCrunch](https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/) |
