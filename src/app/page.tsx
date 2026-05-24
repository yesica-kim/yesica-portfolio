import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { selectedProjects } from "@/data/projects";

const processItems = [
  {
    title: "Product Thinking",
    description:
      "문제 정의, 사용자 흐름, 운영 조건을 함께 보며 제품이 실제 환경에서 작동하는 구조를 설계합니다.",
  },
  {
    title: "UX Flow",
    description:
      "사용자가 망설이지 않고 다음 행동으로 이어질 수 있도록 단계, 정보, 피드백의 흐름을 정리합니다.",
  },
  {
    title: "Admin System",
    description:
      "운영자가 상태를 빠르게 파악하고 필요한 처리를 놓치지 않도록 관리 화면의 우선순위와 액션을 설계합니다.",
  },
  {
    title: "AI Collaboration",
    description:
      "AI를 활용해 아이디어 탐색, 구조화, 프로토타입, 구현 실험을 빠르게 반복하며 제품 가능성을 검증합니다.",
  },
  {
    title: "Independent Maker",
    description:
      "개인 문제에서 출발해 직접 제품을 만들고 운영하면서 실제 사용 경험을 기준으로 계속 개선합니다.",
  },
];

const introItems = [
  ["13년차", "UI/UX와 제품 디자인을 기반으로 실제 서비스의 흐름을 설계해왔습니다."],
  ["운영 경험", "사용자 화면뿐 아니라 관리자, 상태값, 결제와 같은 운영 구조까지 함께 봅니다."],
  ["AI 협업", "아이디어 정리, 프로토타입, 구현 실험을 AI와 함께 빠르게 반복합니다."],
];

export default function Home() {
  return (
    <main className="bg-[#060a0f]">
      <HomeHero />

      <section className="border-b border-white/[0.07] bg-[#070b12]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:py-32">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">
              About
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#f4f7fa] sm:text-5xl">
              화면의 아름다움보다 오래 작동하는 제품의 구조에 집중합니다.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="max-w-2xl text-lg leading-9 text-[#aab6c3]">
              복잡한 서비스 구조, 관리자페이지, 결제와 상태 흐름처럼 운영과 맞닿은 UX를 다루며, 개인 문제에서 출발한 제품을 직접 만들고 배포하는 실험도 이어가고 있습니다.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {introItems.map(([title, body]) => (
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

      <section className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-28 sm:px-8 lg:py-36">
          <FadeIn>
            <SectionHeading
              eyebrow="Selected Projects"
              title="실제 서비스와 개인 제품을 함께 보여주는 작업들"
              description="운영 구조가 있는 서비스, 복잡한 사용자 흐름, 개인 문제에서 출발한 제품을 중심으로 정리했습니다."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-28 sm:px-8 lg:py-36">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="제품의 표면과 운영 구조를 같이 봅니다"
              description="좋은 화면은 사용자의 다음 행동과 운영자의 다음 판단까지 이어질 때 더 오래 작동한다고 믿습니다."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processItems.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.04}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-10 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#5a8dff] to-[#4de1c1]" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#9ba8b5]">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-36">
          <FadeIn>
            <SectionHeading
              eyebrow="Writing / Experiments"
              title="만드는 과정에서 생기는 생각을 기록합니다"
              description="브런치 글, 작업 회고, AI 협업 노트, 개인 제품 실험을 차분히 연결해갈 공간입니다."
            />
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.14),rgba(77,225,193,0.07))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
          >
            <p className="text-lg font-semibold text-white">
              제품을 만드는 일은 화면을 그리는 것에서 끝나지 않습니다.
            </p>
            <p className="mt-4 text-base leading-8 text-[#9ba8b5]">
              문제를 발견하고, 구조화하고, 작게 만들어보고, 다시 고치는 과정을 기록하며 Yesica Studio의 작업 방식을 쌓아갑니다.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-28 sm:px-8 lg:py-36">
        <FadeIn
          className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-14"
        >
          <p className="mx-auto max-w-2xl text-2xl font-semibold leading-10 tracking-[-0.025em] text-white sm:text-3xl">
            프로젝트, 협업, 프리랜서 작업, 제품 디자인 관련 이야기를 환영합니다.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">연락하기</ButtonLink>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
