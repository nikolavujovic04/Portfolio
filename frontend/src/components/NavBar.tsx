import { useEffect, useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import '../styles/navbar.css'
import ContactButton from './ContactButton'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">

        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-icon">N</span>
          <span className="navbar__logo-text">nikola<span className="navbar__logo-accent">.dev</span></span>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <SocialIcon href="https://github.com" label="GitHub"><GithubIcon /></SocialIcon>
          <SocialIcon href="https://linkedin.com" label="LinkedIn"><LinkedinIcon /></SocialIcon>
          <ContactButton></ContactButton>
        </div>

        <button className="navbar__hamburger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="navbar__mobile">
          <ul className="navbar__mobile-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-social">
            <SocialIcon href="https://github.com" label="GitHub"><GithubIcon /></SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn"><LinkedinIcon /></SocialIcon>
            <SocialIcon href="mailto:hello@nikola.dev" label="Email"><Mail size={16} /></SocialIcon>
          </div>
        </div>
      )}
    </header>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="navbar__social">
      {children}
    </a>
  )
}

export default Navbar