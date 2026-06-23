# Game Development: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is a curated index of AI Agent resources for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, reference workflows, and research materials worth further reading.

> Note: This index leans towards "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in the future. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (3+25)

This section is divided into two categories: `3 Tutorials / Cases` and `25 Projects / Papers`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it is worth in-depth reading.

### Tutorials / Cases (3 Items)

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | Replit racing game article | Media Case | Business Insider case, documenting the process of building a racing game from scratch using Replit Agent, observing the transformation from natural language requirements to a runnable prototype. | https://www.businessinsider.com/vibe-coding-game-replit-elon-musk-sam-altman-racing-2025-3 |
| 2 | The Times Meatball Mania | Media Case | The Times report, describing the author's experience of building the game Meatball Mania in minutes using AI, experiencing the fun and challenges of rapid prototyping. | https://www.thetimes.co.uk/article/i-built-a-game-in-minutes-with-ai-the-thrill-took-me-back-years-27mljwx6j |
| 3 | Tom Hardware Minesweeper | Media Test | Tom's Hardware test, comparing the performance of four AI coding agents in building a Minesweeper clone, providing performance evaluations of each tool in game development. | https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst |

### Projects / Papers (25 Items)

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | GamED.AI | Paper | The GamED.AI paper proposes an AI application framework for the entire game development process, covering automatic gameplay prototype generation and agent behavior evaluation, providing a reproducible evaluation benchmark for game AI research. | https://arxiv.org/abs/2604.23947 |
| 2 | DSGBench | Paper | DSGBench focuses on dynamic strategy games, designing an evaluation framework that includes multi-agent collaboration and competition, emphasizing experimental reproducibility and scenario diversity. | https://arxiv.org/abs/2503.06047 |
| 3 | SmartPlay | Paper | SmartPlay integrates multiple game environments to build an agent evaluation platform, providing standardized task settings and performance metrics for easy horizontal comparison of different algorithms. | https://arxiv.org/abs/2310.01557 |
| 4 | Unity ML-Agents | Open Source Project | An official toolkit deeply integrating reinforcement learning with the Unity game engine, supporting training agents in 3D environments and directly using them in game logic; a mature infrastructure for game AI development. | https://github.com/Unity-Technologies/ml-agents |
| 5 | Voyager | Paper/Project | Implements an autonomous exploration agent based on large language models in Minecraft, continuously learning through a skill library and environmental interaction, demonstrating open-ended task-solving capabilities; a benchmark work for in-game Agent research. | https://arxiv.org/abs/2305.16291 |
| 6 | MineDojo | Paper/Project | MineDojo provides a Minecraft research framework and a large-scale multimodal dataset covering tasks, demonstrations, and knowledge graphs, supporting agent training and evaluation. | https://arxiv.org/abs/2206.08853 |
| 7 | Generative Agents | Paper | Generative Agents simulate credible human behavior through memory, reflection, and social architectures, achieving long-term character interaction and group evolution in a sandbox environment. | https://arxiv.org/abs/2304.03442 |
| 8 | StoryAgent | Paper | StoryAgent researches AI-based narrative generation, proposing a joint evaluation method for story planning and character interaction, focusing on narrative coherence and user engagement. | https://arxiv.org/abs/2411.04925 |
| 9 | Kubrick | Paper | The Kubrick paper proposes a generative model-based algorithm for automatic game level generation, covering design constraints and player experience optimization, with experimental reproducibility details. | https://arxiv.org/abs/2408.10453 |
| 10 | OpenSpiel | Open Source Project | DeepMind's game theory research framework, incorporating multiple game environments and algorithms. Provides a standardized multi-agent reinforcement learning benchmark for training and comparing competitive and cooperative strategies of Agents. | https://github.com/google-deepmind/open_spiel |
| 11 | PettingZoo | Open Source Project | A multi-agent reinforcement learning library providing a Gymnasium-compatible API. Unified environment interfaces and built-in cooperative/adversarial scenarios simplify the setup and evaluation process for multi-Agent experiments. | https://github.com/Farama-Foundation/PettingZoo |
| 12 | MiniGrid | Open Source Project | A lightweight grid world environment designed for reinforcement learning teaching and benchmarking. Simple observation space and configurable tasks allow for quick validation of an Agent's navigation and basic reasoning abilities. | https://github.com/Farama-Foundation/Minigrid |
| 13 | Procgen Benchmark | Open Source Project | OpenAI's procedurally generated environment suite, containing 16 games. Included for its infinite level variation feature, specifically designed to test an Agent's generalization ability and robustness to unseen scenarios. | https://github.com/openai/procgen |
| 14 | NetHack Learning Environment | Open Source Project | A reinforcement learning environment based on the classic Roguelike game NetHack. Complex interactions and long-term planning requirements provide a challenge for studying Agent exploration and strategy under sparse rewards. | https://github.com/facebookresearch/nle |
| 15 | GVGAI | Open Source Project | A general video game AI framework supporting multiple games and controllers. Included for its competition mechanism and unknown game testing, driving the design of general Agent architectures capable of transferring across games. | https://github.com/GAIGResearch/GVGAI |
| 16 | MineDojo | Open Source Project/Paper | A Minecraft research platform providing a large-scale dataset and simulator. Included for its open world and complex survival tasks, providing a benchmark for embodied Agent perception, planning, and tool use. | https://github.com/MineDojo/MineDojo |
| 17 | Voyager | Open Source Project/Paper | An autonomous Agent based on MineDojo, featuring an automatic skill library expansion mechanism. Self-exploration and skill unlocking processes demonstrate the Agent's ability for continuous learning in an open world. | https://github.com/MineDojo/Voyager |
| 18 | Crafter | Open Source Project | A Minecraft-like 2D survival game environment providing a reinforcement learning interface. Resource collection and crafting task chains are suitable for testing an Agent's learning efficiency under compositional goals. | https://github.com/danijar/crafter |
| 19 | MiniHack | Open Source Project | A simplified version of the NetHack environment, supporting custom level generation. Included for its programmable task generator, which can quickly create diverse scenarios to evaluate an Agent's strategy adaptation ability. | https://github.com/facebookresearch/minihack |
| 20 | ViZDoom | Open Source Project | A first-person shooter reinforcement learning environment based on Doom. Visual input and dynamic combat scenarios are used to train an Agent's perception and decision-making in real-time adversarial settings. | https://github.com/Farama-Foundation/ViZDoom |
| 21 | Pommerman | Open Source Project | Pommerman is a Bomberman-style multi-agent environment supporting competition and cooperation. Its limited map and spatial reasoning requirements make it suitable for studying an Agent's adversarial strategies under partial information. | https://github.com/MultiAgentLearning/playground |
| 22 | Melting Pot | Open Source Project | DeepMind's social interaction environment suite, containing resource allocation and cooperation game scenarios. Included for its carefully designed social dilemmas, used to analyze Agent behavior patterns and fairness within groups. | https://github.com/google-deepmind/meltingpot |
| 23 | Griddly | Open Source Project | Griddly is a grid world environment generator supporting custom rules and rendering. High configurability allows for rapid construction of unique tasks for testing an Agent's generalization learning ability. | https://github.com/Bam4d/Griddly |
| 24 | Unity ML-Agents | Open Source Project | Unity ML-Agents is Unity's machine learning toolkit, providing a 3D environment training framework. Its physics simulation and visual rendering capabilities support the development of embodied Agents with spatial awareness. | https://github.com/Unity-Technologies/ml-agents |
| 25 | OpenAI Retro | Open Source Project | OpenAI Retro is a retro game reinforcement learning platform supporting multiple classic games. Limited state space and deterministic rules make it suitable for studying Agent policy optimization in discrete action spaces. | https://github.com/openai/retro |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| everything-game-dev-code | GitHub | Universal scaffold for AI-assisted game development: 42 agents, 51 commands, 86 skills. Multi-engine (Unity, Unreal, Godot, HTML). Multi-harness (Claude Code, Codex, Cursor, OpenCode, Kiro). | [Link](https://github.com/MRCalderon3D/everything-game-dev-code) |
| faster-vibe-coded-apps-games-website | GitHub | Faster vibe-coded apps, games, and websites for Codex, Claude Code, and other agents. | [Link](https://github.com/rhythmkr360-png/faster-vibe-coded-apps-games-website.-) |
| claude_agents_gamekit | GitHub | Build multi-agent game dev workflows for Unity, Godot, Web, WeChat Mini Games, and Cocos Creator with Claude Code. | [Link](https://github.com/maybugwaterbutt646/claude_agents_gamekit) |
| claude-code-build | GitHub | Build an unofficial Claude Code CLI from source for research, Bun builds, and Node.js use with custom API endpoints. | [Link](https://github.com/alessandrahighvoltage217/claude-code-build) |
| godot-agent | GitHub | Agent-first CLI and MCP server that lets AI agents drive the Godot engine to build games, with structured output for programmatic consumption. | [Link](https://github.com/aigengame/godot-agent) |
| GameStudio | GitHub | Turn any supported coding-agent harness into a full game-dev studio: 55 specialized AI agents and 182 skills for Godot, Unity, Unreal, Three.js, PixiJS, Phaser, and R3F. | [Link](https://github.com/bullish0x/GameStudio) |
| crystal-kingdom-defenders | GitHub | Tower defense 2D game on web (TypeScript + Phaser 3 + Vite), developed using Agentic Vibe Coding with Claude Code. | [Link](https://github.com/ds-mrtq/crystal-kingdom-defenders) |
| hadoken-high-roller-web | GitHub | Street Fighter themed slot machine game built with Cloudflare Workers, React, and TypeScript using agentic coding workflows (Cursor/OpenCode/BMAD). | [Link](https://github.com/everscending/hadoken-high-roller-web) |
| audio-mcp | GitHub | Capture mic and system audio on macOS in explicit MCP sessions and expose raw WAV files to AI agents for analysis. | [Link](https://github.com/burfthdae-oss/audio-mcp) |
| vibecraft | GitHub | Browser-based voxel game inspired by Minecraft, built with Three.js and TypeScript using OpenCode, Claude Code, and Codex AI assistants. | [Link](https://github.com/Uzzoper/vibecraft) |
| godot-native-rl | GitHub | Native integration of RL in Godot using ncnn for small AI agents, even in web apps. | [Link](https://github.com/minigraphx/godot-native-rl) |
| gemma4-uefn-game-planner | GitHub | Premium agentic web dashboard and local orchestrator powered by Gemma 4 12B to design high-retention Fortnite UEFN games. Features Architect & Critic pipelines, Verse code blueprinting, and progression math. | [Link](https://github.com/RorriMaesu/gemma4-uefn-game-planner) |
| WebGameTemplateForAgents | GitHub | Project template for building browser games with the help of a coding agent. | [Link](https://github.com/ludenio/WebGameTemplateForAgents) |
| Autonomous-Game-Developer-Studio | GitHub | AI-orchestrated development environment where specialized agents collaborate to design, build, test, and refine a Python/Pygame adventure game in real-time. | [Link](https://github.com/MustfZTRK/Autonomous-Game-Developer-Studio) |
| graphia | GitHub | LLM-powered text-based UI Mafia Game using Langgraph, Bedrock Agent Core, Terraform, and spec-driven development lifecycle. | [Link](https://github.com/tigra/graphia) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Game-Theoretic Multi-Agent Control for Robust Contextual Reasoning in LLMs | arXiv | Proposes multi-agent control framework to defend against prompt-injection and context-poisoning attacks in long-horizon LLM reasoning, using MCP for context exchange. | [Link](https://arxiv.org/abs/2606.10322v1) |
| RogueAI: A Reverse Turing Test for Detecting Licensed AI Deception in Dialogue | arXiv | Interactive webapp operationalizing a one-on-two interrogation game where a human judge detects AI deception in dialogue. | [Link](https://arxiv.org/abs/2606.13310v1) |
| LLM-Mediated Demand Response Coordination in Smart Microgrids | arXiv | Multi-agent simulation using LLM Influence Compiler for demand-response directives in a repeated Prisoner's Dilemma on a social network. | [Link](https://arxiv.org/abs/2606.11050v1) |
| From Player to Master: Enhancing Test-Time Learning of LLM Agents via Reinforcement Learning over Memory | arXiv | Proposes MemoPilot, a plug-in memory copilot that trains memory updates via RL to align with downstream objectives over multi-step horizons. | [Link](https://arxiv.org/abs/2606.08656v1) |
| The Shibboleth Effect: Auditing the Cross-Lingual Distributional Skew of Large Language Models | arXiv | Multi-agent geopolitical wargame (Cerulean Sea Crisis) auditing cross-lingual distributional skew in six frontier LLMs under adversarial conditions. | [Link](https://arxiv.org/abs/2606.11082v1) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenAI to acquire Ona | News | OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments for long-running AI agents across enterprise workflows. | [Link](https://openai.com/index/openai-to-acquire-ona) |
| Google search box redesign | News | Google announced a sweeping redesign of the search box at I/O 2026, transforming it from a keyword input into a dynamic, AI-driven conversational interface. | [Link](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) |

## Resource Update (2026-06-14)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| GodotCoder | CLI tool | CLI-first AI development agent for building Godot games with native workflows, project inspection, runtime validation, and future editor integration. | [GitHub](https://github.com/reelmesh/GodotCoder) |
| godot-mcp | MCP server | Gives AI assistants eyes and hands in the Godot editor: scene editing, input injection, deterministic playtesting, and live game state for agents. | [GitHub](https://github.com/satelliteoflove/godot-mcp) |
| CivForge | Game prototype | Modular Civ-inspired 4X game prototype in Godot (data-driven, extensible, with sandbox backend). Built with AI coding agents. | [GitHub](https://github.com/mwd474747/CivForge) |
| summon-skill | Agent generator | Generate custom AI agent files tailored to your codebase that learn and improve autonomously over time. | [GitHub](https://github.com/0rtez/summon-skill) |
| smartness-eval | Evaluation framework | Measure AI agent smartness with a 14-dimension eval framework, confidence intervals, trend tracking, and anti-gaming probes. | [GitHub](https://github.com/Compound-epigraphy786/smartness-eval) |
| HoloScript | Semantic layer | The semantic layer for spatial computing and AI agents — write once, run as VR, robotics, web, or game. | [GitHub](https://github.com/brianonbased-dev/HoloScript) |
| paw-agents | Agent OS | Build and manage autonomous AI agents with an extensible operating system for multi-agent systems and safety-focused task execution. | [GitHub](https://github.com/Lawabiding-longsleeve257/paw-agents) |
| multi-agent-game-engine | Game engine | Build multi-agent simulations and visualize LLM-driven behaviors with a local-first engine featuring a built-in map editor and desktop workspace. | [GitHub](https://github.com/Disarrayed-agglutination903/multi-agent-game-engine) |
| agent-diplomacy | Research project | Examination of how agents negotiate with different moral frameworks as constitutions, using the board game Diplomacy as the basis. | [GitHub](https://github.com/brodye11-personal/agent-diplomacy) |
| mygamemaster | Game master | A personalized AI Game Master for tabletop RPGs — runs live campaigns on Discord, with a living world, rules engine, and one isolated container per game. Built on the Hermes agent framework. | [GitHub](https://github.com/tibs245/mygamemaster) |
| mystery-agents | Game generator | AI-powered mystery party game generator using LangGraph and LangChain. | [GitHub](https://github.com/juanje/mystery-agents) |
| mimo-gameforge | Content generator | MiMo Procedural Game Content Generator — AI-powered platform with Hermes Agent. | [GitHub](https://github.com/Deilvey/mimo-gameforge) |
| game-discount-agent | Scraper + generator | Steam/Epic game discount scraper + AI content generator + cron pipeline. | [GitHub](https://github.com/Aiden-zht/game-discount-agent) |
| gptgta | Game prototype | GTA-style browser game prototype developed through iterative AI-assisted prompting and vibe-coded development workflows. | [GitHub](https://github.com/vw5hwbngy4-debug/gptgta) |
| ReFrame | Performance tool | Optimize game performance with a GitHub Copilot agent that detects hardware and automatically tunes configuration files and registry settings. | [GitHub](https://github.com/Yowspo/ReFrame) |
| ash-kechaum | Trading agent | Manage trading card game pricing and purchasing with an agent that automates value tracking and buying decisions. | [GitHub](https://github.com/SabbyMakerHub/ash-kechaum) |
| AI-Game-Generator | Game generator | Create engaging HTML educational games effortlessly with AI. Just input your idea, no setup needed. | [GitHub](https://github.com/ipuntoo/AI-Game-Generator) |
| Procession | World engine | An experimental living world engine where every NPC, faction, and location is an independent OTP process. Features emergent storytelling, hierarchical memory, and a procedural game generator powered by local LLMs (Ollama). | [GitHub](https://github.com/Allwrighty3/Procession) |
| Kifu-Sensei | Commentary generator | An automated LLM-based Go game commentary generator. | [GitHub](https://github.com/YianXie/Kifu-Sensei) |
| Game-Master | Preset | SillyTavern Preset for those who want to be a "player" while LLM acts as the Game Master. Complete with dice mechanics, relationship engine, and random event generator. | [GitHub](https://github.com/ZDOSt/Game-Master) |
| glm5.2-pacman-oneshot | Benchmark replication | Replication of the one-shot Pac-Man game development benchmark using the reasoning capabilities of the GLM-5.2 LLM. | [GitHub](https://github.com/DominguesM/glm5.2-pacman-oneshot) |
| agency-agents-zh | Agent library | 211 plug-and-play AI expert roles supporting 16 tools (Hermes Agent, Claude Code, Cursor, Copilot, etc.) across 18 departments. Includes 46 original Chinese market agents (Xiaohongshu, Douyin, WeChat, Feishu, DingTalk, etc.). | [GitHub](https://news.google.com/rss/articles/CBMiWkFVX3lxTE9fMG1vVlVQMC1QWmRoeW9mcEEtWTZuVWJ0MW9EbjI3LURsMGNXNjVtR2NqNGlZV19VNl9VeDhKZ214bmwzZWZTOG9zVWdaZ3lDeVRCUlJZb1BQUQ?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| GENSTRAT: Toward a Science of Strategic Reasoning in LLMs | Paper | Studies LLMs deployed as economic agents in marketplaces, auctions, and bidding settings. Introduces a benchmark for strategic reasoning that goes beyond fixed canonical games. | [arXiv](https://arxiv.org/abs/2605.23238v1) |
| To Nuke or Not to Nuke: LLMs' (Missing) Ethical Reasoning in High-Stakes Simulations | Paper | Studies LLM ethical reasoning gaps in Civilization V, a multiplayer game with complex decision-making. Analyzes 130 high-tension LLM self-play episodes. | [arXiv](https://arxiv.org/abs/2606.08310v1) |
| Aligned but Not Partner-Specific: Multimodal LLM Agents in Reference Games | Paper | Distinguishes how multimodal LLM agents succeed in reference games without human-like partner-specific conventions. | [arXiv](https://arxiv.org/abs/2606.08081v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AI工作流技巧—100% vibe coding 完成 gamejam | Tutorial | Workflow tips for completing a game jam with 100% vibe coding. | [机核GCORES](https://news.google.com/rss/articles/CBMiT0FVX3lxTFBZSlRfZ2tyclZxQ0ppWGt0Y2lHT3JZUzRhRklNMlpMN2I2ZDI2UXhHSnY1bHliSC1XNkJaYUZZQ3RtaWJ1NXluTk1IN2t3Zjg?oc=5) |
| 零成本！用AI打造你的第一款游戏Demo（2026保姆级教程） | Tutorial | Zero-cost tutorial for building your first game demo with AI (2026 edition). | [CSDN](https://news.google.com/rss/articles/CBMibkFVX3lxTFBTQzBqaG5NQVpGOVgwZ3VSVml6RHRmSk84NHBER0xwZ2N5QU5jZE9UMlFaSmVfMUJQVWczNmo1TkxQZC1OOXJZY0F6WTV5TlVsN3ZLNy1wOGEyOUxiekVwaUNKVlJlRHh6Ym9zeXNB?oc=5) |
| Free AI Tools Every Unity Developer Should Use | Tutorial | Guide to free AI tools for Unity developers to build games faster. | [DEV Community](https://news.google.com/rss/articles/CBMipAFBVV95cUxOOTFXVG1NUEFNWFpJVmpNekxfcmZaLXVZa21PTUs2Q3BQUWRSSkFqUmQzejBQRlV1RjFlMVhUVWotRjR6bktQNUV4U2VoMzFOeC1HdGM0LVV0a3RBN1dtM1ZWTjQwblhoeUJpUHZVNEpHMS1CN3VRelpKNnYtUTJja3NpVWxMUzZObmFDRWFxVm9GNk5KcTdmWk56amhDR3JPb25NTg?oc=5) |
| AI Agent在游戏NPC中的革新应用 | Article | Overview of innovative applications of AI agents in game NPCs. | [CSDN](https://news.google.com/rss/articles/CBMibkFVX3lxTE9nckNxaGp4UjMwcWFOaTNjZVJ2MHJqQ3JRdFMyM3ByWE41alBaZFZ4S2ZMMnFxeWl1S1oyLUlyOXRpdmxGSWFBblE2SmpHcGtBc2NSQThuOW9WVHI2MVZDTlNMLTJuZXMwQ2J0OW9B?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| GodeX 1.2.0 | API gateway | OpenAI-compatible Responses API gateway allowing Codex, CLI tools, and developer agents to access any model (DeepSeek, Xiaomi, MiniMax, Zhipu, etc.) via a local gateway. Now supports GLM-5.2. | [开源中国](https://www.oschina.net/news/458338) |
| OpenEnv | RL environment | Open-source community-backed environment for Agentic Reinforcement Learning. | [Hugging Face](https://huggingface.co/blog/openenv-agentic-rl) |
| Holo3.1 | Computer use agent | Fast & local computer use agents. | [Hugging Face](https://huggingface.co/blog/Hcompany/holo31) |
| hf CLI (agent-optimized) | CLI tool | Designing the Hugging Face CLI as an agent-optimized way to work with the Hub. | [Hugging Face](https://huggingface.co/blog/hf-cli-for-agents) |
| JiuwenSwarm | Agent swarm OS | Full-stack open-source Agent Swarm framework, positioning as the "operating system" for the agent era. | [CSDN](https://news.google.com/rss/articles/CBMiXkFVX3lxTE8wbkk3WURQZDZIUFdtSkZmVldGTmxiTGlHaVZtNEhaVWl5dTRRbVpON0VKQ2tkNXZfZ19pY2pfbzBUUjRpRVMyV3lwNmNpWFNSYXRXdXI5VDNzWUloSmc?oc=5) |
| Graphify + code-review-graph | Knowledge graph tool | Build a self-updating knowledge graph for Claude Code and other AI coding agents. | [DEV Community](https://news.google.com/rss/articles/CBMiywFBVV95cUxQcnB3R0N1LXdHa2hjX1BiUVVMMm9fVDlVT0o2UXZmWGptbkFlLVZVU1dMSXppQlZ2ZDNPWlRJTC1LUXlhZURtQTVXT25tZkNVTWJVdGRzaDZjWkVVaXYyQTFLWFVYOWRuYndVSThLMlZ4LUlaczg0U043TzBDX0NYNHhfcDA1VjN6Y0NrU3NwczdVdDNQVHlabFMxdGZhVHRQbFUtZ3pnbkoxM05CZGVfMVpkZm8tZW81MWpBQ2o0aE1hc2EycDlGUm1lQQ?oc=5) |
| WorkBuddy | AI agent office tool | Business data insight and automated response AI agent for operations, customer success, and management roles. | [Tencent](https://copilot.tencent.com/work/) |
| Mistral Vibe (formerly Le Chat) | AI chat + coding agent | Mistral's AI chat and agent for work and code. Chat, think, search, write, code, and automate. | [Mistral](https://mistral.ai/products/vibe/) |
| Cursor | AI coding IDE | AI-powered coding IDE with project rules support via `.cursorrules` and `.cursor/rules/` directory. | [Cursor](https://cursor.com/cn) |

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| wellingfeng/UltraGameStudio | GitHub | AI coding agent for game development: engine workflows, gameplay code, and asset generation. | [GitHub](https://github.com/wellingfeng/UltraGameStudio) |
| keigotak/casual-game-creation | GitHub | Claude Code-based multi-agent workflow for iterative small web game development. | [GitHub](https://github.com/keigotak/casual-game-creation) |
| trzz333/sight | GitHub | Local-first AI game-agent lab with custom Godot micro-games, open-source games, and Gymnasium benchmarks. | [GitHub](https://github.com/trzz333/sight) |
| yksorez/defold-agent-config | GitHub | AI agent configurations and skills for Defold engine game development workflows. | [GitHub](https://github.com/yksorez/defold-agent-config) |
| rkibistu/godot-ai-igloo | GitHub | Sandboxed environment integrating agentic AI + MCP + Godot. | [GitHub](https://github.com/rkibistu/godot-ai-igloo) |
| Redgoatfishwhittler671/AgentZet | GitHub | Automate Unreal Engine game development: build projects, edit C++ source, manage Blueprints via AI agent. | [GitHub](https://github.com/Redgoatfishwhittler671/AgentZet) |
| agustinrbeltran/game-dev-agent-package | GitHub | APM package providing a Game Developer role for AI coding agents (Unity/Unreal, 60+ FPS budget). | [GitHub](https://github.com/agustinrbeltran/game-dev-agent-package) |
| vitordepaula/pong | GitHub | Minimalist retro-style Pong built with HTML5 Canvas/CSS3 as a study on agentic coding. | [GitHub](https://github.com/vitordepaula/pong) |
| projectkraenk/Awesome-AI-Game-Dev-Tools | GitHub | Curated list of AI tools, agents, frameworks, asset generators, and automation for game developers. | [GitHub](https://github.com/projectkraenk/Awesome-AI-Game-Dev-Tools) |
| Yuan-ManX/ai-game-devtools | GitHub | Hub for AI-powered game development tools: LLMs, World Models, Agents, Code, Image, 3D, Audio, etc. | [GitHub](https://github.com/Yuan-ManX/ai-game-devtools) |
| dreamteam-hq/brigid | GitHub | Godot 4.6 MMO game dev agent. | [GitHub](https://github.com/dreamteam-hq/brigid) |
| Yuki001/game-dev-skills | GitHub | Personal agent skill repository focused on game development. | [GitHub](https://github.com/Yuki001/game-dev-skills) |
| ShahmeerAftab/ai-snake-game | GitHub | AI-assisted Snake Game built via iterative LLM prompting. | [GitHub](https://github.com/ShahmeerAftab/ai-snake-game) |
| brandonbirchwork-hash/God-sim | GitHub | 2D civilization simulation with evolving agents (WorldBox-style). | [GitHub](https://github.com/brandonbirchwork-hash/God-sim) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| 3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code | arXiv | Benchmark for evaluating VLM agents on procedural 3D generation in modeling software. | [arXiv](https://arxiv.org/abs/2606.01057v1) |
| Beyond the Current Observation: Evaluating Multimodal LLMs in Controllable Non-Markov Games | arXiv | RNG-Bench benchmark suite for testing multimodal LLMs' ability to reconstruct past observations and act on them. | [arXiv](https://arxiv.org/abs/2606.19338v1) |
| Hierarchical Control in Multi-Agent Games: LLM-based Planning and RL Execution | arXiv | Hierarchical architecture using LLM as strategic controller selecting RL skill policies for multi-agent teams. | [arXiv](https://arxiv.org/abs/2606.20014v1) |
| Enhancing Decision-Making with LLMs through Multi-Agent Fictitious Play | arXiv | Multi-agent system using fictitious play for decision-making tasks with interdependent stakeholders. | [arXiv](https://arxiv.org/abs/2606.19308v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Cline for VS Code: Free AI Coding Agent Setup Guide (2026) | Guide | Setup guide for Cline AI coding agent with custom instructions and rules. | [deployhq.com](https://www.deployhq.com/guides/cline) |
| Is it agentic enough? Benchmarking open models on your own tooling | Blog | Hugging Face blog on benchmarking open models for agentic tasks. | [huggingface.co](https://huggingface.co/blog/is-it-agentic-enough) |
| Build real agentic apps using CUGA | Blog | Working examples of agentic applications on a lightweight harness. | [huggingface.co](https://huggingface.co/blog/ibm-research/cuga-apps) |
| Codex-maxxing for long-running work | Blog | How to use Codex to preserve context and manage complex projects. | [openai.com](https://openai.com/index/codex-maxxing-long-running-work) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Cursor (company) | Wikipedia | AI coding agent and software development environment with multi-step programming capabilities. | [Wikipedia](https://en.wikipedia.org/wiki/Cursor_(company)) |
| Cline (AI coding agent) | GitHub / AI Wiki | Open-source autonomous coding agent (VS Code extension, 5M+ installs). | [GitHub](https://github.com/cline/cline) / [AI Wiki](https://aiwiki.ai/wiki/cline) |
| Securing the future of AI agents | Blog | Google DeepMind's AI Control Roadmap for securing internal systems. | [deepmind.google](https://deepmind.google/blog/securing-the-future-of-ai-agents/) |
| The AI world is getting 'loopy' | TechCrunch | Article on continuous agent swarms working in the background. | [techcrunch.com](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/) |
| Agentic Resource Discovery | Blog | Hugging Face launch of agentic resource discovery. | [huggingface.co](https://huggingface.co/blog/agentic-resource-discovery-launch) |
| Investing in multi-agent AI safety research | Blog | Google DeepMind $10M funding call for multi-agent safety research. | [deepmind.google](https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/) |
