import Image from "next/image";
import Link from "next/link";
import { FadeIn, FloatCard } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";

type Locale = "ko" | "en";

const copy = {
  ko: {
    featured: {
      eyebrow: "Featured Project",
      title: "Schedule Block",
      summary: "AI 협업 기반 개인 스케줄링 앱",
      description:
        "완료하지 못한 일정을 자동으로 이월하고, 일정과 할 일을 하나의 흐름으로 관리하는 개인 스케줄링 앱입니다.",
      role: "Product Design · UX Flow · AI Collaboration",
      platform: "iOS",
      status: "Live Product",
      features: "Google Calendar Sync · Auto Rescheduling · Personal Productivity",
    },
    works: {
      eyebrow: "Selected Works",
      title: "서비스를 움직인 프로젝트",
      description: "사용자 화면, 관리자 시스템, 운영 흐름을 함께 설계한 작업들입니다.",
    },
    about: {
      eyebrow: "About",
      title: "사용자 화면과 운영 흐름을 함께 설계합니다",
      body: [
        "웹, 모바일, 관리자 시스템을 설계하며 서비스가 실제로 운영되는 환경을 이해해왔습니다.",
        "사용자 경험과 운영 흐름이 어긋나지 않도록 제품 구조와 인터페이스를 함께 바라봅니다.",
        "최근에는 AI와 협업하며 아이디어를 실제 제품으로 구현하는 방식을 실험하고 있습니다.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "서비스를 운영하며 쌓은 경험",
      description:
        "글로벌 서비스, 관리자 시스템, 공공 플랫폼까지 다양한 제품 환경에서 사용자와 운영자의 흐름을 설계했습니다.",
    },
    brunch: {
      eyebrow: "brunch",
      title: "제품을 만드는 과정을 기록합니다",
      description: "AI와 협업하며 실제 제품을 만들고 운영한 기록",
      articleTitle: "AI로 첫 앱 개발기",
      articleDescription:
        "아이디어에서 UX 흐름, 제품 구현, 출시까지의 과정을 기록합니다.",
      meta: "AI Product Making Series",
      cta: "Read on brunch",
    },
    contact: {
      title:
        "프로덕트 디자인, 관리자 시스템 UX, 초기 서비스 구조 설계와 운영 기반 UX 작업을 함께할 수 있습니다.",
      cta: "Contact Me",
    },
  },
  en: {
    featured: {
      eyebrow: "Featured Project",
      title: "Schedule Block",
      summary: "AI-assisted personal scheduling app",
      description:
        "A personal scheduling app designed around automatic carry-over, integrated schedule/task UX, and recovery after plans slip.",
      role: "Product Design · UX Flow · AI Collaboration",
      platform: "iOS",
      status: "Live Product",
      features: "Google Calendar Sync · Auto Rescheduling · Personal Productivity",
    },
    works: {
      eyebrow: "Selected Works",
      title: "Work shaped by service operations",
      description:
        "Admin systems, global web services, and personal product experiments organized by real product context.",
    },
    about: {
      eyebrow: "About",
      title: "Designing user-facing products and the flows behind them",
      body: [
        "I have designed web, mobile, and admin systems while working close to environments where services are actually operated.",
        "I look at product structure and interface together so user experience and operational workflows do not drift apart.",
        "Recently, I have been experimenting with building real products directly in collaboration with AI.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Product environments",
    },
    brunch: {
      eyebrow: "brunch",
      title: "Notes from making products",
      description: "Records from building and operating real products with AI",
      articleTitle: "Building my first app with AI",
      articleDescription:
        "Notes on moving from idea to UX flow, product implementation, and release.",
      meta: "AI Product Making Series",
      cta: "Read on brunch",
    },
    contact: {
      title:
        "Available for product design, admin system UX, early product structure, and operation-based UX work.",
      cta: "Let’s Talk",
    },
  },
};

const selectedWorks = {
  ko: [
    {
      name: "WSOP+",
      summary: "글로벌 포커 대회 앱과 관리자 시스템",
      role: "Product Design · Admin UX",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      keywords: ["Registration", "Payment Flow", "Operation Status"],
      href: "/projects/wsop-plus",
      visual: "admin",
    },
    {
      name: "GGPoker / PokerStake",
      summary: "글로벌 서비스 웹사이트와 운영 구조",
      role: "UX/UI Design · Service UX",
      platform: "Web",
      status: "Service Experience",
      keywords: ["Global Website", "Player / Backer Flow", "Trust UX"],
      href: "/projects/pokerstake",
      visual: "web",
    },
    {
      name: "mobimobi",
      summary: "게임 루틴 관리를 위한 체크리스트 서비스",
      role: "Product Concept",
      platform: "Web · Mobile Concept",
      status: "Side Project",
      keywords: ["Small Product", "Routine System", "Maker Experiment"],
      href: "/projects",
      visual: "mobile",
    },
  ],
  en: [
    {
      name: "WSOP+",
      summary: "Global tournament app and admin system",
      role: "Product Design · Admin UX",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      keywords: ["Registration", "Payment Flow", "Operation Status"],
      href: "/projects/wsop-plus",
      visual: "admin",
    },
    {
      name: "GGPoker / PokerStake",
      summary: "Global service web UX and participation structure",
      role: "UI/UX Design · Service UX",
      platform: "Web",
      status: "Service Experience",
      keywords: ["Global Website", "Player / Backer Flow", "Trust UX"],
      href: "/projects/pokerstake",
      visual: "web",
    },
    {
      name: "mobimobi",
      summary: "Personal maker experiment and product concept",
      role: "Product Concept",
      platform: "Web · Mobile Concept",
      status: "Side Project",
      keywords: ["Small Product", "Brand System", "Maker Experiment"],
      href: "/projects",
      visual: "mobile",
    },
  ],
};

const experiences = {
  ko: [
    {
      category: "Global Product Experience",
      company: "NSUSLAB",
      projects: "GGPoker · WSOP+ · PokerStake",
      role: "Product Design · Admin UX · Service Operations",
      description:
        "글로벌 포커 플랫폼의 웹사이트, 모바일 앱, 관리자 시스템과 운영 인터페이스를 설계했습니다.",
    },
    {
      category: "Admin System Experience",
      company: "더우리샵",
      projects: "Admin System · Search Ad Bidding",
      role: "UX Planning · Admin UX · Data Management",
      description:
        "운영 효율을 높이기 위한 관리자 화면과 검색광고 입찰 시스템의 구조를 설계했습니다.",
    },
    {
      category: "Web Platform Experience",
      company: "플레이니트 · 제이넷",
      projects: "Brand Promotion · Public Platform · Library Service",
      role: "Web Design · UI/UX · Publishing",
      description:
        "브랜드 프로모션과 공공기관 웹/모바일 플랫폼의 정보 구조와 화면 설계를 경험했습니다.",
    },
  ],
  en: [
    {
      category: "Global Product Experience",
      company: "NSUSLAB",
      projects: "GGPoker · WSOP+ · PokerStake",
      role: "Product Design · Admin UX · Service Operations",
      description:
        "Designed web, app, admin system, and service operation interfaces for global poker platforms.",
    },
    {
      category: "Admin System Experience",
      company: "Thewoorishop",
      projects: "Admin System · Search Ad Bidding",
      role: "UX Planning · Admin UX · Data Management",
      description:
        "Designed admin screens and search ad bidding structures to improve operational efficiency.",
    },
    {
      category: "Web Platform Experience",
      company: "Playnit / Jnet",
      projects: "Brand Promotion · Public Platform · Library Service",
      role: "Web Design · UI/UX · Publishing",
      description:
        "Worked on information architecture and screen design for brand promotions and public web/mobile platforms.",
    },
  ],
};

export function HomePage({ locale = "ko" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <main className="bg-white text-[#111111]">
      <HomeHero locale={locale} />

      <section id="projects" className="relative min-h-screen overflow-hidden bg-[#F6F9FC] px-5 py-24 sm:px-8 lg:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(135deg,rgba(79,124,255,0.10),rgba(66,214,181,0.12),transparent)]" />
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-14 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <FadeIn>
            <div className="max-w-xl">
              <SectionKicker>{t.featured.eyebrow}</SectionKicker>
              <h2 className="mt-5 text-5xl font-extrabold leading-[1.04] tracking-[-0.05em] text-[#111827] sm:text-7xl">
                {t.featured.title}
              </h2>
              <p className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.035em] text-[#111827]">
                {t.featured.summary}
              </p>
              <p className="mt-6 text-lg leading-8 text-[#4B5563]">
                {t.featured.description}
              </p>
              <dl className="mt-10 grid gap-6 border-y border-[#D9E1EA] py-8 sm:grid-cols-2">
                <Meta label="Role" value={t.featured.role} />
                <Meta label="Platform" value={t.featured.platform} />
                <Meta label="Status" value={t.featured.status} />
                <Meta label="Key Features" value={t.featured.features} />
              </dl>
              <Link
                href="/projects/schedule-block"
                className="group mt-10 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#4F7CFF,#42D6B5)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(79,124,255,0.25)] transition hover:-translate-y-0.5"
              >
                View Case Study <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <FeaturedSchedulePreview />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto w-full max-w-[1200px]">
          <FadeIn>
            <div className="grid gap-8 border-t border-[#D9E1EA] pt-10 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <SectionKicker>{t.works.eyebrow}</SectionKicker>
                <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#111827] sm:text-6xl">
                  {t.works.title}
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#4B5563]">
                {t.works.description}
              </p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {selectedWorks[locale].map((work, index) => (
              <FloatCard key={work.name} delay={index * 0.06}>
                <WorkCard work={work} />
              </FloatCard>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grid min-h-[70vh] bg-[#EEF6F8] px-5 py-24 sm:px-8 lg:py-32">
        <FadeIn className="mx-auto grid max-w-[980px] content-center text-center">
          <SectionKicker>{t.about.eyebrow}</SectionKicker>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#111827] sm:text-6xl">
            {t.about.title}
          </h2>
          <div className="mx-auto mt-8 grid max-w-[680px] gap-5 text-[17px] leading-[1.75] text-[#4B5563] sm:text-lg">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="experience" className="min-h-screen bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] gap-14 lg:grid-cols-[0.32fr_0.68fr]">
          <FadeIn>
            <div className="sticky top-28">
              <SectionKicker>{t.experience.eyebrow}</SectionKicker>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#111827] sm:text-6xl">
                {t.experience.title}
              </h2>
              {"description" in t.experience ? (
                <p className="mt-6 max-w-sm text-base leading-8 text-[#4B5563]">
                  {t.experience.description}
                </p>
              ) : null}
            </div>
          </FadeIn>
          <div className="grid border-t border-[#111111]">
            {experiences[locale].map((item, index) => (
              <FadeIn key={item.category} delay={index * 0.04}>
                <ExperienceRow item={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="grid min-h-[70vh] bg-[#F8FAFF] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] content-center gap-14 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <FadeIn>
            <SectionKicker>{t.brunch.eyebrow}</SectionKicker>
            <h2 className="mt-5 max-w-lg text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#111827] sm:text-6xl">
              {t.brunch.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#4B5563]">
              {t.brunch.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <Link
              href="/writing"
              className="group relative block overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,23,42,0.12)] sm:p-12"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(135deg,#4F7CFF,#42D6B5)]" />
              <p className="text-sm font-semibold text-[#666666]">{t.brunch.meta}</p>
              <h3 className="mt-8 max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#111827] sm:text-6xl">
                {t.brunch.articleTitle}
              </h3>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#4B5563]">
                {t.brunch.articleDescription}
              </p>
              <p className="mt-12 text-sm font-semibold text-[#111827] underline decoration-[#42D6B5] decoration-2 underline-offset-8">
                {t.brunch.cta} <span className="inline-block transition group-hover:translate-x-1">→</span>
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="grid min-h-[60vh] bg-white px-5 py-24 sm:px-8 lg:py-32">
        <FadeIn className="mx-auto grid w-full max-w-[1200px] content-center">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B111A] p-8 text-white sm:p-12 lg:p-20">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.45),rgba(66,214,181,0.22)_38%,transparent_70%)] blur-2xl" />
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="relative max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-6xl">
                {t.contact.title}
              </h2>
              <Link
                href="/contact"
                className="relative inline-flex w-fit items-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111827] transition hover:-translate-y-0.5 hover:bg-[#EAF0FF]"
              >
                {t.contact.cta} →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function SectionKicker({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#666666]">
      {children}
    </p>
  );
}

function FeaturedSchedulePreview() {
  return (
    <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8">
        <div className="grid min-h-[560px] gap-6 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative flex items-end justify-center overflow-hidden rounded-[28px] bg-[#111111] p-3 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
            <div className="w-full max-w-[330px] overflow-hidden rounded-[24px] bg-white">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
                    Today
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.045em] text-[#111111]">
                    Recovery Plan
                  </p>
                </div>
                <Image src="/schedule-block/app-icon.png" alt="" width={44} height={44} className="rounded-xl" />
              </div>
              <div className="grid gap-3 bg-[#F8FAFC] p-5">
                {[
                  ["09:00", "Deep work block", "Protected focus time", "Synced"],
                  ["11:30", "Design review", "Google Calendar", "Updated"],
                  ["14:00", "OAuth QA check", "Moved after delay", "AI suggested"],
                  ["16:30", "Release notes", "End-of-day recovery", "Ready"],
                ].map(([time, title, note, status]) => (
                  <div key={title} className="rounded-xl bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-[#666666]">{time}</span>
                      <span className="text-xs font-semibold text-[#5A8DFF]">{status}</span>
                    </div>
                    <p className="mt-3 text-base font-semibold text-[#111111]">{title}</p>
                    <p className="mt-1 text-sm text-[#666666]">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <PreviewPanel title="Calendar Sync" value="94%" description="Google Calendar events stay consistent across product flows." />
            <PreviewPanel title="Auto Reschedule" value="3 blocks recovered" dark description="Delayed tasks are moved into a realistic recovery plan." />
            <PreviewPanel title="AI Collaboration" value="Suggest next block" description="AI helps propose a better order without taking control away." />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewPanel({
  title,
  value,
  description,
  dark = false,
}: {
  title: string;
  value: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "rounded-2xl bg-[#111111] p-6 text-white" : "rounded-2xl border border-[#E2E8F0] bg-white p-6"}>
      <p className={dark ? "text-xs font-semibold uppercase tracking-[0.16em] text-[#AEB6C2]" : "text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]"}>
        {title}
      </p>
      <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{value}</p>
      <p className={dark ? "mt-3 text-sm leading-6 text-[#D9DDE3]" : "mt-3 text-sm leading-6 text-[#666666]"}>
        {description}
      </p>
    </div>
  );
}

function WorkCard({
  work,
}: {
  work: {
    name: string;
    summary: string;
    role: string;
    platform: string;
    status: string;
    keywords: string[];
    href: string;
    visual: string;
  };
}) {
  return (
    <Link
      href={work.href}
      className="group flex h-full flex-col rounded-[20px] border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#111111]"
    >
      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
        <WorkPreview type={work.visual} />
      </div>
      <div className="flex flex-1 flex-col pt-8">
        <p className="text-sm font-semibold text-[#5A8DFF]">{work.status}</p>
        <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
          {work.name}
        </h3>
        <p className="mt-4 text-lg font-semibold leading-7 text-[#111111]">{work.summary}</p>
        <dl className="mt-8 grid gap-4 border-y border-[#E2E8F0] py-6">
          <Meta label="Role" value={work.role} />
          <Meta label="Platform" value={work.platform} />
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          {work.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full bg-[#F1F3F5] px-3 py-1 text-xs font-medium text-[#666666]">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function WorkPreview({ type }: { type: string }) {
  if (type === "admin") {
    return (
      <div className="min-h-[260px] rounded-2xl bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">Tournament Ops</p>
          <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-[#315EDB]">Live</span>
        </div>
        <div className="mt-5 grid gap-3">
          {["Entry status", "Payment review", "Seat assignment"].map((item, index) => (
            <div key={item} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm">
              <span className={index === 1 ? "h-2.5 w-2.5 rounded-full bg-[#5A8DFF]" : "h-2.5 w-2.5 rounded-full bg-[#111111]"} />
              <span className="font-semibold text-[#111111]">{item}</span>
              <span className="text-[#666666]">Review</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "web") {
    return (
      <div className="min-h-[260px] rounded-2xl bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">Global Web</p>
          <span className="text-xs font-semibold text-[#111111]">Trust UX</span>
        </div>
        <div className="mt-5 grid grid-cols-[1fr_0.7fr] gap-4">
          <div className="rounded-xl bg-[#111111] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AEB6C2]">Player Flow</p>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.05em]">Trust before action</p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-[#EEF4FF] p-4 text-sm font-semibold text-[#111111]">Backer relation</div>
            <div className="rounded-xl bg-[#F8FAFC] p-4 text-sm font-semibold text-[#111111]">Promotion ops</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-[260px] place-items-center rounded-2xl bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
      <div className="w-40 rounded-[2rem] bg-[#111111] p-2 shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
        <div className="rounded-[1.55rem] bg-white p-4">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-[#D9DDE3]" />
          <div className="mt-6 rounded-xl bg-[#EEF4FF] p-4">
            <p className="text-xs font-semibold text-[#315EDB]">mobimobi</p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#111111]">Small product lab</p>
          </div>
          <div className="mt-4 grid gap-2">
            {["Idea", "Flow", "Brand"].map((item) => (
              <div key={item} className="rounded-lg bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-[#111111]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceRow({
  item,
}: {
  item: {
    category: string;
    company: string;
    projects: string;
    role: string;
    description: string;
  };
}) {
  return (
    <article className="grid gap-8 border-b border-[#E2E8F0] py-10 lg:grid-cols-[0.42fr_0.58fr]">
      <div>
        <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#111111]">
          {item.category}
        </h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#666666]">
          {item.company}
        </p>
      </div>
      <div className="grid gap-6">
        <InfoLine label="Projects" value={item.projects} />
        <InfoLine label="Role" value={item.role} />
        <p className="max-w-2xl text-base leading-8 text-[#111111]">{item.description}</p>
      </div>
    </article>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold leading-7 text-[#111111]">{value}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-semibold leading-6 text-[#111111]">{value}</dd>
    </div>
  );
}
