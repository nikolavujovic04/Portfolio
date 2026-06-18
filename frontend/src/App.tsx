import HeroSection from './sections/HeroSection'
import Navbar from './components/NavBar'
import StatsSection from './sections/StatsSection'
import ServiceSection from './sections/ServiceSection'
import AboutSection from './sections/AboutSection'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <div className='padd'>
      <HeroSection />
      <StatsSection></StatsSection>
      <ServiceSection></ServiceSection>
      <AboutSection></AboutSection>
    </div>
      
      
    </>
  )
}

export default App