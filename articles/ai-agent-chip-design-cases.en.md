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

## Recommended Replication Path

1. Start with UART, PWM, or FIFO.
2. Ask the agent to write RTL and testbench.
3. Run iverilog or Verilator.
4. Feed errors and waveform observations back.
5. Add Yosys/OpenROAD for synthesis and simple backend.
6. Try a multi-role flow: Planner, Coder, Reviewer, Verifier.

## Main Risks

- Non-synthesizable syntax.
- Timing and reset errors.
- Weak testbenches.
- Poor PPA.
- Missing formal verification.
- Overtrusting demos and ignoring production complexity.
