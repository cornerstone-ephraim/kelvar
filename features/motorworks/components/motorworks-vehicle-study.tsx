import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import type { MotorworksProgramme } from "../types";

export function MotorworksVehicleStudy({
  profile,
}: {
  profile: MotorworksProgramme["profile"];
}) {
  return (
    <section
      id="vehicle"
      className="scroll-mt-28 border-b border-white/10 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-400 gap-12 xl:grid-cols-[0.68fr_1.32fr] xl:gap-20">
        <div
          className="xl:sticky xl:self-start"
          style={{ top: "calc(var(--site-navbar-offset, 4.0625rem) + 4.5rem)" }}
        >
          <SectionLabel>Vehicle study</SectionLabel>
          <h2 className="type-editorial mt-7 max-w-xl text-primary">
            {profile.title}
          </h2>
          <p className="mt-7 max-w-lg font-sans text-base leading-[1.8] text-muted md:text-lg">
            {profile.description}
          </p>
        </div>

        <div className="grid gap-4">
          <VehicleView
            src={profile.side}
            alt="Side profile of the Kelvar electric three-wheel vehicle"
            label="Side profile"
            prominent
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <VehicleView
              src={profile.rear}
              alt="Rear view showing the dual-wheel vehicle configuration"
              label="Rear configuration"
            />
            <VehicleView
              src={profile.top}
              alt="Top view showing the compact vehicle footprint"
              label="Top profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function VehicleView({
  src,
  alt,
  label,
  prominent = false,
}: {
  src: string;
  alt: string;
  label: string;
  prominent?: boolean;
}) {
  return (
    <figure className="overflow-hidden border border-white/10 bg-media-light">
      <div className={`relative ${prominent ? "aspect-16/10" : "aspect-4/3"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            prominent
              ? "(min-width: 1280px) 65vw, 100vw"
              : "(min-width: 640px) 34vw, 100vw"
          }
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-black/10 bg-bg px-4 py-3 font-mono text-xxs tracking-[0.18em] text-dim uppercase">
        {label}
      </figcaption>
    </figure>
  );
}
