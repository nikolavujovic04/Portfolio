import '../styles/hero.css'
import ContactButton from '../components/ContactButton'
import heroImage from '../assets/slika.jpg'

const HeroSection = () => {
  return(
    <section className='hero'>
      <div className='hero_left'>
        <h1>Full Stack & <br />
        <span>Android Developer</span></h1>
        <p className='hero_subtitle'>
          I build modern web applications, scalable backend systems, 
          and high-performance mobile experiences — turning ideas into polished, production-ready products.
        </p>
        <ContactButton showArrow></ContactButton>
      </div>
      <div className='hero_right'>
        <img src={heroImage} alt="" className='hero_image' />
      </div>

    </section>
  )
}

export default HeroSection