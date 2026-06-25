import HeroSection from './sections/HeroSection'
import Navbar from './components/NavBar'
import StatsSection from './sections/StatsSection'
import ServiceSection from './sections/ServiceSection'
import AboutSection from './sections/AboutSection'
import Technologies from './sections/Technologies'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import ProjectsSection from './sections/ProjectsSection'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <div className='app_wrapper'>
      <HeroSection />
      <StatsSection></StatsSection>
      <ServiceSection></ServiceSection>
      <AboutSection></AboutSection>
    </div>
    <Technologies></Technologies>
    <div className='app_wrapper'>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </div>
    </>
  )
}

export default App