import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllSlugs, formatDate } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-5 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-muted hover:text-accent-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H6" />
          <path d="M11 18l-6-6 6-6" />
        </svg>
        All posts
      </Link>

      <header className="mt-6 border-b border-line pb-8">
        <div className="flex items-center gap-3 font-mono text-[12px] text-faint">
          <time>{formatDate(post.date)}</time>
          {post.author && (
            <>
              <span className="h-1 w-1 rounded-full bg-line-2" />
              <span>{post.author}</span>
            </>
          )}
        </div>
        <h1 className="mt-3 font-display text-[clamp(28px,5vw,40px)] font-bold leading-[1.1] tracking-[-0.025em]">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-3 text-[17px] leading-relaxed text-muted">{post.excerpt}</p>
        )}
      </header>

      <div className="mt-2">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{ blockJS: false }}
        />
      </div>
    </article>
  );
}
