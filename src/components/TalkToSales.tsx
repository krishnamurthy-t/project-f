import { Phone } from 'lucide-react'
import { contact } from '../data/site'

interface TalkToSalesProps {
  size?: 'md' | 'lg'
}

export function TalkToSales({ size = 'md' }: TalkToSalesProps) {
  const sizing = size === 'lg' ? 'px-8 py-3.5 text-lg' : 'px-4 py-2.5 text-sm sm:px-6 sm:text-base'
  return (
    <a
      href={contact.phoneHref}
      className={`inline-flex items-center gap-3 rounded-lg bg-brand-600 font-medium text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${sizing}`}
    >
      <Phone className="size-5 fill-current" strokeWidth={0} aria-hidden="true" />
      Talk to Sales
    </a>
  )
}
