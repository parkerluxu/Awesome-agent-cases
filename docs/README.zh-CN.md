# AI News Bot

每日自动收集 AI agent 相关情报，调用 DeepSeek 生成中文摘要，并输出 Markdown 与微信公众号 HTML。

[English](../README.md) | [中文](README.zh-CN.md)

![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![DeepSeek](https://img.shields.io/badge/LLM-DeepSeek-black)
![Markdown](https://img.shields.io/badge/Output-Markdown-green)
![WeChat](https://img.shields.io/badge/Output-WeChat_HTML-07c160)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 这个项目是什么

**AI News Bot** 是一个面向 AI agent 方向的每日内容生产脚本。

它会自动收集当天或最近几天的：

- AI agent 和模型能力最新进展
- 使用 agent 完成科研、写代码、IC/EDA、自动化、安全等具体任务的案例
- 最新论文、GitHub 项目和开源 agent 框架
- AI 产品发布、融资、监管、事故和其他爆点新闻

脚本会从 RSS、Google News RSS、arXiv、GitHub Search、中英文 AI 媒体中收集候选内容，然后调用 DeepSeek 判断价值并生成结构化日报。

这不是 Web 应用，也不是仪表盘。它的目标是每天稳定产出可以直接发布的文件。

## 输出文件

每次运行默认可以生成：

| 输出 | 路径 |
|---|---|
| Markdown 日报 | `daily_news/YYYY-MM-DD-ai-news-digest.md` |
| 微信公众号 HTML | `wechat_articles/YYYY-MM-DD-ai-news-wechat.html` |
| 微信公众号封面图 | `wechat_articles/covers/YYYY-MM-DD-ai-news-cover.png` |
| 本地正文配图 | `wechat_articles/assets/YYYY-MM-DD-ai-news-wechat/` |

最终文章分成两个独立模块：

| 模块 | 来源 |
|---|---|
| 新闻与产业动态 | 媒体、官方博客、Google News RSS |
| 论文与开源项目 | arXiv、GitHub Search、Gitee 相关报道 |

## 为什么要做

AI 新闻很多，但对 agent 开发者真正有价值的信息很分散。

这个项目每天回答一个问题：

> 今天做 AI agent 的人最值得读什么？

筛选重点包括：

- 会影响 agent 架构设计的模型能力变化
- agent 完成真实任务的经验，而不只是 demo
- coding agent、research agent、多智能体、工具调用、MCP、评测等方向
- 有足够信号的开源项目
- 中英文来源，而不是只看海外公司官方博客

## 快速开始

安装依赖：

```powershell
pip install -r requirements.txt
```

创建配置文件：

```powershell
Copy-Item .\.env.example .\.env
```

编辑 `.env`：

```env
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_MODEL=deepseek-v4-flash
```

只抓取候选，不调用 DeepSeek：

```powershell
python .\ai_news_bot.py --dry-run
```

生成当天完整日报、微信公众号 HTML、封面图和配图：

```powershell
python .\ai_news_bot.py
```

生成指定日期：

```powershell
python .\ai_news_bot.py --date 2026-06-08
```

## 常用命令

| 任务 | 命令 |
|---|---|
| 生成完整日报 | `python .\ai_news_bot.py` |
| 预览候选，不调用 DeepSeek | `python .\ai_news_bot.py --dry-run` |
| 使用 3 天检索窗口 | `python .\ai_news_bot.py --days 3` |
| 新闻 15 条，论文/项目 10 条 | `python .\ai_news_bot.py --top-n 15 --research-top-n 10` |
| 增加中文来源数量 | `python .\ai_news_bot.py --min-zh-stories 4` |
| 提高 GitHub star 阈值 | `python .\ai_news_bot.py --github-min-stars 50` |
| 只生成 Markdown | `python .\ai_news_bot.py --skip-wechat` |
| 不自动抓取正文图片 | `python .\ai_news_bot.py --no-fetch-images` |
| 不生成封面图 | `python .\ai_news_bot.py --skip-cover` |
| 使用其他配置文件 | `python .\ai_news_bot.py --env-file .\.env.local` |

## 上传 Markdown 到 GitHub

`upload_daily_md_to_github.py` 会把当天 Markdown 日报上传到：

```text
https://github.com/parkerluxu/Awesome-agent-cases.git
```

预览操作：

```powershell
python .\upload_daily_md_to_github.py --dry-run
```

上传当天日报：

```powershell
python .\upload_daily_md_to_github.py
```

上传指定日期：

```powershell
python .\upload_daily_md_to_github.py --date 2026-06-08
```

上传指定 Markdown 文件：

```powershell
python .\upload_daily_md_to_github.py --source .\daily_news\2026-06-08-ai-news-digest.md
```

脚本会自动识别目标仓库默认分支。如果目标仓库是刚创建的空仓库，还没有任何提交，脚本会默认创建并推送到 `main` 分支。

强制指定分支：

```powershell
python .\upload_daily_md_to_github.py --branch master
```

认证方式：

- 默认使用本机已有的 `git` 登录凭据或凭据管理器。
- 如果设置了 `GITHUB_TOKEN`，脚本会在本次 Git 操作中使用 token，并在输出中遮蔽 token。
- 本地缓存仓库位于 `.github_upload/`，该目录已加入 `.gitignore`。

如果看到：

```text
Local upload repo has uncommitted changes
```

通常说明上一次上传中途失败，缓存仓库里留下了已复制但未提交的文件。可以删除缓存后重跑：

```powershell
Remove-Item .\.github_upload\Awesome-agent-cases -Recurse -Force
python .\upload_daily_md_to_github.py
```

## 微信公众号发布

生成 HTML 后，打开：

```text
wechat_articles/YYYY-MM-DD-ai-news-wechat.html
```

推荐发布流程：

1. 用浏览器打开 HTML 文件。
2. 在浏览器页面中 `Ctrl + A`、`Ctrl + C`。
3. 打开微信公众号后台。
4. 创建新的图文草稿。
5. 点击正文编辑区，`Ctrl + V` 粘贴。
6. 如果微信没有保留本地图片，需要从 `wechat_articles/assets/` 中重新上传对应图片。

注意：不要复制 HTML 源码，要复制浏览器渲染后的页面内容。

## 新闻源

脚本会结合固定源和搜索源。

| 类型 | 示例 |
|---|---|
| 官方/研究博客 | OpenAI、Google DeepMind、Microsoft、NVIDIA、Hugging Face |
| 海外 AI 垂直媒体 | The Decoder、Synced、The Gradient、Import AI、MarkTechPost、Artificial Intelligence News |
| 海外科技媒体 | TechCrunch AI、VentureBeat AI、The Verge AI、MIT Technology Review |
| 中文科技/AI 媒体 | 量子位、InfoQ 中文、开源中国、cnBeta、36氪 |
| 搜索覆盖 | Google News RSS 中英文查询 |
| 论文 | arXiv API |
| 开源项目 | GitHub Search API，通过新闻搜索覆盖 Gitee 相关报道 |

## 工作流程

1. 从 RSS 和 Google News RSS 收集新闻候选。
2. 从 arXiv 收集论文候选。
3. 从 GitHub Search 收集开源项目候选。
4. 按 URL 去重。
5. 根据 `--days` 过滤过旧内容。
6. 用 agent 相关关键词做本地排序。
7. 保留中英文候选来源。
8. 将新闻池和论文/开源项目池分别提交给 DeepSeek。
9. 让 DeepSeek 筛选高价值条目并生成 Markdown。
10. 转换为微信公众号 HTML。
11. 根据当天标题生成封面图。
12. 尝试抓取正文配图。
13. 可选：上传 Markdown 到 GitHub 仓库。

## 项目结构

```text
.
├── ai_news_bot.py                  # 主流程：收集、筛选、生成日报
├── wechat_formatter.py             # Markdown 转微信公众号 HTML
├── cover_generator.py              # 封面图生成
├── upload_daily_md_to_github.py    # 上传 Markdown 到 GitHub
├── daily_news/                     # Markdown 日报
├── wechat_articles/                # 微信 HTML、封面图和配图
├── docs/
│   └── README.zh-CN.md             # 中文文档
├── requirements.txt
└── .env.example
```

## 配置

配置优先级：

```text
命令行参数 > 系统环境变量 > .env > 默认值
```

最小 `.env`：

```env
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_MODEL=deepseek-v4-flash
```

可选 GitHub token：

```env
GITHUB_TOKEN=你的 GitHub token
```

不要把密钥提交到 git。`.env` 已加入忽略规则。

## 注意事项

- RSS 摘要不一定包含全文，日报以候选源能提供的信息为准。
- 某些 RSS 或 Google News 源可能临时失败，脚本会跳过失败源并继续。
- Windows 上如果 Python HTTPS 抓取遇到 SSL EOF，脚本会 fallback 到 `curl.exe`。
- 抓取到的新闻配图可能涉及版权，发布前建议检查来源和使用场景。
- Google News 链接有时是跳转链接，不一定是最终原文链接。

## License

MIT。你可以 fork、改造，并接入自己的内容发布流程。
