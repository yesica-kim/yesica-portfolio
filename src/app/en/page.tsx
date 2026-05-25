import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Yesica Portfolio | Product Designer",
  description:
    "Product designer and independent maker designing calm systems for real life products.",
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
