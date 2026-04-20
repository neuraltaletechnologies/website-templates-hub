import Link from "next/link";

export function CtaSection({ title, text, buttonText, buttonHref, accentColor = "#0ea5e9" }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">{text}</p>
        <Link
          href={buttonHref}
          className="mt-6 inline-flex rounded-full px-5 py-2 text-sm font-semibold text-slate-950"
          style={{ backgroundColor: accentColor }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
