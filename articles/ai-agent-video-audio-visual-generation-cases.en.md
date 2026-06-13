# Video, Audio, and Visual Generation: AI Agent Case Studies, Tutorials, and Research Projects

Research date: 2026-06-13

Here, "video/audio/visual generation" mainly means short videos, short dramas, film commentary, marketing videos, MV visuals, and automatic editing. Unlike pure text-to-video models, AI agents add value by connecting scripts, storyboards, asset search, voiceover, subtitles, editing, review, and publishing into workflows.

## Quick Takeaways

Video is one of the richest and most commercially direct areas for AI agents. Open-source projects can already generate short videos or automatically narrate and edit videos; research projects are beginning to simulate directors, screenwriters, cinematographers, and reviewers.

Suitable tasks:

- Short-video scripts.
- Product link to ad video.
- Batch knowledge videos.
- Long-video commentary for films or courses.
- Subtitles, voiceover, BGM, and asset matching.
- Multi-platform aspect-ratio export.
- Storyboards and shot prompts.

Do not fully delegate:

- News or factual videos without review.
- Unlicensed montage editing.
- Deepfaked people or voices.
- Final edits for high-end narrative films.
- Commercial advertising claims around medical, financial, or earnings outcomes.

## Tutorials and Practitioner Notes

### 1. MoneyPrinterTurbo

Link: https://github.com/harry0703/MoneyPrinterTurbo

MoneyPrinterTurbo is a popular Chinese open-source project. Given a topic or keywords, it can generate scripts, video assets, subtitles, BGM, and HD short videos. It supports Web/API, batch generation, subtitle styles, horizontal/vertical formats, multiple material sources, and multiple model integrations.

Use it for knowledge videos, e-commerce product videos, marketing tests, content repurposing, and multilingual localization. Review all assets, facts, music, and platform compliance before publishing.

### 2. ShortGPT

Link: https://github.com/RayVentura/ShortGPT

ShortGPT is an experimental YouTube Shorts / TikTok channel automation framework using MoviePy, OpenAI-generated scripts and edit prompts, ElevenLabs / EdgeTTS, and Pexels / Bing image search. It is best viewed as an automation framework for learning pipelines, not a mature commercial publishing system.

### 3. NarratoAI

Link: https://github.com/linyqh/NarratoAI

NarratoAI is a Chinese open-source project for AI-powered video narration and editing. It supports Docker, local running, and Streamlit WebUI, and builds on projects such as MoneyPrinter while adding film-commentary capabilities. Start with 5-10 minute clips, because long-video understanding and copyright risk are both harder.

### 4. Creatify / LTX Studio / Higgsfield

Links:

- Creatify: https://en.wikipedia.org/wiki/Creatify
- LTX Studio: https://en.wikipedia.org/wiki/LTX_Studio
- Higgsfield AI: https://en.wikipedia.org/wiki/Higgsfield_AI

These commercial products represent end-to-end video-agent workflows: product link or brief, selling-point extraction, scriptwriting, storyboard, generated visuals, TTS, subtitles, BGM, and multi-platform exports.

### 5. LTX Studio and LTX-2 / LTX Desktop

Links:

- LTX Studio: https://en.wikipedia.org/wiki/LTX_Studio
- LTX model: https://en.wikipedia.org/wiki/LTX_%28text-to-video_model%29

LTX Studio turns prompts or scripts into characters, scenes, storyboards, and video sequences. LTX-2 and desktop tools can serve as video-generation executors in an agent pipeline where Claude/Codex creates scripts, shot lists, and ffmpeg commands.

### 6. Pippit / Short Drama Agent

Link: https://en.wikipedia.org/wiki/Pippit

Pippit represents a Chinese short-video ecosystem workflow: Agent Mode can turn ideas into publishable videos, and Short Drama Agent can transform long scripts into video production flows. Risks include copyright, likeness, platform moderation, and low-quality content at scale.

### 7. Kling AI and HunyuanVideo as Agent Backends

Links:

- Kling AI: https://en.wikipedia.org/wiki/Kling_AI
- HunyuanVideo paper: https://arxiv.org/abs/2412.03603
- HunyuanVideo code: https://github.com/Tencent/HunyuanVideo

These models are not full agents, but they can act as executors. A script agent creates storyboards, the model generates clips, an editing agent uses ffmpeg/MoviePy, and a QA agent checks subtitles, rhythm, and risk.

## Research Projects

### StoryAgent

Link: https://arxiv.org/abs/2411.04925

StoryAgent decomposes story-video generation across specialized agents for story design, storyboarding, video creation, coordination, and evaluation. Character and cross-shot consistency are central problems.

### Kubrick

Link: https://arxiv.org/abs/2408.10453

Kubrick uses VLM agents to convert text descriptions into Blender scripts and rendered video. Director, Programmer, and Reviewer agents create a strong loop: script generation, screenshot review, and iterative correction.

### GenMAC / WorldGPT

Links:

- GenMAC: https://arxiv.org/abs/2412.04440
- WorldGPT: https://arxiv.org/abs/2403.07944

These explore complex dynamic scenes, temporal consistency, and multi-agent verification. They point toward agents designing complete shots rather than only cutting existing assets.

### StreamingT2V

Link: https://arxiv.org/abs/2403.14773

StreamingT2V addresses long-video chunk transitions, short-term memory, and long-term appearance consistency. Long-video consistency is a major bottleneck for drama and MV agents.

### Video2GIF and Video-Agent Pipelines

Links:

- Video2GIF: https://arxiv.org/abs/1605.04850
- UniVA: https://arxiv.org/abs/2511.08521
- Paper2Video: https://arxiv.org/abs/2510.05096
- VideoAgent: https://arxiv.org/abs/2509.11253
- VGTeam: https://arxiv.org/abs/2509.01277

These projects show that mature video agents split work into text understanding, material organization, script, layout, voiceover, subtitles, rendering, and verification.

## Recommended Replication Path

1. Use MoneyPrinterTurbo to create three knowledge videos.
2. Use ShortGPT for an English Shorts automation PoC.
3. Use NarratoAI to narrate a local video segment.
4. Manually review scripts, facts, copyright, and subtitles.
5. A/B test script styles.
6. Add a storyboard agent and video-generation model.

<!-- AUTO_CASE_UPDATES_START:video:en -->
## Latest Auto-Discovered Updates

### Key New Leads

- **VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation** — A new benchmark and harness that tests whether agent frameworks (Claude Code, Codex, OpenClaw) can handle long-horizon video generation tasks, where agents build and refine their own workflows rather than using handcrafted pipelines. [arXiv](https://arxiv.org/abs/2606.08091v1) (2026-06-06)
- **ViMax: Agentic Video Generation** — A multi-agent collaboration framework for long-form video generation that coordinates specialized components for narrative planning, visual consistency, and character/environment continuity across scenes. [arXiv](https://arxiv.org/abs/2606.07649v1) (2026-06-02)
- **Prisma-World: Camera-Controllable Multi-Agent Video World Model** — Extends video world models to multiple agents, addressing the challenge of inconsistent objects/layouts when overlapping views are generated independently. [arXiv](https://arxiv.org/abs/2606.09507v1) (2026-06-08)
- **Cosmos 3: Omnimodal World Models for Physical AI** — NVIDIA's unified mixture-of-transformers architecture jointly processing/generating language, image, video, audio, and action sequences, subsuming video generators and world simulators. [arXiv](https://arxiv.org/abs/2606.02800v2) (2026-06-01)
- **OmniDirector: General Multi-Shot Camera Cloning without Cross-Paired Data** — A new camera motion representation (grid motion videos) for cloning camera motion from reference videos in multi-shot generation. [arXiv](https://arxiv.org/abs/2606.13432v1) (2026-06-11)

### GitHub / Open-Source Projects

- **ArcReel/ArcReel** — AI Agent-driven open-source video generation workspace: novel → character/scene/prop design → script → storyboard → video, with cross-shot character and scene consistency. Powered by Nano Banana 2 & Veo 3.1 / Grok / Seedance / OpenAI. [GitHub](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR?oc=5) (2026-06-11)
- **ChaitanyaEswarRajeshJakki/gemini-youtube-automation** — Fully autonomous AI agent/Python pipeline using Gemini LLMs to generate content, produce videos, and auto-upload educational videos to YouTube. ⭐287. [GitHub](https://github.com/ChaitanyaEswarRajeshJakki/gemini-youtube-automation) (2026-06-13)
- **12asascoder/Synapse** — Real-time video AI agent (using TruGen AI APIs) that users can call and interact with to complete real-world tasks end-to-end by integrating external tools via MCP/APIs. ⭐0. [GitHub](https://github.com/12asascoder/Synapse) (2026-06-13)
- **kiyeonjeon21/stereoframe** — Declarative, deterministic 3D video on three.js built for AI agents. ⭐0. [GitHub](https://github.com/kiyeonjeon21/stereoframe) (2026-06-13)
- **ziyilam3999/content-pipeline** — Turn a launch announcement into ready-to-post social content (copy, image card, voiceover, video specs). Built test-first by an AI agent builder — 13/13 phases shipped, 11 solved by a free local model, $12.56 total. ⭐0. [GitHub](https://github.com/ziyilam3999/content-pipeline) (2026-06-13)
- **faireide/shopthevideo** — AI-powered "Shop the Video" e-commerce agent. ⭐0. [GitHub](https://github.com/faireide/shopthevideo) (2026-06-13)
- **PratikMahara/voice-agent** — AI Interviewer web app: users practice job interviews with AI asking questions in a video call format and providing feedback/score. ⭐0. [GitHub](https://github.com/PratikMahara/voice-agent) (2026-06-13)
- **NVIDIA/skills** — AI agent skills published by NVIDIA. [GitHub](https://news.google.com/rss/articles/CBMiR0FVX3lxTE5sTlJJZVZJQWFUd3kwLW1tQ2JCU1ZfN2RjY2hkRlZiSVZZZUdpLXBnUmF5SUU1SVJDUzJOT05MUnJVbnJwUkk4?oc=5) (2026-06-10) — *Needs manual review: link is RSS feed, not direct GitHub.*

### Papers / Benchmarks

- **StoryVideoQA: Scaling Deep Video Understanding** — Large-scale, multi-genre, auto-generated dataset for video question answering, targeting complex storylines beyond factoid QA. [arXiv](https://arxiv.org/abs/2606.06338v1) (2026-06-04)
- **MAVIS: Multi-Agent Video Retrieval via Structured Video Understanding** — Rethinks video retrieval as cooperative reasoning rather than brute-force search, parsing videos into a Structured Semantic Library. [arXiv](https://arxiv.org/abs/2606.09641v1) (2026-06-08)
- **World Models: A Comprehensive Survey** — Survey of world model architectures, training methods, reasoning paradigms, and applications spanning video generation, robotics, and autonomous driving. [arXiv](https://arxiv.org/abs/2606.00133v1) (2026-05-28)
- **Resonant Minds: Closed-Loop Social Avatars with Theory of Mind** — Dual-agent framework integrating cognitive reasoning and multimodal generation for lifelike digital humans with social intelligence. [arXiv](https://arxiv.org/abs/2606.05896v1) (2026-06-04)
- **Multi-Modal Multi-Agent Robotic Cognitive Alignment** — Framework for generating "cognitively aligned" multi-agent interactions using non-invasive consumer BCIs. [arXiv](https://arxiv.org/abs/2606.13190v1) (2026-06-11)
- **Does Persona Make LLMs K-pop Fans?** — Pilot study using persona-based LLM audience agents to generate real-time fan chat alongside K-pop performance videos. [arXiv](https://arxiv.org/abs/2606.07837v1) (2026-06-05)
- **Continual Quadruped Robots Coordination via Semantic Skill Discovery** — Multi-agent reinforcement learning for multi-quadruped coordination in open-ended continual learning settings. [arXiv](https://arxiv.org/abs/2606.08102v2) (2026-06-06)

### Product Tutorials / Media Leads

- **Antigravity Managed Agents Tutorial: Ship Production AI Agents** — Tutorial on shipping production AI agents. [Medium](https://news.google.com/rss/articles/CBMiqgFBVV95cUxPOGhfRTk4bV9PQmRJQkQ3WWVNMHl3Yk9nT3VpNHRGOGZDak82VW1jYWtuWWhFbzd2eFpNd1NxbGlHOTdIbE1mNjR3ZE9WcHp1QzZDcDh3bjdwYjAtU2pSZWYzYnJMc3FJMFlteHNEUjBpeUxWY3NnZUpaVERCTEI2UFJCZGpqS19xZVdnS1VGU29NNnEwWlB2dFlDdFJfMHdUZk94cHZzdllFQQ?oc=5) (2026-06-09) — *Needs manual review: link is RSS feed, not direct article.*
- **LumeFlow AI Revolutionizes Video Production Pipeline with GPT Image 2 and AI Agent Skill** — [yourvalley.net](https://news.google.com/rss/articles/CBMiygFBVV95cUxNb1BIU2lTYlhnZmZaRzRTWlZsaFRYU3hZRDZDYVRmdTlYOG95SnNTZTUzZUFoeHJZMVF0M0F0aWNrTEstXzNIQmxOVkhuVlZva2Y1Q21iTkJfa3lIR1ozcy0zb0Z1UkdHdDdjUWpoMFpwVnBSTFdWSjZtMFdCdkY3QTh1LXdQc09oZDJsNE5rUnRCdWRZMXVUZ2hBbm15T0pxaDBOS2t2UkdkU3o2TVN6UzBUbnRFZjVFQ2tmTWxPT2U0cW4tSDloTmln?oc=5) (2026-05-29) — *Needs manual review: link is RSS feed, not direct article.*

### Chinese Community Leads

- **ArcReel/ArcReel** (listed above) — Chinese-language description: "AI Agent 驱动的开源视频生成工作台 — 小说→角色/场景/道具设计→剧本→分镜图→视频，跨镜头角色与场景一致". Open-source AI video workspace powered by AI Agents.

### Follow-up Items

- **Google search box redesign** — Google announced a sweeping redesign of the search box at I/O 2026, transforming it from a simple keyword input into a dynamic AI-driven conversational interface. [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) (2026-05-19) — *Potentially relevant to AI agent interfaces for video/visual search; needs manual review for direct connection.*
- **OpenAI to acquire Ona** — Acquisition to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. [OpenAI](https://openai.com/index/openai-to-acquire-ona) (2026-06-11) — *Indirect relevance to video agent infrastructure; monitor for future video-related agent capabilities.*
<!-- AUTO_CASE_UPDATES_END:video:en -->

## Main Risks

- Material copyright.
- Factual errors.
- Poor editing rhythm.
- Voice and likeness rights.
- Platform rules and content safety.
- Low-quality batch content damaging a brand.
