# Web Development: AI Agent Practical Cases, Tutorials, and Research Project Survey

This is an AI Agent resource index for developers, creators, and researchers, collecting tutorials, cases, open-source projects, papers, benchmarks, and product practices in related directions. Its goal is to help readers quickly discover reproducible projects, referenceable workflows, and research materials worth further reading.

> Note: This index leans towards "resource collection" and "topic navigation." Some entries will undergo secondary review, supplementary notes, and quality filtering in the future. Feel free to use it as a starting checklist in a GitHub repository and expand it according to your own direction.

## Large-Scale Resource Index (32+15)

This section is divided into two categories: `32 Tutorials / Cases` and `15 Projects / Papers`. Each resource includes a name, type, brief description, and original link for quick assessment of whether it's worth in-depth reading.

### 32 Tutorials / Cases

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | Anthropic Claude Code docs | Official Documentation | Anthropic's official documentation detailing how Claude Code reads codebases, edits files, executes commands, and delegates subtasks. A core reference for studying code generation Agent workflows and permission management. | https://docs.anthropic.com/en/docs/claude-code/overview |
| 2 | OpenAI Codex docs | Official Documentation | OpenAI's official guide explaining Codex's mechanism for understanding repository structure, modifying code, running tests, and generating reviewable changes. Provides a benchmark for the engineering capabilities of coding agents. | https://platform.openai.com/docs/guides/codex |
| 3 | Cursor docs | Official Documentation | Cursor's official documentation introducing the implementation details of its codebase indexing, automatic editing, and multi-file modification. Key material for understanding how AI IDEs enhance interactive development efficiency. | https://docs.cursor.com/ |
| 4 | GitHub Copilot docs | Official Documentation | GitHub's official documentation covering Copilot's integration in issues, PRs, code completion, and team collaboration. A core reference for understanding the deployment of AI programming assistants in real development workflows. | https://docs.github.com/en/copilot |
| 5 | Replit Agent docs | Official Documentation | Replit's official documentation describing the complete path for the Agent to transform natural language requirements into online running prototypes, covering the end-to-end development process from zero to deployment. | https://docs.replit.com/replitai/agent |
| 6 | Lovable docs | Official Documentation | Lovable's official documentation covering prompt-to-app page generation, backend integration, and visual iteration. A practical guide for researching Agents that rapidly build full-stack applications. | https://docs.lovable.dev/ |
| 7 | Bolt.new docs | Official Documentation | Bolt.new's support documentation explaining how to generate, run, and modify full-stack applications within the browser, showcasing a cloud-based development workflow without environment configuration. | https://support.bolt.new/ |
| 8 | Firebase Studio docs | Official Documentation | Firebase's official documentation explaining how Studio connects to databases, authentication, hosting, and backend services. A technical reference for researching deep integration between AI prototypes and cloud services. | https://firebase.google.com/docs/studio |
| 9 | Trae Figma MCP Tutorial | Chinese Tutorial | InfoQ Chinese tutorial explaining how to pass design context to an Agent via Trae and Figma MCP to generate previewable pages. A practical case for design-to-code conversion. | https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P |
| 10 | Trae Playwright MCP Tutorial | Chinese Tutorial | InfoQ Chinese tutorial introducing Trae combined with Playwright MCP for web page operations and automated acceptance testing. Provides a reproducible solution for quality assurance of Agent outputs. | https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI |
| 11 | Tom Guide Claude Code vs Codex | Media Hands-on Test | Tom's Guide hands-on comparison, evaluating the performance differences between Claude Code and OpenAI Codex in codebase reading, file editing, and task delegation by building three real applications. | https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict |
| 12 | Tom Guide weekend app | Media Tutorial | Tom's Guide shares the complete process of developing an application with AI assistance over a weekend and deploying it to others' phones, covering the full workflow from idea to launch and practical tips. | https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones |
| 13 | The Verge personal software | Media Experience | The Verge explores the revolution in personal software development, showcasing through hands-on experience how non-professional developers can create customized applications to meet personal needs using AI tools. | https://www.theverge.com/tech/928905/vibe-code-personal-software-revolution |
| 14 | Washington Post Claude app | Media Experience | An interactive report by the Washington Post, documenting a journalist's firsthand experience using Claude Code as a programming partner to build an application, revealing collaboration patterns and output effectiveness in AI-assisted development. | https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/ |
| 15 | Vibe coding overview | Encyclopedia/Case Collection | A Wikipedia entry systematically outlining the concept, origins, and practices of Vibe Coding, summarizing community cases. Foundational material for understanding this new programming paradigm reliant on AI-generated code. | https://en.wikipedia.org/wiki/Vibe_coding |
| 16 | Vercel AI SDK examples | Official Examples | Vercel AI SDK's official documentation provides complete examples covering streaming responses, tool calls, and frontend interactions. A technical starting point for quickly building web applications with AI capabilities. | https://sdk.vercel.ai/docs |
| 17 | Supabase AI docs | Official Documentation | Supabase AI documentation focuses on databases, authentication, vector search, and backend integration, providing out-of-the-box backend infrastructure and operational guides for building AI applications. | https://supabase.com/docs/guides/ai |
| 18 | LangChain JS tutorials | Official Tutorials | LangChain.js official tutorials guiding the construction of RAG systems, tool calling chains, and multi-step reasoning Agents. Key material for mastering complex AI workflows in a JavaScript environment. | https://js.langchain.com/docs/tutorials/ |
| 19 | OpenAI Agents SDK Python quickstart | Official Tutorial | OpenAI Agents SDK Python quickstart, guiding installation and basic examples to help quickly build Agent-based AI applications. | https://openai.github.io/openai-agents-python/quickstart/ |
| 20 | OpenAI Realtime API guide | Official Tutorial | OpenAI Realtime API guide, explaining real-time voice and text interaction capabilities, suitable for building low-latency conversational AI applications. | https://platform.openai.com/docs/guides/realtime |
| 21 | Anthropic tool use docs | Official Tutorial | Anthropic tool use documentation, introducing how to integrate Claude's tool calling functionality to enable interaction between the model and external APIs or data. | https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview |
| 22 | Anthropic MCP connector docs | Official Tutorial | Anthropic MCP connector documentation, explaining how to connect external tools and data sources via the Model Context Protocol to extend Agent capabilities. | https://docs.anthropic.com/en/docs/agents-and-tools/mcp-connector |
| 23 | Google ADK quickstart | Official Tutorial | Google ADK quickstart, guiding installation and initial configuration to help quickly get started with the Agent Development Kit. | https://google.github.io/adk-docs/get-started/quickstart/ |
| 24 | Mastra getting started | Official Tutorial | Mastra getting started guide, covering installation and basic usage to help quickly build a scalable AI Agent framework. | https://mastra.ai/docs/getting-started/installation |
| 25 | Agno quickstart | Official Tutorial | Agno quickstart documentation, introducing installation and core concepts to help quickly build and deploy AI agent applications. | https://docs.agno.com/introduction |
| 26 | Convex AI quickstart | Official Tutorial | Convex AI quickstart, explaining how to combine the Convex backend with AI features to build real-time data-driven intelligent applications. | https://docs.convex.dev/ai |
| 27 | Postgres pgvector tutorial | Official Tutorial | pgvector official tutorial, demonstrating how to store and retrieve vector data in PostgreSQL, suitable for RAG and semantic search scenarios. | https://github.com/pgvector/pgvector |
| 28 | Qdrant RAG tutorial | Official Tutorial | Qdrant RAG tutorial, guiding the use of vector databases to build Retrieval-Augmented Generation systems, improving the accuracy of Q&A and knowledge base applications. | https://qdrant.tech/documentation/tutorials/ |
| 29 | Chroma getting started | Official Tutorial | Chroma getting started guide, introducing the installation and basic operations of a lightweight vector database, suitable for quick integration into AI applications. | https://docs.trychroma.com/getting-started |
| 30 | Pinecone RAG guide | Official Tutorial | Pinecone RAG guide, explaining how to leverage a managed vector database for efficient semantic retrieval, optimizing knowledge base Q&A workflows. | https://docs.pinecone.io/guides/get-started/overview |
| 31 | Weaviate quickstart | Official Tutorial | Weaviate quickstart, demonstrating the configuration and querying of a cloud-native vector database, supporting hybrid search and AI workflow integration. | https://weaviate.io/developers/weaviate/quickstart |
| 32 | Streamlit LLM tutorials | Official Tutorial | Streamlit LLM tutorials, providing examples for building large language model interaction interfaces, helping to quickly create data-driven AI demo applications. | https://docs.streamlit.io/develop/tutorials/llms |

### 15 Projects / Papers

| # | Name | Type | Purpose/Summary | Link |
|---:|---|---|---|---|
| 1 | AIDev | Paper/Dataset | The AIDev paper proposes a benchmark for evaluating AI development capabilities, covering problem formulation, dataset construction, and model performance analysis, providing a standardized test for measuring Agent coding ability. | https://arxiv.org/abs/2602.09185 |
| 2 | Agentic Much | Paper | The Agentic Much paper studies the autonomy of AI agents in software development, including experimental design, evaluation metrics, and key findings, revealing the boundaries and potential of autonomous Agent coding. | https://arxiv.org/abs/2601.18341 |
| 3 | Configuring Agentic AI Coding Tools | Paper | The Configuring Agentic AI Coding Tools paper explores the impact of AI coding tool configuration on code generation quality, providing actionable configuration strategies for optimizing Agent coding output. | https://arxiv.org/abs/2602.14690 |
| 4 | Fingerprinting AI Coding Agents | Paper | The Fingerprinting AI Coding Agents paper proposes methods for identifying different AI coding agents through behavioral characteristics and provenance techniques, providing technical support for Agent auditing and security. | https://arxiv.org/abs/2601.17406 |
| 5 | Dive into Claude Code | Paper | The Dive into Claude Code paper provides an in-depth analysis of Claude's coding agent performance in codebase operations and task delegation, offering empirical evidence for designing Agent collaborative workflows. | https://arxiv.org/abs/2604.14228 |
| 6 | From Prompt to Product | Paper/Benchmark | The From Prompt to Product paper and benchmark study the generation process from prompt to complete product, providing an evaluation framework and experimental results to measure Agent end-to-end development capability. | https://arxiv.org/abs/2512.18080 |
| 7 | WebApp1K | Paper/Benchmark | The WebApp1K paper and benchmark provide one thousand web application generation tasks, including dataset construction and model generation evaluation, serving as a standardized resource for testing Agent frontend generation capabilities. | https://arxiv.org/abs/2408.00019 |
| 8 | Student-AI Vibe Coding | Paper | The Student-AI Vibe Coding paper studies the patterns of student-AI collaborative programming, analyzing the impact of human-machine collaboration on learning outcomes, providing a reference for designing Agent educational scenarios. | https://arxiv.org/abs/2507.22614 |
| 9 | gpt-engineer | Open Source Project | An open-source project that automatically generates code from natural language descriptions. The core workflow involves user input requirements, and the AI autonomously completes code writing, iteration, and file generation. Suitable for researching end-to-end Agent implementation paths from requirements to code. | https://github.com/AntonOsika/gpt-engineer |
| 10 | OpenHands | Open Source Project | An open-source platform enabling AI to autonomously write and debug code. It simulates the interaction of a human developer with a code repository, capable of handling complex software engineering tasks. A typical case for studying code generation Agent performance in real project environments. | https://github.com/All-Hands-AI/OpenHands |
| 11 | SWE-agent | Open Source Project | Focuses on enabling AI to autonomously solve software engineering problems on GitHub. It interacts with code repositories via an Agent-Computer Interface, performing tasks like bug fixing and feature addition. Its tool calling and task decomposition strategies are reproducible. | https://github.com/SWE-agent/SWE-agent |
| 12 | browser-use | Open Source Project | An open-source tool enabling AI to directly control a browser. It simulates user clicks, inputs, and navigation to achieve automated web interaction and data collection. A practical reference for studying Agent task execution in real web environments. | https://github.com/browser-use/browser-use |
| 13 | bolt.diy | Open Source Project | A full-stack application generation tool within the browser launched by StackBlitz. It allows users to directly generate, run, and modify code through natural language descriptions, offering a zero-configuration experience from requirements to a runnable application. | https://github.com/stackblitz-labs/bolt.diy |
| 14 | v0 | Product Case | An AI-driven UI generation tool launched by Vercel. It quickly creates React components and page prototypes from natural language descriptions. A typical product case for researching AI-assisted frontend development workflows. | https://v0.dev/ |
| 15 | Open Lovable | Open Source Project | A prompt-to-app tool that generates web pages and backends from natural language descriptions. Based on Firecrawl page scraping and LLM code generation, suitable for rapid prototype validation and MVP development. | https://github.com/firecrawl/open-lovable |

## Resource Update (2026-06-13)

### Projects

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| cbt4free/claude-agent-sdk-laravel | GitHub | Enable Laravel apps to build AI agents using Claude Code for file handling, command execution, code editing, and web search integration. | [GitHub](https://github.com/cbt4free/claude-agent-sdk-laravel) |
| Chillin-spree/claude-code-system-template | GitHub | A lean, skills-first Claude Code template for building web apps — vanilla by default, stack-swappable, with workflow skills, agents, and a commit/push safety gate. | [GitHub](https://github.com/Chillin-spree/claude-code-system-template) |
| cicy-ai/cicy-code | GitHub | CiCy — the AI-agent workspace: run, orchestrate & chat with coding agents (Claude / Codex / OpenCode / …) in tmux, manage teams, drive browser & desktop. Go server + React workspace; ships native, web/PWA & Telegram Mini App clients. | [GitHub](https://github.com/cicy-ai/cicy-code) |
| jcuervo/rails-skills | GitHub | A suite of Claude Code Agent Skills for building, testing, hardening, and shipping Ruby on Rails applications — whether a JSON API backend or a full-stack Hotwire web app — on the latest Ruby 4.0.x and Rails 8.1.x. | [GitHub](https://github.com/jcuervo/rails-skills) |
| yufangjie1643/aigc-commerce-video-generator | GitHub | Local-first, open-source Claude Design alternative with 259+ skills, 142+ design systems, sandboxed preview, and HTML/PDF/PPTX/MP4 export. Supports Claude Code / OpenClaw / Codex / Cursor / OpenCode / Qwen / Copilot / Hermes / Kimi & 17+ CLIs. | [GitHub](https://github.com/yufangjie1643/aigc-commerce-video-generator) |
| AnujTechBoy/AIForge | GitHub | Build and manage AI-native web and mobile apps with a monorepo that supports over 90% code sharing for faster development. | [GitHub](https://github.com/AnujTechBoy/AIForge) |
| Ajiess/AI-Code-Reviewer | GitHub | AI Code Reviewer — a web app that instantly analyzes and improves code quality with real-time feedback. | [GitHub](https://github.com/Ajiess/AI-Code-Reviewer) |
| hegemonart/get-design-done | GitHub | Design-quality pipeline for AI coding agents: brief, map, plan, implement, and verify UI against your design system. | [GitHub](https://github.com/hegemonart/get-design-done) |
| LeeKangRyong/ai-native-frontend-prac | GitHub | 4 FE Services in 1 repo developing with Claude Code (+Figma MCP). | [GitHub](https://github.com/LeeKangRyong/ai-native-frontend-prac) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| From Runnable to Shippable: Multi-Agent Test-Driven Development for Generating Full-Stack Web Applications from Requirements | arXiv | Proposes multi-agent test-driven development to address the >70% failure rate of generated web apps against functional requirements. | [arXiv](https://arxiv.org/abs/2605.17242v1) |
| VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents | arXiv | A benchmark for evaluating end-to-end web-app generation from underspecified inputs, varying visual/structural fidelity and stack constraints. | [arXiv](https://arxiv.org/abs/2605.26144v2) |
| Asuka-Bench: Benchmarking Code Agents on Underspecified User Intent and Multi-Round Refinement | arXiv | A benchmark pairing underspecified user intent with multi-round refinement, grounded in browser-rendered behavior. | [arXiv](https://arxiv.org/abs/2606.05920v1) |
| Domain-Conditioned Safety in Frontier Computer-Using Agents | arXiv | A 793-episode browser benchmark and reproducibility audit of recent red-teaming on prompt-injection attack success rates. | [arXiv](https://arxiv.org/abs/2606.05233v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| Modern Web Guidance: Teaching AI Agents to Stop Coding Like It's 2019 | DEV Community | Guidance on teaching AI agents to use modern web development practices. | [DEV Community](https://news.google.com/rss/articles/CBMiogFBVV95cUxPT0ZqMXQ1XzFHY0lkNnk3UEJvNDdaOERFOUZTYjFzTU9VSkRhMi1QUG1ybExWajZNM0VNMHU3a1JFOXUyYzY4RlJUZVVyNGpNNWRscUxFN1BrQlcxV3ctMC1nLXhMdDFBY1VmZmpVdmlRTU54a3V3M2NCUHg3M3piODRjUTcwMHlWa0hmN05SeDJmMGlNOVNIUDNnbzFJaklNYnc?oc=5) |
| I vibe coded 3 real apps using Claude Code and OpenAI Codex. Here is the winner | Tom's Guide | Hands-on comparison of vibe coding with Claude Code and OpenAI Codex on three real applications. | [Tom's Guide](https://news.google.com/rss/articles/CBMiuwFBVV95cUxONmVSX0tDS0xLVWxzVDl5dExrc1htRXZwV0d4bndWNjNja3I4Ymh6anRmWExySEJfVG9waE9VOXI4SGJIcHBQSXBDM3FnY3lRZTJURUdFY0NnRk1ra2h0RjZ4cHFnYjludnQ0aEpQbzRoRXc3MkFlY1I2LTRKd0FueDJ0N0dVTGVYUW1CaTFLTWtlRTZCN1JqbjdfUERubU9KM1dIZ2VMRkZZVmFMa2sxbHktRjVORTh0WjRR?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|---|---|---|---|
| Playwright | Tool | Fast and reliable end-to-end testing for modern web apps; one API to drive Chromium, Firefox, and WebKit for testing, scripting, and AI agent workflows. | [Playwright](https://playwright.dev/) |
| Roo Code | Tool | Gives you a whole dev team of AI agents in your code editor. | [GitHub](https://news.google.com/rss/articles/CBMiT0FVX3lxTE84eUNNd1F3TkZNc1FmZUlNWnhBbXA4SXdqS3Z1SnhmNk1SYWI3ZTd1ZlhOVFlFZ1hFdU1hbVVXc3BvdWlrX3NMbFdmdVJ3OUU?oc=5) |
| Hermes Agent Desktop App | Tool | Nous Research’s self-improving AI agent desktop application. | [Medium](https://news.google.com/rss/articles/CBMi1gFBVV95cUxPcTVPeXJ6NktnM015eHJTVzJUdVNCdFpIWHc1Y2dlLVBEc1d0cDRIckNNOW1jRElmTnMxWlhRQ1RxYmd0OU1sUWlDLWoxWUVaWHRCN1BpUmZKb3FiQkttSDRLQlFlZXJEZlRXNDY0dmJUaUhYN2owQW8zbFdiVmI1ckpuQkxGR1JJVmNjRGp0dU9qUks3WWp1NFoxc3V6RHZRdWhyTU9VUWpqZkF1QVVQNkpCNV95TUFSVnhocDh4Wi1pMEJOX1hfa3lMT3FQWEE1bVBUSzJR?oc=5) |

## Resource Update (2026-06-14)

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AI Coding Agents Can Reproduce Social Science Findings | Paper | Introduces SocSci-Repro-Bench, a benchmark of 221 tasks across four social science disciplines for evaluating AI coding agents on reproduction of published findings. | [arXiv](https://arxiv.org/abs/2606.11447v1) |
| Agentic Agile-V: From Vibe Coding to Verified Engineering | Paper | Examines agentic AI coding systems in software and hardware development, reporting productivity gains in some enterprise tasks and slowdowns in mature open-source work. | [arXiv](https://arxiv.org/abs/2605.20456v1) |
| AgentBeats: Agentifying Agent Assessment | Paper | Proposes Agentified Agent Assessment (AAA) using judge agents and standardized protocols for open, reproducible evaluation of agent systems. | [arXiv](https://arxiv.org/abs/2606.13608v1) |
| Frontier Coding Agents Use Metaprogramming to Adapt to Unfamiliar Programming Languages | Paper | Evaluates six coding agents on four esoteric languages, exposing capability differences hidden by mainstream-language benchmarks. | [arXiv](https://arxiv.org/abs/2606.10933v1) |
| Mining Architectural Quality Under Agentic AI Adoption | Paper | Causal study of 151 Java repositories examining how agentic AI adoption ("vibe coding") affects software architecture quality. | [arXiv](https://arxiv.org/abs/2606.13298v1) |
| Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses | Paper | Multilingual SWE-bench-style benchmark and adapter protocol for comparing heterogeneous agent harnesses under fair settings. | [arXiv](https://arxiv.org/abs/2606.12344v1) |
| MoCA-Agent: A Market-of-Claims Code Agent | Paper | Claim-level verification agent for financial and numerical reasoning, replacing free-form multi-agent debate. | [arXiv](https://arxiv.org/abs/2606.11537v1) |
| CORE-Bench: A Comprehensive Benchmark for Code Retrieval | Paper | Benchmark for requirement-driven repository search in agentic coding, going beyond snippet-level matching. | [arXiv](https://arxiv.org/abs/2606.11864v1) |
| From Prompting to Verification: How Experience Shapes Vibe Coding Practices | Paper | Survey of 162 participants examining how vibe coding practices differ across experience levels. | [arXiv](https://arxiv.org/abs/2605.24521v1) |
| DeepResearch Bench | Benchmark | Comprehensive benchmark for deep research agents. | [Hugging Face](https://news.google.com/rss/articles/CBMieEFVX3lxTE1SWUVfWm1NQjlYak5mQnZlTzM3VkhmUE9mQjFnbS1KWV9PNXRWYkxQYTcycEZ6eThmSmRBVFVqSV8zNUxJRUFmb2dkaEd3Uy1EaVJXLWRuNkpmUWw3Y2hpVUhWYzRjSDBEWjYxSG9FdWl6RFBjNEYxYQ) |

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| hoangsonww/Claude-Code-Agent-Monitor | GitHub | Real-time monitoring dashboard for Claude Code with SQLite3, Node.js, Express, React, WebSockets; tracks sessions, agent activity, tool usage, and subagent orchestration. | [GitHub](https://github.com/hoangsonww/Claude-Code-Agent-Monitor) |
| 0xb007ab1e/claude-analyzer | GitHub | Local zero-dependency web app to browse, read, and edit Claude Code .claude directory files with live watch and relationship graph. | [GitHub](https://github.com/0xb007ab1e/claude-analyzer) |
| CoWork-OS/CoWork-OS | GitHub | Local-first personal agentic OS and everything app for coding, knowledge work, web design, automations, and artifacts. | [GitHub](https://github.com/CoWork-OS/CoWork-OS) |
| nexu-io/open-design | GitHub | Local-first, open-source Claude Design alternative with 259+ skills, 142+ design systems, and sandboxed preview. | [GitHub](https://news.google.com/rss/articles/CBMiT0FVX3lxTFBCam5FQ1ZTS2l4amc3MjFXelNhM0NBZ0k1aldCZkdGaUtxb1RmUnBHUkh3RTJKM0w5WkhzODFuVFJVeEUxX0w0NkRSOTE3TkU) |
| magicpro97/vibeflow | GitHub | Local-first CLI that orchestrates Claude Code, Codex, and GitHub Copilot CLI with guardrails. | [GitHub](https://github.com/magicpro97/vibeflow) |
| kymostudio/kymostudio | GitHub | Generate animated SVG diagrams from text or coding agents over MCP; diagram-as-code with multiple export formats. | [GitHub](https://github.com/kymostudio/kymostudio) |
| whiskfernlowdensitylipoprotein154/figma-console-mcp-skills | GitHub | Automate design systems and Figma workflows with reusable MCP skills and predefined scripts for AI agents. | [GitHub](https://github.com/whiskfernlowdensitylipoprotein154/figma-console-mcp-skills) |
| sandorarthropodous723/groovy-web-ai-agents | GitHub | Build reusable AI agent configs and prompts for web apps with multi-agent orchestration and TypeScript support. | [GitHub](https://github.com/sandorarthropodous723/groovy-web-ai-agents) |
| Respectful-judasiscariot925/autocli-skill | GitHub | Unlock AI agents with web access to 55+ platforms via natural language, Chrome login reuse, and Rust CLI. | [GitHub](https://github.com/Respectful-judasiscariot925/autocli-skill) |
| agerelated-clioquinol357/ACI | GitHub | Open protocol for structured, agent-ready app access enabling AI agents to interact with web and desktop software. | [GitHub](https://github.com/agerelated-clioquinol357/ACI) |
| kographh/skillforge | GitHub | Generate production-ready AI agent skills through a verified 7-step process with automated auditing and packaging. | [GitHub](https://github.com/kographh/skillforge) |
| Signpainterreverberation581/ux-collab | GitHub | Build AI-driven UI collaboration with agent-browser, Figma MCP, and Lucid to turn wireframes into code. | [GitHub](https://github.com/Signpainterreverberation581/ux-collab) |
| boundarytaxidermist380/lanhu-mcp | GitHub | Connect AI coding tools to Lanhu to read designs, extract HTML/CSS, parse PRDs, and download assets via MCP. | [GitHub](https://github.com/boundarytaxidermist380/lanhu-mcp) |
| laiyenju/figma-config-mcp | GitHub | Turn Figma Config conference data into LLM-friendly content for querying in Claude or exporting as Markdown. | [GitHub](https://github.com/laiyenju/figma-config-mcp) |
| Enfluranehighbloodpressure470/v0-platform-mcp | GitHub | Enable rapid multi-screen UI prototyping using Vercel's Model Context Protocol. | [GitHub](https://github.com/Enfluranehighbloodpressure470/v0-platform-mcp) |
| gaidenxx/Figma-Bob-IA | GitHub | POC using Figma MCP plus Bob IA to develop frontend projects. | [GitHub](https://github.com/gaidenxx/Figma-Bob-IA) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| alirezarezvani/claude-skills | GitHub | Collection of 337 Claude Code skills, agent skills, and plugins (30+ agents, 70+ custom commands) for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents. | [GitHub](https://news.google.com/rss/articles/CBMiW0FVX3lxTE55M0pPTGlvV2ZSN293YUZGSHNCOEp0MDdnTGpMN3hRS2txbXk1X3BuVS1PRURINmg4RW4zTm4xOWY0dWNIREhjNkEtZ3hGTHJ3dG9qTjhtTGpBS0U) |
| Mistral Vibe (formerly Le Chat) | Product | Mistral's AI chat and agent for work and code; chat, think, search, write, code, and automate. | [Mistral](https://mistral.ai/products/vibe/) |
| Claude Opus 4.8 | Product | Anthropic's upgraded Opus across coding, agentic tasks, and professional work. | [Anthropic](https://www.anthropic.com/) |
| OpenAI Academy courses | Course | Three new courses for building practical AI skills, creating repeatable workflows, and applying agents in everyday work. | [OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work) |
| Amazon Bedrock AgentCore | Service | AWS service for hosting coding agents. | [AWS](https://news.google.com/rss/articles/CBMiygFBVV95cUxNakdCVnJZY2xKUkxYd2N0dUp1MVhZOG1taklXckFlMjJMdVg4MlVCQk1fWkppRUxEWUtoOVVqX2Nfc011aWk0ak93VDhwcXRsMjlaTzRJMWoyRWloaDg5Q2wxMVJRNzNoSzl6U2lOUHhZa2pJd2FlcHJseEU3TVJiUkVHS19uWW1VZm9UejFGdlAxQmZhUTdjZ01oOVM4cEZBRTdrVG1WY2VDZV91VlBza0QxdlZmb3F2aGRYajg5d3RMNWZ4ekw1OG53) |
| Base MCP | Tool | Agent's gateway to Base blockchain via Model Context Protocol. | [Base.org](https://news.google.com/rss/articles/CBMiREFVX3lxTFAtU09wdVN0NS1tMnV3aGZnZG1obXFhcEk4N05TdVhzQjlPdTRab1lraENCamVqaUtqSThFeUZmYS1obzhT) |
| Microsoft IQ and Rayfin | Product | Microsoft's answer to enterprise AI agent data silos, announced at Build 2026. | [Venturebeat](https://news.google.com/rss/articles/CBMiwwFBVV95cUxOTEdhd0tSZEJscXQyRVh4VTk0U29yVFhlRi1ibGhNaTZ6cmIxYjF5SXgzMjJSaThJSEFTYVBOMkk1SUROblN0NEp1WFFsYmUtdnVWcmJIWmktVmRsZkVHSDVRUkN4MGc1Q2J4d01jWXJMQy01dGVGR0dvNXUtOFpfZWJPVlc2cHJmRm9GMnAwYmFEN09NMThkMWFzaE85YkxJVkxrZWxRZkdyWmgySlZtNnhKZWxkN1R2Q3oyalAyakxsMmc) |
| OpenEnv for Agentic RL | Open-source | Community-backed open environment for agentic reinforcement learning. | [Hugging Face](https://huggingface.co/blog/openenv-agentic-rl) |
| NirDiamant/GenAI_Agents | GitHub | Comprehensive collection of GenAI agent resources and implementations. | [GitHub](https://news.google.com/rss/articles/CBMiVEFVX3lxTE9QZ0cydzNFVTJBZFhuWWg0aWJRaTFTaDdkQk9OcTlnc01OWF9tRnU5SWpmcVJhYVljYUVhRl9RcWlFOHdtRnZjLWR0a0swSTZOU0xmUA) |
| deepseek-ai/awesome-deepseek-agent | GitHub | Curated list of DeepSeek agent resources. | [GitHub](https://news.google.com/rss/articles/CBMiY0FVX3lxTE9OdTdJLUNuSWFRYUprTWFHcnNMV1Q1aS1qTmhGNkRnRkI1d2h3SC0wRjh1WG53MFRhQ0J4WnVBUFJzdWtnOUJwSlMwOTl0MHRLdl9uODV6T0hLNWp3UmlZNGZrRQ) |
| freestylefly/CodexGuide | GitHub | Practical Codex guide for global beginners, creators, developers, and teams. | [GitHub](https://news.google.com/rss/articles/CBMiVEFVX3lxTE5INkxXWGdzMEloY1V5XzdpdXBFNUJjY0k0RU5uTUlsV3I1WmRsYzFGb25EZ0JPU0N4TmtGWDV2NnBmanR2RG4xVzI5QVJhLUNLOGRuUg) |
| Claude SEO Skill | GitHub | SEO analysis skill for Claude Code. | [GitHub](https://news.google.com/rss/articles/CBMiVEFVX3lxTE01R3RwWWpwTWNCN3FkeTFJbXNDeDhhSXJUMldTd0xuM0pGNXNZS21PWVhXaXJCQmRqVS1vVzFPc1RhYk1HZzEtY3dld3ktZmhWYXBscA) |
| claude_codex_bridge | GitHub | Bridge between Claude Code and Codex workflows. | [GitHub](https://news.google.com/rss/articles/CBMiekFVX3lxTFBPdk5pSFlRVE1oZDd1RlFsR2R5WThRSEhGS3BDMElXNk92ZndwOFBteHNoNk41b1lCQzc5aW9yM1ROWjJ3VThOc0w2OHpCaG4xVXQyVTBUTXlBeE0xcjR1TTdrZU85NldVWlpLeFBaU3FWdDhyYlEzd1JR) |
| Superpowers Skill | Guide | Skill for making Claude Code and Codex follow engineering workflows. | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTFBJdDh6MWZ3M3BiVDRqZHo4Mkt4QlExQkNWX0hRTkVMUDFiN1R6WUtWNFpNazZCQ0FabEVUMW5zVUZ1ZWJmcUtkWVo0bWFFZGJOSi15ZTNvVzdNcEpC) |

## Resource Update (2026-06-23)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| CloudBase-MCP | GitHub | Connect CloudBase to your AI Agent; go from AI prompt to live app. 1,036 stars. | [GitHub](https://github.com/TencentCloudBase/CloudBase-MCP) |
| agentic-kanban | GitHub | Self-hosted Task Hub for AI agent workflows with MCP endpoint, role-based access control, and a no-self-certification state machine. Single binary, SQLite-backed, live web UI. | [GitHub](https://github.com/codehand/agentic-kanban) |
| three.ws | GitHub | Open-source 3D AI agent framework — GLB/glTF avatars with LLM brains, memory, emotions, and autonomous payments. MCP server, x402, Solana/EVM, Three.js. Embed anywhere as a web component. 68 stars. | [GitHub](https://github.com/nirholas/three.ws) |
| taOS | GitHub | Self-hosted AI agent OS. Offline AI memory, self-hosted multi-framework group chat, full web desktop + app store, auto-clustering across consumer hardware. 252 stars. | [GitHub](https://github.com/jaylfc/taOS) |
| search_evals | GitHub | Framework to evaluate web search APIs, testing accuracy and relevance across multiple AI agents and benchmarks. | [GitHub](https://github.com/Omg1221/search_evals) |
| agency-orchestrator | GitHub | One sentence → multi-AI-role collaboration → complete plan in minutes. Built on the agency-agents role library (216+ experts), zero-code YAML, web Studio + desktop app, 10 LLM providers. 1,456 stars. | [GitHub](https://github.com/jnMetaCode/agency-orchestrator) |
| june | GitHub | The agent-ready React framework — serves humans (streamed HTML, zero client JS) and agents (markdown, JSON, MCP) from one definition. Web-standards core, deploys to Cloudflare Workers. | [GitHub](https://github.com/junebuild/june) |
| figma-mcp-loop | GitHub | Figma → Claude Code → headless browser → pixel diff. A complete verification loop for AI-generated frontends. | [GitHub](https://github.com/kripy/figma-mcp-loop) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| AgentCyberRange | Paper | Benchmarking frontier AI systems in realistic cyber ranges — codebase inspection, vulnerability detection, and exploitation across multi-host environments. | [arXiv](https://arxiv.org/abs/2606.14295v2) |
| Meta-Agent | Paper | Two-phase framework that automatically constructs and executes specialized multi-agent systems from natural-language task descriptions. | [arXiv](https://arxiv.org/abs/2605.25233v1) |
| FraudSMSWalker | Paper | Controlled benchmark for URL-masked SMS-to-webpage fraud judgment, evaluating agentic LLMs on cross-channel SMS fraud detection. | [arXiv](https://arxiv.org/abs/2606.16659v1) |
| Who Pays the Price? | Paper | Stakeholder-centric prompt injection benchmarking for real-world web agents, moving beyond attack-centric perspectives. | [arXiv](https://arxiv.org/abs/2606.13385v1) |
| Mellum2 Technical Report | Paper | Open-weight 12B MoE language model specialized in software engineering — code generation, debugging, multi-step reasoning, tool use, and agentic coding. | [arXiv](https://arxiv.org/abs/2605.31268v1) |
| Beyond Domains | Paper | Reusing web skills via transferable interaction patterns to reduce LLM completion costs on benchmarks like Mind2Web and WebArena. | [arXiv](https://arxiv.org/abs/2606.17645v1) |
| RunAgent SuperBrowser | Paper | Autonomous web-navigation agent grounded in human browsing behaviour — vision-first bounding-box pipeline, perception-cognition-action triad. | [arXiv](https://arxiv.org/abs/2606.09399v1) |
| Benchmarking Multimodal LLMs on Code Generation for Complex Interactive Webpages | Paper | Benchmark evaluating MLLMs on transforming visual designs into executable code for dynamic, interactive web applications. | [arXiv](https://arxiv.org/abs/2606.00154v1) |
| When Web Agents Finish but Still Fail | Paper | Parallel WebBench benchmark (1,679 records) and trace diagnostics for long-horizon web agents that fail in ways hidden by final-answer evaluation. | [arXiv](https://arxiv.org/abs/2606.20724v1) |
| Self-Distillation Policy Optimization via Visual Feedback | Paper | Visual-feedback self-distillation for code-generated visual artifacts (charts, web pages, slides) to fix overlapping elements, clipped text, broken alignment. | [arXiv](https://arxiv.org/abs/2606.10334v1) |
| AliyunConsoleAgent | Paper | Web agent framework for automated documentation verification in real-world cloud consoles, using distillation and reinforcement learning. | [arXiv](https://arxiv.org/abs/2606.09447v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| The Complete Playwright End-to-End Story, Tools, AI, and Real-World Workflows | Blog | With Playwright MCP, AI agents can explore your app, suggest new test cases, and generate tests from natural language after interacting with the app. | [Microsoft Developer Blog](https://developer.microsoft.com/blog/the-complete-playwright-end-to-end-story-tools-ai-and-real-world-workflows) |
| Beyond chatbots: How AI agents built a full OS, web apps, and more | YouTube | Video demonstration of AI agents building a full OS, web apps, and more. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1wSXlMa0dlX0V6ZGNKSmJjMlRBclhHWThac0txSEpwVFg0ZWpfa0RhNFppU1NRcHJBYzJWcDRDRkR0QVdsSnI2TWNCb284dlZFRXA1QUt3?oc=5) |
| Web MCP: give some tools to your agent | DEV Community | Guide on using Web MCP to provide tools to your AI agent. | [DEV Community](https://news.google.com/rss/articles/CBMiggFBVV95cUxPYlNoSS1JQjhkZDBmTmN0RTduT1AxWFdpY0lXZVdiX2ttVFJfVTc1Z2ZMenAxYnMtcVdlTVhKeW9fLXFROVNRNzRaOTNtUW1ueHNnUGRDTUxfYXkzbjl6QTFITkNXV0ZtVHlKcEFJcnlpLWdhQm8tNjJhS1ZuUHRmeXlR?oc=5) |
| Deep Agents 实战 | GitHub Book | LangChain/LangGraph-based guide to building production-grade AI agents from scratch. | [GitHub](https://github.com/datawhalechina/deepagents-in-action) |
| AI 编程 CLI 中文教程 | GitHub Guide | Chinese tutorial covering Claude Code + Codex with 92 refined articles. | [GitHub](https://github.com/stormzhang/ai-coding-guide) |
| Codex 橙皮书 | GitHub Guide | Full-chain Codex usage guide from installation to practical cases (unofficial open source, includes downloadable PDF). | [GitHub](https://github.com/bozhouDev/codex-orange-book) |
| 深度拆解：Claude Code、Codex、Cursor、OpenCode的Harness设计与实战差异 | Zhihu Column | In-depth analysis of harness design and practical differences among Claude Code, Codex, Cursor, and OpenCode. | [Zhihu](https://news.google.com/rss/articles/CBMiXEFVX3lxTE1GNVhiUnllWlljc2tFTExPalVkWnJSaVIteDNwVkVFU19YZjZLQ3pnWXJ3M3daS29JdVNRY3BYRy1pMjlDamp6N2JzTS10aXFTV3Z6V0c3QzVFeWlE?oc=5) |
| Omnigent 实战 | AI编程社区 | Practical guide to orchestrating Claude Code, Codex, Cursor, and other AI coding agents with the Omnigent framework. | [AI编程社区](https://news.google.com/rss/articles/CBMiZkFVX3lxTFBxTDlyaExGMVB3Rndia3p6dXBzZ1pvTkZnSTNZenJ2ZHFhWWhSNVJXWTMwMDZxLTR6dUprRnZDYnFRTUZDQjFsbVlLdUo3WUVGX0VSczJTQjRzSWNoNlAySWt5NUJRQQ?oc=5) |
| 用Codex+iLink Bot API给Agent接入微信 | Zhihu Column | Guide on connecting agents to WeChat using Codex and the iLink Bot API. | [Zhihu](https://news.google.com/rss/articles/CBMiXEFVX3lxTE9CTnpKQTRBM3NUR1I5OTkzQ0VMeENqcjBnU0d2MmYwWXBwMjBNOTY0dXhPajZ0TVdhV2QxSGtNSHprekEtUERwWXlBN3k5U0lkM21uT2FTUEJHeHVf?oc=5) |
| DeepSeek 桌面智能体应用全解析 | CSDN | Comprehensive guide to deploying open-source AI agent platforms and API calls with DeepSeek desktop agents. | [CSDN](https://news.google.com/rss/articles/CBMiZEFVX3lxTE1yUWJGMHptZHlUZXBYcmZYMHFnYmJHcEVueWR4U3RZdDlabFBBeXhNcEs4SXlxbjU2YWZzRzVad2txczNkazkyejFGRTY3UEF4Z3F3WmZVLTFLY1J6dll2RUhKdms?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| 扣子 3.0 | Platform | Supports Claude Code and Codex CLI local agent access. | [51CTO](https://news.google.com/rss/articles/CBMiU0FVX3lxTFB4NkRBYm1wR3FWcFc5c3prMkQ4WDBLUUtHeDVWWDN2bFJVekxERGNiZi1mZmZlaTU0X2N6czVSVlJqcTExS245ekk0VXZZV2dSeFQ0?oc=5) |

## Resource Update (2026-07-05)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| zhikunqingtao/zhikuncode | Open-source alternative | Claude Code / Cursor 开源替代。Self-hosted, CLI & Web UI, Multi-Agent collaboration, native support for Qwen/DeepSeek. SWE-bench Lite 56%. Docker one-click deploy, MIT license. | [github.com/zhikunqingtao/zhikuncode](https://github.com/zhikunqingtao/zhikuncode) |
| Clouderavine/Bolt-New-Web-Development-Agent-Professional-Complete-Edition | AI dev environment | Bolt.new: AI-assisted web development environment that generates, previews, and iterates full-stack apps from natural language prompts. | [github.com/Clouderavine/Bolt-New-Web-Development-Agent-Professional-Complete-Edition](https://github.com/Clouderavine/Bolt-New-Web-Development-Agent-Professional-Complete-Edition) |
| as9978/designfit | Design validation tool | Validate AI-built front-ends against Figma designs via deterministic token + geometry conformance. MCP server + Claude Code skill. | [github.com/as9978/designfit](https://github.com/as9978/designfit) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| SoK: AI Secure Code Generation: Progress, Pitfalls, and Paths Forward | Survey / SoK | Systematic analysis of prompting, fine-tuning, RL, and agentic workflows for secure code generation — where they improve security and why substantial failures persist. | [arxiv.org/abs/2606.25195v1](https://arxiv.org/abs/2606.25195v1) |
| NatureBench: Can Coding Agents Match the Published SOTA of Nature-Family Papers? | Benchmark | 90 cross-discipline tasks from Nature-family publications; evaluates whether coding agents can move beyond reproduction toward discovery on real scientific problems. Uses NatureGym for standardized per-task containerized environments. | [arxiv.org/abs/2606.24530v1](https://arxiv.org/abs/2606.24530v1) |
| Distributed Attacks in Persistent-State AI Control | Security / AI Control | Introduces Iterative VibeCoding: a setting where misaligned agents distribute attacks across PRs and time payloads for the PR with best natural cover, exploiting persistent codebases. | [arxiv.org/abs/2607.02514v1](https://arxiv.org/abs/2607.02514v1) |
| JAMER: Project-Level Code Framework Dataset and Benchmark on Professional Game Engines | Dataset + Benchmark | JamSet and JamBench: first project-level game code framework dataset and benchmark built on a professional game engine, sourced from Game Jam competitions. | [arxiv.org/abs/2606.19830v2](https://arxiv.org/abs/2606.19830v2) |
| Animation2Code: Evaluating Temporal Visual Reasoning in Video-to-Code Generation | Benchmark | 1,069 web animation videos testing whether VLMs can recover temporal dynamics and reconstruct executable web animation code from videos. | [arxiv.org/abs/2606.28593v1](https://arxiv.org/abs/2606.28593v1) |
| The Verification Horizon: No Silver Bullet for Coding Agent Rewards | Position paper | Argues that for today's coding agents, verification — not generation — has become the harder problem; every verifier is only a proxy for human intent. | [arxiv.org/abs/2606.26300v2](https://arxiv.org/abs/2606.26300v2) |
| ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration | Benchmark | IBM Research benchmark for evaluating AI agents on enterprise Java framework migration tasks. | [huggingface.co/blog/ibm-research/scarfbench](https://huggingface.co/blog/ibm-research/scarfbench) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| SWE-Benchmark 综合指南 | Guide | Comprehensive guide to the SWE-bench ecosystem including SWE-agent, SWE-rex, and SWE-bench CLI for agent development and evaluation. | [zhuanlan.zhihu.com/p/1914663162680181121](https://zhuanlan.zhihu.com/p/1914663162680181121) |
| ReActAgent 使用指南：构建会思考、能行动的 AI Agent | Tutorial | Build production-grade AI agents with Solon AI 4.0's ReActAgent — reasoning, tool use, and feedback-driven behavior adjustment. | [oschina.net/news/471482](https://www.oschina.net/news/471482) |
| Cursor 教程 | Tutorial | Cursor tutorial covering AI-assisted programming features built on VS Code with GPT-4 and Claude 3.5 integration. | [runoob.com/cursor/cursor-tutorial.html](https://www.runoob.com/cursor/cursor-tutorial.html) |
| Vibe Coding 入门教程 | Tutorial | Introduction to Vibe Coding — a paradigm where developers describe intent in natural language and AI writes the code. | [runoob.com/ai-agent/vibe-coding-start.html](https://www.runoob.com/ai-agent/vibe-coding-start.html) |
| Harness Engineering 实践案例：给编码 Agent 写行为规范教程 | Tutorial | Practical guide on writing behavioral specifications for coding agents. | [zhuanlan.zhihu.com](https://news.google.com/rss/articles/CBMiXEFVX3lxTE9XM05rak5jT01RenhIaGdvNkl5cTYtNVhfSnB0UmtnVVBVU2lVcE9CQm9ETzIyenVOSEdZOUxRUWtmYVRvR21KejRwUms1VVdzQ3FJd3VlVmhNa2t4?oc=5) |
| How agents are transforming work | Research summary | OpenAI research paper on how AI agents enable longer, more complex tasks and expand productivity across roles. | [openai.com/index/how-agents-are-transforming-work](https://openai.com/index/how-agents-are-transforming-work) |
| Vercel's Andrew Qu on why agents are a new kind of software | Interview / Podcast | Vercel Chief of Software on the creation of the eve agent framework and why skills, sandboxes, and agent-readable websites matter. | [latent.space/p/vercel-agents-new-software](https://www.latent.space/p/vercel-agents-new-software) |
| The website of the future may assemble itself for every visitor | Article | Adobe experiments with "agentic sites" that generate pages around individual user intent. | [latent.space/p/the-website-of-the-future](https://www.latent.space/p/the-website-of-the-future) |
| How Cursor deploys AI inside the enterprise | Article | Cursor's Forward Deployed Engineers help organizations implement agents as software factories. | [latent.space/p/cursor-forward-deployed-engineers](https://www.latent.space/p/cursor-forward-deployed-engineers) |
| Evaluating performance and efficiency of the GitHub Copilot agentic harness across models and tasks | Evaluation report | GitHub's evaluation of Copilot's agentic harness performance and efficiency across different models and tasks. | [github.blog](https://news.google.com/rss/articles/CBMi3gFBVV95cUxPTFF2R252NjNzX0stNDFHSTA5X2NaVlBmdHl2bjBPMFhjWmNZb0dJZWxXT0V0ZFZwVWVWZWszNkZRN2NaRk9qb2tOSWY3RW0xbndQV1drOXpFRlpWR2xTT3FrRUFjOGlraHhnM1pmdzdaaUlBbmpfN1Y1Q3V4Z1drUWZzUXBVLXBjNVp3dEs3enA2SWF2QWVhWlQ1b3U4QUpIWkFjbUxCYW1WSk1HdFZrNWdKMFpKUjZjenpCZzRrVHBHSVNtNHVjTGdwSGhrRllLYmRER19BbnVBZXIwREE?oc=5) |
| Top AI Coding Agents and Development Platforms in 2026 | Comparison | Comparison of Atoms, Devin, Windsurf, Cursor, Warp, and more. | [marktechpost.com](https://news.google.com/rss/articles/CBMijAFBVV95cUxOUFRXU1lETzA5Mm5DWU1RY2RLS3Y0N1RjZnJ6SjJWYnVPQ2tVekhPa0hma3VHZy15VnBjYUNWSVN5OWVNT0NxRGZlRnM4VFE2NjBBZkFaY05SdUxvaVlDRWFoMjlFXzlfVmtPUzhUN3A3Q29yWTZuU2MwMkh0VlhUTlVFNnFweHJYRmxGdA?oc=5) |
| Claude Code × DeepSeek × 积木报表：AI 报表到底有多智能？ | Case study | Real-world case study on AI-powered reporting with Claude Code, DeepSeek, and JimuReport. | [oschina.net](https://news.google.com/rss/articles/CBMiS0FVX3lxTE9Ud2dFYkljSlJhbmlhQ2poM1hpY1lzdlJGajlqQkdTM2VQTnRPWUJxRGtsZlNGcHBCVGk4RWJwV0JtdjF0ak1PNWZZNA?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| A2UI + MCP Apps | Framework / Platform | Combining declarative and custom agentic UIs with A2UI and MCP. | [blog.google](https://news.google.com/rss/articles/CBMiYkFVX3lxTE5MYThqNlIycmg5NmN4bE5GX0c3RUZidkNVMW5xeUM5cG50M3pvdjh6M1RUVUNmY0RCUkVBYV92SGc0QlNva05pOGNZb3RmMXdaenRNNGQ3ZzY0Qi04QTVpYWxB?oc=5) |
| Agent-EvalKit (AWS) | Evaluation toolkit | Systematic evaluation of AI agents with Amazon's Agent-EvalKit. | [aws.amazon.com](https://news.google.com/rss/articles/CBMioAFBVV95cUxQeldfMDFMWnNrN3oxZFJsMjVWSEtWaGtWdzRDR2pZVGxaWDlsb0otVEtTQ0dzR2R6blZjUENETm9WZGQ1R0xpUU03MGlyS0swTjlIWU5PRV9RcXd4UDlGSnZBVUw4NFR4N2hqNjFOdzVyQVhRaXdZdWVpMXhVU2hsUlAwWU1RZWpyQzgwZ2JjaHc5TGE4RzE2c1Z2RVFWWVRz?oc=5) |
| 阿里 QoderWork | Learning platform | Alibaba's QoderWork — a Codex + Claude Code learning site with tutorials. | [juejin.cn](https://news.google.com/rss/articles/CBMiVEFVX3lxTE5OOUJQR0FrUkpIM01SSVBVNHBjOWwyUGxuUGpka09VWnZmN1FJM2h1Ykg5NmktRDl6YXE0X0lUU0tYNkVmX1VWUTdSSGxTSTBPT185UQ?oc=5) |
| Cursor | AI coding agent | AI code editor with Desktop and CLI interfaces, built on VS Code with advanced LLM integration. | [cursor.com](https://cursor.com/) |
| Microsoft 365 Copilot (Copilot Studio agent builder) | Agent builder | Create your own web-based AI assistant with a lite experience of Copilot Studio. | [microsoft.com](https://news.google.com/rss/articles/CBMibEFVX3lxTE9fTnZDcVExdHd6SGExY203dU55VVVHSDc5VllJN0xNS3hqeHp6UmZXWVVLanZpU2Y5TkhNZTQtc3poWlFPTGNSX3NMSmZJa1dEYm1KSWpMX3JQc3ZmSkZRR2NGcDVXVUJNOHp4Zw?oc=5) |
| ADK Go 2.0 | Agent framework | Google's graph-based workflow engine for multi-agent applications with built-in human-in-the-loop and dynamic orchestration. | [blog.google](https://news.google.com/rss/articles/CBMiZkFVX3lxTE5EeFJFaWhEM3V4UjlyZFo3S0dtRTJSOHA4MUZMX1FmbmppWXdyVjZtQWg1QjBqRUdlRXlUUTAzdFRMcTZWRWxESUpxQUtMeVdhallBSEthWDFZalozdTN6dDhyZHpTUQ?oc=5) |
| AutoJack (Microsoft security research) | Security research | Demonstrates how a single page can achieve RCE on the host running an AI agent. | [microsoft.com](https://news.google.com/rss/articles/CBMipwFBVV95cUxQWkJCU0tFankzSmVreVVycHBQc3UtcUJIWmxnZzVzaVhCeTdCSXdXbFBhN2w3aXJTNzhQZ21SQW9DT1IySkNKSWZxR3lrOFd6dGFIdENSdElGUGl3Q2NEZHdscXpNVDg3eDYwY3Y3Q1pNQmhIRWltRmhUb2x4bVJsSFp5bjRGdmxGOVNuTkk4NWc1S0F1Q1FaV3BMYWI3WGY2MXNQdVJXYw?oc=5) |
| Cursor Design Mode | Feature | Direct agents with visual prompts in Design Mode. | [cursor.com](https://news.google.com/rss/articles/CBMiS0FVX3lxTE1hSTYzV2psYzFmbW9tZTFKelFVQm9LbmpjZjRUT1pfZlBRdUgzUVJFcldyS2ZuUEpxQUJRanUtTkhyb0hZSnNRODRaNA?oc=5) |

## Resource Update (2026-07-12)

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| conduit | GitHub | Self-hosted web app for managing and running AI CLI agents (Claude Code, Amp, Cursor) | [GitHub](https://github.com/dougrathbone/conduit) |
| vybe-intelligence-vault | GitHub | Auto-updating open-source vault for AI agents, RAG systems, MCP servers, prompts, tools, templates, and next-generation web development | [GitHub](https://github.com/sairaman436/vybe-intelligence-vault) |
| claude-code-web-embed-skill | GitHub | Embed a locally running Claude Code into any existing web app — Local Agent (Node/Python) + xterm.js, with session persistence across reloads | [GitHub](https://github.com/santa-monica-johnson/claude-code-web-embed-skill) |
| webdev-skills | GitHub | Collection of web development skills tailored for AI coding agents, enhancing workflows with modern CLI tools and project organization | [GitHub](https://github.com/ZayZay1nonly/webdev-skills) |
| agentforge-web-agent-framework | GitHub | Browser-based AI agent orchestration framework for multi-agent software development workflows (planning, code generation, review, testing, deployment) | [GitHub](https://github.com/westcaleb2005/agentforge-web-agent-framework) |
| nuncio | GitHub | Self-hosted, mobile-first web app for delegating tasks to AI coding agents (Pi, Cursor) — provider-neutral alternative to Devin | [GitHub](https://github.com/oscarlehuu/nuncio) |
| Multi-Agent-AI-Research-Code-Intelligence-Platform | GitHub | Web app where users enter research questions or upload repos; creates agents (Orchestrator → Research → Code → Critic) for summarized reports with citations | [GitHub](https://github.com/Adhithyaa1/Multi-Agent-AI-Research-Code-Intelligence-Platform) |
| autonomous-web3-ai-agent | GitHub | AI-driven multi-agent system for automating smart contract creation and Web3 development | [GitHub](https://github.com/omarmedaoui-pixel/autonomous-web3-ai-agent) |
| figma-to-product | GitHub | Codex skill for turning Figma Desktop MCP exports into polished frontend projects | [GitHub](https://github.com/wdcodecn/figma-to-product) |
| podium-app | GitHub | Infinite spatial canvas for terminal windows running AI coding agents; wire agents together, pipe prompts, capture output to notes (Tauri + React) | [GitHub](https://github.com/abrahao-dev/podium-app) |
| figma-ai-bridge | GitHub | Local Figma Desktop plugin and localhost bridge for AI-ready design handoff bundles, without Figma API, Dev Mode MCP, or access tokens | [GitHub](https://github.com/Kacep91/figma-ai-bridge) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Agent Data Injection Attacks are Realistic Threats to AI Agents | arXiv paper | Introduces a new category of indirect prompt injection — agent data injection — beyond instruction injection attacks | [arXiv](https://arxiv.org/abs/2607.05120v1) |
| NatureBench: Can Coding Agents Match the Published SOTA of Nature-Family Papers? | arXiv paper | Cross-discipline benchmark of 90 tasks from peer-reviewed Nature-family publications; evaluates coding agents on real scientific problems | [arXiv](https://arxiv.org/abs/2606.24530v2) |
| WebRetriever: A Large-Scale Comprehensive Benchmark for Efficient Web Agent Evaluation | arXiv paper | Large-scale benchmark for evaluating web agent navigation and task completion, addressing scale, domain diversity, and LLM-as-Judge limitations | [arXiv](https://arxiv.org/abs/2607.06118v1) |
| When Web Agents Finish but Still Fail: Reproducible Triggers and Trace Diagnostics for Parallel Web Exploration | arXiv paper | Parallel WebBench benchmark (1,679 records) studying hidden failures in long-horizon web agents; trains WebExplore diagnostic model | [arXiv](https://arxiv.org/abs/2606.20724v2) |
| Ko-WideSearch: A Korean Breadth-Search Benchmark for Exhaustive Set Enumeration by Web Agents | arXiv paper | Korean breadth-search benchmark for exhaustive set enumeration by web agents, built via automated synthesize-and-verify pipeline | [arXiv](https://arxiv.org/abs/2606.27595v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Build generative UI for AI agents on Amazon Bedrock AgentCore with the AG-UI protocol | AWS blog | Tutorial on building generative UI for AI agents using the AG-UI protocol on Amazon Bedrock AgentCore | [AWS](https://news.google.com/rss/articles/CBMizAFBVV95cUxOeldlSjhNSmVsVk1rLUZoS21panB3NzVsa1d0aVl0SGVTSmwwX21wWHJ5Ukk5bHdkcExVT1cxNVdMdUJyMnhYSC0xOUtpUjEwSXlWM21JdUN1YS1Hc05ENkhGTFFMLTJZT244Z1ExQXZDcWRrNjZkaloxS3oyN0FaUzlQbk9zOUNmaWJsbGhnRHluaHRoNXN5RWJ4a1VEWHhWaV9meFZzTlhIcmFFRkNsV0tNbnpnQ0pTOWhHcWZmcVZBSXFwNW9lWnRkd28?oc=5) |
| Chrome 推出 WebMCP 标准提案（Origin Trial） | Infoq.cn | Chrome's WebMCP standard proposal (Origin Trial) providing native web operation capabilities for agents | [Infoq.cn](https://news.google.com/rss/articles/CBMiXkFVX3lxTE12MnlORzI0eE1xUG8wRS1OVU9sMGpWUWlmb09XeGZ3WWdpcjkzVE5PYlNzNjJrWE1GUnpvcXY4M0xDZk42Z21aV3RSQXdxTzAxelZzTU1NVEpWOHk3QlE?oc=5) |
| Building a Self-Healing Playwright MCP Multi Agent Framework with Integrating Angular Dashboard | Medium | Tutorial on building a self-healing Playwright MCP multi-agent framework integrated with an Angular dashboard | [Medium](https://news.google.com/rss/articles/CBMizAFBVV95cUxORnRvRFZQZVgydlBfanN0U2ZhblFKMWxpSU03YThKMmtrcjJsZVdhWEIzWVBBcWhURTRpdHlUYUFSUnhwc2RzTnQxdGZhdEZVc0JHM3NiVTlPRTNvSkxCTzQ2ZERHRFRqalFSeFJyRjlNaHZ4c2dLLVM3R1Q5Tmpld0FrdDlSTkNwOVVFbUhaMVROTXR6Y0gxMkpoVy14eGZMcDJ5QzNSb3ZKYXViTUNUaWZZNElPX2tybzQ4UE9VQ1Vycl9OOEctb2ZLQU8?oc=5) |
| Benchmarking Coding Agents on Databricks’ Multi-Million Line Codebase | Databricks blog | Benchmarking coding agents against a multi-million line production codebase | [Databricks](https://news.google.com/rss/articles/CBMingFBVV95cUxPYlk4RktXSHFjZDZTUjQ0U05MODVoY1FxMGhjZUdhN3RETWJuTEZNcTA5cS1iRnFiVWZ5aDJNelhkWk1fRjExaTVvVXlEWmh3OUdPcEdSWEp2V3BsU3plajhnYXVJWE9xRmpQNnVtdXF3Y1ZoLTV6RDdVWElQUTlUUEdGTlBoMmJ4bk5qNHpJWGF3ZWpGQlRlQ2RCRVFWZw?oc=5) |
| Devin 评测 2026：AI 工程师真能替代初级开发吗 | vibecoding.app | Review of Devin's real-world performance in 2026, comparing it to Cursor, Copilot, and other tools | [vibecoding.app](https://vibecoding.app/blog/zh/devin-pingce-2026) |
| Build agentic full-stack apps with Genkit | blog.google | Guide to building agentic full-stack applications using Google's Genkit framework | [blog.google](https://news.google.com/rss/articles/CBMiggFBVV95cUxNU0VWZExGR0s2RjRZV2hueG9za2FDWlFXSUFiV2p0ZUs2NzVTMlNjdnRvR0ZBSS1PZktSTnJCb0hYT1BfYUM4YU8xcFBWWFotaUsweGwxR2twbVBONEVZcnRfaXMyZko4OThzdk9kX0s3eG00MENmRl9LZFhYSXNfUjJn?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| APM - Agent Package Manager | Microsoft Open Source | Package manager for AI agents | [Microsoft Open Source](https://news.google.com/rss/articles/CBMiR0FVX3lxTE5FR1hGb1dybFNqNUNuOFBqZjlWRkR4UTlOd3RVYTd5SmY2UUxzWmZPM0dwRm9fQnR5QVlnQjRDdVUxc3lzMW00?oc=5) |
| Audit & Compliance - Agent Governance Toolkit | Microsoft Open Source | Governance toolkit for audit and compliance of AI agents | [Microsoft Open Source](https://news.google.com/rss/articles/CBMikAFBVV95cUxQU25MYTdSUjhQblQ1TFBac2dIRl9ja2xuVkdWN2R5UUZKcFJVRExOb0RfQzA1anBvaDd0bXFLaG5OZkd0Zjh3b19YemNGV1JreklGMDFSUk9XNHdBQy1XRWprLXE4eFdIaUZ6UENhV1lLMUVRUlpWTmVHT3l1N1IyM1pYQUNlOFg3OUh0OEdhdDI?oc=5) |
| ChatGPT Work | OpenAI | Agent that can take action across apps and files, staying with projects for hours | [OpenAI](https://openai.com/index/chatgpt-for-your-most-ambitious-work) |
| Lyzr AI agent fundraise | TechCrunch | Startup used its own AI agent to raise a $100 million round | [TechCrunch](https://techcrunch.com/2026/07/09/an-ai-agent-startup-just-let-its-agent-run-its-100-million-fundraise/) |
| Securing the future of AI agents | Google DeepMind | AI Control Roadmap combining traditional safeguards and real-time monitoring | [DeepMind](https://deepmind.google/blog/securing-the-future-of-ai-agents/) |

## Resource Update (2026-08-01)

The following resources were discovered after the original article was published. They are grouped by content type and represent promising leads for further investigation.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| smolanalytics | Open-source analytics | Web + product analytics in a single Go binary; query data in plain English with CI-enforced dashboard parity; coding agent instruments your app over MCP; self-host free. | [github.com/Arjun0606/smolanalytics](https://github.com/Arjun0606/smolanalytics) |
| hapi | Mobile app | App for Claude Code / Codex / Gemini / OpenCode enabling vibe coding from mobile devices. | [github.com/tiann/hapi](https://github.com/tiann/hapi) |
| ECC | Agent harness optimizer | Performance optimization system with skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor, and others. | [GitHub via Google News](https://news.google.com/rss/articles/CBMiRkFVX3lxTE5qMGZqOGp6MEZMVjFTRWNYbmh4THpoNmUzM1ZiTEZRemZuV083WjBOUW5TVDA0dExrWVhraU1wX1h3TnV1TGc?oc=5) |
| code-copilot-team | Project templates | Multi-agent team configurations for AI code copilots; ready-to-use setups for ML/AI (RAG, LangChain, n8n), enterprise Java, and web apps with defined agent roles and delegation patterns. | [github.com/gosha70/code-copilot-team](https://github.com/gosha70/code-copilot-team) |
| cookiecutter-agentic-webapp | Project template | Production-minded web app structure designed for safe collaboration between humans and coding agents. | [github.com/kaleigh-dem/cookiecutter-agentic-webapp](https://github.com/kaleigh-dem/cookiecutter-agentic-webapp) |
| bootstrap | Claude Code plugin | Battle-tested Claude Code skills for scaffolding and layering web apps, codified from real-world builds. | [github.com/joshcoolman/bootstrap](https://github.com/joshcoolman/bootstrap) |
| claude-prototype | Claude Code skill | Skill for prototyping web apps end-to-end with zero build step. | [github.com/kurenn/claude-prototype](https://github.com/kurenn/claude-prototype) |
| ai-website-builder-mcp | MCP backend | Backend system (Node.js/Express) enabling website creation, editing, and management via AI prompts; integrates with tools like Claude for automated generation. | [github.com/hetp6670/ai-website-builder-mcp](https://github.com/hetp6670/ai-website-builder-mcp) |
| learn-claude-code | Educational repo | Nano Claude Code–like agent harness built from scratch using Bash; educational resource for understanding agent internals. | [GitHub via Google News](https://news.google.com/rss/articles/CBMiXEFVX3lxTE5hMVQ3Qnh0S0djM0ZjNmIwQ043dUd1Z0hmN1Fqa0pMQzl6U1o2Um5NeXhYX2ptVm5IdVQwd3J3U1VhZjQteUVJX0UycllwSGNxSkRnM1JweUZEZ2FF?oc=5) |
| web-fetcher | Open-source tool | Adds web scraping and Markdown conversion capabilities to Claude Code. | [80aj.com via Google News](https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1idjlkQ3hqc3V3R0pEd3R0M2tXaE14S0YyMVVrVVAyMnZIWi10eXZndTdTYmxIQTU3VVg5eW1NUTdBUEZRYkVwSDBETEFNaEFWWVAyaEhlTkVNOHhkWXo4RVNJS05JQ28?oc=5) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Ontologies Are So Back | Article | Explores why AI agents are reviving the semantic web; ontologies as a way to keep probabilistic agents inside deterministic boundaries. | [latent.space](https://www.latent.space/p/ontologies-agentic-systems) |
| Codex from 0 to 10M Users | Interview | OpenAI's core product engineering lead on building ChatGPT Work: Sites, OpenClaw, Memory, Subagents, Finance, No-Code. | [latent.space](https://www.latent.space/p/chatgpt-work) |
| The Agentic Data Engineer II | Article | Building data pipelines with Codex and Claude; practical patterns for agentic data engineering. | [Medium via Google News](https://news.google.com/rss/articles/CBMiuwFBVV95cUxNM2FMNlg0Tk96TmszbkdCckZBNXd6WW1QdG45N29XWlZOa0ZHZlJSamNJWVkyaVY1eWNKdURMUzl4QjlzbXJQT1hNdGV6TjlfZkV0bklKUkk2bDNROUp4dEg0clYzZnNQdWIzVG05U3RPYVU5eGI3MmVaRnJFQkRLZVVmNTVBeU9HWDhzVExwV01xNXBvdnNMLVZ0R1NkcGZta2pIemJBWlV5OVFLUnlqQXFGOXlMb19vbFJ3?oc=5) |
| 6 AI Failure Examples | Case study | Lessons from AI agent failures and how they inform better agent design. | [Netguru via Google News](https://news.google.com/rss/articles/CBMifkFVX3lxTE5XTFVtX2tITmVOWWFXdFpMQ29nSFZuVVB5VmFlVUFsNEg0UGxEckF3Q0NvMlZTSzhmLWJDV1hZRWtxQzZmSlRxdU5ubHQ5a2g3VW45NlBGcndwVXM5bjZVWXdtVEU1NDhRd19DLTBKUW9jUEdyZGxWcVFnWGJDdw?oc=5) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Claude Code Zero-Basics Learning Path (2026) | Tutorial | Chinese-language guide covering CLAUDE.md, Skills, Hooks, MCP, and Agent实战. | [知乎专栏 via Google News](https://news.google.com/rss/articles/CBMiXEFVX3lxTE9QSXpwXy1IdERDa2FGMkJDRkFwdmRERjU2MHJmUVpTcGNLRXhLYURRVlRuaEdKQmdteHllLUwxNmw5aXBjSU9jT1M0b3FPYnhLbmhHV3BGWjlVYXd2?oc=5) |
| Vibe Coding Wish-Fulfillment Demo | Video | Builds 4 websites with Claude Code and GPT Codex without writing code. | [Bilibili via Google News](https://news.google.com/rss/articles/CBMiVkFVX3lxTE9IWWdBWGVRQnhxcFowWmJPbDY3dElhYnROWG5DQ3lVS254bmptUWowR1VRMjg4MWloTnhXTDFUY041a1AzXzY0R0tpR0JDSkNoZFo2T1hn?oc=5) |
| PG as Vibe Coding Companion | Article | Argues PostgreSQL is the ideal database pairing for AI agent development. | [OSCHINA via Google News](https://news.google.com/rss/articles/CBMiWkFVX3lxTE42T3Z1OVNVX1lod1JYRmNlUWh3UWFORWVMYm5iMjhHbVJDTVBGNTNmTjhyNkRBRUZHS21pS2FzOTBwMnlJbC1iOFB5dTZLVy14UGhHN1VudHJwQQ?oc=5) |
| AI Agent Skill Development Guide | Tutorial | Part 3 of a series on building AI Agent Skills from principles to first implementation. | [知乎专栏 via Google News](https://news.google.com/rss/articles/CBMiXEFVX3lxTE5pbGRIMTY2RlFqbU9hTGczNUFCUUNjekJqS05WaGNDbzJjUzlIY3Njd0FBOVBhQl9ZR0UzQUFIb09TaEVoVmtPOUlXYTNxOUZOUTk3Nm9WTllVNkFj?oc=5) |
| AI Agent Book Deployment Guide | Tutorial | Guide to setting up a personal AI Agent learning and practice environment. | [知乎专栏 via Google News](https://news.google.com/rss/articles/CBMiXEFVX3lxTE5NQzZSanFUdXNYaS1IQ2xNMmYxX1VTQzVKMDBKTjUzbldzaWZzbWI0cGRjWnZMUUU3Sk5XRkdiS0dFdDk4WVFwOFE0MGJaTUhpc3dQb25janR3SzlY?oc=5) |
| Sub-Agents-Spawning-Sub-Agents Setup | Tutorial | Practical guide to Anthropic's recommended Claude Code setup with recursive sub-agent patterns. | [XDA via Google News](https://news.google.com/rss/articles/CBMijgFBVV95cUxNTHp1X3N4Z0o4bFZkQ2hSY1hiQ0p1dFdWQkYwaG1BOUdpVklVWHhCUlQ5R2RCWG1JeEJCVTBMbm1fNnlJb3d0QkVOeHJIWjVBS1hZU0xBWU5IVEg5VFVxdFBPZnFxZ1pnUHhmZ2tDMXZEeHlEdEVGV0tna2g5ZGpjQUJUQmtfVlM1XzNzQ0h3?oc=5) |
| Claude Code + Codex Collaboration | Article | Explains how to make Claude Code call Codex directly — one writes code, the other reviews. | [AI编程社区 via Google News](https://news.google.com/rss/articles/CBMiZkFVX3lxTE0tam1HWVNoakdiNnB1cjJyT2wtelAtbnB5VjItTnMzb1JpbjYxRTNpSzV6TTRCaXZHRUVhbktKeWRxbnUwYTUwSTN0QzJlQWlVTzA2QXJ2UmJhdVlOSTB2UVBGaUJadw?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Linco Bridge | Open-source tool | Extends local AI agents (Codex, Claude Code, Hermes) to mobile devices; architecture and practice write-up. | [AI编程社区 via Google News](https://news.google.com/rss/articles/CBMiZkFVX3lxTFBoc1ROZllJR0VDeGFfVGRSYlEtYkRNcWl3TmlaQ3dzUHlOS0sxZlpfTEozLVhReXlYY21CbWtUblhWUnZuWDNjSFF2QkdCVGI0LS1UUEd6NDRSTGdpUUZYTy1obGN1QQ?oc=5) |
| Fusion AI Agent Studio CLI | Enterprise tool | Oracle's pro-code builder experience for AI agents. | [Oracle Blogs via Google News](https://news.google.com/rss/articles/CBMiZEFVX3lxTFAtUDBuTzlIM2pHTTRUYUVfVmJ0N2dteWFjRGxXbkY4d0J6VGRpQzRWRURqQ2ljSWc5S1ljVVBQOGRnbVhuZE81elhTa3JQX3lETHoxbGhRWFpISlRHX3VNd0tlUlI?oc=5) |
| Claude Code vs Codex Cost Comparison | Benchmark | Reports Claude Code costs 23% more per task than Codex (2026 data). | [tech-insider.org via Google News](https://news.google.com/rss/articles/CBMiYEFVX3lxTE5DY0JtTkEtZjNWNVRJSUU2WUYwRm9jejVlbWpCN1oxWmMxd3oxSkxMQW1oOEFpSWZwT0twRmhyQjM1THB6cy0wM19zTFNVdVJDVUtkQ2NxVHh3RWw3VE13bw?oc=5) |
| Codex Surpasses Claude Code | Analysis | Reports on Codex milestone and the cost behind the breakthrough. | [36 Kr via Google News](https://news.google.com/rss/articles/CBMiU0FVX3lxTE1BcE1icWU2SzZiaUZocGJkTWVUSVBTSk9KMHFFTFd4S2NKcnVkVFM1UjNGOXBLYi1SNlo1TXNhRDZVcDJ6c1FZYjkzd1QtMTR4ZTRz?oc=5) |

## Resource Update (2026-08-22)

The following resources were discovered after the original article was published. They are grouped by content type and represent promising leads for further investigation.

### Projects

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| dsh-verify | GitHub | Quality gate for agent-built web apps. Real-browser acceptance checks via CLI, MCP (Claude Code / Cursor / Copilot), and GitHub Action. Agents self-test; real browsers verify. | [github.com/263311487-ux/dsh-verify](https://github.com/263311487-ux/dsh-verify) |
| devv | GitHub | AI coding agent and instant-backend platform (devv.ai) for shipping full-stack, AI-powered web apps from natural-language prompts. Rebuilt as Devv 2.0 into a no-code app builder with a three-step workflow. | [github.com/api-evangelist/devv](https://github.com/api-evangelist/devv) |
| agent-device | GitHub | Mobile app automation and verification for AI coding agents. CLI, MCP server, and typed Node.js API for iOS, Android, HarmonyOS, TV, web, macOS, and Linux. | [github.com/callstack/agent-device](https://github.com/callstack/agent-device) |
| bolt-new | GitHub | StackBlitz's in-browser AI full-stack app builder. Generates, edits, runs, and deploys complete web apps in the browser tab via WebContainer runtime. | [github.com/api-evangelist/bolt-new](https://github.com/api-evangelist/bolt-new) |
| b12 | GitHub | AI-powered website builder generating professional sites, online stores, and web apps from a short prompt. Driven by B12 3.0 AI Agent (launched February 2026). | [github.com/api-evangelist/b12](https://github.com/api-evangelist/b12) |
| memi | GitHub | Design layer for agentic AI — design context, interface checks, and verification for coding agents. | [github.com/memi-design/memi](https://github.com/memi-design/memi) |
| openchamber | GitHub | Desktop and web interface for the OpenCode AI agent. | [github.com/openchamber/openchamber](https://github.com/openchamber/openchamber) |
| paseo | GitHub | Orchestrate multiple coding agents from desktop and mobile. | [github.com/getpaseo/paseo](https://github.com/getpaseo/paseo) |

### Papers / Benchmarks

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Comparing the Quality of Code Generated by Vibe Coding Tools | arXiv | Compares structural quality of code produced by Lovable, v0, and Replit from a single generation prompt — three independent projects per tool, nine web apps total. | [arxiv.org/abs/2608.16302v1](https://arxiv.org/abs/2608.16302v1) |
| Tencent WorkBuddy Bench | arXiv | Multi-domain coding-agent benchmark with contamination-resistant task construction across Code, Web, Office, and Security domains. Tasks reverse-engineered from real commits, PRs, or business scenarios. | [arxiv.org/abs/2607.20911v1](https://arxiv.org/abs/2607.20911v1) |
| VideoVIBE | arXiv | Video-grounded diagnostic benchmark for one-shot interactive website generation. Transforms human-operated webpage recordings into ~1.7K fine-grained diagnostic tasks. | [arxiv.org/abs/2608.09573v1](https://arxiv.org/abs/2608.09573v1) |
| MT-Web2Code | arXiv | First multimodal coding benchmark for multi-turn regional reconstruction and localized modification of existing web codebases. | [arxiv.org/abs/2608.03474v1](https://arxiv.org/abs/2608.03474v1) |
| Vibe Coding: An Experiment with Test-Driven Development | arXiv | Exploratory study of human-CLLM peer collaboration via vibe coding, integrating prompt engineering, agile design, and human-AI co-creation. Four interaction models designed. | [arxiv.org/abs/2607.22406v1](https://arxiv.org/abs/2607.22406v1) |
| Agentic Commerce World | arXiv | Auditable and verifiable environment for "vibe commerce" — Buyer and Merchant agents interact in a shared market while preserving private objectives and authority. | [arxiv.org/abs/2608.02441v1](https://arxiv.org/abs/2608.02441v1) |
| MSEval | arXiv | Multi-agent from-scratch evaluation benchmark grounded in 10 authentic full-stack projects across 10 domains, scoring performance via hierarchical requirements. | [arxiv.org/abs/2607.27877v1](https://arxiv.org/abs/2607.27877v1) |
| WebGrader | arXiv | Self-evolving programmatic grader for training LLMs in web development via reinforcement learning, addressing reward-design bottlenecks. | [arxiv.org/abs/2608.06474v1](https://arxiv.org/abs/2608.06474v1) |

### Tutorials / Media Tests

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| Vibe Coding 保姆级完整教程 | Bilibili | 2026 complete vibe coding tutorial covering Codex, Claude Code, and Cursor. | [Bilibili](https://news.google.com/rss/articles/CBMiV0FVX3lxTE1Yb1h4eEVCdk5DZWR3aUp4U1RURGRuM1NvektRY1FyT2tLLXhRNkJwMVM4OW9tcV8xRDZ3NVlQNDdHdUJMVU5haVdSeWYybVM5MG1sNHdMVQ?oc=5) |
| DeepSeek Harness 教程 | 知乎专栏 | Tutorial on DeepSeek Harness, an open-source agent framework where "everything is a plugin." | [知乎专栏](https://news.google.com/rss/articles/CBMiXEFVX3lxTE81aDdWdjZOaUhvWGRTRzB0dnR1WlZmLVA1SmlqRHk0aGNEWjdpUkZEX3lsUFFHSjhFdllkVUJsMmRkd2Z3VmFRNmV0T19ZVHU0US1xdmdLS3MwallI?oc=5) |
| DeepSeek Harness 深度体验 | OSCHINA | Deployment tutorial, model integration, and plugin ecosystem analysis for DeepSeek Harness (150K-star agent framework). | [OSCHINA](https://news.google.com/rss/articles/CBMiWkFVX3lxTE9BUWhSTzVxRXdLUGFxdGlhdlRxTHpSeHhjeWxoRTdoZWRUXzhFR2trZ3d2aTdMNnlibmsxLVFnbzF4MS1rclcySktQbV91S1VfVGVqRVlxUzdzUQ?oc=5) |
| DeepSeek Harness 爆火解析 | YouTube | Video explaining DeepSeek Harness — "everything is a plugin, everything is traceable" — an agent framework built in reverse. | [YouTube](https://news.google.com/rss/articles/CBMiVkFVX3lxTE1sRzlza3lrY1hXWmstQlpYOG5waE4tZHJjYm5rWTd6bW9ETEtZT0NHTE5EeHlSVUNqY1lDR0xlcFRSekc5dU0xMHVnU25ZeVc1TnBnVGx3?oc=5) |

### Products / Tools

| Name | Type | Use / Summary | Link |
|------|------|---------------|------|
| OpenConnector | Open-source | Connector gateway for AI agents to safely call 1000+ SaaS services. Handles auth management, permission control, interface adaptation, and runtime auditing. Exposes standardized Actions to agents. | [oschina.net](https://www.oschina.net/news/502067/oomol-lab-open-connector) |
| modern-web-guidance | GitHub | Google Chrome's guidance repo to keep coding agents up to date with the latest web best practices. | [github.com/GoogleChrome/modern-web-guidance](https://news.google.com/rss/articles/CBMiYEFVX3lxTE9kdWs1Yk1Pd0JPY19qbUFqYlpCa3I0VjRLUG0xdHFoRlJwZ2hnSHdBOU5KdTdoeTFHNVNVNWJtdlRKQVoxSmprOEdSanF2QnBncEJPRG5GVlVLV0hnTzVVNg?oc=5) |
| AnySearch MCP Server | MCP | Search MCP server configuration guide and scenario analysis for AI agents. | [CSDN](https://news.google.com/rss/articles/CBMiXkFVX3lxTFBFSTdDQ2Z2TVMyWDh4c2hTSUlJUVJjeTVBOXhwTjZLbW8xdkVSaHlTU1hfOWpnMGxZRzFJTHBTaEJTaWNUUGs2MHRKOGdoM19wSTVzbVZfb0MzQ0t2eHc?oc=5) |
| Baidu Maps Agent Plugin | Plugin | Two commands to let AI agents use Baidu Maps. | [CSDN](https://news.google.com/rss/articles/CBMiXkFVX3lxTE1vdldhQTcteVJKVDB6Z3QwNUlubDl3bzc2Vk82NDJ0aXkwbHhUV2o4dW91Rm13WHdwTUNvdFF6ekUtU254cEhSRlJ4aVB6RE5pUDJ3XzZRQ08xTTlZLUE?oc=5) |
