import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "The Switch to Mac skill for Claude and Codex" },
  description:
    "Install the free Switch skill in Claude or Codex and ask for any Windows to Mac keyboard shortcut, task, or trackpad gesture, right in your chat. Free and open source.",
  alternates: { canonical: "/skill" },
  openGraph: {
    title: "The Switch to Mac skill for Claude and Codex",
    description:
      "Ask your own Claude or Codex for any Windows to Mac shortcut, task, or gesture, right in your chat. Free and open source.",
    url: `${SITE.url}/skill`,
  },
};

const prompts = [
  '"What\'s Ctrl+C on a Mac?"',
  '"How do I take a screenshot on a Mac?"',
  '"How do I force quit on a Mac?"',
  '"How do I right-click on the trackpad?"',
  '"Show me all the keyboard mappings"',
];

const pre =
  "mt-2 overflow-x-auto rounded-xl border border-line bg-bg-soft p-4 font-mono text-[13px] leading-relaxed text-ink-2";

export default function SkillPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Skill", path: "/skill" },
        ])}
      />
      <div className="max-w-[720px]">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          Skill
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          The Switch to Mac skill
        </h1>
        <p className="mt-4 text-[clamp(17px,2.2vw,19px)] leading-relaxed text-ink-2">
          Install the free Switch skill inside Claude or Codex and ask for any Mac shortcut,
          task, or gesture, right in your chat.
        </p>

        <h2 className="mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]">
          Ask it things like
        </h2>
        <ul className="mt-4 space-y-2.5">
          {prompts.map((q) => (
            <li
              key={q}
              className="rounded-r-xl border border-l-2 border-line border-l-accent bg-bg-soft px-4 py-2.5 text-[15px] text-ink-2"
            >
              {q}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]">
          What's inside
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[16px] text-ink-2">
          <span>
            <span className="font-mono font-semibold text-accent-ink">71</span> shortcuts, by
            category
          </span>
          <span>
            <span className="font-mono font-semibold text-accent-ink">14</span> everyday tasks
          </span>
          <span>
            <span className="font-mono font-semibold text-accent-ink">10</span> trackpad
            gestures
          </span>
        </div>

        <h2 className="mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]">
          Install it
        </h2>
        <p className="mt-3 text-[16.5px] leading-[1.7] text-ink-2">
          Pick the tool you use. The same skill folder works in all three.
        </p>

        <h3 className="mt-6 font-display text-[17px] font-semibold tracking-[-0.01em]">
          Claude Code
        </h3>
        <pre className={pre}>
          {`git clone ${SITE.repo}
cp -r switchtomac-app/skill ~/.claude/skills/switch-to-mac`}
        </pre>
        <p className="mt-2 text-[14px] text-muted">
          Restart Claude Code and ask: what's Ctrl C on a Mac?
        </p>

        <h3 className="mt-6 font-display text-[17px] font-semibold tracking-[-0.01em]">
          Claude.ai
        </h3>
        <p className="mt-2 text-[16px] leading-[1.7] text-ink-2">
          Turn on Code execution under Settings, Capabilities. Then go to Customize, Skills,
          and upload the <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">skill</code> folder
          as a ZIP. Toggle it on and ask in any new chat.
        </p>

        <h3 className="mt-6 font-display text-[17px] font-semibold tracking-[-0.01em]">
          Codex
        </h3>
        <pre className={pre}>{`cp -r switchtomac-app/skill ~/.codex/skills/switch-to-mac`}</pre>
        <p className="mt-2 text-[14px] text-muted">
          Or wire up the slash command from the repo's{" "}
          <code className="rounded bg-bg-soft px-1.5 py-0.5 font-mono text-[14px] text-ink">codex/</code>{" "}
          folder. Full steps are in the repo.
        </p>

        <blockquote className="my-8 border-l-2 border-accent pl-4 text-[18px] italic text-muted">
          Set it up once. After that, you just ask.
        </blockquote>

        <p className="mt-12 border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
          Free and open source under the MIT License. See the code and full install steps on{" "}
          <a
            href={`${SITE.repo}/tree/main/skill`}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent-ink underline underline-offset-2"
          >
            GitHub
          </a>
          , or browse the full guide at{" "}
          <Link href="/" className="font-medium text-accent-ink underline underline-offset-2">
            switchtomac.app
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
