import { FeatureCards } from "@website-templates/shared/components";

const items = [
  { title: "Starter Plan", description: "Landing pages and contact sections." },
  { title: "Growth Plan", description: "Multi-page website with branded components." },
  { title: "Premium Plan", description: "Advanced SEO and conversion-focused sections." },
];

export default function ServicesPage() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
      </div>
      <FeatureCards items={items} />
    </section>
  );
}
