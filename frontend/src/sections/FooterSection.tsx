import '../styles/footer.css'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons'

const FooterSection = () => {
  return (
    <div className="footer_section">
      <div className='name'>
        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-icon">N</span>
          <span className="navbar__logo-text">nikola<span className="navbar__logo-accent">.dev</span></span>
        </a>
        <p>Full stack & Android Developer</p>
      </div>

      <div className='icons'>
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className='hero_social'><GithubIcon /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className='hero_social'><LinkedinIcon /></a>
        <a href="mailto:hello@nikola.dev" aria-label="Email" className='hero_social'><Mail size={16} /></a>
      </div>
    </div>
    
  )
}

export default FooterSection