import '../styles/path.css'

export interface PathData {
  year: string
  title: string
  subtitle: string
  description: string
  align: 'left' | 'right'
}

interface PathCardProps {
  data: PathData
}

const PathCard = ({ data }: PathCardProps) => {
  const { year, title, subtitle, description, align } = data
  return (
    <div className={`path_card ${align}`}>
      <span className='path_year'>{year}</span>
      <h3 className='path_title'>{title}</h3>
      <p className='path_subtitle'>{subtitle}</p>
      <p className='path_description'>{description}</p>
    </div>
  )
}

export default PathCard