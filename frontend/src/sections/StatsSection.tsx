import { useEffect, useRef, useState } from 'react'
import '../styles/stats.css'

interface StatProps {
  value: number
  suffix?: string
  label: string
}

const StatItem = ({ value, suffix = '', label }: StatProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
  const duration = 2000
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const eased = 1 - Math.pow(1 - progress, 3)

    setCount(Math.floor(eased * value))

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      setCount(value)
    }
  }

  requestAnimationFrame(animate)
}, [value])

  return (
    <div className='components'>
      <h2>{count}{suffix}</h2>
      <p>{label}</p>
    </div>
  )
}

const StatsSection = () => {
  return (
    <div className='stats_section'>
      <StatItem value={3} suffix="+" label="Years of Experience" />
      <StatItem value={20} suffix="+" label="Projects Completed" />
      <StatItem value={15} suffix="+" label="Technologies Used" />
      <StatItem value={100} suffix="%" label="Client Satisfaction" />
    </div>
  )
}

export default StatsSection