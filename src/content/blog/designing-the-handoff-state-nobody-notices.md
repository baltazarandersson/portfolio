---
title: 'Sample post: the handoff state nobody notices'
description: 'A deliberately complete sample article used to test the blog engine with Markdown, metadata, tables, code, quotes, and custom HTML.'
publishedAt: 2026-06-02
readingTime: 8 min read
language: en
translationKey: handoff-state
tags:
  - Sample post
  - Blog engine test
  - Markdown showcase
  - UI tradeoffs
heroImage: /images/og/handoff-state-en.webp
---

This post is intentionally a sample. It keeps the product-writing theme, but its real job is to act as a compact regression fixture for the blog system: metadata, typography, spacing, code, tables, quotes, custom HTML, and the EN/ES switcher all have something concrete to render.

## Context

The first version of the handoff screen tried to explain every system event. It was accurate, but the operators using it only needed to know whether a task was ready, blocked, or waiting on someone else.

We kept the blog format close to Markdown because the same constraint helps product notes: fewer presentation choices, more attention on the decision.

### What this sample covers

The article is also a compact checklist for the content layer:

- Frontmatter with title, description, tags, date, reading time, language, and `translationKey`.
- Standard prose with paragraphs, links, inline code, and semantic headings.
- Lists, numbered steps, quotes, code blocks, a table, a horizontal rule, and a local figure.
- A matching Spanish translation, so the language switcher only appears when both versions exist.

If a future change breaks one of those pieces, this post should make the problem obvious before a real post depends on it.

## The decision

The revised screen groups work by status and moves uncommon cases behind a secondary link. The main action stays visible, while `needs-review` remains a useful internal state instead of user-facing copy.

- Keep the daily view focused on the next operational step.
- Use status labels that match how support talks to customers.
- Move audit details into a quiet, scan-friendly secondary area.

> A good handoff state should feel obvious enough that nobody remembers learning it.

### Numbered flow

The same idea can be read as an operating flow:

1. Show the current status in the queue.
2. Keep the next action visible without opening a detail view.
3. Let support inspect the activity log only when the case needs it.

That flow is intentionally plain. The blog should make plain writing feel designed, not under-built. Internal links such as [the blog index](/blog/) should inherit the same readable treatment as links inside the prose.

## Tradeoffs

The simpler view hides some diagnostic detail. That cost is acceptable because the support team reaches for diagnostics after a problem is reported, not while sorting the morning queue.

```yaml
status: ready
primaryAction: 'Send confirmation'
secondaryDetail: 'View activity log'
visibleTo: operations
auditTrail: muted
```

And a minimal TypeScript shape for the same state:

```ts
type HandoffStatus = 'ready' | 'blocked' | 'waiting'

const nextActionByStatus: Record<HandoffStatus, string> = {
	ready: 'Send confirmation',
	blocked: 'Review issue',
	waiting: 'Check later'
}
```

<figure class="not-prose my-8 overflow-hidden rounded-[1.75rem] border border-border bg-surface-muted/65 shadow-sm backdrop-blur-md dark:border-indigo-50/10 dark:bg-zinc-950/40 sm:my-10">
	<div class="border-b border-border/80 bg-gradient-to-br from-primary/10 via-surface-elevated/70 to-surface-muted/90 px-5 py-6 dark:border-indigo-50/10 dark:from-primary/15 dark:via-zinc-950/30 dark:to-zinc-950/60 sm:px-6 sm:py-7 lg:px-7">
		<p class="font-heming text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted dark:text-zinc-400">Article visual fixture</p>
		<div class="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
			<div class="max-w-2xl">
				<p class="font-heming text-2xl leading-tight text-foreground dark:text-indigo-50">Visible state, clear action, audit in the background</p>
				<p class="mt-2 text-sm leading-6 text-muted dark:text-indigo-100/70">A local fixture with the same rhythm, surfaces, and spacing used by the newer light-mode layout.</p>
			</div>
			<p class="inline-flex w-fit items-center rounded-full border border-border bg-surface-elevated/80 px-3.5 py-1.5 font-heming text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary dark:border-zinc-800 dark:bg-zinc-950/35">Handoff mock</p>
		</div>
	</div>
	<div class="grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,0.95fr)] lg:p-7">
		<div class="rounded-2xl border border-border bg-surface-elevated/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/35 sm:p-6">
			<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">Status</p>
			<p class="mt-3 font-heming text-xl leading-tight text-foreground dark:text-indigo-50">Ready to send</p>
			<p class="mt-3 text-sm leading-6 text-muted dark:text-zinc-400">The interface shows the outcome of the flow without explaining the full history.</p>
			<div class="mt-5 border-t border-border/80 pt-4 dark:border-zinc-800">
				<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted dark:text-zinc-400">Next step</p>
				<p class="mt-1 text-sm font-medium text-foreground dark:text-zinc-200">Send confirmation</p>
			</div>
		</div>
		<div class="rounded-2xl border border-border bg-surface-elevated/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/35 sm:p-6">
			<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">Waiting</p>
			<p class="mt-3 font-heming text-xl leading-tight text-foreground dark:text-indigo-50">Waiting on approval</p>
			<p class="mt-3 text-sm leading-6 text-muted dark:text-zinc-400">The state stays easy to scan even when there is nothing to execute yet.</p>
			<div class="mt-5 border-t border-border/80 pt-4 dark:border-zinc-800">
				<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted dark:text-zinc-400">Follow-up</p>
				<p class="mt-1 text-sm font-medium text-foreground dark:text-zinc-200">Check again in 2 hours</p>
			</div>
		</div>
		<div class="rounded-2xl border border-border bg-surface-elevated/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/35 sm:p-6">
			<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">Audit</p>
			<p class="mt-3 font-heming text-xl leading-tight text-foreground dark:text-indigo-50">Muted activity log</p>
			<p class="mt-3 text-sm leading-6 text-muted dark:text-zinc-400">The detail exists, but it does not compete with the current operational choice.</p>
			<div class="mt-5 border-t border-border/80 pt-4 dark:border-zinc-800">
				<p class="font-heming text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted dark:text-zinc-400">Latest intervention</p>
				<p class="mt-1 text-sm font-medium text-foreground dark:text-zinc-200">Reviewed by operations</p>
			</div>
		</div>
	</div>
	<figcaption class="border-t border-border/80 px-5 py-3 text-sm text-muted dark:border-indigo-50/10 dark:text-indigo-100/60">
		Raw HTML inside Markdown lets the article carry a styled visual test without relying on external images.
	</figcaption>
</figure>

## Final shape

The final direction favors readable defaults and small escape hatches. The table below summarizes the practical split between the visible interface and supporting details.

| Area         | Visible copy           | Detail level | Blog feature checked |
| ------------ | ---------------------- | ------------ | -------------------- |
| Queue        | Ready to send          | Low          | Table layout         |
| Task detail  | Waiting on approval    | Medium       | Inline code nearby   |
| Activity log | Reviewed by operations | High         | Long-form scanning   |

### Why keep this post around

This article is not trying to be profound. It is a useful fixture for the portfolio: a real route with translated content, enough Markdown variety to expose styling regressions, and just enough product narrative to avoid feeling like lorem ipsum.

---

If the blog engine changes in the future, this post should be the first one to open, skim, and compare.
