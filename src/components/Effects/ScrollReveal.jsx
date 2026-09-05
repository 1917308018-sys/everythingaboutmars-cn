// Based on React Bits — ScrollReveal (GSAP ScrollTrigger).
// Official component targets a heading line; this adaptation applies the same
// blur / opacity / rotation language to any element carrying [data-reveal].
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('[data-reveal]')

      targets.forEach((el) => {
        const delay = Number(el.dataset.revealDelay || 0)

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            filter: 'blur(6px)',
            y: 22,
            rotate: 1.2,
            transformOrigin: '50% 50%',
          },
          {
            autoAlpha: 1,
            filter: 'blur(0px)',
            y: 0,
            rotate: 0,
            duration: 1.8,
            ease: 'power3.out',
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              once: true,
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
