import { FadeIn } from "./fade-in"

export function IntroSection() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-soft-terracotta/40 to-warm-blush overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-off-white/50 flex items-center justify-center">
                  <span className="text-warm-taupe text-sm tracking-widest uppercase">Foto</span>
                </div>
              </div>
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
              <p className="mt-6 text-warm-taupe leading-relaxed text-lg">
                Jeg hedder Lise Sandberg, og jeg brænder for at hjælpe mennesker med at 
                finde deres indre styrke og skabe positive forandringer i deres liv. 
                Med en kombination af nærvær, faglighed og empati skaber jeg et trygt 
                rum, hvor du kan udforske dine muligheder.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-4 text-warm-taupe leading-relaxed text-lg">
                Uanset om du søger klarhed i din karriere, ønsker personlig udvikling 
                eller har brug for at finde balance i hverdagen, er jeg her for at 
                støtte dig på rejsen.
              </p>
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
