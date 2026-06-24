import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule Block | Yesica Portfolio",
  description:
    "계획을 실패로 남기지 않고 다시 이어갈 수 있게 돕는 회복형 스케줄 관리 앱 Schedule Block 소개 페이지입니다.",
  openGraph: {
    title: "Schedule Block | Recovery-first Scheduling App",
    description:
      "Schedule Block은 미뤄진 일정을 다시 회복할 수 있게 돕는 iOS 스케줄 관리 앱입니다.",
    type: "website",
  },
};

const pdfStatus = "PDF Coming Soon";

// TODO: Replace with the actual App Store URL when it is ready.
const appStoreUrl = "#app-store-coming-soon";

const page = {
  hero: {
    title: "Schedule Block",
    subtitle:
      "계획을 실패로 남기지 않고, 다시 이어갈 수 있게 돕는 회복형 스케줄 관리 앱",
    description:
      "Schedule Block은 일정과 할 일을 블록처럼 쌓고, 완료하지 못한 일은 자동으로 다음 흐름에 연결해주는 iOS 앱입니다. 사용자가 계획을 지키지 못했을 때 죄책감을 느끼기보다, 다시 시작할 수 있는 구조를 만드는 것을 목표로 합니다.",
    tags: [
      "iOS App",
      "Productivity",
      "Recovery UX",
      "AI-assisted Development",
      "Independent Product",
    ],
    statusItems: [
      "App Store Released",
      "Google Calendar Sync",
      "Active Development",
      "v1.5.1",
    ],
  },
  problem: {
    eyebrow: "Problem",
    title: "계획을 못 지킨 사람에게 필요한 건 질책이 아니라 복구 구조입니다.",
    body: "일반적인 일정 관리 앱은 사용자가 계획을 완료하지 못했을 때, 미완료된 일을 그대로 남겨두거나 사용자가 직접 다시 옮기도록 만듭니다. 이 과정은 작은 실패감을 반복해서 만들고, 일정 관리 자체를 피로하게 만듭니다.",
    items: [
      "일정과 할 일이 분리되어 관리됨",
      "못 끝낸 일을 직접 옮겨야 함",
      "미완료 기록이 죄책감으로 남음",
      "ADHD 성향, 무기력, 번아웃 상태에서는 일정 복구가 더 어려움",
      "계획이 무너지면 하루 전체가 실패처럼 느껴짐",
    ],
  },
  solution: {
    eyebrow: "Solution",
    title: "Schedule Block은 미뤄진 일정을 자동으로 다시 흐름 안에 배치합니다.",
    body: "Schedule Block은 하루 일정을 블록 단위로 관리하고, 완료하지 못한 항목을 사용자가 직접 다시 정리하지 않아도 다음 가능한 흐름으로 이어갈 수 있게 설계합니다.",
    items: [
      "일정과 할 일을 하나의 블록으로 관리",
      "미완료 항목 자동 미루기",
      "하루 루틴 체크",
      "완료 기록 기반 성취감 제공",
      "실패가 아니라 회복 중심의 리포트 구조",
    ],
  },
  philosophy: {
    eyebrow: "Product Philosophy",
    title: "완벽한 계획보다 다시 시작할 수 있는 구조",
    body: "Schedule Block의 핵심 철학은 \"완벽한 계획\"이 아니라 \"다시 시작할 수 있는 구조\"입니다.",
    emphasis: "A productivity app should not punish people for being human.",
    items: [
      "사용자를 게으르다고 판단하지 않는다.",
      "계획 실패를 처벌하지 않는다.",
      "다시 시작할 수 있는 UX를 설계한다.",
      "성취뿐 아니라 회복도 기록한다.",
      "사용자의 컨디션이 흔들리는 날까지 고려한다.",
    ],
  },
  features: [
    {
      title: "Block-based Scheduling",
      description: "하루 일정을 블록 단위로 구성하고 순서를 조정할 수 있습니다.",
    },
    {
      title: "Auto Postpone",
      description:
        "완료하지 못한 일정은 수동으로 다시 옮기지 않아도 다음 흐름으로 연결됩니다.",
    },
    {
      title: "Routine Check",
      description:
        "스쿼트 10개, 스트레칭 1회 같은 작은 루틴을 하루 안에서 체크할 수 있습니다.",
    },
    {
      title: "Completion History",
      description:
        "완료한 일과 반복적으로 미뤄지는 일을 기록해 사용자가 자신의 패턴을 확인할 수 있습니다.",
    },
    {
      title: "Google Calendar Sync",
      description:
        "Google Calendar와 연동하여 일정 흐름을 외부 캘린더와 함께 관리할 수 있습니다.",
    },
    {
      title: "Recovery Report 예정",
      description:
        "단순 실패 통계가 아니라 다시 시작한 기록, 회복한 기록을 보여주는 리포트를 준비 중입니다.",
    },
  ],
  status: {
    title: "Current Status",
    body: "Schedule Block은 이미 iOS 앱으로 출시되어 있으며, 실제 사용을 기반으로 지속적으로 개선 중입니다.",
    metrics: [
      {
        value: "v1.5.1",
        label: "Released Version",
        description: "현재 개발 및 개선 기준 버전",
      },
      {
        value: "2025 ~ Present",
        label: "Development Period",
        description: "개인 문제 정의부터 출시 이후 개선까지 진행",
      },
      {
        value: "7+",
        label: "Major Features",
        description: "블록 일정, 자동 미루기, 루틴, 기록, 동기화 등",
      },
      {
        value: "iOS",
        label: "Platform",
        description: "모바일 중심의 개인 스케줄 관리 앱",
      },
      {
        value: "Google Calendar",
        label: "Calendar Integration",
        description: "외부 캘린더 흐름과 일정 데이터를 함께 관리",
      },
      {
        value: "Released / Iterating",
        label: "Current Stage",
        description: "출시 후 실제 사용 흐름을 기반으로 반복 개선 중",
      },
    ],
    items: [
      "iOS 앱 출시 완료",
      "Google Calendar 연동 완료",
      "v1.5.1 개발 중",
      "하루 루틴 체크 기능 추가 중",
      "App Store 스크린샷 및 소개 페이지 개선 예정",
      "실제 사용자의 회복형 루틴 관리 경험을 바탕으로 개선 중",
    ],
  },
  maker: {
    title: "Built by a product designer who needed this system first.",
    body: "Schedule Block은 13년차 UI/UX 디자이너 예시카가 직접 겪은 일정 관리, 무기력, 번아웃, 회복의 문제에서 출발한 제품입니다. 단순히 생산성을 높이기 위한 앱이 아니라, 계획이 무너진 뒤에도 다시 일상으로 돌아올 수 있는 구조를 고민하며 만들어졌습니다.",
    metrics: [
      {
        value: "13+ Years",
        label: "UI/UX Design Experience",
      },
      {
        value: "3+ Products",
        label: "Independent Product Building",
      },
      {
        value: "AI-assisted",
        label: "Planning, Design, Development",
      },
      {
        value: "End-to-End",
        label: "Planning, Design, QA, Operation",
      },
    ],
    points: [
      "13년차 UI/UX 디자이너",
      "실제 서비스 운영 경험",
      "AI 협업 기반 개발",
      "기획, 디자인, 개발, 운영을 직접 수행",
      "사용자 경험과 회복 경험을 함께 설계",
    ],
  },
  target: {
    title: "Who it is for",
    body: "Schedule Block은 단순히 더 많은 일을 해내기 위한 앱이 아니라, 흔들리는 일상 속에서도 다시 이어갈 수 있는 개인 운영 시스템을 지향합니다.",
    items: [
      "계획은 세우지만 자주 무너지는 사람",
      "ADHD 성향이 있는 사람",
      "번아웃 이후 일상을 회복 중인 사람",
      "프리랜서, 1인 창업가, 재택 근무자",
      "할 일과 일정을 한 흐름으로 관리하고 싶은 사람",
    ],
  },
  business: {
    title: "Business Potential",
    body: "Schedule Block은 개인 생산성 앱 시장 안에서 \"회복형 생산성\"이라는 차별화된 방향을 가집니다. 일정 추적을 넘어 루틴 회복, AI 기반 재배치, 개인 운영 시스템 콘텐츠로 확장할 수 있습니다.",
    targetUsers: [
      "Knowledge Workers",
      "Freelancers",
      "Solo Entrepreneurs",
      "Remote Workers",
      "People with ADHD traits",
      "People recovering from burnout",
    ],
    revenueOpportunities: [
      "Freemium + Premium subscription",
      "Routine template packs",
      "AI-assisted schedule recovery",
      "Recovery report insights",
      "Life Coaching Studio ecosystem",
    ],
  },
  whyNow: {
    title: "Why Now",
    body: "As work becomes more flexible and self-directed, people need tools that help them recover from disrupted plans rather than simply track unfinished tasks. Schedule Block focuses on recovery-oriented productivity for people managing routines, remote work, freelance schedules, and fluctuating energy levels.",
    items: [
      "Rise of remote and freelance work",
      "Growing demand for personal productivity systems",
      "Increased awareness of ADHD and burnout",
      "Need for routine recovery, not just task tracking",
      "AI-assisted planning opportunities",
    ],
  },
  roadmap: [
    {
      phase: "Short-term",
      items: [
        "v1.5.1 루틴 체크 기능 개선",
        "App Store 스크린샷 업데이트",
        "온보딩 개선",
        "기본 사용성 QA",
      ],
    },
    {
      phase: "Mid-term",
      items: [
        "회복형 리포트",
        "반복 루틴 강화",
        "사용자 피드백 수집",
        "포트폴리오 및 브런치 콘텐츠 연계",
      ],
    },
    {
      phase: "Long-term",
      items: [
        "구독 모델 실험",
        "AI 기반 루틴 추천",
        "개인 운영 시스템 플랫폼화",
        "Life Coaching Studio 핵심 제품화",
      ],
    },
  ],
  evidence: [
    {
      title: "App Store Listing",
      status: "Released",
    },
    {
      title: "Product Screenshots",
      status: "Preparing",
    },
    {
      title: "Version History",
      status: "Available",
    },
    {
      title: "Google Calendar Integration",
      status: "Built",
    },
    {
      title: "Routine Check Feature",
      status: "In Development",
    },
    {
      title: "Brunch Development Notes",
      status: "Coming Soon",
    },
    {
      title: "PDF Introduction Deck",
      status: "Coming Soon",
    },
  ],
  closing: {
    title: "A schedule app for people who are trying again.",
    body: "Schedule Block은 완벽한 사람을 위한 생산성 앱이 아닙니다. 계획이 무너져도 다시 시작하고 싶은 사람을 위한 앱입니다.",
  },
} as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f7cff]">
      {children}
    </p>
  );
}

function PrimaryLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#111827] px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(17,24,39,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4f7cff] sm:w-auto"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#d9e1ea] bg-white px-6 text-sm font-bold text-[#111827] transition duration-300 hover:-translate-y-0.5 hover:border-[#4f7cff]/40 hover:text-[#4f7cff] sm:w-auto"
    >
      <span>{children}</span>
      <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

function DisabledPill({ children }: { children: string }) {
  return (
    <span
      aria-disabled="true"
      className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-[#d9e1ea] bg-[#f6f9fc] px-6 text-sm font-bold text-[#8a94a6] sm:w-auto"
    >
      {children}
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] rounded-[1.5rem] border border-[#d9e1ea] bg-white p-3 shadow-[0_36px_110px_rgba(79,124,255,0.18)] sm:rounded-[2rem] sm:p-5">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#42d6b5]/25 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#4f7cff]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,#f8faff_0%,#eef6f8_100%)] p-4 sm:rounded-[1.5rem] sm:p-5">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[280px] min-w-0 sm:max-w-none">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4f7cff]">
              Today Flow
            </p>
            <h2 className="mt-2 text-xl font-black tracking-tight text-[#111827] sm:text-2xl">
              Recovery Plan
            </h2>
          </div>
          <Image
            src="/schedule-block/app-icon.png"
            alt="Schedule Block 앱 아이콘"
            width={52}
            height={52}
            className="rounded-2xl shadow-[0_14px_30px_rgba(17,24,39,0.16)]"
            priority
          />
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.4rem] border border-white/80 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-[#d9e1ea]" />
            <div className="mt-4 space-y-3">
              {["Morning reset", "Calendar sync", "Routine check"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#e2e8f0] bg-[#fbfdff] p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          index === 0 ? "bg-[#42d6b5]" : "bg-[#4f7cff]"
                        }`}
                      />
                      <p className="text-xs font-bold text-[#111827]">{item}</p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-[#eef2f7]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(135deg,#4f7cff,#42d6b5)]"
                        style={{ width: `${72 - index * 16}%` }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-[1.35rem] border border-[#e2e8f0] bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-bold text-[#111827]">Auto Postpone</p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                끝내지 못한 블록을 내일의 가능한 흐름으로 이어줍니다.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-[#eef6f8] px-3 py-1 text-xs font-bold text-[#0f766e]">
                  postponed
                </span>
                <span className="rounded-full bg-[#f8faff] px-3 py-1 text-xs font-bold text-[#4f7cff]">
                  recovered
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.25rem] bg-[#111827] p-4 text-white">
                <p className="text-3xl font-black">7</p>
                <p className="mt-1 text-xs leading-5 text-white/70">completed blocks</p>
              </div>
              <div className="rounded-[1.25rem] border border-[#e2e8f0] bg-white p-4">
                <p className="text-3xl font-black text-[#111827]">3</p>
                <p className="mt-1 text-xs leading-5 text-[#6b7280]">routines checked</p>
              </div>
            </div>
            <div className="rounded-[1.35rem] border border-[#d9e1ea] bg-white/90 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a94a6]">
                Google Calendar
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#4f7cff,#42d6b5)]" />
                <p className="min-w-0 text-sm font-bold leading-5 text-[#111827]">
                  Synced without duplicate flow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: readonly string[];
}) {
  return (
    <section className="border-t border-[#d9e1ea] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="mt-5 max-w-[700px] text-[clamp(2rem,8vw,3rem)] font-black leading-[1.18] tracking-[-0.035em] text-[#111827]">
            {title}
          </h2>
          <p className="mt-6 max-w-[660px] text-base leading-8 text-[#4b5563] sm:mt-7 sm:text-lg">{body}</p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-[#e2e8f0] bg-[#fbfdff] p-4 text-sm font-semibold leading-7 text-[#111827] shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-5 sm:text-base"
            >
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#4f7cff,#42d6b5)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ScheduleBlockProjectPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#111827]">
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[calc(100vh-72px)] lg:py-28">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_70%_20%,rgba(79,124,255,0.14),transparent_32%),radial-gradient(circle_at_88%_38%,rgba(66,214,181,0.16),transparent_26%)]" />
        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="min-w-0">
            <SectionLabel>Independent Product</SectionLabel>
            <h1 className="mt-5 w-full text-[clamp(2.5rem,13vw,4.4rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#111827] sm:mt-6 sm:w-auto sm:text-[clamp(3.5rem,10vw,6rem)] lg:text-[clamp(4rem,9vw,7rem)]">
              {page.hero.title}
            </h1>
            <p className="mt-6 w-full break-all text-[clamp(1.4rem,5.6vw,2.9rem)] font-black leading-[1.32] tracking-[-0.035em] text-[#111827] sm:mt-8 sm:w-auto sm:max-w-[760px] sm:break-normal sm:text-[clamp(2.6rem,6vw,3rem)] sm:leading-[1.32]">
              <span className="sm:hidden">
                계획을 실패로 남기지 않고,
                <br />
                다시 이어갈 수 있게 돕는
                <br />
                회복형 스케줄 관리 앱
              </span>
              <span className="hidden sm:inline">{page.hero.subtitle}</span>
            </p>
            <p className="mt-6 w-full break-all text-base leading-8 text-[#4b5563] sm:mt-8 sm:w-auto sm:max-w-[720px] sm:break-normal sm:text-xl sm:leading-9">
              <span className="sm:hidden">
                Schedule Block은 일정과 할 일을
                <br />
                블록처럼 쌓고, 완료하지 못한 일은
                <br />
                자동으로 다음 흐름에 연결해주는 iOS 앱입니다.
                <br />
                사용자가 계획을 지키지 못했을 때
                <br />
                죄책감을 느끼기보다, 다시 시작할 수 있는
                <br />
                구조를 만드는 것을 목표로 합니다.
              </span>
              <span className="hidden sm:inline">{page.hero.description}</span>
            </p>
            <div className="mt-8 grid w-full max-w-[280px] grid-cols-1 gap-2 sm:max-w-none sm:flex sm:flex-wrap sm:gap-2.5">
              {page.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex w-full max-w-full justify-center rounded-full border border-[#d9e1ea] bg-white/85 px-3.5 py-2 text-center text-xs font-bold text-[#4b5563] shadow-[0_10px_24px_rgba(15,23,42,0.04)] [overflow-wrap:anywhere] sm:w-auto"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 w-full max-w-[280px] rounded-[1.4rem] border border-[#d9e1ea] bg-white/82 p-4 shadow-[0_16px_44px_rgba(15,23,42,0.06)] backdrop-blur sm:max-w-none">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a94a6]">
                Status
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                {page.hero.statusItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8faff] px-3 py-1.5 text-center text-xs font-bold text-[#111827] [overflow-wrap:anywhere]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#4f7cff,#42d6b5)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 flex w-full max-w-[280px] flex-wrap gap-3 sm:max-w-none">
              <PrimaryLink href={appStoreUrl}>View App Store</PrimaryLink>
              <SecondaryLink href="#case-study">View Case Study</SecondaryLink>
              <DisabledPill>{pdfStatus}</DisabledPill>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <InfoPanel
        eyebrow={page.problem.eyebrow}
        title={page.problem.title}
        body={page.problem.body}
        items={page.problem.items}
      />

      <InfoPanel
        eyebrow={page.solution.eyebrow}
        title={page.solution.title}
        body={page.solution.body}
        items={page.solution.items}
      />

      <section
        id="case-study"
        className="bg-[#f6f9fc] px-5 py-16 sm:px-8 sm:py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionLabel>{page.philosophy.eyebrow}</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-black leading-[1.16] tracking-[-0.035em] text-[#111827]">
              {page.philosophy.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4b5563] sm:mt-7 sm:text-lg">{page.philosophy.body}</p>
            <p className="mt-8 rounded-[1.5rem] bg-[#111827] p-5 text-xl font-black leading-snug tracking-[-0.03em] text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] sm:p-6 sm:text-2xl">
              {page.philosophy.emphasis}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {page.philosophy.items.map((item, index) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-[#d9e1ea] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-6"
              >
                <p className="text-sm font-black text-[#4f7cff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-base font-bold leading-7 text-[#111827] sm:text-lg sm:leading-8">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <SectionLabel>Key Features</SectionLabel>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-[680px] text-[clamp(2rem,8vw,3rem)] font-black leading-[1.16] tracking-[-0.035em] text-[#111827]">
              회복형 스케줄 관리를 위한 핵심 기능
            </h2>
            <p className="max-w-[420px] text-base leading-7 text-[#4b5563]">
              계획을 더 많이 쌓기보다, 무너진 계획을 다시 이어갈 수 있는 흐름에 집중합니다.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[1.5rem] border border-[#e2e8f0] bg-white p-5 shadow-[0_18px_46px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(15,23,42,0.11)] sm:p-6"
              >
                <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,#4f7cff,#42d6b5)] opacity-90 transition duration-300 group-hover:scale-105" />
                <h3 className="mt-7 text-xl font-black tracking-[-0.02em] text-[#111827]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4b5563]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef6f8] px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionLabel>Product Status</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-black leading-[1.12] tracking-[-0.035em] text-[#111827]">
              {page.status.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4b5563] sm:mt-7 sm:text-lg">{page.status.body}</p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {page.status.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="min-w-0 rounded-[1.4rem] border border-[#d9e1ea] bg-white p-5 shadow-[0_18px_42px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-[clamp(1.35rem,6vw,1.5rem)] font-black leading-tight tracking-[-0.035em] text-[#111827] [overflow-wrap:anywhere]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-[#4f7cff] [overflow-wrap:anywhere] sm:tracking-[0.16em]">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#4b5563]">
                    {metric.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {page.status.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-[#d9e1ea] bg-white/76 p-4 text-sm font-bold leading-7 text-[#111827] sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[1.5rem] border border-[#e2e8f0] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-10">
            <SectionLabel>Founder / Product Maker</SectionLabel>
            <h2 className="mt-5 max-w-[760px] text-[clamp(2rem,8vw,3rem)] font-black leading-[1.14] tracking-[-0.04em] text-[#111827]">
              {page.maker.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4b5563] sm:mt-7 sm:text-lg">{page.maker.body}</p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {page.maker.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="min-w-0 rounded-[1.2rem] border border-[#e2e8f0] bg-[#fbfdff] p-5"
                >
                  <p className="text-[clamp(1.35rem,6vw,1.5rem)] font-black leading-tight tracking-[-0.035em] text-[#111827] [overflow-wrap:anywhere]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-[#4b5563]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {page.maker.points.map((point) => (
                <span
                  key={point}
                  className="rounded-full bg-[#f1f5f9] px-4 py-2 text-sm font-bold text-[#111827]"
                >
                  {point}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-[1.5rem] bg-[#111827] p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:rounded-[2rem] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#42d6b5]">
              {page.target.title}
            </p>
            <p className="mt-6 text-base leading-8 text-white/76 sm:text-lg">{page.target.body}</p>
            <ul className="mt-8 space-y-3">
              {page.target.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold leading-7 sm:text-base">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#42d6b5]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[#f8faff] px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionLabel>Growth</SectionLabel>
              <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-black leading-[1.12] tracking-[-0.035em] text-[#111827]">
                {page.business.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4b5563] sm:mt-7 sm:text-lg">{page.business.body}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {[
                ["Target Users", page.business.targetUsers],
                ["Revenue Opportunities", page.business.revenueOpportunities],
              ].map(([title, items]) => (
                <article
                  key={title as string}
                  className="min-w-0 rounded-[1.6rem] border border-[#d9e1ea] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] sm:p-6"
                >
                  <h3 className="text-xl font-black tracking-[-0.025em] text-[#111827]">
                    {title as string}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(items as readonly string[]).map((item) => (
                      <span
                        key={item}
                        className="max-w-full rounded-full border border-[#e2e8f0] bg-[#fbfdff] px-3 py-2 text-xs font-bold text-[#4b5563] [overflow-wrap:anywhere]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 rounded-[1.5rem] border border-[#d9e1ea] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <SectionLabel>{page.whyNow.title}</SectionLabel>
              <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-black leading-[1.14] tracking-[-0.035em] text-[#111827]">
                회복형 생산성이 필요한 시점
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4b5563] [overflow-wrap:anywhere] sm:mt-7 sm:text-lg">
                {page.whyNow.body}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {page.whyNow.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[#e2e8f0] bg-[#f8faff] p-4 text-sm font-bold leading-7 text-[#111827] sm:p-5 sm:text-base"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#42d6b5]" />
                  <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <SectionLabel>Roadmap</SectionLabel>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {page.roadmap.map((phase) => (
                <article
                  key={phase.phase}
                  className="rounded-[1.5rem] border border-[#d9e1ea] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)] sm:p-6"
                >
                  <h3 className="text-xl font-black tracking-[-0.03em] text-[#111827] sm:text-2xl">
                    {phase.phase}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#4b5563]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f7cff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionLabel>Evidence & Assets</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] font-black leading-[1.14] tracking-[-0.035em] text-[#111827]">
              소개서로 확장 가능한 근거 자료
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {page.evidence.map((item) => (
              <div
                key={item.title}
                className="min-w-0 rounded-2xl border border-[#e2e8f0] bg-[#fbfdff] p-5"
              >
                <p className="text-base font-black text-[#111827] [overflow-wrap:anywhere]">{item.title}</p>
                <p className="mt-3 inline-flex max-w-full rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-[#4f7cff] [overflow-wrap:anywhere]">
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1200px] rounded-[1.5rem] bg-[#0b111a] p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:rounded-[2rem] sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#42d6b5]">
            Closing
          </p>
          <h2 className="mt-5 max-w-[820px] text-[clamp(2.25rem,9vw,3.75rem)] font-black leading-[1.12] tracking-[-0.04em]">
            {page.closing.title}
          </h2>
          <p className="mt-6 max-w-[720px] text-base leading-8 text-white/72 sm:mt-7 sm:text-lg">
            {page.closing.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={appStoreUrl}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-black text-[#111827] transition duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              View App Store
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/18 px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/45 sm:w-auto"
            >
              Contact
            </Link>
            <span
              aria-disabled="true"
              className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-white/12 px-6 text-sm font-black text-white/52 sm:w-auto"
            >
              {pdfStatus}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
