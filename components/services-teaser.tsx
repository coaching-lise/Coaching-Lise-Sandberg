import Link from "next/link"
import { Heart, Briefcase } from "lucide-react"
import { FadeIn } from "./fade-in"

const services = [
  {
    icon: Heart,
    title: "Personligt Coachingforløb",
    description: "Et forløb for dig, der ønsker at skabe større ro, klarhed og sammenhæng i dit liv.",
  },
  {
    icon: Briefcase,
    title: "Erhverv",
    description: "Skræddersyede forløb til virksomheder med fokus på trivsel, klarhed og stressforebyggelse.",
  },
]

export function ServicesTeaser() {
  return (
    <section className="py-32 bg-background services-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest uppercase text-warm-taupe">
              Ydelser
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-deep-brown">
              Hvordan kan jeg hjælpe dig?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <Link 
                href={service.title === "Erhverv" ? "/ydelser#erhverv" : "/ydelser"}
                className="block bg-transparent border border-warm-taupe rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-transparent border border-warm-taupe/20 flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-7 h-7 text-warm-taupe" />
                </div>
                <h3 className="font-serif text-2xl text-deep-brown mb-4">
                  {service.title}
                </h3>
                <p className="text-warm-taupe leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/ydelser"
              className="inline-flex items-center text-deep-brown font-medium group"
            >
              Læs mere om ydelser
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
