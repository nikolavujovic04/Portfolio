import ContactCard from '../components/ContactCard'
import { GitCommitHorizontal, Mail, Link, MapPin} from 'lucide-react'
import '../styles/contact.css'


const card_prop = [
  {title: 'EMAIL', text: 'hello@marko.dev', icon: <Mail size={20} color="white" />},
  {title: 'GITHUB', text: 'github.com/marko', icon: <GitCommitHorizontal size={20} color="white" />},
  {title: 'LINKEDIN', text: 'in/marko-petrovic', icon: <Link size={20} color="white" />},
  {title: 'MapPin', text: 'in/marko-petrovic', icon: <MapPin size={20} color="white" />}
]

const ContactSection = () => {
  return (
    <div className='contact_Section'>
      <div className='contact_left'>
        {card_prop.map( card => (
          <div style={{marginBottom: 20}}>
            <ContactCard title={card.title} icon={card.icon} text={card.text}></ContactCard>
          </div>
        ))}
      </div>

      <div className='contact_right'>

      </div>
    </div>
    
  )
}

export default ContactSection
