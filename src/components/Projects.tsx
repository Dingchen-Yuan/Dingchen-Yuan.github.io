import { ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data/site'

export function Projects() {
  return (
    <section id="projects">
      <div className="section-pad">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-copper uppercase">
          Projects
        </p>
        <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-sand sm:text-4xl">
          Selected work
        </h2>
        <ul className="mt-12 space-y-6">
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className="group rounded-2xl border border-sand/15 bg-gradient-to-br from-ink-soft to-ink p-6 transition hover:border-copper/40 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.18em] text-sand-dim uppercase">
                    {project.status}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-sand">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-copper">{project.role}</p>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-sand/20 px-3 py-1.5 text-xs font-medium text-sand transition group-hover:border-copper/50 hover:bg-sand/5"
                >
                  GitHub <ExternalLink className="size-3.5" />
                </a>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-sand-dim sm:text-base">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-sand/8 px-3 py-1 text-xs text-sand-dim"
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
