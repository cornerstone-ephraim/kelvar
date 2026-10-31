"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/ui/section-label";
import type { MotorworksFeature } from "../types";

export function MotorworksEngineering({
  features,
}: {
  features: MotorworksFeature[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="engineering"
      className="scroll-mt-28 border-b border-white/10 bg-surface px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-400">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionLabel>Engineering priorities</SectionLabel>
          <h2 className="type-editorial max-w-4xl text-primary">
            Carry more without giving up the city-sized footprint.
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-surface"
            >
              <div className="relative aspect-square overflow-hidden bg-media-light">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-3xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-4 font-mono text-xs-plus leading-[1.8] text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
