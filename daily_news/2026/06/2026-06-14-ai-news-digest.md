# Anthropic Fable 5 全球封禁、Agent 安全危机与开源 Agent 框架井喷

日期：2026-06-14

## 今日结论

本周 AI 行业经历了一场史无前例的地震：美国政府以国家安全为由，强制 Anthropic 全球下架其最强模型 Claude Fable 5 和 Mythos 5，事件背后涉及亚马逊等科技巨头的安全研究举报，引发全球对 AI 模型出口管制和 Agent 安全性的激烈讨论。与此同时，Agent 安全领域接连爆出 Agentjacking 攻击、提示注入漏洞和 LangGraph 高危漏洞，安全厂商纷纷加码布局。在开源生态方面，字节跳动、Databricks 等公司发布了重磅 Agent 框架，科研 Agent、编码 Agent 和工业 Agent 项目密集涌现。国内方面，华为鸿蒙 OS 7 全面转型 Agent 系统，阿里、字节、月之暗面等公司也在 Agent 层展开激烈竞争。

## 新闻与产业动态

### 1. Anthropic 全球禁用 Claude Fable 5 和 Mythos 5
- **来源网站**：theverge.com
- **原链接**：[Anthropic cuts off Fable 5 and Mythos 5 access following government order](https://www.theverge.com/ai-artificial-intelligence/949553/anthropic-fable-5-mythos-5-government-national-security)
- **摘要**：美国政府于周五晚发布出口管制指令，以国家安全为由要求 Anthropic 禁止所有外国人（包括公司外籍员工）访问 Fable 5 和 Mythos 5。Anthropic 随即对全球所有用户关闭了这两个模型。这是 AI 史上首次已部署的商业大模型被政府强制召回。
- **为什么重要**：标志着 AI 治理进入新阶段——模型能力本身成为国家安全审查对象，可能重塑全球 AI 产业格局和出口管制规则。
- **值得继续跟踪**：Anthropic 的后续应对、其他国家的反应、以及 Fable 5 是否会被永久封禁。

### 2. 亚马逊安全研究被指触发 Fable 5 禁令
- **来源网站**：theverge.com
- **原链接**：[Amazon security research reportedly led to the White House’s Anthropic Fable ban](https://www.theverge.com/ai-artificial-intelligence/949601/amazon-anthropic-fablemythos-government-ban)
- **摘要**：据《华尔街日报》报道，亚马逊 CEO 安迪·贾西与白宫沟通后，亚马逊的安全研究论文声称通过一系列提示工程可从 Fable 5 获取可用于网络攻击的信息，这直接触发了出口管制指令。亚马逊是 Anthropic 的最大投资者之一。
- **为什么重要**：揭示了科技巨头之间复杂的竞争与安全博弈关系，投资者与投资对象之间的利益冲突在国家安全层面被放大。
- **值得继续跟踪**：亚马逊与 Anthropic 的关系走向、其他科技公司的安全研究结果。

### 3. Anthropic 开始为 Fable 5 用户退款
- **来源网站**：cnBeta.COM
- **原链接**：[Fable 5被禁 Anthropic开始退钱了](https://www.cnbeta.com.tw/articles/tech/1565654.htm)
- **摘要**：Anthropic 宣布面向所有用户关闭 Fable 5 模型并开启退款服务，截止日期为 6 月 20 日。公司表示不同意“一个狭窄的潜在越狱发现就应成为召回商业模型的原因”。
- **为什么重要**：显示 Anthropic 在合规与商业利益之间的两难处境，退款举措可能影响其 IPO 估值。
- **值得继续跟踪**：退款规模、用户流失情况、Anthropic 的 IPO 计划是否受影响。

### 4. 印度 IT 服务公司因 Fable 5 禁令面临竞争劣势
- **来源网站**：Indiatimes
- **原链接**：[US ban on Anthropic's Fable 5 & Mythos 5 to put Indian IT services firms at competitive disadvantage](https://news.google.com/rss/articles/CBMiugFBVV95cUxNejk4aHNoWWNKSzBRZWd4S0JlQ2JKMHlBX0pDdFRZNnVwLUlSa0t1MjFSWTV1dDhNTllBRGh1T0FmSDV3S20xcTl1Y0x5RDZjNjNjU3NkcGRRbGtLdnFUQTdPZ0xWY2VqQXBpR1g0cm5sSlRwaFBERkZHMEoyaFlNdU9WTGFnRXloQVpsU1VXbkJydGZiNGVubDQ4TjBKTlZkdVFmSTY1YVBZdE96NFpmR1JqQVNRTDZGVnc?oc=5)
- **摘要**：印度科技领袖和媒体讨论 Anthropic 事件对印度 AI 雄心的影响，认为印度 IT 服务公司因无法访问 Fable 5 将处于竞争劣势，呼吁加速本土模型研发。
- **为什么重要**：凸显了 AI 模型出口管制对全球科技供应链的深远影响，可能加速各国 AI 自主化进程。
- **值得继续跟踪**：印度政府的 AI 政策调整、其他发展中国家对模型访问受限的反应。

### 5. 华为 HarmonyOS 7 正式发布，全面转型 Agent 系统
- **来源网站**：新浪财经
- **原链接**：[余承东宣布华为鸿蒙OS全面转型Agent：已成中国第二大智能手机系统](https://news.google.com/rss/articles/CBMifkFVX3lxTE93SFZOTlotbXgyQmFTTzZSWUJpa1VsaHJNSjFUanV1QzdqeXRqT0IxVDZQaWEzN2NJbVg3V05xM0x3YmNhTklkNVhjVFRhdDF3a3VCUzhMRVE2ZlZzOFhmc0owQVJ3OWZud3BMWTExQkNNSGZTX2psdWktSkR1dw?oc=5)
- **摘要**：华为在 HDC 2026 上正式发布 HarmonyOS 7，宣布从“万物互联”正式迈向“Agent 时代”。小艺成为系统智能核心，盘古大模型深度集成。华为已成为中国第二大智能手机系统。
- **为什么重要**：标志着主流操作系统级 Agent 化的重要里程碑，Agent 从工具层上升到系统层，将深刻改变人机交互范式。
- **值得继续跟踪**：HarmonyOS 7 的开发者生态建设、Agent 应用商店的落地情况。

### 6. OpenAI 收购 Ona 云平台，强化 Codex 编码 Agent 能力
- **来源网站**：驱动之家
- **原链接**：[重磅收购！OpenAI拿下Ona全力升级AI编码助手Codex](https://news.google.com/rss/articles/CBMiWEFVX3lxTE1lRWJxTGpKVkFiRmItaWF4a0pYTnA3SlF2UE5pcW5qc2h4bGlGZVhKMzU5QjdiMEkwOVNQRFltaTg1c2pLOEN3MzcwbDRMLUlWMXgwWEpKRTQ?oc=5)
- **摘要**：OpenAI 收购云端平台 Ona，旨在提升 Codex 的云能力和智能 Agent 能力。Codex 已有 500 万用户，此次收购将增强其永不下线的云服务能力。
- **为什么重要**：编码 Agent 赛道竞争白热化，OpenAI 通过收购补齐云基础设施短板，与 Anthropic 的 Claude Code 和微软的 Codex 形成直接竞争。
- **值得继续跟踪**：收购后的产品整合、Codex 的新功能发布。

### 7. 月之暗面开源 Kimi K2.7-Code 编程模型
- **来源网站**：marktechpost.com
- **原链接**：[Moonshot AI Releases Kimi K2.7-Code: a Coding Model Reporting +21.8% on Kimi Code Bench v2 Over K2.6](https://www.marktechpost.com/2026/06/12/moonshot-ai-releases-kimi-k2-7-code-a-coding-model-reporting-21-8-on-kimi-code-bench-v2-over-k2-6/)
- **摘要**：月之暗面开源 Kimi K2.7-Code，基于 K2.6 构建，256K 上下文窗口，推理 Token 消耗降低约 30%。在 Kimi Code Bench v2 上提升 21.8%，价格比 GPT-5.5 和 Claude 低 12 倍。
- **为什么重要**：开源高性能编程模型降低了编码 Agent 的使用成本，Token 效率优化解决了“过度思考”问题，对开发者生态有积极影响。
- **值得继续跟踪**：社区采用情况、与其他开源编程模型的对比评测。

### 8. 新型 Agentjacking 攻击可劫持 AI 编码 Agent
- **来源网站**：CyberSecurityNews
- **原链接**：[New Agentjacking Attack Hijacks Your AI Coding Agent to Run Code From a Hacker's Server](https://news.google.com/rss/articles/CBMif0FVX3lxTE80TzNYUVNOUWJSVHQyTWhwa1hhOWlucjQzOHB4ZWdVU1dxMHhST0VzWHB4SzVqbFJYc2NSVVdTZkZFX3BfRXQxbEFKTGU0YWtjQWpRLXE4aUtZMTk0VElRWnd3bTh5WXBqNmM2Z1FvdXZBS2VxTlpGYXFRSjhGZTjSAYQBQVVfeXFMTmpJbUE5c21pdXRVM3A2WU01MUxIZVZLOUQ2cEhDVEVTY3BiUFFwdkplSEZfODJ5dHZ4Nlc3SUw5VlhaRUNRa196RkN0azZma0xYT0d3dVNqTS1iTDFveVRCVkZRaFJ2emxCTy1CYllOUGo0Z1VSMUJhSXJzMlJBaWtaeElS?oc=5)
- **摘要**：安全研究人员发现一种名为 Agentjacking 的新型攻击，可劫持 AI 编码 Agent 从黑客服务器执行恶意代码。攻击者利用 Agent 的代码执行权限进行远程代码注入。
- **为什么重要**：随着编码 Agent 在企业中的广泛部署，此类攻击可能造成严重的数据泄露和系统破坏，Agent 安全成为企业采用的关键障碍。
- **值得继续跟踪**：主流编码 Agent 厂商的修复措施、安全社区的最佳实践。

### 9. AI Agent 仍无法防御提示注入攻击
- **来源网站**：Decrypt
- **原链接**：[AI Agents Still Can't Stop Prompt Injection Attacks, Researchers Warn](https://news.google.com/rss/articles/CBMigAFBVV95cUxNSUtFbUlzNS1DRURpWk8ySFQzYkpaaGd4RllIM0JyNFpnVXN3bFdkUmVOOS0xSFJILWZjWk82Y2FGUHpRdC1xaGJkZFBiSGN0NE9pUDFXOFhWSkNxMjVHY29Kdi1sOWVyWWxLZVV4U2xUNF9JdVdOSHptS0NVRkxFYtIBgAFBVV95cUxNSUtFbUlzNS1DRURpWk8ySFQzYkpaaGd4RllIM0JyNFpnVXN3bFdkUmVOOS0xSFJILWZjWk82Y2FGUHpRdC1xaGJkZFBiSGN0NE9pUDFXOFhWSkNxMjVHY29Kdi1sOWVyWWxLZVV4U2xUNF9JdVdOSHptS0NVRkxFYg?oc=5)
- **摘要**：研究人员警告，AI Agent 在提示注入攻击测试中持续失败，安全缺口日益严重。测试显示 Agent 无法区分用户指令和恶意注入内容。
- **为什么重要**：提示注入是 Agent 安全的核心挑战，如果不能解决，Agent 在企业关键业务中的大规模应用将受到严重制约。
- **值得继续跟踪**：新的防御机制研究、Agent 框架的安全加固进展。

### 10. LangGraph 发现高危漏洞链，可导致服务器完全控制
- **来源网站**：CyberSecurityNews
- **原链接**：[Critical Vulnerability Chain in LangGraph Allows Attackers to Gain Full Server Control](https://news.google.com/rss/articles/CBMicEFVX3lxTE82Z0J0XzFiWlgzUTZlRkF3aWlZeUIyUGJ0Q055ZFIyVk9SWHVRaUJCcUxtUHhOM0ttZGdOb1Zhb1M5MkRCRGRxazdDNFoybE5OelhkNlc3bmNCMEpBVjNDMjJ0NFZZZGdFaE93MXpHRUrSAXZBVV95cUxNZ3RFNW55c29DUGhtQ0NwR1JNQzhXMDhjTk5RMDlfbU1Fa1BXZVpDT1pHYTh0SDU2R3JMaE1pU3BVak1mZWV1SU9CVjNMOFdCWFA1bmEzZUV3WFA3eW9sR25lNU5rSU5mbG1DNzdEdXJLOUp6NGd3?oc=5)
- **摘要**：LangGraph 框架被发现存在高危漏洞链，攻击者可利用该漏洞获得服务器的完全控制权。该漏洞影响使用 LangGraph 构建 Agent 应用的开发者。
- **为什么重要**：LangGraph 是构建多 Agent 系统的流行框架，此漏洞可能影响大量基于该框架的 Agent 应用安全。
- **值得继续跟踪**：漏洞修复进度、受影响应用的排查。

### 11. 港科大&复旦提出首个语义缓存键碰撞攻击
- **来源网站**：凤凰网
- **原链接**：[ICML 2026｜一句无关问题也能劫持Agent，港科大&复旦提出首个语义缓存键碰撞攻击](https://news.google.com/rss/articles/CBMiSEFVX3lxTE5YRk1UdHltRGVDUjdPRmp3YlBIek1laC1ST3VqUjlSTUpEWFdXNjFibXItR0V4Mk10TnFySHk1clIwOW8zRXlvaQ?oc=5)
- **摘要**：港科大和复旦的研究团队在 ICML 2026 上提出首个语义缓存键碰撞攻击，攻击者只需一句无关问题即可劫持 Agent 的缓存机制，实现数据泄露。
- **为什么重要**：揭示了 Agent 缓存机制的新安全风险，对使用缓存优化性能的 Agent 系统构成威胁。
- **值得继续跟踪**：缓存安全机制的改进、该攻击的实际影响范围。

### 12. NVIDIA Blackwell 在首个 Agentic AI 基础设施基准测试中领先
- **来源网站**：blogs.nvidia.com
- **原链接**：[NVIDIA Blackwell Leads on First Agentic AI Infrastructure Benchmark](https://blogs.nvidia.com/blog/nvidia-blackwell-agentperf-artificial-analysis/)
- **摘要**：Artificial Analysis 发布行业首个 Agentic AI 基准测试 AgentPerf，NVIDIA Blackwell Ultra NVL72 平台在 Agentic AI 工作负载中表现领先，每兆瓦可运行 20 倍于竞品的 Agent。
- **为什么重要**：Agent 部署对基础设施提出了新要求，该基准测试为企业和开发者选择 Agent 基础设施提供了重要参考。
- **值得继续跟踪**：其他硬件厂商的 Agent 性能表现、Agent 工作负载的演进趋势。

### 13. 阿里李飞飞首秀：面向 Agent 发布 32 个新品
- **来源网站**：凤凰网科技
- **原链接**：[阿里李飞飞首秀：一口气面向Agent发了32个新品](https://news.google.com/rss/articles/CBMiTEFVX3lxTE1yYVcyZmFpSHVKdkw5NkpoNDZval9jN0tvUFVyUFVHVFozV1VFaWVtbWMwUzZpYVBfd3RoVFZBN0puNm40b3hubEJpcTk?oc=5)
- **摘要**：阿里云智能集团 CTO 李飞飞首次公开亮相，一口气发布 32 个面向 Agent 的新产品，涵盖 Agent 开发、部署、运维全链路。
- **为什么重要**：国内大模型竞争已从模型层上移至 Agent 层，阿里的大规模投入标志着 Agent 平台化竞争进入新阶段。
- **值得继续跟踪**：阿里 Agent 产品的市场接受度、与字节豆包等竞品的对比。

### 14. 字节豆包上线“任务模式”，支持定时执行与代码运行
- **来源网站**：17173
- **原链接**：[字节豆包上线“任务模式”：支持定时执行、代码运行与文件生成，“思考模式”已升级为“专家模式”](https://news.google.com/rss/articles/CBMiZEFVX3lxTE9Tajl1SVU0S1REX0c2a3R6Y0xGcmEzQnN4VW5YTGpoSEZzLWcycVhaaUhBMzd1dmRfVllzdWJSenJHYWxWRWlJT2hrNnYzTlgtcGNRUUJGVGJja0ZVdnVSdVZCSHI?oc=5)
- **摘要**：字节跳动旗下豆包上线“任务模式”，支持定时执行、代码运行与文件生成，同时将“思考模式”升级为“专家模式”，增强 Agent 能力。
- **为什么重要**：字节在 Agent 层的快速迭代显示其抢占 C 端 Agent 市场的决心，任务模式使 AI 从对话工具向自动化助手进化。
- **值得继续跟踪**：用户使用数据、任务模式的扩展能力。

### 15. Cadence 披露 ChipStack AI Super Agent 达到 LV5 自主能力
- **来源网站**：Nasi Lemak Tech
- **原链接**：[Cadence discloses more details on its ChipStack AI Super Agent with LV5 autonomy capabilities](https://news.google.com/rss/articles/CBMikAFBVV95cUxQR3Y4UXBvOHR4V0FTZFRhZjhBMXV0eHdzYzVDbTU0cW5zVXF1ZWVmVzhFUzdySDBuOHNyanEzQ0lqNUF0RDh0YmFpVDNBR21jazZMZVhlckxPdnNjSTJKM1hCTHZ0ME1IR2FvQ3JVWEU4SU5TZ0lSbFFvalNvZGtFc3BJRG5CNWZvcWRkOGtYM04?oc=5)
- **摘要**：Cadence 披露其 ChipStack AI Super Agent 达到 LV5 自主能力，可在芯片设计全流程中实现高度自动化，包括 RTL 生成、验证、物理设计等。
- **为什么重要**：AI Agent 在 EDA/IC 设计领域的突破性进展，LV5 自主能力意味着 Agent 可以独立完成复杂芯片设计任务，将深刻改变半导体行业。
- **值得继续跟踪**：实际芯片设计案例、与其他 EDA 厂商的竞争。

## 论文与开源项目

### 1. 字节跳动开源 Deer Flow：长周期 SuperAgent 框架
- **来源网站**：GitHub
- **原链接**：[bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- **摘要**：字节跳动开源 Deer Flow，一个支持长周期任务的 SuperAgent 框架，集成了沙箱、记忆、工具、技能、子 Agent 和消息网关，可处理从分钟到小时级别的复杂任务。Python 语言，已获 71150 星。
- **为什么重要**：字节跳动在 Agent 框架层面的重磅开源，长周期任务处理能力填补了现有 Agent 框架的空白，适合科研、编码、数据分析等复杂场景。
- **值得继续跟踪**：社区贡献情况、与其他 Agent 框架的集成能力。

### 3. LobeHub：首席 Agent 运营平台
- **来源网站**：GitHub
- **原链接**：[lobehub/lobehub](https://github.com/lobehub/lobehub)
- **摘要**：LobeHub 定位为“首席 Agent 运营平台”，通过招聘、调度和报告功能将 Agent 组织成 7×24 小时运营团队。TypeScript 语言，已获 78652 星。
- **为什么重要**：将 Agent 管理提升到组织运营层面，适合企业级 Agent 部署和运维场景。
- **值得继续跟踪**：企业级功能完善、与现有运维系统的集成。

### 4. Scientific Agent Skills：将 AI Agent 转化为 AI 科学家
- **来源网站**：GitHub
- **原链接**：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- **摘要**：开源 Agent 技能库，包含 140 个即用技能和 100+ 科学数据库，覆盖生物学、化学、医学和药物发现。兼容 Cursor、Claude Code、Codex 等主流 Agent。已获 28185 星，被 16 万+科学家使用。
- **为什么重要**：科研 Agent 的关键基础设施，大幅降低了科学家使用 AI Agent 进行科研的门槛，是 AI for Science 的重要推动力。
- **值得继续跟踪**：新技能和数据库的持续扩展、科研论文产出案例。

### 5. IBM AssetOpsBench：工业 4.0 Agent 基准测试框架
- **来源网站**：GitHub
- **原链接**：[IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench)
- **摘要**：IBM 开源 AssetOpsBench，一个面向工业 4.0 资产运维的 Agent 基准测试框架，包含 460+ 场景、5 个专业 Agent（IoT、FMSR、TSFM、工单等）和多 Agent 编排蓝图。Python 语言。
- **为什么重要**：填补了工业领域 Agent 评估的空白，为制造业 AI Agent 的标准化评估提供了重要工具。
- **值得继续跟进**：工业企业的采用情况、与其他工业 Agent 框架的兼容性。

### 6. PDEAgentBench：科学 PDE 求解器优化 Agent 基准
- **来源网站**：GitHub
- **原链接**：[YusanX/pde-agent-bench](https://github.com/YusanX/pde-agent-bench)
- **摘要**：PDEAgentBench 是一个自动化基准测试框架，用于评估 Code Agent 在优化科学 PDE 求解器方面的能力。Python 语言，95 星。
- **为什么重要**：聚焦科学计算中的 PDE 求解优化，为科研 Agent 在计算科学领域的应用提供了标准化评估方法。
- **值得继续跟踪**：与其他科学 Agent 基准的对比、在具体 PDE 问题上的表现。

### 7. Terminal-Bench-Science：终端科学工作流 Agent 评估
- **来源网站**：GitHub
- **原链接**：[harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
- **摘要**：Terminal-Bench-Science 评估 AI Agent 在终端中执行复杂真实世界科学工作流的能力。Python 语言，139 星。
- **为什么重要**：真实科学工作流往往在终端环境中执行，该基准填补了终端场景下 Agent 评估的空白。
- **值得继续跟踪**：主流 Agent 在该基准上的表现、科学工作流覆盖范围的扩展。

### 8. Universal-Netlist：让 AI Agent 读取 Cadence/Altium 设计
- **来源网站**：GitHub
- **原链接**：[IntelligentElectron/universal-netlist](https://github.com/IntelligentElectron/universal-netlist)
- **摘要**：开源项目，赋予 AI Agent 读取 Cadence/Altium 电路设计文件的能力。TypeScript 语言，21 星。
- **为什么重要**：打通了 AI Agent 与 EDA 工具的数据通道，是 IC/EDA Agent 的关键基础设施，与 Cadence ChipStack AI Super Agent 形成互补。
- **值得继续跟踪**：支持的 EDA 工具扩展、与主流 Agent 框架的集成。

### 9. Mastra：现代 TypeScript Agent 框架
- **来源网站**：GitHub
- **原链接**：[mastra-ai/mastra](https://github.com/mastra-ai/mastra)
- **摘要**：由 Gatsby 团队开发的 Mastra 是一个基于现代 TypeScript 栈构建 AI 应用和 Agent 的框架。已获 25052 星。
- **为什么重要**：TypeScript 生态的 Agent 框架，适合前端开发者快速构建 Agent 应用，降低了 Agent 开发门槛。
- **值得继续跟踪**：框架的成熟度、与 React/Next.js 等前端框架的集成。

### 10. Pydantic AI：Pydantic 风格的 Agent 框架
- **来源网站**：GitHub
- **原链接**：[pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai)
- **摘要**：Pydantic 团队推出的 AI Agent 框架，延续 Pydantic 的类型安全和数据验证理念。Python 语言，已获 17749 星。
- **为什么重要**：Pydantic 是 Python 生态中最流行的数据验证库，其 Agent 框架有望成为 Python 开发者构建 Agent 的首选方案。
- **值得继续跟踪**：与 FastAPI 等 Python Web 框架的集成、企业级功能完善。

## 今日优先阅读排序

1. **Anthropic 全球禁用 Claude Fable 5 和 Mythos 5**（theverge.com）—— 本周最大事件，影响全球 AI 产业格局
2. **亚马逊安全研究被指触发 Fable 5 禁令**（theverge.com）—— 揭示事件背后的商业与安全博弈
3. **新型 Agentjacking 攻击可劫持 AI 编码 Agent**（CyberSecurityNews）—— Agent 安全的核心威胁
4. **字节跳动开源 Deer Flow：长周期 SuperAgent 框架**（GitHub）—— 重磅开源项目，适合复杂任务自动化
5. **华为 HarmonyOS 7 正式发布，全面转型 Agent 系统**（新浪财经）—— 操作系统级 Agent 化里程碑
6. **Databricks 开源 Omnigent：跨 Agent 元编排框架**（marktechpost.com）—— 多 Agent 治理的关键基础设施
7. **月之暗面开源 Kimi K2.7-Code 编程模型**（marktechpost.com）—— 开源高性能编程模型，成本优势显著
8. **OpenAI 收购 Ona 云平台，强化 Codex 编码 Agent 能力**（驱动之家）—— 编码 Agent 赛道竞争加剧
9. **Scientific Agent Skills：将 AI Agent 转化为 AI 科学家**（GitHub）—— 科研 Agent 的关键基础设施
10. **Cadence 披露 ChipStack AI Super Agent 达到 LV5 自主能力**（Nasi Lemak Tech）—— IC/EDA Agent 的重大突破
