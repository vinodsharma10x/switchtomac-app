import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { aboutPageLd, personLd, breadcrumbLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "A brand-new MacBook sat unused for two months. The story behind Switch, and why a clear Windows-to-Mac translation matters.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${SITE.name}`,
    description:
      "A brand-new MacBook sat unused for two months. The story behind Switch, and why a clear Windows-to-Mac translation matters.",
    url: `${SITE.url}/about`,
  },
};

const h2 = "mt-10 font-display text-[22px] font-semibold tracking-[-0.02em]";
const p = "mt-4 text-[16.5px] leading-[1.7] text-ink-2";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={[
          aboutPageLd(),
          personLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <div className="max-w-[720px]">
        <span className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-muted">
          About
        </span>
        <h1 className="mt-2 font-display text-[clamp(28px,4.5vw,40px)] font-bold tracking-[-0.025em]">
          A brand-new MacBook sat unused for two months.
        </h1>

        <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">
          Forty-eight gigabytes of RAM. The M5 chip. One of the fastest laptops you can buy.
          And for two months, my teammate Jimmy did not switch to it.
        </p>
        <p className={p}>
          Not because anything was wrong with it. Because he had spent fifteen years on
          Windows, and every one of those years was muscle memory he was about to lose. He
          knew where everything was. He could work without looking. Switching meant going
          back to zero.
        </p>
        <p className={p}>So the Mac sat there. His words, not mine:</p>
        <blockquote className="my-6 border-l-2 border-accent pl-4 text-[16.5px] italic text-muted">
          "Mac is better as a paperweight."
        </blockquote>
        <p className={p}>He was half joking. He was also completely serious.</p>

        <h2 className={h2}>He put it off because he is good at his job.</h2>
        <p className={p}>
          Jimmy is not someone who avoids hard things. He is one of the most organized,
          productive, and sincere people I work with.
        </p>
        <p className={p}>
          On Windows, he is fast and gets more done, whereas an unfamiliar system would slow
          him down.
        </p>
        <p className={p}>
          The drive to keep running at full speed is the same thing that keeps people doing
          the work the old way, long after a faster way is sitting in front of them. The
          short slowdown you avoid ends up costing far more than learning would have.
        </p>
        <p className={p}>
          It is how the world around us is wired: keep moving; do not pause to learn the
          thing that would ultimately make you more effective. Most people never take the
          pause to learn a different way of working, because there is always something due.
        </p>

        <h2 className={h2}>The small things are the hard things.</h2>
        <p className={p}>
          When you have used Windows for fifteen or twenty years, the big stuff is fine. You
          can figure out a new app. What breaks you is the small stuff you never had to think
          about.
        </p>
        <p className={p}>
          How do I open the file manager? It's called Finder, and there is no Win+E.
        </p>
        <p className={p}>
          Where did my screenshot go? The Desktop, and the keys are nothing like the ones you
          knew.
        </p>
        <p className={p}>
          That is the kind of friction that makes a new machine feel like a punishment
          instead of an upgrade.
        </p>
        <p className={p}>
          The problem was never that any of it is hard. The problem is that nobody hands you
          the translation.
        </p>

        <h2 className={h2}>I know this story because it was mine.</h2>
        <p className={p}>Ten years ago, I switched from Windows to a MacBook.</p>
        <p className={p}>
          My first computer was a Windows machine, back in 2000. I spent fifteen solid years
          on it. I knew every shortcut. I could fly through my work without touching a mouse,
          because I never wanted to. Keyboard for everything.
        </p>
        <p className={p}>Then I moved to a Mac, and overnight, all of it was gone.</p>
        <p className={p}>
          The shortcuts I had learned for fifteen years did nothing. Even taking a
          screenshot, something I had done a thousand times without thinking, turned into
          something I had to stop and look up.
        </p>
        <p className={p}>
          And when I looked it up, there was no good single answer. One website had half the
          shortcuts. Another had the rest. I would bookmark them both, then switch back and
          forth between tabs trying to remember which one had the thing I needed. It was slow,
          and it made me feel slow, which was the worse part.
        </p>
        <p className={p}>
          I got through it. But it took far longer than it should have, and nobody had handed
          me a map.
        </p>

        <h2 className={h2}>It is not just us.</h2>
        <p className={p}>
          When Jimmy hit the same wall, I went looking. The internet is full of people
          standing exactly where he was standing.
        </p>
        <p className={p}>
          A developer on Hacker News venting that the Delete key works backward. Someone on
          Apple's own forums asking how to make the shortcuts behave like Windows again. A
          first-time MacBook owner who said that every time they tried to do something with
          the keyboard it failed, and they could not understand why everything had to be so
          different. Even O'Reilly's guide to switching opens by warning you that moving to a
          Mac means switching your brain.
        </p>
        <p className={p}>
          Different people, different years, the same frustration. Capable people losing their
          fluency the moment they sat down at a new machine. Thousands of them, and probably
          far more who never said a word and just quietly struggled, or gave up and went back
          to Windows.
        </p>

        <h2 className={h2}>So I built this, for Jimmy and everyone like him.</h2>
        <p className={p}>
          I did not want Jimmy to go through what I went through. I did not want him losing
          days to something a good reference could have answered in seconds.
        </p>
        <p className={p}>
          So instead of sending him one more half-finished cheat sheet, I built the one I wish
          someone had handed me ten years ago. Every Windows shortcut next to its Mac
          equivalent. The everyday things that do not map to a single key, explained in plain
          language. One place. Searchable. No tab-switching, no guessing.
        </p>
        <p className={p}>
          Here is the part most switching guides bury: your fingers already know almost all of
          this. You are not starting over. Most of the time you are just pressing Command
          where you used to press Ctrl. Once someone shows you that, the fear drops away, and
          the expensive laptop stops being a paperweight.
        </p>
        <p className={p}>That is the only reason this site exists.</p>

        <h2 className={h2}>Open, and free.</h2>
        <p className={p}>
          {SITE.name} is open source under the MIT License. I built it using Claude Code
          &amp; Codex. Use it, share it, send it to the person on your team who just got a
          Mac and has not switched to it yet.
        </p>
        <p className={p}>If it saves one person two months, it did its job.</p>
      </div>
    </div>
  );
}
