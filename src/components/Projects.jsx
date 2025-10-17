import { resume } from "../data/resume"
import ProjectCard from "./ProjectCard.jsx"

export default function Projects() {
  const projects = resume.projects
  return (
    <section id="projetos">
      <div className="max">
        <h2 style={{fontSize:'28px', fontWeight:800, marginBottom:16}}>Projetos em destaque</h2>
        <div className="grid grid-2">
          {projects.map((p,i)=> <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  )
}