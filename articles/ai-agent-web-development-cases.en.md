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

## Recommended Replication Path

1. Build a pure frontend e-commerce demo.
2. Add local JSON or SQLite data.
3. Add login, admin, and order status.
4. Add Stripe or PayPal sandbox.
5. Use another agent for security and compliance review.
6. Use Playwright or screenshots to verify mobile behavior.

## Main Risks

- Fabricated reviews, sales numbers, or qualifications.
- Overly broad database permissions.
- Payment flows not tested in sandbox.
- Generated code becoming hard to maintain.
- UI looking complete while core business logic is missing.
