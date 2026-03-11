import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { navItems, siteConfig } from "@/lib/site-config";
import { createWhatsappLink } from "@/lib/utils";

const primaryLink = createWhatsappLink("Ol\u00e1, quero conhecer a Gorilla Labs e entender como voc\u00eas podem ajudar a minha marca.");
const isExternal = primaryLink.startsWith("https://");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06010d]/40 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#06010d]/28">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="group inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/14 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <span className="font-display text-sm tracking-[0.4em] text-white">GL</span>
          </div>
          <div className="space-y-1">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-white">{siteConfig.name}</p>
            <p className="font-mono-ui text-[10px] uppercase tracking-[0.34em] text-white/42">AI agency and growth design</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/62 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.1]"
        >
          Falar agora
          <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>
    </header>
  );
}