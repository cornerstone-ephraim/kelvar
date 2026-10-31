import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { SectionFrame } from "@/components/ui/section-frame";

const programmes = [
  {
    name: "KELVARX",
    href: "/kelvarx",
    description:
      "Aerospace, atmospheric, and near-space systems for observation, sensing, and resilient connectivity.",
    image: "/assets/images/platforms/stratos/stratos-space-2.jpg",
    imageAlt: "KELVARX near-space platform concept",
  },
  {
    name: "Kelvar Motor Works",
    href: "/motorworks",
    description:
      "Electric three-wheel mobility concepts designed around people, cargo, businesses, and urban fleets.",
    image: "/assets/images/platforms/motorworks/motorworks-hero.webp",
    imageAlt: "Kelvar Motor Works electric three-wheel vehicle",
  },
];

export function ResearchProgrammes() {
  return (
    <SectionFrame label="Development programmes" surface="surface">
      <div className="grid gap-px bg-white/10 lg:grid-cols-2">
        {programmes.map((programme) => (
          <Link
            key={programme.href}
            href={programme.href}
            className="group overflow-hidden bg-surface"
          >
            <div className="relative aspect-16/9 overflow-hidden">
              <Image
                src={programme.image}
                alt={programme.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover brightness-[0.62] saturate-[0.68] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--surface)_0%,transparent_65%)]" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="font-heading text-4xl font-bold text-primary">
                    {programme.name}
                  </h2>
                  <p className="mt-4 max-w-xl font-mono text-xs-plus leading-[1.8] text-muted">
                    {programme.description}
                  </p>
                </div>
                <BsArrowRight className="mt-2 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionFrame>
  );
}
