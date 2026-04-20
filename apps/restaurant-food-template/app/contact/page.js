import { ContactForm } from "@website-templates/shared/components";
import siteConfig from "@/config/site";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-3 text-slate-600">Tuandikie leo: {siteConfig.email}</p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
}
