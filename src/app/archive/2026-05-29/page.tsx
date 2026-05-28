import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yesica Portfolio Archive | 2026.05.29",
  description: "A dated archive of the Yesica Portfolio home page before the next visual redesign.",
  robots: {
    index: false,
    follow: false,
  },
};

const projects = [
  {
    title: "Schedule Block",
    subtitle: "회복형 일정 관리 시스템",
    tags: ["개인 제품", "AI 협업 앱", "생산성"],
    description: "계획 실패의 감정 부담을 줄이는 일정 블록 앱",
    period: "2026",
    status: "공식 페이지 / 출시 제품",
    role: "제품 디자인, UI/UX, AI 협업 개발",
    platform: "iOS 앱",
    outcome: "구글 캘린더 연동 · 자동 미루기 · 공식 페이지 운영",
    href: "/projects/schedule-block",
    accent: "from-cyan-400 via-teal-400 to-emerald-400",
  },
  {
    title: "Walla Improvement",
    subtitle: "설문 제작 플로우 개선",
    tags: ["제품 디자인", "UX 리서치", "설문 서비스"],
    description: "설문 제작 경험을 개선한 프로덕트 디자인 프로젝트",
    period: "2025",
    status: "케이스 스터디 초안",
    role: "UX 리서치, 제품 디자인, UI 디자인",
    platform: "웹",
    outcome: "설문 빌더 · 정보 구조 개선 · UX Writing",
    href: "/projects/walla",
    accent: "from-sky-400 via-cyan-400 to-teal-400",
  },
  {
    title: "WSOP+",
    subtitle: "글로벌 포커 대회 플랫폼",
    tags: ["실제 서비스", "앱", "관리자"],
    description: "포커 대회 접수, 결제, 관리자 운영 시스템 설계",
    period: "2025-2026",
    status: "운영 서비스",
    role: "UI/UX 디자인, 앱 디자인, 관리자 시스템 디자인",
    platform: "앱, 관리자 웹",
    outcome: "모바일 앱 + 관리자 시스템 · 결제 흐름 · 서비스 운영",
    href: "/projects/wsop-plus",
    accent: "from-blue-400 via-cyan-400 to-emerald-400",
  },
  {
    title: "PokerStake",
    subtitle: "스테이킹 기반 대회 참여 UX",
    tags: ["웹 서비스", "복잡한 비즈니스 UX"],
    description: "스테이킹 기반 포커 대회 참여 플랫폼 UX 설계",
    period: "2025-2026",
    status: "케이스 스터디 초안",
    role: "UI/UX 디자인, 웹 서비스 디자인",
    platform: "웹",
    outcome: "Player / Backer 흐름 · Prize Pool 정보 구조 · 신뢰 기반 UX",
    href: "/projects/pokerstake",
    accent: "from-indigo-400 via-sky-400 to-teal-400",
  },
];

const experience = [
  {
    period: "2021 - 2025",
    company: "NSUSLAB",
    summary: "글로벌 포커 플랫폼과 운영 시스템을 다룬 제품 디자인 경험",
    points: ["GGPoker 웹사이트 리뉴얼", "WSOP+ 앱 및 관리자 시스템 UX", "PokerStake 참여 구조와 운영 UX"],
  },
  {
    period: "2019 - 2020",
    company: "더우리샵",
    summary: "운영자가 매일 사용하는 관리자와 검색광고 입찰 시스템 설계",
    points: ["관리자 시스템 기획", "검색광고 입찰 플로우", "운영 데이터 관리 화면"],
  },
  {
    period: "2016 - 2018",
    company: "플레이니트",
    summary: "브랜드 프로모션과 캠페인 운영 디자인",
    points: ["코웨이/SKT/칭따오 등 브랜드 운영", "프로모션 페이지", "이벤트 디자인"],
  },
];

export default function Archive20260529Page() {
  return (
    <main className="min-h-screen bg-[#060a0f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#060a0f]/78 backdrop-blur-xl">
        <div className="mx-auto grid h-20 w-full max-w-[1120px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="text-sm font-semibold tracking-[-0.03em] text-white sm:text-base">
            Yesica-Portfolio
          </Link>
          <nav className="hidden items-center justify-center gap-10 text-sm text-[#d9e1ea] md:flex lg:gap-14">
            <a href="#projects" className="transition hover:text-[#5ef2c2]">Works</a>
            <a href="#about" className="transition hover:text-[#5ef2c2]">About</a>
            <a href="#experience" className="transition hover:text-[#5ef2c2]">Experience</a>
            <a href="#writing" className="transition hover:text-[#5ef2c2]">brunch</a>
          </nav>
          <div className="flex items-center justify-end gap-3">
            <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70 sm:inline-flex">
              Archive 2026.05.29
            </span>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-full bg-[linear-gradient(120deg,#2147af,#5a8dff,#4de1c1)] px-5 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(90,141,255,0.24)] transition hover:-translate-y-0.5"
            >
              Current
            </Link>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/[0.07] px-5 pb-20 pt-16 sm:px-8 lg:min-h-[calc(84vh-5rem)] lg:pb-32 lg:pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_30%,rgba(90,141,255,0.18),transparent_30rem),radial-gradient(circle_at_88%_50%,rgba(77,225,193,0.1),transparent_24rem)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(520px_circle_at_52%_44%,rgba(77,225,193,0.12),rgba(90,141,255,0.06)_34%,transparent_72%)] opacity-80" />
        <div className="absolute left-[50%] top-[52%] -z-10 hidden h-[30rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

        <div className="mx-auto grid w-full max-w-[1120px] gap-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/60 sm:text-sm">
              Product Designer / UI·UX Designer
            </p>
            <h1 className="text-[clamp(2rem,9.4vw,3.9rem)] font-semibold leading-[1.16] tracking-normal text-[#f4f7fa] sm:text-[clamp(2.6rem,3.9vw,3.9rem)]">
              서비스를 움직이는
              <br />
              <span className="bg-[linear-gradient(100deg,#5a8dff_0%,#4de1c1_72%,#5ef2c2_100%)] bg-clip-text text-transparent">
                시스템을 설계합니다
              </span>
            </h1>
            <p className="mt-12 max-w-xl text-base font-normal leading-[1.7] text-white/70 sm:text-lg">
              웹, 모바일, 관리자 시스템을 넘나든 오랜 실무 경험과 AI와 함께 실제 제품을 만들고 운영해온 설계 경험
            </p>
            <div className="mt-12">
              <a
                href="#projects"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[linear-gradient(120deg,#183c98,#5a8dff,#4de1c1)] px-7 text-base font-semibold text-white shadow-[0_18px_50px_rgba(90,141,255,0.24)] transition hover:-translate-y-0.5"
              >
                View Projects <span>→</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 grid gap-5 lg:origin-center lg:scale-[0.9] lg:pl-8">
            <ArchiveFloatCard
              badge="출시 제품"
              title="Schedule Block"
              description="계획이 밀린 뒤에도 다시 회복할 수 있도록 설계한 일정 블록 앱"
              cta="케이스 보기"
              href="/projects/schedule-block"
            />
            <ArchiveFloatCard
              badge="작업 시스템"
              title="AI Workflow"
              description="아이디어 정리부터 프로토타입과 자동화까지 빠르게 반복하는 개인 작업 시스템"
              cta="흐름 보기"
              href="#thinking"
              shifted
            />
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
          <SectionIntro
            eyebrow="Selected Projects"
            title="실제 서비스와 개인 제품을 함께 보여주는 작업들"
            description="운영 구조가 있는 서비스, 복잡한 사용자 흐름, 개인 문제에서 출발한 제품을 중심으로 정리했습니다."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(16,24,32,0.72)] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur transition hover:border-[#5ef2c2]/30"
              >
                <div className={`mb-5 flex aspect-[16/10] items-end rounded-[1.15rem] bg-gradient-to-br ${project.accent} p-4`}>
                  <div className="w-full rounded-2xl border border-white/30 bg-white/25 p-3 shadow-lg backdrop-blur-md">
                    <div className="h-2 w-20 rounded-full bg-white/70" />
                    <div className="mt-3 grid gap-2">
                      <div className="h-8 rounded-xl bg-white/45" />
                      <div className="h-8 rounded-xl bg-white/30" />
                    </div>
                  </div>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#5ef2c2]/15 bg-[#5ef2c2]/8 px-3 py-1 text-xs font-medium text-[#91f7d7]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-2 text-sm font-medium text-[#d7e0ea]">{project.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#9ba8b5]">{project.description}</p>
                <dl className="mt-5 grid gap-3 border-t border-white/[0.07] pt-5 text-sm">
                  <Meta label="기간" value={project.period} />
                  <Meta label="상태" value={project.status} />
                  <Meta label="역할" value={project.role} />
                  <Meta label="플랫폼" value={project.platform} />
                </dl>
                <p className="mt-4 rounded-2xl border border-[#5ef2c2]/15 bg-[#5ef2c2]/8 px-4 py-3 text-sm leading-6 text-[#c8fbe8]">
                  {project.outcome}
                </p>
                <Link href={project.href} className="mt-5 text-sm font-semibold text-[#5ef2c2] transition hover:translate-x-1">
                  상세 보기
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/[0.07] bg-[#070b12]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-16 px-5 py-32 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:py-40">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">About</p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f4f7fa] sm:text-5xl">
              운영되는 서비스의 맥락을 이해하고, 제품의 구조로 옮깁니다.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-9 text-[#aab6c3]">
              웹, 모바일, 관리자 시스템을 오가며 사용자 화면과 운영자 화면이 끊기지 않도록 설계해왔습니다. 공공기관 플랫폼, 브랜드 운영, 글로벌 서비스, 개인 제품 출시까지 다양한 환경에서 제품의 흐름을 다뤄왔습니다.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["오랜 실무 경험", "업종과 플랫폼이 다른 서비스들을 경험하며 사용자와 운영자의 접점을 함께 보았습니다."],
                ["운영과 시스템", "상태값, 결제, 접수, 이벤트, 관리자 판단 화면처럼 서비스가 굴러가는 구조를 설계합니다."],
                ["AI 협업 메이커", "개인 문제에서 출발한 제품을 AI와 함께 만들고 출시하며 작게 운영하고 개선합니다."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5">
                  <p className="font-semibold text-[#f4f7fa]">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#9ba8b5]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-16 px-5 py-32 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-40">
          <SectionIntro
            eyebrow="Experience"
            title="서비스가 실제로 운영되는 환경에서 일해왔습니다"
            description="경력 연수를 크게 내세우기보다, 여러 환경에서 어떤 문제를 다뤄왔는지가 더 중요하다고 생각합니다."
          />
          <div className="grid gap-6">
            {experience.map((item) => (
              <article key={item.company} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#5ef2c2]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[#9ba8b5]">{item.summary}</p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#aab6c3] sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-white/[0.07] bg-black/10 px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <SectionIntro
              eyebrow="Product Thinking"
              title="화면보다 먼저 제품이 작동하는 조건을 봅니다"
              description="사용자가 다음 행동을 이해하고, 운영자가 빠르게 판단하며, 팀이 유지할 수 있는 구조를 함께 설계합니다."
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["문제 정의", "요청받은 화면을 바로 그리기보다 사용자가 막히는 지점과 운영 조건을 먼저 정리합니다."],
              ["흐름 설계", "IA, User Flow, 상태값, 예외 케이스가 자연스럽게 이어지는 구조를 만듭니다."],
              ["관리자 UX", "운영자가 목록, 상세, 처리 상태를 빠르게 파악할 수 있는 업무 화면을 설계합니다."],
              ["AI 협업", "리서치 정리, 구조화, 프로토타입, 구현 실험을 AI와 함께 빠르게 반복합니다."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                <div className="mb-12 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#5a8dff] to-[#4de1c1]" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#9ba8b5]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-32 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-40">
          <SectionIntro
            eyebrow="Writing / Experiments"
            title="만드는 과정에서 생기는 생각을 기록합니다"
            description="작업 회고, AI 협업 노트, 개인 제품 실험을 차분히 연결해갈 공간입니다."
          />
          <div className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.14),rgba(77,225,193,0.07))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <p className="text-lg font-semibold text-white">제품을 만드는 일은 화면을 그리는 것에서 끝나지 않습니다.</p>
            <p className="mt-4 text-base leading-8 text-[#9ba8b5]">
              문제를 발견하고, 구조화하고, 작게 만들어보고, 다시 고치는 과정을 기록하며 Yesica Studio의 작업 방식을 쌓아갑니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
        <div className="grid gap-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-10 tracking-[-0.025em] text-white sm:text-3xl">
              프로덕트 디자인, 관리자 시스템, 초기 서비스 UX 설계 작업을 받고 있습니다.
            </p>
            <p className="mt-4 text-base leading-7 text-[#9ba8b5]">
              협업 범위와 일정은 메일로 공유해주시면 보통 1-2일 안에 확인해 답변드립니다.
            </p>
          </div>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(120deg,#1b3f9f,#5a8dff,#4de1c1,#1b3f9f)] bg-[length:220%_100%] px-6 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(90,141,255,0.26)] transition-all duration-500 hover:bg-[position:100%_0]">
            연락하기
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-5 py-10 text-sm text-[#778493] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Archive snapshot: 2026.05.29</p>
          <div className="flex gap-4">
            <Link href="/" className="transition hover:text-white">Current Home</Link>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArchiveFloatCard({
  badge,
  title,
  description,
  cta,
  href,
  shifted = false,
}: {
  badge: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  shifted?: boolean;
}) {
  return (
    <article className={`${shifted ? "lg:translate-x-6" : ""} group overflow-hidden rounded-[1.45rem] border border-white/[0.1] bg-[rgba(16,24,32,0.62)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:border-[#5ef2c2]/30`}>
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(90,141,255,0.42),rgba(77,225,193,0.2))] text-lg font-bold text-white">
          {title === "AI Workflow" ? "*" : "▦"}
        </div>
        <span className="rounded-full bg-[#5a8dff]/18 px-3 py-1 text-xs font-medium text-[#b9d2ff]">
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-[#b0bbc7]">{description}</p>
        <Link href={href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#5ef2c2] transition group-hover:gap-3">
          {cta} <span>→</span>
        </Link>
        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/20 p-2.5">
          {["9:00", "10:00", "11:00"].map((time, index) => (
            <div key={time} className="mb-2 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.06] px-2.5 py-1.5 last:mb-0">
              <span className="w-10 text-[10px] text-[#6f7b88]">{time}</span>
              <span className="h-2 w-2 rounded-full bg-[#5ef2c2]" />
              <span className="text-xs text-[#dce5ee]">{index === 0 ? "운동" : index === 1 ? "집중 업무" : "점심 식사"}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f4f7fa] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#9ba8b5] sm:text-lg">{description}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] gap-3">
      <dt className="text-[#687686]">{label}</dt>
      <dd className="font-medium text-[#c3ccd6]">{value}</dd>
    </div>
  );
}
