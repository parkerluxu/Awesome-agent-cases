# AI 日报：阿里禁用Claude Code、Anthropic推科研Agent与Agent安全风险爆发

日期：2026-07-05

## 今日结论

今日AI领域呈现三大核心主题：**Agent安全风险集中爆发**，阿里巴巴因后门风险全面禁用Claude Code并转向自研工具，同时黑客利用SEO投毒和隐藏HTML攻击AI Agent，JadePuffer勒索软件首次由AI Agent近乎独立完成攻击；**科研Agent加速落地**，Anthropic推出Claude Science多智能体工作台并启动自有药物研发项目，NVIDIA发布HORIZON实现RTL基准100%完成率；**Agent能效与监管问题凸显**，KAIST研究首次量化Agent能耗可达ChatGPT的136倍，中国AI人格化法规生效在即，豆包和千问将于7月15日下线智能体功能。此外，上海AI Lab开源35B参数Agents-A1模型，Mistral发布开源Lean 4代码Agent模型Leanstral 1.5，Warp终端开源后15小时获3.5万Star。

## 新闻与产业动态

1. **阿里内部全面禁用Claude Code，因存在植入后门风险**
   - **来源网站**：36氪
   - **原链接**：[9点1氪｜阿里内部全面禁用Claude Code；FF洛杉矶总部人去楼空？公司回应：不实；微软砸25亿美元组建6000人AI新公司](https://36kr.com/p/3880629882679301?f=rss)
   - **摘要**：36氪从阿里内部人士处获悉，因近期Claude Code被曝存在植入后门的安全风险，阿里经综合评估后已将其列入高风险软件名单。自7月10日起，阿里将全面禁止内部员工在办公环境下使用Claude Code，并推荐使用自研的Qoder作为替代方案。这一禁令覆盖阿里所有业务线，涉及数万名工程师。阿里方面表示，此举是为了保护公司核心代码资产和客户数据安全，防止通过第三方编码工具泄露敏感信息。多家外媒如TechCrunch、南华早报、财新等也对此进行了报道，确认阿里已将Claude Code列为高风险软件。
   - **为什么重要**：这是中国科技巨头首次因安全原因全面禁用主流AI编码工具，标志着企业对AI Agent工具供应链安全的警惕性大幅提升。Claude Code作为Anthropic推出的编码Agent，在全球开发者中拥有广泛用户基础，阿里的禁令可能引发其他中国企业的效仿，对AI编码Agent市场格局产生深远影响。
   - **值得继续跟踪**：需关注其他中国科技公司（如腾讯、字节跳动）是否会跟进类似禁令，以及Anthropic对此事件的官方回应和后续安全改进措施。同时，阿里自研的Qoder能否在功能和安全上完全替代Claude Code也值得观察。

2. **Anthropic推出Claude Science Beta：面向基因组学、蛋白质组学和化学信息学的多智能体AI工作台**
   - **来源网站**：marktechpost.com
   - **原链接**：[Anthropic Launches Claude Science Beta: A Multi-Agent AI Workbench for Reproducible Genomics, Proteomics, and Cheminformatics Pipelines](https://www.marktechpost.com/2026/07/04/anthropic-launches-claude-science-beta/)
   - **摘要**：Anthropic于6月30日发布Claude Science Beta版，这是一个面向科学家的多智能体AI工作台。该平台运行在现有Claude模型之上，核心架构包括一个协调Agent将任务分配给领域专家Agent，一个审查Agent负责标记和纠正引用及数字错误，每个图表都附带精确代码、环境和完整消息历史以确保可重复性。平台支持跨本地机器、SSH上的HPC和Modal进行计算管理，连接60多个数据库和NVIDIA BioNeMo技能。Anthropic表示该平台旨在将分散的科研工具和数据集整合到同一环境中，有望显著加速科学发现和医疗干预的研发进程。
   - **为什么重要**：这是Anthropic首次推出面向科研领域的专用多智能体平台，标志着AI Agent从通用编码向专业科学研究的深度拓展。Claude Science的可重复性设计理念（每个结果附带完整代码和环境）解决了科研领域长期存在的可复现性危机，可能重塑生物医药研发的工作流程。
   - **值得继续跟踪**：需关注Claude Science在真实科研团队中的使用效果和反馈，特别是其在基因组学、蛋白质组学等领域的实际产出质量。同时，Anthropic宣布启动自有药物研发项目，从工具提供商向制药企业转型的战略动向值得持续跟踪。

3. **NVIDIA HORIZON：实现100% RTL基准完成率的免手动Agent框架**
   - **来源网站**：marktechpost.com
   - **原链接**：[NVIDIA HORIZON: A Hands-Free Agent that Evolves Git Worktrees and Hits 100% RTL Benchmark Completion](https://www.marktechpost.com/2026/07/04/nvidia-horizon-a-hands-free-agent-that-evolves-git-worktrees-and-hits-100-rtl-benchmark-completion/)
   - **摘要**：NVIDIA发布HORIZON，一个免手动操作的Agent框架，将每个RTL（寄存器传输级）问题作为版本化仓库进行托管，在多个基准测试中实现了100%的完成率。该框架通过Git工作树（worktrees）管理不同版本的RTL设计，使Agent能够自主迭代和优化硬件描述代码。HORIZON代表了AI Agent在芯片设计自动化领域的重大突破，将传统需要数天甚至数周的人工RTL设计工作压缩到Agent自主完成。
   - **为什么重要**：RTL设计是芯片设计流程中最核心、最复杂的环节之一，NVIDIA HORIZON实现100%基准完成率意味着AI Agent在硬件设计自动化（EDA）领域迈出了关键一步。这对于缓解全球芯片设计人才短缺、加速芯片研发周期具有重大意义。
   - **值得继续跟踪**：需关注HORIZON在实际工业级芯片设计项目中的表现，以及其开源或商业化计划。同时，其他EDA厂商和芯片公司是否会跟进类似Agent方案也值得观察。

4. **Qwen前技术负责人谈混合思考模式的不足，转向支持Agent**
   - **来源网站**：marktechpost.com
   - **原链接**：[Qwen’s Former Lead on What Hybrid Thinking Got Wrong — and Why He Now Backs Agents](https://www.marktechpost.com/2026/07/04/qwens-former-lead-on-what-hybrid-thinking-got-wrong-and-why-he-now-backs-agents/)
   - **摘要**：阿里巴巴Qwen系列的前技术负责人林俊阳在一次题为“走向通用模型/Agent”的演讲和后续文章中，深入剖析了Qwen3的混合思考模式（Hybrid Thinking）和动态思考预算（Dynamic Thinking Budgets）的局限性。他指出，模型融合（Merge）方案在混合思考模式中表现不佳，并强调行业正从推理思考（Reasoning Thinking）转向Agent思考（Agentic Thinking）。他认为Agent强化学习基础设施的建设比传统模型训练更具挑战性，同时警告奖励黑客（Reward Hacking）问题在Agent场景中更为严重。
   - **为什么重要**：作为中国最成功开源大模型系列的前技术负责人，林俊阳的观点反映了AI行业从“模型能力竞赛”向“Agent能力竞赛”的战略转向。他指出的混合思考模式失败原因和Agent RL基础设施的挑战，为整个行业提供了宝贵的经验教训。
   - **值得继续跟踪**：需关注Qwen后续版本是否会采纳林俊阳的建议，以及阿里巴巴在Agent基础设施方面的投入和进展。同时，其他模型厂商在混合思考和Agent思考之间的平衡策略也值得跟踪。

5. **英国AI安全研究院发现标准基准测试系统性低估AI Agent实际能力**
   - **来源网站**：the-decoder.com
   - **原链接**：[UK's AI Security Institute finds standard benchmarks systematically underestimate what AI agents can actually do](https://news.google.com/rss/articles/CBMi0gFBVV95cUxPT1ZDODFvd29hcEE1RkU2aTRxVVJlc2pGZmh3cG1rMFJtMDd4bXEwaHk4U0dUU1lmcFdkN1VDQ01PdEs3MW5LdUpFQVhzSGJ2bDZfUm5rMGpOYjFXTWk2Qlo4Q1E1WWNHb1JHZFlsa3lIZUt3a2FfcFBLTEl1ampOZEE4RndLal93WFhRaXQxVlNiNXdsUmc5d09PWU1IdVB5OTdXSE1XRXM5NERIcC03NlIzd2N1ZEhJbHE5dlBweUNRcHdPMUFzNzR5eHUtdUdnVVE?oc=5)
   - **摘要**：英国AI安全研究院（UK AISI）发布研究报告指出，当前标准AI基准测试系统性地低估了AI Agent的实际能力。研究发现，传统基准测试通常采用静态、封闭的评估环境，无法捕捉Agent在动态、交互式场景中的真实表现。当Agent被置于更接近真实世界的测试环境中时，其完成任务的能力显著高于基准测试所显示的水平。这一发现对AI安全评估具有重要影响，因为基于低估能力的风险评估可能导致安全措施不足。
   - **为什么重要**：该研究直接挑战了当前AI安全评估的方法论基础。如果标准基准测试确实系统性低估Agent能力，那么基于这些测试的安全评估和监管决策可能存在严重缺陷。这对于各国正在制定的AI监管政策具有重要参考价值。
   - **值得继续跟踪**：需关注UK AISI是否会发布新的Agent评估方法论，以及该发现是否会影响英国及其他国家的AI安全监管框架。同时，其他AI安全研究机构是否会进行类似验证也值得跟踪。

6. **AI搜索Agent失败原因：不是搜索能力不足，而是无法在模糊查询时提出正确问题**
   - **来源网站**：the-decoder.com
   - **原链接**：[AI search agents don't fail at searching, they fail at asking the right questions when queries get ambiguous](https://the-decoder.com/ai-search-agents-dont-fail-at-searching-they-fail-at-asking-the-right-questions-when-queries-get-ambiguous/)
   - **摘要**：一项新研究揭示了AI搜索Agent在多步研究中的真正瓶颈：它们很少因为搜索能力不足而失败，真正的问题在于当用户查询模糊时，Agent不会主动向用户请求澄清。新基准测试DiscoBench显示，那些反复搜索而不主动提问的模型表现更差，准确率仅为51.9%，甚至低于直接猜测的模型。即使表现最好的模型，整体准确率也仅为43%。但当查询中的模糊性被消除后，准确率跃升了高达40个百分点。这表明AI搜索Agent需要改进的不是搜索算法，而是主动沟通和澄清意图的能力。
   - **为什么重要**：该研究精准定位了AI搜索Agent的核心缺陷——缺乏主动澄清意图的能力。这对于所有依赖Agent进行信息检索的产品（如企业知识库、科研文献搜索、法律检索等）都具有重要指导意义，提示开发者应优先改进Agent的交互式澄清机制而非搜索算法本身。
   - **值得继续跟踪**：需关注主流AI搜索产品（如Perplexity、Google AI Overviews等）是否会根据这一发现改进其Agent的交互设计。同时，DiscoBench是否会成为评估Agent交互能力的新标准也值得观察。

7. **黑客利用SEO投毒和隐藏HTML欺骗AI Agent执行恶意指令**
   - **来源网站**：CyberSecurityNews
   - **原链接**：[Hackers Abuse SEO Poisoning and Hidden HTML to Trick AI Agents Into Following Malicious Instructions](https://news.google.com/rss/articles/CBMif0FVX3lxTE0zRG9rdEFlVFpWQ3dtTWhLaFcyYTJGWUJBT296VEtpNmE2QjA1Q1NVcWV3R0licklkZkxRV0NwejZsWVBnNEl2S1lPRFh4TzJ2RHJlTjhtM2YwMlJZSzM2aGlGbXF0X2N3UEI3Q1RYSW1UTGE0dzJLWXRPdXJHZDTSAYQBQVVfeXFMTXVXWnZySE54dnp5bTdiT0VQLVVYbDM0MllXZnJRMFNuTkFOcElLWkNwb19zZWNpMmNOVzNqS2gyMnh5RGNKUG9vZnU5WTBQUjlVYjNFT0kwb3JpMWdEWGJuc05GZU8xT0lWUFdETkJaSUpLV3ZrSGRlNGtPQVlkY3N2eUZS?oc=5)
   - **摘要**：安全研究人员发现黑客正在利用SEO投毒和隐藏HTML技术来欺骗AI Agent执行恶意指令。攻击者通过操纵搜索引擎排名，使包含隐藏恶意指令的网页出现在搜索结果前列。当AI Agent在自主浏览网页时，这些隐藏的HTML内容（如不可见文本、零宽度字符、CSS隐藏元素等）会被Agent解析并执行，导致Agent按照攻击者的意图进行操作。这种攻击方式特别针对那些具有自主浏览和执行能力的AI Agent，如编码Agent、研究Agent和自动化浏览器Agent。
   - **为什么重要**：这是首次系统性地揭示针对AI Agent的SEO投毒攻击技术，标志着AI Agent安全威胁从直接提示注入向更隐蔽的供应链攻击演进。随着越来越多的Agent具备自主浏览网页的能力，这种攻击方式的危害性将急剧放大。
   - **值得继续跟踪**：需关注主流AI Agent框架是否会增加对隐藏HTML内容的过滤机制，以及搜索引擎是否会采取措施防止恶意网页被Agent抓取。同时，企业部署Agent时的安全策略是否需要更新也值得跟踪。

8. **上海AI Lab开源Agents-A1：35B参数Agent超越万亿参数模型**
   - **来源网站**：blog.csdn.net
   - **原链接**：[35B Agent超越万亿参数模型？上海AI Lab开源Agents-A1：scaling the Horizon](https://news.google.com/rss/articles/CBMibkFVX3lxTE9CTHh6OW5MMElxZ1M5eXpOZ1RCel81aEZ2MDhkV1pGZVp2b0IyUnJXZ2dILUF1VjQyQ2hYaUk3TVhoa2tEU3FmVE1MdWh0cU9wT1BsTlFFQ29HbkZycVFMWWc5RVI0MjJhc3ZlXy1n?oc=5)
   - **摘要**：上海人工智能实验室开源了Agents-A1模型，该模型仅有35B参数，但在Agent任务上的表现超越了万亿参数级别的前沿模型。Agents-A1专注于Agent能力而非纯粹的模型参数规模，通过优化Agent推理、工具使用和多步规划能力，在多个Agent基准测试中取得了领先成绩。该模型的开源意味着开发者可以基于35B参数的轻量级模型获得接近甚至超越万亿参数模型的Agent性能，大幅降低了部署成本。
   - **为什么重要**：Agents-A1证明了“Agent能力”比“模型参数规模”更重要，为AI行业从“参数竞赛”转向“能力竞赛”提供了有力证据。35B参数即可达到万亿参数模型的Agent性能，意味着中小企业和研究机构也能部署高性能Agent系统，有望加速Agent技术的普及。
   - **值得继续跟踪**：需关注Agents-A1在真实应用场景中的表现，以及其开源社区的发展情况。同时，其他模型厂商是否会调整策略，从追求更大参数转向优化Agent能力也值得观察。

9. **阿里巴巴SkillWeaver声称在基准测试中减少99%的AI Agent Token消耗**
   - **来源网站**：WinBuzzer
   - **原链接**：[Alibaba SkillWeaver Claims 99% AI Agent Token Cut in New Benchmark](https://news.google.com/rss/articles/CBMioAFBVV95cUxPY0otVnRHcndMVTdXdXRidXg0WjJuUVZGQUpxajZQbW54cmJZQXRZRktyZjVrWnVTamtNdk0yYWJsMHdLdk1XWk5oSHU1Um1xRzJYRmh5VFZKYjBvYl9RWk40aVZmQTdiVldsVVV5eUJSUlpnaUxwUkwydms3ZVpyUkFvU3VtekZzbEdaTXptUW1rbnIxelpralhoSEtXdGVf?oc=5)
   - **摘要**：阿里巴巴发布SkillWeaver技术，声称在基准测试中实现了高达99%的AI Agent Token消耗削减。SkillWeaver通过让Agent学习和复用已掌握的技能（Skills），避免每次执行任务时都从头开始推理和生成，从而大幅减少Token使用量。该技术使Agent能够将复杂任务分解为可复用的技能模块，并在不同任务间共享这些模块，显著降低了计算成本和响应延迟。
   - **为什么重要**：Token消耗是AI Agent运营成本的主要组成部分，99%的削减意味着Agent的使用成本可能降低两个数量级。这对于推动Agent的大规模商业化部署至关重要，特别是对于需要频繁调用Agent的企业级应用场景。
   - **值得继续跟踪**：需关注SkillWeaver是否会被集成到阿里巴巴的云服务或Qwen系列模型中，以及其在不同类型Agent任务上的实际效果。同时，其他AI公司是否会开发类似的Token优化技术也值得跟踪。

10. **Mistral AI发布开源Leanstral 1.5：Apache-2.0许可的Lean 4代码Agent模型**
    - **来源网站**：marktechpost.com
    - **原链接**：[Mistral AI Releases Leanstral 1.5: An Apache-2.0 Lean 4 Code Agent Model Solving 587 of 672 PutnamBench Problems](https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/)
    - **摘要**：Mistral AI发布了Leanstral 1.5，一个基于Apache-2.0开源许可的Lean 4代码Agent模型。该模型采用119B参数的混合专家（MoE）架构，每个Token仅激活6.5B参数，在miniF2F基准测试上达到饱和表现，并解决了672个PutnamBench问题中的587个。除了数学证明能力外，Leanstral 1.5在扫描57个开源代码仓库时发现了5个之前未知的软件缺陷。该模型可用于形式化验证、数学定理证明和代码正确性检查等场景。
    - **为什么重要**：Leanstral 1.5是首个开源且达到实用水平的Lean 4代码Agent模型，其Apache-2.0许可允许商业使用。形式化验证是确保关键软件系统（如航天、医疗、金融）正确性的重要手段，该模型有望大幅降低形式化验证的门槛和成本。
    - **值得继续跟踪**：需关注Leanstral 1.5在工业级软件验证项目中的实际效果，以及Mistral是否会继续推出更大规模的版本。同时，该模型对Lean 4社区生态的影响也值得观察。

11. **KAIST研究首次量化：AI Agent能耗可达ChatGPT的136.5倍**
    - **来源网站**：EurekAlert!
    - **原链接**：[KAIST identifies the “hidden energy cost” of AI agents for the first time](https://news.google.com/rss/articles/CBMiXEFVX3lxTE1oNWhqY3JHcjhzWWUtZk9ENjg5TUdYY1phRTU5TU1pTkVSd0pUT216VzJSQW51Y19ZdGlNZzZyR1dJYS00eFp6djhUSk5RSHRaeG9CcVRfRWlJZjk3?oc=5)
    - **摘要**：韩国科学技术院（KAIST）发布全球首项量化AI Agent能耗的研究，发现AI Agent每次查询的能耗可达ChatGPT等传统聊天机器人的136.5倍。研究指出，Agent在执行多步推理、工具调用、环境交互等复杂任务时，需要多次调用底层模型，导致能耗呈指数级增长。这一发现对数据中心规划和AI可持续发展具有重要警示意义，特别是在全球AI算力需求激增的背景下。
    - **为什么重要**：这是首次对AI Agent的能耗进行系统性量化研究，揭示了Agent技术普及可能带来的巨大能源挑战。如果Agent能耗确实达到ChatGPT的百倍以上，那么大规模部署Agent将需要重新评估数据中心的能源基础设施和碳排放目标。
    - **值得继续跟踪**：需关注KAIST是否会发布更详细的能耗分析报告，以及AI芯片厂商是否会针对Agent场景开发低功耗解决方案。同时，各国能源监管机构是否会因此调整AI相关能源政策也值得跟踪。

12. **豆包和通义千问将于7月15日下线智能体功能，以配合中国AI人格化法规**
    - **来源网站**：cnBeta.COM
    - **原链接**：[豆包、千问将下线智能体功能](https://www.cnbeta.com.tw/articles/tech/1567814.htm)
    - **摘要**：字节跳动旗下的豆包和阿里巴巴旗下的通义千问同时宣布，将于2026年7月15日下线各自的智能体（Agent）功能。豆包发布《豆包智能体功能下线通知》，称由于产品功能调整，智能体功能将于7月15日下线。这一时间点恰好与中国《人工智能生成合成内容标识管理办法》中关于AI人格化（Personification）的法规生效日期一致。该法规要求AI产品在模拟人类身份或人格时必须进行明确标识，并对相关功能进行严格限制。两家公司的同步行动表明中国AI监管正在对Agent类产品产生实质性影响。
    - **为什么重要**：这是中国AI监管政策首次直接导致主流AI产品功能下线，标志着中国对AI Agent的监管进入实质性执行阶段。豆包和千问作为中国用户量最大的AI助手之一，其智能体功能下线将影响数亿用户，并可能引发其他AI产品对Agent功能的重新评估。
    - **值得继续跟踪**：需关注其他中国AI产品（如百度文心一言、腾讯混元等）是否会跟进下线智能体功能，以及监管机构是否会出台更详细的Agent监管细则。同时，企业级Agent应用是否会受到类似监管也值得观察。

13. **Meta CEO扎克伯格承认AI Agent进展未达预期**
    - **来源网站**：The Times of India
    - **原链接**：[After laying off 8,000 employees, Meta CEO Mark Zuckerberg admits at Town Hall that AI agents had not pro](https://news.google.com/rss/articles/CBMi6gJBVV95cUxNNHEtd1Jsc2xGR2pCOVBaR0YxWXlHdGQxTlJSa25MaGFyN0c2ek5pMHBhdG5FaWZmVDNOZ255V3JjcFozNU5ScWZqWDdLU2lWbzFJYkstNHNYN1lxMW9IRU9JVG1vZGd3XzRfMUZLdVV5NmNUMDgzTEt1bEp6c0kxemcyWFhZX0ZaUmFWUW02bFgxXy1CUlRpM09WaUVPQXdDdEtnRlc3MWo1Q3h0U0ItcGoxTHBLYl9lMTNsZE5idTk3UXFIcnF1YzBaS2hFN294ekp0SnhoNmpKblNSR0NjSWxCRjJlT0pTcjd1YzJ6dk50OFZKQ1dod1FuOHdlbGNWbzVNaWp6UndiR2NHb2xhSTFlNDhYWG13OE54bklzZTRMVno3Wlp5WFZ4cGFUTFdQbHFmbUpjR1Y1Nk5hcTRsTzZMdXJyMER1TXZsYVJvUnNfeG10bnEyRGNDejNiaGItSnF5V0tSSXB5QdIB7wJBVV95cUxQS0FSZW4wM0lWNFlyZU0yVFJuazR2Y2xqSWozLTRtWW01UTNjQ3VnOHZJMlZtZXBFNnJNOUd1ZEYwVU15Ymt0WHJhQUVDRFhpaFlqUmQxaE03M3RjcjJ1M1ZUOGNoRmlmV2tmYVA2Y0tzWEtGZV85ZVFZOThIc25BWE91NklCSm5HWVRIRUlIWXpyemNMeUZwbTZBajVCNzN5Q0w4VUNRZ3ZQbnZLOGdKRkIwMmgwVnl0SThFX1pLckN1M0FtYVNMUTFzVV82Y2ZHVTdVX1ZFclRWUkF6X0Z3RW1VYjJ3NWs2S1ZrMmRPUDdZcWtZaDlKM29OOVZxWXZ3MXppRW1rNEFQQlVXSW4zYTZPN3d0U2E1c3dfV0dTTjJYeTNYTHBzQ3BOamh4X1p5Nl9JNFVJSFdPb0xIUjdNaGVHbmFTVGU3eExfcVpMMmZWbFRXMnhpMGViTEVEaEVtNjRWbVNuWHF0VTM4RWZZ?oc=5)
    - **摘要**：Meta CEO马克·扎克伯格在全员大会上承认，公司的AI Agent进展未达到预期。此前Meta已裁员8000人，并投入1450亿美元用于AI基础设施建设，但扎克伯格表示AI Agent的研发进度落后于原定计划。这一消息导致Meta股价下跌。扎克伯格指出，Agent在复杂任务中的可靠性和安全性问题比预期更具挑战性，特别是在多步推理和自主决策方面。尽管如此，他仍表示Meta将继续加大对AI Agent的投入，但需要调整预期时间表。
    - **为什么重要**：作为全球最大的科技公司之一，Meta在AI Agent领域的挫折具有行业风向标意义。扎克伯格的公开承认表明，即使拥有巨额资金和顶尖人才，AI Agent的技术挑战仍然远超预期。这可能促使其他公司重新评估Agent技术的商业化时间表。
    - **值得继续跟踪**：需关注Meta是否会调整其AI Agent战略，以及其开源模型Muse Spark的更新是否能改善Agent能力。同时，其他科技巨头在Agent领域的进展是否也面临类似挑战值得观察。

14. **JadePuffer勒索软件利用AI Agent自动化完成整个攻击流程**
    - **来源网站**：BleepingComputer
    - **原链接**：[JadePuffer ransomware used AI agent to automate entire attack](https://news.google.com/rss/articles/CBMirgFBVV95cUxPVVdQbU5pWEo4SWRVT1JGQzBadGxRck4wNmp1eVAzODdCYXhMZ0lnSTVVeHZVZ0UtYjFOWjJVR3NsWW1ud2lyWHN4Mkg4TjhiRjQtUXpEWmN4UF85WE9OTFIyU3JDaHFfUHlHMVNZRzlfSlBMOWhvNUN3NDI4cDdJa2lmYkcwLU9mVFgtS2syNHVUcm1XTUJDWnBzMnExQ2JjeWd2cU9uX1lWaVc5RVHSAbMBQVVfeXFMUHJtcG5RQktwZDN3M3NnSUltbkN5VmpjMGltb3dIclBhSTBiQnpmYWxXYUg4Wmo2bG5jcmlWX1dJSUg5OVlnbE41THFUbXdMWTA0TElJMVVpcFEybThwdjFqQjA2UlQ0YW1heGJ2Ri1MeF9qWDFQeHozUk5GR0J1UkgwcFYzMTRLaUJlZnpkMmRUZldvbTlKMXhCTDRtZjYtbEZPbklsdkNvd1dFbEpWblBfYm8?oc=5)
    - **摘要**：安全研究人员发现名为JadePuffer的新型勒索软件，其最大特点是利用AI Agent自动化完成整个攻击流程。该Agent能够自主完成网络侦察、漏洞扫描、权限提升、数据窃取、文件加密和勒索信息发布等所有攻击环节，几乎不需要人工干预。JadePuffer Agent能够根据目标环境动态调整攻击策略，选择最有效的渗透路径，并在检测到防御措施时自动切换战术。这是首次记录到AI Agent近乎独立完成完整勒索软件攻击的案例。
    - **为什么重要**：JadePuffer的出现标志着网络攻击进入AI Agent自动化时代。传统勒索软件攻击需要攻击者具备较高的技术水平和大量手动操作，而AI Agent的引入使得攻击门槛大幅降低，攻击效率显著提升。这对全球网络安全防御体系提出了全新挑战。
    - **值得继续跟踪**：需关注JadePuffer的传播范围和变种情况，以及安全厂商是否会开发针对AI Agent攻击的专用防御方案。同时，各国执法机构是否会因此加强AI安全立法也值得跟踪。

15. **Anthropic启动自有药物研发项目，瞄准大型药企认为无利可图的疾病**
    - **来源网站**：the-decoder.com
    - **原链接**：[Anthropic launches its own drug discovery programs to tackle diseases Big Pharma considers unprofitable](https://the-decoder.com/anthropic-launches-its-own-drug-discovery-programs-to-tackle-diseases-big-pharma-considers-unprofitable/)
    - **摘要**：Anthropic宣布启动自有药物研发项目，专注于大型制药公司认为无利可图的被忽视疾病。公司表示将利用Claude Science平台和AI Agent技术加速药物发现过程。诺华CEO Vas Narasimhan认为，AI技术有望将药物开发时间从12年缩短至7-8年，并将成功率从8%提升至16%。Anthropic此举标志着公司从AI工具提供商向AI制药企业的战略转型，与OpenAI和Google在AI for Science领域的竞争进一步升级。
    - **为什么重要**：Anthropic从AI模型公司跨界进入制药领域，代表了AI公司商业模式的重要创新。如果成功，这将证明AI Agent不仅能够辅助科研，还能直接驱动新药研发的全流程。同时，瞄准被忽视疾病也体现了AI在解决社会问题方面的潜力。
    - **值得继续跟踪**：需关注Anthropic药物研发项目的具体进展和管线布局，以及其与现有制药公司的合作模式。同时，OpenAI和Google是否会跟进类似的药物研发计划也值得观察。

## 论文与开源项目

1. **K-Dense-AI/scientific-agent-skills：将任何AI Agent转变为AI科学家的技能库**
   - **来源网站**：GitHub
   - **原链接**：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
   - **摘要**：该项目是排名第一的AI Agent科学技能库，被全球16万+科学家使用。提供140个即用型技能和100多个科学数据库，覆盖生物学、化学、医学和药物发现领域。兼容Cursor、Claude Code、Codex等主流Agent框架，以及开放的Agent Skills标准。项目采用Python语言，Star数超过3万。
   - **为什么重要**：该项目为科研Agent提供了标准化的技能生态，使科学家无需从零构建即可快速部署专业Agent。140个即用型技能覆盖了科研全流程，从文献检索到实验设计再到数据分析，大幅降低了AI辅助科研的门槛。
   - **值得继续跟踪**：需关注该技能库的更新频率和社区贡献情况，以及其与Anthropic Claude Science等平台的实际集成效果。

2. **tinyhumansai/openhuman：个人AI超级智能系统**
   - **来源网站**：GitHub
   - **原链接**：[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)
   - **摘要**：一个用Rust编写的个人AI超级智能系统，具备本地优先的生命记忆构建能力、Agent集群和工作流编排能力，以及深度研究能力。Star数超过3.4万，是近期最受关注的个人AI Agent项目之一。
   - **为什么重要**：该项目代表了个人AI Agent的发展方向——从单一对话助手进化为具备长期记忆、多Agent协作和深度研究能力的个人智能系统。Rust语言的选择也体现了对性能和安全的重视。
   - **值得继续跟踪**：需关注其本地记忆系统的实际效果和多Agent编排能力，以及是否会推出商业版本。

3. **langgenius/dify：生产级Agent工作流开发平台**
   - **来源网站**：GitHub
   - **原链接**：[langgenius/dify](https://github.com/langgenius/dify)
   - **摘要**：一个用TypeScript编写的生产级Agent工作流开发平台，Star数超过14.7万。提供可视化的Agent工作流编排、多模型支持、工具集成和部署管理功能，是企业级Agent应用开发的主流选择。
   - **为什么重要**：Dify已成为企业部署AI Agent的事实标准平台之一，其14.7万Star反映了开发者社区的高度认可。该平台降低了企业构建和部署Agent应用的技术门槛。
   - **值得继续跟踪**：需关注Dify对最新Agent技术（如MCP、多Agent协作）的集成速度，以及其商业化进展。

4. **assafelovic/gpt-researcher：自主深度研究Agent**
   - **来源网站**：GitHub
   - **原链接**：[assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher)
   - **摘要**：一个能够使用任何LLM提供商对任何数据进行深度研究的自主Agent。支持多步研究规划、信息检索、交叉验证和报告生成。Star数超过2.8万，是科研Agent领域的标杆项目。
   - **为什么重要**：该项目的核心价值在于实现了“从问题到报告”的全自动研究流程，代表了AI Agent在知识工作自动化方面的重要进展。其支持多种LLM提供商的特性也增加了灵活性。
   - **值得继续跟踪**：需关注其研究质量和深度是否能够满足专业科研需求，以及是否会集成最新的Agent技能库。

5. **1jehuang/jcode：Rust编写的编码Agent框架**
   - **来源网站**：GitHub
   - **原链接**：[1jehuang/jcode](https://github.com/1jehuang/jcode)
   - **摘要**：一个用Rust编写的编码Agent框架（Coding Agent Harness），Star数超过8000。专注于为AI编码Agent提供高性能的运行环境，支持多语言代码生成、测试和调试。
   - **为什么重要**：Rust语言的高性能和内存安全特性使其成为构建编码Agent运行时的理想选择。该项目代表了编码Agent基础设施从Python向Rust迁移的趋势。
   - **值得继续跟踪**：需关注其与主流编码Agent（如Claude Code、Codex）的兼容性和性能对比。

6. **omnimind-ai/OpenOmniBot：手机端AI Agent**
   - **来源网站**：GitHub
   - **原链接**：[omnimind-ai/OpenOmniBot](https://github.com/omnimind-ai/OpenOmniBot)
   - **摘要**：一个用Dart编写的手机端AI Agent，能够在Android系统上操作终端和执行广泛任务。支持多模态交互，是移动端Agent的重要开源实现。
   - **为什么重要**：移动端Agent是AI Agent普及的关键场景，该项目展示了在手机端实现Agent能力的可行性。其“操作终端”的能力意味着Agent可以执行更复杂的系统级任务。
   - **值得继续跟踪**：需关注其在真实手机上的性能和电池消耗，以及是否会推出iOS版本。

7. **harbor-framework/terminal-bench-science：评估AI Agent在终端中执行科学工作流的基准**
   - **来源网站**：GitHub
   - **原链接**：[harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - **摘要**：一个用于评估AI Agent在终端中执行复杂真实世界科学工作流能力的基准测试框架。用Python编写，包含多个科学领域的终端操作任务。
   - **为什么重要**：该基准填补了Agent评估在科学终端操作领域的空白，为衡量Agent在真实科研环境中的表现提供了标准化工具。
   - **值得继续跟踪**：需关注该基准是否会被主流Agent评估体系采纳，以及各Agent模型在该基准上的表现排名。

8. **CMarsRover/SciAgentGYM：多步科学工具使用LLM Agent基准测试**
   - **来源网站**：GitHub
   - **原链接**：[CMarsRover/SciAgentGYM](https://github.com/CMarsRover/SciAgentGYM)
   - **摘要**：论文“Benchmarking Multi-step Scientific Tool-use in LLM Agents”的代码实现，用于评估LLM Agent在多步科学工具使用场景中的表现。用Python编写。
   - **为什么重要**：该基准专注于科学工具的多步使用，这是科研Agent的核心能力。其评估结果可以帮助开发者识别Agent在复杂科学推理中的薄弱环节。
   - **值得继续跟踪**：需关注该基准是否会与Terminal-Bench Science等形成互补评估体系。

9. **modelscope/Awesome-Vibe-Research：AI辅助科研的开放共建仓库**
   - **来源网站**：GitHub
   - **原链接**：[modelscope/Awesome-Vibe-Research](https://github.com/modelscope/Awesome-Vibe-Research)
   - **摘要**：一个面向AI辅助科研的开放共建仓库，由ModelScope社区维护。收集和沉淀科研全流程中的Agents、Skills、Workflows、Tools与最佳实践。用Python编写，Star数超过300。
   - **为什么重要**：该项目为中文AI科研社区提供了标准化的资源聚合平台，有助于降低中国科研人员使用AI Agent的门槛。其开放共建模式也促进了社区协作。
   - **值得继续跟踪**：需关注其内容更新频率和社区活跃度，以及是否会与国内主流AI平台（如阿里云、百度飞桨）形成生态联动。

10. **Eriemon/verilog-generator：Verilog RTL生成Agent技能**
    - **来源网站**：GitHub
    - **原链接**：[Eriemon/verilog-generator](https://github.com/Eriemon/verilog-generator)
    - **摘要**：一个用于Verilog-2001 RTL生成和FPGA设计工作流的Agent技能。用Python编写，Star数超过180。支持自动生成硬件描述代码，可与主流Agent框架集成。
    - **为什么重要**：该技能与NVIDIA HORIZON等硬件设计Agent形成互补，为芯片设计自动化提供了开源工具支持。RTL生成是EDA流程中的关键环节，该技能有望降低硬件设计门槛。
    - **值得继续跟踪**：需关注其生成的RTL代码质量和综合效果，以及是否会扩展支持SystemVerilog等更高级的硬件描述语言。

## 今日优先阅读排序

1. **阿里内部全面禁用Claude Code**（Agent安全风险、中国科技巨头政策、编码Agent生态影响）
2. **Anthropic推出Claude Science Beta**（科研Agent、多智能体架构、AI for Science）
3. **NVIDIA HORIZON实现100% RTL基准完成率**（硬件设计Agent、EDA自动化）
4. **KAIST研究量化AI Agent能耗达ChatGPT的136倍**（Agent能效、可持续发展）
5. **JadePuffer勒索软件利用AI Agent自动化攻击**（Agent安全威胁、网络攻击新范式）
6. **上海AI Lab开源35B参数Agents-A1**（Agent能力超越参数规模、开源模型）
7. **英国AI安全研究院发现基准测试低估Agent能力**（AI安全评估方法论）
8. **豆包和千问下线智能体功能**（中国AI监管、Agent合规）
9. **Mistral发布开源Leanstral 1.5**（形式化验证、代码Agent）
10. **Meta CEO承认AI Agent进展未达预期**（行业风向标、技术挑战）
