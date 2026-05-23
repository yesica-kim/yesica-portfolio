import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const skills = [
  "Product Design",
  "UI/UX Design",
  "UX Research",
  "IA / User Flow",
  "Admin System",
  "Design System",
  "AI Collaboration",
  "No-code / Automation",
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="About"
          title="현실의 흐름을 제품의 구조로 바꾸는 디자이너"
          description="13년차 UI/UX 디자이너로서 사용자 화면뿐 아니라 운영, 상태, 관리자 경험까지 함께 설계해왔습니다."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <FadeIn className="rounded-[2rem] border border-black/6 bg-white/80 p-8 shadow-sm sm:p-10">
          <div className="space-y-6 text-base leading-8 text-neutral-600">
            <p>
              저는 실제 서비스 운영 경험을 기반으로 제품의 사용 흐름과 비즈니스 구조를 함께 바라봅니다. 사용자가 보는 화면, 운영자가 관리하는 상태, 팀이 유지해야 하는 시스템이 자연스럽게 이어지는 설계를 좋아합니다.
            </p>
            <p>
              관리자페이지와 복잡한 서비스 구조, 결제 및 신청 흐름처럼 실무에서 자주 어려워지는 영역을 다뤄왔고, 최근에는 AI와 함께 개인 제품을 만들며 독립적인 메이커로서의 가능성을 확장하고 있습니다.
            </p>
            <p>
              이 페이지는 앞으로 더 구체적인 경력, 작업 방식, 협업 경험을 채워 넣기 위한 기본 소개 영역입니다.
            </p>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="rounded-[2rem] bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 p-1 shadow-xl"
        >
          <div className="h-full rounded-[1.85rem] bg-white/80 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
              Product Designer · Life System Designer
            </h2>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              프리랜서, 취업, 창업, 개인 프로젝트가 분리되지 않고 하나의 방향으로 읽히도록 정리해가는 공간입니다.
            </p>
          </div>
        </FadeIn>
      </div>

      <section className="mt-14">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills / Keywords"
            title="현재 포트폴리오의 중심 키워드"
          />
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <FadeIn
              key={skill}
              delay={index * 0.03}
              className="rounded-2xl border border-black/6 bg-white/75 p-5 text-sm font-semibold text-neutral-800 shadow-sm"
            >
              {skill}
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
