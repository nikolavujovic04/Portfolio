import { Smartphone, Monitor, Server,Palette, Settings, Layers } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useRef } from 'react'
import '../styles/technologies.css'
import TopButton from "../components/TopButton";

const services = [
  {
    variant: "tech",
    title: "Mobile Development",
    icon: <Smartphone size={20} color="white" />,
    percent: 90,
    tags: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML"],
  },
  {
    variant: "tech",
    title: "Frontend Development",
    icon: <Monitor size={20} color="white" />,
    percent: 75,
    tags: ["HTML/CSS", "React", "TypeScript", "Bootstrap"],
  },
  {
    variant: "tech",
    title: "Backend Development",
    icon: <Server size={20} color="white" />,
    percent: 70,
    tags: ["PHP", "Laravel" ,"Firebase", "REST APIs", "MySQL"],
  },
  {
    variant: "tech",
    title: "UI/UX Design",
    icon: <Palette size={20} color="white" />,
    percent: 65,
    tags: ["Figma", "Canva" ,"Material Design", "Prototyping", "Responsive Design"],
  },
  {
    variant: "tech",
    title: "DevOps & Tools",
    icon: <Settings size={20} color="white" />,
    percent: 60,
    tags: ["Git", "Github" ,"CI/CD", "Gradle", "Docker"],
  },
  {
    variant: "tech",
    title: "Architecture & Patterns",
    icon: <Layers size={20} color="white" />,
    percent: 85,
    tags: ["MVVM", "MVC" ,"Clean Architecture", "Coroutines", "Hilt/Dagger", "Room"],
  },
];

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
         {services.map((service, index) => (
          <ServiceCard
            key={index}
            variant="tech"
            title={service.title}
            icon={service.icon}
            percent={service.percent}
            tags={service.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Technologies;