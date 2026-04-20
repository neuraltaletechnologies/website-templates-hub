import siteConfig from "@/config/site";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About {siteConfig.businessName}</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        We help Tanzanian businesses modernize their online presence with practical, clean, and fast websites.
        Our team blends strategy, design, and delivery so clients can launch quickly and grow steadily.
      </p>
      <p className="mt-3 max-w-3xl text-slate-600">Tunaamini kila biashara inastahili tovuti nzuri na yenye matokeo.</p>
    </section>
  );
}
