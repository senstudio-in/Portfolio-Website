import type { ReactNode } from "react";

/**
 * Two stacked copies of a label in one grid cell; on parent `group` hover the
 * first rolls up and out while the second rolls up into place and stays there.
 * The cell is sized by the wider copy, so a bolder hover state never clips.
 */
export default function RollText({
  children,
  className = "",
  hoverClassName = "",
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  hoverClassName?: string;
  align?: "center" | "start";
}) {
  const roll =
    "[grid-area:1/1] transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none";
  return (
    <span
      className={`grid overflow-hidden ${align === "center" ? "justify-items-center" : "justify-items-start"}`}
    >
      <span className={`${roll} group-hover:-translate-y-full group-focus-visible:-translate-y-full ${className}`}>
        {children}
      </span>
      <span
        aria-hidden
        className={`${roll} translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 ${className} ${hoverClassName}`}
      >
        {children}
      </span>
    </span>
  );
}
