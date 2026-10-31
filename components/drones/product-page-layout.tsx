import type { ProductDetail } from "@/types/product-types";
import { ProductVideoHero } from "./product-video-hero";
import { DomeProductStory } from "./dome-product-story";
import { ProductPageNavigation } from "@/components/products/product-page-navigation";
import { ProductStatusBand } from "@/components/products/product-status-band";

export function ProductPageLayout({ product }: { product: ProductDetail }) {
  return (
    <div className="min-h-screen bg-bg">
      <ProductVideoHero product={product} />
      <ProductPageNavigation
        productName={product.name}
        links={[
          { href: "#overview", label: "Overview" },
          { href: "#response-loop", label: "Response loop" },
          { href: "#architecture", label: "Architecture" },
          { href: "#missions", label: "Missions" },
          { href: "#technical-profile", label: "Technical profile" },
        ]}
      />
      <ProductStatusBand
        status="Flagship platform"
        items={[
          { label: "Portfolio", value: "Kelvar Platforms" },
          { label: "System class", value: "Autonomous aerial swarm" },
          { label: "Primary role", value: "Adaptive site security" },
        ]}
      />
      <DomeProductStory product={product} />
    </div>
  );
}
