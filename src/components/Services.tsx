import { services } from '../data/site'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              <span className="h-px w-10 bg-brand-600" aria-hidden="true" />
              Services
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              What we build.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-zinc-500">
            End-to-end solutions tailored to your business — from automation to full-stack apps.
          </p>
        </div>

        {/* Service cards */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <li key={title}>
              <a
                href="#top"
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
              >
                {/* Icon badge */}
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <h3 className="text-base font-bold tracking-tight">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{description}</p>

                {/* Subtle arrow */}
                <span className="mt-5 text-xs font-semibold text-brand-600 opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
