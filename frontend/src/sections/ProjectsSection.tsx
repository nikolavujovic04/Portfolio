import TopButton from "../components/TopButton"
import ProjectCard from "../components/ProjectCard"
import type { ProjectData } from "../components/ProjectCard"
import AppImage from '../assets/appdev.jpg'
import '../styles/projects.css'

const projects: ProjectData[] = [
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    category: "Mobile Apps",
    image: AppImage,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
]

const ProjectsSection = () => {
  return(
    <div className="projects">
      <TopButton dot={false} text={"PROJECTS"} color={"white"} hoverable={false} ></TopButton>
      <h2>Selected work and personal projects</h2>
      <p>A mix of client work and things I've built to learn and explore</p>
      <div className="buttons"></div>
      <div className="card_section">
        {projects.map((project, index)=>(
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>
    </div>
    
  )
}

export default ProjectsSection