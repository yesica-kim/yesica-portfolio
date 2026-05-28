import Link from "next/link";

type Locale = "ko" | "en";

const heroContent = {
  ko: {
    eyebrow: "Product Designer",
    titleTop: "사용자 경험부터",
    titleBottom: "운영 흐름까지 설계합니다",
    description: (
      <>
        실제 서비스 경험을 바탕으로
        <br />
        제품과 운영의 흐름을 설계합니다.
      </>
    ),
    cta: "View Projects",
    featureLabel: "Selected Case",
    featureTitle: "Schedule Block",
    featureDescription: "AI 협업 기반 개인 스케줄링 앱",
    featureMeta: ["Product Design", "iOS", "Live Product"],
  },
  en: {
    eyebrow: "Product Designer",
    titleTop: "From user experience",
    titleBottom: "to operation flows",
    description: (
      <>
        I design product and operational flows
        <br />
        based on real service experience.
      </>
    ),
    cta: "View Projects",
    featureLabel: "Selected Case",
    featureTitle: "Schedule Block",
    featureDescription: "AI-assisted personal scheduling app",
    featureMeta: ["Product Design", "iOS", "Live Product"],
  },
};

export function HomeHero({ locale = "ko" }: { locale?: Locale }) {
  const content = heroContent[locale];

  return (
    <section className="bg-white px-5 pb-20 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <p className="text-sm font-medium tracking-[0.18em] text-[#777777] uppercase">
            {content.eyebrow}
          </p>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.55rem,4.45vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-[#111111]">
            {content.titleTop}
            <br />
            {content.titleBottom}
          </h1>
          <p className="mt-8 max-w-xl text-lg font-normal leading-8 text-[#444444]">
            {content.description}
          </p>
          <Link
            href={locale === "en" ? "/en#projects" : "/#projects"}
            className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-[#111111] underline decoration-[#5A8DFF] decoration-2 underline-offset-8 transition hover:text-[#5A8DFF]"
          >
            {content.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Link
          href="/projects/schedule-block"
          className="group border-t border-[#E6E9EE] pt-6 transition hover:border-[#5A8DFF] lg:mb-2"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#777777] uppercase">
            {content.featureLabel}
          </p>
          <div className="mt-5 aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
            <div className="flex h-full items-end p-6">
              <div className="w-full bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.08)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#E8ECF1] pb-4">
                  <div>
                    <div className="h-2 w-24 bg-[#D7DDE5]" />
                    <div className="mt-3 h-3 w-40 bg-[#111111]" />
                  </div>
                  <div className="h-8 w-8 rounded-full border border-[#D7DDE5]" />
                </div>
                <div className="grid gap-2">
                  {["Focus block", "Calendar sync", "Auto reschedule"].map((item) => (
                    <div
                      key={item}
                      className="grid grid-cols-[4rem_1fr] border border-[#E8ECF1] px-3 py-3 text-sm"
                    >
                      <span className="text-[#777777]">09:00</span>
                      <span className="font-medium text-[#111111]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#111111]">
            {content.featureTitle}
          </h2>
          <p className="mt-2 text-base text-[#444444]">{content.featureDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.featureMeta.map((item) => (
              <span key={item} className="border border-[#E1E5EA] px-3 py-1 text-xs text-[#777777]">
                {item}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
