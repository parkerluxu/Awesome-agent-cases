# Embedded Design: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in the future. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (0+7)

This section is divided into two categories: `Tutorials / Cases 0 entries` and `Projects / Papers 7 entries`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it is worth in-depth reading.

### Tutorials / Cases 0 entries

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|

### Projects / Papers 7 entries

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | EmbedAgent/EmbedBench | Paper | EmbedAgent and EmbedBench paper, designing a dedicated benchmark for embedded agents, covering task definitions, evaluation metrics, and experimental design, filling the evaluation gap in this field. | https://arxiv.org/abs/2506.11003 |
| 2 | IoT-SkillsBench | Paper | IoT-SkillsBench paper focuses on skill evaluation in IoT scenarios, constructing problem definitions and datasets to analyze agent performance in real device interactions. | https://arxiv.org/abs/2603.19583 |
| 3 | Grounded Copilot | Paper | Grounded Copilot paper proposes a context-based code generation method, demonstrating through technical frameworks and evaluation results how to improve the adaptability of generated code in embedded scenarios. | https://arxiv.org/abs/2206.15000 |
| 4 | CodegenBench | Paper | CodegenBench paper proposes a code generation benchmark, including task settings, data sources, and performance comparisons, providing a standardized evaluation tool for embedded code generation models. | https://arxiv.org/abs/2606.04023 |
| 5 | LLM-aided Design | Survey | LLM-aided Design Wikipedia survey, overviewing the field of large language model-assisted design, covering key concepts and research directions, providing a macro perspective on AI applications in embedded design. | https://en.wikipedia.org/wiki/LLM_aided_design |
| 6 | TensorFlow Lite Micro | Open-source Project | A machine learning inference engine optimized for MCUs, providing a complete workflow from model conversion to deployment. In embedded agents, it is the standard solution for running lightweight AI models on microcontrollers. | https://github.com/tensorflow/tflite-micro |
| 7 | Edge Impulse SDK | Open-source Project | The Edge Impulse SDK provides an inference runtime on embedded devices, supporting platforms such as ARM Cortex-M via a C++ API. Its value lies in efficiently deploying trained models to resource-constrained hardware, making it a practical tool for edge AI deployment. | https://github.com/edgeimpulse/inferencing-sdk-cpp |

## Resource Update (2026-06-13)

The following resources were discovered after the original article was published and are provided as additional leads.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| TuyaOpen | Framework | Next-gen AI+IoT framework for T2/T3/T5AI/ESP32 and more – Fast IoT and AI Agent hardware integration | [GitHub](https://github.com/tuya/TuyaOpen) |
| open-agent-sdk-go | SDK | Build AI agents in Go with a lightweight in-process SDK, tool execution, MCP support, and multi-provider LLM compatibility | [GitHub](https://github.com/Sammyblear596/open-agent-sdk-go) |
| ESP32-LLM-Agent-Bridge | Bridge | Bridge between LLM AI Agents and ESP32 IoT devices using lightweight UART protocol, inspired by Device Context Protocol (DCP) | [GitHub](https://github.com/kushagrabansal-IOT/ESP32-LLM-Agent-Bridge) |
| zenclaw | Agent | Fully autonomous AI agent running on ESP32 microcontroller (S3 and P4) – tool use, persistent memory, cron scheduling, multi-channel messaging, on-device with modern web UI | [GitHub](https://github.com/bennyzen/zenclaw) |
| project-nova | Architecture | Multi-agent AI architecture connecting 25+ specialized agents through n8n and MCP servers, controlling applications from knowledge bases to home automation | [GitHub](https://github.com/PradeepaRW/project-nova) |
| AIOS | System | Production-grade Multi-Agent AI System with 8 autonomous agents (Planner, Memory, Research, Resume, Job, Coding, Evaluation, Documentation) | [GitHub](https://github.com/nalla-dinesh/AIOS) |
| AI-LMS-TMS | Application | Self-hosted AI-powered Learning & Training Management System with embedded AI agent | [GitHub](https://github.com/alfredang/AI-LMS-TMS) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Device Context Protocol | Paper | Compact, safety-first architecture for LLM-driven control of constrained devices, addressing MCP limitations for microcontrollers | [arXiv](https://arxiv.org/abs/2605.26159v1) |
| LLM Agent Based Renewable Energy Forecasting | Paper | Review of solar, wind, weather, and grid-aware decision support using edge and IoT data | [arXiv](https://arxiv.org/abs/2605.25141v1) |
| PI-Hunter | Paper | Automated red-teaming for exposing and localizing prompt injections in agentic systems | [arXiv](https://arxiv.org/abs/2606.12737v1) |
| ProPlay | Paper | Procedural world models for self-evolving LLM agents | [arXiv](https://arxiv.org/abs/2606.12780v1) |
| AI Agents Enable Adaptive Computer Worms | Paper | Demonstrates AI agents generating tailored attack strategies for each target, enabling a new class of worm | [arXiv](https://arxiv.org/abs/2606.03811v1) |
| CORE-Bench | Benchmark | Comprehensive benchmark for code retrieval in the era of agentic coding | [arXiv](https://arxiv.org/abs/2606.11864v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Google Search Box Redesign | Product | Google announced a sweeping redesign of the search box, transforming it from a simple keyword input into a dynamic, AI-driven conversational interface | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI to acquire Ona | Acquisition | OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments, enabling long-running AI agents across enterprise workflows | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| Antigravity Awesome Skills | Collection | 1,527+ Agentic Skills for Claude Code, Gemini CLI, Cursor, Copilot & More | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tNl9NbVNGU214YXktUlkyVU5SM24xdkdYeUtGS0pXcTNPM0g0VnNmOVB1alc3S2NQcUR2cFhrLWZMR0p0UV85TjFvME5lRUowWW4yNnZkeEZMZnpVbjBjdlNCNA?oc=5) |
