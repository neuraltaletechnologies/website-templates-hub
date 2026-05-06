type TemplateConfig = {
  envKey: string;
  name: string;
  description: string;
  fallbackUrl: string;
  accent: string;
};

const templateConfigs: TemplateConfig[] = [
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_BUSINESS_URL",
    name: "Business Corporate",
    description: "Professional company landing page and service showcase.",
    fallbackUrl: "http://localhost:3001",
    accent: "from-stone-900 to-stone-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_REAL_ESTATE_URL",
    name: "Real Estate",
    description: "Property listings, featured homes, and inquiry flows.",
    fallbackUrl: "http://localhost:3002",
    accent: "from-emerald-900 to-emerald-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_ECOMMERCE_URL",
    name: "Ecommerce",
    description: "Product catalog, deals, and shopping-focused layout.",
    fallbackUrl: "http://localhost:3003",
    accent: "from-slate-900 to-slate-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_RESTAURANT_URL",
    name: "Restaurant Food",
    description: "Menu-first presentation with ordering and reservation cues.",
    fallbackUrl: "http://localhost:3004",
    accent: "from-orange-900 to-amber-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_EDUCATION_URL",
    name: "Education School",
    description: "School, course, and enrollment-oriented content blocks.",
    fallbackUrl: "http://localhost:3005",
    accent: "from-cyan-900 to-sky-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_NGO_URL",
    name: "NGO Organisation",
    description: "Mission-driven nonprofit layout with donation prompts.",
    fallbackUrl: "http://localhost:3006",
    accent: "from-teal-900 to-teal-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_PORTFOLIO_URL",
    name: "Portfolio",
    description: "Personal showcase for work, skills, and contact links.",
    fallbackUrl: "http://localhost:3007",
    accent: "from-zinc-900 to-zinc-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_TRANSPORT_URL",
    name: "Transport Logistics",
    description: "Fleet, shipping, and service operations presentation.",
    fallbackUrl: "http://localhost:3008",
    accent: "from-indigo-900 to-indigo-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_HOTEL_URL",
    name: "Hotel Booking",
    description: "Hospitality layout for rooms, amenities, and booking.",
    fallbackUrl: "http://localhost:3009",
    accent: "from-rose-900 to-pink-700",
  },
  {
    envKey: "NEXT_PUBLIC_TEMPLATE_HEALTHCARE_URL",
    name: "Healthcare Pharmacy",
    description: "Medical and pharmacy storefront with trust-focused sections.",
    fallbackUrl: "http://localhost:3010",
    accent: "from-green-900 to-lime-700",
  },
];

const withProtocol = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `https://${value}`;
};

const normalizeUrl = (value: string | undefined, fallbackUrl: string) => {
  const candidate = value?.trim();
  if (!candidate) {
    return fallbackUrl;
  }
  return withProtocol(candidate).replace(/\/+$/, "");
};

const displayUrl = (value: string) => value.replace(/^https?:\/\//, "");

const templates = templateConfigs.map((template) => ({
  ...template,
  url: normalizeUrl(process.env[template.envKey], template.fallbackUrl),
}));

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7_0,_#fffaf0_28%,_#f8fafc_64%,_#e2e8f0_100%)] px-6 py-10 text-slate-950 sm:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_25px_80px_-24px_rgba(15,23,42,0.35)] backdrop-blur md:p-10">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-900">
              Website Templates Hub
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              One landing page for every template.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Start the workspace, then use the cards below to open each template in its own browser tab.
              The hub stays at the top so you always have a central place to jump between sites.
            </p>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <a
              key={template.name}
              href={template.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(15,23,42,0.42)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${template.accent}`} />
              <div className="flex h-full flex-col gap-4 pt-2">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-inner">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-8 items-center justify-between border-b border-slate-200 bg-white/90 px-3 text-[11px] font-medium tracking-wide text-slate-500">
                    <span>Landing Preview</span>
                    <span>{displayUrl(template.url)}</span>
                  </div>
                  <iframe
                    title={`${template.name} preview`}
                    src={template.url}
                    loading="lazy"
                    className="pointer-events-none block h-48 w-full pt-8"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">{template.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{template.description}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    Open
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 text-sm font-medium text-slate-500">
                  <span>{displayUrl(template.url)}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
