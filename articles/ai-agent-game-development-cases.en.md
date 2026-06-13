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
