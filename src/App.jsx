import { useEffect, useState, lazy, Suspense } from 'react';
import { NAVIGATION } from './constants/portfolio';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'testimonials', 'education', 'contact'];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(documentHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100)) : 0);

      let current = 'home';
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top;
        if (top <= 120) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="theme-transition bg-black text-white relative overflow-hidden">
      <a
        href="#main-content"
        className="absolute -top-10 left-4 z-50 rounded bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 transition-all focus:top-4 focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        Skip to main content
      </a>
      <div className="pointer-events-none fixed inset-x-0 top-16 h-1 z-50 bg-black">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-sky-400 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <div className="hidden xl:flex z-40 flex-col items-center gap-4" style={{ position: 'fixed', right: '3.5rem', top: '50%', transform: 'translateY(-50%)' }}>
        {NAVIGATION.map((nav) => {
          const isActive = activeSection === nav.id;
          return (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="group relative flex items-center justify-center"
              aria-label={nav.label}
            >
              <span className={`block h-3 w-3 rounded-full transition-colors ${isActive ? 'bg-cyan-400 shadow-[0_0_0_8px_rgba(56,189,248,0.15)] active-dot-glow' : 'bg-slate-700 group-hover:bg-cyan-400'}`} />
              <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-gray-300 opacity-0 transition duration-200 group-hover:block group-hover:opacity-100">
                {nav.label}
              </span>
            </a>
          );
        })}
      </div>
      <main id="main-content" tabIndex="-1" role="main" aria-label="Main Content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Suspense fallback={<div role="status" aria-live="polite" className="py-12 text-center text-sm text-gray-400">Loading blog...</div>}>
          <Blog />
        </Suspense>
        <Suspense fallback={<div role="status" aria-live="polite" className="py-12 text-center text-sm text-gray-400">Loading testimonials...</div>}>
          <Testimonials />
        </Suspense>
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
      <WhatsAppButton />
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default App;
