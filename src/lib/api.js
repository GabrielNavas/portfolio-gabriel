// src/lib/api.js
export async function getProjects() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch("http://localhost:8080/api/projects", {
      signal: controller.signal,
      headers: { "Accept": "application/json" },
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // padroniza para o shape esperado pelos cards
    return data.map((p) => ({
      id: p.id,
      title: p.name,
      description: p.description || "",
      tags: [
        ...(p.category ? [p.category] : []),
        ...(p.score != null ? [`Score ${String(p.score).replace(".", ",")}`] : []),
      ],
      githubUrl: p.githubUrl || "",
    }));
  } catch {
    return null; // deixa o Projects decidir usar fallback
  }
}
