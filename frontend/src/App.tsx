import HeroSection from './sections/HeroSection'
import Navbar from './components/NavBar'
import StatsSection from './sections/StatsSection'
import ServiceSection from './sections/ServiceSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection></StatsSection>
      <ServiceSection></ServiceSection>
    </>
  )
}

export default App