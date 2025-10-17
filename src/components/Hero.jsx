export default function Hero() {
  return (
    <section className="gradient">
      <div className="max" style={{paddingTop:48}}>
        <p className="badge">Full Stack • Cloud • DevOps</p>
        <h1 style={{fontSize:'40px', fontWeight:800, marginTop:8, marginBottom:8}}>
          Desenvolvedor <span style={{color:'var(--brand)'}}>Full Stack</span> em formação
        </h1>
        <p className="muted" style={{maxWidth:720}}>
          Base sólida em APIs REST, SQL e Docker. Interesse em Cloud/DevOps (Kubernetes, CI/CD) e soluções com impacto sustentável (ESG).
        </p>
        <div style={{display:'flex', gap:12, marginTop:16, flexWrap:'wrap'}}>
          <a className="btn" href="#projetos">Ver projetos</a>
          <a className="btn-ghost" href="#/curriculo">Ver currículo</a>
        </div>
      </div>
    </section>
  )
}