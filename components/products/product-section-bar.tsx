"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { ProductSectionLink } from "./product-navigation-types";
import styles from "./product-section-navigation.module.css";

export function ProductSectionBar({
  productName,
  links,
  activeHref,
}: {
  productName: string;
  links: ProductSectionLink[];
  activeHref: string;
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    const activeItem = itemRefs.current.get(activeHref);

    if (!scrollArea || !activeItem) return;

    const targetLeft =
      activeItem.offsetLeft -
      (scrollArea.clientWidth - activeItem.offsetWidth) / 2;

    scrollArea.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeHref, reduceMotion]);

  return (
    <nav
      aria-label={`${productName} page sections`}
      style={{ top: "var(--site-navbar-offset, 4.0625rem)" }}
      className="sticky z-20 border-y border-white/10 bg-bg/94 px-6 backdrop-blur-md md:px-10"
    >
      <div className="relative mx-auto max-w-400">
        <div
          ref={scrollAreaRef}
          className={`${styles.scrollArea} flex snap-x snap-proximity overflow-x-auto`}
        >
          <p className="hidden min-h-14 shrink-0 items-center border-r border-white/10 pr-8 font-mono text-xxs uppercase tracking-[0.18em] text-primary lg:flex">
            {productName}
          </p>
          {links.map((link) => {
            const active = link.href === activeHref;

            return (
              <Link
                key={link.href}
                ref={(node) => {
                  if (node) itemRefs.current.set(link.href, node);
                  else itemRefs.current.delete(link.href);
                }}
                href={link.href}
                aria-current={active ? "location" : undefined}
                className={`relative flex min-h-14 min-w-max snap-start items-center border-r border-white/10 px-5 font-mono text-xxs uppercase tracking-[0.18em] transition-[color,background-color] duration-200 ${
                  active
                    ? "bg-white/5 text-primary"
                    : "text-muted hover:bg-white/5 hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 bottom-0 h-px origin-left bg-primary transition-transform duration-200 motion-reduce:transition-none ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-9 bg-linear-to-r from-transparent to-bg md:hidden"
        />
      </div>
    </nav>
  );
}
