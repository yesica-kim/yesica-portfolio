import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-[linear-gradient(120deg,#1b3f9f,#5a8dff,#4de1c1,#1b3f9f)] bg-[length:220%_100%] text-white shadow-[0_16px_42px_rgba(90,141,255,0.26)] hover:bg-[position:100%_0]"
      : "border border-white/12 bg-white/[0.04] text-[#d7e0ea] hover:border-[#5ef2c2]/40 hover:bg-white/[0.08] hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-500 ${styles}`}
    >
      {children}
    </Link>
  );
}
