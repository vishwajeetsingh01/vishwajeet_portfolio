import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-500/20 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-16 hidden h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl lg:block" />

      <div ref={ref} className={`relative mx-auto w-full max-w-7xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 px-2 sm:px-0">
          <h2 className="text-4xl font-bold text-cyan-400">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400 text-base leading-7 sm:text-lg">
            Reach out for AI, analytics, or automation work. I’m happy to discuss your requirements, share my experience, and support practical project delivery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)] min-w-0">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 font-semibold mb-4">
                Send a message
              </span>
              <h3 className="text-3xl font-semibold text-white mb-3">Quick contact form</h3>
              <p className="text-gray-400 leading-7">
                Share your project details and I’ll reply with tailored next steps. Use this form to send a direct message. If you prefer, you can also email me or chat directly over whatsapp.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project, timeline, or goals..."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-[24px] bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-6 min-w-0 w-full">
            <div className="rounded-[32px] min-w-0 border border-slate-800 bg-slate-900 p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">More ways to connect</p>
              <h3 className="text-3xl font-semibold text-white mb-6">Contact</h3>

              <div className="space-y-4">
                <a
                  href="mailto:vishwajeetsinghmnnit@gmail.com"
                  className="group flex items-center gap-3 rounded-[24px] border border-slate-700 bg-slate-950 p-4 transition hover:border-cyan-400"
                >
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 text-lg font-semibold">
                    @
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Email</p>
                    <p className="text-base font-semibold text-white truncate">vishwajeetsinghmnnit@gmail.com</p>
                  </div>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="group flex items-start gap-4 rounded-[24px] border border-slate-700 bg-slate-950 p-4 transition hover:border-cyan-400"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 text-lg font-semibold">
                    ↓
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Resume</p>
                    <p className="text-base font-semibold text-white">Download my resume</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vishwajeetsingh-"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-[24px] border border-slate-700 bg-slate-950 p-4 transition hover:border-cyan-400"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 text-lg font-semibold">
                    in
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">LinkedIn</p>
                    <p className="text-base font-semibold text-white">Connect on LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-8 md:p-10 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">Why reach out?</p>
              <ul className="space-y-4 text-gray-400 text-sm leading-7">
                <li className="rounded-3xl border border-slate-700 bg-slate-950 p-4">AI and analytics solutions that drive measurable value.</li>
                <li className="rounded-3xl border border-slate-700 bg-slate-950 p-4">Data engineering and reporting work built for reliability.</li>
                <li className="rounded-3xl border border-slate-700 bg-slate-950 p-4">Fast replies, clear project scope, and practical delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
