import profilePhoto from '../assets/profile.jpg';
import { NAVIGATION } from '../constants/portfolio';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={profilePhoto}
            alt="Vishwajeet Singh" 
            className="w-10 h-10 rounded-full border-2 border-cyan-400 object-cover"
          />
          <span className="text-lg font-bold text-cyan-400 hidden sm:inline">VS</span>
        </a>

        <div className="space-x-4 md:space-x-6 flex items-center">
          <div className="space-x-4 md:space-x-6 hidden md:flex">
            {NAVIGATION.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="hover:text-cyan-400 transition-colors text-sm md:text-base"
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
