import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", action }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "mx-auto max-w-3xl items-center text-center",
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="font-display text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{description}</p>
      </div>
      {action}
    </div>
  );
}
