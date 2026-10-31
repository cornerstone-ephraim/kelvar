import type { MotorworksProgramme } from "./types";

const assetRoot = "/assets/images/platforms/motorworks";

export const motorworks = {
  name: "Kelvar Motor Works",
  eyebrow: "Electric urban mobility",
  headline: "Three wheels. More possibilities.",
  description:
    "Kelvar Motor Works is developing electric three-wheel vehicles for cleaner, smarter, and more connected urban mobility. The concept is designed to support people, cargo, businesses, and fleet operations within one compact vehicle architecture.",
  status: "In development",
  hero: {
    src: `${assetRoot}/motorworks-hero.webp`,
    alt: "Kelvar Motor Works electric three-wheel cargo vehicle in an urban setting",
  },
  profile: {
    title: "A compact vehicle architecture shaped around useful space.",
    description:
      "The concept combines a motorcycle-scale front profile with a stable dual-rear-wheel layout and a central lockable cargo module. Its compact footprint is intended for dense urban streets where carrying capacity and manoeuvrability must coexist.",
    side: `${assetRoot}/motorworks-side-profile.webp`,
    rear: `${assetRoot}/motorworks-rear-view.webp`,
    top: `${assetRoot}/motorworks-top-view.webp`,
  },
  features: [
    {
      title: "Central cargo module",
      description:
        "A lockable, weather-protected compartment with up to 120 litres of stated carrying capacity and side access.",
      image: `${assetRoot}/motorworks-cargo-module.webp`,
      imageAlt: "Boxes stored inside the central cargo module",
    },
    {
      title: "Removable battery",
      description:
        "A removable energy module intended to support flexible charging and battery-swap workflows.",
      image: `${assetRoot}/motorworks-removable-battery.webp`,
      imageAlt: "Removable battery module for the electric vehicle",
    },
    {
      title: "Dual rear wheels",
      description:
        "A twin-wheel rear configuration designed to provide a broader stance for stability and load carrying.",
      image: `${assetRoot}/motorworks-dual-rear-wheels.webp`,
      imageAlt: "Dual rear wheel and suspension configuration",
    },
  ],
  applications: [
    {
      name: "Delivery",
      description:
        "An urban delivery format for parcels, food logistics, and short-distance movement.",
      image: `${assetRoot}/motorworks-delivery.webp`,
      imageAlt: "Kelvar three-wheel vehicle configured for delivery work",
    },
    {
      name: "Business",
      description:
        "A compact mobility option intended for small businesses and enterprise operations.",
      image: `${assetRoot}/motorworks-business.webp`,
      imageAlt: "Operator loading the rear of the Kelvar vehicle",
    },
    {
      name: "Personal",
      description:
        "An everyday electric format with additional enclosed carrying space.",
      image: `${assetRoot}/motorworks-personal.webp`,
      imageAlt: "Rider using the Kelvar vehicle for personal mobility",
    },
    {
      name: "Fleet",
      description:
        "A repeatable vehicle architecture for organisations planning coordinated urban fleets.",
      image: `${assetRoot}/motorworks-fleet.webp`,
      imageAlt: "A fleet of Kelvar Motor Works vehicles",
    },
  ],
  technicalData: [
    { label: "Vehicle class", value: "Electric three-wheel vehicle" },
    { label: "Cargo capacity", value: "Up to 120 L (stated concept figure)" },
    { label: "Energy system", value: "Removable battery" },
    { label: "Rear configuration", value: "Dual wheel" },
    { label: "Operating context", value: "Urban mobility" },
    { label: "Development stage", value: "Concept in development" },
  ],
  impact: {
    title: "Cleaner cities need useful electric mobility.",
    description:
      "Kelvar Motor Works is exploring a practical vehicle format that can reduce reliance on combustion-powered short-distance transport while supporting the daily movement of people and goods.",
    image: `${assetRoot}/motorworks-urban-impact.webp`,
    imageAlt: "Kelvar Motor Works rider overlooking an urban skyline",
  },
} satisfies MotorworksProgramme;
