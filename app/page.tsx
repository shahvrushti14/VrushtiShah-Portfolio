import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ScrollVideoHero } from "@/components/scroll-video-hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Work } from "@/components/work"
import { Stats } from "@/components/stats"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { DayNightBackground } from "@/components/day-night-background"

export default function Page() {
  return (
    <>
      <DayNightBackground />
      <SiteHeader />
      <main>
        <Hero />
        <ScrollVideoHero />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Stats />
        <Faq />
      </main>
      <Contact />
    </>
  )
}
