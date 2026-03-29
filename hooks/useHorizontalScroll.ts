'use client'

import { RefObject, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface UseHorizontalScrollOptions {
  containerRef: RefObject<HTMLElement | null>
  trackRef: RefObject<HTMLElement | null>
  progressRef: RefObject<HTMLElement | null>
}

export function useHorizontalScroll({
  containerRef,
  trackRef,
  progressRef,
}: UseHorizontalScrollOptions) {
  useEffect(() => {
    // ScrollTrigger.config must run client-side only
    ScrollTrigger.config({ ignoreMobileResize: true })

    const container = containerRef.current
    const track = trackRef.current
    const progress = progressRef.current
    if (!container || !track || !progress) return

    const distance = track.scrollWidth - container.offsetWidth
    if (distance <= 0) return  // content fits — nothing to scroll

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => '+=' + distance,
        invalidateOnRefresh: true,
      },
    })

    tl.to(track, { x: -distance, ease: 'none' }, 0)
    tl.to(progress, { scaleX: 1, ease: 'none' }, 0)

    const st = tl.scrollTrigger!

    return () => {
      st.kill()
      tl.kill()
    }
  }, [containerRef, trackRef, progressRef])
}
