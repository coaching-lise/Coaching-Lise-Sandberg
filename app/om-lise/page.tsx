import { Metadata } from "next"
import Link from "next/link"
import { GraduationCap, Award, Briefcase } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Om Lise | Lise Sandberg Coaching",
  description:
    "Lær mig at kende. Jeg er certificeret coach med passion for at hjælpe mennesker med at finde deres vej og skabe positive forandringer.",
}


const experience = [
  {
    icon: GraduationCap,
    title: "Certificeret Coach",
    description: "Uddannet fra anerkendt coachinguddannelse med fokus på personlig og professionel udvikling.",
  },
  {
    icon: Award,
    title: "ICF-akkrediteret",
    description: "Følger de internationale standarder og etiske retningslinjer fra International Coaching Federation.",
  },
  {
    icon: Briefcase,
    title: "Erhvervserfaring",
    description: "Mange års erfaring fra erhvervslivet giver mig indsigt i arbejdslivets udfordringer og muligheder.",
  },
]

export default function OmLisePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-warm-blush">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <FadeIn>
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-soft-terracotta/50 to-off-white overflow-hidden">
                <Image 
                  src="/Lise-billede.jpg" 
                  alt="Lise Sandberg Foto" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </FadeIn>

            {/* Hero text */}
            <div>
              <FadeIn>
                <span className="text-sm tracking-widest uppercase text-warm-taupe">
                  Mød din coach
                </span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-deep-brown">
                  Lise Sandberg
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-6 text-warm-taupe text-lg leading-relaxed">
                  Certificeret coach med passion for at hjælpe mennesker med at 
                  finde deres indre styrke og skabe positive forandringer i deres liv.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Om mig */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown text-center">
              Om mig
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-8 text-warm-taupe text-lg leading-relaxed space-y-6">
              <p>
                Her indsætter vi noget text
              </p>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Uddannelse & Erfaring */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-warm-taupe">
                Baggrund
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-deep-brown">
                Uddannelse & Erfaring
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="bg-transparent border border-warm-taupe rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-transparent border border-warm-taupe/20 mx-auto flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-warm-taupe" />
                  </div>
                  <h3 className="font-serif text-xl text-deep-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-taupe text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certificate Image */}
          <FadeIn delay={300}>
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-2xl bg-white p-4 rounded-2xl shadow-sm border border-warm-taupe/20">
                <Image
                  src="/certifikat.png"
                  alt="Coaching Certifikat"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto shadow-sm"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-[#c2b2a7]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown">
              Lad os mødes
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-deep-brown text-lg leading-relaxed">
              Jeg glæder mig til at høre fra dig og lære dig at kende.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
            >
              Kontakt mig
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
