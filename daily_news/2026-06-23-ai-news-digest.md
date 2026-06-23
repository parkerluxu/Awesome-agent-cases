# AI 安全攻防战：Agent 漏洞自动化与“循环工程”新范式

日期：2026-06-23

**今日结论：** 今日 AI 领域呈现“攻防双线爆发”态势。在安全侧，OpenAI 发布 Daybreak 计划与 GPT-5.5-Cyber 模型，将 AI 安全能力从漏洞发现推进到自动修复；与此同时，五眼联盟发出 AI 网络攻击“数月内”降临的严厉警告，Agentjacking 攻击、恶意插件投毒等新型威胁集中曝光。在模型与范式侧，Sakana AI 推出多模型编排系统 Fugu，GLM-5.2 作为开源 Agent 模型引发硅谷热议，而 Claude Code 创造者提出的“循环工程”正被视为继提示工程后的下一范式。人才争夺战同样激烈，AlphaFold 诺奖得主 John Jumper 从 DeepMind 转投 Anthropic，谷歌股价应声大跌。

## 新闻与产业动态

1. **OpenAI 发布 Daybreak 安全计划与 GPT-5.5-Cyber 模型**
   - **来源网站：** openai.com
   - **原链接：** [Daybreak: Tools for securing every organization in the world](https://openai.com/index/daybreak-securing-the-world)
   - **摘要：** OpenAI 推出 Daybreak 安全工具集，包括 Codex Security 插件和 GPT-5.5-Cyber 模型，旨在帮助组织大规模发现、验证和修补漏洞。该模型在网络安全基准测试中声称超越 Anthropic 的 Mythos 模型。
   - **为什么重要：** 标志着 AI 安全从“发现漏洞”向“自动修补漏洞”的关键跃迁，GPT-5.5-Cyber 作为专用安全模型，可能重塑企业安全运营的自动化水平。
   - **值得继续跟踪：** GPT-5.5-Cyber 在真实攻防场景中的表现，以及 Codex Security 插件对开发者工作流的影响。

2. **OpenAI 启动“Patch the Planet”开源安全计划**
   - **来源网站：** oschina.net
   - **原链接：** [OpenAI 启动“修补地球”网络安全计划](https://www.oschina.net/news/465770/openai-patch-the-planet)
   - **摘要：** OpenAI 发布名为“Patch the Planet”的网络安全计划，帮助开源维护者利用 AI 和专家审查发现、验证和修复漏洞。该计划是 Daybreak 项目的最新扩展，名称致敬 1995 年电影《黑客》。
   - **为什么重要：** 开源生态是 AI 供应链的基石，该计划将 AI 安全能力直接注入开源维护流程，可能大幅降低关键开源项目的漏洞响应时间。
   - **值得继续跟踪：** 首批参与的开源项目名单，以及 AI 自动补丁在社区中的接受度。

3. **五眼联盟警告：前沿 AI 模型数月内将重塑网络攻击能力**
   - **来源网站：** the-decoder.com
   - **原链接：** [Five Eyes intelligence alliance says frontier AI models could reshape offensive cyber ops in months](https://the-decoder.com/five-eyes-intelligence-alliance-says-frontier-ai-models-could-reshape-offensive-cyber-ops-in-months/)
   - **摘要：** 五眼联盟情报机构联合发出警告，称能够摧毁政府和企业系统的 AI 模型仅数月之遥。这是五眼联盟罕见的联合情报简报，强调 AI 网络威胁已不再是遥远问题。
   - **为什么重要：** 国家级情报机构的联合警告具有极高权威性，表明 AI 安全威胁已从理论讨论进入实际应对阶段，可能推动全球 AI 安全监管加速。
   - **值得继续跟踪：** 各国政府可能出台的 AI 安全法规，以及防御性 AI 安全技术的投资动向。

4. **Agentjacking 攻击：超 100 个 AI 编码 Agent 被接管**
   - **来源网站：** CPO Magazine
   - **原链接：** [Over 100 AI Coding Agents Taken Over Via New "Agentjacking" Attack](https://news.google.com/rss/articles/CBMirAFBVV95cUxOVDNuNFoxSVlUTUZ3dlFDaHNnaDQ3dlI2dkJzbkxjVzFXUlk1YXBKS19kRzFFYXBSMVMzRmJRREk5enVJOC1iX2N1S284MXREVG1KRWZZZDFNdmdUX2ZBNjN5TGlJQkxEMjVSc2NaT3pILWhQODRqblM0NkFUdlVHYVI4OGtBTElDc2VfWWpwWFJqMERDRXVFSjNpQWdwM3l4bDRLSXNSakNBSFJw?oc=5)
   - **摘要：** 研究人员展示了一种名为“Agentjacking”的新型攻击，通过 Sentry DSN 注入成功接管了超过 100 个 AI 编码 Agent。攻击者可以利用 Agent 的权限执行恶意操作。
   - **为什么重要：** 这是首个大规模针对 AI Agent 的供应链攻击演示，暴露了 Agent 权限管理中的严重漏洞，对依赖 AI 编码 Agent 的开发团队构成直接威胁。
   - **值得继续跟踪：** Agent 平台（如 Claude Code、Codex）的防御响应，以及 Agent 权限最小化方案的发展。

5. **新手黑客用简单提示词通过 Claude Code 和 Codex 攻破 14 家公司**
   - **来源网站：** TechRadar
   - **原链接：** [A newbie hacker used "vague, low-skill prompts" in Claude and Codex to breach 14 companies](https://news.google.com/rss/articles/CBMi9wFBVV95cUxQN3dzMmhNd3Y5TzN6OGxsVEI0TEZnZTN2aFY1QkJ2NDZMZWhRZl9EWmI3TjN3RVE1WmlKRWxBd2VBRE9xVHg2VGdEdFJfZmhZTE9xdUxOT2Jid1NRQVQ2RkdlU19PcUJBSFVXVURtWE1fZ1RpVUxjNU93bWdiRjVtdElITDJPRkptcHVmcnQ0Z0k3NDNLMWRJWGV0UlNSN3NVejJoN0NBUldXQzQwOWZRY1RSWk93NkRDLXNQeUlhLTQwOUljR0oyejYtTXhmS2xHT1BNc1hpbHNoZ0hEY1VPLXVEczNUMlRuSGRPTmpsZDZnQjVoNm5r?oc=5)
   - **摘要：** 一名缺乏经验的黑客仅使用“模糊、低技能”的提示词，在 Claude Code 和 OpenAI Codex 中驱动 AI Agent 完成了对 14 家公司的渗透攻击。AI Agent 自动完成了所有技术工作。
   - **为什么重要：** 极大降低了网络攻击的技术门槛，证明 AI Agent 可被非技术人员武器化，对网络安全行业构成根本性挑战。
   - **值得继续跟踪：** AI 编码 Agent 的安全沙箱机制，以及如何防止 Agent 被用于恶意目的。

6. **Google 将 Interactions API 设为 Gemini 模型和 Agent 的默认接口**
   - **来源网站：** the-decoder.com
   - **原链接：** [Google makes Interactions API the default interface for Gemini models and agents](https://the-decoder.com/google-makes-interactions-api-the-default-interface-for-gemini-models-and-agents/)
   - **摘要：** Google DeepMind 将 Interactions API 设为 Gemini 模型和 Agent 的默认接口，取代旧的 generateContent API。新 API 使用简化架构和类型化步骤，未来所有新 Agent 功能将仅通过此 API 发布。
   - **为什么重要：** 这是 Google Agent 生态的关键架构升级，Interactions API 的设计更贴近 Agent 工作流，可能成为行业标准接口。
   - **值得继续跟踪：** 开发者迁移体验，以及 Interactions API 对 Agent 应用开发效率的实际提升。

7. **Sakana AI 发布 Fugu：多模型编排系统挑战闭源旗舰**
   - **来源网站：** oschina.net
   - **原链接：** [Sakana AI 发布 Fugu，以单一模型 API 的形式提供多 Agent 编排系统](https://www.oschina.net/news/464980/sakana-ai-fugu-release)
   - **摘要：** 日本 AI 公司 Sakana AI 发布 Fugu 系统，通过一个编排模型动态路由任务到多个前沿 LLM 池。Fugu Ultra 版本在多项基准测试中声称匹配或超越 Anthropic 的 Mythos 和 Fable 模型。
   - **为什么重要：** 代表“模型协作”路线的重要突破，通过组合现有模型而非训练更大模型来提升能力，同时降低对单一供应商的依赖。
   - **值得继续跟踪：** Fugu 在真实 Agent 任务中的表现，以及其开源策略对多模型编排生态的影响。

8. **GLM-5.2 开源模型引发硅谷热议，被视为 Agent 能力跃迁**
   - **来源网站：** Interconnects AI
   - **原链接：** [GLM-5.2 is the step change for open agents](https://news.google.com/rss/articles/CBMic0FVX3lxTFAxZFVHYUwyLU9kZ0JZMUhnYkw2M0xwNVRPX1ZSNWp1LTBCOUtZMU42M3B1SXJzVHQ0WEFHUnl6WHdoTEV6SFJ5U0FOTFl3Z0U2OHBUTXo0RWhwQ3JuTzhCR0RYQWUxa2RRZVF3UnQ5ZkVpXzg?oc=5)
   - **摘要：** 智谱 AI 的 GLM-5.2 开源模型在硅谷引发广泛讨论，多家媒体称其为“DeepSeek 2.0”。该模型在 Agent 任务、函数调用和长上下文检索方面表现突出，被视为开源 Agent 模型的重要里程碑。
   - **为什么重要：** 证明中国开源模型在 Agent 能力上已接近闭源旗舰水平，可能加速开源 Agent 生态的发展，降低 Agent 应用开发的门槛。
   - **值得继续跟踪：** GLM-5.2 在 SWE-bench 等 Agent 基准上的具体得分，以及社区基于该模型构建的 Agent 应用。

9. **“循环工程”兴起：Claude Code 创造者称其与 Agent 同等重要**
   - **来源网站：** oschina.net
   - **原链接：** [AI 编程圈最近在吹的“Loop Engineering（循环工程）”是什么？](https://www.oschina.net/news/466052)
   - **摘要：** Claude Code 创造者 Boris Cherny 提出“循环工程”概念，主张不再给 AI 写提示词，而是设计持续运行的 Agent 工作循环。他自 2025 年 11 月起已卸载 IDE，所有代码均由 Claude Code 在循环中自动生成。
   - **为什么重要：** 可能代表 AI 编程范式的又一次跃迁——从“单次提示”到“持续循环”，Agent 从辅助工具变为自主工作流的核心。
   - **值得继续跟踪：** 循环工程的最佳实践，以及主流 IDE 和 Agent 平台对该范式的支持。

10. **AWS 发布 Blocks：面向 AI Agent 的开源 TypeScript 后端框架**
    - **来源网站：** infoq.com
    - **原链接：** [AWS Launches Blocks, an Open-Source TypeScript Framework Designed for AI Agents to Build Backends](https://news.google.com/rss/articles/CBMickFVX3lxTE1jQ2hWOXJyM05Kc285MTFhUE0yeVJwOXVvNFM3YVZkZmlkN1Jpb0wxOTlJZkVfSjRDc2NTOVk4RHd5UWJQNm1BRm9VQXJablYya0NLcEJnLTYwTzg5UkM4TlhaTngxU01IeFBVQjV5SDFUZw?oc=5)
    - **摘要：** AWS 发布 Blocks，一个开源 TypeScript 框架，专为 AI Agent 构建后端而设计。同时 AWS 还推出了 Continuum 和 Context 两项新服务，分别聚焦 Agent 安全和企业上下文管理。
    - **为什么重要：** 云巨头正式入局 Agent 基础设施层，Blocks 框架可能成为 Agent 后端开发的标准选择，与 AWS 的云服务生态深度绑定。
    - **值得继续跟踪：** Blocks 与 LangChain、AutoGen 等现有框架的对比，以及 AWS 在 Agent 安全方面的后续动作。

11. **AlphaFold 诺奖得主 John Jumper 离开 DeepMind 加入 Anthropic**
    - **来源网站：** oschina.net
    - **原链接：** [诺奖得主 John Jumper 离开 DeepMind，转投 Anthropic](https://www.oschina.net/news/465028)
    - **摘要：** 2024 年诺贝尔化学奖得主、AlphaFold 核心开发者 John Jumper 宣布离开效力近 9 年的 Google DeepMind，加入 Anthropic。消息公布后，Alphabet 股价单日下跌超 6%，创近一年最大跌幅。
    - **为什么重要：** 这是 AI 人才争夺战的标志性事件，诺奖级科学家的流失对 Google 的 AI 领导地位构成重大打击，同时 Anthropic 在 AI 安全研究领域的吸引力得到验证。
    - **值得继续跟踪：** Jumper 在 Anthropic 的具体研究方向，以及 Google 的人才保留策略调整。

12. **23 个 ClawHub 插件冒充可信 AI Agent 工具实施攻击**
    - **来源网站：** CyberSecurityNews
    - **原链接：** [23 ClawHub Plugins Abuse Official Org Scopes to Impersonate Trusted AI Agent Tools](https://news.google.com/rss/articles/CBMigAFBVV95cUxQUDhuRXZFTXFQWTllRF9MZXNrNXBqY1pfaHhoTi1BcWRVLTFBSGpIUGNGTlBwVXFzdy10alZYVFZSUEZRNmJwcWtKN3lBZEpnZW5Yc1FCX1lONzczQjBJMzM3V0FfN3lINXZGTFJTZjdTakFRdEZYdHV0RE1Fa3BaQtIBhgFBVV95cUxOU2VTcUJIdTBCMWctdG5BZ0N6cmF1ZUVpVldOQnFSTGZhenB6eWtXX21UUEVBXzYxUEpCZnF3SWpJZGxIWVI1d2tlYkpYM0RtZG91RXZqT2otMFZsVG1NLVZBREJpNHRMSWVmUFdOSGpKRU5rSUJJcWJQZHF2SGhZcDdTQVc5QQ?oc=5)
    - **摘要：** 安全研究人员发现 23 个 ClawHub 恶意插件，通过滥用官方组织范围来冒充可信的 AI Agent 工具。这些插件可能窃取 API 密钥、劫持 Agent 会话。
    - **为什么重要：** Agent 插件市场正成为新的攻击面，恶意插件可绕过传统安全检测，对 Agent 供应链安全构成系统性风险。
    - **值得继续跟踪：** 主流 Agent 平台对插件市场的安全审核机制，以及插件签名和权限隔离方案的进展。

13. **13 词 Reddit 评论可投毒 ChatGPT 和 Gemini 搜索结果**
    - **来源网站：** CyberSecurityNews
    - **原链接：** [13-Word Reddit Comment Can Poison ChatGPT and Gemini AI Search Results](https://news.google.com/rss/articles/CBMiggFBVV95cUxNZDB2VzNGaV9hTUJHNEJkdi1qaGp3c1JJZDItMTRzZjZ5SnFnNFgwM3pjRUVBdDI4TW5mczNXeEJjVUFrNm9ZYk9vcWVWRGJhRGl2VXR1V2std09ZM3JPeXpGcDVGSFFVdGNiNGl6bFFXcjFKWVpHSWE2czBvLUdTNzJR0gGCAUFVX3lxTE1kMHZXM0ZpX2FNQkc0QmR2LWpoandzUklkMi0xNHNmNnlxZzRYMDN6Y0VFQXQyOE1uZnMzV3hCY1VBazZvWWJPb3FlVkRiYURpdlV0dVdrLXdPWTNyT3l6RnA1RkhRVXRjYjRpemxRV3IxSllaR0lhNnMwby1HUzcyUQ?oc=5)
    - **摘要：** 研究人员发现，仅需 13 个词的 Reddit 评论即可投毒 ChatGPT 和 Gemini 的 AI 搜索结果，将用户引导至诈骗网站。这种攻击利用了 AI 模型对用户生成内容的信任。
    - **为什么重要：** 揭示了 AI 搜索和深度研究功能的新攻击向量，内容投毒成本极低但影响范围巨大，对 AI 产品的信息可靠性构成严重威胁。
    - **值得继续跟踪：** AI 搜索平台的内容可信度评估机制，以及对抗性内容投毒的防御技术。

14. **Prime Intellect 发布 prime-rl 0.6.0：支持万亿参数 MoE 模型的 Agentic RL 训练**
    - **来源网站：** marktechpost.com
    - **原链接：** [Prime Intellect Releases prime-rl 0.6.0 to Train Trillion-Parameter MoE Models on Agentic RL Workloads](https://www.marktechpost.com/2026/06/23/prime-intellect-releases-prime-rl-0-6-0-to-train-trillion-parameter-moe-models-on-agentic-rl-workloads/)
    - **摘要：** Prime Intellect 发布开源框架 prime-rl 0.6.0，支持在万亿参数 Mixture-of-Experts 模型上进行异步强化学习训练。该框架已在 28 个 H200 节点上成功训练 GLM-5 处理 SWE 任务，步时间低于 5 分钟。
    - **为什么重要：** 为 Agent 强化学习训练提供了可扩展的开源基础设施，可能加速 Agent 专用模型的训练和迭代。
    - **值得继续跟踪：** 该框架在更大规模集群上的性能表现，以及社区对 Agentic RL 训练方法的应用。

15. **恶意 JetBrains 和 VS Code 扩展窃取 OpenAI、Anthropic 和 DeepSeek API 密钥**
    - **来源网站：** CyberSecurityNews
    - **原链接：** [Malicious JetBrains and VS Code Extensions Steal OpenAI, Anthropic, and DeepSeek API Keys](https://news.google.com/rss/articles/CBMilwFBVV95cUxOYThSZEhxaWpXaFFVNEcydjhFU2FwTUtRXzFpdzRpOXZrLVJSRkxyLURrMTJVQnBmOXVaN1dXSHVrektLbHVzN2lYZ2NvNnlkeHUteFdvQ3ZPdGRXai1IdzUyVEkwSmd1OWhXRHRrcnBMZ1NNbVFBNW1BLVRDMEZQT0JoUEg2UHpfM3pmUUtPdlUzTjB2ZGo40gGXAUFVX3lxTE5hOFJkSHFpaldoUVU0RzJ2OEVTYXBNS1FfMWl3NGk5dmstUlJGTHItRGsxMlVCcGY5dVo3V1dIdWt6S0tsdXM2aVhnY282eWR4dS14V29Ddk90ZFdqLUh3NTJUSTBKZ3U5aFdEdGtycExnU01tUUE1bUEtVEMwRlBPQmhQSDZQel8zemZRS092VTNOMHZkajg?oc=5)
    - **摘要：** 安全团队发现多款恶意 JetBrains 和 VS Code 扩展，专门窃取 OpenAI、Anthropic 和 DeepSeek 的 API 密钥。这些扩展伪装成合法工具，在开发者环境中潜伏。
    - **为什么重要：** 开发者环境是 AI 供应链的关键入口，API 密钥泄露可能导致企业 AI 服务被滥用、数据泄露或产生巨额费用。
    - **值得继续跟踪：** IDE 扩展市场的安全审核改进，以及 API 密钥管理的最佳实践。

## 论文与开源项目

1. **RigorBench：评估 AI 编码 Agent 的工程过程纪律**
   - **来源网站：** arXiv
   - **原链接：** [RigorBench: Benchmarking Engineering Process Discipline in Autonomous AI Coding Agents](https://arxiv.org/abs/2606.22678v1)
   - **摘要：** 现有基准仅评估 Agent 的最终输出正确性，忽略了过程纪律。RigorBench 是首个衡量 Agent 在规划、验证和错误恢复方面工程纪律的基准，发现许多 Agent 通过“鲁莽试错”达到正确结果但过程不可靠。
   - **为什么重要：** 为 Agent 评估提供了更全面的维度，推动 Agent 从“结果正确”向“过程可靠”进化，对生产环境部署至关重要。
   - **适合谁关注：** Agent 开发者、软件工程研究者、AI 安全工程师。

2. **PaperClaw：多 Agent 自主科研系统**
   - **来源网站：** arXiv
   - **原链接：** [PaperClaw: Harnessing Agents for Autonomous Research and Human-in-the-Loop Refinement](https://arxiv.org/abs/2606.22610v1)
   - **摘要：** PaperClaw 是一个多 Agent 系统，可自主完成从文献调研、构思、实验到论文撰写的完整科研流程。系统采用可停止的假设地图和迭代“提出-测试-反思”循环，支持人类在环中精炼。
   - **为什么重要：** 展示了 Agent 在科研自动化方面的前沿进展，其“可停止假设地图”设计为可控的自主科研提供了新思路。
   - **适合谁关注：** AI 科研 Agent 开发者、学术研究者、科研自动化工具用户。

3. **AgentLens：多轮编码 Agent 的可解释安全引导**
   - **来源网站：** arXiv
   - **原链接：** [AgentLens: Interpretable Safety Steering via Mechanistic Subspaces for Multi-Turn Coding Agent](https://arxiv.org/abs/2606.22673v1)
   - **摘要：** 现有 Agent 安全机制依赖外部护栏，无法进行细粒度行为控制。AgentLens 通过机制可解释性子空间，实现对多轮编码 Agent 执行过程中的安全风险进行实时监控和引导。
   - **为什么重要：** 将可解释性技术应用于 Agent 安全，提供了比外部护栏更精细的安全控制手段，对 Agent 安全部署有重要价值。
   - **适合谁关注：** AI 安全研究者、Agent 平台开发者、可解释性研究者。

4. **Lingering Authority：编码 Agent 的可撤销资源能力控制**
   - **来源网站：** arXiv
   - **原链接：** [Lingering Authority: Revocable Resource-and-Effect Capabilities for Coding Agents](https://arxiv.org/abs/2606.22504v1)
   - **摘要：** 编码 Agent 常获得超出当前子任务所需的广泛工具权限，称为“残留权限”。论文提出 PORTICO 参考监视器，通过可撤销的能力令牌和关闭谓词，实现 Agent 权限的细粒度生命周期管理。
   - **为什么重要：** 直接回应了 Agentjacking 等权限滥用攻击，为 Agent 权限最小化提供了系统化方案。
   - **适合谁关注：** Agent 安全工程师、系统安全研究者、Agent 框架开发者。

5. **Detecting Malicious Agent Skills in the Wild using Attention**
   - **来源网站：** arXiv
   - **原链接：** [Detecting Malicious Agent Skills in the Wild using Attention](https://arxiv.org/abs/2606.23416v1)
   - **摘要：** Agent 技能市场成为新的攻击面，恶意技能可窃取数据或劫持 Agent。论文提出基于注意力机制的检测方法，可在不依赖提示注入防御的情况下识别恶意技能。
   - **为什么重要：** 为 Agent 技能市场的安全提供了首个自动化检测方案，对 Agent 生态的健康发展至关重要。
   - **适合谁关注：** Agent 平台安全团队、供应链安全研究者、AI 安全从业者。

6. **Habituation at the Gate：人类对 AI Agent 代码的审查逐渐松懈**
   - **来源网站：** arXiv
   - **原链接：** [Habituation at the Gate: Rising Approval and Declining Scrutiny in Human Review of AI Agent Code](https://arxiv.org/abs/2606.22721v1)
   - **摘要：** 对 400 名重复审查者的纵向研究发现，随着时间推移，人类审查者对 AI Agent 生成代码的批准率从 30.1% 上升至 36.8%，表明审查者逐渐降低了对 AI 代码的警惕性。
   - **为什么重要：** 揭示了“AI 代码审查疲劳”现象，对开源项目采用 AI Agent 提交代码的质量控制有重要警示意义。
   - **适合谁关注：** 开源维护者、代码审查流程设计者、AI 代码质量研究者。

7. **omnigent-ai/omnigent：开源 AI Agent 元编排框架**
   - **来源网站：** GitHub
   - **原链接：** [omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)
   - **摘要：** Omnigent 是一个开源 AI Agent 框架和元编排系统，可统一编排 Claude Code、Codex、Cursor 等多种 Agent，支持策略执行、沙箱化和实时协作。获得 4512 星。
   - **为什么重要：** 解决了多 Agent 生态中的“碎片化”问题，提供统一的编排层，对构建复杂多 Agent 工作流有重要价值。
   - **适合谁关注：** 多 Agent 系统开发者、企业 Agent 平台架构师。

8. **openai/openai-agents-js：OpenAI 官方 JavaScript Agent 框架**
   - **来源网站：** GitHub
   - **原链接：** [openai/openai-agents-js](https://github.com/openai/openai-agents-js)
   - **摘要：** OpenAI 发布官方 JavaScript Agent 框架，支持多 Agent 工作流和语音 Agent，轻量级设计。获得 3272 星。
   - **为什么重要：** OpenAI 官方 Agent 框架的推出，可能成为 JavaScript 生态中 Agent 开发的标准选择，与 Python 版 SDK 形成互补。
   - **适合谁关注：** JavaScript/TypeScript 开发者、Web Agent 应用开发者。

9. **brycewang-stanford/Auto-Empirical-Research-Skills：23,000+ 社会科学 Agent 技能库**
   - **来源网站：** GitHub
   - **原链接：** [brycewang-stanford/Auto-Empirical-Research-Skills](https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills)
   - **摘要：** 斯坦福大学维护的精选 Agent 技能库，包含 23,000+ 个覆盖 8 大社会科学学科的实证研究技能。支持 20 分钟内完成可复现的规范实证论文。
   - **为什么重要：** 展示了 Agent 在社会科学研究中的规模化应用潜力，大幅降低了实证研究的门槛。
   - **适合谁关注：** 社会科学研究者、科研 Agent 开发者、学术自动化工具用户。

10. **harbor-framework/terminal-bench-science：科学工作流 Agent 评估基准**
    - **来源网站：** GitHub
    - **原链接：** [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
    - **摘要：** 一个评估 AI Agent 在终端中执行复杂真实科学工作流能力的基准，涵盖数据分析、模拟运行、结果可视化等任务。
    - **为什么重要：** 填补了科学 Agent 评估基准的空白，为衡量 Agent 在科研场景中的实际能力提供了标准化测试。
    - **适合谁关注：** 科研 Agent 开发者、计算科学研究者、AI 评估研究者。

## 今日优先阅读排序

1. **OpenAI Daybreak 计划与 GPT-5.5-Cyber**（安全自动化里程碑）
2. **五眼联盟 AI 网络攻击警告**（国家级安全态势）
3. **Agentjacking 攻击与新手黑客案例**（Agent 安全风险实证）
4. **Sakana AI Fugu 多模型编排系统**（模型协作新范式）
5. **GLM-5.2 开源模型热议**（开源 Agent 能力跃迁）
6. **循环工程概念兴起**（Agent 编程范式变革）
7. **John Jumper 跳槽 Anthropic**（人才争夺战标志事件）
8. **AWS Blocks 框架**（云巨头 Agent 基础设施布局）
9. **RigorBench 论文**（Agent 评估新维度）
10. **PaperClaw 自主科研系统**（科研 Agent 前沿进展）
