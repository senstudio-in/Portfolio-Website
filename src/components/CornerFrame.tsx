import type { ReactNode } from "react";

const corners = [
  { pos: "left-0 top-0", d: "M8 0V1H1V8H0V0H8Z" },
  { pos: "right-0 top-0", d: "M8 0V8H7V1H0V0H8Z" },
  { pos: "left-0 bottom-0", d: "M1 7H8V8H0V0H1V7Z" },
  { pos: "right-0 bottom-0", d: "M8 8H0V7H7V0H8V8Z" },
];

/** Image frame with four thin corner brackets, as on the About blurb. */
export default function CornerFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative p-4 ${className}`}>
      {children}
      {corners.map((c) => (
        <svg
          key={c.pos}
          viewBox="0 0 8 8"
          preserveAspectRatio="none"
          className={`absolute h-[6px] w-[6px] opacity-50 ${c.pos}`}
          aria-hidden
        >
          <path d={c.d} fill="white" />
        </svg>
      ))}
    </div>
  );
}
