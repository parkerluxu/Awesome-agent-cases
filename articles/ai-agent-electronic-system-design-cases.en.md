# Electronic System Design: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards a "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality screening in subsequent updates. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (2+13)

This section is divided into two categories: `2 Tutorials / Cases` and `13 Projects / Papers`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it is worth in-depth reading.

### Tutorials / Cases (2 Items)

| # | Name | Type | Purpose/Abstract | Link |
|---:|---|---|---|---|
| 1 | tscircuit docs | Official Tutorial | Official tscircuit tutorial covering schematics, netlists, manufacturing files, and EDA automation workflows. Code-driven electronic design methods can be referenced from this documentation. | https://docs.tscircuit.com/ |
| 2 | Hackaday tscircuit | Community Case | Showcase of tscircuit cases in the Hackaday community, exploring novel ideas and creative projects for code-driven circuit design. | https://hackaday.com/ |

### Projects / Papers (13 Items)

| # | Name | Type | Purpose/Abstract | Link |
|---:|---|---|---|---|
| 1 | AIDev | Paper/Dataset | The AIDev paper proposes an evaluation framework for AI-assisted hardware design, including task definitions, dataset construction, and model performance evaluation methods, providing a benchmark for hardware automation research. | https://arxiv.org/abs/2602.09185 |
| 2 | tscircuit | Open-Source Project | An open-source EDA tool written in TypeScript that defines circuit schematics and PCB layouts with code, integrating electronic design into the software engineering workflow. | https://github.com/tscircuit/tscircuit |
| 3 | pcbGPT | Paper | A paper exploring large language model-assisted PCB design, demonstrating the automation of circuit board design processes through natural language interaction. | https://arxiv.org/abs/2606.01188 |
| 4 | PCBSchemaGen | Paper | An AI method for automatically generating PCB schematics from high-level descriptions, showcasing an end-to-end process from requirements to circuit connection diagrams. | https://arxiv.org/abs/2602.00510 |
| 5 | CircuitLM | Paper | Proposes the CircuitLM model, evaluating language models' capabilities in schematic generation and understanding tasks, focusing on LLMs specialized for circuit design. | https://arxiv.org/abs/2601.04505 |
| 6 | SchGen | Paper | Research on automatic schematic generation, detailing algorithm design and experimental results, targeting cutting-edge directions in AI-assisted electronic design. | https://arxiv.org/abs/2605.30345 |
| 7 | SmartonAI | Paper | Explores modeling and solutions for specific problems in electronic design automation using AI, providing problem definitions and algorithm implementation details. | https://arxiv.org/abs/2307.14740 |
| 8 | AutoEDA | Paper | A systematic study of AI methods for electronic design automation, including experimental setups and performance comparisons across multiple methods, covering the complete EDA workflow. | https://arxiv.org/abs/2508.01012 |
| 9 | ChatEDA | Paper | Proposes the ChatEDA framework, using conversational AI to assist the EDA toolchain, demonstrating a new interaction paradigm for human-machine collaborative design. | https://arxiv.org/abs/2308.10204 |
| 10 | AiEDA | Paper | An AI-driven electronic design automation paper detailing model architecture, training data, and experimental results, focusing on end-to-end design generation. | https://arxiv.org/abs/2511.05823 |
| 11 | EEsizer | Paper | Focuses on automatic size optimization of electronic components or circuits, targeting automated methods for design space exploration and parameter tuning. | https://arxiv.org/abs/2509.25510 |
| 12 | tscircuit snippets | Open-Source Project | tscircuit snippets is an open-source code snippet library for electronic design, containing examples of schematics, netlists, and simulations that can be directly used to accelerate EDA automation workflows. | https://github.com/tscircuit/snippets |
| 13 | JITX | Product/Language | JITX is a programmable hardware design language and platform that describes circuits through code, supporting automated electronic design and rapid prototyping. | https://www.jitx.com/ |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| salitronic/eda-agent | GitHub | Open-source MCP server for Altium Designer. 290+ tools for schematic, PCB, library & project automation over a persistent DelphiScript bridge. Apache-2.0. | [GitHub](https://github.com/salitronic/eda-agent) |
| andresparraarze/ForgeLab | GitHub | JSON IR + MCP server that lets AI agents create KiCad, FreeCAD & glTF files. | [GitHub](https://github.com/andresparraarze/ForgeLab) |
| Matt-Thom/TripleT-KiCad-Agent | GitHub | AI-powered engineering assistant bridging high-level system requirements and physical PCB design; understands electronics theory, component availability, and KiCad file structures. | [GitHub](https://github.com/Matt-Thom/TripleT-KiCad-Agent) |
| AvatarSD/KiSkill | GitHub | Agent skills + headless Python engine giving an AI coding agent full control of KiCad — edit, verify, review & fabricate schematics and PCBs, no GUI. | [GitHub](https://github.com/AvatarSD/KiSkill) |
| bretbouchard/kicad-agent | GitHub | AI-safe structural editing of KiCad schematic, PCB, symbol, and footprint files. | [GitHub](https://github.com/bretbouchard/kicad-agent) |
| liwenjinchn/hardwise | GitHub | AI Agent for the schematic review node of hardware R&D — 2-week portfolio demo built on KiCad public samples. | [GitHub](https://github.com/liwenjinchn/hardwise) |
| gfgf2023/hfss-mcp-server | GitHub | MCP Server for Ansys HFSS — Antenna Design & PCB Simulation. Let AI control HFSS with natural language. | [GitHub](https://github.com/gfgf2023/hfss-mcp-server) |
| dshills/KiCadAI | GitHub | AI-assisted KiCad design toolkit with Go CLI, direct schematic/PCB writers, validation, and pinmap checks. | [GitHub](https://github.com/dshills/KiCadAI) |
| ritwick06/elektran-ai | GitHub | Autonomous PCB design tool. | [GitHub](https://github.com/ritwick06/elektran-ai) |
| tscircuit/tscircuit | GitHub | Create real electronics with Typescript and React. | [GitHub](https://github.com/tscircuit/tscircuit) |
| tscircuit/docs | GitHub | Docs, tutorials and guides for tscircuit (Electronics with React/Typescript). | [GitHub](https://github.com/tscircuit/docs) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| SchGen: PCB Schematic Generation with Semantic-Grounded Code Representations | arXiv | First large language model that generates editable PCB schematics from natural-language requests. | [arXiv](https://arxiv.org/abs/2605.30345v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| How Agentic AI tackles RTL verification’s productivity gap | New Electronics | Article on agentic AI applied to RTL verification productivity. | [New Electronics](https://news.google.com/rss/articles/CBMipwFBVV95cUxOUjlFNjRObWtnUGZxYzNyRG41NzI5a2EzRl9nNUJoaUVrcWdoN1VvTmlybjl0UGdmYnNQYW9xMExxRm0zMUJiaGpnT0tKbDR0TEJHQzZTZXhTSHE2Nk12YzVOUE1GVXJkUTVDSjh6bjE0TlNKVFlaYmFwWjUybnY5SDd4eUJxVlh6LWFCdG95Zmk4UEpNZXV5VlNCaHFMU25tcW9sVk1lWQ?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI to acquire Ona | OpenAI | Acquisition to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| New OpenAI Academy courses for the next era of work | OpenAI | Three Academy courses helping people build practical AI skills, create repeatable workflows, and apply agents in everyday work. | [OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work) |
