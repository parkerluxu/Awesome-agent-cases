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
