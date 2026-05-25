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

const proofPoints = [
  ["Web / Mobile", "사용자 서비스 화면과 모바일 앱 경험 설계"],
  ["Admin System", "운영자가 상태를 파악하고 처리하는 관리자 화면"],
  ["Service Operation", "접수, 결제, 상태값, 운영 플로우를 고려한 UX"],
  ["AI Maker", "AI와 협업해 개인 제품을 만들고 출시하는 실험"],
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="About"
          title="현실의 흐름을 제품의 구조로 바꾸는 디자이너"
          description="13년차 UI/UX 디자이너로서 웹, 모바일, 관리자 시스템을 오가며 실제 서비스와 운영 흐름을 함께 설계해왔습니다."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <FadeIn className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-10">
          <div className="space-y-6 text-base leading-8 text-[#aab6c3]">
            <p>
              저는 실제 서비스 운영 경험을 기반으로 제품의 사용 흐름과 비즈니스 구조를 함께 바라봅니다. 사용자가 보는 화면, 운영자가 관리하는 상태, 팀이 유지해야 하는 시스템이 자연스럽게 이어지는 설계를 좋아합니다.
            </p>
            <p>
              공공기관/도서관 플랫폼, 브랜드 프로모션, 검색광고 입찰 시스템, 글로벌 포커 서비스, 앱과 관리자 시스템까지 다양한 업종과 플랫폼을 경험했습니다. 화면을 예쁘게 만드는 일보다 사용자의 다음 행동과 운영자의 다음 판단이 끊기지 않는 구조를 중요하게 봅니다.
            </p>
            <p>
              최근에는 AI와 협업해 개인 제품을 직접 만들고 출시하며, 독립 메이커로서 제품을 작게 실험하고 운영하며 개선하는 방향을 키우고 있습니다.
            </p>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.18),rgba(77,225,193,0.08))] p-8 shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5ef2c2]">
            Working Scope
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Product Designer · Independent Maker
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#b8c4cf]">
            프리랜서, 취업, 창업, 개인 제품 제작이 하나의 경력 흐름으로 읽히도록 실제 작업과 운영 경험을 중심에 둡니다.
          </p>
          <div className="mt-8 grid gap-3">
            {proofPoints.map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/[0.08] bg-black/10 p-4"
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-[#9ba8b5]">{body}</p>
              </div>
            ))}
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
