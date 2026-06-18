import '../styles/topbtn.css'

const TopButton = ({dot, text}: {dot: boolean, text: string}) => {
  return(
    <div className='hero_badge'>
      {dot && <span className='hero_badge_dot'></span>}
      {text}
    </div>
  )
}

export default TopButton