# Chip Design: AI Agent Case Studies, Tutorials, and Research Projects

Research date: 2026-06-13

Public individual tutorials for chip design are relatively rare; most material comes from papers, open-source EDA projects, and company demos. The focus here is not "AI makes chips in one click," but how agents participate in Verilog/RTL generation, testing, synthesis, PPA optimization, RTL-to-GDSII flows, and EDA script automation.

## Quick Takeaways

AI agents are suitable for:

- Natural-language specifications to Verilog/VHDL drafts.
- Testbench and SystemVerilog Assertion generation.
- EDA Tcl script generation.
- Simulation, synthesis, and compile-error explanation and repair.
- PPA report analysis.
- Design-space exploration.
- Documentation and constraint generation.

Do not fully delegate:

- Production CPU/GPU/NPU flows without review.
- Safety-critical IP.
- RTL without formal verification and simulation coverage.
- Final sign-off, DFT, STA, or physical verification decisions.

## Tutorials and Practitioner Notes

### 1. ChatGPT / Claude / Codex for Verilog and FPGA Learning

Common personal projects include FIFO, UART, PWM, SPI master, testbenches, Verilator/Vivado error repair, timing diagrams, state machines, and handshake protocols.

Example prompt:

```text
Generate a synthesizable Verilog UART TX module.
Clock: 50 MHz; baud rate: 115200
Input: valid/data; output: ready/tx
Also generate a testbench.
Do not use non-synthesizable constructs.
Explain the state machine.
```

Agents can write simulation-passing but non-synthesizable code. Require explicit clocks, resets, handshakes, and synthesis constraints. The agent's testbench is not the final truth.

### 2. Verkor Design Conductor

Type: company demo / media report  
Link: https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours

Verkor.io's Design Conductor reportedly generated a RISC-V CPU core from a 219-word specification and completed the spec-to-GDSII flow in about 12 hours. The CPU was relatively simple, without cache or out-of-order execution, and was mainly validated in simulation and academic processes.

### 3. OpenROAD

Link: https://en.wikipedia.org/wiki/OpenROAD_Project

OpenROAD is not an LLM agent, but it is a foundation for many agentic EDA workflows. Agents can generate or modify OpenROAD scripts, read timing/congestion/power reports, and suggest parameter changes.

### 4. Chip-Chat and Conversational Chip Design

Reference: https://en.wikipedia.org/wiki/LLM_aided_design

Conversation-based chip-design attempts such as Chip-Chat are good entry cases. Instead of jumping to full CPUs, start with UART, FIFO, ALU, or AXI-lite peripherals and practice spec -> RTL -> testbench -> simulation -> repair.

### 5. RTLLM-Editor / LLM4DV / AutoSVA

Reference: https://en.wikipedia.org/wiki/LLM_aided_design

Chip agents are not only Verilog generators. Editing HDL, repairing bugs, generating SystemVerilog assertions, writing Vivado/Quartus/OpenROAD scripts, and producing reference models are more realistic near-term tasks.

### 6. ChipBench

Paper: https://arxiv.org/abs/2601.21448

ChipBench covers Verilog generation, debugging, and reference-model generation, with more realistic hierarchical modules, debug cases, and reference-model samples. It is more engineering-like than small HDLBits-style problems.

### 7. MAGE

Paper: https://arxiv.org/abs/2412.07822

MAGE is a multi-agent Verilog RTL generation engine using candidate generation, debugging, and checkpoint checking. It improves syntax and functional correctness on VerilogEval-Human 2. The lesson: use multiple candidates, simulation feedback, and checkpoint repair instead of one-shot RTL.

## Research Projects

### ChatEDA

Link: https://arxiv.org/abs/2308.10204

ChatEDA uses LLMs for task decomposition, script generation, and EDA tool invocation across RTL-to-GDSII workflows. Chip agents are fundamentally about tool orchestration and report feedback, not just code snippets.

### AutoEDA

Link: https://arxiv.org/abs/2508.01012  
GitHub: https://github.com/AndyLu666/MCP-EDA-Server

AutoEDA uses MCP and microservice agents to automate RTL-to-GDSII flows with structured prompting, parameter extraction, and task decomposition. Standardized tool calls are more reliable than asking a model to remember every EDA command.

### HiVeGen

Link: https://arxiv.org/abs/2412.05393

HiVeGen addresses the tendency of LLMs to produce monolithic hardware code by using hierarchical decomposition, DSE, and retrieval.

### VeriOpt

Link: https://arxiv.org/abs/2507.14776

VeriOpt uses roles such as Planner, Programmer, Reviewer, and Evaluator, and includes power, performance, and area in prompts and feedback.

### VeriContaminated

Link: https://arxiv.org/abs/2503.13572

Hardware code benchmarks also suffer from data contamination. Distinguish solving public benchmark tasks from solving truly unseen engineering tasks.

### MG-Verilog / RTLCoder / VeriGen

Reference: https://en.wikipedia.org/wiki/LLM_aided_design

These dataset and model directions suggest that long-term chip agents will combine domain data, simulation feedback, structured retrieval, and toolchain logs rather than relying only on general models.

<!-- AUTO_CASE_UPDATES_START:chip:en -->
## Latest Updates (2026-06-13)


- **OpenAI to acquire Ona** – OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments, enabling long-running AI agents across enterprise workflows. (Source: [OpenAI](https://openai.com/index/openai-to-acquire-ona), 2026-06-11)
- **Google DeepMind is worried about what happens when millions of agents start to interact** – DeepMind funding research into potential dangers of mass-market AI agent interaction. (Source: [MIT Technology Review](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/), 2026-06-11)

### Projects

- **andresparraarze/ForgeLab** – "The LLVM of design" — a JSON IR + MCP server that lets AI agents create KiCad, FreeCAD & glTF files. Stars: 2. (Source: [GitHub](https://github.com/andresparraarze/ForgeLab), 2026-06-12)
- **zhongkaiyu/ChipMATE** – Multi-agent inference framework for RTL generation. A Verilog agent and a Python reference-model agent independently propose implementations and cross-verify each other's outputs on random stimuli — no golden testbench required. Open-source companion to the ChipMATE paper. Stars: 15. (Source: [GitHub](https://github.com/zhongkaiyu/ChipMATE), 2026-05-29)
- **naman-ranka/siliconcrew** – Autonomous LLM agent for hardware design — natural language to GDSII via Verilog generation, simulation, and OpenROAD synthesis. Stars: 1. (Source: [GitHub](https://github.com/naman-ranka/siliconcrew), 2026-05-19)
- **RAMA-L7/vlsi-pd-staff-engineer** – Multi-agent framework for RTL-to-GDSII physical design using Claude Code — 9 specialized agents, stage-gate verification, and forensic ECO debugging on Yosys + OpenROAD + Sky130. Stars: 1. (Source: [GitHub](https://github.com/RAMA-L7/vlsi-pd-staff-engineer), 2026-05-14)
- **IntelligentElectron/universal-netlist** – Give AI agents the power to read Cadence/Altium designs. Stars: 21. (Source: [GitHub](https://github.com/IntelligentElectron/universal-netlist), 2026-06-12)
- **Mauricio-xx/eda-agents** – AI/LLM-assisted circuit design using opensource tools. Stars: 1. (Source: [GitHub](https://github.com/Mauricio-xx/eda-agents), 2026-05-18)
- **hermes13002/ecs_rapid_agent_hackathon** – A modern, high-performance EDA and schematic capture tool with a custom Flutter graphics engine, Python-powered SPICE simulation backend, and deep AI co-pilot capabilities powered by Gemini 2.5 Pro. Stars: 0. (Source: [GitHub](https://github.com/hermes13002/ecs_rapid_agent_hackathon), 2026-06-12)

### Papers / Benchmarks

- **RTL-BenchMT: Dynamic Maintenance of RTL Generation Benchmark Through Agent-Assisted Analysis and Revision** – Introduces an agentic framework for dynamically maintaining RTL generation benchmarks, addressing flawed cases and overfitting. (Source: [arXiv](https://arxiv.org/abs/2605.15537v1), 2026-05-15)
- **CPPL: A Circuit Prompt Programming Language** – Proposes a circuit prompt programming language to help LLMs emit valid compiler IR (MLIR/CIRCT) for hardware design flows. (Source: [arXiv](https://arxiv.org/abs/2605.17892v1), 2026-05-18)
- **Trace2Skill: Verifier-Guided Skill Evolution for Long-Context EDA Agents** – A test-time scaling framework that improves hardware agents without RTL-specialized model fine-tuning, using verifier-guided skill evolution. (Source: [arXiv](https://arxiv.org/abs/2605.21810v1), 2026-05-20)
- **CASS-RTL: Correctness-Aware Subspace Steering for RTL Generation with LLMs** – Addresses cycle accuracy and concurrency in LLM-based RTL generation via correctness-aware subspace steering. (Source: [arXiv](https://arxiv.org/abs/2606.05680v1), 2026-06-04)
- **A3D: Agentic AI flow for autonomous Accelerator Design** – An agentic AI flow for autonomous hardware accelerator design using high-level synthesis. (Source: [arXiv](https://arxiv.org/abs/2605.15237v1), 2026-05-14)
- **Alpha-RTL: Test-Time Training for RTL Hardware Optimization** – Performs reinforcement learning at test time, allowing the LLM policy to adapt to executable EDA feedback for specific RTL designs. (Source: [arXiv](https://arxiv.org/abs/2606.05253v1), 2026-06-03)
- **RTL-BenchLS: A Large-Scale Benchmark for RTL Reasoning and Generation with Large Language Models** – A large-scale benchmark for RTL reasoning and generation, addressing limitations in scale and task scope of existing benchmarks. (Source: [arXiv](https://arxiv.org/abs/2606.08976v1), 2026-06-08)
- **Autonomous agentic design for photonics** – Introduces an automated, agent-driven approach to photonic device design using LLMs with access to simulation tools and acceptance criteria. (Source: [arXiv](https://arxiv.org/abs/2606.00915v1), 2026-05-30)
- **Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver Synthesis** – Applies memory-guided tree search with cross-branch knowledge transfer for combinatorial optimization solver synthesis, relevant to chip design. (Source: [arXiv](https://arxiv.org/abs/2605.17539v2), 2026-05-17)
- **OpenRTLSet: A Fully Open-Source Dataset for Large Language Model-based Verilog Module Design** – Introduces the largest fully open-source dataset for hardware design, offering over 131,000 diverse Verilog code samples. (Source: [arXiv](https://arxiv.org/abs/2606.10285v1), 2026-06-09)

### Tutorials / Media Tests

- **Google just redesigned the search box for the first time in 25 years** – Google announced a sweeping redesign transforming the search box from a simple keyword input into a dynamic, AI-driven conversational interface. (Source: [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think), 2026-05-19)


- **大语言模型基础（LLM）** – A Chinese tutorial on LLM basics for AI agents, from 菜鸟教程 (Runoob). (Source: [Bing Web](https://www.runoob.com/ai-agent/ai-agent-llm.html))

<!-- AUTO_CASE_UPDATES_END:chip:en -->
