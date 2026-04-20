export function FeatureCards({ items }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 h-36 rounded-xl bg-slate-100 text-center text-xs leading-[9rem] text-slate-400">
              Image Placeholder
            </div>
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
