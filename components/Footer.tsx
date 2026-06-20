import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-[28px] w-[28px] place-items-center rounded-lg border border-line-2 bg-gradient-to-b from-white to-[#eef1f7] font-mono text-[15px] text-accent-ink shadow-[0_1px_0_#c7cdd7,inset_0_1px_0_#fff]">
              ⌘
            </span>
            <span className="font-display text-[17px] font-bold tracking-tight">
              {SITE.name}
              <span className="text-accent-ink">.</span>
            </span>
          </div>
          <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
            My teammate Jimmy got a brand-new MacBook. M5 Pro chip, 48GB of RAM. One of the
            fastest laptops you can buy. For two months, he didn't touch it, and kept working
            on his old Windows laptop instead. He said, "Mac is better as a paperweight."
            Jimmy is not alone. I made the same switch ten years ago, and it was painful.
            Every app and every keyboard shortcut worked differently, and I had to relearn all
            of it. So I built this, for Jimmy and everyone making the same move: from the
            world's best business laptop to the most advanced coding machine.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted">
          <span>
            A website by{" "}
            <a
              href="https://vinodsharma.ai/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-accent-ink"
            >
              Vinod Sharma
            </a>
            . Open source under the MIT License.
          </span>
        </div>
      </div>
    </footer>
  );
}
