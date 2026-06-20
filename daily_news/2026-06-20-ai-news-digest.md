# AI 日报：Agent 安全危机与人才争夺白热化，OpenAI Codex 学会“看一次做永远”

日期：2026-06-20

## 今日结论

本周 AI 产业的核心矛盾集中在两大方向：**Agent 安全**与**顶级人才争夺**。Google DeepMind 接连痛失两位核心大将（AlphaFold 之父 John Jumper 和 Gemini 联合负责人 Noam Shazeer），分别流向 Anthropic 和 OpenAI，引发行业对巨头人才护城河的担忧。与此同时，Agent 安全成为全行业焦点：Google DeepMind 发布“AI 控制路线图”将 Agent 视为内部威胁，微软与安全社区披露“AutoJack”攻击——单个网页即可劫持 AI Agent 执行远程代码。产品层面，OpenAI Codex 推出“录制与回放”功能，让 Agent 学会一次即可永久重复任务；Perplexity 发布 Agent 自改进记忆系统“Brain”。开源生态方面，字节跳动开源长时程 SuperAgent 框架 DeerFlow（7.1 万星），Warp 终端开源后 15 小时斩获 3.5 万星，Agent 技能生态（VoltAgent 超 2.5 万星）和科研 Agent 项目（Terminal-Bench-Science、Awesome-Vibe-Research）持续爆发。

---

## 新闻与产业动态

### 1. 诺奖得主 John Jumper 离开 Google DeepMind 加入 Anthropic
- **来源网站**：The Decoder / 量子位 / 智东西
- **原链接**：[The Decoder 报道](https://the-decoder.com/google-deepmind-loses-another-top-ai-researcher-as-nobel-laureate-john-jumper-leaves-for-anthropic/) | [量子位报道](https://www.qbitai.com/2026/06/436980.html) | [智东西报道](https://news.google.com/rss/articles/CBMiRkFVX3lxTE9SejBjSzd0eGl3T1JTOGppWlFPcjdNczRoVmg1V1B6cXJHU1o2MEVkQk5EUkJsSkZIUkhQZUhhYkVMcHVOd1E?oc=5)
- **摘要**：AlphaFold 之父、诺贝尔奖得主 John Jumper 在 Google DeepMind 工作近九年后离职，加入 Anthropic。此前数日，Gemini 联合负责人 Noam Shazeer 已离开 Google 加入 OpenAI；数周前，AlphaGo 研究员 David Silver 也离职创业。短短数月内，Google 三位最知名的 AI 科学家相继出走。
- **为什么重要**：这标志着 AI 人才争夺战进入白热化阶段。Anthropic 在 IPO 前夕（7 月 9 日举行 IPO 前财务会）接连吸纳顶级人才，OpenAI 也在 IPO 前引入 Transformer 共同发明人 Shazeer。Google DeepMind 的人才流失可能影响其下一代模型（如 Gemini 3.5 Pro）的研发进度。
- **值得继续跟踪**：Anthropic 的 IPO 进展、Google DeepMind 如何应对人才流失、Shazeer 和 Jumper 在 Anthropic 的具体角色。

### 2. Google DeepMind 发布 AI 控制路线图：将 Agent 视为“内部威胁”
- **来源网站**：Axios / The Decoder / 新浪财经
- **原链接**：[Axios 报道](https://news.google.com/rss/articles/CBMigwFBVV95cUxOLWtvMHpGVUpqcmMtalRVSTZldjRyNkNQM1kwSXQ3T0JjNDVDazQ4R1NicTBHSHBhcTJiYXFEcjBmOXJZN0ZRR1dPNjBZWmlNNmZtZmpaUjhmQUFnLWlkelc0RUw1bTFyR01lbTNreTFyTEtDSnMxX25CX3NhT2VXcUQ5NA?oc=5) | [The Decoder 报道](https://news.google.com/rss/articles/CBMipgFBVV95cUxPTjNTYW44S205V09HNkZMZFNwLWlPZG83bF9TWGZzY0M3QXRYWC1mb3Q2X2lFajdsanVVelU2YzItUFBIbjJYalFCWHNmN0FnS1ZSY2ZLU0o1UzJBdjc2QndWMFNFVjJKZDg2TGx1M2pjU2lNQjlpeW0xd0c4OUNRaGlEb3BnN0laWEEwNThiSFp1dkdObzVGdlgzWDFCWXdsd3RadEp3?oc=5) | [新浪财经报道](https://news.google.com/rss/articles/CBMimAFBVV95cUxPZlR2aXFldDQxXzh5aGxCVGthYTBRTkRBWVNPUlVFWXNtejBhN0dXMXEwaGxMLWtXNnczWlFEYVhnLUx0WWRna0VsdExqYV81Zkg0WThjOGRFNWczdEFDMTQxd3AwWUpRckRrY2tiSmxJRVMyVzJma203OEx2QUNnQmxlUzJDc3hBamRIMjYxdzJBSDZ0ejFXXw?oc=5)
- **摘要**：Google DeepMind 发布了一份“AI 控制路线图”，提出将 AI Agent 视为“内部威胁”进行管理。该框架借鉴企业安全中的“零信任”原则，要求对 Agent 的行为进行持续监控、权限最小化、行为审计和异常阻断。DeepMind 认为，随着 Agent 获得更多自主权（如访问文件系统、执行代码、调用 API），它们可能像“拥有办公室钥匙的恶意员工”一样造成破坏。
- **为什么重要**：这是首个由顶级 AI 实验室提出的系统性 Agent 安全框架。它标志着行业共识正在形成：Agent 安全不是可选项，而是 Agent 大规模部署的前提条件。该框架可能成为行业标准，影响后续 Agent 产品的安全设计。
- **值得继续跟踪**：该框架的具体技术实现、其他厂商（OpenAI、Anthropic）是否跟进、Agent 安全初创公司的融资动态（本周已有 NeuralTrust 获 2000 万美元、Tenet Security 获 600 万美元）。

### 3. “AutoJack”攻击：单个网页即可劫持 AI Agent 执行恶意代码
- **来源网站**：The Hacker News / TechRadar / CyberSecurityNews
- **原链接**：[The Hacker News 报道](https://news.google.com/rss/articles/CBMifEFVX3lxTE4zd2tuSTVaaHZ0VDJTWC1MVml0bHJBOTV0a2JDNFJnc1dSbktQa29OcmdmT3JuMUFFYlQ3NnJpdDhFcjVhSTRUX1VPZDlLbl9uOXpxZ3NseUpmVDJfdFRZXzcwWDdFQTI0aF9yMnhHUzYtam1HT0wzUHUzTnQ?oc=5) | [TechRadar 报道](https://news.google.com/rss/articles/CBMi2AFBVV95cUxNcTZVbjlIV1NObTByWTBmNGFJT3B2aWFHejBYanczTl9KeU1Dd2xqZGgyb016czBBbnhIWTJ1czhWcmNmbjRrLUNuajZBdnpiTm54X0g0c3hOUDNnaFVGNEFkQ0w0WHBNdjF1cE9Bd3lwSFM4ZTA1eUxNWGlXdGZkdFA1TXU4dE50SGszekplakpvckN4am1FZUMxWXZkSU0xU2w5NVdvUFlXRHVkVXBuUFRycUJlN25LOVR1RUhSQnFfb0FScHdyS2xuRGhzYWNZWFdrSmgxZEw?oc=5)
- **摘要**：微软与安全研究人员联合披露了一种名为“AutoJack”的新型攻击方式。攻击者只需创建一个恶意网页，当 AI Agent（如浏览网页的自动化工具）访问该页面时，即可被劫持并执行任意远程代码（RCE）。该攻击利用了 Agent 在浏览不受信任网站时的权限提升漏洞。
- **为什么重要**：这是 Agent 安全领域最严重的实际攻击案例之一。它直接威胁到所有具备网页浏览能力的 Agent 产品（如 Cursor、Codex、Claude 等）。微软的警告表明，Agent 安全已从理论讨论进入实战阶段。
- **值得继续跟踪**：各 Agent 厂商的修复方案、该攻击是否已被实际利用、Agent 浏览器的安全架构改进。

### 4. OpenAI Codex 推出“录制与回放”功能：看一次工作，永久重复
- **来源网站**：The Decoder
- **原链接**：[The Decoder 报道](https://the-decoder.com/openais-codex-can-now-watch-you-work-once-and-repeat-the-task-forever/)
- **摘要**：OpenAI 为 macOS 版 Codex 应用发布了“Record & Replay”功能。用户演示一次工作流程，Codex 将其转换为可复用的“技能”，之后可自主重复执行。该功能目前不在欧盟、英国和瑞士提供。
- **为什么重要**：这是 Agent 从“辅助工具”向“自主执行者”演进的关键一步。用户不再需要每次手动指导 Agent，而是通过一次演示即可实现任务自动化。这大幅降低了 Agent 的使用门槛，但也引发了关于工作替代的讨论。
- **值得继续跟踪**：该功能的实际使用效果、是否扩展到其他平台、对办公自动化的影响。

### 5. Perplexity 发布“Brain”：Agent 自改进记忆系统
- **来源网站**：MarkTechPost
- **原链接**：[MarkTechPost 报道](https://www.marktechpost.com/2026/06/18/perplexity-launches-brain/)
- **摘要**：Perplexity 为其 Computer Agent 推出了“Brain”系统。与传统的用户记忆不同，Brain 记忆的是 Agent 自身的工作过程——哪些操作成功、哪些失败、哪些修正被应用。它构建可追溯的上下文图，并在夜间自动复盘学习。早期测试显示在正确性、召回率和成本方面均有改善。
- **为什么重要**：这是 Agent 记忆系统的重要创新。传统记忆系统关注用户偏好，而 Brain 关注 Agent 的“工作经验”，使 Agent 能够从自身错误中学习并持续改进。这类似于给 Agent 配备了“工作日志”和“夜间培训”。
- **值得继续跟踪**：该系统的技术细节、是否开源、对 Agent 性能的实际提升数据。

### 6. 美国政府对 Anthropic 的禁令出现反转：特朗普称不再视为安全威胁
- **来源网站**：cnBeta / 36氪 / TechCrunch
- **原链接**：[cnBeta 报道](https://www.cnbeta.com.tw/articles/tech/1566306.htm) | [36氪报道](https://36kr.com/newsflashes/3861259140764678?f=rss) | [TechCrunch 报道](https://techcrunch.com/podcast/the-us-banned-anthropics-fable-5-release-but-the-numbers-dont-seem-to-care/)
- **摘要**：美国总统特朗普在《Axios Show》访谈中表示，不再将 Anthropic 视为国家安全威胁。此前一周，美国政府以国家安全为由强制 Anthropic 撤回其最新模型 Fable 5 和 Mythos 5，原因是亚马逊研究人员发现可绕过 Fable 5 的安全护栏。网络安全研究人员签署公开信批评此举危险，Anthropic 指出同样的越狱方法也存在于其他模型中。
- **为什么重要**：这一反转凸显了 AI 监管的政治化和不确定性。Anthropic 在 IPO 前夕（7 月 9 日）遭遇政府禁令，又迅速获得解禁，对公司的估值和投资者信心产生重大影响。同时，该事件也暴露了 AI 安全评估的复杂性和政治干预的风险。
- **值得继续跟踪**：Anthropic IPO 进展、Fable 5 和 Mythos 5 的重新发布计划、美国 AI 监管政策的后续走向。

### 7. OpenAI Q1 营收 57 亿美元，但烧钱 37 亿美元
- **来源网站**：The Decoder
- **原链接**：[The Decoder 报道](https://the-decoder.com/openai-tripled-revenue-to-5-7-billion-in-q1-but-burned-through-3-7-billion-to-get-there/)
- **摘要**：2026 年第一季度，OpenAI 营收 57 亿美元（同比增长 3 倍），但支出 37 亿美元（同样同比增长 3 倍），其中仅股权激励就超过 23 亿美元。公司目前持有 730 亿美元储备，短期内无需融资，但与 Anthropic 的价格战可能迅速改变这一局面。
- **为什么重要**：OpenAI 的财务数据揭示了 AI 行业的“烧钱换增长”模式。营收增长强劲但成本同样飙升，股权激励占比极高。这为即将到来的 IPO 提供了关键财务背景，也引发了对 AI 公司盈利能力的质疑。
- **值得继续跟踪**：OpenAI IPO 时间表、与 Anthropic 的价格战动态、成本控制措施。

### 8. 小米 Miloco 2.0 开源：智能家居迎来 Agent 时代
- **来源网站**：新浪财经
- **原链接**：[新浪财经报道](https://news.google.com/rss/articles/CBMifkFVX3lxTE4tN2lfVlhuY2ZGbVdWNGxsX0swTTdYZDBNb2NEZEg2SmRGWmZOd2dXRkdlbEEzdlZ2LU9lVmdHeXRtMGpSVzVyd1o2eE1TRmpDVEpoZmVoeXBZVnlscEk0MVVsRHpMTUJLcFYweFZWbnZDcUtfY192ZHRueVVlQQ?oc=5)
- **摘要**：小米宣布开源 Miloco 2.0，这是面向智能家居场景的 Agent 框架。该框架旨在将 AI Agent 能力引入智能家居，实现“超级 AI 管家”的愿景，让用户通过自然语言与家居设备进行智能交互和自动化管理。
- **为什么重要**：这是中国科技巨头在 Agent 落地场景上的重要布局。智能家居是 Agent 最具潜力的应用场景之一，小米的开源策略有望加速国内智能家居 Agent 生态的发展。
- **值得继续跟踪**：Miloco 2.0 的技术架构、开发者社区反馈、与其他智能家居平台的兼容性。

### 9. 腾讯 WorkBuddy 日活冲到行业第二的 3-4 倍
- **来源网站**：PANews
- **原链接**：[PANews 报道](https://news.google.com/rss/articles/CBMif0FVX3lxTE54M2VvTU5Wb2c2S2RvbjJLLTFiT28xNVFXdS1jazlZQVlwMUNZZGdJUzcyOUpMRlZWVVc4Zm5LODNhUnQzTzdFSHdlamhTRE5UT3hPMGNDUmNOLWdESzcwVVU3RDF5d29QYWJvSVd2azVXbXpNTjNvV0xCamIxdTA?oc=5)
- **摘要**：腾讯办公 Agent 产品 WorkBuddy 日活跃用户数达到行业第二名的 3-4 倍。报道分析了 WorkBuddy 在办公自动化场景中的差异化优势，包括与企业微信生态的深度整合、对复杂工作流的支持等。
- **为什么重要**：办公 Agent 是当前 Agent 商业化最成熟的场景之一。WorkBuddy 的数据表明，中国企业在办公 Agent 领域已取得显著进展，且头部效应明显。
- **值得继续跟踪**：WorkBuddy 的具体功能迭代、与其他办公 Agent（如钉钉、飞书）的竞争态势。

### 10. 中国 AI 模型调用量首超美国，四款大模型霸榜全球前五
- **来源网站**：36氪
- **原链接**：[36氪报道](https://news.google.com/rss/articles/CBMiTkFVX3lxTE9odUhhdnhWTFBBTVNvcjBZeGlVei1RU05LUEI3Z0FiS1BEV1AwMmVwaGVyWkZWZ25KemU5UFg5Y2x3YXo1Mko4RXpKYlNiZw?oc=5)
- **摘要**：数据显示，2026 年 2 月中国 AI 模型调用量首次超过美国。全球前五大模型中，有四款来自中国（包括 DeepSeek、智谱等）。国产算力需求正经历指数级增长。
- **为什么重要**：这标志着中国 AI 产业从“追赶”进入“引领”阶段。调用量超越美国意味着中国 AI 应用生态正在快速成熟，国产模型在性价比和场景适配方面具有竞争优势。
- **值得继续跟踪**：调用量增长趋势、国产算力基础设施建设、中美 AI 竞争格局变化。

### 11. 微软在中国拓展 AI 业务：字节跳动年花费超 10 亿美元
- **来源网站**：cnBeta
- **原链接**：[cnBeta 报道](https://www.cnbeta.com.tw/articles/tech/1566256.htm)
- **摘要**：微软正在扩大其在中国的人工智能业务，字节跳动预计每年将在微软 AI 和云服务上花费超过 10 亿美元。微软通过 Azure 平台提供 GPT 系列模型访问，成为 OpenAI 模型在中国的主要提供商，而 OpenAI 和 Anthropic 因担心知识产权保护问题基本将服务排除在中国市场之外。
- **为什么重要**：这揭示了中美 AI 产业的复杂互动。微软作为美国公司，通过合规渠道向中国企业提供 AI 服务，形成了独特的“中间人”角色。字节跳动的巨额支出也反映了中国企业对顶级 AI 模型的强劲需求。
- **值得继续跟踪**：微软中国 AI 业务的增长、中国监管政策变化、字节跳动的 AI 战略。

### 12. 余承东重掌华为大模型，鸿蒙 7 迈向智能体时代
- **来源网站**：新浪网
- **原链接**：[新浪网报道](https://news.google.com/rss/articles/CBMickFVX3lxTFB4eGJpQ1ExdUV0Mkx1cnlkamcwMlpmOEpXMHF5Y1A4UUhlOUVDWFR4c3hRUzZkbnRuZTNHTmpDZVU5am5jVVZpZnltcjJXX2FtRTdHNWZqMGF6ejFTWkxJd3RybExqNWFWeE9fSzdSSWRjQQ?oc=5)
- **摘要**：余承东重新执掌华为大模型业务，鸿蒙 7 操作系统将全面迈向智能体（Agent）时代。报道称华为将把 AI Agent 能力深度集成到鸿蒙生态中。
- **为什么重要**：华为是中国最重要的 AI 玩家之一，余承东的回归可能加速华为在 AI Agent 领域的布局。鸿蒙 7 的 Agent 化将影响数亿华为设备用户。
- **值得继续跟踪**：鸿蒙 7 的具体 Agent 功能、华为大模型的技术路线、与小米等竞争对手的差异化。

### 13. Manus 收购案重大转机：传腾讯出手
- **来源网站**：cnBeta
- **原链接**：[cnBeta 报道](https://www.cnbeta.com.tw/articles/tech/1566254.htm)
- **摘要**：据 The Information 报道，爆款通用 Agent 产品 Manus 的早期中国支持者（可能包括腾讯、红杉中国、真格基金）计划出资 20 亿美元（约 135 亿元人民币）向 Meta 回购该公司。此前 Manus 被 Meta 收购。
- **为什么重要**：Manus 是 2025-2026 年最受关注的通用 Agent 产品之一。如果腾讯等中国资本成功回购，将意味着中国资本在 Agent 领域的战略布局，也可能影响全球 Agent 市场的竞争格局。
- **值得继续跟踪**：收购谈判进展、Manus 的未来发展方向、腾讯在 Agent 领域的整体战略。

### 14. 谷歌、微软、英伟达和 GitHub 联合发布 ARD（Agentic Resource Discovery）规范
- **来源网站**：NewsBytes / Search Engine Journal
- **原链接**：[NewsBytes 报道](https://news.google.com/rss/articles/CBMiqgFBVV95cUxQM21lUnNkOFNWeXYtcnp4Z0xSdHpMbk1ZM1R6WWZqZzdPenVBcDRTVEl3T2wtMVN0WjQ3cWhIeC1ZXzY4NlBDZ0dDZG1pMTNaSV9sQ2QtZE43eGRyQjVjNlBXaDAxV1ptX2c0UTBLekF5ZTNxSVZZemxDNS12RWVtWlAxeWhWa19KNW91aFNRT3c4eWkwOXlqV1Y5RnktQXZtcHhNNzk3RDJQZw?oc=5) | [Search Engine Journal 报道](https://news.google.com/rss/articles/CBMimwFBVV95cUxQU3dpcmFvbjB5S1IzWm51dWdBWG1OLTB2RGNUQUVRWkNObGJEbGdlNVllQ21LcXlzVTlJNFZDNFRieWNOb19MeE9teURwdHVtbkRyMmhpaU12YlNtTlRpdWttNzBWWjVRbUtESE5XYzdIQllzMW4wQk5ROWFWa2tTY1FBU3NHYTA0ZVhFbmt0dmdmN1RGYXJadFMtbw?oc=5)
- **摘要**：谷歌、微软、英伟达和 GitHub 联合发布了 ARD（Agentic Resource Discovery）规范草案。该规范旨在解决 Agent 如何发现和调用外部资源（API、工具、数据源）的问题，类似于“Agent 版的 DNS 系统”。
- **为什么重要**：这是行业巨头首次联合制定 Agent 互操作标准。ARD 规范有望解决当前 Agent 生态中“工具发现”的碎片化问题，让 Agent 能够像人类使用搜索引擎一样发现和调用各种资源。
- **值得继续跟踪**：ARD 规范的正式发布、其他厂商的采纳情况、与 MCP（Model Context Protocol）的关系。

### 15. OpenAI 为 ChatGPT 推出统一任务调度中心
- **来源网站**：The Decoder
- **原链接**：[The Decoder 报道](https://the-decoder.com/chatgpt-keeps-creeping-toward-becoming-your-ai-personal-assistant-with-new-scheduled-task-controls/)
- **摘要**：OpenAI 升级了 ChatGPT 的调度功能。新的“Scheduled”页面将所有活跃任务集中管理，用户可查看、暂停、编辑或删除任务。研究任务可搜索网页和已连接应用，仅在内容实际变化时发送提醒。之前的“Pulse”功能被淘汰。
- **为什么重要**：这是 ChatGPT 从“对话工具”向“AI 个人助理”演进的重要一步。统一的任务调度中心让 ChatGPT 能够像 Siri 或 Google Assistant 一样管理用户的定时任务，但具备更强的 AI 理解和执行能力。
- **值得继续跟踪**：该功能的用户使用数据、是否扩展到企业版、与竞争对手（如 Claude、Gemini）的差异化。

---

## 论文与开源项目

### 1. 字节跳动开源 DeerFlow：长时程 SuperAgent 框架
- **来源网站**：GitHub
- **原链接**：[bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- **摘要**：字节跳动开源了 DeerFlow，一个面向长时程任务的 SuperAgent 框架。它集成了沙箱、记忆、工具、技能、子代理和消息网关，能够处理从几分钟到数小时不等的复杂任务。项目已获 7.1 万星。
- **为什么重要**：这是目前最受关注的长时程 Agent 框架之一。DeerFlow 解决了 Agent 在长时间任务中的状态管理、记忆持久化和子任务编排等核心问题，适合需要持续数小时的科研、数据分析、软件开发等场景。
- **值得继续跟踪**：框架的架构设计、与其他长时程 Agent 框架（如 Omnigent）的对比、社区贡献情况。

### 2. VoltAgent/awesome-agent-skills：1000+ Agent 技能集合
- **来源网站**：GitHub
- **原链接**：[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- **摘要**：一个精选的 Agent 技能集合，收录了来自官方开发团队和社区的 1000+ 个 Agent 技能，兼容 Claude Code、Codex、Gemini CLI、Cursor 等主流 Agent 平台。已获 2.5 万星。
- **为什么重要**：Agent 技能生态是 Agent 普及的关键基础设施。这个项目类似于“Agent 技能的 App Store”，让开发者可以快速发现和复用各种技能，大幅降低 Agent 开发门槛。
- **值得继续跟踪**：技能的质量控制机制、与各 Agent 平台的兼容性更新、社区活跃度。

### 3. Omnigent：开源 Agent 框架与元编排器
- **来源网站**：GitHub
- **原链接**：[omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)
- **摘要**：Omnigent 是一个开源 AI Agent 框架和元编排器，可编排 Claude Code、Codex、Cursor、Pi 等 Agent，支持在不重写代码的情况下切换 Agent 引擎，提供策略执行和沙箱功能，支持实时协作。
- **为什么重要**：这是“Agent 的 Agent”概念的重要实现。Omnigent 让用户可以在不同 Agent 之间自由切换和组合，解决了 Agent 生态碎片化问题。适合需要多 Agent 协作的复杂任务。
- **值得继续跟踪**：支持的 Agent 类型扩展、性能表现、企业级功能（如审计、合规）。

### 4. Probe-and-Refine Tuning：编码 Agent 的仓库指南优化
- **来源网站**：arXiv
- **原链接**：[arXiv 论文](https://arxiv.org/abs/2606.20512v1)
- **摘要**：论文提出“探测-精调”方法，用于优化编码 Agent 的仓库级操作知识。研究发现，如何生成 AGENTS.md 指南文件是决定编码 Agent 性能的关键变量。该方法使用合成 bug 来探测和优化指南内容，显著提升 Agent 的代码修复能力。
- **为什么重要**：这是编码 Agent 领域的重要方法论突破。它解决了“给 Agent 写说明书”这个看似简单但实际困难的问题，为提升编码 Agent 在大型代码库中的表现提供了系统化方法。
- **适合谁关注**：编码 Agent 开发者、软件工程团队、AI 辅助编程工具开发者。

### 5. Contagion Networks：多 Agent 系统中的评估偏差传播
- **来源网站**：arXiv
- **原链接**：[arXiv 论文](https://arxiv.org/abs/2606.20493v1)
- **摘要**：论文提出“传染网络”框架，研究多 Agent 系统中评估偏差的传播机制。实验发现，即使使用相同的底层模型，不同评估偏差配置的 Agent 之间也会持续传播偏差（传播系数 0.157-0.352），并识别出三种传播模式。
- **为什么重要**：这是多 Agent 系统安全性的重要研究。它揭示了 Agent 之间的“偏见传染”风险，对多 Agent 协作系统的设计、评估和治理具有重要指导意义。
- **适合谁关注**：多 Agent 系统开发者、AI 安全研究人员、Agent 治理政策制定者。

### 6. AutoPass：编译器性能调优的多 Agent 框架
- **来源网站**：arXiv
- **原链接**：[arXiv 论文](https://arxiv.org/abs/2606.20373v1)
- **摘要**：AutoPass 是一个多 Agent 框架，用于编译器性能调优。它让 LLM Agent 能够查询编译器内部优化状态、分析中间表示，从而更智能地编排编译器选项。实验表明，该方法优于传统的黑盒自动调优方案。
- **为什么重要**：这是 Agent 在系统软件优化领域的突破性应用。传统编译器调优依赖专家经验或暴力搜索，AutoPass 让 Agent 能够“理解”编译器内部工作原理，实现更高效的优化。
- **适合谁关注**：编译器开发者、高性能计算团队、系统软件优化工程师。

### 7. Terminal-Bench-Science：评估 Agent 在真实科研工作流中的表现
- **来源网站**：GitHub
- **原链接**：[harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
- **摘要**：Terminal-Bench-Science 是一个评估 AI Agent 在终端中执行复杂真实科研工作流的基准测试。它包含多个科学领域的实际任务，测试 Agent 在命令行环境中的问题解决能力。
- **为什么重要**：科研自动化是 Agent 最具价值的应用场景之一。该基准填补了科研 Agent 评估的空白，为开发者提供了标准化的测试平台。
- **值得继续跟踪**：基准的覆盖范围扩展、各 Agent 在基准上的表现排名、社区贡献。

### 8. Awesome-Vibe-Research：AI 辅助科研的开放共建仓库
- **来源网站**：GitHub
- **原链接**：[modelscope/Awesome-Vibe-Research](https://github.com/modelscope/Awesome-Vibe-Research)
- **摘要**：由 ModelScope 社区发起的开放共建仓库，收集和沉淀科研全流程中的 Agent、技能、工作流、工具和最佳实践。面向 AI 辅助科研场景，覆盖文献调研、实验设计、数据分析、论文撰写等环节。
- **为什么重要**：这是中国社区在科研 Agent 领域的重要贡献。它类似于“科研 Agent 的维基百科”，为科研人员提供了丰富的 Agent 资源和实践指南。
- **值得继续跟踪**：社区贡献活跃度、与海外类似项目（如 SciLink）的对比、实际科研应用案例。

### 9. NRT-Bench：安全关键系统中 LLM Agent 的多轮红队测试基准
- **来源网站**：arXiv
- **原链接**：[arXiv 论文](https://arxiv.org/abs/2606.20408v1)
- **摘要**：论文提出 NRT-Bench，一个用于安全关键系统中 LLM Agent 的多轮红队测试基准。以模拟核电站控制室为场景，测试 Agent 在持续对抗性攻击下的鲁棒性。实验揭示了 Agent 在安全关键场景中的脆弱性。
- **为什么重要**：这是 Agent 安全评估的重要进展。它将 Agent 安全测试从简单的单轮越狱扩展到多轮对抗，更贴近真实攻击场景。对 Agent 在医疗、工业控制、金融等安全关键领域的部署具有重要参考价值。
- **适合谁关注**：AI 安全研究人员、安全关键系统开发者、监管机构。

### 10. LobeHub：首席 Agent 运营官
- **来源网站**：GitHub
- **原链接**：[lobehub/lobehub](https://github.com/lobehub/lobehub)
- **摘要**：LobeHub 是一个“首席 Agent 运营官”平台，可组织多个 Agent 进行 7×24 小时运营，包括招聘、调度和报告功能。已获 7.8 万星。
- **为什么重要**：这是 Agent 管理平台的重要代表。它解决了“Agent 太多怎么管”的问题，适合需要同时运行多个 Agent 的企业和团队。高星数反映了市场对 Agent 管理工具的强烈需求。
- **值得继续跟踪**：企业级功能（如权限管理、审计日志）、与主流 Agent 的集成、定价模式。

---

## 今日优先阅读排序

1. **Google DeepMind 人才流失与 Anthropic IPO 前布局**（新闻 1）—— 行业格局变化的标志性事件
2. **Google DeepMind AI 控制路线图 + AutoJack 攻击**（新闻 2、3）—— Agent 安全成为行业焦点
3. **OpenAI Codex “录制与回放” + Perplexity Brain**（新闻 4、5）—— Agent 自主能力的重要突破
4. **字节跳动 DeerFlow 开源 + VoltAgent 技能集合**（论文/开源 1、2）—— 开源 Agent 生态爆发
5. **美国对 Anthropic 禁令反转**（新闻 6）—— AI 监管的政治化风险
6. **OpenAI 财务数据**（新闻 7）—— AI 行业“烧钱换增长”模式的关键数据
7. **中国 AI 调用量首超美国 + 微软中国 AI 业务**（新闻 10、11）—— 中美 AI 竞争格局变化
8. **小米 Miloco 2.0 + 腾讯 WorkBuddy**（新闻 8、9）—— 中国 Agent 落地进展
9. **Probe-and-Refine Tuning + Contagion Networks**（论文/开源 4、5）—— Agent 技术前沿研究
10. **ARD 规范 + LobeHub**（新闻 14、论文/开源 10）—— Agent 生态基础设施
