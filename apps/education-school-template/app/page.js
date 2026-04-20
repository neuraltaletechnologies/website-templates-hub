import { CtaSection, FeatureCards, Hero } from "@website-templates/shared/components";
import siteConfig from "@/config/site";

const items = [
  { title: "Fast Setup", description: "Client-ready pages you can brand quickly." },
  { title: "Mobile First", description: "Responsive sections for phones, tablets, and desktop." },
  { title: "SEO Structure", description: "Semantic layout to improve discoverability." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={siteConfig.businessName}
        subtitle={`${siteConfig.tagline}. Karibu, tuanze pamoja.`}
        ctaText="Contact Us"
        ctaHref="/contact"
        accentColor={siteConfig.primaryColor}
      />
      <FeatureCards items={items} />
      <CtaSection
        title="Need a quick demo for your client?"
        text="Customize content and colors, then deploy independently on Vercel."
        buttonText="Our Services"
        buttonHref="/services"
        accentColor={siteConfig.primaryColor}
      />
    </>
  );
}
