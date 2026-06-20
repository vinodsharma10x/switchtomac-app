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
          <p className="mt-3 max-w-[40ch] text-[13.5px] text-muted">
            {SITE.tagline} Made for everyone making the switch — and open source under
            the MIT License.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-muted">
          <span>© 2026 Vinod Sharma</span>
        </div>
      </div>
    </footer>
  );
}
