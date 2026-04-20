export function WhatsAppButton({ phone }) {
  const cleaned = phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${cleaned}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-600"
    >
      WhatsApp Chat
    </a>
  );
}
