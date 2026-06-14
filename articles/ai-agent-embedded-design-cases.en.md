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

## Resource Update (2026-06-14)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| luxar-embedded-agent | GitHub | STM32-first embedded AI agent toolkit for firmware generation, review, build, flash, monitor, and debug workflows. | [GitHub](https://github.com/neltharion11/luxar-embedded-agent) |
| IntegratedPipeline-Specialized-Non-LLM-AI-Agent-Framework | GitHub | Standalone AI Agent Library for Non-LLM memory augmented agentic framework, designed for consumer to high-end embedded systems. | [GitHub](https://github.com/Micro-Novelty/IntegratedPipeline-Specialized-Non-LLM-AI-Agent-Framework) |
| ori-runtime | GitHub | Open-source, offline-capable agentic IoT runtime with physical actuation trust; tiered LLM reasoning + graduated authority model for safe autonomous physical action on a Pi. | [GitHub](https://github.com/ori-platform/ori-runtime) |
| SFES | GitHub | STM32 Firmware Engineering Standard (SFES) v1.0 for unifying architecture, coding, debugging, and AI Agent collaboration rules. | [GitHub](https://github.com/grailguo/SFES) |
| stm32-dev | GitHub | STM32F103C8T6 out-of-box development template with Makefile incremental build, HAL simplification, and AI Agent friendly design. | [GitHub](https://github.com/SlumberMin/stm32-dev) |
| stm32-ai-agent | GitHub | Automated STM32 programming via AI agent. | [GitHub](https://github.com/zhang137-zhang/stm32-ai-agent) |
| voxedge | GitHub | Fully-offline speech-to-speech voice agent on Snapdragon phone: on-device ASR + 4B LLM + TTS, hands-free, ~0.6 s first audio. | [GitHub](https://github.com/GT-KIM/voxedge) |
| SKY_Agentic-AI-Robot | GitHub | Agentic AI healthcare robot with LLM, computer vision, speech, and mobile control — Arduino Mega + ESP32, Windows server, Android client. | [GitHub](https://github.com/MasterWise23/SKY_Agentic-AI-Robot) |
| EmbedClaw | GitHub | Modular agent runtime on ESP32-S3 managing LLMs, tools, memory, and channels for efficient message processing. | [GitHub](https://github.com/Laureenundecided267/EmbedClaw) |
| streamcore-server | GitHub | Open-source realtime voice agent server in Go with WebRTC, barge-in, streaming STT/LLM/TTS pipelines, ESP32 support, and fully local mode. | [GitHub](https://github.com/streamcoreai/streamcore-server) |
| flashprobe-mcp | GitHub | MCP server to flash & monitor embedded firmware over probe-rs (JTAG/SWD + RTT) or espflash (UART) — any probe-rs target, defmt-aware, LLM-token-efficient capture. | [GitHub](https://github.com/okhsunrog/flashprobe-mcp) |
| ESP-32-s3-Story-maker-LLM | GitHub | 15M/42M-param Llama split across two ESP32-S3s over 3 wires — INT4, flash mmap, bit-exact verified. | [GitHub](https://github.com/harmansingh4163-ai/ESP-32-s3-Story-maker-LLM) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Toward a Modular Architecture for Embedded AI Agent Systems at the Edge | arXiv | Proposes a modular reference architecture for Embedded Agent Systems bridging LLM-based agentic AI with strict memory/energy constraints of embedded microcontrollers. | [arXiv](https://arxiv.org/abs/2606.02862v1) |
| AutoMCU: Feasibility-First MCU Neural Network Customization via LLM-based Multi-Agent Systems | arXiv | Feasibility-first LLM-based multi-agent system for deploying neural networks on MCUs under tight memory, storage, and computation constraints. | [arXiv](https://arxiv.org/abs/2605.21560v1) |
| The Energy Blind Spot: NVIDIA's Flagship Edge AI Hardware Cannot Support Process-Level Energy Attribution | arXiv | Demonstrates that orchestration structure dominates agentic energy cost on edge AI hardware, with workflows consuming up to 7.63x more energy per goal. | [arXiv](https://arxiv.org/abs/2605.27599v1) |
| AI-IoT-Robotics Integration: Survey of Frameworks, Emerging Trends, and the Path Toward Connected Robotics | arXiv | Survey on convergence of AI, IoT, and Robotics for real-time, intelligent, context-aware systems. | [arXiv](https://arxiv.org/abs/2606.01015v1) |
| Semantic Multi-Agent Intrusion Detection for IoT: Zero-Day and Adversarial Threats with Risk-Aware Reasoning | arXiv | Multi-agent IDS for IoT networks handling zero-day and adversarial intrusions with risk-aware reasoning. | [arXiv](https://arxiv.org/abs/2606.10323v1) |
| From Rocq to Metal: A Pipeline for Formally Verified Microcontroller Firmware | arXiv | Encore! bare-metal CPS VM running Rocq-extracted Scheme on microcontrollers for formally verified firmware. | [arXiv](https://arxiv.org/abs/2606.02651v1) |
| Energy-Efficient On-Device RAG on a Mobile NPU: System Design and Benchmark on Snapdragon X Elite | arXiv | First end-to-end RAG pipeline running all neural stages on Qualcomm Hexagon NPU of Snapdragon X Elite. | [arXiv](https://arxiv.org/abs/2606.11257v1) |
| AlignFed: Alignment-Aware Asynchronous Federated Fine-Tuning for LLMs in Heterogeneous Edge Environments | arXiv | Collaborative adaptation of LLMs on edge devices under data privacy constraints and heterogeneous resources. | [arXiv](https://arxiv.org/abs/2606.08197v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Programming an Arduino with Codex - Agentic Embedded Coding, No IDE | YouTube | Demonstrates agentic embedded coding of Arduino using Codex without an IDE. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9JZnJHTDdZZGVQZG1DU0w3cngyRHBuSlM4MTB6LUpmckd4SkxFSmxRcWhIek9wRXFXREgwdUNSZjE5M09XNkJyTE5JV3pMbTZIbFJaLVV3?oc=5) |
| AI Agents at the Edge, Robotics, Motor Control ICs: Embedded Week Insights | embedded.com | Industry insights on AI agents at the edge, robotics, and motor control ICs from Embedded Week. | [embedded.com](https://news.google.com/rss/articles/CBMinAFBVV95cUxPdnpDS1JZeEh0MjJ5RDJNZ3RiZ29UZUhfdERrNTdNVE5PVFNrRnNsWjZROFU1R2NaWXppWDVQS3daRTYtaFM3YS02OU4zZ2pZOG1ocWkxQWVnQWFJTFRFM1ZUTkl2OXRFTVFjOG5ST0llUFpBUXJPSzZDX0VrdVZwUzEzZDRWbFR2SnpyWVRGMlg4U2J3aHVGS01GU0E?oc=5) |
| How to use NIST and ISO frameworks to govern AI agents | Help Net Security | Guidance on using NIST and ISO frameworks for AI agent governance. | [Help Net Security](https://news.google.com/rss/articles/CBMihwFBVV95cUxOOVp4NFcydW5WcG5RaC1vb1RVSzJYVFR2U3Y4T1JVcmdzZ01ZbHFOekwycFBuSlNqR0h3aEZmQTRKTi1EZDF5SWdWR0E0SGtvQVhOM2VvTks2Z1hHdDdpb0hYVjgta29UNlJ3ak1mNUFtRGlkUmVwXzFvaFdEeVVDUmtZSmZsX0k?oc=5) |
| 30+ Industrial AI Agents to Watch | AIMultiple | Curated list of industrial AI agents. | [AIMultiple](https://news.google.com/rss/articles/CBMiVkFVX3lxTE16WndndUhzVUtXRDNRZ1BqSzZFTE1zSEtkckZqYlg1cWxFUnNqMmxBMUhTQlptVjhJa09JOUNhYUlTNlBmSnNKVXYtS3o2Qks0VnhLZHln?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Anthropic's open-source Claude Desktop Buddy | CNX Software | Turns ESP32-S3 devices into interactive AI desk companions. | [CNX Software](https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRU9vdW91bV9tUmV6VHZEVUNUa2RPeGJaSEZUcE5KbzNGbzN3MTdBdS0yUXE4UjV5STlzRFFoUzZGeVhiWXZENnFHSFZsZ3ZnMFRkbjRJcEVVeHpGVGltenpmMXF3RDB3bzhNb0lLcVJNLVBaS2Z1Y1lsUmV6Zm00X2hFXzJSN2dLSUhmM2doLVdfWWwyQVFMbWtmWVpKUjk3VFRqdVBPam9oa2UyNVpmRnE1Rm1CVGhRRWxydlBZV2xzRXpUa05kdFd2WGY0WmVSWGVzcms0b1l1NzTSAeMBQVVfeXFMTlNaMFUzNUdGbzBFNU8yOG5YOXIxcF8wU2hTaVdfSXJQejdNWmJWMVZVbGFVSElYelJORUo5RlZtd3hYajM5MXc5UklFSFFFRFdZcmpmWDVKUW9uQk5jUXgzSkdLb2hYNEUtbzBfOTg2bnZCLTd5eVpuSE9KNWc4MENfdWhjYnhhdVRVNDNvZlBCNVlBMlI3Z0Vmb0lVQWJYby1nSHp0TjVZWk80cGs4UDJuLUdaZ2wwWGF1SXI2dC0teV85OXd2NEY3SlROcnFlZk9ISE93QXJsTzlIVllzSVFlZ2c?oc=5) |
| Advancing AI Infrastructure for Agentic AI with NVIDIA DOCA In-Silicon Security | NVIDIA Technical Blog | NVIDIA's infrastructure for agentic AI with in-silicon security via DOCA. | [NVIDIA Developer](https://news.google.com/rss/articles/CBMitAFBVV95cUxOcVZYR1lPd1NtcTg0c0I0Rl9pX3ZtWEd4VlJ3em5ULWFpX0RzUDF1aHY3bkFHOFpGelZPNUNNTnhDbHBHY3NqV1p0MUdsaU10aGE0a0phdDljNW4xMWx1Y2JsdzNWRHVwbW8tQlBiMHRJd2JjbEFwWm5DVHdkVTZyd3lnbTJidmxPRW82UDRnUWF4WkxVY0RKV1dpY1RhR0JLNzFxTlNiTGlodjNKOTlXclNsZGQ?oc=5) |
