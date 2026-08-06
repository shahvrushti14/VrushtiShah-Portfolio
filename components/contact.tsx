import { Mail, ArrowUpRight } from "lucide-react"

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/vrushtis14/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shah-vrushti-396169357/" },
  { label: "WhatsApp", href: "https://wa.me/919428313807" },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border/80 bg-secondary/20 px-5 py-20 text-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Let&apos;s work together</p>

        <h2 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance text-foreground md:text-8xl">
          Ready to grow your brand?
        </h2>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:shahvrushti426@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-base font-bold text-background transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-5 w-5" strokeWidth={2} />
            shahvrushti426@gmail.com
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-bold text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
              >
                {s.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-foreground/15 pt-8 text-sm text-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white p-2.5 px-4 shadow-sm border border-slate-200 flex items-center justify-center">
              <img
                src="/logo-vs-full.png"
                alt="Vrushti Shah — Digital Marketing | Web Development"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </div>
          </div>
          <p className="font-semibold text-foreground">Ahmedabad, Gujarat · © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
