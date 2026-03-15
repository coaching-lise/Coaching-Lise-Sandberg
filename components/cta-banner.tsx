import Link from "next/link"
import { FadeIn } from "./fade-in"

export function CtaBanner() {
  return (
    <section className="py-24 bg-[#c2b2a7]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-deep-brown">
            Er du klar til forandring?
          </h2>
        </FadeIn>



        <FadeIn delay={200}>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
          >
            Kontakt Lise
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
