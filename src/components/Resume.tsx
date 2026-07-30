import { Download, FileText } from 'lucide-react'
import { RESUME } from '../data/site'

export function Resume() {
  return (
    <section id="resume" className="border-t border-line">
      <div className="section-pad">
        <p className="eyebrow">Resume</p>
        <h2 className="section-title">What I can bring to a team</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {RESUME.summary}
        </p>

        <ul className="mt-8 max-w-2xl space-y-3">
          {RESUME.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={RESUME.pdfHref} className="btn-primary">
            <Download className="mr-2 size-4" />
            Download PDF
          </a>
          <a href={RESUME.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
          <a href={RESUME.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <FileText className="mr-2 size-4" />
            GitHub
          </a>
        </div>
        <p className="mt-4 text-xs text-muted">
          Add your CV at <code className="text-ink">public/resume.pdf</code> on the{' '}
          <code className="text-ink">source</code> branch, then redeploy.
        </p>
      </div>
    </section>
  )
}
