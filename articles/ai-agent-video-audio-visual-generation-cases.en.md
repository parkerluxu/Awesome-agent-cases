# Audio/Video Generation: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards a "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality screening in subsequent updates. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (26+30)

This section is divided into two categories: `26 Tutorials / Cases` and `30 Projects / Papers`. Each entry includes a name, type, brief description, and original link for quick assessment of whether it's worth in-depth reading.

### 26 Tutorials / Cases

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | MoneyPrinterTurbo | Open-source Tutorial | Open-source project MoneyPrinterTurbo, providing a synthesis pipeline for scripts, materials, voiceovers, subtitles, and shot generation. | https://github.com/harry0703/MoneyPrinterTurbo |
| 2 | ShortGPT | Open-source Tutorial | Open-source project ShortGPT, enabling automated script writing, voiceover, and shot synthesis for short videos. | https://github.com/RayVentura/ShortGPT |
| 3 | NarratoAI | Open-source Tutorial | Open-source project NarratoAI, a complete pipeline for automatically generating voiceovers, subtitles, and video edits. | https://github.com/linyqh/NarratoAI |
| 4 | Pippit | Product Case | Wikipedia entry introducing the functionality of the Pippit product in video generation and multimedia automation. | https://en.wikipedia.org/wiki/Pippit |
| 5 | Kling AI | Product Case | Wikipedia entry outlining the application and product features of Kling AI in the field of video generation. | https://en.wikipedia.org/wiki/Kling_AI |
| 6 | Runway docs | Official Tutorial | Runway's official help center, covering operational guides for text/image-to-video, video editing, and other tools. A starting point for understanding workflows for models like Gen-2. | https://help.runwayml.com/ |
| 7 | Pika docs | Official Tutorial | Pika's official website showcasing its video generation platform. The core selling point is generating coherent short videos with low-barrier text prompts, suitable for rapid prototyping. | https://pika.art/ |
| 8 | LTX Studio | Product Case | Wikipedia overview of LTX Studio, positioned as an AI video generation tool for creative storytelling, emphasizing an automated workflow from script to storyboard. | https://en.wikipedia.org/wiki/LTX_Studio |
| 9 | Creatify | Product Case | Wikipedia entry for Creatify, focusing on its ability to automatically generate marketing videos, with a typical scenario of converting product links into ad clips. | https://en.wikipedia.org/wiki/Creatify |
| 10 | Higgsfield AI | Product Case | Wikipedia introduction to Higgsfield AI, specializing in personalized digital human video generation, capable of driving facial expressions and lip-sync from a single photo. | https://en.wikipedia.org/wiki/Higgsfield_AI |
| 11 | ComfyUI examples | Tutorial | ComfyUI's official example set, showcasing image and video generation pipelines in node graph form, reproducing typical workflows for models like Stable Diffusion and AnimateDiff. | https://comfyanonymous.github.io/ComfyUI_examples/ |
| 12 | AnimateDiff docs | Tutorial | AnimateDiff's GitHub repository, providing a diffusion model implementation for transforming static image sequences into smooth animations, along with inference scripts and pre-trained weights. | https://github.com/guoyww/AnimateDiff |
| 13 | Stable Video Diffusion | Model Documentation | Model card for Stable Video Diffusion on Hugging Face, including img2vid weights, inference examples, and usage limitations, suitable for direct invocation. | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |
| 14 | Diffusers text-to-video | Official Tutorial | Tutorial for text-to-video using the Hugging Face Diffusers library, demonstrating how to generate short video clips from text using pre-trained models with just a few lines of code. | https://huggingface.co/docs/diffusers/using-diffusers/text-img2vid |
| 15 | Whisper usage | Project Tutorial | OpenAI Whisper's GitHub project, a general-purpose speech recognition model supporting multilingual transcription and translation, deployable locally for high-accuracy audio-to-text. | https://github.com/openai/whisper |
| 16 | WhisperX docs | Project Tutorial | WhisperX adds speaker diarization and word-level timestamp alignment on top of Whisper, improving transcription accuracy and usability in multi-speaker scenarios. | https://github.com/m-bain/whisperX |
| 17 | Coqui TTS docs | Tutorial | Coqui TTS's open-source text-to-speech engine, supporting multiple languages and voice cloning, providing pre-trained models and training scripts for customizable voice styles. | https://github.com/coqui-ai/TTS |
| 18 | Edge TTS project | Project Tutorial | The Edge TTS project encapsulates Microsoft Edge browser's free speech service, callable without an API Key, suitable for quickly integrating high-quality TTS. | https://github.com/rany2/edge-tts |
| 19 | ElevenLabs docs | Official Tutorial | ElevenLabs official documentation detailing the invocation methods for its voice synthesis and cloning API, supporting emotion control and multilingual generation, suitable for building conversational AI. | https://elevenlabs.io/docs |
| 20 | Runway Academy | Official Tutorial | Runway Academy offers courses from basic to advanced video generation, covering practical cases like Gen-2 operation, green screen compositing, and motion tracking. | https://academy.runwayml.com/ |
| 21 | Luma Dream Machine | Product Tutorial | Luma Dream Machine product page, showcasing its ability to generate coherent 3D scenes and dynamic videos from text or images, emphasizing physical consistency. | https://lumalabs.ai/dream-machine |
| 22 | HeyGen docs | Official Tutorial | HeyGen official documentation, guiding the creation of AI digital human videos, supporting photo-driven lip-sync, multilingual voiceovers, and template-based batch production. | https://docs.heygen.com/ |
| 23 | Synthesia help | Official Tutorial | Synthesia help center, providing a full workflow guide for digital human video production, from selecting virtual avatars to exporting the final product, suitable for enterprise-level content creation. | https://help.synthesia.io/ |
| 24 | Remotion docs | Official Tutorial | Remotion official documentation, explaining how to programmatically generate videos using React components, providing a complete technical reference for building automated video rendering pipelines. | https://www.remotion.dev/docs/ |
| 25 | Shotstack API docs | Official Tutorial | Shotstack API development guide, providing interface documentation for cloud-based video editing, suitable for building programmable video compositing and rendering services. | https://shotstack.io/docs/guide/ |
| 26 | Creatomate docs | Official Tutorial | Creatomate official documentation, demonstrating how to automate video generation via API and templates, facilitating the rapid integration of dynamic video generation features into applications. | https://creatomate.com/docs |

### 30 Projects / Papers

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | UniVA | Paper | UniVA proposes a unified video generation architecture, covering problem formulation, data sources, and evaluation metrics, providing a reproducible benchmark framework for multi-task video generation. | https://arxiv.org/abs/2511.08521 |
| 2 | Paper2Video | Paper | Paper2Video constructs a pipeline for automatically generating videos from papers, involving script writing, material retrieval, voiceover synthesis, and subtitle generation, suitable for academic content visualization. | https://arxiv.org/abs/2510.05096 |
| 3 | VideoAgent | Paper | VideoAgent drives video generation with an agent, integrating script planning, material selection, and shot synthesis, providing an end-to-end workflow reference for automated video production. | https://arxiv.org/abs/2509.11253 |
| 4 | VGTeam | Paper | VGTeam focuses on multi-agent collaboration mechanisms in video generation, defining team division of labor and interaction processes, experimentally validating the effectiveness of collaborative generation. | https://arxiv.org/abs/2509.01277 |
| 5 | StoryAgent | Paper | StoryAgent explores story-driven video generation, transforming narrative structures into shot sequences, accompanied by evaluation metrics and reproducibility notes, suitable for narrative generation research. | https://arxiv.org/abs/2411.04925 |
| 6 | Kubrick | Paper | Kubrick researches cinematic-level video generation technology, targeting high visual quality scenarios from data collection to evaluation metrics, providing experimental basis for film-style generation. | https://arxiv.org/abs/2408.10453 |
| 7 | GenMAC | Paper | GenMAC proposes generative multimodal alignment and composition methods to solve cross-modal content consistency issues, with experiments covering various video and audio alignment tasks. | https://arxiv.org/abs/2412.04440 |
| 8 | WorldGPT | Paper | WorldGPT combines world models with video generation, constraining the generation process through physical laws, providing problem formulation and reproducibility details, suitable for simulation and prediction scenarios. | https://arxiv.org/abs/2403.07944 |
| 9 | StreamingT2V | Paper | StreamingT2V implements streaming text-to-video generation, supporting progressive output of long videos, with data sources and evaluation metrics oriented towards real-time generation needs. | https://arxiv.org/abs/2403.14773 |
| 10 | HunyuanVideo | Open-source Project/Paper | HunyuanVideo is Tencent's open-source video generation project, providing a paper and complete code covering the text-to-video synthesis pipeline, directly reproducible for experiments. | https://github.com/Tencent/HunyuanVideo |
| 11 | ComfyUI | Open-source Project | Node-based interface for orchestrating Stable Diffusion workflows, supporting automated composition of video generation and editing, suitable for building complex pipelines or rapid prototyping. | https://github.com/comfyanonymous/ComfyUI |
| 12 | AnimateDiff | Open-source Project | AnimateDiff adds animation capabilities to text-to-image models, achieving inter-frame consistency through motion modules. Code is open-source and integrable into existing generation workflows. | https://github.com/guoyww/AnimateDiff |
| 13 | Stable Video Diffusion | Model | Stable Video Diffusion is Stability AI's image-to-video model, generating coherent videos based on a diffusion architecture, providing pre-trained weights and inference examples. | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |
| 14 | ModelScope text-to-video | Model | Damo Academy's open-source text-to-video generation model, providing a direct inference interface for quickly validating text-driven video synthesis results. | https://huggingface.co/damo-vilab/text-to-video-ms-1.7b |
| 15 | VideoCrafter | Open-source Project | VideoCrafter offers multiple video generation modes, including text-to-video and image-to-video. Code is open-source, accompanied by pre-trained models and usage examples. | https://github.com/AILab-CVC/VideoCrafter |
| 16 | Open-Sora | Open-source Project | Open-source reproduction of Sora's video generation capabilities, covering the entire process from data preprocessing to model training, suitable for researching large-scale video generation techniques. | https://github.com/hpcaitech/Open-Sora |
| 17 | CogVideo | Open-source Project | CogVideo is Tsinghua University's open-source text-to-video generation project, achieving end-to-end synthesis based on pre-trained models, providing inference scripts and example outputs. | https://github.com/THUDM/CogVideo |
| 18 | Whisper | Open-source Project | OpenAI's open-source general-purpose speech recognition model, supporting multilingual transcription and translation. In audio/video generation, it serves as a foundational tool for speech-to-text, used for automatically generating video subtitles or aiding audio content indexing. | https://github.com/openai/whisper |
| 19 | WhisperX | Open-source Project | Enhanced version of Whisper, integrating voice activity detection and speaker diarization, outputting more precise timestamps and multi-speaker transcription results, suitable for processing meeting or interview videos. | https://github.com/m-bain/whisperX |
| 20 | edge-tts | Open-source Project | A Python library based on Microsoft Edge TTS service, callable without an API Key for natural speech synthesis, suitable for quickly generating voiceovers for videos or applications. | https://github.com/rany2/edge-tts |
| 21 | Coqui TTS | Open-source Project | A community-driven deep learning TTS toolkit, supporting multiple languages and voice cloning, providing a complete workflow from training to deployment, usable for customized speech synthesis. | https://github.com/coqui-ai/TTS |
| 22 | SadTalker | Open-source Project | A model for generating talking face videos from a single image and audio. Input a static portrait and speech, output lip-synced animation, applicable to virtual anchors, digital human interaction, etc. | https://github.com/OpenTalker/SadTalker |
| 23 | Wav2Lip | Open-source Project | A video generation model for synchronizing lip movements with audio. It can precisely match the mouth shape of a person in any video with a given speech, commonly used for dubbing, translation, or video post-correction. | https://github.com/Rudrabha/Wav2Lip |
| 24 | RIFE | Open-source Project | A real-time video frame interpolation algorithm proposed at ECCV2022. It increases video frame rate by generating intermediate frames, used for creating slow-motion effects or smooth transitions, optimizing playback fluidity. | https://github.com/hzwer/ECCV2022-RIFE |
| 25 | Real-ESRGAN | Open-source Project | A practical blind super-resolution model, adept at restoring low-resolution images and videos. It can significantly enhance the clarity of old or compressed material, serving as a key post-processing tool in audio/video restoration. | https://github.com/xinntao/Real-ESRGAN |
| 26 | GFPGAN | Open-source Project | A face restoration model open-sourced by Tencent ARC, specifically designed for old photos or blurry faces. It can recover facial details and improve portrait quality in videos, often used in conjunction with super-resolution models. | https://github.com/TencentARC/GFPGAN |
| 27 | Remotion | Open-source Project | A framework for writing videos using React, controlling each frame through code, suitable for programmatic video production, such as dynamic data visualization or automated editing. | https://github.com/remotion-dev/remotion |
| 28 | Auto-Editor | Open-source Project | An automatic video editing tool based on audio silence detection, capable of quickly removing useless segments, trimming long videos, or extracting highlights, suitable for rough cuts or batch processing. | https://github.com/WyattBlue/auto-editor |
| 29 | Segment Anything | Open-source Project | Meta's open-source foundation model for image segmentation, capable of identifying any object. In audio/video generation, it is used for precise matting or separating video foreground/background, aiding compositing and special effects. | https://github.com/facebookresearch/segment-anything |
| 30 | Depth Anything V2 | Open-source Project | A monocular depth estimation model capable of predicting depth maps from a single image. It can obtain the 3D structure of a scene, used for video effects, AR compositing, or background blurring in post-processing. | https://github.com/DepthAnything/Depth-Anything-V2 |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| ArcReel | Open-source AI video workspace | AI Agent-driven open-source video generation workbench: novel → character/scene/prop design → script → storyboard → video, with cross-shot character and scene consistency. Powered by Nano Banana 2 & Veo 3.1 / Grok / Seedance / OpenAI. | [GitHub](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR?oc=5) |
| MoneyPrinterPlus | AI video generation pipeline | Modular CLI workflow for Hermes Agent / Claude Code / OpenClaw / Cline / Codex CLI. 5-node pipeline: LLM script → TTS+subtitles → Pexels/Pinterest assets → BGM → MoviePy compose. | [GitHub](https://github.com/Chr1s-T/MoneyPrinterPlus) |
| AngeMedia-gateway | OpenAI-compatible media generation gateway | Supports multi-provider image/video generation, model routing, prompt enhancement, and built-in Web Studio for AI Agents. | [GitHub](https://github.com/ang77712829/AngeMedia-gateway) |
| gemini-youtube-automation | Autonomous AI Agent pipeline | Fully autonomous Python pipeline using LLMs (Gemini) to generate content, produce videos, and automatically upload educational videos to YouTube. | [GitHub](https://github.com/ChaitanyaEswarRajeshJakki/gemini-youtube-automation) |
| segmio-copilot-agent | Stateful AI marketing agent | Built with Google Cloud Reasoning Engines and Gemini 3.5 Flash, integrated with MongoDB Atlas MCP for automated video generation. | [GitHub](https://github.com/iamsourabhraikwar/segmio-copilot-agent) |
| quickaishort | Multi-agent AI system | Pre-flight simulation of audience reactions to short-form video clips before publishing — built on Google ADK, Gemini 2.5 Flash, BigQuery MCP, and FFmpeg.wasm. | [GitHub](https://github.com/HassaanFisky/quickaishort) |
| ComfyUI-LTXVideo | ComfyUI custom nodes | Enhances video generation with custom nodes for the LTX-2 model, improving creative workflows. | [GitHub](https://github.com/Ponlawat/ComfyUI-LTXVideo) |
| clawreel | AI short video production automation | Semantic-aligned pipeline for agents, from script generation to final render, with human-in-the-loop checkpoints. | [GitHub](https://github.com/marylindaunpleasing8037/clawreel) |
| stereoframe | Declarative 3D video framework | Declarative, deterministic 3D video on three.js — built for AI agents. | [GitHub](https://github.com/kiyeonjeon21/stereoframe) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| VideoWeaver | Benchmark & framework | Evaluates and evolves skills for agentic long video generation. Tests whether agent frameworks (Claude Code, Codex, OpenClaw) can handle long-horizon multimodal video tasks. | [arXiv](https://arxiv.org/abs/2606.08091v1) |
| StoryVideoQA | Dataset & benchmark | Large-scale, multi-genre, auto-generated dataset for deep video understanding (DVU) via VideoQA, targeting complex storylines. | [arXiv](https://arxiv.org/abs/2606.06338v1) |
| Cosmos 3 | World model family | Omnimodal world models for Physical AI: jointly process and generate language, image, video, audio, and action sequences within a unified mixture-of-transformers architecture. | [arXiv](https://arxiv.org/abs/2606.02800v2) |
| ViMax | Agentic video generation framework | Multi-agent collaboration framework for long-form video generation with narrative planning and visual consistency across scenes. | [arXiv](https://arxiv.org/abs/2606.07649v1) |
| OmniDirector | Camera motion cloning | General multi-shot camera cloning from reference videos without cross-paired data, using grid motion video encoding. | [arXiv](https://arxiv.org/abs/2606.13432v1) |
| MAVIS | Multi-agent video retrieval | Multi-agent framework rethinking retrieval as cooperative reasoning, parsing raw videos into Structured Semantic Libraries. | [arXiv](https://arxiv.org/abs/2606.09641v1) |
| World Models Survey | Comprehensive survey | Surveys architectures, methodologies, reasoning paradigms, and applications of world models across RL, robotics, autonomous driving, and video generation. | [arXiv](https://arxiv.org/abs/2606.00133v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| Google Gemini 3.5 Flash & Omni | Model release | Google targets AI agents and video generation with Gemini 3.5 Flash and Omni. | [SiliconANGLE](https://news.google.com/rss/articles/CBMiogFBVV95cUxPZmVvWTBxR20zUjM5NkRydkJfVFdaUFVqZHh0VVBQd0oxeWtCdlYxRWcwd2cyaVR1Q1ZsNmlSQTZEZ3E5S3h6S2F2T3lMWldaV3NTcUhFaFBDUVlWUkctWGxaS1VONlJpclMzUjczandhai01Z01JZEZtWkR2Q21rSUtXUGI2T1JieUNwNGNtTVJYczVXX0hoUzVFYTcwQzRUTWc?oc=5) |
| LumeFlow AI | Video production pipeline | Revolutionizes video production pipeline with GPT Image 2 and AI Agent Skill. | [yourvalley.net](https://news.google.com/rss/articles/CBMiygFBVV95cUxNb1BIU2lTYlhnZmZaRzRTWlZsaFRYU3hZRDZDYVRmdTlYOG95SnNTZTUzZUFoeHJZMVF0M0F0aWNrTEstXzNIQmxOVkhuVlZva2Y1Q21iTkJfa3lIR1ozcy0zb0Z1UkdHdDdjUWpoMFpwVnBSTFdWSjZtMFdCdkY3QTh1LXdQc09oZDJsNE5rUnRCdWRZMXVUZ2hBbm15T0pxaDBOS2t2UkdkU3o2TVN6UzBUbnRFZjVFQ2tmTWxPT2U0cW4tSDloTmln?oc=5) |
| ECC | Agent harness optimization system | Performance optimization system for agent harnesses (Claude Code, Codex, Opencode, Cursor). Skills, instincts, memory, security, and research-first development. | [GitHub](https://news.google.com/rss/articles/CBMiRkFVX3lxTE4tRl9yaG1rRlVSYXpRRFdwdzFjcGpQcW5SbXMyV2UtclI5VU5kamV3NHpCQVItZ1VrTk04RWtiQzNOWmFrWkE?oc=5) |
| OpenAI to acquire Ona | Acquisition | OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. | [OpenAI](https://openai.com/index/openai-to-acquire-ona) |
| Ex-Apple Marketer raises $10M | Startup funding | Raises $10M to scale AI agents that decode social video. | [ADWEEK](https://news.google.com/rss/articles/CBMiwgFBVV95cUxNOUNpNS1BRktBNlNEa093MUZtajFRTGt0M0tFT2ZpRm9uOFB1dFlNRVJfR01ReEY5dXZuQWJnZWFPaGNBMGFSak00MHdPcUJmcEs0Q3M1Vy1wX3VmZ1hlcGI3cFZyeGdObHBQWUdZSE5yd3lnY1dob1kxTEpVWmhRelE1TG9HSjUxWUk5SmRfX0NmdzBDeUJqVDhHNGVGY0d0dHYybHVuOHp6eDhPRGdzSEtndzRuWVlDaXRfWDNCZEk4Zw?oc=5) |
