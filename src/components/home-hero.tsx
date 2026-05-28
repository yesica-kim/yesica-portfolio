import Link from "next/link";
import Image from "next/image";

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
    <section className="bg-white px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto grid w-full max-w-[1240px] gap-16 lg:grid-cols-[1.34fr_0.66fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#666666] uppercase">
            {content.eyebrow}
          </p>
          <h1 className="mt-8 max-w-5xl text-[clamp(3.1rem,5vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#111111]">
            {content.titleTop}
            <br />
            {content.titleBottom}
          </h1>
          <p className="mt-9 max-w-xl text-xl font-normal leading-8 text-[#333333]">
            {content.description}
          </p>
          <Link
            href={locale === "en" ? "/en#projects" : "/#projects"}
            className="mt-11 inline-flex items-center gap-2 text-base font-semibold text-[#111111] underline decoration-[#5A8DFF] decoration-2 underline-offset-8 transition hover:text-[#5A8DFF]"
          >
            {content.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Link
          href="/projects/schedule-block"
          className="group border-t border-[#111111] pt-6 transition hover:border-[#5A8DFF] lg:mb-3"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#666666] uppercase">
            {content.featureLabel}
          </p>
          <div className="mt-5 overflow-hidden bg-[#F3F5F7]">
            <div className="min-h-[390px] p-5 sm:p-7">
              <ScheduleBlockProductPreview compact />
            </div>
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#111111]">
            {content.featureTitle}
          </h2>
          <p className="mt-2 text-base text-[#333333]">{content.featureDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.featureMeta.map((item) => (
              <span key={item} className="border border-[#D5DAE0] bg-white px-3 py-1 text-xs font-medium text-[#444444]">
                {item}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}

function ScheduleBlockProductPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative mx-auto flex h-full max-w-[430px] items-end justify-center">
      <div className="absolute left-0 top-8 hidden w-44 bg-white p-4 shadow-[0_22px_50px_rgba(17,17,17,0.1)] sm:block">
        <div className="flex items-center gap-3">
          <Image
            src="/schedule-block/app-icon.png"
            alt=""
            width={34}
            height={34}
            className="rounded-[0.7rem]"
          />
          <div>
            <p className="text-[11px] font-semibold text-[#111111]">Synced</p>
            <p className="mt-1 text-[10px] text-[#666666]">Google Calendar</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-24 rounded-full bg-[#111111]" />
          <div className="h-2 w-32 rounded-full bg-[#D8DDE4]" />
          <div className="h-2 w-20 rounded-full bg-[#D8DDE4]" />
        </div>
      </div>

      <div className="w-full max-w-[270px] rounded-[2rem] border border-[#D5DAE0] bg-[#111111] p-2 shadow-[0_30px_70px_rgba(17,17,17,0.18)]">
        <div className="overflow-hidden rounded-[1.55rem] bg-white">
          <div className="border-b border-[#E2E6EB] px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#666666]">
                  Today
                </p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#111111]">
                  Schedule Block
                </p>
              </div>
              <Image
                src="/schedule-block/app-icon.png"
                alt=""
                width={38}
                height={38}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-3 bg-[#FAFBFC] p-4">
            {[
              ["09:00", "Deep work", "Protected"],
              ["11:30", "Calendar sync", "Updated"],
              ["15:00", "Reschedule", "AI suggested"],
            ].map(([time, title, status], index) => (
              <div key={title} className="bg-white p-3 shadow-[0_8px_20px_rgba(17,17,17,0.05)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#666666]">{time}</span>
                  <span
                    className={`text-[10px] font-semibold ${
                      index === 2 ? "text-[#5A8DFF]" : "text-[#444444]"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#111111]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-0 hidden w-48 bg-white p-4 shadow-[0_22px_50px_rgba(17,17,17,0.1)] sm:block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#666666]">
          Recovery Plan
        </p>
        <p className="mt-2 text-lg font-semibold tracking-[-0.035em] text-[#111111]">
          3 tasks moved
        </p>
        <div className="mt-4 grid grid-cols-5 gap-1">
          {[70, 46, 84, 58, 92].map((height, index) => (
            <div key={index} className="flex h-16 items-end bg-[#F0F3F6]">
              <div
                className={index === 4 ? "w-full bg-[#5A8DFF]" : "w-full bg-[#BFC7D1]"}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      {compact ? null : <div className="absolute inset-x-12 bottom-0 h-px bg-[#D5DAE0]" />}
    </div>
  );
}
