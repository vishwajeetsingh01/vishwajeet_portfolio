import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const formRef = useRef(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Read EmailJS configuration from environment variables only.
  // Do NOT provide default values here to avoid leaking secrets in source control.
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const contactTemplateID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
  const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    const next = {};
    if (!form.name || !form.name.trim()) next.name = 'Please enter your name.';
    // basic email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRe.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.message || !form.message.trim()) next.message = 'Please enter a message.';
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatusMessage('Please fix the errors in the form.');
      // focus first invalid field
      requestAnimationFrame(() => {
        const first = formRef.current && formRef.current.querySelector('[aria-invalid="true"]');
        first && first.focus();
      });
      return;
    }

    if (!serviceID || !contactTemplateID || !autoReplyTemplateID || !publicKey) {
      setStatusMessage('Email service is not configured. Please set VITE_EMAILJS_* environment variables.');
      return;
    }

    setIsSending(true);
    setStatusMessage('Sending message...');

    try {
      // copy form values into hidden inputs if needed by emailjs (we rely on name attributes already present)
      await emailjs.sendForm(serviceID, contactTemplateID, formRef.current, publicKey);
      await emailjs.sendForm(serviceID, autoReplyTemplateID, formRef.current, publicKey);
      setStatusMessage('Message sent successfully! I will reply soon.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send error:', error);
      setStatusMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
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
              <h3 className="text-3xl font-semibold text-white mb-3">Contact form</h3>
              <p className="text-gray-400 leading-7">
                Share your project details and I’ll reply with tailored next steps. Use this form to send a direct message. If you prefer, you can also email me or chat directly over whatsapp.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => { setForm((s) => ({ ...s, name: e.target.value })); if (errors.name) setErrors((s) => ({ ...s, name: undefined })); }}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your name"
                />
                {errors.name && <div id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</div>}
              </label>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => { setForm((s) => ({ ...s, email: e.target.value })); if (errors.email) setErrors((s) => ({ ...s, email: undefined })); }}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="you@example.com"
                />
                {errors.email && <div id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</div>}
              </label>

              <label className="block text-sm text-gray-300">
                <span className="mb-2 inline-block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => { setForm((s) => ({ ...s, message: e.target.value })); if (errors.message) setErrors((s) => ({ ...s, message: undefined })); }}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows="5"
                  className="w-full rounded-[24px] border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project, timeline, or goals..."
                />
                {errors.message && <div id="message-error" className="mt-2 text-sm text-red-400">{errors.message}</div>}
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-[24px] bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send message'}
              </button>
              {statusMessage && (
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100" aria-live="polite" aria-atomic="true">
                  {statusMessage}
                </div>
              )}
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
