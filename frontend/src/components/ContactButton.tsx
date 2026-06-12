import '../styles/button.css'

function ContactButton({showArrow = false}: {showArrow?: boolean}) {
  return(
    <button className="contact_button">
      Contact Me
      {showArrow && <span className="arrow">→</span>}
    </button>
  )
}

export default ContactButton