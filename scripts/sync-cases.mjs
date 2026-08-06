import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = (process.env.AGENT_CASE_SHARE_BASE_URL || "https://agentcaseshare.cn").replace(/\/$/, "");
const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CASES_DIR = path.join(ROOT_DIR, "cases");
const CHECK_ONLY = process.argv.includes("--check");
const GENERATED_MARKER = "<!-- GENERATED FROM AGENT CASE SHARE. DO NOT EDIT DIRECTLY. -->";
const SHOWCASE_START = "<!-- CASES_SHOWCASE_START -->";
const SHOWCASE_END = "<!-- CASES_SHOWCASE_END -->";

const difficultyLabels = {
  BEGINNER: "入门",
  INTERMEDIATE: "中级",
  ADVANCED: "高级",
};

async function fetchJson(url) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "Awesome-agent-cases-sync",
        },
        signal: AbortSignal.timeout(20_000),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 500));
      }
    }
  }

  throw new Error(`Failed to fetch ${url}: ${lastError?.message || lastError}`);
}

async function fetchPublishedCases() {
  const summaries = [];

  for (let page = 1; ; page += 1) {
    const url = new URL("/api/tasks", SITE_URL);
    url.searchParams.set("limit", "100");
    url.searchParams.set("page", String(page));
    const payload = await fetchJson(url);
    const items = Array.isArray(payload.items) ? payload.items : [];
    summaries.push(...items.filter((item) => item.status === "PUBLISHED"));

    if (!payload.hasMore && summaries.length >= (payload.total || summaries.length)) break;
    if (items.length === 0) break;
  }

  const details = await mapWithConcurrency(summaries, 4, async (summary) => {
    if (!/^case-[a-z0-9]+$/.test(summary.slug)) {
      throw new Error(`Unsafe or invalid case slug: ${summary.slug}`);
    }

    const payload = await fetchJson(new URL(`/api/tasks/${summary.slug}`, SITE_URL));
    return payload.task || payload;
  });

  return details.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

function absoluteUrl(value) {
  if (!value) return null;
  return new URL(value, SITE_URL).toString();
}

function canonicalUrl(task) {
  return absoluteUrl(task.url || `/tasks/${task.slug}`);
}

function trackedCaseUrl(task, campaign = task.slug) {
  const url = new URL(canonicalUrl(task));
  url.searchParams.set("utm_source", "github");
  url.searchParams.set("utm_medium", "repository");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

function yamlString(value) {
  return JSON.stringify(String(value ?? ""));
}

function markdownText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function inlineText(value) {
  return markdownText(value).replace(/\s+/g, " ");
}

function tableCell(value, maxLength = 140) {
  const text = inlineText(value).replace(/\|/g, "\\|");
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}...` : text;
}

function linkText(value) {
  return inlineText(value).replace(/[\[\]]/g, "");
}

function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toISOString().slice(0, 10);
}

function listLinks(items, getTitle, getUrl) {
  return (items || [])
    .map((item) => {
      const title = linkText(getTitle(item));
      const url = absoluteUrl(getUrl(item));
      return title && url ? `- [${title}](${url})` : null;
    })
    .filter(Boolean);
}

function renderCase(task) {
  const tags = (task.tags || []).map((tag) => tag.name).filter(Boolean);
  const category = task.category?.name || task.industry || "其他";
  const difficulty = difficultyLabels[task.difficulty] || task.difficulty || "未标注";
  const relatedLinks = [
    ...listLinks(task.articles, (item) => item.title, (item) => item.url),
    ...listLinks(task.repositories, (item) => item.name || item.title || item.url, (item) => item.url),
    ...listLinks(task.reusableAssets, (item) => item.title, (item) => item.url),
  ];
  const sections = [
    ["要解决的问题", task.problem],
    ["实现方案", task.solution],
    ["Agent 工作流", task.workflow],
    ["效果与复盘", task.impact],
  ]
    .filter(([, value]) => markdownText(value))
    .map(([heading, value]) => `## ${heading}\n\n${markdownText(value)}`)
    .join("\n\n");

  const tagYaml = tags.length > 0 ? `\n${tags.map((tag) => `  - ${yamlString(tag)}`).join("\n")}` : " []";
  const resourceSection = relatedLinks.length > 0 ? `\n\n## 关联资源\n\n${relatedLinks.join("\n")}` : "";

  return `---
id: ${yamlString(task.slug)}
title: ${yamlString(task.title)}
canonical_url: ${yamlString(canonicalUrl(task))}
category: ${yamlString(category)}
difficulty: ${yamlString(task.difficulty || "")}
author: ${yamlString(task.author?.name || "")}
updated_at: ${yamlString(task.updatedAt || "")}
tags:${tagYaml}
---

${GENERATED_MARKER}

# ${markdownText(task.title)}

> ${inlineText(task.summary || task.problem || "查看完整案例了解实现过程与复用资源。")}

[在 Agent Case Share 查看完整案例、文章和可复用资产](${trackedCaseUrl(task)})

${sections}

## 案例信息

| 字段 | 内容 |
|---|---|
| 分类 | ${tableCell(category)} |
| 难度 | ${tableCell(difficulty)} |
| 作者 | ${tableCell(task.author?.name || "-")} |
| 工具与技术栈 | ${tableCell(task.agentStack || "未标注", 220)} |
| 标签 | ${tableCell(tags.join("、") || "-")} |
| 案例 ID | \`${task.slug}\` |
| 最后更新 | ${formatDate(task.updatedAt)} |${resourceSection}

---

本页是 [Agent Case Share](${SITE_URL}) 公开案例的摘要镜像。网站是内容权威来源，完整正文、附件、评论和最新状态以网站为准。
`;
}

function renderIndex(tasks) {
  const latestUpdate = tasks.map((task) => task.updatedAt).filter(Boolean).sort().at(-1);
  const rows = tasks.map((task) => {
    const category = task.category?.name || task.industry || "其他";
    const difficulty = difficultyLabels[task.difficulty] || task.difficulty || "-";
    return `| [${linkText(task.title)}](${task.slug}.md) | ${tableCell(task.summary || task.problem)} | ${tableCell(category)} | ${tableCell(task.agentStack || "-")} | ${difficulty} | [完整案例](${trackedCaseUrl(task, "case-directory")}) |`;
  });

  return `# Agent 案例目录

${GENERATED_MARKER}

这里收录 Agent Case Share 已公开案例的 GitHub 摘要版本，便于检索、引用和快速判断是否值得复用。完整文章、附件、可复用资产和最新状态请进入对应网站页面查看。

- 已同步案例：**${tasks.length}**
- 内容更新时间：**${formatDate(latestUpdate)}**
- [在网站搜索全部案例](${SITE_URL}/tasks?utm_source=github&utm_medium=repository&utm_campaign=case-directory)
- [发布你的 Agent 案例](${SITE_URL}/publish?utm_source=github&utm_medium=repository&utm_campaign=case-directory)

| 案例 | 简介 | 分类 | 工具与技术栈 | 难度 | 网站 |
|---|---|---|---|---|---|
${rows.join("\n")}

## 同步说明

这些 Markdown 文件由 \`scripts/sync-cases.mjs\` 从 Agent Case Share 公开 API 生成，请勿直接编辑。案例内容需要在网站完成创建或修改，发布后会自动同步到这里。
`;
}

function renderShowcase(tasks, chinese = false) {
  const selected = tasks.slice(0, 6);
  const prefix = chinese ? "../cases/" : "cases/";
  const rows = selected.map((task) => {
    const difficulty = difficultyLabels[task.difficulty] || task.difficulty || "-";
    return `| [${linkText(task.title)}](${prefix}${task.slug}.md) | ${tableCell(task.summary || task.problem)} | ${difficulty} |`;
  });

  if (chinese) {
    return `${SHOWCASE_START}

网站已发布案例会自动同步为简明 Markdown，方便在 GitHub 中检索、引用和快速阅读。

| 案例 | 简介 | 难度 |
|---|---|---|
${rows.join("\n")}

[浏览全部 ${tasks.length} 个案例](../cases/README.md) · [在网站搜索案例](${SITE_URL}/tasks?utm_source=github&utm_medium=repository&utm_campaign=readme-zh)

${SHOWCASE_END}`;
  }

  return `${SHOWCASE_START}

Published cases are synchronized as concise Markdown summaries for discovery, citation, and reuse.

| Case | What it covers | Difficulty |
|---|---|---|
${rows.join("\n")}

[Browse all ${tasks.length} cases](cases/README.md) · [Search on Agent Case Share](${SITE_URL}/tasks?utm_source=github&utm_medium=repository&utm_campaign=readme)

${SHOWCASE_END}`;
}

function replaceShowcase(source, replacement, filePath) {
  const start = source.indexOf(SHOWCASE_START);
  const end = source.indexOf(SHOWCASE_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`Missing case showcase markers in ${filePath}`);
  }

  return `${source.slice(0, start)}${replacement}${source.slice(end + SHOWCASE_END.length)}`;
}

async function readOptional(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function reconcileFile(filePath, content, changed) {
  const normalized = content.endsWith("\n") ? content : `${content}\n`;
  const current = await readOptional(filePath);
  if (current === normalized) return;

  changed.push(path.relative(ROOT_DIR, filePath).replaceAll("\\", "/"));
  if (!CHECK_ONLY) {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, normalized, "utf8");
  }
}

async function removeStaleCases(validSlugs, changed) {
  const entries = await readdir(CASES_DIR, { withFileTypes: true }).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".md") || entry.name === "README.md") continue;
    const slug = entry.name.slice(0, -3);
    if (validSlugs.has(slug)) continue;

    const filePath = path.join(CASES_DIR, entry.name);
    const content = await readFile(filePath, "utf8");
    if (!content.includes(GENERATED_MARKER)) continue;

    changed.push(path.relative(ROOT_DIR, filePath).replaceAll("\\", "/"));
    if (!CHECK_ONLY) await unlink(filePath);
  }
}

async function main() {
  const tasks = await fetchPublishedCases();
  if (tasks.length === 0) throw new Error("The public API returned no published cases; refusing to overwrite the case directory.");

  const changed = [];
  await reconcileFile(path.join(CASES_DIR, "README.md"), renderIndex(tasks), changed);

  for (const task of tasks) {
    await reconcileFile(path.join(CASES_DIR, `${task.slug}.md`), renderCase(task), changed);
  }

  await removeStaleCases(new Set(tasks.map((task) => task.slug)), changed);

  const readmePath = path.join(ROOT_DIR, "README.md");
  const readme = await readFile(readmePath, "utf8");
  await reconcileFile(readmePath, replaceShowcase(readme, renderShowcase(tasks), "README.md"), changed);

  const chineseReadmePath = path.join(ROOT_DIR, "docs", "README.zh-CN.md");
  const chineseReadme = await readFile(chineseReadmePath, "utf8");
  await reconcileFile(chineseReadmePath, replaceShowcase(chineseReadme, renderShowcase(tasks, true), "docs/README.zh-CN.md"), changed);

  if (CHECK_ONLY && changed.length > 0) {
    console.error(`Case mirrors are out of date:\n${changed.map((file) => `- ${file}`).join("\n")}`);
    process.exitCode = 1;
    return;
  }

  console.log(changed.length > 0 ? `Updated ${changed.length} case mirror file(s).` : `All ${tasks.length} case mirrors are current.`);
}

await main();
