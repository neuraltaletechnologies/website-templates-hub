const templates = [
  {
    title: "Business Template",
    description: "Clean corporate layout for agencies, consultants, and SMEs.",
    href: "https://business-corporate-template.vercel.app",
  },
  {
    title: "Restaurant Template",
    description: "Menu-focused design with booking and contact sections.",
    href: "https://restaurant-food-template.vercel.app",
  },
  {
    title: "Real Estate Template",
    description: "Property listing style pages for brokers and developers.",
    href: "https://real-estate-template.vercel.app",
  },
];

export default function HubPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Website Templates Hub</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Preview modern client-ready demos</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Friendly, fast, and customizable templates for proposals. Karibu, tuanze pamoja.
      </p>
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {templates.map((template) => (
          <article key={template.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{template.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{template.description}</p>
            <a
              href={template.href}
              className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
