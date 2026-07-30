import { Download, FileText } from 'lucide-react'
import { RESUME } from '../data/site'

export function Resume() {
  return (
    <section id="resume">
      <div className="section-pad">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-copper uppercase">
          Resume
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Experience snapshot
        </h2>
        <p className="mt-5 max-w-2xl text-base text-sand-dim sm:text-lg">{RESUME.summary}</p>

        <ul className="mt-10 max-w-2xl space-y-4">
          {RESUME.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-sand-dim sm:text-base">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-copper" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={RESUME.pdfHref}
            className="inline-flex items-center gap-2 rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-sand-dim"
          >
            <Download className="size-4" />
            Download PDF
          </a>
          <a
            href={RESUME.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-5 py-2.5 text-sm font-semibold text-sand transition hover:border-sand/50"
          >
            LinkedIn
          </a>
          <a
            href={RESUME.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-5 py-2.5 text-sm font-semibold text-sand transition hover:border-sand/50"
          >
            <FileText className="size-4" />
            GitHub
          </a>
        </div>
        <p className="mt-4 text-xs text-sand-dim/80">
          Tip: add your CV PDF at <code className="text-sand">public/resume.pdf</code> on the{' '}
          <code className="text-sand">source</code> branch, then redeploy.
        </p>
      </div>
    </section>
  )
}
