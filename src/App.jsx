import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="theme-transition bg-slate-950 text-white">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Testimonials />
      <Education />
      <Contact />
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
