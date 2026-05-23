import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#060a0f]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-10 text-sm text-[#778493] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Yesica. Product design, systems, and independent making.</p>
        <div className="flex gap-4">
          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
