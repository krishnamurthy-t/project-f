import { contact } from '../data/site'
import { FlowDiagram } from './FlowDiagram'
import { TalkToSales } from './TalkToSales'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
      <div>
        <p className="text-sm font-semibold tracking-[0.12em] text-ink uppercase">AI Automation &amp; Software Studio</p>
        <h1 className="mt-8 text-5xl leading-[1.05] font-extrabold tracking-tight sm:mt-10 sm:text-6xl lg:text-[4rem]">
          Turn everyday work into <span className="text-brand-600">automation.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
          We build AI-driven automation, custom software and digital solutions that save time, reduce cost and help your
          business grow.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
          <TalkToSales size="lg" />
          <span className="hidden h-8 w-px bg-zinc-300 sm:block" aria-hidden="true" />
          <a href={contact.phoneHref} className="text-xl font-medium tracking-tight hover:text-brand-600">
            {contact.phone}
          </a>
        </div>
      </div>
      <div className="hidden sm:block">
        <FlowDiagram />
      </div>
    </section>
  )
}
