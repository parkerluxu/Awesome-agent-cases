# AI 日报：ChatGPT 转型“超级应用”，Coding Agent 安全与开源生态爆发

日期：2026-06-08

## 今日结论

今日 AI 领域呈现三大核心趋势：**ChatGPT 即将迎来史上最大改版**，从聊天机器人进化为集成编码工具与 AI Agent 的“超级应用”，标志着对话式 AI 向任务型 Agent 的范式转移；**Coding Agent 安全风险集中爆发**，微软披露 Claude Code 存在凭据泄露漏洞，同时斯坦福研究揭示多 Agent 协作存在根本性缺陷；**开源 Agent 生态持续繁荣**，月之暗面发布 Kimi Code CLI、阿里开源 CoPaw 桌面 Agent、字节跳动 Deer-Flow 等国产项目表现亮眼，Warp 终端开源后 15 小时获 3.5 万 Star。此外，华为云提出“Agentic Infra”新范式，微信与手机厂商合作 A2A 机制，AI Agent 正从概念走向产业落地。

---

## 新闻与产业动态

### 1. OpenAI 启动 ChatGPT 史上最大改版：从聊天机器人进化为“超级应用”
- **来源网站**：cnBeta.COM / The Decoder
- **原链接**：[OpenAI启动ChatGPT问世以来最大改版](https://www.cnbeta.com.tw/articles/tech/1564904.htm) / [OpenAI says "chat is dead"](https://the-decoder.com/openai-says-chat-is-dead-and-plans-to-rebuild-chatgpt-as-a-full-blown-agent-app/)
- **摘要**：据《金融时报》报道，OpenAI 计划在未来数周内推出改版后的 ChatGPT，将其打造成集成编码工具（Codex）和 AI Agent 的“超级应用”，并整合 Canva、Booking.com 等第三方应用。内部员工称“聊天已死”（Chat is dead），未来属于自主处理任务的 Agent。此举旨在强化企业客户竞争力，并在潜在 IPO 前接近盈利目标。
- **为什么重要**：这是 ChatGPT 自 2022 年发布以来最重大的产品战略转向，标志着 AI 产品从“对话式交互”向“任务自动化执行”的范式转移，将直接影响整个 AI 应用生态的竞争格局。
- **值得继续跟踪**：改版后的具体功能细节、定价策略、第三方生态接入情况，以及对企业级 AI 市场的影响。

### 2. 微软披露 Claude Code 漏洞：攻击者可窃取 GitHub 凭据
- **来源网站**：Decrypt / The Hacker News
- **原链接**：[Claude Code Vulnerability Could Let Attackers Steal Credentials From GitHub](https://news.google.com/rss/articles/CBMinAFBVV95cUxOTjdvUnZKWEtSZUlURlNPakxCYW9qRDl1a09fcWdBRXczdWtsZVFFR09oLUtWOTRWTDQzdUoyZjZxdGYzajAtck5rQ3BRcDhwT2w3SUVSc2VWWjNBdDI1U2tpUEhoZFlfOUlWWGwwdkxGVXBwWHlQXzcwNjNEWGdIOHlmZ1V5UWtLQXFkdk5qVDhsRExaNExhS1pQUUnSAaQBQVVfeXFMTVhmbmlNdzNVSVg0cHdzVk5McnpxUWNaTncwUVlfZDVNVEhCcXRmU0tYakwzUi1YalJmZXpQX0dXb1R3Y0I2Tm1hZXE4SWEzR3o0b25lRWdkLUJrWVBzdTRzZDJ6MWczbUJJY21yZERiX056RFlEUm4wWUM4M1NOdEpIajA0Wm1FME0xR3Z6dzZfLWxJZDh1RC11LWp6NzZyMTRMOEc) / [Miasma Worm Hits 73 Microsoft GitHub Repositories](https://news.google.com/rss/articles/CBMigAFBVV95cUxNbFdZOWxXR0YwLTVNR2ZUbkdXTzF0M0FzQnR4QWtCX0hhVFNVTTRmNlNmS3FLdThWRWJWZjlsbWdpWmdaSWVGZEtRemVYSHllZUZSWTV0NjVUN0c0eWNZUktRbC1MYUNJbS1mTDlEWjVONTVnNlVBUExETXlNTWJlbA)
- **摘要**：微软安全团队披露，Claude Code 在 GitHub Actions CI/CD 环境中存在凭据泄露漏洞，攻击者可利用该漏洞窃取敏感信息。与此同时，名为“Miasma Worm”的供应链攻击已入侵 73 个微软 GitHub 仓库，攻击者利用 AI 编码工具作为攻击向量。此外，有研究者发现了 50 种突破 Claude Code 安全防护的方法。
- **为什么重要**：Coding Agent 正在快速进入开发流程，但其安全风险尚未被充分认知。微软的披露和实际攻击案例表明，AI 编码工具可能成为供应链攻击的新入口，对企业和开源生态构成严重威胁。
- **值得继续跟踪**：Anthropic 的修复进展、CI/CD 安全最佳实践更新、类似漏洞在其他 Coding Agent（如 Codex、Cursor）中的存在情况。

### 3. 斯坦福研究：AI Coding Agent 无法有效协作
- **来源网站**：Seoul Economic Daily
- **原链接**：[Don't Mix Codex and Claude Code: AI Agents Fail at Teamwork, Stanford Finds](https://news.google.com/rss/articles/CBMiqAFBVV95cUxNbGNLbWZTekk4MGZqTF9MQTM0b3ozUnduRGpzSzE5QU1mb2dlY1hHRDdBdU1XOVM5b09hTXpYNlN3YmpFNVdpZ0lja0w5bWpfMzU5RDd1Y3JYcTFFVW41Sng4Wmd3c2xhS0xGcHlkRFZpZGZiNUx3S0VvNVA4bDcyV2xiLUVvbUdGckl2WlpuTlJraUhwNWwwbENRS1RJS1NHVldETFlRYVI)
- **摘要**：斯坦福大学研究发现，当混合使用不同 AI Coding Agent（如 Codex 和 Claude Code）进行团队协作时，它们无法有效协同工作，导致任务失败率显著上升。研究指出，当前 AI Agent 缺乏跨系统协作的标准化协议和共享上下文能力。
- **为什么重要**：随着企业开始部署多 Agent 系统，Agent 间的协作能力成为关键瓶颈。该研究揭示了当前 AI Agent 在“团队合作”方面的根本性缺陷，对多 Agent 编排架构的设计具有重要指导意义。
- **值得继续跟踪**：是否有新的 Agent 协作协议（如 A2A）能解决此问题、各厂商的改进方向。

### 4. Anthropic 被曝雇佣 1000 名人类工程师“培训”Claude Code
- **来源网站**：53AI
- **原链接**：[Anthropic 被曝雇1000名人类工程师“培训”Claude Code](https://news.google.com/rss/articles/CBMicEFVX3lxTE9xUEJMUnRXYTBJYnhETTJxYUkwM1VGYzFGUXdxNDhJdmt2WjlGQTNIOUFCRk10QnEzam55MDY3RzRSdlNyXzluX2xfSU9kWFdNN3Z4QVFCMnBqMVd5X1pGeGRiR25saHVmU3lNTk9DV3c)
- **摘要**：报道称 Anthropic 雇佣了约 1000 名人类软件工程师，以时薪 280 美元的价格对 Claude Code 进行培训和质量控制。这些工程师负责审查、修正和优化 Claude Code 生成的代码，确保其输出质量。Anthropic 高管 Boris Cherny 预测未来软件工程师数量将增长 100 倍。
- **为什么重要**：这一做法揭示了当前 AI Coding Agent 的局限性——即使是最先进的模型，仍然需要大量人类专家进行监督和纠错。AI 编程的“自动化”程度可能被高估，人类在 AI 开发流程中的角色需要重新定义。
- **值得继续跟踪**：这种“人机协作”模式是否会成为行业标准、成本效益分析、对软件工程师就业市场的影响。

### 5. 华为云发布“Agentic Infra”新范式，不拼 Token 单价
- **来源网站**：36氪
- **原链接**：[Token大战中，华为云选择了第三条路](https://36kr.com/p/3840016255126016?f=rss)
- **摘要**：在 2026 华为云 INSPIRE 创想者大会上，华为云 CEO 周跃峰提出“Agentic Infra”新范式，强调不追求 Token 总量和单价，而是关注国产算力系统生产 Token 的“健康度”和生产力提升。华为云发布十余款 AI 新品，全面布局 Agentic AI 时代，瞄准国产算力生态建设。
- **为什么重要**：在云厂商 Token 价格战白热化的背景下，华为云选择差异化路线，聚焦国产算力和 Agent 基础设施。这反映了中国 AI 云市场的竞争从“价格战”转向“生态战”，对国产 AI 芯片和 Agent 应用生态具有战略意义。
- **值得继续跟踪**：华为云 Agentic Infra 的具体技术架构、合作伙伴生态、与国产芯片（昇腾）的协同进展。

### 6. 微信 AI 对手机厂商打开 A2A 通道
- **来源网站**：36氪
- **原链接**：[微信AI对手机厂商打开一道窄门](https://36kr.com/p/3839575253993985?f=rss)
- **摘要**：腾讯宣布微信正在与华为、小米、荣耀、OPPO、vivo 等手机厂商合作推出 A2A（Agent-to-Agent）助手能力。与传统的 GUI Agent 读屏操作不同，微信采用 A2A 机制，让手机系统智能体（如小艺、小爱）通过加密协议直接与微信内部 Agent 通信，实现“双授权”安全机制。
- **为什么重要**：这是国内首个大规模 A2A 落地案例，标志着超级 App 与手机厂商在 Agent 层面的深度合作。相比 GUI Agent 的“模拟操作”方式，A2A 机制在安全性、效率和用户体验上具有明显优势，可能成为移动端 Agent 的标准交互范式。
- **值得继续跟踪**：A2A 协议的技术细节、其他超级 App（如支付宝、抖音）是否会跟进、对手机厂商 AI 助手生态的影响。

### 7. OpenAI 芯片核心工程师转投 Anthropic
- **来源网站**：量子位 / cnBeta.COM
- **原链接**：[OpenAI芯片核心叛逃Anthropic！就在量产前夜](https://www.qbitai.com/2026/06/431499.html) / [OpenAI芯片元老加入Anthropic](https://www.cnbeta.com.tw/articles/tech/1564878.htm)
- **摘要**：OpenAI 自研芯片项目的“002号员工”Clive Chan 宣布离开 OpenAI，正式加入 Anthropic。Clive Chan 是 OpenAI 硬件团队的第二位招聘员工，亲历了自研芯片项目从组建到推进的全过程，此前曾在特斯拉 Autopilot ASIC 团队工作。两家公司均在筹备 IPO，Anthropic 据称也在考虑自研 AI 芯片。
- **为什么重要**：芯片人才争夺战升级，Anthropic 通过挖角 OpenAI 核心芯片人才加速自研芯片布局。在 AI 算力需求爆发和 IPO 窗口期，芯片能力正成为 AI 公司的核心竞争力之一。
- **值得继续跟踪**：Anthropic 芯片计划的进展、OpenAI 芯片项目的量产时间表、两家公司 IPO 进程。

### 8. Perplexity 发布“Search as Code”架构
- **来源网站**：The Decoder
- **原链接**：[Perplexity's "Search as Code" lets AI models write their own search pipelines](https://the-decoder.com/perplexitys-search-as-code-lets-ai-models-write-their-own-search-pipelines-instead-of-calling-fixed-apis/)
- **摘要**：Perplexity 推出“Search as Code”架构，放弃传统的固定搜索 API，让 AI 模型在沙箱中用 Python 自行编写搜索流程，包括过滤、去重等操作。该架构在关键基准测试上超越 OpenAI 和 Anthropic，同时将 Token 成本降低高达 85%。
- **为什么重要**：这是搜索架构的一次根本性创新，将搜索逻辑从“固定 API 调用”转变为“模型自主编程”，大幅提升了搜索 Agent 的灵活性和效率。对 RAG 系统、科研 Agent 等依赖搜索能力的应用具有重要参考价值。
- **值得继续跟踪**：该架构的开源计划、对现有搜索 API 生态的冲击、实际应用效果。

### 9. 月之暗面发布 Kimi Code CLI 开源编码 Agent
- **来源网站**：MarkTechPost
- **原链接**：[Moonshot AI Releases Kimi Code CLI](https://www.marktechpost.com/2026/06/06/moonshot-ai-releases-kimi-code-cli-a-terminal-ai-coding-agent-built-in-typescript-for-next-gen-agents/)
- **摘要**：月之暗面（Moonshot AI）开源了 Kimi Code CLI，一个基于 TypeScript 构建的终端 AI 编码 Agent，支持子 Agent 和 MCP（Model Context Protocol）配置。该项目旨在为开发者提供下一代编码 Agent 工具。
- **为什么重要**：这是国内 AI 公司继 DeepSeek 之后在 Coding Agent 领域的又一重要开源贡献。Kimi Code CLI 采用 TypeScript 构建，与主流前端生态兼容，支持 MCP 协议，有望在开发者社区中快速普及。
- **值得继续跟踪**：项目在 GitHub 上的 Star 增长、社区贡献情况、与 Claude Code 和 Codex 的对比评测。

### 10. 阿里 CoPaw 桌面 Agent 工具正式开源
- **来源网站**：品玩
- **原链接**：[阿里CoPaw桌面Agent工具正式开源](https://news.google.com/rss/articles/CBMiSEFVX3lxTFBncVlSc1hKUDBPcC0xTFM4SDl6WVc2bFpSVVFlNjRFelVQNmI0VnpxeG9ZZnl3RENkSUtYU2lZcVZ5Rk14ZUtVbA)
- **摘要**：阿里巴巴正式开源了 CoPaw 桌面 Agent 工具，该工具能够帮助用户通过自然语言指令完成桌面操作任务，实现办公自动化。
- **为什么重要**：桌面 Agent 是 AI 办公自动化的重要方向，阿里开源 CoPaw 为开发者提供了可定制的基础框架，有助于推动国内桌面 Agent 生态发展。
- **值得继续跟踪**：CoPaw 的技术架构、与微软 Copilot 等竞品的对比、实际应用案例。

### 11. 字节跳动 Deer-Flow 开源长时程 SuperAgent 框架
- **来源网站**：GitHub
- **原链接**：[bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- **摘要**：字节跳动开源了 Deer-Flow，一个长时程 SuperAgent 框架，支持研究、编码和创作等复杂任务。通过沙箱、记忆、工具、技能、子 Agent 和消息网关等组件，可处理从几分钟到数小时的任务。该项目在 GitHub 上已获得 70,661 颗 Star。
- **为什么重要**：Deer-Flow 是目前 GitHub 上 Star 数最高的国产 Agent 框架之一，其长时程任务处理能力对科研 Agent、复杂工作流自动化等场景具有重要价值。高 Star 数反映了开发者社区对其技术路线的认可。
- **值得继续跟踪**：框架的更新频率、社区生态建设、与 LangChain 等主流框架的对比。

### 12. Warp 终端开源，15 小时获 3.5 万 Star
- **来源网站**：36氪
- **原链接**：[Altman 投的Agent 终端 Warp 开源了](https://36kr.com/p/3843764238174729?f=rss)
- **摘要**：由 Sam Altman 投资的 AI 终端 Warp 宣布开源，在 15 小时内 GitHub Star 数飙升至 3.5 万。Warp 是一款集成了 AI Agent 能力的现代化终端工具，支持智能命令补全、代码生成等功能。
- **为什么重要**：Warp 的开源标志着 AI 终端工具从商业产品向社区驱动的转变。其高 Star 数反映了开发者对 AI 增强终端工具的强烈需求，可能推动终端 Agent 生态的快速发展。
- **值得继续跟踪**：开源后的社区贡献情况、与 iTerm2 等传统终端的竞争、AI 功能的演进方向。

### 13. Anthropic 警告 AI 行业“没有刹车”，Claude Code 已编写 80% 自身代码库
- **来源网站**：OpenTools
- **原链接**：[Anthropic Warns AI Industry Has No Brake Pedal](https://news.google.com/rss/articles/CBMifEFVX3lxTE1HSnhzRDlIZEg1Ty1HR2tzd1l3OHBsWHZ0T041cldjZ0hObDQ2Z0FJcWRnM0NtZVk0aXVpZTZ5SjdDUGtNT2tXTHNhLTRldTdDOWNOOGx0bEVIQXdBTUMtaWVWUFZzVG5hbGR6RkMtQ1o0SkxVTVpOQWZhRDY)
- **摘要**：Anthropic 公开呼吁全球 AI 实验室放缓研发步伐，警告 AI 系统可能很快就能在无需人类干预的情况下自我改进，带来重大社会风险。同时披露内部数据显示，Claude Code 已编写了 Anthropic 自身 80% 的代码库。
- **为什么重要**：Anthropic 作为 AI 安全领域的领军企业，其“自我刹车”呼吁与自身产品高速发展形成鲜明对比。Claude Code 编写 80% 自身代码库的数据，既展示了 Coding Agent 的强大能力，也引发了关于 AI 自我改进风险的讨论。
- **值得继续跟踪**：全球 AI 实验室对放缓呼吁的响应、AI 自我改进能力的监管进展。

### 14. 美国企业重新为 DeepSeek 付费，登顶企业新增采购榜
- **来源网站**：cnBeta.COM / The Decoder
- **原链接**：[美国企业重新给DeepSeek打钱](https://www.cnbeta.com.tw/articles/tech/1564844.htm) / [Deepseek topped Ramp's trending software vendors](https://the-decoder.com/deepseek-topped-ramps-trending-software-vendors-in-june-2026-as-us-companies-chase-cheaper-ai/)
- **摘要**：企业支出管理平台 Ramp 发布的 6 月软件供应商榜单显示，DeepSeek 位居榜首，成为当月美国企业首次付费采购增长最猛的基础大模型厂商。与一年前的“尝鲜”不同，这次企业是直接向 DeepSeek 付费、传输和接收数据。Ramp 首席经济学家指出成本意识是主要驱动力，但也警告使用中国模型存在安全风险。
- **为什么重要**：DeepSeek 在美国企业市场的付费增长表明，中国 AI 模型在成本优势驱动下正在获得海外企业客户的认可。这对全球 AI 市场竞争格局具有重要影响，但也引发了数据安全和地缘政治方面的担忧。
- **值得继续跟踪**：DeepSeek 的企业客户增长数据、安全合规认证进展、美国监管机构的反应。

### 15. 微信 AI 对手机厂商打开 A2A 通道（补充报道）
- **来源网站**：36氪
- **原链接**：[微信AI对手机厂商打开一道窄门](https://36kr.com/p/3839575253993985?f=rss)
- **摘要**：腾讯宣布微信正在与华为、小米、荣耀、OPPO、vivo 等手机厂商合作推出 A2A（Agent-to-Agent）助手能力。与传统的 GUI Agent 读屏操作不同，微信采用 A2A 机制，让手机系统智能体（如小艺、小爱）通过加密协议直接与微信内部 Agent 通信，实现“双授权”安全机制。
- **为什么重要**：这是国内首个大规模 A2A 落地案例，标志着超级 App 与手机厂商在 Agent 层面的深度合作。相比 GUI Agent 的“模拟操作”方式，A2A 机制在安全性、效率和用户体验上具有明显优势，可能成为移动端 Agent 的标准交互范式。
- **值得继续跟踪**：A2A 协议的技术细节、其他超级 App（如支付宝、抖音）是否会跟进、对手机厂商 AI 助手生态的影响。

---

## 论文与开源项目

### 1. 字节跳动 Deer-Flow：长时程 SuperAgent 框架
- **来源网站**：GitHub
- **原链接**：[bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- **摘要**：字节跳动开源的长时程 SuperAgent 框架，支持研究、编码和创作等复杂任务。通过沙箱、记忆、工具、技能、子 Agent 和消息网关等组件，可处理从几分钟到数小时的任务。GitHub Star 数达 70,661。
- **为什么重要**：这是目前 GitHub 上最受关注的国产 Agent 框架之一，其长时程任务处理能力对科研 Agent、复杂工作流自动化等场景具有重要价值。高 Star 数反映了开发者社区对其技术路线的认可。
- **值得继续跟踪**：框架的更新频率、社区生态建设、与 LangChain 等主流框架的对比。

### 2. scientific-agent-skills：将任意 AI Agent 变为 AI 科学家
- **来源网站**：GitHub
- **原链接**：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- **摘要**：一个将任意 AI Agent 转变为“AI 科学家”的技能库，提供 140 个即用型技能和 100+ 科学数据库，覆盖生物学、化学、医学和药物发现。兼容 Cursor、Claude Code、Codex 等主流 Agent 平台。已有 16 万+ 科学家使用，GitHub Star 数 27,489。
- **为什么重要**：这是目前最大的科研 Agent 技能库，解决了科研 Agent 领域“有框架无技能”的痛点。其标准化接口设计使得不同 Agent 平台可以共享科研能力，对加速 AI 在科学研究中的应用具有重要推动作用。
- **值得继续跟踪**：技能库的更新频率、新增学科领域、与学术出版机构的合作。

### 3. IBM AssetOpsBench：工业 4.0 多 Agent 基准测试框架
- **来源网站**：GitHub
- **原链接**：[IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench)
- **摘要**：IBM 开源的工业 4.0 资产运维 Agent 基准测试框架，包含 460+ 场景、4 个专业 Agent（IoT、FMSR、TSFM、工单）和多 Agent 编排蓝图（MetaAgent、AgentHive），基于 MCP 协议。GitHub Star 数 1,725。
- **为什么重要**：这是首个面向工业 4.0 场景的 Agent 基准测试框架，填补了工业领域 Agent 评估标准的空白。对制造业、能源等行业的 AI 自动化应用具有重要参考价值。
- **值得继续跟踪**：框架的扩展性、工业企业的实际应用案例、与现有工业自动化系统的集成。

### 4. PDEAgentBench：科学 PDE 求解器优化 Agent 基准
- **来源网站**：GitHub
- **原链接**：[YusanX/pde-agent-bench](https://github.com/YusanX/pde-agent-bench)
- **摘要**：一个用于评估 Code Agent 优化科学 PDE（偏微分方程）求解器能力的自动化基准框架。GitHub Star 数 94。
- **为什么重要**：PDE 求解是科学计算的核心任务之一，该基准为评估 AI Agent 在科学计算领域的代码优化能力提供了标准化测试平台。对计算物理、工程仿真等领域的 AI 应用具有指导意义。
- **值得继续跟踪**：基准测试结果、Agent 在 PDE 优化上的表现提升、与现有科学计算工具的集成。

### 5. LibreChat：增强版 ChatGPT 克隆，支持多 Agent 和 MCP
- **来源网站**：GitHub
- **原链接**：[danny-avila/LibreChat](https://github.com/danny-avila/LibreChat)
- **摘要**：一个功能丰富的开源 ChatGPT 克隆，支持 Agents、MCP、Skills、DeepSeek、Anthropic、AWS、OpenAI 等多种模型和平台。具备代码解释器、DALL-E-3、OpenAPI Actions、多用户认证等功能。GitHub Star 数 38,571。
- **为什么重要**：作为最受欢迎的 ChatGPT 开源替代品之一，LibreChat 的 Agent 和 MCP 支持使其成为开发者构建自定义 AI 助手的重要基础。其多模型支持特性对 Agent 生态的互操作性具有示范意义。
- **值得继续跟踪**：新功能更新、社区插件生态、企业级部署方案。

### 6. oh-my-pi：轻量级终端 AI 编码 Agent
- **来源网站**：GitHub
- **原链接**：[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)
- **摘要**：一个基于 TypeScript 构建的终端 AI 编码 Agent，支持哈希锚定编辑、优化工具集、LSP、Python、浏览器、子 Agent 等功能。GitHub Star 数 11,090。
- **为什么重要**：作为 Claude Code 和 OpenCode 的轻量级替代品，oh-my-pi 在保持核心功能的同时提供了更好的灵活性和可扩展性。其哈希锚定编辑机制在代码修改安全性方面具有创新性。
- **值得继续跟踪**：与 Claude Code 的性能对比、插件生态发展、社区采用情况。

### 7. claude-code-plugins-plus-skills：Claude Code 最大插件市场
- **来源网站**：GitHub
- **原链接**：[jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills)
- **摘要**：包含 425 个插件、2,810 个技能和 200 个 Agent 的 Claude Code 插件集合，通过 ccpi CLI 包管理器管理。配套网站 tonsofskills.com 提供在线浏览和安装。GitHub Star 数 2,329。
- **为什么重要**：这是目前最大的 Claude Code 插件生态，极大地扩展了 Claude Code 的能力边界。其包管理器设计为 Agent 插件的标准化分发提供了参考模式。
- **值得继续跟踪**：插件质量审核机制、热门插件排行、对 Claude Code 生态的影响。

### 8. clawmetry：12 种 AI Agent 运行时的实时可观测性工具
- **来源网站**：GitHub
- **原链接**：[vivekchand/clawmetry](https://github.com/vivekchand/clawmetry)
- **摘要**：一个支持 12 种 AI Agent 运行时（包括 OpenClaw、NVIDIA NemoClaw、Claude Code、Codex 等）的实时可观测性工具，让开发者能够“看到 Agent 的思考过程”。GitHub Star 数 368。
- **为什么重要**：Agent 的“黑箱”问题一直是开发和调试的痛点，clawmetry 提供了跨 Agent 运行时的统一可观测性方案，对 Agent 开发、调试和安全审计具有重要价值。
- **值得继续跟踪**：支持的 Agent 类型扩展、与现有监控系统的集成、企业级部署方案。

### 9. open-mercato：AI 原生工程基础框架
- **来源网站**：GitHub
- **原链接**：[open-mercato/open-mercato](https://github.com/open-mercato/open-mercato)
- **摘要**：一个由 AI 设计、为 AI 服务的工程基础框架，预置了数百个架构和领域决策（多租户、RBAC、事件流、定价、销售管道、CRM/ERP 流程），让 Agent（Cursor、Claude Code、Codex）无需重新发明轮子即可做出架构决策。GitHub Star 数 1,372。
- **为什么重要**：该框架解决了 AI Agent 在软件开发中“重复造轮子”的问题，通过预置架构决策模板，大幅提升了 Agent 开发企业级应用的生产力。对 Agent 驱动的软件开发范式具有重要参考价值。
- **值得继续跟踪**：框架的行业采用情况、与现有开发流程的集成、社区贡献。

### 10. Harness-1：20B 参数检索子 Agent
- **来源网站**：MarkTechPost
- **原链接**：[Meet Harness-1: A 20B Retrieval Subagent](https://www.marktechpost.com/2026/06/06/meet-harness-1-a-20b-retrieval-subagent-trained-with-reinforcement-learning-inside-a-stateful-search-harness-on-gpt-oss-20b/)
- **摘要**：UIUC 和 Chroma 联合发布的 Harness-1 是一个 20B 参数的检索子 Agent，通过强化学习在有状态搜索框架中训练。该框架维护候选池、重要性标记集、证据图、验证记录等状态信息，Agent 策略决定搜索、筛选、验证和停止的时机。在 8 个基准测试上达到 0.730 平均召回率，领先其他开源子 Agent 11.4 分，仅次于 Opus-4.6。权重和代码已开源。
- **为什么重要**：Harness-1 展示了将强化学习应用于检索 Agent 训练的有效性，其有状态搜索框架设计为 RAG 系统的优化提供了新思路。对科研 Agent、知识密集型任务具有重要参考价值。
- **值得继续跟踪**：模型在更多场景下的表现、与主流 RAG 系统的集成、社区复现和改进。

---

## 今日优先阅读排序

1. **OpenAI 启动 ChatGPT 史上最大改版**——行业范式转移的标志性事件
2. **微软披露 Claude Code 漏洞**——Coding Agent 安全风险警示
3. **斯坦福研究：AI Coding Agent 无法有效协作**——多 Agent 系统的根本性挑战
4. **华为云发布“Agentic Infra”新范式**——国产算力 Agent 生态战略
5. **微信 AI 对手机厂商打开 A2A 通道**——移动端 Agent 交互范式创新
6. **Anthropic 被曝雇佣 1000 名人类工程师培训 Claude Code**——AI 编程自动化的现实边界
7. **字节跳动 Deer-Flow 开源**——国产长时程 Agent 框架标杆
8. **Perplexity 发布“Search as Code”架构**——搜索 Agent 架构创新
9. **OpenAI 芯片核心工程师转投 Anthropic**——AI 芯片人才争夺战升级
10. **scientific-agent-skills 开源**——科研 Agent 生态里程碑
