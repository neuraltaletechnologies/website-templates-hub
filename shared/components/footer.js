export function Footer({ businessName, address, email, phone }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 text-sm text-slate-600 sm:grid-cols-2">
        <p className="font-semibold text-slate-800">{businessName}</p>
        <p className="sm:text-right">{address}</p>
        <p>{email}</p>
        <p className="sm:text-right">{phone}</p>
      </div>
    </footer>
  );
}
