interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${className}`}>
      <svg viewBox="0 0 34 20" className="h-[0.8em] w-auto" aria-hidden="true">
        <path d="M9 0h8L8 20H0z" className="fill-brand-600" />
        <path d="M26 0h8l-9 20h-8z" className="fill-brand-600" />
      </svg>
      <span>AutomateStudio</span>
    </a>
  )
}
