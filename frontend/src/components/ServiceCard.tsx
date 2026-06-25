import TopButton from './TopButton'

interface CardProps {
  title: string
  icon: React.ReactNode
  text?: string
  tags?: string[]
  percent?: number
  variant?: 'service' | 'tech'
}

const ServiceCard = ({ title, text, icon, tags, variant = 'service' }: CardProps) => {
  return (
    <div className='service_card'>

      <div className='card_top_row'>
        <div className='icon'>{icon}</div>
      </div>

      <div className='card_title'>{title}</div>

      {variant === 'service' && text && (
        <div className='card_text'>{text}</div>
      )}

      {variant === 'tech' && tags && (
        <div className='card_tags'>
          {tags.map((tag, i) => (
            <TopButton key={i} dot={false} text={tag} color="rgba(255,255,255,0.8)" hoverable={false} />
          ))}
        </div>
      )}

    </div>
  )
}

export default ServiceCard