import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";

type Locale = "ko" | "en";

const content = {
  ko: {
    works: {
      eyebrow: "Selected Works",
      title: "제품이 실제로 작동하는 장면을 설계합니다.",
      description:
        "개인 제품 출시, 글로벌 서비스 운영, 관리자 시스템, AI 협업 제작 경험을 중심으로 정리했습니다.",
    },
    about: {
      eyebrow: "About",
      title: "사용자 화면과 운영 화면을 함께 보는 Product Designer",
      body:
        "10년 이상의 실무 경험을 바탕으로 웹, 모바일, 관리자 시스템을 설계해왔습니다. 국내외 서비스 운영 환경에서 사용자 경험과 운영 흐름이 끊기지 않도록 구조를 만들고, 최근에는 AI와 협업하며 직접 제품을 만들고 운영합니다.",
      facts: ["10년+ 실무 경험", "Web · Mobile · Admin", "국내외 서비스 운영", "AI 협업 메이커"],
    },
    experience: {
      eyebrow: "Experience",
      title: "회사명보다, 어떤 제품 환경을 다뤘는지 보여줍니다.",
    },
    brunch: {
      eyebrow: "brunch",
      title: "제품을 만드는 과정을 기록합니다.",
      description: "AI와 협업하며 실제 제품을 만들고 운영한 기록",
      articleTitle: "AI로 첫 앱 개발기",
      articleDescription:
        "아이디어를 정리하고, UX 흐름을 만들고, 출시 가능한 앱으로 다듬어간 과정을 기록합니다.",
      meta: "AI Product Making Series",
      cta: "Read on brunch",
    },
    contact: {
      title:
        "프로덕트 디자인, 관리자 시스템 UX, 초기 서비스 구조 설계와 운영 기반 UX 작업을 함께할 수 있습니다.",
      cta: "Contact Me",
      links: ["Email", "Portfolio", "brunch"],
    },
  },
  en: {
    works: {
      eyebrow: "Selected Works",
      title: "I design the scenes where products actually work.",
      description:
        "A selection of shipped products, global service operations, admin systems, and AI-assisted product making.",
    },
    about: {
      eyebrow: "About",
      title: "A Product Designer who sees both user and operation screens",
      body:
        "With over a decade of hands-on experience, I design web, mobile, and admin systems. I build structures that connect user experience with service operations, and I now make and operate products with AI as a collaborator.",
      facts: ["10+ years", "Web · Mobile · Admin", "Global operations", "AI-assisted maker"],
    },
    experience: {
      eyebrow: "Experience",
      title: "More than company names, this is the product context I have handled.",
    },
    brunch: {
      eyebrow: "brunch",
      title: "Notes from the process of making products.",
      description: "Records from building and operating real products with AI",
      articleTitle: "Building my first app with AI",
      articleDescription:
        "A series about turning an idea into UX flows, product structure, and a shipped app.",
      meta: "AI Product Making Series",
      cta: "Read on brunch",
    },
    contact: {
      title:
        "Available for product design, admin system UX, early product structure, and operation-based UX work.",
      cta: "Let’s Talk",
      links: ["Email", "Portfolio", "brunch"],
    },
  },
};

const works = {
  ko: [
    {
      name: "Schedule Block",
      summary: "AI 협업 기반 스케줄링 앱",
      role: "Product Design · UX Flow · AI Collaboration",
      platform: "iOS",
      status: "Live Product / App Store Released",
      keywords: "Google Calendar Sync · Auto Rescheduling · Personal Productivity",
      href: "/projects/schedule-block",
      type: "calendar",
    },
    {
      name: "WSOP+",
      summary: "글로벌 포커 대회 앱 및 관리자 시스템",
      role: "Product Design · Admin UX · Service Operations",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      keywords: "Tournament Registration · Payment Flow · Operation Status",
      href: "/projects/wsop-plus",
      type: "admin",
    },
    {
      name: "GGPoker / PokerStake",
      summary: "글로벌 서비스 웹 UX와 스테이킹 참여 흐름",
      role: "UI/UX Design · Service UX · Promotion Flow",
      platform: "Web",
      status: "Service / Case Study Draft",
      keywords: "Global Website · Player/Backer Flow · Trust-based UX",
      href: "/projects/pokerstake",
      type: "web",
    },
    {
      name: "mobimobi",
      summary: "개인 메이커 실험과 사이드 프로젝트",
      role: "Product Concept · UI Direction · Maker Experiment",
      platform: "Web · Mobile Concept",
      status: "Side Project",
      keywords: "Small Product · Brand System · Personal Experiment",
      href: "/projects",
      type: "mobile",
    },
  ],
  en: [
    {
      name: "Schedule Block",
      summary: "AI-assisted scheduling app",
      role: "Product Design · UX Flow · AI Collaboration",
      platform: "iOS",
      status: "Live Product / App Store Released",
      keywords: "Google Calendar Sync · Auto Rescheduling · Personal Productivity",
      href: "/projects/schedule-block",
      type: "calendar",
    },
    {
      name: "WSOP+",
      summary: "Global poker tournament app and admin system",
      role: "Product Design · Admin UX · Service Operations",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      keywords: "Tournament Registration · Payment Flow · Operation Status",
      href: "/projects/wsop-plus",
      type: "admin",
    },
    {
      name: "GGPoker / PokerStake",
      summary: "Global service web UX and staking participation flows",
      role: "UI/UX Design · Service UX · Promotion Flow",
      platform: "Web",
      status: "Service / Case Study Draft",
      keywords: "Global Website · Player/Backer Flow · Trust-based UX",
      href: "/projects/pokerstake",
      type: "web",
    },
    {
      name: "mobimobi",
      summary: "Personal maker experiments and side product direction",
      role: "Product Concept · UI Direction · Maker Experiment",
      platform: "Web · Mobile Concept",
      status: "Side Project",
      keywords: "Small Product · Brand System · Personal Experiment",
      href: "/projects",
      type: "mobile",
    },
  ],
};

const experiences = {
  ko: [
    {
      company: "NSUSLAB",
      period: "2021 - 2025",
      summary: "글로벌 포커 플랫폼 운영 경험",
      projects: "GGPoker · WSOP+ · PokerStake",
      role: "Product Design · Admin UX · Service Operations",
      points: [
        "GGPoker 웹사이트 UX/UI 리디자인",
        "WSOP+ 앱 및 관리자 시스템 설계",
        "PokerStake 운영 및 프로모션 디자인",
        "글로벌 이벤트 및 서비스 운영 디자인",
      ],
    },
    {
      company: "더우리샵",
      period: "2019 - 2020",
      summary: "운영자가 매일 사용하는 관리자와 광고 입찰 시스템 설계",
      projects: "Admin System · Search Ad Bidding",
      role: "UX Planning · Admin UX · Data Management",
      points: ["관리자 시스템 기획", "검색광고 입찰 플로우", "운영 데이터 관리 화면"],
    },
    {
      company: "플레이니트 / 제이넷",
      period: "2013 - 2018",
      summary: "브랜드 캠페인, 공공기관, 도서관 플랫폼 기반 UIUX",
      projects: "Brand Promotion · Public Platform · Library Service",
      role: "Web Design · UIUX · Publishing",
      points: ["프로모션 페이지", "공공기관 플랫폼", "정보 접근성 기반 화면 설계"],
    },
  ],
  en: [
    {
      company: "NSUSLAB",
      period: "2021 - 2025",
      summary: "Global poker platform operation experience",
      projects: "GGPoker · WSOP+ · PokerStake",
      role: "Product Design · Admin UX · Service Operations",
      points: [
        "GGPoker website UX/UI redesign",
        "WSOP+ app and admin system design",
        "PokerStake operation and promotion design",
        "Global event and service operation design",
      ],
    },
    {
      company: "Thewoorishop",
      period: "2019 - 2020",
      summary: "Admin and search advertising bidding system design",
      projects: "Admin System · Search Ad Bidding",
      role: "UX Planning · Admin UX · Data Management",
      points: ["Admin system planning", "Search ad bidding flow", "Operational data screens"],
    },
    {
      company: "Playnit / Jnet",
      period: "2013 - 2018",
      summary: "Brand campaigns, public platforms, and library service UIUX",
      projects: "Brand Promotion · Public Platform · Library Service",
      role: "Web Design · UIUX · Publishing",
      points: ["Promotion pages", "Public platforms", "Accessibility-minded screen design"],
    },
  ],
};

export function HomePage({ locale = "ko" }: { locale?: Locale }) {
  const t = content[locale];
  const currentWorks = works[locale];
  const currentExperiences = experiences[locale];

  return (
    <main className="bg-[#05070A] text-white">
      <HomeHero locale={locale} />

      <section id="projects" className="border-b border-white/[0.07] bg-[#05070A]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-24 sm:px-8 lg:py-32">
          <FadeIn>
            <SectionIntro
              eyebrow={t.works.eyebrow}
              title={t.works.title}
              description={t.works.description}
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {currentWorks.map((work, index) => (
              <FadeIn key={work.name} delay={index * 0.04}>
                <WorkCard work={work} featured={index === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/[0.07] bg-[#080B10]">
        <div className="mx-auto w-full max-w-[980px] px-5 py-24 text-center sm:px-8 lg:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4DE1C1]">
              {t.about.eyebrow}
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f6f8fb] sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-base font-normal leading-8 text-white/64 sm:text-lg">
              {t.about.body}
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              {t.about.facts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-2xl border border-white/[0.08] bg-[#10161D] px-4 py-4 text-sm font-medium text-white/76"
                >
                  {fact}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="border-b border-white/[0.07] bg-[#05070A]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-32">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
            />
          </FadeIn>
          <div className="grid gap-4">
            {currentExperiences.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.04}>
                <ExperienceItem item={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="border-b border-white/[0.07] bg-[#080B10]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:py-32">
          <FadeIn>
            <SectionIntro
              eyebrow={t.brunch.eyebrow}
              title={t.brunch.title}
              description={t.brunch.description}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-[#10161D] p-6 transition hover:border-[#4DE1C1]/22 sm:p-8">
              <p className="text-sm font-medium text-[#4DE1C1]">{t.brunch.meta}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-white">
                {t.brunch.articleTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                {t.brunch.articleDescription}
              </p>
              <Link
                href="/writing"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#4DE1C1]"
              >
                {t.brunch.cta} <span aria-hidden="true">→</span>
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="bg-[#05070A]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-24 sm:px-8 lg:py-32">
          <FadeIn>
            <div className="border-y border-white/[0.08] py-14 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <p className="max-w-3xl text-2xl font-semibold leading-10 tracking-[-0.03em] text-white sm:text-4xl sm:leading-tight">
                {t.contact.title}
              </p>
              <div className="mt-8 lg:mt-0">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center rounded-full bg-white px-5 text-sm font-semibold text-[#05070A] transition hover:-translate-y-0.5 hover:bg-[#eef3f7]"
                >
                  {t.contact.cta}
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 lg:col-span-2">
                {t.contact.links.map((link) => (
                  <span
                    key={link}
                    className="rounded-full border border-white/[0.08] px-4 py-2 text-sm text-white/52"
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4DE1C1]">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f6f8fb] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base font-normal leading-8 text-white/58 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function WorkCard({
  work,
  featured,
}: {
  work: {
    name: string;
    summary: string;
    role: string;
    platform: string;
    status: string;
    keywords: string;
    href: string;
    type: string;
  };
  featured: boolean;
}) {
  return (
    <Link
      href={work.href}
      className={`group block h-full overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#10161D] transition hover:-translate-y-1 hover:border-[#4DE1C1]/24 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`grid gap-0 ${featured ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-white/52">
              {work.status}
            </span>
            <span className="rounded-full border border-[#5A8DFF]/20 bg-[#5A8DFF]/8 px-3 py-1 text-xs font-medium text-[#b7cbff]">
              {work.platform}
            </span>
          </div>
          <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {work.name}
          </h3>
          <p className="mt-3 text-base font-medium text-white/72">{work.summary}</p>
          <div className="mt-8 grid gap-5 text-sm">
            <Meta label="Role" value={work.role} />
            <Meta label="Keywords" value={work.keywords} />
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#4DE1C1]">
            View case <span aria-hidden="true">→</span>
          </div>
        </div>
        <div className="border-t border-white/[0.07] bg-[#0B1016] p-5 sm:p-6 lg:border-l lg:border-t-0">
          <ProductPreview type={work.type} />
        </div>
      </div>
    </Link>
  );
}

function ProductPreview({ type }: { type: string }) {
  if (type === "calendar") {
    return (
      <div className="min-h-[18rem] rounded-[1.2rem] border border-white/[0.08] bg-[#111821] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-white/18" />
          <div className="h-7 w-16 rounded-full bg-[#4DE1C1]/14" />
        </div>
        <div className="grid gap-2">
          {["Focus block", "Calendar sync", "Auto reschedule", "Evening review"].map((item, index) => (
            <div key={item} className="grid grid-cols-[3rem_1fr] gap-3 rounded-xl border border-white/[0.06] bg-white/[0.035] p-3">
              <span className="text-xs text-white/34">{index + 9}:00</span>
              <span className="text-sm text-white/72">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "admin") {
    return (
      <div className="min-h-[18rem] rounded-[1.2rem] border border-white/[0.08] bg-[#111821] p-4">
        <div className="grid grid-cols-[5rem_1fr] gap-3">
          <div className="grid gap-2">
            {["Entry", "Payment", "Status", "User"].map((item) => (
              <div key={item} className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-white/42">
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-3">
            <div className="h-20 rounded-xl bg-white/[0.06]" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-xl bg-[#5A8DFF]/16" />
              <div className="h-16 rounded-xl bg-white/[0.06]" />
              <div className="h-16 rounded-xl bg-[#4DE1C1]/12" />
            </div>
            <div className="h-24 rounded-xl bg-white/[0.05]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="grid min-h-[18rem] place-items-center rounded-[1.2rem] border border-white/[0.08] bg-[#111821] p-4">
        <div className="h-56 w-32 rounded-[2rem] border border-white/[0.1] bg-[#080B10] p-3">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-white/16" />
          <div className="mt-6 h-20 rounded-2xl bg-[#5A8DFF]/18" />
          <div className="mt-3 grid gap-2">
            <div className="h-7 rounded-xl bg-white/[0.07]" />
            <div className="h-7 rounded-xl bg-[#4DE1C1]/12" />
            <div className="h-7 rounded-xl bg-white/[0.07]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[18rem] rounded-[1.2rem] border border-white/[0.08] bg-[#111821] p-4">
      <div className="h-10 rounded-xl bg-white/[0.06]" />
      <div className="mt-4 grid grid-cols-[1fr_0.8fr] gap-3">
        <div className="h-44 rounded-xl bg-[#5A8DFF]/14" />
        <div className="grid gap-3">
          <div className="rounded-xl bg-white/[0.06]" />
          <div className="rounded-xl bg-[#4DE1C1]/12" />
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  item,
}: {
  item: {
    company: string;
    period: string;
    summary: string;
    projects: string;
    role: string;
    points: string[];
  };
}) {
  return (
    <article className="rounded-[1.35rem] border border-white/[0.08] bg-[#10161D] p-6 sm:p-7">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-medium text-[#4DE1C1]">{item.period}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
          <p className="mt-3 text-sm leading-6 text-white/58">{item.summary}</p>
        </div>
        <div className="grid gap-4">
          <Meta label="Projects" value={item.projects} />
          <Meta label="Role" value={item.role} />
          <ul className="grid gap-2 pt-2 text-sm leading-6 text-white/62">
            {item.points.map((point) => (
              <li key={point} className="border-t border-white/[0.06] pt-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/34">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-white/68">{value}</p>
    </div>
  );
}
