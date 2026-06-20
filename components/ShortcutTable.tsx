"use client";

import { useMemo, useState } from "react";
import { KeyCombo } from "@/components/Keycap";
import type { Cat, Shortcut, KeySpec } from "@/lib/shortcuts";

function flatten(spec: KeySpec) {
  return typeof spec === "string" ? spec : spec.join(" ");
}

function searchText(s: Shortcut) {
  return `${s.a} ${s.kw ?? ""} ${flatten(s.w)} ${flatten(s.m)} ${s.n ?? ""}`.toLowerCase();
}

function RowArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-faint">
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export default function ShortcutTable({
  cats,
  shortcuts,
}: {
  cats: Cat[];
  shortcuts: Shortcut[];
}) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    return cats
      .map((cat) => ({
        cat,
        rows: shortcuts.filter(
          (s) =>
            s.c === cat.id &&
            (activeCat === "all" || s.c === activeCat) &&
            (q === "" || searchText(s).includes(q))
        ),
      }))
      .filter((g) => g.rows.length > 0);
  }, [cats, shortcuts, activeCat, q]);

  const total = groups.reduce((n, g) => n + g.rows.length, 0);

  const pills = [{ id: "all", name: "All shortcuts" }, ...cats];

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-[460px]">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search: try “screenshot”, “rename”, “lock”…"
          aria-label="Search shortcuts"
          className="h-11 w-full rounded-xl border border-line-2 bg-surface pl-10 pr-4 text-[14.5px] outline-none transition-shadow focus:border-accent focus:shadow-[0_0_0_4px_rgba(47,107,255,0.18)]"
        />
      </div>

      {/* Category pills */}
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
        {pills.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveCat(p.id)}
            className={`flex-none whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium transition-colors ${
              activeCat === p.id
                ? "border-ink bg-ink text-bg"
                : "border-line-2 bg-surface text-ink-2 hover:border-accent hover:text-accent-ink"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Groups */}
      <div className="mt-7 space-y-8">
        {groups.map(({ cat, rows }) => (
          <section key={cat.id}>
            <h3 className="mb-3 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.12em] text-muted">
              {cat.name}
              <span className="h-px flex-1 bg-line" />
            </h3>

            {/* column header (desktop) */}
            <div className="hidden grid-cols-[1.15fr_1fr_auto_1fr] gap-3.5 px-[18px] pb-2.5 sm:grid">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Action</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Windows</span>
              <span className="w-[18px]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Mac</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
              {rows.map((s, i) => (
                <div
                  key={i}
                  className="row-hover grid grid-cols-1 items-center gap-2 border-t border-line px-4 py-3.5 first:border-t-0 sm:grid-cols-[1.15fr_1fr_auto_1fr] sm:gap-3.5 sm:px-[18px]"
                >
                  <div className="text-[14.5px] font-medium text-ink">
                    {s.a}
                    {s.n && (
                      <span className="mt-0.5 block text-[12.5px] font-normal leading-snug text-muted">
                        {s.n}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 before:mr-1.5 before:font-mono before:text-[10px] before:uppercase before:tracking-[0.08em] before:text-faint before:content-['Windows'] sm:before:content-none">
                    <KeyCombo spec={s.w} />
                  </div>
                  <div className="hidden place-items-center sm:grid">
                    <RowArrow />
                  </div>
                  <div className="keys-mac flex items-center gap-1.5 before:mr-1.5 before:font-mono before:text-[10px] before:uppercase before:tracking-[0.08em] before:text-faint before:content-['Mac'] sm:before:content-none">
                    <KeyCombo spec={s.m} mac />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {total === 0 && (
          <div className="rounded-2xl border border-dashed border-line-2 bg-surface p-9 text-center text-[15px] text-muted">
            No shortcuts match <b className="text-ink">“{query.trim()}”</b>. Try the
            everyday guides, or a simpler word.
          </div>
        )}
      </div>
    </div>
  );
}
