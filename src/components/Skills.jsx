import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();
  const skillCategories = [
    {
      title: 'AI & Generative',
      icon: 'M12 2l3 7h7l-6 4 3 7-6-4-6 4 3-7-6-4h7z',
      skills: [
        { name: 'Prompt Engineering', percentage: 92 },
        { name: 'LangChain', percentage: 90 },
        { name: 'RAG', percentage: 88 },
        { name: 'OpenAI / Azure OpenAI', percentage: 90 }
      ],
      tools: ['OpenAI', 'LangChain', 'Azure OpenAI', 'RAG']
    },
    {
      title: 'Analytics',
      icon: 'M4 6h16M4 12h16M4 18h16',
      skills: [
        { name: 'Power BI', percentage: 92 },
        { name: 'Tableau', percentage: 88 },
        { name: 'SQL / Excel', percentage: 90 },
        { name: 'Data Modeling', percentage: 89 }
      ],
      tools: ['Power BI', 'Tableau', 'SQL', 'Excel']
    },
    {
      title: 'Cloud & Integration',
      icon: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
      skills: [
        { name: 'Azure', percentage: 90 },
        { name: 'AWS', percentage: 84 },
        { name: 'SAP DataSphere', percentage: 88 },
        { name: 'ETL / APIs', percentage: 87 }
      ],
      tools: ['Azure', 'AWS', 'SAP DataSphere', 'REST APIs']
    },
    {
      title: 'Web & Development',
      icon: 'M3 12h18M3 6h18M3 18h18',
      skills: [
        { name: 'React', percentage: 92 },
        { name: 'JavaScript', percentage: 93 },
        { name: 'Flask', percentage: 88 },
        { name: 'Responsive UI', percentage: 89 }
      ],
      tools: ['React', 'JavaScript', 'Flask', 'Tailwind CSS']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl font-bold mb-14 text-center text-cyan-400">
          Skills & Expertise
        </h2>

        <div className="grid gap-8 xl:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45),0_-10px_30px_-25px_rgba(15,23,42,0.2)] transition transform duration-300 ease-out hover:-translate-y-1 hover:bg-slate-700 hover:border-cyan-400"
            >
              <div className="mb-6">
                <p className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-slate-950">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d={category.icon} />
                    </svg>
                  </span>
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-5 text-white">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2 text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${skill.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
