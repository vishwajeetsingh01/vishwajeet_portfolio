export default function Projects() {
  const projects = [
    {
      id: 'A',
      title: 'Intelligent Field Assistant',
      description: 'Multimodal RAG chatbot for field operators using Python, LangChain, Azure Blob Storage, and HANA Vector DB.',
      tags: ['Python', 'LangChain', 'Azure Blob', 'HANA Vector DB'],
      link: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'O',
      title: 'Smart Order Automation',
      description: 'AI-powered email order extraction system reducing manual effort using Generative AI workflows.',
      tags: ['Generative AI', 'Python', 'Automation', 'Email Parsing'],
      link: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'E',
      title: 'Employee Assistant Using LLM Agent',
      description: 'Intelligent HR assistant integrated with SAP SuccessFactors and AI agents for employee automation.',
      tags: ['LLM Agent', 'SAP SuccessFactors', 'AI Automation', 'Chatbot'],
      link: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'C',
      title: 'GenAI Driven IWM Chatbot',
      description: 'Context-aware enterprise chatbot with dynamic SQL generation, prompt chaining, and historical context analysis.',
      tags: ['GenAI', 'RAG', 'Prompt Chaining', 'SQL'],
      link: 'https://github.com/vishwajeetsingh01/IWM_Chatbot'
    },
    {
      id: 'P',
      title: 'Power BI Dashboard',
      description: 'Interactive analytics dashboard with sales and operational insights, built using Power BI and real-time data modeling.',
      tags: ['Power BI', 'DAX', 'Azure SQL', 'Dashboard'],
      link: 'https://github.com/vishwajeetsingh01'
    },
    {
      id: 'D',
      title: 'Data Engineering Pipeline',
      description: 'End-to-end ETL pipeline for data ingestion, transformation, and analytics using Python, SQL, and cloud data services.',
      tags: ['Python', 'SQL', 'ETL', 'Cloud'],
      link: 'https://github.com/vishwajeetsingh01'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-14 text-center text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45),0_-10px_30px_-25px_rgba(15,23,42,0.2)] transition transform duration-300 ease-out hover:scale-105 hover:bg-slate-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_-25px_rgba(6,182,212,0.8),0_-10px_40px_-30px_rgba(6,182,212,0.25)]"
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

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex rounded-full border border-slate-600 px-3 py-1 text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-200">
                Open project
                <span className="text-xl">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
