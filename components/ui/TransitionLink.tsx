'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePageTransition } from '@/lib/transitionContext'

interface TransitionLinkProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function TransitionLink({ href, className, children, onClick }: TransitionLinkProps) {
  const { navigate } = usePageTransition()

  function handleClick(e: React.MouseEvent) {
    // Hash-only links (e.g. '#section') or same-page hash links (e.g. '/#diensten')
    // should NOT trigger the curtain — let the browser handle native scroll
    const isHashLink = href.startsWith('#') || /^\/?#/.test(href)
    if (isHashLink) {
      onClick?.()
      return
    }

    e.preventDefault()
    onClick?.()
    navigate(href)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
