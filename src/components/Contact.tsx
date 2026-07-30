import { Code2, Mail, MapPin } from 'lucide-react'
import { PROFILE } from '../data/site'

export function Contact() {
  return (
    <section id="contact" className="border-t border-sand/10 bg-ink-soft/40">
      <div className="section-pad">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-copper uppercase">
          Contact
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Let’s talk
        </h2>
        <p className="mt-5 max-w-xl text-base text-sand-dim sm:text-lg">
          Open to internships, junior full-stack roles, and interesting collaborative projects.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-2xl border border-sand/15 bg-ink/50 p-5 transition hover:border-copper/45"
          >
            <Mail className="size-5 text-copper" />
            <p className="mt-4 text-xs tracking-[0.16em] text-sand-dim uppercase">Email</p>
            <p className="mt-1 break-all text-sm text-sand">{PROFILE.email}</p>
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-sand/15 bg-ink/50 p-5 transition hover:border-copper/45"
          >
            <Code2 className="size-5 text-copper" />
            <p className="mt-4 text-xs tracking-[0.16em] text-sand-dim uppercase">GitHub</p>
            <p className="mt-1 text-sm text-sand">@Dingchen-Yuan</p>
          </a>
          <div className="rounded-2xl border border-sand/15 bg-ink/50 p-5">
            <MapPin className="size-5 text-copper" />
            <p className="mt-4 text-xs tracking-[0.16em] text-sand-dim uppercase">Location</p>
            <p className="mt-1 text-sm text-sand">{PROFILE.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
