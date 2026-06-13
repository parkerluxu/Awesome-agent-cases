# 音乐生成：AI Agent 实战案例、教程与科研项目调研

调研日期：2026-06-13

音乐生成方向要区分两类：一类是 Suno、Udio、Stable Audio 等“直接生成音乐”的模型/产品；另一类是 AI Agent，把作词、作曲、编曲、音色转换、音乐理解、检索、评价、MV 生成等工具串起来。本文重点关注后者，同时记录可复刻的创作工作流。

## 结论速览

AI Agent 在音乐生成中最适合做：

- 歌词创作和多版本改写。
- 风格/情绪/结构规划。
- 调用音乐生成模型。
- 音频分析、分类、转调、分离。
- 为视频自动配乐。
- 生成 MV 分镜。
- 管理多个音乐工具。

不适合完全交给 Agent：

- 商业发行前的版权判断。
- 模仿特定在世歌手声音。
- 未授权声音克隆。
- 高质量混音母带。
- 法律风险较高的相似旋律判断。

## 博主/开发者教程与心得

### 1. Suno/Udio + Claude/ChatGPT 的歌曲创作工作流

资料类型：创作者常见实践归纳  
代表工具：Claude、ChatGPT、Suno、Udio、DAW

很多博主的音乐 AI 工作流不是让一个 Agent 一步到位，而是：

- 用 Claude/ChatGPT 写主题、歌词、风格说明。
- 把歌词和风格 prompt 放入 Suno/Udio。
- 多次生成不同版本。
- 选出旋律和人声较好的版本。
- 用 DAW 或音频工具做剪辑、混音、降噪。
- 再让 AI 生成封面、MV 分镜和宣发文案。

推荐提示：

```text
请写一首 90 秒中文流行歌歌词。
主题：独立开发者深夜发布产品
情绪：克制、温暖、有一点电子感
结构：Verse / Pre-Chorus / Chorus / Bridge
避免直白口号，副歌要容易记
同时给出 Suno/Udio 风格提示词
```

使用心得：

- 歌词要先由 LLM 打磨，再交给音乐模型。
- 不要一次追求完整版，先生成 30-90 秒抓主旋律。
- 多版本筛选比单次生成更重要。
- 商业使用前要检查平台授权和相似性风险。

### 2. MusicAgent：把音乐工具统一成 autonomous agent

资料类型：开源项目/科研实现  
链接：https://github.com/microsoft/muzic/tree/main/musicagent

Microsoft Muzic 仓库中的 MusicAgent 定位为 LLM-powered autonomous agent for music。README 写明，它能动态选择音乐任务方法，把 Hugging Face 模型、GitHub 项目、Web API 等统一起来，帮助用户专注音乐理解和创作。

适合任务：

- 音乐理解。
- 音乐分类。
- 音色转换。
- 作曲辅助。
- 调用不同音乐模型组合工作。

使用心得：

- MusicAgent 的核心价值是“工具路由”，不是单一生成模型。
- 安装依赖较重，包括 ffmpeg、fluidsynth、lilypond、Hugging Face 模型等。
- 适合技术用户学习音乐 Agent 架构。

### 3. 视频配乐和 MV 生成：音乐到视频的 Agent 流水线

资料类型：研究/创作流程  
代表工具：Claude/ChatGPT、Suno/Udio、Runway/Pika/Luma、剪辑工具

音乐创作者常见下一步是为歌曲生成视觉内容：

- 分析歌词和段落。
- 生成分镜脚本。
- 生成封面和角色设定。
- 生成关键帧。
- 生成短视频片段。
- 按节拍剪辑。

使用心得：

- 音乐结构信息很重要：前奏、主歌、副歌、Bridge 要分段处理。
- MV 画面一致性比单张图美感更难。
- 最好先做 lyric video，再升级为完整叙事 MV。

### 4. Suno Studio：从 prompt 歌曲到可编辑生成式音频工作站

资料类型：英文媒体体验/创作工具  
链接：https://www.techradar.com/ai-platforms-assistants/i-tried-suno-studio-the-new-platform-that-mixes-ai-music-generation-with-hands-on-editing-like-garageband-but-smarter

Suno Studio 被体验者描述为类似 GarageBand 的生成式音频工作站：用户可以从哼唱或文本 prompt 开始，再编辑鼓组、效果、乐器和 stems。对音乐 Agent 来说，这代表从“一键生成歌曲”走向“AI 生成 + 人类精修 + DAW 式编辑”。

使用心得：

- AI 适合生成草稿和灵感，不一定能一次生成有情感张力的成品。
- 分轨、stem、效果和编曲编辑比单条 prompt 更重要。
- 商用前仍要做版权和相似性检查。

### 5. Suno MILO-1080：AI step sequencer 和循环编排

资料类型：音乐科技媒体报道  
链接：https://www.musicradar.com/music-tech/suno-takes-another-step-into-music-production-with-ai-step-sequencer-milo-1080

MILO-1080 是 Suno Labs 的浏览器 step sequencer/synthesizer，支持 16 轨、AI 生成 sample、用户上传片段、内置 synth 和 Idea Generator。它适合放入音乐 Agent 案例库，因为它把 AI 从“整首歌生成器”变成了“循环、采样、编曲建议”的创作伙伴。

### 6. Udio：文本到音乐、remix、inpainting 的创作者工作流

资料类型：产品/媒体评价  
链接：https://en.wikipedia.org/wiki/Udio

Udio 能根据风格、歌词、故事方向生成带人声和乐器的歌曲，并支持 remix、延长和音频 inpainting。许多评测认为它在人声真实感和情绪捕捉上表现突出，但也面临版权和深度伪造争议。它适合与 Suno 对比整理：Suno 偏快速完整歌曲，Udio 偏更可控的修改和局部编辑。

### 7. Pitchfork：AI 音乐公司生态图谱

资料类型：英文行业综述  
链接：https://pitchfork.com/features/an-idiots-guide-to-music-ai-companies

Pitchfork 的综述梳理了 Suno、Udio、Boomy、ElevenLabs、Klay Vision、Splice、Music Flamingo、Loudly、Soundraw 等 AI 音乐公司。它适合补充“音乐 Agent 工具生态”：有的负责整曲生成，有的负责声音克隆，有的负责 royalty-free 素材，有的负责音乐分析。

### 8. Microsoft Copilot + Suno：从聊天入口生成歌曲

资料类型：产品集成 / 入门教程案例  
代表工具：Microsoft Copilot、Suno  
链接：https://en.wikipedia.org/wiki/Suno_%28platform%29

Suno 在 2023 年底与 Microsoft Copilot 集成，用户可以在 Copilot 中调用 Suno 生成歌曲。这是很适合初学者的“音乐 Agent 入口”：先由 LLM 帮用户整理主题、歌词和曲风，再把结构化 prompt 交给 Suno 生成音频。

可借鉴点：

- 适合非音乐专业用户做生日歌、广告小样、活动主题曲。
- LLM 负责歌词和提示词，Suno 负责音频，形成轻量 Agent 链。
- 仍要检查授权、相似旋律和商用范围。

### 9. Udio：用 remix、extend、inpainting 做可迭代音乐生成

资料类型：产品教程线索 / 创作工作流  
链接：https://en.wikipedia.org/wiki/Udio

Udio 支持根据文本 prompt 生成带人声和乐器的音乐，也支持 remix、延长和音频 inpainting。与“一次生成完整歌曲”相比，它更适合作为可迭代工作流：先生成 30 秒片段，挑选旋律或副歌，再延长、局部修补、重混。

可借鉴点：

- 适合做广告 jingle、短视频 BGM、游戏循环音乐草稿。
- Agent 可以负责生成多个 prompt 变体并记录哪一版效果最好。
- inpainting/extend 能降低“整首重来”的成本。

### 10. BBL Drizzy：Udio 生成歌曲进入流行文化事件

资料类型：音乐事件 / AI 生成内容传播案例  
链接：https://en.wikipedia.org/wiki/Udio

Udio 的公开资料提到，Willonius Hatcher 使用 Udio 创作的 parody song “BBL Drizzy” 在 Drake 与 Kendrick Lamar 相关网络语境中走红。这不是教程，但它很适合放入音乐 Agent 案例库：AI 音乐不只是技术 demo，也会进入 meme、社媒传播和商业版权争议场景。

可借鉴点：

- AI 音乐很适合热点二创和 meme 传播。
- 流行文化语境比音质本身更能决定传播。
- parody、采样、名人相关内容的版权风险更高。

## 科研项目/论文

### IngaRose / AI 虚拟歌手：商业化案例与争议

资料类型：行业案例/争议案例  
链接：https://en.wikipedia.org/wiki/IngaRose

IngaRose 是 2026 年出现的 AI-generated musical act，歌曲使用 Suno 等工具制作，并登上 iTunes 销售榜。这个案例不是教程，但很适合放入音乐 Agent 案例库，因为它展示了 AI 音乐从个人创作进入发行和榜单体系后的争议。

要记录的风险：

- 是否披露 AI 生成。
- 是否涉及声音/训练数据版权。
- 是否有刷榜或批量内容污染问题。
- 人类作词、编曲和 AI 生成之间如何署名。

### 1. MusicAgent：音乐理解与生成 Agent

资料类型：科研论文  
链接：https://arxiv.org/abs/2310.11954

论文指出，AI 音乐处理任务很多，用户很难掌握所有工具。MusicAgent 构建了工具集和 LLM autonomous workflow，让系统自动拆解用户请求并调用合适工具。

实践启发：

- 音乐 Agent 的未来不是一个模型包打天下，而是多个工具协同。
- 工具选择、任务拆解、结果组合是核心能力。

### 2. AutoMV：完整歌曲到 MV 的多 Agent 系统

资料类型：科研项目  
链接：https://arxiv.org/abs/2512.12196

AutoMV 针对完整歌曲生成 MV。它先提取歌曲结构、人声、歌词时间轴，再由 screenwriter Agent 和 director Agent 设计短剧本、人物、镜头，调用图像/视频生成模型，最后由 Verifier Agent 评估输出。

实践启发：

- 音乐视频不能只按歌词逐句生成画面。
- 需要理解音乐结构、节拍、人声和情绪。
- Verifier Agent 对提升一致性很关键。

### 3. GVMGen：视频到音乐生成

资料类型：科研项目  
链接：https://arxiv.org/abs/2501.09972

GVMGen 研究从视频生成匹配音乐，关注视频和音乐在空间、时间维度上的对齐。它不是典型 LLM Agent，但对“自动给短视频配乐”的 Agent 很有参考价值。

实践启发：

- 视频配乐不是随便选 BGM，而是要和动作、节奏、情绪对齐。
- Agent 可以先分析视频，再选择或生成音乐。

### 4. YingVideo-MV：音乐驱动的多阶段长视频生成

资料类型：科研项目  
链接：https://arxiv.org/abs/2512.02492

YingVideo-MV 面向 music-performance video，包含音频语义分析、MV-Director 镜头规划、camera adapter 和长序列一致性建模。它和 AutoMV 一起说明，音乐生成不只是音频问题，还包括从音乐结构到视觉表现的跨模态 Agent 流水线。

### 5. Suno / Udio 法律与产业案例

资料类型：行业争议/版权案例  
链接：

- Suno：https://en.wikipedia.org/wiki/Suno_%28platform%29
- Udio：https://en.wikipedia.org/wiki/Udio
- AP 行业报道：https://apnews.com/article/849a2d59eab89072154ab32b4db06284

Suno 和 Udio 都因训练数据和版权问题引发音乐产业诉讼或授权谈判。整理音乐 Agent 案例时，必须把“是否可商用、是否授权、是否模仿特定艺人、是否披露 AI 生成”作为核心字段。

### 6. AI Can't Make Music：对生成音乐质量和人类性的批评视角

资料类型：评论/行业观点  
链接：https://www.theatlantic.com/technology/archive/2024/07/generative-ai-music-suno-udio/679114/

这类评论不是技术论文，但很适合放入音乐生成文章，因为它提醒我们：AI 能生成像音乐的声音，不等于能生成有文化语境、情感经验和艺术判断的作品。对教程文章来说，应把 AI 定位为辅助创作和草稿生成，而不是替代音乐人的完整系统。

<!-- AUTO_CASE_UPDATES_START:music:zh-CN -->
## 最新更新(2026-06-13)


- **AetherWave Studio 推出 MCP 服务器**：项目 `aetherwave-mcp` 为 Claude、Cursor 等 Agent 提供音乐、图像、视频和乐队生成工具。这是一个值得关注的 Agent 音乐生成工具链。
- **Lacuna Music API 发布开源 SDK 与 Agent Skill**：`lacuna-toolkit` 提供了 SDK、CLI、MCP 服务器和 Agent Skill，支持从 Node 运行时、Shell 或 AI Agent 中生成 AI 音乐。
- **Hermes-Suno-Music-Agent 项目**：一个完整的 Hermes Agent 工作流，用于构建 AI 音乐视频项目，涵盖歌词、Suno 提示词、图像生成、视频导演和 YouTube 元数据。
- **Badger-Tape 全自动 AI 内容流水线**：一个多 Agent 系统，自动完成 LoFi 音乐 YouTube 频道的图像生成、视频合成、音乐制作和发布，实现从提示词到上传的零人工干预。

#### GitHub/开源项目

- **AetherWave-Studio/aetherwave-mcp**：MCP 服务器，用于音乐、图像、视频和乐队生成。Stars: 2。 [查看项目](https://github.com/AetherWave-Studio/aetherwave-mcp)
- **JOYLINK-LTD/lacuna-toolkit**：Lacuna Music API 的开源 SDK、CLI、MCP 服务器和 Agent Skill。Stars: 4。 [查看项目](https://github.com/JOYLINK-LTD/lacuna-toolkit)
- **varosity-ai/mcp-server**：Varosity.ai 的 MCP 服务器，支持向 Claude Desktop、Cursor 等暴露视频、语音、音乐生成能力。Stars: 0。 [查看项目](https://github.com/varosity-ai/mcp-server)
- **vivar/Hermes-Suno-Music-Agent**：用于构建 AI 音乐视频项目的 Hermes Agent，包含结构化工作流。Stars: 0。 [查看项目](https://github.com/vivar/Hermes-Suno-Music-Agent)
- **AceDataCloud/Skills**：提供音乐、图像、视频生成等 Agent Skills，兼容 Claude Code、GitHub Copilot 等。Stars: 8。 [查看项目](https://github.com/AceDataCloud/Skills)
- **akshithajela/guitarmind**：将情绪转化为吉他和弦进行的 AI Agent，基于乐理。Stars: 0。 [查看项目](https://github.com/akshithajela/guitarmind)
- **Aman1601s/playlistAgent**：AI 驱动的 Spotify 播放列表助手，通过 MCP 让 ChatGPT 和 Claude 创建、修改、优化播放列表。Stars: 0。 [查看项目](https://github.com/Aman1601s/playlistAgent)
- **Neeidy/Badger-Tape**：全自动 AI 内容流水线，多 Agent 系统用于 LoFi 音乐 YouTube 频道。Stars: 0。 [查看项目](https://github.com/Neeidy/Badger-Tape)
- **Jessalynredflowered754/SmartDiscover**：通过自然语言提示，使用多 Agent AI 发现 Spotify 音乐并构建播放列表。Stars: 0。 [查看项目](https://github.com/Jessalynredflowered754/SmartDiscover)
- **wangchuxiaoji-oss/doubao2api**：逆向工程豆包 API，提供多模态聊天、图像/视频/音乐生成服务，兼容 OpenAI 格式。Stars: 40。 [查看项目](https://github.com/wangchuxiaoji-oss/doubao2api)

### 论文 / Benchmark

- **《The Moving Drone: Negotiating Agency Between the Voice and the Virtual》**：一篇来自 arXiv 的论文，探讨 Hindustani 音乐中虚拟 drone 的能动性，涉及实时循环器与即兴演唱的交互。 [查看论文](https://arxiv.org/abs/2606.13640v1)

### 教程 / 媒体实测

- **Claude Code Workflow 功能实战教程**：YouTube 视频教程，展示如何利用 ultrawork 召唤多个 Agent 协同，自动生成 JS 脚本实现可复用的工作流。 [查看视频](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rSkpRRVh5VkJQMy1fbkJDazVDWEQ1NU92enJXX1VMUFRMRDBJMTlPZUI0VzFVdVd4eWRjeVIwbW4zLU14YlZwSmY1UUVoVk9IS1JoYVRR?oc=5)
- **ArcReel：AI Agent 驱动的开源视频生成工作台**：一个开源项目，通过 AI Agent 将小说转化为角色/场景/道具设计、剧本、分镜图再到视频，支持跨镜头角色与场景一致。 [查看项目](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR?oc=5)


- **豆包 API 逆向工程项目**：`doubao2api` 项目将豆包的多模态能力（含音乐生成）转为 OpenAI 兼容接口，适合国内开发者集成到 Agent 中。Stars: 40。 [查看项目](https://github.com/wangchuxiaoji-oss/doubao2api)
- **ArcReel 项目**：中文描述的开源 AI Agent 视频生成工作台，涉及角色、场景、剧本等完整流程。 [查看项目](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR?oc=5)

### 待复核线索

- **Google 搜索框重新设计**：虽然与音乐生成无直接关系，但可能影响 Agent 的交互入口。 [查看原文](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- **OpenAI 收购 Ona**：可能增强 Codex 的持久化云环境，对 Agent 工作流有潜在影响。 [查看原文](https://openai.com/index/openai-to-acquire-ona)
- **Google DeepMind 关注多 Agent 交互风险**：对 Agent 生态的宏观讨论，可能影响音乐 Agent 的设计规范。 [查看原文](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/)
- **Microsoft Rayfin 后端平台**：新推出的 AI Agent 开发后端平台，待观察其对音乐生成 Agent 的支持。 [查看原文](https://news.google.com/rss/articles/CBMizgFBVV95cUxQX3IxQXM3SVNacnJuUFk4NlhBc2VaUklKWnpOM294aXQwaFVwSTBKQ3J4NzFONUlHRUtBMGRteWdYZGdDS1dLSTdTdVBLckMxVlBYQVl2Z2V2RkxRRm9feHl3aWk3Q1p2STk1eWltdjJkS0lnSk5fakNTVmNPVlFKNG9rREFhc1FuVG9Hc3htZ1RhdjNhdlg2ZWNWUXJyOUNLc0ZibkFjOU8xaC1iYThJOVlfdFhuZVIyQlRkUXpTQWx2Ymx6U01JVXBXbUtNdw?oc=5)
- **Qwen3.6 越狱版教程**：支持本地 Agent 运行，可能用于本地音乐生成 Agent 部署。 [查看视频](https://news.google.com/rss/articles/CBMiVkFVX3lxTE5oT3dJVzFaSmxsaWVCd1FBcUhqVFFiY1NGQ0xHWVU5c3pIRDlteFUydWUzU1BQY2ZxbE1ORDg0eWhoc0xZYVlxV3QyTHBMNjBsMXc1OXdR?oc=5)
- **OpenAI Academy 新课程**：包含应用 Agent 的课程，可能涉及音乐生成场景。 [查看原文](https://openai.com/index/academy-courses-applying-ai-at-work)
<!-- AUTO_CASE_UPDATES_END:music:zh-CN -->
