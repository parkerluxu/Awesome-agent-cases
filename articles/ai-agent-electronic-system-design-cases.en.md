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

<!-- AUTO_CASE_UPDATES_START:electronic:en -->
## Latest Auto-Discovered Updates

### Key New Leads

- **ForgeLab** — Described as "the LLVM of design," this project provides a JSON IR + MCP server enabling AI agents to create KiCad, FreeCAD & glTF files. (GitHub, 2026-06-12, 2 stars) [Link](https://github.com/andresparraarze/ForgeLab)
- **salitronic/eda-agent** — An open-source MCP server for Altium Designer with 290+ tools for schematic, PCB, library & project automation, including design review, SVG rendering, connectivity-driven auto-placement, and an autonomous design-plan executor. Apache-2.0 license. (GitHub, 2026-06-12, 56 stars) [Link](https://github.com/salitronic/eda-agent)
- **SchGen: PCB Schematic Generation with Semantic-Grounded Code Representations** — The first LLM that generates editable PCB schematics from natural-language requests, addressing the lack of an LLM-suited representation and large-scale dataset. (arXiv, 2026-05-28) [Link](https://arxiv.org/abs/2605.30345v1)

### GitHub / Open-Source Projects

- **Matt-Thom/TripleT-KiCad-Agent** — AI-powered engineering assistant bridging system requirements and physical PCB design, acting as a co-designer that understands electronics theory, component availability, and KiCad file structures. (2026-06-11, 1 star) [Link](https://github.com/Matt-Thom/TripleT-KiCad-Agent)
- **AvatarSD/KiSkill** — Agent skills + headless Python engine giving an AI coding agent full control of KiCad (edit, verify, review & fabricate schematics and PCBs) without GUI. (2026-06-11, 0 stars) [Link](https://github.com/AvatarSD/KiSkill)
- **bretbouchard/kicad-agent** — AI-safe structural editing of KiCad schematic, PCB, symbol, and footprint files. (2026-06-08, 1 star) [Link](https://github.com/bretbouchard/kicad-agent)
- **liwenjinchn/hardwise** — AI Agent for schematic review node of hardware R&D, built as a 2-week portfolio demo on KiCad public samples. (2026-06-12, 0 stars) [Link](https://github.com/liwenjinchn/hardwise)
- **gfgf2023/hfss-mcp-server** — MCP Server for Ansys HFSS enabling AI control of antenna design and PCB simulation via natural language. (2026-06-11, 0 stars) [Link](https://github.com/gfgf2023/hfss-mcp-server)
- **dshills/KiCadAI** — AI-assisted KiCad design toolkit with Go CLI, direct schematic/PCB writers, validation, and pinmap checks. (2026-06-12, 0 stars) [Link](https://github.com/dshills/KiCadAI)
- **AdamWolcottSmith/tscircuit-to-fusion** — Export tscircuit PCB designs to Fusion360 (layer-organized DXF sketches + STEP bodies) without KiCad. (2026-06-12, 1 star) [Link](https://github.com/AdamWolcottSmith/tscircuit-to-fusion)
- **tscircuit/runframe** — Runs tscircuit code inside a webworker, enabling PCB, schematic and 3D previews. (2026-06-12, 17 stars) [Link](https://github.com/tscircuit/runframe)
- **ritwick06/elektran-ai** — Autonomous PCB design tool. (2026-06-13, 0 stars) [Link](https://github.com/ritwick06/elektran-ai)
- **Zero-inadequateness813/amux** — Manages persistent tmux panels for AI agents and humans. (2026-06-13, 0 stars) [Link](https://github.com/Zero-inadequateness813/amux) *(Weak candidate — not directly related to PCB/EDA design)*

### Papers / Benchmarks

- **SchGen: PCB Schematic Generation with Semantic-Grounded Code Representations** — First LLM for generating editable PCB schematics from natural language. (arXiv, 2026-05-28) [Link](https://arxiv.org/abs/2605.30345v1)

### Product Tutorials / Media Tests

- **Google search box redesign** — Google announced a sweeping redesign of the search box at I/O, transforming it from keyword input into a dynamic, AI-driven conversational interface. (VentureBeat, 2026-05-19) [Link](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) *(Weak candidate — not directly about EDA/PCB design)*
- **OpenAI to acquire Ona** — OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. (OpenAI, 2026-06-11) [Link](https://openai.com/index/openai-to-acquire-ona) *(Weak candidate — general AI agent infrastructure)*
- **New OpenAI Academy courses** — Three courses on building practical AI skills, creating repeatable workflows, and applying agents in everyday work. (OpenAI, 2026-06-12) [Link](https://openai.com/index/academy-courses-applying-ai-at-work) *(Weak candidate — general AI education)*
- **OpenEnv for Agentic RL** — The open-source community backing OpenEnv for agentic reinforcement learning. (Hugging Face, 2026-06-08) [Link](https://huggingface.co/blog/openenv-agentic-rl) *(Weak candidate — general agentic RL)*
- **hf CLI for agents** — Designing the Hugging Face CLI as an agent-optimized way to work with the Hub. (Hugging Face, 2026-06-04) [Link](https://huggingface.co/blog/hf-cli-for-agents) *(Weak candidate — general agent tooling)*

### Chinese Community Leads

- **大语言模型基础（LLM）** — Chinese tutorial on LLM basics as the brain of AI agents. (runoob.com) [Link](https://www.runoob.com/ai-agent/ai-agent-llm.html) *(Weak candidate — general LLM tutorial)*
- **datawhalechina/happy-llm** — Chinese systematic LLM learning tutorial from Datawhale community. (GitHub) [Link](https://github.com/datawhalechina/happy-llm) *(Weak candidate — general LLM education)*
- **How Agentic AI tackles RTL verification’s productivity gap** — Article from New Electronics on agentic AI for RTL verification. (New Electronics, 2026-05-22) [Link](https://news.google.com/rss/articles/CBMipwFBVV95cUxOUjlFNjRObWtnUGZxYzNyRG41NzI5a2EzRl9nNUJoaUVrcWdoN1VvTmlybjl0UGdmYnNQYW9xMExxRm0zMUJiaGpnT0tKbDR0TEJHQzZTZXhTSHE2Nk12YzVOUE1GVXJkUTVDSjh6bjE0TlNKVFlaYmFwWjUybnY5SDd4eUJxVlh6LWFCdG95Zmk4UEpNZXV5VlNCaHFMU25tcW9sVk1lWQ?oc=5) *(Weak candidate — needs manual review for relevance)*

### Follow-up Items

- **hashgraph-online/awesome-codex-plugins** — Curated list of Codex plugins. (GitHub, 2026-06-09) [Link](https://news.google.com/rss/articles/CBMiaEFVX3lxTE9WT2pYYl93MnNkZV9uVTIwOGtIWE85Y0tzYVRHWWJyampmSHZNMnhqV0V1ZXdaSmdLZ0JLT0lRckZHUGpPZG0xWWU0dUZpUXdRZjUxTGcxUW1KaDlheWRpd3pMRWhzcEVp?oc=5) *(Weak candidate — needs manual review)*
- **Google DeepMind on multi-agent risks** — DeepMind funding research into dangers of millions of AI agents interacting online. (MIT Technology Review, 2026-06-11) [Link](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/) *(Weak candidate — general AI safety, not EDA-specific)*
- **tscircuit/tscircuit** — Create real electronics with TypeScript and React. (GitHub, 2026-06-12, 2246 stars) [Link](https://github.com/tscircuit/tscircuit) *(Existing project, noted for continued activity)*
<!-- AUTO_CASE_UPDATES_END:electronic:en -->

## Main Risks

- Fabricated part numbers, footprints, or parameters.
- Ignored power margin, thermal design, or EMI.
- Wrong high-speed / RF rules.
- DRC passing while the board is still hard to manufacture.
- Prototype cost and hardware damage.
