import { Smartphone } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import '../styles/technologies.css'
import TopButton from "../components/TopButton";

const Technologies = () =>{
  return(
    <div className="tech_section">
      <div className="tech_text">
        <TopButton dot={false} text={"SKILLS"} color={"white"} hoverable={false} ></TopButton>
        <h2>Technologies I wotk with</h2>
        <p>A categorized look at the tools and technologies across my stack.</p>
      </div>
      <div className="tech_cards">
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