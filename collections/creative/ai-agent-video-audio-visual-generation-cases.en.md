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

## Resource Update (2026-06-14)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| gooseworks-ai/goose-video | GitHub | Video generation skills for AI agents (Claude Code, Cursor, Codex). Orchestrates Google Veo 3, Seedance, Higgsfield, ElevenLabs and other models to make short-form videos. | [GitHub](https://github.com/gooseworks-ai/goose-video) |
| MakeMyClip/editor | GitHub | AI-native video editor — talk to make video. Trim, zoom, caption, and assemble clips from any AI agent. Delivered as an MCP server + agent skill. | [GitHub](https://github.com/MakeMyClip/editor) |
| ArcReel/ArcReel | GitHub | AI Agent-driven open-source video workspace: novel → character/scene/prop design → script → storyboard → video, with cross-shot character and scene consistency. Powered by Nano Banana 2, Veo 3.1, Grok, Seedance, OpenAI. | [GitHub](https://github.com/ArcReel/ArcReel) |
| KyaniteLabs/mcp-video | GitHub | Guardrailed video editing MCP server for AI agents. FFmpeg, Hyperframes, repurposing tools, Python client, and CLI. Local, fast, free. | [GitHub](https://github.com/KyaniteLabs/mcp-video) |
| Cake-sweet/agents | GitHub | Claude Code Agents offering specialized AI agents for code, localization, architecture, and automation. Build and tailor agents for tasks. | [GitHub](https://github.com/Cake-sweet/agents) |
| scowlsericulturist188/claude-auto-tok | GitHub | Automate TikTok video creation with six AI agents for trend research, scripts, voiceovers, B-roll, rendering, and QA. | [GitHub](https://github.com/scowlsericulturist188/claude-auto-tok) |
| SethSkaff/YouTube-Generator | GitHub | Autonomous CLAUDE.md pipeline that turns a timestamped YouTube script into a finished video: AI agents write per-timestamp scene prompts, images generated via ChatGPT, vision agent QAs, ffmpeg assembles 1080p video with audio. | [GitHub](https://github.com/SethSkaff/YouTube-Generator) |
| genevievesuperior757/carocut | GitHub | Build AI video workflows with multi-agent planning, Remotion rendering, and resume support for fast, automated video production. | [GitHub](https://github.com/genevievesuperior757/carocut) |
| SaiSankeerth-dev/AI_Video_studio | GitHub | Multi-agent AI platform that automates video creation by researching topics, generating scripts, planning scenes, sourcing assets, and exporting editable CapCut projects or rendered videos. | [GitHub](https://github.com/SaiSankeerth-dev/AI_Video_studio) |
| bchenner/ugc-content-pipeline | GitHub | Multi-agent AI content production system for UGC video creation (TikTok Shop, Amazon, Meta). | [GitHub](https://github.com/bchenner/ugc-content-pipeline) |
| wanu54/code-teaching-video-agent | GitHub | AI-powered code teaching video generator — Trae skill for converting code into teaching videos. | [GitHub](https://github.com/wanuo54/code-teaching-video-agent) |
| rs75/ai-video-generator-agent | GitHub | Create engaging short-form videos with AI in one minute. | [GitHub](https://github.com/rs75/ai-video-generator-agent) |
| florianbuetow/agentic-news-generator | GitHub | Generate a custom newspaper with an AI agent based on your favorite YouTube channels. | [GitHub](https://github.com/florianbuetow/agentic-news-generator) |
| huber1105/workshop-agents | GitHub | Explore Genkit agents for YouTube video searches and content generation. | [GitHub](https://github.com/huber1105/workshop-agents) |
| MelonS/MelonS-Agents | GitHub | Agent that builds, plays, and verifies its own game; includes production media skills: music-video (60s 9:16 shorts, beat-aligned, genre-aware). | [GitHub](https://github.com/MelonS/MelonS-Agents) |
| vishtechie07/ai-content-suite | GitHub | AI-powered content creation suite with 5 specialized agents: Podcast Creator, Video Script Generator, Brand Voice Analyzer, Study Plan Creator, Social Media Agent. | [GitHub](https://github.com/vishtechie07/ai-content-suite) |
| leamsigc/ShortsGenerator | GitHub | Automate the creation of Shorts content locally with simple steps. | [GitHub](https://github.com/leamsigc/ShortsGenerator) |
| andrzejpeanut439/ComfyUI-DaVinci-MagiHuman | GitHub | Build ComfyUI custom nodes for daVinci-MagiHuman fast audio-video generation with GPU memory savings and async prefetching. | [GitHub](https://github.com/andrzejpeanut439/ComfyUI-DaVinci-MagiHuman) |
| Candilefthand269/shotfun-creator | GitHub | Automate AI content production for images, videos, and audio by orchestrating task workflows and custom skills via an agent-compatible interface. | [GitHub](https://github.com/Candilefthand269/shotfun-creator) |
| heygen-com/hyperframes | GitHub | Write HTML. Render video. Built for agents. | [GitHub](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9jX1VJZUtYYlBfWndCZEYtUlhhTUpNOEZrZks1U0VVVHpQYmFDZFNkUGJ1VzBZaEVES3hsNHVmbkhhQm5OVlVSSm9PYU53T1FzTzRZ?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AgenticVBench | arXiv | Benchmark of 100 agentic tasks across 4 task families spanning real-world post-production workflow, constructed from real production workflows contributed by 20 industry experts. | [arXiv](https://arxiv.org/abs/2605.27705v1) |
| EvalVerse | arXiv | Pipeline-aware and expert-calibrated benchmarking for professional cinematic video generation, evaluating cinematic quality, acting, and aesthetics. | [arXiv](https://arxiv.org/abs/2605.23271v1) |
| MSAVBench | arXiv | First comprehensive benchmark and adaptive hybrid evaluation framework for multi-shot audio-video generation. | [arXiv](https://arxiv.org/abs/2605.20183v3) |
| EgoBench | arXiv | Interactive egocentric multimodal benchmark for tool-using agents, jointly evaluating multimodal perception, tool invocation, and dynamic interaction. | [arXiv](https://arxiv.org/abs/2605.27820v1) |
| SuperMemory-VQA | arXiv | Egocentric visual question-answering benchmark for long-horizon memory, moving beyond short-term video comprehension to address realistic human memory gaps. | [arXiv](https://arxiv.org/abs/2606.00825v1) |
| The DeepSpeak-Agentic Dataset | arXiv | Dataset of 37+ hours of semi-structured conversations between a human and an embodied AI agent, for forensic identification and human-agent interaction study. | [arXiv](https://arxiv.org/abs/2606.03686v1) |
| One Sentence, One Drama | arXiv | Personalized short-form drama generation via multi-agent systems, addressing narrative pacing, spatial consistency, and production-level quality control. | [arXiv](https://arxiv.org/abs/2605.22144v1) |
| Soap2Soap | arXiv | Long cinematic video remaking via multi-agent collaboration, preserving narrative structure, motion choreography, and character identity across hundreds of shots. | [arXiv](https://arxiv.org/abs/2605.17423v1) |
| Genflow Ad Studio | arXiv | Compound AI architecture for brand-aligned, self-correcting video generation, integrating retrieval-based brand memory with generative media production. | [arXiv](https://arxiv.org/abs/2605.16748v1) |
| Prisma-World | arXiv | Camera-controllable multi-agent video world model that maintains consistent objects, layouts, and appearances across multiple agent views. | [arXiv](https://arxiv.org/abs/2606.09507v1) |
| Resonant Minds | arXiv | Closed-loop dual-agent framework integrating perception, social reasoning, and expression for lifelike digital humans with genuine social intelligence. | [arXiv](https://arxiv.org/abs/2606.05896v1) |
| Does Persona Make LLMs K-pop Fans? | arXiv | Pilot study of LLM-based online concert audience agents, using persona-conditioned multi-agent system to generate real-time fan chat alongside K-pop performance video. | [arXiv](https://arxiv.org/abs/2606.07837v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Hyperframes (by HeyGen) | Tool | Write HTML. Render video. Built for agents. | [GitHub](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9jX1VJZUtYYlBfWndCZEYtUlhhTUpNOEZrZks1U0VVVHpQYmFDZFNkUGJ1VzBZaEVES3hsNHVmbkhhQm5OVlVSSm9PYU53T1FzTzRZ?oc=5) |
| NVIDIA Agent Skills for Physical AI | Toolset | NVIDIA released a major collection of open source agent tools and skills for physical AI, including autonomous vehicles, robotics, and vision AI. | [NVIDIA Newsroom](https://news.google.com/rss/articles/CBMivgFBVV95cUxQaXh6M3BwdlF3a3VWWEhQSUdhQTR5WFk4UGJINUFwa0ZCQW0ybUljYWoxbzNETmViNGJpS2llXzV6R01iemV0QndtSzIzMmlwMXlhOTJmZUxrSGxWUlhGb0ZSRWJlcVhaMURQMHhzRjRIYzhnUl9OYzRaaWZOSjNPOVA1b25Gcm9PNXBCcnI3bG9ucThQRXBzUzExX3NWQ1VURjZxNXhLSWdMRXFhNUV2ajZoZnRieVc5dUQ3ZXBB?oc=5) |

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| ProductVideoCreator | GitHub | AI Agent Skills toolkit for automated product introduction video generation with Remotion, Playwright, and edge-tts | [GitHub](https://github.com/MatrixReligio/ProductVideoCreator) |
| teaching-style-skills | GitHub | Teaching-style skills for 10 well-known educators — lets an AI agent script & produce educational videos in each teacher's style. Includes a generic video-production pipeline | [GitHub](https://github.com/speechlab0210/teaching-style-skills) |
| ai-short-drama-studio | GitHub | AI short drama workflow system with agents, multi-model review, and video production task pipeline | [GitHub](https://github.com/weeduon/ai-short-drama-studio) |
| wind-comic | GitHub | Multi-agent AI pipeline that turns one line of text into a finished short-form drama: script, cinematic storyboards, character-consistent video. Provider-agnostic (OpenAI/Claude, MJ, Minimax, Veo/Sora, fal, ComfyUI). MIT | [GitHub](https://github.com/ChrisChen667788/wind-comic) |
| befriendsvideo | GitHub | Multi-agent AI platform for e-commerce short-video script creation — orchestrator + 5 sub-agents + 13 skills, turning expert creators' methodology into system architecture | [GitHub](https://github.com/Danyangkk/befriendsvideo) |
| TermSub | GitHub | AI-powered video translation and terminology management pipeline. Features multi-agent translation, RTL support, and a built-in web UI for consistent subtitles | [GitHub](https://github.com/seaweedbeehive/TermSub) |
| director | GitHub | AI Video Production Pipeline — TypeScript agents powered by Neurolink | [GitHub](https://github.com/juspay/director) |
| manim-video-creator | GitHub | Local web app for creating 3Blue1Brown/Manim-style AI explainer videos — FastAPI + agent pipeline + interactive editor. Runs with zero API keys (mock LLM/TTS) | [GitHub](https://github.com/Cohen-Shahar/manim-video-creator) |
| ClipForge | GitHub | Open-source AI e-commerce/UGC short-video generator — upload a product image, AI auto-extracts selling points + writes script + locks original product image + adds visuals/voiceover/subtitles, one-click output for Douyin/Kuaishou/Xiaohongshu/TikTok Shop | [GitHub](https://github.com/xixihhhh/clipforge) |
| opensource-clipping | GitHub | AI Auto-Clipper & Teaser Generator — Transform long-form videos into viral short-form highlights with face-tracking, karaoke subtitles, B-roll, BGM ducking, and auto-thumbnails. Powered by Whisper, Gemini AI & MediaPipe/YOLO | [GitHub](https://github.com/NaufalRizqullah/opensource-clipping) |
| tts-video-generator | GitHub | Generate AI-voiced short videos with synced subtitles using Python, ElevenLabs TTS, and FFmpeg | [GitHub](https://github.com/Fragrant-syllable859/tts-video-generator) |
| AutoShorts-Studio | GitHub | AI TikTok Maker 2026 - Auto Viral Video Generator & Editor | [GitHub](https://github.com/sajid5669/AutoShorts-Studio) |
| AutoVideo-RVC | GitHub | Automated portrait (9:16) video generator for TikTok, Reels & Shorts. Powered by local Ollama LLMs, Edge-TTS, GPU-accelerated local RVC V2 voice conversion, Dynamic subtitles, and MoviePy smart B-roll stitching. 100% offline-ready with PySide6 Desktop GUI | [GitHub](https://github.com/brillianodhiya/AutoVideo-RVC) |
| china_video_bot | GitHub | Automated China travel/culture video pipeline: Groq LLM + edge-tts + MoviePy + YouTube API. Runs daily on Oracle Cloud Free Tier | [GitHub](https://github.com/GitHub-Zho/china_video_bot) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| DirectorBench | Paper | Diagnosing long-form video generation with personalized multi-agent evaluation. Benchmark for minute-long, multi-shot creation with narrative structure, cinematic control, audio, and cross-modal synchronization | [arXiv](https://arxiv.org/abs/2605.30090v1) |
| VideoAgent | Paper | All-in-one agentic framework for video understanding and editing. Addresses diverse video comprehension/editing operations and long-video understanding for coherent narrative creation | [arXiv](https://arxiv.org/abs/2606.23327v1) |
| DataMagic | Paper | Transforming tabular data into data insight video. Agentic system integrating dynamic charts, voice narration, and synchronized animations | [arXiv](https://arxiv.org/abs/2606.20388v1) |
| LooseControlVideo | Paper | Directorial video control using spatial blocking. Framework for intuitive 3D spatial orchestration in text-to-video generation using spatial blocking | [arXiv](https://arxiv.org/abs/2606.19495v1) |
| CoTriSyGen | Paper | Closed-loop triplet synergistic generation for long-form video. Agentic framework formulating multi-shot long video generation as a closed-loop visual-text-memory synergy process | [arXiv](https://arxiv.org/abs/2606.16184v1) |
| GroundShot | Paper | Visually consistent multi-shot long video generation via entity-grounded shot scheduling. Addresses identity drift and compounding inconsistencies across shots | [arXiv](https://arxiv.org/abs/2606.20799v1) |
| CHIEF | Paper | Creator-driven recurrent video generation with agentic feedback loops. Bridges creative intent and visual quality through human-in-the-loop recurrent self-improvement | [arXiv](https://arxiv.org/abs/2606.18591v1) |
| DRIVE-CHOREO | Paper | LLM-choreographed multi-agent world model with unified latent co-compression for multi-view driving video generation | [arXiv](https://arxiv.org/abs/2606.17536v1) |
| Divide, Deliberate, Decide | Paper | Multi-agent framework for fine-grained egocentric action recognition. Fully-local, zero-shot framework with VLM orchestrator and heterogeneous VLM specialist ensemble | [arXiv](https://arxiv.org/abs/2606.17627v1) |
| DataClaw0 | Paper | Agentic tailoring multimodal data from raw streams. Paradigm shift towards Agentic Data Tailoring for actively refining and structuring data from raw streams | [arXiv](https://arxiv.org/abs/2606.21337v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| MoneyPrinterTurbo (blog post) | Tutorial | Deep-dive article on MoneyPrinterTurbo open-source AI video generator — one-click topic to finished video, local deployment to remote access | [Blog](https://www.cnblogs.com/ljbguanli/p/20058282) |
| MoneyPrinterTurbo (blog post) | Tutorial | Introduction to MoneyPrinterTurbo — free open-source AI short video generation tool with full automation workflow | [Blog](https://www.cnblogs.com/xiao987334176/p/18991935) |
| MoneyPrinterTurbo (Gitee) | Tutorial | Custom video generation with MoneyPrinterTurbo — provide topic/keyword, auto-generate copy, materials, subtitles, background music, and synthesize HD short video | [Gitee](https://gitee.com/jing12312/MoneyPrinterTurbo) |
| MoneyPrinterTurbo (GitHub README) | Tutorial | MoneyPrinterTurbo README with docker-compose deployment instructions | [GitHub](https://github.com/harry0703/MoneyPrinterTurbo/blob/main/README-en.md) |
| MoneyPrinterTurbo (PyPI) | Tutorial | MoneyPrinterTurbo PyPI package — WebUI and API service startup instructions | [PyPI](https://pypi.org/project/MoneyPrinterTurbo/) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| 豆包 (Doubao) | Product | ByteDance's AI assistant — Seedance 2.0 video generation model now fully integrated, free to use | [Website](https://www.doubao.com/) |

## Resource Update (2026-07-05)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| HKUDS/ViMax | Agentic Video Generation | Agentic Video Generation (Director, Screenwriter, Producer, and Video Generator All-in-One). Stars: 10900. | [github.com/HKUDS/ViMax](https://github.com/HKUDS/ViMax) |
| okbeng03/vimax_web | Agentic Video Generation | ViMax Web: Agentic Video Generation (Director, Screenwriter, Producer, and Video Generator All-in-One). Stars: 0. | [github.com/okbeng03/vimax_web](https://github.com/okbeng03/vimax_web) |
| mahshid1378/Open-AI-Micro-Drama-Generator | Agentic Video Generation | AI short drama & micro-drama video generator — turns any idea into a complete short-form drama using multi-agent AI pipeline (screenwriter → storyboard → frames → video). Seedance 2 VIP, Kling 3.0 Pro, Veo 3.1, Sora 2. Stars: 0. | [github.com/mahshid1378/Open-AI-Micro-Drama-Generator](https://github.com/mahshid1378/Open-AI-Micro-Drama-Generator) |
| andr5579/ai-agent-faceless-video-generator | Agentic Video Generation | Autonomous AI agent that brainstorms video ideas with structured output parsing, generates faceless video content end-to-end (no on-camera presenter), and publishes the result across 9 social platforms via Blotato. Stars: 0. | [github.com/andr5579/ai-agent-faceless-video-generator](https://github.com/andr5579/ai-agent-faceless-video-generator) |
| snow884/agentic-short-video-generation | Agentic Video Generation | Agentic short video generation. Stars: 0. | [github.com/snow884/agentic-short-video-generation](https://github.com/snow884/agentic-short-video-generation) |
| kasbsquall/digital-farm-showrunner | Agentic Video Generation | AI Showrunner autónomo: 4 agentes de IA generan micro-dramas de granja diarios (guion→video→QA→publicación). Qwen Cloud Hackathon 2026 · Track 2. Stars: 0. | [github.com/kasbsquall/digital-farm-showrunner](https://github.com/kasbsquall/digital-farm-showrunner) |
| Supan-Roy/director-desk | Agentic Video Generation | Director Desk is an AI showrunner platform built for the Qwen Cloud Global AI Hackathon 2026, automating the filmmaking pipeline from script generation to storyboard and video orchestration. Stars: 0. | [github.com/Supan-Roy/director-desk](https://github.com/Supan-Roy/director-desk) |
| mb13180035511/LongVideoAgent | Video Understanding Agent | Enable multi-agent reasoning with long videos through the LongVideoAgent framework, featuring the LongTVQA+ dataset and upcoming code releases. Stars: 2. | [github.com/mb13180035511/LongVideoAgent](https://github.com/mb13180035511/LongVideoAgent) |
| n24q02m/imagine-mcp | MCP Tool | Image and video understanding + generation for AI agents — across Gemini, OpenAI, and Grok. Stars: 4. | [github.com/n24q02m/imagine-mcp](https://github.com/n24q02m/imagine-mcp) |
| HiAPIAI/hiapi-video-prompt-generator-skill | Prompt Skill | Turn briefs, links, and research topics into directed video prompts for Seedance 2.0 and HappyHorse 1.0. For Claude Code, Codex, OpenClaw, and Cursor agents. Stars: 0. | [github.com/HiAPIAI/hiapi-video-prompt-generator-skill](https://github.com/HiAPIAI/hiapi-video-prompt-generator-skill) |
| ARTHUR-BBU/framepack | Workflow Compiler | Agent-native video project compiler for HyperFrames workflows. Stars: 2. | [github.com/ARTHUR-BBU/framepack](https://github.com/ARTHUR-BBU/framepack) |
| AwaisKhan-01/genai-research-radar | Research Agent | An autonomous daily agent that tracks, analyzes, and aggregates the latest ArXiv research on Generative AI and image-to-video pipelines using GitHub Actions and Gemini. Stars: 0. | [github.com/AwaisKhan-01/genai-research-radar](https://github.com/AwaisKhan-01/genai-research-radar) |
| mohit231007/omnireel-ai | Video Pipeline | A high-performance, polyglot (Python + Rust) AI video generation pipeline. 100% local, decentralized, and completely sovereign storytelling without cloud boundaries or API filters. Stars: 0. | [github.com/mohit231007/omnireel-ai](https://github.com/mohit231007/omnireel-ai) |
| yl365/MoneyPrinterTurboEasy | Video Generator | 利用AI大模型，一键生成高清短视频。AI音视频生成器：一句话生成高质量音视频！专业爆款短视频创作利器！绿色版，下载直接用，完美复刻 MoneyPrinter / MoneyPrinterTurbo！ Stars: 193. | [github.com/yl365/MoneyPrinterTurboEasy](https://github.com/yl365/MoneyPrinterTurboEasy) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| SimWorlds: A Multi-Agent System for Dynamic 3D Scene Creation | Paper | LLM agents translate natural language into dynamic 4D scenes with liquids, particles, rigid bodies, and articulated mechanisms, addressing challenges beyond static text-to-scene work. | [arxiv.org/abs/2607.01766v1](https://arxiv.org/abs/2607.01766v1) |
| DramaDirector: Geometry-Guided Short Drama Generation | Paper | A geometry-grounded framework for plot-to-short-drama generation that borrows cinematographic geometry from real short-drama shots to produce visually grounded multi-shot videos. | [arxiv.org/abs/2606.24107v1](https://arxiv.org/abs/2606.24107v1) |
| MAVIN: Multi-Shot Audio-Visual Generation with Narrative Control | Paper | The first framework for multi-shot audio-visual generation with customized narrative control, using boundary-aware attention and hierarchical cascading to resolve temporal misalignment. | [arxiv.org/abs/2606.29473v1](https://arxiv.org/abs/2606.29473v1) |
| Autonomous Video Generation with Counterfactual Controllability for Self-Evolving World Models | Paper | Argues that video generation models learn a partial, implicit spatiotemporal world model but not a fully grounded one, and explores counterfactual controllability for self-evolving world models. | [arxiv.org/abs/2606.24152v1](https://arxiv.org/abs/2606.24152v1) |
| Recommendation as Generation: Unifying Personalized Video Generation and Recommendation at Industrial Scale | Paper | Proposes Recommendation-as-Generation (RaG), a paradigm that generates personalized videos on demand from inferred user interest using shared semantic IDs (SIDs). | [arxiv.org/abs/2606.25496v1](https://arxiv.org/abs/2606.25496v1) |
| World Narrative Model for Highly Controllable Video Generation | Paper | Proposes a paradigm shift from pixel sampling to physical world orchestration, enabling deterministic, quantitative control over geometry, motion, camera parameters, and lighting. | [arxiv.org/abs/2606.31946v1](https://arxiv.org/abs/2606.31946v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Neural4D Launches AI 3D Agent, a Unified Panel for 3D, Image, and Video Generation | News | Coverage of Neural4D's unified panel for 3D, image, and video generation. | [Kitsap Sun](https://news.google.com/rss/articles/CBMizgFBVV95cUxQT0tNUC1QNWJIdHM3RXc3a194eGx4SnEtYjRoOHJmdHBmMUI1elcwZ3pNLUJ2Qll1c2Vldnh3ODVNN195QTNkdzZfSC1QckZhUkVxMFVvakFtZzAtYVI5YnRnXzRqX0hkbkVuNWNfSVNsZ1NKOFpRbzV2VEx2U3ZZR2c2WjlVa0w0eEVqSF9BVHBxZDFPUzNEMVBiZGI4WGdwc2NuS2pIclRTdEllc093aHVCd3l1N0diVGJTWmdnVkNBOFBMY25wTHJ3dGJlQQ?oc=5) |
| 时述智能马睿：多Agent协同重构文娱内容生产体系 | News | Coverage of multi-agent collaboration restructuring entertainment content production systems. | [ZAKER新闻](https://news.google.com/rss/articles/CBMifEFVX3lxTE9oYkhybXJKeFZkRmRCTE9mRDRLaXIwNUprTmN3M0hwa1FGV3FqQXBmZjRBQVlybmUwdXVlYmY5WHFfM2VXSVJlRjhiN19xR3p0ejliTHRhUDhheHVzcDFCX2lWSlN5RnJYOW5XeUVET3FzQWhjWC1US0pEbkg?oc=5) |
| 从生成到交付，音视频 Agent 要有生产级开发套件 | News | Coverage of production-grade development kits for audio/video agents from generation to delivery. | [Infoq.cn](https://news.google.com/rss/articles/CBMiXkFVX3lxTFA5eVB5TS1jbVlrRGc5czF2NTJ5NnpBVUhhN2dmNk51bUpBM3BPNWJyYnBuSVpCVEEzU2NRWUhQVDd2ZFR4M0tRZ3NCcTVlVEk2cHpHMC1nbERxYW8zbkE?oc=5) |
| I Built an AI Drawing Butler in Rust: Gliding Horse Powers media_agent for Fully Automated ComfyUI… | Tutorial | A Rust-based AI drawing butler powering media_agent for fully automated ComfyUI workflows. | [Medium](https://news.google.com/rss/articles/CBMi2gFBVV95cUxOdm4wbzRRdFpQZF9NQkhUdUJQdWFCNXk2TnkyQ2JLcHBFZDdZa240VldzUmY2UnlmeVVINzRBM0czODNvODhXMFdzWFFmQ0pnRHU3S1Y3YlUxTXR2MVJRaWt0Q0ZFWWY0TnBORkEtNG9EX042UDdkZlpWRi1qcnhPTzdyaUEzalBXZC1wRTVXWWNUekE2NE5IWDhMT1U0WHdsX1dLVE5Qa1RjV0RCaElzb1Z2V2VEVmdzeGpRc2JPT0xaaGFEQUdPRXVTWmVpOXVoZG1wQ0ZqdlZhZw?oc=5) |
| AI Music Video Generation: 10 Tools That Automate Your Creative Workflow in 2026 | Roundup | Overview of 10 tools that automate AI music video generation workflows in 2026. | [Robotics & Automation News](https://news.google.com/rss/articles/CBMi0gFBVV95cUxNaW5uSU9UcEdsNkxTUlBRVWk1ZTR1Q2JqTWVRLXhwN0xjaHdVSXpvNHk0elNIeHNIV2F2MEtSSENwMEVTUjU0ZDNxWDRIX0NoV195c1U4LV80SWxXcV9FYm5JeFAzeWstR2J6LXdrV0F1Uy0weHpreWplZzYwbE9ZdVgtUlRjRzI3V0l6MWZ0RUF2U0RuMXE5aWRqYldCa1pvaWkxMGxUdDZRRVZRNU02cTNUbWZzRTB1Z1VLbWl1MzdUaXFEV2hvV0E4Rlh3SG9JU2c?oc=5) |
| Adobe creative agents are expanding | News | Coverage of Adobe's expansion of creative agents. | [gfxspeak.com](https://news.google.com/rss/articles/CBMidEFVX3lxTE84ejhYcFBxdjF4ekxRaGZGR0x2WkhvT0pKaHZnMnBUd1Npc1Y5dThHVDY1WXdGbUlFYnBvZTQzWUpSOWJubFMwNjBEWm9UTzFUWTlXV280Y0thNkdfRFRGajEyYjNhZE1keHYzYkFaRmZIM2Zn?oc=5) |
| Adobe Unveils Major Expansion of Creative Agent Across Firefly and Creative Cloud Apps Including Photoshop and Premiere | News | Adobe's major expansion of Creative Agent across Firefly and Creative Cloud apps including Photoshop and Premiere. | [Adobe Newsroom](https://news.google.com/rss/articles/CBMic0FVX3lxTE1iM1dHcDBrc01VNWxESDBlN08tZ2UwQ2lJdENLU0ljeDhnaVdkaGltdW4tT0p5ZEFVSkRjYXRLUFdORGk3UWx4Z2xrVUFPMTl1NFlIVFhCemRjTXdzRXFkYjdmQ2pTbDh0UHNpQ2l0Y3JTXzA?oc=5) |
| 智绘秀番与腾讯云达成战略合作，推动 AI 动漫生产进入 Agent 协同时代 | News | Coverage of a strategic partnership pushing AI anime production into the agent collaboration era. | [中华网](https://news.google.com/rss/articles/CBMibEFVX3lxTE1CYkpXNmNIQWVOM3p5bW84MzM5d2swNFl1WHBaRGVPYzB6V296UFhwbFFaV0YwWnMtUmJrMGJFdlJaNWpqak1qZDlQc1V2cXF1aVBSMXJSa25XSzI2b0k0SlBibmpOdEZMem1PUA?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| PaulBratslavsky/roughcut-ai-local-first-editor | AI Video Editor | Open-source, local-first AI video editor: on-device transcription (whisper.cpp), local LLM rough cuts (Gemma via Ollama), transcript-based editing, NLE export, and an MCP tool surface Claude can drive. GPL-3.0. Stars: 0. | [github.com/PaulBratslavsky/roughcut-ai-local-first-editor](https://github.com/PaulBratslavsky/roughcut-ai-local-first-editor) |
| oktaydbk54/vibeclip | AI Video Editor | Open-source, self-hosted AI video editor: turn long videos into captioned 9:16 shorts — and edit by chatting. BYO LLM key. AGPL-3.0. Stars: 32. | [github.com/oktaydbk54/vibeclip](https://github.com/oktaydbk54/vibeclip) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| MAKEITFREE/MCP-X-web | GitHub | Enterprise AI agent development with integrated chat, video, image editing, and secure multi-tenant workflows. | [GitHub](https://github.com/MAKEITFREE/MCP-X-web) |
| starai-platform/starai | GitHub | Open-source AI model aggregation platform with web/admin dashboard, agents, image/video/audio generation, OpenAI-compatible API, wallet billing, and Docker deployment. | [GitHub](https://github.com/starai-platform/starai) |
| elderithm/demomotion-ai | GitHub | Open-source AI agent that turns a web app URL into a narrated product demo video. | [GitHub](https://github.com/elderithm/demomotion-ai) |
| kenleung05hk/ComfyUI_Viewer_OpenReel_Extension | GitHub | Embed and edit videos directly within ComfyUI workflows using the OpenReel extension with timeline, effects, and server-side rendering. | [GitHub](https://github.com/kenleung05hk/ComfyUI_Viewer_OpenReel_Extension) |
| meta-xucong/alchemy-media-agent | GitHub | Custom image/video generation agent docs, FastAPI runtime, provider adapters, and Apple-inspired frontend. | [GitHub](https://github.com/meta-xucong/alchemy-media-agent) |
| lora-sys/hermes-minimax-media | GitHub | MiniMax (海螺) image + video generation backends for Hermes Agent — image-01 + Hailuo-2.3/02/S2V-01. | [GitHub](https://github.com/lora-sys/hermes-minimax-media) |
| iamadoctorforreal/video-agent-suite | GitHub | AI-powered video creation and editing agent suite with dual rendering (Remotion + Hyperframes). | [GitHub](https://github.com/iamadoctorforreal/video-agent-suite) |
| MrityunjayBhardwaj/TheBasher | GitHub | Director-first, agent-native, procedural AI video platform. | [GitHub](https://github.com/MrityunjayBhardwaj/TheBasher) |
| AugmentedValueAcceleration/ava-supernova | GitHub | Open-source AI coding agent — 61 tools, 6 modes, 24 personas, 20+ models from 8 providers. Creative Studio for images, video, music, voice. | [GitHub](https://github.com/AugmentedValueAcceleration/ava-supernova) |
| Tshah-95/vean | GitHub | Agent-native video editing core: a typed document, edit algebra, and diagnostics layer on top of MLT. | [GitHub](https://github.com/Tshah-95/vean) |
| calesthio/OpenMontage | GitHub | First open-source agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. | [GitHub](https://news.google.com/rss/articles/CBMiXEFVX3lxTE1CWmttWmtmdE12Qmx5YVhXZHJFRFhWdW8wSkZwMjl0NXQxYlh6Zlpjajh3ZDU1T0l1dUFyR09BbGQ3VEtxb2VUdXFwN0ozdTI0TXpXWHd6azFxajFq?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| DramaDirector: Geometry-Guided Short Drama Generation | arXiv | Geometry-grounded framework for plot-to-short-drama generation, borrowing cinematographic geometry from real drama shots. | [arXiv](https://arxiv.org/abs/2606.24107v2) |
| VideoAgent: All-in-One Framework for Video Understanding and Editing | arXiv | All-in-one agentic framework for diverse video comprehension and editing operations, with automated video shot detection for long-video narrative creation. | [arXiv](https://arxiv.org/abs/2606.23327v2) |
| HumanForge: A Human-Centric Deepfake Video Benchmark with Multi-Agent Forgery Rationales | arXiv | Unified, large-scale benchmark for human-centric deepfake video detection, covering human-object and human-human interactions. | [arXiv](https://arxiv.org/abs/2607.08705v1) |
| SafeGuard: A Multi-Agent Perception-Reasoning Framework for Social-Risk AI-Generated Video Detection | arXiv | Multi-agent framework for detecting AI-generated videos that violate physical laws, structural coherence, or social logic. | [arXiv](https://arxiv.org/abs/2607.03069v1) |
| MaineCoon: Pursuing A Real-Time Audio-Visual Social World Model | arXiv | Prototype social world model for real-time audio-visual generation tailored to social platforms. | [arXiv](https://arxiv.org/abs/2606.17800v1) |
| Search Beyond What Can Be Taught: Evolving the Knowledge Boundary in Agentic Visual Generation | arXiv | Constructs SearchGen-20K and SearchGen-Bench with 20,839 prompts across 12 failure categories and 22 domains for agentic visual generation. | [arXiv](https://arxiv.org/abs/2607.05382v3) |
| Wan-Streamer v0.2: Higher Resolution, Same Latency | arXiv | Latency-preserving upgrade of the native-streaming audio-visual interaction model, raising output resolution to 640x368 while preserving ~200ms latency. | [arXiv](https://arxiv.org/abs/2607.04443v3) |
| Unified Audio Intelligence Without Regressing on Text Intelligence | arXiv | Unified audio-text LLM (Audex) built on Nemotron-Cascade-2, supporting audio understanding, reasoning, and generation. | [arXiv](https://arxiv.org/abs/2607.05196v2) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Automate VFX workflows with AI agents | Griptape | Foundry | YouTube | Tutorial on automating VFX workflows using AI agents with Griptape and Foundry. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9Ub2hVblFna3ZabGdmenZwYlRpTDktVXhsV2dzT1EzMkpjMWRVdzBXTXQ0VWxmS2FBYUU4UXg4RHRXNjd4VUdpVlRLM044TlFMUEpDdEdn?oc=5) |
| AI视频Agent最新3种副业玩法！Anijam零门槛启动赚钱项目 | YouTube | Tutorial on three side-business methods using AI video agents with Anijam for zero-barrier monetization. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTFBVcUc4TzBEd1FNeS00SXhwNDdxdmdjUlFST29WLTBXeHQ3aV9KN2ppcUN4MkY5NldWQ0pOUXFmN3V5QVlyZ3Q5R0ZWYjFwRlJJQUc4cXdB?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Into the Omniverse: Three Workflows for Improving Vision AI Agent Accuracy With Synthetic Data and Fine-Tuning | NVIDIA Blog | Workflows for improving vision AI agent accuracy using synthetic data and fine-tuning in NVIDIA Omniverse. | [NVIDIA Blog](https://news.google.com/rss/articles/CBMif0FVX3lxTFBMM29ZVGNGR0lpRFg1OFlnRDYyZ1RKSzVzV0g1MlpPUmxSNm54MFBHSVVlY3JTNnhURWNUWENNRFJEbHZyc3Rxa2ZibHU0dlFpb1A3bUNRUTdfNS1LWGNubXcwcktfY2V3MHRtQ29ZREVVTHMxcFhrb1c1Y19RczA?oc=5) |
| NVIDIA/skills: AI agent skills published by NVIDIA | GitHub | Collection of AI agent skills published by NVIDIA. | [GitHub](https://news.google.com/rss/articles/CBMiR0FVX3lxTE5sTlJJZVZJQWFUd3kwLW1tQ2JCU1ZfN2RjY2hkRlZiSVZZZUdpLXBnUmF5SUU1SVJDUzJOT05MUnJVbnJwUkk4?oc=5) |
| Mininglamp Technology Officially Open-Sources Octo | DEV Community | New-generation platform for human-AI agent collaboration, open-sourced by Mininglamp Technology. | [DEV Community](https://news.google.com/rss/articles/CBMiyAFBVV95cUxOWXRuaGV4c25Cemdqc1g2TW1obXdkcHlhc1h2bHVHMkZFUkJldDZ1c2xobnBKOElBWmRsQTBCSmh0ekJ1bHJHRVc2S2pYUjRLdDJaa3BCOVotdlVVR3lodjVsN2tfM3NWTWNhTm9vc3lFZmw4Wkl3dUNrR2RrM1JHcm9HZW9hSlRKTTM5VGNQV293bFA0d0dFVEdTRjlaaF9GTm1Bc2pZc0R4RVd3dGY4Zl83eURDOHBUQ0dfSGVNcGwxRnBkcUZ1LQ?oc=5) |
| Adobe expands Creative Agent across Firefly, Photoshop, Premiere and Creative Cloud apps | Storyboard18 | Adobe expands its Creative Agent capabilities across multiple creative applications. | [Storyboard18](https://news.google.com/rss/articles/CBMi2gFBVV95cUxQanFITXc3WXpFRTJ3S2FfVUlHWERHSGZ3WE81QXYzV0gtRklNZy1tU2tlUEhQTml1SS1PWVM4SWJxREtFdllUREQ1cFY4SHBybDQtdUp4SEFLazB0eVdZdXJVNVdJcG1BR09yeHdpUGpMNm5DNjc2N2RYS3hucUFtRk1IWG92MmN3Vzl0N0ZFdVZzQ19MS1d5UEJWUWVaV3JvdHFqY0stWFJfa3poUWVQQ1Q3azQxNjZUNHVvTGpIZEVXOFROR0VXY3UyaENBRkJ3RzlMNklISjBEQdIB3wFBVV95cUxOYmhXZFdiaXp3ek9JTFRTUzhQQVhleFgyMjhUWkhFMUhSaTJKZm1fMGwwUGJ4SHBUZDZ2V1I4d2xNZkhUeG9XQzlsQ0lEeTAzanhOb0lHelptWU8xbDZQYWFzRkRwc1JlVUozdm1iZllYNnJXMTlKMlNUSkdxdGg2WkpfbjV4SXM4VGNZXzZBVnA4SDdQOTk1YTVmaG5rTVY5REhOT0JFeDNBWHE1dmhLaGdBTkJBbC0wUjY5Z2hScXdta0ZmMU5hN25JeDR4Vkd3QmNicDZFZUt4TUxsdHVF?oc=5) |
| WPP Media Developing Video Buyer Agent | Radio & Television Business Report | WPP Media developing an AI agent for video buying. | [Radio & Television Business Report](https://news.google.com/rss/articles/CBMiZkFVX3lxTFByQXp4WnotSXJmVW5jelgwS2FMM1hBOGlpMU9wNlU3VFo5ejBYTUY5d2RCcFJHR3pQRnh4anliSU0xUjd4R3lXaGtKLUdEMjlYVXdUcXVzdnhSeEw5R011NFFSc1lsUQ?oc=5) |
