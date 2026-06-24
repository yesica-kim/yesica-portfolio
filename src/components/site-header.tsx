"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const worksItems = [
  { href: "/projects", label: "Portfolio" },
  { href: "/projects/schedule-block", label: "Schedule Block" },
  { href: "/projects/walla", label: "Walla" },
  { href: "/projects/wsop-plus", label: "WSOP+" },
];

const navItems = {
  ko: [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#writing", label: "brunch" },
  ],
  en: [
    { href: "/en#about", label: "About" },
    { href: "/en#experience", label: "Experience" },
    { href: "/en#writing", label: "brunch" },
  ],
};

export function SiteHeader() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "ko";
  const isEnglish = locale === "en";

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(17,24,39,0.06)] bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto grid h-[72px] w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href={isEnglish ? "/en" : "/"} className="group flex items-center gap-2.5">
          <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.03em] text-[#111111] sm:text-base">
            Yesica-Portfolio
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-10 text-sm font-medium text-[#111827] md:flex lg:gap-14">
          <div className="group relative">
            <Link
              href="/projects"
              className="inline-flex h-[72px] items-center transition hover:text-[#5A8DFF]"
            >
              Works
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-[58px] w-[220px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white/95 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                {worksItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#F6F9FC] hover:text-[#4F7CFF]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navItems[locale].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#5A8DFF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <div className="hidden h-8 items-center gap-1 rounded-full border border-[#E2E8F0] bg-[#F1F5F9] px-1 text-[11px] font-semibold text-[#4B5563] sm:flex">
            <Link
              href="/"
              className={`px-2 py-1 transition ${
                !isEnglish ? "rounded-full bg-white text-[#111827] shadow-sm" : "hover:text-[#111827]"
              }`}
            >
              KO
            </Link>
            <Link
              href="/en"
              className={`px-2 py-1 transition ${
                isEnglish ? "rounded-full bg-white text-[#111827] shadow-sm" : "hover:text-[#111827]"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-3 rounded-full bg-[#111827] px-[18px] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 hover:bg-[#4F7CFF]"
          >
            Contact
          </Link>
        </div>
      </div>
      <nav className="mx-auto flex w-full max-w-[1200px] gap-2 overflow-x-auto border-t border-[#E2E8F0]/70 px-5 py-2 text-xs font-bold text-[#111827] sm:px-8 md:hidden">
        {worksItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-[#E2E8F0] bg-white px-3 py-2 transition hover:border-[#4F7CFF]/40 hover:text-[#4F7CFF]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
