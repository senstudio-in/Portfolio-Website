import Link from "next/link";
import RollText from "./RollText";

export default function PillButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center rounded-[13px] bg-card px-[22px] py-[10px] transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      <RollText
        className="whitespace-nowrap text-[16px] leading-6 tracking-[-0.48px] text-white"
        hoverClassName="font-semibold"
      >
        {children}
      </RollText>
    </Link>
  );
}
