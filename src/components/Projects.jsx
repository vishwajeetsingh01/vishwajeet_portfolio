import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();
  const projects = [
    {
      id: 'A',
      title: 'Intelligent Field Assistant',
      description: 'Multimodal RAG chatbot for field operators using Python, LangChain, Azure Blob Storage, and HANA Vector DB.',
      impact: 'Reduced field support time through fast context-aware troubleshooting and asset lookup.',
      tags: ['Python', 'LangChain', 'Azure Blob', 'HANA Vector DB'],
      github: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'O',
      title: 'Smart Order Automation',
      description: 'AI-powered email order extraction system reducing manual effort using Generative AI workflows.',
      impact: 'Cut order processing time by automating invoice parsing and data entry tasks.',
      tags: ['Generative AI', 'Python', 'Automation', 'Email Parsing'],
      github: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'E',
      title: 'Employee Assistant Using LLM Agent',
      description: 'Intelligent HR assistant integrated with SAP SuccessFactors and AI agents for employee automation.',
      impact: 'Improved employee support by answering HR queries and automating routine tasks.',
      tags: ['LLM Agent', 'SAP SuccessFactors', 'AI Automation', 'Chatbot'],
      github: 'https://github.com/vishwajeetsingh01',
      demo: 'https://example.com/employee-assistant'
    },
    {
      id: 'C',
      title: 'GenAI Driven IWM Chatbot',
      description: 'Context-aware enterprise chatbot with dynamic SQL generation, prompt chaining, and historical context analysis.',
      impact: 'Enabled faster data retrieval and decision support with conversational analytics.',
      tags: ['GenAI', 'RAG', 'Prompt Chaining', 'SQL'],
      github: 'https://github.com/vishwajeetsingh01/IWM_Chatbot'
    },
    {
      id: 'P',
      title: 'Power BI Dashboard',
      description: 'Interactive analytics dashboard with sales and operational insights, built using Power BI and real-time data modeling.',
      impact: 'Delivered executive visibility by consolidating KPIs into a single dashboard.',
      tags: ['Power BI', 'DAX', 'Azure SQL', 'Dashboard'],
      github: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'D',
      title: 'Data Engineering Pipeline',
      description: 'End-to-end ETL pipeline for data ingestion, transformation, and analytics using Python, SQL, and cloud data services.',
      impact: 'Provided a reliable data foundation with automated daily processing for analytics.',
      tags: ['Python', 'SQL', 'ETL', 'Cloud'],
      github: 'https://github.com/vishwajeetsingh01'
    }
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-24 px-6 bg-slate-900">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <h2 className="text-4xl font-bold mb-14 text-center text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group block bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45),0_-10px_30px_-25px_rgba(15,23,42,0.2)] transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.8),0_-10px_40px_-30px_rgba(6,182,212,0.25)]"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 group-hover:text-cyan-400">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-slate-950">
                  {project.id}
                </span>
                {project.title}
              </h3>

              <p className="text-gray-300 group-hover:text-gray-100 transition">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-cyan-200 font-semibold">
                Impact: {project.impact}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex rounded-full border border-slate-600 px-3 py-1 text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cyan-400 font-semibold transition hover:text-cyan-200"
                >
                  Open project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
