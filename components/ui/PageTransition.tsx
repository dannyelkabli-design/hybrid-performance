'use client'

import { useEffect } from 'react'
import { gsap } from '@/lib/gsap'

interface PageTransitionProps {
  overlayRef: React.RefObject<HTMLDivElement | null>
}

export function PageTransition({ overlayRef }: PageTransitionProps) {
  useEffect(() => {
    if (!overlayRef.current) return
    // Set initial off-screen position on mount
    gsap.set(overlayRef.current, { x: '-100%' })
  }, [overlayRef])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-accent flex items-center justify-center pointer-events-none"
      style={{ transform: 'translateX(-100%)' }}
    >
      <span className="font-condensed font-black italic uppercase tracking-[6px] text-white text-xl md:text-2xl select-none">
        HYBRID PERFORMANCE
      </span>
    </div>
  )
}
