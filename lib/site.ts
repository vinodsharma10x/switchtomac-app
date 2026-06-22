// ----------------------------------------------------------------
// Brand + site config. Edit these in ONE place and they update
// across the header, footer, metadata, and About page.
// ----------------------------------------------------------------
export const SITE = {
  name: "Switch",
  tagline: "From Windows to Mac, without the friction.",
  description:
    "A friendly, searchable guide for moving from Windows to a MacBook: keyboard shortcut translations, how-to guides, videos, and more. Open source.",
  // Change this to your real domain once it's connected on Vercel.
  url: "https://switchtomac.app",
  // Change this to your GitHub repo (or remove the link in Header/Footer).
  repo: "https://github.com/vinodsharma10x/switchtomac-app",
  authors: "Vinod & Claude",
  // Current macOS at time of writing.
  macOS: "macOS Tahoe (macOS 26)",
  // The person behind the site, used for metadata and structured data.
  author: {
    name: "Vinod Sharma",
    url: "https://vinodsharma.ai",
    twitter: "@VinodSharma10x",
    sameAs: [
      "https://vinodsharma.ai",
      "https://x.com/VinodSharma10x",
      "https://www.linkedin.com/in/vinodsharma10x/",
    ],
  },
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/skill", label: "Skill" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
];
