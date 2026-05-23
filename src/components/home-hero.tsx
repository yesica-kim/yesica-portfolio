"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

const cards = [
  {
    title: "Schedule Block",
    badge: "Live Product",
    description:
      "A recovery-first scheduling app that frees you from the stress of rescheduling.",
    cta: "View Case Study",
    href: "/projects/schedule-block",
    className: "lg:mt-4",
    visual: "schedule",
  },
  {
    title: "mobimobi",
    badge: "Live Product",
    description:
      "Routine tracker for Mabinogi Mobile players. Organize, track, and never miss your daily tasks.",
    cta: "View Case Study",
    href: "/projects",
    className: "lg:mt-16",
    visual: "mobi",
  },
  {
    title: "AI Workflow",
    badge: "Personal System",
    description:
      "Automations that connect Gmail, Telegram, Notion and n8n for daily clarity.",
    cta: "View Details",
    href: "/projects",
    className: "lg:-mt-4",
    visual: "workflow",
  },
  {
    title: "Product Systems",
    badge: "Case Study",
    description:
      "End-to-end product design from user research to service operation.",
    cta: "View Case Study",
    href: "/projects",
    className: "lg:mt-6",
    visual: "systems",
  },
];

const trustItems = [
  ["13+ Years", "of Experience"],
  ["UI/UX Design", "Web, Mobile, Admin"],
  ["Product Design", "End-to-end Experience"],
  ["Service Operation", "Real World Impact"],
  ["AI Collaboration", "Maker with AI"],
];

export function HomeHero() {
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
      className="relative isolate overflow-hidden border-b border-white/[0.07] px-5 pb-12 pt-10 sm:px-8 lg:min-h-[calc(100vh-5rem)] lg:pb-8 lg:pt-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_28%,rgba(90,141,255,0.22),transparent_32rem),radial-gradient(circle_at_86%_46%,rgba(77,225,193,0.12),transparent_24rem)]" />
      <div className="absolute left-[43%] top-[55%] -z-10 hidden h-[34rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] lg:block" />
      <div className="absolute right-[5%] top-[33%] -z-10 hidden h-[24rem] w-[24rem] rounded-full border border-[#5ef2c2]/20 lg:block" />

      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 max-w-3xl lg:pt-24"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-base text-[#c5ced8] sm:text-lg">
              Product Designer / UI/UX Designer
            </span>
          </div>
          <h1 className="text-[clamp(3.15rem,5.75vw,5.45rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#f4f7fa]">
            Designing calm
            <br />
            systems for
            <br />
            <span className="bg-[linear-gradient(100deg,#5a8dff_0%,#4de1c1_72%,#5ef2c2_100%)] bg-clip-text text-transparent">
              real life products.
            </span>
          </h1>
          <p className="mt-7 text-xl leading-8 text-[#9ba8b5]">
            Product Designer · Independent Maker · AI Collaboration
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-[linear-gradient(120deg,#183c98,#5a8dff,#4de1c1)] px-7 text-base font-semibold text-white shadow-[0_18px_50px_rgba(90,141,255,0.28)] transition hover:-translate-y-0.5"
            >
              View Projects
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="group inline-flex h-14 items-center gap-3 text-base font-semibold text-[#aeb9c5] transition hover:text-white"
            >
              About Yesica
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ x: cardX, y: cardY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          className="relative z-10 grid gap-4 lg:-mb-24 lg:origin-top-right lg:scale-[0.88] lg:grid-cols-[1.06fr_0.86fr] lg:items-start lg:pt-1"
        >
          {cards.map((card, index) => (
            <ProductFloatCard key={card.title} index={index} {...card} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
        className="mx-auto mt-10 w-full max-w-[1200px] rounded-[1.5rem] border border-white/[0.08] bg-[rgba(16,24,32,0.72)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-md lg:mt-8"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {trustItems.map(([title, body]) => (
            <div
              key={title}
              className="border-white/[0.08] md:border-r md:pr-5 md:last:border-r-0"
            >
              <p className="font-semibold text-[#f4f7fa]">{title}</p>
              <p className="mt-1 text-sm text-[#9ba8b5]">{body}</p>
            </div>
          ))}
        </div>
        <div
          id="tools"
          className="mt-5 flex flex-wrap gap-3 border-t border-white/[0.07] pt-5 text-xs font-semibold text-[#6f7b88] sm:justify-end"
        >
          {["Figma", "Notion", "n8n", "Ps", "Automation"].map((tool) => (
            <span key={tool} className="rounded-full bg-white/[0.05] px-3 py-1.5">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
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
      whileHover={{ y: -8, rotate: 0 }}
      transition={{ duration: 0.52, ease: "easeOut", delay: 0.12 + index * 0.07 }}
      className={`${className} group overflow-hidden rounded-[1.45rem] border border-white/[0.1] bg-[rgba(16,24,32,0.72)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-md transition hover:border-[#5ef2c2]/30 hover:shadow-[0_28px_90px_rgba(77,225,193,0.12)]`}
    >
      <div className="flex items-start justify-between gap-4">
        <CardIcon type={visual} />
        <span className="rounded-full bg-[#5a8dff]/18 px-3 py-1 text-xs font-medium text-[#b9d2ff]">
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-5 text-[#b0bbc7]">{description}</p>
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
