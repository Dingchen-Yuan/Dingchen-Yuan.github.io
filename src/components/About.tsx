import { PROFILE } from '../data/site'

export function About() {
  return (
    <section id="about" className="border-t border-line bg-panel">
      <div className="section-pad">
        <p className="eyebrow">About</p>
        <h2 className="section-title">MIT student building reliable full-stack products.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {PROFILE.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="rounded-xl border border-line bg-canvas p-6">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold tracking-wide text-muted uppercase text-[11px]">
                  Preferred name
                </dt>
                <dd className="mt-1 font-medium text-ink">{PROFILE.preferred}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-wide text-muted uppercase text-[11px]">
                  Focus
                </dt>
                <dd className="mt-1 font-medium text-ink">{PROFILE.title}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-wide text-muted uppercase text-[11px]">
                  Education
                </dt>
                <dd className="mt-1 font-medium text-ink">{PROFILE.school}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-wide text-muted uppercase text-[11px]">
                  Based in
                </dt>
                <dd className="mt-1 font-medium text-ink">{PROFILE.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
