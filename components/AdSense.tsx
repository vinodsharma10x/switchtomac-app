"use client";

import Script from "next/script";

// Set NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-XXXXXXXXXXXXXXXX) to enable.
// Loads the AdSense library only. Individual ad units are separate
// components; nothing renders an ad by itself. Renders nothing when unset,
// so preview/dev builds stay clean.
//
// Not routed through GTM on purpose: Google wants this script directly in
// the page, and GTM-injected ad code is unreliable.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export function AdSenseScript() {
  if (!ADSENSE_CLIENT) return null;
  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
