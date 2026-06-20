"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Post } from "@/lib/blog";

// Inlined so this client component doesn't pull lib/blog's fs import.
function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(+d)) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = posts.filter((p) => {
    const tagMatch = active === "all" || (p.tags || []).includes(active);
    const textMatch =
      q === "" ||
      `${p.title} ${p.excerpt} ${(p.tags || []).join(" ")}`.toLowerCase().includes(q);
    return tagMatch && textMatch;
  });

  const pills = [{ id: "all", label: "All posts" }, ...tags.map((t) => ({ id: t, label: t }))];

  return (
    <>
      <div className="relative mb-4 max-w-[460px]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts, for example screenshot, Finder, backup"
          aria-label="Search posts"
          className="h-11 w-full rounded-xl border border-line-2 bg-surface pl-10 pr-4 text-[14.5px] outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_4px_rgba(47,107,255,0.18)]"
        />
      </div>

      {tags.length > 0 && (
        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
          {pills.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex-none whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-medium capitalize transition-colors ${
                active === p.id
                  ? "border-ink bg-ink text-bg"
                  : "border-line-2 bg-surface text-ink-2 hover:border-accent hover:text-accent-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line-2 bg-surface p-9 text-center text-[15px] text-muted">
          No posts match.
        </div>
      ) : (
        <div className="divide-y divide-line border-y border-line">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-6">
              <div className="flex items-center gap-3 font-mono text-[12px] text-faint">
                <time>{formatDate(post.date)}</time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-line-2" />
                    <span className="uppercase tracking-[0.08em]">{post.tags[0]}</span>
                  </>
                )}
              </div>
              <h2 className="mt-2 font-display text-[22px] font-semibold tracking-[-0.015em] transition-colors group-hover:text-accent-ink">
                {post.title}
              </h2>
              <p className="mt-1.5 max-w-[68ch] text-[15.5px] leading-relaxed text-ink-2">
                {post.excerpt}
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-ink">
                Read
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h13" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
