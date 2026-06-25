import '../styles/service.css'
import ServiceCard from '../components/ServiceCard'
import { Smartphone, Layers, Globe, Palette, Server, Database } from 'lucide-react'
import { useEffect, useRef } from 'react'
import TopButton from '../components/TopButton'


const card = [
  { title: "Mobile App Development", text: "Native Android applications with modern architecture, clean code, and scalable, maintainable codebases.", icon: <Smartphone size={20} color="white" /> },
  { title: "Full Stack Development", text: "End-to-end product development across frontend, backend, databases, and APIs — all working in harmony.", icon: <Layers size={20} color="white" /> },
  { title: "Web Development", text: "Modern, responsive websites and web applications built for speed, accessibility, and conversion.", icon: <Globe size={20} color="white" /> },
  { title: "UI Implementation", text: "Converting designs into fast, pixel-perfect, responsive interfaces with smooth micro-interactions.", icon: <Palette size={20} color="white" /> },
  { title: "Backend Development", text: "Robust REST APIs, authentication, databases, and third-party integrations built to scale.", icon: <Server size={20} color="white" /> },
  { title: "Database Design", text: "Efficient, normalized, and scalable data structures that keep your application fast and reliable.", icon: <Database size={20} color="white" /> },
]

const ServiceSection = () => {
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

  return (
    <div className="service">
      <TopButton color='white' hoverable={false} dot={false} text="WHAT I DO" />
      <div className="text_service">
        <h2 className="title">Services and solutions I provide</h2>
        <p className="text">From mobile to backend, I cover the full stack of building modern software products.</p>
      </div>
      <div className="service_dev" ref={cardsRef}>
        {card.map((item, index) => (
          <ServiceCard key={index} title={item.title} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}

export default ServiceSection