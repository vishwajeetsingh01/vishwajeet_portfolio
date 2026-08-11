import { useEffect, useState } from 'react';
import { CONTACT } from '../constants/portfolio';

export default function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = () => window.innerWidth <= 640;
    const onResize = () => setIsMobile(mq());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const number = (CONTACT.whatsapp || '').replace(/[\s+\-()]/g, '');
  const href = number ? `https://wa.me/${number}` : 'https://web.whatsapp.com/';

  // Use inside-viewport positioning for both desktop and mobile to avoid clipping by parent containers.
  const style = {
    textDecoration: 'none',
    right: '15px',
    bottom: isMobile ? '20px' : '24px',
    zIndex: 9999,
    pointerEvents: 'auto',
  };

  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed"
      style={style}
      onMouseEnter={() => {
        if (!isMobile) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setHover(false);
        }
      }}
    >
      <div
        className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg relative  whatsapp-pulse"
        style={hover ? { transform: 'scale(1.18)', transition: 'transform 180ms ease-out' } : { transform: 'scale(1)', transition: 'transform 180ms ease-out' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.08 1.52 5.83L.5 23.5l6.03-1.57A11.93 11.93 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.08-1.2-5.88-3.0-7.52zM12 21.5c-1.61 0-3.2-.36-4.62-1.06l-.33-.17-3.58.93.95-3.49-.2-.35A9.45 9.45 0 0 1 2.5 12c0-5.25 4.25-9.5 9.5-9.5 2.54 0 4.95.99 6.77 2.8A9.44 9.44 0 0 1 21.5 12c0 5.25-4.25 9.5-9.5 9.5z" />
          <path d="M17.6 14.2c-.3-.15-1.76-.87-2.04-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.18-.01-.39-.01-.6-.01-.2 0-.52.07-.8.37-.28.3-1.07 1.04-1.07 2.53 0 1.48 1.1 2.9 1.25 3.1.15.2 2.15 3.4 5.21 4.77 3.06 1.38 3.06.92 3.61.86.55-.06 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.35z" />
        </svg>
      </div>
    </a>
  );
}
