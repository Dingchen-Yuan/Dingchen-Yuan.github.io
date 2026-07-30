import { BriefcaseBusiness, Code2, Mail, MapPin } from 'lucide-react'
import { PROFILE } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-panel">
      <div className="section-pad">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Happy to connect</h2>
        <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
          Open to internships and junior full-stack / backend roles in Auckland and across New
          Zealand.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-xl border border-line bg-canvas p-5 transition hover:border-accent/40"
          >
            <Mail className="size-5 text-accent" />
            <p className="mt-4 text-[11px] font-semibold tracking-wide text-muted uppercase">
              Email
            </p>
            <p className="mt-1 break-all text-sm font-medium text-ink">{PROFILE.email}</p>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-line bg-canvas p-5 transition hover:border-accent/40"
          >
            <BriefcaseBusiness className="size-5 text-accent" />
            <p className="mt-4 text-[11px] font-semibold tracking-wide text-muted uppercase">
              LinkedIn
            </p>
            <p className="mt-1 text-sm font-medium text-ink">dingchen-yuan</p>
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-line bg-canvas p-5 transition hover:border-accent/40"
          >
            <Code2 className="size-5 text-accent" />
            <p className="mt-4 text-[11px] font-semibold tracking-wide text-muted uppercase">
              GitHub
            </p>
            <p className="mt-1 text-sm font-medium text-ink">@Dingchen-Yuan</p>
          </a>
          <div className="rounded-xl border border-line bg-canvas p-5">
            <MapPin className="size-5 text-accent" />
            <p className="mt-4 text-[11px] font-semibold tracking-wide text-muted uppercase">
              Location
            </p>
            <p className="mt-1 text-sm font-medium text-ink">{PROFILE.location}</p>
            <p className="mt-2 text-xs text-muted">{PROFILE.phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
