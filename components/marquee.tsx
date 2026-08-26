const items = [
  "Social Media Marketing",
  "SEO & Search Optimization",
  "Web Design & UI/UX",
  "Meta & Instagram Ads",
  "Brand Growth Strategy",
  "Analytics & Conversions",
  "Landing Pages",
]

export function Marquee() {
  return (
    <section aria-label="Specialties" className="border-y border-white/20 bg-slate-900/60 py-4 text-white backdrop-blur-md">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 font-display text-xs font-bold uppercase tracking-widest text-slate-200">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
