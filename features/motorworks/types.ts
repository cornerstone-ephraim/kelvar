export type MotorworksFeature = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type MotorworksApplication = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type MotorworksTechnicalDatum = {
  label: string;
  value: string;
};

export type MotorworksProgramme = {
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  status: "In development";
  hero: {
    src: string;
    alt: string;
  };
  profile: {
    title: string;
    description: string;
    side: string;
    rear: string;
    top: string;
  };
  features: MotorworksFeature[];
  applications: MotorworksApplication[];
  technicalData: MotorworksTechnicalDatum[];
  impact: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
};
