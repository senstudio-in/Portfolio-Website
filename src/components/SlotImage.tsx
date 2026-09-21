import Image from "next/image";
import ExpandableImage from "@/components/ExpandableImage";
import type { Slot } from "@/lib/projects";

/** Renders an image at its Framer slot aspect ratio, or the striped placeholder when missing. */
export default function SlotImage({
  slot,
  alt,
  priority = false,
  className = "",
}: {
  slot: Slot;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const style = { aspectRatio: `${slot.w} / ${slot.h}`, maxWidth: slot.w };
  if (!slot.src) {
    return <div aria-hidden className={`missing-image w-full ${className}`} style={style} />;
  }
  return (
    <ExpandableImage src={slot.src} alt={alt} className={`relative w-full overflow-hidden ${className}`} style={style}>
      <Image
        src={slot.src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={slot.animated || slot.src.endsWith(".gif")}
        quality={100}
        sizes={`(min-width: ${slot.w + 150}px) ${slot.w}px, 100vw`}
        decoding="async"
        className={slot.fit === "cover" ? "object-cover" : "object-contain"}
      />
    </ExpandableImage>
  );
}
