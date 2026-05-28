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
    <section className="relative grid min-h-[calc(100vh-72px)] overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.16),rgba(66,214,181,0.08)_42%,transparent_70%)] blur-2xl" />
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 self-center lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
        <div className="max-w-[720px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#4F7CFF]">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(3.35rem,5vw,4.35rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111827]">
            {content.titleTop}
            <br />
            <span className="lg:whitespace-nowrap">{content.titleBottom}</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-lg font-normal leading-[1.65] text-[#4B5563] sm:text-xl">
            {content.description}
          </p>
          <Link
            href={locale === "en" ? "/en#projects" : "/#projects"}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-base font-semibold text-white shadow-[0_16px_36px_rgba(17,24,39,0.16)] transition hover:-translate-y-0.5 hover:bg-[#4F7CFF]"
          >
            {content.cta} <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <ProductSystemsCollage systems={content.systems} />
      </div>
    </section>
  );
}

function ProductSystemsCollage({ systems }: { systems: string[] }) {
  return (
    <div className="relative min-h-[520px]">
      <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(79,124,255,0.18),rgba(66,214,181,0.16))] blur-2xl" />
      <div className="flex flex-wrap gap-2">
        {systems.map((item) => (
          <span key={item} className="relative z-10 rounded-full border border-[rgba(79,124,255,0.16)] bg-white/90 px-3 py-1 text-xs font-semibold text-[#111827] shadow-sm backdrop-blur">
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-8 min-h-[460px] overflow-hidden rounded-[28px] border border-[rgba(79,124,255,0.12)] bg-[linear-gradient(135deg,#F8FAFF,#EEF6F8)] p-5 shadow-[0_40px_100px_rgba(79,124,255,0.18)] sm:p-7">
        <div className="absolute right-6 top-6 w-[68%] rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
              Web Service
            </p>
            <p className="text-xs font-semibold text-[#111111]">Global UX</p>
          </div>
          <div className="mt-5 grid grid-cols-[1fr_0.62fr] gap-4">
            <div className="rounded-2xl bg-[#111827] p-5 text-white">
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
              <div className="rounded-2xl bg-[#EEF4FF] p-4 text-sm font-semibold text-[#111827]">
                Trust UX
              </div>
              <div className="rounded-2xl bg-[#E9FBF6] p-4 text-sm font-semibold text-[#111827]">
                Promotion Ops
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 w-[48%] min-w-[250px] rounded-[2.1rem] border border-[#111827] bg-[#111827] p-2 shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
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
                  <p className="mt-2 text-sm font-semibold text-[#111827]">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-7 w-56 rounded-[22px] border border-[#E2E8F0] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
            Admin System
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111827]">
            Ops Review
          </p>
          <div className="mt-5 grid gap-2">
            {["Payment exception", "Seat assignment", "Operator memo"].map((item) => (
              <div key={item} className="grid grid-cols-[1fr_auto] bg-[#F5F7FA] px-3 py-2 text-xs">
                <span className="font-semibold text-[#111827]">{item}</span>
                <span className="text-[#666666]">Open</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[42%] top-[43%] hidden w-52 rounded-[22px] border border-[#E2E8F0] bg-white p-4 shadow-[0_24px_55px_rgba(15,23,42,0.12)] sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
            AI Workflow
          </p>
          <div className="mt-4 grid gap-2">
            {["Detect delay", "Suggest block", "Sync calendar"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#111827]">
                <span className={index === 1 ? "h-2 w-2 rounded-full bg-[#42D6B5]" : "h-2 w-2 rounded-full bg-[#4F7CFF]"} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
