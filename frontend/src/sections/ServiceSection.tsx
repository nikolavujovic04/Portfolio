import '../styles/service.css'
import ServiceCard from '../components/ServiceCard'
import { Smartphone, Layers, Globe, Palette, Server, Database } from 'lucide-react'


const card = [
  { title: "Mobile App Development", text: "Native Android applications...", icon: <Smartphone size={20} color="white" /> },
  { title: "Full Stack Development", text: "End-to-end product development...", icon: <Layers size={20} color="white" /> },
  { title: "Web Development", text: "Modern, responsive websites...", icon: <Globe size={20} color="white" /> },
  { title: "UI Implementation", text: "Converting designs into fast...", icon: <Palette size={20} color="white" /> },
  { title: "Backend Development", text: "Robust REST APIs...", icon: <Server size={20} color="white" /> },
  { title: "Database Design", text: "Efficient, normalized...", icon: <Database size={20} color="white" /> },
]


const ServiceSection = () =>{
  return(
    <div className="service">
      <div className="text_service">
        <h2 className="title">Services and solutions I provide</h2>
        <p className="text">From mobile to backend, I cover the full stack of building modern software products.</p>
      </div>
      <div className="service_dev">
        {card.map((item, index)=>(
          <ServiceCard key = {index} title={item.title} text = {item.text} icon={item.icon}></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default ServiceSection