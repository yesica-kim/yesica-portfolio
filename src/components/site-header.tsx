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
    <header className="sticky top-0 z-40 border-b border-[#D9DDE3] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto grid h-20 w-full max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href={isEnglish ? "/en" : "/"} className="group flex items-center gap-2.5">
          <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.03em] text-[#111111] sm:text-base">
            Yesica-Portfolio
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-12 text-sm font-medium text-[#111111] md:flex lg:gap-16">
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
          <div className="hidden items-center gap-1 text-[11px] font-semibold text-[#666666] sm:flex">
            <Link
              href="/"
              className={`px-2 py-1 transition ${
                !isEnglish ? "bg-[#F0F2F5] text-[#111111]" : "hover:text-[#111111]"
              }`}
            >
              KO
            </Link>
            <Link
              href="/en"
              className={`px-2 py-1 transition ${
                isEnglish ? "bg-[#F0F2F5] text-[#111111]" : "hover:text-[#111111]"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-3 bg-[#111111] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,17,17,0.18)] transition hover:bg-[#5A8DFF]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
