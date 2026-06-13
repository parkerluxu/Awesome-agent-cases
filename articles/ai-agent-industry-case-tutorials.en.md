# Building Real Deliverables with AI Agents: Cross-Industry Cases, Tutorials, and GitHub Project Research

Research date: 2026-06-13

This article intentionally does not focus on resources where frameworks or platforms such as Dify, Coze, LangGraph, and CrewAI are the main subject. Instead, it focuses on a more practical question: using coding agents such as Claude Code, OpenAI Codex, Cursor, Replit, and Lovable, or multimodal / creative agents, what real deliverables can already be produced across industries, including e-commerce sites, mini games, apps, electronic system design, graphic design, short videos, and music?

## One-Sentence Conclusion

The most important question right now is not "whether there is an agent," but whether an agent can already close the loop on a specific kind of deliverable. Based on this research, maturity is roughly as follows:

1. Small web apps, apps, and tools: most mature. Claude Code, Codex, Replit, Lovable, and Cursor-style tools can already build runnable prototypes.
2. Mini games: highly suitable for testing agent capability, because rules, interaction, UI, sound effects, and mobile adaptation can all be evaluated.
3. Short-video content production: many open-source projects exist. MoneyPrinterTurbo, ShortGPT, and NarratoAI have formed pipelines for scripts, assets, voiceover, subtitles, and editing.
4. Electronic systems, EDA, and PCB: accelerating from research to commercialization. There are already cases of AI designing Linux single-board computers, RISC-V CPUs, and RTL-to-GDSII automation, but the production threshold remains high.
5. Graphic design and brand assets: more dependent on combinations of Claude Artifacts, Claude Design, Figma MCP, Canva, Adobe, and similar tools. Publicly replicable projects are fewer, but the workflows are clearer.
6. Music and MV: projects such as MusicAgent and AutoMV show that "music understanding + lyric/structure analysis + storyboarding + video generation" is becoming a multi-agent workflow.

## 1. E-commerce Websites and Commercial Web Applications

### Case A: Non-programmers Using Vibe Coding for Personal Software and E-commerce Prototypes

New York Times reporter Kevin Roose experimented with building multiple small apps using AI coding tools in 2025 and described them as "software for one." Public materials note that one e-commerce website experiment even ran into the issue of AI automatically fabricating product reviews. This is a typical e-commerce agent case: agents can quickly complete product pages, shopping carts, review sections, and visual layouts, but data authenticity, payment security, inventory logic, and privacy compliance still require human checks.

Replicable approach:

- Use Claude Code or Codex to create a Next.js / React project.
- Ask the agent to first generate product data structures, product listing pages, detail pages, carts, and order confirmation pages.
- In the second round, add a real database, Stripe / PayPal sandbox, inventory fields, and an admin console.
- Finally, manually review all content that could mislead consumers, such as user reviews, sales volume, discounts, and certification marks.

Suitable industries:

- Independent-site prototypes
- Cross-border e-commerce landing pages
- Small merchant catalogs
- A/B testing pages
- Internal procurement mall demos

Source:

- The vibe coding entry summarizes related experiments, risks, and the "fake reviews for an e-commerce site" case: https://en.wikipedia.org/wiki/Vibe_coding

### Case B: Claude Code vs OpenAI Codex Building Three Real Utility Apps

Tom's Guide ran a 2026 hands-on test asking Claude Code and OpenAI Codex to build a subscription tracker, a grocery price comparison tool, and a loan-versus-cash purchase calculator. The conclusion was that Claude Code was better at quickly producing polished, ready-to-use small apps, while Codex leaned stronger on advanced logic, data management, and analytical depth, especially in price comparison and financial-calculation tasks.

Replicable approach:

- Break the task prompt into five parts: target user, input data, core calculation, pages, and acceptance criteria.
- First ask the agent to generate a locally runnable version only.
- In the second round, add real data import, charts, CSV export, and persistent storage.
- In the third round, ask another agent to review code and fill in tests.

Suitable industries:

- Finance calculators
- Quotation and price-comparison tools
- Small SaaS components
- Operations dashboards
- Customer success and sales assistant tools

Source:

- Tom's Guide test summary: https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict

## 2. Mini Games and Interactive Experiences

### Case A: Four Coding Agents Generate Minesweeper Games

Ars Technica / Tom's Hardware reported a useful benchmark-style test: OpenAI Codex, Claude Code, Mistral Vibe, and Gemini CLI were asked to build a web version of Minesweeper with playability, sound effects, touch support, and creative variations. Codex scored highest, producing relatively complete gameplay, responsive design, a creative Lucky Sweep mechanic, and key chording operations. Claude Code produced polished visuals quickly, but missed some core Minesweeper mechanics.

Why this case matters:

- Games test logic, state management, UI, audio, mobile behavior, and edge cases at the same time.
- "Looks like a game" and "has complete playable rules" are very different bars, which makes games useful for evaluating agent capability.
- The same requirement can be implemented by multiple agents in parallel, then selected and merged by humans.

Replicable approach:

- Clearly specify rules, win/loss conditions, interaction methods, mobile adaptation, sound effects, keyboard/touch controls, and edge cases.
- Ask the agent to write tests or at least list acceptance cases.
- Run the game, then feed screenshots or errors back to the agent for iteration.
- Finally ask an agent to perform a "rules-completeness review," checking details such as chording, first-click safety, timers, and flag counts.

Suitable industries:

- Educational mini games
- Brand interactive marketing
- Exhibition interactives
- Mini-program gameplay prototypes
- Game-design validation

Source:

- Tom's Hardware coverage of the Ars Technica test: https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst

### Case B: Personal Software and "Apps Built Just for Yourself"

A 2026 article from The Verge discussed the "personal software" trend driven by tools such as Claude Code, Codex, and GitHub Copilot. Users no longer only wait for generic products; they can ask agents to build highly personalized small tools. The author also notes that current coding agents often fail aesthetically in UI, producing clichéd gradients, odd icons, and immature design choices.

Replicable directions:

- Private diary or planner
- Household budgeting tool
- Custom reading / show tracking / fitness logs
- One-person admin panel for a specific workflow
- Gamified habit-building app

Key reminders:

- Agents are often good at making functionality work, but that does not mean the result has product taste.
- UI prompts should provide references, design systems, color constraints, motion boundaries, and mobile screenshot acceptance criteria whenever possible.

Source:

- The Verge, "You can make an app for that": https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution

## 3. Apps, Social Products, and Content Recommendation

### Case A: Bluesky's Attie, Customizing Social Feeds with Natural Language

Bluesky's Attie is a representative case of AI agents empowering social products. Instead of asking users to write algorithms by hand, it lets users describe the feed they want in natural language, such as a topic, style, circle, or filtering rule, and AI helps generate a personalized feed. Reports also mention that Attie's direction may go beyond feed customization toward letting users vibe-code their own apps.

Lessons:

- Agents can generate not only code, but also algorithmic configuration.
- For platforms with open protocols or APIs, agents can bring non-technical users into the product-extension ecosystem.
- For community products, AI must handle user trust carefully, especially in recommendation, filtering, and content moderation.

Suitable industries:

- Social media
- Knowledge communities
- Internal information flows
- Academic / industry news aggregation
- Personalized recommendation on content platforms

Sources:

- The Verge coverage of Attie: https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds
- TechCrunch, PCWorld, and other reports also covered this direction. Bluesky and AT Protocol's open feed mechanism is the foundation.

### Case B: Claude Cowork Was Largely Built with Claude Code

Axios and Business Insider reported that Anthropic's Claude Cowork tool was largely built with Claude Code participating in development. Engineers mainly described requirements, guided architecture, and corrected output through feedback. Although this is not an open-source tutorial, it illustrates an important shift: agents are not only building tools for business teams; they are also starting to help build the next generation of agent products themselves.

Lessons:

- Product managers and engineers can advance features through requirement descriptions, interactive feedback, and code review.
- For complex products, agents are suitable for feature implementation, bug fixes, research, and small refactors.
- Humans still need to control architectural boundaries, permissions, security, and release flows.

Sources:

- Axios: https://www.axios.com/2026/01/13/anthropic-claude-code-cowork-vibe-coding
- Business Insider: https://www.businessinsider.com/anthropic-claude-cowork-release-ai-vibecoded-2026-1

## 4. Electronic System Design, PCB, EDA, and Chips

### Case A: Quilter Used AI to Design a Linux Single-Board Computer That Booted on First Power-Up

Tom's Hardware reported Quilter's Project Speedrun: AI assisted the design of a Linux single-board computer containing 843 components and dual PCBs, completing it in one week with 38.5 hours of human involvement, and successfully booting Debian on first power-up. The report compares this with a traditional manual workflow that could require about 430 hours.

Why it matters:

- This moves from "drawing PCBs faster" toward "closed-loop complex electronic system design."
- AI reduces a large amount of repetitive work in setup, execution, and cleanup.
- Unlike pure software, hardware design has physical constraints, supply-chain issues, manufacturing, and debugging risks, so human experts remain critical.

Replicable approach:

- Start with simple power boards, sensor boards, or development-board expansion modules instead of jumping directly to high-complexity SBCs.
- Use code-based circuit tools or EDA scripts so agents generate structured, reviewable designs.
- Put DRC/ERC, BOM checks, footprint checks, simulation, and human review at every gate.

Source:

- Tom's Hardware Project Speedrun coverage: https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work

### Case B: Diode Computers Uses LLMs and Reinforcement Learning to Automate PCB Design

Business Insider reported that Diode Computers raised funding led by a16z. The company uses LLMs from OpenAI and Anthropic plus reinforcement learning to detect and correct design errors, turning traditional visual PCB design into a more code-like workflow. Its goal is to compress PCB design cycles from weeks or months to days. The report mentions customers in robotics, maritime technology, and related fields.

Suitable industries:

- Robotics
- Medical devices
- Aerospace
- Defense manufacturing
- Maker hardware and small-batch boards

Source:

- Business Insider: https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7

### Case C: tscircuit, Writing Circuits and PCBs in TypeScript

tscircuit is an open-source, code-based electronics design platform that uses TypeScript to define circuits and generate schematics, PCB layouts, 3D previews, Gerber files, and other manufacturing outputs. It is not itself an AI agent, but it is a strong programmable hardware design substrate for agents such as Claude Code and Codex. Agents are better at writing and modifying code, so code-based PCB design is more agent-friendly than pure GUI PCB workflows.

Replicable approach:

- Ask an agent to generate tscircuit component code.
- Iterate layouts through automatic checks and previews.
- Package common modules such as power, USB, sensors, and drivers into reusable components.

Sources:

- tscircuit overview: https://en.wikipedia.org/wiki/Tscircuit
- GitHub: https://github.com/tscircuit/tscircuit

### Case D: AutoEDA / ChatEDA / VeriOpt Bring Agents into Chip Design Flows

EDA research has already applied LLM agents to RTL-to-GDSII, TCL script generation, Verilog generation, and PPA optimization.

Representative projects:

- AutoEDA: uses MCP and microservice-style LLM agents to automate EDA flows. Its open-source direction points to MCP-EDA-Server.
- ChatEDA: uses LLMs as autonomous agents responsible for task decomposition, script generation, and EDA tool execution.
- VeriOpt: uses multi-role LLM workflows such as Planner, Programmer, Reviewer, and Evaluator to generate PPA-aware Verilog.

Suitable industries:

- Chip design automation
- FPGA / RTL teaching
- EDA tool script generation
- Design-space exploration
- Early verification and engineering assistance

Sources:

- AutoEDA paper: https://arxiv.org/abs/2508.01012
- ChatEDA paper: https://arxiv.org/abs/2308.10204
- VeriOpt paper: https://arxiv.org/abs/2507.14776

### Case E: Verkor.io's Design Conductor Generates a RISC-V CPU

Tom's Hardware reported that Verkor.io's Design Conductor generated a RISC-V CPU core from a 219-word specification and completed the flow from spec to GDSII in about 12 hours. The report also notes that this was still a relatively simple CPU without cache or out-of-order execution, and that it was mainly validated in simulation and academic processes. It does not mean full chip teams can already be replaced.

Lessons:

- Hardware agents cannot be evaluated only by functional correctness; timing, power, area, manufacturability, and verification coverage also matter.
- "Generate design from specification" is an important direction, but production-grade chips still require rigorous verification and expert review.

Source:

- Tom's Hardware: https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours

## 5. Graphic Design, Brand Assets, and Visual Prototypes

### Case A: Claude Artifacts / Claude Design-Style Natural Language Visual Creation

Claude Artifacts lets users generate and interact with code snippets, web pages, documents, and visualizations. After 2026, public materials also surfaced around Claude Design: generating designs, prototypes, slides, and marketing assets through natural language, while using brand systems, codebases, or design files as context, then handing results to Claude Code for implementation.

Replicable workflow:

- Use Claude or ChatGPT to generate a brand brief: audience, tone, competitors, colors, typography, and layout rules.
- Use image models or design tools to generate primary visuals, logo drafts, posters, and covers.
- Use Claude Code or Codex to convert the design into HTML/CSS/React pages or editable templates.
- Use Playwright screenshots to repeatedly fix mobile layout, text overflow, hierarchy, and color contrast.

Suitable industries:

- E-commerce detail pages
- Xiaohongshu or WeChat public account covers
- Event posters
- SaaS landing pages
- Brand proposal decks

Reminders:

- Coding agents' default design taste is often template-like, especially overusing purple-blue gradients, oversized rounded cards, and generic tech aesthetics.
- Graphic design tasks need reference images, brand constraints, layout sizes, export formats, and human review.

Sources:

- Claude Artifacts background: https://en.wikipedia.org/wiki/Claude_%28language_model%29
- The Verge discussion of coding agent design weaknesses: https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution

### Case B: Figma MCP / Design-to-Code Workflows

Although this research does not deeply cover Figma MCP as a standalone project, it represents an important direction: exposing design tools to agents so they can read design drafts, generate components, synchronize design tokens, and fill in interaction states. For "graphic design to website / app" scenarios, the best practice is not to let the agent imagine from nothing, but to let it work around existing design assets.

Replicable topics:

- Poster-to-landing-page conversion
- Figma component library to React / Tailwind
- Brand guidelines to design tokens
- Batch generation of multi-size advertising images
- Automatic marketing layouts from product screenshots

## 6. Short Drama, Short Video, Video Commentary, and Marketing Video

### Case A: MoneyPrinterTurbo, One-Click HD Short-Video Generation

MoneyPrinterTurbo is a popular open-source project in the Chinese community, with about 86.8k stars at research time. Its README is clear: by providing a video topic or keywords, it can automatically generate copy, assets, subtitles, background music, and synthesize HD short videos. It supports Web/API, batch generation, subtitle styles, horizontal/vertical formats, multiple model integrations, and asset sources such as Pexels, Pixabay, and Coverr.

Suitable industries:

- Short-video matrix accounts
- E-commerce product recommendation videos
- Knowledge popularization accounts
- Marketing clips
- Batch localized videos

Replicable approach:

- Input product, knowledge point, or story topic.
- Have the agent generate scripts and shot plans.
- Automatically pull assets, voiceover, subtitles, and BGM.
- Manually review copyright, factual accuracy, platform compliance, and brand tone.

Source:

- GitHub: https://github.com/harry0703/MoneyPrinterTurbo

### Case B: ShortGPT, Automation Framework for YouTube Shorts / TikTok

ShortGPT is an open-source project for creative automation on YouTube Shorts and TikTok, with about 7.4k stars at research time. It decomposes video creation into scripts, asset collection, voiceover, subtitles, editing language, and persistent variables. It is useful for studying "LLM + asset APIs + TTS + MoviePy / editing" pipelines.

Suitable industries:

- Overseas short-video channels
- TikTok creative testing
- Automated content-farm research
- Educational short content
- Video-editing agent learning

Source:

- GitHub: https://github.com/RayVentura/ShortGPT

### Case C: NarratoAI, One-Click Video Commentary and Editing

NarratoAI is a Chinese open-source project with about 9.8k stars at research time. It is positioned as "using large AI models to explain and edit videos with one click." It is refactored from projects such as MoneyPrinter and adds film/TV commentary capabilities, making it useful for learning automated workflows from long-video source material to commentary short videos.

Suitable industries:

- Film and TV commentary
- Course slicing
- Long-video secondary creation
- Local material auto-editing
- Enterprise training video re-editing

Source:

- GitHub: https://github.com/linyqh/NarratoAI

### Case D: Creatify / Higgsfield / LTX Studio and Commercial Video-Agent Workflows

Commercial products are also moving toward end-to-end video agents. Creatify can generate TikTok / Instagram / YouTube video ads from product links or descriptions. Higgsfield emphasizes workflows for marketing and social short videos. LTX Studio focuses more on stories, storyboards, camera control, and video project editing.

They are not necessarily open source, but their workflows are useful to decompose:

- Input product link, script, or character setting.
- Agent extracts selling points and generates scripts and shots.
- Generate or retrieve visual assets.
- Add voiceover, subtitles, lip sync, and BGM.
- Export multiple platform ratios and ad variants.

Sources:

- Creatify overview: https://en.wikipedia.org/wiki/Creatify
- Higgsfield AI overview: https://en.wikipedia.org/wiki/Higgsfield_AI
- LTX Studio overview: https://en.wikipedia.org/wiki/LTX_Studio

## 7. Music, MV, and Audio Content

### Case A: MusicAgent, a Music Understanding and Generation Agent

Microsoft's Muzic repository includes MusicAgent, with about 4.9k stars for the repository at research time. MusicAgent is an LLM-powered autonomous agent that aims to unify Hugging Face models, GitHub projects, Web APIs, and other music tools so users do not need to understand every music AI tool to complete music understanding, generation, and conversion tasks.

Suitable industries:

- Music education
- Composition assistance
- Music retrieval and analysis
- Background music generation
- Audio experimentation

Replicable approach:

- Break music tasks into understanding, generation, conversion, evaluation, and export tool nodes.
- Let the agent dynamically choose tools based on user needs.
- Apply human listening review and copyright checks to outputs.

Sources:

- GitHub MusicAgent: https://github.com/microsoft/muzic/tree/main/musicagent
- Paper: https://arxiv.org/abs/2310.11954

### Case B: AutoMV, Multi-Agent Generation of Full Music Videos

AutoMV is a 2025 automatic multi-agent music video generation system. It first extracts structure, vocals, lyric timelines, and other information from songs. Then a screenwriter agent and a director agent design short scripts, characters, and shots. It calls image and video generation models, and finally a verifier agent evaluates the output. This workflow is close to an automated "short-drama / MV director team."

Suitable industries:

- Music videos
- Song promotion clips
- Virtual singer content
- KTV / lyric-video upgrades
- Automated visualization for music platforms

Source:

- AutoMV paper: https://arxiv.org/abs/2512.12196

## 8. Research, Professional Tools, and Large Engineering

### Case A: Claude Code Builds the Ring Language TUI Framework

A 2026 paper documents the process of using Claude Code and Opus 4.5 to build a 7,420-line terminal user interface framework for the Ring language in three days, with about ten hours of active human work and 107 prompts. Humans mainly handled requirements, validation, prompt correction, and light architectural guidance, without hand-writing code. The final system included window management, event-driven architecture, interactive controls, menus, tables, tree components, and multi-window desktop environments.

Why it is worth studying:

- It is one of the few Claude Code cases with quantified prompt statistics.
- It shows that agents can maintain architectural consistency across multiple modules, but a large number of bug-fix prompts remains unavoidable.
- It is especially valuable for new languages or small ecosystems, because agents can quickly fill missing tooling.

Source:

- Paper: https://arxiv.org/abs/2601.17584

### Case B: AI Coding Agents Appear at Scale in Real GitHub PRs

The AIDev dataset collected 932,791 agent-authored pull requests generated by five types of agents including OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code, covering 116,211 repositories and 72,189 developers. This shows that "agents writing code for real projects" is no longer a small demo phenomenon, but is becoming part of open-source collaboration.

Source:

- AIDev paper: https://arxiv.org/abs/2602.09185

## 9. Suggested Schema for Your Own Case Library

If you want to continuously collect cases of "AI agents empowering industries," use structured fields rather than only saving links:

| Field | Description |
|---|---|
| Industry | E-commerce, games, apps, hardware, design, short video, music, education, etc. |
| Deliverable | Website, mini game, PCB, MV, poster, app, script, automation tool |
| Agent type | Claude Code, Codex, Cursor, Replit, open-source multi-agent, video agent, music agent |
| Open source? | GitHub / paper / commercial report / tutorial |
| Replicability | High, medium, low |
| Input | Natural-language requirement, product link, song, video material, specification, Figma file, etc. |
| Output | Code, video, design draft, PCB file, RTL, document, deployment package |
| Human steps | Review, testing, copyright, compliance, security, manufacturing validation |
| Risks | Hallucination, copyright, payment security, privacy, hardware damage, platform bans |
| Next local experiment | Which tool can be used locally to replicate it |

## 10. Twelve Topics Worth Replicating First

1. Use Claude Code / Codex to build a vertical e-commerce demo with product pages, cart, admin console, and Stripe sandbox.
2. Use Codex to build Minesweeper, 2048, or a tower-defense mini game, then ask another agent to write acceptance tests.
3. Use Claude Code to build a personal subscription tracker or household budget app.
4. Use an agent to convert a Figma style guide into a React component library.
5. Use MoneyPrinterTurbo to generate 10 knowledge-popularization short videos in batch.
6. Use NarratoAI to create one film-commentary or course-commentary auto-edit.
7. Use ShortGPT to build a TikTok / YouTube Shorts channel automation PoC.
8. Use MusicAgent for "input melody or topic, output arrangement suggestions and audio processing workflow."
9. Use AutoMV's approach to create storyboard and keyframe scripts for one song.
10. Use tscircuit + Claude Code to build a simple sensor expansion board.
11. Use AutoEDA / ChatEDA ideas to let an agent generate EDA tool scripts.
12. Use an agent to build a Bluesky / Weibo / WeChat public account information-flow filter.

## 11. Risk Checklist

- E-commerce: agents must not automatically generate fake reviews, false sales numbers, or exaggerated claims. Payment and privacy must be manually reviewed.
- Games / apps: AI-generated code that is playable is not necessarily maintainable. Add tests, mobile acceptance, and error-boundary checks.
- Short video: asset copyright, music copyright, factual errors, and platform rules are the core risks.
- Graphic design: brand consistency and aesthetics require human judgment. Agents' default designs can become template-like.
- Music: training data, melody similarity, voice cloning, and publishing rights all need confirmation.
- Hardware / EDA: AI-generated PCB / RTL errors may cause real physical damage, so DRC/ERC, simulation, and expert review are mandatory.
- Coding agents: excessive permissions can lead to accidental deletion, wrong configuration changes, dependency risk, or key leakage. Use sandboxes, Git, least privilege, and stepwise approval.

## Reference Links

- Vibe coding overview and cases: https://en.wikipedia.org/wiki/Vibe_coding
- Claude Code / Claude capability overview: https://en.wikipedia.org/wiki/Claude_%28language_model%29
- OpenAI Codex Agent overview: https://en.wikipedia.org/wiki/Codex_%28AI_agent%29
- The Verge personal software: https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution
- Tom's Guide Claude Code vs Codex app test: https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict
- Tom's Hardware Minesweeper agent test: https://www.tomshardware.com/tech-industry/artificial-intelligence/turns-out-ai-can-actually-build-competent-minesweeper-clones-four-ai-coding-agents-put-to-the-test-reveal-openais-codex-as-the-best-while-googles-gemini-cli-as-the-worst
- Bluesky Attie: https://www.theverge.com/ai-artificial-intelligence/903190/bluesky-attie-ai-custom-feeds
- Claude Cowork built with Claude Code: https://www.axios.com/2026/01/13/anthropic-claude-code-cowork-vibe-coding
- Claude Cowork Business Insider: https://www.businessinsider.com/anthropic-claude-cowork-release-ai-vibecoded-2026-1
- MoneyPrinterTurbo: https://github.com/harry0703/MoneyPrinterTurbo
- ShortGPT: https://github.com/RayVentura/ShortGPT
- NarratoAI: https://github.com/linyqh/NarratoAI
- MusicAgent: https://github.com/microsoft/muzic/tree/main/musicagent
- MusicAgent paper: https://arxiv.org/abs/2310.11954
- AutoMV paper: https://arxiv.org/abs/2512.12196
- Claude Code TUI framework paper: https://arxiv.org/abs/2601.17584
- AIDev dataset: https://arxiv.org/abs/2602.09185
- Quilter Project Speedrun: https://www.tomshardware.com/tech-industry/artificial-intelligence/dual-pcb-linux-computer-with-843-components-designed-by-ai-boots-on-first-attempt-project-speedrun-was-made-in-just-one-week-and-required-less-than-40-hours-of-human-work
- Diode Computers PCB design report: https://www.businessinsider.com/ai-circuit-board-diode-a16z-series-a-y-combinator-2025-7
- tscircuit: https://github.com/tscircuit/tscircuit
- AutoEDA: https://arxiv.org/abs/2508.01012
- ChatEDA: https://arxiv.org/abs/2308.10204
- VeriOpt: https://arxiv.org/abs/2507.14776
- Verkor RISC-V CPU: https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-agent-designs-a-complete-risc-v-cpu-from-a-219-word-spec-in-just-12-hours
