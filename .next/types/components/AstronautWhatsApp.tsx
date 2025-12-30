'use client';

type Props = {
  phone: string;
};

export function AstronautWhatsApp({ phone }: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hola, me gustaría información para un evento"
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3"
      aria-label="Chatear por WhatsApp"
    >
      <div className="hidden sm:block rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-lg">
        ¿Te ayudo con tu evento?
      </div>

      <div className="animate-bounce-slow">
    <img
  src="https://misquince.es/fotos/logo-austronauta-transparente-.png"
  alt="Agente flotando"
  className="h-20 w-20 drop-shadow-xl"
/>

      </div>
    </a>
  );
}

