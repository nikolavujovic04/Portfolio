import '../styles/hero.css'
import ContactButton from '../components/ContactButton'
import heroImage from '../assets/slika.jpg'
import { Smartphone, Server, Code2, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import TopButton from '../components/TopButton'

const HeroSection = () => {
  return(
    <section className='hero'>
      <div className='hero_left'>
        <TopButton dot = {true} text = "Available for Freelance projects"/>
        <h1>Full Stack & <br />
        <span>Android Developer</span></h1>
        <p className='hero_subtitle'>
          I build modern web applications, scalable backend systems,
          and high-performance mobile experiences — turning ideas into polished, production-ready products.
        </p>
        <div className='hero_actions'>
          <ContactButton showArrow></ContactButton>
          <ContactButton label='View Projects' variant='secondary'></ContactButton>
        </div>
        <div className='hero_socials'>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className='hero_social'><GithubIcon /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className='hero_social'><LinkedinIcon /></a>
          <a href="mailto:hello@nikola.dev" aria-label="Email" className='hero_social'><Mail size={16} /></a>
        </div>
      </div>
      <div className='hero_right'>
        <div className='hero_image_wrapper'>
          <img src={heroImage} alt="" className='hero_image' />

          <div className='floating_card card_android'>
            <Smartphone size={18} />
            <div>
              <strong>Android</strong>
              <span>Kotlin · Jetpack</span>
            </div>
          </div>

          <div className='floating_card card_api'>
            <Server size={18} />
            <div>
              <strong>REST API</strong>
              <span>200 OK · 38ms</span>
            </div>
          </div>

          <div className='floating_card card_code'>
            <code>const dev = {'{}'}</code>
          </div>

          <div className='floating_card card_deploy'>
            <Code2 size={18} />
            <div>
              <span>deploy</span>
              <strong>build ✓ passed</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection