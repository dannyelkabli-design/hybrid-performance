'use client'

import { useState, useEffect, useRef } from 'react'
import { ScrollTrigger } from '@/lib/gsap'
import { useScramble } from '@/hooks/useScramble'

interface ScrambleTextProps {
  text: string
  className?: string
  triggerOnScroll?: boolean   // default false = triggers on mount
  delay?: number              // ms delay before scramble, forwarded to useScramble
}

export function ScrambleText({
  text,
  className,
  triggerOnScroll = false,
  delay = 0,
}: ScrambleTextProps) {
  const [triggered, setTriggered] = useState(!triggerOnScroll)
  const spanRef = useRef<HTMLSpanElement>(null)

  // Scroll-triggered variant: set trigger=true when 20% into viewport
  useEffect(() => {
    if (!triggerOnScroll || !spanRef.current) return

    const st = ScrollTrigger.create({
      trigger: spanRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => setTriggered(true),
    })

    return () => st.kill()
  }, [triggerOnScroll])

  const displayText = useScramble({ text, trigger: triggered, delay })

  return (
    <span ref={spanRef} className={className} aria-label={text}>
      {displayText}
    </span>
  )
}
