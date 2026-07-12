# AI Agent 科研自动化案例

> 面向科研工作者的 AI Agent 工具箱：用智能体把文献综述、数据分析、实验设计与论文写作这类重复劳动自动化。

本页是《Awesome-agent-cases》的科研自动化分册，持续收录可落地的教程、开源项目、论文与工具。如果你想看每日时效新闻，请移步 AI 日报（本仓库 `daily_news/`）。

## 收录范围

- **文献综述与知识梳理**：自动检索、阅读、归纳论文的 Agent（文献综述、引用网络、综述生成）
- **数据分析与科学计算**：面向科研数据的 Agent 工作流（统计、建模、可视化、可复现实验）
- **实验 / 实验室自动化**：实验设计、仿真、实验记录与参数寻优
- **论文写作与投稿**：初稿、润色、图表、格式与投稿流程辅助
- **“AI Scientist” 范式**：端到端自主科研探索（假设生成、实验执行、结果复盘）

## 如何使用

下文「资料更新」区块由脚本根据搜索、RSS、GitHub 与 arXiv 自动追加，按内容类型（项目 / 论文 / 教程 / 产品）分组，作为本主题的新发现资料线索。

> 说明：本页专注「长效精选资源」，与 AI 日报中零散提到的科研 Agent 新闻互为补充，不重复。


## 资料更新（2026-07-08）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Awesome-Vibe-Research | 开源仓库 | 面向 AI 辅助科研的开放共建仓库，收集和沉淀科研全流程中的 agents、skills、workflows、tools 与最佳实践 | [GitHub](https://github.com/modelscope/Awesome-Vibe-Research) |
| PaperGuru | 开源项目 | 面向严肃学术研究的 AI Research Agent（开源自荐） | [GitHub Issue](https://news.google.com/rss/articles/CBMiWEFVX3lxTFAxdzhkbFhJTGVwc0t2aFlKcjhNUG11Y3g0VWRvUlBRVEpPRVowQi1zYmRpYjZXbUZpV1lQbXFIM053VFdBbTRhbWQ5T09ETG1QYlROUFY1dnM?oc=5) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| The Calibration Turn in AI-Assisted Research | 论文 | 提出 AI 辅助研究中“证据许可声明”的概念与方法框架，关注科学主张是否与支撑证据校准 | [arXiv](https://arxiv.org/abs/2606.31273v1) |
| Fantastic Scientific Agents and How to Build Them: AgentBuild for Rietveld Refinement | 论文 | 提出 AgentBuild 框架，将智能体构建视为工作流阶段，通过科学家编写的合约（含评分标准、课程、知识库）构建科学智能体 | [arXiv](https://arxiv.org/abs/2606.12834v1) |
| TerraBench: Can Agents Reason Over Heterogeneous Earth-System Data? | Benchmark | 评估智能体在异构地球系统数据（网格物理数据、卫星影像、地理空间上下文、模拟器输出）上的推理能力 | [arXiv](https://arxiv.org/abs/2606.13148v2) |
| Autonomous discovery of traffic laws with AI traffic scientists | 论文 | 展示 AI 智能体自主发现交通拥堵、出行行为等普适交通规律的能力 | [arXiv](https://arxiv.org/abs/2607.01639v1) |
| FirstResearch: Auditable Question Formation for LLM Scientific Discovery Agents | 论文 | 提出可审计的研究问题形成框架，核心产物为结构化“研究问题证书”，提升 LLM 科学发现智能体的可审计性 | [arXiv](https://arxiv.org/abs/2607.05682v1) |
| Rethinking Scientific Discovery in the Agentic Era | 论文 | 提出 SCION 智能体科学操作系统，作为组织枢纽协调问题制定、文献基础、模型使用、模拟、验证和知识复用 | [arXiv](https://arxiv.org/abs/2607.03863v2) |
| Grounded autonomous research: a fault-tolerant LLM pipeline from corpus to manuscript in frontier computational physics | 论文 | 面向前沿计算物理的端到端容错自主研究管线，从语料库到手稿，强调外部文献锚定校准 | [arXiv](https://arxiv.org/abs/2607.02329v1) |
| From Specification to Execution: AI Assisted Scientific Workflow Management | 论文 | 提出 AI 辅助的科学工作流管理方法，从自然语言规范到可执行工作流，提升透明度和可复现性 | [arXiv](https://arxiv.org/abs/2606.18425v1) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| BioNeMo Agent Toolkit | 工具包 | NVIDIA 发布的用于加速科学发现的智能体工具包 | [NVIDIA Newsroom](https://news.google.com/rss/articles/CBMizwFBVV95cUxQZUoycWRkekFhdURRelBmYWtMdXk3UjVDaTFjeUF2bmJTOVNmSmk0TEoxZVNWZ29Qd2dPaVg2Sk4xb0tKUDJqaTZYTms0N3FFVnNka0J6S0c3NDRKOUFkeC14ZmhrWEJ6UkFIdjNXZjFzSU5vd09CUFV6TGdUa1FENUFKdFRSZG1DZHNtdDNwOTkzbWdYaGtKRURUT09COUxmcTlVTkVZcWpBS042MFJLdlZUTFl1Qlh1VHpxYkt0YlRjZkwwNmcxWV9FOG85RTg?oc=5) |
| Managing autonomous materials labs with multi-agent AI | 研究 | 多智能体 AI 管理自主材料实验室及其对科学科学的影响 | [Nature](https://news.google.com/rss/articles/CBMiX0FVX3lxTFBBM1BxYnE5TjhIQ3NVaUJQY2FkMmg0cktxOUFORlBqbHNkMXFxMFEtT3Foc05YNFY4Z0ZwVEpDbnl6TFBYRnRKYXpscHFVWHFKa2pWR3N2LWJBUHpTNFFJ?oc=5) |

## 资料更新（2026-07-09）

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ArchEval | Benchmark | 评估 LLM Agent 在计算机体系结构设计与优化上的基准测试与平台 | [arXiv 2607.03601](https://arxiv.org/abs/2607.03601v1) |
| Clarus | 论文 | 协调自主研究 Agent 实现网络规模科学协作的基础设施 | [arXiv 2606.30246](https://arxiv.org/abs/2606.30246v1) |
| Ensemble QSP | 论文 | 三层分层记忆架构，解决长周期多 Agent 计算建模中的上下文限制 | [arXiv 2607.07666](https://arxiv.org/abs/2607.07666v1) |
| SAGE | 论文 | 基于多假设失败归因的自主研究自纠正框架 | [arXiv 2606.31478](https://arxiv.org/abs/2606.31478v1) |
| Bibby AI | 论文 | 编辑器原生的 Agent 平台，覆盖学术研究、写作与出版全流程 | [arXiv 2607.05435](https://arxiv.org/abs/2607.05435v1) |
| CausalGame | Benchmark | 在游戏场景中评估 LLM Agent 因果推理能力的基准 | [arXiv 2607.04293](https://arxiv.org/abs/2607.04293v1) |
| ShannonProver | 论文 | 自动化形式化密码学证明的 Agent 框架 | [arXiv 2607.02847](https://arxiv.org/abs/2607.02847v1) |
| Auto-FL-Research (AFR) | 论文 | 面向联邦学习算法搜索的约束编码 Agent 工作流 | [arXiv 2607.01366](https://arxiv.org/abs/2607.01366v1) |
| EO-Agents | 论文 | 基于 NASA 地球观测知识图谱的三 Agent 假设生成管线 | [arXiv 2607.01584](https://arxiv.org/abs/2607.01584v1) |
| Compressing the Validation Bottleneck | 论文 | 结合先验感知 DOE 的自主驾驶实验室，压缩科学验证瓶颈 | [arXiv 2607.04508](https://arxiv.org/abs/2607.04508v1) |
| GeneBench-Pro | Benchmark | OpenAI 推出的基因组学与生物学 AI 性能基准 | [OpenAI 官方](https://openai.com/index/introducing-genebench-pro) |

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| scientific-agent-skills | GitHub 项目 | 面向科学家的 Agent 技能库，含 140 个即用技能与 100+ 科学数据库 | [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) |
| Mimosa-AI | GitHub 项目 | 自进化 AI 框架，可自主编写、运行并改进多 Agent 工作流 | [HolobiomicsLab/Mimosa-AI](https://github.com/HolobiomicsLab/Mimosa-AI) |
| awesome-ai-for-science | GitHub 项目 | AI 自动化科学研究项目精选列表 | [yenanjing/awesome-ai-for-science](https://github.com/yenanjing/awesome-ai-for-science) |
| Awesome-Scientific-LLM-Benchmarks | GitHub 项目 | 科学推理 LLM 基准测试精选列表 | [subinium/Awesome-Scientific-LLM-Benchmarks](https://github.com/subinium/Awesome-Scientific-LLM-Benchmarks) |
| OpenScientific-Workbench | GitHub 项目 | 面向计算生物学与药物发现的开源 Agent 工作台 | [FellypeMelo/OpenScientific-Workbench](https://github.com/FellypeMelo/OpenScientific-Workbench) |
| E2SA-SPADE | GitHub 项目 | 端到端科学 Agent 框架，首个应用为阿拉斯加永久冻土制图 | [jingtao-lbl/E2SA-SPADE](https://github.com/jingtao-lbl/E2SA-SPADE) |
| awesome-academic-skills | GitHub 项目 | Claude 与 Agent 学术技能索引，覆盖研究全生命周期 | [O0000-code/awesome-academic-skills](https://github.com/O0000-code/awesome-academic-skills) |
| DATAGEN | GitHub 项目 | AI 驱动的多 Agent 研究助手，自动化假设生成、数据分析与报告撰写 | [starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN) |
| The-Library-of-AI-Scientist | GitHub 项目 | AI Scientist Agent 论文检索与组织系统 | [FengxianJi/The-Library-of-AI-Scientist](https://github.com/FengxianJi/The-Library-of-AI-Scientist) |
| hypothesis-engine | GitHub 项目 | 受 Google Co-Scientist 启发的开源多 Agent 假设生成系统 | [sumner-harris/hypothesis-engine](https://github.com/sumner-harris/hypothesis-engine) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Anthropic, NVIDIA Move AI Agents Deeper into Scientific Workflows | 媒体报道 | Anthropic 与 NVIDIA 推动 AI Agent 深入科学工作流 | [Campus Technology](https://news.google.com/rss/articles/CBMiugFBVV95cUxQSkFxczdtdlJVbU1VOUNqRDF3WnZQeEZfYlczMnpPRkE3endKT29MbTNJc1pzYmZlTzhGcFZ2NmIyWjdhWXVyaVh4SEdrX0Uzd1hLUUcxSXh4ZS1OMUg5VEktcE9fQlFUZlNxUkp6UDBBUlQtRGFmZVNfZ21JdUVwZlZ0UWIyNktTZXhfZ0N3bEZlQllxSHB5cjBvTTZ5NFh2SjdwODAxZVdFXzVHU3pUY1RZa05SZHNGTWc?oc=5) |
| Can AI Agents Automate Scientific Discovery? | 学术评论 | 探讨 AI Agent 能否自动化科学发现 | [Sage Journals](https://news.google.com/rss/articles/CBMiakFVX3lxTFBJTkRPNHNPRGhrVFNyMzlKZFBaUks1TjVQZjJKOEVzU2pzM3pIQnAwaWVrT2NIc2FNWTQySjV1amJlYnVUOUIxTlB5bF9uTjZmVlJKaHE4NTRTZWlOek5Bak1MOG1kYl96T2c?oc=5) |
| Stanford deploys AI scientist agents to accelerate drug discovery | 媒体报道 | 斯坦福部署 AI Scientist Agent，将药物发现从数月缩短至数天 | [Crypto Briefing](https://news.google.com/rss/articles/CBMibkFVX3lxTFBuVENhTkVlWFYxbjBpOTA3VU04MHNjSURqNW9fRGtlTzNFRUdsX1pFbEExUWFzSXZIVTJlTFJDeFVfcm9QUXhHUm0xdS1SbHpOem90aldBSGdWMmNtYjB2Wk1ub0NhN082ZnpHNzhR?oc=5) |
| Build an AI Scientist for Life Science Discovery with NVIDIA BioNeMo Agent Toolkit | 技术博客 | 使用 NVIDIA BioNeMo Agent 工具包构建生命科学 AI Scientist | [NVIDIA Developer](https://news.google.com/rss/articles/CBMiuAFBVV95cUxNNFRCVUQ4TTVKeXVtWS1yWlhONDdGWDRDLXdOZUY2QlNpT1IzanpCVHFuWk91OWp4OXMxVjJPeVZrOVdRZll0S2FKZU1GUTZSZXVmSFpzQlhKaFoxd01UODRLaGY4SlpFT25Mczg2N2szVVh2ZXI4NmlKRmtwSk5ic3lrUEVUSDdJT2F4d1ZBZ0xNbUtOVXpUdzlIdUUxZlgtejc2bS0zM1ZlR0pnLXRUdXliR3RhYWZC?oc=5) |
| Microsoft Discovery Aims To Advance The Era Of Agentic Science | 媒体报道 | Microsoft Discovery 推动 Agentic Science 时代 | [Forbes](https://news.google.com/rss/articles/CBMitwFBVV95cUxOMTJnZm9mblBHejFwZFczN3hfZDNGMktWdzNBd050ZkE5Q3kyTEZGVTBJdUNVbUpSaUJBSzZPSThlUUJodU9RTXZZT0Ffa0I3M09xeE1sZjhLTmxaZHY1Q1hHcE1FYXZUV2RwdDdIRW9Pdno3TDAwbVVMTURaWDkwNTFlU2xGQXBtbUhOajh0dldNLVN2X1BQdzFXbFJTSnF3eElQVjAxS244YTVNRFQzT2dvWDhSQWs?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| K-Dense BYOK | 桌面工具 | 基于 Scientific Agent Skills 的 AI 合作科学家，可在桌面运行 | [GitHub](https://news.google.com/rss/articles/CBMiVEFVX3lxTE5YTFhSb1F4Y0J2TjhadFpoeURmMGxZbWR5S2RYSWYwbzBOZ0cwaE56N2NranVyamJ4Q1pxd3RockdZcFN3eHd6YUJ2bS1DSUVkLWJoSw?oc=5) |

## 资料更新（2026-07-10）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ARIS (Auto-Research-In-Sleep) | 项目 | 轻量级 Markdown 技能集，支持跨模型评审循环、想法发现和实验自动化，兼容 Claude Code、Codex 等任意 LLM 智能体 | [GitHub](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) |
| autonomous-physics-lab | 项目 | 开放智能体网络，AI 智能体通过代码、证伪、评审和科学记忆进行可重复研究 | [GitHub](https://github.com/open-agent-science/autonomous-physics-lab) |
| AgentDeck | 项目 | 模块化多智能体框架，提供智能体编排、角色协作、工具调用和可复现执行流水线，加速科研自动化 | [GitHub](https://github.com/Jiawang1209/AgentDeck) |
| Perspicacite-AI | 项目 | 面向科学家的智能体 AI 助手，帮助查找和理解学术文献 | [GitHub](https://github.com/HolobiomicsLab/Perspicacite-AI) |
| ai4s-skills | 项目 | 开源 AI for Science 智能体技能集：主题探索、文献调研、实验、论文写作和完整性审计 | [GitHub](https://github.com/ai4s-research/ai4s-skills) |
| Open Science Desktop | 项目 | 本地优先、模型无关的 AI 科研工作台，基于 Tauri + MCP + 智能体技能构建 | [GitHub](https://github.com/ai4s-research/open-science) |
| scholar-rag-agent | 项目 | 生产级科学文献 Agentic RAG，支持多跳推理、GraphRAG 和多 LLM 路由 | [GitHub](https://github.com/Francis1998/scholar-rag-agent) |
| Rumi | 项目 | 自主科学发现引擎，含 82 个发现模块、16 阶段流水线，支持 GFlowNet 假设竞赛、对抗性评审、多智能体辩论、因果推理和知识图谱 | [GitHub](https://github.com/subhansh-dev/rumi) |
| swarm-factory | 项目 | 2026 年实验室实验用自主研究多智能体系统 | [GitHub](https://github.com/Usaid22/swarm-factory) |
| autonomous-agentic-research-swarm | 项目 | 基于文件的自主智能体研究集群（操作员/规划员/工人/评审员），含合约、工作流和确定性质量门 | [GitHub](https://github.com/AysajanE/autonomous-agentic-research-swarm) |
| virtual-biotech-scientist | 项目 | 闭环多智能体 AI 科学家，用于药物-靶点发现，基于 ToolUniverse 构建 | [GitHub](https://github.com/jackysiupuichung/virtual-biotech-scientist) |
| ai-lab-codex-workbench | 项目 | 面向 Windows 的 AI 智能体编码和提示工作台，支持 Codex、Claude Code、Cursor 等 | [GitHub](https://github.com/Yaked1/ai-lab-codex-workbench) |
| skills (kashmirscien3399) | 项目 | 自动化文献综述技能，支持获取 arXiv 论文、提取技术细节和跟踪引用 | [GitHub](https://github.com/kashmirscien3399/skills) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Deep Research in Physical Sciences: A Multi-Agent Framework and Comprehensive Benchmark | 论文 | 提出 PhySciBench 基准，包含 200 个专家精选的物理和化学问题，评估深度研究智能体在物理科学中的能力 | [arXiv](https://arxiv.org/abs/2606.18648v3) |
| Agentic-Ideation: Sample Efficient Agentic Trajectories Synthesis for Scientific Ideation Agents | 论文 | 针对科学构思智能体的高效智能体轨迹合成方法，训练 Agentic LLM 以增强科研推理灵活性 | [arXiv](https://arxiv.org/abs/2606.31229v1) |
| Optimizing Expert-Designed Crystal Graph Networks for Band-Gap Prediction with an Autonomous LLM Research Loop | 论文 | 通用编码智能体在 MatBench 带隙基准（>10 万晶体）上自主构建了最准确的预测模型 | [arXiv](https://arxiv.org/abs/2606.29717v1) |
| Playing ZendoWorld: Challenging AI Agents on Active Visual Concept Induction | 论文 | 提出 ZendoWorld 交互环境，测试智能体在视觉观察中推断隐藏规则并设计实验的能力 | [arXiv](https://arxiv.org/abs/2607.08233v1) |
| From Solvers to Research: Large Language Model-Driven Formal Mathematics at the Research Frontier | 论文 | 探讨 LLM 驱动的定理证明器在前沿数学研究（发现新定理、解决开放猜想）中的局限与方向 | [arXiv](https://arxiv.org/abs/2607.07779v1) |
| Under What Conditions Can a Machine Be Called Genuinely Creative? | 论文 | 从设计学角度提出机器真正创造力的判定框架，探讨人机共享认知环境中的自主性 | [arXiv](https://arxiv.org/abs/2606.13196v3) |
| Agents All the Way Down; A Methodology for Building Custom AI Agents from Substrate to Production | 论文 | 提供从底层到生产构建定制 AI 智能体的端到端方法论 | [arXiv](https://arxiv.org/abs/2606.11869v1) |
| The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators | 论文 | 提出红皇后哥德尔机器，将评估纳入自我改进过程，实现智能体与评估标准的共同进化 | [arXiv](https://arxiv.org/abs/2606.26294v2) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Codex+Skills：AI智能体驱动的自动化科研工作流实战指南 | 教程 | CSDN 发布的 AI 智能体驱动自动化科研工作流实战指南 | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTE1TSGt0WlZWanNYSHlIR2VnWmplYVN1S1dFQm12dkFJMUFRSWRxV1V0OVFjUkR2SVFSc3piN2RKeTYxelNwenNFNzJiLVR4Wm1iemZiNDhibDdQRnZ2dHQzbEZR?oc=5) |
| 登上Science！华人科学家推出通用生物医学AI Agent，真实科研表现接近人类专家 | 媒体报道 | 华人科学家在 Science 发表通用生物医学 AI 智能体，真实科研表现接近人类专家（36Kr、新浪网等多家报道） | [36Kr](https://news.google.com/rss/articles/CBMiU0FVX3lxTFBzUUVNS29lbExQWjJsbkd4UUV6VUtxSlhaWVNJUjNQQVNncllsRV9vSWw1eFJxRWNxYlBOZklwZnpQUzc4djBIbGlEVnNFbEN3WDVZ?oc=5) / [新浪网](https://news.google.com/rss/articles/CBMigwFBVV95cUxNcGN3YURrX240QkRwTjkwTmdBT1U5cEN5cjFKNExQUVlCak10MGh3SF9PdDAxTHl1ZTBCNTFvbjJqRjVQcm56UExjeUt0eDBXS3d0ejczeVhmTHlFcXpEQTFSZnoxbFVvSXVKN3FZR1dXN2FOV0ZRYUNCQWVIZWtLc25wYw?oc=5) |
| Sakana AI launches Sakana Marlin, an autonomous deep research agent that thinks for 8 hours straight | 媒体报道 | Sakana AI 发布自主深度研究智能体 Sakana Marlin，可连续思考 8 小时 | [Crypto Briefing](https://news.google.com/rss/articles/CBMifkFVX3lxTE5UVFFQQ2taVEI3M1hsNllEV1drLXR3V1V6Tmk0d05BZHRRS09NME9WYjZyaW9YalBscEEyeDlHa3hOZmlfRXZPZWNvVUozS05Qd1ZKTk4xNmplVGRzOUZBTnNzbVZMMDczYkNMbm0ycGlCLXdIOVp4T2plTHk2dw?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| NVIDIA BioNeMo Agent Toolkit | 产品 | NVIDIA 发布的加速科学发现的智能体工具包 | [NVIDIA](https://news.google.com/rss/articles/CBMiyAFBVV95cUxNb2VhdWloTE1XSnlrd1dVanpQYTMwVWhhYjE1OFZrSG1vaWJEZXlKaWljQXZSZHlxbVlyS3E3SkpaaTJCSU8tZGJaNFFTQ245YlktU1Y1RHQ4b3FnTk5ZMDZuTzJUYWlyaWFfbGRwZkxRNF85UXN6aEdFbE5uQUozeEZMQW96dzNpTkp3aHJ0WEpyNkZDOVVjN0NxcldZYkdUc0JQM0tjYjlyNG14RlIyYUQtRkRJSjFZWk1rVS1YNDR3RWVZOVJ4ZA?oc=5) |
| PromptBio Agentic AI Platform | 产品 | 加速科学发现的智能体 AI 平台 | [BioPharma APAC](https://news.google.com/rss/articles/CBMiuAFBVV95cUxPeHhZQ3BwUVVMbHVBa1RmNlcxR2dKakhSVkk5ZTZBd01wOHBjQzJaZ2tnYjBqVlF2My1kSlp4ai02U3BJQ3hEbHVQX0ZkU01zTjdBMGZFQk1mN2pSNm1fbnJodnVYdTRVVk52REEwM0gwMkEwZkZFWnYtTGJBWTVwODc3c19VeEFfU2trekZVOEhUb3dRZEZyc1ppaXhleXF2LVJzdDFrSklLckNZT3lMTkpnbWE1RU1Z?oc=5) |
| Agent-EvalKit | 工具 | AWS 发布的系统性 AI 智能体评估工具包 | [AWS](https://news.google.com/rss/articles/CBMioAFBVV95cUxQeldfMDFMWnNrN3oxZFJsMjVWSEtWaGtWdzRDR2pZVGxaWDlsb0otVEtTQ0dzR2R6blZjUENETm9WZGQ1R0xpUU03MGlyS0swTjlIWU5PRV9RcXd4UDlGSnZBVUw4NFR4N2hqNjFOdzVyQVhRaXdZdWVpMXhVU2hsUlAwWU1RZWpyQzgwZ2JjaHc5TGE4RzE2c1Z2RVFWWVRz?oc=5) |

## 资料更新（2026-07-12）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| yushui2022/MathModel-Skill | Agent Skill | 面向数学建模的 Agent-native 工作流技能，涵盖问题解析、建模、代码生成、证据检查、论文写作与 Word 交付 | [GitHub](https://github.com/yushui2022/MathModel-Skill) |
| jin-s13/awesome-auto-research-hub | 资源汇总 | 自动化科研 AI 系统精选集：文献综述、调查综合、实验设计与执行、论文写作、AI 科学家、自主研究 Agent | [GitHub](https://github.com/jin-s13/awesome-auto-research-hub) |
| sparzinhogames-hash/awesome-scientific-ai-tools | 资源汇总 | 科研 AI 工具、MCP 服务器和 Agent 技能发现，覆盖文献、数据、写作和实验 | [GitHub](https://github.com/sparzinhogames-hash/awesome-scientific-ai-tools) |
| Audiedashed559/awesome-researchclaw | 资源汇总 | ResearchClaw 工具、Agent 和论文精选，用于 AI 驱动的学术研究、工作流和论文写作 | [GitHub](https://github.com/Audiedashed559/awesome-researchclaw) |
| aipoch/open-science | 开源工作台 | 模型无关的开源 AI 科研工作台，用于科学发现 | [GitHub](https://github.com/aipoch/open-science) |
| ziatdinovmax/SciLink | 工具 | LLM 驱动的科研自动化 Agent | [GitHub](https://github.com/ziatdinovmax/SciLink) |
| Eldergenix/Plato-Scientific-Research-Autonomous-Agent | 多 Agent 系统 | 将实验数据转化为可发表论文的多 Agent AI 科学家 | [GitHub](https://github.com/Eldergenix/Plato-Scientific-Research-Autonomous-Agent) |
| Aukexecutivedepartment5152/PaperOrchestra | 多 Agent 技能包 | 自动化科研论文写作，将非结构化数据转换为 LaTeX 论文 | [GitHub](https://github.com/Aukexecutivedepartment5152/PaperOrchestra) |
| docxology/template_autoscientists | 多 Agent 协调框架 | 确定性多 Agent 科学发现协调框架，附带可复现研究范式 | [GitHub](https://github.com/docxology/template_autoscientists) |
| DeepthiDayanand/Multi-Agent-AI-Literature-Review-System | 多 Agent 系统 | Python 多 Agent 研究助手，自动进行文献摄取、引用解析、相关性过滤和综述综合 | [GitHub](https://github.com/DeepthiDayanand/Multi-Agent-AI-Literature-Review-System) |
| DavidZ05/multi-agent-literature-review-system | 多 Agent 系统 | 多 Agent 文献综述系统 | [GitHub](https://github.com/DavidZ05/multi-agent-literature-review-system) |
| zebulensharedout782/deep-researcher | 工具 | 搜索 Google Scholar，用 OpenAlex 丰富论文信息，本地构建结构化文献综述 | [GitHub](https://github.com/zebulensharedout782/deep-researcher) |
| rehbel/consensusmind | 自主 Agent | 区块链共识机制自主研究 Agent，涵盖文献综述、仿真和学术写作 | [GitHub](https://github.com/rehbel/consensusmind) |
| rishabhpatre/content-generator-agent | 自主 Agent | 将最新 arXiv 论文和新闻转化为专业 LinkedIn 帖子的自主 AI Agent | [GitHub](https://github.com/rishabhpatre/content-generator-agent) |
| Jyx0208/agent-aireadyy | 实验 Agent | 生物医学阅读、研究辅助和工作流自动化的 AI Agent 实验 | [GitHub](https://github.com/Jyx0208/agent-aireadyy) |
| eniompw/AutoResearch | 自改进 Agent | 自改进 AI 研究：LLM Agent 循环，自动优化 MLP 语言模型 | [GitHub](https://github.com/eniompw/AutoResearch) |
| shiwangi27/daily-research | 工具 | 使用 AI Agent 框架进行每日研究 | [GitHub](https://github.com/shiwangi27/daily-research) |
| mosesy5688-cell/sciweon | 平台 | AI 驱动的科学发现平台，化合物智能平台，面向 AI Agent | [GitHub](https://github.com/mosesy5688-cell/sciweon) |
| josemanuelm9203/rumi | 框架 | 终端原生框架，用于构建自主科研 Agent | [GitHub](https://github.com/josemanuelm9203/rumi) |
| PoojaKuniyal/FinSightAI-Antigravity-MCP | 多 Agent 系统 | 基于 Google ADK 2.0、MCP、Flask 和 Gemini 的多 Agent 股权研究助手 | [GitHub](https://github.com/PoojaKuniyal/FinSightAI-Antigravity-MCP) |
| Lateripening-ritual19/sisyphus-academica-902 | 论文写作 Agent | 使用专用 Agent、新颖性引擎和对抗性审稿人自动化论文写作 | [GitHub](https://github.com/Lateripening-ritual19/sisyphus-academica-902) |
| 1235357/research-english-academic-paper-writing-guide | Agent Skill | 基于课程的 Agent Skill，用于研究和英文学术论文写作 | [GitHub](https://github.com/1235357/research-english-academic-paper-writing-guide) |
| faresrafat3/llm-agent-research-extractions | 分析 | AI Scientist v2、Self-Refine 和 Reflexion 的提示、逻辑、流程和 Mermaid 图提取 | [GitHub](https://github.com/faresrafat3/llm-agent-research-extractions) |
| faresrafat3/arsenal-unified-master-pipeline | 管道 | 统一主 LLM Agent 管道，结合 AI Scientist v2、Self-Refine、Reflexion、Meta-Prompting、LATS、APE 等 | [GitHub](https://github.com/faresrafat3/arsenal-unified-master-pipeline) |
| WUAIBING/MEP | 协议 | 面向自主 Agent 的 AI 到 AI 经济协议，研究分布式计算分配、联邦数据市场和 Agent 间通信 | [GitHub](https://github.com/WUAIBING/MEP) |
| 0xKunalsharma/Alphamoo | 科学发现 Agent | 面向 ARC-AGI-3 的贝叶斯科学发现 Agent | [GitHub](https://github.com/0xKunalsharma/Alphamoo) |
| dushyant-mishra/sea-ad-jepa-agent | 假设生成 Agent | Graph-JEPA 框架，用于阿尔茨海默病小胶质细胞研究：病理学表征学习、反事实基因网络假设生成 | [GitHub](https://github.com/dushyant-mishra/sea-ad-jepa-agent) |
| manu-tej/coscientist | 多 Agent 系统 | AI 共同科学家的开源复现：基于 Claude 的多 Agent 假设生成，带动态权重监督和评估框架 | [GitHub](https://github.com/manu-tej/coscientist) |
| darshgarg7/CausalOps | 多 Agent 系统 | Kafka 原生多 Agent 网络决策系统，分离 LLM 假设生成与因果推理 | [GitHub](https://github.com/darshgarg7/CausalOps) |
| Maranh0/ai-junior-data_scientist | Agent | 使用本地 LLM 和 FastAPI 进行金融科技数据 EDA 和流失建模的 AI 初级数据科学家 Agent | [GitHub](https://github.com/Maranh0/ai-junior-data_scientist) |
| terramentis-ai/terraqore-studio | 编排平台 | 面向开发者和数据科学家的元 Agent AI 编排平台，用于全周期 AI 项目 | [GitHub](https://github.com/terramentis-ai/terraqore-studio) |
| felipedeso7za4444/scientific-thinking-general | 推理框架 | 将结构化科学推理应用于 AI Agent：分解问题、验证声明来源、按证据强度排序解释 | [GitHub](https://github.com/felipedeso7za4444/scientific-thinking-general) |
| MatteoGabriele/agentscan | 实验 | 检测 GitHub 上自动化模式的开放实验 | [GitHub](https://github.com/MatteoGabriele/agentscan) |
| GeneralTradingSarl/computer_Agent | 实验 | 基于 Agent S2 框架的自动化和交易实验，含 MetaTrader 机器人集成和知识引擎 | [GitHub](https://github.com/GeneralTradingSarl/computer_Agent) |
| waleedkhattakjj-glitch/My-LangGraph-Journey | 学习项目 | LangGraph 和 Agentic AI 开发的学习、实验和实践记录 | [GitHub](https://github.com/waleedkhattakjj-glitch/My-LangGraph-Journey) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Towards Automating Scientific Review with Google's Paper Assistant Tool | 论文 | 提出利用 AI 加速科学同行评审的框架和分类法，应对 AI 辅助科研带来的审稿规模挑战 | [arXiv](https://arxiv.org/abs/2606.28277v1) |
| AI Scientists as Engines of Discovery: A Case for Development within Reformed Institutions | 论文 | 论证多 Agent 系统可从被动工具演变为“AI 科学家”，扩展假设生成和验证能力 | [arXiv](https://arxiv.org/abs/2606.22859v1) |
| MetaResearcher: Scaling Deep Research via Self-Reflective Reinforcement Learning in Adversarial Virtual Environments | 论文 | 提出 MetaResearcher 框架，通过演化虚拟世界和自反思强化学习扩展深度研究 Agent 训练 | [arXiv](https://arxiv.org/abs/2606.19893v1) |
| Closing the Loop to Discover Psychological Theories with an Automated Cognitive Scientist | 论文 | 提出自动认知科学家，在心理学领域实现闭环发现：提出理论、设计并运行实验 | [arXiv](https://arxiv.org/abs/2606.26448v1) |
| Evolution Fine-Tuning: Learning to Discover Across 371 Optimization Tasks | 论文 | 将 LLM 集成到进化搜索中，跨 371 个优化任务学习发现策略，应用于数学猜想、GPU 内核设计等 | [arXiv](https://arxiv.org/abs/2606.29082v1) |
| Can Language Model Agents be Helpful Circuit Explainers in Mechanistic Interpretability? | 论文 | 研究 LM Agent 能否辅助机械可解释性中的电路解释，引入 AgenticInterpBench 基准 | [arXiv](https://arxiv.org/abs/2606.24026v1) |
| FORGE: Research-Trajectory Hijacking Attacks on Deep Research Agents | 论文 | 揭示深度研究 Agent 的规划层投毒攻击，展示对抗性文档如何污染研究报告 | [arXiv](https://arxiv.org/abs/2607.04718v1) |
| Configuration Smells in AGENTS.md Files | 论文 | 首个编码 Agent 配置文件（AGENTS.md/CLAUDE.md）的坏味道目录 | [arXiv](https://arxiv.org/abs/2606.15828v4) |
| From Anatomy to Smells: An Empirical Study of SKILL.md in Agent Skills | 论文 | 首个对 Agent Skill 中 SKILL.md 文件的系统实证研究 | [arXiv](https://arxiv.org/abs/2607.01456v2) |
| SwarmFly: A simulation platform for UAV swarm experiment design and validation | 论文 | 面向无人机集群实验设计与验证的 MATLAB 仿真平台 | [arXiv](https://arxiv.org/abs/2606.25146v1) |
| EdgeBench: Unveiling Scaling Laws of Learning from Real-World Environments | 论文 | 基于 38,000 小时 Agent 交互数据，发现环境学习中的对数-Sigmoid 缩放定律 | [arXiv](https://arxiv.org/abs/2607.05155v1) |
| ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration | Benchmark | 面向企业 Java 框架迁移的 AI Agent 基准测试 | [Hugging Face](https://huggingface.co/blog/ibm-research/scarfbench) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| 4天：从文献挖掘到论文发表，我用AI-Agent 2.0搭建了全自动科研流水线 | 教程 | 使用 AI-Agent 2.0 搭建全自动科研流水线的实践分享 | [DeepSeek技术社区](https://news.google.com/rss/articles/CBMiZkFVX3lxTFBQUUJzNGZXVUtVRlJDYW94RGk3QVE2WUtxS3FoZDRvZ285a1QyNHhVZXlDT0FNaWRQWTJGcmpvdzltY3dPUmxxTG14ZmV6WVRWVnpGRVB2MXM5bjRrdVBQdy1WcW9rQQ) |
| AI科研助手codex-claude-academic-skills：从文献拆解到论文写作的全流程实战指南 | 教程 | 使用 Codex/Claude Academic Skills 进行文献拆解到论文写作的全流程指南 | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTE9JVV9fRVlfbkNza09ZNC1rWFVLYW53cWc5OWYxWlFnYWE0VVJNZzZkbjlKcUNLWFBPSm1yRm8wZ2FiX3BZUVJIcnhncUxlb3Y5T05hMmZhSXFTdVl5RWRsT1pR) |
| I Built a Research Memory Agent with Cognee | 教程 | 使用 Cognee 构建研究记忆 Agent 的实践经验 | [DEV Community](https://news.google.com/rss/articles/CBMi0AFBVV95cUxPeVlsRms4aGVicnJCU1RGX01Ta0hfcG5CRmt1SGtHYmdjTmgyTDI1dDZaY2lyMzlEVDJtUldZUXM1ZXlUdHNVdW5kZV96NHFPUFhHSnRPNTZ5bzdBZGVXcWFoWTByOHd3Si01Ni1XNlprTDgtV043MjlWdkg4R2RrUUNTX05zMldMSmtQem85WGxDNmFfMnVwZWJQZEVUaHN4YWU5dnNUTG5Td09IV1B2VDJtNVNnTUtGUnBWdS0yM05Ua19GTDZXS0Nibnl3M2Ni) |
| Academic Research Skills for Claude Code | 教程 | 面向 Claude Code 的学术研究技能 | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE1jdFdhSWhQN3lQaEwtUS11T255VWVQV0FucnBpTENqQWt5WG56MUc4VGREckV1LUMzSVM1Z0h6SmJkM0l5eHpyUTkycUk3SzFIZ3hRR1l0Rlc0ZTlLVjdPTzNIZw) |
| 顶尖机构摊牌! AI agent两小时复刻一篇finance顶刊 | 媒体实测 | 使用 AI Agent 两小时复刻金融顶刊论文的实践报道 | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTE10RGJzOHVSWGtwNFNza3J5Z093bEo1YkQweEluTjFHdDlUbDlpU09pZGZjQWFHeVpYYWM2emtoZ0ZiWnRhRFR1ZXVWTVdrUk9NdVdNMjl1QTFOb3Fv) |
| Agentic AI bot helps scientists speak to robots, speeding up experiments | 媒体实测 | Agentic AI 机器人帮助科学家与机器人对话，加速实验 | [Tech Xplore](https://news.google.com/rss/articles/CBMifkFVX3lxTE56djhTYUNKdHFKemp3eW9ndXJJcFc3X1VJajF1dlo4TVRIVVRBcllZYXhXekQxajFhT1J3UzAxbzN5Xzhka0puRHFFRV9yTEluZy1Wcm1LdUZveWNnZlB6T0VzTThrV2FOLWU2VnJuYnQ5b3ZKNVU3Y0VCbW90QQ) |
| Elsevier Expands LeapSpace™ with New Agentic Capabilities for Tasks Across the Complete Research Workflow | 媒体实测 | Elsevier 为 LeapSpace 增加 Agentic 能力，覆盖完整研究流程 | [PR Newswire](https://news.google.com/rss/articles/CBMi8gFBVV95cUxNTkR5eG1KNEdza2hMNEdpT0M2d1MyMlhMYmE5aVRaVUt3OVVNSVZLTmNUZWFWa0c3UGtkbjdUNjhsaW9TenhlRFgxYjFFSUpoLUhvU0xjU3Q5Yy13LS1OUzNtVVp1LVMwXzlTNkF6YTNhZDlDZnRpU21hNWtvb1M4TTF0NHJZR0dCNmVKQVlCUTNhbnF2NFVtb3EwRVVTN19qNF9QblhMdG50XzU1VWpDeTY5X3YzXzVZQ2F4dTVaX0p3RnZMRmdVQWMtc3dOaVJ6UXJtWERNcFR3SzNrVjlfXzZtckhOazhzZHI5OGlSemxTdw) |
| New Agentic Capabilities for Tasks Across the Complete Research Workflow | 媒体实测 | 面向完整研究流程的新 Agentic 能力报道 | [Genetic Engineering and Biotechnology News](https://news.google.com/rss/articles/CBMiywFBVV95cUxPRV91Y0pBSWNESEhYNHV5SlI5ZGJIRG9KSXdnZFlFeFNHYl8zUE5RM01EbDd6Nkw4UnoxWVhRZ29zQWt3ZW0wb1BFUFhXaF9MODNBazlZa3ZYN3R2a25tQThJMmJtbU5tbVZPU2FTQ01PQzNEM1JVWjB1WGhkVWVVejltZ25JRGhZN1ZUTjJKTmlsYk5aTGpHdDdzRUYxRFNnQjE1Y2RubzhscEVXa2ZFUEhTOERGUk9kbWplb3ZBcmIxeTBSMkdfQTFzWQ) |
| Agentic Scientific Discovery and Engineering: Unlocking the Next Era of Supercomputing with Google Cloud | 媒体实测 | 使用 Google Cloud 实现 Agentic 科学发现与工程 | [HPCwire](https://news.google.com/rss/articles/CBMi1gFBVV95cUxPWWlubmtpUWhlTGNiTVhjbjRxRFdBa1JRODg3OGwtT3dWMFlLQndBVUMtV1R6VkYwT2pTSGtwNjdVQmFrbHFxLUF6a19TUkplY3Z5aXZTZUNMdmZaNHZ0RHZEcFZHWm1kUUswcVBSaGFWZE0td2pTcFdYUlZLbjhoM3dodzBnYXpuOElvdy1TblNiZE1zQWwzQnp3SUZPNktGTy1UVGRSV21rN21jWkpUTmc3QnFHcTluSVNsY1BjM1lEZVhoMnhYNHBoZEMzdTQ2SzFuZ01R) |
| 英伟达押注智能体AI，加速生物科技领域科学发现 | 媒体实测 | 英伟达押注 Agentic AI 加速生物科技领域科学发现 | [thepaper.cn](https://news.google.com/rss/articles/CBMiYEFVX3lxTE9Od2dPV2VZd2F4VlpqeWtLak56VDdpUlJsS1pZZVFTVXV5NGdvRnhWY043VWo5Yllhcmt3aFRaMEI0OExrbkpoVjlNVmlCLUJScWlGNDFHWHNpUXlzVmYzZQ) |
| OpenAI与Google DeepMind报告：AI Agent改变工作方式，拓展科研与工作边界 | 媒体实测 | OpenAI 与 Google DeepMind 报告：AI Agent 改变工作方式，拓展科研与工作边界 | [blog.csdn.net](https://news.google.com/rss/articles/CBMia0FVX3lxTFBwaFZUbzFCelRGN1FYcDVZV0JaSGNBZTJ3SXd4eDZFdnJadzFkT2VRMXpUaGFqeldzLXduT3BFVVFZMFlEdHlaaDRBSmdsZ0JoRTZTOEkwdTlkQ1lobnlVOWRsYjZRQXlaRVpj) |
| When AI Agents Become Indispensable Partners in the Modern
