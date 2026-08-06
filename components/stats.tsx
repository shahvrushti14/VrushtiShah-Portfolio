const stats = [
  { value: "40+", label: "Projects delivered" },
  { value: "3.5x", label: "Avg. engagement lift" },
  { value: "90%", label: "Client retention" },
  { value: "4+", label: "Years of experience" },
]

export function Stats() {
  return (
    <section className="bg-primary px-5 py-16 text-primary-foreground md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-display text-5xl font-bold tracking-tight md:text-6xl">{s.value}</span>
            <span className="mt-2 text-sm text-primary-foreground/70">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
