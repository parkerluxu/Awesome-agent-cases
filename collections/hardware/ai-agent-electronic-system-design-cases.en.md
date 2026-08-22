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

## Resource Update (2026-07-05)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| piyushbag/awesome-pcb-workflow | Curated list | Open-source tools for the complete PCB design workflow: AI-assisted EDA, schematic capture, SPICE simulation, signal integrity, layout automation, DFM & fabrication CI/CD, hardware testing agents. OrCAD & KiCad compatible. | [GitHub](https://github.com/piyushbag/awesome-pcb-workflow) |
| shuvamk/openbench | Web workbench | The open workbench for electronics — schematic → simulation → firmware in the browser. Open engines (KiCad, ngspice, Renode, PlatformIO) behind one interchange format, driven by AI agents via MCP. | [GitHub](https://github.com/shuvamk/openbench) |
| mingyo186/partreel | Parts registry | Open, no-login KiCad parts registry for humans & AI agents — verified footprints, symbols & 3D models (STEP/GLB) with datasheet provenance + static JSON API + MCP server. | [GitHub](https://github.com/mingyo186/partreel) |
| laofahai/vibe-lamp | Hardware agent indicator | Physical ESP32 status lamp for AI coding agents, with built-in Claude Code/Codex hooks and a generic event API. | [GitHub](https://github.com/laofahai/vibe-lamp) |
| sharmaaditya5655/synapcircuit-ai | PCB design platform | AI-powered PCB design platform with multi-agent orchestration. | [GitHub](https://github.com/sharmaaditya5655/synapcircuit-ai) |
| vrosuits/eCircuit | Circuit design toolkit | AI-powered electronic circuit design toolkit: text-to-schematic/BOM/netlist, PCB autorouting, SPICE simulation. | [GitHub](https://github.com/vrosuits/eCircuit) |
| Be-bibek/neuroboard | PCB compiler | AI-driven PCB compiler for automated high-speed hardware design. | [GitHub](https://github.com/Be-bibek/neuroboard) |
| oaslananka/zaptrace | EDA kernel | AI-native, verification-first EDA kernel for prompt-to-fab electronics: ERC/DRC, routing, KiCad/Gerber export, MCP server, SDK, proof packs. | [GitHub](https://github.com/oaslananka/zaptrace) |
| muhammadmapkar/KiCad_AI_LoRA | Fine-tuning dataset | LoRA fine-tuning dataset for a KiCad PCB design review assistant. | [GitHub](https://github.com/muhammadmapkar/KiCad_AI_LoRA) |
| Zero-inadequateness813/amux | Agent session manager | Manage persistent tmux panels named for AI agents and humans, run commands in background sessions, and track output without losing data. | [GitHub](https://github.com/Zero-inadequateness813/amux) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| PowerAgentBench-Dyn | Benchmark | A benchmark for agentic AI in power system dynamic studies, evaluating LLM-based agents that automate multi-step engineering workflows by interacting with software tools, interpreting intermediate results, and autonomously planning subsequent actions. | [arXiv](https://arxiv.org/abs/2606.20401v1) |
| PCB-QA | Dataset / Evaluation | A manually created questionnaire dataset for evaluating LLMs over printed circuit board design and analysis tasks, addressing the lack of text-based PCB datasets and prompting methodologies for different PCB design file types. | [arXiv](https://arxiv.org/abs/2606.23704v1) |
| PDAGENT-BENCH | Benchmark | Characterizing, grounding, and architecting LLM/VLM agents for VLSI physical design, providing standardized benchmarks for agentic physical design workflows with high-dimensional, multi-stage optimization under strict design constraints. | [arXiv](https://arxiv.org/abs/2606.17253v2) |
| SINA | Tool / Method | A fully automated circuit schematic image to netlist generator using AI, converting circuit schematic images from research manuscripts, textbooks, and websites into machine-readable representations for analog and mixed-signal domains. | [arXiv](https://arxiv.org/abs/2607.01609v1) |
| VeriPilot | Framework | An LLM-powered Verilog debugging framework that addresses the challenge of tracing long dependency chains where root causes may be far removed from observable outputs, going beyond end-to-end test-output and compiler-feedback approaches. | [arXiv](https://arxiv.org/abs/2606.23759v1) |
| LLM-Guided Test-Time Discovery of Quantum-Chemical Approximation Algorithms | Method | Agentic AI systems that automate existing simulation pipelines for quantum chemistry, discovering approximation algorithms at test time without reliance on large-scale pretraining. | [arXiv](https://arxiv.org/abs/2606.20729v1) |
| Can Language Model Agents be Helpful Circuit Explainers in Mechanistic Interpretability? | Benchmark | Introduces AgenticInterpBench, a benchmark for circuit explanation built from 84 semi-synthetic transformer circuits with 163 component-level annotations, studying whether LM agents can assist in explaining localized circuit components. | [arXiv](https://arxiv.org/abs/2606.24026v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| CADY webinar - Design Smarter, Build Faster: AI for Modern PCB Engineering Teams | Webinar | CADY webinar on AI for modern PCB engineering teams. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE56Nk8ySEMxQ05MOWEzWlBHWTduY2ZOTDE0NzFVRW5UMHpaSU9TSUQ5T1Z4Y1NiQ29uQXhfcWVIWnhCclVFWXJVWHhTOHpDR1FaU3BvV2JR?oc=5) |
| Code-Based PCB Design with AI: Inside atopile | Video | Code-based PCB design with AI, featuring atopile. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTFA4T0lFSWZjMTV2M0wxbk1UWDJST3RPdENPeWw0NndXWk5wR056OUJGWjRRZGNfNFhmY1JfTHBMQnlyeW5iT2xYTlFhUmxNb08tNVNFZ09n?oc=5) |
| I Let an AI Code My ESP32 Sensor... Designing a Low-Power IoT Capacitive Soil Sensor (Part 2) | Video | Hands-on test of AI coding an ESP32 sensor for a low-power IoT capacitive soil sensor. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1EYVBHbmdLMDlNeUtvUUNLZnpoczZGaE4wRUM1dnRPZHFranhlRE5oeHB0SVZtNnRLNktUUjF6dGhqdTN5cTJEOFBGLTlSbF9kN192M3FR?oc=5) |
| 有人用AI设计出“花一样”的PCB，美轮美奂，赏心悦目，但是能用吗？ | Article | Explores AI-designed artistic PCBs and questions their practical usability. | [电子工程专辑](https://news.google.com/rss/articles/CBMiU0FVX3lxTFBucDdRNml0WW9XcDNtZFJYVFQtMFZLYWIxMjBXV0RvcXFBSWlWY2pLWE4tNW5LUHFtcXd5aTFRT1R2a0tEME9QTmpRcFRCeE5yRmxJ?oc=5) |
| ReActAgent 使用指南：构建会思考、能行动的 AI Agent | Tutorial | Guide to building production-grade AI agents with Solon AI 4.0's ReActAgent that can reason, use external tools, and adjust behavior based on feedback. | [oschina.net](https://www.oschina.net/news/471482) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Si2 AI for EDA Ontology | Industry standard | Public release of an AI for EDA ontology to accelerate industry collaboration and agentic EDA innovation. | [Business Wire](https://news.google.com/rss/articles/CBMiggJBVV95cUxOMnJXLU9aM1Ewd19Pdmo5T3lURFRZRTl4N0d3UkZFbW5QV1liaEY0UGJHMXFTeFlLeTNVZjlnNXB0aG42dFJ4cWJpTFNPc0pldFV0ZG05dWRfSG5HWldGWERXdXF0Wm5mdmM4enRyUjhfS25MM0Q2bFhRZjRtbWNXdEpvVVpjV1hRWGR0S0pkVGY0cjVjNUdWdlVBaGRzRy1zWVBva0JpSE1GQ2FwczlLY05HVXlZb2tOOHk1QWVPbTdoWElkOHBtcE9QMzB3ekp6dEc4WGxXSGZRVjhVQ3U4S2ZCYnRjV1plSVhMeDhQTXVsdmhReExyaXZQRXVBajN4NVE?oc=5) |
| Cadence AI Super Agents | Product vision | Cadence sees AI super agents as the next semiconductor productivity engine. | [EE Times Asia](https://news.google.com/rss/articles/CBMitwFBVV95cUxPNGYxQWUxZ3IyNHFOM1hRVzZld2I3eUl3aG1MZnV1NU55Qm1Qa0dNVW9BZzFnZFp3cjNacU5LZTlHWERmMzhWV0xjTHQ5T3FFVlZVV281ZVd3bHdYUWhYLVcxNkUtLTY5d0VobktNNEdtUDJva1JPTFkyQV9odUp5Z2JPRGJWcVppME9JSHJKSlZfRmpXZFh0c0JNV0dvRVJ1TWdaY2xBQ0NHWU14a2lxTWhsMy1IRTQ?oc=5) |
| Cadence ChipStack | Product expansion | Cadence expands ChipStack for autonomous design workflows. | [Engineering.com](https://news.google.com/rss/articles/CBMijwFBVV95cUxPV1BJbnBYTzBvTzVsTWE1UGgtN1VmVC1VUzRzTVRmSTlna0RuUHZaalRYQ3NMTjJpTmhvQ19fUjQxRm11VW01TGg4dHp2UHlsRnNyN1BQMVlPVWFwaFZLTjRtTk9pTnFDZ2w4ZkJLTTJTNDBwMWdWLTdWNXYtN2lNdndnVXRqemgzSmJnemNfUQ?oc=5) |
| Cadence Autonomous Virtual Engineer | Product | Cadence unveils fully autonomous virtual engineer for chip design. | [Evertiq](https://news.google.com/rss/articles/CBMiowFBVV95cUxNVjVwcTNnTDhvd21TSkZadFhjQVdmT19Wa2ZZbmFzWi1CeVVKdklLMWlUUWMyQUd2OHRLRGpXZ2xKUTN5blkwWUlDUDNiTC0zTzI4aW96bG14QTFPVXlxOUpSVkg3QUl1dkhaZzFQZmNIMEd3OVZYMGhjNHp1MldGVlQtdThoVnNJdTM5VjhsOFRRdnB3STlTSFQyc1BwZ3dQOVlF?oc=5) |
| Cadence Autonomous AI Design Engineer | Product | Cadence autonomous AI design engineer accelerates chip verification and development. | [EE Times Asia](https://news.google.com/rss/articles/CBMirAFBVV95cUxQa1JLdnZTci1QYnpBbnpiUzJHX1VBN1QyT0dmenNYY0owVmllbV8tdjBwb1FyU2VxRVMzaWk2UlYwR2VCZHlpOFl0RUd6TXFsUTdGN1BnclM5ajRfdDhaT3FNT3NtdTI3eWZ5V1k0ZkJuQXNubEctNGw3MUUxUFVkQWFMY3Y5YUpSelhCa3psN2Y5bHk0eDNuUGM1UVN3TVhiMnQwLWR5dFc0c1BL?oc=5) |
| 自研Agentic AI EDA平台 | Product | Self-developed agentic AI EDA platform helping chip design enter a new stage. | [content.foshanplus.com](https://news.google.com/rss/articles/CBMiekFVX3lxTE9LSktIVEkyandXcTVncHA3bVBWRlUyc2RIVWd5UXdyS1RGT25NT0dzVUNrZmo4OEd0RkRkOWZIeWVaQ2NNNUtrS3I1ZWdkVzkwWHZwRDFTVG5UWVlVNW5oTnhhWE9HTEdlTldkY2tqaWl5QkxFWWw3MVJ3?oc=5) |
| Graser TECHTALKS 2026 | Industry event | AI in Sync: Graser TECHTALKS 2026 highlights electronic design paradigm. | [digitimes](https://news.google.com/rss/articles/CBMihgFBVV95cUxPYURITnZQblZydFpLWGU1RVlmMXlpQ0hTUU5maEJJdENna2ppSnVUR0I2VU16Zm5xaWhEQWg4d1FuT1NOLTRNdXZETWtlakZmU1M4WHhjWmtKbXdadnpxZ0pvcVphNWJqMDZmNDhRUERXMjNSUGlGY2NHUDNERzdoX200WFhOQQ?oc=5) |
| When AI No Longer Just Assists but Controls EDA Workflows | Industry analysis | Analysis of the shift from AI-assisted to AI-controlled EDA workflows. | [All-About-Industries](https://news.google.com/rss/articles/CBMiygFBVV95cUxObTF6UmRiYmlacktibThVbVJjclNqRWtZSFgzNTB6U21vTktocE5BUzYwekc4Q3lPNHZxb2hpdTR4Y3d6LXJZM0xEZFBWQ0MzS0xwVHl2ZkF5TjdiWU9YY1pWZlZyb2JIcF9yY1pGZWZ4REp1a2owei1sb3JvQWdQcllyLUo5ajI4UjNpdTk2MjFuWEtkZjJCMkRKaUwxeHA2VDhUbEJhTTA4RDN4TEN6b3NJeFVpRGpHSE1nTnFEZTM0YVNnZlJmRXV3?oc=5) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| tipoLi5890/altium-kicad-cli | CLI + Claude Code plugin | Zero-dependency Python tool to read Altium and KiCad files, run ERC/power/BOM/diff/pinmap checks, and draw KiCad schematics. Built for AI coding agents. | [GitHub](https://github.com/tipoLi5890/altium-kicad-cli) |
| tylerdotai/nic-pcb-agent | KiCad assistant | OpenClaw PCB design assistant for KiCad — schematic generation, headless PCB layout, DRC validation, board inspection, BOM, and manufacturing documentation. | [GitHub](https://github.com/tylerdotai/nic-pcb-agent) |
| HiwarkhedePrasad/CircuitBot | AI design tool | AI-assisted electronics design from natural-language intent to KiCad-compatible schematic and PCB files. | [GitHub](https://github.com/HiwarkhedePrasad/CircuitBot) |
| mixelpixx/Konnect | KiCad plugin | AI-assisted PCB design for KiCAD 10. Native plugin — a single Rust binary exposing 171 schematic, layout, routing, design-review, and manufacturing tools to Claude or other LLMs. | [GitHub](https://github.com/mixelpixx/Konnect) |
| eigencore-org/tracewise-kicad | KiCad plugin | AI-powered PCB and schematic review plugin for KiCad. One-click DFM analysis, component verification, and design recommendations. | [GitHub](https://github.com/eigencore-org/tracewise-kicad) |
| tscircuit/circuit-to-svg | Conversion tool | Convert Circuit JSON into Schematic/PCB/Assembly SVGs. | [GitHub](https://github.com/tscircuit/circuit-to-svg) |
| alplabai/signex | EDA tool | Open-source, AI-first EDA tool — KiCad-compatible schematic and PCB editor built in Rust. | [GitHub](https://github.com/alplabai/signex) |
| biosshot/easyeda-copilot | EasyEDA assistant | AI-powered assistant for EasyEDA — generate schematics from natural language, browse LCSC components, design PCBs with custom DRC configurations, and get interactive circuit design help. | [GitHub](https://github.com/biosshot/easyeda-copilot) |
| tscircuit/tscircuit.com | Web platform | Main website, playground and online development environment for tscircuit (React Electronics). | [GitHub](https://github.com/tscircuit/tscircuit.com) |
| freudenthal/skidl-eda | AI harness | AI circuit-design loop harness on the skidl stack. | [GitHub](https://github.com/freudenthal/skidl-eda) |
| QuantumLogicsLabs/DigitalLogicsStudio | Web design tool | Digital Logics Studio — AI meets web to design, simulate, and simplify digital circuits. | [GitHub](https://github.com/QuantumLogicsLabs/DigitalLogicsStudio) |
| VoltAgent/awesome-openclaw-skills | Resource list | Curated list of OpenClaw skills. | [GitHub](https://news.google.com/rss/articles/CBMiYkFVX3lxTFBvUjMwZnhqbzFFN3FROXdMVE9wNnpjWDFvQjQwMTRfWVJ0SXZNTlpxVG9EcDl3NllJN19SLWZRbDhvc1lxQlJWTEs0NDRGT2Rjaklub2NiWXZUay1SWEdEdzZn?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OmniLayout: A Schematic-Coupled Multimodal Benchmark for Constraint-Aware Geometric Reasoning in PCB Layout | Benchmark | First benchmark designed to evaluate LLMs on constraint-aware geometric reasoning for PCB layout. | [arXiv](https://arxiv.org/abs/2607.03261v2) |
| PDAGENT-BENCH: Characterizing, Grounding, and Architecting LLM/VLM Agents for VLSI Physical Design | Benchmark | Standardized benchmark for evaluating agentic physical design workflows in VLSI. | [arXiv](https://arxiv.org/abs/2606.17253v4) |
| Can AI Draw Science? A Benchmark for Evaluating Scientific Figure Generation by Text-to-Image and Multimodal Models | Benchmark | Evaluates scientific figure generation including circuit schematics and diagrams. | [arXiv](https://arxiv.org/abs/2606.28406v1) |
| Weave: Verified Netlist-to-Schematic Conversion via Layered Graph Layout | Paper | Deterministic approach for converting SPICE netlists into human-readable schematics with connectivity guarantees. | [arXiv](https://arxiv.org/abs/2607.03835v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ESIm – Democratizing Electronic Design Automation Through Open Source | Video | Talk on open-source EDA democratization. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9zdmFRMWluTmNvX21fYmFRSFVLbUZJMU8zYUduMndQN2otRjVwUUhmaHV3Vm5FRjQ1NzhsdW82eS1zS3BEYlZMcGY1MXloRWdxYWtNbVRR?oc=5) |
| Browser-based tool helps to streamline PCB test jig design | Article | Browser-based tool for PCB test jig design. | [New Electronics](https://news.google.com/rss/articles/CBMipwFBVV95cUxQVWtmcjZKWVJlUWNMd1hneDc5Z2ptZWJ4ZUZ2N0tkNy1lZTU0NEo1eG5VWnRGZW13YWRXbjB1ZkNYRFhZd3ROX2RwaF9KeGs3a1V4clVuSFVVTUNTLUMwYi11b0d4R0hKbkx6eDRMdUVXcFRaSHBtZ3pRZDVNaFIxcFJNbzRvd0FVcTZHRUpRU3VReDhJd1hZVkN3a1VmbkJfZEtkaVo3OA?oc=5) |
| The Dawn of Agentic AI Super-Agents | Article | Discussion of agentic AI in EDA context. | [EEJournal](https://news.google.com/rss/articles/CBMiekFVX3lxTE51RmFOOUNHLWk1elVWRU5sd3J0MHVIaXcyQTlkQ0R6S0JUaGpXY2hLUGs4UGlwdGlFc25wRmxyOXpGVUJ1N0NzZ21yTkhBeTdKeTFQUUY4OWlHOWNSbm9KZGU1eU1XV3d5Rng4Y3hKbUtkeUZ0TkZDVGVB?oc=5) |
| PCB 电路板热设计仿真分析与 AI 大模型深度学习交叉研究 | Article | Cross-study of PCB thermal simulation and AI deep learning. | [blog.csdn.net](https://news.google.com/rss/articles/CBMia0FVX3lxTE40RG43TGpGTUtYdjlWaG5xSXhjSnA1TmltbmJXVE8xcmo5SjhJWEVKV09RX21rLWt2bkVHWEFNR0hnYWxEWl9NbkhremdQVmdaODliTzNuVl9YTTFGTENEclIxOWtiXzdzUjhr?oc=5) |
| 启芯宸光陈文超：半导体数据不出域，38个智能体如何打通芯片设计“黑盒” | Article | How 38 AI agents break open the chip design black box. | [智东西](https://news.google.com/rss/articles/CBMiSEFVX3lxTE1tdEg3aGxYZFg2ZzhnS3NaUTltWVJMSDRGMTFfdy1GcUQtSC1Qcm12S3k5NmdjeVhhajhxNmxaMUtpTUNuLUtSOQ?oc=5) |
| 18张图看懂 PCB AI 算力底层革命 | Article | Visual guide to PCB AI computing revolution from GB200 to Rubin. | [电子工程专辑](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9WbTczZ1VlallwS1VMZjlhak9QcU1sam9jVjhuU3VoR0E4YnFnMk5EdVJYU0JidFJ6SHpMMVVCck5zREZ0ODYwZU1HVk9lWWRiWDZF?oc=5) |
| A Practical Guide to Spec-Driven Development With AI | Article | Guide to spec-driven development with AI. | [Design News](https://news.google.com/rss/articles/CBMinAFBVV95cUxOZGRJSGdGM3o2clN3VDBhbUR3V0duUHZsQW9LSW94RHMzMl90R2p4WkZ5U2pENEVrT0prbFl0SjhXR25maHVfX3BiVzR5Mi1QRWtYOVhFVGQwQnZ4cjJNX1g4NkM5SXd2cFNzbkdPSVBEZmJ4R0xUZFc4Vl9SWl9temRSY3dGaUx3bmZ0S3JMckt4T3RHS2laWFBFOWg?oc=5) |
| What Level 5 Autonomy Could Mean for Chip Design Engineers | Article | Discussion of full autonomy in chip design. | [embedded.com](https://news.google.com/rss/articles/CBMijAFBVV95cUxQOHhtQkZueERMelRUNEc0dGIzYmU1VWhMbmZtQ19TYTdMZm9LNG5fY2M3TW5lUnZFbGZPQnlEUzBQRGZqbUZUZC00LVpnVDd3d1J0OHVqMUhqTFYtdk5qVnFfeVJqX3JwOWhRVUxQd2R1RE5Cc1NLejJ0RzNlNGJrMVVIY0piUlpLLWlfUA?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ScarfBench | Benchmark | Benchmarking AI agents for enterprise Java framework migration. | [Hugging Face](https://huggingface.co/blog/ibm-research/scarfbench) |

## Resource Update (2026-08-01)

The following resources were identified after the original article's publication and represent new leads for AI-agent-driven electronic system design.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| oaslananka/kicad-mcp-pro | GitHub | AI-ready MCP server for KiCad: automate schematic, PCB, ERC/DRC, DFM, BOM and manufacturing review from Claude, Cursor, Copilot and other AI agents. | [github.com/oaslananka/kicad-mcp-pro](https://github.com/oaslananka/kicad-mcp-pro) |
| NijoP/pcbflow | GitHub | Autonomous, AI-assisted PCB design workflow from requirements to manufacturing-ready files. AI-driven schematic generation, placement, and routing with human-in-the-loop review (EasyEDA + KiCad, any AI coding agent). | [github.com/NijoP/pcbflow](https://github.com/NijoP/pcbflow) |
| tscircuit/jlcsearch | GitHub | Find parts from JLCPCB matching design constraints (resistance values, capacitance, tolerance etc.). | [github.com/tscircuit/jlcsearch](https://github.com/tscircuit/jlcsearch) |
| DeconBear/vibe-analog | GitHub | AI-powered interactive circuit design workflow — from natural language requirements to verified SPICE netlists and schematics. | [github.com/DeconBear/vibe-analog](https://github.com/DeconBear/vibe-analog) |
| sandraschi/kicad-mcp | GitHub | KiCad PCB/schematic automation via FastMCP — headless Gerber/export + agent inspect. Hybrid GUI/headless for Cursor / Claude Desktop. | [github.com/sandraschi/kicad-mcp](https://github.com/sandraschi/kicad-mcp) |
| oaslananka/agent-tools | GitHub | Central catalog and marketplace for AI agent tools, MCP servers, plugins, and engineering workflow skills. | [github.com/oaslananka/agent-tools](https://github.com/oaslananka/agent-tools) |
| VortexJer/AISight | GitHub | Design and review tools built for AI agents: 3D CAD, PCB, shaders, textures, and animation — code in, renders + machine-readable reports out. | [github.com/VortexJer/AISight](https://github.com/VortexJer/AISight) |
| Brillar0101/claude-micro | GitHub | RP2040 macropad for supervising AI coding agents: 13 hot-swap keys with per-key RGB status, encoder, joystick, 4-layer PCB, CircuitPython firmware, printable enclosure. | [github.com/Brillar0101/claude-micro](https://github.com/Brillar0101/claude-micro) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Can AI Agents Really Complete RTL-to-GDS? | arXiv | Evaluates AI agents on a PicoRV32 RTL-to-GDS flow using commercial EDA tools, covering synthesis, physical implementation, and ECO optimization. | [arxiv.org/abs/2607.17528v3](https://arxiv.org/abs/2607.17528v3) |
| Symbol and Footprint Database for Electronic Components by Agentic Recognition and Generation | arXiv | SFgen: agentic recognition and generation flow for component symbols and footprints using multimodal LLMs; 86% symbol and 80% footprint accuracy. | [arxiv.org/abs/2607.19767v1](https://arxiv.org/abs/2607.19767v1) |
| LLM for EDA in Front-End Design: Challenges and Opportunities | arXiv | Surveys LLM potential as unified interface for HDL generation, testbench construction, and design space exploration in front-end design. | [arxiv.org/abs/2607.09616v1](https://arxiv.org/abs/2607.09616v1) |
| RF-Agent: A Practical Framework for Building Language Agents for RFIC Design | arXiv | Textbook-driven knowledge distillation; multi-agent QTSA pipeline converts RF textbook corpus into a domain-specific benchmark. | [arxiv.org/abs/2607.18772v1](https://arxiv.org/abs/2607.18772v1) |
| Towards Reliable AI-Assisted Analog Design: Template-Constrained LLM Agents for SAR ADC Generation | arXiv | ATLAS: end-to-end, multi-step LLM agentic framework for analog design producing SPICE-verifiable schematics. | [arxiv.org/abs/2607.14165v1](https://arxiv.org/abs/2607.14165v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| How AI Redefines PCB & Package Design | YouTube | Video discussing AI's role in PCB and package design workflows. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1pdkNrbno4NFpmZHJPNzhBakdBZGRZZU94QTE3UXJWcGJ2aXpvaGlMWFVZSEs2WnRzRU8tR1p3aURnYTZQTXM1bXhxakstTHdCbGR0Wjln?oc=5) |
| From Chat to Schematic: Claude Code Meets EasyEDA Pro | Medium | Practical walkthrough of using Claude Code with EasyEDA Pro for schematic generation. | [medium.com](https://news.google.com/rss/articles/CBMinAFBVV95cUxOVjRNQ1lHZjJENGxkdmxnQlBxakdIU3NQZTdQVG1RSS1hb0oyQXo0NG1kM3ZydEQzUHVoejVhS085WW5ONE9fLVMxUXNaMWNZSHNHR3MtRy1iZDgzeTBJR0c0OWRlSllvdXloQWpaZ2RzeENmZTQyOU8ySWpYS0djU2dRQk9GR1pxYlByd2pKRG1iVVZ0SGJZNUZjU24?oc=5) |
| tscircuit入门教程：5分钟搭建你的第一个电子电路项目 | CSDN Blog | Chinese tutorial for setting up tscircuit and rendering a first circuit project in 5 minutes. | [blog.csdn.net](https://blog.csdn.net/gitblog_00516/article/details/153722461) |
| The Age of Agentic Engineering for Hardware | Substack | Essay on the shift toward agentic engineering workflows in hardware design. | [assistedeverything.substack.com](https://news.google.com/rss/articles/CBMijgFBVV95cUxPX3lUN09jYXdianVIQmtEZTI2eDJFRk5nMEdBVVFlb2NnTEEwazJoVkFfMHpLNFcwb0pSM1pVTE1jU0hLZHdkeTUtTFdNZVhrbEp1MHhoSDFUU0drcy12dUdfWkxaUnl2ZlRZYW9aMTZNT0JWdGRoekQ1Mlh6OWpneFFtSzZ2d0JaV3BkVnRR?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Cadence AuraStack | Product | Cadence expands AI agents with AuraStack for PCB and advanced chip packaging. | [Forbes](https://news.google.com/rss/articles/CBMizgFBVV95cUxQN2RZdjJWSWtLZmU4Rmo1Sm5VSXZWLXRXNzVHQ3lCQUZ4VktVcHdVUmVRQ0pWa1ktOGRYTklURHpiZjc5T3BRVmlNSXFXNGZueTZfWmNZQm51ejY5a0wycEI4YmduYk1EdlZiSUpjbjdlMGNQOER0ZUJsVEcyZjdLZ21XVVp6dkRkTjV2M0dJU3MtWmZIZ2s0ZHNJcnVjelRIM1VqWmZRMVo3YkxoUFBHY1BlMW9QOHdGNThLN0xlWHdWY3QzOFBkWmNDblkxZw?oc=5) |
| Siemens Agentic AI Workflows | Product | Siemens advances self-verifying agentic AI workflows for semiconductor and PCB design; hooks chip design agents to physics engines to prevent tapeout errors. | [Siemens Newsroom](https://news.google.com/rss/articles/CBMiZkFVX3lxTE5sV0NLTWRDRmNYbHEwODE5a08wSnpZbUpmTGJSMmhaLTRrZkFmQmpibVpaNkhGNmhaMURLcHZaN0pqbmpqbmFiTjV2LU91SHhvWUJ4Ry12WEY0THc3dFFwbVlPLWg2QQ?oc=5) / [Tech Times](https://news.google.com/rss/articles/CBMixAFBVV95cUxQcVFDTGJVNkpyOWpxaVBocXo3UmpEOTRuVWZFVG5DeEk2NjloczZ6c0s2RkxEaGRNWlc2VXZUUWRFR1VSTVhWZVlabDk1em4wRjBUZWJHZmxoVVNGeWU5M2EwVC0wODdyU2hmc3ZIYk9KbWd4OTl1U050N2c3RDhvR3pxUjZqaFhwOEN0UHhUcTg0d1hzWjFSUURFRVJqVTJvYmtoNWhkeW41NWpHSVVnR1NGeUJ4TUtUWTk4NHE0NXFzNGNQ?oc=5) |
| Cadence Agentization of Chip and System Design | Product | Cadence completes agentization of chip and system design software. | [hpcwire.com](https://news.google.com/rss/articles/CBMiowFBVV95cUxOalZqbkVnVVNZeFlrZnc4TEgyb2l6ZUxmQVhLTTZDYW9obF8teWZLODRzWHBoVkJJejVYSmpfV0FTUzFVWm9EMms5UXlESzF2MkEtc1FObmwzb244U00yUFV3NlBLZDR1ek4zclVrcmh6NTZqWGJLc3pKdFJXYjRuVjJxWXhOc251WUNFaDdfdGpBX0xENTlFWXNRR1EwbGt3d3Q0?oc=5) |
| Xpeedic + Lenovo EDA Agent | Product | Chinese EDA vendor Xpeedic and Lenovo release AI Agent at DAC; library-building efficiency improved 50%, design optimization 50%+, simulation speedup 80%+. | [驱动之家](https://news.google.com/rss/articles/CBMiWEFVX3lxTE9SNkt4U1cyM1ZKRV9wcGVETEJFR3RCOGlKdTh3YS1EUEw0S0swdjZuWnBnRUdsd2UtS0t5WDRGUzlSTEtORmFpTDBmUVhNNlBIQUZGdXI5ZzE?oc=5) / [SEMI](https://news.google.com/rss/articles/CBMihgFBVV95cUxOQXVTR1p5TTYtbFJkeEJ5N1F4Tm5HMnc1QzlxNmJnRjFtekpUWmJzQ2RYWHg4Z1lma3I4SmpNOTVINUhBMXBCc25Ua2QwbXlyakV4LVdmd3QtR2Q5dlpOZjdQZjRpdGZ0ZXhyRGgwTi1SN2JkTWstM1hWX2UxRFVYMWgyWnZyUQ?oc=5) |
| NVIDIA Agent Toolkit with PhysicsNeMo | Product | NVIDIA expands Agent Toolkit with PhysicsNeMo and CUDA-X libraries for engineering, design, and build workflows. | [NVIDIA Newsroom](https://news.google.com/rss/articles/CBMigAJBVV95cUxOZXhNSW9TSjVybFBBN1BJT3l2N0l0RDJIRDJ5bjZzR1RfUUFoZEpZNU5FVlpRUHVNenNPbGR5X0l2b2dVeHV0dDhoZHhqS2c0a29yOXZ3V2FtRElzRGs2a1NidmlIVWRMOS1ka19iaERsQnk3WUVQdURqQWlDdWk4VWZqWHFXUjhLVWpBNWVJOTBHOVZIbWxQVFJzQUJuVmE1ZjNzWDFGcldEOFJ3bVFJZDg4QkNKUmtIcG5lRVQwUU5uVkUxRHBxbWljeDVWWWs5azh0OWxKekdDWENoQ3RVeVB1TzVtVFdkODNMM1FNT3lha1hiY1RCRmRkN1F0aVhW?oc=5) |
| NVIDIA Nemotron 3 Ultra | Model | Open model leading on accuracy and efficiency in agentic RTL coding. | [NVIDIA Developer](https://news.google.com/rss/articles/CBMiwwFBVV95cUxNTjRHTzBSZnFuV21LQVc2Um4yZXhRdllldkd4VGRRdFdRZXN1eU83SER4VzRkU0RRZkVZbVVqRFVrc2VBUnF2Wmc0cXlqNVBGUVRWcU1pRDRwR2VyNTUybzRvX2RXdFJ3a2dGN243cS00d09kNllXdkdPSEQzd0FPNy1iT0J5WmpQTFZEamZjY3J4b3hUSDFNamtqZU80WDdqX1lsUkFBeEFVbWdpSE5fWVlIQTlKaFlPMXYwSVFYaGU3RzQ?oc=5) |
| Synopsys Autonomous Engineering Workflows | Product | Synopsys showcases comprehensive autonomous engineering workflows from silicon to systems, developed with NVIDIA technology. | [Synopsys](https://news.google.com/rss/articles/CBMi8gFBVV95cUxQeTdfZzAwNlFHX2RGRDhJTFRsaW1QTTdyTzRDejNJSm9COFF0XzhuS0RrYXRoYkxYc184Yk16VnBBLUFGRXR4TlFjN2lqNVhWVG1tM2pSQ1pXU2dRWXhCSVEzUjFhaFJZcjFOekVsUmRkaUl3X0ZsVGZ1WlRxZFdvX0ZfQlBNcVZ6UUVmMDBWSU96OGRTSFVpYnRTZmpXZEdtSmNfUlpBUDFQaEcyaWFQNmhhNkFseGw0WC1ON0w2aUlOZDhJTmFGc0FRUmYwMm1qRmNDOUxpQXRGNGNsWE1LQk8zTmF0c2ZLQXdCX3NyYkxzUQ?oc=5) |

## Resource Update (2026-08-22)

The following resources were identified after the original article's publication and represent new leads for AI-agent-driven electronic system design.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| tipoLi5890/akcli | GitHub project | AI-native schematic design agent for KiCad (zero-dependency pure-stdlib Python CLI). Authors and edits `.kicad_sch` from JSON op-lists with net-diff safety rails, runs ERC/design/intent/BOM checks, simulates via KiCad's bundled ngspice, sources real parts, fetches datasheets, and imports Altium `.SchDoc`/`.SchLib`/`.PcbDoc` read-only into KiCad. | [github.com/tipoLi5890/akcli](https://github.com/tipoLi5890/akcli) |
| GittieLabs/hardware-agent-studio | GitHub project | Open-source, local-first AI assistant bridging PCB design (KiCad) and Mechanical CAD (FreeCAD). | [github.com/GittieLabs/hardware-agent-studio](https://github.com/GittieLabs/hardware-agent-studio) |
| deadbringer17/Copperbrain | GitHub project | Model Context Protocol server exposing schematic capture, netlist generation, BOM validation, and PCB toolchain integration to LLM agents. | [github.com/deadbringer17/Copperbrain](https://github.com/deadbringer17/Copperbrain) |
| JMET04/aicad-agent | GitHub project | Deterministic CAD/EDA agent plugin for 2D drawings, AutoCAD, SolidWorks, KiCad, with review gates and auditable delivery. | [github.com/JMET04/aicad-agent](https://github.com/JMET04/aicad-agent) |
| Jie-Xiao-2026/EDA-Copilot-Agent | GitHub project | Local EDA assistant with deterministic engineering tools, rule engine, traceable workflows, BOM/report generation, and human-in-the-loop agent orchestration. | [github.com/Jie-Xiao-2026/EDA-Copilot-Agent](https://github.com/Jie-Xiao-2026/EDA-Copilot-Agent) |
| embedded-society/altium-designer-mcp | GitHub project | MCP server for AI-assisted management of Altium Designer component libraries. | [github.com/embedded-society/altium-designer-mcp](https://github.com/embedded-society/altium-designer-mcp) |
| tscircuit/easyeda-converter | GitHub project | Converts EasyEDA JSON PCB footprints into tscircuit JSON. | [github.com/tscircuit/easyeda-converter](https://github.com/tscircuit/easyeda-converter) |
| tscircuit/tscircuit-autorouter | GitHub project | State-of-the-art MIT-licensed PCB autorouter. | [github.com/tscircuit/tscircuit-autorouter](https://github.com/tscircuit/tscircuit-autorouter) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| EDATracer | arXiv paper | Agentic framework for large-scale EDA artifact analysis (source files, scripts, logs, netlists, reports) across heterogeneous design stages. | [arxiv.org/abs/2608.04032v1](https://arxiv.org/abs/2608.04032v1) |
| OmniRouting | arXiv paper / benchmark | First large-scale benchmark for constraint-aware spatial reasoning in PCB routing, evaluating LLMs under geometric, topological, and electrical constraints. | [arxiv.org/abs/2608.04434v1](https://arxiv.org/abs/2608.04434v1) |
| Open-Source LLM-Driven Formal Verification | arXiv paper | Multi-agent pipeline for RTL repair combining formal proof with an entirely open-source toolchain. | [arxiv.org/abs/2607.28877v1](https://arxiv.org/abs/2607.28877v1) |
| AaLLM | arXiv paper | End-to-end analog circuit design framework from topology generation to sizing using LLMs. | [arxiv.org/abs/2608.13472v1](https://arxiv.org/abs/2608.13472v1) |
| PICopilot | arXiv paper | LLM-based agentic framework for photonic integrated circuit design via script generation. | [arxiv.org/abs/2608.01791v3](https://arxiv.org/abs/2608.01791v3) |
| NetlistBench | arXiv paper / benchmark | Structure-verified benchmark (2,342 cases) for evaluating LLM reliability in SPICE netlist recognition and manipulation. | [arxiv.org/abs/2608.12197v1](https://arxiv.org/abs/2608.12197v1) |
| SeqFeed | arXiv paper | Improves agentic RTL code generation with sequential behavior feedback across clock cycles. | [arxiv.org/abs/2608.16934v2](https://arxiv.org/abs/2608.16934v2) |
| VClare | arXiv paper | Framework for resolving imperfect specifications (vagueness, contradictions, incompleteness) in LLM-based Verilog generation. | [arxiv.org/abs/2607.24854v1](https://arxiv.org/abs/2607.24854v1) |
| Chat Debugging | arXiv paper | Exploratory study of human-AI collaboration for debugging analog circuits on breadboards and PCBs via LLM conversations. | [arxiv.org/abs/2608.02955v1](https://arxiv.org/abs/2608.02955v1) |
| NeuroAbs | arXiv paper | Neuro-symbolic RTL abstraction framework for property checking acceleration. | [arxiv.org/abs/2608.17304v1](https://arxiv.org/abs/2608.17304v1) |
| ORACLE | arXiv paper | Multi-objective reinforcement learning-based analog circuit design optimizer with LLM-guided exploration. | [arxiv.org/abs/2608.04999v1](https://arxiv.org/abs/2608.04999v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| DAC 2026 Live: AI Chip Design Agents Hit Production | News article | Coverage of AI chip design agents reaching production status at DAC 2026, with Nobel Laureate joining the debate. | [Tech Times](https://news.google.com/rss/articles/CBMizgFBVV95cUxQdllUc3d5ZDlPLThGc1JxczR5NmhNbnFvN3JOYWFQNU1wTlpKYVcxbHMxN2JkVXhpaU1vUGpNZzFhMnVWc1lZQXNnYm10dHVSN3ZKaEZxNVZBSmZualM5bGlxVi1iRGZRUWozbHNMUjBBRjUyMFZmSDdVTEw3ZWxFME1ObXg0b3diSVpOZXZodWp1bElzTVZnXzhuUUEzMnhRWjR2clQxRkFjTC14MExlcjdtY2xEbzdTMEZVbTAxVGN1RzdpMHlOMk82bHRyZw?oc=5) |
| 嵌入式IDE变天：开发正在Agent化 | Blog article | Discussion of how embedded IDEs are becoming agentized (Chinese-language source). | [blog.csdn.net](https://news.google.com/rss/articles/CBMibkFVX3lxTE1GeDJQcHF0ZlFoQzl5ZkxHYUVXdTlBVnFuSXR3OTdSX2I1eHBGYmxiNlBmZjZsZ2pPLVdGVEo3SURvRDFkdzdHOUsxSFBNN19EZU8zWU9BT3NvRmlBTVpIcDF4MVVtYkpnV3V0aHRR?oc=5) / [36 Kr](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1WM0lqX184YThERTg4OGZiMnNiVHBtWTBrVjlvaXB3dDhRMHU0THRlTnhFMUVHVHFyWDFDVUxwQ05SbHB6OEpKSXJnT3dJUQ?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Siemens AI Agent Upgrade | Product news | Siemens upgrades its AI agent to enable self-verifying agentic AI EDA workflows. | [All About Circuits](https://news.google.com/rss/articles/CBMiugFBVV95cUxQNGVwTXZhMlpkUGVNdXhEdkxLQWpIcGNfbEVFUVZtdUZHMm1scVN0Q1BpVFFqckthZUVfTGNacDNjUmstdnlGdzBjLUJKcS11dm5MbmdaTTNDNHRWT1hZam4zYjNxbEhDOWVQTTAxZWVqR1hlbExGX3M4WXg3NzVGSVVzeVNkLXctbndZLWN2aktDVnlqT25UZF9nbldvOTdNZUtUeGc2b2RpeFpLM2NkbG9mZWk1NGVhdWc?oc=5) |
| Siemens + NVIDIA EDA Integration | Product news | Siemens boosts its EDA with NVIDIA AI tools and hardware for agentic engineering of PCBs and semiconductors. | [Fierce Sensors](https://news.google.com/rss/articles/CBMitAFBVV95cUxPbDF1Njczb3hCeUhnbGxsN3RWQVhUaHNXcDFMendXZGF1MFNHVUl2Ql9IczI1azVUanZjeGl5TUg0ek1uQVhnMHV0OUZ0NWlaQnBZUXVYOHNBRHc5dnZ6RVlpX255UXROa21iQlFoNVlrLWxWM0I5dmxYTG1kR3dNVWJpUVpkMXB0eWpGdzlLMUZHSnl3YlJoSDZ5bVNQVk5Ba3g4YTVVRjBDZ2MyVTMyaUhNSjI?oc=5) |
| Cadence Agentic AI Platform for PCB Design | Product news | Cadence develops an agentic AI platform for PCB design. | [embedded.com](https://news.google.com/rss/articles/CBMigwFBVV95cUxQa3VLYkpqS2NZV0pPdmVpb09Rc3g4dm1sR25rVElPbUR1clN0dVdrN3VIdVNodExkeno3U2FLWVU5VzR5eWNDUkZDSDlIZXFyNUV1bXdGREdrY09PRV9tNy1xc0J2dFF5cHp4SjdzdUNsWkNVeHpxQ2VNV1JFeDJRSURHTQ?oc=5) |
| NVIDIA Agent Toolkit Expansion | Product news | NVIDIA expands its Agent Toolkit with PhysicsNeMo and CUDA-X libraries for autonomous engineering and chip design. | [Quiver Quantitative](https://news.google.com/rss/articles/CBMi-wFBVV95cUxOaDRNVVI1bHNFNDFIZFBOY3R3UjYtX2VXYV83WEJVNDhSYzFuajZXbWtmb1B4NGs2LThBdHFSY1R4QlExNER1NVhCMlF6bEUxSFpIYk41VVUtSzdxZjNUSzMzWGNlNHJIQmdCeHpOLU9zcXduYzZ4cVcwNlA4NS1GRnkxS24xX1c4Y0Y1cTZhcWJGSkZxZDZOaXhyTlNpNXJqVjd4aTU1YlY5bDJfOFJfS2x2MWxOUFpHRXJZUXk1NFJJRzM3UlVfdU5OSDNYNU9jVVJMQk5CalZ0azItYXE3dFljcEpYQnREdUlSa2dfX2Q3UWFxTEY2WXFjUQ?oc=5) / [NVIDIA (Chinese)](https://news.google.com/rss/articles/CBMi-gFBVV95cUxQdnctRmxwdHBWend6aHVwRGlZVGVMSEJkS1dCYkRRZU5XQURsN0dCNC1tT0tqaGhCcEFrVW1iM1puamZ0cFZxQ0RnRWZ5NDhvVVZJaUY4SWpCQ19PZU1PYWJEVFdqc2d5ZnotMnE1Tl9DeGVpTDl3NDhMalU3VkFjWTRvSC03TV9aeG1QYUYtbE01QTJNSlFlaDNNb3R4cG5ZZ1ZRZjExSm9aZ0JmRXR6TV9xU3pxVi1SY1FkYU5FREk3M29lamljOVNUTkR1SGVraUN5MWIwRThQckZuN0NoS3EwSFhONnZ1NFpmekF1SHFiLVo0QlJuRy1B?oc=5) |
| 芯和 (Xpeedic) + Lenovo AI Agent | Product news | Chinese EDA vendor Xpeedic and Lenovo release an AI Agent at DAC 2026, claiming 50% library-building efficiency improvement. | [新浪财经](https://news.google.com/rss/articles/CBMihgFBVV95cUxPelNWWllrSGtXQ0ZDM2g4SE5qRGJNRVRXazNfOE9aclJ3aExrRVpYSUpZZnhldVFXa0g3OXE1OWg4OW85dE42OEx6RXo0Nzc0RTNVdF9McGxreV94Q3MwX0Y2NUJmNlNlbEk0NnJjYzBoRUVNTi10WGdRd0pNUGZFY0xsckRmZw?oc=5) |
