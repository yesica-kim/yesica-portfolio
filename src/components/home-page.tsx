import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { selectedProjects } from "@/data/projects";

type Locale = "ko" | "en";

const content = {
  ko: {
    about: {
      eyebrow: "About",
      title: "운영되는 서비스의 맥락을 이해하고, 제품의 구조로 옮깁니다.",
      description:
        "웹, 모바일, 관리자 시스템을 오가며 사용자 화면과 운영자 화면이 끊기지 않도록 설계해왔습니다. 공공기관 플랫폼, 브랜드 운영, 글로벌 서비스, 개인 제품 출시까지 다양한 환경에서 제품의 흐름을 다뤄왔습니다.",
      cards: [
        ["오랜 실무 경험", "업종과 플랫폼이 다른 서비스들을 경험하며 사용자와 운영자의 접점을 함께 보았습니다."],
        ["운영과 시스템", "상태값, 결제, 접수, 이벤트, 관리자 판단 화면처럼 서비스가 굴러가는 구조를 설계합니다."],
        ["AI 협업 메이커", "개인 문제에서 출발한 제품을 AI와 함께 만들고 출시하며 작게 운영하고 개선합니다."],
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "서비스가 실제로 운영되는 환경에서 일해왔습니다",
      description:
        "경력 연수를 크게 내세우기보다, 여러 환경에서 어떤 문제를 다뤄왔는지가 더 중요하다고 생각합니다.",
      items: [
        {
          period: "2021 — 2025",
          company: "NSUSLAB",
          summary: "글로벌 포커 플랫폼과 운영 시스템을 다룬 제품 디자인 경험",
          points: [
            "GGPoker 웹사이트 리뉴얼",
            "WSOP+ 앱 및 관리자 시스템 UX",
            "PokerStake 참여 구조와 운영 UX",
            "이벤트/프로모션 시스템 디자인",
            "서비스 유지보수 및 개선",
          ],
        },
        {
          period: "2019 — 2020",
          company: "더우리샵",
          summary: "운영자가 매일 사용하는 관리자와 검색광고 입찰 시스템 설계",
          points: ["관리자 시스템 기획", "검색광고 입찰 플로우", "운영 데이터 관리 화면"],
        },
        {
          period: "2016 — 2018",
          company: "플레이니트",
          summary: "브랜드 프로모션과 캠페인 운영 디자인",
          points: ["코웨이/SKT/칭따오 등 브랜드 운영", "프로모션 페이지", "이벤트 디자인"],
        },
        {
          period: "2013 — 2015",
          company: "제이넷",
          summary: "공공기관과 도서관 플랫폼의 정보 구조와 UIUX",
          points: ["공공기관 플랫폼", "도서관 서비스", "정보 접근성 기반 화면 설계"],
        },
        {
          period: "2011 — 2013",
          company: "초기 웹디자인 & HTML 퍼블리싱",
          summary: "웹디자인과 퍼블리싱으로 시작한 실무 기반",
          points: ["웹디자인 실무", "HTML/CSS 퍼블리싱", "운영 페이지 제작"],
        },
      ],
    },
    projects: {
      eyebrow: "Selected Projects",
      title: "실제 서비스와 개인 제품을 함께 보여주는 작업들",
      description:
        "운영 구조가 있는 서비스, 복잡한 사용자 흐름, 개인 문제에서 출발한 제품을 중심으로 정리했습니다.",
    },
    thinking: {
      eyebrow: "Product Thinking",
      title: "화면보다 먼저 제품이 작동하는 조건을 봅니다",
      description:
        "사용자가 다음 행동을 이해하고, 운영자가 빠르게 판단하며, 팀이 유지할 수 있는 구조를 함께 설계합니다.",
      items: [
        ["문제 정의", "요청받은 화면을 바로 그리기보다 사용자가 막히는 지점과 운영 조건을 먼저 정리합니다."],
        ["흐름 설계", "IA, User Flow, 상태값, 예외 케이스가 자연스럽게 이어지는 구조를 만듭니다."],
        ["관리자 UX", "운영자가 목록, 상세, 처리 상태를 빠르게 파악할 수 있는 업무 화면을 설계합니다."],
        ["AI 협업", "리서치 정리, 구조화, 프로토타입, 구현 실험을 AI와 함께 빠르게 반복합니다."],
      ],
    },
    writing: {
      eyebrow: "Writing / Experiments",
      title: "만드는 과정에서 생기는 생각을 기록합니다",
      description:
        "작업 회고, AI 협업 노트, 개인 제품 실험을 차분히 연결해갈 공간입니다.",
      cardTitle: "제품을 만드는 일은 화면을 그리는 것에서 끝나지 않습니다.",
      cardBody:
        "문제를 발견하고, 구조화하고, 작게 만들어보고, 다시 고치는 과정을 기록하며 Yesica Studio의 작업 방식을 쌓아갑니다.",
    },
    contact: {
      title: "프로덕트 디자인, 관리자 시스템, 초기 서비스 UX 설계 작업을 받고 있습니다.",
      description: "협업 범위와 일정은 메일로 공유해주시면 보통 1–2일 안에 확인해 답변드립니다.",
      cta: "연락하기",
    },
  },
  en: {
    about: {
      eyebrow: "About",
      title: "I turn service context into product structure.",
      description:
        "I design across web, mobile, and admin systems, connecting user-facing flows with operational realities. My work spans public platforms, brand operations, global services, and independently shipped products.",
      cards: [
        ["Over a decade", "I have worked across different industries and platforms, designing for both users and operators."],
        ["Operations and systems", "I design around statuses, payments, registrations, events, and admin decision-making flows."],
        ["AI-assisted maker", "I build and operate small products with AI, starting from personal problems and improving through use."],
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "I have worked where products are actually operated.",
      description:
        "Rather than making years of experience the headline, this section shows the kinds of product problems I have handled.",
      items: [
        {
          period: "2021 — 2025",
          company: "NSUSLAB",
          summary: "Product design experience across global poker platforms and operation systems",
          points: [
            "GGPoker website renewal",
            "WSOP+ app and admin UX",
            "PokerStake participation and operation UX",
            "Event and promotion systems",
            "Product maintenance and scaling",
          ],
        },
        {
          period: "2019 — 2020",
          company: "Thewoorishop",
          summary: "Admin and search advertising bidding system design",
          points: ["Admin system planning", "Search ad bidding flows", "Operational data screens"],
        },
        {
          period: "2016 — 2018",
          company: "Playnit",
          summary: "Brand promotion and campaign operation design",
          points: ["Coway, SKT, Tsingtao campaigns", "Promotion pages", "Event design"],
        },
        {
          period: "2013 — 2015",
          company: "Jnet",
          summary: "Information architecture and UIUX for public and library platforms",
          points: ["Public platforms", "Library services", "Accessibility-minded UI"],
        },
        {
          period: "2011 — 2013",
          company: "Early Web Design & HTML Publishing",
          summary: "Practical foundation in web design and publishing",
          points: ["Web design", "HTML/CSS publishing", "Operational pages"],
        },
      ],
    },
    projects: {
      eyebrow: "Selected Projects",
      title: "Product work across live services and independent products",
      description:
        "A focused selection of service design, complex business UX, and maker-led product work.",
    },
    thinking: {
      eyebrow: "Product Thinking",
      title: "I design the conditions that make a product work.",
      description:
        "A good interface helps users understand the next action, operators make decisions, and teams keep the system running.",
      items: [
        ["Problem framing", "Before drawing screens, I clarify where users get stuck and what the operation requires."],
        ["Flow design", "I connect IA, user flows, statuses, and edge cases into a coherent product structure."],
        ["Admin UX", "I design work screens that help operators scan, decide, and act quickly."],
        ["AI collaboration", "I use AI to iterate through research, structure, prototypes, and implementation experiments."],
      ],
    },
    writing: {
      eyebrow: "Writing / Experiments",
      title: "I keep notes from the process of making.",
      description:
        "A place for product reflections, AI collaboration notes, and independent product experiments.",
      cardTitle: "Making a product does not end at drawing screens.",
      cardBody:
        "I document the process of finding problems, structuring them, building small versions, and improving them through use.",
    },
    contact: {
      title: "Open to product design, admin systems, and early-stage UX work.",
      description: "Send the project context, timeline, and expected role. I usually reply within 1–2 days.",
      cta: "Contact",
    },
  },
};

export function HomePage({ locale = "ko" }: { locale?: Locale }) {
  const t = content[locale];

  return (
    <main className="bg-[#060a0f]">
      <HomeHero locale={locale} />

      <section id="projects" className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
          <FadeIn>
            <SectionHeading
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              description={t.projects.description}
            />
          </FadeIn>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/[0.07] bg-[#070b12]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-16 px-5 py-32 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:py-40">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f4f7fa] sm:text-5xl">
              {t.about.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="max-w-2xl text-lg leading-9 text-[#aab6c3]">
              {t.about.description}
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {t.about.cards.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5"
                >
                  <p className="font-semibold text-[#f4f7fa]">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#9ba8b5]">{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-16 px-5 py-32 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-40">
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </FadeIn>
          <div className="grid gap-6">
            {t.experience.items.map((item, index) => (
              <FadeIn
                key={`${item.period}-${item.company}`}
                delay={index * 0.04}
                className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#5ef2c2]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.company}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[#9ba8b5]">
                    {item.summary}
                  </p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#aab6c3] sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-white/[0.07] bg-black/10 px-4 py-3"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
          <FadeIn className="mx-auto text-center">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow={t.thinking.eyebrow}
                title={t.thinking.title}
                description={t.thinking.description}
              />
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.thinking.items.map(([title, body], index) => (
              <FadeIn
                key={title}
                delay={index * 0.04}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-12 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#5a8dff] to-[#4de1c1]" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#9ba8b5]">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-32 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-40">
          <FadeIn>
            <SectionHeading
              eyebrow={t.writing.eyebrow}
              title={t.writing.title}
              description={t.writing.description}
            />
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.14),rgba(77,225,193,0.07))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
          >
            <p className="text-lg font-semibold text-white">{t.writing.cardTitle}</p>
            <p className="mt-4 text-base leading-8 text-[#9ba8b5]">
              {t.writing.cardBody}
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-[1120px] px-5 py-32 sm:px-8 lg:py-40">
        <FadeIn className="grid gap-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-10 tracking-[-0.025em] text-white sm:text-3xl">
              {t.contact.title}
            </p>
            <p className="mt-4 text-base leading-7 text-[#9ba8b5]">
              {t.contact.description}
            </p>
          </div>
          <div>
            <ButtonLink href="/contact">
              {t.contact.cta}
            </ButtonLink>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
