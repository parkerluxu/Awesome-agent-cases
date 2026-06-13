# 电子系统设计：AI Agent 实战案例、教程与科研项目调研

调研日期：2026-06-13

电子系统设计包括原理图、PCB、BOM、封装、布线、DRC/ERC、制造文件、调试文档等。这个方向的个人博主教程较少，更多资料来自开源项目、创业公司案例、科研论文和媒体报道。本文把它们分开列出。

## 结论速览

AI Agent 在电子系统设计里最有价值的环节：

- 规格书到模块拆解。
- 原理图辅助生成。
- PCB 布局布线建议。
- EDA 工具脚本生成。
- BOM 检查和替代料建议。
- DRC/ERC 报告解释。
- 制造文件和调试文档生成。

当前不建议完全交给 Agent 的环节：

- 高压、大电流、射频、高速差分、安规相关设计。
- 量产级 PCB sign-off。
- 未经专家 review 的直接打样。
- 复杂电源完整性/信号完整性判断。

## 博主/开发者教程与心得

### 1. 用 ChatGPT/Claude/Codex 辅助 KiCad、Altium、脚本化 EDA

资料类型：开发者实践归纳  
代表工具：ChatGPT、Claude、Claude Code、Codex、KiCad、tscircuit

公开个人教程通常不是“AI 一键画完 PCB”，而是把 Agent 当作电路设计助理：

- 根据需求列模块和元器件。
- 解释 datasheet。
- 生成 KiCad/EDA 脚本。
- 帮助检查引脚连接。
- 生成 BOM 表和采购备注。
- 写调试步骤和测试计划。

可复刻任务：

- ESP32 传感器扩展板。
- USB-C 供电小板。
- LED 驱动板。
- 电机驱动扩展板。
- Arduino shield。

推荐提示：

```text
我要设计一块 ESP32 温湿度传感器扩展板。
请先输出模块划分、关键芯片、接口、电源树、风险点。
不要直接给最终 PCB。
每一步都列出需要人工确认的数据手册参数。
```

使用心得：

- Agent 很会“讲方案”，但可能编错具体料号或封装。
- 要求它引用 datasheet 页码或明确“需要人工查证”。
- 原理图和 PCB 仍要用 ERC/DRC 和人工检查兜底。

### 2. tscircuit：把电路变成代码，适合给 Coding Agent 接管

资料类型：开源项目/开发者工具  
链接：

- GitHub：https://github.com/tscircuit/tscircuit
- 介绍：https://en.wikipedia.org/wiki/Tscircuit

tscircuit 用 TypeScript 定义电子电路，并生成原理图、PCB、3D 预览和制造文件。它本身不是 AI Agent，但它非常适合 Claude Code/Codex：因为 Agent 擅长读写代码，代码化 PCB 比纯 GUI 操作更容易让 Agent 迭代。

可复刻方式：

- 让 Agent 生成 tscircuit 元件和连接代码。
- 生成预览后，把错误截图或检查结果喂回 Agent。
- 将常用模块封装为组件，例如 USB-C、电源、传感器接口。

使用心得：

- 代码化硬件能让 Git diff、review、CI 检查进入 PCB 流程。
- 对 Agent 来说，改 TypeScript 比在 GUI 里拖元件更稳定。
- 封装库和真实制造规则仍是门槛。

### 3. Quilter Project Speedrun：AI 设计 Linux 单板电脑

资料类型：媒体报道/公司案例  
链接：https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work

Quilter 的 Project Speedrun 用 AI 辅助设计了一块包含 843 个元件、双 PCB 的 Linux 单板电脑。据报道，项目一周完成，人类参与 38.5 小时，首次上电成功启动 Debian。

可借鉴点：

- AI 主要减少 setup、execution、cleanup 中重复耗时的部分。
- 人类工程师转向规格、约束、检查和创造性决策。
- 复杂硬件的“首次成功”仍需要强工具链和专家监督。

使用心得：

- 不要把这个案例理解成普通用户可以立刻一键做 SBC。
- 它更像电子设计自动化方向的趋势证明。
- 对个人开发者，应该从传感器板、电源板、扩展板开始。

### 4. Diode Computers：把 PCB 设计变成代码化流程

资料类型：创业公司案例  
链接：https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7

Diode Computers 使用 LLM 和强化学习来生成、检查和修正 PCB 设计。报道中提到，它们希望把传统图形化 PCB 设计转成代码化流程，把周期从数周/数月缩短到数天。

对个人和团队的启发：

- 电子设计会越来越像软件部署：提交规格和代码，输出物理板卡。
- 机器人、医疗设备、航空航天等行业会优先受益。
- 但越接近真实生产，越需要约束、验证和供应链经验。

### 5. pcbGPT：从自然语言生成可编辑 KiCad 原理图

资料类型：科研系统/可复刻方向  
链接：https://arxiv.org/abs/2606.01188

pcbGPT 面向嵌入式、IoT、可穿戴设备的 PCB 原理图生成，使用 Python DSL、组件库搜索、datasheet grounding、结构/语义验证和可与 KiCad 同步的 Web 工作流。它在 20 个嵌入式原理图任务上取得较高 pass@k，但作者也强调仍需要专家 review。

可借鉴点：

- AI 先生成“可审查初稿”，不是直接打样。
- datasheet-grounded knowledge 比模型自由发挥可靠。
- KiCad 同步和交互式 refinement 是落地关键。

### 6. PCBSchemaGen：约束引导的 PCB 原理图 Agent

资料类型：科研系统  
链接：https://arxiv.org/abs/2602.00510

PCBSchemaGen 把 LLM agent 和 constraint-guided synthesis 结合起来，用 datasheet 知识图谱和子图同构检查 pin role、拓扑约束和功能连接。它适合放进电子系统设计案例库，因为它明确处理数字、模拟、电源混合信号，而不是只做简单数字电路。

### 7. CircuitLM：多 Agent 生成 CircuitJSON 原理图

资料类型：科研系统/多 Agent 设计  
链接：https://arxiv.org/abs/2601.04505

CircuitLM 用五个阶段完成从自然语言到原理图：组件识别、pinout 检索、电子专家 Agent 推理、JSON 原理图合成、SVG 可视化。它的关键价值是把“电子专家知识库 + 多 Agent + 结构化输出”结合起来，减少 hallucination。

### 8. Hackaday / tscircuit 路线：像写前端组件一样写 PCB

资料类型：英文硬件社区/开源项目线索  
链接：https://en.wikipedia.org/wiki/Tscircuit

Hackaday 等硬件社区讨论过 tscircuit 这类 code-first PCB 方式。对 AI Agent 来说，这比 GUI 更友好，因为 Agent 可以改 TypeScript、跑检查、生成预览，再根据错误迭代。适合整理中文教程时关注关键词：`tscircuit AI PCB`、`TypeScript PCB`、`代码化电路设计`、`AI 画电路板`。

### 9. KiCad Python 脚本化：Agent 可接管的开源 EDA 底座

资料类型：开源 EDA 工具 / Agent 可编程入口  
链接：https://en.wikipedia.org/wiki/KiCad

KiCad 是开源 EDA 套件，支持原理图、PCB、Gerber、3D 预览、ERC/DRC、ngspice，并且有 Python 脚本与文本化工程文件。它不是 AI 项目，但对 AI Agent 很关键：Agent 可以生成/修改脚本、解析工程文件、读取 DRC 报告，再让人类在 KiCad GUI 中审查。

可复刻案例：

- 让 Agent 生成 KiCad 项目 README、BOM 检查脚本和制造文件导出脚本。
- 让 Agent 根据 DRC 报告解释间距、未连接网络、封装不匹配问题。
- 让 Agent 从 datasheet 摘要出 pinout 表，再人工对照原理图。

### 10. SmartonAI：KiCad 自然语言插件式操作

资料类型：科研原型 / EDA 操作 Agent  
论文：https://arxiv.org/abs/2307.14740

SmartonAI 以 KiCad 为例，把 GPT/BERT 和插件执行结合起来，让用户用自然语言调用复杂 EDA 功能。它不是生成完整 PCB，而是把“找功能、执行命令、查帮助文档、调用插件”交给 Agent，降低新手使用 KiCad 的门槛。

可借鉴点：

- 对电子设计，先做“EDA 助手”比“一键画板”更现实。
- Agent 可以负责查文档、执行重复操作、解释工具输出。
- 适合中文教程复刻：用 KiCad + ChatGPT/Claude 做 ERC/DRC 报告解释助手。

## 科研项目/论文

### Flux / Quilter / Diode 类商业 EDA Agent 的共性

资料类型：产品趋势总结  
链接：

- Diode：https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7
- tscircuit：https://en.wikipedia.org/wiki/Tscircuit

商业工具正在把“画图式 EDA”转向“代码化/约束化 EDA”。这对个人开发者的启发是：不要只期待聊天机器人直接画 PCB，而要搭建一个可验证流水线。

推荐流水线：

- 自然语言规格。
- 结构化模块清单。
- 代码化原理图或 netlist。
- 自动 ERC/DRC。
- Agent 解释错误。
- 人工 review。
- 再进入打样。

### 1. SmartonAI：KiCad 的自然语言交互插件

资料类型：科研项目  
链接：https://arxiv.org/abs/2307.14740

SmartonAI 以 KiCad 为例，尝试用 GPT/BERT 做 EDA 软件的自然语言交互。它能拆解设计请求、检索帮助文档、执行插件或内置函数，降低复杂 EDA 软件的使用门槛。

实践启发：

- AI 不一定要直接生成完整 PCB，也可以先做“EDA 操作助手”。
- 对新手最有价值的是把复杂命令变成自然语言任务。
- 未来 KiCad/Altium/Cadence 都可能接入类似 Agent。

### 2. AutoEDA / ChatEDA：EDA Flow 自动化

资料类型：科研项目  
链接：

- AutoEDA：https://arxiv.org/abs/2508.01012
- ChatEDA：https://arxiv.org/abs/2308.10204

这类项目把 Agent 用于任务分解、脚本生成、工具调用和结果反馈，尤其适合复杂 EDA flow。虽然更偏芯片后端，但思想同样适用于 PCB：Agent 不是凭空设计，而是调度专业工具。

### 5. pcbGPT / SchGen / PCBSchemaGen 的共同趋势

资料类型：研究趋势总结  
链接：

- pcbGPT：https://arxiv.org/abs/2606.01188
- SchGen：https://arxiv.org/abs/2605.30345
- PCBSchemaGen：https://arxiv.org/abs/2602.00510

这些项目都指向同一个结论：PCB Agent 的核心不是“更会聊天”，而是把硬件设计转成模型容易生成、工具容易验证、工程师容易审查的中间表示。Python DSL、semantic-grounded code、CircuitJSON、知识图谱和 KiCad 同步都是可复用方向。

## 推荐复刻路线

1. 用 Agent 生成需求拆解和模块清单。
2. 人工确认元器件和 datasheet。
3. 用 tscircuit/KiCad 脚本生成初版连接。
4. 运行 ERC/DRC。
5. 让 Agent 解释报错并建议修复。
6. 人工 review 后再导出 Gerber。

## 主要风险

- 编造料号、封装、参数。
- 忽略电源裕量、热设计、EMI。
- 高速/射频规则错误。
- DRC 通过但工程上不可制造。
- 打样成本和硬件损坏风险。

## 参考链接

- tscircuit：https://github.com/tscircuit/tscircuit
- tscircuit 介绍：https://en.wikipedia.org/wiki/Tscircuit
- Quilter Project Speedrun：https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work
- Diode Computers：https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7
- SmartonAI：https://arxiv.org/abs/2307.14740
- AutoEDA：https://arxiv.org/abs/2508.01012
- ChatEDA：https://arxiv.org/abs/2308.10204

