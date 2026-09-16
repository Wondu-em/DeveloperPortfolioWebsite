export default function Hero() {
  return (
    <section className="section-padding flex min-h-screen items-center pt-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-sm text-accent">Software Engineer</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Wondifraw
          </span>
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted">
          I build clean, performant mobile applications with a focus on great
          developer experience and thoughtful user interfaces.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
