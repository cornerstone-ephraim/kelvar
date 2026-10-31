"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import type { MotorworksApplication } from "../types";

export function MotorworksApplications({
  applications,
}: {
  applications: MotorworksApplication[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="applications"
      className="scroll-mt-28 border-b border-white/10 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-400">
        <SectionLabel>Designed for real routes</SectionLabel>
        <h2 className="type-editorial mt-7 max-w-4xl text-primary">
          One compact architecture. Several everyday roles.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((application, index) => (
            <motion.article
              key={application.name}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden border border-white/10 bg-bg"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={application.image}
                  alt={application.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover brightness-[0.82] saturate-[0.72] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_0%,transparent_62%)]" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-3xl font-bold text-primary">
                  {application.name}
                </h3>
                <p className="mt-4 font-mono text-xs-plus leading-[1.75] text-muted">
                  {application.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
