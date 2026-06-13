import '../styles/button.css'

function ContactButton({showArrow = false, variant = 'primary', label = 'Contact Me'}: {showArrow?: boolean, variant?: 'primary' | 'secondary', label?: string}) {
  return(
    <button className={`contact_button ${variant === 'secondary' ? 'contact_button--secondary' : ''}`}>
      {label}
      {showArrow && <span className="arrow">↗</span>}
    </button>
  )
}

export default ContactButton