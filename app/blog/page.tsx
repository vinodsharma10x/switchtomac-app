import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: tips for new Mac users",
  description:
    "Short, practical answers to the everyday Mac questions that come up after years on Windows.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <header className="mb-8">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Blog
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          Notes &amp; tips
        </h1>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          Bite-sized answers to the everyday Mac questions for people coming from Windows.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line-2 bg-surface p-9 text-center text-[15px] text-muted">
          No posts yet. Add an <code className="font-mono text-ink">.mdx</code> file in{" "}
          <code className="font-mono text-ink">content/blog</code>.
        </div>
      ) : (
        <div className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
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
    </div>
  );
}
