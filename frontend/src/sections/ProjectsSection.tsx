import { useEffect, useRef } from 'react'
import TopButton from "../components/TopButton"
import ProjectCard from "../components/ProjectCard"
import type { ProjectData } from "../components/ProjectCard"
import Site1 from '../assets/site1.png'
import Site2 from '../assets/site2.png'
import Task from '../assets/task.png'
import Quiz from '../assets/quiz.png'
import Reservation from '../assets/rezervacija.png'
import '../styles/projects.css'

const projects: ProjectData[] = [
  {
    category: "Web App",
    image: Site1,
    title: "Barber Shop",
    description: "A full-stack barber salon web app with online booking, service selection, admin dashboard, and email notifications, built with Laravel and React.",
    tags: ["Laravel", "React", "MySQL", "Docker"],
    githubUrl: "https://github.com/...",
  },
  {
    category: "Web Development",
    image: Site2,
    title: "KarijeraHub",
    description: "Full-stack job board platform for searching and applying to job listings and internships. Backend built with Laravel REST API with three user roles, frontend in React with authentication and real-time job listings.",
    tags: ["React", "PHP", "Laravel", "MySQL", "Sanctum", "Abstract API"],
    githubUrl: "https://github.com/elab-development/serverske-veb-tehnologije-2025-26-deljenjeposlovaipraksi_2023_0383",
  },
  {
    category: "Mobile Apps",
    image: Task,
    title: "FitTrack Android",
    description: "A native fitness tracker with workout logging, progress charts, and activity rings built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    githubUrl: "https://github.com/...",
  },
  {
    category: "Mobile Apps",
    image: Quiz,
    title: "QuizMaster",
    description: "A programming knowledge quiz app with real-time leaderboards, streak tracking, and multiple categories including Kotlin, Python, JavaScript and Algorithms. Built with modern Android architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt"],
    githubUrl: "https://github.com/...",
  },
  {
    category: "Desktop App",
    image: Reservation,
    title: "Hotel Reservation System",
    description: "A client-server hotel reservation management application built with Java Sockets and TCP/IP. Features multithreaded server for concurrent clients, MVC architecture, Repository pattern, and MySQL database integration for managing reservations, rooms, and guests.",
    tags: ["Java", "Java Sockets", "TCP/IP", "MySQL", "Swing", "MVC"],
    githubUrl: "https://github.com/...",
  },
]



const ProjectsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.project_card')
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
    <div className="projects">
      <TopButton dot={false} text={"PROJECTS"} color={"white"} hoverable={false} />
      <h2>Selected work and personal projects</h2>
      <p>A mix of client work and things I've built to learn and explore</p>
      <div className="buttons"></div>
      <div className="card_section" ref={cardsRef}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection