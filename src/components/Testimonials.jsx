import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: 'Vishwajeet has a strong ability to turn complex data problems into clear, actionable solutions. His communication and delivery exceeded expectations.',
    name: 'Santosh Chakre',
    role: 'Mentor, Incture Technologies',
  },
  {
    quote: 'The AI project was thoughtful, practical, and well-built. He delivered valuable insights on time and remained responsive throughout the engagement.',
    name: 'Srikant Swain',
    role: 'Sr. Architect, AI Automation',
  },
  {
    quote: 'A dedicated learner who consistently brings creativity and precision to technical work. Excellent teamwork and a great attitude in hackathons.',
    name: 'Prof. Rajesh Tripathi',
    role: 'MNNIT Faculty',
  }
];

const achievements = [
  {
    title: 'Hackathon Winner',
    detail: 'First place in the AI-driven process automation challenge, 2025.',
  },
  {
    title: 'Certified Data Analyst Expert',
    detail: 'SAP Certified: Data Analyst Associate.',
  },
  {
    title: 'Best Internship Project',
    detail: 'Recognized for innovative data engineering work at Incture.',
  },
  {
    title: 'Top 3 in National Coding Event',
    detail: 'Awarded for building a real-time analytics prototype under pressure.',
  }
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-950">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Testimonials & Achievements</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg mb-10">
            Trusted by mentors, clients, and teachers, with awards and certifications that back real results.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="space-y-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)] transition duration-300 hover:border-cyan-400 hover:bg-slate-800 min-h-[220px]"
              >
                <p className="text-gray-300 leading-8 mb-6">“{item.quote}”</p>
                <div className="mt-auto text-right">
                  <p className="text-base font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-cyan-300">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">Standout achievements</p>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-6">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
