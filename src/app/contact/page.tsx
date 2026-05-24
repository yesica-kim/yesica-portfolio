import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const links = [
  ["Email", "contact@yesicastudio.com"],
  ["Brunch", "brunch.co.kr/@yesica"],
  ["GitHub", "github.com/yesica-kim"],
  ["LinkedIn", "linkedin.com/in/yesica-kim"],
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="좋은 제품과 협업 이야기를 기다립니다"
          description="프리랜서 작업, 제품 디자인, 채용, AI 협업 메이킹과 관련된 문의를 편하게 남길 수 있는 영역입니다."
        />
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="rounded-[2rem] bg-gradient-to-br from-neutral-950 to-teal-950 p-8 text-white shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Open to
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Freelance · Collaboration · Product Design · Hiring
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            제품의 방향을 함께 정리하거나, 복잡한 서비스 흐름을 더 사용하기 쉽게 만드는 일을 좋아합니다. 협업 방식과 범위는 프로젝트의 단계에 맞춰 유연하게 논의할 수 있습니다.
          </p>
          <div className="mt-8">
            <ButtonLink href="/projects">View Projects</ButtonLink>
          </div>
        </FadeIn>

        <div className="grid gap-4">
          {links.map(([label, value], index) => (
            <FadeIn
              key={label}
              delay={index * 0.04}
              className="rounded-2xl border border-black/6 bg-white/80 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-teal-700">{label}</p>
              <p className="mt-2 text-lg font-medium text-neutral-950">{value}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
