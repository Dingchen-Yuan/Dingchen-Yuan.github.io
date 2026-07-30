import { STACK } from '../data/site'

export function TechStack() {
  return (
    <section id="stack" className="border-t border-sand/10 bg-ink-soft/40">
      <div className="section-pad">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-copper uppercase">
          Tech Stack
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Tools I reach for
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STACK.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-sand/15 bg-ink/50 p-6"
            >
              <h3 className="font-display text-lg font-bold text-sand">{group.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-sand/8 pb-2 text-sm text-sand-dim last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
