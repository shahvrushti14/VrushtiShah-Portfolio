const items = [
  "Social Media Marketing",
  "SEO",
  "Web Design",
  "Content Strategy",
  "Paid Ads",
  "Brand Growth",
  "Analytics",
  "Landing Pages",
]

export function Marquee() {
  return (
    <section aria-label="Specialties" className="border-y border-border bg-foreground py-4 text-background">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 font-display text-sm font-medium uppercase tracking-widest">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
