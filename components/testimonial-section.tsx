import { FadeIn } from "./fade-in"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-warm-blush">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Quote className="w-12 h-12 text-soft-terracotta mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={100}>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-deep-brown leading-relaxed italic">
            &ldquo;Lise har en unik evne til at lytte og stille de rigtige spørgsmål. 
            Hendes coaching har hjulpet mig med at finde klarhed og mod til at 
            træffe vigtige beslutninger i mit liv.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8">
            <p className="text-warm-taupe uppercase tracking-widest text-sm">
              — Maria K., Odense
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
