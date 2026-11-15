import { contact } from '../data/site'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Main row */}
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo className="text-2xl text-white" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              AI automation and software solutions for growing businesses.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm sm:items-end">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#contact"  className="transition hover:text-white">Contact</a>
            <a href={`mailto:${contact.email}`} className="transition hover:text-brand-500">{contact.email}</a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-zinc-800 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} AutomateStudio. All rights reserved.</p>
          <nav className="flex gap-5">
            <a href="#privacy" className="transition hover:text-white">Privacy</a>
            <a href="#terms"   className="transition hover:text-white">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
