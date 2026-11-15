import { Mail, Phone } from 'lucide-react'
import { contact } from '../data/site'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main footer grid */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1.4fr] md:gap-0">
          {/* Brand column */}
          <div className="md:pr-12">
            <Logo className="text-2xl text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              AI automation and software solutions for growing businesses.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:border-l md:border-zinc-700 md:px-14">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-sm transition hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <ul className="space-y-4 md:border-l md:border-zinc-700 md:pl-16">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-4 text-lg font-semibold text-zinc-200 transition hover:text-brand-500"
              >
                <Phone className="size-5 shrink-0 fill-current" strokeWidth={0} aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 text-sm transition hover:text-brand-500"
              >
                <Mail className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-zinc-800 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} AutomateStudio. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a href="#privacy" className="transition hover:text-white">Privacy</a>
            <span aria-hidden="true" className="text-zinc-700">|</span>
            <a href="#terms"   className="transition hover:text-white">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
