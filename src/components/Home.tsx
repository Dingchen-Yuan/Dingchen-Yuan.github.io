import { motion } from 'framer-motion'
import { PROFILE } from '../data/site'

export function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88dvh] items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 0% 0%, rgba(15,118,110,0.10), transparent 55%), radial-gradient(ellipse 55% 45% at 100% 10%, rgba(22,58,95,0.10), transparent 50%), linear-gradient(180deg, #eef3f8 0%, #f3f6fa 55%, #f3f6fa 100%)',
        }}
      />

      <div className="section-pad relative z-10 !py-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-muted"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Open to work · {PROFILE.location}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.04 }}
          className="text-sm font-medium text-accent"
        >
          {PROFILE.school}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display mt-3 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-brand sm:text-5xl md:text-6xl"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-2 text-lg font-medium text-ink sm:text-xl"
        >
          {PROFILE.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#resume" className="btn-secondary">
            Resume
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
