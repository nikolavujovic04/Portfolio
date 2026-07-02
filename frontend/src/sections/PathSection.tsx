import TopButton from '../components/TopButton'
import PathCard from '../components/PathCard'
import type { PathData } from '../components/PathCard'
import { useEffect, useRef } from 'react'
import '../styles/path.css'

const paths: PathData[] = [
  {
    year: '2021',
    title: 'Started University',
    subtitle: 'Faculty of Organizational Sciences',
    description: 'Began studying Information Systems and Technologies, diving into the fundamentals of software and systems.',
    align: 'right'
  },
  {
    year: '2021 — 2022',
    title: 'Learning Foundations',
    subtitle: 'Self-taught & coursework',
    description: 'Mastered Java and Kotlin, built my first Android apps, and explored backend development.',
    align: 'left'
  },
  {
    year: '2022 — 2023',
    title: 'First Real Projects',
    subtitle: 'Personal & academic work',
    description: 'Shipped full-stack applications with React, Spring Boot, and databases — connecting all the pieces.',
    align: 'right'
  },
  {
    year: '2022 — 2023',
    title: 'First Real Projects',
    subtitle: 'Personal & academic work',
    description: 'Shipped full-stack applications with React, Spring Boot, and databases — connecting all the pieces.',
    align: 'left'
  },
  {
    year: '2022 — 2023',
    title: 'First Real Projects',
    subtitle: 'Personal & academic work',
    description: 'Shipped full-stack applications with React, Spring Boot, and databases — connecting all the pieces.',
    align: 'right'
  },
]

const PathSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = timelineRef.current?.querySelectorAll('.path_card, .timeline_dot')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )

    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className='path_section'>
      <div className='path_header'>
        <TopButton dot={false} text="JOURNEY" color="white" hoverable={false} />
        <h2>My path</h2>
        <p>Education, milestones, and the work that shaped me.</p>
      </div>

      <div className='path_timeline' ref={timelineRef}>
        <div className='timeline_line' />
        {paths.map((item, index) => (
          <div className='timeline_row' key={index}>
            <div className='timeline_left'>
              {item.align === 'left' && <PathCard data={item} />}
            </div>
            <div className='timeline_dot' />
            <div className='timeline_right'>
              {item.align === 'right' && <PathCard data={item} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PathSection