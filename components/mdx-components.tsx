import React from "react";
import Link from "next/link";
import { KeyCombo } from "@/components/Keycap";
import TaskCard from "@/components/TaskCard";
import YouTube from "@/components/YouTube";

// A simple callout box usable in posts: <Callout>…</Callout>
function Callout({ children, type = "tip" }: { children: React.ReactNode; type?: string }) {
  const label = type === "warn" ? "Heads up" : "Tip";
  return (
    <div className="my-6 rounded-xl border border-line bg-bg-soft px-4 py-3.5 text-[15px] text-ink-2">
      <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-ink">
        {label}
      </span>
      {children}
    </div>
  );
}

export const mdxComponents = {
  h1: (p: any) => (
    <h1 className="mt-10 font-display text-[30px] font-bold tracking-[-0.02em]" {...p} />
  ),
  h2: (p: any) => (
    <h2 className="mt-10 font-display text-[24px] font-semibold tracking-[-0.02em]" {...p} />
  ),
  h3: (p: any) => (
    <h3 className="mt-8 font-display text-[19px] font-semibold tracking-[-0.01em]" {...p} />
  ),
  p: (p: any) => <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-2" {...p} />,
  ul: (p: any) => <ul className="mt-4 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2" {...p} />,
  ol: (p: any) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-[16.5px] leading-[1.7] text-ink-2" {...p} />,
  li: (p: any) => <li className="pl-1" {...p} />,
  a: ({ href = "", ...rest }: any) => {
    const external = href.startsWith("http");
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className="font-medium text-accent-ink underline underline-offset-2" {...rest} />
    ) : (
      <Link href={href} className="font-medium text-accent-ink underline underline-offset-2" {...rest} />
    );
  },
  blockquote: (p: any) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 text-[16.5px] italic text-muted" {...p} />
  ),
  hr: () => <hr className="my-10 border-line" />,
  strong: (p: any) => <strong className="font-semibold text-ink" {...p} />,
  code: (p: any) => (
    <code className="rounded-md bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink" {...p} />
  ),
  pre: (p: any) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-line bg-[#0f1117] p-4 font-mono text-[13.5px] leading-relaxed text-[#e6e8ee]" {...p} />
  ),
  table: (p: any) => (
    <div className="my-6 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full border-collapse text-[14.5px]" {...p} />
    </div>
  ),
  thead: (p: any) => <thead className="bg-bg-soft" {...p} />,
  th: (p: any) => (
    <th className="border-b border-line px-4 py-2.5 text-left font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint" {...p} />
  ),
  td: (p: any) => (
    <td className="border-t border-line px-4 py-2.5 align-top text-ink-2" {...p} />
  ),
  // custom components for use inside posts:
  KeyCombo,
  TaskCard,
  YouTube,
  Callout,
};
