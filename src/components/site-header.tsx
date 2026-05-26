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
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#060a0f]/78 backdrop-blur-xl">
      <div className="mx-auto grid h-20 w-full max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href={isEnglish ? "/en" : "/"} className="group flex items-center gap-2.5">
          <span className="whitespace-nowrap text-sm font-semibold tracking-[-0.03em] text-white sm:text-base">
            Yesica-Portfolio
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-10 text-sm text-[#d9e1ea] md:flex lg:gap-14">
          {navItems[locale].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#5ef2c2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] p-1 text-xs font-semibold text-[#8f9cab] sm:flex">
            <Link
              href="/"
              className={`rounded-full px-2.5 py-1.5 transition ${
                !isEnglish ? "bg-white/10 text-white" : "hover:text-white"
              }`}
            >
              KO
            </Link>
            <Link
              href="/en"
              className={`rounded-full px-2.5 py-1.5 transition ${
                isEnglish ? "bg-white/10 text-white" : "hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-3 rounded-full bg-[linear-gradient(120deg,#2147af,#5a8dff,#4de1c1)] px-5 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(90,141,255,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(77,225,193,0.2)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
