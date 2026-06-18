import aboutImage from '../assets/aboutimg.png'
import '../styles/about.css'
import TopButton from '../components/TopButton'

const techStack = ['Kotlin', 'Java','Android','Laravel','JavaScript','React','Firebase','SQL','Git','Docker','REST APIs']

const AboutSection = () => {
  return(
    <section className="about_section">
      <div className="about_left">
        <img src={aboutImage} alt="" className='about_image' />
      </div>
      <div className='about_right'>
        <TopButton color='white' dot = {false} text = "ABOUT ME" hoverable={false}></TopButton>
        <h2>Engineering software <br/>with <span>curiosity and care</span></h2>

        <p>I'm a student at the <span>Faculty of Organizational Sciences</span>, 
          majoring in Information Systems and Technologies. My passion lies in software engineering — 
          designing systems that are both elegant and reliable.</p>

        <p>I focus on <span>mobile and web development</span>, with a growing interest in scalable architectures 
          and modern technologies. I love taking a project from an idea all the way to a shipped, polished product.</p>
          <p>Tech stack</p>
        <div className='tech_stack'>
          {
            techStack.map(stack =>(
              <div className='tech_margins'>
                <TopButton dot = {false} color='grey' text={stack} hoverable={true}></TopButton>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutSection