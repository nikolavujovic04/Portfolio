import { Smartphone } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useRef } from 'react'
import '../styles/technologies.css'
import TopButton from "../components/TopButton";

const Technologies = () =>{

  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.service_card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])
  return(
    <div className="tech_section">
      <div className="tech_text">
        <TopButton dot={false} text={"SKILLS"} color={"white"} hoverable={false} />
        <h2>Technologies I work with</h2>
        <p>A categorized look at the tools and technologies across my stack.</p>
      </div>
      <div className="tech_cards" ref={cardsRef}>
        <ServiceCard variant="tech" title="Mobile Development" icon={<Smartphone size={20} color="white" />} percent={90} tags={["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"]} />
        <ServiceCard variant="tech" title="Mobile Development" icon={<Smartphone size={20} color="white" />} percent={90} tags={["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"]} />
        <ServiceCard variant="tech" title="Mobile Development" icon={<Smartphone size={20} color="white" />} percent={90} tags={["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"]} />
        <ServiceCard variant="tech" title="Mobile Development" icon={<Smartphone size={20} color="white" />} percent={90} tags={["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"]} />
        <ServiceCard variant="tech" title="Mobile Development" icon={<Smartphone size={20} color="white" />} percent={90} tags={["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"]} />

      </div>
    </div>
  )
}

export default Technologies;