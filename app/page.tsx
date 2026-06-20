import Link from "next/link";
import Hero from "@/components/Hero";
import ModifierPrimer from "@/components/ModifierPrimer";
import GuidesGrid from "@/components/GuidesGrid";
import { SHORTCUTS, TASKS } from "@/lib/shortcuts";
import { getAllPosts } from "@/lib/blog";
import { VIDEOS } from "@/lib/videos";

function CardArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const posts = getAllPosts();

  const cards = [
    {
      href: "/shortcuts",
      title: "The full reference",
      desc: "Every Windows shortcut, translated to its Mac equivalent. Searchable and grouped by what you're doing.",
      meta: `${SHORTCUTS.length} shortcuts`,
    },
    {
      href: "/blog",
      title: "Articles",
      desc: "Longer reads and tips for getting comfortable on macOS, written for people coming from Windows.",
      meta: `${posts.length} post${posts.length === 1 ? "" : "s"}`,
    },
    {
      href: "/videos",
      title: "Videos worth watching",
      desc: "A short, curated set of walkthroughs from people who explain the switch well.",
      meta: `${VIDEOS.length} picks`,
    },
  ];

  return (
    <>
      <Hero />
      <ModifierPrimer />

      <section className="mx-auto max-w-content px-5 pb-16 sm:px-6">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Guides
        </span>
        <h2 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          How to do the everyday things
        </h2>
        <p className="mt-3 max-w-[60ch] text-[16px] text-ink-2">
          The actions that don't map to a single key — right-clicking, recording your
          screen, finding where a download went.
        </p>
        <div className="mt-8">
          <GuidesGrid tasks={TASKS} />
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 pb-16 sm:px-6">
        <h2 className="font-display text-[clamp(22px,3.4vw,30px)] font-semibold tracking-[-0.02em]">
          Where to go next
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-line-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-ink">
                  {c.meta}
                </span>
                <CardArrow />
              </div>
              <h3 className="mt-3 font-display text-[19px] font-semibold tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
