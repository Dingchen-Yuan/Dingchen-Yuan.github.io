import { ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data/site'

export function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="section-pad">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Selected coursework & portfolio work</h2>
        <ul className="mt-10 space-y-4">
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className="rounded-xl border border-line bg-panel p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:border-brand/25 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="inline-flex rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold tracking-wide text-accent uppercase">
                    {project.status}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-brand">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">{project.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {'liveHref' in project && project.liveHref ? (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-brand/30 bg-brand px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
                    >
                      Live demo <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-brand transition hover:bg-chip"
                  >
                    GitHub <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-chip px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
