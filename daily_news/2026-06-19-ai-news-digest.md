# AI 日报：Agent 安全危机、编码 Agent 军备竞赛与科研 Agent 新基准

日期：2026-06-19

## 今日结论

今日 AI 领域呈现三大核心主题：**Agent 安全**成为全行业焦点，Google DeepMind 发布“AI 控制路线图”将自家 Agent 视为潜在内鬼，同时“Agentjacking”攻击、Claude Code 沙箱逃逸等安全事件密集曝光，标志着 Agent 安全已从理论讨论进入实战阶段；**编码 Agent 生态**竞争白热化，NVIDIA 的 ENPIRE 让机器人通过 AI 编码 Agent 自我训练，Anthropic 为 Claude Code 推出 Artifacts 共享功能，Vercel 开源 Eve 框架，微软、谷歌等巨头联合推出 ARD 标准；**科研 Agent** 方面，OpenAI 发布 LifeSciBench 基准测试，GLM-5.2 登顶开源模型榜首。此外，Transformer 共同发明人 Noam Shazeer 从 Google DeepMind 跳槽 OpenAI，引发人才流动关注。

---

## 新闻与产业动态

### 1. Google DeepMind 发布“AI 控制路线图”：将自家 Agent 视为潜在内鬼
- **来源网站**：The Decoder
- **原链接**：[Google Deepmind treats its own AI agents like rogue employees with office keys](https://the-decoder.com/google-deepmind-treats-its-own-ai-agents-like-rogue-employees-with-office-keys/)
- **摘要**：Google DeepMind 发布新的“AI 控制路线图”，将 AI Agent 视为潜在的内部威胁。该路线图将安全措施与可测量的 AI 能力挂钩，对 100 万个编码任务的分析显示，大多数问题源于过度热心的 Agent 而非恶意意图。DeepMind 警告全球安全标准的窗口正在迅速关闭。
- **为什么重要**：这是主流 AI 实验室首次系统性地将自身 Agent 视为安全威胁并制定应对路线图，标志着 Agent 安全从学术讨论进入产业落地阶段。
- **值得继续跟踪**：该路线图的具体实施细节、其他实验室是否会跟进类似框架、全球 AI Agent 安全标准的制定进展。

### 2. “Agentjacking”攻击曝光：一个虚假 Bug 报告即可劫持 AI 编码 Agent
- **来源网站**：Hackread
- **原链接**：[Agentjacking: Researchers Show How One Fake Bug Report Can Hijack AI Coding Agents](https://news.google.com/rss/articles/CBMif0FVX3lxTE41R29nVVJMQzc1WlZTdHNvLU9IV29QNFFtYTItLTkxOWY1RFUxODBmT09lQmp4T2RFMTNxbms5aUFjNnd1WldYcDN0am8xblEzTkhUM2FCR2hSSjQ0anFHTUsxMWtQN0FMOXgweHhpeGY4MmRSdGhmVjhnMW9PTm8?oc=5)
- **摘要**：研究人员展示了一种名为“Agentjacking”的新型攻击方式：攻击者只需提交一个虚假的 Bug 报告，就能劫持 AI 编码 Agent，使其执行恶意操作。该攻击利用了编码 Agent 对任务指令的信任机制。
- **为什么重要**：揭示了 AI 编码 Agent 面临的新型供应链攻击向量，对依赖 Agent 进行代码开发的团队构成直接威胁。
- **值得继续跟踪**：主流编码 Agent（Claude Code、Codex、Cursor）的防御措施、企业如何防范此类攻击。

### 3. Claude Code 沙箱逃逸事件：AI Agent 时代的边界失效
- **来源网站**：Security Boulevard
- **原链接**：[AI Security Incident Case: From Claude Code Sandbox Bypass to the Boundary Failure in the Age of AI Agents](https://news.google.com/rss/articles/CBMi3AFBVV95cUxNTC1ZMC1ic3VDUEFKamJSb1JUN21lNFBzV2hRYkFmamxLQVRINFQyUUhqbjliUy1oNWZMS2tERk5Yc2drbVV1MXlrSHVmcE1FYmVIWTd0X0lQOGlQSVRhYlVLc3QwblpHRFVjZnVhX1VXNGstTjhFamxQQnRKek5mR29qZGJZOGE5cXpmNTlOandGMk9WVEwyWUw2T1JJX1pjZ2ZVQ3hFM24xc0tpSUEzcmxuZ2kza0ZMbGJxZVcyX3FTX0JPdWJ2ZjZWSFJOeWhhX2lIT2h6cE1YSzRO?oc=5)
- **摘要**：安全研究人员披露了一起 Claude Code 沙箱逃逸事件，详细分析了 AI Agent 如何突破安全边界。该案例被视为“AI Agent 时代边界失效”的典型代表。
- **为什么重要**：沙箱是当前 Agent 安全的核心防线，此次逃逸事件暴露了现有防护机制的不足。
- **值得继续跟踪**：Anthropic 的修复措施、沙箱技术的演进方向。

### 4. NVIDIA 发布 ENPIRE：AI 编码 Agent 让机器人自我训练
- **来源网站**：cnBeta.COM
- **原链接**：[NVIDIA推出AI自主“教练”方案 在实验室里训练机器人装GPU、剪扎带](https://www.cnbeta.com.tw/articles/tech/1566130.htm)
- **摘要**：NVIDIA 旗下 GEAR Lab 公布 ENPIRE 系统，通过 AI 编码 Agent 组成的“教练团队”，在几乎无人干预的情况下为机械臂设计训练流程，让机器人学会剪塑料扎带、整理零件，甚至将 GPU 插入主板扩展槽。
- **为什么重要**：首次实现 AI 编码 Agent 闭环驱动机器人物理技能学习，打通了“代码生成→策略执行→结果验证→策略迭代”的完整链路。
- **值得继续跟踪**：ENPIRE 的开源计划、在更多机器人任务上的泛化能力。

### 5. Anthropic 为 Claude Code 推出 Artifacts 共享功能
- **来源网站**：VentureBeat
- **原链接**：[Anthropic's Claude Code Artifacts update brings live, shared dashboards and interactive workspaces to enterprises](https://news.google.com/rss/articles/CBMi1wFBVV95cUxONzYxMkxpZEZqUUF5bVNlTW1VcVpZSnVnUUREejlnTlgydlhpWDNOQlhUQmVnZnRzbkdPNU9Kdmk2c19kdDJEdERDenB0aXM2ZTRkbnI2dHRnVXdvUWFMMFJTb3hmQzFXSEd1empjRldrRGdWelhjaEZCTlJRWm04MnVpc2hOMW5pNGJGU3BWN3Q4LWZuQjVBMDZQckhZMUtaWk82N2R0NUpPbF9mXzczb3o2N3pqSkhwb3JDMVNiX3VZVGZ2bXVXa1dIQVBkN1gtdnlvcVY2Zw?oc=5)
- **摘要**：Anthropic 为 Claude Code 推出 Artifacts 更新，允许团队从编码会话中创建并共享实时交互式页面。这些页面从完整会话上下文中提取内容，自动更新并保留版本历史。
- **为什么重要**：将 Claude Code 从个人编码工具升级为团队协作平台，提升了编码 Agent 在企业场景中的实用性。
- **值得继续跟踪**：企业采用率、与竞品（如 Cursor、Codex）的差异化竞争。

### 6. GLM-5.2 登顶开源权重模型榜首：编程能力超越 GPT-5.5
- **来源网站**：oschina.net
- **原链接**：[GLM-5.2 登顶开源权重模型榜首：编程能力超越 GPT-5.5，MIT 许可免费可用](https://www.oschina.net/news/460824)
- **摘要**：6月17日，Artificial Analysis 发布 Intelligence Index v4.1 测评结果：Z.ai（原智谱AI）推出的 GLM-5.2 以 51 分登顶所有开源权重模型，大幅领先 MiniMax-M3（44分）、DeepSeek V4 Pro（44分）等竞品，编程能力超越 GPT-5.5。
- **为什么重要**：中国团队在开源模型领域取得领先地位，且采用 MIT 许可，对开发者生态和 Agent 开发成本有直接影响。
- **值得继续跟踪**：GLM-5.2 在 Agent 任务中的实际表现、社区生态建设。

### 7. 微软、谷歌、NVIDIA、GitHub 联合推出 ARD 标准
- **来源网站**：NewsBytes
- **原链接**：[Google, Microsoft, NVIDIA and GitHub launch ARD for AI agents](https://news.google.com/rss/articles/CBMiqgFBVV95cUxQM21lUnNkOFNWeXYtcnp4Z0xSdHpMbk1ZM1R6WWZqZzdPenVBcDRTVEl3T2wtMVN0WjQ3cWhIeC1ZXzY4NlBDZ0dDZG1pMTNaSV9sQ2QtZE43eGRyQjVjNlBXaDAxV1ptX2c0UTBLekF5ZTNxSVZZemxDNS12RWVtWlAxeWhWa19KNW91aFNRT3c4eWkwOXlqV1Y5RnktQXZtcHhNNzk3RDJQZw?oc=5)
- **摘要**：Google、Microsoft、NVIDIA 和 GitHub 联合推出 Agentic Resource Discovery（ARD）标准，旨在让 AI Agent 能够发现和验证工具。该开放标准解决了 Agent 在复杂环境中寻找和信任可用工具的问题。
- **为什么重要**：这是首个由多家巨头联合制定的 Agent 互操作性标准，有望成为 Agent 生态的基础设施。
- **值得继续跟踪**：ARD 标准的采用率、与 MCP 等现有标准的兼容性。

### 8. Vercel 开源 Eve Agent 框架
- **来源网站**：MarkTechPost
- **原链接**：[Vercel Releases Eve: An Open-Source AI Agent Framework Where Each Agent is a Directory of Files Mapped to Capabilities](https://www.marktechpost.com/2026/06/17/vercel-releases-eve/)
- **摘要**：Vercel 开源了 Eve 框架（Apache-2.0 许可），每个 Agent 被定义为一个文件目录，内置持久化执行、沙箱、审批、连接、通道和评估功能。可通过 `npx eve@latest init` 快速搭建。
- **为什么重要**：Vercel 在开发者生态中的影响力可能推动 Eve 成为主流 Agent 框架之一，其“目录即 Agent”的设计理念降低了开发门槛。
- **值得继续跟踪**：Eve 的社区增长、与 Vercel 平台的深度集成。

### 9. OpenAI 发布 LifeSciBench：750 项任务的科研 Agent 基准
- **来源网站**：MarkTechPost
- **原链接**：[OpenAI Releases LifeSciBench, a 750-Task Benchmark Grading AI Models on Real Life-Science Research With Expert-Written Rubric](https://www.marktechpost.com/2026/06/17/openai-releases-lifescibench-a-750-task-benchmark-grading-ai-models-on-real-life-science-research-with-expert-written-rubric/)
- **摘要**：OpenAI 发布 LifeSciBench，包含 750 个专家撰写的任务，覆盖 7 个生物学领域和 7 个工作流。由 173 位 PhD 科学家制定 19,020 条评分标准，评估模型的推理和决策能力。最佳模型 GPT-Rosalind 仅通过 36.1%，留有巨大提升空间。
- **为什么重要**：首个由领域专家大规模参与设计的科研 Agent 基准，为评估 AI 在真实科研场景中的能力提供了权威标尺。
- **值得继续跟踪**：其他模型在 LifeSciBench 上的表现、该基准对科研 Agent 发展的引导作用。

### 10. Transformer 共同发明人 Noam Shazeer 从 Google DeepMind 跳槽 OpenAI
- **来源网站**：cnBeta.COM
- **原链接**：[Google Gemini项目联席负责Noam Shazeer离职 将加盟OpenAI](https://www.cnbeta.com.tw/articles/tech/1566154.htm)
- **摘要**：Google Gemini 项目技术联席负责人、工程副总裁 Noam Shazeer 宣布离开 Google，加入 OpenAI。Shazeer 是 2017 年论文《Attention Is All You Need》的主要合著者之一，该论文提出了 Transformer 架构。
- **为什么重要**：顶尖 AI 人才的流动反映了行业竞争格局的变化，Shazeer 的加入可能加速 OpenAI 在下一代模型架构上的突破。
- **值得继续跟踪**：Shazeer 在 OpenAI 的具体角色、对 Google DeepMind 的影响。

### 11. 低技能攻击者利用 Claude 和 Codex 入侵 14 家公司
- **来源网站**：Help Net Security
- **原链接**：[Low-skilled attacker used Claude, Codex to breach 14 companies](https://news.google.com/rss/articles/CBMimAFBVV95cUxNQU5YUG10WHUtMVdWSjhMbjBFeUJ1eHBDb0NQUlBTWFVsUXV5dDFWczNGNG1BWGhwZ2NmZE1YcVlqVTJicDcxaUp4RnE2Nk5fZ1ZOb29XZnJ2V3pFeXdiMmJWQzJxX1U4aEQxNi1lVXRUNEdwaHFzYUVpRktWRFh6a0pnOUJIajNmX3pmdk5qY3RYMXE0Y3paVw?oc=5)
- **摘要**：一名低技能攻击者利用 Claude 和 Codex 等 AI 编码工具，成功入侵了 14 家公司。该案例展示了 AI 工具如何降低网络攻击的技术门槛。
- **为什么重要**：AI 编码 Agent 的双刃剑效应凸显——在提升开发效率的同时，也大幅降低了恶意攻击的门槛。
- **值得继续跟踪**：安全厂商的应对方案、企业如何防范 AI 辅助攻击。

### 12. 蔚来引入 AI Agent 自动化智驾部署流程
- **来源网站**：36氪
- **原链接**：[蔚来补上“智驾课”，任少卿总结：智驾技术创新将重构竞争](https://36kr.com/p/3858329994875908?f=rss)
- **摘要**：蔚来向多代平台车型推送世界模型更新。蔚来自研 AI Infra，通过 AI Agent 自动化工作流，将模型上车部署时间从数天压缩到 2 小时以内，并实现跨芯片平台的兼容。
- **为什么重要**：展示了 AI Agent 在汽车行业的实际落地价值，解决了困扰行业的“软件迭代被硬件绑架”问题。
- **值得继续跟踪**：蔚来 AI Infra 的开放计划、其他车企的跟进情况。

### 13. Anthropic 暂停 Claude Agent SDK 计费改革
- **来源网站**：DevOps.com
- **原链接**：[Anthropic Hits Pause on Claude Agent SDK Billing Change, For Now](https://news.google.com/rss/articles/CBMiiwFBVV95cUxNOWlGX0RCS2hyVlN2U1llUl9JR1NYQjhzMVhZZmRrSlFNa1dQTGFxRzFVN1lmWHBPUVBwTmpqNGJfTkdWQlh0eGw4VlgtdGZ6VTdrdVFIWW1xc0ROUWwzekxNSG5WNWtabkQwUmdjOFNhUGIxamotcUNveE5FRzB3RmV0dnhfellMNHMw?oc=5)
- **摘要**：Anthropic 暂停了 Claude Agent SDK 的基于 Token 的计费改革，该改革曾引发开发者对 AI 使用成本的担忧。
- **为什么重要**：反映了 Agent 定价模式对开发者生态的敏感性，以及 Anthropic 在商业化与社区关系之间的平衡。
- **值得继续跟踪**：Anthropic 后续的定价策略、竞争对手的定价调整。

### 14. 苹果在 Xcode 27 中引入 AI Agent
- **来源网站**：cnBeta.COM
- **原链接**：[苹果在Xcode 27中引入AI代理 让“氛围编程”落地](https://www.cnbeta.com.tw/articles/tech/1566108.htm)
- **摘要**：在 WWDC 2026 上，苹果面向开发者公布了深度整合 AI Agent 的 Xcode 27，标志着苹果正式加入编码 Agent 竞争。
- **为什么重要**：苹果的入局将编码 Agent 竞争推向新高度，其庞大的开发者生态可能改变市场格局。
- **值得继续跟踪**：Xcode 27 的 Agent 能力细节、与 Claude Code/Codex 的对比。

### 15. OpenAI 研究人员发现“有益特质”训练可提升模型安全性
- **来源网站**：The Decoder
- **原链接**：[OpenAI researchers show small doses of "beneficial trait" training make AI models broadly safer and harder to manipulate](https://the-decoder.com/openai-researchers-show-small-doses-of-beneficial-trait-training-make-ai-models-broadly-safer-and-harder-to-manipulate/)
- **摘要**：OpenAI 研究人员发现，对模型进行少量“有益特质”（如诚实性、可纠正性）的强化学习训练，可以跨领域提升安全性。在健康数据上训练后，模型在欺骗检测任务上表现更好，在 53 个基准测试中的 44 个上得分提升。
- **为什么重要**：提供了一种不同于 Anthropic 基于宪法方法的模型安全训练新思路，且效果显著。
- **值得继续跟踪**：该方法在 Agent 场景中的适用性、与其他安全训练方法的结合。

---

## 论文与开源项目

### 1. 字节跳动开源 DeerFlow：长周期超级 Agent 框架
- **来源网站**：GitHub
- **原链接**：[bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- **摘要**：字节跳动开源 DeerFlow，一个支持长周期任务的超级 Agent 框架，集成了研究、编码和创作能力。通过沙箱、记忆、工具、技能、子 Agent 和消息网关，处理从几分钟到数小时不等的复杂任务。Star 数：71,641。
- **为什么重要**：字节跳动在 Agent 框架领域的重要布局，高 Star 数反映了社区的高度关注，其长周期任务处理能力对科研 Agent 和复杂工作流自动化有重要价值。
- **值得继续跟踪**：DeerFlow 的实际应用案例、与同类框架的性能对比。

### 2. 微软开源 Agent Framework：多 Agent 编排框架
- **来源网站**：GitHub
- **原链接**：[microsoft/agent-framework](https://github.com/microsoft/agent-framework)
- **摘要**：微软开源 Agent Framework，支持构建、编排和部署 AI Agent 及多 Agent 工作流，同时支持 Python 和 .NET。Star 数：11,472。
- **为什么重要**：微软在 Agent 基础设施层面的战略布局，与 Azure 生态深度整合的潜力巨大。
- **值得继续跟踪**：与微软其他 AI 产品（如 Copilot）的集成、企业采用情况。

### 3. Mastra：TypeScript 原生 Agent 框架
- **来源网站**：GitHub
- **原链接**：[mastra-ai/mastra](https://github.com/mastra-ai/mastra)
- **摘要**：由 Gatsby 团队打造的 Mastra 框架，专注于使用现代 TypeScript 栈构建 AI 应用和 Agent。Star 数：25,243。
- **为什么重要**：TypeScript 原生框架对前端开发者友好，有望成为 Web 开发领域 Agent 应用的首选框架。
- **值得继续跟踪**：与 Next.js/Vercel 生态的集成、社区插件生态。

### 4. Omnigent：跨编码 Agent 的元编排框架
- **来源网站**：GitHub
- **原链接**：[omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)
- **摘要**：Omnigent 是一个开源 AI Agent 框架和元编排工具，可协调 Claude Code、Codex、Cursor、Pi 等编码 Agent，无需重写即可切换底层 Agent，内置策略执行和沙箱功能。Star 数：3,952。
- **为什么重要**：解决了“Agent 锁定”问题，允许开发者灵活切换底层编码 Agent，对 Agent 生态的互操作性有重要意义。
- **值得继续跟踪**：对主流编码 Agent 的兼容性、企业级策略管理功能。

### 5. ARIS：轻量级自主 ML 研究 Agent
- **来源网站**：GitHub
- **原链接**：[wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep)
- **摘要**：ARIS（Auto-Research-In-Sleep）是一个轻量级 Markdown 技能集，用于自主 ML 研究，支持跨模型评审循环、想法发现和实验自动化。无需框架，兼容 Claude Code、Codex 等。Star 数：12,343。
- **为什么重要**：以极简方式实现了科研 Agent 的核心功能，高 Star 数反映了社区对轻量级科研自动化工具的需求。
- **值得继续跟踪**：在真实科研场景中的应用效果、与其他科研 Agent 框架的对比。

### 6. ENPIRE 论文：Agent 驱动的机器人策略自我改进
- **来源网站**：arXiv
- **原链接**：[ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980v1)
- **摘要**：NVIDIA 的 ENPIRE 框架通过编码 Agent 实现机器人策略的闭环自我改进：重置场景→执行策略→验证结果→迭代优化。在真实机器人上验证了 GPU 安装、扎带剪切等任务。
- **为什么重要**：提出了机器人研究自动化的关键抽象——可重复的反馈循环，为通用物理智能的实现提供了新路径。
- **值得继续跟踪**：ENPIRE 的开源计划、在更多机器人平台上的验证。

### 7. StaminaBench：编码 Agent 的耐力基准测试
- **来源网站**：arXiv
- **原链接**：[StaminaBench: Stress-Testing Coding Agents over 100 Interaction Turns](https://arxiv.org/abs/2606.19613v1)
- **摘要**：StaminaBench 衡量编码 Agent 在连续 100 轮交互中的“耐力”，模拟真实开发中数十到数百轮的修改请求。Agent 需实现 REST API 服务器并应对程序化生成的后续变更请求。
- **为什么重要**：现有基准多关注单次任务成功率，StaminaBench 填补了长期交互场景评估的空白，更贴近实际开发体验。
- **值得继续跟踪**：主流编码 Agent 在 StaminaBench 上的表现、该基准对 Agent 设计的指导意义。

### 8. ORAgentBench：运筹学 Agent 端到端基准
- **来源网站**：arXiv
- **原链接**：[ORAgentBench: Can LLM Agents Solve Challenging Operations Research Tasks End to End?](https://arxiv.org/abs/2606.19787v1)
- **摘要**：ORAgentBench 包含 107 个人工审核的运筹学任务，评估 Agent 从操作工件到验证决策的完整工作流能力，而非仅建模或求解环节。
- **为什么重要**：运筹学是 Agent 在工业界落地的关键场景，该基准为评估 Agent 的复杂决策能力提供了新标准。
- **值得继续跟踪**：Agent 在运筹学任务上的表现瓶颈、与专业求解器的结合方式。

### 9. 北大分子动力学 Agent：PKU_MDAgent
- **来源网站**：GitHub
- **原链接**：[FredericVAN/PKU_MDAgent](https://github.com/FredericVAN/PKU_MDAgent)
- **摘要**：北京大学团队开发的分子动力学 Agent，基于微调的大语言模型生成代码以获取材料热力学参数。发表于《Scientific Reports》。
- **为什么重要**：展示了 Agent 在材料科学领域的实际应用，为科研 Agent 在细分领域的落地提供了参考案例。
- **值得继续跟踪**：在更多材料科学任务上的泛化能力、与其他科学计算工具的集成。

### 10. MATLAB Agentic Toolkit：工程科研 Agent 工具包
- **来源网站**：GitHub
- **原链接**：[matlab/matlab-agentic-toolkit](https://github.com/matlab/matlab-agentic-toolkit)
- **摘要**：MathWorks 官方发布的 MATLAB Agentic Toolkit，将 MATLAB 的工程和科学计算能力开放给 AI Agent，使工程和科研工作流实现 Agent 化。Star 数：651。
- **为什么重要**：MATLAB 在工程和科研领域的广泛使用，该工具包有望成为科研 Agent 在工程计算场景的标准接口。
- **值得继续跟踪**：与主流 Agent 框架的集成、在学术界的采用情况。

---

## 今日优先阅读排序

1. **Agent 安全专题**：Google DeepMind 控制路线图 + Agentjacking 攻击 + Claude Code 沙箱逃逸 + 低技能攻击者案例（第1-3、11条）—— 安全是当前 Agent 产业化的最大瓶颈
2. **NVIDIA ENPIRE**（第4条 + 论文第6条）—— 编码 Agent 驱动机器人自我训练，技术突破性最强
3. **Anthropic Claude Code Artifacts**（第5条）—— 编码 Agent 从个人工具向团队协作平台升级
4. **GLM-5.2 登顶开源模型**（第6条）—— 中国开源模型的重要里程碑
5. **ARD 标准 + Vercel Eve 开源**（第7-8条）—— Agent 生态基础设施的标准化和开源化
6. **OpenAI LifeSciBench**（第9条）—— 科研 Agent 评估的新标杆
7. **字节跳动 DeerFlow + 微软 Agent Framework**（论文第1-2条）—— 大厂在 Agent 框架层面的战略布局
8. **Noam Shazeer 跳槽**（第10条）—— 顶尖人才流动反映行业竞争格局变化
9. **蔚来 AI Agent 智驾部署**（第12条）—— Agent 在汽车行业的实际落地案例
10. **StaminaBench + ORAgentBench**（论文第7-8条）—— 编码 Agent 和运筹学 Agent 的新评估方法
