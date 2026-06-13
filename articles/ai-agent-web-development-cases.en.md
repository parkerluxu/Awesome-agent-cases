# Web Development: AI Agent Case Studies, Tutorials, and Research Projects

Research date: 2026-06-13

This article focuses on cases where AI agents directly build Web products, websites, admin panels, and tools. The main actors are Claude Code, OpenAI Codex, Cursor, Replit Agent, Lovable, Bolt, Firebase Studio, and similar systems, rather than agent platforms such as Dify or Coze.

## Quick Takeaways

Web development is currently one of the most mature landing areas for AI agents. Feedback loops are fast, tests can be automated, screenshots can be used for acceptance, deployment is mature, and errors are usually easy to iterate on.

Tasks that are especially suitable for replication:

- E-commerce demos: product lists, detail pages, carts, payment sandboxes, admin panels.
- Small SaaS tools: subscription trackers, quote tools, CRMs, dashboards.
- Content sites: blogs, knowledge bases, portfolios, course pages.
- Business admin systems: CRUD, permissions, search, filters, import/export.
- Personal tools: budgets, fitness, reading, habits, data visualization.

## Tutorials and Practitioner Notes

### 1. Vibe Coding for Personal Web Tools and E-commerce Prototypes

Type: media / practitioner summaries  
Representative tools: Replit, Cursor, Claude, Lovable  
Link: https://en.wikipedia.org/wiki/Vibe_coding

The typical vibe-coding pattern is simple: users describe a product in natural language, and the agent generates pages, components, data structures, and deployment configuration. Kevin Roose's experiments are often cited as "software for one." Public materials also mention an e-commerce experiment where AI fabricated product reviews.

Reusable lessons:

- Ask for a minimal runnable version first.
- Add database, auth, payment sandbox, and admin panel in the second round.
- Use a second agent or a human for security review.
- Put hard human constraints around reviews, sales numbers, certifications, and discounts.

### 2. Claude Code vs Codex Building Three Real Apps

Type: media test  
Representative tools: Claude Code, OpenAI Codex  
Link: https://www.tomsguide.com/ai/claude-code-vs-openai-codex-i-built-3-real-apps-to-find-the-better-agent-heres-the-verdict

Tom's Guide asked Claude Code and Codex to build a subscription tracker, a grocery price comparison tool, and a loan-vs-cash purchase calculator. The rough conclusion: Claude Code behaved more like a fast product prototyper with better first-run UX, while Codex was stronger in complex logic, data handling, and analytical depth.

Prompt structure:

```text
Target user:
Core features:
Input fields:
Calculation rules:
Page structure:
Acceptance criteria:
Things not to do:
```

For finance, e-commerce, and price-comparison tools, require formulas and boundary cases. A second agent doing code review is especially useful.

### 3. Lovable / Replit / Bolt and Prompt-to-App Web Generation

Type: platform ecosystem / industry reports  
Links:

- Replit overview: https://en.wikipedia.org/wiki/Replit
- Lovable overview: https://en.wikipedia.org/wiki/Lovable_%28company%29
- Prompt-to-product research: https://arxiv.org/abs/2512.18080

Lovable, Replit, Bolt, and Firebase Studio combine generation, preview, deployment, database, and auth into one flow. They are especially useful for non-technical founders building MVPs, but complex applications still run into data modeling, security, and permission issues.

Good tasks include customer questionnaires, appointment/inventory/order tools, course landing pages, student admin panels, lead capture, and lightweight CRM tools.

### 4. Washington Post: Ordinary Users Building Personal Apps

Type: non-programmer cases  
Representative tools: Claude Code, Claude Cowork  
Link: https://www.washingtonpost.com/technology/interactive/2026/claude-code-cowork-build-apps/

The key lesson is that domain knowledge matters. Users can turn highly specific personal or local knowledge into software requirements, while agents turn those requirements into usable prototypes. Publishing, hosting, permissions, and data maintenance remain harder than first generation.

### 5. Weekend Vibe-Coded Apps and Distribution

Type: media tutorial  
Link: https://www.tomsguide.com/ai/i-vibe-coded-an-app-in-a-single-weekend-heres-how-i-got-it-into-other-peoples-phones

The practical reminder is that getting the app into other people's hands matters as much as generating code. Vercel, Netlify, Replit, and GitHub Pages are part of the real workflow. A useful replication path is to build a PWA, add manifest and responsive layout, deploy it, and distribute it with a QR code.

### 6. Claude Code Web App and Repository-Based Agent Workflows

Type: product workflow case  
Link: https://timesofindia.indiatimes.com/technology/tech-news/anthropic-launches-claude-code-web-app-expanding-access-to-ai-powered-coding-agents/articleshow/124720853.cms

Claude Code Web connects to GitHub repositories and runs in isolated hosted VMs to clone, install dependencies, edit code, run tests, and create PRs. This is well suited for Web maintenance tasks such as UI bug fixes, tests, dependency upgrades, docs, and small feature PRs.

### 7. GPT Engineer to Lovable

Type: open-source-to-commercial evolution  
Link: https://en.wikipedia.org/wiki/Lovable_%28company%29

Lovable's roots in gpt-engineer show a broader shift: one-shot repository generation was only the first step. Durable value comes from continuous editing, visual feedback, database/auth/deployment integration, and exportable code that engineers can take over.

### 8. Figma MCP to Frontend Pages with Trae

Type: Chinese tutorial / concrete workflow  
Link: https://www.infoq.cn/article/QjaRMr5pGMK84UYjoo9P

This tutorial demonstrates a full "Figma design to frontend page" workflow with Trae, Figma AI Bridge MCP, DeepSeek-V3, tokens, MCP configuration, a custom Figma assistant, and generated responsive HTML. The important lesson is to give the agent the Figma file as context instead of asking it to imagine the UI.

### 9. Playwright MCP for Web Acceptance Testing

Type: Chinese tutorial / Web testing agent  
Link: https://www.infoq.cn/article/khJ1J5iikaO9q1Pwc5HI

This workflow configures Playwright MCP in Trae, creates a Web testing assistant, and lets the agent open pages, take screenshots, click links, and execute test instructions. It is a strong addition to Web-agent acceptance: agents should not only write pages, but also inspect interactions.

## Research and Product Directions

### Cursor 3 / Agent HQ: Assigning Web Tasks to Multiple Agents

Links:

- Cursor 3: https://www.wired.com/story/cusor-launches-coding-agent-openai-anthropic
- GitHub Agent HQ: https://www.theverge.com/news/873665/github-claude-codex-ai-agents

Web development is moving from one chat box generating code to multiple agents handling issues, PRs, tests, and UI changes. A good replication test is to create three issues for a demo e-commerce app, assign them to different agents, and compare scope, tests, and UI regressions.

### Replit Agent and Production Data Incidents

Links:

- Replit overview: https://en.wikipedia.org/wiki/Replit
- AI agent risk overview: https://en.wikipedia.org/wiki/AI_agent
- Guardian incident report: https://www.theguardian.com/technology/2026/apr/29/claude-ai-deletes-firm-database

The lesson is blunt: once agents touch production databases, credentials, and deployment environments, the risk moves from "code bug" to "business incident." Keep local/preview and production environments separate, make production databases read-only by default, require human approval for migrations, and rely on external backups.

### From Prompt to Product

Link: https://arxiv.org/abs/2512.18080

This benchmark compares Replit, Bolt, and Firebase Studio across 96 Web-app prompts and 288 generated apps, evaluated through 1,071 pairwise comparisons. It highlights that Web-agent outputs should be judged by task completion, usability, visual appeal, and trust, not only whether code runs.

### Student-AI Interactions in Vibe Coding

Link: https://arxiv.org/abs/2507.22614

The study observes students using Replit to build Web apps. Many focus on testing and debugging prototypes while rarely entering code. Tutorials should therefore teach users how to describe context, inspect code, verify data flow, and check permissions.

### WebApp1K

Link: https://arxiv.org/abs/2408.00019

WebApp1K provides a benchmark for Web app code generation, helping move "can agents build websites?" from subjective demos toward testable tasks.

### Coding Beyond Your Training

Link: https://arxiv.org/abs/2605.25438

This empirical study tracks 5,838 GitHub developers before and after Claude Code collaboration. It suggests agents not only improve productivity within one stack, but also lower the barrier to trying new frameworks, languages, and projects.

<!-- AUTO_CASE_UPDATES_START:web:en -->
## Latest Updates (2026-06-13)


- **Google search box redesign (AI-driven conversational input)** — Google announced a sweeping redesign of the search box at I/O 2026, transforming it from a keyword input into a dynamic, AI-driven conversational interface. This is the first major change to the search box in 25 years and signals a paradigm shift for how users interact with web-based AI agents. [VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think) (2026-05-19)

- **OpenAI to acquire Ona** — OpenAI plans to acquire Ona to expand Codex with secure, persistent cloud environments, enabling long-running AI agents across enterprise workflows. This acquisition could significantly impact the infrastructure available for AI agent web development. [OpenAI](https://openai.com/index/openai-to-acquire-ona) (2026-06-11)

- **"I vibe coded 3 real apps using Claude Code and OpenAI Codex"** — A hands-on comparison from Tom's Guide testing real app development with two leading coding agents. *Needs manual review for detailed findings.* [Tom's Guide](https://news.google.com/rss/articles/CBMiuwFBVV95cUxONmVSX0tDS0xLVWxzVDl5dExrc1htRXZwV0d4bndWNjNja3I4Ymh6anRmWExySEJfVG9waE9VOXI4SGJIcHBQSXBDM3FnY3lRZTJURUdFY0NnRk1ra2h0RjZ4cHFnYjludnQ0aEpQbzRoRXc3MkFlY1I2LTRKd0FueDJ0N0dVTGVYUW1CaTFLTWtlRTZCN1JqbjdfUERubU9KM1dIZ2VMRkZZVmFMa2sxbHktRjVORTh0WjRR?oc=5) (2026-05-16)

### Projects

- **cbt4free/claude-agent-sdk-laravel** — Enables Laravel apps to build AI agents using Claude Code for file handling, command execution, code editing, and web search integration. [GitHub](https://github.com/cbt4free/claude-agent-sdk-laravel) (2026-06-13, 1 star)

- **praveen-palanisamy/autodemo** — "Demos as code" — generates demo videos, interactive walkthroughs, and marketing captures from running web apps. CI-native and agent-ready (MCP). [GitHub](https://github.com/praveen-palanisamy/autodemo) (2026-06-13, 0 stars)

- **jcuervo/rails-skills** — A suite of Claude Code Agent Skills for building, testing, hardening, and shipping Ruby on Rails applications (Ruby 4.0.x / Rails 8.1.x). [GitHub](https://github.com/jcuervo/rails-skills) (2026-06-13, 0 stars)

- **yufangjie1643/aigc-commerce-video-generator** — Local-first, open-source alternative to Claude Design. Supports 259+ skills, 142+ design systems, and exports to HTML/PDF/PPTX/MP4. Compatible with Claude Code, Codex, Cursor, and 17+ CLIs. [GitHub](https://github.com/yufangjie1643/aigc-commerce-video-generator) (2026-06-13, 0 stars)

- **hegemonart/get-design-done** — Design-quality pipeline for AI coding agents: brief, map, plan, implement, and verify UI against your design system. [GitHub](https://github.com/hegemonart/get-design-done) (2026-06-13, 4 stars)

- **CoWork-OS/CoWork-OS** — Local-first personal agentic OS for coding, knowledge work, web design, automations, and artifacts. [GitHub](https://github.com/CoWork-OS/CoWork-OS) (2026-06-13, 356 stars)

- **AnujTechBoy/AIForge** — Build and manage AI-native web and mobile apps with a monorepo supporting over 90% code sharing. [GitHub](https://github.com/AnujTechBoy/AIForge) (2026-06-13, 2 stars)

- **Ajiess/AI-Code-Reviewer** — A web app that instantly analyzes and improves code quality with real-time feedback. [GitHub](https://github.com/Ajiess/AI-Code-Reviewer) (2026-06-13, 0 stars)

- **LeeKangRyong/ai-native-frontend-prac** — 4 frontend services in 1 repo developed with Claude Code (+Figma MCP). [GitHub](https://github.com/LeeKangRyong/ai-native-frontend-prac) (2026-06-07, 0 stars)

- **RooCodeInc/Roo-Code** — "Roo Code gives you a whole dev team of AI agents in your code editor." *Needs manual review for details.* [GitHub](https://news.google.com/rss/articles/CBMiT0FVX3lxTE84eUNNd1F3TkZNc1FmZUlNWnhBbXA4SXdqS3Z1SnhmNk1SYWI3ZTd1ZlhOVFlFZ1hFdU1hbVVXc3BvdWlrX3NMbFdmdVJ3OUU?oc=5) (2026-05-15)

### Papers / Benchmarks

- **"From Runnable to Shippable: Multi-Agent Test-Driven Development for Generating Full-Stack Web Applications from Requirements"** — Proposes a multi-agent TDD approach for web apps, addressing the finding that over 70% of generated apps fail functional requirements. [arXiv](https://arxiv.org/abs/2605.17242v1) (2026-05-17)

- **"VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents"** — A benchmark evaluating LLM-based agents on realistic UI-centric web-app generation from underspecified inputs. [arXiv](https://arxiv.org/abs/2605.26144v2) (2026-05-22)

- **"Asuka-Bench: Benchmarking Code Agents on Underspecified User Intent and Multi-Round Refinement"** — A benchmark pairing underspecified user intent with multi-round refinement, grounded in browser-rendered behavior. [arXiv](https://arxiv.org/abs/2606.05920v1) (2026-06-04)

- **"Domain-Conditioned Safety in Frontier Computer-Using Agents"** — A 793-episode browser benchmark for red-teaming computer-using agents, covering 24 multi-step web tasks and 56 attack templates. [arXiv](https://arxiv.org/abs/2606.05233v1) (2026-06-03)

- **"Helicase: Uncertainty-Guided Supply Chain Knowledge Graph Construction with Autonomous Multi-Agent LLMs"** — Multi-agent system for multi-hop reasoning across fragmented web resources. *Tangentially relevant to web agent workflows.* [arXiv](https://arxiv.org/abs/2605.26835v1) (2026-05-26)

- **"Human-in-the-Loop Swarms: A Bionic Swarm Approach to Real-World Soil Mapping"** — Uses a smartphone web-app for human-in-the-loop control. *Tangentially relevant.* [arXiv](https://arxiv.org/abs/2605.29091v1) (2026-05-27)

### Tutorials / Media Tests

- **Playwright** — "Fast and reliable end-to-end testing for modern web apps." Playwright enables web automation for testing, scripting, and AI agents across Chromium, Firefox, and WebKit. [Playwright](https://playwright.dev/) (No date)

- **"Modern Web Guidance: Teaching AI Agents to Stop Coding Like It's 2019"** — DEV Community article on teaching AI agents modern web development practices. *Needs manual review for full content.* [DEV Community](https://news.google.com/rss/articles/CBMiogFBVV95cUxPT0ZqMXQ1XzFHY0lkNnk3UEJvNDdaOERFOUZTYjFzTU9VSkRhMi1QUG1ybExWajZNM0VNMHU3a1JFOXUyYzY4RlJUZVVyNGpNNWRscUxFN1BrQlcxV3ctMC1nLXhMdDFBY1VmZmpVdmlRTU54a3V3M2NCUHg3M3piODRjUTcwMHlWa0hmN05SeDJmMGlNOVNIUDNnbzFJaklNYnc?oc=5) (2026-05-21)


- **"From Dialogue to Action: AI Agent Enters a 10-Billion-Yuan Track — 2026 AI Agent Industry Map Collection in Progress"** — CSDN article on the AI agent industry landscape. *Needs manual review for details.* [CSDN](https://news.google.com/rss/articles/CBMiXkFVX3lxTE1EWmp2NXp1d3o3ZzJEOGlKQ3l4MmozZmhCaWFUZTNHTXphUnJ1ZmltTzNQWENvQnZUMjBrRmdmeUl0b0cxQlg5cHBmWXJLaWtrZHRJal92R0ZqSllHaEE?oc=5) (2026-06-08)

- **"In-depth Analysis of AI Agent Development Trends: From Code Assistants to System-Level Agents"** — Juejin article analyzing core architectures of multiple agent products. *Needs manual review for details.* [掘金](https://news.google.com/rss/articles/CBMiVEFVX3lxTFB1REpmZnZTVVNmUGE2TEhBVlVpamdtR09GVEZQUEJldUhuUXgwcEg4RW1iTjNxRGVYQk85eUJfSURkR2hlakxNLVVMSk1jY1hyRXJkVQ?oc=5) (2026-05-26)

- **"2026 Smart Cockpit AI Agent Evolution Trends and 3 Case Studies"** — Electronic Engineering Album article on AI agents in smart cockpits. *Tangentially relevant to web-based agent interfaces.* [电子工程专辑](https://news.google.com/rss/articles/CBMiU0FVX3lxTE8xS2thU3pWdkVMa25paUxpVVRwMXlVeTlXRGJrNFFtTWlMMmhVcGVCQk0wTVIzb3dTSFVBaUZmTkVnV055UDBVbzh1M0J0eUdadC00?oc=5) (2026-06-13)

### Follow-up Items

- **Google search box redesign** — Monitor for developer documentation and API changes for integrating AI agents with the new search interface.
- **OpenAI / Ona acquisition** — Track how persistent cloud environments for Codex agents evolve and what it means for web app deployment workflows.
- **VISTA and Asuka-Bench benchmarks** — Consider evaluating your own agents against these new benchmarks for UI-centric and multi-round refinement tasks.
- **Playwright for agent testing** — Investigate using Playwright as the browser automation layer for testing AI-generated web applications.
- **hegemonart/get-design-done** — Low-star but directly relevant pipeline for design-to-code agent workflows; worth monitoring for maturity.
- **Chinese community articles** — All three need manual review for actionable technical content before inclusion in the main article.
<!-- AUTO_CASE_UPDATES_END:web:en -->
