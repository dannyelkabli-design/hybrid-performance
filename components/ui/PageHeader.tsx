import { SectionLabel } from './SectionLabel'

export function PageHeader({ label, title }: { label: string; title: string }) {
  return (
    <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
      <SectionLabel className="mb-3 block">{label}</SectionLabel>
      <h1 className="font-condensed font-black italic uppercase text-6xl md:text-8xl text-white leading-none">
        {title}
      </h1>
    </section>
  )
}
