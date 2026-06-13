# Electronic System Design: AI Agent Case Studies, Tutorials, and Research Projects

Research date: 2026-06-13

Electronic system design includes schematics, PCBs, BOMs, footprints, routing, DRC/ERC, manufacturing files, and debug documentation. Public individual tutorials are relatively scarce; more material comes from open-source projects, startups, research papers, and media reports.

## Quick Takeaways

AI agents are most useful in:

- Turning specifications into module breakdowns.
- Assisting schematic generation.
- Suggesting PCB placement and routing.
- Generating EDA tool scripts.
- Checking BOMs and substitute parts.
- Explaining DRC/ERC reports.
- Generating manufacturing and debug documentation.

Do not fully delegate:

- High-voltage, high-current, RF, high-speed differential, or safety-critical design.
- Production PCB sign-off.
- Direct fabrication without expert review.
- Complex power-integrity or signal-integrity decisions.

## Tutorials and Practitioner Notes

### 1. ChatGPT / Claude / Codex with KiCad, Altium, and Scripted EDA

Type: developer practice summary  
Representative tools: ChatGPT, Claude, Claude Code, Codex, KiCad, tscircuit

Most practical use is not "AI designs a whole PCB in one click." Instead, agents act as design assistants: decomposing requirements, explaining datasheets, generating scripts, checking pins, preparing BOMs, and writing debug plans.

Good replication tasks:

- ESP32 sensor expansion board.
- USB-C power board.
- LED driver board.
- Motor-driver expansion board.
- Arduino shield.

Always require datasheet confirmation and explicit "needs human verification" notes for concrete part numbers, footprints, and parameters.

### 2. tscircuit: Circuits as Code

Links:

- GitHub: https://github.com/tscircuit/tscircuit
- Overview: https://en.wikipedia.org/wiki/Tscircuit

tscircuit defines circuits in TypeScript and generates schematics, PCB layouts, 3D previews, and manufacturing files. It is not an AI agent, but it is highly agent-friendly because agents are better at editing code than dragging parts in a GUI.

Reusable approach:

- Ask an agent to generate tscircuit components and connections.
- Feed preview errors or screenshots back to the agent.
- Encapsulate common modules such as USB-C, power, and sensor interfaces.

### 3. Quilter Project Speedrun

Type: company case / media report  
Link: https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work

Quilter used AI to help design a Linux single-board computer with 843 components and dual PCBs. It reportedly finished in one week, required 38.5 hours of human involvement, and booted Debian on first power-up. Treat this as evidence of a trend, not proof that ordinary users can one-click-generate complex SBCs.

### 4. Diode Computers

Type: startup case  
Link: https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7

Diode Computers uses LLMs and reinforcement learning to generate, check, and correct PCB designs, aiming to turn graphical PCB design into a more code-like process. The implication is that electronics design may increasingly resemble software deployment: submit specifications and code, then generate physical boards through verifiable pipelines.

### 5. pcbGPT

Type: research system  
Link: https://arxiv.org/abs/2606.01188

pcbGPT targets schematic generation for embedded, IoT, and wearable devices. It uses a Python DSL, component-library search, datasheet grounding, structural/semantic validation, and KiCad synchronization. The key lesson is to generate reviewable drafts, not fabrication-ready boards.

### 6. PCBSchemaGen

Type: research system  
Link: https://arxiv.org/abs/2602.00510

PCBSchemaGen combines LLM agents with constraint-guided synthesis, datasheet knowledge graphs, and subgraph isomorphism checks for pin roles, topology constraints, and functional connections. It is notable because it handles mixed digital, analog, and power signals.

### 7. CircuitLM

Type: multi-agent research system  
Link: https://arxiv.org/abs/2601.04505

CircuitLM converts natural language into schematics through component recognition, pinout retrieval, expert-agent reasoning, JSON schematic synthesis, and SVG visualization. Its value is the combination of expert knowledge, structured outputs, and multi-agent review.

### 8. KiCad as an Agent-Friendly EDA Base

Link: https://en.wikipedia.org/wiki/KiCad

KiCad supports schematics, PCB layout, Gerber, 3D preview, ERC/DRC, ngspice, Python scripting, and text-based project files. Agents can generate scripts, parse reports, explain violations, and prepare manufacturing exports while humans inspect the design in the GUI.

### 9. SmartonAI: Natural-Language KiCad Operations

Paper: https://arxiv.org/abs/2307.14740

SmartonAI uses GPT/BERT and plugins to let users invoke complex EDA functions in natural language. It is more realistic to build "EDA assistants" that search docs, execute repeatable operations, and explain tool output before attempting one-click PCB generation.

## Research Directions

### Commercial EDA Agents: Flux / Quilter / Diode Patterns

The common direction is code-first or constraint-first EDA. A practical pipeline is: natural-language spec, structured module list, code-based schematic or netlist, automatic ERC/DRC, agent explanation, human review, and only then fabrication.

### AutoEDA / ChatEDA

Links:

- AutoEDA: https://arxiv.org/abs/2508.01012
- ChatEDA: https://arxiv.org/abs/2308.10204

These projects use agents for task decomposition, script generation, tool calls, and feedback. The same idea applies to PCB design: the agent should orchestrate professional tools, not invent hardware from memory.

### pcbGPT / SchGen / PCBSchemaGen Trend

Links:

- pcbGPT: https://arxiv.org/abs/2606.01188
- SchGen: https://arxiv.org/abs/2605.30345
- PCBSchemaGen: https://arxiv.org/abs/2602.00510

The core trend is converting hardware design into intermediate representations that models can generate, tools can verify, and engineers can review: Python DSLs, semantic-grounded code, CircuitJSON, knowledge graphs, and KiCad synchronization.

## Recommended Replication Path

1. Use an agent to create requirements and module lists.
2. Manually confirm components and datasheets.
3. Generate an initial connection draft with tscircuit or KiCad scripts.
4. Run ERC/DRC.
5. Ask the agent to explain errors and propose fixes.
6. Human-review before exporting Gerbers.

## Main Risks

- Fabricated part numbers, footprints, or parameters.
- Ignored power margin, thermal design, or EMI.
- Wrong high-speed / RF rules.
- DRC passing while the board is still hard to manufacture.
- Prototype cost and hardware damage.
