# Contributing to Awesome Agent Cases

First of all, thank you for taking the time to contribute! 🎉 This repository is a community-driven knowledge base, and every contribution makes it better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What We're Looking For](#what-were-looking-for)
- [How to Contribute](#how-to-contribute)
- [Content Guidelines](#content-guidelines)
- [Style and Format](#style-and-format)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

Be kind and constructive. Disrespectful or unhelpful communication will not be tolerated. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the full text.

---

## What We're Looking For

We welcome the following types of contributions:

| Type | Examples |
|---|---|
| **High-signal cases** | Real-world AI agent deployments with measurable outcomes |
| **Practical papers** | Research with direct engineering value |
| **Open-source projects** | Tools and frameworks that the community can adopt |
| **Tutorials** | Step-by-step guides that are reproducible |
| **Daily news** | AI agent industry news digests |
| **Corrections** | Fix broken links, outdated info, or typos |
| **Topic collections** | New domain-focused reading guides |

---

## How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/<your-username>/Awesome-agent-cases.git
cd Awesome-agent-cases
```

### 2. Create a Branch

```bash
git checkout -b add/my-contribution
```

### 3. Make Your Changes

Follow the [Content Guidelines](#content-guidelines) and [Style and Format](#style-and-format) below.

### 4. Commit with a Clear Message

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(collections): add multi-agent orchestration case
fix(daily-news): correct broken image link in 2026-07-15 digest
docs(readme): update latest briefs section
```

### 5. Open a Pull Request

Fill out the PR template and link any related issues.

---

## Content Guidelines

### Placement Rules

Before adding content, please read the [content guide](docs/content-guide.md). Key rules:

- **Daily news digests** go in `daily_news/YYYY/MM/` with the naming convention `YYYY-MM-DD-ai-news-digest.md`.
- **Domain collections** go in `collections/<domain>/`. Choose the domain by the task the reader wants to solve, not by resource type.
- **Images** for daily digests go in `daily_news/assets/YYYY-MM-DD-ai-news-digest/`.
- Do **not** create top-level `cases/`, `papers/`, or `projects/` folders — use `indexes/by-content-type.md` for cross-cutting views.

### Entry Quality

Every entry you add should include:

| Field | Example |
|---|---|
| **Title** | "Building a Multi-Agent Customer Support System with CrewAI" |
| **Source link** | A direct, permanent link to the original resource |
| **Resource type** | Case / Tutorial / Project / Paper / News |
| **Relevant topic** | Engineering / Industry / Hardware / Creative / Ecosystem |
| **Why it matters** | 1–3 sentences explaining the practical value |

### Bilingual Support

When possible, maintain both English and Chinese versions using the `.en.md` and `.zh-CN.md` suffix convention.

---

## Style and Format

- Use **Markdown** for all content.
- Keep lines under 120 characters where possible.
- Use relative links for internal references.
- Use sentence case for titles.
- Tables should have clear headers and be scannable.

---

## Submitting Changes

### Pull Request Checklist

- [ ] Content follows the placement rules in `docs/content-guide.md`
- [ ] Each entry includes title, source link, resource type, topic, and "why it matters"
- [ ] Internal links are relative and correct
- [ ] If adding a collection, `collections/README.md`, the domain README, `indexes/by-topic.md`, and relevant content-type indexes are updated
- [ ] If adding a daily digest, `daily_news/README.md` is updated and root READMEs show only the latest seven issues
- [ ] Bilingual versions are maintained when possible
- [ ] Commit messages follow Conventional Commits

---

## Reporting Issues

Found a broken link, outdated information, or have a suggestion?

1. Check [existing issues](https://github.com/parkerluxu/Awesome-agent-cases/issues) to avoid duplicates.
2. Open a new issue and choose the appropriate template.
3. Provide as much context as possible.

---

## Questions?

- Open a [Discussion](https://github.com/parkerluxu/Awesome-agent-cases/discussions) for general questions.
- Visit [Agent Case Share](https://agentcaseshare.cn/) for the online knowledge base.

Thank you for helping make this resource better for the entire AI agent community! 🙏
