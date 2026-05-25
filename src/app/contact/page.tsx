import { ButtonLink } from "@/components/button-link";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const links = [
  ["Email", "contact@yesicastudio.com"],
  ["Brunch", "brunch.co.kr/@yesica"],
  ["GitHub", "github.com/yesica-kim"],
  ["LinkedIn", "linkedin.com/in/yesica-kim"],
];

const workScopes = [
  "프로덕트 디자인 / UX 구조 설계",
  "관리자 시스템 / 운영 화면 설계",
  "초기 서비스 IA / User Flow 정리",
  "AI 협업 기반 제품 실험과 프로토타입",
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="좋은 제품과 협업 이야기를 기다립니다"
          description="프로덕트 디자인, 관리자 시스템, 초기 서비스 UX 설계, AI 협업 메이킹과 관련된 문의를 편하게 남겨주세요."
        />
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(90,141,255,0.16),rgba(77,225,193,0.07))] p-8 text-white shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
            Open to
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Product Design · Admin UX · Freelance · Hiring
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            제품의 방향을 함께 정리하거나, 복잡한 서비스 흐름을 더 사용하기 쉽게 만드는 일을 좋아합니다. 협업 방식과 범위는 프로젝트의 단계에 맞춰 유연하게 논의할 수 있습니다.
          </p>
          <div className="mt-8 grid gap-3">
            {workScopes.map((scope) => (
              <div
                key={scope}
                className="rounded-2xl border border-white/[0.08] bg-black/10 px-4 py-3 text-sm text-[#d7e0ea]"
              >
                {scope}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-[#9ba8b5]">
            보통 1–2일 안에 확인해 답변드립니다. 프로젝트 배경, 일정, 필요한 역할을 함께 적어주시면 더 정확히 이야기할 수 있어요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="mailto:contact@yesicastudio.com">
              이메일 보내기
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              프로젝트 보기
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8"
        >
          <form
            action="mailto:contact@yesicastudio.com"
            method="post"
            encType="text/plain"
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white">
                이름 / 회사
                <input
                  name="name"
                  className="h-12 rounded-2xl border border-white/[0.08] bg-black/20 px-4 text-sm font-normal text-white outline-none transition placeholder:text-[#687686] focus:border-[#5ef2c2]/40"
                  placeholder="예시카 스튜디오"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white">
                이메일
                <input
                  name="email"
                  type="email"
                  className="h-12 rounded-2xl border border-white/[0.08] bg-black/20 px-4 text-sm font-normal text-white outline-none transition placeholder:text-[#687686] focus:border-[#5ef2c2]/40"
                  placeholder="hello@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-white">
              문의 내용
              <textarea
                name="message"
                rows={7}
                className="resize-none rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-4 text-sm font-normal leading-6 text-white outline-none transition placeholder:text-[#687686] focus:border-[#5ef2c2]/40"
                placeholder="프로젝트 배경, 일정, 필요한 역할을 간단히 적어주세요."
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(120deg,#1b3f9f,#5a8dff,#4de1c1,#1b3f9f)] bg-[length:220%_100%] px-6 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(90,141,255,0.26)] transition-all duration-500 hover:bg-[position:100%_0]"
            >
              메일 앱으로 보내기
            </button>
          </form>
        </FadeIn>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map(([label, value], index) => (
          <FadeIn
            key={label}
            delay={index * 0.04}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-[#5ef2c2]">{label}</p>
            <p className="mt-2 break-words text-sm font-medium text-[#d7e0ea]">
              {value}
            </p>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
