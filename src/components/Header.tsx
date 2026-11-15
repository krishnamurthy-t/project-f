import { Logo } from './Logo'
import { TalkToSales } from './TalkToSales'

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <Logo className="text-xl sm:text-2xl" />

        <nav className="flex items-center gap-6 sm:gap-10">
          <a
            href="#services"
            className="hidden text-sm font-medium text-zinc-600 transition hover:text-ink sm:inline"
          >
            Services
          </a>
          <TalkToSales />
        </nav>
      </div>
    </header>
  )
}
