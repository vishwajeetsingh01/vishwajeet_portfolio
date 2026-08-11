import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { HERO_PHRASES, PROFILE, ROLE_DESCRIPTIONS } from '../constants/portfolio';
import { ANIMATION } from '../constants/theme';

export default function Home() {
  const { ref, isVisible } = useIntersectionObserver();
  const phraseIndexRef = useRef(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedDescription, setDisplayedDescription] = useState(ROLE_DESCRIPTIONS[0] || PROFILE.bio);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'Vishwajeet_Singh_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Resume download failed:', error);
      window.location.href = '/resume.pdf';
    }
  };

  // Subtitle typing animation effect - loops through phrases continuously
  useEffect(() => {
    if (!isVisible) return;

    let timeoutId;
    let intervalId;

    const typePhrase = () => {
      const currentPhrase = HERO_PHRASES[phraseIndexRef.current];
      let index = 0;
      intervalId = setInterval(() => {
        if (index <= currentPhrase.length) {
          setDisplayedSubtitle(currentPhrase.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(deletePhrase, ANIMATION.delay);
        }
      }, ANIMATION.typing);
    };

    const deletePhrase = () => {
      const currentPhrase = HERO_PHRASES[phraseIndexRef.current];
      let index = currentPhrase.length;
      intervalId = setInterval(() => {
        if (index >= 0) {
          setDisplayedSubtitle(currentPhrase.slice(0, index));
          index--;
        } else {
          clearInterval(intervalId);
          phraseIndexRef.current = (phraseIndexRef.current + 1) % HERO_PHRASES.length;
          setCurrentPhraseIndex(phraseIndexRef.current);
          setDisplayedDescription(ROLE_DESCRIPTIONS[phraseIndexRef.current] || PROFILE.bio);
          timeoutId = setTimeout(typePhrase, 1000);
        }
      }, ANIMATION.deletion);
    };

    typePhrase();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 bg-slate-950">
      <div>
        <h1 
          ref={ref}
          className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Hi, I'm <span className="text-cyan-400">{PROFILE.name}</span>
        </h1>

        <p 
          className={`text-3xl md:text-5xl text-gray-300 font-semibold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {displayedSubtitle}
          <span className="text-cyan-400">{displayedSubtitle.length < HERO_PHRASES[currentPhraseIndex].length ? '|' : ''}</span>
        </p>

        <p 
          className={`max-w-3xl mx-auto text-gray-400 text-lg mb-10 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {displayedDescription}
        </p>

        <div 
          className={`space-x-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <button
            type="button"
            onClick={handleDownloadResume}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold inline-block"
          >
            Download Resume
          </button>

          <a
            href="#contact"
            className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black inline-block"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
