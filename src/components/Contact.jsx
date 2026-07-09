export default function Contact() {
  return (
    <section id="contact" className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center py-24">

        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Let's connect and discuss AI, Analytics, and innovative projects.
        </p>

        <div className="mx-auto max-w-2xl border border-cyan-400 rounded-3xl bg-slate-900 p-10 space-y-8 text-lg">
          <div className="flex flex-col gap-8">
            <a
              href="mailto:vishwajeetsinghlife@gmail.com"
              className="inline-flex items-center justify-center mx-auto text-gray-300 hover:text-cyan-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-cyan-400 mr-2">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                <path d="m22 6-10 8.5L2 6" />
              </svg>
              <span className="font-medium">vishwajeetsinghlife@gmail.com</span>
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/vishwajeetsingh01"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap border border-cyan-400 hover:bg-cyan-400 hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.003.071 1.531 1.031 1.531 1.031.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.637-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.545 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.687-4.566 4.935.36.31.681.92.681 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.481C19.138 20.162 22 16.419 22 12c0-5.523-4.477-10-10-10Z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vishwajeetsingh-"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap border border-cyan-400 hover:bg-cyan-400 hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8.5H5V24H0V8.5ZM7.5 8.5H12.4V10.8H12.5C13.2 9.608 14.85 8.402 17.2 8.402 21.65 8.402 22 11.5 22 15.5V24H17V16.6C17 14.5 16.55 12.8 14.2 12.8 11.85 12.8 11.4 14.5 11.4 16.4V24H7.5V8.5Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
