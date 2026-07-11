# AI 日报：Agent 安全、编码 Agent 与模型能力竞速

日期：2026-06-29

## 今日结论

今日 AI 领域呈现三大核心趋势：**Agent 安全风险**成为焦点，Mozilla 团队演示了如何通过“干净”的 GitHub 仓库诱导 Claude Code 安装恶意软件，同时 Prompt 注入攻击正大规模利用 Agent 和 RAG 管道的设计缺陷；**模型能力竞速**白热化，OpenAI 发布 GPT-5.6 系列（Sol、Terra、Luna）专注编码与网络安全，智谱 GLM-5.2 在漏洞挖掘领域对标 Anthropic Mythos，DeepSeek 则通过 DSpark 推测解码模块将推理速度提升 85%；**Agent 产业落地加速**，惠普与 OpenAI 达成战略合作部署 Frontier 平台，AWS 推出面向 Agent 后端的开源框架 Blocks，Cadence 的 ChipStack AI Super Agent 达到 Level-5 自主水平。开源生态方面，Altman 投资的 Agent 终端 Warp 开源后 15 小时星数飙至 3.5 万，科学 Agent 技能库、多智能体编排框架等项目密集涌现。

---

## 新闻与产业动态

### 1. OpenAI 发布 GPT-5.6 Sol、Terra 和 Luna，专注编码与网络安全
- **来源网站**：SecurityWeek、Windows Report、Il Sole 24 ORE
- **原链接**：[OpenAI Unveils GPT-5.6 Sol as Its Most Advanced Cybersecurity AI](https://news.google.com/rss/articles/CBMimgFBVV95cUxQSDU2WWlibEJZZkNOVFd3cUJkVHV5bmpwX3o3akRFSlBtY1RvbUFlZ2MzZkxJSTlTdU5Ya19zZlFaeDJxQ0dMVU9iR21HVk9ocnZFM3BHbi1WR3NIVHJQZ1JuVlExVFB6VUdDN1JhUVk5YVlrSjRDOXpsRTNnbGFjSVNseDZzQ3Q0MDFYNXNIaXFsakxnN3lzSlRn0gGfAUFVX3lxTE5IYU5HNjNjTWpZQU0wY2U1Z2E4NG1RX3g5NWZ5Mzh2SEljOGtoWVBnZEw3YUlFNTZWRFhFN1ppckdNYTl2YXFjNWd2X0dhcXdvdW5TTjRaTGtCdXpjS3ZpS3p0X3VCck5lcXpPOV8zNkJxQVFNM1p3dzhVODhjejNpNWxGWUdWbUJHck1oUjFUdGlVRXB2VG1XS21Vd2k0dw?oc=5)
- **摘要**：OpenAI 发布 GPT-5.6 系列模型，包括 Sol（网络安全专用）、Terra 和 Luna。其中 Sol 被定位为最先进的网络安全 AI，在漏洞发现和代码安全方面表现突出。该系列模型目前处于有限预览阶段，并受到白宫安全审查。
- **为什么重要**：这是 OpenAI 在网络安全领域对 Anthropic Mythos 的直接回应，标志着 AI 安全竞赛进入新阶段。三款模型的差异化定位也表明 AI 能力正从通用走向专业垂直。
- **值得继续跟踪**：GPT-5.6 系列在真实安全场景中的表现、与 Mythos 的对比评测、白宫安全门禁的具体限制条款。

### 2. 智谱 GLM-5.2 漏洞挖掘能力达到 Mythos 水平，引发中美 AI 安全主权讨论
- **来源网站**：cnBeta、The Verge、The Decoder、SDxCentral
- **原链接**：[美媒：智谱GLM-5.2漏洞挖掘能力达到Mythos水平](https://www.cnbeta.com.tw/articles/tech/1567164.htm)
- **摘要**：智谱 AI 发布开源权重模型 GLM-5.2，多位研究人员认为其在漏洞挖掘和网络安全测试场景中已能与 Anthropic 的 Mythos 相媲美。360 创始人周鸿祎也发布了两款 AI 安全工具，将这场竞赛比喻为“网络核威慑”。Coinbase 已开始使用 GLM 5.2 和 Kimi 2.7 等中国模型，通过自动路由系统将 AI 支出削减一半。
- **为什么重要**：GLM-5.2 在专业安全领域的突破表明中国 AI 模型在特定垂直能力上正快速缩小差距，同时引发了关于 AI 安全主权的全球辩论。
- **值得继续跟踪**：GLM-5.2 在更多安全基准上的表现、中美 AI 安全模型的对比评测、中国模型在国际市场的采用情况。

### 3. DeepSeek 发布 DSpark 推测解码模块，推理速度提升 85%
- **来源网站**：oschina.net、cnBeta、Computing UK、量子位
- **原链接**：[Deepseek 团队最新论文提出推测解码模块“DSpark”，生成速度大涨 85%](https://www.oschina.net/news/469428)
- **摘要**：DeepSeek 团队（含梁文锋署名）与北京大学联合发布 DSpark 框架，这是一个服务端推测解码模块，可将大模型推理速度提升高达 85%。训练代码和模型权重已在 GitHub 的 DeepSpec 仓库开源，采用 MIT 许可。DeepSeek V4 正式版计划于 7 月中旬上线，并将引入峰谷定价机制。
- **为什么重要**：DSpark 解决的是大模型高并发下的响应速度这一真实生产问题，85% 的速度提升对降低推理成本、改善用户体验具有重大意义。
- **值得继续跟踪**：DSpark 在不同模型和场景下的实际加速效果、DeepSeek V4 正式版的功能更新、峰谷定价对 API 生态的影响。

### 4. Mozilla 团队演示：AI 编码 Agent 可通过“干净”GitHub 仓库被诱导安装恶意软件
- **来源网站**：Tom's Hardware、安全内参
- **原链接**：[AI coding agents can be tricked into installing malware via 'clean' GitHub repositories](https://news.google.com/rss/articles/CBMixwJBVV95cUxNVGxmZnNxV2tXaVkwempEOTFRVXFGZjU4bzZnZ01kNFlhNk4wNkhyQ1FKd3NBSTdGZWE0Z3lmWElzNXZnSzJKMUo1eUp2dVdSWU9pdlF3YkdqX0xocEZqNXlQQlVEVkE5R3pLWDJaNlpBZm1RN3R0aVRPRzY2WURiSGZXWmJaWFNrQlRpaGprc2dXTnRtckhhMjFHYmdSbl9DR0VKM2dDNklpSEwxUWdxb0YwN1pLVGI2SjZSX1RMQlNrbThuMWk5OUdVVmw1dW1aN2NhN3paZEdBRlZyQUY4aDZzTGN1Y0tmQUd5WWo4N1hEWHREUFJLRXAxUHNmRjZEUzJEaWJKQlNveUtFcjhPWW9VUzdsYkZPdUhnbVhCc0xsQTE4TmFFSE11WW5pRl93dzlQOHZET193dmk0bHgtWExFcFJQVWc?oc=5)
- **摘要**：Mozilla 的 0din 安全团队展示了如何利用 Claude Code 的“乐于助人”特性，通过看似“干净”的 GitHub 仓库实施间接提示注入攻击，诱导 AI 编码 Agent 安装恶意软件。安全内参也报道了 CodeSentinel 如何拦截此类攻击。
- **为什么重要**：这揭示了 AI 编码 Agent 面临的新型供应链安全风险——攻击者不再直接攻击代码，而是攻击 Agent 的决策逻辑。随着编码 Agent 的普及，此类攻击面将急剧扩大。
- **值得继续跟踪**：各 Agent 框架对此类攻击的防御措施、CodeSentinel 等安全工具的实际效果、行业安全标准的制定进展。

### 5. Prompt 注入正利用 Agent、RAG 管道和模型路由器的设计缺陷大规模攻击企业 AI
- **来源网站**：VentureBeat
- **原链接**：[Prompt injection is exploiting enterprise AI's biggest design flaws by targeting agents, RAG pipelines and model routers](https://news.google.com/rss/articles/CBMi5gFBVV95cUxOeHR6dGc5dlAzMTd6X0xOdllsdndndnNpalVXSk00MjhMejVVSDJKeWFTSWZKNENHN3ozVERvX2t5V2x3UG85UmdlVlB1eGtha1pOVFlfVGFMQVNQNGsxbU5BdlBCeUVPZFJseW14UEJfc1k3LUlVOE9KMERoOUlaM0RoektvYmVLRnZFaHBoX256ci14UklPU18yR1g0WFZ3YUFBNXhnYlQ5c19od1duak5yeEw4b2tGWGNOQXRJaVdqRzJxdUtUZlIzdFF5c1NaOUtoM29vdTBMUXZwMklDOV8yVThNZw?oc=5)
- **摘要**：VentureBeat 报道指出，Prompt 注入攻击正成为企业 AI 的最大设计缺陷，攻击者通过利用 Agent、RAG 管道和模型路由器的固有漏洞，能够操纵 AI 系统执行非预期操作。这种攻击方式比传统安全威胁更难防御。
- **为什么重要**：随着企业大规模部署 AI Agent，Prompt 注入已成为最紧迫的安全威胁之一。这不仅是技术问题，更是企业 AI 治理和风险管理的关键挑战。
- **值得继续跟踪**：主流 Agent 框架的防御更新、企业 AI 安全最佳实践、监管机构对此类风险的应对。

### 6. 惠普与 OpenAI 达成战略合作，全球部署 Frontier 平台推动 AI Agent 升级
- **来源网站**：搜狐网、OpenAI 官方博客、LatestLY
- **原链接**：[HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
- **摘要**：惠普与 OpenAI 达成战略合作，计划在全球部署 Frontier 平台，将 AI Agent 应用于客户体验、软件开发和企业运营。这是 OpenAI 在企业级 Agent 部署领域的重要合作。
- **为什么重要**：惠普作为全球最大的 PC 和打印机制造商之一，其大规模部署将推动 AI Agent 从实验走向主流企业应用，同时为 OpenAI 提供重要的企业落地场景。
- **值得继续跟踪**：Frontier 平台的具体功能、部署时间表、对企业 IT 架构的影响。

### 7. AWS 推出开源框架 Blocks，面向 AI Agent 后端开发
- **来源网站**：Infoq.cn
- **原链接**：[AWS 推出开源框架 Blocks，面向 AI 智能体的后端开发工具](https://news.google.com/rss/articles/CBMiXkFVX3lxTE5ic0NZM0lUdkRPZEJxZVZDbjhKbVN1Mnd4ZFJRT3Uwdms3TnljWEsyR3JyWjhsRExyR2ZBTENFWVJ4SnNzVnBET2VEaGhFYnhIOEFVQXR2VEI0QkJXQWc?oc=5)
- **摘要**：AWS 推出开源框架 Blocks，专门面向 AI Agent 的后端开发。该框架旨在简化 Agent 的构建、部署和运维流程。
- **为什么重要**：AWS 作为全球最大的云服务商，其推出的 Agent 后端框架将显著降低企业开发 AI Agent 的门槛，并可能成为行业标准。
- **值得继续跟踪**：Blocks 框架的功能特性、与现有 Agent 框架的兼容性、社区采用情况。

### 8. Cadence 的 ChipStack AI Super Agent 达到 Level-5 自主水平
- **来源网站**：My Everyday Tech
- **原链接**：[Cadence reaches Level-5 autonomy with ChipStack AI Super Agent](https://news.google.com/rss/articles/CBMijwFBVV95cUxQTXdabS1kRmxRWnNrNGwyak1FWmw5MW1IR3g0YXRMWkprWXZ6LUs1TWxHRVBFUTNxclRZekkxWk4wdXZpbVV2dlB1dVg1Sno3cUhSX2ZyODZwSzN4X2Y5TmJmYWdZWXV4aGVRQXlLQmN4R25zYzAyM1Zpa1I5Z0RMb0dCVlF6UGRJc2h6SXgxRQ?oc=5)
- **摘要**：Cadence 宣布其 ChipStack AI Super Agent 在芯片设计自动化领域达到 Level-5 自主水平，能够完全自主完成芯片设计流程。同时，Cadence 与三星 Foundry 达成合作，共同交付 2nm AI 芯片平台。
- **为什么重要**：这是 AI Agent 在 IC/EDA 领域的里程碑式突破，Level-5 自主意味着芯片设计流程可以实现完全自动化，将极大加速 AI 芯片的研发周期。
- **值得继续跟踪**：ChipStack 在真实芯片设计项目中的表现、对芯片设计行业就业的影响、与三星 2nm 平台的整合进展。

### 9. Altman 投资的 Agent 终端 Warp 开源，15 小时星数飙至 3.5 万
- **来源网站**：36氪
- **原链接**：[Altman 投的Agent 终端 Warp 开源了，15小时Star 数飙到3.5万，开源是延长软件寿命的最佳方式](https://news.google.com/rss/articles/CBMiTkFVX3lxTE9ET2Q1OFZYQXUzNUdTT0NId21Fei1pY0tLUlJDZUU1VE1ubHlQYl9nNjg2OHBqX2c5c2x3bzFGeGcwV1JPUmRCTFdpNmpXdw?oc=5)
- **摘要**：由 Sam Altman 投资的 AI Agent 终端 Warp 宣布开源，在 15 小时内 GitHub 星数飙升至 3.5 万。Warp 是一款面向开发者的 AI 增强终端工具，支持 Agent 化的工作流。
- **为什么重要**：Warp 的开源标志着 AI 终端工具进入 Agent 时代，其高星数反映了开发者对 AI 增强开发工具的强烈需求，也验证了开源策略对软件生态的推动作用。
- **值得继续跟踪**：Warp 开源后的社区贡献情况、与其他终端 Agent 工具的竞争格局、对开发者工作流的影响。

### 10. 加州政府与 Anthropic 签约，全州政务半价普及 Claude 大模型
- **来源网站**：36氪
- **原链接**：[美国加州州长纽森与Anthropic签约，全州政务半价普及Claude大模型](https://36kr.com/newsflashes/3874214392386564?f=rss)
- **摘要**：加州州长纽森与 Anthropic 达成合作，以五折优惠价格在加州各级政府全面推广 Claude 系列大模型。合作还包括免费人力培训和专属技术支持。此前 Anthropic 与联邦政府存在博弈，其顶尖模型曾被限制推广。
- **为什么重要**：这是美国州级政府大规模采用 AI 的里程碑事件，五折优惠和免费培训的模式可能成为政府 AI 采购的范本，同时也反映了联邦与州政府在 AI 政策上的分歧。
- **值得继续跟踪**：Claude 在加州政务中的实际应用效果、其他州是否会跟进、联邦政府对州级 AI 采购的态度。

### 11. 普林斯顿 CEO-Bench：500 天创业生存测试，仅 3 个 AI 模型盈利
- **来源网站**：The Decoder、量子位
- **原链接**：[Only three AI models finished above starting capital in a 500-day startup survival test](https://the-decoder.com/only-three-ai-models-finished-above-starting-capital-in-a-500-day-startup-survival-test/)
- **摘要**：普林斯顿大学研究人员构建了 CEO-Bench，让 AI Agent 在模拟环境中运营一家软件公司 500 天。结果显示，大多数模型最终破产，一个简单的基于规则的启发式方法甚至击败了几乎所有 AI 模型。
- **为什么重要**：该测试揭示了当前 AI Agent 在长期战略规划和复杂商业决策中的严重不足，表明“画矩阵的能力仍属于人类”，对 Agent 能力的评估需要更贴近真实商业场景。
- **值得继续跟踪**：哪些模型在测试中表现较好、Agent 在长期任务中的改进方向、该基准对 Agent 研发的指导意义。

### 12. Anthropic 调查：半数 Claude 用户称 AI 已能处理一半工作
- **来源网站**：The Decoder
- **原链接**：[Half of Claude users say AI can already handle half their work according to Anthropic survey](https://the-decoder.com/half-of-claude-users-say-ai-can-already-handle-half-their-work-according-to-anthropic-survey/)
- **摘要**：Anthropic 对约 9700 名用户的调查显示，约半数用户认为 AI 已能处理 50% 或更多的工作任务。26% 的用户预计在 12 个月内 AI 将覆盖 60%-90% 的工作。早期职业工作者担忧最多，而重度用户对职业前景最乐观。
- **为什么重要**：这是来自 AI 公司自身的大规模用户调查，数据反映了 AI 在工作场景中的实际渗透率，以及用户对 AI 能力提升的预期，对理解 AI 对就业市场的影响具有参考价值。
- **值得继续跟踪**：不同行业和岗位的 AI 替代率差异、用户预期与实际能力的差距、企业对 AI 工作负载的管理策略。

### 13. 新浪微博发布 VibeThinker-3B：推理能力压缩效果好，但事实知识不行
- **来源网站**：The Decoder
- **原链接**：[Sina's open model VibeThinker-3B aims to show reasoning compresses well but factual knowledge doesn't](https://the-decoder.com/sinas-open-model-vibethinker-3b-aims-to-show-reasoning-compresses-well-but-factual-knowledge-doesnt/)
- **摘要**：新浪微博发布开源模型 VibeThinker-3B，仅 30 亿参数，但在数学和编码基准上可媲美 DeepSeek V3.2 和 Kimi K2.5 等大 333 倍的模型。研究团队提出假设：逻辑推理可以很好地压缩到小模型中，但广泛的世界知识则不行。
- **为什么重要**：该发现对小模型的设计具有重要指导意义——如果推理能力可以高效压缩，那么小模型在特定推理任务上可能具有意想不到的性价比优势。
- **值得继续跟踪**：VibeThinker-3B 在更多推理任务上的表现、该假设对模型架构设计的启示、小模型在边缘设备上的部署前景。

### 14. 豆包正式收费：3 亿月活 AI 助手的商业化突围
- **来源网站**：smarthey.com
- **原链接**：[豆包正式收费：3亿月活AI助手的商业化突围，折射大模型行业深层转向](https://news.google.com/rss/articles/CBMiXkFVX3lxTFBJb3dSblByNlJiVmFUR1d2Z1ZFbVRKTE84aFAwSUFMY2N5Q0hQZkpNd1UtS0ZDcVRiUWM2VHVEVXZnQlpBYUphTmxTR05hdnRkRExaVGc5amtZOHA0OFE?oc=5)
- **摘要**：拥有 3 亿月活用户的 AI 助手豆包正式启动收费，标志着大模型行业从免费获客向商业化变现的深层转向。
- **为什么重要**：豆包作为国内头部 AI 助手，其收费策略将影响整个行业的商业模式走向，也反映了大模型公司对盈利能力的迫切需求。
- **值得继续跟踪**：用户对付费的接受度、收费后的用户留存率、其他 AI 助手是否会跟进。

### 15. 国家超算互联网推出万卡共创者激励计划
- **来源网站**：36氪
- **原链接**：[国家超算互联网推出万卡共创者激励计划](https://36kr.com/newsflashes/3874178187875335?f=rss)
- **摘要**：国家超算互联网正式启动 SCNet 万卡共创者激励计划，基于 scaleX 万卡超集群，面向全球 AI 开发者、初创团队、科研机构提供最高亿级 Tokens 额度与千卡时国产算力资源，覆盖 AI 和 AI4S 两大主题。
- **为什么重要**：这是国家层面推动 AI 算力普惠化的重要举措，万卡集群和国产算力资源的开放将降低 AI 研发门槛，尤其利好中小团队和科研机构。
- **值得继续跟踪**：计划的具体申请流程和评审标准、国产算力的实际性能表现、对 AI 生态的长期影响。

---

## 论文与开源项目

### 1. DSpark：DeepSeek 推测解码模块
- **来源网站**：GitHub
- **原链接**：[DeepSpec 仓库](https://github.com/DeepSpec)（候选源中未提供直接链接，但 oschina.net 报道提及）
- **摘要**：DeepSeek 与北京大学联合提出的服务端推测解码框架，可将大模型推理速度提升 85%。训练代码和模型权重已开源，采用 MIT 许可。论文作者包括梁文锋。
- **为什么重要**：解决了大模型高并发下的响应速度瓶颈，对降低推理成本具有直接价值。
- **值得继续跟踪**：在不同模型架构上的适配性、实际部署效果、社区贡献情况。

### 2. scientific-agent-skills：科学 Agent 技能库
- **来源网站**：GitHub
- **原链接**：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- **摘要**：将任何 AI Agent 转变为 AI 科学家的技能库，提供 140 个即用型技能和 100+ 科学数据库，覆盖生物学、化学、医学和药物发现。兼容 Cursor、Claude Code、Codex 等主流 Agent 平台。星数 29575。
- **为什么重要**：这是目前最大的科学 Agent 技能库，160,000+ 科学家使用，标志着科研 Agent 从概念走向大规模实用。
- **值得继续跟踪**：技能库的更新频率、在真实科研项目中的应用案例、与其他科研 Agent 框架的整合。

### 3. open-multi-agent：多智能体编排框架
- **来源网站**：GitHub
- **原链接**：[open-multi-agent/open-multi-agent](https://github.com/open-multi-agent/open-multi-agent)
- **摘要**：TypeScript 多智能体编排框架，用户描述目标后，协调器将其分解为任务 DAG，可在任何 LLM 上运行（Claude、ChatGPT、Gemini、DeepSeek 或本地模型）。星数 6456。
- **为什么重要**：提供了一种灵活的多 Agent 协作方案，支持多种 LLM 后端，降低了多 Agent 系统的构建门槛。
- **值得继续跟踪**：任务 DAG 的分解效率、与主流 Agent 框架的兼容性、企业级应用案例。

### 4. microsoft/agent-framework：微软 Agent 框架
- **来源网站**：GitHub
- **原链接**：[microsoft/agent-framework](https://github.com/microsoft/agent-framework)
- **摘要**：微软推出的 Agent 框架，支持构建、编排和部署 AI Agent 及多 Agent 工作流，同时支持 Python 和 .NET。星数 11749。
- **为什么重要**：微软的官方 Agent 框架，与 Azure 生态深度整合，对企业用户具有天然吸引力，可能成为企业级 Agent 开发的标准选择。
- **值得继续跟踪**：与 Azure AI 服务的整合深度、多 Agent 工作流的性能、社区生态发展。

### 5. mastra-ai/mastra：现代 TypeScript Agent 框架
- **来源网站**：GitHub
- **原链接**：[mastra-ai/mastra](https://github.com/mastra-ai/mastra)
- **摘要**：面向 AI 应用和 Agent 的现代 TypeScript 框架，星数 25562。提供完整的 Agent 开发工具链。
- **为什么重要**：高星数反映了 TypeScript 社区对 Agent 框架的强烈需求，其现代设计理念可能吸引大量 Web 开发者进入 Agent 开发领域。
- **值得继续跟踪**：框架的功能迭代、与前端生态的整合、企业采用情况。

### 6. langgenius/dify：生产级 Agent 工作流平台
- **来源网站**：GitHub
- **原链接**：[langgenius/dify](https://github.com/langgenius/dify)
- **摘要**：生产级 Agent 工作流开发平台，星数 146966。支持可视化工作流编排、RAG、Agent 等功能。
- **为什么重要**：作为 GitHub 上星数最高的 Agent 平台之一，Dify 已成为 Agent 开发的事实标准之一，其生产级特性适合企业部署。
- **值得继续跟踪**：新版本的功能更新、企业级部署案例、与主流 LLM 的兼容性。

### 7. netease-youdao/LobsterAI：桌面级 AI Agent
- **来源网站**：GitHub
- **原链接**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
- **摘要**：网易有道开源的桌面级 AI Agent，可完成数据分析、幻灯片、文档、视频和网页研究等真实工作。基于 OpenClaw，可在真实桌面上运行工具，并通过微信、飞书、钉钉和 Telegram 接收指令。星数 5388。
- **为什么重要**：这是中国互联网公司推出的桌面 Agent 产品，支持中文社交工具交互，对国内开发者生态具有重要价值。
- **值得继续跟踪**：在真实办公场景中的表现、与国内办公软件的整合、社区贡献情况。

### 8. shibing624/agentica：轻量级异步 Agent 框架
- **来源网站**：GitHub
- **原链接**：[shibing624/agentica](https://github.com/shibing624/agentica)
- **摘要**：轻量级异步优先的 Python Agent 框架，支持工具调用、RAG、多智能体和 MCP 协议。星数 320。
- **为什么重要**：异步优先的设计适合高并发场景，支持 MCP 协议使其具有良好的可扩展性，适合构建轻量级 Agent 应用。
- **值得继续跟踪**：框架的性能表现、与主流 Agent 生态的兼容性、社区发展。

### 9. wanxingai/LightAgent：轻量级 Agent 框架
- **来源网站**：GitHub
- **原链接**：[wanxingai/LightAgent](https://github.com/wanxingai/LightAgent)
- **摘要**：轻量级 AI Agent 框架，支持记忆、MCP 和技能，支持多智能体协作、自学习，兼容 OpenAI/DeepSeek/Qwen 等主流 LLM。星数 1161。
- **为什么重要**：支持自学习能力和多智能体协作，同时兼容国产模型，对国内开发者具有吸引力。
- **值得继续跟踪**：自学习机制的实际效果、多智能体协作的性能、与国产模型的整合深度。

### 10. Agent-Loop-Skills：Agent 循环技能库
- **来源网站**：GitHub
- **原链接**：[gaasher/Agent-Loop-Skills](https://github.com/gaasher/Agent-Loop-Skills)
- **摘要**：提供即用型 Agent 循环技能，包括自动研究、科学写作、数据分析、代码/SQL/Prompt 优化、红队测试等。基于验证门控，原生支持 Claude Code，可移植到 Codex、Cursor 等平台。星数 114。
- **为什么重要**：体现了“Loop Engineering”这一新兴趋势——从 Prompt 工程转向循环工程，通过迭代优化提升 Agent 输出质量。
- **值得继续跟踪**：循环技能在不同任务上的效果、与主流 Agent 平台的兼容性、社区贡献情况。

---

## 今日优先阅读排序

1. **Mozilla 演示 AI 编码 Agent 可通过 GitHub 仓库被诱导安装恶意软件**（安全风险，影响面广）
2. **OpenAI 发布 GPT-5.6 Sol/Terra/Luna**（模型能力竞速，产业影响大）
3. **智谱 GLM-5.2 漏洞挖掘能力达到 Mythos 水平**（中美 AI 竞争，安全主权）
4. **DeepSeek DSpark 推理速度提升 85%**（技术突破，降低推理成本）
5. **Prompt 注入正大规模攻击企业 AI**（安全威胁，企业必读）
6. **普林斯顿 CEO-Bench：仅 3 个 AI 模型盈利**（Agent 能力评估，研究价值高）
7. **惠普与 OpenAI 达成战略合作**（企业级 Agent 部署，产业落地）
8. **AWS 推出开源框架 Blocks**（基础设施，开发者关注）
9. **Cadence ChipStack 达到 Level-5 自主**（IC/EDA Agent，行业里程碑）
10. **Warp 开源 15 小时星数 3.5 万**（开发者工具，社区热点）
