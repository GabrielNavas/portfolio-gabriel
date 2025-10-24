// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, tags = [], githubUrl }) {
  return (
    <article className="card" style={{ position: "relative" }}>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="badge"
          style={{ position: "absolute", top: 12, right: 12 }}
        >
          GitHub
        </a>
      )}
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p className="muted" style={{ marginBottom: 14 }}>{description}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((t, i) => (
          <span key={i} className="chip">{t}</span>
        ))}
      </div>
    </article>
  );
}
