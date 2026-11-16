import { Mail, Phone } from 'lucide-react'
import { contact } from '../data/site'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-0">
          <div className="md:pr-10">
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-xs text-zinc-600">AI automation and software solutions for growing businesses.</p>
          </div>
          <div className="md:border-l md:border-zinc-200 md:px-14">
            <h2 className="font-semibold">Quick Links</h2>
            <a href="#services" className="mt-4 inline-block text-zinc-700 hover:text-brand-600">
              Services
            </a>
          </div>
          <ul className="space-y-4 md:border-l md:border-zinc-200 md:pl-16">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-5 text-xl font-medium hover:text-brand-600">
                <Phone className="size-5 fill-current" strokeWidth={0} aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-5 text-lg hover:text-brand-600">
                <Mail className="size-5" strokeWidth={1.75} aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-t border-zinc-200 py-6 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} AutomateStudio. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-brand-600">Privacy</a>
            <span className="text-zinc-300" aria-hidden="true">|</span>
            <a href="#terms" className="hover:text-brand-600">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
