"use client";

import { useEffect, useRef, useState } from "react";
import { KeyCombo } from "@/components/Keycap";

const EXAMPLES: { cap: string; w: string[]; m: string[] }[] = [
  { cap: "Copy", w: ["Ctrl", "C"], m: ["⌘", "C"] },
  { cap: "Paste", w: ["Ctrl", "V"], m: ["⌘", "V"] },
  { cap: "Save", w: ["Ctrl", "S"], m: ["⌘", "S"] },
  { cap: "Find", w: ["Ctrl", "F"], m: ["⌘", "F"] },
  { cap: "Switch apps", w: ["Alt", "Tab"], m: ["⌘", "Tab"] },
  { cap: "Undo", w: ["Ctrl", "Z"], m: ["⌘", "Z"] },
];

function Arrow() {
  return (
    <div className="grid h-[42px] w-[42px] flex-none place-items-center text-accent">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h13" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) setI((p) => (p + 1) % EXAMPLES.length);
    }, 2700);
    return () => clearInterval(id);
  }, []);

  const ex = EXAMPLES[i];

  return (
    <section className="mx-auto max-w-content px-5 pt-16 sm:px-6 sm:pt-20">
      <span className="inline-flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.16em] text-muted">
        Windows <span className="font-semibold text-accent">→</span> macOS
      </span>

      <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(34px,6vw,56px)] font-bold leading-[1.04] tracking-[-0.025em]">
        Your fingers already know this.
      </h1>

      <p className="mt-4 max-w-[60ch] text-[clamp(16px,2.2vw,19px)] text-ink-2">
        Almost every Windows shortcut works on a MacBook — you just press{" "}
        <b className="font-semibold text-ink">⌘ Command</b> where you used to press{" "}
        <b className="font-semibold text-ink">Ctrl</b>. Here's the whole translation, plus
        how to do the everyday things, the videos worth watching, and more.
      </p>

      {/* Signature translator */}
      <div
        className="mt-10 max-w-[680px] rounded-2xl border border-line bg-surface px-6 pb-6 pt-7 shadow-card"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        tabIndex={0}
        aria-label="Shortcut translator showing Windows keys converting to Mac keys"
      >
        <div key={i} className="animate-fade">
          <div className="text-center font-mono text-[12px] uppercase tracking-[0.14em] text-accent-ink">
            {ex.cap}
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex min-h-[48px] items-center justify-center">
                <KeyCombo spec={ex.w} size="lg" />
              </div>
              <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint">
                On Windows
              </div>
            </div>
            <Arrow />
            <div className="flex flex-col items-center gap-3">
              <div className="animate-press flex min-h-[48px] items-center justify-center">
                <KeyCombo spec={ex.m} mac size="lg" />
              </div>
              <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint">
                On your MacBook
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
