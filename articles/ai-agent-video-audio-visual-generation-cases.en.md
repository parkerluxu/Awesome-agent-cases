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

## Main Risks

- Material copyright.
- Factual errors.
- Poor editing rhythm.
- Voice and likeness rights.
- Platform rules and content safety.
- Low-quality batch content damaging a brand.
