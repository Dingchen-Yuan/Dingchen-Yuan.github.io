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
    <div className="grain relative min-h-dvh">
      <Nav active={active} />
      <main>
        <Home />
        <About />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-sand/10 px-5 py-8 text-center text-xs text-sand-dim">
        © {new Date().getFullYear()} Dingchen Yuan · Built with React & Tailwind · Hosted on
        GitHub Pages
      </footer>
    </div>
  )
}
