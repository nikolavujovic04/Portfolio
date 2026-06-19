interface ContactCardProps {
  title: string
  icon: React.ReactNode
  text?: string
}

const ContactCard = ({title, icon, text}: ContactCardProps) => {
  return(
    <div className="contact_card">
      <div className="icon_margz">
        <div className='icon'>{icon}</div>
      </div>
      <div className="text">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ContactCard