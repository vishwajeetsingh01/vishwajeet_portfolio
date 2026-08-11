import { useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import { NAVIGATION } from '../constants/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={profilePhoto}
            alt="Vishwajeet Singh"
            className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
          />
          <span className="text-lg font-bold text-cyan-400 hidden sm:inline">VS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {NAVIGATION.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="hover:text-cyan-400 transition-colors text-sm md:text-base py-3 px-2 rounded-lg"
            >
              {nav.label}
            </a>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden">
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="p-3 rounded-md text-gray-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
            {NAVIGATION.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setOpen(false)}
                className="block text-left text-lg text-gray-200 hover:text-cyan-400 py-4 px-3 rounded-lg"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
