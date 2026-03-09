import { Metadata } from "next"
import Link from "next/link"
import { Heart, Compass, Shield, GraduationCap, Award, Briefcase } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Om Lise | Lise Sandberg Coaching",
  description:
    "Lær mig at kende. Jeg er certificeret coach med passion for at hjælpe mennesker med at finde deres vej og skabe positive forandringer.",
}

const approach = [
  {
    icon: Heart,
    title: "Nærvær",
    description:
      "Jeg lytter med fuld opmærksomhed og møder dig der, hvor du er. Dit perspektiv og dine følelser er i centrum.",
  },
  {
    icon: Compass,
    title: "Retning",
    description:
      "Sammen finder vi klarhed over dine mål og skaber en vej fremad, der føles rigtig for dig.",
  },
  {
    icon: Shield,
    title: "Tryghed",
    description:
      "I vores samtaler skabes et fortroligt rum, hvor du trygt kan udforske tanker og følelser.",
  },
]

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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-off-white/60 flex items-center justify-center">
                    <span className="text-warm-taupe text-sm tracking-widest uppercase">
                      Foto
                    </span>
                  </div>
                </div>
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
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown text-center">
              Om mig
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-8 text-warm-taupe text-lg leading-relaxed space-y-6">
              <p>
                Jeg hedder Lise Sandberg, og jeg er certificeret coach med base i 
                Odense. Min rejse ind i coachingverdenen begyndte, da jeg selv 
                oplevede, hvor transformerende det kan være at have en professionel 
                samtalepartner ved sin side.
              </p>
              <p>
                Med en baggrund i erhvervslivet forstår jeg de udfordringer og 
                muligheder, der findes både i karrieren og privatlivet. Jeg 
                kombinerer denne erfaring med en dyb interesse for personlig 
                udvikling og menneskelig trivsel.
              </p>
              <p>
                Når jeg ikke coacher, finder du mig ofte i naturen, hvor jeg 
                henter inspiration og ro. Jeg tror på, at vi alle har potentialet 
                til at leve et liv i balance og glæde – og det er min mission at 
                hjælpe dig med at opdage det.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Min tilgang */}
      <section className="py-24 bg-pastel-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-warm-taupe">
                Filosofi
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-deep-brown">
                Min tilgang
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-off-white mx-auto flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-warm-taupe" />
                  </div>
                  <h3 className="font-serif text-2xl text-deep-brown mb-4">
                    {item.title}
                  </h3>
                  <p className="text-warm-taupe leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Uddannelse & Erfaring */}
      <section className="py-24 bg-warm-blush">
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
                <div className="bg-off-white rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-soft-terracotta/30 mx-auto flex items-center justify-center mb-6">
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
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <blockquote className="font-serif text-2xl sm:text-3xl text-deep-brown leading-relaxed italic">
              &ldquo;Jeg tror på, at alle mennesker har ressourcerne til at skabe 
              det liv, de ønsker. Min rolle er at hjælpe dig med at finde dem og 
              sætte dem i spil.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 text-warm-taupe">— Lise Sandberg</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-pastel-blue">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-deep-brown">
              Lad os mødes
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-warm-taupe text-lg leading-relaxed">
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
