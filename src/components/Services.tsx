import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { services } from '../data/site'
import { useReveal } from '../hooks/useReveal'

// Map each service to a category tag
const TAGS = ['All', 'AI', 'Web', 'Mobile'] as const
type Tag = (typeof TAGS)[number]

const tagMap: Record<string, Tag> = {
  'AI Automation':     'AI',
  'AI Solutions':      'AI',
  'Web Development':   'Web',
  'Mobile Development':'Mobile',
}

export function Services() {
  const [active, setActive] = useState<Tag>('All')
  const ref = useReveal()

  const filtered = active === 'All'
    ? services
    : services.filter((s) => tagMap[s.title] === active)

  return (
    <section id="services" className="scroll-mt-20 bg-zinc-50">
      <div ref={ref} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">

        {/* Section header */}
        <div className="reveal mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-10 bg-brand-600" aria-hidden="true" />
              What we build
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Services
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm leading-relaxed text-zinc-500" style={{ transitionDelay: '0.1s' }}>
            End-to-end solutions tailored to your business — from AI automation to full-stack apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal mb-8 flex flex-wrap gap-2" style={{ transitionDelay: '0.15s' }}>
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                active === tag
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'border border-zinc-200 bg-white text-zinc-600 hover:border-brand-200 hover:text-brand-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(({ title, description, icon: Icon }, i) => (
            <li
              key={title}
              className="reveal"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <a
                href="#top"
                className="card-glow group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                {/* Icon */}
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <h3 className="text-base font-bold tracking-tight">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{description}</p>

                {/* Arrow link */}
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:gap-2">
                  Learn more
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
