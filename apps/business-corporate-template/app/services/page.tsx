import { FeatureCards } from "@website-templates/shared/components";

const offerings = [
  { title: "Corporate Websites", description: "Professional pages for credibility and lead generation." },
  { title: "Landing Pages", description: "Focused conversion pages for campaigns and product launches." },
  { title: "Support & Optimization", description: "Performance, SEO, and monthly updates for steady growth." },
];

export default function ServicesPage() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <p className="mt-3 text-slate-600">Flexible packages built for startups, SMEs, and established teams.</p>
      </div>
      <FeatureCards items={offerings} />
    </section>
  );
}
