import '../styles/stats.css'

const stats = [
  { title: "4+", text: "Years Coding"},
  { title: "5+", text: "projects"},
  { title: "10+", text: "Technologies"},
  { title: "100%", text: "passion"}
]

const StatsSection = () =>{ 
  return(
    <div className="stats_section">
      {stats.map(stat =>(
        <div className="components">
          <h2>{stat.title}</h2>
          <p>{stat.text}</p>
        </div>
      ) 
        )}
    </div>
  )
}

export default StatsSection