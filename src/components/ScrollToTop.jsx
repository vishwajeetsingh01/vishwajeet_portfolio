import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    const onResize = () => setIsMobile(window.innerWidth <= 640);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Keep both buttons inside the viewport on desktop to prevent clipping; stack above WhatsApp.
  const style = {
    right: '15px',
    bottom: isMobile ? '80px' : '88px',
    zIndex: 9999,
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      style={style}
      className={`fixed w-10 h-10 rounded-md bg-gray-400 text-slate-950 flex items-center justify-center shadow-md transition-all duration-200 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14l6-6 6 6" />
      </svg>
    </button>
  );
}
