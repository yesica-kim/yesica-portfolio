import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/motion";
import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { selectedProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="bg-[#060a0f]">
      <HomeHero />

      <section className="border-b border-white/[0.07] bg-[#080d14]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Projects"
            title="실제 서비스와 개인 제품을 함께 보여주는 작업들"
            description="운영 구조가 있는 서비스, 복잡한 사용자 흐름, 개인 문제에서 출발한 제품을 한 곳에 담았습니다."
          />
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/[0.07] bg-[#060a0f]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="How I Work"
            title="제품의 표면과 운영 구조를 같이 봅니다"
            description="좋은 화면은 사용자의 다음 행동과 운영자의 다음 판단까지 이어질 때 더 오래 작동한다고 믿습니다."
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Product Thinking",
            "UX Flow",
            "Admin System",
            "AI Collaboration",
            "Independent Maker",
          ].map((item, index) => (
            <FadeIn
              key={item}
              delay={index * 0.04}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.045] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
            >
              <div className="mb-8 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#5a8dff] to-[#4de1c1]" />
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9ba8b5]">
                추후 실제 사례와 판단 기준을 채워 넣을 수 있는 핵심 키워드 영역입니다.
              </p>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.18),rgba(77,225,193,0.08))] p-8 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            13년차 UI/UX 디자이너이자, 실제 제품을 만드는 메이커
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-lg leading-9 text-[#aab6c3]">
            실제 서비스 경험과 개인 제품 제작 경험을 함께 쌓아왔습니다. 복잡한 서비스 구조, 관리자페이지, 결제와 상태 흐름처럼 운영과 맞닿은 UX를 다루며, 최근에는 AI와 함께 더 빠르게 제품을 실험하고 구현하는 방향을 탐색하고 있습니다.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-14 pb-24 sm:px-8">
        <FadeIn
          className="rounded-[2rem] border border-white/[0.08] bg-white/[0.045] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-12"
        >
          <p className="mx-auto max-w-2xl text-2xl font-semibold leading-10 text-white">
            프로젝트, 협업, 프리랜서 작업, 제품 디자인 관련 이야기를 환영합니다.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
