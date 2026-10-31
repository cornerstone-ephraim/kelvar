import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kelvar Motor Works Electric Urban Mobility",
  description:
    "Explore Kelvar Motor Works, an electric urban mobility programme developing a compact three-wheel vehicle for people, cargo, businesses, and fleets.",
  path: "/motorworks",
  keywords: [
    "Kelvar Motor Works",
    "electric three-wheel vehicle",
    "electric cargo vehicle",
    "urban mobility",
    "last-mile delivery vehicle",
    "electric fleet mobility",
    "African mobility technology",
  ],
  image: "/assets/images/platforms/motorworks/motorworks-hero.webp",
  imageAlt:
    "Kelvar Motor Works electric three-wheel cargo vehicle in an urban setting",
});

export default function MotorworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
