import { contact } from '../data/site'
import { FlowDiagram } from './FlowDiagram'
import { TalkToSales } from './TalkToSales'

// A few trust signals shown below the CTA
const badges = ['AI-powered', 'Custom-built', 'Fast delivery']

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% -10%, rgba(242,106,27,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        {/* Left — copy */}
        <div>
          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1 text-xs font-semibold tracking-widest text-brand-600 uppercase">
            AI Automation &amp; Software Studio
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-5xl leading-[1.07] font-extrabold tracking-tight sm:mt-8 sm:text-6xl lg:text-[4rem]">
            Turn everyday work into{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ea5a0c 0%, #f26a1b 60%, #f59e0b 100%)',
              }}
            >
              automation.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
            We build AI-driven automation, custom software and digital solutions that save time,
            reduce cost and help your business grow.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <TalkToSales size="lg" />
            <a
              href={contact.phoneHref}
              className="text-base font-semibold tracking-tight text-ink transition hover:text-brand-600"
            >
              {contact.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — flow diagram */}
        <div className="hidden sm:block">
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}
