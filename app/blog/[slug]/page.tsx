import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPost, getAllSlugs, formatDate } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";
import JsonLd from "@/components/JsonLd";
import { blogPostingLd, breadcrumbLd, faqPageLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const path = `/blog/${params.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE.url}${path}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || SITE.author.name],
      tags: post.tags,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <article className="max-w-[720px]">
      <JsonLd
        data={[
          blogPostingLd(post),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faq && post.faq.length ? [faqPageLd(post.faq)] : []),
        ]}
      />
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
          options={{ blockJS: false, mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {post.faq && post.faq.length > 0 && (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em]">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-line">
            {post.faq.map((item, i) => (
              <div key={i} className="py-4">
                <h3 className="font-display text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
                  {item.q}
                </h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      </article>
    </div>
  );
}
