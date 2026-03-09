import { Metadata } from "next"
import Link from "next/link"
import { Heart, Briefcase, Users, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Ydelser | Lise Sandberg Coaching",
  description:
    "Udforsk mine coachingydelser: livscoaching, karrierecoaching, gruppeforløb og enkeltsamtaler. Professionel coaching i Odense.",
}

const services = [
  {
    icon: Heart,
    title: "Livscoaching",
    description: `Livscoaching handler om at skabe balance, mening og glæde i dit liv. Sammen udforsker vi dine værdier, drømme og mål, og finder vejen til at leve et liv i overensstemmelse med den, du virkelig er.

Gennem reflekterende samtaler og målrettede øvelser hjælper jeg dig med at identificere, hvad der holder dig tilbage, og hvordan du kan skabe positive forandringer. Uanset om det handler om relationer, selvværd eller livsvalg, er jeg her for at støtte dig.`,
    features: [
      "Afklaring af værdier og prioriteter",
      "Øget selvbevidsthed og selvaccept",
      "Håndtering af forandringer og udfordringer",
      "Skabe balance mellem arbejde og privatliv",
    ],
  },
  {
    icon: Briefcase,
    title: "Karrierecoaching",
    description: `Karrierecoaching er for dig, der ønsker klarhed og retning i dit arbejdsliv. Uanset om du overvejer et karriereskift, vil udnytte dit potentiale bedre, eller har brug for at navigere i en kompleks arbejdssituation, kan coaching hjælpe.

Jeg arbejder med dig om at identificere dine styrker, kompetencer og ambitioner. Sammen lægger vi en plan for, hvordan du når dine karrieremål og skaber et arbejdsliv, der giver mening og tilfredsstillelse.`,
    features: [
      "Karriereafklaring og målsætning",
      "Udvikling af lederskab og kommunikation",
      "Navigation i organisationsforandringer",
      "Work-life balance og stresshåndtering",
    ],
  },
  {
    icon: Users,
    title: "Gruppeforløb",
    description: `Gruppecoaching giver en unik mulighed for at lære og vokse sammen med andre. I et trygt og fortroligt rum deler vi erfaringer, giver hinanden feedback og støtter hinandens udvikling.

Gruppeforløb er ideelle for dem, der ønsker fællesskabets kraft og inspiration fra andre på lignende rejser. Jeg faciliterer sessioner, der kombinerer individuel refleksion med gruppeøvelser og dialoger.`,
    features: [
      "Læring gennem fælles erfaringer",
      "Støtte og inspiration fra andre deltagere",
      "Netværk med ligesindede",
      "Økonomisk alternativ til individuel coaching",
    ],
  },
  {
    icon: Sparkles,
    title: "Enkeltsamtaler",
    description: `Enkelte coachingsessioner er perfekte, hvis du har et specifikt emne eller udfordring, du gerne vil arbejde med. Det kan være forberedelse til en vigtig samtale, beslutningstagning eller bare behov for et nyt perspektiv.

En enkelt session kan give overraskende meget indsigt og klarhed. Det er også en god måde at prøve coaching, før du forpligter dig til et længere forløb.`,
    features: [
      "Fokuseret arbejde på ét emne",
      "Hurtig indsigt og nye perspektiver",
      "Ingen langvarig forpligtelse",
      "Ideel som supplement til andre forløb",
    ],
  },
]

export default function YdelserPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-warm-blush">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest uppercase text-warm-taupe">
              Mine ydelser
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-deep-brown">
              Ydelser
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-warm-taupe text-lg leading-relaxed max-w-2xl mx-auto">
              Min tilgang til coaching er baseret på nærvær, tillid og en dyb tro 
              på, at du har alle svarene i dig. Jeg er her for at hjælpe dig med 
              at finde dem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-24 ${index % 2 === 0 ? "bg-off-white" : "bg-warm-blush"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon side */}
              <FadeIn className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-soft-terracotta/30 to-pastel-blue/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-off-white/80 flex items-center justify-center shadow-lg">
                      <service.icon className="w-16 h-16 text-warm-taupe" />
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Content side */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <FadeIn>
                  <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown">
                    {service.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={100}>
                  <div className="mt-6 text-warm-taupe leading-relaxed space-y-4">
                    {service.description.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </FadeIn>
                <FadeIn delay={200}>
                  <ul className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-warm-taupe"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-soft-terracotta flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-pastel-blue">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown">
              Klar til at tage det første skridt?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-warm-taupe text-lg leading-relaxed">
              Kontakt mig for en uforpligtende samtale om, hvordan jeg kan hjælpe dig.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
            >
              Kontakt mig for at høre mere
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
