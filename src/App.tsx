import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { TechStack } from './components/TechStack'
import { NAV } from './data/site'

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-dvh bg-canvas">
      <Nav active={active} />
      <main>
        <Home />
        <About />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-line bg-panel px-5 py-7 text-center text-xs text-muted">
        © {new Date().getFullYear()} Dingchen Yuan · Available for internships & junior roles ·{' '}
        <a href="https://dingchen-yuan.github.io" className="text-brand underline-offset-2 hover:underline">
          dingchen-yuan.github.io
        </a>
      </footer>
    </div>
  )
}
