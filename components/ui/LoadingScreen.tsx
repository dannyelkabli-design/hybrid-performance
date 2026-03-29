'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (localStorage.getItem('hp_visited')) {
      setVisible(false)
      return
    }

    localStorage.setItem('hp_visited', '1')

    gsap.from(textRef.current, { opacity: 0, y: 20, duration: 0.4, delay: 0.1 })

    const timer = setTimeout(() => {
      gsap.to(overlayRef.current, {
        y: '-100%',
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => setVisible(false),
      })
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        background: '#ff3c00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div ref={textRef} style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(32px, 8vw, 80px)',
            color: 'white',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          HYBRID<br />PERFORMANCE
        </p>
      </div>
    </div>
  )
}
