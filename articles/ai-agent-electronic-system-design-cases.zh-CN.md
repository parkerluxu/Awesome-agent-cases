# 电子系统设计：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（2+13）

本节分为两类：`教程 / 案例 2 条` 和 `项目 / 论文 13 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 2 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | tscircuit docs | 官方教程 | tscircuit 官方教程，涵盖原理图、网表、制造文件和 EDA 自动化流程。代码驱动的电子设计方法可参考此文档。 | https://docs.tscircuit.com/ |
| 2 | Hackaday tscircuit | 社区案例 | Hackaday社区中tscircuit案例展示，探索用代码驱动电路设计的新颖思路与创意项目。 | https://hackaday.com/ |

### 项目 / 论文 13 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | AIDev | 论文/数据集 | AIDev 论文提出面向 AI 辅助硬件设计的评测框架，包含任务定义、数据集构建与模型性能评估方法，为硬件自动化研究提供基准。 | https://arxiv.org/abs/2602.09185 |
| 2 | tscircuit | 开源项目 | TypeScript 编写的开源 EDA 工具，用代码定义电路原理图与 PCB 布局，将电子设计纳入软件工程工作流。 | https://github.com/tscircuit/tscircuit |
| 3 | pcbGPT | 论文 | 探讨大语言模型辅助 PCB 设计的论文，展示通过自然语言交互实现电路板设计流程的自动化。 | https://arxiv.org/abs/2606.01188 |
| 4 | PCBSchemaGen | 论文 | 从高层次描述自动生成 PCB 原理图的 AI 方法，展示了从需求到电路连接图的端到端流程。 | https://arxiv.org/abs/2602.00510 |
| 5 | CircuitLM | 论文 | 提出 CircuitLM 模型，评估语言模型在原理图生成与理解任务上的能力，聚焦电路设计专用 LLM。 | https://arxiv.org/abs/2601.04505 |
| 6 | SchGen | 论文 | 原理图自动生成研究，详细描述算法设计与实验效果，面向 AI 辅助电子设计的前沿方向。 | https://arxiv.org/abs/2605.30345 |
| 7 | SmartonAI | 论文 | 探讨 AI 在电子设计自动化中特定问题的建模与解决方案，提供问题定义与算法实现细节。 | https://arxiv.org/abs/2307.14740 |
| 8 | AutoEDA | 论文 | 系统性研究电子设计自动化的 AI 方法，包含实验设定与多方法性能对比，覆盖完整 EDA 流程。 | https://arxiv.org/abs/2508.01012 |
| 9 | ChatEDA | 论文 | 提出 ChatEDA 框架，用对话式 AI 辅助 EDA 工具链，展示人机协作设计的新交互范式。 | https://arxiv.org/abs/2308.10204 |
| 10 | AiEDA | 论文 | AI 驱动的电子设计自动化论文，详述模型架构、训练数据与实验结果，聚焦端到端设计生成。 | https://arxiv.org/abs/2511.05823 |
| 11 | EEsizer | 论文 | 专注于电子元件或电路的自动尺寸优化，面向设计空间探索与参数调优的自动化方法。 | https://arxiv.org/abs/2509.25510 |
| 12 | tscircuit snippets | 开源项目 | tscircuit snippets 是一个面向电子设计的开源代码片段库，收录原理图、网表与仿真示例，可直接用于加速 EDA 自动化工作流。 | https://github.com/tscircuit/snippets |
| 13 | JITX | 产品/语言 | JITX 是一种编程式硬件设计语言与平台，通过代码描述电路，支持自动化电子设计与快速原型开发。 | https://www.jitx.com/ |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ForgeLab | GitHub 项目 | “设计的 LLVM”——JSON IR + MCP 服务器，让 AI Agent 创建 KiCad、FreeCAD 和 glTF 文件 | [GitHub](https://github.com/andresparraarze/ForgeLab) |
| TripleT-KiCad-Agent | GitHub 项目 | AI 驱动的工程助手，连接高层系统需求与物理 PCB 设计，理解电子理论、元件可用性和 KiCad 文件结构 | [GitHub](https://github.com/Matt-Thom/TripleT-KiCad-Agent) |
| KiSkill | GitHub 项目 | Agent 技能 + 无头 Python 引擎，让 AI 编码 Agent 完全控制 KiCad（编辑、验证、审查、制造原理图和 PCB，无需 GUI） | [GitHub](https://github.com/AvatarSD/KiSkill) |
| kicad-agent | GitHub 项目 | 对 KiCad 原理图、PCB、符号和封装文件进行 AI 安全的结构化编辑 | [GitHub](https://github.com/bretbouchard/kicad-agent) |
| eda-agent | GitHub 项目 | Altium Designer 的开源 MCP 服务器，提供 290+ 工具用于原理图、PCB、库和项目自动化（Apache-2.0） | [GitHub](https://github.com/salitronic/eda-agent) |
| hardwise | GitHub 项目 | 硬件研发原理图审查节点的 AI Agent（基于 KiCad 公开样本的 2 周原型） | [GitHub](https://github.com/liwenjinchn/hardwise) |
| hfss-mcp-server | GitHub 项目 | Ansys HFSS 的 MCP 服务器，支持天线设计与 PCB 仿真，让 AI 用自然语言控制 HFSS | [GitHub](https://github.com/gfgf2023/hfss-mcp-server) |
| KiCadAI | GitHub 项目 | AI 辅助的 KiCad 设计工具包，含 Go CLI、直接原理图/PCB 写入器、验证和引脚映射检查 | [GitHub](https://github.com/dshills/KiCadAI) |
| elektran-ai | GitHub 项目 | 自主 PCB 设计工具 | [GitHub](https://github.com/ritwick06/elektran-ai) |
| tscircuit | GitHub 项目 | 用 TypeScript 和 React 创建真实电子产品 | [GitHub](https://github.com/tscircuit/tscircuit) |
| tscircuit/docs | GitHub 项目 | tscircuit 的文档、教程和指南 | [GitHub](https://github.com/tscircuit/docs) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| SchGen: PCB Schematic Generation with Semantic-Grounded Code Representations | 论文 | 首个从自然语言请求生成可编辑 PCB 原理图的大语言模型 | [arXiv](https://arxiv.org/abs/2605.30345v1) |
| agents-last-exam | Benchmark | Hugging Face 上的 Agent 能力基准测试 | [Hugging Face](https://news.google.com/rss/articles/CBMifEFVX3lxTE5VVzhlYi04eTJ1anMwX0h0elBEQjRycG5pVElnV3d5NGlkTDg4WktINWtsd3JlOGUzZEh6bnRCdzEtR3FycmRBZ2RHeDdXNXVRN1JSQVJFNWdLUEhNZ2xRTDZpMGZCcDhveFRwek5LWnV3NU5Qem9yekhnMEQ?oc=5) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| How Agentic AI tackles RTL verification’s productivity gap | 媒体实测 | New Electronics 报道：Agentic AI 如何解决 RTL 验证的生产力差距 | [New Electronics](https://news.google.com/rss/articles/CBMipwFBVV95cUxOUjlFNjRObWtnUGZxYzNyRG41NzI5a2EzRl9nNUJoaUVrcWdoN1VvTmlybjl0UGdmYnNQYW9xMExxRm0zMUJiaGpnT0tKbDR0TEJHQzZTZXhTSHE2Nk12YzVOUE1GVXJkUTVDSjh6bjE0TlNKVFlaYmFwWjUybnY5SDd4eUJxVlh6LWFCdG95Zmk4UEpNZXV5VlNCaHFMU25tcW9sVk1lWQ?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框重新设计 | 产品 | Google 将搜索框从简单关键词输入转变为 AI 驱动的对话式界面 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI 收购 Ona | 产品 | OpenAI 计划收购 Ona，扩展 Codex 以提供安全、持久的云端环境，支持企业工作流中的长时间运行 AI Agent | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| OpenAI Academy 新课程 | 产品 | OpenAI 推出三门 Academy 课程，帮助用户构建实用 AI 技能、创建可重复工作流并在日常工作中应用 Agent | [OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Quilter Project Speedrun: AI-Designed Computer Boots Successfully — Autonomous PCB Layout Validated | 项目 | AI 自主设计的计算机成功启动，验证了自主 PCB 布局的可行性。 | [DEV Community](https://news.google.com/rss/articles/CBMi2AFBVV95cUxNS0M3TEVUVVltNElnZjJLWUx3dzgyLUs3dnltQ2RlSXNxbndWeGg1bEliVk1NQXUyT09KSWNxRkR4d0o4SGZsQU12R09DY0pYUFhNcTJOWW1WQnZ2OHgtRUVXZlJ1T2E5SGNDUVVxdk41STlhZ2lYQUtVZnFoRnFYa095LTUyYngtV0ZVcGlib0EyTWUwYS03aEY0MGc5U3VTRVBndjNUUk1FTHJVNGxKU2tQcmplUUpKVERvMGVTXzcyX2U2eTA3NnVXbmdFcDNuaXRIT1Atcjc?oc=5) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| An LLM System for Autonomous Variational Quantum Circuit Design | 论文 | 提出一个自主智能体框架，利用大语言模型在显式设计约束下进行迭代量子电路设计。 | [arXiv](https://arxiv.org/abs/2606.13380v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| PCB界的AI工具试用-KiCad 华秋 10.0 | 教程 | 对 KiCad 华秋 10.0 版本中 AI 工具的试用与评测。 | [CSDN](https://news.google.com/rss/articles/CBMiYkFVX3lxTFBQR0tQc0xHQXJhRm93bTJKN05zcFZqaHg4NzlYcnJsbEk3Sm1venFDMDdETDVMR2JNaDU3ZzhDUjVvSzFtRUFuTVBaaVYxeERGdGtFTVhFbXBmYkVjSjNUSVVn?oc=5) |
| AI-Assisted KiCad–Codebeamer MCP Integration Demo | 教程 | 演示 AI 辅助的 KiCad 与 Codebeamer 通过 MCP 协议集成。 | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9Ja01fbHBZZUt1WjFfUl94S2JUX0N2a1p2ZklQbU1pc09lc2JmN1ZDNzdRWTZ3b05YTmt6UDhnVzdLUGlTVVNsSXh3bGtLaUEtWHBkTmFR?oc=5) |
| AI PCB Autorouting: What's Real and What's Hype | 教程 | 分析 AI PCB 自动布线技术的现状，区分真实能力与炒作。 | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTFA1TzBDQ3YxWks2V05Bbm5JMmtYWDJlUEl4RDVWcUFaejN3Zjg1X1VtelNGWURMRGt3MDZuYWVhU3BEWmVRYU55bU9HMXlBVFpIcTNlWDd3?oc=5) |
| PCB Layout Finished 10x Faster with AI? Here’s How... | 教程 | 展示如何利用 AI 将 PCB 布局速度提升 10 倍。 | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE5BMU82UW5FOFA4Sy1DLTVxNFd5MFRQT0dXV0R2S21TS0wyUUVPSzlxVzBZa3VKS09aTkQ3dWpVNE5ad1QtcVhJZHlMdjFMYU1yMVgyRmN3?oc=5) |
| 直播预约 \| 用世界模型打造EDA智能体 | 教程 | 预告直播，主题为使用世界模型构建 EDA 智能体。 | [电子工程专辑](https://news.google.com/rss/articles/CBMiU0FVX3lxTFB3ZmV5MzdtU2lDdEdvV19GUVI2Y0I4UG01Mjd1VlVvbVY4ZEFzUU54bzFRdFJoRm1DVEs4ekk4VmQ1bU12c2RjVnhzU3lZRW9rN3NF?oc=5) |
| 还在熬夜画原理图？这个“数字搭档”把硬件方案设计卷到了新高度 | 教程 | 介绍一款辅助硬件方案设计的 AI “数字搭档”。 | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTFAwdDhSVWthZmZ3Rk90SFc5QkxZUmF1YkJuOWR2cDl0azRydmQ4RXJNWENzSjNmcm9HaEk1QkpQZHlCRHVWdHpxSmN0X0N5VjhibzZNWWM3VmVBU1I3?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| 赛意信息：自研PCB行业工艺AI大模型已实现规模化商用 | 产品 | 赛意信息宣布其自研的 PCB 行业工艺 AI 大模型已实现规模化商用。 | [Sohu](https://news.google.com/rss/articles/CBMijAFBVV95cUxNUWRLX25rYm8wcEZmbjU1OE5zNlB6TDlXWUF1N3ZWTUxyT0ZxeUFMNEZuYjZyOE84eFg0X2ZFcUVBLVFLUUxlOWpXdFRicUV5dEx3c1pua1JTTDlHeDEtZHIxZ2tqTEcxeDVjaGozeWZrZUIwYmVFUmIxNW9hSUV5RmlXV2oyQ1Z1RzlqWg?oc=5) |
| 视源股份、视源AI研究院申请电路板布局相关专利，利用强化学习优化电路板布局，提高布局效率 | 产品 | 视源股份与视源AI研究院申请专利，利用强化学习优化电路板布局。 | [新浪财经](https://news.google.com/rss/articles/CBMikwFBVV95cUxPNWZyV0lvdnVCR0tjX3dKalJCYnFwYlhpd1BpSDlVb0NCMmZueTltaGVCX0JqeUQ1UlQ3cVlWay1FNjktNTE5TUVWWUZHOHNIODNkcXFYWGRLWUxyMlRyUnh2U0ZXUl82clV2RWYtaFpWZzhaNm43Rlhqdjl0eFFBZTZ2dWV1bU9xbnM3bUk0N3FQRzQ?oc=5) |
| JuliaHub Announces Dyad 3.0 General Availability, Bringing Agentic AI to Physics-Based Engineering | 产品 | JuliaHub 发布 Dyad 3.0，将智能体 AI 引入基于物理的工程领域。 | [PR Newswire](https://news.google.com/rss/articles/CBMi6AFBVV95cUxPblVQNVkxRk4xWVpEV0pmNnpMMktGR1Z1TWJ4OE4tbXgwdXpScEdUcy1xSjkxUDhuWERPajZEVDRFYTc5WHU2UXpxb0l6WjZuX0NEYkpqbmNiN0NZRkJXTF9XeWM1YVpKYW4zMnFwb1AwSHR3eV9qU3ZFWV9LdldLaFpCQkdrbV9NYzB0eHp6cTBrUXlFNWZGcTZNS1dDS1JMbkFRcDhWUEZyWmdjMXgyZkoyRTVHRVVFOTlwTlhkZEk5QktFdzNkMmxULVJ4MkRNTWdYa3BRb3pzdGtGb3RIbWpRMkRtTHJE?oc=5) |
| Design for manufacturability refresher for engineers — Part 4: Digital tools and AI | 产品 | 面向工程师的可制造性设计系列文章第四部分，介绍数字工具与 AI。 | [Design World](https://news.google.com/rss/articles/CBMitgFBVV95cUxPOFRJQU8xdmFtRFI2NUtPNm1vUXV4dUV3b2tXVFhGZUN5dGc3QUhld3R1cnQ5RVpHMjlUeHFqa29mNUxlbGtFYjhiNnB0NFo4TDI3WG1lRkZFWjMwdEVFLUpjTlRqVHEwV05hVU1xNjNzclNpYVZybEtaVGhKWEpiUmRQZ2tqZVhDYUJIYnlkbTNHc3lBbEx2a3V6QzgzVUlBdnFMVV9JZnMtaDI4UmFZclVabVB3QQ?oc=5) |
