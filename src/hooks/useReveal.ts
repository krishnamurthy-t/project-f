import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Any child element with class "reveal" gets class "visible" added
 * once it enters the viewport, triggering the CSS fade-up transition.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!els?.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
