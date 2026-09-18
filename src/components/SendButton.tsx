import Link from "next/link";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const shell =
  "group flex h-[54px] w-full max-w-[335px] items-center justify-between rounded-[99px] bg-[#0f0f0f] py-[3px] pl-[15px] pr-[3px] disabled:opacity-60";

function Inner({ label }: { label: string }) {
  return (
    <>
      <span className="font-bogle text-[23px] uppercase leading-6 tracking-[1.5px] text-white">{label}</span>
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-black text-white">
        <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-6 group-hover:translate-x-6" />
        <ArrowUpRight className="absolute h-[18px] w-[18px] -translate-x-6 translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );
}

/** Black "Send Request" pill with the arrow that swaps on hover. Renders a link when `href` is given. */
export default function SendButton({
  label = "Send Request",
  href,
  disabled,
}: {
  label?: string;
  href?: string;
  disabled?: boolean;
}) {
  if (href) {
    return (
      <Link href={href} className={shell}>
        <Inner label={label} />
      </Link>
    );
  }
  return (
    <button type="submit" disabled={disabled} className={shell}>
      <Inner label={label} />
    </button>
  );
}
