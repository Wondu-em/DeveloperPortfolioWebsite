const skills = [
  "Kotlin",
  "Java",
  "next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-slate-800/60">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">About</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a software engineer who enjoys turning complex problems
              into simple, elegant solutions. I work across the stack — from
              polished frontends to reliable backend services.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new tools, contributing
              to open source, or refining my craft one project at a time.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
