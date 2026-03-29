'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { stats } from '@/data/stats'

export function StatBar() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const counters = ref.current.querySelectorAll<HTMLElement>('[data-count]')

    const ctx = gsap.context(() => {
      counters.forEach((el) => {
        const target = parseInt(el.dataset.count ?? '0', 10)
        const obj = { val: 0 }

        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString()
              },
            })
          },
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-surface border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-8 md:py-0 gap-2"
            >
              <div className="flex items-end gap-1">
                <span
                  data-count={stat.value}
                  className="font-condensed font-black italic text-4xl md:text-6xl text-white tabular-nums"
                >
                  0
                </span>
                <span className="font-condensed font-black italic text-2xl md:text-4xl text-accent pb-1">
                  {stat.suffix}
                </span>
              </div>
              <span className="font-condensed text-xs tracking-[4px] uppercase text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
