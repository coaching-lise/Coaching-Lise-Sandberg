import { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt | Lise Sandberg Coaching",
  description:
    "Kontakt Lise Sandberg for en uforpligtende samtale om coaching. Ring, skriv eller send en besked via kontaktformularen.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "26 14 73 31",
    href: "tel:+4526147331",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "coaching@lise-sandberg.dk",
    href: "mailto:coaching@lise-sandberg.dk",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Hunderup Ege 22, 5230 Odense",
    href: "https://www.google.com/maps/search/?api=1&query=Hunderup+Ege+22+5230+Odense",
  },
]

export default function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-warm-blush overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/b6.png"
            alt="Background"
            fill
            className="object-cover object-[50%_35%]"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest uppercase text-warm-taupe">
              Kontakt
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-deep-brown">
              Lad os tage en snak
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-warm-taupe text-lg leading-relaxed max-w-2xl mx-auto">
              Jeg tilbyder både fysiske møder i Odense og online sessioner via
              video. Kontakt mig for at høre mere om mulighederne.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-warm-blush rounded-2xl p-8 sm:p-10">
                  <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown mb-8">
                    Send en besked
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>

            {/* Contact Info Card */}
            <div className="lg:col-span-2">
              <FadeIn delay={100}>
                <div className="bg-warm-blush rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-[350px] sm:h-[420px] w-full mb-6 flex-shrink-0">
                    <Image
                      src="/lise-sandberg.png"
                      alt="Lise Sandberg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-8 pb-10 sm:px-10 flex-grow">
                    <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown mb-8">
                      Kontaktoplysninger
                    </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-off-white border border-soft-terracotta/30 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-warm-taupe" />
                        </div>
                        <div>
                          <p className="text-sm text-warm-taupe uppercase tracking-wider">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-deep-brown hover:text-warm-taupe transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-deep-brown font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
