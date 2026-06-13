# 芯片设计：AI Agent 实战案例、教程与科研项目调研

调研日期：2026-06-13

芯片设计方向公开个人博主教程较少，更多来自论文、开源 EDA 项目和公司 demo。这里的重点不是“AI 一键造芯片”的宣传，而是看 Agent 如何参与 Verilog/RTL 生成、测试、综合、PPA 优化、RTL-to-GDSII flow 和 EDA 脚本自动化。

## 结论速览

AI Agent 在芯片设计里适合做：

- 自然语言规格到 Verilog/VHDL 初稿。
- Testbench 和 SystemVerilog Assertions 生成。
- EDA Tcl 脚本生成。
- 编译/仿真/综合报错解释和修复。
- PPA 报告分析。
- 设计空间探索。
- 文档和约束文件生成。

当前不适合完全交给 Agent：

- 生产级 CPU/GPU/NPU 全流程无人审核。
- 安全关键 IP。
- 未经形式验证和仿真覆盖率验证的 RTL。
- 真实工艺 sign-off、DFT、STA、物理验证最终决策。

## 博主/开发者教程与心得

### 1. ChatGPT/Claude/Codex 辅助 Verilog 和 FPGA 学习

资料类型：开发者实践归纳  
代表工具：ChatGPT、Claude、Claude Code、Cursor、Codex

个人开发者常见玩法：

- 让 Agent 生成简单 Verilog 模块，例如 FIFO、UART、PWM、SPI master。
- 让 Agent 写 testbench。
- 把 iverilog/Verilator/Vivado 报错贴回 Agent 修复。
- 让 Agent 解释时序图、状态机和握手协议。
- 让 Agent 把自然语言需求拆成模块接口。

推荐提示：

```text
请生成一个可综合的 Verilog UART TX 模块。
要求：
时钟 50MHz，波特率 115200
输入 valid/data，输出 ready/tx
请同时生成 testbench
不要使用不可综合语法
最后解释状态机
```

使用心得：

- Agent 容易写出“仿真能跑但不可综合”的代码。
- 必须要求可综合、明确时钟复位、明确握手协议。
- testbench 也可能错，不能把 Agent 的测试当作唯一真相。

### 2. Verkor Design Conductor：219 字规格生成 RISC-V CPU

资料类型：公司 demo/媒体报道  
链接：https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours

Tom's Hardware 报道 Verkor.io 的 Design Conductor 从 219 字规格说明生成 RISC-V CPU core，约 12 小时完成从规格到 GDSII 的流程。报道也指出，这个 CPU 相对简单，没有 cache 和乱序执行，主要在仿真与学术工艺上验证。

可借鉴点：

- “规格到芯片”的 Agent 流程正在出现。
- 复杂度上升后 token、验证和计算成本会迅速增加。
- 生产级芯片仍离不开专家、仿真、形式验证和 sign-off。

### 3. OpenROAD：自动 RTL-to-GDSII 的开源底座

资料类型：开源 EDA 项目  
链接：https://en.wikipedia.org/wiki/OpenROAD_Project

OpenROAD 不是 LLM Agent，但它是很多 Agentic EDA 工作的基础。它提供开放的 RTL-to-GDSII 流程，支持 Tcl/Python 脚本、OpenDB 数据库、综合、布局、布线、时序分析等。

对 Agent 的意义：

- Agent 可以生成和修改 OpenROAD flow scripts。
- Agent 可以读取 timing/congestion/power 报告并建议参数。
- 开放工具链让研究和复现变得可能。

### 4. Chip-Chat / ChatGPT-4 参与芯片设计对话式流程

资料类型：研究/实践案例线索  
参考入口：https://en.wikipedia.org/wiki/LLM_aided_design

LLM-aided design 资料中多次提到 Chip-Chat 这类“对话式协同设计”尝试：用 GPT-4 参与 HDL 生成、调试和流程控制。这类案例适合做芯片设计入门教程：不要直接追求完整 CPU，而是用 UART、FIFO、ALU、AXI-lite 外设这类模块练习“规格 -> RTL -> testbench -> 仿真 -> 修复”。

### 5. RTLLM-Editor / LLM4DV / AutoSVA：芯片工程里的细分 Agent 工具

资料类型：工具线索/研究项目汇总  
参考入口：https://en.wikipedia.org/wiki/LLM_aided_design

芯片 Agent 不只生成 Verilog。RTLLM-Editor 偏 HDL 编辑与修复，LLM4DV 和 AutoSVA 偏验证与 SystemVerilog assertions。对真实团队而言，这些细分任务比“一键生成芯片”更可落地。

适合收集的教程题目：

- 用 LLM 生成 SystemVerilog Assertion。
- 用 LLM 根据仿真日志修 RTL bug。
- 用 LLM 生成 Vivado/Quartus/OpenROAD 脚本。
- 用 LLM 写 reference model。

### 6. ChipBench：真实感更强的 RTL 生成、Debug 和 Reference Model 任务

资料类型：科研 benchmark / GitHub 项目  
论文：https://arxiv.org/abs/2601.21448

ChipBench 覆盖 Verilog 生成、debugging、reference model generation 三类任务，包含 44 个真实感更强的层次化模块、89 个 debug cases 和 132 个 reference model 样本。它比只做 HDLBits 小题更接近工程场景。

可借鉴任务：

- 让 Agent 根据模块规格写 Verilog。
- 让 Agent 根据仿真失败定位 bug。
- 让 Agent 写 Python/C++ reference model。
- 比较 Claude、Codex、Cursor 对同一 RTL bug 的修复轮数。

### 7. MAGE：开源多 Agent Verilog RTL 生成引擎

资料类型：科研项目 / 多 Agent RTL 生成  
论文：https://arxiv.org/abs/2412.07822

MAGE 面向 Verilog RTL 生成，使用多 Agent 流程进行候选生成、调试和 checkpoint checking。它在 VerilogEval-Human 2 上显著提升语法和功能正确性。这个案例很适合指导个人复刻：不要只让一个模型一次性生成 RTL，而是并行生成多个候选，再用仿真反馈筛选和修复。

使用心得：

- 多候选比单候选稳定。
- 仿真反馈必须进入循环。
- checkpoint checking 能减少“修了一个 bug 又引入新 bug”。

## 科研项目/论文

### 1. ChatEDA：LLM 驱动的 EDA Agent

资料类型：科研项目  
链接：https://arxiv.org/abs/2308.10204

ChatEDA 用 LLM 做任务分解、脚本生成和 EDA 工具调用，实现从 RTL 到 GDSII 的自动化流程。它强调让 Agent 管理复杂 EDA 工具链，而不是单纯生成一段 Verilog。

实践启发：

- 芯片 Agent 的核心是“工具调度 + 报告反馈”。
- Prompt 只是入口，真正闭环要接仿真、综合、布局布线工具。

### 2. AutoEDA：基于 MCP 的微服务式 EDA Flow 自动化

资料类型：科研项目/开源  
链接：https://arxiv.org/abs/2508.01012

AutoEDA 通过 MCP 和微服务 Agent 自动化 RTL-to-GDSII flow，减少对昂贵微调的依赖，并用结构化提示、参数提取、任务分解提升脚本质量。论文给出 GitHub： https://github.com/AndyLu666/MCP-EDA-Server

实践启发：

- MCP 这类协议适合把 EDA 工具暴露给 Agent。
- 工具调用标准化比“让模型记住所有命令”更可靠。

### 3. HiVeGen：层次化 Verilog 生成

资料类型：科研项目  
链接：https://arxiv.org/abs/2412.05393

HiVeGen 关注复杂硬件设计中 LLM 容易生成单块代码、缺少层次结构的问题。它通过层次化拆分、DSE 和检索提升 Verilog 质量。

实践启发：

- 复杂硬件不能让 Agent 一次写完整模块。
- 先定义模块层次、接口、约束，再逐个生成更可靠。

### 4. VeriOpt：PPA-aware 多角色 Verilog 生成

资料类型：科研项目  
链接：https://arxiv.org/abs/2507.14776

VeriOpt 用 Planner、Programmer、Reviewer、Evaluator 等角色模拟硬件设计流程，并把功耗、性能、面积纳入提示与反馈。它的目标不是只让代码功能正确，而是优化 PPA。

实践启发：

- 芯片设计质量不止“能仿真通过”。
- Agent 流程应读综合报告、时序报告和面积/功耗报告。

### 5. ChipBench：更贴近工业流程的芯片设计 Benchmark

资料类型：科研 benchmark / GitHub 项目  
链接：https://arxiv.org/abs/2601.21448

ChipBench 覆盖 Verilog 生成、debugging、reference model generation 三类任务，包含 44 个真实感更强的层次化模块、89 个 debug cases 和 132 个 reference model 样本。论文显示，即使强模型在复杂任务上也远未饱和，适合用来校准“AI 写 RTL”的真实能力。

### 6. MAGE：开源多 Agent RTL 代码生成引擎

资料类型：科研项目/多 Agent 系统  
链接：https://arxiv.org/abs/2412.07822

MAGE 是面向 Verilog RTL 生成的多 Agent 引擎，包含候选采样、debugging 和 checkpoint checking。它在 VerilogEval-Human 2 上显著提升语法和功能正确性。对个人复刻来说，可以借鉴“多候选 + 仿真反馈 + 定点修复”，而不是只让一个模型一次生成。

### 7. VeriContaminated：硬件代码 benchmark 的数据污染问题

资料类型：科研评估  
链接：https://arxiv.org/abs/2503.13572

这篇论文提醒硬件代码生成评测也存在数据污染：模型可能在训练中见过 HDLBits、VerilogEval 或 RTLLM 的题目。整理案例时要区分“做过公开题库”和“解决真实未见工程任务”。

### 8. MG-Verilog / RTLCoder / VeriGen：领域数据集与专用模型路线

资料类型：数据集/模型路线  
参考入口：https://en.wikipedia.org/wiki/LLM_aided_design

LLM-aided design 汇总中提到 MG-Verilog、RTLCoder、VeriGen 等数据和模型路线。它们说明芯片 Agent 的长期方向可能不是直接用通用模型，而是结合领域数据、仿真反馈、结构检索和工具链日志训练专用模型。

## 推荐复刻路线

1. 从 UART/PWM/FIFO 这类小模块开始。
2. 让 Agent 同时写 RTL 和 testbench。
3. 用 iverilog/Verilator 跑仿真。
4. 把报错和波形现象反馈给 Agent。
5. 再接 Yosys/OpenROAD 做综合和简单后端。
6. 最后尝试多角色流程：Planner、Coder、Reviewer、Verifier。

## 主要风险

- 不可综合语法。
- 时序和复位处理错误。
- testbench 不充分。
- PPA 指标差。
- 形式验证缺失。
- 过度相信 demo，忽略生产级复杂性。

## 参考链接

- Verkor RISC-V CPU：https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours
- OpenROAD：https://en.wikipedia.org/wiki/OpenROAD_Project
- ChatEDA：https://arxiv.org/abs/2308.10204
- AutoEDA：https://arxiv.org/abs/2508.01012
- HiVeGen：https://arxiv.org/abs/2412.05393
- VeriOpt：https://arxiv.org/abs/2507.14776
- LLM-aided Design：https://en.wikipedia.org/wiki/LLM_aided_design

