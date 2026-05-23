import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export default function WritingPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Writing"
          title="제품, 디자인, 메이킹 기록을 위한 공간"
          description="추후 브런치 글, 작업 회고, AI 협업 노트 등을 연결할 수 있는 placeholder 페이지입니다."
        />
      </FadeIn>
      <FadeIn className="mt-10 rounded-[2rem] border border-white/[0.08] bg-white/[0.045] p-8 text-[#9ba8b5] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
        아직 공개된 글이 없습니다. 콘텐츠가 준비되면 카드 목록이나 외부 링크로 확장할 수 있습니다.
      </FadeIn>
    </main>
  );
}
