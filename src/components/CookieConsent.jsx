import { useEffect, useState } from 'react';

const PREFERENCE_KEY = 'analytics-consent';

function loadPlausible(domain) {
  if (!domain) return;
  if (window.plausible) return;
  const s = document.createElement('script');
  s.setAttribute('async', '');
  s.setAttribute('defer', '');
  s.setAttribute('data-domain', domain);
  s.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(s);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(() => window.localStorage.getItem(PREFERENCE_KEY));
  const [visible, setVisible] = useState(false);

  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'vishwajeetsingh.vercel.app';

  useEffect(() => {
    if (consent === 'granted') {
      loadPlausible(domain);
    } else if (!consent) {
      // show banner if no choice made
      setVisible(true);
    }
  }, [consent, domain]);

  const accept = () => {
    window.localStorage.setItem(PREFERENCE_KEY, 'granted');
    setConsent('granted');
    setVisible(false);
    loadPlausible(domain);
  };

  const decline = () => {
    window.localStorage.setItem(PREFERENCE_KEY, 'denied');
    setConsent('denied');
    setVisible(false);
  };

  const openSettings = () => setVisible(true);

  return (
    <>
      {visible && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-gray-300">
              This site uses privacy-first analytics (Plausible). Accept to enable anonymous usage tracking. No personal data is stored.
            </div>
            <div className="flex gap-2">
              <button onClick={decline} className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-gray-200 hover:bg-slate-700">Decline</button>
              <button onClick={accept} className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400">Accept</button>
            </div>
          </div>
        </div>
      )}

      {/* small persistent control to change preference */}
      <button
        aria-label="Analytics preferences"
        onClick={openSettings}
        className="fixed right-4 bottom-4 z-40 rounded-full bg-slate-800/80 p-3 text-sm text-gray-200 shadow-md hover:bg-slate-700"
      >
        {consent === 'granted' ? 'Analytics: On' : consent === 'denied' ? 'Analytics: Off' : 'Analytics'}
      </button>
    </>
  );
}
