"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { KelvarButton } from "@/components/ui/kelvar-button";
import type { MotorworksProgramme } from "../types";
import styles from "./motorworks-hero.module.css";

export function MotorworksHero({
  programme,
}: {
  programme: MotorworksProgramme;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden border-b border-white/10">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={programme.hero.src}
          alt={programme.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center] brightness-[0.72] saturate-[0.72] md:object-center"
        />
      </motion.div>

      <div className={`absolute inset-0 ${styles.wash}`} />
      <div className={`absolute inset-0 ${styles.vignette}`} />

      <div className="relative z-1 mx-auto w-full max-w-448 px-6 pt-32 pb-14 md:px-10 md:pb-20">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="font-mono text-xxs tracking-[0.24em] text-muted uppercase"
        >
          RD&amp;D / {programme.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="type-product mt-6 max-w-[8ch] text-primary"
        >
          Kelvar
          <br />
          Motor Works
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48 }}
          className="mt-7 max-w-[48ch] font-mono text-xs-plus leading-[1.85] text-primary md:text-sm"
        >
          {programme.headline}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.62 }}
          className="mt-9"
        >
          <KelvarButton href="#vehicle">Explore the concept</KelvarButton>
        </motion.div>
      </div>
    </section>
  );
}
