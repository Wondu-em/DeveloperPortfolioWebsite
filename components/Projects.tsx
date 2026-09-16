const projects = [
  {
    title: "Production Point of sales applications",
    description:
      "A collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces.",
    tags: ["Kotlin", "Java", "SQLite", "REST APIs"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Teminal Management System (TMS)",
    description:
      "Dashboard for tracking developer productivity metrics with GitHub integration and customizable reports.",
    tags: ["React", "Node.js", "Chart.js", "REST API"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Powered Job Searcher",
    description:
      "A collection of command-line utilities for automating common development workflows and project scaffolding.",
    tags: ["Python", "Click", "Open Source"],
    github: "https://github.com",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding border-t border-slate-800/60"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
