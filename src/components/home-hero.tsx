"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    previewLabel: "Representative Product",
    previewTitle: "Schedule Block",
    previewSubtitle: "AI 협업 기반 스케줄링 앱",
    previewMeta: ["iOS", "Live Product", "Calendar Sync"],
  },
  en: {
    eyebrow: "Product Designer",
    titleTop: "Designing user experience",
    titleBottom: "and operation flows",
    description: (
      <>
        I design product and operational flows
        <br />
        based on real service experience.
      </>
    ),
    cta: "View Projects",
    previewLabel: "Representative Product",
    previewTitle: "Schedule Block",
    previewSubtitle: "AI-assisted scheduling app",
    previewMeta: ["iOS", "Live Product", "Calendar Sync"],
  },
};

export function HomeHero({ locale = "ko" }: { locale?: Locale }) {
  const content = heroContent[locale];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.07] bg-[#05070A] px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(90,141,255,0.42),transparent)]" />
      <div className="absolute right-[-10rem] top-[-12rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#5A8DFF]/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1120px] gap-14 lg:grid-cols-[1.16fr_0.84fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/52">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 text-[clamp(2.55rem,4.35vw,4rem)] font-semibold leading-[1.14] tracking-[-0.035em] text-[#f6f8fb]">
            {content.titleTop}
            <br />
            {content.titleBottom}
          </h1>
          <p className="mt-8 max-w-xl text-base font-normal leading-8 text-white/64 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-10">
            <Link
              href={locale === "en" ? "/en#projects" : "/#projects"}
              className="inline-flex h-12 items-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#05070A] transition hover:-translate-y-0.5 hover:bg-[#eef3f7]"
            >
              {content.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#10161D] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-2 pb-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/38">
                  {content.previewLabel}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {content.previewTitle}
                </h2>
              </div>
              <span className="rounded-full border border-[#4DE1C1]/20 px-3 py-1 text-xs font-medium text-[#94ead9]">
                Live
              </span>
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-[#0B1016]">
              <div className="grid grid-cols-[4.5rem_1fr] border-b border-white/[0.06] text-xs text-white/42">
                <div className="border-r border-white/[0.06] px-4 py-3">Today</div>
                <div className="px-4 py-3">{content.previewSubtitle}</div>
              </div>
              <div className="grid gap-2 p-3">
                {[
                  ["09:00", "Focus block", "synced"],
                  ["13:30", "Design review", "fixed"],
                  ["18:00", "Auto reschedule", "moved"],
                ].map(([time, title, status]) => (
                  <div
                    key={time}
                    className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3"
                  >
                    <span className="text-xs text-white/38">{time}</span>
                    <span className="text-sm font-medium text-[#e8edf2]">{title}</span>
                    <span className="text-xs text-[#4DE1C1]/80">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {content.previewMeta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-white/58"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
