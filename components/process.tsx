const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, audience, and competitors to understand exactly where the opportunities are.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "A clear, tailored roadmap across social, search, and web — with priorities and measurable targets.",
  },
  {
    n: "03",
    title: "Execute",
    desc: "Content goes live, pages get optimized, and the site gets built — everything designed to convert.",
  },
  {
    n: "04",
    title: "Grow & Report",
    desc: "Track, learn, and iterate. You get transparent reporting so you always know what's working.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-secondary/40 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
            A simple process, real results
          </h2>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col bg-card p-7">
              <span className="font-display text-5xl font-bold text-primary/25">{s.n}</span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
