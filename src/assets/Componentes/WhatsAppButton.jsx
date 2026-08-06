import React from 'react';
import "../Css/WhatsAppButton.css";

const WhatsAppButton = () => {
  // Substiua pelo número da sua loja (Código do país + DDD + Número sem espaços/traços)
  const phoneNumber = '5561991712642';
  const defaultMessage = encodeURIComponent('Olá quero mais informações sobre o serviço de entrega dos Melhores Drinks BSB.');
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      {/* Ícone do WhatsApp em SVG */}
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        fill="currentColor"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.138-2.132c2.375 1.298 5.063 1.982 7.862 1.982 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.483 0-4.913-0.667-7.042-1.928l-0.505-0.3-5.232 1.37 1.395-5.19-0.33-0.525c-1.385-2.21-2.119-4.757-2.119-7.36 0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zM22.583 19.35c-0.36-0.18-2.127-1.050-2.457-1.17s-0.57-0.18-0.81 0.18c-0.24 0.36-0.93 1.17-1.14 1.41s-0.42 0.27-0.78 0.09c-0.36-0.18-1.522-0.561-2.9-1.79-1.071-0.955-1.794-2.135-2.004-2.495s-0.022-0.555 0.158-0.734c0.162-0.162 0.36-0.42 0.54-0.63s0.24-0.36 0.36-0.6c0.12-0.24 0.06-0.45-0.03-0.63s-0.81-1.95-1.11-2.67c-0.292-0.701-0.59-0.606-0.81-0.617h-0.69c-0.24 0-0.63 0.09-0.96 0.45s-1.26 1.23-1.26 3 1.29 3.48 1.47 3.72c0.18 0.24 2.539 3.878 6.151 5.437 0.859 0.371 1.53 0.593 2.053 0.759 0.862 0.274 1.647 0.235 2.268 0.142 0.693-0.104 2.127-0.87 2.427-1.71 0.3-0.84 0.3-1.56 0.21-1.71s-0.33-0.24-0.69-0.42z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;