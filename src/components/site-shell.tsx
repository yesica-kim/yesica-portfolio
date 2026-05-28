"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStandalonePage =
    pathname.startsWith("/archive") || pathname.startsWith("/schedule-block");

  if (isStandalonePage) {
    return children;
  }

  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
