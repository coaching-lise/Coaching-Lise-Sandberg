import { FadeIn } from "./fade-in"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24 bg-[#c2b2a7]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Quote className="w-12 h-12 text-off-white/80 mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="font-serif text-lg sm:text-xl md:text-2xl text-deep-brown leading-relaxed italic max-w-3xl mx-auto space-y-6">
            <p>
              &ldquo;Jeg startede et forløb hos Lise, fordi jeg gerne ville have 
              hjælp til at få styr på min søvn. Allerede i de første samtaler 
              hjalp hun mig med at indse, hvor vigtigt det egentlig var for mig, 
              og vi fik sat nogle konkrete mål for, hvad jeg gerne ville ændre.&rdquo;
            </p>
            <p>
              &ldquo;Undervejs gik det op for mig, at det ikke kun handlede om søvn. 
              Lise hjalp mig med at se sammenhængen mellem søvn, træning og min 
              generelle sundhed. Det gjorde, at fokus blev bredere, og at de 
              ændringer jeg arbejdede med faktisk gav mening i min hverdag.&rdquo;
            </p>
            <p>
              &ldquo;Man kan tydeligt mærke, at Lise har en stærk værktøjskasse og 
              meget at trække på. Hun er god til at stille de rigtige spørgsmål og 
              til at guide én frem til løsninger, der passer til ens eget liv.&rdquo;
            </p>
            <p>
              &ldquo;Forløbet har givet mig bedre vaner og en langt bedre hverdag 
              med mere energi og balance. Jeg kan varmt anbefale et forløb hos 
              Lise til andre, der gerne vil arbejde med deres sundhed og skabe 
              varige ændringer.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10">
            <p className="text-deep-brown uppercase tracking-widest text-sm font-semibold">
              — Niklas
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
