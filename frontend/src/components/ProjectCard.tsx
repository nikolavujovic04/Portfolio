import TopButton from './TopButton'
import { GitBranch } from 'lucide-react'
import '../styles/projects.css'

export interface ProjectData {
  category: string
  image: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
}

interface ProjectCardProps {
  project: ProjectData
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { category, image, title, description, tags, githubUrl } = project
  return (
    <div className='project_card'>
      <div className='project_image_wrapper'>
        <div className='project_category'>
          <TopButton dot={false} text={category} color="rgba(255,255,255,0.8)" hoverable={false} />
        </div>
        <img src={image} alt={title} className='project_image' />
      </div>

      <div className='project_info'>
        <h3 className='project_title'>{title}</h3>
        <p className='project_description'>{description}</p>

        <div className='project_tags'>
          {tags.map((tag, i) => (
            <TopButton key={i} dot={false} text={tag} color="rgba(255,255,255,0.8)" hoverable={false} />
          ))}
        </div>

        <div className='project_buttons'>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className='project_btn'>
              <GitBranch size={16} />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard