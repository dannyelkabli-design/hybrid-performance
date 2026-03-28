'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface UseScrollRevealOptions {
  y?: number        // startpositie (pixels omlaag), default 40
  duration?: number // animatieduur in seconden, default 0.8
  stagger?: number  // vertraging tussen child-elementen, default 0
  selector?: string // CSS selector voor children, default undefined (animeer de ref zelf)
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)
  const { y = 40, duration = 0.8, stagger = 0, selector } = options

  useEffect(() => {
    if (!ref.current) return

    const targets = selector
      ? ref.current.querySelectorAll(selector)
      : [ref.current]

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [y, duration, stagger, selector])

  return ref
}
