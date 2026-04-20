import Link from "next/link";

export function Hero({ title, subtitle, ctaText, ctaHref, accentColor = "#0ea5e9" }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: accentColor }}>
          Karibu, tuanze pamoja
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{subtitle}</p>
        <Link
          href={ctaHref}
          className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: accentColor }}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
