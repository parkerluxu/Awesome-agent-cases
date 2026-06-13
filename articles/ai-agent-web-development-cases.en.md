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
