import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-5 py-28 text-center sm:px-6">
      <div className="flex items-center gap-2">
        <span className="kbd kbd--lg">Ctrl</span>
        <span className="ksep">+</span>
        <span className="kbd kbd--lg">?</span>
      </div>
      <h1 className="mt-6 font-display text-[clamp(28px,5vw,42px)] font-bold tracking-[-0.025em]">
        That shortcut doesn't exist
      </h1>
      <p className="mt-3 max-w-[44ch] text-[16px] text-ink-2">
        We couldn't find that page. Try the reference, or head back home.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-xl bg-ink px-5 py-3 text-[14.5px] font-semibold text-bg transition-transform hover:-translate-y-0.5">
          Back home
        </Link>
        <Link href="/#reference" className="rounded-xl border border-line-2 bg-surface px-5 py-3 text-[14.5px] font-semibold text-ink-2 transition-colors hover:border-accent hover:text-accent-ink">
          Open the reference
        </Link>
      </div>
    </div>
  );
}
