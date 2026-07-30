import { STACK } from '../data/site'

export function TechStack() {
  return (
    <section id="stack" className="border-t border-line bg-panel">
      <div className="section-pad">
        <p className="eyebrow">Tech Stack</p>
        <h2 className="section-title">Skills for junior full-stack roles</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group) => (
            <div key={group.group} className="rounded-xl border border-line bg-canvas p-5">
              <h3 className="text-sm font-semibold tracking-wide text-brand uppercase">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line/70 pb-2 text-sm text-muted last:border-0 last:pb-0"
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
