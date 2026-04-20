export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" aria-label="Contact form">
      <input className="rounded-lg border border-slate-300 px-4 py-2 text-sm" placeholder="Full name" />
      <input className="rounded-lg border border-slate-300 px-4 py-2 text-sm" placeholder="Email address" type="email" />
      <textarea
        className="min-h-28 rounded-lg border border-slate-300 px-4 py-2 text-sm"
        placeholder="Tell us about your project"
      />
      <button type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
        Send Message
      </button>
    </form>
  );
}
