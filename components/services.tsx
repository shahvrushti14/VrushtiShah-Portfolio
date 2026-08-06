import { Share2, Search, MonitorSmartphone } from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    tag: "SMM",
    desc: "Content that stops the scroll. I plan, create, and manage social campaigns that build community and turn followers into customers.",
    points: ["Content calendars & creatives", "Instagram, LinkedIn & Meta ads", "Community & engagement growth"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    tag: "SEO",
    desc: "Get found by the people already searching for you. On-page, technical, and content SEO that climbs rankings and holds them.",
    points: ["Keyword & competitor research", "On-page & technical fixes", "Content that ranks & converts"],
  },
  {
    icon: MonitorSmartphone,
    title: "Web Design",
    tag: "Web",
    desc: "Fast, modern, conversion-focused websites. Designs that look sharp on every screen and are built to turn visitors into leads.",
    points: ["Landing pages & full sites", "Responsive, accessible UI", "SEO-ready & performant"],
  },
]

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What I do</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
              Services built to grow your brand
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            Three focused offerings that work together — from getting seen, to
            getting ranked, to getting a site that closes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
