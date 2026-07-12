# Chip Design: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is a curated index of AI Agent resources for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in subsequent updates. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (0+10)

This section is divided into two categories: `Tutorials / Cases 0 items` and `Projects / Papers 10 items`. Each entry includes the name, type, brief description, and original link for quick assessment of whether it is worth in-depth reading.

### Tutorials / Cases 0 items

| # | Name | Type | Purpose/Abstract | Link |
|---:|---|---|---|---|

### Projects / Papers 10 items

| # | Name | Type | Purpose/Abstract | Link |
|---:|---|---|---|---|
| 1 | ChipNeMo | Paper | NVIDIA's ChipNeMo paper explores the application of large language models to the EDA toolchain, involving auxiliary scenarios for RTL generation and verification. It is a representative industrial work on applying LLMs in the chip design domain. | https://arxiv.org/abs/2311.00176 |
| 2 | VerilogEval | Paper | VerilogEval is a standardized evaluation benchmark for Verilog code generation, defining task sets and evaluation metrics. It provides a reproducible reference for measuring LLM generation capabilities in hardware description languages. | https://arxiv.org/abs/2309.07544 |
| 3 | ChipBench | Paper | A comprehensive evaluation framework covering multiple EDA tasks in chip design, offering performance comparisons of models in real design flows to assess the practical effectiveness of AI-assisted tools. | https://arxiv.org/abs/2601.21448 |
| 4 | MAGE | Paper | MAGE proposes a multi-agent generative engine that automates the chip design flow through collaborative AI. It demonstrates how agent division of labor can improve design efficiency, and its workflow design is worth attention. | https://arxiv.org/abs/2412.07822 |
| 5 | ChatEDA | Paper | ChatEDA integrates large language models into the EDA flow, forming a conversational tool that allows users to drive chip design tasks through natural language, lowering the operational barrier of traditional tools. | https://arxiv.org/abs/2308.10204 |
| 6 | AutoEDA | Paper | AutoEDA focuses on using AI to optimize design space search, exploring automated EDA flows. It provides new optimization ideas and experimental directions for researchers in chip design automation. | https://arxiv.org/abs/2508.01012 |
| 7 | HiVeGen | Paper | HiVeGen adopts a hierarchical structure decomposition method to generate Verilog code, aiming to improve the code quality of complex hardware modules. It offers a decomposable strategy that can be referenced for automatically generating large circuits. | https://arxiv.org/abs/2412.05393 |
| 8 | VeriOpt | Paper | A chip design framework that integrates functional verification with design optimization, ensuring correctness during the generation process. It is suitable for scenarios with strict requirements on design reliability. | https://arxiv.org/abs/2507.14776 |
| 9 | VeriGRAG | Paper | VeriGRAG performs Verilog verification based on retrieval-augmented generation technology, utilizing external knowledge bases to improve code accuracy. Its hybrid architecture provides a new paradigm for verification tool development. | https://arxiv.org/abs/2510.15914 |
| 10 | VeriContaminated | Paper | VeriContaminated systematically analyzes the data contamination problem of LLMs in Verilog tasks, proposing a rigorous method for evaluating the true capabilities of models. It holds significant reference value for evaluation researchers. | https://arxiv.org/abs/2503.13572 |

## Resource Update (2026-06-13)

### Papers

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| RTL-BenchMT: Dynamic Maintenance of RTL Generation Benchmark Through Agent-Assisted Analysis and Revision | Paper | Agentic framework for dynamically maintaining RTL generation benchmarks, addressing flawed cases and overfitting. | [arXiv](https://arxiv.org/abs/2605.15537v1) |
| CPPL: A Circuit Prompt Programming Language | Paper | A prompt language enabling LLMs to emit valid compiler IR (MLIR/CIRCT) for hardware design flows. | [arXiv](https://arxiv.org/abs/2605.17892v1) |
| Trace2Skill: Verifier-Guided Skill Evolution for Long-Context EDA Agents | Paper | Test-time scaling framework improving hardware agents without fine-tuning, using verifier-guided skill evolution. | [arXiv](https://arxiv.org/abs/2605.21810v1) |
| CASS-RTL: Correctness-Aware Subspace Steering for RTL Generation with LLMs | Paper | Subspace steering method to improve cycle accuracy and reduce logical errors in LLM-based RTL generation. | [arXiv](https://arxiv.org/abs/2606.05680v1) |
| A3D: Agentic AI flow for autonomous Accelerator Design | Paper | Autonomous agentic flow for designing hardware accelerators using HLS, micro-architecture, and EDA tools. | [arXiv](https://arxiv.org/abs/2605.15237v1) |
| Alpha-RTL: Test-Time Training for RTL Hardware Optimization | Paper | Reinforcement learning at test time to adapt LLM policy to executable EDA feedback for specific RTL designs. | [arXiv](https://arxiv.org/abs/2606.05253v1) |
| RTL-BenchLS: A Large-Scale Benchmark for RTL Reasoning and Generation with Large Language Models | Paper | Large-scale benchmark for RTL reasoning and generation, addressing saturation of existing benchmarks. | [arXiv](https://arxiv.org/abs/2606.08976v1) |
| Autonomous agentic design for photonics | Paper | Agent-driven approach for photonic device design using LLMs with simulation and acceptance criteria. | [arXiv](https://arxiv.org/abs/2606.00915v1) |
| Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver Synthesis | Paper | Tree-search agent framework with cross-branch knowledge transfer for combinatorial optimization solver synthesis. | [arXiv](https://arxiv.org/abs/2605.17539v2) |
| OpenRTLSet: A Fully Open-Source Dataset for Large Language Model-based Verilog Module Design | Paper | Largest fully open-source Verilog dataset (131k+ modules) with paired natural language descriptions. | [arXiv](https://arxiv.org/abs/2606.10285v1) |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ChipMATE | GitHub | Multi-agent inference framework for RTL generation: Verilog agent and Python reference-model agent cross-verify outputs without golden testbench. | [GitHub](https://github.com/zhongkaiyu/ChipMATE) |
| siliconcrew | GitHub | Autonomous LLM agent for hardware design — natural language to GDSII via Verilog generation, simulation, and OpenROAD synthesis. | [GitHub](https://github.com/naman-ranka/siliconcrew) |
| vlsi-pd-staff-engineer | GitHub | Multi-agent framework for RTL-to-GDSII physical design using Claude Code — 9 specialized agents, stage-gate verification, and forensic ECO debugging. | [GitHub](https://github.com/RAMA-L7/vlsi-pd-staff-engineer) |
| ForgeLab | GitHub | JSON IR + MCP server enabling AI agents to create KiCad, FreeCAD & glTF files — "LLVM of design." | [GitHub](https://github.com/andresparraarze/ForgeLab) |
| universal-netlist | GitHub | Give AI agents the power to read Cadence/Altium designs. | [GitHub](https://github.com/IntelligentElectron/universal-netlist) |
| eda-agents | GitHub | AI/LLM-assisted circuit design using open-source tools. | [GitHub](https://github.com/Mauricio-xx/eda-agents) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|

## Resource Update (2026-06-14)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| bjwanneng/veriflow-cc | GitHub | VeriFlow-CC: Claude Code-driven RTL design pipeline automating Chip-on-Chat from architecture to synthesis (iVerilog/Yosys) with sub-agent nesting for code gen and behavioral verification. | [Link](https://github.com/bjwanneng/veriflow-cc) |
| advaitParanjpe/agentic-rtl-security | GitHub | Agentic RTL security discovery benchmark comparing directed tests, random fuzzing, and LLM-guided MMIO trace generation on a seeded SystemVerilog mini-SoC. | [Link](https://github.com/advaitParanjpe/agentic-rtl-security) |
| seanoc5/claude-code-for-verilog | GitHub | Teaching sandbox: closed-loop agentic workflow on a small SystemVerilog UART receiver for hardware engineers transitioning from chat-LLM to Claude Code. | [Link](https://github.com/seanoc5/claude-code-for-verilog) |
| Haden-Min/oh_my_rtl_claw | GitHub | Multi-agent AI system for converting natural language or reference software into Verilog RTL, testbenches, docs, and FPGA onboarding assets. | [Link](https://github.com/Haden-Min/oh_my_rtl_claw) |
| qhy991/Awesome-LLM-Circuit-Agent | GitHub | Curated repository of academic works on LLM-based RTL generation and analog circuit generation. | [Link](https://github.com/qhy991/Awesome-LLM-Circuit-Agent) |
| mak372/Verilog-Agent-Format | GitHub | LLM-based Verilog code converter using LoRA fine-tuning and GRPO with Yosys formal verification as reward signal; 95% functional equivalence pass rate. | [Link](https://github.com/mak372/Verilog-Agent-Format) |
| wuhannus/lunarch | GitHub | Lunahan Architecture: open-source RISC-V cores from Python to GDS, AI-assisted agile design for agentic AI chips (v1 baseline, v1.1 SRAM, v2 Orion). | [Link](https://github.com/wuhannus/lunarch) |
| harry37725/Verilog-Fault-Injection-Auto-Hardening-Workflow | GitHub | n8n workflow for automated hardware security auditing — single-bit fault injection on Verilog RTL, AI-driven TMR hardening, validation, and executive report generation. | [Link](https://github.com/harry37725/Verilog-Fault-Injection-Auto-Hardening-Workflow) |
| brkbtmz/llm-riscv | GitHub | Prompts, RTL designs, verification files, and FPGA results for LLM-assisted RV32I/RV32IM/RV32IMC processor generation. | [Link](https://github.com/brkbtmz/llm-riscv) |
| Sawaiz-zip/ResearchProject | GitHub | LLM-Driven Verilog Testbench Generation with Early Error Localization — LangGraph pipeline generating HDL testbenches from natural language with Pyverilog static analysis and automated repair. | [Link](https://github.com/Sawaiz-zip/ResearchProject) |
| Yuexi66557/MLCAD-timing-opt | GitHub | Design-aware timing optimization using OpenROAD + Python + LLM. | [Link](https://github.com/Yuexi66557/MLCAD-timing-opt) |
| The-OpenROAD-Project/ORAssistant | GitHub | OpenROAD's Chatbot Assistant for EDA flow interaction. | [Link](https://github.com/The-OpenROAD-Project/ORAssistant) |
| Fuadulislam10/NeuroRV-Edge-AI | GitHub | NeuroRV Edge: open-source heterogeneous SoC combining RISC-V RV32IM CPU with 16-lane vector AI accelerator for ultra-low-power edge inference. | [Link](https://github.com/Fuadulislam10/NeuroRV-Edge-AI) |
| vargasjr-dev/durium | GitHub | Space-native AI inference chip designed from first principles for orbital compute. | [Link](https://github.com/vargasjr-dev/durium) |
| ai-hpc/ai-hardware-engineer-roadmap | GitHub | Roadmap for mastering AI inference, agent harness systems, and hardware engineering to design a physical AI chip. | [Link](https://github.com/ai-hpc/ai-hardware-engineer-roadmap) |
| pccxai/pccx-v003 | GitHub | PCCX v003 IP-core planning package for LLM, Vision, Voice, and next-generation architecture tracks. | [Link](https://github.com/pccxai/pccx-v003) |
| pandeybuilds/chip-journey | GitHub | From zero to AI-hardware engineer — built in public covering digital design, computer architecture, with RF/optical edge. | [Link](https://github.com/pandeybuilds/chip-journey) |
| dhruvmittal41/chip-design-roadmap | GitHub | 60-day intensive study log of digital hardware design, computer architecture, ASIC flow, formal verification, and AI hardware. | [Link](https://github.com/dhruvmittal41/chip-design-roadmap) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Structured Testbench Generation for LLM-Driven HDL Design and Verification-Oriented Data Curation | arXiv | STG framework for automated testbench generation addressing token cost, reproducibility, and coverage gaps in LLM-driven RTL workflows. | [Link](https://arxiv.org/abs/2606.12983v1) |
| LongRTL: Graph-Similarity-Guided LLM-driven Long Context RTL Optimization | arXiv | Scalable LLM-based RTL optimization framework with three collaborative agents (Partition, Optimization, Verification) for long, entangled designs. | [Link](https://arxiv.org/abs/2606.08944v1) |
| Verilog-Evolve: Feedback-Driven and Skill-Evolving Verilog Generation | arXiv | Feedback-driven framework for versioned Verilog refinement and cross-session skill evolution targeting correct, synthesizable, timing-conscious RTL. | [Link](https://arxiv.org/abs/2605.26498v1) |
| ROSUM-MCTS: Monte Carlo Tree Search-Inspired HDL Code Summarization with Structural Rewards | arXiv | LLM-guided approach using MCTS-inspired structured exploration and reinforcement-driven optimization for VHDL and Verilog summarization. | [Link](https://arxiv.org/abs/2606.07925v1) |
| PALUTE: Processing-In-Memory Acceleration via Lookup Table for Edge LLM Inference | arXiv | LUT-based Processing-In-Memory accelerator for edge LLM inference, reducing dequantization and nonlinear operator overhead. | [Link](https://arxiv.org/abs/2606.08891v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ORAssistant | Tool | OpenROAD's chatbot assistant for EDA flow interaction and guidance. | [Link](https://github.com/The-OpenROAD-Project/ORAssistant) |

## Resource Update (2026-06-23)

### Papers

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| PDAGENT-BENCH: Characterizing, Grounding, and Architecting LLM Agents for VLSI Physical Design | Benchmark / Paper | Standardized benchmark for evaluating LLM agents on VLSI physical design workflows with multi-stage optimization and EDA tool interaction. | [arXiv](https://arxiv.org/abs/2606.17253v1) |
| HierSVA: A Data Synthesis Pipeline, Dataset, and Benchmark for LLM-Driven Hierarchical Hardware Formal Verification | Dataset / Paper | Pipeline, dataset (342 modules), and benchmark for LLM-driven hierarchical SystemVerilog Assertion generation and formal verification. | [arXiv](https://arxiv.org/abs/2606.13706v1) |
| Interpretable and Verifiable Hardware Generation with LLM-Driven Stepwise Refinement | Paper | Framework combining LLM creativity with stepwise refinement for explainable, verifiable RTL generation. | [arXiv](https://arxiv.org/abs/2606.19387v1) |
| Agentic Electronic Design Automation: A Handoff Perspective | Paper | Analyzes LLM agent handoffs across multi-stage EDA flows, covering tool invocation, state transfer, and cross-stage requirements. | [arXiv](https://arxiv.org/abs/2606.19795v1) |
| LLM4RTL: Tool-Assisted LLM for RTL Generation | Paper | Tool-assisted LLM approach for open Verilog/RTL code generation with high-quality training samples. | [arXiv](https://arxiv.org/abs/2606.15500v1) |
| RTLScout: Joint Agentic Code and Synthesis Optimization for Efficient Digital Circuits | Paper | Autonomous system combining LLM agentic design with synthesis optimization and PPA feedback from Yosys/OpenROAD. | [arXiv](https://arxiv.org/abs/2606.06530v2) |
| VHDLSuite: Unified Pipeline for LLM VHDL Generation with Data Synthesis and Evaluation | Paper | Pipeline and evaluation framework for LLM-based VHDL generation, addressing gaps beyond Verilog. | [arXiv](https://arxiv.org/abs/2606.13735v1) |
| StepPRM-RTL: Stepwise Process-Reward Guided LLM Fine-Tuning for Enhanced RTL Synthesis | Paper | Framework combining stepwise trajectory modeling, process-reward modeling, and retrieval-augmented fine-tuning for RTL code generation. | [arXiv](https://arxiv.org/abs/2606.04246v1) |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AI-Driven-RTL-Generation | Multi-agent framework | Closed-loop multi-agent framework with RAG and MCP to compile hardware specs into synthesizable SystemVerilog RTL, benchmarked on a RISC-V CPU core. | [GitHub](https://github.com/thanghuynhwinno123-svg/AI-Driven-RTL-Generation) |
| VeriForge | AI agent sandbox | Sandbox for automatic Verilog RTL generation, debugging, and validation; exports agent trajectories as SFT/DPO training datasets. | [GitHub](https://github.com/JannieUwU/VeriForge) |
| ai-chip-design-platform | Multi-agent framework | Multi-agent RISC-V verification and test-generation framework for AI-assisted RTL, ISS, compliance, coverage, and debug workflows. | [GitHub](https://github.com/HUNT-001/ai-chip-design-platform) |
| rtl_agent | Agentic pipeline | Agentic RTL generation pipeline: text/PDF/audio/video → Spec IR → Two-Oracle agent → verified SystemVerilog (GLSVLSI 2026). | [GitHub](https://github.com/srijavuppala/rtl_agent) |
| fragua | AI-native PCB design tool | AI-native PCB design tool: agent designs board from schematic to routing to fab-ready zip in one loop. | [GitHub](https://github.com/mentasystems/fragua) |
| digital-chip-design-agents | Agent framework | Digital HDL Design Full-stack Agents (154 stars). | [GitHub](https://github.com/chuanseng-ng/digital-chip-design-agents) |
| rtl_lm_verification_assistant | Research prototype | Laptop-scale research prototype for AI-assisted RTL code generation and verification-aware evaluation. | [GitHub](https://github.com/hjzhang-ops/rtl_lm_verification_assistant) |
| Design-Verification-AI-Tool-DEV | GUI verification platform | GUI-based verification platform automating UVM environment and RTL generation with drag-and-drop architecture design. | [GitHub](https://github.com/Karan-nevage/Design-Verification-AI-Tool-DEV) |
| verilog-tb-pipeline | LangGraph pipeline | LangGraph pipeline for LLM-driven Verilog testbench generation with Pyverilog-based early error localization. | [GitHub](https://github.com/Sawaiz-zip/verilog-tb-pipeline) |

## Resource Update (2026-07-05)

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| CHIA | Paper | Open-source framework for principled, agentic AI-driven hardware/software co-design research across architecture, systems, compilers, and VLSI. | https://arxiv.org/abs/2606.27350v2 |
| HORIZON | Paper | Self-evolving agent framework treating hardware design as repository-level code evolution; uses a Markdown harness compiled into a project pack with domain knowledge, evaluator, acceptance predicate, and git/runtime policy. | https://arxiv.org/abs/2606.28279v1 |
| VeriChat | Paper | Agentic conversational AI assistant for hardware security verification, addressing hallucination risks of general-purpose chatbots by providing structured, security-focused guidance. | https://arxiv.org/abs/2607.01668v1 |
| PDAGENT-BENCH | Benchmark | Standardized benchmark for evaluating LLM/VLM agents on VLSI physical design tasks requiring multi-stage optimization, EDA tool interaction, and constraint handling. | https://arxiv.org/abs/2606.17253v2 |
| SafeGen | Paper | LLM-driven, formal-verification-assisted framework for functional-safety-oriented fault criticality assessment in automotive chip design. | https://arxiv.org/abs/2606.25296v1 |
| VeriPilot | Paper | LLM-powered Verilog debugging framework that traces long dependency chains beyond end-to-end compiler feedback to address complex bugs. | https://arxiv.org/abs/2606.23759v1 |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| partreel | Registry | Open, no-login KiCad parts registry for humans & AI agents — verified footprints, symbols & 3D models (STEP/GLB) with datasheet provenance, static JSON API, and MCP server. | https://github.com/mingyo186/partreel |
| openbench | Workbench | Open workbench for electronics — schematic → simulation → firmware in the browser, using KiCad, ngspice, Renode, PlatformIO behind one interchange format, driven by AI agents via MCP. | https://github.com/shuvamk/openbench |
| agent-verify-skill | Verification Framework | AI Agent assertion-based verification framework inspired by chip design verification methodology — 7 commands, 6 assertion types, 3-tier LLM judge. | https://github.com/pxf0797/agent-verify-skill |
| ICRTL-Benchmark | Benchmark | Industrial-level RTL design challenges for evaluating PPA optimization, code generation, and LLM applications in EDA. | https://github.com/weiber2002/ICRTL-Benchmark |
| mini-agentic-eda | EDA Flow | Mini agentic EDA flow for LLM-generated Verilog, simulation, synthesis, repair, and experiment reporting. | https://github.com/yuhongtanghyh-create/mini-agentic-eda |
| ClaudeVerilogEval | Evaluation | Evaluation of Claude-family LLM deployment modes for RISC-V RTL co-design, measuring token cost, generation time, and multi-design statistical analysis on the VerilogEval dataset. | https://github.com/gatlinggunhuy/ClaudeVerilogEval |
| digital-chip-design-agents | Agent Stack | Digital HDL Design Full-stack Agents — a curated collection of agent-based approaches for end-to-end digital chip design. | https://github.com/chuanseng-ng/digital-chip-design-agents |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| HORIZON Hits 100% on Chip Design Benchmarks | Video | YouTube coverage of the HORIZON agent achieving 100% on chip design benchmarks without human intervention. | https://www.youtube.com/watch?v=related (see source) |
| Doubao-Seed-2.1 RTL Full Flow | Article | Report on Doubao-Seed-2.1 completing a full chip design RTL code flow in 18 hours. | https://zhuanlan.zhihu.com/p/related (see source) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Cadence Autonomous AI Design Engineer | Product | Cadence's autonomous AI agent for accelerating chip verification and development, positioned as a "super agent" for semiconductor productivity. | https://www.eetasia.com/related (see source) |
| Self-developed Agentic AI EDA Platform | Product | A proprietary agentic AI EDA platform aimed at advancing chip design into a new stage of automation. | https://content.foshanplus.com/related (see source) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| xenon | GitHub | Agentic silicon compiler: turns Markdown chip spec into verified, place-and-routed silicon on OSS EDA stack, orchestrated by Claude Code. Checkpointed step pipeline + MCP for agentic IDEs. | [GitHub](https://github.com/Kiransekar/xenon) |
| verilog-code-agent | GitHub | AI-powered Verilog hardware design agent with Monaco editor, iVerilog simulation, RTL viewer, FPGA synthesis, AI code generation. | [GitHub](https://github.com/ghdokkk/verilog-code-agent) |
| duck-rtl | GitHub | Deterministic RTL build and verify loop for AI coding agents. Enables LLMs to write, test, and extract state machines from Verilog with low hallucinations. | [GitHub](https://github.com/oniondas/duck-rtl) |
| agent-r2g | GitHub | Agent skill R2G. Initial version for leveraging OpenRoad. | [GitHub](https://github.com/ShenShan123/agent-r2g) |
| RTLCopilot | GitHub | Open source AI-assisted RTL design tool. Canvas designer, AI circuit generation, simulation, and full RTL-to-GDS flow. | [GitHub](https://github.com/rtlcopilot/RTLCopilot) |
| ContextOS | GitHub | Unified context intelligence layer for AI agents with seamless integration and full capability in a single Python package. | [GitHub](https://github.com/armmammothermography417/ContextOS) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| PDAGENT-BENCH | arXiv paper | Benchmark for characterizing, grounding, and architecting LLM/VLM agents for VLSI physical design. | [arXiv](https://arxiv.org/abs/2606.17253v4) |
| OmniLayout | arXiv paper | Schematic-coupled multimodal benchmark for constraint-aware geometric reasoning in PCB layout. | [arXiv](https://arxiv.org/abs/2607.03261v2) |
| PCBWorld | arXiv paper | Open-source engine-grounded PCB routing environment built on KiCad EDA engine for agentic PCB design automation. | [arXiv](https://arxiv.org/abs/2607.05915v1) |
| Evidence-Driven LLM Agent for C-to-Synthesizable-C Conversion | arXiv paper | LLM agent for converting C to HLS-C and verification across full HLS toolchain pipeline. | [arXiv](https://arxiv.org/abs/2606.28409v1) |
| AgenticPD | arXiv paper | Stage-aware agentic framework for physical design QoR optimization. | [arXiv](https://arxiv.org/abs/2607.04758v2) |
| MultModLM | arXiv paper | Multi-modal benchmark for LLM-based hardware schematic generation from RTL descriptions. | [arXiv](https://arxiv.org/abs/2606.27666v1) |
| LLM Assisted Verification Assertion Generation | arXiv paper | Survey of challenges and future directions for LLM-assisted SystemVerilog Assertion generation. | [arXiv](https://arxiv.org/abs/2607.07444v1) |
| Closing the Loop on LLM-Generated RTL Assertions | arXiv paper | Lightweight, open-source framework combining mutation-guided refinement with formal verification for LLM-generated assertions. | [arXiv](https://arxiv.org/abs/2606.21451v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| NVIDIA HORIZON Explained | YouTube | Explanation of NVIDIA HORIZON, an AI agent that designs hardware automatically. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9tY3B3NmhTb3J5LTNGMnZXUFpkMU5fSFh1NGZINmI4UXZpblB2UG5aTUF2anJqUVZ0YnFva1RIRUVZa2tjcWxISUN2aUx2UHVTQ1htb0xB?oc=5) |
| AVerify: An AI Agent That Writes, Runs & Repairs Cocotb Testbenches | YouTube | Demonstration of AVerify, an AI agent for Cocotb testbench generation and repair. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE03U1Zib1hMbWtZbU94NXNfaTk3VlcxbGp2d2k4MlFpeUNidFEwenNKZkl5dVhvREgxcHJSTndPeHcwVWI0MXJHejdYMEVhUll4VVBWZW13?oc=5) |
| HWE-Bench | Blog post | First benchmark for LLM agent evaluation on real hardware bug fixing. | [blog.csdn.net](https://news.google.com/rss/articles/CBMicEFVX3lxTFBlQk44dEFlRFNaRERaMzN6VFpkM1RQMUtiRDNZbFQ1NGF6UkNHY0U4Y1o0Z0xoR29XUjM1YTd6eEY0aXR3ZjRsZk44b3Z6cUtsck01Q1gxR0EzQUlxNlU2UzYwdHYtSDhZZEt3cVdQUVI?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| The Architecture Decisions Behind A Production-Ready EDA AI Agent | Article | Semiconductor Engineering article on architecture decisions for production-ready EDA AI agents. | [Semiconductor Engineering](https://news.google.com/rss/articles/CBMimgFBVV95cUxNRW13dTd1VFJ6WDJEWlNVTGEtbmtUZlNyU0lzQUM4QWRjajZjc0JHOUx5NG9GMXF0R25JYVNvSFpPR3dYTjRTT0hWQ3k5cWlXZzJmNVdSVHBaRG1DMWVCaVlYYk4yU3JlbTVqLXFVb0dWMFhMS1JMUVdoRkZBRmFqd05sT2VsUVJMaklKNm1WZ2R1RVBkQzA4Vi1R?oc=5) |
| ChipStack AI Super Agent | Article | Embedded Week insights on ChipStack AI Super Agent for building Simulink models with agentic AI. | [embedded.com](https://news.google.com/rss/articles/CBMixgFBVV95cUxPNlNLdDNDZ2hWV1Q4ZmpPN3RVb25UZm1TTkF3SFpjUThyT0xFMXdkZU1QSVhXX21FaVREWTU2LUZLTE5Mc2p6X1NnYXpRaFNjM2hxcEpkSmkySF9RX2dNaDdFLXhDUU9NNTN6d3dtcUlKMkJtakF6aVpfc0pJZTFLUVVQMGRjekJDZ3JZNXpKOTdEZGhqYzhnd2dYUE1vRFJ6QVZJOHk1ZU83SXdER3gzOW9FYnUwTG5KaHB2QmR5b2k4Njh2QUE?oc=5) |
