"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const STORAGE_KEY = "switch-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  // Only ask once. If a choice is stored, the loader already re-applied it.
  useEffect(() => {
    if (!GTM_ID) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      /* localStorage unavailable: stay hidden */
    }
  }, []);

  if (!GTM_ID || !show) return null;

  function choose(granted: boolean) {
    const value = granted ? "granted" : "denied";
    const w = window;
    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag !== "function") {
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      } as Window["gtag"];
    }
    w.gtag!("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
      functionality_storage: value,
      personalization_storage: value,
    });
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-content flex-col gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13.5px] leading-relaxed text-ink-2">
          This site uses cookies to understand traffic and improve the guides. In the
          EU, analytics stays off until you accept. See the{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-accent-ink">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-none gap-2">
          <button
            onClick={() => choose(false)}
            className="rounded-xl border border-line-2 bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink-2 transition-colors hover:border-accent hover:text-accent-ink"
          >
            Decline
          </button>
          <button
            onClick={() => choose(true)}
            className="rounded-xl bg-ink px-4 py-2 text-[13.5px] font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
