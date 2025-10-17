export default function About() {
  return (
    <section id="sobre">
      <div className="max">
        <h2 style={{fontSize:'28px', fontWeight:800, marginBottom:16}}>Sobre mim</h2>
        <div className="card" style={{padding:20}}>
          <p className="muted">
            Sou o Gabriel, estudante de ADS (FIAP, conclusão 2025). Tenho base sólida em APIs REST, SQL e Docker, e busco aplicar práticas de Cloud e DevOps (Kubernetes, CI/CD) em projetos reais.
          </p>
          <p className="muted">
            Minha trajetória na Ericsson e na Embraer ensinou-me a trabalhar com qualidade, automação e confiabilidade — fundamentos que trago para o desenvolvimento de software. Acredito em tecnologia com propósito: soluções eficientes e sustentáveis (ESG) que geram impacto real.
          </p>
        </div>
      </div>
    </section>
  )
}