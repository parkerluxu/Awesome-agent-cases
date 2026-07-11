# Content Guide

## Placement Rules

- Put a dated news digest in `daily_news/YYYY/MM/` using `YYYY-MM-DD-ai-news-digest.md`.
- Store images for a daily digest in `daily_news/assets/YYYY-MM-DD-ai-news-digest/`. From a dated digest, reference them with `../../assets/...`.
- Put an enduring, domain-focused guide in `collections/<domain>/`. Choose the domain by the task the reader wants to solve, not by whether the guide happens to include a case, project, tutorial, or paper.
- Do not create top-level `cases/`, `papers/`, or `projects/` folders. Use `indexes/by-content-type.md` to provide those cross-cutting views.

## Collection Metadata

At the top of a new collection, include its scope, intended reader, and a `Last updated: YYYY-MM-DD` line. Keep bilingual versions adjacent with `.en.md` and `.zh-CN.md` suffixes when both are maintained.

## Index Maintenance

When adding a collection, update `collections/README.md`, its domain README, `indexes/by-topic.md`, and any applicable entry in `indexes/by-content-type.md`. When adding a daily digest, update `daily_news/README.md` and keep only the latest seven issues in the root READMEs.

## 内容维护规范

- 日报放入 `daily_news/YYYY/MM/`，命名为 `YYYY-MM-DD-ai-news-digest.md`。
- 日报配图放入 `daily_news/assets/YYYY-MM-DD-ai-news-digest/`；从归档后的日报引用图片时使用 `../../assets/...`。
- 长期专题放入 `collections/<domain>/`，按读者要解决的任务领域归类，而不是按其中是否包含案例、项目、教程或论文归类。
- 不再新建顶层 `cases/`、`papers/`、`projects/`；跨类型入口统一维护在 `indexes/by-content-type.md`。
- 新增专题时，同时更新 `collections/README.md`、对应领域 README、`indexes/by-topic.md` 与必要的内容类型索引；新增日报时更新 `daily_news/README.md`，根首页仅保留最近七期。
