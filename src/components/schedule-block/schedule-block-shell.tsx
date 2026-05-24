import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/schedule-block/privacy", label: "개인정보처리방침" },
  { href: "/schedule-block/terms", label: "이용약관" },
  { href: "/schedule-block/support", label: "지원" },
];

export function ScheduleBlockShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#1f2933]">
      <header className="sticky top-0 z-10 border-b border-[#e2ded8] bg-[#fbfaf8]/95">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Link
            href="/schedule-block"
            className="inline-flex items-center gap-2.5 text-lg font-bold"
          >
            <Image
              src="/schedule-block/app-icon.png"
              alt="Schedule Block 앱 아이콘"
              width={36}
              height={36}
              className="rounded-xl"
              priority
            />
            <span>Schedule Block</span>
          </Link>
          <nav aria-label="Schedule Block 주요 메뉴" className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#64717f] transition hover:text-[#286c5f]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-[#e2ded8]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-7 text-sm text-[#64717f] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Schedule Block</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#286c5f]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ScheduleBlockDocument({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  return (
    <ScheduleBlockShell>
      <main className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8 lg:py-20">
        <h1 className="text-4xl font-bold tracking-tight text-[#1f2933] sm:text-5xl">
          {title}
        </h1>
        {effectiveDate ? (
          <p className="mt-4 font-bold text-[#286c5f]">{effectiveDate}</p>
        ) : null}
        <div className="mt-10 space-y-0">{children}</div>
      </main>
    </ScheduleBlockShell>
  );
}

export function DocumentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#e2ded8] py-8">
      <h2 className="mb-4 text-2xl font-bold text-[#1f2933]">{title}</h2>
      <div className="space-y-3 text-[17px] leading-8 text-[#64717f]">{children}</div>
    </section>
  );
}
