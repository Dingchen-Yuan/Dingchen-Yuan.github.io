import { NAV } from '../data/site'

type Props = {
  active: string
}

export function Nav({ active }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-panel/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="font-display text-base font-semibold text-brand">
          Dingchen Yuan
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                'rounded-md px-3 py-1.5 text-sm font-medium transition',
                active === item.id
                  ? 'bg-chip text-brand'
                  : 'text-muted hover:text-brand',
              ].join(' ')}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !px-3.5 !py-1.5 text-xs sm:text-sm">
          Contact
        </a>
      </div>
    </header>
  )
}
