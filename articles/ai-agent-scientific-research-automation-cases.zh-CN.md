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
| K-Dense-AI/scientific-agent-skills | GitHub 项目 | 将任意 AI 智能体转化为 AI 科学家，提供 140 个即用型技能和 100+ 科学数据库，覆盖生物、化学、医学和药物发现，兼容 Cursor、Claude Code、Codex 等。 | [https://github.com/K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) |
| K-Dense-AI/k-dense-byok | GitHub 项目 | 基于 Scientific Agent Skills 的桌面端 AI 联合科学家。 | [https://github.com/K-Dense-AI/k-dense-byok](https://github.com/K-Dense-AI/k-dense-byok) |
| HolobiomicsLab/Mimosa-AI | GitHub 项目 | 自我进化的自主科学研究（ASR）框架，可编写、运行并改进自身多智能体工作流，基于 MCP 工具发现和达尔文进化。 | [https://github.com/HolobiomicsLab/Mimosa-AI](https://github.com/HolobiomicsLab/Mimosa-AI) |
| ai4s-research/open-science | GitHub 项目 | 面向科学家的开源 AI 工作台，Claude Science 的开源替代，本地优先、模型无关、可复现，基于 Tauri + MCP + Agent Skills。 | [https://github.com/ai4s-research/open-science](https://github.com/ai4s-research/open-science) |
| FellypeMelo/OpenScientific-Workbench | GitHub 项目 | 面向计算生物学和药物发现的开源智能体 AI 工作台，编排多智能体管道，集成 60+ 科学数据库，支持 Evo 2、Boltz-2、DeepSeek-V3 等模型。 | [https://github.com/FellypeMelo/OpenScientific-Workbench](https://github.com/FellypeMelo/OpenScientific-Workbench) |
| Usaid22/swarm-factory | GitHub 项目 | 2026 年实验室实验用自主研究多智能体系统。 | [https://github.com/Usaid22/swarm-factory](https://github.com/Usaid22/swarm-factory) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Deep Research in Physical Sciences: A Multi-Agent Framework and Comprehensive Benchmark | 论文 | 提出 PhySciBench，包含 200 个专家精选的物理与化学问题，用于评估深度研究智能体在物理科学中的能力。 | [https://arxiv.org/abs/2606.18648v3](https://arxiv.org/abs/2606.18648v3) |
| InquiTree: Evaluating AI Agents in the Scientific Inquiry Loop with Paper-Derived Research Trees | 论文 | 提出 InquiTree 诊断环境，将科学探究形式化为交互式研究树（有向无环图），评估智能体在假设形成、研究设计、结果解释等环节的表现。 | [https://arxiv.org/abs/2606.09550v1](https://arxiv.org/abs/2606.09550v1) |
| Clarus: Coordinating Autonomous Research Agents toward Web-Scale Scientific Collaboration | 论文 | 提出 Clarus 协作基础设施，协调项目、智能体、数字与物理资源，实现从代码执行到研究导向协作的转变。 | [https://arxiv.org/abs/2606.30246v1](https://arxiv.org/abs/2606.30246v1) |
| One Reflection Is Not Enough: Self-Correcting Autonomous Research via Multi-Hypothesis Failure Attribution | 论文 | 提出 SAGE 框架，通过多假设失败归因实现自主研究智能体的自我纠正，避免单一反思导致的局部试错或硬转向。 | [https://arxiv.org/abs/2606.31478v1](https://arxiv.org/abs/2606.31478v1) |
| Agentic-Ideation: Sample Efficient Agentic Trajectories Synthesis for Scientific Ideation Agents | 论文 | 针对 AI 科学家系统的自动化构思问题，提出训练 Agentic LLM 以生成灵活推理轨迹的方法。 | [https://arxiv.org/abs/2606.31229v1](https://arxiv.org/abs/2606.31229v1) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| NVIDIA BioNeMo Agent Toolkit | 产品/工具 | NVIDIA 发布的加速科学发现的智能体工具包。 | [https://news.google.com/rss/articles/CBMiyAFBVV95cUxNb2VhdWloTE1XSnlrd1dVanpQYTMwVWhhYjE1OFZrSG1vaWJEZXlKaWljQXZSZHlxbVlyS3E3SkpaaTJCSU8tZGJaNFFTQ245YlktU1Y1RHQ4b3FnTk5ZMDZuTzJUYWlyaWFfbGRwZkxRNF85UXN6aEdFbE5uQUozeEZMQW96dzNpTkp3aHJ0WEpyNkZDOVVjN0NxcldZYkdUc0JQM0tjYjlyNG14RlIyYUQtRkRJSjFZWk1rVS1YNDR3RWVZOVJ4ZA?oc=5](https://news.google.com/rss/articles/CBMiyAFBVV95cUxNb2VhdWloTE1XSnlrd1dVanpQYTMwVWhhYjE1OFZrSG1vaWJEZXlKaWljQXZSZHlxbVlyS3E3SkpaaTJCSU8tZGJaNFFTQ245YlktU1Y1RHQ4b3FnTk5ZMDZuTzJUYWlyaWFfbGRwZkxRNF85UXN6aEdFbE5uQUozeEZMQW96dzNpTkp3aHJ0WEpyNkZDOVVjN0NxcldZYkdUc0JQM0tjYjlyNG14RlIyYUQtRkRJSjFZWk1rVS1YNDR3RWVZOVJ4ZA?oc=5) |
