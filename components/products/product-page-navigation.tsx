"use client";

import type { ProductSectionLink } from "./product-navigation-types";
import { ProductSectionBar } from "./product-section-bar";
import { useActiveSection } from "./use-active-section";

export function ProductPageNavigation({
  productName,
  links: linkInput,
}: {
  productName: string;
  links: ProductSectionLink[];
}) {
  const activeHref = useActiveSection(linkInput);

  return (
    <ProductSectionBar
      productName={productName}
      links={linkInput}
      activeHref={activeHref}
    />
  );
}
