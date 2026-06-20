"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV } from "@/lib/site";

function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.9c-2.93.64-3.55-1.25-3.55-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.79 0 0 .89-.28 2.9 1.08a10 10 0 0 1 5.28 0c2-1.36 2.9-1.08 2.9-1.08.57 1.45.21 2.52.1 2.79.68.74 1.08 1.68 1.08 2.83 0 4.04-2.47 4.93-4.82 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

// Icon visibility is driven purely by the .dark class on <html>, so it stays
// correct on first paint without React state (no hydration flicker).
function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`grid h-9 w-9 place-items-center rounded-lg text-ink-2 transition-colors hover:bg-bg-soft hover:text-ink ${className}`}
    >
      <svg className="block h-[18px] w-[18px] dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg className="hidden h-[18px] w-[18px] dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] max-w-content items-center gap-6 px-5 sm:px-6">
        <Link href="/" className="flex flex-none items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-line-2 bg-gradient-to-b from-white to-[#eef1f7] font-mono text-[16px] text-accent-ink shadow-[0_1px_0_#c7cdd7,inset_0_1px_0_#fff] dark:from-[#262c36] dark:to-[#1b2028] dark:shadow-[0_1px_0_#0f1318,inset_0_1px_0_rgba(255,255,255,0.05)]">
            ⌘
          </span>
          <span className="font-display text-[18px] font-bold tracking-tight">
            {SITE.name}
            <span className="text-accent-ink">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-[14.5px] font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-bg-soft text-ink"
                  : "text-ink-2 hover:text-accent-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.repo}
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
            className="ml-1 grid h-9 w-9 place-items-center rounded-lg text-ink-2 transition-colors hover:bg-bg-soft hover:text-ink"
          >
            <GitHubIcon />
          </a>
          <ThemeToggle />
        </nav>

        <ThemeToggle className="ml-auto md:hidden" />

        {/* Mobile toggle */}
        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-ink-2 hover:bg-bg-soft md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-bg px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                isActive(item.href) ? "bg-bg-soft text-ink" : "text-ink-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.repo}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-2"
          >
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
}
