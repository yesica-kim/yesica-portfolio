"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

type Locale = "ko" | "en";

const heroContent = {
  ko: {
    eyebrow: "Product Designer / UI·UX Designer",
    title: (
      <>
        서비스를 움직이는
        <br />
        <span className="bg-[linear-gradient(100deg,#5a8dff_0%,#4de1c1_72%,#5ef2c2_100%)] bg-clip-text text-transparent">
          시스템을 설계합니다
        </span>
      </>
    ),
    description:
      "웹, 모바일, 관리자 시스템을 넘나든 오랜 실무 경험과 AI와 함께 실제 제품을 만들고 운영해온 설계 경험",
    cta: "View Projects",
    cards: [
      {
        title: "Schedule Block",
        badge: "출시 제품",
        description: "계획이 밀린 뒤에도 다시 회복할 수 있도록 설계한 일정 블록 앱",
        cta: "케이스 보기",
        href: "/projects/schedule-block",
        className: "",
        visual: "schedule",
      },
      {
        title: "AI Workflow",
        badge: "작업 시스템",
        description: "아이디어 정리부터 프로토타입과 자동화까지 빠르게 반복하는 개인 작업 시스템",
        cta: "흐름 보기",
        href: "/projects",
        className: "lg:translate-x-6",
        visual: "workflow",
      },
    ],
  },
  en: {
    eyebrow: "Product Designer / UI·UX Designer",
    title: (
      <>
        Designing calm systems
        <br />
        <span className="bg-[linear-gradient(100deg,#5a8dff_0%,#4de1c1_72%,#5ef2c2_100%)] bg-clip-text text-transparent">
          for real life products
        </span>
      </>
    ),
    description:
      "I design web, mobile, and admin systems with years of hands-on product experience. Today, I also build and operate small products with AI as a maker partner.",
    cta: "View Projects",
    cards: [
      {
        title: "Schedule Block",
        badge: "Live Product",
        description: "A recovery-first scheduling app with calendar sync and rescheduling flows.",
        cta: "View case",
        href: "/projects/schedule-block",
        className: "",
        visual: "schedule",
      },
      {
        title: "AI Workflow",
        badge: "Maker System",
        description: "A personal workflow for moving from ideas to prototypes and automation quickly.",
        cta: "View flow",
        href: "/en#thinking",
        className: "lg:translate-x-6",
        visual: "workflow",
      },
    ],
  },
};

export function HomeHero({ locale = "ko" }: { locale?: Locale }) {
  const content = heroContent[locale];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const cardX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden border-b border-white/[0.07] px-5 pb-20 pt-16 sm:px-8 lg:min-h-[calc(84vh-5rem)] lg:pb-32 lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_30%,rgba(90,141,255,0.18),transparent_30rem),radial-gradient(circle_at_88%_50%,rgba(77,225,193,0.1),transparent_24rem)]" />
      <div className="absolute left-[50%] top-[52%] -z-10 hidden h-[30rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

      <div className="mx-auto grid w-full max-w-[1120px] gap-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 max-w-3xl"
        >
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <span className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/60 sm:text-sm">
              {content.eyebrow}
            </span>
          </div>
          <h1 className="text-[clamp(2.85rem,4.8vw,4.65rem)] font-semibold leading-[1.08] tracking-[-0.042em] text-[#f4f7fa]">
            {content.title}
          </h1>
          <p className="mt-12 max-w-xl text-base font-normal leading-[1.7] text-white/70 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href={locale === "en" ? "/en#projects" : "/#projects"}
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-[linear-gradient(120deg,#183c98,#5a8dff,#4de1c1)] px-7 text-base font-semibold text-white shadow-[0_18px_50px_rgba(90,141,255,0.24)] transition hover:-translate-y-0.5"
            >
              {content.cta}
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ x: cardX, y: cardY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          className="relative z-10 grid gap-5 lg:origin-center lg:scale-[0.9] lg:pl-8"
        >
          {content.cards.map((card, index) => (
            <ProductFloatCard key={card.title} index={index} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductFloatCard({
  title,
  badge,
  description,
  cta,
  href,
  className,
  visual,
  index,
}: {
  title: string;
  badge: string;
  description: string;
  cta: string;
  href: string;
  className: string;
  visual: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, rotate: 0 }}
      transition={{ duration: 0.52, ease: "easeOut", delay: 0.12 + index * 0.07 }}
      className={`${className} group overflow-hidden rounded-[1.45rem] border border-white/[0.1] bg-[rgba(16,24,32,0.62)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition hover:border-[#5ef2c2]/30 hover:shadow-[0_28px_90px_rgba(77,225,193,0.1)]`}
    >
      <div className="flex items-start justify-between gap-4">
        <CardIcon type={visual} />
        <span className="rounded-full bg-[#5a8dff]/18 px-3 py-1 text-xs font-medium text-[#b9d2ff]">
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#b0bbc7]">{description}</p>
          <Link
            href={href}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#5ef2c2] transition group-hover:gap-3"
          >
            {cta} <span>→</span>
          </Link>
        </div>
        <Preview type={visual} />
      </div>
    </motion.article>
  );
}

function CardIcon({ type }: { type: string }) {
  const label = type === "mobi" ? "m" : type === "workflow" ? "✦" : type === "systems" ? "◆" : "▦";

  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(90,141,255,0.42),rgba(77,225,193,0.2))] text-lg font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
      {label}
    </div>
  );
}

function Preview({ type }: { type: string }) {
  if (type === "schedule") {
    return (
      <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/20 p-2.5">
        {["운동", "집중 업무", "점심 식사"].map((item, index) => (
          <div
            key={item}
            className="mb-2 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.06] px-2.5 py-1.5 last:mb-0"
          >
            <span className="w-10 text-[10px] text-[#6f7b88]">
              {9 + index}:00
            </span>
            <span className="h-2 w-2 rounded-full bg-[#5ef2c2]" />
            <span className="text-xs text-[#dce5ee]">{item}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "workflow") {
    return (
      <div className="mt-4 grid min-h-20 place-items-center rounded-2xl border border-white/[0.08] bg-[radial-gradient(circle_at_center,rgba(90,141,255,0.16),transparent_70%)]">
        <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-[#dce5ee]">
          {["Gmail", "Notion", "n8n", "Telegram", "AI", "Daily"].map((node) => (
            <span
              key={node}
              className="rounded-lg border border-white/[0.1] bg-white/[0.06] px-2.5 py-2 text-center"
            >
              {node}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (type === "mobi") {
    return (
      <div className="mt-4 grid min-h-20 place-items-center rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(91,61,255,0.32),rgba(77,225,193,0.1))]">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#684dff,#4de1c1)] text-3xl font-bold text-white shadow-[0_18px_40px_rgba(90,141,255,0.28)]">
          m
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 grid min-h-20 gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3">
      <PreviewLine />
      <PreviewLine width="w-3/4" />
      <PreviewLine width="w-1/2" />
    </div>
  );
}

function PreviewLine({ width = "w-full" }: { width?: string }) {
  return (
    <div className={`h-6 ${width} rounded-lg bg-[linear-gradient(90deg,rgba(90,141,255,0.24),rgba(77,225,193,0.14))]`} />
  );
}
