'use client'

import { useState, useEffect, useRef } from 'react'

const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!$%'

interface UseScrambleOptions {
  text: string
  trigger: boolean
  speed?: number   // ms per frame, default 30
  delay?: number   // ms before starting, default 0
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function scrambledVersion(text: string): string {
  return text
    .split('')
    .map((c) => (c === ' ' ? ' ' : randomChar()))
    .join('')
}

export function useScramble({
  text,
  trigger,
  speed = 30,
  delay = 0,
}: UseScrambleOptions): string {
  // Start with scrambled text when trigger is already true (avoids real-text flash)
  // Start with real text when trigger is false (visible before scroll reveals it)
  const [displayText, setDisplayText] = useState(() =>
    trigger ? scrambledVersion(text) : text
  )
  const frameRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text)
      return
    }

    // Show scrambled immediately before the delay fires
    setDisplayText(scrambledVersion(text))

    function startScramble() {
      frameRef.current = 0

      intervalRef.current = setInterval(() => {
        const frame = frameRef.current
        const next = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < frame) return char
            return randomChar()
          })
          .join('')

        setDisplayText(next)
        frameRef.current++

        if (frameRef.current > text.length) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null
          setDisplayText(text)
        }
      }, speed)
    }

    if (delay > 0) {
      timeoutRef.current = setTimeout(startScramble, delay)
    } else {
      startScramble()
    }

    return () => {
      clearInterval(intervalRef.current!)
      clearTimeout(timeoutRef.current!)
    }
  }, [trigger, text, speed, delay])

  return displayText
}
