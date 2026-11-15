import { Phone } from 'lucide-react'
import { contact } from '../data/site'

interface TalkToSalesProps {
  size?: 'md' | 'lg'
  shimmer?: boolean
}

export function TalkToSales({ size = 'md', shimmer = false }: TalkToSalesProps) {
  const sizing = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm'

  return (
    <a
      href={contact.phoneHref}
      className={`
        inline-flex items-center gap-2 rounded-full font-semibold text-white
        shadow-md shadow-brand-600/30
        hover:shadow-lg hover:shadow-brand-600/40
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600
        ${shimmer ? 'btn-shine' : 'bg-brand-600 transition hover:bg-brand-700 active:scale-95'}
        ${sizing}
      `}
    >
      <Phone className="size-4 fill-current" strokeWidth={0} aria-hidden="true" />
      Talk to Sales
    </a>
  )
}
