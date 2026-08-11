import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const posts = [
  {
    title: 'Building a RAG-Based Field Assistant',
    date: 'July 2025',
    summary: 'Designing a retrieval-augmented system that indexes manuals, support tickets, and sensor data for fast field troubleshooting.',
    tags: ['RAG', 'Azure', 'Python'],
    link: '#',
  },
  {
    title: 'Optimizing Power BI Performance for Enterprise Dashboards',
    date: 'May 2025',
    summary: 'A case study on data modeling, incremental refresh, and UX improvements that kept reports fast at scale.',
    tags: ['Power BI', 'Data Modeling', 'Analytics'],
    link: '#',
  },
  {
    title: 'From Idea to AI Assistant: LLM Agent Architecture',
    date: 'March 2025',
    summary: 'Exploring how LangChain, OpenAI, and automation patterns combine into an intelligent assistant for HR workflows.',
    tags: ['LangChain', 'OpenAI', 'AI Agent'],
    link: '#',
  },
];

export default function Blog() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="blog" className="py-24 px-6 bg-slate-900">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Blog & Case Studies</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Short write-ups that share project learnings, technical design decisions, and real work outcomes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400 hover:bg-slate-800">
              <div className="mb-4 flex items-center justify-between text-sm text-cyan-300 uppercase tracking-[0.3em] font-semibold">
                <span>{post.date}</span>
                <span>{post.tags.length} tags</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
              <p className="text-gray-300 leading-7 mb-6">{post.summary}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={post.link} className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300">
                Read case study →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
