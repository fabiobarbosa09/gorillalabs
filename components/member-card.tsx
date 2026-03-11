import Image from "next/image";

import { cn } from "@/lib/utils";

type MemberCardProps = {
  name: string;
  role: string;
  image: string;
  alt: string;
  imagePosition?: string;
  bio?: string;
  priority?: boolean;
  variant?: "founder" | "team";
};

export function MemberCard({
  name,
  role,
  image,
  alt,
  imagePosition = "center",
  bio,
  priority = false,
  variant = "team",
}: MemberCardProps) {
  const isFounder = variant === "founder";

  return (
    <article
      className={cn(
        "member-card group flex flex-col items-center rounded-[28px] border border-white/10 bg-black/20 p-5 text-center backdrop-blur-xl sm:p-6",
        !isFounder && "h-full bg-white/[0.03]",
      )}
    >
      <div className={cn("member-portrait-shell", isFounder ? "w-52 sm:w-56" : "w-40 sm:w-44")}>
        <div className="member-portrait-frame">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes={isFounder ? "(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw" : "(min-width: 1280px) 11rem, (min-width: 640px) 30vw, 80vw"}
            className="member-portrait-image object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,transparent_66%,rgba(7,1,14,0.4)_100%)]" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p className={cn("font-display text-white", isFounder ? "text-xl sm:text-2xl" : "text-lg sm:text-xl")}>{name}</p>
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-fuchsia-100/82 sm:text-xs">{role}</p>
        {bio ? <p className="mx-auto max-w-sm pt-2 text-sm leading-7 text-white/68">{bio}</p> : null}
      </div>
    </article>
  );
}