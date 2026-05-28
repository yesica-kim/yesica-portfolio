import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";

type Locale = "ko" | "en";

const page = {
  ko: {
    works: {
      eyebrow: "Projects",
      title: "대표 프로젝트",
      description:
        "실제 제품 출시와 서비스 운영 맥락이 있는 작업을 중심으로 정리했습니다.",
    },
    about: {
      eyebrow: "About",
      title: "제품이 쓰이고 운영되는 장면을 함께 봅니다",
      body: (
        <>
          화면을 예쁘게 정리하는 일보다,
          <br />
          사용자가 행동하고 운영자가 판단하는 흐름을 먼저 봅니다.
          <br />
          웹, 모바일, 관리자 시스템과 글로벌 서비스 운영 경험을 바탕으로
          <br />
          최근에는 AI와 협업하며 직접 제품을 만들고 운영하고 있습니다.
        </>
      ),
    },
    experience: {
      eyebrow: "Experience",
      title: "대표 제품 환경",
    },
    brunch: {
      eyebrow: "brunch",
      title: "제품을 만드는 과정을 기록합니다",
      description: "AI와 협업하며 실제 제품을 만들고 운영한 기록",
      articleTitle: "AI로 첫 앱 개발기",
      articleDescription:
        "아이디어에서 UX 흐름, 제품 구조, 출시까지 이어진 과정을 기록합니다.",
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
    works: {
      eyebrow: "Projects",
      title: "Selected Works",
      description:
        "Selected work grounded in product launches, service operations, and real usage contexts.",
    },
    about: {
      eyebrow: "About",
      title: "I look at the moments where products are used and operated",
      body: (
        <>
          I care less about making screens look polished in isolation,
          <br />
          and more about how people act, decide, recover, and keep services running.
          <br />
          My work spans web, mobile, admin systems, global operations,
          <br />
          and recently, building and operating products directly with AI.
        </>
      ),
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
        "Notes on moving from idea to UX flow, product structure, and release.",
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

const works = {
  ko: [
    {
      name: "Schedule Block",
      summary: "AI 협업 기반 개인 스케줄링 앱",
      role: "Product Design",
      platform: "iOS",
      status: "Live Product",
      description:
        "앱 출시, Google Calendar 연동, 일정 회복 시나리오까지 직접 설계하며 개인 생산성 제품의 핵심 흐름을 만들었습니다.",
      keywords: ["Google Calendar Sync", "Auto Rescheduling", "Personal Productivity"],
      href: "/projects/schedule-block",
      visual: "calendar",
    },
    {
      name: "WSOP+",
      summary: "글로벌 포커 대회 앱과 관리자 시스템",
      role: "Product Design · Admin UX",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      description:
        "대회 접수, 결제, 상태 관리, 운영자 확인이 이어지는 양면 서비스 흐름을 설계했습니다.",
      keywords: ["Registration", "Payment Flow", "Operation Status"],
      href: "/projects/wsop-plus",
      visual: "admin",
    },
    {
      name: "GGPoker / PokerStake",
      summary: "글로벌 서비스 웹 UX와 참여 구조",
      role: "UI/UX Design · Service UX",
      platform: "Web",
      status: "Service Experience",
      description:
        "글로벌 웹사이트와 Player / Backer 관계가 있는 복잡한 참여 구조를 사용자가 이해할 수 있도록 정리했습니다.",
      keywords: ["Global Website", "Player / Backer Flow", "Trust UX"],
      href: "/projects/pokerstake",
      visual: "web",
    },
    {
      name: "mobimobi",
      summary: "개인 메이커 실험과 제품 콘셉트",
      role: "Product Concept",
      platform: "Web · Mobile Concept",
      status: "Side Project",
      description:
        "작은 제품 아이디어를 브랜드, 화면 구조, 사용 흐름으로 빠르게 검증한 개인 실험입니다.",
      keywords: ["Small Product", "Brand System", "Maker Experiment"],
      href: "/projects",
      visual: "mobile",
    },
  ],
  en: [
    {
      name: "Schedule Block",
      summary: "AI-assisted personal scheduling app",
      role: "Product Design",
      platform: "iOS",
      status: "Live Product",
      description:
        "Designed and shipped a personal productivity flow across app release, Google Calendar sync, and recovery scenarios after plans slip.",
      keywords: ["Google Calendar Sync", "Auto Rescheduling", "Personal Productivity"],
      href: "/projects/schedule-block",
      visual: "calendar",
    },
    {
      name: "WSOP+",
      summary: "Global tournament app and admin system",
      role: "Product Design · Admin UX",
      platform: "Mobile App · Admin Web",
      status: "Live Service",
      description:
        "Designed two-sided flows across registration, payment, status management, and operator review.",
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
      description:
        "Structured global web UX and complex Player / Backer participation flows into understandable decision paths.",
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
      description:
        "A personal experiment for testing small product ideas through brand, screen structure, and user flows.",
      keywords: ["Small Product", "Brand System", "Maker Experiment"],
      href: "/projects",
      visual: "mobile",
    },
  ],
};

const experiences = {
  ko: [
    {
      company: "NSUSLAB",
      label: "Global Product Experience",
      projects: ["GGPoker", "WSOP+", "PokerStake"],
      role: "Product Design · Admin UX · Service Operations",
      details: [
        "GGPoker 웹사이트 UX/UI 리디자인",
        "WSOP+ 앱 및 관리자 시스템 설계",
        "PokerStake 운영 및 프로모션 디자인",
        "글로벌 이벤트와 서비스 운영 디자인",
      ],
    },
    {
      company: "더우리샵",
      label: "Admin System Experience",
      projects: ["Admin System", "Search Ad Bidding"],
      role: "UX Planning · Admin UX · Data Management",
      details: ["운영자 중심 관리자 시스템", "검색광고 입찰 플로우", "운영 데이터 관리 화면"],
    },
    {
      company: "플레이니트 / 제이넷",
      label: "Web Platform Experience",
      projects: ["Brand Promotion", "Public Platform", "Library Service"],
      role: "Web Design · UIUX · Publishing",
      details: ["브랜드 캠페인", "공공기관 플랫폼", "정보 접근성 기반 화면 설계"],
    },
  ],
  en: [
    {
      company: "NSUSLAB",
      label: "Global Product Experience",
      projects: ["GGPoker", "WSOP+", "PokerStake"],
      role: "Product Design · Admin UX · Service Operations",
      details: [
        "GGPoker website UX/UI redesign",
        "WSOP+ app and admin system design",
        "PokerStake operation and promotion design",
        "Global event and service operation design",
      ],
    },
    {
      company: "Thewoorishop",
      label: "Admin System Experience",
      projects: ["Admin System", "Search Ad Bidding"],
      role: "UX Planning · Admin UX · Data Management",
      details: ["Operator-centered admin system", "Search ad bidding flow", "Operational data screens"],
    },
    {
      company: "Playnit / Jnet",
      label: "Web Platform Experience",
      projects: ["Brand Promotion", "Public Platform", "Library Service"],
      role: "Web Design · UIUX · Publishing",
      details: ["Brand campaigns", "Public platforms", "Accessibility-minded screen design"],
    },
  ],
};

export function HomePage({ locale = "ko" }: { locale?: Locale }) {
  const t = page[locale];

  return (
    <main className="bg-white text-[#111111]">
      <HomeHero locale={locale} />

      <section id="projects" className="min-h-screen border-t border-[#D9DDE3] bg-[#FAFBFC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px]">
          <FadeIn>
            <SectionIntro
              eyebrow={t.works.eyebrow}
              title={t.works.title}
              description={t.works.description}
            />
          </FadeIn>
          <div className="mt-16 grid gap-20">
            {works[locale].map((work, index) => (
              <FadeIn key={work.name} delay={index * 0.03}>
                <ProjectShowcase work={work} index={index} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grid min-h-screen bg-white px-5 py-20 text-center sm:px-8 lg:py-28">
        <FadeIn className="mx-auto grid max-w-[980px] content-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#666666] uppercase">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#111111] sm:text-5xl">
            {t.about.title}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#111111] sm:text-xl sm:leading-9">
            {t.about.body}
          </p>
        </FadeIn>
      </section>

      <section id="experience" className="grid min-h-screen bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] content-center gap-14 lg:grid-cols-[0.28fr_0.72fr]">
          <FadeIn>
            <SectionIntro eyebrow={t.experience.eyebrow} title={t.experience.title} />
          </FadeIn>
          <div className="grid gap-8">
            {experiences[locale].map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.04}>
                <ExperienceBlock item={item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="grid min-h-screen bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] content-center gap-16 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <FadeIn>
            <SectionIntro
              eyebrow={t.brunch.eyebrow}
              title={t.brunch.title}
              description={t.brunch.description}
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <Link
              href="/writing"
              className="block bg-[#111111] p-8 text-white transition hover:bg-[#5A8DFF] sm:p-12"
            >
              <p className="text-sm font-medium text-[#C8D0DA]">{t.brunch.meta}</p>
              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                {t.brunch.articleTitle}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#E6E9EE]">
                {t.brunch.articleDescription}
              </p>
              <p className="mt-10 text-sm font-semibold text-white">
                {t.brunch.cta} →
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="grid min-h-screen bg-[#FAFBFC] px-5 py-20 sm:px-8 lg:py-28">
        <FadeIn className="mx-auto grid w-full max-w-[1240px] content-center">
          <div className="grid gap-10 border-t border-[#111111] pt-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#111111] sm:text-5xl">
              {t.contact.title}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5A8DFF]"
            >
              {t.contact.cta} →
            </Link>
          </div>
        </FadeIn>
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
      <p className="text-sm font-semibold tracking-[0.18em] text-[#666666] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#111111] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectShowcase({
  work,
  index,
  locale,
}: {
  work: {
    name: string;
    summary: string;
    role: string;
    platform: string;
    status: string;
    description: string;
    keywords: string[];
    href: string;
    visual: string;
  };
  index: number;
  locale: Locale;
}) {
  const reversed = index % 2 === 1;
  const featured = index === 0;

  return (
    <Link
      href={work.href}
      className={`grid min-h-[82vh] gap-12 border-t transition hover:border-[#5A8DFF] ${
        featured
          ? "border-[#111111] pt-12 lg:grid-cols-[0.66fr_0.34fr] lg:items-center"
          : "border-[#D9DDE3] pt-12 lg:min-h-[72vh] lg:grid-cols-[0.44fr_0.56fr] lg:items-center"
      } ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ProjectVisual type={work.visual} featured={featured} />
      <div className={featured ? "max-w-lg lg:pl-4" : "max-w-xl"}>
        <p className="text-sm font-semibold text-[#5A8DFF]">
          {featured ? (locale === "ko" ? "대표 프로젝트" : "Representative Work") : work.status}
        </p>
        <h3
          className={`mt-4 font-semibold tracking-[-0.045em] text-[#111111] ${
            featured ? "text-5xl sm:text-7xl" : "text-4xl sm:text-6xl"
          }`}
        >
          {work.name}
        </h3>
        <p className="mt-5 text-2xl leading-9 text-[#111111]">{work.summary}</p>
        <p className="mt-6 text-base leading-8 text-[#111111]">{work.description}</p>
        <dl className="mt-9 grid gap-5 sm:grid-cols-3">
          <Meta label="Role" value={work.role} />
          <Meta label="Platform" value={work.platform} />
          <Meta label="Status" value={work.status} />
        </dl>
        <div className="mt-8 flex flex-wrap gap-2">
          {work.keywords.map((keyword) => (
            <span key={keyword} className="border border-[#D9DDE3] bg-white px-3 py-1 text-xs font-medium text-[#666666]">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ProjectVisual({ type, featured = false }: { type: string; featured?: boolean }) {
  return (
    <div className="bg-white p-3 shadow-[0_26px_80px_rgba(17,17,17,0.13)] sm:p-5">
      <div className={`${featured ? "min-h-[560px]" : "min-h-[430px]"} bg-[#EEF2F5] p-5 sm:p-7`}>
        {type === "admin" ? (
          <AdminPreview />
        ) : type === "mobile" ? (
          <MobilePreview />
        ) : type === "web" ? (
          <WebPreview />
        ) : (
          <CalendarPreview featured={featured} />
        )}
      </div>
    </div>
  );
}

function CalendarPreview({ featured = false }: { featured?: boolean }) {
  return (
    <div className="grid h-full gap-5 lg:grid-cols-[0.72fr_0.28fr]">
      <div className="bg-white shadow-[0_18px_45px_rgba(17,17,17,0.08)]">
        <div className="flex items-center justify-between border-b border-[#D9DDE3] px-5 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/schedule-block/app-icon.png"
              alt=""
              width={featured ? 46 : 38}
              height={featured ? 46 : 38}
              className="rounded-xl"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
                Schedule Block
              </p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#111111]">
                Today recovery plan
              </p>
            </div>
          </div>
          <span className="hidden bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-[#315EDB] sm:inline-flex">
            Live
          </span>
        </div>
        <div className="grid gap-3 bg-[#FAFBFC] p-5">
          {[
            ["09:00", "Deep work block", "Protected focus time", "Synced"],
            ["11:30", "Design review", "Google Calendar", "Updated"],
            ["14:00", "OAuth QA check", "Moved after delay", "AI suggested"],
            ["16:30", "Release notes", "End-of-day recovery", "Ready"],
          ].map(([time, title, note, status], index) => (
            <div
              key={title}
              className="grid gap-3 bg-white p-4 shadow-[0_8px_22px_rgba(17,17,17,0.045)] sm:grid-cols-[4.5rem_1fr_auto] sm:items-center"
            >
              <span className="text-sm font-semibold text-[#666666]">{time}</span>
              <span>
                <span className="block text-base font-semibold text-[#111111]">{title}</span>
                <span className="mt-1 block text-sm text-[#666666]">{note}</span>
              </span>
              <span className={index === 2 ? "text-xs font-semibold text-[#5A8DFF]" : "text-xs font-semibold text-[#666666]"}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="bg-white p-4 shadow-[0_14px_35px_rgba(17,17,17,0.075)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
            Calendar Sync
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#111111]">94%</p>
          <p className="mt-2 text-sm leading-6 text-[#666666]">
            Connected events kept consistent across devices.
          </p>
        </div>
        <div className="bg-[#111111] p-4 text-white shadow-[0_14px_35px_rgba(17,17,17,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AEB6C2]">
            Auto Reschedule
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.045em]">
            3 blocks recovered
          </p>
          <div className="mt-5 grid grid-cols-4 gap-1">
            {[58, 78, 42, 90].map((height, index) => (
              <div key={index} className="flex h-16 items-end bg-[#2A2F36]">
                <div
                  className={index === 3 ? "w-full bg-[#5A8DFF]" : "w-full bg-[#D7DDE5]"}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPreview() {
  return (
    <div className="grid h-full grid-cols-[5rem_1fr] gap-4 bg-white p-4 shadow-[0_14px_35px_rgba(17,17,17,0.07)] sm:grid-cols-[8rem_1fr] sm:p-5">
      <div className="grid content-start gap-2 border-r border-[#D9DDE3] pr-3">
        {["Entry", "Payment", "Status", "User"].map((item, index) => (
          <div
            key={item}
            className={
              index === 2
                ? "bg-[#111111] px-2 py-2 text-xs font-semibold text-white"
                : "bg-[#F4F6F8] px-2 py-2 text-xs font-semibold text-[#666666]"
            }
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <div className="flex items-center justify-between border-b border-[#D9DDE3] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
              Tournament Ops
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#111111]">
              WSOP+ Admin
            </p>
          </div>
          <span className="bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-[#315EDB]">
            Live Service
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["2,418 Entries", "376 Pending", "98.2% Paid"].map((item) => (
            <div key={item} className="bg-[#F5F7FA] p-3 text-sm font-semibold text-[#111111]">
              {item}
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          {["Player verification", "Payment exception", "Seat assignment"].map((item) => (
            <div key={item} className="grid grid-cols-[1fr_auto] bg-[#FAFBFC] px-3 py-3 text-sm">
              <span className="font-medium text-[#222222]">{item}</span>
              <span className="text-[#666666]">Review</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebPreview() {
  return (
    <div className="h-full bg-white p-5 shadow-[0_14px_35px_rgba(17,17,17,0.07)]">
      <div className="mb-6 flex items-center justify-between border-b border-[#D9DDE3] pb-4">
        <p className="text-xl font-semibold tracking-[-0.04em] text-[#111111]">
          GGPoker / PokerStake
        </p>
        <span className="text-xs font-semibold text-[#666666]">Global Web</span>
      </div>
      <div className="grid grid-cols-[1fr_0.7fr] gap-4">
        <div className="bg-[#111111] p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AEB6C2]">
            Player Flow
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
            Trust before action
          </p>
          <div className="mt-8 h-2 w-full bg-[#333943]">
            <div className="h-full w-3/4 bg-[#5A8DFF]" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="bg-[#EEF4FF] p-4 text-sm font-semibold text-[#111111]">
            Backer relation
          </div>
          <div className="bg-[#F5F7FA] p-4 text-sm font-semibold text-[#111111]">
            Promotion ops
          </div>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="grid h-full place-items-center bg-white shadow-[0_14px_35px_rgba(17,17,17,0.07)]">
      <div className="h-72 w-40 rounded-[2rem] border border-[#D9DDE3] bg-[#111111] p-2 shadow-[0_20px_45px_rgba(17,17,17,0.16)]">
        <div className="h-full rounded-[1.55rem] bg-white p-3">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-[#D9DDE3]" />
          <div className="mt-5 bg-[#EEF4FF] p-3">
            <p className="text-xs font-semibold text-[#315EDB]">mobimobi</p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#111111]">
              Small product lab
            </p>
          </div>
          <div className="mt-3 grid gap-2">
            {["Idea", "Flow", "Brand"].map((item) => (
              <div key={item} className="bg-[#F5F7FA] px-3 py-2 text-xs font-semibold text-[#111111]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceBlock({
  item,
}: {
  item: {
    company: string;
    label: string;
    projects: string[];
    role: string;
    details: string[];
  };
}) {
  return (
    <article className="border-t border-[#D9DDE3] pt-10">
      <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr]">
        <div>
          <div className="flex flex-wrap gap-3">
            {item.projects.map((project) => (
              <span key={project} className="bg-white px-4 py-2 text-xl font-semibold tracking-[-0.04em] text-[#111111] shadow-[0_10px_30px_rgba(17,17,17,0.06)]">
                {project}
              </span>
            ))}
          </div>
          <h3 className="mt-8 text-4xl font-semibold tracking-[-0.045em] text-[#111111]">
            {item.label}
          </h3>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#666666]">
            {item.company}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#666666] uppercase">
            Role
          </p>
          <p className="mt-2 text-base font-medium text-[#111111]">{item.role}</p>
          <ul className="mt-6 grid gap-3 text-base leading-7 text-[#111111]">
            {item.details.map((detail) => (
              <li key={detail} className="border-l border-[#D9DDE3] pl-4">
                {detail}
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
      <dt className="text-xs font-semibold tracking-[0.14em] text-[#666666] uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium leading-6 text-[#222222]">{value}</dd>
    </div>
  );
}
