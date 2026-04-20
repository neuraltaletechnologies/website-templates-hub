import siteConfig from "@/config/site";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About {siteConfig.businessName}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        This is a reusable template for quick previews during sales proposals. Friendly tone, modern UI,
        and easy client customization.
      </p>
    </section>
  );
}
