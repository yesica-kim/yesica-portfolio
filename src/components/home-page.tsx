import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";

type Locale = "ko" | "en";

const page = {
  ko: {
    works: {
      eyebrow: "Projects",
      title: "만든 것과 운영한 것",
      description:
        "앱, 웹, 관리자 시스템, 글로벌 서비스 운영 경험을 프로젝트 단위로 정리했습니다.",
    },
    about: {
      eyebrow: "About",
      title: "Product Design · Admin UX · Service Operations · AI Collaboration",
      body:
        "사용자 화면을 그리는 일에서 멈추지 않고, 운영자가 판단하고 서비스가 유지되는 흐름까지 설계합니다.",
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
      title: "Products built and operated",
      description:
        "A selection of apps, web services, admin systems, and global service operation work.",
    },
    about: {
      eyebrow: "About",
      title: "Product Design · Admin UX · Service Operations · AI Collaboration",
      body:
        "I design beyond user-facing screens, connecting the decisions operators make with the flows that keep services running.",
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
        "일정이 밀린 뒤에도 다시 회복할 수 있도록 Google Calendar Sync와 Auto Rescheduling 흐름을 설계했습니다.",
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
        "Designed Google Calendar Sync and Auto Rescheduling flows so people can recover after plans slip.",
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

      <section id="projects" className="border-t border-[#E6E9EE] bg-[#FAFBFC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-[1120px]">
          <FadeIn>
            <SectionIntro
              eyebrow={t.works.eyebrow}
              title={t.works.title}
              description={t.works.description}
            />
          </FadeIn>
          <div className="mt-14 grid gap-12">
            {works[locale].map((work, index) => (
              <FadeIn key={work.name} delay={index * 0.03}>
                <ProjectShowcase work={work} index={index} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 text-center sm:px-8 lg:py-28">
        <FadeIn className="mx-auto max-w-[860px]">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#777777] uppercase">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#111111] sm:text-5xl">
            {t.about.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#444444]">
            {t.about.body}
          </p>
        </FadeIn>
      </section>

      <section id="experience" className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[0.35fr_0.65fr]">
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

      <section id="writing" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
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
              className="block border-y border-[#111111] py-8 transition hover:border-[#5A8DFF]"
            >
              <p className="text-sm font-medium text-[#777777]">{t.brunch.meta}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#111111]">
                {t.brunch.articleTitle}
              </h3>
              <p className="mt-5 text-base leading-7 text-[#444444]">
                {t.brunch.articleDescription}
              </p>
              <p className="mt-8 text-sm font-semibold text-[#111111]">
                {t.brunch.cta} →
              </p>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="bg-[#FAFBFC] px-5 py-20 sm:px-8 lg:py-28">
        <FadeIn className="mx-auto max-w-[1120px]">
          <div className="grid gap-8 border-t border-[#111111] pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#111111] sm:text-5xl">
              {t.contact.title}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 border border-[#111111] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#5A8DFF] hover:text-[#5A8DFF]"
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
      <p className="text-sm font-semibold tracking-[0.18em] text-[#777777] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#444444] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectShowcase({
  work,
  index,
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
}) {
  const reversed = index % 2 === 1;

  return (
    <Link
      href={work.href}
      className={`grid gap-8 border-t border-[#DDE3EA] pt-10 transition hover:border-[#5A8DFF] lg:grid-cols-[0.52fr_0.48fr] lg:items-start ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ProjectVisual type={work.visual} />
      <div className="max-w-xl">
        <p className="text-sm font-medium text-[#777777]">{work.status}</p>
        <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl">
          {work.name}
        </h3>
        <p className="mt-4 text-xl leading-8 text-[#444444]">{work.summary}</p>
        <p className="mt-6 text-base leading-7 text-[#444444]">{work.description}</p>
        <dl className="mt-8 grid gap-5 sm:grid-cols-3">
          <Meta label="Role" value={work.role} />
          <Meta label="Platform" value={work.platform} />
          <Meta label="Status" value={work.status} />
        </dl>
        <div className="mt-8 flex flex-wrap gap-2">
          {work.keywords.map((keyword) => (
            <span key={keyword} className="border border-[#DDE3EA] px-3 py-1 text-xs text-[#777777]">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className="bg-white p-4 shadow-[0_18px_55px_rgba(17,17,17,0.08)]">
      <div className="aspect-[4/3] bg-[#F5F7FA] p-5">
        {type === "admin" ? <AdminPreview /> : type === "mobile" ? <MobilePreview /> : type === "web" ? <WebPreview /> : <CalendarPreview />}
      </div>
    </div>
  );
}

function CalendarPreview() {
  return (
    <div className="h-full bg-white p-5">
      <div className="mb-5 flex items-center justify-between border-b border-[#E8ECF1] pb-4">
        <div className="h-3 w-36 bg-[#111111]" />
        <div className="h-7 w-20 border border-[#DDE3EA]" />
      </div>
      <div className="grid gap-3">
        {["Focus block", "Calendar sync", "Auto reschedule"].map((item, index) => (
          <div key={item} className="grid grid-cols-[4rem_1fr] border border-[#E8ECF1] p-3 text-sm">
            <span className="text-[#777777]">{index + 9}:00</span>
            <span className="font-medium text-[#111111]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminPreview() {
  return (
    <div className="grid h-full grid-cols-[5rem_1fr] gap-4 bg-white p-5">
      <div className="grid content-start gap-2">
        {["Entry", "Payment", "Status", "User"].map((item) => (
          <div key={item} className="border border-[#E8ECF1] px-2 py-2 text-xs text-[#777777]">
            {item}
          </div>
        ))}
      </div>
      <div className="grid gap-3">
        <div className="h-16 bg-[#EEF2F6]" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 bg-[#F5F7FA]" />
          <div className="h-20 bg-[#F5F7FA]" />
          <div className="h-20 bg-[#EAF0FF]" />
        </div>
        <div className="flex-1 bg-[#F5F7FA]" />
      </div>
    </div>
  );
}

function WebPreview() {
  return (
    <div className="h-full bg-white p-5">
      <div className="mb-6 h-10 border-b border-[#E8ECF1]" />
      <div className="grid grid-cols-[1fr_0.7fr] gap-4">
        <div className="h-44 bg-[#F5F7FA]" />
        <div className="grid gap-3">
          <div className="bg-[#EAF0FF]" />
          <div className="bg-[#F5F7FA]" />
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="grid h-full place-items-center bg-white">
      <div className="h-64 w-36 rounded-[2rem] border border-[#DDE3EA] bg-[#FAFBFC] p-3">
        <div className="mx-auto h-1.5 w-10 rounded-full bg-[#DDE3EA]" />
        <div className="mt-6 h-20 bg-[#EAF0FF]" />
        <div className="mt-3 grid gap-2">
          <div className="h-8 bg-white" />
          <div className="h-8 bg-white" />
          <div className="h-8 bg-white" />
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
    <article className="border-t border-[#DDE3EA] pt-8">
      <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[#111111]">
            {item.company}
          </h3>
          <p className="mt-2 text-lg text-[#444444]">{item.label}</p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-[#777777] uppercase">
            Projects
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.projects.map((project) => (
              <span key={project} className="border border-[#DDE3EA] bg-white px-3 py-1 text-sm text-[#111111]">
                {project}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-[#777777] uppercase">
            Role
          </p>
          <p className="mt-2 text-base text-[#444444]">{item.role}</p>
          <ul className="mt-6 grid gap-2 text-base leading-7 text-[#444444]">
            {item.details.map((detail) => (
              <li key={detail}>- {detail}</li>
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
      <dt className="text-xs font-semibold tracking-[0.14em] text-[#777777] uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-6 text-[#444444]">{value}</dd>
    </div>
  );
}
