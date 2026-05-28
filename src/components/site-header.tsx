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
    <header className="sticky top-0 z-40 border-b border-[#E6E9EE] bg-white/86 backdrop-blur-xl">
      <div className="mx-auto grid h-20 w-full max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href={isEnglish ? "/en" : "/"} className="group flex items-center gap-2.5">
          <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.03em] text-[#111111] sm:text-base">
            Yesica-Portfolio
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-12 text-sm text-[#444444] md:flex lg:gap-16">
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
          <div className="hidden items-center gap-1 border border-[#DDE3EA] bg-white p-1 text-xs font-semibold text-[#777777] sm:flex">
            <Link
              href="/"
              className={`rounded-full px-2.5 py-1.5 transition ${
                !isEnglish ? "bg-[#111111] text-white" : "hover:text-[#111111]"
              }`}
            >
              KO
            </Link>
            <Link
              href="/en"
              className={`rounded-full px-2.5 py-1.5 transition ${
                isEnglish ? "bg-[#111111] text-white" : "hover:text-[#111111]"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-3 bg-[#111111] px-5 text-sm font-semibold text-white transition hover:bg-[#5A8DFF]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
