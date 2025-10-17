export default function ProjectCard({ title, description, stack=[], links={} }) {
  return (
    <article className="card" style={{padding:20}}>
      <header style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
        <h4 style={{margin:0, fontSize:'18px'}}>{title}</h4>
        {links.github && <a className="badge" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
      </header>
      <p className="muted" style={{marginTop:8}}>{description}</p>
      {stack.length > 0 && (
        <ul style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:12, padding:0, listStyle:'none'}}>
          {stack.map((s,i)=>(<li key={i} className="badge">{s}</li>))}
        </ul>
      )}
    </article>
  )
}