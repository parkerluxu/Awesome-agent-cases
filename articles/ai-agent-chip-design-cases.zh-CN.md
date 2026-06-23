# 芯片设计：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（0+10）

本节分为两类：`教程 / 案例 0 条` 和 `项目 / 论文 10 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 0 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|

### 项目 / 论文 10 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | ChipNeMo | 论文 | NVIDIA 的 ChipNeMo 论文，探索将大语言模型应用于 EDA 工具链，涉及 RTL 生成与验证的辅助场景，是工业界在芯片设计领域应用 LLM 的代表性工作。 | https://arxiv.org/abs/2311.00176 |
| 2 | VerilogEval | 论文 | VerilogEval 是面向 Verilog 代码生成的标准化评测基准，定义了任务集合与评估指标，为衡量 LLM 在硬件描述语言上的生成能力提供了可复现的参考。 | https://arxiv.org/abs/2309.07544 |
| 3 | ChipBench | 论文 | 综合评测框架，覆盖芯片设计中的多种 EDA 任务，提供模型在真实设计流程中的性能对比，用于评估 AI 辅助工具的实用效果。 | https://arxiv.org/abs/2601.21448 |
| 4 | MAGE | 论文 | MAGE 提出多智能体生成式引擎，通过协作式 AI 自动化芯片设计流程，展示了如何利用智能体分工提升设计效率，值得关注其工作流设计。 | https://arxiv.org/abs/2412.07822 |
| 5 | ChatEDA | 论文 | ChatEDA 将大语言模型集成到 EDA 流程中，形成对话式工具，允许用户通过自然语言驱动芯片设计任务，降低了传统工具的操作门槛。 | https://arxiv.org/abs/2308.10204 |
| 6 | AutoEDA | 论文 | AutoEDA 聚焦于用 AI 优化设计空间搜索，探索自动化 EDA 流程，为芯片设计自动化研究者提供了新的优化思路与实验方向。 | https://arxiv.org/abs/2508.01012 |
| 7 | HiVeGen | 论文 | HiVeGen 采用层次化结构分解方法生成 Verilog 代码，旨在提升复杂硬件模块的代码质量，为自动生成大型电路提供了可借鉴的分解策略。 | https://arxiv.org/abs/2412.05393 |
| 8 | VeriOpt | 论文 | 将功能验证与设计优化融合的芯片设计框架，在生成过程中确保正确性，适用于对设计可靠性有严格要求的场景。 | https://arxiv.org/abs/2507.14776 |
| 9 | VeriGRAG | 论文 | VeriGRAG 基于检索增强生成技术进行 Verilog 验证，利用外部知识库提升代码准确性，其混合架构为验证工具开发提供了新范式。 | https://arxiv.org/abs/2510.15914 |
| 10 | VeriContaminated | 论文 | VeriContaminated 系统分析了 LLM 在 Verilog 任务中的数据污染问题，提出了评估模型真实能力的严谨方法，对评测研究者有重要参考价值。 | https://arxiv.org/abs/2503.13572 |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ChipMATE | 多智能体推理框架 | 多智能体 RTL 生成框架，Verilog 智能体与 Python 参考模型智能体独立生成实现，并通过随机激励交叉验证输出，无需黄金测试平台。 | [GitHub](https://github.com/zhongkaiyu/ChipMATE) |
| siliconcrew | 自主硬件设计智能体 | 从自然语言到 GDSII 的自主 LLM 智能体，通过 Verilog 生成、仿真和 OpenROAD 综合实现。 | [GitHub](https://github.com/naman-ranka/siliconcrew) |
| vlsi-pd-staff-engineer | 多智能体物理设计框架 | 基于 Claude Code 的 RTL 到 GDSII 多智能体框架，包含 9 个专业智能体、阶段门验证和基于 Yosys + OpenROAD + Sky130 的 ECO 调试。 | [GitHub](https://github.com/RAMA-L7/vlsi-pd-staff-engineer) |
| ForgeLab | 设计 IR + MCP 服务器 | 提供 JSON IR 和 MCP 服务器，使 AI 智能体能够创建 KiCad、FreeCAD 和 glTF 文件。 | [GitHub](https://github.com/andresparraarze/ForgeLab) |
| universal-netlist | 网表读取工具 | 赋予 AI 智能体读取 Cadence/Altium 设计文件的能力。 | [GitHub](https://github.com/IntelligentElectron/universal-netlist) |
| eda-agents | AI/LLM 辅助电路设计 | 使用开源工具进行 AI/LLM 辅助的电路设计。 | [GitHub](https://github.com/Mauricio-xx/eda-agents) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| RTL-BenchMT | 基准动态维护框架 | 提出智能体框架，用于动态维护 RTL 生成基准，解决基准中的缺陷案例和过拟合问题。 | [arXiv](https://arxiv.org/abs/2605.15537v1) |
| CPPL | 电路提示编程语言 | 提出电路提示编程语言，使 LLM 能够直接生成符合硬件编译器基础设施（如 CIRCT）的中间表示。 | [arXiv](https://arxiv.org/abs/2605.17892v1) |
| Trace2Skill | 验证器引导的技能进化 | 提出测试时扩展框架，通过验证器引导的技能进化，提升硬件智能体在复杂 Verilog 设计问题上的表现。 | [arXiv](https://arxiv.org/abs/2605.21810v1) |
| CASS-RTL | 正确性感知子空间引导 | 提出正确性感知的子空间引导方法，用于 LLM 的 RTL 生成，提升周期准确性和并发正确性。 | [arXiv](https://arxiv.org/abs/2606.05680v1) |
| A3D | 自主加速器设计智能体流程 | 提出智能体 AI 流程，用于自主硬件加速器设计，从工作负载理解到微架构和 EDA 工具使用。 | [arXiv](https://arxiv.org/abs/2605.15237v1) |
| Alpha-RTL | 测试时训练 RTL 优化 | 在测试时进行强化学习，使 LLM 策略能够根据特定设计问题的 EDA 反馈进行自适应优化。 | [arXiv](https://arxiv.org/abs/2606.05253v1) |
| RTL-BenchLS | 大规模 RTL 基准 | 提出大规模 RTL 推理与生成基准，覆盖更大规模和更复杂的设计，突破现有基准的饱和限制。 | [arXiv](https://arxiv.org/abs/2606.08976v1) |
| OpenRTLSet | 开源 RTL 数据集 | 发布最大的全开源硬件设计数据集，包含超过 13.1 万个多样化的 Verilog 代码样本，并配有自然语言描述。 | [arXiv](https://arxiv.org/abs/2606.10285v1) |
| 自主光子学设计 | 智能体驱动设计 | 提出自主智能体驱动方法，用于光子器件设计，通过 LLM 调用仿真工具进行自动设计循环。 | [arXiv](https://arxiv.org/abs/2606.00915v1) |
| 记忆引导树搜索 | 求解器综合 | 提出记忆引导树搜索方法，通过跨分支知识迁移，提升 LLM 在芯片设计等组合优化问题上的求解器综合能力。 | [arXiv](https://arxiv.org/abs/2605.17539v2) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框 AI 改造 | 媒体报道 | Google 在 I/O 大会上宣布将搜索框从关键词输入改造为动态 AI 驱动对话界面，可能影响 EDA 工具的用户交互范式。 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| OpenAI 收购 Ona | 行业动态 | OpenAI 计划收购 Ona，以扩展 Codex 的安全持久云环境，支持企业工作流中的长时间运行 AI 智能体。 | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| Google DeepMind 关注多智能体交互风险 | 媒体报道 | Google DeepMind 资助研究数百万 AI 智能体在线交互的潜在风险，对芯片设计中的多智能体协作场景有参考意义。 | [MIT Technology Review](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ContextOS | 统一上下文智能层 | 为 AI 智能体提供统一的上下文智能层，支持无缝集成和完整功能。 | [GitHub](https://github.com/armmammothermography417/ContextOS) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| bjwanneng/veriflow-cc | GitHub 项目 | VeriFlow-CC：基于 Claude Code 的 RTL 设计流水线，从架构到综合（iVerilog/Yosys）自动化 Chip-on-Chat，支持子代理嵌套进行代码生成和行为驱动验证。 | [https://github.com/bjwanneng/veriflow-cc](https://github.com/bjwanneng/veriflow-cc) |
| advaitParanjpe/agentic-rtl-security | GitHub 项目 | Agentic RTL 安全发现基准，比较定向测试、随机模糊测试和 LLM 引导的 MMIO 跟踪生成在 seeded SystemVerilog mini-SoC 上的效果。 | [https://github.com/advaitParanjpe/agentic-rtl-security](https://github.com/advaitParanjpe/agentic-rtl-security) |
| seanoc5/claude-code-for-verilog | GitHub 项目 | 教学沙盒：针对小型 SystemVerilog UART 接收器的闭环代理工作流，帮助硬件工程师从聊天式 LLM 升级到 Claude Code。 | [https://github.com/seanoc5/claude-code-for-verilog](https://github.com/seanoc5/claude-code-for-verilog) |
| Haden-Min/oh_my_rtl_claw | GitHub 项目 | 多代理 AI 系统，将自然语言或参考软件转化为 Verilog RTL、测试台、文档和 FPGA 入门资产。 | [https://github.com/Haden-Min/oh_my_rtl_claw](https://github.com/Haden-Min/oh_my_rtl_claw) |
| qhy991/Awesome-LLM-Circuit-Agent | GitHub 项目 | 基于 LLM 的 RTL 生成和模拟电路生成的学术论文合集。 | [https://github.com/qhy991/Awesome-LLM-Circuit-Agent](https://github.com/qhy991/Awesome-LLM-Circuit-Agent) |
| mak372/Verilog-Agent-Format | GitHub 项目 | 使用 LoRA 微调和 GRPO 的 LLM 基 Verilog 代码转换器，以 Yosys 形式验证作为奖励信号，功能等价通过率达 95%。 | [https://github.com/mak372/Verilog-Agent-Format](https://github.com/mak372/Verilog-Agent-Format) |
| wuhannus/lunarch | GitHub 项目 | Lunahan Architecture：从 Python 到 GDS 的开源 RISC-V 内核，AI 辅助敏捷设计，面向 agentic AI 芯片。 | [https://github.com/wuhannus/lunarch](https://github.com/wuhannus/lunarch) |
| harry37725/Verilog-Fault-Injection-Auto-Hardening-Workflow | GitHub 项目 | 用于自动化硬件安全审计的 n8n 工作流：Verilog RTL 单比特故障注入、AI 驱动的 TMR 加固、验证及执行披露报告生成。 | [https://github.com/harry37725/Verilog-Fault-Injection-Auto-Hardening-Workflow](https://github.com/harry37725/Verilog-Fault-Injection-Auto-Hardening-Workflow) |
| brkbtmz/llm-riscv | GitHub 项目 | LLM 辅助 RV32I/RV32IM/RV32IMC 处理器生成的提示词、RTL 设计、验证文件和 FPGA 结果。 | [https://github.com/brkbtmz/llm-riscv](https://github.com/brkbtmz/llm-riscv) |
| Sawaiz-zip/ResearchProject | GitHub 项目 | LLM 驱动的 Verilog 测试台生成与早期错误定位——LangGraph 流水线，从自然语言生成 HDL 测试台，使用 Pyverilog 静态分析在仿真前检测错误，并反馈给 LLM 自动修复。 | [https://github.com/Sawaiz-zip/ResearchProject](https://github.com/Sawaiz-zip/ResearchProject) |
| Yuexi66557/MLCAD-timing-opt | GitHub 项目 | 使用 OpenROAD + Python + LLM 的设计感知时序优化。 | [https://github.com/Yuexi66557/MLCAD-timing-opt](https://github.com/Yuexi66557/MLCAD-timing-opt) |
| The-OpenROAD-Project/ORAssistant | GitHub 项目 | OpenROAD 的聊天机器人助手。 | [https://github.com/The-OpenROAD-Project/ORAssistant](https://github.com/The-OpenROAD-Project/ORAssistant) |
| Fuadulislam10/NeuroRV-Edge-AI | GitHub 项目 | NeuroRV Edge：开源异构 SoC，结合 RISC-V RV32IM CPU 与 16 通道向量 AI 加速器，面向超低功耗边缘推理。 | [https://github.com/Fuadulislam10/NeuroRV-Edge-AI](https://github.com/Fuadulislam10/NeuroRV-Edge-AI) |
| vargasjr-dev/durium | GitHub 项目 | 面向太空的原生 AI 推理芯片，从第一性原理为轨道计算设计。 | [https://github.com/vargasjr-dev/durium](https://github.com/vargasjr-dev/durium) |
| ai-hpc/ai-hardware-engineer-roadmap | GitHub 项目 | 掌握 AI 推理、AI 代理系统与硬件工程，最终设计物理 AI 芯片的学习路线图。 | [https://github.com/ai-hpc/ai-hardware-engineer-roadmap](https://github.com/ai-hpc/ai-hardware-engineer-roadmap) |
| pccxai/pccx-v003 | GitHub 项目 | PCCX™ v003 IP 核规划包，面向 LLM、视觉、语音及下一代架构。 | [https://github.com/pccxai/pccx-v003](https://github.com/pccxai/pccx-v003) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Structured Testbench Generation for LLM-Driven HDL Design and Verification-Oriented Data Curation | 论文 | 提出 STG（结构化测试台生成框架），解决 LLM 驱动 RTL 工作流中测试台生成随机、高 token 成本、低可复现性和覆盖不足的问题。 | [https://arxiv.org/abs/2606.12983v1](https://arxiv.org/abs/2606.12983v1) |
| LongRTL: Graph-Similarity-Guided LLM-driven Long Context RTL Optimization | 论文 | 提出基于图相似性引导的可扩展 LLM RTL 优化框架，包含三个协作代理：分区代理、优化代理和验证代理，以处理长且模块化差的 RTL 设计。 | [https://arxiv.org/abs/2606.08944v1](https://arxiv.org/abs/2606.08944v1) |
| Verilog-Evolve: Feedback-Driven and Skill-Evolving Verilog Generation | 论文 | 提出 Verilog-Evolve，一个反馈驱动的版本化 Verilog 精炼与跨会话技能演化框架，确保生成代码的正确性、可综合性、时序意识及下游硬件目标友好性。 | [https://arxiv.org/abs/2605.26498v1](https://arxiv.org/abs/2605.26498v1) |
| ROSUM-MCTS: Monte Carlo Tree Search-Inspired HDL Code Summarization with Structural Rewards | 论文 | 提出 ROSUM-MCTS，一种受蒙特卡洛树搜索启发的 LLM 引导 HDL 代码摘要方法，通过结构化探索和强化驱动优化来改进 VHDL/Verilog 摘要。 | [https://arxiv.org/abs/2606.07925v1](https://arxiv.org/abs/2606.07925v1) |
| PALUTE: Processing-In-Memory Acceleration via Lookup Table for Edge LLM Inference | 论文 | 提出 PALUTE，一种基于查找表的存内处理加速器，用于边缘 LLM 推理，降低反量化与非线性算子开销。 | [https://arxiv.org/abs/2606.08891v1](https://arxiv.org/abs/2606.08891v1) |

## 资料更新（2026-06-23）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AI-Driven-RTL-Generation | 多智能体框架 | 集成 RAG 与 MCP 的闭环多智能体框架，将高级硬件规格编译为可综合 SystemVerilog RTL，在 3 级 RISC-V 核上验证 | [GitHub](https://github.com/thanghuynhwinno123-svg/AI-Driven-RTL-Generation) |
| VeriForge | AI Agent 沙箱 | 自动生成、调试和验证 Verilog RTL 设计，并将智能体轨迹导出为 SFT/DPO 训练数据集 | [GitHub](https://github.com/JannieUwU/VeriForge) |
| ai-chip-design-platform | 多智能体验证框架 | 面向 RISC-V 的多智能体验证与测试生成框架，支持 AI 辅助 RTL、ISS、合规性、覆盖率和调试 | [GitHub](https://github.com/HUNT-001/ai-chip-design-platform) |
| rtl_agent | 智能体 RTL 生成管线 | 文本/PDF/音频/视频 → Spec IR → 双 Oracle 智能体 → 已验证 SystemVerilog（GLSVLSI 2026） | [GitHub](https://github.com/srijavuppala/rtl_agent) |
| digital-chip-design-agents | 数字 HDL 全栈智能体 | 数字 HDL 设计全栈智能体 | [GitHub](https://github.com/chuanseng-ng/digital-chip-design-agents) |
| rtl_lm_verification_assistant | 验证辅助原型 | 笔记本级研究原型，用于 AI 辅助 RTL 生成与验证感知评估 | [GitHub](https://github.com/hjzhang-ops/rtl_lm_verification_assistant) |
| Design-Verification-AI-Tool-DEV | 验证平台 | 基于 GUI 的验证平台，通过拖拽设计自动生成 UVM 环境和 RTL | [GitHub](https://github.com/Karan-nevage/Design-Verification-AI-Tool-DEV) |
| verilog-tb-pipeline | 测试平台生成管线 | 基于 LangGraph 的 LLM 驱动 Verilog 测试平台生成管线，集成 Pyverilog 早期错误定位 | [GitHub](https://github.com/Sawaiz-zip/verilog-tb-pipeline) |
| fragua | AI 原生 PCB 设计工具 | 智能体设计电路板，人类观察和引导：原理图 → 布线 → 可制造 ZIP | [GitHub](https://github.com/mentasystems/fragua) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| PDAGENT-BENCH | Benchmark | 面向 VLSI 物理设计的 LLM 智能体基准，评估高维多阶段优化与 EDA 工具交互 | [arXiv](https://arxiv.org/abs/2606.17253v1) |
| HierSVA | 数据集 + Benchmark | LLM 驱动的层次化硬件形式验证数据合成管线、数据集与基准，含 342 个模块及层次元数据 | [arXiv](https://arxiv.org/abs/2606.13706v1) |
| Interpretable and Verifiable Hardware Generation | 框架 | 结合 LLM 与可解释性的逐步精化硬件生成框架，缓解 RTL 生成中的幻觉问题 | [arXiv](https://arxiv.org/abs/2606.19387v1) |
| Agentic Electronic Design Automation | 视角论文 | 从交接（handoff）视角分析 LLM 智能体在 EDA 多阶段流程中的角色与挑战 | [arXiv](https://arxiv.org/abs/2606.19795v1) |
| LLM4RTL | 工具辅助生成 | 工具辅助 LLM 进行 RTL 生成，聚焦开放 Verilog/RTL 代码生成的高质量训练样本 | [arXiv](https://arxiv.org/abs/2606.15500v1) |
| RTLScout | 自主优化系统 | 结合 LLM 智能体设计与电路级综合优化的自主系统，基于 Yosys/OpenROAD 的 PPA 反馈迭代 | [arXiv](https://arxiv.org/abs/2606.06530v2) |
| VHDLSuite | 统一管线 | 面向 VHDL 的 LLM 生成、数据合成与评估统一管线，填补 VHDL 评估空白 | [arXiv](https://arxiv.org/abs/2606.13735v1) |
| StepPRM-RTL | 微调框架 | 结合逐步轨迹建模、过程奖励模型与检索增强微调，提升 LLM 的 RTL 生成正确性 | [arXiv](https://arxiv.org/abs/2606.04246v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| 豆包 2.1 发布：Agent 自己跑 18 个小时搞定芯片设计代码 | 媒体实测 | 报道豆包 2.1 模型驱动的智能体连续运行 18 小时完成芯片设计代码生成 | [量子位](https://www.qbitai.com/2026/06/437503.html) |
