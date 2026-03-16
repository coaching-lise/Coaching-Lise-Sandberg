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
                src="/lise-sandberg.png"
                alt="Lise Sandberg"
                fill
                className="object-cover"
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
                  Jeg tror på, at udvikling sker, når vi tør tage ansvar for egne 
                  handlinger og arbejde med vores indre handlemønstre.
                </p>
                <p>
                  Som socialrådgiver og konsulent har jeg i flere år støttet 
                  mennesker i forandring – særligt dem, der oplever stress, angst 
                  eller manglende retning.
                </p>
                <p>
                  Jeg oplever selv, at min egen udvikling sker, når der er ro i 
                  mit nervesystem – og den ro finder jeg ofte i naturen: i skoven, 
                  ved vandet eller i stilheden omkring mig. Derfor har jeg en 
                  særlig interesse for, hvordan nervesystemets balance kan være en 
                  vej til trivsel, nærvær og forandring.
                </p>
                <p>
                  Nu kombinerer jeg min erfaring med en masteruddannelse i 
                  evidensbaseret coaching psykologi – for at hjælpe mennesker med 
                  at skabe ro, klarhed og varige forandringer gennem indsigt og handling.
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
