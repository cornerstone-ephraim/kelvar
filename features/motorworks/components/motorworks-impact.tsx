import Image from "next/image";
import { KelvarButton } from "@/components/ui/kelvar-button";
import { SectionLabel } from "@/components/ui/section-label";
import { TechnicalDataTable } from "@/components/products/technical-data-table";
import type { MotorworksProgramme } from "../types";

export function MotorworksImpact({
  programme,
}: {
  programme: MotorworksProgramme;
}) {
  return (
    <section
      id="impact"
      className="scroll-mt-28 border-b border-white/10 bg-surface px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-400 gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:gap-20">
        <div>
          <div className="relative min-h-112 overflow-hidden border border-white/10 md:min-h-144">
            <Image
              src={programme.impact.image}
              alt={programme.impact.imageAlt}
              fill
              sizes="(min-width: 1280px) 58vw, 100vw"
              className="object-cover object-center brightness-[0.72] saturate-[0.68]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--surface)_0%,transparent_62%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
              <SectionLabel>Urban impact</SectionLabel>
              <h2 className="type-editorial mt-6 max-w-3xl text-primary">
                {programme.impact.title}
              </h2>
            </div>
          </div>
          <p className="mt-7 max-w-3xl font-sans text-base leading-[1.8] text-muted md:text-lg">
            {programme.impact.description}
          </p>
        </div>

        <div className="xl:pt-2">
          <TechnicalDataTable
            title="Published concept profile"
            data={programme.technicalData}
          />
          <p className="mt-7 border-l border-white/20 pl-5 font-mono text-xxs leading-[1.8] tracking-[0.16em] text-dim uppercase">
            Range, speed, charging time, battery capacity, dimensions, and
            production timing have not yet been published.
          </p>
          <div className="mt-9">
            <KelvarButton href="/contact">Discuss the programme</KelvarButton>
          </div>
        </div>
      </div>
    </section>
  );
}
