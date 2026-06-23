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

## Resource Update (2026-06-14)

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| An LLM System for Autonomous Variational Quantum Circuit Design | Paper | Introduces an autonomous agentic framework using LLMs to iteratively design quantum circuits under explicit constraints, integrating exploration, generation, discussion, validation, storage, evaluation, and review components. | [arXiv](https://arxiv.org/abs/2606.13380v1) |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Quilter Project Speedrun: AI-Designed Computer Boots Successfully | Project | Reports successful boot of an AI-designed computer with autonomous PCB layout validation. | [DEV Community](https://news.google.com/rss/articles/CBMi2AFBVV95cUxNS0M3TEVUVVltNElnZjJLWUx3dzgyLUs3dnltQ2RlSXNxbndWeGg1bEliVk1NQXUyT09KSWNxRkR4d0o4SGZsQU12R09DY0pYUFhNcTJOWW1WQnZ2OHgtRUVXZlJ1T2E5SGNDUVVxdk41STlhZ2lYQUtVZnFoRnFYa095LTUyYngtV0ZVcGlib0EyTWUwYS03aEY0MGc5U3VTRVBndjNUUk1FTHJVNGxKU2tQcmplUUpKVERvMGVTXzcyX2U2eTA3NnVXbmdFcDNuaXRIT1Atcjc?oc=5) |
| easyeda-documents | Project | Chinese tutorial for EasyEDA, an online PCB design tool. | [GitHub](https://news.google.com/rss/articles/CBMilAFBVV95cUxObzRKUWI0dmZ6OWV4SUg3eTdZTDVZZ3FMWm54TlIxcUVWb0hjUFV5ZG0tS0RxaEZIQlVwTmRWRUk3NW85b0YwTGtaaVFUODhENWVZamRSSHRtOFQxOFhfajZobnVUMEdrNWtZTDlOckNqODU4cmFhQkFBYlVOWmt1YlRjR09nNHQ1SnpOZzFNeDBHRzI3?oc=5) |
| Rodert/awesome-mcp | Project | Curated list of MCP servers and related resources. | [GitHub](https://news.google.com/rss/articles/CBMiTkFVX3lxTFBGMXVZOFhVNk5aSjR3WFJ0Yl9tX1IxU296dTY3M1NOYnI1ZVhPTnJKNGphU2NibTJQX3BDYV91LXNPNkVPYWl5ZVM2MWRqdw?oc=5) |
| YouMind-OpenLab/awesome-nano-banana-pro-prompts | Project | Collection of prompts for Nano Banana Pro. | [GitHub](https://news.google.com/rss/articles/CBMidEFVX3lxTE83N0ZLQ29rVGJVUGE3eGdEWFY5dy11MzJSVkU2ejRLcVh2RkdpS3FWVzFlLUktUG5EWVZSLWEyaFZ3UGtWNU0tZm1hN2tqWHNMTm1ILVRFMkdIRGJUZ01wZnQxdTlPNkNaX0FRcms1LWxaS3hp?oc=5) |
| hashgraph-online/awesome-ai-plugins | Project | Curated list of AI plugins. | [GitHub](https://news.google.com/rss/articles/CBMiZEFVX3lxTE8xVE01MTlDYVFYaWdJVm8wdy16MWpNeDhzWXIyRWFxdHF4YjdscEtFdzlhQnRHc0tVdklWYzFRUllkcmIzUll1QklVcnllU09vRDNyc21LNUVOaUZYQlFTVHJjMWg?oc=5) |
| jherrodthomas/automotive-skills-suite | Project | Automotive skills suite for AI agents. | [GitHub](https://news.google.com/rss/articles/CBMiZ0FVX3lxTFByYlFpaXJReGdIRTdFSi03M3BKbE5pcmxTemoxVnlrS3FyUmtkYnZKZmo2SUxoeDZFeXVxOUdXT3FfdFZQZzBVeXp2aENmbmNjUHl1YXA2MXptZk5zaDFuN25ESVFEc1k?oc=5) |
| Nano Banana Pro 提示词大全 | Project | Prompt collection for Nano Banana Pro. | [GitHub](https://news.google.com/rss/articles/CBMikwFBVV95cUxPb3p3Rlh2US16TGJlV1BiUXpDUXgyVG45aFdiLUFYR2Z4THdVdDU1Nms4Sl9mMEVUYU9KWFRlQmZaZlkwTWFLaVZXbm1hUDk3ZFBNRkdpU0NoN3ViMlpRbEd3TG9xOV9CQjZqazhqY1ZjSzVWVVZXR0lORktzU09CYjd3UTlQVlF4UFNpWl9tVVdaT2s?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| JuliaHub Dyad 3.0 | Product | General availability of Dyad 3.0, bringing agentic AI to physics-based engineering. | [PR Newswire](https://news.google.com/rss/articles/CBMi6AFBVV95cUxPblVQNVkxRk4xWVpEV0pmNnpMMktGR1Z1TWJ4OE4tbXgwdXpScEdUcy1xSjkxUDhuWERPajZEVDRFYTc5WHU2UXpxb0l6WjZuX0NEYkpqbmNiN0NZRkJXTF9XeWM1YVpKYW4zMnFwb1AwSHR3eV9qU3ZFWV9LdldLaFpCQkdrbV9NYzB0eHp6cTBrUXlFNWZGcTZNS1dDS1JMbkFRcDhWUEZyWmdjMXgyZkoyRTVHRVVFOTlwTlhkZEk5QktFdzNkMmxULVJ4MkRNTWdYa3BRb3pzdGtGb3RIbWpRMkRtTHJE?oc=5) |
| KiCad 华秋 10.0 | Tool | AI-assisted PCB design tool based on KiCad. | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTFBQR0tQc0xHQXJhRm93bTJKN05zcFZqaHg4NzlYcnJsbEk3Sm1venFDMDdETDVMR2JNaDU3ZzhDUjVvSzFtRUFuTVBaaVYxeERGdGtFTVhFbXBmYkVjSjNUSVVn?oc=5) |
| 赛意信息 PCB行业工艺AI大模型 | Product | Self-developed PCB industry process AI large model now commercially deployed at scale. | [Sohu](https://news.google.com/rss/articles/CBMijAFBVV95cUxNUWRLX25rYm8wcEZmbjU1OE5zNlB6TDlXWUF1N3ZWTUxyT0ZxeUFMNEZuYjZyOE84eFg0X2ZFcUVBLVFLUUxlOWpXdFRicUV5dEx3c1pua1JTTDlHeDEtZHIxZ2tqTEcxeDVjaGozeWZrZUIwYmVFUmIxNW9hSUV5RmlXV2oyQ1Z1RzlqWg?oc=5) |
| 视源股份电路板布局专利 | Tool | Patent application for using reinforcement learning to optimize PCB layout and improve layout efficiency. | [新浪财经](https://news.google.com/rss/articles/CBMikwFBVV95cUxPNWZyV0lvdnVCR0tjX3dKalJCYnFwYlhpd1BpSDlVb0NCMmZueTltaGVCX0JqeUQ1UlQ3cVlWay1FNjktNTE5TUVWWUZHOHNIODNkcXFYWGRLWUxyMlRyUnh2U0ZXUl82clV2RWYtaFpWZzhaNm43Rlhqdjl0eFFBZTZ2dWV1bU9xbnM3bUk0N3FQRzQ?oc=5) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AI-Assisted KiCad–Codebeamer MCP Integration Demo | Video | Demonstrates AI-assisted integration between KiCad and Codebeamer using MCP. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9Ja01fbHBZZUt1WjFfUl94S2JUX0N2a1p2ZklQbU1pc09lc2JmN1ZDNzdRWTZ3b05YTmt6UDhnVzdLUGlTVVNsSXh3bGtLaUEtWHBkTmFR?oc=5) |
| AI PCB Autorouting: What's Real and What's Hype | Video | Analysis of current capabilities and limitations of AI PCB autorouting. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTFA1TzBDQ3YxWks2V05Bbm5JMmtYWDJlUEl4RDVWcUFaejN3Zjg1X1VtelNGWURMRGt3MDZuYWVhU3BEWmVRYU55bU9HMXlBVFpIcTNlWDd3?oc=5) |
| PCB Layout Finished 10x Faster with AI? Here’s How... | Video | Tutorial on accelerating PCB layout using AI tools. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE5BMU82UW5FOFA4Sy1DLTVxNFd5MFRQT0dXV0R2S21TS0wyUUVPSzlxVzBZa3VKS09aTkQ3dWpVNE5ad1QtcVhJZHlMdjFMYU1yMVgyRmN3?oc=5) |
| Design for manufacturability refresher for engineers — Part 4: Digital tools and AI | Article | Part 4 of a series covering DFM digital tools and AI applications. | [Design World](https://news.google.com/rss/articles/CBMitgFBVV95cUxPOFRJQU8xdmFtRFI2NUtPNm1vUXV4dUV3b2tXVFhGZUN5dGc3QUhld3R1cnQ5RVpHMjlUeHFqa29mNUxlbGtFYjhiNnB0NFo4TDI3WG1lRkZFWjMwdEVFLUpjTlRqVHEwV05hVU1xNjNzclNpYVZybEtaVGhKWEpiUmRQZ2tqZVhDYUJIYnlkbTNHc3lBbEx2a3V6QzgzVUlBdnFMVV9JZnMtaDI4UmFZclVabVB3QQ?oc=5) |
| 直播预约 \| 用世界模型打造EDA智能体 | Event | Live stream on building EDA agents using world models. | [电子工程专辑](https://news.google.com/rss/articles/CBMiU0FVX3lxTFB3ZmV5MzdtU2lDdEdvV19GUVI2Y0I4UG01Mjd1VlVvbVY4ZEFzUU54bzFRdFJoRm1DVEs4ekk4VmQ1bU12c2RjVnhzU3lZRW9rN3NF?oc=5) |
| 还在熬夜画原理图？这个“数字搭档”把硬件方案设计卷到了新高度 | Article | Overview of a digital assistant for hardware schematic design. | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTFAwdDhSVWthZmZ3Rk90SFc5QkxZUmF1YkJuOWR2cDl0azRydmQ4RXJNWENzSjNmcm9HaEk1QkpQZHlCRHVWdHpxSmN0X0N5VjhibzZNWWM3VmVBU1I3?oc=5) |
| From Zero to Debug: A Software Engineer‘s Guide to Fixing Your First PCB | Article | Guide for software engineers debugging their first PCB. | [DEV Community](https://news.google.com/rss/articles/CBMiqwFBVV95cUxNT2Q4bDVNalVqUDVrSEFlMnZ6YXMzR21TTGFab1J6dnB1eVlmN3l6NTN5dXJUOUI4NEhVU0M1aDlWUXBpRGR1QzJYWndCMTN6UTBGbkhyMWxHMDJpTkRHN2w3SFFuN3FGamRVM0FjbnZOQW9DbVZfbjRuX3g5d3RLMGFFNUxWM2NDZ3NtX3p2cUdFbU80ZGdibUNId1hKczU4UWp3VnpmbUtFa1E?oc=5) |

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| aklofas/kicad-happy | GitHub | AI coding agent skills for KiCad electronics design. Works with Claude Code and OpenAI Codex. Analyze schematics, review PCB layouts, EMC pre-compliance, SPICE simulation, download datasheets, source components, and prep boards for fabrication. | [GitHub](https://github.com/aklofas/kicad-happy) |
| mentasystems/fragua | GitHub | AI-native PCB design tool. The agent designs the board, the human watches and steers. Schematic → routing → fab-ready zip in one loop. | [GitHub](https://github.com/mentasystems/fragua) |
| RID-Games/Xorics.ai | GitHub | Self-hosted agentic AI assistant on local hardware. A manager model delegates to a coder that writes firmware and designs PCBs as code, self-correcting against a real compiler and ERC. Plus datasheet RAG, vision, and voice. | [GitHub](https://github.com/RID-Games/Xorics.ai) |
| Vvg1105/pcb-procurement | GitHub | AI-agent pipeline that turns vague hardware project descriptions into datasheet-grounded, safety-reviewed, priced BOMs. Includes LTspice simulation generation and interactive HTML BOM viewer. | [GitHub](https://github.com/Vvg1105/pcb-procurement) |
| IntelligentElectron/pcb-lens | GitHub | Give AI agents the power to review PCB layouts. | [GitHub](https://github.com/IntelligentElectron/pcb-lens) |
| tigerfan/HerKi | GitHub | AI design enhancement system for hardware engineers, using KiCad as design base, Hermes Agent as intelligent hub, and an evolvable knowledge base as design brain. | [GitHub](https://github.com/tigerfan/HerKi) |
| SellenChen/kicad-ai-agent | GitHub | Windows KiCad AI Agent Beta with local side panel and CLI validation. | [GitHub](https://github.com/SellenChen/kicad-ai-agent) |
| DeconBear/actoviq-circuit-agent | GitHub | AI-powered interactive circuit design workflow — from natural language requirements to verified SPICE netlists and schematics. | [GitHub](https://github.com/DeconBear/actoviq-circuit-agent) |
| charlesmmorais/coppermind | GitHub | AI PCB-design copilot for KiCAD — an IPC-first, transactional, verified MCP server. Routing, native DRC/ERC, Freerouting autorouter, JLCPCB/LCSC, and a citable EE design-intelligence engine (IPC-2221). | [GitHub](https://github.com/charlesmmorais/coppermind) |
| xz0831/openclaw-brain | GitHub | Engineering knowledge-graph + memory served over MCP — ingests semiconductor PDFs into a typed, grounded, citable Neo4j graph for an AI circuit-design mentor. | [GitHub](https://github.com/xz0831/openclaw-brain) |
| atopile/atopile | GitHub | Design circuit boards with code! Get software-like design reuse, validation, version control and collaboration in hardware; starting with electronics. | [GitHub](https://github.com/atopile/atopile) |
| tscircuit/runframe | GitHub | Runs tscircuit code inside a webworker, view PCBs, schematics and 3D previews. | [GitHub](https://github.com/tscircuit/runframe) |
| palginpav/tracewise | GitHub | AI-assisted place & route for KiCad — datasheet-grounded schematic review, constraint generation for autorouting, analytical placement. | [GitHub](https://github.com/palginpav/tracewise) |
| VittoriaLanzo/Ohmatic | GitHub | Natural-language circuit generation with deterministic electrical verification. | [GitHub](https://github.com/VittoriaLanzo/Ohmatic) |
| oguzhan-canada/eda-copilot | GitHub | LLM-Powered Knowledge Graph for Electronic Design Automation — EDA Copilot. | [GitHub](https://github.com/oguzhan-canada/eda-copilot) |
| easyeda/eext-docs-generator | GitHub | EasyEDA Pro Extension: A project document generation tool for Easy EDA Professional Edition based on general LLM models. | [GitHub](https://github.com/easyeda/eext-docs-generator) |
| MaheedharBhamidipati/Artificial_Intelligence_Driven_Electronic_Design_Automation | GitHub | AI-powered EDA assistant that automates Verilog analysis, debugging, and simulation using a local LLM (Ollama) with a Flash-based backend pipeline. | [GitHub](https://github.com/MaheedharBhamidipati/Artificial_Intelligence_Driven_Electronic_Design_Automation) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| PDAGENT-BENCH: Characterizing, Grounding, and Architecting LLM Agents for VLSI Physical Design | arXiv | Benchmark for evaluating agentic physical design workflows requiring high-dimensional, multi-stage optimization under strict design constraints and coordinated interaction with diverse EDA tools. | [arXiv](https://arxiv.org/abs/2606.17253v1) |
| Agentic Electronic Design Automation: A Handoff Perspective | arXiv | Examines how LLM-based agents invoke EDA tools directly, embed retrieved knowledge in executable scripts, and hand off state across sessions and stages in multi-stage, handoff-heavy EDA workflows. | [arXiv](https://arxiv.org/abs/2606.19795v1) |
| SchGen: PCB Schematic Generation with Semantic-Grounded Code Representations | Hugging Face | Paper on PCB schematic generation using semantic-grounded code representations. | [Hugging Face](https://news.google.com/rss/articles/CBMiUkFVX3lxTFBGU0dvYlV4VURDVl9jTkNOdEd3am5NZjBlc0pJLXN1SmpaYnF6cU5RcS1EbGFQUENENGhTNWtjalZhTkZmeDNWM3R5U3JWYnZQVHc?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| tscircuit | Web tool | Open-source electronics design tool that lets you create circuits using React components. Design schematics, generate PCB layouts, export and manufacture PCBs online. | [tscircuit.com](https://tscircuit.com/) |
| salitronic/eda-agent | GitHub | EDA agent project. | [GitHub](https://news.google.com/rss/articles/CBMiUEFVX3lxTE5WdVZOU09TZVJXZlo5TENnSTFDM3M4YzRRdUxuQlhlNEFVbmhyMEJpQmtuMUo3Vk5EU0h5NnM5UWdlMGx5aDA1ZE9WenNrR3BK?oc=5) |
