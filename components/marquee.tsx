const items = [
  "Social Media Marketing",
  "SEO & Google Page 1",
  "Web Design & UI/UX",
  "Meta & IG Ads",
  "Brand Growth Strategy",
  "Analytics & Conversions",
  "Landing Pages",
  "Tailwind CSS",
  "React & Next.js",
  "Framer Motion",
  "Three.js 3D",
]

export function Marquee() {
  return (
    <section aria-label="Specialties" className="relative overflow-hidden border-y border-white/10 bg-[#07080a] py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-widest text-[#64748b] flex items-center">
            {item}
            <span className="ml-12 text-[#46b7ff]">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
