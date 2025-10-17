export default function Footer() {
  return (
    <footer>
      <div className="max" style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
        <small>© {new Date().getFullYear()} Gabriel Navarro</small>
        <div style={{display:'flex', gap:10}}>
          <a className="link" href="https://linkedin.com/in/navarrogabriel" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link" href="https://github.com/GabrielNavas" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  )
}