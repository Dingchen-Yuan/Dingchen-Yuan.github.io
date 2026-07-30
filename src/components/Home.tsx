import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { PROFILE } from '../data/site'

export function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(196,92,38,0.28), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 70%, rgba(61,90,69,0.35), transparent 50%), linear-gradient(165deg, #0c0f0e 0%, #121816 45%, #0c0f0e 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full border border-sand/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-40 h-[280px] w-[280px] rounded-full border border-copper/25"
      />

      <div className="section-pad relative z-10 !py-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium tracking-[0.22em] text-copper uppercase"
        >
          {PROFILE.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display max-w-4xl text-5xl leading-[0.95] font-extrabold tracking-tight text-sand sm:text-6xl md:text-7xl"
        >
          Dingchen
          <span className="text-copper"> Yuan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-xl text-lg text-sand-dim sm:text-xl"
        >
          {PROFILE.title}. {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sand px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-sand-dim"
          >
            View projects
          </a>
          <a
            href="#resume"
            className="inline-flex items-center justify-center rounded-full border border-sand/25 px-5 py-2.5 text-sm font-semibold text-sand transition hover:border-sand/50"
          >
            Resume
          </a>
        </motion.div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-sand-dim uppercase transition hover:text-sand"
        >
          Scroll <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  )
}
