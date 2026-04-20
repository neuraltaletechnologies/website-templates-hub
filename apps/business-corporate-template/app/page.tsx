import { CtaSection, FeatureCards, Hero } from "@website-templates/shared/components";
import siteConfig from "@/config/site";

const services = [
  { title: "Brand Strategy", description: "Position your company with confidence and clarity." },
  { title: "Digital Transformation", description: "Automate and scale with modern cloud-first workflows." },
  { title: "Sales Enablement", description: "Convert faster with polished messaging and client-ready assets." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={siteConfig.businessName}
        subtitle={`${siteConfig.tagline}. Karibu, tuanze pamoja na template ya kisasa.`}
        ctaText="Book Free Consultation"
        ctaHref="/contact"
        accentColor={siteConfig.primaryColor}
      />
      <FeatureCards items={services} />
      <CtaSection
        title="Ready for your next proposal?"
        text="Launch this template quickly, customize branding, and impress clients with a live demo in minutes."
        buttonText="View Services"
        buttonHref="/services"
        accentColor={siteConfig.primaryColor}
      />
    </>
  );
}
