import Link from "next/link"
import { Heart, Briefcase, Users } from "lucide-react"
import { FadeIn } from "./fade-in"

const services = [
  {
    icon: Heart,
    title: "Livscoaching",
    description:
      "Find balance og mening i dit liv. Sammen udforsker vi dine værdier og skaber retning mod det liv, du ønsker.",
  },
  {
    icon: Briefcase,
    title: "Karrierecoaching",
    description:
      "Få klarhed over dine karrieremål og styrker. Jeg hjælper dig med at navigere mod den rette vej i arbejdslivet.",
  },
  {
    icon: Users,
    title: "Forløb og pakker",
    description:
      "Skræddersyede coachingforløb tilpasset dine behov. Vælg mellem intensive forløb eller løbende sessioner.",
  },
]

export function ServicesTeaser() {
  return (
    <section className="py-24 bg-pastel-blue">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <div className="bg-off-white rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-warm-blush flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-warm-taupe" />
                </div>
                <h3 className="font-serif text-2xl text-deep-brown mb-4">
                  {service.title}
                </h3>
                <p className="text-warm-taupe leading-relaxed">
                  {service.description}
                </p>
              </div>
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
