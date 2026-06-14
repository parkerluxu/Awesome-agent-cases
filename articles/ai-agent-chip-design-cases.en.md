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
| ContextOS | GitHub | Unified context intelligence layer for AI agents with seamless integration in a single Python package. | [GitHub](https://github.com/armmammothermography417/ContextOS) |

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
