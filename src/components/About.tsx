import { PROFILE } from '../data/site'

export function About() {
  return (
    <section id="about" className="border-t border-sand/10 bg-ink-soft/40">
      <div className="section-pad">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-copper uppercase">
          About
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Software with structure — and a clear point of view.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-sand-dim sm:text-lg">
            {PROFILE.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-sand/15 bg-ink/60 p-6">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="tracking-[0.16em] text-sand-dim uppercase">Preferred name</dt>
                <dd className="mt-1 text-sand">{PROFILE.preferred}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-sand-dim uppercase">Focus</dt>
                <dd className="mt-1 text-sand">{PROFILE.title}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-sand-dim uppercase">Education</dt>
                <dd className="mt-1 text-sand">{PROFILE.school}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-sand-dim uppercase">Based in</dt>
                <dd className="mt-1 text-sand">{PROFILE.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
