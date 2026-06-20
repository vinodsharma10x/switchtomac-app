// Schema.org / JSON-LD builders. Kept in one place so the @id references
// (#person, #website) stay consistent across every page.
import { SITE } from "@/lib/site";
import type { Post, FaqItem } from "@/lib/blog";

const OG_IMAGE = `${SITE.url}/opengraph-image.png`;

export function faqPageLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.author.name,
  url: SITE.author.url,
  sameAs: SITE.author.sameAs,
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  alternateName: "Switch to Mac",
  url: SITE.url,
  description: SITE.description,
  inLanguage: "en",
  creator: { "@id": `${SITE.url}/#person` },
  publisher: { "@id": `${SITE.url}/#person` },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function blogPostingLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    image: OG_IMAGE,
    author: {
      "@type": "Person",
      name: post.author || SITE.author.name,
      url: SITE.author.url,
    },
    publisher: { "@id": `${SITE.url}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
    ...(post.tags && post.tags.length ? { keywords: post.tags.join(", ") } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p"],
    },
  };
}

export function blogLd(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    name: `${SITE.name} notes & tips`,
    url: `${SITE.url}/blog`,
    description:
      "Bite-sized answers to the everyday Mac questions for people coming from Windows.",
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#person` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };
}

export function aboutPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about#aboutpage`,
    url: `${SITE.url}/about`,
    name: `About ${SITE.name}`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#person` },
    inLanguage: "en",
  };
}
