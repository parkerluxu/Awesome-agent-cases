# Music Generation: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards a "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in the future. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (21+16)

This section is divided into two categories: `21 Tutorials / Cases` and `16 Projects / Papers`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it's worth in-depth reading.

### 21 Tutorials / Cases

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | Suno | Product Tutorial | Wikipedia entry, outlining the generation process of the Suno platform from lyric input to song output, covering model capability boundaries and mainstream application scenarios. | https://en.wikipedia.org/wiki/Suno_%28platform%29 |
| 2 | Udio | Product Tutorial | Wikipedia entry, introducing Udio's technical implementation in lyric processing, audio analysis, and genre conversion, serving as a reference for comparing music generation models. | https://en.wikipedia.org/wiki/Udio |
| 3 | Suno Studio hands-on | Media Experience | TechRadar hands-on report, evaluating the interactive mode of Suno Studio that combines AI generation with manual editing, comparing it with GarageBand to analyze the usability of its intelligent audio tools. | https://www.techradar.com/ai-platforms-assistants/i-tried-suno-studio-the-new-platform-that-mixes-ai-music-generation-with-hands-on-editing-like-garageband-but-smarter |
| 4 | MILO-1080 | Media Report | MusicRadar report, introducing Suno's AI step sequencer MILO-1080, focusing on new capabilities of AI-assisted composition in rhythm and sequence design. | https://www.musicradar.com/music-tech/suno-takes-another-step-into-music-production-with-ai-step-sequencer-milo-1080 |
| 5 | Pitchfork AI music guide | Industry Overview | Pitchfork industry overview, sorting out the technical routes and product positioning of major AI music companies, providing a panoramic view for understanding the competitive landscape of the music generation field. | https://pitchfork.com/features/an-idiots-guide-to-music-ai-companies |
| 6 | Boomy | Product Case | Boomy is a zero-barrier online music generation platform. Users without music theory knowledge can create and publish original songs in minutes, experiencing the complete AI composition workflow from style selection to final export. | https://boomy.com/ |
| 7 | Soundraw | Product Case | Soundraw provides AI-assisted composition tools. Users can customize melody direction and arrangement details to generate royalty-free tracks, suitable for studying refined human-machine collaboration music production models. | https://soundraw.io/ |
| 8 | Loudly | Product Case | Loudly supports automatic generation of multi-style tracks via text prompts and offers online multi-track editing functions, covering an end-to-end workflow from creativity to mixdown output. | https://www.loudly.com/ |
| 9 | ElevenLabs music | Product Case | ElevenLabs extends its speech synthesis capabilities to music generation, supporting text input to generate complete songs with vocals, serving as a case for studying end-to-end lyric-to-audio solutions. | https://elevenlabs.io/ |
| 10 | Stable Audio | Product Case | Stable Audio is based on diffusion models. Users can control music style and duration via text descriptions to generate high-quality audio, representing the cutting-edge technical route in current AI audio generation. | https://stableaudio.com/ |
| 11 | Suno help center | Official Tutorial | Suno's official help documentation, covering creation tips, parameter explanations, and frequently asked questions, serving as the core reference for mastering music generation operations on this platform. | https://help.suno.com/ |
| 12 | Udio | Product Tutorial | Udio supports generating complete songs via lyrics and style descriptions, usable as a test sample for comparing the effects of different models in music creation. | https://www.udio.com/ |
| 13 | Stable Audio | Official Tutorial | Stable Audio's official tutorial provides guides from basic to advanced audio generation, including parameter adjustments and best practices, suitable for systematically learning how to use this diffusion model tool. | https://stableaudio.com/ |
| 14 | AIVA | Product Tutorial | AIVA focuses on AI composition for classical and film scoring styles. Users can generate scores based on emotion or scene parameters, exploring the composition logic combining rule-driven and deep learning approaches. | https://www.aiva.ai/ |
| 15 | Boomy | Product Tutorial | Boomy's product tutorial guides users on how to quickly create and publish AI-generated songs, including style selection and editing tips, suitable for beginners with zero foundation in music creation. | https://boomy.com/ |
| 16 | Soundraw | Product Tutorial | Soundraw's product tutorial demonstrates how to use AI to generate melodies and manually adjust arrangements, suitable for learning the refined human-machine collaboration music production workflow. | https://soundraw.io/ |
| 17 | Loudly | Product Tutorial | Loudly's product tutorial explains the complete steps from text prompts to multi-track mixing, suitable for understanding the editing and export functions of an AI music platform. | https://www.loudly.com/ |
| 18 | BandLab SongStarter | Product Tutorial | BandLab SongStarter provides an AI-driven music inspiration generator. Users can quickly obtain melody snippets based on preset styles, suitable for sparking creative starting points. | https://www.bandlab.com/songstarter |
| 19 | Magenta demos | Official Tutorial | Online demo collection of Google's open-source music AI project. Covers melody generation and style transfer, allowing direct experience of the actual output effects of Magenta models. | https://magenta.tensorflow.org/demos |
| 20 | Magenta.js demos | Official Tutorial | Browser-based interactive examples of Magenta.js. Supports real-time generation and performance, suitable for front-end developers to integrate music AI capabilities into web applications. | https://magenta.tensorflow.org/js |
| 21 | Demucs guide | Project Tutorial | Facebook's open-source Demucs audio source separation project. Based on deep learning models, it can split mixed audio into independent tracks such as vocals, drums, and bass. | https://github.com/facebookresearch/demucs |

### 16 Projects / Papers

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | MusicAgent | Open-source Project/Paper | Microsoft's music Agent framework, unifying tasks such as lyric-to-song conversion, MIDI processing, and audio analysis. It is worth including because it demonstrates a multi-tool collaborative music workflow design, providing a reproducible architectural reference for building integrated music processing Agents. | https://github.com/microsoft/muzic/tree/main/musicagent |
| 2 | MusicAgent paper | Paper | The accompanying paper for MusicAgent, detailing the architecture and experiments of the unified music processing Agent. It is worth including because it discloses technical details of task planning and tool invocation, serving as the original literature for understanding how Agents orchestrate music sub-tasks. | https://arxiv.org/abs/2310.11954 |
| 3 | AutoMV | Paper | A paper proposing an automatic music video generation method, with the core being a cross-modal generation pipeline from audio to visual content. It is worth including because it fully presents the pipeline design and evaluation system for audio-visual alignment, offering direct reference value for multimodal generation Agents. | https://arxiv.org/abs/2512.12196 |
| 4 | GVMGen | Paper | A paper focusing on generative video music matching, with the core being audio-visual synchronization based on generative models. It is worth including because it provides a complete thought process from model design to experimental validation, serving as key literature for researching automated video scoring. | https://arxiv.org/abs/2501.09972 |
| 5 | WeaveMuse | Paper | A paper exploring the interweaving generation of music and visuals, proposing a new paradigm for multimodal fusion generation. It is worth including because it showcases innovative solutions for cross-modal feature interaction and effect evaluation methods, inspiring the generation strategies of multimodal Agents. | https://arxiv.org/abs/2509.11183 |
| 6 | MACAT | Paper | A paper proposing music-aware cross-modal alignment technology, with the core being an alignment scheme for audio and text features. It is worth including because it provides innovative alignment methods and experimental results, serving as an important technical reference for building music understanding Agents. | https://arxiv.org/abs/2502.00023 |
| 7 | MusicAIR | Paper | A paper studying audio information retrieval in music generation, with the core being the use of retrieval-augmented generation for high-quality music. It is worth including because it demonstrates the application of RAG technology in the music domain, providing a specific case for Agents to incorporate external knowledge bases. | https://arxiv.org/abs/2511.17323 |
| 8 | YingVideo-MV | Paper | A paper proposing an automatic music video generation system, completing full video synthesis from script to shots. It is worth including because it discloses pipeline design details, serving as an engineering template for studying end-to-end MV generation Agents. | https://arxiv.org/abs/2512.02492 |
| 9 | IngaRose | Industry Case | A well-known case in the AI music creation field. IngaRose is a real artist who uses AI tools for creation. It is worth including because it provides first-hand experience from the creation workflow to tool usage, serving as a living sample for understanding AI music industry practices. | https://en.wikipedia.org/wiki/IngaRose |
| 10 | BBL Drizzy/Udio | Cultural Case | The controversial case of BBL Drizzy and Udio, showcasing the cultural impact triggered by AI music generation. It is worth including because it exposes conflicts over copyright, originality, and technological ethics, serving as a landmark event for discussing the social impact of AI music. | https://en.wikipedia.org/wiki/Udio |
| 11 | Magenta | Open-source Project | Google's classic open-source project for music and art generation, covering models for melody, rhythm, and timbre generation. It laid the foundation for deep learning music generation, providing a large number of reusable pre-trained models and experimental code. | https://github.com/magenta/magenta |
| 12 | Magenta.js | Open-source Project | The JavaScript version of Magenta, allowing music generation models to run directly in the browser. It lowers the barrier for interactive music creation, enabling front-end developers to quickly integrate AI music capabilities. | https://github.com/magenta/magenta-js |
| 13 | MusicGen | Open-source Project | Meta's text-to-music generation model, based on an audio codec architecture. It is worth including because it provides a high-quality open-source implementation for music generation, serving as a core reference for researching conditional music generation Agents. | https://github.com/facebookresearch/audiocraft |
| 14 | AudioCraft | Open-source Project | Meta's audio generation toolkit, integrating models like MusicGen and providing complete code for music and sound effect generation. It is worth including because it is a one-stop audio generation resource, with pre-trained weights directly usable for an Agent's audio output module. | https://github.com/facebookresearch/audiocraft |
| 15 | Riffusion | Open-source Project | An open-source project using diffusion models to generate music spectrograms in real-time. It is worth including because it demonstrates the innovative practice of transferring image generation technology to the audio domain, providing new ideas for cross-modal generation in Agents. | https://github.com/riffusion/riffusion |
| 16 | Jukebox | Open-source Project | An early milestone in music generation from OpenAI, capable of generating complete songs with lyrics. It is worth including because its multi-scale encoding and sampling mechanisms form the basis for subsequent music generation models, holding historical value for understanding an Agent's sequence generation capabilities. | https://github.com/openai/jukebox |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AetherWave MCP | MCP Server | Model Context Protocol server for AetherWave Studio — music, image, video, and band generation tools for Claude, Cursor, Continue, and custom agents. | [GitHub](https://github.com/AetherWave-Studio/aetherwave-mcp) |
| Varosity MCP Server | MCP Server | Stdio MCP server for Varosity.ai — exposes video, voice, music generation to Claude Desktop, Cursor, Hermes, and any MCP host. | [GitHub](https://github.com/varosity-ai/mcp-server) |
| doubao2api | API Wrapper | Reverse-engineered Doubao (豆包) API → OpenAI-compatible REST service. Free multimodal chat, image/video/music generation, and file hosting for AI agents. | [GitHub](https://github.com/wangchuxiaoji-oss/doubao2api) |
| Hermes-Suno-Music-Agent | Agent Workflow | Comprehensive Hermes agent for building complete AI music video projects. Includes structured workflows for lyrics, Suno prompts, image generation, video direction, and YouTube metadata. | [GitHub](https://github.com/vivar/Hermes-Suno-Music-Agent) |
| ArcReel | Agent Workbench | AI Agent-driven open-source video generation workbench — novel → character/scene/prop design → script → storyboard → video, with cross-shot character and scene consistency. | [GitHub](https://github.com/ArcReel/ArcReel) |
| AceDataCloud Skills | Agent Skills | Agent Skills for AceDataCloud AI services — music, image, video generation, web search, and more. Compatible with Claude Code, GitHub Copilot, Gemini CLI, and all agentskills.io-compatible agents. | [GitHub](https://github.com/AceDataCloud/Skills) |
| Badger-Tape | Multi-Agent Pipeline | Fully automated AI content pipeline for a lofi YouTube channel. Multi-agent system orchestrating image generation, video synthesis, music production, and YouTube publishing — zero manual steps from prompt to upload. | [GitHub](https://github.com/Neeidy/Badger-Tape) |
| SmartDiscover | Multi-Agent Tool | Discover Spotify music from natural language prompts with multi-agent AI that ranks songs and builds ready-to-use playlists. | [GitHub](https://github.com/Jessalynredflowered754/SmartDiscover) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| The Moving Drone: Negotiating Agency Between the Voice and the Virtual | Research Paper | Explores a Hindustani music system where a traditionally static drone gains increasing agency, transitioning from reactive to proactive roles using four independent loopers in Max/MSP. | [arXiv](https://arxiv.org/abs/2606.13640v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Claude Code Workflow Tutorial | Video Tutorial | Complete practical tutorial on Claude Code's Workflow feature, demonstrating ultrawork to summon multiple agents and auto-generate JS scripts for reusable, precisely controllable workflows. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1rSkpRRVh5VkJQMy1fbkJDazVDWEQ1NU92enJXX1VMUFRMRDBJMTlPZUI0VzFVdVd4eWRjeVIwbW4zLU14YlZwSmY1UUVoVk9IS1JoYVRR?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Antigravity Awesome Skills | Skill Registry | Registry of 1,527+ agentic skills for Claude Code, Gemini CLI, Cursor, Copilot, and more. | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE4tNl9NbVNGU214YXktUlkyVU5SM24xdkdYeUtGS0pXcTNPM0g0VnNmOVB1alc3S2NQcUR2cFhrLWZMR0p0UV85TjFvME5lRUowWW4yNnZkeEZMZnpVbjBjdlNCNA?oc=5) |
| Microsoft Rayfin | Backend Platform | New backend platform from Microsoft for AI agent development and app creation. | [Tech Times](https://news.google.com/rss/articles/CBMizgFBVV95cUxQX3IxQXM3SVNacnJuUFk4NlhBc2VaUklKWnpOM294aXQwaFVwSTBKQ3J4NzFONUlHRUtBMGRteWdYZGdDS1dLSTdTdVBLckMxVlBYQVl2Z2V2RkxRRm9feHl3aWk3Q1p2STk1eWltdjJkS0lnSk5fakNTVmNPVlFKNG9rREFhc1FuVG9Hc3htZ1RhdjNhdlg2ZWNWUXJyOUNLc0ZibkFjOU8xaC1iYThJOVlfdFhuZVIyQlRkUXpTQWx2Ymx6U01JVXBXbUtNdw?oc=5) |

## Resource Update (2026-06-14)

### Papers

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| HAIM: Human-AI Music Datasets for AI Music Production Tracking Benchmark | Paper | Proposes a benchmark for detecting AI involvement across the full music production workflow (generation, vocal synthesis, arrangement, mastering), moving beyond binary AI-or-human classification. | [arXiv](https://arxiv.org/abs/2606.01686v1) |
| JenBridge: Adaptive Long-Form Video Soundtracking across Scene Transitions | Paper | A modular Transformer-based framework for generating coherent, high-fidelity soundtracks for long-form video that maintain narrative continuity across scene transitions. | [arXiv](https://arxiv.org/abs/2606.01703v1) |
| Cross-domain benchmarks reveal when coordinated AI agents improve scientific inference from partial evidence | Paper | Evaluates when coordinated AI agents add value over simpler workflows across four scientific tasks, including mapping molecular structure into musical representations. | [arXiv](https://arxiv.org/abs/2605.22300v1) |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Sparkah/agentic-soundtracks | GitHub Project | Agentic music generation for LLM-built HTML5 games, built at Vercel Built in London 2026. | [GitHub](https://github.com/Sparkah/agentic-soundtracks) |
| Mustard5/music_generation | GitHub Project | Agent Zero plugin for generating music from text prompts via Google Lyria / OpenRouter. | [GitHub](https://github.com/Mustard5/music_generation) |
| sunpochin/music-release-agent | GitHub Project | AI-driven music tracker and social sharing service that automates Spotify scans, generates bilingual reviews via Gemini API, and orchestrates social posts. | [GitHub](https://github.com/sunpochin/music-release-agent) |
| CMbunny/AI-agents | GitHub Project | Collection of AI agents built with Python, including music generation. | [GitHub](https://github.com/CMbunny/AI-agents) |
| partme-ai/full-aigc-skills | GitHub Project | 34+ agent skills for AI content generation including audio, music, and multimodal. | [GitHub](https://github.com/partme-ai/full-aigc-skills) |

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
| :--- | :--- | :--- | :--- |
| mood-playlist-agent | GitHub | AI agent that generates personalized playlists based on mood, weather, and listening history. | [https://github.com/niravpatidar37/mood-playlist-agent](https://github.com/niravpatidar37/mood-playlist-agent) |
| vesper | GitHub | A text-first A2A/MCP music control agent for the Cider Apple Music client, with adaptive sessions, natural-language playback control, and a local CLI. | [https://github.com/randileeharper/vesper](https://github.com/randileeharper/vesper) |
| SoulTuner-Agent | GitHub | LLM-powered music recommendation agent with Hybrid RAG, Neo4j, and long-term memory. | [https://github.com/hgsanyang/SoulTuner-Agent](https://github.com/hgsanyang/SoulTuner-Agent) |
| FADE-Director | GitHub | Locally-hosted agentic service that directs and renders music videos from an uploaded song via a conversational LLM agent. | [https://github.com/ckinpdx/FADE-Director](https://github.com/ckinpdx/FADE-Director) |
| FrameFusion | GitHub | AI-assisted short-form video creation with specialist agents, Pexels b-roll tools, music generation, and MP4 rendering. | [https://github.com/barkerbg001/FrameFusion](https://github.com/barkerbg001/FrameFusion) |
| bony-agent | GitHub | Full-stack AI content production & distribution platform with 27+ specialized agents for chat, image/video/music generation, and smart editing. | [https://github.com/phuhao00/bony-agent](https://github.com/phuhao00/bony-agent) |
| roon-mcp | GitHub | MCP server to control Roon music player via AI agents. | [https://github.com/bestimmaa/roon-mcp](https://github.com/bestimmaa/roon-mcp) |
| Aria-Agent | GitHub | AI character agent majoring in piano performance, focusing on the connection between music and human memories. | [https://github.com/1667699722-dotcom/Aria-Agent](https://github.com/1667699722-dotcom/Aria-Agent) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
| :--- | :--- | :--- | :--- |
| Libretto: Giving LLM Agents a Sense of Musical Structure | arXiv paper | Introduces an agent-facing framework for symbolic music generation and revision using an LLM-native grammar with explicit onset slots, voices, and bar-level organization. | [https://arxiv.org/abs/2606.22708v1](https://arxiv.org/abs/2606.22708v1) |
| Audio-Mind: An Auditable Agentic Framework for Audio Understanding | arXiv paper | Proposes a pluggable framework for conditional evidence acquisition in audio understanding, dynamically combining a strong frontend with agentic reasoning. | [https://arxiv.org/abs/2605.28480v1](https://arxiv.org/abs/2605.28480v1) |
