const links = [
  {
  label: "Email",
  href: "mailto:wonde2024@gmail.com",
  value: "wondifraw.emiru@gmail.com",
},
  {
    label: "GitHub",
    href: "https://github.com",
    value: "github.com/Wonde497",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    value: "linkedin.com/in/wondifraw-emiru",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-slate-800/60"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Contact</h2>
        <p className="mb-10 max-w-lg text-muted">
          Have a project in mind or want to connect? Reach out — I&apos;d love
          to hear from you.
        </p>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-baseline gap-3"
              >
                <span className="w-20 text-sm font-semibold text-slate-400">
                  {link.label}
                </span>
                <span className="text-muted transition-colors group-hover:text-accent">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <footer className="mt-20 border-t border-slate-800/60 pt-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Wondifraw. Built with Next.js & Tailwind.
        </footer>
      </div>
    </section>
  );
}
