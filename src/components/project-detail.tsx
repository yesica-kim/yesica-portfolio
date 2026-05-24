import { Project } from "@/data/projects";
import { ButtonLink } from "./button-link";
import { FadeIn, FloatCard } from "./motion";
import { SectionHeading } from "./section-heading";

const processSteps = [
  "Research",
  "Problem Definition",
  "IA / User Flow",
  "Wireframe",
  "UI Design",
  "Iteration",
];

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <FadeIn className="flex flex-col justify-center">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.category.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-teal-100 bg-white/80 px-3 py-1 text-xs font-semibold text-teal-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {project.description}
          </p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-black/6 bg-white/70 p-5 text-sm shadow-sm sm:grid-cols-2">
            {[
              ["Role", project.role],
              ["Period", project.period],
              ["Platform", project.platform],
              ["Status", project.status],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-neutral-400">{label}</p>
                <p className="mt-1 font-medium text-neutral-800">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FloatCard
          className={`min-h-[420px] rounded-[2rem] bg-gradient-to-br ${project.accent} p-5 shadow-[0_26px_90px_rgba(20,184,166,0.22)]`}
        >
          <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/25 bg-white/25 p-5 backdrop-blur-md">
            <div className="rounded-2xl bg-white/65 p-4 shadow-xl">
              <div className="h-3 w-24 rounded-full bg-neutral-950/20" />
              <div className="mt-5 grid gap-3">
                <div className="h-20 rounded-2xl bg-white/80" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-2xl bg-white/60" />
                  <div className="h-24 rounded-2xl bg-white/45" />
                </div>
              </div>
            </div>
          </div>
        </FloatCard>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Overview", project.overview],
            ["Problem", project.problem],
            ["Goal", project.goal],
          ].map(([title, body]) => (
            <FadeIn
              key={title}
              className="rounded-2xl border border-black/6 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-neutral-950">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Process"
            title="문제를 이해하고 제품 구조로 옮기는 과정"
            description="리서치, 문제 정의, 정보 구조, 화면 설계, UI 디자인, 반복 개선의 흐름을 따라 핵심 의사결정을 정리합니다."
          />
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeIn
              key={step}
              delay={index * 0.03}
              className="rounded-2xl border border-black/6 bg-white/75 p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-neutral-950">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                프로젝트의 맥락에 맞춰 확인한 문제, 선택한 방향, 화면에 반영한 기준을 단계별로 정리합니다.
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Design Solution"
            title="핵심 화면과 사용자 흐름"
            description="주요 화면은 문제 해결 방향이 드러나도록 구성하고, 실제 산출물이 정리되는 대로 화면 이미지와 설명을 확장합니다."
          />
        </FadeIn>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {project.screens.map((screen, index) => (
            <FloatCard
              key={screen}
              delay={index * 0.04}
              className={`rounded-2xl bg-gradient-to-br ${project.accent} p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)]`}
            >
              <div className="aspect-[4/3] rounded-[1.15rem] border border-white/25 bg-white/25 p-4 backdrop-blur">
                <div className="flex h-full flex-col justify-between rounded-2xl bg-white/65 p-4">
                  <div>
                    <div className="h-2 w-16 rounded-full bg-neutral-900/20" />
                    <h3 className="mt-5 text-xl font-semibold text-neutral-950">
                      {screen}
                    </h3>
                  </div>
                  <div className="grid gap-2">
                    <div className="h-10 rounded-xl bg-white/80" />
                    <div className="h-10 rounded-xl bg-white/55" />
                    <div className="h-10 rounded-xl bg-white/40" />
                  </div>
                </div>
              </div>
            </FloatCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 lg:py-20">
        <FadeIn className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Result / Learning
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950">
            결과와 배운 점
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
            제품의 사용 맥락과 운영 조건을 함께 보며, 화면 설계가 실제 서비스 흐름과 연결될 때 더 오래 작동한다는 점을 확인한 프로젝트입니다. 정량 지표와 상세 산출물은 케이스 스터디 정리 단계에서 업데이트합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.focus.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/projects" variant="secondary">
              Back to Projects
            </ButtonLink>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
