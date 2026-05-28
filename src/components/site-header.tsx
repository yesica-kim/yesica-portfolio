"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  ko: [
    { href: "/#projects", label: "Works" },
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#writing", label: "brunch" },
  ],
  en: [
    { href: "/en#projects", label: "Works" },
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
    </header>
  );
}
