# 高热度 AI Agent 项目与教程调研

调研日期：2026-06-13  
筛选口径：优先选择 GitHub star 较高、README 明确涉及 AI agent / multi-agent / agentic workflow、并能映射到行业应用或教程学习的项目。Star 数为调研时 GitHub 页面显示的近似值，后续会波动。

## 快速结论

AI Agent 生态目前大致分成四类：

1. 可视化/平台型：适合企业快速搭建客服、知识库问答、内容生产、内部流程自动化，例如 Dify、Flowise、AutoGPT。
2. 编程框架型：适合开发者做可控的多 Agent 编排、工具调用、长期运行任务，例如 CrewAI、LangGraph、MetaGPT、CAMEL。
3. 软件工程 Agent：最成熟的落地方向之一，集中在自动修 issue、代码生成、测试、漏洞挖掘，例如 OpenHands、SWE-agent。
4. 教程/案例库：适合快速学习和复刻到行业场景，例如 Microsoft AI Agents for Beginners、GenAI_Agents、ottomator-agents。

## 重点项目清单

| 项目 | Star | 类型 | 适合行业/场景 | 亮点 | 链接 |
|---|---:|---|---|---|---|
| AutoGPT | 185k | Agent 平台 / 自主任务执行 | 市场调研、内容生产、社媒自动化、工作流自动化 | 早期爆火的自主 Agent 项目，现在 README 定位为创建、部署和管理持续运行的 AI agents；提供 Agent Builder、工作流管理、部署控制、预置 Agent 等能力 | https://github.com/Significant-Gravitas/AutoGPT |
| Dify | 145k | LLM 应用与 agentic workflow 平台 | 企业知识库、客服、内部工具、数据问答、业务流程集成 | 开源 LLM app 平台，结合 AI workflow、RAG、agent、模型管理和可观测性；支持 50+ Agent 工具，如搜索、图像生成、WolframAlpha | https://github.com/langgenius/dify |
| browser-use | 98.5k | 浏览器 Agent / 网页自动化 | 电商下单、表单填写、招聘投递、网页数据采集、个人助理 | 让 Agent 操作真实浏览器；README 示例包括填写求职申请、Instacart 购物、查找 PC 配件等 | https://github.com/browser-use/browser-use |
| OpenHands | 76.6k | 软件工程 Agent 平台 | 软件开发、代码维护、企业研发效能、自动化修复 | 提供 SDK、CLI、本地 GUI、Cloud/Enterprise；Agent 可写代码、跑命令、浏览网页，适合类 Devin/Codex 的研发场景 | https://github.com/OpenHands/OpenHands |
| MetaGPT | 68.8k | 多 Agent 软件公司框架 | 软件研发、产品原型、需求到代码流程 | “First AI Software Company” 思路，把产品经理、架构师、工程师等角色拆成协作 Agent，并用 SOP 降低混乱 | https://github.com/FoundationAgents/MetaGPT |
| Microsoft AI Agents for Beginners | 67.1k | 教程课程 | Agent 入门、企业培训、教学 | 12+ 课体系化学习 Agent：工具调用、Agentic RAG、多 Agent、生产部署、协议、记忆、安全等，并含代码样例 | https://github.com/microsoft/ai-agents-for-beginners |
| AutoGen | 58.9k | 多 Agent 编程框架 | 研究原型、自动化助手、多 Agent 协作 | 微软多 Agent 框架，支持 autonomous 或 human-in-the-loop；注意 README 显示 AutoGen 已进入维护模式，新用户建议看 Microsoft Agent Framework | https://github.com/microsoft/autogen |
| Flowise | 53.5k | 可视化 Agent 构建器 | 非技术团队、企业 PoC、客服/知识库/自动化流程 | 口号是 “Build AI Agents, Visually”，支持 npm 或 Docker 快速启动，适合用画布方式搭 Agent | https://github.com/FlowiseAI/Flowise |
| CrewAI | 53.4k | 多 Agent 自动化框架 | 业务流程自动化、调研、旅行规划、金融分析、招聘 | Python 框架，强调 Crews 与 Flows；README 示例包含 job description、trip planner、stock analysis | https://github.com/crewAIInc/crewAI |
| LangGraph | 34.6k | 状态化 Agent 编排框架 | 复杂客服、金融风控、运营流程、长期任务 | LangChain 生态的低层编排框架，面向 long-running、stateful agents；支持 durable execution、human-in-the-loop、memory、部署 | https://github.com/langchain-ai/langgraph |
| ChatDev | 33.4k | 多 Agent 软件开发框架 | 软件开发教学、自动生成小型应用、团队协作模拟 | ChatDev 2.0 定位为 “Dev All through LLM-powered Multi-Agent Collaboration”，偏软件开发流程自动化 | https://github.com/OpenBMB/ChatDev |
| awesome-ai-agents | 28.3k | 资源清单 | 选型、竞品调研、生态扫描 | E2B 维护的 autonomous agents 列表，适合作为继续发现项目的入口 | https://github.com/e2b-dev/awesome-ai-agents |
| GenAI_Agents | 22.5k | 教程与实现合集 | 教育、客服、合同审查、旅行规划、项目管理、内容创作 | 50+ Agent 教程/实现；README 明确列出 customer support、contract analysis、travel planning、project manager、E2E testing 等案例 | https://github.com/NirDiamant/GenAI_Agents |
| SWE-agent | 19.5k | 软件工程 / 安全 Agent | GitHub issue 修复、代码维护、CTF/安全研究、竞赛编程 | 可让模型自动修真实 GitHub repo 的 issue，也可用于 offensive cybersecurity；README 提醒当前重点转向 mini-SWE-agent | https://github.com/SWE-agent/SWE-agent |
| CAMEL | 17.2k | 多 Agent 研究框架 | 数据生成、任务自动化、世界模拟、科研 | 关注 agent scaling law，支持大规模多 Agent、状态记忆、工具集成、模拟环境和 cookbooks/usecases | https://github.com/camel-ai/camel |
| ottomator-agents | 5.6k | 行业 Agent 案例库 | 房地产、农业、发票处理、获客、餐厅预订、RAG、内容创作 | 收集 oTTomator Live Agent Studio 上的开源 Agent；目录里有 real estate、indoor farming、intelligent invoicing、lead generator 等具体行业样例 | https://github.com/coleam00/ottomator-agents |

## 按行业/场景推荐

### 1. 软件开发与研发效能

优先看 OpenHands、SWE-agent、MetaGPT、ChatDev、AutoGPT。

这些项目适合做：自动修 GitHub issue、生成 PR、写测试、自动调试、从需求生成原型、模拟软件团队分工。OpenHands 更像完整研发 Agent 平台；SWE-agent 更适合研究和自动修复任务；MetaGPT/ChatDev 更适合“多角色协作生成软件”的流程实验。

### 2. 客服、知识库与企业内部助手

优先看 Dify、Flowise、LangGraph、CrewAI、GenAI_Agents。

Dify 和 Flowise 上手快，适合 PoC 和业务团队参与；LangGraph 更适合做复杂状态机、审批、人类介入、长期会话；GenAI_Agents 里有 Customer Support Agent，可直接学习分类、情绪识别、知识检索等模式。

### 3. 市场、内容与社媒运营

优先看 AutoGPT、CrewAI、GenAI_Agents、ottomator-agents。

AutoGPT README 示例包含从 Reddit 热点生成短视频、从 YouTube 视频提取高光语录并发布社媒；GenAI_Agents 有 Content Intelligence、Business Meme Generator；ottomator-agents 有 LinkedIn/X/Blog 内容创作类 Agent。

### 4. 教育与科研

优先看 GenAI_Agents、CAMEL、Microsoft AI Agents for Beginners、LangGraph。

GenAI_Agents 包含 ATLAS academic task system、scientific paper agent、Feynman learning agent；CAMEL 适合多 Agent 研究、数据生成和模拟；微软课程适合系统入门和团队培训。

### 5. 法务、合规与合同分析

优先看 GenAI_Agents、LangGraph、Dify。

GenAI_Agents 明确有 Contract Analysis Assistant，覆盖条款分析和合规检查。落地时建议用 LangGraph/Dify 做人工审核节点、检索证据链、日志留存和权限控制。

### 6. 旅游、电商与个人助理

优先看 browser-use、CrewAI、GenAI_Agents。

browser-use 适合真实网页操作，如下单、填表、查信息；CrewAI 和 GenAI_Agents 都有旅行规划类案例。若要接生产系统，建议先从低风险任务开始，例如生成行程、比价、填草稿，而不是直接支付。

### 7. 房地产、农业、餐饮、财务票据等垂直行业

优先看 ottomator-agents、Dify、Flowise。

ottomator-agents 的目录本身就包含 Bali/Gilbert real estate、indoor farming、restaurant booking、intelligent invoicing、lead generator 等更贴近行业的开源 Agent。它的 star 不如框架类项目高，但行业参考价值更强。

## 学习与落地路线

1. 入门学习：先看 Microsoft AI Agents for Beginners，建立工具调用、RAG、多 Agent、记忆、安全、生产部署等基本概念。
2. 快速做业务 PoC：用 Dify 或 Flowise 先搭客服/知识库/流程自动化，验证业务价值。
3. 需要复杂编排：选 LangGraph 或 CrewAI。LangGraph 更偏状态化、长流程、生产可控；CrewAI 更偏角色分工和任务协作。
4. 需要网页操作：用 browser-use 做浏览器自动化，但要注意登录态、验证码、风控和合规。
5. 研发效能方向：试 OpenHands 或 SWE-agent；如果是软件团队角色协作实验，试 MetaGPT/ChatDev。
6. 找行业案例：从 GenAI_Agents 和 ottomator-agents 挑具体案例复刻，再迁移到自己的数据、工具和审批流程。

## 风险与选型提醒

- Star 代表关注度，不等于生产成熟度；有些项目可能因早期热度很高但维护节奏变化。
- AutoGen README 已提示维护模式，新项目更建议关注 Microsoft Agent Framework 方向。
- SWE-agent README 建议新用户考虑 mini-SWE-agent。
- 浏览器 Agent、自动支付、自动发帖、自动投递等场景要特别注意账号安全、平台条款、反爬/风控、人工确认。
- 法务、医疗、金融等高风险行业必须保留证据链、权限控制、人工审核和可观测日志。

## 后续可继续深挖的方向

- 为每个行业整理“可复刻 Demo + 技术栈 + 数据输入 + 预期 ROI”。
- 针对中文场景筛选支持国内模型、私有化部署、企业微信/飞书/钉钉集成的 Agent 项目。
- 将上述项目按许可证、部署难度、生产可观测性、权限管理、工具生态做二次评分。
