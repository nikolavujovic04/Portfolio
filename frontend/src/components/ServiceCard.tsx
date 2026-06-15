interface CardProps {
  title: string
  text: string
  icon: React.ReactNode
}

const ServiceCard = ({ title, text, icon }: CardProps) => {
  return (
    <div className='service_card'>
      <div className='icon'>{icon}</div>
      <div className='card_title'>{title}</div>
      <div className='card_text'>{text}</div>
    </div>
  )
}

export default ServiceCard