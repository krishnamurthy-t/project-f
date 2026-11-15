import { ArrowRight } from 'lucide-react'
import { services } from '../data/site'

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-6 px-4 sm:px-6">
      <div className="grid gap-10 border-t border-zinc-200 py-14 sm:py-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="flex items-center gap-5 text-sm font-semibold tracking-[0.12em] uppercase">
            Services
            <span className="h-0.5 w-12 bg-brand-600" aria-hidden="true" />
          </p>
          <h2 className="mt-10 text-5xl leading-[1.05] font-extrabold tracking-tight sm:mt-14">
            What
            <br />
            we build.
          </h2>
        </div>

        <ul>
          {services.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <a href="#top" className="group flex items-center gap-6 sm:gap-10">
                <Icon className="size-9 shrink-0 text-ink" strokeWidth={1.5} aria-hidden="true" />
                <div className={`flex flex-1 items-center gap-4 py-5 sm:py-6 ${i < services.length - 1 ? 'border-b border-zinc-200' : ''}`}>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h3>
                    <p className="mt-1 text-zinc-600 sm:text-lg">{description}</p>
                  </div>
                  <ArrowRight
                    className="size-6 shrink-0 transition group-hover:translate-x-1 group-hover:text-brand-600"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
