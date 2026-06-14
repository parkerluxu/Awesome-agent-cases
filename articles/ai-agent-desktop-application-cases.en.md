# Desktop Applications: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards a "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in the future. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (7+15)

This section is divided into two categories: `7 Tutorials / Cases` and `15 Projects / Papers`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it's worth in-depth reading.

### 7 Tutorials / Cases

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | Trae Figma MCP Tutorial | Chinese Tutorial | InfoQ Chinese tutorial explaining how to pass Figma design context to an Agent and generate previewable pages. It is a practical case for referencing the design-to-code automation workflow. | https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P |
| 2 | Trae Playwright MCP Tutorial | Chinese Tutorial | A Chinese tutorial on InfoQ focusing on the role of Playwright in Agent output verification. Demonstrates how to use browser operation scripts to validate web pages, a concrete practice of end-to-end testing in an AI workflow. | https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI |
| 3 | Tom Guide Claude Code vs Codex | Media Test | Tom's Guide media test comparing Claude Code and OpenAI Codex by building three real applications. It is an empirical report evaluating performance differences and suitable scenarios for both in development tasks. | https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict |
| 4 | Tom Guide weekend app | Media Tutorial | Tom's Guide weekend coding log showcasing the complete process of building an application from scratch using AI tools and distributing it to mobile phones. The case value lies in the practical details of rapid prototyping iteration and mobile deployment. | https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones |
| 5 | The Verge personal software | Media Experience | The Verge observation article exploring how AI-assisted coding fosters a new paradigm for personal software. Records the usage workflow and output effects of AI tools in actual tasks, serving as a reference combining trends and practice. | https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution |
| 6 | Washington Post Claude app | Media Experience | Washington Post interactive report showcasing the real experience of using Claude Code as a programming partner to build applications. It is a first-person record of extracting task workflows and lessons learned from pitfalls. | https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/ |
| 7 | Vibe coding overview | Encyclopedia/Case Summary | Wikipedia entry systematically outlining the concept, typical cases, and community practices of Vibe coding. As an encyclopedia entry, it allows for a quick grasp of the evolution and core characteristics of this AI programming paradigm. | https://en.wikipedia.org/wiki/Vibe_coding |

### 15 Projects / Papers

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | OSWorld | Benchmark | OSWorld benchmark evaluates AI's ability to perform cross-application tasks at the operating system level, encompassing screen observation and control manipulation. | https://arxiv.org/abs/2404.07972 |
| 2 | Agent S | Open-source Project/Paper | Agent S open-source project and paper implementing a scalable desktop automation agent supporting cross-application task execution and GUI interaction. | https://github.com/simular-ai/Agent-S |
| 3 | OSWorld | Benchmark | OSWorld is a desktop GUI Agent benchmark providing a cross-application task environment for evaluating a model's comprehensive ability in screen observation, control localization, and action execution. | https://os-world.github.io/ |
| 4 | OpenCUA | Project/Paper | OpenCUA is an open-source implementation of a general-purpose computer use agent, focusing on screen understanding and cross-application operations. Its task decomposition and execution workflow are reproducible. | https://github.com/OpenCUA/OpenCUA |
| 5 | UI-TARS | Project | ByteDance's open-source GUI Agent UI-TARS, based on a visual interface interaction approach. It locates and operates controls via screenshots, suitable for researching purely vision-driven desktop automation without relying on control trees. | https://github.com/bytedance/UI-TARS |
| 6 | WindowsAgentArena | Benchmark | WindowsAgentArena is a Windows environment Agent evaluation platform developed by Microsoft, testing automated task execution effectiveness in real desktop applications and providing standardized evaluation scenarios. | https://github.com/microsoft/WindowsAgentArena |
| 7 | AppAgent | Paper | AppAgent proposes an LLM-based mobile GUI Agent framework that achieves in-app operations through visual observation. Its exploration-execution loop is transferable to desktop scenarios. | https://arxiv.org/abs/2312.13771 |
| 8 | ScreenAgent | Project/Paper | ScreenAgent introduces a method for driving Agent desktop tasks via screenshots, demonstrating the end-to-end application of vision-language models in GUI automation. | https://arxiv.org/abs/2402.07945 |
| 9 | SeeAct | Paper | SeeAct proposes a vision-based web operation Agent that generates action instructions directly from screenshots. Its screenshot-to-action mapping approach is applicable to desktop environments. | https://arxiv.org/abs/2401.01614 |
| 10 | CogAgent | Project/Paper | CogAgent combines vision and language models for GUI operations, providing a complete solution for screen understanding and action generation. It serves as a reference architecture for multimodal desktop Agents. | https://arxiv.org/abs/2312.08914 |
| 11 | OmniParser | Project | OmniParser is Microsoft's open-source UI element parsing tool that converts screenshots into structured control information, providing a programmable screen understanding layer for Agents. | https://github.com/microsoft/OmniParser |
| 12 | AnythingLLM Desktop | Open-source Project | A locally running LLM chat application supporting multiple model backends and private document Q&A. It can serve as an out-of-the-box solution for Agent local knowledge management and dialogue interface. | https://github.com/Mintplex-Labs/anything-llm |
| 13 | Jan | Open-source Project | An open-source desktop AI assistant supporting local operation of various large language models, emphasizing privacy and offline use. Its plugin architecture and model management approach offer insights for building Agent desktop clients. | https://github.com/menloresearch/jan |
| 14 | LM Studio docs | Product/Documentation | Official documentation for LM Studio, detailing the process of running and debugging local LLMs on the desktop, including model loading, API configuration, and performance tuning. It is an operational guide for setting up a local Agent inference environment. | https://lmstudio.ai/docs |
| 15 | LM Studio | Desktop Application | A desktop application allowing users to download, run, and test local large language models for inference without an internet connection. It is a practical tool for quickly validating Agent model selection and local deployment effectiveness. | https://lmstudio.ai/ |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AURA OS | Desktop orchestration layer | Desktop orchestration layer for AI agents (Claude Code, Codex, Gemini, Hermes, Ollama) with Obsidian shared memory and built-in Telegram remote terminal. Standalone Electron app for Windows & Linux. | [GitHub](https://github.com/Ursegorus/AURA-OS) |
| PawWork | Desktop AI agent | Free, open-source desktop AI agent for macOS and Windows. Alternative to Codex App and Claude Cowork. BYOK with 75+ providers, ChatGPT OAuth, local models, Office files. No terminal needed. | [GitHub](https://github.com/Astro-Han/pawwork) |
| EverFern | Desktop AI agent | Free, local-first AI agent that uses your computer the way you would — clicks buttons, navigates apps, fills forms, runs workflows. No subscription, no cloud, no data leaving your machine. Open source alternative to Claude Cowork and Manas Desktop. | [GitHub](https://github.com/Everfern-AI/Everfern) |
| Clawdcursor | GUI fallback layer | MCP-powered fallback layer that lets AI agents execute tasks through the GUI when APIs, tools, or direct integrations are unavailable. Cross-OS, accessibility-first, local-only. | [GitHub](https://github.com/AmrDab/clawdcursor) |
| SplunkLens AI | Incident response agent | Electron desktop app deploying autonomous AI agents to detect, investigate, and remediate infrastructure incidents in real time. Connects to Splunk Enterprise, runs 30+ MCP tools across 10 LLM providers. | [GitHub](https://github.com/hm2325876-droid/log_book) |
| OpenAver | Metadata scraper | Free open-source desktop app that scrapes JAV metadata and generates NFO + cover art for Jellyfin, Emby & Kodi. No Docker, no CLI — one-click install on Windows & macOS. REST API for AI agents. | [GitHub](https://github.com/slive777/OpenAver) |
| Easiest-Claw | Desktop GUI for OpenClaw | Provide a desktop GUI for OpenClaw to run and manage AI agent teams without coding or extra setup across Windows and macOS. | [GitHub](https://github.com/Liviastrange489/easiest-claw) |
| mcode | Agent orchestration app | Performant AI agent orchestration desktop app. T3Code alternative built with Electron. | [GitHub](https://github.com/Mzeey-Empire/mcode) |
| All-in-One | Productivity suite | Combine multiple productivity tools, games, PDF utilities, and AI agents in one desktop app with a modern GUI and action history tracking. | [GitHub](https://github.com/nickoder635-ai/All-in-One) |
| MyBoTeam | Agent team runner | Open-source desktop app to run your personal team of AI agents — locally, privately, powerfully. | [GitHub](https://github.com/MyBoTeam/MyBoTeam) |
| Agent Atlas Studio | Visual modeler | Erwin-style visual modeler for agentic AI platforms — orchestrator, tasks, agents, MCP tools, jobs, routers, systems. Validate live, export a registry. Vite + React + Tauri. | [GitHub](https://github.com/Fox-River-AI/agent-atlas-studio) |
| Laravel MCP Inspector | Debugging tool | Real-time visual agent debugging tool for Laravel AI feedback. | [GitHub](https://github.com/Jimmyjamjam11/laravel-mcp-inspector) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| EpiBench | Benchmark | Verifiable benchmark for short-horizon epigenomics analysis. 106 evaluations across CUT&Tag/CUT&RUN, ATAC-seq, ChIP-seq, and DNA methylation workflows. No system passed a majority of attempts; GPT-5.5 / Pi led at 45.0%. | [arXiv](https://arxiv.org/abs/2606.13602v1) |
| DeskCraft | Benchmark | Benchmark for desktop agents on professional workflows and human-in-the-loop collaboration. Focuses on long-horizon tasks in specialized creative and engineering software. | [arXiv](https://arxiv.org/abs/2606.03103v1) |
| Workflow-GYM | Benchmark | Long-horizon evaluation of computer-use agentic tasks in real-world professional fields. Evaluates GUI operation for high-value professional workflows across diverse domains. | [arXiv](https://arxiv.org/abs/2606.11042v3) |
| Multi-Agent Computer Use | Position paper | Argues for moving from single serial computer-use agents to multi-agent computer use (MACU) systems emphasizing planning and parallel execution for complex long-horizon tasks. | [arXiv](https://arxiv.org/abs/2606.01533v1) |
| GUI-RobustEval | Benchmark | Benchmark and trajectory synthesis for robust GUI agents. Contains 1,216 executable test cases measuring error recovery capabilities across a broad spectrum of error modes. | [arXiv](https://arxiv.org/abs/2605.29447v1) |
| UXBench | Benchmark | Multimodal benchmark for evaluating user experience based on UI screenshots, covering usability, perceived consistency, and functional clarity. | [arXiv](https://arxiv.org/abs/2606.13192v1) |
| WeaveBench | Benchmark | Long-horizon, real-world benchmark for computer-use agents with hybrid interfaces. 114 tasks across 8 real-world work domains, grounded in real user requests. | [arXiv](https://arxiv.org/abs/2606.09426v2) |
| DragOn | Benchmark | Benchmark and dataset for drag-based GUI interactions (drag-and-drop, swipe, highlight). Covers drag grounding where current models fall short. | [arXiv](https://arxiv.org/abs/2606.06322v1) |
| MacArena | Benchmark | Benchmark for computer-use agents on an online macOS environment. Addresses the underserved macOS ecosystem with standardized online evaluation. | [arXiv](https://arxiv.org/abs/2606.06560v1) |
| MedCUA-Bench | Benchmark | Screenshot-only benchmark for clinical computer-use agents. Focuses on medical software with domain knowledge requirements and safety validation needs. | [arXiv](https://arxiv.org/abs/2606.03203v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Google Search redesign | Product | Google announced a sweeping redesign of the search box, transforming it from a simple keyword input into a dynamic, AI-driven conversational interface. | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI acquires Ona | Acquisition | OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments, enabling long-running AI agents across enterprise workflows. | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |

## Resource Update (2026-06-14)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| thewolffish/wolffish-extension | GitHub | Local-first, markdown-powered personal AI desktop app (Electron). Maps brain architecture onto a deterministic agentic pipeline with 15 runtime modules. | [GitHub](https://github.com/thewolffish/wolffish-extension) |
| cocode-kuma/CocodeAI | GitHub | Local desktop AI coding assistant for developers (Tauri v2 + React 19 + Bun). Merges terminal AI Coding Agent with a modern GUI. | [GitHub](https://github.com/cocode-kuma/CocodeAI) |
| agent-sh/agent-workspace-linux | GitHub | Isolated Linux desktop workspaces for AI agents — a hidden, agent-owned desktop and browser over MCP. | [GitHub](https://github.com/agent-sh/agent-workspace-linux) |
| electron-stagewright/electron-stagewright | GitHub | MCP server for AI agents to drive Electron apps the way Playwright drives browsers. | [GitHub](https://github.com/electron-stagewright/electron-stagewright) |
| wardian-app/Wardian | GitHub | Local desktop command center for supervising and shaping AI agent teams. | [GitHub](https://github.com/wardian-app/Wardian) |
| oywq00008-cell/BroadlinkAC-For-Agent | GitHub | Multi-brand AC IR controller for AI agents via Broadlink RM devices. Headless Agent mode and desktop GUI share the same core. | [GitHub](https://github.com/oywq00008-cell/BroadlinkAC-For-Agent) |
| junainfinity/VibeStudio | GitHub | Local-first AI coding agent for Apple Silicon (Tauri + React, mlx-mtp inference). Fully on-device, no cloud. | [GitHub](https://github.com/junainfinity/VibeStudio) |
| ryantsai/KKTerm | GitHub | Windows-first AI-agent super-tool for vibe coders & system admins — terminals, SSH, SFTP, RDP/VNC, dashboards, and built-in AI assistant. | [GitHub](https://github.com/ryantsai/KKTerm) |
| GCWing/BitFun | GitHub | Desktop-grade Agent runtime with built-in Code Agent, Cowork Agent, and Computer Use. Has memory, personality, and ability to evolve. | [GitHub](https://github.com/GCWing/BitFun) |
| mblua/AgentsCommander | GitHub | Coordinate multiple teams of AI coding agents across workgroup instances with Root Agent routing and file-based handoffs. | [GitHub](https://github.com/mblua/AgentsCommander) |
| MMinasyan/lightcode | GitHub | Model-agnostic coding agent supporting any OpenAI-compatible LLM provider. Desktop GUI, HTTP daemon, ACP stdio adapter. | [GitHub](https://github.com/MMinasyan/lightcode) |
| zosmaai/zosma-cowork | GitHub | Desktop GUI for the pi coding agent — open-source Claude Cowork alternative. | [GitHub](https://github.com/zosmaai/zosma-cowork) |
| Alien0013/aegis | GitHub | Self-improving, multi-provider, multi-channel terminal agent harness in Python. Includes MCP, skills marketplace, browser/computer-use. | [GitHub](https://github.com/Alien0013/aegis) |
| IDanK0/CoworkLocal | GitHub | Self-hosted, local-first AI computer-use agent for Windows (Tauri + Rust + React). Model-agnostic, privacy-first. | [GitHub](https://github.com/IDanK0/CoworkLocal) |
| imthegoodboy/Computer-use | GitHub | Computer use tool by which agent can control your computer visually, inspired by OpenAI Computer Use. | [GitHub](https://github.com/imthegoodboy/Computer-use) |
| Empty-democritus307/AutoProber | GitHub | Automate hardware probing using computer vision and agents to map and test target pins on circuit boards. | [GitHub](https://github.com/Empty-democritus307/AutoProber) |
| umarkhanif28/ApexUIBridge | GitHub | Bridge UI automation and AI with a customizable toolkit integrating LlamaSharp and FlaUI. | [GitHub](https://github.com/umarkhanif28/ApexUIBridge) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI Codex | Desktop App | Lightweight coding agent that runs locally on your computer. Available as CLI, VS Code extension, and desktop app. Supports Windows automation and locked-macOS operation. | [GitHub](https://github.com/openai/codex) / [Microsoft Store](https://apps.microsoft.com/detail/9plm9xgg6vks?hl=zh-CN&gl=CN) / [OpenAI](https://openai.com/zh-Hans-CN/codex/) |
| MoonAgents | Desktop App | Desktop application from MoonPay connecting Claude and Codex. | [games.gg](https://news.google.com/rss/articles/CBMi7AFBVV95cUxOdDBWUFBSREhNUUE0OUcyWVZNR0FkeUlfbUZONE1EOUxUMXEwUmhCbmpzME5icnBjbmF1bEYxQS00UFBSbkdyT0xzbkktTFBLYnYxWkY5d2k2NXhUaWRpSnJwa1FGSjBmbVdwbEp0UUIzWW1WSmVWeVc1RGhWdGN0eTJwQldPZHFFWHNyeHB3LTRxdE9CRk1VbGg2YU5OV20yMFBUOWEzSlFGVVVqMnk3TEpWdm9lT0FWMWhPVkx4NklGSWVxRFh3M2FEVEMyd0xxZ2k4Q3I4REVMVXlIaWN6WFR2NW84cXVjTXF3Vw?oc=5) |
| DeepSeek Desktop App | Desktop App | 24/7 self-evolving AI agent desktop application. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1EN3F6WUt4NGJxQWxnREl4S1pOcE9ab3JTNHpKYnExbjB6emx5S3diV1pvNE5QQXBIS3ZUZGozVjlDX24zU2h0RTVCd0ZUX1JwMFhwYnB3?oc=5) |
| GitHub Copilot App | Desktop App | GitHub's new Copilot app taking aim at Claude Code and Codex. | [The New Stack](https://news.google.com/rss/articles/CBMiX0FVX3lxTE9uTWd1cjZxMVVLUm5DT0xnM3FRNFpiUjZkTHcwU1dvQmpudGJDNlVnX1dQNXA5RGx1Q3FrRUFpNWlJOGdhdklMbV80VWZtSzVlRE9XbXlZU2dPRFNkSmpr?oc=5) |
| Microsoft Scout | Desktop Agent | Microsoft's always-on personal agent announced at Build 2026. | [Microsoft](https://news.google.com/rss/articles/CBMivAFBVV95cUxPV05vaTgybEpsRVBhZGFEai12SHFkYWZiZjRSR1VaMXFJckxYRnU5MHc2Q3QzTVFqVklRb21qck80M0I0VEZQQjBKS2tuQ2l6bURRQ2NhYkwwTnQya3d5OGsyMTU1V3gtd3ZtZ2F4b3JFTXdoY0N1YXJ4eUthalkyTUg3N2RaR3NzYVZyNEZlRkRMUUROMmV3c1ctN3htRklTdmdTeTVLOFQxNmhwOVNJU2k5WFNfbFNJWWhVSQ?oc=5) |
| Snowflake CoCo | Desktop Tool | AI coding agent for the modern data stack. | [Snowflake](https://news.google.com/rss/articles/CBMiiwFBVV95cUxNZ1VDaFg0QkNtLTF5bFY2NlZoNlhQX1R5TnMxVFpNa2xYWjZ6OGpQSHRFNk9jelY4OXd6YmtrZ21iY2VrODJHaG1YeDllXzFMaTh2Z095eVdMNlFtcUVPamJzZ2M0NzhCOWNHSC1hVVA2VGZwSjZUMlhHaGFydzlNR2NmTGNvd3haZHc4?oc=5) |
| Google Antigravity 2.0 | Platform | Standalone agent-first platform with CLI, SDK, managed execution, and enterprise support. | [MarkTechPost](https://news.google.com/rss/articles/CBMiggJBVV95cUxNRXlEcnZScFZxUlZtSGtSUnB1LW5QZTlQNm42WXU2azJ2T1RnYnV6V1Eyei1VUlFVaUNFaU5MdElZU2ZGYlJkZ20zNEJORFZBZHo4bVR2Y1BteDhCYXA2NWdIMmxwX0NLblZDRmFILURzUnFXa3BZQ2NFNW9MUkZCY0RqWmVmcGx1aGJBQ1lDX056bHNyNXplQUtRUGc5NGIya21fWXdOdE1QVTBtSldGcXI2Ymg4ck93bml6elRDMFA0MVBkZ2Vqbk1vR0tmQWdlRWlDUWFtS3lDYlF4VWNRdGRKejg0c3RnRVR1MEZOS2hYcndBVkFvbXRNb2tVTFY2Vnc?oc=5) |
| Microsoft MXC | OS-level Sandbox | OS-level sandbox for AI agents launched by Microsoft with OpenAI and Nvidia on board. | [Venturebeat](https://news.google.com/rss/articles/CBMiyAFBVV95cUxQa0YzMkktV1RlNmZuNjdqTHdyZ2xxdnc1a0hQWEZUeEZ5eldkbThhUXdzUjlITGwtRUJvcldnd2twaWg0NnIzZUZpdW9zNUVsNjJEaU5yd2V6VVhXU0Z4UzE4NjVhM2NnZXgtTWJvV1h3MDh1T01LWGd6c0U2WHl3NC0wSEFPWEhQRXlFM1AxaUt2czBkMUJXdWpzYm9YcEJlREk3M3BXX1VPNjJiOWFkd1lYWUpiOXdxcUJFNDRpcTB5QzdtUE12dg?oc=5) |
| Tencent Marvis | OS-level Agent | Operating system-level AI assistant with 6 agents collaborating for cross-device file management and remote control. | [smarthey.com](https://news.google.com/rss/articles/CBMiXkFVX3lxTE9wSl9uREJuYWhrdmR4bmdFYi0tdnVqT3I0Tkhtd0o4b295eTFTWTM5aUc1d2tSdlduTkxOQWNRYjJBcXZYbnJ4ejh3b0RSZ2sxTFk4d3MxZXlBM2ZoY0E?oc=5) |
| cmux | macOS Terminal | Native macOS terminal built for running AI coding agents in parallel. | [DEV Community](https://news.google.com/rss/articles/CBMirgFBVV95cUxPRDROWFlYVDB1ZlFuaTE0OEhVb0J2SjJZNWQycHN5em5GVjB0T1hOUS1IeW5mVy1GcmdFeDBNWVdBMGl0d1RWTUpUMURzWjU2aEdidHdzNTBiNDNYQ0xsTDR0b1VWNkphQTNGazQ4S1FqZzlTQUtabmxsSnpXVU03YXJvaC1sLWVMZUFuSFpiNlRreW53MzdaVy1BUU9Uc01PeXh0ZEhEdm9zQjNNS1E?oc=5) |
| Paseo | Cross-platform Tool | Control Claude Code / Codex from phone, tablet, and computer simultaneously. | [CSDN](https://news.google.com/rss/articles/CBMiZEFVX3lxTE44cWtDNjFlVER4OW1EYmtnNVZYckdGNkc4d2g1NU81MmFFRkhWQm84c3ZFdFUyOXBja2U3UkVqX3VKVFVNN1lrV2tsQ0VyVzJScDdxQmtzV0VtRU5ZSWItb05IT08?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Fara1.5 | Model Family | A family of frontier computer use agent models from Microsoft. | [Microsoft](https://news.google.com/rss/articles/CBMigwFBVV95cUxQS0FIV2ZOZjZRdDdGMW5OUkZDaXlZU18yR2NXeFhCbHZaX2RpTEsxMFd0MWJVVmNsUEZtYlkyRkx1QXhNUVdOMEtzQlBQYTgwSVpWV00xR3VqTVZVa2s0WWw2SmhRY2M2YjduNnBsSVNvMlBLNWNDQlJURTBZdjA0dURhYw?oc=5) |
| Holo3.1 | Model | Fast & local computer use agents. | [Hugging Face](https://huggingface.co/blog/Hcompany/holo31) |
| OpenEnv for Agentic RL | Framework | Open-source community backing for agentic reinforcement learning environments. | [Hugging Face](https://huggingface.co/blog/openenv-agentic-rl) |
| Multi-agent AI Safety Research | Research | Google DeepMind and partners announce $10M funding call for multi-agent safety research. | [DeepMind](https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| DeepSeek GUI: Moving Terminal AI Agent into Desktop Workbench | Tutorial | Guide on bringing DeepSeek terminal AI agent into a desktop workbench GUI. | [掘金](https://news.google.com/rss/articles/CBMiVEFVX3lxTE5CY3NuRXRmdDBzcmxXT2UwZ2RJQU9aN3lFR244cjUwNndTMUcybDQwWklDcXFKTy1Sc1FRa1IwS1BaTnlmeDlQQ1VjSXdiV2hnR0twSQ?oc=5) |
| Build a tiny MCP server in JavaScript | Tutorial | Build a tiny MCP server in JavaScript, Claude and Codex friendly. | [DEV Community](https://news.google.com/rss/articles/CBMikgFBVV95cUxOeHNQTVJ3Z0JCWnFKY2JFRFNBV2Y5alRPczhoMmZUX1QtOFZ2SFJTTXpycllpcUF5Uzg0eXphTlYyZmFLNkxMN29UNG5talV2LWFSVnFpcDhsQWRXcWVmREh3Y3lpdTVra1Z0VXc5NEJJaGNuUFozX0JTWUR0SEs1QXRCRFptNnN5WDRqU2hCOFc0Zw?oc=5) |
| Claude Code vs Codex vs Cursor Comparison | Comparison | The best AI coding tool in 2026 comparison. | [DEV Community](https://news.google.com/rss/articles/CBMilwFBVV95cUxPenZHSXdkTXE3TUlQUWlZMExVZC0wX3BkdVVPd3dJQmpYYzVVY04tZjZlU19kMUtTVTFqcDFMbEZMb0xsLVQ4VmtUbG9rTHpYRVdNbnFDNW1LcGhJZE4yOHJFYm4zVXptN09IaEstYkxBVlhweDg2NnFkQS1DT0NIYVJZNTFzcmFWNk4weUpZY3pzaVRZSXcw?oc=5) |
| How to Combine Claude Code and Codex | Tutorial | Guide for maximum coding power by combining Claude Code and Codex. | [Towards Data Science](https://news.google.com/rss/articles/CBMilgFBVV95cUxQYnZzNmsybm1vWGpCdjdUcFBwdzY4VEhaTkV3di1WNUpYLXNlSnY4WXFyZlVCVC04ejNaSVdrTnlQRmNFajdWWDU2a3pad0duMnFhNlNpck94ZmtSUVNXZTVqZDdON0JRM0ktWG90MEVkeWhUcnlYOFJXSTBYdFhQOHlCbUl0OUNHQXJKLXVyNDN1SVJKVVE?oc=5) |
| Codex Installation Guide for China | Tutorial | Detailed Codex installation and usage guide for users in China. | [知乎](https://zhuanlan.zhihu.com/p/2011928155204645696) / [菜鸟教程](https://www.runoob.com/codex/codex-install.html) |
| OpenAI Academy Courses | Courses | Three Academy courses for building practical AI skills, creating repeatable workflows, and applying agents in everyday work. | [OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work) |
