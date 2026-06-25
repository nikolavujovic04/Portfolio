import aboutImage from '../assets/aboutimg.png'
import '../styles/about.css'
import { useEffect, useRef } from 'react'
import TopButton from '../components/TopButton'

const techStack = ['Kotlin', 'Java','Android','Laravel','JavaScript','React','Firebase','SQL','Git','Docker','REST APIs']

const AboutSection = () => {
  const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.2 }
      )

      if (leftRef.current) observer.observe(leftRef.current)
      if (rightRef.current) observer.observe(rightRef.current)
      return () => observer.disconnect()
    }, [])

  return(
    <section className="about_section">
      <div className="about_left" ref={leftRef}>
        <img src={aboutImage} alt="" className='about_image' />
      </div>
      <div className='about_right' ref={rightRef}>
        <TopButton color='white' dot = {false} text = "ABOUT ME" hoverable={false}></TopButton>
        <h2>Engineering software <br/>with <span>curiosity and care</span></h2>

        <p>I'm a student at the <span>Faculty of Organizational Sciences</span>, 
          majoring in Information Systems and Technologies. My passion lies in software engineering — 
          designing systems that are both elegant and reliable.</p>

        <p>I focus on <span>mobile and web development</span>, with a growing interest in scalable architectures 
          and modern technologies. I love taking a project from an idea all the way to a shipped, polished product.</p>
          <p className='tech_label'>Tech stack</p>
        <div className='tech_stack'>
          {
            techStack.map(stack =>(
                <TopButton dot = {false} color='grey' text={stack} hoverable={true}></TopButton>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutSection