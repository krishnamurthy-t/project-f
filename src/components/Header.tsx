import { Logo } from './Logo'
import { TalkToSales } from './TalkToSales'

export function Header() {
  return (
    <header id="top" className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
      <Logo className="text-xl sm:text-[1.75rem]" />
      <nav className="flex items-center gap-6 sm:gap-14">
        <a href="#services" className="hidden text-lg text-zinc-600 transition hover:text-ink sm:inline">
          Services
        </a>
        <TalkToSales />
      </nav>
    </header>
  )
}
