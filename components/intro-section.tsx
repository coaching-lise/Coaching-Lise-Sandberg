import Image from "next/image"
import { FadeIn } from "./fade-in"

export function IntroSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/lise-forside.webP"
                alt="Lise Sandberg"
                fill
                className="object-cover object-[80%_center]"
                priority
              />
            </div>
          </FadeIn>

          {/* Text content */}
          <div>
            <FadeIn>
              <span className="text-sm tracking-widest uppercase text-warm-taupe">
                Velkommen
              </span>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-deep-brown leading-tight">
                Coaching med nærvær og forståelse
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-6 text-warm-taupe leading-relaxed text-lg space-y-4">
                <p>
                  Jeg hjælper mennesker, der mærker indre uro eller ubalance, med at skabe ro, klarhed
                  og sammenhæng mellem deres værdier og deres handlinger.
                </p>
                <p>
                  Jeg arbejder med coaching og selvudvikling. Typisk møder jeg mennesker, der oplever
                  stress, indre uro eller en følelse af, at deres liv ikke helt stemmer overens med det,
                  der er vigtigt for dem.
                </p>
                <p>
                  I samtalerne arbejder vi med selvindsigt, værdier og de indre mønstre, der påvirker
                  vores måde at handle og reagere på, med fokus på at skabe mere ro, klarhed og retning.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <a
                href="/om-lise"
                className="inline-flex items-center mt-8 text-deep-brown font-medium group"
              >
                Læs mere om mig
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
