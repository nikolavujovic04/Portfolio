import { useEffect, useRef, useState } from 'react'
import '../styles/stats.css'

interface StatProps {
  value: number
  suffix?: string
  label: string
}

const StatItem = ({ value, suffix = '', label }: StatProps) => {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          setVisible(true)

          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
            else setCount(value)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className={`components ${visible ? 'visible' : ''}`} ref={ref}>
      <h2>{count}{suffix}</h2>
      <p>{label}</p>
    </div>
  )
}

const StatsSection = () => {
  return (
    <div className='stats_section'>
      <StatItem value={3} suffix="+" label="Years of Experience" />
      <div className='stats_divider' />
      <StatItem value={20} suffix="+" label="Projects Completed" />
      <div className='stats_divider' />
      <StatItem value={15} suffix="+" label="Technologies Used" />
      <div className='stats_divider' />
      <StatItem value={100} suffix="%" label="Client Satisfaction" />
    </div>
  )
}

export default StatsSection