import { resume } from "../data/resume"

function Section({ title, children }) {
  return (
    <section>
      <div className="max">
        <h3 style={{fontSize:'22px', fontWeight:700, marginBottom:12}}>{title}</h3>
        <div className="card" style={{padding:20}}>{children}</div>
      </div>
    </section>
  )
}

export default function ResumePage() {
  const r = resume
  return (
    <div style={{paddingTop:20}}>
      <section className="gradient">
        <div className="max" style={{paddingTop:24}}>
          <h2 style={{fontSize:'32px', fontWeight:800}}>Currículo</h2>
          <p className="muted" style={{maxWidth:800}}>{r.about}</p>
          <div style={{display:'flex', gap:10, flexWrap:'wrap', marginTop:12}}>
            <a className="badge" href={r.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="badge" href={r.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="badge" href={r.links.email}>Email</a>
            <a className="badge" href={r.links.cvPdf} download="CV_Gabriel_Navarro.pdf">Baixar PDF</a>
          </div>
        </div>
      </section>

      <Section title="Habilidades Técnicas">
        <div className="grid">
          <p><b>Linguagens & Front-end:</b> {r.skills.linguagensFrontend.join(", ")}</p>
          <p><b>Back-end:</b> {r.skills.backend.join(", ")}</p>
          <p><b>Banco de Dados:</b> {r.skills.databases.join(", ")}</p>
          <p><b>DevOps & Cloud:</b> {r.skills.devopsCloud.join(", ")}</p>
          <p><b>Ferramentas:</b> {r.skills.ferramentas.join(", ")}</p>
          <p><b>Outros:</b> {r.skills.outros.join(", ")}</p>
        </div>
      </Section>

      <Section title="Experiência Profissional">
        <ul className="grid" style={{margin:0, paddingLeft:18}}>
          {r.experience.map((e, idx) => (
            <li key={idx}>
              <div style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
                <p style={{margin:'6px 0'}}><b>{e.role}</b> — <span className="muted">{e.company}</span></p>
                <span className="muted" style={{fontSize:13}}>{e.period}{e.location ? ` • ${e.location}` : ""}</span>
              </div>
              <ul className="muted">
                {e.bullets.map((b,i)=> <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Projetos Relevantes">
        <div className="grid grid-2">
          {r.projects.map((p, i) => (
            <article key={i} className="card" style={{padding:20}}>
              <header style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
                <h4 style={{margin:0, fontSize:'18px'}}>{p.title}</h4>
                {p.links?.github && <a className="badge" href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>}
              </header>
              <p className="muted" style={{marginTop:8}}>{p.description}</p>
              {p.stack?.length > 0 && <ul style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:12, padding:0, listStyle:'none'}}>{p.stack.map((s,j)=> <li key={j} className="badge">{s}</li>)}</ul>}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Formação Acadêmica">
        <ul className="grid">
          {r.education.map((e,i)=> (
            <li key={i} style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
              <p style={{margin:'6px 0'}}><b>{e.course}</b> — <span className="muted">{e.school}</span></p>
              <span className="muted" style={{fontSize:13}}>{e.period}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Cursos e Capacitações">
        <ul className="grid" style={{margin:0, paddingLeft:18}}>
          {r.courses.map((c,i)=> <li className="muted" key={i}>{c}</li>)}
        </ul>
      </Section>

      <Section title="Idiomas">
        <ul style={{display:'flex', gap:10, flexWrap:'wrap', margin:0, padding:0, listStyle:'none'}}>
          {r.languages.map((l,i)=> <li key={i} className="badge">{l.name} — {l.level}</li>)}
        </ul>
      </Section>

      <Section title="Diferenciais">
        <ul className="grid" style={{margin:0, paddingLeft:18}}>
          {r.differentials.map((d,i)=> <li className="muted" key={i}>{d}</li>)}
        </ul>
      </Section>
    </div>
  )
}