import { CtaSection } from "@/components/ui/cta-section";
import { ProductNarrativeIntro } from "@/components/products/product-narrative-intro";
import { ProductPageNavigation } from "@/components/products/product-page-navigation";
import { ProductStatusBand } from "@/components/products/product-status-band";
import { motorworks } from "../content";
import { MotorworksApplications } from "./motorworks-applications";
import { MotorworksEngineering } from "./motorworks-engineering";
import { MotorworksHero } from "./motorworks-hero";
import { MotorworksImpact } from "./motorworks-impact";
import { MotorworksVehicleStudy } from "./motorworks-vehicle-study";

export function MotorworksPage() {
  return (
    <div className="min-h-screen bg-bg">
      <MotorworksHero programme={motorworks} />

      <ProductPageNavigation
        productName="Motor Works"
        links={[
          { href: "#overview", label: "Overview" },
          { href: "#vehicle", label: "Vehicle" },
          { href: "#engineering", label: "Engineering" },
          { href: "#applications", label: "Applications" },
          { href: "#impact", label: "Impact" },
        ]}
      />

      <ProductStatusBand
        status={motorworks.status}
        items={[
          { label: "Division", value: "Kelvar Motor Works" },
          { label: "Vehicle class", value: "Electric three-wheel vehicle" },
          { label: "Primary context", value: "Urban mobility" },
        ]}
      />

      <div id="overview" className="scroll-mt-28">
        <ProductNarrativeIntro
          eyebrow="Programme overview"
          title={motorworks.headline}
          description={motorworks.description}
          statement="Concept specifications remain subject to validation during development."
        />
      </div>

      <MotorworksVehicleStudy profile={motorworks.profile} />
      <MotorworksEngineering features={motorworks.features} />
      <MotorworksApplications applications={motorworks.applications} />
      <MotorworksImpact programme={motorworks} />

      <CtaSection
        title="Move More"
        breakTitle="With Less"
        description="Discuss electric mobility, fleet applications, and development partnerships with Kelvar Motor Works."
        linkHref="/contact"
        linkText="Enquire About Motor Works"
      />
    </div>
  );
}
