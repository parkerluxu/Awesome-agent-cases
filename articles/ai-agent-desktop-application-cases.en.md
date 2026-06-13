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
