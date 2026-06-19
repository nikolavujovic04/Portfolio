import HeroSection from './sections/HeroSection'
import Navbar from './components/NavBar'
import StatsSection from './sections/StatsSection'
import ServiceSection from './sections/ServiceSection'
import AboutSection from './sections/AboutSection'
import Technologies from './sections/Technologies'
import ContactSection from './sections/ContactSection'
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
      <ContactSection></ContactSection>
    </div>
    </>
  )
}

export default App