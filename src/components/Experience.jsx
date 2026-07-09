export default function Experience() {
  const experiences = [
    {
      period: 'Jun 2024 – Present',
      position: 'Software Engineer',
      company: 'Incture Technologies',
      description: 'Delivering AI-enabled enterprise solutions, driving data integration workstreams, and enhancing operational dashboards for client-facing applications.',
      skills: ['Python', 'SAP', 'Power BI', 'Cloud', 'Data Analysis']
    },
    {
      period: 'Jun 2022 – Jun 2024',
      position: 'Associate Software Engineer',
      company: 'Incture Technologies',
      description: 'Built scalable business applications, integrated backend services, and supported analytics workflows for enterprise customers.',
      skills: ['Azure', 'Power BI', 'SQL', 'REST APIs', 'Git']
    },
    {
      period: 'Jan 2022 – Jun 2022',
      position: 'Academic Internship',
      company: 'Incture Technologies',
      description: 'Contributed to enterprise software modules, collaborated with mentors, and gained hands-on experience in full-stack development and agile delivery.',
      skills: ['Python', 'Machine Learning', 'REST APIs', 'Teamwork']
    },
    {
      period: 'Sep 2021 – Apr 2022',
      position: 'Data Science Internship',
      company: 'Board Infinity',
      description: 'Built predictive models, cleaned and visualized datasets, and learned practical machine learning workflows for business analytics and decision support.',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Tableau', 'Excel', 'SQL', 'Statistics', 'Data Analysis']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Experience</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-10">
            A career journey through data science and engineering roles at Board Infinity and Incture.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-400/40 z-0" />

          <div className="grid gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`md:grid md:grid-cols-2 md:items-start md:gap-10 relative ${index % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-start-1 md:text-right">
                      <div className="group inline-block md:max-w-md relative z-10 bg-slate-900 border border-slate-700 rounded-3xl p-8 text-left shadow-[0_20px_60px_-30px_rgba(15,23,42,0.7)] transition duration-300 ease-out hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.45)]">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-slate-950 transition-colors duration-200 group-hover:bg-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <rect x="3" y="7" width="18" height="13" rx="2" />
                              <path d="M8 7V5h8v2" />
                            </svg>
                          </span>
                          <span className="text-sm uppercase font-bold tracking-[0.3em] text-cyan-400 group-hover:text-cyan-200 transition duration-200">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition duration-200">{exp.position}</h3>
                        <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition duration-200">{exp.company}</p>
                        <p className="text-gray-300 leading-7 mb-5 group-hover:text-gray-100 transition duration-200">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-gray-300 transition duration-200 group-hover:border-cyan-400 group-hover:text-cyan-100">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 border-2 border-slate-950 z-20" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 border-2 border-slate-950 z-20" />
                    <div className="md:col-start-2">
                      <div className="group inline-block md:max-w-md relative z-10 bg-slate-900 border border-slate-700 rounded-3xl p-8 text-left shadow-[0_20px_60px_-30px_rgba(15,23,42,0.7)] transition duration-300 ease-out hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.45)]">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-slate-950 transition-colors duration-200 group-hover:bg-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M8 9h8" />
                              <path d="M8 13h8" />
                              <path d="M8 17h8" />
                            </svg>
                          </span>
                          <span className="text-sm uppercase font-bold tracking-[0.3em] text-cyan-400 group-hover:text-cyan-200 transition duration-200">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-200 transition duration-200">{exp.position}</h3>
                        <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition duration-200">{exp.company}</p>
                        <p className="text-gray-300 leading-7 mb-5 group-hover:text-gray-100 transition duration-200">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-gray-300 transition duration-200 group-hover:border-cyan-400 group-hover:text-cyan-100">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
