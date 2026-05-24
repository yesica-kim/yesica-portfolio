import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/writing", label: "Brunch" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#060a0f]/78 backdrop-blur-xl">
      <div className="mx-auto grid h-20 w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-base font-semibold tracking-[-0.03em] text-white">
            Yesica-Portfolio
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-9 text-sm text-[#d9e1ea] md:flex lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#5ef2c2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-end">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_40px_rgba(0,0,0,0.32)] transition hover:border-[#5ef2c2]/40 hover:bg-white/[0.1]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
