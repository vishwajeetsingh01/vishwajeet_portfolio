import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EDUCATION } from '../constants/portfolio';

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver();

  // horizontal positions for markers (evenly spaced)
  const positions = [0.10, 0.35, 0.62, 0.88];
  // marker offsets (x shifts the dot right slightly to align with cards)
  const markerOffset = 0;
  const markerXOffset = 12;

  const [markers, setMarkers] = useState([]);

  const Icon = ({ type }) => {
    if (type === 'mortar') {
      return (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17a10 4 0 0010 3 10 4 0 0010-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (type === 'book') {
      return (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6v12a2 2 0 002 2h14V6H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 6v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (type === 'medal') {
      return (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 17l2-2 2 2 2-2 2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    // default icon
    return (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  // compute marker coordinates and update on resize so dots stay aligned with the visible dashed line
  useEffect(() => {
    let mounted = true;
    function compute() {
      try {
        const path = document.getElementById('eduDash') || document.getElementById('eduPath');
        if (!path || !path.getTotalLength) return;
        const len = path.getTotalLength();
        const pts = positions.map(p => {
          const pt = path.getPointAtLength(len * p);
          return { x: pt.x, y: pt.y };
        });
        if (mounted) setMarkers(pts);
      } catch (error) {
        // ignore
      }
    }

    // compute initially and also after a short delay to allow layout
    compute();
    const t = setTimeout(compute, 50);

    // recompute on resize to keep alignment when SVG scales
    window.addEventListener('resize', compute);
    return () => {
      mounted = false;
      clearTimeout(t);
      window.removeEventListener('resize', compute);
    };
  }, [positions]);

  return (
    <section id="education" className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto py-24">
        <h2 className="text-4xl font-bold mb-14 text-center text-cyan-400" ref={ref}>
          My Educational Roadmap
        </h2>

        <div className="relative bg-slate-900 rounded-xl p-6 overflow-hidden">
          {/* Decorative winding road SVG with markers placed on the path */}
          <div className="w-full h-32 md:h-40 relative">
            <svg ref={svg => { /* placeholder for sizing */ }} viewBox="0 0 1000 160" preserveAspectRatio="none" className="w-full h-full" overflow="visible">
              <defs>
                <linearGradient id="roadGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0b1220" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                id="eduPath"
                ref={el => (window.__eduPath = el)}
                d="M20 60 C160 -20, 340 100, 500 50 C660 0, 840 100, 980 20"
                stroke="#111827"
                strokeWidth="36"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M20 60 C160 -20, 340 100, 500 50 C660 0, 840 100, 980 20" stroke="url(#roadGrad)" strokeWidth="28" strokeLinecap="round" fill="none" />
              {/* dashed centerline (animated) */}
              <path id="eduDash" d="M20 60 C160 -20, 340 100, 500 50 C660 0, 840 100, 980 20" stroke="#9aa6b4" strokeWidth="2" strokeDasharray="12 18" strokeLinecap="round" fill="none" opacity="0.7">
                <animate attributeName="stroke-dashoffset" from="0" to="-60" dur="3s" repeatCount="indefinite" />
              </path>

              {/* Markers as SVG elements positioned along the path */}
              {/** compute points at render using getPointAtLength in useEffect and store in state */}
              {/* render markers from window.__eduMarkers if available (computed in effect) */}
              {markers && markers.length > 0 && markers.map((m, idx) => {
                const eduList = [...EDUCATION].slice().reverse();
                const edu = eduList[idx] || {};
                // alternate labels: make 2013 (idx 0) below, 2015 (idx1) above, etc.
                const isAbove = idx % 2 === 1;
                // text y is relative to group's origin
                const textY = isAbove ? -18 : 28;
                return (
                  <g key={idx} transform={`translate(${m.x + markerXOffset}, ${m.y + markerOffset})`} style={{pointerEvents: 'none'}}>
                    <circle cx={0} cy={0} r={8} fill="#06b6d4" stroke="#0b1220" strokeWidth={2} />
                    <text x={0} y={textY} fill="#06b6d4" fontSize="12" textAnchor="middle" fontWeight={600} style={{fontFamily: 'Inter, system-ui, sans-serif'}}>{edu.period}</text>
                  </g>
                );
              })}
            </svg>
            
            {/* SVG markers will be injected via JS below after path measurement */}
          </div>

          {/* Step cards below the road: compact horizontal row */}
          <div className="mt-6 -mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/** Render oldest -> newest left-to-right */}
              {[...EDUCATION].slice().reverse().map((edu, i) => (
                <div
                  key={i}
                  className={`group block flex flex-col justify-between bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45),0_-10px_30px_-25px_rgba(15,23,42,0.2)] transform-gpu transition transform duration-300 ease-out hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.8),0_-10px_40px_-30px_rgba(6,182,212,0.25)] hover:z-10 cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  tabIndex={0}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div>
                          {/* simple icon mapping by index */}
                          {i === 0 && <Icon type="book" />}
                          {i === 1 && <Icon type="book" />}
                          {i === 2 && <Icon type="medal" />}
                          {i === 3 && <Icon type="mortar" />}
                        </div>
                        <h3 className="text-lg font-bold mb-0 group-hover:text-cyan-400 text-white leading-snug">{edu.degree}</h3>
                      </div>
                      <p className="text-sm text-gray-300 group-hover:text-gray-100 leading-relaxed">{edu.school}</p>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-1 text-right">
                      <div className="text-sm text-cyan-400 font-semibold">{edu.gpa}</div>
                      <div className="text-xs text-gray-400">{edu.period.split(' — ')[0] || edu.period}</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-300">
                    <div className="font-semibold text-gray-400 mb-1">Highlights</div>
                    <ul className="mt-1 space-y-1 text-xs text-gray-300">
                      {edu.highlights.map((h, idx) => (
                        <li key={idx}>• {h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
