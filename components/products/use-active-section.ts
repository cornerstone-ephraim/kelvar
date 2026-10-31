"use client";

import { useEffect, useState } from "react";
import type { ProductSectionLink } from "./product-navigation-types";

export function useActiveSection(links: ProductSectionLink[]) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? "");

  useEffect(() => {
    const targets = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((target): target is HTMLElement => Boolean(target));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top) -
              Math.abs(right.boundingClientRect.top),
          );

        const current = visible[0]?.target;
        if (current instanceof HTMLElement) {
          setActiveHref(`#${current.id}`);
        }
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [links]);

  return activeHref;
}
