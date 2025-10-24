// src/components/Projects.jsx
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/api";
import { fallbackProjects as STATIC_PROJECTS } from "@/data/projects.fallback";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState(STATIC_PROJECTS);
  const [online, setOnline] = useState(false);

  async function loadOnline() {
    const data = await getProjects();
    if (data && data.length) {
      setProjects(data);
      setOnline(true);
    } else {
      setProjects(STATIC_PROJECTS);
      setOnline(false);
    }
  }

  useEffect(() => {
    // carrega offline por padrão
    setProjects(STATIC_PROJECTS);
  }, []);

  return (
    <section id="projetos" style={{ scrollMarginTop: 80 }}>
      <div className="max">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h2>Projetos em destaque</h2>

          <button
            className="badge"
            aria-pressed={online}
            onClick={loadOnline}
            title="Tentar buscar do backend (localhost:8080)"
          >
            {online ? "Dados ao vivo (ON)" : "Dados ao vivo"}
          </button>
        </div>

        <div className="grid" style={{ marginTop: 12 }}>
          {projects.map((p) => (
            <ProjectCard
              key={p.id ?? p.title}
              title={p.title}
              description={p.description}
              tags={p.tags}
              githubUrl={p.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
