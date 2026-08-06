import Image from "next/image"

const projects = [
  {
    title: "Dream Power Realty",
    category: "Web Development",
    result: "Live Site ↗",
    image: "/work-dreampower-realty.jpg",
    desc: "High-converting real estate website for GUJRERA plots & luxury apartments in Science City.",
    url: "https://www.dreampowerrealty.com",
  },
  {
    title: "Vandit Gandhi Physio",
    category: "Web UI/UX",
    result: "Live Site ↗",
    image: "/work-vandit-physio.jpg",
    desc: "Healthcare & sports rehab platform featuring online session bookings & patient care.",
    url: "https://vandit-gandhi-physiotherapy.vercel.app/",
  },
  {
    title: "SMM Brand Campaign",
    category: "Social Media (SMM)",
    result: "+184% Reach",
    image: "/work-social-campaign.png",
    desc: "Targeted SMM content strategy, viral reels, and paid campaigns tripling reach.",
    url: "",
  },
  {
    title: "Local SEO & Ranking",
    category: "SEO Strategy",
    result: "#1 Google Rank",
    image: "/work-seo-dashboard.png",
    desc: "Technical SEO overhaul and keyword optimization bringing key search terms to Page 1.",
    url: "",
  },
]

export function Work() {
  return (
    <section id="work" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Results that speak
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            A snapshot of recent client projects across Web Development, SMM, and SEO.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl border border-border/80 bg-card p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/30">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-bold text-foreground backdrop-blur shadow-xs">
                  {p.category}
                </span>
                {p.result && (
                  <span className="absolute right-2.5 bottom-2.5 rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-background shadow-xs">
                    {p.result}
                  </span>
                )}
              </div>

              <div className="mt-3.5 flex flex-1 flex-col justify-between gap-3 px-0.5 pb-0.5">
                <div>
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>

                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center justify-between rounded-lg border border-foreground/20 bg-secondary/30 px-3 py-2 text-[11px] font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    <span>Visit Live Website</span>
                    <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <span className="mt-1 inline-flex items-center justify-between rounded-lg border border-border/50 bg-secondary/10 px-3 py-2 text-[11px] font-bold text-muted-foreground">
                    <span>Client Campaign</span>
                    <span>✓</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
