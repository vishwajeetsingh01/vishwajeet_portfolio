export default function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI',
      icon: 'M12 2l3 7h7l-6 4 3 7-6-4-6 4 3-7-6-4h7z',
      skills: [
        { name: 'OpenAI', percentage: 90 },
        { name: 'Azure OpenAI', percentage: 92 },
        { name: 'LangChain', percentage: 90 },
        { name: 'RAG', percentage: 95 },
        { name: 'AI Agents', percentage: 82 },
        { name: 'Prompt Engineering', percentage: 85 }
      ]
    },
    {
      title: 'Programming',
      icon: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
      skills: [
        { name: 'Python', percentage: 95 },
        { name: 'SQL', percentage: 92 },
        { name: 'Flask', percentage: 90 },
        { name: 'REST APIs', percentage: 88 },
        { name: 'React', percentage: 92 },
        { name: 'JavaScript', percentage: 93 }
      ]
    },
    {
      title: 'Analytics & Cloud',
      icon: 'M4 6h16M4 12h16M4 18h16',
      skills: [
        { name: 'Power BI', percentage: 92 },
        { name: 'SAP SAC', percentage: 90 },
        { name: 'Tableau', percentage: 88 },
        { name: 'Azure', percentage: 90 },
        { name: 'AWS', percentage: 85 },
        { name: 'SAP DataSphere', percentage: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center text-cyan-400">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="group block bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45),0_-10px_30px_-25px_rgba(15,23,42,0.2)] transition transform duration-300 ease-out hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.8),0_-10px_40px_-30px_rgba(6,182,212,0.25)]"
            >
              <div className="mb-8">
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500 text-slate-950">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d={category.icon} />
                    </svg>
                  </span>
                  {category.title}
                </p>
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
