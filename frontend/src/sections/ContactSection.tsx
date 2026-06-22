import ContactCard from '../components/ContactCard'
import { Send } from 'lucide-react'
import { GitCommitHorizontal, Mail, Link, MapPin } from 'lucide-react'
import '../styles/contact.css'

const card_prop = [
  { title: 'EMAIL', text: 'hello@marko.dev', icon: <Mail size={20} color="white" /> },
  { title: 'GITHUB', text: 'github.com/marko', icon: <GitCommitHorizontal size={20} color="white" /> },
  { title: 'LINKEDIN', text: 'in/marko-petrovic', icon: <Link size={20} color="white" /> },
  { title: 'LOCATION', text: 'Belgrade, Serbia', icon: <MapPin size={20} color="white" /> }
]

const ContactSection = () => {
  return (
    <div className='contact_section'>

      <div className='contact_header'>
        <h2>Let's build something together</h2>
        <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
      </div>

      <div className='contact_body'>
        <div className='contact_left'>
          {card_prop.map((card, index) => (
            <ContactCard key={index} title={card.title} icon={card.icon} text={card.text} />
          ))}
        </div>

        <div className='contact_right'>
          <div className="contact_form">
            <div className="form_row">
              <div className="form_group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form_group">
                <label>Email</label>
                <input type="text" placeholder="you@example.com" />
              </div>
            </div>

            <div className="form_group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>

            <div className="form_group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows={5} />
            </div>

            <button className="send_btn">
              <Send size={16} />
              Send Message
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactSection