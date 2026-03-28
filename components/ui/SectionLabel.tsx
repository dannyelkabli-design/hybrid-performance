interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-condensed font-bold text-xs tracking-[5px] uppercase text-accent ${className}`}
    >
      {children}
    </span>
  )
}
