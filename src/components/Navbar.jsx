export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="max">
        <a href="#" className="link" style={{fontWeight:700}}>Gabriel Navarro</a>
        <ul style={{display:'flex',gap:18,alignItems:'center',listStyle:'none',margin:0,padding:0}}>
          <li><a className="link" href="#projetos">Projetos</a></li>
          <li><a className="link" href="#sobre">Sobre</a></li>
          <li><a className="link" href="#/curriculo">Currículo</a></li>
          <li><a className="badge" href="/CV_Gabriel.pdf" download="CV_Gabriel_Navarro.pdf">Baixar PDF</a></li>
          <li><a className="badge" href="https://linkedin.com/in/navarrogabriel" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="badge" href="https://github.com/GabrielNavas" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  )
}