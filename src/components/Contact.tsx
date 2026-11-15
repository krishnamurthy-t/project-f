import { Mail, Phone } from 'lucide-react'
import { contact } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div ref={ref} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">

        {/* Heading */}
        <div className="reveal mb-12 text-center">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
            <span className="h-px w-10 bg-brand-600" aria-hidden="true" />
            Get in touch
            <span className="h-px w-10 bg-brand-600" aria-hidden="true" />
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's build together.</h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-500">
            Have a project in mind? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid gap-5 sm:grid-cols-2" style={{ transitionDelay: '0.15s' }}>
          <a
            href={contact.phoneHref}
            className="group flex items-center gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-brand-200 hover:bg-brand-50"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:bg-brand-600 group-hover:shadow-brand-600/30">
              <Phone className="size-6 fill-brand-600 text-brand-600 transition group-hover:fill-white group-hover:text-white" strokeWidth={0} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Call us</p>
              <p className="mt-0.5 text-lg font-bold text-ink transition group-hover:text-brand-600">{contact.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-brand-200 hover:bg-brand-50"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition group-hover:bg-brand-600 group-hover:shadow-brand-600/30">
              <Mail className="size-6 text-brand-600 transition group-hover:text-white" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Email us</p>
              <p className="mt-0.5 text-lg font-bold text-ink transition group-hover:text-brand-600">{contact.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
