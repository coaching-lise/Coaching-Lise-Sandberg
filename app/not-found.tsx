import { Metadata } from "next"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Siden blev ikke fundet | Lise Sandberg Coaching",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest uppercase text-warm-taupe">
              404
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-deep-brown">
              Siden blev ikke fundet
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-warm-taupe text-lg leading-relaxed max-w-2xl mx-auto">
              Linket kan være forkert, eller siden findes ikke længere. Du er
              velkommen til at gå tilbage til forsiden.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <Link
              href="/"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
            >
              Tilbage til forsiden
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
