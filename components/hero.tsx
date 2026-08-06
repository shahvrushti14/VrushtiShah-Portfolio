export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-16 pb-10 md:px-8 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for projects
            </span>
            <span aria-hidden className="text-border">/</span>
            <span>Ahmedabad, Gujarat</span>
          </div>
          <div className="hidden sm:flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 shadow-sm">
            <div className="flex items-center justify-center rounded-full bg-white p-0.5">
              <img src="/logo-vs-icon.png" alt="VS Monogram" className="h-6 w-auto object-contain" />
            </div>
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">Official Brand</span>
          </div>
        </div>

        <h1 className="mt-8 font-display text-[15vw] font-bold leading-[0.86] tracking-tight text-balance md:text-[9.5rem]">
          Digital
          <br />
          <span className="text-primary">Marketing</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I&apos;m Vrushti Shah — a digital marketer helping brands grow with
            data-driven <span className="text-foreground">social media marketing</span>,{" "}
            <span className="text-foreground">SEO</span> that ranks, and{" "}
            <span className="text-foreground">web design</span> that converts.
          </p>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              View selected work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
