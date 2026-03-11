import type { HTMLAttributes, ReactNode } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  highlight?: boolean;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaPosition?: string;
  mediaSizes?: string;
  mediaClassName?: string;
  mediaOverlayClassName?: string;
};

export function SpotlightCard({
  children,
  className,
  highlight = false,
  mediaSrc,
  mediaAlt = "",
  mediaPosition = "center",
  mediaSizes = "(min-width: 1280px) 24rem, (min-width: 768px) 46vw, 92vw",
  mediaClassName,
  mediaOverlayClassName,
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "card-glow border-gradient group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_80px_rgba(4,1,15,0.45)] backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 hover:bg-white/[0.05]",
        highlight && "card-glow-strong",
        className,
      )}
      {...props}
    >
      {mediaSrc ? (
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            sizes={mediaSizes}
            className={cn("card-media-image object-cover", mediaClassName)}
            style={{ objectPosition: mediaPosition }}
          />
          <div
            className={cn(
              "absolute inset-0 bg-[linear-gradient(180deg,rgba(7,2,14,0.18),rgba(7,2,14,0.6)_40%,rgba(5,1,10,0.94)_100%)]",
              mediaOverlayClassName,
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,96,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(48,18,84,0.32),transparent_38%)]" />
        </div>
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}