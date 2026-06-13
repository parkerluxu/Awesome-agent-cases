# Music Generation: AI Agent Case Studies, Tutorials, and Research Projects

Research date: 2026-06-13

Music generation should be split into two categories: direct generation products such as Suno, Udio, and Stable Audio, and AI agents that connect lyric writing, composition, arrangement, timbre conversion, music understanding, retrieval, evaluation, and MV generation. This article focuses on the latter while documenting replicable creative workflows.

## Quick Takeaways

AI agents are most useful for:

- Lyric writing and multi-version rewriting.
- Style, mood, and structure planning.
- Calling music generation models.
- Audio analysis, classification, transposition, and separation.
- Automatic scoring for videos.
- MV storyboard generation.
- Managing multiple music tools.

Do not fully delegate:

- Copyright judgment before commercial release.
- Imitating specific living singers.
- Unauthorized voice cloning.
- High-quality mixing and mastering.
- Legal risk around melody similarity.

## Tutorials and Practitioner Notes

### 1. Suno / Udio + Claude / ChatGPT Workflow

Common creator workflow:

- Use Claude/ChatGPT for theme, lyrics, and style.
- Put lyrics and style prompts into Suno or Udio.
- Generate multiple versions.
- Select strong melody and vocal takes.
- Edit, mix, or denoise in a DAW.
- Use AI to generate cover art, MV storyboard, and marketing copy.

Example prompt:

```text
Write lyrics for a 90-second Chinese pop song.
Theme: an indie developer launching a product late at night
Mood: restrained, warm, slightly electronic
Structure: Verse / Pre-Chorus / Chorus / Bridge
Avoid slogans; make the chorus memorable.
Also provide Suno/Udio style prompts.
```

Multi-version selection is more important than one-shot generation. Check platform licenses and similarity risk before commercial use.

### 2. MusicAgent

GitHub: https://github.com/microsoft/muzic/tree/main/musicagent

MusicAgent in Microsoft's Muzic repository is an LLM-powered autonomous agent for music. It dynamically chooses music-task methods and unifies Hugging Face models, GitHub projects, Web APIs, and other tools. Its core value is tool routing, not a single generation model.

### 3. Music-to-Video and MV Pipelines

Common workflow:

- Analyze lyrics and song sections.
- Generate storyboard scripts.
- Generate cover art and character settings.
- Generate keyframes.
- Generate video clips.
- Edit to beats.

Music structure matters: intro, verse, chorus, and bridge should be handled separately. Start with lyric videos before attempting full narrative MVs.

### 4. Suno Studio

Link: https://www.techradar.com/ai-platforms-assistants/i-tried-suno-studio-the-new-platform-that-mixes-ai-music-generation-with-hands-on-editing-like-garageband-but-smarter

Suno Studio is described as a generative audio workstation that starts from humming or text prompts and lets users edit drums, effects, instruments, and stems. This signals a shift from "one-click song generation" toward AI draft plus human DAW-style editing.

### 5. Suno MILO-1080

Link: https://www.musicradar.com/music-tech/suno-takes-another-step-into-music-production-with-ai-step-sequencer-milo-1080

MILO-1080 is a browser step sequencer / synthesizer with 16 tracks, AI-generated samples, uploaded clips, built-in synths, and an Idea Generator. It moves AI from whole-song generation toward loops, samples, and arrangement assistance.

### 6. Udio

Link: https://en.wikipedia.org/wiki/Udio

Udio supports text-to-music with vocals and instruments, plus remix, extension, and audio inpainting. Compared with one-shot complete songs, it is well suited to iterative workflows: generate a 30-second hook, extend it, repair local sections, and remix.

### 7. AI Music Company Ecosystem

Link: https://pitchfork.com/features/an-idiots-guide-to-music-ai-companies

Pitchfork's overview maps companies such as Suno, Udio, Boomy, ElevenLabs, Klay Vision, Splice, Music Flamingo, Loudly, and Soundraw. A music-agent toolkit may combine full-song generation, voice tools, royalty-free assets, and analysis tools.

### 8. Microsoft Copilot + Suno

Link: https://en.wikipedia.org/wiki/Suno_%28platform%29

Suno's Microsoft Copilot integration is a beginner-friendly music-agent entry point: the LLM structures theme, lyrics, and style, then Suno generates audio.

### 9. BBL Drizzy and AI Music in Pop Culture

Link: https://en.wikipedia.org/wiki/Udio

The Udio-generated parody song "BBL Drizzy" shows that AI music can enter meme culture and social distribution. Virality may depend more on cultural context than audio quality, but parody, sampling, and celebrity-related content carry higher copyright risk.

## Research and Industry Cases

### IngaRose

Link: https://en.wikipedia.org/wiki/IngaRose

IngaRose is an AI-generated musical act that used tools such as Suno and entered sales charts. It is useful for tracking disclosure, training-data rights, chart manipulation concerns, and attribution between human and AI contributors.

### MusicAgent Paper

Link: https://arxiv.org/abs/2310.11954

MusicAgent argues that users cannot master every AI music tool, so an autonomous workflow should decompose requests and call suitable tools. Tool selection, task decomposition, and result composition are central.

### AutoMV

Link: https://arxiv.org/abs/2512.12196

AutoMV generates MVs from complete songs. It extracts structure, vocals, and lyric timelines, then uses screenwriter and director agents to create scripts, characters, and shots, followed by image/video generation and verifier review.

### GVMGen

Link: https://arxiv.org/abs/2501.09972

GVMGen studies video-to-music generation, aligning music with video across spatial and temporal dimensions. It is relevant to agents that analyze a video before choosing or generating music.

### YingVideo-MV

Link: https://arxiv.org/abs/2512.02492

YingVideo-MV covers audio semantic analysis, MV-director shot planning, camera adapters, and long-sequence consistency for music-performance video.

### Suno / Udio Legal and Industry Cases

Links:

- Suno: https://en.wikipedia.org/wiki/Suno_%28platform%29
- Udio: https://en.wikipedia.org/wiki/Udio
- AP report: https://apnews.com/article/849a2d59eab89072154ab32b4db06284

Training data, licensing, artist imitation, disclosure, and commercial use must be core fields in any music-agent case library.

### Critical View: AI Can't Make Music

Link: https://www.theatlantic.com/technology/archive/2024/07/generative-ai-music-suno-udio/679114/

This critique is useful because it reminds us that generating sounds resembling music is not the same as creating work with cultural context, lived emotion, and artistic judgment. Tutorials should position AI as drafting and assistance, not full replacement for musicians.

## Recommended Replication Path

1. Use Claude/ChatGPT to generate lyrics and music prompts.
2. Generate 5-10 versions with Suno or Udio.
3. Manually choose the strongest melody and structure.
4. Use an agent for cover art, marketing copy, and MV storyboard.
5. Generate a lyric video.
6. Before commercial release, check license, similarity, and voice rights.

<!-- AUTO_CASE_UPDATES_START:music:en -->
## Latest Auto-Discovered Updates

### Key New Leads
- **Google search box redesign** – Google announced a sweeping redesign of the search box at I/O 2026, transforming it from a simple keyword input into a dynamic, AI-driven conversational interface. May affect how users discover music generation tools. [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- **OpenAI to acquire Ona** – OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. [OpenAI](https://openai.com/index/openai-to-acquire-ona)
- **Microsoft Rayfin** – New backend platform for AI agent development and app creation, debuted June 3. [Tech Times](https://news.google.com/rss/articles/CBMizgFBVV95cUxQX3IxQXM3SVNacnJuUFk4NlhBc2VaUklKWnpOM294aXQwaFVwSTBKQ3J4NzFONUlHRUtBMGRteWdYZGdDS1dLSTdTdVBLckMxVlBYQVl2Z2V2RkxRRm9feHl3aWk3Q1p2STk1eWltdjJkS0lnSk5fakNTVmNPVlFKNG9rREFhc1FuVG9Hc3htZ1RhdjNhdlg2ZWNWUXJyOUNLc0ZibkFjOU8xaC1iYThJOVlfdFhuZVIyQlRkUXpTQWx2Ymx6U01JVXBXbUtNdw)
- **Google DeepMind on multi-agent risks** – DeepMind funding research into dangers of millions of AI agents interacting online. [MIT Technology Review](https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/)
- **OpenAI Academy courses** – New courses on building practical AI skills, repeatable workflows, and applying agents at work. [OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work)

### GitHub / Open-Source Projects
- **AetherWave-Studio/aetherwave-mcp** – MCP server for music, image, video, and band generation tools for Claude, Cursor, Continue, and custom agents. Stars: 2. [GitHub](https://github.com/AetherWave-Studio/aetherwave-mcp)
- **JOYLINK-LTD/lacuna-toolkit** – Open-source SDK, CLI, MCP server, and Agent Skill for Lacuna Music API. Stars: 4. [GitHub](https://github.com/JOYLINK-LTD/lacuna-toolkit)
- **varosity-ai/mcp-server** – MCP server exposing video, voice, music generation to Claude Desktop, Cursor, Hermes. Stars: 0. [GitHub](https://github.com/varosity-ai/mcp-server)
- **wangchuxiaoji-oss/doubao2api** – Reverse-engineered Doubao API → OpenAI-compatible REST service for multimodal chat, image/video/music generation. Stars: 40. [GitHub](https://github.com/wangchuxiaoji-oss/doubao2api)
- **vivar/Hermes-Suno-Music-Agent** – Hermes agent for building complete AI music video projects with structured workflows. Stars: 0. [GitHub](https://github.com/vivar/Hermes-Suno-Music-Agent)
- **ArcReel/ArcReel** – AI Agent-driven open-source video generation workspace (novel→character/scene/prop design→script→storyboard→video). [GitHub](https://news.google.com/rss/articles/CBMiSkFVX3lxTE81dG5kRFZDSnpsOHE3VmZjbGNlM0J3Q09MMHp0WU5xSUlNOTd3N1U1YlR2a20wMVRYZy1qTVlxRi10WnlVZ0pRcjhR)
- **AceDataCloud/Skills** – Agent Skills for music, image, video generation, compatible with Claude Code, GitHub Copilot, Gemini CLI. Stars: 8. [GitHub](https://github.com/AceDataCloud/Skills)
- **akshithajela/guitarmind** – AI agent that turns a feeling into a guitar chord progression, grounded in music theory. Stars: 0. [GitHub](https://github.com/akshithajela/guitarmind)
- **Aman1601s/playlistAgent** – AI-powered Spotify playlist assistant via MCP for ChatGPT and Claude. Stars: 0. [GitHub](https://github.com/Aman1601s/playlistAgent)
- **Neeidy/Badger-Tape** – Fully automated AI content pipeline for lofi YouTube channel: multi-agent system for image, video, music, and publishing. Stars: 0. [GitHub](https://github.com/Neeidy/Badger-Tape)
- **Jessalynredflowered754/SmartDiscover** – Multi-agent AI for discovering Spotify music from natural language prompts. Stars: 0. [GitHub](https://github.com/Jessalynredflowered754/SmartDiscover)
- **Antigravity Awesome Skills** – 1,527+ agentic skills for Claude Code, Gemini CLI, Cursor, Copilot. [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tNl9NbVNGU214YXktUlkyVU5SM24xdkdYeUtGS0pXcTNPM0g0VnNmOVB1alc3S2NQcUR2cFhrLWZMR0p0UV85TjFvME5lRUowWW4yNnZkeEZMZnpVbjBjdlNCNA)

### Papers / Benchmarks
- **"The Moving Drone: Negotiating Agency Between the Voice and the Virtual"** – Explores agency in Hindustani music using virtual drones in Max/MSP. [arXiv](https://arxiv.org/abs/2606.13640v1)

### Product Tutorials / Media Tests
- **Claude Code Workflow tutorial** – Chinese-language YouTube tutorial on Claude Code's Workflow feature for multi-agent collaboration and reusable workflows. [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rSkpRRVh5VkJQMy1fbkJDazVDWEQ1NU92enJXX1VMUFRMRDBJMTlPZUI0VzFVdVd4eWRjeVIwbW4zLU14YlZwSmY1UUVoVk9IS1JoYVRR)
- **Qwen3.6 "jailbreak" tutorial** – Chinese-language YouTube tutorial on running the uncensored Qwen3.6 model locally for agents with 6GB VRAM. [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE5oT3dJVzFaSmxsaWVCd1FBcUhqVFFiY1NGQ0xHWVU5c3pIRDlteFUydWUzU1BQY2ZxbE1ORDg0eWhoc0xZYVlxV3QyTHBMNjBsMXc1OXdR)

### Chinese Community Leads
- **AI Agent for IoTDB remote server maintenance** – Chinese tutorial on using AI agents for time-series database operations. [OSCHINA](https://news.google.com/rss/articles/CBMiWkFVX3lxTE14VW0zZ0RXLU1kVV9BUzZuVXFQQkxrXzdmY1NfRmFhTDRhamVFVF92dmZkVUF5Nm91ZzdGYmg5N0JRZ0taT08xWjZ5azJtZks2TFQybkxfS3JSZw)
- **LLM basics tutorial (Chinese)** – Beginner tutorial on large language models as the "brain" of AI agents. [菜鸟教程](https://www.runoob.com/ai-agent/ai-agent-llm.html)

### Follow-up Items
- **Weak signals needing manual review:**
  - `agerelated-clioquinol357/ACI` – Open protocol for agent-app access, but zero stars and unclear music relevance. [GitHub](https://github.com/agerelated-clioquinol357/ACI)
  - `babyfaced-familytrionychidae322/chordbot` – Local-first AI agent, but zero stars and generic description. [GitHub](https://github.com/babyfaced-familytrionychidae322/chordbot)
  - Google search redesign – Not directly music-agent related, but may affect discovery patterns.
  - Google DeepMind multi-agent safety research – Important context but not music-specific.
<!-- AUTO_CASE_UPDATES_END:music:en -->

## Main Risks

- Platform license limits.
- Legal and ethical risk from imitating specific singers.
- Uncontrolled melody similarity.
- Generic or shallow AI lyrics.
- Weak automatic mixing.
- Music and video rhythm mismatch.
