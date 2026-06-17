"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FadeIn } from "./fade-in"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    paragraphs: [
      "Jeg startede et forløb hos Lise, fordi jeg gerne ville have hjælp til at få styr på min søvn. Allerede i de første samtaler hjalp hun mig med at indse, hvor vigtigt det egentlig var for mig, og vi fik sat nogle konkrete mål for, hvad jeg gerne ville ændre.",
      "Undervejs gik det op for mig, at det ikke kun handlede om søvn. Lise hjalp mig med at se sammenhængen mellem søvn, træning og min generelle sundhed. Det gjorde, at fokus blev bredere, og at de ændringer jeg arbejdede med faktisk gav mening i min hverdag.",
      "Man kan tydeligt mærke, at Lise har en stærk værktøjskasse og meget at trække på. Hun er god til at stille de rigtige spørgsmål og til at guide én frem til løsninger, der passer til ens eget liv.",
      "Forløbet har givet mig bedre vaner og en langt bedre hverdag med mere energi og balance. Jeg kan varmt anbefale et forløb hos Lise til andre, der gerne vil arbejde med deres sundhed og skabe varige ændringer.",
    ],
    name: "Niklas",
  },
  {
    paragraphs: [
      "Jeg var landet et sted i livet hvor jeg havde brug for forandring, få styr på mit nervesystem og hjælp til at bryde mønstre.",
      "Derfor startede jeg hos Lise, hvor jeg helt fra starten fik nogle meget brugbare værktøjer.",
      "Lise er god til at stille de \u201Crigtige\u201D spørgsmål og ikke mindst følge op på de mål og opgaver som vi arbejder med fra gang til gang.",
      "Jeg har fået hjælp til at indse at det er ok at sige fra og prioritere sig selv for at skabe balance og trivsel i hverdagen.",
      "Forløbet har givet mig mere struktur og balance, som har udmøntet sig i en bedre hverdag med mere energi. Jeg giver meget gerne mine anbefalinger til et forløb hos Lise til andre, som gerne vil arbejde med deres nervesystem, balance og skabe forandringer.",
    ],
    name: "Peter",
  },
]

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  // Measure the tallest slide and lock the container height
  useEffect(() => {
    const measure = () => {
      let maxH = 0
      slideRefs.current.forEach((el) => {
        if (el) {
          maxH = Math.max(maxH, el.scrollHeight)
        }
      })
      if (maxH > 0) setContainerHeight(maxH)
    }

    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Quote className="w-12 h-12 text-warm-taupe mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative">
            {/* Previous / Next arrows */}
            <button
              onClick={prev}
              aria-label="Forrige udtalelse"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 p-2 text-warm-taupe hover:text-deep-brown transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Næste udtalelse"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 p-2 text-warm-taupe hover:text-deep-brown transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  height: containerHeight ? `${containerHeight}px` : "auto",
                }}
              >
                {testimonials.map((testimonial, slideIndex) => (
                  <div
                    key={slideIndex}
                    ref={(el) => { slideRefs.current[slideIndex] = el }}
                    className="w-full flex-shrink-0 px-8"
                  >
                    <div className="font-serif text-lg sm:text-xl md:text-2xl text-deep-brown leading-relaxed italic max-w-3xl mx-auto space-y-6">
                      {testimonial.paragraphs.map((p, i) => (
                        <p key={i}>
                          {i === 0 && "\u201C"}
                          {p}
                          {i === testimonial.paragraphs.length - 1 && "\u201D"}
                        </p>
                      ))}
                    </div>

                    <div className="mt-10">
                      <p className="text-deep-brown uppercase tracking-widest text-sm font-semibold">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Gå til udtalelse ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-warm-taupe scale-110"
                    : "bg-warm-taupe/30 hover:bg-warm-taupe/50"
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
