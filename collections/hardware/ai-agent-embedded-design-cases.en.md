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

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| FirmwareForge | GitHub | Autonomous AI agent generating ESP32/Arduino firmware from plain-English descriptions using LangChain and Claude. | [Link](https://github.com/BrianSeungwooShin/FirmwareForge) |
| ESPer-Chan | GitHub | AI agent using local LLM for Xiao ESP32S3 Sense and other boards, Arduino IDE compatible. | [Link](https://github.com/mochimochi-man/ESPer-Chan) |
| AI_Systems_Architect_Lab | GitHub | Hands-on lab covering RAG, agents, MCP, Edge AI, production deployment, Docker, and cloud. | [Link](https://github.com/pacificpatel165/AI_Systems_Architect_Lab) |
| thesis-iot-monitoring | GitHub | Autonomous closed-loop IoT visual monitoring: LLM agent translates goals into capture schedules over MQTT to STM32U5, analyzes frames with cloud/self-hosted VLMs. Bachelor thesis (Maastricht University). | [Link](https://github.com/WhitehatD/thesis-iot-monitoring) |
| ShuFu | GitHub | Minimal open-source LLM runtime and invocation layer for Windows/Linux, Android, and ESP32. | [Link](https://github.com/yuhaven/ShuFu) |
| Smart-Energy-Management-System-SEMS- | GitHub | AI agent trained with PPO on 100K smart home energy records to minimize electricity costs; integrates with Arduino UNO via pySerial for live LED feedback. | [Link](https://github.com/Lujain32/Smart-Energy-Management-System-SEMS-) |
| YoMo | GitHub | Serverless AI agent framework with geo-distributed edge AI infrastructure. | [Link](https://github.com/yomorun/yomo) |
| Agent.cpp | GitHub | High-performance C++ inference engine for Tiny-MoA on CPU, optimized for multi-agent orchestration. | [Link](https://github.com/muhzars/Agent.cpp) |
| LUNAR-MINT | GitHub | Autonomous, communication-aware multi-agent swarm simulation (rovers + drone) in MuJoCo & ROS 2 with DTN network degradation and distributed edge-AI perception. | [Link](https://github.com/spabhut/LUNAR-MINT) |
| moumantai | GitHub | Self-hosted runtime for personal apps combining reliable code with LLM agents, adaptable across screens. | [Link](https://github.com/xiang-deng/moumantai) |
| espidf-lowfat-skill | GitHub | Portable lowfat ESP-IDF filters and skill package for LLM coding agents. | [Link](https://github.com/npwh/espidf-lowfat-skill) |
| floating-island-environmental-monitoring | GitHub | STM32F407 edge node with sensors, STM32 bird-call CNN node, Raspberry Pi 5 + Hailo-8 NPU vision, and LangGraph LLM agent over local Ollama. | [Link](https://github.com/Pigbr/floating-island-environmental-monitoring) |
| STM32CubeMX-Automator | GitHub | Lets an LLM agent configure STM32CubeMX projects. | [Link](https://github.com/fangdhonghong/STM32CubeMX-Automator) |
| tokymaker-mcp | GitHub | MCP server to author, compile, and flash programs for the Tokymaker ESP32 STEM robotics board from any AI assistant. | [Link](https://github.com/tokylabs/tokymaker-mcp) |
| embed-ai-tool | GitHub | Embedded development skill set for AI coding assistants, covering MCU firmware workflows (Keil/IAR/CMake/PlatformIO), flashing, GDB debugging, serial monitor, Modbus/CAN/VISA protocols, peripheral drivers, and pipeline orchestration. | [Link](https://github.com/LeoKemp223/embed-ai-tool) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| EvoEmbedding: Evolvable Representations for Long-Context Retrieval and Agentic Memory | arXiv | Novel embedding model generating evolvable representations for retrieval, tailored for long-context scenarios with dynamic, sequential information and continuous state tracking. | [Link](https://arxiv.org/abs/2606.21649v1) |
| DataClaw0: Agentic Tailoring Multimodal Data from Raw Streams | arXiv | Proposes a paradigm shift toward Agentic Data Tailoring, actively refining and structuring data from raw multimodal streams. | [Link](https://arxiv.org/abs/2606.21337v1) |
| AutoPass: Evidence-Guided LLM Agents for Compiler Performance Tuning | arXiv | Multi-agent framework for compiler performance tuning using compiler and runtime evidence to guide LLM-generated optimization decisions. | [Link](https://arxiv.org/abs/2606.20373v1) |
| SkillMutator: Benchmarking and Defending Language-and-Code Cross-modal Attacks on LLM Agent Skills | arXiv | Benchmarks and defends against cross-modal attacks on LLM agent skills that pair natural-language specifications with executable scripts. | [Link](https://arxiv.org/abs/2606.14154v1) |
| Library-Aware Doubles and Iterative Repair for LLM-Generated Unit Tests in OpenSIL Firmware | arXiv | Automated unit test authoring workflow for low-level C firmware (openSIL by AMD) using LLM-guided multi-agent repair. | [Link](https://arxiv.org/abs/2606.19725v2) |
| SoK: AI-Augmented Binary Reversing | arXiv | Systematization of knowledge on AI-augmented binary reversing, covering firmware auditing, malware investigation, and agentic AI systems. | [Link](https://arxiv.org/abs/2606.17398v1) |
| Embedded Arena: Iterative Optimization via Hardware Feedback | arXiv | LLM agent autonomously optimizes models for heterogeneous MCUs under hard physical constraints (memory, power, temperature) while preserving accuracy. | [Link](https://arxiv.org/abs/2606.16190v1) |
| Nous: A Predictive World Model for Long-Term Agent Memory | arXiv | Novel agent memory architecture using predictive world models (categorical probability distributions) rather than database records or vector embeddings. | [Link](https://arxiv.org/abs/2606.22030v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Securing the future of AI agents | Google DeepMind Blog | Discusses an AI Control Roadmap combining traditional safeguards and real-time monitoring for securing internal systems. | [Link](https://deepmind.google/blog/securing-the-future-of-ai-agents/) |
| Is it agentic enough? Benchmarking open models on your own tooling | Hugging Face Blog | Guide on benchmarking open models for agentic tasks with custom tooling. | [Link](https://huggingface.co/blog/is-it-agentic-enough) |
| Build real agentic apps using CUGA: two dozen working examples on a lightweight harness | Hugging Face Blog (IBM Research) | Provides two dozen working examples of agentic applications built on the CUGA lightweight harness. | [Link](https://huggingface.co/blog/ibm-research/cuga-apps) |
| From the Hugging Face Hub to robot hardware with Strands Agents and LeRobot | Hugging Face Blog (Amazon) | Demonstrates deploying agents from the Hugging Face Hub to robot hardware using Strands Agents and LeRobot. | [Link](https://huggingface.co/blog/amazon/strands-lerobot-hub-to-hardware) |
| Agentic Resource Discovery: Let agents search | Hugging Face Blog | Introduces agentic resource discovery, enabling agents to search for relevant resources autonomously. | [Link](https://huggingface.co/blog/agentic-resource-discovery-launch) |
| The AI world is getting ‘loopy’ | TechCrunch | Discusses the "loop" paradigm where swarms of agents work continuously in the background. | [Link](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/) |
| 刚刚，豆包2.1发布！Agent自己跑18个小时搞定芯片设计代码 | QbitAI | Reports on Doubao 2.1, an agent that autonomously runs for 18 hours to complete chip design code. | [Link](https://www.qbitai.com/2026/06/437503.html) |

## Resource Update (2026-07-05)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| agent-infrastructure-landscape | Landscape catalog | Comparative catalog of 912 systems × 68 columns covering memory layers, agent frameworks, runtimes, vector stores, knowledge graphs, MCP servers, benchmarks. Searchable with typed edges, lineages, citations. | [GitHub](https://github.com/MrPeppersDev/agent-infrastructure-landscape) |
| openbench | Electronics workbench | Schematic → simulation → firmware in the browser. Open engines (KiCad, ngspice, Renode, PlatformIO) behind one interchange format, driven by AI agents via MCP. | [GitHub](https://github.com/shuvamk/openbench) |
| agent-usage-dashboard | Embedded dashboard | Real-time Claude/Codex/Bedrock usage dashboard on M5Stack CORE S3. | [GitHub](https://github.com/LOUEY233/agent-usage-dashboard) |
| kids-points-v2 | Embedded + LLM | Children's points management tool — natural language bookkeeping (LLM semantic analysis) + SQLite + Feishu Bot + ESP32 LED dashboard (100% AI Agent full-stack authored). | [GitHub](https://github.com/cowboy231/kids-points-v2) |
| capacitor-mobile-claw | On-device agent | Run a full AI agent on mobile with local LLM calls, on-device memory, code execution, and native HTTP support in Capacitor apps. | [GitHub](https://github.com/sernnee/capacitor-mobile-claw) |
| oneclaw | Edge runtime | Lightweight, secure Rust runtime for AI agents on resource-limited edge devices, enabling fast, real-time IoT processing and analytics. | [GitHub](https://github.com/manuel-97/oneclaw) |
| ganglio | Arduino agent bridge | Bridges an AI agent to a physical body via Arduino, turning it from a conversational assistant into an autonomous system capable of acting in the real world. | [GitHub](https://github.com/AlessandroBernini/ganglio) |
| Sysag-AI-Siumbot | Voice + vision robot | Voice-controlled, vision AI robot on a Raspberry Pi 5 powered by Hermes Agent (Gemini 3.1 Flash Lite APIs). | [GitHub](https://github.com/Siumsag/Sysag-AI-Siumbot) |
| Tantalum-IDE | Arduino IDE | Local-first Electron Arduino IDE with board detection, OTA deployment, cloud sync, snapshot recovery, and an agentic AI assistant. | [GitHub](https://github.com/rkvishwa/Tantalum-IDE) |
| AIOS | On-device Android agent | System-level AI agents on Android devices with on-device LLMs, secure tool control, and a conversational shell replacing the launcher. | [GitHub](https://github.com/khaled4123e/AIOS) |
| esp32-harness | Embedded LLM agent | A complete LLM agent in ~200 lines of C++ on an ESP32-S3. | [GitHub](https://github.com/lubluniky/esp32-harness) |
| RisalDash | ESP32 dashboard | Real-time web dashboards for ESP32 / ESP8266 in a few lines of C++ — offline-first AP + captive portal, WebSocket, 26 widgets, i18n, and AI control via MCP. | [GitHub](https://github.com/ziyarago/RisalDash) |
| cardputer-ai | Offline LLM on ESP32 | Fully offline tiny LLM chatbot on the ESP32-S3 Cardputer ADV — 8M params, Q4 weights baked into firmware, ~5 tok/s. | [GitHub](https://github.com/therezor/cardputer-ai) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Copewell | Paper | Multi-agent swarm architecture for equitable mental wellness support, addressing workforce shortages and cost barriers in low- and middle-income countries. | [arXiv](https://arxiv.org/abs/2607.02245v1) |
| Adversarial Pragmatics for AI Safety Evaluation | Paper / Benchmark | Benchmark for instruction conflict, embedded commands, and policy ambiguity in language model safety evaluations, distinguishing capability limits from policy ambiguity and scaffold failure. | [arXiv](https://arxiv.org/abs/2607.01153v1) |
| ProtoPilot | Paper / System | Self-evolving multi-agent system for automated generation and execution of biological protocols, with an expert-grounded benchmark spanning 294 synthetic-biology and molecular protocols. | [arXiv](https://arxiv.org/abs/2606.31763v2) |
| ScarfBench | Benchmark | Benchmarking AI agents for enterprise Java framework migration. | [Hugging Face Blog](https://huggingface.co/blog/ibm-research/scarfbench) |
| SLM, LLM or Agentic AI? Toward Intelligent UAV-Enabled WPT Systems | Paper | Investigates language models for UAV-enabled Wireless Power Transfer systems, comparing lightweight SLM, LLM, and agentic AI approaches under resource-constrained dynamic environments. | [arXiv](https://arxiv.org/abs/2607.00255v1) |
| Overthink-Triggered Slowdown Attacks on LVLM-Based Robotic Systems | Paper | Identifies overthinking-induced slowdown attacks where adversaries deliberately trigger excessive reasoning traces in LVLM-based robotic systems, causing safety issues. | [arXiv](https://arxiv.org/abs/2607.01518v1) |
| Xiaomi-GUI-0 Technical Report | Paper / System | GUI agent built on vision-language models for end-to-end user tasks in real applications, addressing gaps between offline benchmarks and real-world interface layouts and interaction logic. | [arXiv](https://arxiv.org/abs/2606.31410v2) |
| COHORT | Paper / Framework | End-to-end framework automating adversary mitigation in enterprise networks using role-decomposed multi-agent LLM workflows for candidate mitigations. | [arXiv](https://arxiv.org/abs/2606.30479v1) |
| Traceable Fault Diagnosis for Battery Energy Storage Systems | Paper | Retrieval-augmented multi-agent O&M assistant for BESS fault diagnosis, combining alarms, cell-level measurements, device topology, and historical cases. | [arXiv](https://arxiv.org/abs/2607.01992v1) |
| Hardware-Enforced Semantic Coordination for Safety-Critical Real-Time Autonomous Systems | Paper | Proposes hardware-enforced coordination for bounded and verifiable interaction among heterogeneous components in safety-critical autonomous systems. | [arXiv](https://arxiv.org/abs/2607.02376v1) |
| (A)I Sees What You Don't | Paper | Explores new attack surfaces in third-party mobile agents powered by VLMs, where benign interfaces become exploitable through screenshot-based perception and VLM reasoning. | [arXiv](https://arxiv.org/abs/2607.00333v1) |
| SHACR | Paper / Framework | Graph-augmented semi-autonomous framework for multi-class conflict resolution in smart home IoT automation, detecting hidden cross-rule interactions via shared devices and physical topology. | [arXiv](https://arxiv.org/abs/2606.22312v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ReActAgent 使用指南 | Tutorial | Guide to building production-grade AI agents with Solon AI 4.0's ReActAgent — reasoning, tool use, and feedback-based adjustment. | [oschina.net](https://www.oschina.net/news/471482) |
| How agents are transforming work | Research summary | OpenAI research paper showing how AI agents enable longer, more complex tasks and expand productivity across roles. | [OpenAI](https://openai.com/index/how-agents-are-transforming-work) |
| Skill engineering and the case against one-shot AI design | Interview / Article | Paul Bakaus on Impeccable, human judgment in a "loopmaxxing" era, and why agents still need people to steer them. | [Latent Space](https://www.latent.space/p/skill-engineering-design) |
| How Cursor deploys AI inside the enterprise | Interview / Article | Cursor's Pauline Brunet on how Forward Deployed Engineers help organizations implement agents as software factories. | [Latent Space](https://www.latent.space/p/cursor-forward-deployed-engineers) |
| I tested Claude Code, Codex, and Antigravity on a real electronics project | Media test | Hands-on comparison of Claude Code, Codex, and Antigravity on a real electronics project — only one completed the task. | [MakeUseOf](https://news.google.com/rss/articles/CBMinAFBVV95cUxPY3V3b1RkVTlpdVNVNXhaSFlUOUhmMGcxT1dxUHlzamxxTzRyY2dUN0FGdWhKZ3FkZElvcUxqVURCQjFGOWlFNEpvMldPNUZiQkdYaUs5RGNtSU9MWTJOeUY1UWd4YUFYNjYtbm8tS3FsWUU5dGRqaHN5VkFMQnBDS3pGSWR2Mkx0MGQzQUdBTDRoQUxQRTRYMDFja3Q?oc=5) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| klarlabs-studio/mnemos | Go library | Self-hosted memory + evidence layer for AI agents; embeddable, MCP/HTTP/CLI, evidence-backed claims, bitemporal recall, JSONL audit, SLSA L3 provenance | [GitHub](https://github.com/klarlabs-studio/mnemos) |
| ionalpha/flynn | Go binary | Secure, self-improving agent OS; sandboxed actions, tamper-evident records, embeddable in own systems | [GitHub](https://github.com/ionalpha/flynn) |
| AstroiLL/esp32-ai-agents | Firmware | ESP32-S3 AI edge agent with MicroPython/Arduino firmware, MQTT control, camera support | [GitHub](https://github.com/AstroiLL/esp32-ai-agents) |
| aaryangupta/agentic-iot-local-llm | Firmware | Explainable local-first IoT control agent using ESP32, MQTT, and Ollama | [GitHub](https://github.com/aaryangupta/agentic-iot-local-llm) |
| ThAce-code/caresense_pro | Firmware | ESP32-S3 active AI home care system using Wi-Fi CSI sensing, edge inference, cloud LLM agent | [GitHub](https://github.com/ThAce-code/caresense_pro) |
| Kavi-Cs/aiot-agentic-digital-twin | Platform | Industrial AIoT ecosystem combining TinyML edge computing (RS-485/Modbus) with agentic LLM digital twin for prescriptive maintenance | [GitHub](https://github.com/Kavi-Cs/aiot-agentic-digital-twin) |
| Narcissus0520/AI-Outdoor-Agent-Platform-Based-on-STM32MP157-STM32F407ZG | Platform | Embedded Linux GNSS sensor platform for outdoor AI agent development with STM32MP157 and STM32F407 | [GitHub](https://github.com/Narcissus0520/AI-Outdoor-Agent-Platform-Based-on-STM32MP157-STM32F407ZG) |
| ByTaymur/embedded-software-skills | Tooling | AI skills, slash commands & agents for embedded software / STM32 firmware development | [GitHub](https://github.com/ByTaymur/embedded-software-skills) |
| SamuelAlexander/clawrophyll | Hardware | Houseplant running its own AI agent on an Arduino UNO Q | [GitHub](https://github.com/SamuelAlexander/clawrophyll) |
| mm-black65/AI-Powered-IoT-Cybersecurity-Threat-Detection-System | Platform | IoT security platform monitoring ESP32 telemetry, ML-based attack detection, SHAP explainability, LLM-powered RAG assistant | [GitHub](https://github.com/mm-black65/AI-Powered-IoT-Cybersecurity-Threat-Detection-System) |
| PeterkoCZ91/DFR1154-ai-camera | Firmware | Self-hosted AI security camera firmware for DFRobot FireBeetle 2 ESP32-S3; on-device person detection, MJPEG/RTSP, Home Assistant MQTT, Telegram alerts | [GitHub](https://github.com/PeterkoCZ91/DFR1154-ai-camera) |
| thingino/teacup-neo | Hardware | Universal Ingenic SoC development platform with ESP32-S3 BMC for autonomous LLM-driven development | [GitHub](https://github.com/thingino/teacup-neo) |
| Xinyuan-LilyGO/lilygo-skills | Tooling | Skill runtime for AI-assisted LilyGO board development | [GitHub](https://github.com/Xinyuan-LilyGO/lilygo-skills) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Learning social norms enhances compatibility in dynamic human-AI coordination | Paper | Investigates how LLM agents can learn implicit social norms to improve coordination with humans in dynamic interactions | [arXiv](https://arxiv.org/abs/2607.07021v1) |
| Reliable and Developer-Aligned Evaluation of Agents for Software Engineering | Paper | Comprehensive evaluation framework for autonomous software engineering agents embedded in collaborative development environments | [arXiv](https://arxiv.org/abs/2607.06713v1) |
| TopoBrick: Agentic Topology Sampling of Exogenous Variables for Zero-Shot Building IoT Forecasting | Paper | Training-free framework using building knowledge graphs and agentic topology sampling for zero-shot IoT forecasting | [arXiv](https://arxiv.org/abs/2607.06349v1) |
| TRACE: A Two-Channel Robust Attribution Watermark via Complementary Embeddings for LLM-Agent Trajectories | Paper | Watermarking method for LLM agent trajectory logs that survives adversary with full read/write access | [arXiv](https://arxiv.org/abs/2607.08400v1) |
| Detecting Architectural Drift in Safety-Critical Firmware through Runtime Trace Analysis | Paper | Runtime-informed methodology for detecting architectural drift in ISO 26262-compliant firmware using hardware-assisted execution traces | [arXiv](https://arxiv.org/abs/2607.03135v1) |
| Enabling Cloud-Level Accuracy in Edge AI through IoT Data Preprocessing | Paper | Investigates prompt-side preprocessing to improve accuracy-latency trade-off of local LLMs for IoT sensor data interpretation | [arXiv](https://arxiv.org/abs/2606.22496v1) |
| Cascaded Multi-Granularity Pruning for On-Device LLM Inference in Industrial IoT | Paper | Structured pruning framework for deploying LLMs on IIoT edge devices with coarse-to-fine removal of layers, heads, and channels | [arXiv](https://arxiv.org/abs/2606.26861v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AI编程工作流实战地图：嵌入式到智能体的10大能力节点 | Article | Practical workflow map covering 10 capability nodes from embedded to agent | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTE5mWVRXemlVd1RPTXAwMHBDQ3NkY2I3RF9kdzNPcU9VWFpDVzZYcnZOcE5ValYxLVJvbmE5ZXFxbnM2eWEtVkNjTWpES1FhcG1qaHBwcFYzbFhiaGI5emh0bVV3?oc=5) |
| agency-agents-zh/AGENT-LIST.md | List | Curated list of AI agents in Chinese | [GitHub](https://news.google.com/rss/articles/CBMiekFVX3lxTFBIUHZoQ0VXRjExejR5S3dfRkJkc0RKeVgwVmFyaVB3dVdKVVdKNzFOelF6MGNKaXJBS3JkbTMxbGMxWTVuYkt3UjB1bVFDRzQ4VHUyRVEtT3R3b1JfcE0tTnFMX05oMmRYM0ZQQ2dPbm5PT0R1ekZDOUJn?oc=5) |
| How Claude Code is used in practice | Article | Anthropic's practical guide on Claude Code usage patterns | [Anthropic](https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9lM0p2cGtZWWJ4aE9Ocy05NEU1SXFraWl1V1gwNmxwdGpMWkg3N2Z3WGF6eFFMZXlWMGZEeGZZVGxmcGJyVlBSLXlCUXhma0lWRm1SNllTSVlmNXlTMFEzLTZIMFIwSDA?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Lyzr AI agent fundraising | Startup | AI agent startup used its own agent to raise $100M round | [TechCrunch](https://techcrunch.com/2026/07/09/an-ai-agent-startup-just-let-its-agent-run-its-100-million-fundraise/) |
| Rethinking cloud operations with agentic observability | Blog | Microsoft on AI-driven and autonomous agents transforming cloud operations | [Microsoft Blog](https://blogs.microsoft.com/blog/2026/06/23/rethinking-cloud-operations-with-agentic-observability/) |
| Data for Agents | Blog | NVIDIA's open data initiative for AI agents | [Hugging Face](https://huggingface.co/blog/nvidia/open-data-for-agents) |
| Why AI Infrastructure must evolve for Agent Experience | Podcast | Modal CTO on building the new agent cloud | [Latent Space](https://www.latent.space/p/modal2026) |
| Vercel's Andrew Qu on why agents are a new kind of software | Podcast | Vercel's agent framework eve and skills/sandboxes for agent-readable websites | [Latent Space](https://www.latent.space/p/vercel-agents-new-software) |
| Airbnb Kubernetes dynamic configuration Sidecar Sitar-agent | Architecture | Airbnb's architecture for dynamic configuration sidecar agent | [InfoQ](https://www.infoq.cn/article/fO5byVPuZwwlBPosijBV?utm_source=rss&utm_medium=article) |
| 破解碳核算"黑盒"难题：碳阻迹发布可追溯可复核的碳管理Agent | Product | Traceable and verifiable carbon management agent | [中国日报网](https://news.google.com/rss/articles/CBMifEFVX3lxTE5hbGEwMER2OGE0ZElLbHRDU21XRk5OOUQ3eU11TjNTSV9ad2NjeWUyeHlDZTlEOUM5ZjR0S1Jab2t4Y3ZYRjExSFNOVThzU3RUV1c2Q2FjVlVCSTR3NTRLOHRaZldyT0dXWVJzcE5FSDhDQ0hKX1lBc3RqTFQ?oc=5) |
