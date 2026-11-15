import { Phone } from 'lucide-react'
import { contact } from '../data/site'

interface TalkToSalesProps {
  size?: 'md' | 'lg'
}

export function TalkToSales({ size = 'md' }: TalkToSalesProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full font-semibold text-white bg-brand-600 shadow-md shadow-brand-600/30 transition hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/40 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
  const sizing = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm'

  return (
    <a href={contact.phoneHref} className={`${base} ${sizing}`}>
      <Phone className="size-4 fill-current" strokeWidth={0} aria-hidden="true" />
      Talk to Sales
    </a>
  )
}
