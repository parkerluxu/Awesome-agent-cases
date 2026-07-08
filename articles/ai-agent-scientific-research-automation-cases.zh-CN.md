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
