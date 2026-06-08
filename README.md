# AI News Bot

Daily AI agent intelligence, summarized by DeepSeek, exported as Markdown and WeChat-ready HTML.

[English](README.md) | [中文](docs/README.zh-CN.md)

![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![DeepSeek](https://img.shields.io/badge/LLM-DeepSeek-black)
![Markdown](https://img.shields.io/badge/Output-Markdown-green)
![WeChat](https://img.shields.io/badge/Output-WeChat_HTML-07c160)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## What This Is

**AI News Bot** is a daily publishing pipeline for tracking what matters in AI agents:

- AI agent and model capability updates
- real task usage, such as research, coding, IC/EDA work, security, automation, and productivity
- new papers, GitHub projects, and open-source agent frameworks
- major AI product launches, funding, regulation, incidents, and other breakout stories

It collects candidates from RSS, Google News RSS, arXiv, GitHub Search, and Chinese/English AI media, then asks DeepSeek to select and write a structured daily digest.

No web app. No dashboard. Just a practical automation script that produces files you can publish.

## Outputs

Every run can generate:

| Output | Path |
|---|---|
| Markdown digest | `daily_news/YYYY-MM-DD-ai-news-digest.md` |
| WeChat HTML article | `wechat_articles/YYYY-MM-DD-ai-news-wechat.html` |
| WeChat cover image | `wechat_articles/covers/YYYY-MM-DD-ai-news-cover.png` |
| downloaded article images | `wechat_articles/assets/YYYY-MM-DD-ai-news-wechat/` |

The generated article is split into two independent sections:

| Section | Selected From |
|---|---|
| News and industry updates | media, official blogs, Google News RSS |
| Papers and open-source projects | arXiv, GitHub Search, Gitee-related coverage |

## Why This Exists

AI news is noisy. Agent progress is even noisier.

This project is designed to answer one daily question:

> What should an AI agent builder actually read today?

The pipeline prioritizes sources and stories about:

- model capability improvements that affect agent design
- agents completing concrete tasks, not just demos
- coding agents, research agents, multi-agent systems, tool use, MCP, and evaluation
- open-source projects with enough signal to be worth tracking
- Chinese and English sources, instead of only Western company blogs

## Quick Start

Install dependencies:

```bash
pip install -r requirements.txt
```

Create your config:

```bash
cp .env.example .env
```

Edit `.env`:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key
DEEPSEEK_MODEL=deepseek-v4-flash
```

Preview candidate collection without calling DeepSeek:

```bash
python ai_news_bot.py --dry-run
```

Generate today's Markdown digest, WeChat HTML, cover image, and article images:

```bash
python ai_news_bot.py
```

Generate a specific date:

```bash
python ai_news_bot.py --date 2026-06-08
```

## Common Commands

| Task | Command |
|---|---|
| Generate full daily package | `python ai_news_bot.py` |
| Dry run candidate collection | `python ai_news_bot.py --dry-run` |
| Use a 3-day search window | `python ai_news_bot.py --days 3` |
| Generate 15 news items and 10 paper/project items | `python ai_news_bot.py --top-n 15 --research-top-n 10` |
| Require more Chinese stories | `python ai_news_bot.py --min-zh-stories 4` |
| Raise GitHub star threshold | `python ai_news_bot.py --github-min-stars 50` |
| Skip WeChat HTML | `python ai_news_bot.py --skip-wechat` |
| Disable article image fetching | `python ai_news_bot.py --no-fetch-images` |
| Disable cover generation | `python ai_news_bot.py --skip-cover` |
| Use another env file | `python ai_news_bot.py --env-file .env.local` |

## GitHub Publishing

`upload_daily_md_to_github.py` uploads the daily Markdown digest to:

```text
https://github.com/parkerluxu/Awesome-agent-cases.git
```

Preview:

```bash
python upload_daily_md_to_github.py --dry-run
```

Upload today's digest:

```bash
python upload_daily_md_to_github.py
```

Upload a specific date:

```bash
python upload_daily_md_to_github.py --date 2026-06-08
```

Upload a specific Markdown file:

```bash
python upload_daily_md_to_github.py --source daily_news/2026-06-08-ai-news-digest.md
```

The script auto-detects the target repository's default branch. If the repository is brand new and has no commits, it creates and pushes to `main` by default.

To force another branch:

```bash
python upload_daily_md_to_github.py --branch master
```

Authentication:

- Uses your local `git` credentials by default.
- If `GITHUB_TOKEN` is set, the token is used for this Git operation and redacted from script output.
- The local clone cache lives in `.github_upload/`, which is ignored by git.

## WeChat Publishing

Open the generated HTML:

```text
wechat_articles/YYYY-MM-DD-ai-news-wechat.html
```

Recommended publishing flow:

1. Open the HTML file in a browser.
2. Select the rendered page content with `Ctrl + A`, then copy with `Ctrl + C`.
3. Open WeChat Official Account backend.
4. Create a new article draft.
5. Paste into the rich text editor.
6. Re-upload local images from `wechat_articles/assets/` if WeChat does not keep local image paths.

Do not copy the raw HTML source. Copy the rendered browser page.

## Sources

The bot combines fixed sources and query-based sources.

| Type | Examples |
|---|---|
| Official and research blogs | OpenAI, Google DeepMind, Microsoft, NVIDIA, Hugging Face |
| International AI media | The Decoder, Synced, The Gradient, Import AI, MarkTechPost, Artificial Intelligence News |
| International tech media | TechCrunch AI, VentureBeat AI, The Verge AI, MIT Technology Review |
| Chinese tech and AI media | QbitAI, InfoQ CN, OSChina, cnBeta, 36Kr |
| Search-backed coverage | Google News RSS English and Chinese queries |
| Research | arXiv API |
| Open source | GitHub Search API, Gitee-related coverage through news search |

## How It Works

1. Collect news candidates from RSS and Google News RSS.
2. Collect paper candidates from arXiv.
3. Collect open-source project candidates from GitHub Search.
4. Deduplicate by URL.
5. Filter by the configured time window.
6. Score locally with agent-focused keywords.
7. Keep Chinese and English sources in the candidate pool.
8. Send separate candidate pools to DeepSeek.
9. Ask DeepSeek to select high-value items and write the final Markdown article.
10. Generate the WeChat HTML article.
11. Generate a cover image from the daily title.
12. Fetch useful article images when available.
13. Optionally upload the Markdown digest to GitHub.

## Project Structure

```text
.
├── ai_news_bot.py                  # main collection and generation pipeline
├── wechat_formatter.py             # Markdown to WeChat-friendly HTML
├── cover_generator.py              # daily cover image generator
├── upload_daily_md_to_github.py    # upload daily Markdown to GitHub
├── daily_news/                     # generated Markdown digests
├── wechat_articles/                # generated WeChat HTML, covers, and images
├── docs/
│   └── README.zh-CN.md             # Chinese documentation
├── requirements.txt
└── .env.example
```

## Configuration

Configuration priority:

```text
CLI arguments > system environment variables > .env > defaults
```

Minimal `.env`:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key
DEEPSEEK_MODEL=deepseek-v4-flash
```

Optional GitHub token:

```env
GITHUB_TOKEN=your_github_token
```

Keep secrets out of git. `.env` is already ignored.

## Notes

- RSS summaries may not contain full article text; the digest is based on available candidate metadata.
- Some RSS or Google News endpoints may fail temporarily. The script skips failed sources and continues.
- On Windows, if Python HTTPS fetching hits SSL EOF errors, the script falls back to `curl.exe`.
- Downloaded article images may have copyright restrictions. Check source usage before publishing.
- Google News links may be redirect links instead of final article URLs.

## License

MIT. Fork it, customize it, and wire it into your own publishing workflow.
