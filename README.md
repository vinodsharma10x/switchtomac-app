# Switch — From Windows to Mac, without the friction

A free, open-source guide for people moving from a Windows PC to a Mac.

**Live:** [switchtomac.app](https://switchtomac.app)

> Almost every Windows shortcut works on a MacBook. You just press **Command (⌘)** where you used to press **Ctrl**. Your fingers already know the shortcuts, you just need to know which keys moved.

---

## What's inside

- **The shortcut cheat sheet** — every Windows keyboard shortcut next to its Mac equivalent, searchable and grouped by category (home page).
- **Trackpad gestures** — the ten Mac trackpad gestures to learn first, as diagrams (home page).
- **Blog** — short, single-question posts for people switching, with search, tag filtering, and per-post FAQs. The everyday how-to guides (right-click, screenshots, where downloads go) live here too as a searchable post.
- **Videos** — a curated set of YouTube walkthroughs.

All shortcut and guide data is verified against Apple's documentation for **macOS Tahoe (macOS 26)**.

Plus: **dark mode**, full **SEO** (sitemap, robots, JSON-LD, per-post OpenGraph images, RSS) and **GEO** (`llms.txt` / `llms-full.txt`), optional **GTM analytics** with GDPR consent, and **Privacy / Terms** pages.

---

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) · React 18 · TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (class-based dark mode via CSS-variable color tokens)
- [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) v6 + [`gray-matter`](https://github.com/jonschlinkert/gray-matter), with [`remark-gfm`](https://github.com/remarkjs/remark-gfm) (tables) and [`rehype-slug`](https://github.com/rehypejs/rehype-slug) (heading anchors)
- `next/og` `ImageResponse` for per-post share images
- Deployed on [Vercel](https://vercel.com/)

---

## Getting started

```bash
git clone https://github.com/vinodsharma10x/switchtomac-app.git
cd switchtomac-app
npm install
npm run dev          # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

---

## Project structure

```
app/
  page.tsx                 Home: hero + three keys + cheat sheet + trackpad gestures
  blog/
    page.tsx               Blog index (search + tag filtering)
    [slug]/page.tsx        A post (renders body, FAQ section, JSON-LD)
    [slug]/opengraph-image.tsx   Per-post share card
  videos/  about/          Videos, About
  privacy/ terms/          Legal pages
  sitemap.ts  robots.ts    SEO
  llms.txt/  llms-full.txt/  GEO (LLM-readable content)
  feed.xml/                RSS feed
  layout.tsx               Root metadata, GTM, consent banner, dark-mode no-flash script
components/                ShortcutTable, GuidesGrid, GesturesGrid, EverydayGuides,
                           BlogList, Keycap, Hero, Header, Footer, JsonLd,
                           GoogleTagManager, ConsentBanner, mdx-components, ...
content/blog/*.mdx         Blog posts
lib/
  shortcuts.ts             THE DATA: shortcuts, guides, modifier-key swaps
  videos.ts                Curated videos
  site.ts                  Brand + site config
  schema.ts                JSON-LD builders
  blog.ts                  MDX loading helpers
```

---

## Editing content

Everything is data-driven. Change the data, and the pages, search, sitemap, RSS, and `llms-full.txt` all update.

**Add a shortcut or a guide** — edit [`lib/shortcuts.ts`](lib/shortcuts.ts):

```ts
// A shortcut row (shows in the cheat sheet)
{ c: "essentials", a: "Copy", w: ["Ctrl", "C"], m: ["⌘", "C"] }

// An everyday guide (shows in the everyday-things post)
{ c: "files", t: "Where did my download go?", win: "Downloads folder",
  m: "Dock & Finder sidebar", how: "Downloads land in the Downloads folder..." }
```

**Add a blog post** — drop a `.mdx` file in [`content/blog/`](content/blog/):

```mdx
---
title: "Your post title"
date: "2026-06-20"
excerpt: "One-line summary for the list, SEO, and the share card."
author: "Vinod Sharma"
tags: ["basics"]            # one of: basics, keyboard, everyday, setup
faq:                        # optional — renders an FAQ section + FAQPage schema
  - q: "A common question?"
    a: "A short, direct answer."
---

Your content. Markdown tables work, and you can use components inline:
<KeyCombo spec={["⌘", "C"]} mac />, <GesturesGrid />, <EverydayGuides />.
```

**Add a video** — paste a YouTube ID into [`lib/videos.ts`](lib/videos.ts).

**Site-wide settings** (name, URL, author/social, macOS version) live in [`lib/site.ts`](lib/site.ts).

---

## SEO & GEO

Built in:

- `sitemap.xml` and `robots.txt` (allows Google and all major AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and more)
- JSON-LD structured data: WebSite, Person, BlogPosting, Blog, BreadcrumbList, AboutPage, and **FAQPage** (per post, from the `faq` frontmatter)
- Per-page canonicals + OpenGraph/Twitter metadata, and **per-post generated OG images**
- Heading anchor IDs on posts, and `feed.xml` (RSS 2.0)
- **`llms.txt` and `llms-full.txt`** — LLM-readable summaries, including the full Windows→Mac shortcut tables and guides, so AI assistants can cite accurate answers.

---

## Analytics & consent (optional)

Analytics is off unless you provide a Google Tag Manager container. Everything else (GA4, Clarity, etc.) is configured inside GTM, not in code.

```bash
# .env.local (or Vercel env vars)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

When set, the site loads GTM with **Consent Mode v2** and a lightweight cookie-consent banner (analytics defaults to denied in the EEA/UK/CH until accepted). When unset, no analytics and no banner load.

---

## Deployment

Deploys to Vercel from `main`. Set `NEXT_PUBLIC_GTM_ID` in the project's environment variables (it is inlined at build time, so it applies on the next deploy).

---

## Contributing

Found a shortcut that's wrong, or one that's missing? Want to add a guide, a video, or a post? Open an issue or a pull request.

---

## License

[MIT](LICENSE). Use it, fork it, share it.

A website by [Vinod Sharma](https://vinodsharma.ai).
