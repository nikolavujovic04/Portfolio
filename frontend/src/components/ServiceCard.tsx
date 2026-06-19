import TopButton from './TopButton'

interface CardProps {
  title: string
  icon: React.ReactNode
  text?: string
  tags?: string[]
  percent?: number
  variant?: 'service' | 'tech'
}

const ServiceCard = ({ title, text, icon, tags, percent, variant = 'service' }: CardProps) => {
  return (
    <div className='service_card'>

      <div className='card_top_row'>
        <div className='icon'>{icon}</div>
        {variant === 'tech' && percent !== undefined && (
          <div className='percent_circle'>
            <svg viewBox="0 0 36 36" width="48" height="48">
              <path
                d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0-32"
                fill="none"
                stroke="#2e2e2e"
                strokeWidth="3"
              />
              <path
                d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0-32"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeDasharray={`${percent}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <span className='percent_text'>{percent}%</span>
          </div>
        )}
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