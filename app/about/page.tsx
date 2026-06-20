import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Switch exists, who it's for, and how to contribute. Open source under the MIT License.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
      <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
        About
      </span>
      <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
        A gentler way to switch
      </h1>

      <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">
        {SITE.name} exists for one reason: moving from Windows to a MacBook shouldn't mean
        a week of frustration over where the controls went. Years ago, sites like this one
        made that transition painless for a lot of us — so this is that, rebuilt, kept
        current, and given away.
      </p>
      <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-2">
        Everything here is checked against Apple's own documentation for{" "}
        {SITE.macOS} and written in plain language — accurate first, clever second.
      </p>

      <h2 className="mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]">
        It's open source
      </h2>
      <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-2">
        The whole site is on{" "}
        <a href={SITE.repo} target="_blank" rel="noreferrer" className="font-medium text-accent-ink underline underline-offset-2">
          GitHub
        </a>{" "}
        under the MIT License. Found a shortcut that's wrong, or one we're missing? Want to
        add a guide, a video, or a post? Contributions are welcome.
      </p>

      <h2 className="mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]">
        How it's organized
      </h2>
      <ul className="mt-4 space-y-3 text-[16.5px] leading-[1.7] text-ink-2">
        <li>
          <b className="text-ink">Shortcuts and guides</b> live in one data file
          (<code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">lib/shortcuts.ts</code>).
          Add an entry and it appears everywhere automatically.
        </li>
        <li>
          <b className="text-ink">Blog posts</b> are Markdown files in{" "}
          <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">content/blog</code>.
          Drop in a new <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">.mdx</code> file and it publishes.
        </li>
        <li>
          <b className="text-ink">Videos</b> are a short list in{" "}
          <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">lib/videos.ts</code> — just paste a YouTube ID.
        </li>
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/shortcuts" className="rounded-xl bg-ink px-5 py-3 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-0.5">
          Open the reference
        </Link>
        <a href={SITE.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-line-2 bg-surface px-5 py-3 text-[14.5px] font-semibold text-ink-2 transition-colors hover:border-accent hover:text-accent-ink">
          Contribute on GitHub ↗
        </a>
      </div>

      <p className="mt-12 font-mono text-[12.5px] tracking-wide text-faint">
        © 2026 Vinod Sharma
      </p>
    </div>
  );
}
