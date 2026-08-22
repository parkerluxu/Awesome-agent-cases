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

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| cpotech/yolium-desktop | Desktop orchestrator | Orchestrates AI coding agents (Claude Code, OpenCode, Codex, Yoli) in isolated Docker containers with kanban board and parallel git worktree branches. | [GitHub](https://github.com/cpotech/yolium-desktop) |
| xintaofei/codeg | Collaborative workspace | Multi-agent AI coding workspace aggregating sessions from Claude Code, Codex, Gemini CLI, etc. Desktop app, self-hosted server, or Docker. | [GitHub](https://github.com/xintaofei/codeg) |
| dduva2660/uiacli | Windows automation | Control Windows desktop applications with AI agents using JSON commands via Microsoft UI Automation framework. | [GitHub](https://github.com/dduva2660/uiacli) |
| athasdev/athas | Code editor | Lightweight cross-platform code editor built with Tauri (Rust + React) featuring Git support, AI agents, and vim keybindings. | [GitHub](https://github.com/athasdev/athas) |
| kawayiYokami/P-ai | Desktop assistant | Self-growing desktop AI assistant for long-running tasks, memory, agents, tool reviews, MCP, and high-concurrency workspace automation. | [GitHub](https://github.com/kawayiYokami/P-ai) |
| Klc26/qwen3_computer_use | GUI agent driver | Control local mouse, keyboard, and capture screenshots with Qwen3 GUI agent driver on OpenAI-compatible endpoint. | [GitHub](https://github.com/Klc26/qwen3_computer_use) |
| RyensX/OpenCodex | Middleware | Middleware layer for Codex Desktop enabling browser-based access from phone, tablet, or another computer for LAN AI coding. | [GitHub](https://github.com/RyensX/OpenCodex) |
| screenpipe/screenpipe | Screen recording | Records everything you do, say, hear 24/7 locally; connects to OpenClaw, Hermes agent, and 100+ apps. | [GitHub](https://github.com/screenpipe/screenpipe) |
| AppiumTestDistribution/AppClaw | Mobile automation | AI-powered mobile automation agent — describe in plain English, reads screen, reasons, and acts. LLM-agnostic, open-source. | [GitHub](https://github.com/AppiumTestDistribution/AppClaw) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| MacAgentBench | Benchmark | Benchmarking AI agents on real-world macOS desktop; captures framework capabilities and partial progress on long-horizon multi-application tasks. | [arXiv](https://arxiv.org/abs/2606.22557v1) |
| Beyond Global Replanning | Paper | Hierarchical recovery for cross-device agent systems; models device-local strategy space for runtime failures. | [arXiv](https://arxiv.org/abs/2606.20487v1) |
| MemGUI-Agent | Paper | End-to-end long-horizon mobile GUI agent with proactive context management to avoid prompt explosion. | [arXiv](https://arxiv.org/abs/2606.19926v1) |
| OSGuard | Benchmark | Dual-granularity benchmark suite for evaluating safety in computer-use agents under benign instructions. | [arXiv](https://arxiv.org/abs/2606.15034v1) |
| ENVS | Paper | Environment-Native Verified Search for long-horizon GUI agents; training-time search-and-filter pipeline using live environments. | [arXiv](https://arxiv.org/abs/2606.22948v1) |
| PreAct | Paper | Computer-using agents that get faster on repeated tasks by compiling successful runs into state-machine programs. | [arXiv](https://arxiv.org/abs/2606.17929v1) |
| LabOSBench | Benchmark | Benchmarking computer use agents for scientific instrument control in simulated testbeds. | [arXiv](https://arxiv.org/abs/2606.16802v1) |
| Fara-1.5 | Paper | Scalable learning environments for computer use agents; data pipeline with environments, solvers, and verifiers. | [arXiv](https://arxiv.org/abs/2606.20785v1) |
| Naive Visual Memory | Paper | Failure-mode study of GUI agents; identifies limitations of naive visual memory approaches. | [arXiv](https://arxiv.org/abs/2606.14106v1) |
| ChainWorld | Paper | Composing long-horizon desktop workloads from atomic OSWorld tasks; 347 chains of length two to four. | [arXiv](https://arxiv.org/abs/2606.21654v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI Codex Windows 版完整安装指南 | Tutorial | Complete installation guide for OpenAI Codex on Windows with parallel agents and Computer Use. | [51CTO](https://news.google.com/rss/articles/CBMiTkFVX3lxTE84T0pzQ0ZsV1hfUHdKM3J5ODVzMVNQbXBLbDF6MzFzWS1XV1JEQm53QzhOTVpZWTVSczFoUy0wQ1ZVVVR6VENSeVdrV3VtQQ?oc=5) |
| 为什么我觉得 Codex 更接近通用 AI Agent 的理想形态 | Opinion | Analysis of why Codex is closer to the ideal form of a general AI agent. | [少数派](https://news.google.com/rss/articles/CBMiSEFVX3lxTE14NEFZYlU3U1BCMUllX0w2dEI4SEtaZ2pBSUdGZmNzR09WSjZMdlR1Tkhsa1RPdmVIS1B0TW5VNEN0cko1RDNnUQ?oc=5) |
| Computer Use技术原理全解析 | Technical comparison | Comparison of three technical routes: Codex, Claude, and Shizai Agent for Computer Use. | [blog.csdn.net](https://news.google.com/rss/articles/CBMiakFVX3lxTE9KR1czX1VNNGgwa1lIZTlxZU1QS09GcEpieDBfa3NabDItMHR3UjlPY3l5czBSbGpXUll2MGt6RU9yeDBwMkFwWFozdmY2Y0daUHJzdVVlQXhMVUktMTZlZkdGaEgtWHNhRFE?oc=5) |
| stormzhang/ai-coding-guide | Tutorial collection | Comprehensive Chinese tutorial for AI coding CLI: Claude Code + Codex, 92 refined articles. | [GitHub](https://news.google.com/rss/articles/CBMiWEFVX3lxTFBtREFBSkdYcjRyXy1nR0c2RmcyRktLalE3VzVzYmgyX0toQ2EwcmtIazZJUlRSaVhpZ1FydndwYl96dWhacFcwS3NtS3pvWFpXWkxJeDcxRFE?oc=5) |
| 百度智能云 DuMate 测评 | Review | Review of Baidu Smart Cloud DuMate office agent teaching Claude Code usage. | [雷峰网](https://news.google.com/rss/articles/CBMid0FVX3lxTFBDRlBQOXZ3bmVieGtwNXNkUnBCSW9NYi1yZ1dyTDdxaEdxbmZjMWh4QU9Ga3JQNnVEcEZmRzdMd2ZzQ0ZRMTVUVnA3SFNiVDd5cG9obFVyY0I2dHV5ZERMZVZySGlXQmg1ZVo5VHpoWm1pUHpfQkJr?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Hermes Desktop | Desktop app | Native cross-platform front end for Hermes Agent v0.15.2 with streaming tool output. | [Decrypt](https://news.google.com/rss/articles/CBMicEFVX3lxTE1mekk2aTJuYlpwNW9NeWNOWG5zUnB0YkkwQ051aF9iS2VEd1hTT3ZFUGhXUkJYa045VTVfaWxHSFlfM2FQSWJCYlVkRlp3NF8ycDlMQmNVSlBaLXp6ZUM1cnRhRVB1SGI5TEdUQTNYN2HSAXhBVV95cUxNMGF0STRuZFBJQkdMV2xveFpLMFRscXRVMTdzOEkyalBpblU0Ty11V0psUWhDWjBpXzE2OGowRzNIb1hWZVBMenBSWVJNblB5NzU4NGRXY2hCT0ZhUDJ5anpYaHdUWVVoZEVUNUVQSkVXWnAzV1lZSTc?oc=5), [MarkTechPost](https://news.google.com/rss/articles/CBMi9wFBVV95cUxQRVpzOFlHTkVTT1lrU19RYjhLMDVOTmdhcHJHU2lzbGxlalpPVUVhOWE3ZlAzb1hLMUVlSWg2LVJaZUZENTYwTlBoaTFxTTdZU0FhcUUyeW03Y2FER05hME96RnFJS1UwdW5DVkFaVHhUMzVxV2lKaXFkYWhDWW5Rdk1yWEo0ME9HZ291YU5tZkhMcHhoNEtKNDh4QnlQRkFrc2h1VFZYbWFVakZReTRkWTBVdW8wb1NoRlEzZmYyVzhId0pjUE5zeUJlZFpIZDBBX2JDVkRXcEE3ejIzM2hlaW1TQ2N0OG5UMWVNTG90dmJyREJ1RWdR?oc=5) |
| OpenAI Codex | AI coding partner | Accelerates engineering work from planning to releases; now with Computer Use on Windows (foreground takeover). | [OpenAI](https://openai.com/codex/), [Tech Times](https://news.google.com/rss/articles/CBMixwFBVV95cUxPMU5oMHd0b0NBZ1g5NVNZWFdEaFhMUVNROGxnVGFBdUhLMjhsWVpyTUZIeDd5dnNDYndXMWt4enJFY3kzVFFHMi1GMWN3dnJVTV9aSDBvZFc2UHdQMEdhT3BiNUEtTVFNMS1QbnMyMU4ydzZpclB5Mm9LNVFhUW1PWlcwNTlUU0ttNkVmMElnTFlTWlRMRjdkNll4YmY2X250S3RuMlI4eldzTUJYRTFEcnhySHNrUHRWaUtFbk5fbXdISHBoaG13?oc=5) |
| 扣子 3.0 | Platform | Supports Claude Code and Codex CLI local agent integration. | [Jiemian.com](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9iTWRnMFJ0LXFvdzg2OG52MUpvdU9TTkVVZDRFSGg2cFpfTGt1Z3Q2MF9tWm4tXzNTME9KSmp2QlNVVnZEdEgyVi1ZWm9IZXM2WXBsVzlB?oc=5) |
| Windows as OS for AI Agents | Platform | Microsoft Build 2026 announcement positioning Windows as an OS for AI agents. | [Visual Studio Magazine](https://news.google.com/rss/articles/CBMivAFBVV95cUxNNHBqWWRfWTdjdkVhcUFuSGdROU9TY0htWk4xVDdiX0hxV0k2WmJXREhqREFXTVVJS3BwZUY1WS1SNktCUE5EeDBMVHJIRXNidmV2aXB1eTdGNFRaVUROVXlnVVJ2YnJidUNSY2FGNU01WnphYzFFU2JHYmZmYS1RNGU1akFrR1oxUEkyS29Oa1J4NW91V0tGU3hzbDFkMGp5dmN1b29JaElwTDBhT3RYb3hoYTF1dW1rcm5pbA?oc=5) |

## Resource Update (2026-07-05)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| op7418/CodePilot | Desktop client | Multi-model AI agent desktop client — connect any AI provider, extend with MCP & skills, control from your phone. Built with Electron + Next.js. Stars: 6104. | [GitHub](https://github.com/op7418/CodePilot) |
| geek-fun/dockit | Desktop GUI client | Agentic desktop GUI client for Elasticsearch, OpenSearch, DynamoDB, MongoDB & EasySearch. Natural language queries, visual management, and monitoring. Privacy-first. Stars: 1118. | [GitHub](https://github.com/geek-fun/dockit) |
| jaylfc/taOS | AI agent OS | Self-hosted AI agent OS. Offline AI memory (taOSmd), self-hosted multi-framework group chat, a full web desktop + app store, and auto-clustering across consumer hardware (Orange/Raspberry Pi, Mac mini, gaming PC). Stars: 410. | [GitHub](https://github.com/jaylfc/taOS) |
| gtt116/enikk | GUI agent | Self-improving GUI Agent for desktop automation. Progressive perception, natural language teachable, 100% open source. Powered by Hermes Agent. Stars: 25. | [GitHub](https://github.com/gtt116/enikk) |
| chuancyzhang/deepseek-cowork | Desktop agent framework | Windows desktop agent framework built on DeepSeek-V3.2 Interleaved Chain-of-Thought. Combines reasoning with tool use to plan, execute, and refine tasks across files, apps, and workflows. Stars: 10. | [GitHub](https://github.com/chuancyzhang/deepseek-cowork) |
| bigduu/Zenith | Monorepo | Umbrella monorepo for Bodhi AI — a local-first desktop AI agent. Submodule pointers + release train tie together Bamboo (Rust runtime), Lotus (React UI), Bodhi (Tauri shell), Bodhi Server (Go backend), Pavilion (website/docs) and Nova (macOS Computer-Use MCP). Stars: 3. | [GitHub](https://github.com/bigduu/Zenith) |
| CHAMARA1989/prismos-ai | AI OS | Build a local-first AI operating system that runs personal agents securely on Windows, macOS, and Linux using Ollama's language model. Stars: 3. | [GitHub](https://github.com/CHAMARA1989/prismos-ai) |
| gnanam1990/argus | Computer-use agent | A provider-agnostic computer-use agent, written in Go — observe → think → act, with swappable set-of-marks grounding and a single-binary driver. Stars: 3. | [GitHub](https://github.com/gnanam1990/argus) |
| ilyafainberg/TotalControl-MCP-Server | MCP server | MCP server that gives an AI agent hardware-level control of a Windows desktop: mouse, keyboard, screen capture, and UI Automation. Built for Microsoft Scout and any MCP-compatible host. Stars: 2. | [GitHub](https://github.com/ilyafainberg/TotalControl-MCP-Server) |
| karimbabasf/WARDEN | Agent monitor | The agent that watches your agents — a macOS Tauri daemon that reads your AI-coding agents' transcripts (Claude Code, Codex) and diagnoses where your agentic workflow leaks, in a cinematic war-room overlay. Stars: 1. | [GitHub](https://github.com/karimbabasf/WARDEN) |
| abkmystery/local-agent-studio | Agent builder | Open-source local AI agent builder and visual multi-agent workflow app for Windows. Use llama.cpp, Ollama, LM Studio and Gemini — no Docker required. Stars: 0. | [GitHub](https://github.com/abkmystery/local-agent-studio) |
| hxddh/pagewise | Document agent | Local desktop document agent — PDF, OCR, and page-wise analysis (Tauri + AI SDK). Stars: 0. | [GitHub](https://github.com/hxddh/pagewise) |
| sjweiler/focal-agent | Agent framework | An extensible C# AI agent framework for Windows with plugin support, local and cloud LLMs, voice interaction, and secure desktop automation. Stars: 0. | [GitHub](https://github.com/sjweiler/focal-agent) |
| xiayukun/agent-sight-windows | Computer-use toolkit | AgentSight for Windows: pixel-grounded AI computer-use toolkit for observing, controlling, and auditing real Windows GUI actions. Stars: 0. | [GitHub](https://github.com/xiayukun/agent-sight-windows) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents | Paper | Proposes a semantic OS layer for AI agents, arguing that current OS interfaces optimized for humans force agents into high-cost screenshot/OCR interpretation. Introduces compact semantic state, grounded actions, and reliable feedback. | [arXiv](https://arxiv.org/abs/2606.30697v1) |
| TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents | Benchmark | Evaluates general-purpose terminal computer-use agents beyond coding. Addresses the gap where GUI benchmarks ignore terminals and terminal benchmarks focus narrowly on programming. | [arXiv](https://arxiv.org/abs/2606.28480v1) |
| GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents | Benchmark | Matched execution-layer benchmark of 440 desktop tasks across 18 applications and 12 workflow categories, comparing screen-only GUI agents and skill-mediated CLI agents with identical goals, states, and verifiers. | [arXiv](https://arxiv.org/abs/2606.24551v1) |
| OSWorld2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks | Benchmark | 108 long-horizon computer-use workflows across everyday and professional tasks, each taking humans a median of ~1.6 hours. Designed to capture complex real-world phenomena missing from existing benchmarks. | [arXiv](https://arxiv.org/abs/2606.29537v1) |
| What Memory Do GUI Agents Really Need? From Passive Records to Active Task-Driving States | Paper | Argues that mobile GUI agents need memory that actively tracks task roles rather than passively storing observations. Proposes active task-driving state representations. | [arXiv](https://arxiv.org/abs/2606.31612v2) |
| PPT-Eval: A Benchmark for Computer-Use Agents on PowerPoint Tasks | Benchmark | 120 PowerPoint tasks across 12 files covering content creation and presentation editing, organized by difficulty. Targets multimodal slide creation as a real-world agent testbed. | [arXiv](https://arxiv.org/abs/2606.31154v1) |
| Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents | Paper | Addresses the challenge of collecting high-quality trajectories for computer-use agents by leveraging failed trajectories for inference-time self-improvement, rather than discarding them. | [arXiv](https://arxiv.org/abs/2606.31270v1) |
| Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation | Paper | Proposes an RL fine-tuning framework using autonomous vision-language evaluation as a scalable reward signal for computer-use agents in open-ended desktop environments. | [arXiv](https://arxiv.org/abs/2606.24515v1) |
| Xiaomi-GUI-0 Technical Report | Paper | Technical report on a GUI agent built on vision-language models, evaluated in real applications rather than offline trajectories or simulated environments. | [arXiv](https://arxiv.org/abs/2606.31410v2) |
| Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning | Paper | Introduces PEEU method for improving small open-source MLLM planning and cross-website generalization through autonomous environment exploration and hindsight experience. | [arXiv](https://arxiv.org/abs/2606.27330v1) |
| A Task-State Representation for Long-Horizon Mobile GUI Agents | Paper | Introduces Task-State Representation (TSR), a training-free framework that decouples persistent task state from transient screen observations to reduce context burden in long-horizon mobile GUI agents. | [arXiv](https://arxiv.org/abs/2607.00502v1) |
| GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots | Paper | Proposes a weakly-supervised approach to build GUI agents using massive unannotated screenshots, addressing the high cost and difficulty of collecting GUI agent training data at scale. | [arXiv](https://arxiv.org/abs/2606.29705v1) |
| Agent-Computer Observation Interfaces Enable Dynamic Computer Use | Paper | Introduces the Agent-Computer Observation Interface (AOI), a modular observation layer that decouples observation from action, enabling agents to perceive video, animations, transient UI events, and audio beyond static screenshots. | [arXiv](https://arxiv.org/abs/2606.29472v1) |
| DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching | Dataset/Paper | Multimodal dataset of 72 human expert-novice computer use coaching sessions (22,752 dialogue turns, 28.1 hours of screen recordings) across five applications. Evaluates whether models can teach humans to use computers. | [arXiv](https://arxiv.org/abs/2606.31980v1) |
| WinDOM: Self-Family Distillation for Small-Model GUI Grounding | Paper | 54,425-record grounding corpus harvested by driving an open-source agent. Addresses how to obtain bounding-box training data without expensive human annotation and how to combine SFT with RL for small (~2B) GUI-grounding agents. | [arXiv](https://arxiv.org/abs/2606.25964v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| 为什么我觉得 Codex 更接近通用 AI Agent 的理想形态 | Article | Opinion piece on why Codex is closer to the ideal form of a general AI agent. | [少数派](https://news.google.com/rss/articles/CBMiQ0FVX3lxTFBiSkQ0c3RYM2xpVWQ5Z0hmY3lrekh1em9tZjZCN1dxdjNfWXNkYlVNX3h5SDZXMm5NZ0x1TXVqRW1CZXM?oc=5) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenCoworkAI/open-cowork | GitHub | Open-source AI agent desktop app for Windows & macOS. One-click install Claude Code, MCP tools, and Skills — with sandbox isolation, multi-model support, and Feishu/Slack integration. Stars: 1813. | [GitHub](https://github.com/OpenCoworkAI/open-cowork) |
| nexu-io/open-design | GitHub | Open-source Claude Design alternative. Local-first desktop app; coding agent becomes design engine for prototypes, landing pages, dashboards, slides, images & video with HTML/PDF/PPTX/MP4 export. Supports Claude Code / Codex / Cursor / Gemini / OpenCode / Qwen & 20+ CLIs. Stars: 77427. | [GitHub](https://github.com/nexu-io/open-design) |
| getpaseo/paseo | GitHub | Orchestrate multiple coding agents from desktop and mobile. Stars: 10242. | [GitHub](https://github.com/getpaseo/paseo) |
| cuga-project/cuga-agent | GitHub | Open-source generalist agent harness for enterprise, supporting complex task execution on web and APIs, OpenAPI/MCP integrations, composable architecture, reasoning modes, and policy-aware features. Stars: 859. | [GitHub](https://github.com/cuga-project/cuga-agent) |
| nomifun/nomifun-tauri | GitHub | No-holds-barred, fully open-source, local-first AI workstation built with Tauri. Stars: 115. | [GitHub](https://github.com/nomifun/nomifun-tauri) |
| GeronimoDiClemente/raven-nest | GitHub | Multi-agent terminal for Claude Code, Codex & Gemini. Electron + React desktop app for running multiple AI agents in parallel. Stars: 30. | [GitHub](https://github.com/GeronimoDiClemente/raven-nest) |
| ai-creed/ai-14all | GitHub | Mission-control desktop app for running AI coding agents in parallel across Git worktrees. Stars: 30. | [GitHub](https://github.com/ai-creed/ai-14all) |
| Fzkuji/GUI-Agent-Harness | GitHub | Autonomous GUI agent — give it a task, it operates the desktop. Visual memory, one-shot UI learning. Stars: 38. | [GitHub](https://github.com/Fzkuji/GUI-Agent-Harness) |
| MadBlast0/Cli-launcher | GitHub | Cross-platform desktop launcher for AI coding CLIs. Install, update, uninstall, and launch 17 terminal AI agents from one mac-style panel. Electron + React + TypeScript + Vite + Tailwind CSS. Stars: 10. | [GitHub](https://github.com/MadBlast0/Cli-launcher) |
| DorShaer/Husk | GitHub | Desktop home for your CLI agent. Wraps claude / copilot / codex / aider in a clean Electron window with PTY, MCP, drag-drop context, sessions, voice, and live status panel. Stars: 8. | [GitHub](https://github.com/DorShaer/Husk) |
| drewnekota/cetus | GitHub | Desktop agent for macOS, built on DeepSeek V4.1 — watches your screen, remembers what matters, and can act on your behalf. Stars: 7. | [GitHub](https://github.com/drewnekota/cetus) |
| Nex-Z/openEagle | GitHub | Desktop AI agent that sees your screen and acts on your behalf — combining chat, tools, and hands-on GUI automation with a three-tier safety model. Stars: 2. | [GitHub](https://github.com/Nex-Z/openEagle) |
| 24kHandsome1201/tunara | GitHub | Lightweight AI-native sidebar terminal built with Tauri + React + xterm.js. Multi-session sidebar, recognizes 12 AI Agent CLIs, read-only Git diff review panel. Stars: 2. | [GitHub](https://github.com/24kHandsome1201/tunara) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| SovereignPA-Bench | arXiv | Evaluates user-owned personal agents under evolving intent, platform mediation, and consent constraints. Tests whether agents preserve user sovereignty. | [arXiv](https://arxiv.org/abs/2607.05363v1) |
| Do GUI Agents Believe Their Eyes? | arXiv | Diagnoses state-belief reliance on pixels versus structure in multimodal GUI agents. Formalizes visual state reliance attribution. | [arXiv](https://arxiv.org/abs/2607.04334v1) |
| ProCUA-SFT Technical Report | arXiv | Training dataset of 3.1M steps for computer-use agents. Addresses negative transfer from AgentNet when fine-tuning UI-TARS 7B. | [arXiv](https://arxiv.org/abs/2606.17321v1) |
| EvoAgentBench | arXiv | Benchmark for agent self-evolution via ability transfer across four agentic domains. | [arXiv](https://arxiv.org/abs/2607.05202v1) |
| AgentGym2 | arXiv | Benchmarks LLM agents in de-idealized real-world environments with uncertainty and noise. | [arXiv](https://arxiv.org/abs/2607.05174v1) |
| ScarfBench | Hugging Face | Benchmark for AI agents migrating enterprise Java frameworks. | [Hugging Face](https://huggingface.co/blog/ibm-research/scarfbench) |
| UniClawBench | Hugging Face | Universal benchmark for proactive agents on real-world tasks. | [Hugging Face](https://huggingface.co/blog/feed.xml) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Codex下载、安装、配置保姆级教程（2026最新版图解） | 知乎 | Step-by-step guide for downloading, installing, and configuring Codex (OpenAI AI coding agent) with multi-platform support. | [知乎](https://zhuanlan.zhihu.com/p/2053527979850986310) |
| Claude Desktop Windows版一周上手：从安装到Claude Code实战开发 | CSDN | Hands-on review of Claude Desktop for Windows, from installation to practical Claude Code development. | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTE8xbVlCQXIySk00anVLRjBuX0VBb1JiSWxBaDJoU0Z3OGwybXZWdlBwc2tPdmJaUWdWa0thMWhSSDhkY3dTTVR5amREck1wdV9LMFhwblpsRG5jMERxellrNFJR?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI Codex周活跃用户5个月从60万猛增至500万 | News | OpenAI Codex weekly active users grew from 600K to 5M in 5 months. | [虎嗅网](https://news.google.com/rss/articles/CBMiUkFVX3lxTFBEenB0V2dvMzhTYnFJWi1ReUIxVk1GNjZPQkU2UWxtTUQ4TnFIUUdxR18yRGFyTEYtemNsRlRQT0pUd3JxV1l4bEx2NHIyT3VuZFE?oc=5) |
| AI agents move deeper into business workflows with ChatGPT Work & GPT-5.6 | AppleInsider | ChatGPT Work and GPT-5.6 bring AI agents deeper into business workflows. | [AppleInsider](https://news.google.com/rss/articles/CBMiswFBVV95cUxPa0g3SnhYSHM2MXg5NkcxRHdMQUthTFNyWU45ck01a1ZWTWwwUm5uWk5SaXFKaGEtTmJiTEpqbkpoMXd2dzBJbkZaVzhvaDdpb1NseUNCY3FYUHlKcWZBZm1rYlJGNHlFbXBwR2VvcHZJdTA3am9LTWZsVDVjZFhJV29veElNdVVzdUp2TnBQRjRjRHh6U24xdUZlakpiN3ZlRjR2cTc2UGJocTRGZHhXNGRvSQ?oc=5) |
| ChatGPT Work launches with GPT-5.6 as OpenAI merges Codex into desktop app | Crypto Briefing | OpenAI merges Codex into desktop app alongside ChatGPT Work launch with GPT-5.6. | [Crypto Briefing](https://news.google.com/rss/articles/CBMipAFBVV95cUxQZERDbTJBM0JZMnFfNHFwSVRBWDI0YWJ5cjJ3eFRzcU01czF5SUJBUlJ3Q3NXTTdWZzVBZEh3ZGU5TDFIc2pPMmVTUmdvRXpvTnZpZEdsLXQ0LUNLUWJtekloYmhZMkY3TEVucE5EdkdpRUlsRm5oX0g4ZTZZM1hJWW5lb0dkQm16MU5UYi1INk1DUzJBc1plT3U3cHZtOHFLS0pCcg?oc=5) |
| GitHub 推出 Copilot 桌面应用，支持并行 Agent 开发工作流 | Infoq.cn | GitHub launches Copilot desktop app with parallel agent development workflows. | [Infoq.cn](https://news.google.com/rss/articles/CBMiXkFVX3lxTE5WemJtZDlleTNFZVZ3V3NrS091S1lZZmhvWXhVQnlYSEVsY3U1MGpDRzdDbzBucWF6emVaLXkzLXNmZTJJQjVvSjNPZnhPQ3FBb1FCUHJWZzJPSlB0T0E?oc=5) |
| AWS launches a desktop for agents | The New Stack | AWS introduces a desktop environment for agents. | [The New Stack](https://news.google.com/rss/articles/CBMiakFVX3lxTE4xaDUxQ19DcHdDZEJfNG0xczc1M3oyLXFPZ0ZWV3dGQW5wcUg5WmcwSWZETEVaa0NXTkliTG9NcjdDNlhBQ205eXprNjlMbXNkenRsSThtZUFYOTRpVFR5ZHhHVDRWNm1BM3c?oc=5) |
| headroom-desktop | GitHub | Unlock 2x more Claude Code and Codex usage. | [GitHub](https://news.google.com/rss/articles/CBMiV0FVX3lxTE50S3VRbDBrOEROWTlwc3ZPTkZMTG1wNC1rdER4dG9DVno0MFYyMkdQVmk0QXVyejJaQVNGV29QSXRlOFJYNkhzSC1nRk0wOXlUYU1CWXF4OA?oc=5) |

## Resource Update (2026-08-01)

The following resources were discovered after the original article was published. They are grouped by content type and represent new leads for AI agent desktop applications.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| TokenDanceLab/AgentHub | GitHub | IM-native multi-agent collaboration platform — @mention Claude Code, Codex, OpenCode like teammates | [Link](https://github.com/TokenDanceLab/AgentHub) |
| IHUI-INF-AI/IHUI-AI | GitHub | Eight-platform full-stack AI operating system unifying 176 LLMs via LangGraph + MCP + A2A; multi-tenant RLS over 340 tables, RAG knowledge base, agent marketplace; Web/API/CLI/Desktop/Extension/Mobile/Miniapp; Apache 2.0 | [Link](https://github.com/IHUI-INF-AI/IHUI-AI) |
| utensils/mold | GitHub | CLI-native local AI image and video generation for people, scripts, and agents — CUDA on Linux, Metal on macOS, plus desktop, web, TUI, iPhone, REST/SSE, and MCP | [Link](https://github.com/utensils/mold) |
| gethouston/houston | GitHub | Open source platform for AI-native products; pre-built AI agents with real tools and 1000+ integrations in a Rust engine + Tauri desktop app; free forever | [Link](https://github.com/gethouston/houston) |
| packetloss404/PacketADE | GitHub | Tauri v2 desktop app bringing AI coding agents, planning, issue tracking, memory, deployment tooling, and workspace management into a single native environment; runs real development workflows across multiple agent CLIs | [Link](https://github.com/packetloss404/PacketADE) |
| ayuayue/PiDeck | GitHub | Open source desktop workbench for managing pi Agent sessions in local project directories; supports importing Codex and Claude local sessions; multi-project workspace, session history, Git integration, built-in terminal, model config, plugin management; Electron-based | [Link](https://github.com/ayuayue/PiDeck) |
| suitedaces/dorabot | GitHub | macOS app for 24/7 AI agents in an IDE with memory, scheduled tasks, browser use, and access to WhatsApp, Telegram, Slack | [Link](https://github.com/suitedaces/dorabot) |
| open-octo/octo-agent | GitHub | Private, self-hosted AI agent keeping models and data on your machine; feature-rich coding + assistant toolset across eight interfaces (CLI, Web, desktop, IM, VS Code, Obsidian, SDK, Mobile) in a single Go binary | [Link](https://github.com/open-octo/octo-agent) |
| router-for-me/EasyCLIProxyAPI | GitHub | Desktop GUI for CLIProxyAPI and a tool for automatically configuring popular AI agents | [Link](https://github.com/router-for-me/EasyCLIProxyAPI) |
| openchamber/openchamber | GitHub | Desktop and web interface for OpenCode AI agent | [Link](https://github.com/openchamber/openchamber) |
| agent-sh/computer-use-linux | GitHub | Linux desktop control over MCP — AT-SPI, GNOME Shell, Wayland portals, ydotool | [Link](https://github.com/agent-sh/computer-use-linux) |
| omnimind-ai/OmniBot | GitHub | On-phone/mobile AI agent capable of operating terminals and performing a wide range of tasks in the Android world | [Link](https://github.com/omnimind-ai/OmniBot) |
| different-ai/openwork | GitHub | Open-source alternative to Claude Cowork, powered by opencode | [Link](https://github.com/different-ai/openwork) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| jin-s13/awesome-gui-agent-hub | GitHub | Curated hub for GUI agent papers, benchmarks, datasets, projects, and computer-use research | [Link](https://github.com/jin-s13/awesome-gui-agent-hub) |
| trycua/cua | GitHub | Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation | [Link](https://github.com/trycua/cua) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| 一周Vibe Coding打造离线桌面Agent：Tauri+Ollama+Whisper本地化实践 | CSDN文库 | Tutorial on building an offline desktop agent with Tauri + Ollama + Whisper in one week of vibe coding | [Link](https://news.google.com/rss/articles/CBMiU0FVX3lxTE5IRTBvcHVkOVdhZ1RnYlhGaFJILUtXbWJZS3ZIOWNoeWRlSkpqNGZYTDBrTzR1X2ZXVUQtT1c0dWlnMVhZWFBneWliRzBMaTlQZW9B?oc=5) |
| 国产智能体刷新OSWorld全球纪录：90.2%背后的Harness工程化突围 | Substack | Analysis of a domestic agent achieving 90.2% on OSWorld, focusing on Harness engineering | [Link](https://news.google.com/rss/articles/CBMiXkFVX3lxTE50cl9Eb2tPTF9RNk1DWmI2MkJhMjBmZ1JSV29kWVVNcUc3ZkloTUFIQ3B3Y3QxZm5GM21sUk9paXM5WDdSNGJzdXhCMFQxdFcyWFFMQjhlTFB1WVhQcVE?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI brings GPT-Live voice control to Codex and ChatGPT desktop | VentureBeat | Agentic coding goes hands-free as OpenAI brings full duplex voice control to Codex and ChatGPT on the desktop | [Link](https://news.google.com/rss/articles/CBMi7gFBVV95cUxNV0RkSG9fZUFleDNpX0cwd3Bleko3WFBTdUdDTmtmR1NXaEpxcno4cXAxTGZRaHdTUjZxWjh5eTEwdDZOeS1HTFBvQ2xlc2xJQWhyVEJCUmIxSTRmSWc1eDVSTmcwRFlNYzZyUk1DTV9VYWU5MkhQOFFVczJiSEZHby0zR1VMZXZZQm95Tm5DcUNaMmVSTWgwZ19rX2ZobUFKYkJXWnBCaWJ6c3Z5UHJEUmVWME44Y1JZRGZNYUpFamdvRy01ejJtM2NXLUhTeFBaRjZEMDgwU2JyLXlCNWV1ZGlxQUV2Z3pCMGNXaHFB?oc=5) |
| Perplexity AI Desktop Agent for Windows | Tech Times | Perplexity brings AI desktop agent to Windows, routing tasks across 20 models | [Link](https://news.google.com/rss/articles/CBMixwFBVV95cUxNNFJOWXpLbkQybjgxQS1XczFRY0Y0TTR0eDhLenRuOFQ2ZWFISFZJcm9yOEI5aGZkRC1IZzN5SDNQT2VVUW14WjFvV3c2VG9IVG5LUXZQSVpzT29INlFIdDQ3bHFaVkJMbjJOa083a1J2MC1fOGZyLVlxY0lEZkI1S1pyLUZ3aDRIbzIxSXYyNmw5aVFzNkhYNEhCMTV1cmdaNW9MYmJZamk4RXBwVzZsVUt5YTZHaEtkNm1UanJrZjdRZTB4M2xN?oc=5) |
| 100%开源！吴恩达做了个个人桌面Agent | 量子位 | Andrew Ng's 100% open-source personal desktop agent | [Link](https://news.google.com/rss/articles/CBMiVEFVX3lxTE9BWjJhODRMWVlHb3BveHg4UzVHaXMtRTJ0aHdxTWRqdm5fMUtpRTBENXM1TS0tOHBlQ3BsOFhOUklEWVZsT2l6bGd0RHNLVFhPTUc5dg?oc=5) |
| 2026年7月桌面Agent推荐：Kimi Work能力、场景与定位的深度解析 | CSDN | Deep analysis of Kimi Work's capabilities, scenarios, and positioning as a desktop agent | [Link](https://news.google.com/rss/articles/CBMiXkFVX3lxTE1ISWY0emU4RkhNa1dWbU9VdGxfMjVLcEZTNHJzOUwtc1ZPcFVld21lN1E3UERuVXpIOTBOeUk5SDd0LWdacmxOcm9NVG5nZzRxdmdKemN0TmdmRnRhNGc?oc=5) |
| OpenAI为ChatGPT桌面应用新增语音模式 | 至顶网 | OpenAI adds voice mode to ChatGPT desktop app, enabling control of agents to execute tasks | [Link](https://news.google.com/rss/articles/CBMib0FVX3lxTE54TDNvTFJCcDRqVDNzZklpVXcydmN5OFVVZTRaQTFZSm9wUmE1N3NfbzBYbDBabXVwMlJRNTdiVkN4OTAwbDFSUU1XQ2lvcEpCT3ZEN3hqYV9JVldkMHQ3VnBSZkNVYllCVGUwZXdTRQ?oc=5) |
| 桌面Agent赛道观察：20款产品背后的大厂卡位与国产替代 | finance.sina.com.cn | Observation of the desktop agent track: positioning of 20 products by major vendors and domestic alternatives | [Link](https://news.google.com/rss/articles/CBMickFVX3lxTE45a1BDOXNmdnU1S2hqZGphVUVoNjg2M3FoRVE0ZHdEcWVGOEZUZXhyQkg3OVFIQ0R0a2ZVVVZ6cEhmcE5hNGVuRWtqRklfQ3dUZ19FcGx1Y2wzM19EZkFhajhEVU1WRWxPd0RlSWd5TFVkQQ?oc=5) |
| Claude Code brings live iOS app testing into its Mac app | 9to5Mac | Claude Code adds live iOS app testing capability to its Mac application | [Link](https://news.google.com/rss/articles/CBMikgFBVV95cUxPTmUtQ3pfSEs4eW9sM3NWMzFZbEVscXNtcFFqeGJ4OHRqU3VYU19YOUN5VjVueGhMeGFVZnlEMGlhT3hZU0NZMkwyUFhCZUVtOHFUd24xTzV3ei1DQnRZd3pqSHE4NGU4QTNoYU5MeUUwRkwzUFFWTmN3Z0VOWXhlR2RMTTVuZ1lacllpQVdIbTVfZw?oc=5) |
| 🚀Orca ADE彻底改变AI编程方式！多Agent并行、语音输入、定时审查、Git… | Medium | Orca ADE changes AI programming with multi-agent parallelism, voice input, scheduled reviews, and Git integration | [Link](https://news.google.com/rss/articles/CBMi0wJBVV95cUxPRUZhMTYtMUNBMXR2WjA3Z1BOWGowemhtVTI4X3ZXbFRVWkxudndhZWJNcTM5ZDF4Ul9hN2NPMTlRWjNVYnZHTTRXeWcwVW9mQ283Qm9tTWlxWkZzb18wVHFaazREazlGa21OeFhsbGlxRlB4bE9GcEtENTJlMW5sTkh1Mzhkekd2VXpndTVBc1JHSHlKbXRZcGhiaEFSZHRuOTdLS1k4TDBmaGwtM2VyMHR5anlzNnI1U0F5cmVmYmh4UmxSbE5JUW10MGZOWEtjaVVLQVcydWluLWRaZ2lMTncxRlI2dHNzMG4yWXAydmxrUm5BaEh1ZWRnUmpwZzFneVJQV05NMXpHNHhIREU2Wm81QlJ3WHlkUG1zc3Nob1Y5UXNmQ2FxMHg5WngyQzZQYUVkbzBpTW9jQV9oVXRlZmZPbTRaaW5aaHB3d2hNSjNBX2c?oc=5) |
| 一夜之间，GPT-5.6 来了，Codex 没了，Claude 急了 | 爱范儿 | Overnight, GPT-5.6 arrives, Codex disappears, Claude panics — analysis of the shifting desktop agent landscape | [Link](https://news.google.com/rss/articles/CBMiQ0FVX3lxTE1MZzlMekhoRmtBQW9yYkZHZ0l1ckY0bnFXZUwybWVZQ1pMTWFpRUQ0MllsUVpSSFhWVDg2Nk4xNHNOWVU?oc=5) |
| The new ChatGPT superapp takes aim at Claude Desktop | PCWorld | Analysis of the new ChatGPT superapp positioning against Claude Desktop | [Link](https://news.google.com/rss/articles/CBMingFBVV95cUxQbkJ4RTV5OTFUM1lLaEpBcWw1T000bnEteWhQSHN4ZDlYajUtN0lHWWl0UnFMd1h1Zng1cEFJOXBBdlMzWExoekxQbHl6UGlWaS1wem9wTkxMQzRkTENSQmxUVjJyaE44b3lFUFBsV2MzaGdjYmNNbjR2SkJheDRpT1VTYks2WUVVem9iVnRPMk1SN3RyT2tXRmRsY291dw?oc=5) |
| OpenAI's new voice mode makes it to the ChatGPT desktop app | TechCrunch | OpenAI's new voice mode arrives in the ChatGPT desktop application | [Link](https://news.google.com/rss/articles/CBMimAFBVV95cUxPQ2ZGQ2VYN19sTzYzdHREdUJ0RFM2eGczR2FhRFdweHZZa0tjSC1mMWxVbjEtWmh5WjFpNDBnemszbFFZOWE0STJRSmdWNlk3UXdEOUE3SWlRV1VYYmNuWm42eXBGcnlmWlotYUxWVGhkb0tKSk51amZGUWFhdWpsdjVNRmNuclQ2OFAzUl9vUXRyZjRYV3JaZw?oc=5) |
| Codex from 0 to 10M Users: Building ChatGPT Work | Latent Space | OpenAI's core product engineering lead on building ChatGPT Work: Sites, OpenClaw, Memory, Subagents, Finance, No-Code | [Link](https://www.latent.space/p/chatgpt-work) |
| AI PCs Outdated, AC Sees Overnight Explosive Growth | 36 Kr | Discussion on whether AI agents really need dedicated computers as AI PCs become outdated | [Link](https://news.google.com/rss/articles/CBMiU0FVX3lxTE13bmh2NVdKT0NPeUViSWJndjZUQ1BfU2xNM21DUElmRGRoWDctVktQOXB1MjhIVl9HeXVHOVRpYUl1c1c0Q3d3Mk13YmMyTW1UR2Rv?oc=5) |

## Resource Update (2026-08-22)

The following resources were discovered after the original article was published. They are grouped by content type and represent promising leads for further investigation.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| KunAgent/Kun | GitHub | Local-first AI agent workspace for coding, writing, design, research, and automation — one runtime for desktop GUI and TUI. 6,149 stars. | [Link](https://github.com/KunAgent/Kun) |
| Pinvou/pinvou-agent | GitHub | Open-source desktop AI agent for tools, files, knowledge, workflows, and real deliverables. 1,117 stars. | [Link](https://github.com/Pinvou/pinvou-agent) |
| AnalyseDeCircuit/oxideterm | GitHub | AI-native workspace for local shells and remote machines. Zero Electron, zero OpenSSL, zero telemetry, and no app subscription. 1,328 stars. | [Link](https://github.com/AnalyseDeCircuit/oxideterm) |
| BENZOOgataga/StaffordAI | GitHub | Desktop app for running a team of Claude Code agents you manage like colleagues. Hire them, give them a project, watch their work, and pick up where you left off. | [Link](https://github.com/BENZOOgataga/StaffordAI) |
| AgentsRoomDev/electron-mcp-for-agentsroom | GitHub | Give your AI agents full control over any Electron app. Zero changes to your existing code. Made for AgentsRoom.dev. | [Link](https://github.com/AgentsRoomDev/electron-mcp-for-agentsroom) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations | arXiv | Foundation GUI agent integrating an environment-grounded training stack with in-context demonstration learning. Addresses scarce training data, ambiguous prompts, and unreliable execution. | [Link](https://arxiv.org/abs/2608.15930v1) |
| LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows | arXiv | Pre-deployment evaluation study for automating legacy enterprise workflows with multimodal LLM agents. Identifies stateful workflows where successful demos are insufficient. | [Link](https://arxiv.org/abs/2608.14131v1) |
| ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents | arXiv | Benchmark and diagnostic pipeline for component-level evaluation of computer-use agents on modern web UIs, filling the gap between long-horizon workflows and atomic GUI-grounding tests. | [Link](https://arxiv.org/abs/2608.18307v1) |
| Inducing Task Models from Computer-Use Traces | arXiv | Deriving symbolic, auditable, and reusable task models from passively recorded screenshots and mouse/keyboard actions. Relevant for agents learning real-world workflows. | [Link](https://arxiv.org/abs/2608.20319v1) |
| A Gateway Architecture for Enterprise MCP Authentication | arXiv | Addresses the governance crisis from fragmented MCP server authentication in enterprises. Proposes a gateway architecture for unifying heterogeneous auth and identity delegation. | [Link](https://arxiv.org/abs/2608.10760v1) |
| The Role Specialization Model (RSM): Coordinating LLM-Based Tools in Agentic Software Development | arXiv | Case study coordinating Antigravity, Gemini CLI, and Qwen Code under a role-distribution framework for Agentic Software Engineering (SE 3.0). | [Link](https://arxiv.org/abs/2608.12311v1) |
| Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents | arXiv | Finds that having MCP tools available does not settle whether a model benefits; tool-decision behavior separates reasoning from non-reasoning models on OSWorld-MCP. | [Link](https://arxiv.org/abs/2608.03327v2) |
| Qwen-CUA: Native Computer Use for (almost) Everything | arXiv | Native computer-use agent with 397B-A17B MoE backbone. Observes only screenshots and acts through keyboard/mouse events, without DOM trees or accessibility metadata. | [Link](https://arxiv.org/abs/2608.02352v1) |
| CUADebug: Diagnosing and Repairing Computer-Use Agent Failures | arXiv | Framework for diagnosing and repairing CUA failures arising from coupled visual perception, spatial grounding, low-level interaction, and environment dynamics. | [Link](https://arxiv.org/abs/2608.02643v1) |
| Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification | arXiv | GUI task evaluation using environment-state verification (system configs, file data, app settings) as reward signals for test-time scaling and post-training. | [Link](https://arxiv.org/abs/2607.25904v2) |
| Scaling GUI Agents with Visual State Transitions | arXiv | Introduces State Transition Pretraining (STP) as a new scaling axis for GUI agents, jointly optimizing inverse and forward dynamics for action-grounded visual representations. | [Link](https://arxiv.org/abs/2607.24112v1) |
| MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation | arXiv | Consolidates domain-specific GUI agents into a single cross-environment policy via structured action distillation, avoiding weight-merging corruption. | [Link](https://arxiv.org/abs/2607.29320v1) |
| Ouroboros: A Self-Developing Frontier Coding Agent with Reviewed Core Evolution | arXiv | Self-developing agent harness whose tools, prompts, and core implementation improve through reviewed commits that become the runtime for later work. | [Link](https://arxiv.org/abs/2608.08311v2) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Nvidia just showed that the harness, not the AI model, is now the real hero | TechCrunch | Nvidia research shows AI agents can perform well through fine-tuning even if the base model isn't great at the task — highlighting the importance of the harness. | [Link](https://techcrunch.com/2026/08/21/nvidia-just-showed-that-the-harness-not-the-ai-model-is-now-the-real-hero/) |
| The Evolution of the Agent Harness | Latent Space | Essay on how models keep absorbing the harness into their weights — soon it will be a harness for human attention rather than for the model. | [Link](https://www.latent.space/p/attention-interface) |
| Claude Code vs. Codex: Why I use both and how to choose one (if you must) | ZDNET | Practical comparison of Claude Code and Codex for agentic coding workflows. | [Link](https://news.google.com/rss/articles/CBMidkFVX3lxTE00elhyV1ZnVnFNblFSZGx3d1dQcmtHek4xTlZqT1JqaTFYaTNjOFI4dEhORWkyaExjRC15ODIwTW8tXzBaa0dQTEtQblZJcTVDUHdWYTJ5TDJ2UEQyRkZ0SEdHWHlzNlU5OGpmOXpVZVBycndfaHc?oc=5) |
| Hands-On with Computer History: OpenAI's Take on Agent Memory | MacStories | Hands-on review of OpenAI's agent memory capabilities in the ChatGPT/Codex desktop app. | [Link](https://news.google.com/rss/articles/CBMimwFBVV95cUxNbExfQUtaMjd2RkNoakRjZE1pSlZBQ0QweV9DQWFHRTdQc29pX3FiTzd5b3QtREtad2VyUnd0V3QxWi1peHNxYjRmalZJeVh6Ym9GbkFNMTc2WFZ6RGM1S0ZsbzNvdDd3QkxrbDlCdGlLMm1IeE5PRnZJcGtSTE9wV2pIT013NW5NczBjMjhjU0VJd1JseXdzQXFTVQ?oc=5) |
| OpenAI's ChatGPT/Codex desktop app is now on Linux | The New Stack | Announcement of Linux support for OpenAI's ChatGPT/Codex desktop app. | [Link](https://news.google.com/rss/articles/CBMiY0FVX3lxTE42aUZGS1k1UTJSbE1BaTc2TUtpV1ZsbVZKNEIweXhOUDhnbFZ2T2lhT29hdWZWTGFfSWYzYTVhblpDVWlvOVBIdExCZmw1VkdXdk1OTG5HYjVWQ0VwVG5WdVlDTQ?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI Codex releases | GitHub | Added an interactive codex agents dashboard for searching, starting, opening, renaming, and stopping tasks, with configurable shortcuts. | [Link](https://github.com/openai/codex/releases) |
| DeepSeek Harness | 36 Kr | Unveils 3 weekly updates, integrates Claude Code & Codex as sub-agents to become the core scheduling layer in the agent era. | [Link](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9tanBjQ1Q3TVBiNTN0bjJMQWpyNGRUOFNNckR1QVFROHE3QXJXQ1FDdV93Qzc0OU5EbjlFVWV3Vkk1UUo5U0xtMmxaWUJlLXQzSEF3?oc=5) |
| OpenAI open-sources Codex Harness | AIBase | OpenAI fully open-sources the Codex Harness, further opening the underlying capabilities of AI coding agents. | [Link](https://news.google.com/rss/articles/CBMiTkFVX3lxTE01ckp3OG1KWmpHZU4yVVVuNGNBT1RIemIxaHVTelU3dXhpWHJYVlpWeTlQWWd3TlJuNnJfX0w1Q2l1VjB0X2xjMDdOblFRdw?oc=5) |
| 实在 Agent (OSWorld) | InfoQ-CN | First desktop agent to break 90% success rate on OSWorld, achieving dual top rankings. | [Link](https://news.google.com/rss/articles/CBMiXkFVX3lxTE5RbzF0ai1adlduR1NBcENKT05Hd05RWmVjWjVHVFRBdmxQOW5CZUJtUG1Xa0s3ODdDS1FqV1NZdW5hQlpRcVY2NkRUNjh5SzFQaklnSTY5bWtLZjdPQnc?oc=5) |
| OpenConnector | OSCHINA | Open-source connector gateway for AI agents to securely call 1000+ SaaS services. Solves authentication management, permission control, interface adaptation, and audit. | [Link](https://www.oschina.net/news/502067/oomol-lab-open-connector) |
| Vercel fx | OSCHINA | Lightweight agent implemented in Zig that can run directly in the browser. | [Link](https://news.google.com/rss/articles/CBMiWEFVX3lxTE02OXNhWjVXN1cyWUU3TVBRWm50ckhrZzByakhONzZtYkdncXhZaEM1aERPZ0ZBQ0FJMkExZVN0cUs1dUJlaExHaHRLZFU1dFY0ZVVCQXVqTHc?oc=5) |
| Stampli + ChatGPT Work | OpenAI | Case study: Stampli cuts launch hours by 68% using Codex and ChatGPT Work to compress weeks of launch production into days. | [Link](https://openai.com/index/stampli) |
