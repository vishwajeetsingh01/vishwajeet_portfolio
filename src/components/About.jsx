export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-cyan-400">
          About Me
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-10 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)]">
              <p className="text-gray-300 text-lg leading-8">
                I build intelligent, enterprise-ready AI systems that combine Generative AI, automation, analytics, and cloud-native architecture. 
                My focus is on solving business challenges with scalable solutions that improve efficiency, user experience, and decision-making.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.25)]">
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-400 mb-3 transition duration-300 group-hover:text-cyan-200">AI & Automation</p>
                  <p className="text-gray-300 leading-7 transition duration-300 group-hover:text-slate-100">Building enterprise-grade intelligent workflows using LLMs, RAG architectures, AI agents, and scalable automation pipelines.</p>
                </div>
                <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.25)]">
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-400 mb-3 transition duration-300 group-hover:text-cyan-200">Analytics & BI</p>
                  <p className="text-gray-300 leading-7 transition duration-300 group-hover:text-slate-100">Delivering data-driven dashboards and actionable insights using Power BI, SAP Analytics Cloud (SAC), and modern analytics technologies.</p>
                </div>
                <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.25)]">
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-400 mb-3 transition duration-300 group-hover:text-cyan-200">Cloud & Data</p>
                  <p className="text-gray-300 leading-7 transition duration-300 group-hover:text-slate-100">Developing cloud-native applications, modern data engineering practices, and scalable deployment patterns.</p>
                </div>
                <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_20px_40px_-28px_rgba(6,182,212,0.25)]">
                  <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-400 mb-3 transition duration-300 group-hover:text-cyan-200">Impact</p>
                  <p className="text-gray-300 leading-7 transition duration-300 group-hover:text-slate-100">Building intelligent solutions that reduce manual effort, speed decisions, and deliver measurable business value.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.32)]">
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-400 mb-5">Core tools</p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Gen AI</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">AI/ML</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Azure</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Power BI</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">SAP</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Python</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">SQL</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Git</span>
                <span className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-gray-300">Database</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">What I love building</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Conversational AI experiences for enterprise workflows</li>
                <li>• Data visualization and business intelligence systems</li>
                <li>• Cloud-ready automation and analytics platforms</li>
                <li>• AI-powered applications for intelligent transformation</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-center">
                  <p className="text-3xl font-bold text-cyan-400">4+</p>
                  <p className="text-sm text-gray-400 mt-2">Years experience</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-center">
                  <p className="text-3xl font-bold text-cyan-400">10+</p>
                  <p className="text-sm text-gray-400 mt-2">Enterprise projects</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-center">
                  <p className="text-3xl font-bold text-cyan-400">Tech</p>
                  <p className="text-sm text-gray-400 mt-2">Analytics & cloud stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
