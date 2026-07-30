import { NAV } from '../data/site'

type Props = {
  active: string
}

export function Nav({ active }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-sand/10 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#home"
          className="font-display text-sm font-bold tracking-[0.18em] text-sand uppercase"
        >
          DY
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                'rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition',
                active === item.id
                  ? 'bg-sand/10 text-sand'
                  : 'text-sand-dim hover:text-sand',
              ].join(' ')}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-copper px-3.5 py-1.5 text-xs font-semibold tracking-wide text-sand transition hover:bg-copper-glow"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
