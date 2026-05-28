import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E6E9EE] bg-white">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-5 py-10 text-sm text-[#777777] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Yesica. Product design, systems, and independent making.</p>
        <div className="flex gap-4">
          <Link href="/projects" className="transition hover:text-[#111111]">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-[#111111]">
            Contact
          </Link>
          <Link href="/archive/2026-05-29" className="transition hover:text-[#111111]">
            2026.05.29
          </Link>
        </div>
      </div>
    </footer>
  );
}
