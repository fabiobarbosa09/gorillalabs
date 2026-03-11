import type { CSSProperties } from "react";

import Image from "next/image";

import {
  ArrowRight,
  Brain,
  ChartLineUp,
  CheckCircle,
  FilmSlate,
  Lightning,
  MegaphoneSimple,
  Palette,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  Target,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { MemberCard } from "@/components/member-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SpotlightCard } from "@/components/spotlight-card";
import { siteConfig } from "@/lib/site-config";
import { createWhatsappLink, getSiteUrl } from "@/lib/utils";
import { Globe } from "@/components/globe";

const serviceIcons = {
  automation: Brain,
  rebrand: Sparkle,
  social: MegaphoneSimple,
  design: Palette,
  video: FilmSlate,
  viral: Lightning,
  traffic: Target,
  research: ChartLineUp,
} as const;

const highlightedServices = new Set(["automation", "rebrand", "traffic"]);
const whatsappLink = createWhatsappLink("Ol\u00e1, quero um diagn\u00f3stico da Gorilla Labs para minha marca.");
const whatsappIsExternal = whatsappLink.startsWith("https://");
const siteUrl = getSiteUrl();
const heroImageStyle = {
  "--hero-mobile-position": siteConfig.hero.imagePositionMobile,
  "--hero-desktop-position": siteConfig.hero.imagePositionDesktop,
} as CSSProperties;
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    founder: siteConfig.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
    })),
    employee: siteConfig.team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    areaServed: "BR",
    serviceType: siteConfig.services.map((service) => service.name),
    knowsAbout: siteConfig.services.map((service) => service.name),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

function getClientInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !["da", "de", "do", "das", "dos"].includes(part.toLowerCase()))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="top" className="relative isolate overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(130,59,255,0.35),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[18rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(31,132,255,0.16),transparent_65%)] blur-3xl" />

        <section className="relative">
          <div className="hero-cinematic-shell" style={heroImageStyle}>
            <Image
              src={siteConfig.hero.image}
              alt={siteConfig.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              quality={100}
              unoptimized
              className="hero-cinematic-image object-cover"
            />
            <div className="hero-cinematic-overlay" />
            <div className="hero-cinematic-topfade" />
            <div className="hero-cinematic-bottomfade" />
            <div className="hero-cinematic-bloom" />
          </div>

          <div className="hero-cinematic-content">
            <AnimatedSection className="mx-auto flex w-full max-w-7xl px-5 sm:px-8 lg:px-10">
              <div className="hero-copy-stack mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs text-white/78 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_16px_rgba(236,72,255,0.85)]" />
                  {siteConfig.hero.badge}
                </div>

                <div className="space-y-6">
                  <h1 className="hero-copy-title font-display text-4xl leading-[0.94] text-white sm:text-5xl lg:text-7xl">{siteConfig.hero.title}</h1>
                  <p className="hero-copy-body mx-auto max-w-3xl text-base leading-8 text-white/78 sm:text-lg">{siteConfig.hero.description}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                  <a
                    href={whatsappLink}
                    target={whatsappIsExternal ? "_blank" : undefined}
                    rel={whatsappIsExternal ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-fuchsia-300/45 bg-[linear-gradient(135deg,rgba(174,86,255,0.98),rgba(97,33,168,0.92))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_45px_rgba(154,76,255,0.38)] transition hover:translate-y-[-1px]"
                  >
                    {siteConfig.hero.primaryCta}
                    <ArrowRight size={18} weight="bold" />
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    {siteConfig.hero.secondaryCta}
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {siteConfig.hero.pills.map((pill) => (
                    <span key={pill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/62">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="hero-support-shell relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
          <AnimatedSection delay={0.12}>
            <SpotlightCard highlight className="noise-surface mx-auto max-w-6xl px-6 py-6 sm:px-8 sm:py-8">
              <div className="space-y-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <p className="font-mono-ui text-xs uppercase tracking-[0.32em] text-fuchsia-200/78">Creative operating system</p>
                    <h2 className="font-display text-2xl leading-tight text-white sm:text-3xl">{"Uma opera\u00e7\u00e3o criativa pronta para posicionar, vender e escalar."}</h2>
                  </div>
                  <div className="hidden h-14 w-14 shrink-0 rounded-2xl border border-white/12 bg-white/[0.04] md:flex md:items-center md:justify-center">
                    <RocketLaunch size={28} weight="fill" className="text-fuchsia-200" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {siteConfig.hero.highlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-3xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                      <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-white/42">{highlight.label}</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white/82">{highlight.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-4">
                  {[
                    "Branding, conte\u00fado, m\u00eddia e IA no mesmo stack estrat\u00e9gico.",
                    "Estruturas pensadas para campanhas, org\u00e2nico e funil comercial.",
                    "UX/UI premium com linguagem futurista e presen\u00e7a memor\u00e1vel.",
                    "SEO t\u00e9cnico desde a base para lan\u00e7amento j\u00e1 preparado para tr\u00e1fego.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-fuchsia-200" />
                      <p className="text-sm leading-6 text-white/72">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </AnimatedSection>

          <AnimatedSection delay={0.22} className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
            <div className="marquee-track">
              {[...siteConfig.clients, ...siteConfig.clients].map((client, index) => (
                <div key={`${client.slug}-${index}`} className="marquee-pill">
                  {client.name}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>
        <section id="servicos" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Oferta"
              title={"Servi\u00e7os desenhados para deixar sua marca mais forte, mais clara e mais preparada para crescer."}
              description={"A Gorilla Labs atua onde presen\u00e7a de marca, criatividade e opera\u00e7\u00e3o comercial se encontram. Cada frente foi pensada para funcionar isoladamente ou como parte de um sistema maior de crescimento."}
            />
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[service.slug];

              return (
                <AnimatedSection key={service.slug} delay={0.06 * index}>
                  <SpotlightCard
                    highlight={highlightedServices.has(service.slug)}
                    mediaSrc={service.image}
                    mediaAlt={service.imageAlt}
                    mediaPosition={service.imagePosition}
                    className="flex h-full flex-col justify-between px-5 py-6 sm:px-6"
                  >
                    <div className="space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-black/30 text-fuchsia-100 backdrop-blur-md">
                        <Icon size={28} weight="fill" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl leading-tight text-white">{service.name}</h3>
                        <p className="text-sm leading-7 text-white/68">{service.description}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm font-medium leading-6 text-fuchsia-100/92">{service.accent}</p>
                  </SpotlightCard>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        <section id="metodo" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <AnimatedSection>
            <SectionHeading
              eyebrow={"M\u00e9todo"}
              title={"Menos improviso. Mais dire\u00e7\u00e3o estrat\u00e9gica, velocidade de execu\u00e7\u00e3o e ajuste fino constante."}
              description={"O processo da Gorilla Labs foi pensado para unir clareza comercial, cria\u00e7\u00e3o premium e intelig\u00eancia operacional."}
              align="center"
            />
          </AnimatedSection>

          <div className="relative">
             <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] opacity-40 pointer-events-none">
                <Globe />
             </div>
             <div className="grid gap-5 lg:grid-cols-4">
               {siteConfig.method.map((item, index) => (
                 <AnimatedSection key={item.step} delay={0.08 * index}>
                   <SpotlightCard className="h-full px-5 py-6 sm:px-6">
                     <div className="space-y-6">
                       <div className="flex items-center justify-between gap-4">
                         <span className="font-display text-4xl text-white/90">{item.step}</span>
                         <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.25),transparent)]" />
                       </div>
                       <div className="space-y-3">
                         <h3 className="font-display text-2xl text-white">{item.title}</h3>
                         <p className="text-sm leading-7 text-white/68">{item.description}</p>
                       </div>
                     </div>
                   </SpotlightCard>
                 </AnimatedSection>
               ))}
             </div>
          </div>
        </section>

        <section id="time" className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
          <AnimatedSection>
            <SpotlightCard highlight className="noise-surface h-full px-6 py-7 sm:px-8">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Estrutura"
                  title={"Lideran\u00e7a pr\u00f3xima do neg\u00f3cio, equipe criativa e opera\u00e7\u00e3o pensada para evoluir junto com a marca."}
                  description={"A Gorilla Labs combina dire\u00e7\u00e3o estrat\u00e9gica e produ\u00e7\u00e3o para entregar uma ag\u00eancia enxuta, r\u00e1pida e com padr\u00e3o visual alto."}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {siteConfig.founders.map((founder, index) => (
                    <MemberCard
                      key={founder.name}
                      name={founder.name}
                      role={founder.role}
                      bio={founder.bio}
                      image={founder.image}
                      alt={founder.alt}
                      imagePosition={founder.imagePosition}
                      variant="founder"
                      priority={index === 0}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="grid gap-5">
            <SpotlightCard className="px-6 py-7 sm:px-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                    <UsersThree size={24} weight="fill" className="text-fuchsia-100" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-white">Time operacional</p>
                    <p className="text-sm text-white/58">{"Cria\u00e7\u00e3o, atendimento, produ\u00e7\u00e3o e performance trabalhando no mesmo ritmo."}</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {siteConfig.team.map((member) => (
                    <MemberCard
                      key={member.name}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      alt={member.alt}
                      imagePosition={member.imagePosition}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Base SEO pronta",
                  description: "Estrutura t\u00e9cnica preparada para indexa\u00e7\u00e3o, conte\u00fado e campanhas de divulga\u00e7\u00e3o.",
                },
                {
                  icon: TrendUp,
                  title: "Growth com leitura de dados",
                  description: "Campanhas, conte\u00fado e posicionamento com decis\u00e3o orientada por comportamento e mercado.",
                },
                {
                  icon: Brain,
                  title: "IA aplicada com utilidade",
                  description: "Automa\u00e7\u00e3o e produ\u00e7\u00e3o acelerada sem perder dire\u00e7\u00e3o criativa nem coer\u00eancia de marca.",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={0.12 + 0.05 * index}>
                  <SpotlightCard className="h-full px-5 py-6 sm:px-6">
                    <item.icon size={24} weight="fill" className="text-fuchsia-100" />
                    <h3 className="mt-5 font-display text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
                  </SpotlightCard>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <section id="clientes" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Clientes"
              title={"Marcas que j\u00e1 confiaram na Gorilla Labs em diferentes contextos de neg\u00f3cio."}
              description={"A lista abaixo ajuda a comunicar repert\u00f3rio e amplitude de atua\u00e7\u00e3o, sem inflar com promessas ou estudos de caso inventados."}
            />
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.clients.map((client, index) => (
              <AnimatedSection key={client.slug} delay={0.04 * index}>
                <SpotlightCard
                  className="h-full px-5 py-5 sm:px-6"
                  mediaSrc={client.logo ?? undefined}
                  mediaAlt=""
                  mediaClassName={client.logo ? "client-logo-wall object-cover" : undefined}
                  mediaOverlayClassName={
                    client.logo
                      ? "bg-[linear-gradient(180deg,rgba(7,2,14,0.5),rgba(7,2,14,0.78)_54%,rgba(5,1,10,0.95)_100%)]"
                      : undefined
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-[26px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] shadow-[0_18px_34px_rgba(10,2,24,0.32)] backdrop-blur-xl transition duration-300 group-hover:border-fuchsia-200/26 group-hover:shadow-[0_22px_40px_rgba(56,14,92,0.36)]">
                      {client.logo ? (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,89,255,0.22),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
                          <Image src={client.logo} alt={client.logoAlt} fill sizes="88px" className="client-logo-badge-image object-cover" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(161,89,255,0.18),transparent_62%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
                          <span className="relative z-10 font-display text-xl tracking-[0.24em] text-white/88">{getClientInitials(client.name)}</span>
                        </>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="font-display text-2xl leading-tight text-white">{client.name}</p>
                      <p className="text-sm text-white/50">{"Presen\u00e7a ativa no portf\u00f3lio da Gorilla Labs."}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <AnimatedSection>
            <SectionHeading
              eyebrow="FAQ"
              title={"Perguntas que costumam aparecer antes de iniciar um projeto com a Gorilla Labs."}
              description={"Transpar\u00eancia na entrada ajuda a alinhar expectativa, escopo e a melhor rota de crescimento para a marca."}
            />
          </AnimatedSection>

          <div className="grid gap-4">
            {siteConfig.faq.map((item, index) => (
              <AnimatedSection key={item.question} delay={0.05 * index}>
                <details className="group rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl open:border-fuchsia-300/30 open:bg-white/[0.05]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-white marker:content-none">
                    {item.question}
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/48 transition group-open:text-fuchsia-100">
                      abrir
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-white/68">{item.answer}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-24">
          <AnimatedSection>
            <SpotlightCard highlight className="noise-surface h-full px-6 py-7 sm:px-8">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Contato"
                  title={"Se a sua marca precisa parecer, comunicar e operar em outro n\u00edvel, este \u00e9 o ponto de partida."}
                  description={"Abra a conversa com contexto. A Gorilla Labs entra com diagn\u00f3stico, dire\u00e7\u00e3o estrat\u00e9gica e proposta de execu\u00e7\u00e3o conforme a prioridade do seu neg\u00f3cio."}
                />

                <div className="space-y-4">
                  {[
                    "Estrat\u00e9gia de crescimento com IA aplicada",
                    "Design e conte\u00fado com dire\u00e7\u00e3o premium",
                    "Leitura de mercado e concorr\u00eancia para decidir melhor",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-fuchsia-200" />
                      <p className="text-sm leading-6 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target={whatsappIsExternal ? "_blank" : undefined}
                  rel={whatsappIsExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Conversar no WhatsApp
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
            </SpotlightCard>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <SpotlightCard highlight className="px-6 py-7 sm:px-8">
              <div className="mb-8 space-y-3">
                <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-fuchsia-100/76">Briefing inicial</p>
                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">Conte onde sua marca quer chegar.</h2>
                <p className="text-sm leading-7 text-white/68">
                  {"A resposta deste formul\u00e1rio alimenta o fluxo de leads. Em produ\u00e7\u00e3o, ele pode enviar direto para Google Sheets. Em desenvolvimento, j\u00e1 funciona em modo mock para validar a UX completa."}
                </p>
              </div>
              <ContactForm />
            </SpotlightCard>
          </AnimatedSection>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="space-y-3">
            <p className="font-mono-ui text-xs uppercase tracking-[0.34em] text-fuchsia-100/70">{siteConfig.footer.kicker}</p>
            <p className="max-w-2xl text-sm leading-7 text-white/58">{siteConfig.footer.copy}</p>
          </div>
          <p className="text-sm text-white/42">{"\u00a9 " + new Date().getFullYear() + " Gorilla Labs. Todos os direitos reservados."}</p>
        </div>
      </footer>
      <div className="gradient-blur-bottom">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </>
  );
}
