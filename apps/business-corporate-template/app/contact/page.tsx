import { ContactForm } from "@website-templates/shared/components";
import siteConfig from "@/config/site";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-3 text-slate-600">{siteConfig.tagline}. Tuandikie leo kwa maelezo zaidi.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ContactForm />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Reach us directly</h2>
          <p className="mt-3 text-sm text-slate-600">Phone: {siteConfig.phone}</p>
          <p className="mt-2 text-sm text-slate-600">Email: {siteConfig.email}</p>
          <p className="mt-2 text-sm text-slate-600">Address: {siteConfig.address}</p>
        </div>
      </div>
    </section>
  );
}
