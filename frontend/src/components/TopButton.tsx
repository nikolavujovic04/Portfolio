import '../styles/topbtn.css'
import { useState } from 'react'

const TopButton = ({dot, text, color = "rgba(255, 255, 255, 0.8)", hoverable = false}: {dot: boolean, text: string, color: string, hoverable: boolean}) => {
  const [hovered, setHovered] = useState(false)
  return(
    <div className='hero_badge' style={{
      color:color,
      backgroundColor: hovered && hoverable ? color: 'transparent',
      transition: 'background-color 0.2s ease'
    }}
    onMouseEnter={() => hoverable && setHovered(true)}
    onMouseLeave={() => hoverable && setHovered(false)}
    >
      {dot && <span className='hero_badge_dot'></span>}
      {text}
    </div>
  )
}

export default TopButton