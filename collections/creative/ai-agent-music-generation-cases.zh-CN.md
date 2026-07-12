# 音乐生成：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（21+16）

本节分为两类：`教程 / 案例 21 条` 和 `项目 / 论文 16 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 21 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | Suno | 产品教程 | 维基百科词条，概述 Suno 平台从歌词输入到歌曲输出的生成流程，涵盖模型能力边界与主流应用场景。 | https://en.wikipedia.org/wiki/Suno_%28platform%29 |
| 2 | Udio | 产品教程 | 维基百科词条，介绍 Udio 在歌词处理、音频分析与曲风转换上的技术实现，可作为音乐生成模型对比的参考。 | https://en.wikipedia.org/wiki/Udio |
| 3 | Suno Studio hands-on | 媒体体验 | TechRadar 实测报告，评测 Suno Studio 将 AI 生成与手动编辑结合的交互模式，对比 GarageBand 分析其智能音频工具的可用性。 | https://www.techradar.com/ai-platforms-assistants/i-tried-suno-studio-the-new-platform-that-mixes-ai-music-generation-with-hands-on-editing-like-garageband-but-smarter |
| 4 | MILO-1080 | 媒体报道 | MusicRadar 报道，介绍 Suno 推出的 AI 步进音序器 MILO-1080，聚焦 AI 辅助编曲在节奏与音序设计上的新能力。 | https://www.musicradar.com/music-tech/suno-takes-another-step-into-music-production-with-ai-step-sequencer-milo-1080 |
| 5 | Pitchfork AI music guide | 行业综述 | Pitchfork 行业综述，梳理主流 AI 音乐公司的技术路线与产品定位，为理解音乐生成领域的竞争格局提供全景视角。 | https://pitchfork.com/features/an-idiots-guide-to-music-ai-companies |
| 6 | Boomy | 产品案例 | Boomy 是一个零门槛在线音乐生成平台，用户无需乐理知识即可在数分钟内创作并发布原创歌曲，体验从风格选择到成品导出的完整 AI 作曲流程。 | https://boomy.com/ |
| 7 | Soundraw | 产品案例 | Soundraw 提供 AI 辅助作曲工具，用户可自定义旋律走向与编曲细节，生成免版税曲目，适合研究人机协作的精细化音乐制作模式。 | https://soundraw.io/ |
| 8 | Loudly | 产品案例 | Loudly 支持通过文本提示自动生成多风格曲目，并提供在线多轨编辑功能，覆盖从创意到混音输出的端到端工作流。 | https://www.loudly.com/ |
| 9 | ElevenLabs music | 产品案例 | ElevenLabs 将语音合成能力延伸至音乐生成，支持文本输入生成带人声的完整歌曲，是研究歌词到音频端到端方案的案例。 | https://elevenlabs.io/ |
| 10 | Stable Audio | 产品案例 | Stable Audio 基于扩散模型，用户可通过文本描述控制音乐风格与时长，生成高质量音频，代表当前 AI 音频生成的前沿技术路线。 | https://stableaudio.com/ |
| 11 | Suno help center | 官方教程 | Suno 官方帮助文档，涵盖创作技巧、参数说明与常见问题，是掌握该平台音乐生成操作的核心参考。 | https://help.suno.com/ |
| 12 | Udio | 产品教程 | Udio 支持通过歌词和风格描述生成完整歌曲，可作为对比不同模型在音乐创作效果上的测试样本。 | https://www.udio.com/ |
| 13 | Stable Audio | 官方教程 | Stable Audio 官方教程提供从基础到进阶的音频生成指南，包含参数调整与最佳实践，适合系统学习该扩散模型工具的使用方法。 | https://stableaudio.com/ |
| 14 | AIVA | 产品教程 | AIVA 专注于古典与影视配乐风格的 AI 作曲，用户可基于情感或场景参数生成乐谱，探索规则驱动与深度学习结合的作曲逻辑。 | https://www.aiva.ai/ |
| 15 | Boomy | 产品教程 | Boomy 产品教程指导用户如何快速创建和发布 AI 生成歌曲，包含风格选择与编辑技巧，适合新手零基础入门音乐创作。 | https://boomy.com/ |
| 16 | Soundraw | 产品教程 | Soundraw 产品教程演示了如何利用 AI 生成旋律并手动调整编曲，适合学习人机协作的精细化音乐制作流程。 | https://soundraw.io/ |
| 17 | Loudly | 产品教程 | Loudly 产品教程讲解从文本提示到多轨混音的完整步骤，适合了解 AI 音乐平台的编辑与导出功能。 | https://www.loudly.com/ |
| 18 | BandLab SongStarter | 产品教程 | BandLab SongStarter 提供 AI 驱动的音乐灵感生成器，用户可基于预设风格快速获得旋律片段，适合激发创作起点。 | https://www.bandlab.com/songstarter |
| 19 | Magenta demos | 官方教程 | Google 开源音乐 AI 项目的在线演示集合。涵盖旋律生成与风格迁移，可直接体验 Magenta 模型的实际输出效果。 | https://magenta.tensorflow.org/demos |
| 20 | Magenta.js demos | 官方教程 | 基于浏览器的 Magenta.js 交互示例。支持实时生成与演奏，适合前端开发者将音乐 AI 能力集成到 Web 应用中。 | https://magenta.tensorflow.org/js |
| 21 | Demucs guide | 项目教程 | Facebook 开源的 Demucs 音源分离项目。基于深度学习模型，可将混合音频拆分为人声、鼓、贝斯等独立轨道。 | https://github.com/facebookresearch/demucs |

### 项目 / 论文 16 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | MusicAgent | 开源项目/论文 | 微软出品的音乐Agent框架，将歌词转曲、MIDI处理、音频分析等任务统一调度。值得收录在于它展示了多工具协同的音乐工作流设计，为构建一体化音乐处理Agent提供了可复现的架构参考。 | https://github.com/microsoft/muzic/tree/main/musicagent |
| 2 | MusicAgent paper | 论文 | MusicAgent的配套论文，详述了统一音乐处理Agent的架构与实验。值得收录在于它公开了任务规划与工具调用的技术细节，是理解Agent如何编排音乐子任务的原始文献。 | https://arxiv.org/abs/2310.11954 |
| 3 | AutoMV | 论文 | 提出自动音乐视频生成方法的论文，核心是从音频到视觉内容的跨模态生成流程。值得收录在于它完整呈现了音视频对齐的流水线设计与评价体系，对多模态生成Agent有直接参考价值。 | https://arxiv.org/abs/2512.12196 |
| 4 | GVMGen | 论文 | 聚焦生成式视频音乐匹配的论文，核心是基于生成模型实现音视频同步。值得收录在于它提供了从模型设计到实验验证的完整思路，是研究视频配乐自动化的关键文献。 | https://arxiv.org/abs/2501.09972 |
| 5 | WeaveMuse | 论文 | 探索音乐与视觉编织生成的论文，提出多模态融合生成的新范式。值得收录在于它展示了跨模态特征交互的创新方案与效果评估方法，对多模态Agent的生成策略有启发。 | https://arxiv.org/abs/2509.11183 |
| 6 | MACAT | 论文 | 提出音乐感知的跨模态对齐技术，核心是音频与文本特征的对齐方案。值得收录在于它提供了创新的对齐方法与实验结果，是构建音乐理解Agent的重要技术参考。 | https://arxiv.org/abs/2502.00023 |
| 7 | MusicAIR | 论文 | 研究音乐生成中音频信息检索的论文，核心是利用检索增强生成高质量音乐。值得收录在于它展示了RAG技术在音乐领域的应用，为Agent引入外部知识库提供了具体案例。 | https://arxiv.org/abs/2511.17323 |
| 8 | YingVideo-MV | 论文 | 提出音乐视频自动生成系统的论文，从脚本到镜头完成完整视频合成。值得收录在于它公开了流水线设计细节，是研究端到端MV生成Agent的工程范本。 | https://arxiv.org/abs/2512.02492 |
| 9 | IngaRose | 行业案例 | AI音乐创作领域的知名案例，IngaRose是真实使用AI工具进行创作的艺术家。值得收录在于它提供了从创作流程到工具使用的第一手经验，是理解AI音乐行业实践的活样本。 | https://en.wikipedia.org/wiki/IngaRose |
| 10 | BBL Drizzy/Udio | 文化案例 | BBL Drizzy与Udio的争议案例，展示了AI音乐生成引发的文化冲击。值得收录在于它集中暴露了版权、原创性与技术伦理的冲突，是讨论AI音乐社会影响的标志性事件。 | https://en.wikipedia.org/wiki/Udio |
| 11 | Magenta | 开源项目 | Google出品的音乐与艺术生成经典开源项目，涵盖旋律、节奏与音色生成模型。它奠定了深度学习音乐生成的基础，提供了大量可复用的预训练模型与实验代码。 | https://github.com/magenta/magenta |
| 12 | Magenta.js | 开源项目 | Magenta的JavaScript版本，可在浏览器中直接运行音乐生成模型。它降低了交互式音乐创作的门槛，让前端开发者能快速集成AI音乐能力。 | https://github.com/magenta/magenta-js |
| 13 | MusicGen | 开源项目 | Meta推出的文本到音乐生成模型，基于音频编解码器架构。值得收录在于它提供了高质量音乐生成的开源实现，是研究条件音乐生成Agent的核心参考。 | https://github.com/facebookresearch/audiocraft |
| 14 | AudioCraft | 开源项目 | Meta的音频生成工具包，整合了MusicGen等模型，提供音乐与音效生成的完整代码。值得收录在于它是一站式音频生成资源，预训练权重可直接用于Agent的音频输出模块。 | https://github.com/facebookresearch/audiocraft |
| 15 | Riffusion | 开源项目 | 利用扩散模型实时生成音乐频谱图的开源项目。值得收录在于它展示了将图像生成技术迁移至音频领域的创新实践，为Agent的跨模态生成提供了新思路。 | https://github.com/riffusion/riffusion |
| 16 | Jukebox | 开源项目 | OpenAI的早期音乐生成里程碑，能生成带歌词的完整歌曲。值得收录在于其多尺度编码与采样机制是后续音乐生成模型的基础，对理解Agent的序列生成能力有历史价值。 | https://github.com/openai/jukebox |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AetherWave Studio MCP Server | MCP 服务器 | 为 Claude、Cursor 等 Agent 提供音乐、图像、视频和乐队生成工具 | [GitHub](https://github.com/AetherWave-Studio/aetherwave-mcp) |
| Varosity.ai MCP Server | MCP 服务器 | 将视频、语音、音乐生成能力暴露给 Claude Desktop、Cursor 等 MCP 宿主 | [GitHub](https://github.com/varosity-ai/mcp-server) |
| Hermes-Suno-Music-Agent | Agent 工作流 | 完整的 AI 音乐视频项目构建 Agent，包含歌词、Suno 提示词、图像生成、视频导演和 YouTube 元数据工作流 | [GitHub](https://github.com/vivar/Hermes-Suno-Music-Agent) |
| Badger-Tape | 多 Agent 系统 | 全自动 AI 内容管线，多 Agent 协调图像生成、视频合成、音乐制作和 YouTube 发布 | [GitHub](https://github.com/Neeidy/Badger-Tape) |
| SmartDiscover | 多 Agent 系统 | 通过自然语言提示发现 Spotify 音乐，多 Agent 对歌曲排序并构建可直接使用的播放列表 | [GitHub](https://github.com/Jessalynredflowered754/SmartDiscover) |
| ArcReel | AI Agent 视频工作台 | 开源 AI Agent 驱动视频生成工作台，支持小说→角色/场景/道具设计→剧本→分镜图→视频全流程 | [GitHub](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR) |
| doubao2api | API 服务 | 逆向工程豆包 API，为 AI Agent 提供免费多模态聊天、图像/视频/音乐生成和文件托管服务 | [GitHub](https://github.com/wangchuxiaoji-oss/doubao2api) |
| AceDataCloud Skills | Agent 技能集 | 为 Claude Code、GitHub Copilot、Gemini CLI 等 Agent 提供音乐、图像、视频生成等技能 | [GitHub](https://github.com/AceDataCloud/Skills) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| The Moving Drone: Negotiating Agency Between the Voice and the Virtual | 学术论文 | 探讨印度斯坦音乐中传统静态 drone 如何通过循环器获得 Agent 性，从被动响应转向主动角色 | [arXiv](https://arxiv.org/abs/2606.13640v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Claude Code Workflow 功能实战教程 | 视频教程 | 展示 Claude Code Workflow 功能，通过 ultrawork 召唤多个 Agent 协同，自动生成 JS 脚本实现可复用工作流 | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rSkpRRVh5VkJQMy1fbkJDazVDWEQ1NU92enJXX1VMUFRMRDBJMTlPZUI0VzFVdVd4eWRjeVIwbW4zLU14YlZwSmY1UUVoVk9IS1JoYVRR) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ACI 协议 | 开放协议 | 使 AI Agent 能够通过结构化、Agent 就绪的应用程序接口与 Web 和桌面软件交互 | [GitHub](https://github.com/agerelated-clioquinol357/ACI) |
| Antigravity Awesome Skills | 技能集合 | 收录 1,527+ 个 Agent 技能，适用于 Claude Code、Gemini CLI、Cursor、Copilot 等 | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tNl9NbVNGU214YXktUlkyVU5SM24xdkdYeUtGS0pXcTNPM0g0VnNmOVB1alc3S2NQcUR2cFhrLWZMR0p0UV85TjFvME5lRUowWW4yNnZkeEZMZnpVbjBjdlNCNA) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Sparkah/agentic-soundtracks | GitHub 项目 | 为 LLM 构建的 HTML5 游戏生成配乐的 Agent 系统 | [https://github.com/Sparkah/agentic-soundtracks](https://github.com/Sparkah/agentic-soundtracks) |
| Mustard5/music_generation | GitHub 项目 | Agent Zero 插件：通过文本提示经 Google Lyria / OpenRouter 生成音乐 | [https://github.com/Mustard5/music_generation](https://github.com/Mustard5/music_generation) |
| sunpochin/music-release-agent | GitHub 项目 | AI 驱动的音乐追踪与社交分享服务，自动扫描 Spotify、生成双语评论并编排社交帖子 | [https://github.com/sunpochin/music-release-agent](https://github.com/sunpochin/music-release-agent) |
| CMbunny/AI-agents | GitHub 项目 | 用 Python 构建的 AI Agent 合集，包含音乐生成功能 | [https://github.com/CMbunny/AI-agents](https://github.com/CMbunny/AI-agents) |
| partme-ai/full-aigc-skills | GitHub 项目 | 34+ 个 AIGC Agent 技能，涵盖图像、视频、音频、音乐、文本、多模态生成 | [https://github.com/partme-ai/full-aigc-skills](https://github.com/partme-ai/full-aigc-skills) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| HAIM: Human-AI Music Datasets for AI Music Production Tracking Benchmark | 论文 | 针对 Suno、Udio 等平台达到人类级音频质量后，提出超越“AI 或人类”二分法的音乐制作追踪基准 | [https://arxiv.org/abs/2606.01686v1](https://arxiv.org/abs/2606.01686v1) |
| JenBridge: Adaptive Long-Form Video Soundtracking across Scene Transitions | 论文 | 基于 Transformer 的模块化框架，用于生成长视频配乐并保持场景切换时的连贯性 | [https://arxiv.org/abs/2606.01703v1](https://arxiv.org/abs/2606.01703v1) |
| Cross-domain benchmarks reveal when coordinated AI agents improve scientific inference from partial evidence | 论文 | 跨领域基准测试，评估协调式 AI Agent 在将分子结构映射为音乐表示等科学任务中的价值 | [https://arxiv.org/abs/2605.22300v1](https://arxiv.org/abs/2605.22300v1) |

## 资料更新（2026-06-23）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| mood-playlist-agent | GitHub 项目 | 根据情绪、天气和收听历史生成个性化播放列表的 AI Agent | [https://github.com/niravpatidar37/mood-playlist-agent](https://github.com/niravpatidar37/mood-playlist-agent) |
| vesper | GitHub 项目 | 面向 Cider Apple Music 客户端的文本优先 A2A/MCP 音乐控制 Agent，支持自适应会话、自然语言播放控制和本地 CLI | [https://github.com/randileeharper/vesper](https://github.com/randileeharper/vesper) |
| SoulTuner-Agent | GitHub 项目 | 基于大模型 + 知识图谱 + 双模型声学向量的本地智能音乐推荐 Agent，具备混合 RAG、Neo4j 和长期记忆 | [https://github.com/hgsanyang/SoulTuner-Agent](https://github.com/hgsanyang/SoulTuner-Agent) |
| FADE-Director | GitHub 项目 | 本地托管的 Agent 服务，从上传歌曲出发，通过对话式 LLM Agent 引导创意流程，分析音乐、规划场景、生成提示词并编排图像/视频生成 | [https://github.com/ckinpdx/FADE-Director](https://github.com/ckinpdx/FADE-Director) |
| FrameFusion | GitHub 项目 | AI 辅助短视频创作工具，通过聊天界面调用专业 Agent、Pexels B-roll 工具、音乐生成和 MP4 渲染 | [https://github.com/barkerbg001/FrameFusion](https://github.com/barkerbg001/FrameFusion) |
| bony-agent | GitHub 项目 | 全栈 AI 内容生产与分发平台，集成聊天、图像/视频/音乐生成、智能编辑、多平台定时发布，含 27+ 专业 Agent | [https://github.com/phuhao00/bony-agent](https://github.com/phuhao00/bony-agent) |
| roon-mcp | GitHub 项目 | 通过 AI Agent 控制 Roon 音乐播放器的 MCP 服务器 | [https://github.com/bestimmaa/roon-mcp](https://github.com/bestimmaa/roon-mcp) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Libretto: Giving LLM Agents a Sense of Musical Structure | arXiv 论文 | 提出面向 Agent 的符号音乐生成与修订框架，使用 LLM 原生语法（显式起始槽、声部、小节组织），并在节奏、和声、旋律、织体、形式与变奏的统计空间中评估作品 | [https://arxiv.org/abs/2606.22708v1](https://arxiv.org/abs/2606.22708v1) |
| Audio-Mind: An Auditable Agentic Framework for Audio Understanding | arXiv 论文 | 提出可审计、可插拔的音频理解 Agent 框架，动态结合强前端模型与条件证据获取，判断何时 Agent 的证据收集真正有益于音频理解 | [https://arxiv.org/abs/2605.28480v1](https://arxiv.org/abs/2605.28480v1) |

### 教程 / 媒体实测

（无新增资料）

### 产品 / 工具

（无新增资料）

## 资料更新（2026-07-05）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|----------|------|
| nngandhi96/vibemusic | 多智能体音乐策展 | 分析用户情绪、活动与氛围，生成定制 5 首歌曲播放列表；集成安全多智能体工作流、本地 MCP 服务查找与人在回路审批 | https://github.com/nngandhi96/vibemusic |
| thegoodtailor/agentic-filmmaker | 音乐视频生成流水线 | 基于种子图像，通过视觉、叙事和视频生成智能体链式生成音乐视频片段 | https://github.com/thegoodtailor/agentic-filmmaker |
| ruijiahuang2006-collab/kimusic-demo | LLM 音乐引导想象 | Kimusic 公开演示仓库，基于 LLM 的引导式意象与音乐智能体 | https://github.com/ruijiahuang2006-collab/kimusic-demo |
| RhythrosaLabs/multi-agent-viral-video-maker | 多智能体视频制作 | 生成带音乐和旁白的长视频，面向病毒式内容制作的多智能体流水线 | https://github.com/RhythrosaLabs/multi-agent-viral-video-maker |
| tsjyma/music-agent | LLM 辅助编曲 | 将 LilyPond 旋律转化为钢琴、贝斯和鼓伴奏的 LLM 辅助编曲流水线 | https://github.com/tsjyma/music-agent |
| Pulpoide/tourmaster-ai | 多智能体巡演管理 | 面向音乐巡演管理的生产级多智能体编排系统，包含预订、物流、营销和天气等专用智能体，集成 RAG、实时工具调用与企业级可观测性 | https://github.com/Pulpoide/tourmaster-ai |
| Producer007/suno-api | Suno API 封装 | Suno AI 音乐 API 封装，固定于 pre-2Captcha 提交版本，用于 Hollywood South MCP Agent Nation State | https://github.com/Producer007/suno-api |
| bitwize-music-studio/claude-ai-music-skills | 人机协作音乐制作 | 面向 Suno 的人 + AI 音乐制作工作流，包含技能、模板与工具 | https://news.google.com/rss/articles/CBMib0FVX3lxTFA2bnlaaEdyX1RPdTc4QWw5UTQ3QlZCeFFjeUpBdFExUVFCSzZOU2xVLU9qOHZSX3dVaDVzZDhTSmowT29MLTJqMHI3aC1BQmdET3l5VGE0SVphd09LMlpqd2hvRUR6a2hnZnRyNzZ5MA?oc=5 |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|----------|------|
| H-Lab-Works/ai-video-bgm-benchmark | 工具横评 | AI 视频配乐场景标签与音乐生成工具横评，对比 Suno、Udio、Stable Audio 在短视频 BGM 场景的表现 | https://github.com/H-Lab-Works/ai-video-bgm-benchmark |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|----------|------|
| Hermes AI Music Agent 介绍 | 视频演示 | “Music creation just got an upgrade! Meet the Hermes AI Music Agent 🎵” | https://news.google.com/rss/articles/CBMiVkFVX3lxTE9zU19hU0dQTUU1LTFIaGk2NXpReFRUZWtOMGUtLUQtVmdaMkFIcjB3WmdXazJ6M3lVcDFTeWYwMWxjZzJKMnoxdDRlZ2ZoWkdNTWZiRktB?oc=5 |
| 302.AI CLI Skill 实测 | 中文教程 | 一行命令调用图片、视频、音乐全模型，解放生产力 | https://news.google.com/rss/articles/CBMieEFVX3lxTFAwd3djN2FLMUZMZy1zUS1raVNLT2pUZTB5dUtuRlkwUmdLWXRiOGJld0I1ekQxeVV2ZzZSMDJSaUJDOEp1alhkTkgtU0V6UlNIZE9QRVprS0t2WjFtRWJxYVU5d1dKRHNWR3BFSXdXS2FtdXczN1d4YQ?oc=5 |
| AI 音乐视频生成工具盘点 | 媒体文章 | “AI Music Video Generation: 10 Tools That Automate Your Creative Workflow in 2026” | https://news.google.com/rss/articles/CBMi0gFBVV95cUxNaW5uSU9UcEdsNkxTUlBRVWk1ZTR1Q2JqTWVRLXhwN0xjaHdVSXpvNHk0elNIeHNIV2F2MEtSSENwMEVTUjU0ZDNxWDRIX0NoV195c1U4LV80SWxXcV9FYm5JeFAzeWstR2J6LXdrV0F1Uy0weHpreWplZzYwbE9ZdVgtUlRjRzI3V0l6MWZ0RUF2U0RuMXE5aWRqYldCa1pvaWkxMGxUdDZRRVZRNU02cTNUbWZzRTB1Z1VLbWl1MzdUaXFEV2hvV0E4Rlh3SG9JU2c?oc=5 |
| AI 音乐混战分析 | 中文媒体 | “AI音乐混战，谁能成为‘中国版Suno’？” | https://news.google.com/rss/articles/CBMiXkFVX3lxTE5QUlBhQ0t0UlZLR1c1aExWMEN5dU9jdnJ6am9CVW1McFlUMzFEcjZuLWprSFJBZW10THZwRGRWdVNOMGNqUXZQUGRKTHJ5ekluQzNza2EtM2VGRk4ySmc?oc=5 |
| 独立开发者 AI 音乐指南 | 媒体文章 | “From Zero Budget to Full Soundtrack: An Indie Dev’s Guide to AI Music” | https://news.google.com/rss/articles/CBMivAFBVV95cUxQajFqc0Nqd2ZqLTlOek5fMWpDVjlzT3A3akVMX3lReGd2bVo5ajhmWExMelRvNHd3bGZ0Z0ZHVXdza0RSa2VlUkdaWDR0cThYVHJhSkpLSE5GdndsYmN1ZElTV1NLUjdfVUNaV3JHdDgxeUdUWHF4dDFKOVNFZDYtcmt1aEgwVi1JUy00M3NxS3ljalZJbHZwZURVLTJCa2ctdUNIdHpDaWJ3TERyZTNwdEJTUEJLc0xjekJxNw?oc=5 |
| AI 生成音乐版权讨论 | 媒体文章 | “The Millions of Songs Mashed Into AI-Generated Music” | https://news.google.com/rss/articles/CBMilgFBVV95cUxNMlplTmkza1NXTDNpWWFLaUdPa2xXdWw0ZkZqbVdlRWZ2QW8tS2xfU2QyMFF0ZzJ0c2phRjBRWUw3NksxTlh3cktRajI0Vzl0MjNTX0ZrYnpXclFtUlF0S2dmTkVzaC1JVWREcEMzaEt2aXJHZVFoem1PWjViSk84cWlTS0xsUFQ4WG9ENmFwX2tBVzRqREE?oc=5 |
| AI 氛围编程与音乐工具 | 媒体文章 | “Inside the new wave of AI vibe coding tools turning prompts into plugins” | https://news.google.com/rss/articles/CBMiZkFVX3lxTE1UU2dvV0haQmFyc0FCNkNWZjRGck41Y2ZSLUVxQ1Q0TlVmOFNmMHJaeDVseUpPMFpQaWtvTW1wNFo3MnljRG5nOUNoV3pqdkdCcUdtQ0RuNE1lYmNmZ3l0Wm1ucndXdw?oc=5 |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|----------|------|
| Suno | AI 音乐生成应用 | 面向所有技能水平的创作者，通过文本提示在 1 分钟内生成包含人声、歌词和完整制作的原创歌曲 | https://suno.com/ |
| Suno AI Music App | AI 音乐应用 | 帮助创作者制作音乐并发展个人风格，无限制创作 | https://suno.com/l/ai-music-app |
| Suno API 平台盘点 | 工具列表 | “Top 10 Suno API Platforms for Full-Track Music Generation in 2026” | https://news.google.com/rss/articles/CBMimgFBVV95cUxOR29uUV8ySFZYQ3FiVFJHUG85TXJGeFd4RWxjTHlsaHNYalJOZV96U3Z0ZGpnMGpOSUkzVFhBbVFKckQxWGJsTWNwdFhuQ1BkSW9DWEc4Yk1DZUJWMEVFUWR5Z2Q5Rzg3RWVia0Z2c3dtSlZUQ0hEb3RqRU5EeU13bFdyVHp3TEExejJ0SDlwQUt1SDViZ2ktUk5R?oc=5 |
| Unlimited-AI-Music-Generation | 验证工具 | 通过 SMS-MAN 绕过 Suno 和 Udio 每日额度限制的方案 | https://github.com/Mania4rta/Unlimited-AI-Music-Generation-Bypassing-Daily-Credits-on-Suno-and-Udio-via-SMS-MAN |

## 资料更新（2026-07-12）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| vargHQ/skills | GitHub 项目 | AI agent skills，支持视频、图像、语音及音乐生成，兼容 Claude Code、Cursor 等工具 | [GitHub](https://github.com/vargHQ/skills) |
| wassermanproductions/unofficial-davinci-mcp | GitHub 项目 | MCP 服务器，让 AI agent 控制 DaVinci Resolve，支持节拍感知音乐剪辑、对话收紧等功能 | [GitHub](https://github.com/wassermanproductions/unofficial-davinci-mcp) |
| afghanfansmedia-ai/songcheck-mcp | GitHub 项目 | MCP 服务器，用于从 AI agent 检测 AI 生成音乐（Suno、Udio 等） | [GitHub](https://github.com/afghanfansmedia-ai/songcheck-mcp) |
| verticalrectangle/pop-maker-studio | GitHub 项目 | Agent 原生视频编辑器，面向音乐与短视频，支持语音转换、歌词/卡拉OK视频、自动字幕 | [GitHub](https://github.com/verticalrectangle/pop-maker-studio) |
| puntorigen/skills | GitHub 项目 | 本地优先的 agent skills，针对 Apple Silicon 优化，支持背景音乐、语音克隆等 | [GitHub](https://github.com/puntorigen/skills) |
| AugmentedValueAcceleration/ava-supernova | GitHub 项目 | 开源 AI 编码 agent，含 Creative Studio 支持图像、视频、音乐、语音生成 | [GitHub](https://github.com/AugmentedValueAcceleration/ava-supernova) |
| MCERQUA/OpenVoiceUI | GitHub 项目 | 语音驱动 AI 助手平台，连接任意 LLM 与 TTS，支持音乐生成与 agent 编排 | [GitHub](https://github.com/MCERQUA/OpenVoiceUI) |
| SuperInstance/fleet-midi-rand | GitHub 项目 | 基于 agent 随机性的偶然音乐生成 | [GitHub](https://github.com/SuperInstance/fleet-midi-rand) |
| SuperInstance/fleet-midi-emergent | GitHub 项目 | 涌现模式生成——音乐从 agent 交互中产生，无需集中控制 | [GitHub](https://github.com/SuperInstance/fleet-midi-emergent) |
| suno-ai-farm/awesome-ai-music-tools | GitHub 项目 | AI 音乐工具精选目录，涵盖生成、分析、歌词、分轨、母带等 | [GitHub](https://github.com/suno-ai-farm/awesome-ai-music-tools) |
| jhawaritvik/suno-songsmith | GitHub 项目 | Agent Skill，将歌曲创意转化为可直接用于 Suno/Udio/Riffusion 的提示词 | [GitHub](https://github.com/jhawaritvik/suno-songsmith) |
| vegekyd-sys/ai-image-editor | GitHub 项目 | AI 创意工作室，支持图像、视频、音乐及 agent 原生媒体工作流 | [GitHub](https://github.com/vegekyd-sys/ai-image-editor) |
| kaseymallette/wax | GitHub 项目 | 音乐库收听日志，支持上传、随机播放、播放记录追踪，计划开发 mood 播放列表生成 | [GitHub](https://github.com/kaseymallette/wax) |
| curbmarketjotter656/ppt-agent-workflow-san | GitHub 项目 | 从 agent 对话生成 PPT 工作流幻灯片，用于 Ssuiqi Music 研究 | [GitHub](https://github.com/curbmarketjotter656/ppt-agent-workflow-san) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Suno AI使用教程：从入门到进阶 (超详细) - 知乎 | 教程 | Suno 详细使用教程，涵盖编辑功能与高效制作精品歌曲的方法 | [知乎](https://zhuanlan.zhihu.com/p/1887930075674048214) |
| NeuroSchool-Profkom-LETI | GitHub 项目 | AI 内容生成课程（10 模块），涵盖图像、音乐、视频、AI agent 等 | [GitHub](https://github.com/kostyk348/NeuroSchool-Profkom-LETI) |
