import { useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import { NAVIGATION } from '../constants/portfolio';

export default function Navbar({ theme, onToggleTheme, activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav role="navigation" aria-label="Main Navigation" className="bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" aria-current={activeSection === 'home' ? 'page' : undefined} className="flex items-center gap-2">
          <img
            src={profilePhoto}
            alt="Vishwajeet Singh"
            loading="lazy"
            className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
            decoding="async"
          />
          <span className="text-base font-bold text-cyan-400 inline-block md:text-lg">Vishwajeet Singh</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map((nav) => {
            const isActive = activeSection === nav.id;
            return (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors text-sm md:text-base py-3 px-2 rounded-lg ${isActive ? 'text-cyan-300 underline underline-offset-4 decoration-cyan-400' : 'hover:text-cyan-400'}`}
              >
                {nav.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-3 rounded-full bg-slate-800 text-cyan-300 hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="p-3 rounded-md text-gray-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
          >
            <svg className={`w-6 h-6 transition-transform ${open ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {NAVIGATION.map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block text-left text-lg py-4 px-3 rounded-lg ${isActive ? 'text-cyan-300 underline underline-offset-4 decoration-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
                >
                  {nav.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      </nav>
    </header>
  );
}
