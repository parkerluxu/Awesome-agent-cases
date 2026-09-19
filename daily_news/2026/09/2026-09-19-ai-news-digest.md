# Claude 被用来入侵 OpenAI，AI 编程 Agent 又曝零点击 RCE

日期：2026-09-19

## 今日分享主题：AI 医疗、生物与健康 (ai-healthcare-biotech)

本期关注：关注医疗文档、临床辅助、生物信息学、药物发现、健康管理和科研转化。

阅读提示：论文与开源项目围绕这一主题筛选；新闻栏目保留当天最重要的 AI 产业动态，方便把主题线索放进全局变化里看。

## 今日结论

AI 安全今天不是“未来风险”，而是正在发生的工程事故：WSJ 报道有黑客用 Claude 入侵 OpenAI，四款主流 AI 编程 Agent 被曝零点击 RCE，智谱 ZCode 还被开发者指静默上传完整 Git 历史。产业侧，华为云把灵衢昇腾 950 智算集群推向商用，日冕开物在服务器产线把 POC 成功率做到 99% 以上，医疗 AI 则继续从论文走向工具包、临床编码和药物发现。监管也在收紧：加州推进 AI kill switch，苏格兰暂停 AI 数据中心申请。

---

## 新闻与产业动态

1. **黑客被曝用 Claude 攻入 OpenAI**
   - **来源网站**：WSJ
   - **原链接**：[Exclusive | Hackers Used Anthropic’s Claude to Break Into OpenAI - WSJ](https://news.google.com/rss/articles/CBMikgFBVV95cUxPQmNxc081M1NZa0l1MDZtRG16czdBY2M3X09PVUNCcFUzdS14ZEk1dEdDS0diT2toWlY4VmtMMkNaU1pVVDRaOEpDY0tMRi0zc3dweFpEMWZQOFpPQklqTUcwelZXelBDVXJQWE1GM25BYXgxbHc3ZHBBTk1xV3ViUzloX2s2d0tCd0RLS3lKZmFNdw?oc=5)
   - **摘要**：WSJ 报道称，有黑客借助 Anthropic 的 Claude 对 OpenAI 发起入侵。候选源只给出这一独家标题，具体攻击路径、是否成功、Claude 是被滥用还是存在权限缺陷，目前都没有更多公开细节。但这已经足够刺眼：一家头部 AI 公司的模型，被用来攻击另一家头部 AI 公司。
   - **为什么重要**：这说明模型安全不只是对齐问题，API、Agent 工具链和第三方接入都可能变成攻击基础设施，直接影响所有开放模型的厂商和调用方。
   - **值得继续跟踪**：盯 OpenAI 和 Anthropic 的后续披露，尤其是是否涉及漏洞、滥用政策更新或更严格的 Agent 权限控制。

2. **四款主流 AI 编程 Agent 曝零点击 RCE，两款仍未修补**
   - **来源网站**：helpnetsecurity.com
   - **原链接**：[Zero-click RCE vulnerability hit four major AI coding agents, two remain unpatched - helpnetsecurity.com](https://news.google.com/rss/articles/CBMikAFBVV95cUxNNjBOY1NZcUJQWnIzVGd2dG1mNVRWck5NZzRIaTlJMUdueURmTEJZZXRQbkJrU2ZxUjB3TjJxUnZVTzN6cmRSTmpjcU5MOHVMenNDT3ViNWYtMWM4OXZGNmowMU83dFRlbGZ2WnZHSnpiREJoVmNrR2ZjNFhRMHZZamZCV3h2eTN2dG9SWndscDc?oc=5)
   - **摘要**：候选源显示，一个零点击 RCE 漏洞影响四款主要 AI 编程 Agent，其中两款在报道时仍未修补。开发者只要打开或处理特定内容就可能触发，风险直接落在本地代码、密钥和开发环境。报道没有在摘要里展开所有厂商名单和利用条件，但“零点击”加“未修补”意味着用户不能只靠少点可疑链接来规避。
   - **为什么重要**：编程 Agent 现在能读文件、跑命令、连仓库，漏洞不再只是“聊天窗口被劫持”，而是开发机被接管，直接影响企业私有代码和供应链安全。
   - **值得继续跟踪**：盯厂商补丁和漏洞利用是否在野出现，尤其要看隔离沙箱、命令白名单和密钥保护有没有被真正加强。

3. **智谱 ZCode 被指静默上传完整 Git 历史，开发者重跑取证**
   - **来源网站**：oschina.net
   - **原链接**：[智谱旗下 AI 编程工具 ZCode 被扒静默上传完整 Git 历史](https://www.oschina.net/news/502589)
   - **摘要**：开发者 ferstar 发布取证博客称，登录账号后，智谱的 AI 编程桌面端 ZCode 会在后台静默把整个工作区打包加密上传到阿里云 OSS，包括完整 .git 历史、LFS 大文件缓存、reflog 和全局配置。国内技术圈有人用 Mac 顺着取证路径重跑，结论相似。候选摘要没有给出智谱的完整官方回应，所以要先把它当作待证实的严重指控，而不是最终判决。
   - **为什么重要**：AI 编程工具天然能接触源码和密钥，静默上传一旦坐实，会直接击穿企业对 NDA、私有仓库和合规的底线，影响所有采购这类工具的开发团队。
   - **值得继续跟踪**：等智谱官方回应，并盯上传开关、审计日志、数据保留策略是否透明，以及是否会有第三方安全复现报告。

4. **华为云押注 Agentic Cloud，灵衢昇腾 950 集群 9 月底国内商用**
   - **来源网站**：oschina.net
   - **原链接**：[华为云 All in Agentic Cloud，灵衢昇腾 950 智算集群全球上线](https://www.oschina.net/news/502586/hc-agentic-infra-industry-ai)
   - **摘要**：华为云在全联接大会把主题定成“Agentic Cloud”。CEO 周跃峰的说法是，智能体时代基础设施的核心不再只是给算力，而是“让每一个 Token 更高效”。候选源显示，灵衢昇腾 950 智算集群面向全球服务，今年 9 月 30 日国内商用、11 月 30 日海外商用。具体性能、价格和客户案例还要等商用后的公开数据。
   - **为什么重要**：Agent 应用一旦规模化，瓶颈会从单卡算力转向集群调度、内存和 Token 成本，这直接影响国内云厂商能否接住企业级智能体负载。
   - **值得继续跟踪**：盯商用后的价格、利用率和第三方基准，尤其要看它能不能支撑大规模推理而不是只做展示。

5. **日冕开物超级工站进服务器产线，POC 成功率超 99%**
   - **来源网站**：36氪
   - **原链接**：[最前线｜日冕开物超级工站落地远图产线，POC验证成功率超99%](https://36kr.com/p/3988651090459399?f=rss)
   - **摘要**：日冕开物与远图在东莞智能制造基地展示超级工站真机作业，并成立“远图×日冕工业具身智能联合实验室”。候选源显示，超级工站半个月前完成 POC 验证，成功率超过 99%，现场只用 15 分钟就完成新物料学习与作业切换。服务器制造行业自动化率约 30%，生产和测试环节占全流程约三分之二工时，换型往往意味着专机投入或产线改造。
   - **为什么重要**：具身智能如果只能做单点演示，价值有限；进入 ICT 测试和柔性换线，才可能真正吃掉工时和改线成本，影响服务器制造这类小批量多品种产线。
   - **值得继续跟踪**：盯连续运行稳定性、良率和投资回收期，尤其要看 99% 是短时 POC 还是长时间生产数据。

6. **阿里通义发布 Qwen3.8-Omni-Flash，多模态从理解转向干活**
   - **来源网站**：oschina.net
   - **原链接**：[Qwen3.8-Omni-Flash 发布，阿里通义把多模态押在了“干活”上](https://www.oschina.net/news/502567/qwen-3-8-omni-flash)
   - **摘要**：阿里通义 Qwen 团队发布新一代原生全模态模型 Qwen3.8-Omni-Flash，官方文案主打“耳聪目明，办事得力”。候选摘要强调，这次重点是从理解全模态内容，往规划任务、调用工具并完成创作推。价格信号也很直接：相比上一代 Qwen3.5-Omni-Plus，API 每小时音频输入价格有调整，但候选页面信息截断，具体数值要以官方文档为准。
   - **为什么重要**：多模态模型竞争正从看图和听音频，转向能否直接完成跨模态任务，影响客服、内容、教育和办公工具的产品形态。
   - **值得继续跟踪**：盯 API 价格细则、工具调用稳定性和真实任务通过率，尤其要看它是不是只是“能演示”而不是“能交付”。

7. **OpenAI 推出法律 AI 平台，抢律所工作流**
   - **来源网站**：Reuters
   - **原链接**：[OpenAI launches legal-focused AI platform, escalating race for law firm users - Reuters](https://news.google.com/rss/articles/CBMiwwFBVV95cUxOaklBa3l0bXpJRlZHYW5ZUnM4d0tTRWczT1F1MTByOXk5UFBZYmdHaGFhN1d2VUY3OThBLThkTUxpOGJOQTVadzJEazBvSlNzdm0wTURBaFhyUWh1ZVdScmJWZ3p3NUZSVzBCWkt2UEpxUEJjaUxaN2U2dnFpT1E3Njc3MWRsWFpaZTZjekdlN0tUY1pudndlX081Z3k5VlVnLUVvQlVMQXNiS3RCbXVrbVlRWEQ0Q0ltdkduZC1hbGxUR28?oc=5)
   - **摘要**：路透报道，OpenAI 上线面向法律场景的 AI 平台，争夺律所用户。候选摘要没有展开具体功能和定价，但法律检索、文书起草、尽职调查和合规研究，本来就是生成式 AI 最容易量化工时节省的场景。边界也很清楚：法律工作容错低，引用错误、数据隔离和保密义务都会直接决定律所敢不敢把案件材料放进去。
   - **为什么重要**：法律工作按小时计费、容错低，AI 平台如果能把检索和初稿写进工作流，会直接压缩初级律师和研究岗位的可计费时间，也会改变法律软件市场的竞争格局。
   - **值得继续跟踪**：盯律所采用率、幻觉和引用错误处理，以及有没有出现因 AI 输出错误被处罚的真实案例。

8. **斯坦福报道：虚拟生物科技公司让数千 AI 科学家 Agent 做药物发现**
   - **来源网站**：Stanford Medicine
   - **原链接**：[Virtual biotech company puts thousands of AI scientist agents to work on drug discovery - Stanford Medicine](https://news.google.com/rss/articles/CBMigAFBVV95cUxNRnFHYlZsNzYwS2NwYWtleUtJSC13SUJCTlJQelk4ZFd2OHEydmdPQjB5R2F0ZXl4UWhYS2pjc213S3RPemJaUWQ3bHlGQzlRZlFENUhjZ3hDelBmOGtTbFRfTXlqVHpSSzJnRVl0UXFWMUl6ZXpSd1B3OTU4NnFRMA?oc=5)
   - **摘要**：斯坦福医学院报道称，一家虚拟生物科技公司把数千个 AI 科学家 Agent 投入药物发现工作。候选摘要没有给出具体靶点或临床结果，但描述的是用大量 agent 并行探索、分工协作的研究组织方式。边界同样明显：再多的虚拟实验，最终也要靠湿实验验证；知识产权、数据来源和实验可复现性都会成为下一道门槛。
   - **为什么重要**：药物发现早期最贵的是假设生成和文献交叉验证，agent 集群如果真能减少试错，会改变生技公司的人员和算力预算，也会冲击传统实验科学家的分工。
   - **值得继续跟踪**：盯哪些候选分子进入湿实验、成功率和成本对比，以及这套虚拟组织会不会变成可复制的行业模板。

9. **英矽智能开源 AI 长寿研究工具包，登上《细胞》封面**
   - **来源网站**：Insilico Medicine
   - **原链接**：[《细胞》封面研究：英矽智能联合团队开源AI 长寿研究工具包，以基准测试、专用模型和智能体加速衰老研究 - Insilico Medicine](https://news.google.com/rss/articles/CBMifEFVX3lxTFBOcjRrWDlTTnlqOGJ0RXZ4SEVsbUhVLXc5WmF4OXl3U2hycnktd3dxeHZfWEtBTzRMa0R1YVNneExjQm5FUnFmbG5aUzZrYkVNWlVxdUNJa01JLUNzM3J1U2x5QVo2OXhqMVN4UU9LM2hKUHhRcmdiY0ZEcGY?oc=5)
   - **摘要**：候选源显示，英矽智能联合团队在《细胞》封面研究里开源 AI 长寿研究工具包，包含基准测试、专用模型和智能体，用来加速衰老研究。这个方向把药物发现、生物标志物和健康管理连在一起，工具包开源意味着更多团队可以复现和扩展，而不是各自重复清洗数据、重建评测。
   - **为什么重要**：长寿研究数据分散、终点复杂，开源基准和专用模型能减少重复造轮子，也会影响抗衰老公司和科研机构的研发节奏。
   - **值得继续跟踪**：盯社区复现、数据集更新和是否有临床转化项目接入，尤其要看工具包有没有真实实验验证而不只是论文配套。

10. **加州州长签行政令，推进 AI 独立监督和“kill switch”**
   - **来源网站**：California State Portal | CA.gov
   - **原链接**：[Governor Newsom issues executive order to accelerate independent oversight and advance the creation of an AI kill switch - California State Portal | CA.gov](https://news.google.com/rss/articles/CBMi6wFBVV95cUxNdWNuQ1N2RC1DOTdndklPb2NYbDAwWUx1azRBZjE1R1pCelpZUU9UdEVhNlJUUm9zeDkzcUdTX3laMVU1UkRHaUN5VEY0WWk4S0NuSXNnXzRFMUhVT3RNU3RFWU1PdlowcFFXalMwbHFIR1V6V254c0ZNQ1hkVGFHVnp0Z3BMUzlreFplYTJveHFJZk93Mk5UcUR3cllPT0tGUUdCbU5zbU9rZUp2aWxzTVh2dV9XbXcyWDQ3YUhPdmdJOFhycktnZ1Z3akFwQVhtSUpaRjVRaU9wdUREZm1pNlQ3UXhKa2Uwa2hN?oc=5)
   - **摘要**：加州州长纽森签署行政令，要求加速独立监督，并推进 AI“kill switch”相关工作。候选摘要没有展开适用范围、执行主体和技术标准，但州级政府直接介入前沿 AI 安全机制，已经不只是发原则性文件。对模型公司来说，可中断、可审计、可追责会逐步变成部署前的硬成本。
   - **为什么重要**：如果州政府要求可中断、可审计，AI 公司训练和部署大模型的合规成本会上升，供应商也得准备更细的日志和权限控制。
   - **值得继续跟踪**：盯具体法规文本、是否覆盖开源模型和罚则，以及“kill switch”到底如何测试和触发。

11. **苏格兰议会投票暂停所有 AI 数据中心申请**
   - **来源网站**：digit.fyi
   - **原链接**：[Scottish Parliament Votes to Pause All AI Data Centre Applications - digit.fyi](https://news.google.com/rss/articles/CBMikwFBVV95cUxNbHh3b00wc0M3NmpnNzRJWk9pVEw2MUJJSU9rVlk5NVV0RkpTYlFMVjIwZW9Za2xwTEd2UmRYUWxmaWxFVXJIc0R4eTJZb25VekZiVXFuTXlHMjhuaEZDbUhtTzlBVzlxaEtEb1k4QXhJM0xHcVItOEpnWTRKMEJrMjNQM18xN2RqektxRmExQlJ4b1E?oc=5)
   - **摘要**：候选源显示，苏格兰议会投票决定暂停所有 AI 数据中心申请。此前多地已经围绕电力、水资源和社区负担收紧数据中心审批。暂停时长、豁免条件和后续立法还需确认，但信号很明确：算力扩张不再只是买卡和找地，电力与地方政治正在变成硬约束。
   - **为什么重要**：算力扩张不再只是买卡和找地，电力与地方政治正在变成硬约束，AI 云厂商的选址和交付节奏会被拖慢。
   - **值得继续跟踪**：盯暂停期限、替代选址和英国整体算力政策，尤其要看会不会引发其他地区跟进限制。

12. **Crusoe 融资 39 亿美元，估值 309 亿美元建 AI 工厂**
![配图：Crusoe 融资 39 亿美元，估值 309 亿美元建 AI 工厂](assets/2026-09-19-ai-news-digest/12-crusoe-融资-39-亿美元-估值-309-亿美元建-ai-工厂.jpg)
   - **来源网站**：techcrunch.com
   - **原链接**：[Crusoe raises $3.9B to build massive data centers and small modular ‘AI factories’](https://techcrunch.com/2026/09/17/crusoe-raises-3-9b-to-build-massive-data-centers-and-small-modular-ai-factories/)
   - **摘要**：TechCrunch 报道，数据中心公司 Crusoe 完成 39 亿美元融资，估值 309 亿美元，用于建设大型数据中心和小型模块化“AI 工厂”。候选摘要没有给出项目落地周期和客户名单，但融资额和估值说明，基础设施仍然是这轮 AI 投资里最吸金的环节之一。
   - **为什么重要**：模型公司烧钱买算力，另一批公司靠卖算力和厂房赚钱；这轮融资说明基础设施仍在吸走最大笔资金，也会影响中小 AI 公司的算力租用价格。
   - **值得继续跟踪**：盯融资后开工项目、上架率和能源合同，尤其要看模块化 AI 工厂能不能真正缩短交付周期。

13. **Figure 发布 Helix 2.5，在 30 个未见家庭零样本测试**
   - **来源网站**：unite.ai
   - **原链接**：[Figure Introduces Helix 2.5, Tested Zero-Shot in 30 Unseen Homes - unite.ai](https://news.google.com/rss/articles/CBMijgFBVV95cUxPOWRNakdoZTVLV0liQl9xVF9MU1VWY21tXzRzbEx1WEZPdHQwYU45VmtzeENyWFM1WEZRbXNWcnl0SUw5Q0ozWF8tdkt0dGNhVVJ2dFFZTG83RVlETFNLc0pDZXB3VVAxUzBBX0N3NHVKWkFXNlY5RGVOcndsUDY3dHYtaDlWaEk4WXI5WVF3?oc=5)
   - **摘要**：候选源显示，Figure 推出 Helix 2.5，并在 30 个未见过的家庭环境里做零样本测试。机器人能不能不靠重新训练就适应新家庭，是家庭场景商业化的关键。测试任务复杂度、成功率和安全性没有在摘要中完整展开，所以“零样本”目前只能说明方向，不能直接等同于可量产。
   - **为什么重要**：如果零样本泛化成立，家庭机器人部署成本会从“每个家庭重训”降到“通用策略加少量适配”，这才是规模化的前提。
   - **值得继续跟踪**：盯完整成功率、干预频率和量产时间，尤其要看测试任务是否覆盖真实家务而不是演示动作。

14. **摩根士丹利调查：AI 让裁员 27%、生产率升 9.6%**
   - **来源网站**：Moomoo
   - **原链接**：[Workforce cut by 27%, productivity surges 9.6%! Morgan Stanley’s multinational survey reveals: AI is formally reshaping corporate income statements and headcounts. - Moomoo](https://news.google.com/rss/articles/CBMiogFBVV95cUxOeHB2c0pzTGlXY092Q0RPaDlUR2pkTGNOcThsbGZYTklZQmgtZm5FcFZFRkF3OUNXblhYdW0wUzBncnFNcmxBWm9lSmU4LWdUallwNWxzZm5meU1PRWExS0pjMFI2NFl4X3l2SmQ5LXZrWkx2YmU2RWpPNzV6NlJ5SEtOZy1DSWpCN1N0bC1FNFRzTDhCelAwbDNqcE5XcHZVUnc?oc=5)
   - **摘要**：候选源显示，摩根士丹利一项跨国调查称，AI 应用后 workforce 减少 27%，生产率提升 9.6%。这两个数字如果成立，说明 AI 已经开始进入企业损益表和编制表，而不只是试点项目。调查样本、行业分布和裁员归因还需要看原始报告，但管理层显然会拿这类数据来重新分配人力和预算。
   - **为什么重要**：对管理层来说，这是把 AI 从 IT 预算推到人力预算的信号；对员工来说，重复性岗位和中间层最容易被重新定价。
   - **值得继续跟踪**：盯原始报告细节、哪些岗位减少、生产率提升是否可持续，以及是否出现“利润涨但员工数不涨”的行业样本。

15. **商务部称中国 AI 大模型全球累计下载量突破 100 亿次**
   - **来源网站**：Sohu
   - **原链接**：[商务部：中国人工智能大模型全球累计下载量突破100亿次 - Sohu](https://news.google.com/rss/articles/CBMijAFBVV95cUxOaWhNQUtFY0ZYYU5ueXFoek9rUGlhbF9nLXhFWnpST2xSazFQMmgxQmRXYi02MkJkMmxXS1A3d1JPZXFIaU9ONHhhNGlPRE1sLUVtQ1VyZ3VmU21QUGhaOVJMeHJCeXFVYklDNnNDTXB6QkpTSjZySGNUVkZ2Z1NXbGp1YkV1S0ZVUGtHZA?oc=5)
   - **摘要**：候选源显示，中国商务部在发布会上表示，中国人工智能大模型全球累计下载量突破 100 亿次。这个口径覆盖开源模型、应用和衍生分发，反映的不只是模型能力，还有开发者生态和海外渗透。下载量不等于活跃用户或收入，需要区分模型权重、App 和 SDK，但规模已经足以说明中国模型在海外开发者工作流里的存在感。
   - **为什么重要**：如果下载量规模成立，中国模型正在通过开源和低价 API 进入全球开发者工作流，直接挑战美国闭源模型的默认地位。
   - **值得继续跟踪**：盯活跃调用、海外开发者占比和商业化转化，尤其要区分真实部署和一次性下载。

---

## 论文精选

1. **HPOQuest: A Rare-Disease Diagnostic Agent Using Active Phenotype Acquisition**
   - **来源网站**：arXiv
   - **原链接**：[HPOQuest: A Rare-Disease Diagnostic Agent Using Active Phenotype Acquisition](https://arxiv.org/abs/2609.18431v1)
   - **摘要**：这篇论文提出 HPOQuest，一个不用训练、面向罕见病诊断的序贯表型采集框架。全球有超过 3 亿人受 7000 多种罕见病影响，患者初诊时表型往往不完整，医生很难一次问全。HPOQuest 从少量已知表型出发，维护疾病概率排序，并主动选择信息量更大的后续问题，帮助临床医生在问诊过程中逐步缩小范围。它的价值不在替医生下诊断，而在把罕见病问诊变成可排序、可更新、可解释的流程。
   - **为什么重要**：它会影响罕见病门诊和临床决策支持系统，把医生从“凭经验反复追问”中解放出来，减少漏诊和重复检查成本。
   - **值得继续跟踪**：盯真实门诊里的问诊效率、医生采纳率和误诊率，尤其要看它面对不完整表型时会不会给出过度自信的排序。

2. **LearnActCoder: Role-Aware Error Memory for Adaptive Clinical Coding Agents**
   - **来源网站**：arXiv
   - **原链接**：[LearnActCoder: Role-Aware Error Memory for Adaptive Clinical Coding Agents](https://arxiv.org/abs/2609.19721v1)
   - **摘要**：临床编码 Agent 经常重复犯同一类错：编码不被病历支持、漏掉已记录病况、具体度不够，或者不符合手术编码惯例。这篇论文提出 Learn-Then-Act，在推理阶段用一小批带标签数据把错误转成结构化的 Mistake Knowledge Database，再把假阴性教训交给偏召回的 Coder，假阳性教训交给偏精确的 Judge。LearnActCoder 在 150 个匹配样本上验证了 Coder-Judge 临床编码管线。它瞄准的是医院收入周期里最费人、最易被审计追责的编码环节。
   - **为什么重要**：它会影响医院编码、账单和合规团队，减少人工复核成本，同时降低因编码错误被拒付或审计罚款的风险。
   - **值得继续跟踪**：盯不同医院编码规则迁移和真实拒付率，尤其要看错误记忆能不能跨病种、跨机构复用。

3. **CliniCIRCA: A Modular LLM Framework for Constructing Longitudinal Mental Health Patient Journeys from Raw EHR Narratives**
   - **来源网站**：arXiv
   - **原链接**：[CliniCIRCA: A Modular LLM Framework for Constructing Longitudinal Mental Health Patient Journeys from Raw EHR Narratives](https://arxiv.org/abs/2609.19585v1)
   - **摘要**：心理健康临床医生要理解患者旅程，但这些生物、心理和社会事件往往散落在不同时间、不同格式的非结构化出院记录里，事件级时间戳还经常缺失。这篇论文提出 CliniCIRCA，一个多阶段 LLM 框架，用于日历锚定、容忍不精确性的临床编年史重建。作者从 14882 份 MIMIC-III 心理健康入院记录里构建基准，尝试把没有时间戳的临床事件按时间分类。它解决的是病历时间线重建问题，而不是再做一个通用问答机器人。
   - **为什么重要**：它会影响精神科、临床研究和病历摘要工作流，减少医生翻找历史记录时间，也让纵向研究更容易获得可比较的时间线。
   - **值得继续跟踪**：盯多中心 EHR 上的时间准确率和隐私合规，尤其要看模型对缺失时间戳的推断会不会引入新的临床偏差。

4. **Information Set Emulation: Causal Certificates for AI Derived EHR Features**
   - **来源网站**：arXiv
   - **原链接**：[Information Set Emulation: Causal Certificates for AI Derived EHR Features](https://arxiv.org/abs/2609.17777v1)
   - **摘要**：AI 和 LLM 能从电子健康记录里提取有临床意义的特征，但预测有用不等于可以拿来做因果推断。这篇论文提出 Information Set Emulation，给 AI 提取的特征附加来源证据、临床和记录时间、决策时可用性、表示版本、拟议因果角色和未解决歧义，并在锁定的目标试验框架下生成因果证书。无法确定下游角色的特征会被路由到兼容的报告或单独分析。它要解决的是医疗 AI 从“预测准”走向“能不能用于决策和监管”的合规鸿沟。
   - **为什么重要**：它会影响医疗 AI 监管、因果推断和 EHR 研究团队，让医院能判断一个 AI 特征到底能不能用于治疗决策，而不是只看 AUC。
   - **值得继续跟踪**：盯真实医院部署中的证书审计和监管采信，尤其要看它能否减少“模型预测很强但不能解释因果”的采购争议。

5. **Bridging Modalities on the Cortex: Surface-based MRI to PET Translation with a Diffusion Bridge**
   - **来源网站**：arXiv
   - **原链接**：[Bridging Modalities on the Cortex: Surface-based MRI to PET Translation with a Diffusion Bridge](https://arxiv.org/abs/2609.20147v1)
   - **摘要**：FDG-PET 是痴呆诊断里很敏感的代谢生物标志物，但成本高、有辐射、可及性有限。这篇论文提出 DB-SUiT，一个基于表面皮层的扩散桥框架，直接把 MRI 翻译成 PET，而不是在体积空间里做生成。它显式考虑高度折叠的皮层几何，因为疾病相关模式主要落在这层结构上。如果 MRI 到 PET 的转换足够可靠，部分患者可能减少对 PET 的依赖，但临床采用前必须验证定量准确性和不同扫描仪之间的泛化。
   - **为什么重要**：它会影响痴呆诊断、影像可及性和检查成本，尤其对没有 PET 设备的基层医院，可能意味着更早获得代谢信息。
   - **值得继续跟踪**：盯多中心验证和临床决策影响，尤其要看生成的 PET 是否足以支持治疗分组而不只是视觉相似。

6. **Reporting Practice Matters: The Impact of Reference Choice on Chest X-ray Report Evaluation**
   - **来源网站**：arXiv
   - **原链接**：[Reporting Practice Matters: The Impact of Reference Choice on Chest X-ray Report Evaluation](https://arxiv.org/abs/2609.19093v1)
   - **摘要**：同一张胸片、同一组临床发现，不同放射科医生写出来的报告可能在术语、缩写、格式和详细程度上完全不同。这篇论文量化了这种报告习惯差异对 AI 放射报告生成评估指标的影响。现有 RRG 模型通常拿机器生成报告和人类参考报告比一致性，但如果参考本身风格差异很大，指标就会把“写法不同”误判成“临床错误”。它提醒医院和厂商：评估 AI 报告生成之前，先要处理参考标准的选择问题。
   - **为什么重要**：它会影响放射 AI 的评估、采购验收和监管提交，避免厂商用单一参考报告刷高分，却在实际临床中频繁被医生判定为“说了但没说清”。
   - **值得继续跟踪**：盯更鲁棒的评估协议和临床终点关联，尤其要看指标改进能否转化为医生读片时间和漏诊率下降。

7. **Prepared Or Unprepared? Evaluating Healthcare Workforce Readiness for Clinical Adoption of Artificial Intelligence in Nigeria**
   - **来源网站**：arXiv
   - **原链接**：[Prepared Or Unprepared? Evaluating Healthcare Workforce Readiness for Clinical Adoption of Artificial Intelligence in Nigeria](https://arxiv.org/abs/2609.19096v1)
   - **摘要**：这篇论文调查尼日利亚 761 名不同学科和执业场景的医护人员，评估他们对医疗 AI 的认知、态度、准备度和采用障碍。结果显示，AI 在医疗中的总体认知度很高，达到 92.6%，但客观准备度、培训和支持条件仍然是短板。研究数据收集于 2025 年 12 月到 2026 年 3 月。它把“医疗 AI 落地”从模型能力问题拉回到人、流程和基层基础设施问题，对中低收入国家的部署尤其有参考价值。
   - **为什么重要**：它会影响医疗 AI 培训、政策制定和医院采购，提醒厂商只卖模型不够，必须配套培训、流程改造和基础设施支持。
   - **值得继续跟踪**：盯干预后准备度变化和真实临床采用率，尤其要看高认知度能不能转化为持续使用而不是一次性试点。

8. **ERCPMP-Gx: Endoscopic Image and Video Dataset for Morphological, Histopathological, and Genomic Characterization of Colorectal Polyposis**
   - **来源网站**：arXiv
   - **原链接**：[ERCPMP-Gx: Endoscopic Image and Video Dataset for Morphological, Histopathological, and Genomic Characterization of Colorectal Polyposis](https://arxiv.org/abs/2609.20815v1)
   - **摘要**：遗传性息肉病综合征可能是结直肠癌的前驱病变，但公开内镜数据集大多围绕单个散发性息肉，很少把患者层面的息肉病表型、组织病理和胚系基因发现连起来。这篇论文发布 ERCPMP-Gx，一个内镜、组织病理和基因组多模态数据集，用来支持相关研究和分类。它的价值不在算法本身，而在提供真实临床数据底座，让 AI 模型有机会学习表型、病理和基因之间的对应关系。
   - **为什么重要**：它会影响结直肠癌早筛、遗传病管理和多模态医学 AI 研究，补上罕见息肉病缺少患者级标注数据的缺口。
   - **值得继续跟踪**：盯数据开放许可、后续模型基准和临床分类性能，尤其要看数据集能否推动遗传筛查路径优化。

9. **DrugReason: Dynamic Multi-View Reasoning over Knowledge Graph and Language Evidence for Drug Repurposing**
   - **来源网站**：arXiv
   - **原链接**：[DrugReason: Dynamic Multi-View Reasoning over Knowledge Graph and Language Evidence for Drug Repurposing](https://arxiv.org/abs/2609.06779v1)
   - **摘要**：药物重定位要在巨大的候选药物-疾病对里找真正有治疗关系的那几个，而背后往往是多跳生物机制。这篇论文提出 DrugReason，把知识图谱里的结构化生物医学证据和语言证据结合起来，做动态多视角推理。和只靠知识图谱或只靠 LLM 的方法相比，它试图同时保留可追溯的多跳路径和文献里的语义线索。对药企和临床研究团队来说，这类系统如果能减少人工筛选，就能压缩早期验证前的文献工作。
   - **为什么重要**：它会影响药企药物重定位和临床前研究团队，减少人工文献筛选成本，把有限实验资源集中到更可能成立的候选上。
   - **值得继续跟踪**：盯湿实验验证、真实药企管线采用，尤其要看推理路径能否被生物学家复核而不是黑箱排序。

10. **FAR-DPO: Feasibility-Aware and Robust Direct Preference Optimization for Cyclic Peptide Design**
   - **来源网站**：arXiv
   - **原链接**：[FAR-DPO: Feasibility-Aware and Robust Direct Preference Optimization for Cyclic Peptide Design](https://arxiv.org/abs/2608.19808v1)
   - **摘要**：环肽因为高结合亲和力和结构稳定性，被视为有前景的药物分子骨架，但环化会急剧收窄可行设计空间，训练数据又少，现有方法常靠零样本生成或事后过滤，导致可行设计产率低、多目标权衡难控制。这篇论文提出 FAR-DPO，把可行性和鲁棒性纳入直接偏好优化，用于环肽设计。它不是单纯刷指标，而是针对药物发现里“生成出来但做不出来、性质不平衡”的真实痛点。
   - **为什么重要**：它会影响多肽药物设计和实验合成团队，减少无效生成和事后筛选成本，让 AI 设计更接近可合成的候选分子。
   - **值得继续跟踪**：盯湿实验合成率、靶点结合数据和开源实现，尤其要看可行率提升能不能在真实实验室复现。

---

## 开源项目精选

1. **k-dense-ai/scientific-agent-skills**
![配图：k-dense-ai/scientific-agent-skills](assets/2026-09-19-ai-news-digest/26-k-dense-ai-scientific-agent-skills.png)
   - **来源网站**：GitHub
   - **GitHub Star**：45587
   - **原链接**：[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
   - **摘要**：这个项目把 AI Agent 变成科研助手，提供 165 个经过验证的技能和 100 多个科学数据库，覆盖生物、化学、医学和药物发现。它兼容 Cursor、Claude Code、Codex、Pi、Antigravity 等，目标用户是每天要查文献、跑分析、整理实验数据的科研人员。候选摘要称已有 19 万以上科学家使用。它解决的是科研 agent 缺工具、缺数据库接口、缺可复用技能的问题。
   - **为什么重要**：它直接影响生物、化学和药物发现团队，把文献检索、数据分析和专业数据库调用封装成可复用技能，减少科研人员重复写脚本的时间。
   - **值得继续跟踪**：盯技能库更新、数据库覆盖和真实论文复现案例，尤其要确认这些技能在跨领域任务里是否可靠。

2. **maziyarpanahi/openmed**
![配图：maziyarpanahi/openmed](assets/2026-09-19-ai-news-digest/27-maziyarpanahi-openmed.png)
   - **来源网站**：GitHub
   - **GitHub Star**：5343
   - **原链接**：[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed)
   - **摘要**：openmed 主打本地优先的医疗 AI，提供临床命名实体识别和 HIPAA PII 去标识化，强调 100% 在设备上运行。候选源显示，它覆盖 2200 多个医疗模型、21 种语言，支持 Apple MLX 和 Python，Apache-2.0 许可。对医院、诊所和医疗软件厂商来说，最大卖点是患者数据不出网络，适合先做脱敏、信息抽取和合规预处理。
   - **为什么重要**：它会影响医院、诊所和医疗软件厂商，在不把患者数据送出网络的前提下完成临床文本处理，降低合规和泄露风险。
   - **值得继续跟踪**：盯多语言临床 NER 准确率、HIPAA 去标识化召回率，以及端侧模型在真实病历上的性能衰减。

3. **nicedreamzapp/claude-code-local**
![配图：nicedreamzapp/claude-code-local](assets/2026-09-19-ai-news-digest/28-nicedreamzapp-claude-code-local.png)
   - **来源网站**：GitHub
   - **GitHub Star**：3321
   - **原链接**：[nicedreamzapp/claude-code-local](https://github.com/nicedreamzapp/claude-code-local)
   - **摘要**：这个项目让 Claude Code 在 Apple Silicon 上 100% 本地运行，提供 MLX 原生的 Anthropic API 服务器，候选源列出 Muse-Glimmer 30B、Gemma 4 31B、Qwen 3.5 122B、DeepSeek V4 Flash 等模型。它明确面向 NDA、法律和医疗工作流，强调隐私、离线、气隙环境。对不能把代码或患者数据发到云端的团队，这是把编码 Agent 留在本机的一条路径。
   - **为什么重要**：它会影响法律、医疗和 NDA 约束下的开发团队，让编码 Agent 在离线环境里也能用，减少敏感代码和患者数据外泄风险。
   - **值得继续跟踪**：盯本地模型的实际代码能力、资源占用和更新速度，尤其要看它能否在气隙环境里稳定跑复杂仓库。

4. **nvidia-bionemo/bionemo-recipes**
   - **来源网站**：GitHub
   - **GitHub Star**：857
   - **原链接**：[NVIDIA-BioNeMo/bionemo-recipes](https://github.com/NVIDIA-BioNeMo/bionemo-recipes)
   - **摘要**：BioNeMo Recipes 是英伟达为药物发现提供的模型构建和适配配方库，基于 PyTorch、GPU 和机器学习工具链。它不是单一模型，而是把大规模生物分子模型训练、微调和部署的 recipe 集中起来，方便药企和生物团队在自有数据上改造基础模型。对想用生成式模型做靶点、分子或蛋白研究的团队，这类 recipe 能减少从零搭训练管线的时间。
   - **为什么重要**：它会影响药企和生物团队，把大规模生物分子模型训练和微调流程标准化，减少从零搭 GPU 训练管线的时间和算力浪费。
   - **值得继续跟踪**：盯配方覆盖的模型种类、更新频率和真实药企案例，尤其要看它能否适配非英伟达硬件。

5. **jaechang-hits/sciagent-skills**
![配图：jaechang-hits/sciagent-skills](assets/2026-09-19-ai-news-digest/30-jaechang-hits-sciagent-skills.png)
   - **来源网站**：GitHub
   - **GitHub Star**：365
   - **原链接**：[jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - **摘要**：这个项目提供 197 个生物信息学和生命科学技能，面向 Claude Code 和 AI Agent，覆盖 RNA-seq、单细胞、药物发现、蛋白质组学等。候选源称其在 BixBench 上达到 92.0% 准确率，并支撑 OmicsHorizon。它适合做组学分析的团队，把常见生信流程封装成 agent 可调用的技能，减少每次分析都重新写脚本和查参数。
   - **为什么重要**：它会影响生信分析和组学研究团队，把 RNA-seq、单细胞等高频流程变成可调用技能，降低分析门槛和重复劳动。
   - **值得继续跟踪**：盯 BixBench 成绩能否在真实数据集复现，以及技能库对版本变化和参数错误的处理能力。

6. **yorkeccak/bio**
![配图：yorkeccak/bio](assets/2026-09-19-ai-news-digest/31-yorkeccak-bio.png)
   - **来源网站**：GitHub
   - **GitHub Star**：349
   - **原链接**：[yorkeccak/bio](https://github.com/yorkeccak/bio)
   - **摘要**：yorkeccak/bio 是一个开源生物 AI 助手，用自然对话访问学术文献、临床试验、药物标签等资源。它面向药物设计、药物发现和医疗 AI 场景，把分散在多个数据库里的信息拉到统一对话界面。对研究人员来说，价值在于更快做文献和临床证据初筛；边界在于引用溯源和结果准确性仍需人工复核。
   - **为什么重要**：它会影响药物发现和临床研究人员的文献调研流程，把分散数据库的检索压缩到一次对话里，减少早期证据收集时间。
   - **值得继续跟踪**：盯数据源覆盖、引用可追溯性和真实研究场景中的错误率，尤其要防止把药物标签信息误读为临床结论。

7. **fedbiomed/fedbiomed**
![配图：fedbiomed/fedbiomed](assets/2026-09-19-ai-news-digest/32-fedbiomed-fedbiomed.png)
   - **来源网站**：GitHub
   - **GitHub Star**：93
   - **原链接**：[fedbiomed/fedbiomed](https://github.com/fedbiomed/fedbiomed)
   - **摘要**：FedBioMed 是一个面向生物医学研究的协作学习框架，强调联邦、隐私、安全和多中心数据 science。医院和科研机构可以在不共享原始患者数据的前提下联合训练模型，适合临床、生物医学和医疗影像等敏感数据场景。它解决的是医疗 AI 最现实的数据孤岛问题：数据不能出院，但模型需要多中心样本。
   - **为什么重要**：它会影响医院和科研机构，让多中心医疗 AI 在不共享原始患者数据的情况下联合建模，降低隐私合规障碍。
   - **值得继续跟踪**：盯真实多中心项目、通信效率和隐私攻击测试，尤其要看它能否在临床级数据上稳定运行。

8. **awslabs/hcls-agent-skills**
![配图：awslabs/hcls-agent-skills](assets/2026-09-19-ai-news-digest/33-awslabs-hcls-agent-skills.png)
   - **来源网站**：GitHub
   - **GitHub Star**：42
   - **原链接**：[awslabs/hcls-agent-skills](https://github.com/awslabs/hcls-agent-skills)
   - **摘要**：这是 AWS 实验室开源的医疗和生命科学 agent 技能库，候选源显示包含 42 个技能，覆盖医疗编码、风险调整、理赔分析、质量指标、基因组学、影像和药物发现等 13 个 HCLS 领域。它适合医疗支付、医院运营和生命科学团队，把行业流程封装成可调用的 agent 能力。对做合规和收入周期的组织尤其值得看。
   - **为什么重要**：它会影响医疗支付、医院运营和生命科学团队，把编码、理赔、质量指标等流程变成 agent 技能，减少人工规则维护成本。
   - **值得继续跟踪**：盯技能与真实医保规则的同步频率，以及医院在审计场景下能不能采信这些 agent 输出。

9. **yulianuzhnenko/bioinformatics-agent-skills**
![配图：yulianuzhnenko/bioinformatics-agent-skills](assets/2026-09-19-ai-news-digest/34-yulianuzhnenko-bioinformatics-agent-skills.png)
   - **来源网站**：GitHub
   - **GitHub Star**：9
   - **原链接**：[YuliaNuzhnenko/bioinformatics-agent-skills](https://github.com/YuliaNuzhnenko/bioinformatics-agent-skills)
   - **摘要**：这个项目收集面向生物信息学、基因组学、药物发现和多组学的科学 AI Agent 技能、工具规范和提示协议，兼容 Cursor、Claude Code、Antigravity 和 LangChain。候选源称它是排名第一的开源科学 agent 技能集合，但 Star 数还很低。它更适合想快速拼装生信 agent 工作流的开发者做参考，而不是直接当作成熟生产工具。
   - **为什么重要**：它会影响生信工具开发者和早期 agent 工作流搭建者，提供可参考的技能规范，减少从零设计提示和工具接口的时间。
   - **值得继续跟踪**：盯项目是否持续更新、技能是否经过真实数据验证，以及低 Star 阶段是否存在质量参差问题。

10. **ajones1923/hcls-ai-factory**
![配图：ajones1923/hcls-ai-factory](assets/2026-09-19-ai-news-digest/35-ajones1923-hcls-ai-factory.png)
   - **来源网站**：GitHub
   - **GitHub Star**：5
   - **原链接**：[ajones1923/hcls-ai-factory](https://github.com/ajones1923/hcls-ai-factory)
   - **摘要**：hcls-ai-factory 定位在 NVIDIA DGX Spark 上的医疗与生命科学 AI 工厂，覆盖精准医疗、药物发现、基因组学、临床决策支持和 RAG。它把生物信息、临床决策和药物发现放在一个本地平台里，适合想在院内或实验室内跑私有 AI 的团队。Star 数很低，当前更像早期蓝图和集成示例，价值在于展示私有医疗 AI 栈可以怎样搭。
   - **为什么重要**：它会影响想在院内或实验室内搭建私有 AI 的医疗和生命科学团队，提供一个从精准医疗到药物发现的集成参考，减少选型时间。
   - **值得继续跟踪**：盯项目是否进入可部署状态、是否补充真实医院案例，以及 DGX Spark 之外的硬件适配情况。

---

## 今日优先阅读排序

1. 智谱 ZCode 被指静默上传完整 Git 历史
2. 四款主流 AI 编程 Agent 曝零点击 RCE，两款仍未修补
3. WSJ：黑客用 Claude 入侵 OpenAI
4. 日冕开物超级工站进服务器产线，POC 成功率超 99%
5. 华为云灵衢昇腾 950 集群 9 月底国内商用
6. HPOQuest、LearnActCoder、CliniCIRCA 等医疗 Agent 论文
7. K-Dense-AI/scientific-agent-skills 与 maziyarpanahi/openmed
8. 加州推进 AI kill switch 行政令
