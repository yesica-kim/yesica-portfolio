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
    systems: ["App", "Web", "Admin", "AI Workflow"],
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
    systems: ["App", "Web", "Admin", "AI Workflow"],
  },
};

export function HomeHero({ locale = "ko" }: { locale?: Locale }) {
  const content = heroContent[locale];

  return (
    <section className="grid min-h-screen bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1320px] gap-16 self-center lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#666666] uppercase">
            {content.eyebrow}
          </p>
          <h1 className="mt-8 text-[clamp(3.35rem,5.1vw,5.2rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#111111]">
            {content.titleTop}
            <br />
            {content.titleBottom}
          </h1>
          <p className="mt-9 max-w-xl text-xl font-normal leading-8 text-[#111111]">
            {content.description}
          </p>
          <Link
            href={locale === "en" ? "/en#projects" : "/#projects"}
            className="mt-11 inline-flex items-center rounded-full border border-[#111111] px-5 py-3 text-base font-semibold text-[#111111] transition hover:border-[#5A8DFF] hover:text-[#5A8DFF]"
          >
            {content.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ProductSystemsCollage systems={content.systems} />
      </div>
    </section>
  );
}

function ProductSystemsCollage({ systems }: { systems: string[] }) {
  return (
    <div className="relative min-h-[520px] border-t border-[#111111] pt-6">
      <div className="flex flex-wrap gap-2">
        {systems.map((item) => (
          <span key={item} className="border border-[#D9DDE3] bg-white px-3 py-1 text-xs font-semibold text-[#111111]">
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-8 min-h-[450px] overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="absolute right-6 top-6 w-[68%] rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between border-b border-[#D9DDE3] pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
              Web Service
            </p>
            <p className="text-xs font-semibold text-[#111111]">Global UX</p>
          </div>
          <div className="mt-5 grid grid-cols-[1fr_0.62fr] gap-4">
            <div className="bg-[#111111] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#AEB6C2]">
                Product Flow
              </p>
              <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em]">
                Player to operator
              </p>
              <div className="mt-8 h-2 bg-[#2A2F36]">
                <div className="h-full w-4/5 bg-[#5A8DFF]" />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="bg-[#EEF4FF] p-4 text-sm font-semibold text-[#111111]">
                Trust UX
              </div>
              <div className="bg-[#F5F7FA] p-4 text-sm font-semibold text-[#111111]">
                Promotion Ops
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 w-[48%] min-w-[250px] rounded-[2.1rem] border border-[#111111] bg-[#111111] p-2 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <div className="overflow-hidden rounded-[1.6rem] bg-white">
            <div className="flex items-center justify-between border-b border-[#D9DDE3] px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
                App
              </p>
              <Image src="/schedule-block/app-icon.png" alt="" width={38} height={38} className="rounded-xl" />
            </div>
            <div className="grid gap-3 bg-[#FAFBFC] p-4">
              {[
                ["09:00", "Focus block", "Protected"],
                ["14:00", "Calendar sync", "Updated"],
                ["16:30", "Reschedule", "AI"],
              ].map(([time, title, status]) => (
                <div key={title} className="bg-white px-3 py-3 shadow-[0_8px_18px_rgba(17,17,17,0.05)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#666666]">{time}</span>
                    <span className="text-[10px] font-semibold text-[#5A8DFF]">{status}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#111111]">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-7 w-56 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_22px_55px_rgba(15,23,42,0.1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
            Admin System
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111111]">
            Ops Review
          </p>
          <div className="mt-5 grid gap-2">
            {["Payment exception", "Seat assignment", "Operator memo"].map((item) => (
              <div key={item} className="grid grid-cols-[1fr_auto] bg-[#F5F7FA] px-3 py-2 text-xs">
                <span className="font-semibold text-[#111111]">{item}</span>
                <span className="text-[#666666]">Open</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[42%] top-[43%] hidden w-52 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_24px_55px_rgba(15,23,42,0.12)] sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
            AI Workflow
          </p>
          <div className="mt-4 grid gap-2">
            {["Detect delay", "Suggest block", "Sync calendar"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#111111]">
                <span className={index === 1 ? "h-2 w-2 bg-[#5A8DFF]" : "h-2 w-2 bg-[#111111]"} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
