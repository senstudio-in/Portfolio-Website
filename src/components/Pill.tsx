/** Small rounded label with a white dot — "About", "Who we are", "Get in touch". */
export default function Pill({ children, color = "bg-brand" }: { children: string; color?: string }) {
  return (
    <span className={`inline-flex h-8 w-fit items-center gap-[10px] rounded-full px-3 ${color}`}>
      <span className="h-[7px] w-[7px] rounded-full bg-white" />
      <span className="font-inter text-[16px] leading-[25.6px] tracking-[-0.32px] text-white">{children}</span>
    </span>
  );
}
