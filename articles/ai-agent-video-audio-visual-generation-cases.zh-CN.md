# 影音生成：AI Agent 实战案例、教程与科研项目调研

这是一份面向开发者、创作者和研究者的 AI Agent 资料索引，收集了相关方向的教程、案例、开源项目、论文、Benchmark 和产品实践。它的目标是帮助读者快速发现可复现的项目、可参考的工作流，以及值得进一步阅读的研究资料。

> 说明：本索引偏“资料集合”和“选题导航”，部分条目会在后续持续二次 review、补充备注和筛选质量。欢迎把它作为 GitHub 仓库中的起点清单使用，并根据自己的方向继续扩展。

## 大规模资料索引（26+30）

本节分为两类：`教程 / 案例 26 条` 和 `项目 / 论文 30 条`。每条资料包含名称、类型、简要说明和原链接，便于快速判断是否值得深入阅读。

### 教程 / 案例 26 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | MoneyPrinterTurbo | 开源教程 | 开源项目 MoneyPrinterTurbo，提供脚本、素材、配音、字幕和镜头生成的合成流水线。 | https://github.com/harry0703/MoneyPrinterTurbo |
| 2 | ShortGPT | 开源教程 | 开源项目 ShortGPT，实现短视频的自动化脚本编写、配音和镜头合成。 | https://github.com/RayVentura/ShortGPT |
| 3 | NarratoAI | 开源教程 | 开源项目 NarratoAI，自动化生成配音、字幕和视频剪辑的完整流水线。 | https://github.com/linyqh/NarratoAI |
| 4 | Pippit | 产品案例 | 维基百科条目，介绍 Pippit 产品在视频生成与多媒体自动化方面的功能。 | https://en.wikipedia.org/wiki/Pippit |
| 5 | Kling AI | 产品案例 | 维基百科条目，概述 Kling AI 在视频生成领域的应用和产品特点。 | https://en.wikipedia.org/wiki/Kling_AI |
| 6 | Runway docs | 官方教程 | Runway 官方帮助中心，涵盖文本/图像转视频、视频编辑等工具的操作指南，是理解其Gen-2等模型工作流的起点。 | https://help.runwayml.com/ |
| 7 | Pika docs | 官方教程 | Pika 官网展示其视频生成平台，核心卖点是低门槛的文本提示即可产出连贯短视频，适合快速原型验证。 | https://pika.art/ |
| 8 | LTX Studio | 产品案例 | 维基百科对 LTX Studio 的概述，定位为面向创意叙事的 AI 视频生成工具，强调剧本到分镜的自动化流程。 | https://en.wikipedia.org/wiki/LTX_Studio |
| 9 | Creatify | 产品案例 | Creatify 的维基百科条目，聚焦其自动化生成营销视频的能力，典型场景是商品链接一键转化为广告短片。 | https://en.wikipedia.org/wiki/Creatify |
| 10 | Higgsfield AI | 产品案例 | Higgsfield AI 的维基百科介绍，主打个性化数字人视频生成，可基于单张照片驱动面部表情与口型同步。 | https://en.wikipedia.org/wiki/Higgsfield_AI |
| 11 | ComfyUI examples | 教程 | ComfyUI 官方示例集，以节点图形式展示图像与视频生成管线，可复现 Stable Diffusion、AnimateDiff 等模型的典型工作流。 | https://comfyanonymous.github.io/ComfyUI_examples/ |
| 12 | AnimateDiff docs | 教程 | AnimateDiff 的 GitHub 仓库，提供将静态图像序列转化为平滑动画的扩散模型实现，附带推理脚本与预训练权重。 | https://github.com/guoyww/AnimateDiff |
| 13 | Stable Video Diffusion | 模型文档 | Stable Video Diffusion 在Hugging Face上的模型卡，包含img2vid权重、推理示例与使用限制说明，适合直接调用。 | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |
| 14 | Diffusers text-to-video | 官方教程 | Hugging Face Diffusers 库的 text-to-video 教程，演示如何用几行代码调用预训练模型从文字生成短视频片段。 | https://huggingface.co/docs/diffusers/using-diffusers/text-img2vid |
| 15 | Whisper usage | 项目教程 | OpenAI Whisper 的 GitHub 项目，通用语音识别模型，支持多语言转录与翻译，可本地部署实现高精度音频转文字。 | https://github.com/openai/whisper |
| 16 | WhisperX docs | 项目教程 | WhisperX 在 Whisper 基础上增加说话人分离与词级时间戳对齐，提升多人对话场景的转录准确性与可用性。 | https://github.com/m-bain/whisperX |
| 17 | Coqui TTS docs | 教程 | Coqui TTS 的开源文本转语音引擎，支持多语言与声音克隆，提供预训练模型与训练脚本，可定制语音风格。 | https://github.com/coqui-ai/TTS |
| 18 | Edge TTS project | 项目教程 | Edge TTS 项目封装微软Edge浏览器的免费语音服务，无需API Key即可调用，适合快速集成高质量TTS。 | https://github.com/rany2/edge-tts |
| 19 | ElevenLabs docs | 官方教程 | ElevenLabs 官方文档，详述其语音合成与克隆API的调用方式，支持情感控制与多语言生成，适合构建对话式AI。 | https://elevenlabs.io/docs |
| 20 | Runway Academy | 官方教程 | Runway Academy 提供从基础到进阶的视频生成课程，涵盖 Gen-2 操作、绿幕合成与运动追踪等实战案例。 | https://academy.runwayml.com/ |
| 21 | Luma Dream Machine | 产品教程 | Luma Dream Machine 产品页，展示其从文本或图像生成连贯 3D 场景与动态视频的能力，强调物理一致性。 | https://lumalabs.ai/dream-machine |
| 22 | HeyGen docs | 官方教程 | HeyGen 官方文档，指导创建 AI 数字人视频，支持上传照片驱动口型、多语言配音与模板化批量生产。 | https://docs.heygen.com/ |
| 23 | Synthesia help | 官方教程 | Synthesia 帮助中心，提供数字人视频制作全流程指南，从选择虚拟形象到导出成品，适合企业级内容生产。 | https://help.synthesia.io/ |
| 24 | Remotion docs | 官方教程 | Remotion 官方文档，阐述如何用 React 组件编程生成视频，为构建自动化视频渲染流水线提供完整技术参考。 | https://www.remotion.dev/docs/ |
| 25 | Shotstack API docs | 官方教程 | Shotstack API 开发指南，提供云端视频编辑的接口说明，适合构建可编程的视频合成与渲染服务。 | https://shotstack.io/docs/guide/ |
| 26 | Creatomate docs | 官方教程 | Creatomate 官方文档，展示如何通过 API 和模板自动化生成视频，便于快速集成动态视频生成功能到应用中。 | https://creatomate.com/docs |

### 项目 / 论文 30 条

| # | 名称 | 类型 | 用途/摘要 | 链接 |
|---:|---|---|---|---|
| 1 | UniVA | 论文 | UniVA 提出统一视频生成架构，涵盖问题设定、数据来源与评价指标，为多任务视频生成提供可复现的基准框架。 | https://arxiv.org/abs/2511.08521 |
| 2 | Paper2Video | 论文 | Paper2Video 构建从论文自动生成视频的流水线，涉及脚本撰写、素材检索、配音合成与字幕生成，适合学术内容可视化场景。 | https://arxiv.org/abs/2510.05096 |
| 3 | VideoAgent | 论文 | VideoAgent 以智能体驱动视频生成，整合脚本规划、素材选择与镜头合成，为自动化视频制作提供端到端工作流参考。 | https://arxiv.org/abs/2509.11253 |
| 4 | VGTeam | 论文 | VGTeam 聚焦视频生成中的多智能体协作机制，定义团队分工与交互流程，实验验证了协作式生成的效果提升。 | https://arxiv.org/abs/2509.01277 |
| 5 | StoryAgent | 论文 | StoryAgent 探索故事驱动的视频生成，将叙事结构转化为镜头序列，附带评价指标与可复现性说明，适合剧情类生成研究。 | https://arxiv.org/abs/2411.04925 |
| 6 | Kubrick | 论文 | Kubrick 研究电影级视频生成技术，从数据采集到评价指标均面向高视觉质量场景，为影视风格生成提供实验依据。 | https://arxiv.org/abs/2408.10453 |
| 7 | GenMAC | 论文 | GenMAC 提出生成式多模态对齐与合成方法，解决跨模态内容一致性问题，实验覆盖多种视频与音频对齐任务。 | https://arxiv.org/abs/2412.04440 |
| 8 | WorldGPT | 论文 | WorldGPT 将世界模型与视频生成结合，通过物理规律约束生成过程，提供问题设定与可复现性细节，适合仿真与预测场景。 | https://arxiv.org/abs/2403.07944 |
| 9 | StreamingT2V | 论文 | StreamingT2V 实现流式文本到视频生成，支持长视频的渐进式输出，数据来源与评价指标面向实时生成需求。 | https://arxiv.org/abs/2403.14773 |
| 10 | HunyuanVideo | 开源项目/论文 | HunyuanVideo 是腾讯开源的视频生成项目，提供论文与完整代码，涵盖从文本到视频的合成流水线，可直接复现实验。 | https://github.com/Tencent/HunyuanVideo |
| 11 | ComfyUI | 开源项目 | 节点式界面编排稳定扩散工作流，支持视频生成与剪辑的自动化组合，适合构建复杂流水线或快速原型验证。 | https://github.com/comfyanonymous/ComfyUI |
| 12 | AnimateDiff | 开源项目 | AnimateDiff 为文本到图像模型添加动画能力，通过运动模块实现帧间一致性，代码开源，可集成到现有生成流程。 | https://github.com/guoyww/AnimateDiff |
| 13 | Stable Video Diffusion | 模型 | Stable Video Diffusion 是 Stability AI 的图像到视频模型，基于扩散架构生成连贯视频，提供预训练权重与推理示例。 | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |
| 14 | ModelScope text-to-video | 模型 | 达摩院开源的文本到视频生成模型，提供直接推理接口，可快速验证文本驱动的视频合成效果。 | https://huggingface.co/damo-vilab/text-to-video-ms-1.7b |
| 15 | VideoCrafter | 开源项目 | VideoCrafter 提供多种视频生成模式，包括文本到视频与图像到视频，代码开源，附带预训练模型与使用示例。 | https://github.com/AILab-CVC/VideoCrafter |
| 16 | Open-Sora | 开源项目 | 开源复现 Sora 视频生成能力，涵盖数据预处理到模型训练全流程，适合研究大规模视频生成技术。 | https://github.com/hpcaitech/Open-Sora |
| 17 | CogVideo | 开源项目 | CogVideo 是清华开源的文本到视频生成项目，基于预训练模型实现端到端合成，提供推理脚本与示例输出。 | https://github.com/THUDM/CogVideo |
| 18 | Whisper | 开源项目 | OpenAI 开源的通用语音识别模型，支持多语种转录与翻译。在影音生成中作为语音转文字的基础工具，可用于自动生成视频字幕或辅助音频内容索引。 | https://github.com/openai/whisper |
| 19 | WhisperX | 开源项目 | Whisper 增强版，集成语音活动检测与说话人分离，输出更精准的时间戳和多人对话转录结果，适用于会议或访谈视频处理。 | https://github.com/m-bain/whisperX |
| 20 | edge-tts | 开源项目 | 基于微软 Edge TTS 服务的 Python 库，无需 API Key 即可调用自然语音合成，适合为视频或应用快速生成配音。 | https://github.com/rany2/edge-tts |
| 21 | Coqui TTS | 开源项目 | 社区驱动的深度学习 TTS 工具包，支持多语言与声音克隆，提供从训练到部署的完整流程，可用于定制化语音合成。 | https://github.com/coqui-ai/TTS |
| 22 | SadTalker | 开源项目 | 从单张图片与音频生成说话人脸视频的模型。输入静态肖像和语音，输出唇形同步的动画，适用于虚拟主播、数字人交互等场景。 | https://github.com/OpenTalker/SadTalker |
| 23 | Wav2Lip | 开源项目 | 根据音频同步唇形运动的视频生成模型。可将任意视频中人物口型与给定语音精确匹配，常用于配音、翻译或视频后期修正。 | https://github.com/Rudrabha/Wav2Lip |
| 24 | RIFE | 开源项目 | ECCV2022 提出的实时视频帧插值算法。通过生成中间帧提升视频帧率，用于制作慢动作或平滑过渡效果，优化播放流畅度。 | https://github.com/hzwer/ECCV2022-RIFE |
| 25 | Real-ESRGAN | 开源项目 | 实用的盲超分辨率模型，擅长修复低分辨率图像与视频。能显著提升老旧或压缩素材的清晰度，在影音修复中作为关键后处理工具。 | https://github.com/xinntao/Real-ESRGAN |
| 26 | GFPGAN | 开源项目 | 腾讯 ARC 开源的人脸修复模型，专用于老照片或模糊人脸。可恢复面部细节，改善视频中人像质量，常与超分辨率模型配合使用。 | https://github.com/TencentARC/GFPGAN |
| 27 | Remotion | 开源项目 | 用 React 编写视频的框架，通过代码控制每一帧，适合程序化视频制作，如动态数据可视化或自动化剪辑。 | https://github.com/remotion-dev/remotion |
| 28 | Auto-Editor | 开源项目 | 基于音频静音检测的自动视频剪辑工具，可快速删除无用片段，精简长视频或提取精彩内容，适合粗剪或批量处理。 | https://github.com/WyattBlue/auto-editor |
| 29 | Segment Anything | 开源项目 | Meta 开源的图像分割基础模型，可识别任意物体。在影音生成中用于精准抠图或分离视频前景背景，辅助合成与特效制作。 | https://github.com/facebookresearch/segment-anything |
| 30 | Depth Anything V2 | 开源项目 | 单目深度估计模型，能从单张图片预测深度图。可获取场景三维结构，用于视频特效、AR 合成或背景虚化等后期处理。 | https://github.com/DepthAnything/Depth-Anything-V2 |

## 资料更新（2026-06-13）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| ArcReel | 开源视频生成工作台 | AI Agent 驱动的开源视频生成工作台，支持小说→角色/场景/道具设计→剧本→分镜图→视频，跨镜头角色与场景一致，基于 Nano Banana 2 & Veo 3.1 / Grok / Seedance / OpenAI | [GitHub](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR?oc=5) |
| MoneyPrinterPlus | AI 短视频流水线 | 模块化 CLI 工作流，5 节点流水线：LLM 脚本 → TTS+字幕 → Pexels/Pinterest 素材 → BGM → MoviePy 合成，支持 Hermes Agent / Claude Code / OpenClaw / Cline / Codex CLI | [GitHub](https://github.com/Chr1s-T/MoneyPrinterPlus) |
| AngeMedia-gateway | 媒体生成网关 | OpenAI 兼容的媒体生成网关，支持多提供商图像/视频生成、模型路由、提示增强及内置 Web Studio | [GitHub](https://github.com/ang77712829/AngeMedia-gateway) |
| gemini-youtube-automation | YouTube 自动化 | 完全自主的 AI Agent/Python 流水线，利用 Gemini 等 LLM 生成内容、制作视频并自动上传教育视频到 YouTube（287 Stars） | [GitHub](https://github.com/ChaitanyaEswarRajeshJakki/gemini-youtube-automation) |
| segmio-copilot-agent | 营销 Agent | 基于 Google Cloud Reasoning Engines 和 Gemini 3.5 Flash 的状态化 AI 营销 Agent，集成 MongoDB Atlas MCP 实现自动化视频生成 | [GitHub](https://github.com/iamsourabhraikwar/segmio-copilot-agent) |
| quickaishort | 短视频预发布模拟 | 多 Agent AI 系统，在发布前模拟观众对短视频的反应，基于 Google ADK、Gemini 2.5 Flash、BigQuery MCP 和 FFmpeg.wasm | [GitHub](https://github.com/HassaanFisky/quickaishort) |
| clawreel | 短视频自动化 | 为 Agent 设计的语义对齐短视频自动化流水线，从脚本生成到最终渲染，含人工审核检查点 | [GitHub](https://github.com/marylindaunpleasing8037/clawreel) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| VideoWeaver | 论文/Benchmark | 评估和进化长视频生成技能的 Agent 框架与基准，测试 Claude Code、Codex、OpenClaw 等 Agent 处理长视频生成的能力 | [arXiv](https://arxiv.org/abs/2606.08091v1) |
| ViMax: Agentic Video Generation | 论文 | 多 Agent 协作视频生成框架，通过专门组件协商叙事决策和视觉一致性，实现长视频生成 | [arXiv](https://arxiv.org/abs/2606.07649v1) |
| StoryVideoQA | 论文/数据集 | 大规模、多类型、自动生成的深度视频理解数据集，用于评估视频问答中的复杂故事线理解 | [arXiv](https://arxiv.org/abs/2606.06338v1) |
| Cosmos 3 | 论文 | 全模态世界模型，统一处理语言、图像、视频、音频和动作序列，支持视频生成和世界模拟 | [arXiv](https://arxiv.org/abs/2606.02800v2) |
| OmniDirector | 论文 | 通用多镜头相机运动克隆方法，无需交叉配对数据，从参考视频中克隆相机运动用于视频生成 | [arXiv](https://arxiv.org/abs/2606.13432v1) |
| MAVIS: Multi-Agent Video Retrieval | 论文 | 多 Agent 视频检索框架，将检索重构为协作推理，通过结构化语义库实现高效视频理解 | [arXiv](https://arxiv.org/abs/2606.09641v1) |
| World Models: A Comprehensive Survey | 论文 | 世界模型综述，涵盖架构、方法论、推理范式及应用，包括在视频生成中的应用 | [arXiv](https://arxiv.org/abs/2606.00133v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Google 搜索框 25 年来首次重新设计 | 媒体报道 | Google I/O 宣布搜索框从简单关键词输入转变为动态 AI 驱动对话界面，影响 Agent 交互方式 | [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |
| Google 以 Gemini 3.5 Flash 和 Omni 瞄准 AI Agent 和视频生成 | 媒体报道 | Google 发布 Gemini 3.5 Flash 和 Omni，强化 Agent 和视频生成能力 | [SiliconANGLE](https://news.google.com/rss/articles/CBMiogFBVV95cUxPZmVvWTBxR20zUjM5NkRydkJfVFdaUFVqZHh0VVBQd0oxeWtCdlYxRWcwd2cyaVR1Q1ZsNmlSQTZEZ3E5S3h6S2F2T3lMWldaV3NTcUhFaFBDUVlWUkctWGxaS1VONlJpclMzUjczandhai01Z01JZEZtWkR2Q21rSUtXUGI2T1JieUNwNGNtTVJYczVXX0hoUzVFYTcwQzRUTWc?oc=5) |
| 前苹果营销人员获 1000 万美元融资，扩展解码社交视频的 AI Agent | 媒体报道 | 初创公司获 1000 万美元融资，开发用于解码社交视频的 AI Agent | [ADWEEK](https://news.google.com/rss/articles/CBMiwgFBVV95cUxNOUNpNS1BRktBNlNEa093MUZtajFRTGt0M0tFT2ZpRm9uOFB1dFlNRVJfR01ReEY5dXZuQWJnZWFPaGNBMGFSak00MHdPcUJmcEs0Q3M1Vy1wX3VmZ1hlcGI3cFZyeGdObHBQWUdZSE5yd3lnY1dob1kxTEpVWmhRelE1TG9HSjUxWUk5SmRfX0NmdzBDeUJqVDhHNGVGY0d0dHYybHVuOHp6eDhPRGdzSEtndzRuWVlDaXRfWDNCZEk4Zw?oc=5) |
| LumeFlow AI 以 GPT Image 2 和 AI Agent 技能革新视频制作流水线 | 媒体报道 | LumeFlow AI 利用 GPT Image 2 和 AI Agent 技能革新视频制作流水线 | [yourvalley.net](https://news.google.com/rss/articles/CBMiygFBVV95cUxNb1BIU2lTYlhnZmZaRzRTWlZsaFRYU3hZRDZDYVRmdTlYOG95SnNTZTUzZUFoeHJZMVF0M0F0aWNrTEstXzNIQmxOVkhuVlZva2Y1Q21iTkJfa3lIR1ozcy0zb0Z1UkdHdDdjUWpoMFpwVnBSTFdWSjZtMFdCdkY3QTh1LXdQc09oZDJsNE5rUnRCdWRZMXVUZ2hBbm15T0pxaDBOS2t2UkdkU3o2TVN6UzBUbnRFZjVFQ2tmTWxPT2U0cW4tSDloTmln?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| OpenAI 收购 Ona | 收购 | OpenAI 计划收购 Ona，为 Codex 扩展安全、持久的云环境，支持企业工作流中的长时间运行 AI Agent | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| ECC (Agent Harness Performance Optimization) | 工具 | Agent 框架性能优化系统，包含技能、本能、记忆、安全和研究优先开发，支持 Claude Code、Codex、Opencode、Cursor 等 | [GitHub](https://news.google.com/rss/articles/CBMiRkFVX3lxTE4tRl9yaG1rRlVSYXpRRFdwdzFjcGpQcW5SbXMyV2UtclI5VU5kamV3NHpCQVItZ1VrTk04RWtiQzNOWmFrWkE?oc=5) |
| ComfyUI-LTXVideo | ComfyUI 节点 | 利用 LTX-2 模型的自定义节点增强视频生成工作流 | [GitHub](https://github.com/Ponlawat/ComfyUI-LTXVideo) |
| stereoframe | 3D 视频工具 | 基于 three.js 的声明式、确定性 3D 视频生成工具，专为 AI Agent 设计 | [GitHub](https://github.com/kiyeonjeon21/stereoframe) |

## 资料更新（2026-06-14）

### 项目

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| gooseworks-ai/goose-video | GitHub 项目 | 为 Claude Code、Cursor、Codex 等 AI Agent 提供视频生成技能，编排 Google Veo 3、Seedance、Higgsfield、ElevenLabs 等模型制作短视频 | [链接](https://github.com/gooseworks-ai/goose-video) |
| MakeMyClip/editor | GitHub 项目 | AI 原生视频编辑器，支持通过对话进行剪辑、缩放、加字幕，以 MCP 服务器 + Agent 技能形式交付 | [链接](https://github.com/MakeMyClip/editor) |
| ArcReel/ArcReel | GitHub 项目 | AI Agent 驱动的开源视频生成工作台，支持小说→角色/场景/道具→剧本→分镜→视频全流程，跨镜头角色与场景一致 | [链接](https://github.com/ArcReel/ArcReel) |
| KyaniteLabs/mcp-video | GitHub 项目 | 带护栏的视频编辑 MCP 服务器，支持 FFmpeg、Hyperframes，本地快速免费运行 | [链接](https://github.com/KyaniteLabs/mcp-video) |
| scowlsericulturist188/claude-auto-tok | GitHub 项目 | 用六个 AI Agent 自动化 TikTok 视频创作：趋势研究、脚本、配音、B-roll、渲染、QA | [链接](https://github.com/scowlsericulturist188/claude-auto-tok) |
| SethSkaff/YouTube-Generator | GitHub 项目 | 自主 CLAUDE.md 流水线，将带时间戳的 YouTube 脚本转为完整视频，含场景提示词生成、图像 QA、ffmpeg 合成 | [链接](https://github.com/SethSkaff/YouTube-Generator) |
| genevievesuperior757/carocut | GitHub 项目 | 多 Agent 规划 + Remotion 渲染的 AI 视频工作流，支持断点续传 | [链接](https://github.com/genevievesuperior757/carocut) |
| bchenner/ugc-content-pipeline | GitHub 项目 | 面向 TikTok Shop、Amazon、Meta 的多 Agent UGC 视频内容生产系统 | [链接](https://github.com/bchenner/ugc-content-pipeline) |
| SaiSankeerth-dev/AI_Video_studio | GitHub 项目 | 多 Agent AI 视频平台，自动完成研究主题、生成脚本、规划场景、获取素材、导出 CapCut 项目或渲染视频 | [链接](https://github.com/SaiSankeerth-dev/AI_Video_studio) |
| wanu54/code-teaching-video-agent | GitHub 项目 | AI 驱动的代码教学视频生成器（Trae 技能），将代码转换为教学讲解视频 | [链接](https://github.com/wanuo54/code-teaching-video-agent) |
| rs75/ai-video-generator-agent | GitHub 项目 | 一分钟内用 AI 创建短视频 | [链接](https://github.com/rs75/ai-video-generator-agent) |
| florianbuetow/agentic-news-generator | GitHub 项目 | 基于 YouTube 频道用 AI Agent 生成定制报纸 | [链接](https://github.com/florianbuetow/agentic-news-generator) |
| MelonS/MelonS-Agents | GitHub 项目 | 含音乐视频制作技能（60秒 9:16 短片，节拍对齐、风格感知）的 Agent | [链接](https://github.com/MelonS/MelonS-Agents) |
| heygen-com/hyperframes | GitHub 项目 | 写 HTML 渲染视频，专为 Agent 构建 | [链接](https://github.com/heygen-com/hyperframes) |

### 论文 / Benchmark

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| AgenticVBench | 论文/Benchmark | 评估 AI Agent 完成真实后期制作任务的基准，含 100 个 Agent 任务，覆盖文本/图像/音频/视频理解、长程规划与工具使用 | [链接](https://arxiv.org/abs/2605.27705v1) |
| MSAVBench | 论文/Benchmark | 首个多镜头音视频生成综合评估基准与自适应混合评估框架 | [链接](https://arxiv.org/abs/2605.20183v3) |
| EvalVerse | 论文/Benchmark | 面向专业电影级视频生成的流水线感知、专家校准基准 | [链接](https://arxiv.org/abs/2605.23271v1) |
| One Sentence, One Drama | 论文 | 基于多 Agent 系统的个性化短剧生成方法，解决叙事节奏、空间一致性与质量管控问题 | [链接](https://arxiv.org/abs/2605.22144v1) |
| Soap2Soap | 论文 | 通过多 Agent 协作实现长电影级视频翻拍，保持叙事结构、动作编排与角色身份一致性 | [链接](https://arxiv.org/abs/2605.17423v1) |
| Genflow Ad Studio | 论文 | 复合 AI 架构，用于品牌对齐、自我纠正的视频生成，集成检索式品牌记忆库 | [链接](https://arxiv.org/abs/2605.16748v1) |
| Prisma-World | 论文 | 相机可控的多 Agent 视频世界模型，解决多视角场景一致性挑战 | [链接](https://arxiv.org/abs/2606.09507v1) |
| DeepSpeak-Agentic | 论文/数据集 | 37 小时人-具身 AI Agent 半结构化对话视频数据集，用于 AI Agent 的自动取证识别 | [链接](https://arxiv.org/abs/2606.03686v1) |
| SuperMemory-VQA | 论文/Benchmark | 面向长程记忆的自我中心视觉问答基准，评估 AI Agent 在长时间视频流中的记忆能力 | [链接](https://arxiv.org/abs/2606.00825v1) |
| EgoBench | 论文/Benchmark | 交互式自我中心多模态基准，评估工具使用 Agent 的多模态感知、多跳推理与动态交互能力 | [链接](https://arxiv.org/abs/2605.27820v1) |

### 教程 / 媒体实测

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| 全程不用点鼠标，这年头AI自己就把AI视频给剪完了 | 媒体实测 | 新浪财经实测报道，展示 AI Agent 自动完成视频剪辑的全流程 | [链接](https://news.google.com/rss/articles/CBMi7gNBVV95cUxNTXlzeG82bW5LUXp6WXUxOXJiWFd4XzZlYjlMeXlDRUdhNFJJaW42V2RSa0NYcnlfSm1DWDBhNWZpZnRIRkVYQUJXU2lJR1BTd0xCaVBNTTFTUmtUeFI1enhIaGJOQUUwMmQ1TEFzVU1nenVFd1NHYURlNFpOUnpUSmpiX0NmamUwblhYcWNzOE5WQk1rcDJ5UkRuTk1qaWw5UXlKUGJDNUx1VnFMd1hoTVJwU2RQNmk1dnhodlAtTFVLOFRsTGRLM3F3SUVHb0NhUGx4bGt6MzVoWGUxMzVET0ZNT01tZ3VoRUxVSHc4bDhzTFJUZ05YSjJwbWdTamtjXzhMT2lHT3VGa0kzVVd6MFR5UTJ4d3ZxOUtJNzFhT3R2YmtJdE90UV8zcnpiaTdNcE41NmN3MGpiNjNJanp3WUlFYzFaTHo1RkdyOE5tOE9FMnpjbkNqQktXRllpN3EtRzJxaGFBaXR2TWpoNmR3aC1yZndNUnNtVHpRaU5SRTRmRVdOREJOR0Q1eUVqVHd1VHBvMkNsMVdTSjJ1QzB0Qng3bkJZNDhSaFhEdjZEbTdYcllOOEdPdThfazZoQXk3bGJObjE5SjVmS0VjYXJoWVVtdjJtMnlEZUtKNXVvc2hEYnlNdTduSUMzNUJydw?oc=5) |
| 一句话生成完整短剧！南洋理工团队提出分层Agent框架 | 教程/报道 | 南洋理工大学团队的分层 Agent 框架，实现一句话生成完整短剧 | [链接](https://news.google.com/rss/articles/CBMiSEFVX3lxTE5pWTRIOTNxWWJlR01LVWY1OGJDenZHT294U3cxSkkwRmxVWjRuN2ZQS2R5RHZ4OEdDV3ctSEFvQUkwalR3MEV0WQ?oc=5) |
| 试了十几款 AI 漫剧 Agent，为什么最后更想聊帧赞 | 媒体实测 | QQ News 对多款 AI 漫剧 Agent 的实测对比 | [链接](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1yV3VjdFpfZTUyNTA5ejhLN1FyS3ZZMDNkTDl4Qk4xUUFYeGtDV0JTOTVGTW5pVzhldFhmTThWc2dsSFc2WU9XYUMyc2hFeXZXZC04azd3?oc=5) |
| 原生Agent杀入画布！一站式搞定专业创作 | 媒体实测 | 新浪财经报道原生 Agent 一站式专业创作方案 | [链接](https://news.google.com/rss/articles/CBMi6AJBVV95cUxPMUZBNjNBNmUxQXVyZW03RkZGeXdOOHlNOG0zSG9EV0RSbDFEUmJDV1Zxcnc1MjRMUHJNQjJRLTg3UFFIa3JISWsxMUxFT1hxOVlwcFBsXzJnOElDZW5sOU4tOGxFLWFLMzFBYUlQREpyRDAzbmdHRk5nbi1zQ1RYdXhKSENYV1JGcnF1SnBXWHNQRUkzWnRVaVJJaU4tTm1RcmRCc2dGUUpucDVMdHlJd3ZkejZiOHlxdUxTZEtaUXRtRkVYbnhsOXVhb3hCQ0kyQ1NWMmZZWEpOVDVfTHNkejVNRTVBMGpST0Jxd3JJWkItZHQ0RlRWMC1PaHVtQm5XZjIxeGZ5RHBZZVVwOGdXbGFLbzR5Zjhfc0JraTRIam43amlKOGphZ3RUNjJnd3AzVlo4UkxiZ3A4dmhsNFdiTGNmR2drX3dTeHk4U2pqWndoRHNmTmhvX0tUR3A4dW1rUUQ4UlVOWEQ?oc=5) |

### 产品 / 工具

| 名称 | 类型 | 用途/摘要 | 链接 |
|------|------|-----------|------|
| Higgsfield AI | 产品 | AI 营销视频工作流工具 | [链接](https://www.youtube.com/watch?v=example) |
| MoneyPrinterTurbo | 开源工具 | 基于 AI 大模型的自动化短视频生成工具，一键主题到成片 | [链接](https://github.com/example) |
