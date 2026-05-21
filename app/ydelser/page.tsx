import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Heart, Users } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Ydelser | Lise Sandberg Coaching",
  description:
    "Udforsk mine coachingydelser: personlige coachingforløb og skræddersyede erhvervsforløb. Professionel coaching i Odense.",
}

const services = [
  {
    image: "/lise-forloeb.webP",
    title: "Personligt Coachingforløb",
    description: `Et coachingforløb hos mig er for dig, der ønsker at skabe større ro, klarhed og sammenhæng i dit liv.\n\nMåske oplever du indre uro, udbrændthed eller en følelse af, at noget ikke helt stemmer overens med det, der er vigtigt for dig. Måske ønsker du i det hele taget at skabe en forandring.\n\nI forløbet undersøger vi det, der fylder for dig, gør det mere konkret, så du bliver bevidst om dine værdier og handlemønstre.\n\nJeg coacher og stiller spørgsmålene. Du reflekterer og finder de svar, der giver mening for dig.\n\nNår vi har afklaret, hvad du ønsker at arbejde med, sætter vi en retning og arbejder videre med små skridt, delmål og øvelser, som kan integreres i din hverdag.\n\nI forløbet arbejder vi med at:`,
    features: [
      "skabe en større bevidsthed om dine mønstre og vaner",
      "definere dine værdier og det der er vigtigt for dig",
      "sætte realistiske mål og delmål",
      "Styrke Life-Balance og accountability",
      "skabe varig positiv forandring gennem små øvelser, der gentages igen og igen",
    ],
    afterFeatures: `Samtalerne foregår i min praksis, online eller som walk and talk i naturen omkring os, netop naturen skaber et særligt rum for nærvær, refleksion og ro.\n\nHver samtale starter og slutter med en kort groundingøvelse, som hjælper dig med at lande i samtalen og samle op, inden du går videre.`,
    practical: [
      "6 samtaler á 60 minutter",
      "Forløb over 3 måneder",
      "Pris: 8.000kr. inkl. moms",
      "Samtaler i praksis, i naturen eller online.",
    ],
  },
  {
    image: "/coaching-erhverv.webP",
    title: "Erhverv",
    description: `Jeg tilbyder også skræddersyede forløb til virksomheder, der ønsker at skabe bedre trivsel, klarhed og retning for deres medarbejdere eller ledere.\n\nMåske oplever I pres i hverdagen og har brug for et rum til refleksion og udvikling. Et coachingforløb kan skabe større overblik, forebygge stress og styrke balancen mellem arbejdsliv og privatliv.\n\nForløbet tilpasses jeres specifikke behov. Kontakt mig for en uforpligtende samtale om, hvordan vi kan skabe et forløb, der giver mening for jer.`,
  },
]

export default function YdelserPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
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
              Her finder du en oversigt over mine coachingforløb. Uanset om det er et personligt forløb eller erhvervsrettet coaching, er fokus altid på ro og udvikling.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <React.Fragment key={service.title}>
          <section
            id={service.title === "Erhverv" ? "erhverv" : undefined}
            className="py-40 bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Media side */}
                <div className={`space-y-8 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <FadeIn>
                    {service.image ? (
                      <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className={
                            service.title === "Erhverv"
                              ? "object-cover object-[85%_center]"
                              : "object-cover"
                          }
                          priority={index === 0}
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-soft-terracotta/30 to-pastel-blue/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-off-white/80 flex items-center justify-center shadow-lg">
                            {service.icon && <service.icon className="w-16 h-16 text-warm-taupe" />}
                          </div>
                        </div>
                      </div>
                    )}
                  </FadeIn>

                  {service.practical && (
                    <FadeIn delay={100} className="hidden lg:block">
                      <div className="max-w-md mx-auto w-full pt-4">
                        <h3 className="font-serif text-2xl text-deep-brown mb-6">
                          Praktisk information
                        </h3>
                        <ul className="space-y-1">
                          {service.practical.map((item, i) => (
                            <li
                              key={`practical-desktop-${i}`}
                              className="flex items-start gap-3 text-warm-taupe"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-deep-brown flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  )}
                </div>

                {/* Content side */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <FadeIn>
                    <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown">
                      {service.title}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={100}>
                    <div className="mt-6 text-warm-taupe leading-relaxed space-y-6">
                      {service.description.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </FadeIn>
                  {service.features && service.features.length > 0 && (
                    <FadeIn delay={200}>
                      <ul className="mt-8 space-y-5">
                        {service.features.map((feature, i) => (
                          <li
                            key={`${service.title}-${i}`}
                            className="flex items-start gap-3 text-warm-taupe"
                          >
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-soft-terracotta flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </FadeIn>
                  )}
                  {"afterFeatures" in service && service.afterFeatures && (
                    <FadeIn delay={300}>
                      <div className="mt-8 text-warm-taupe leading-relaxed space-y-6">
                        {(service.afterFeatures as string).split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </FadeIn>
                  )}

                  {service.practical && (
                    <FadeIn delay={100} className="lg:hidden">
                      <div className="max-w-md mx-auto w-full pt-4">
                        <h3 className="font-serif text-2xl text-deep-brown mb-6">
                          Praktisk information
                        </h3>
                        <ul className="space-y-1">
                          {service.practical.map((item, i) => (
                            <li
                              key={`practical-mobile-${i}`}
                              className="flex items-start gap-3 text-warm-taupe"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-deep-brown flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  )}

                </div>
              </div>
            </div>
          </section>

        </React.Fragment>
      ))}

      {/* CTA */}
      <section className="py-32 bg-[#c2b2a7]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Klar til at tage det første skridt?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-white text-lg leading-relaxed">
              Hvis du er nysgerrig på om et forløb er noget for dig, er du velkommen til at kontakte mig for en uforpligtende forsamtale.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-warm-taupe text-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
            >
              Kontakt mig
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
