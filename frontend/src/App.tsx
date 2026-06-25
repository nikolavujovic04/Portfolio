import HeroSection from './sections/HeroSection'
import Navbar from './components/NavBar'
import StatsSection from './sections/StatsSection'
import ServiceSection from './sections/ServiceSection'
import AboutSection from './sections/AboutSection'
import Technologies from './sections/Technologies'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import ProjectsSection from './sections/ProjectsSection'
import PathSection from './sections/PathSection'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <div className='gap_sections'>
      <div className='app_wrapper'>
        <HeroSection />
        <StatsSection></StatsSection>
        <ServiceSection></ServiceSection>
        <AboutSection></AboutSection>
      </div>
      <Technologies></Technologies>
      <div className='app_wrapper'>
        <ProjectsSection></ProjectsSection>
      </div>
      <PathSection></PathSection>
      <div className='app_wrapper'>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
      </div>
    </div>
    
    </>
  )
}

export default App