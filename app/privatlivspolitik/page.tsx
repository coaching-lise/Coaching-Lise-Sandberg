import { Metadata } from "next"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Privatlivspolitik | Lise Sandberg Coaching",
  description:
    "Læs om hvordan Lise Sandberg Coaching behandler dine personoplysninger i overensstemmelse med GDPR.",
}

export default function PrivatlivspolitikPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-deep-brown mb-8">
              Privatlivspolitik
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="prose prose-lg max-w-none text-warm-taupe">


              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                1. Dataansvarlig
              </h2>
              <p>
                Lise Sandberg Coaching er dataansvarlig for behandlingen af de
                personoplysninger, som vi modtager om dig. Du kan kontakte os på:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li>E-mail: coaching@lise-sandberg.dk</li>
                <li>Telefon: 26 14 73 31</li>

              </ul>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                2. Hvilke oplysninger indsamler vi?
              </h2>
              <p>Vi indsamler og behandler følgende typer personoplysninger:</p>
              <ul>
                <li>Navn og kontaktoplysninger (e-mail, telefon)</li>
                <li>Oplysninger du giver os i forbindelse med coaching</li>
                <li>Betalingsoplysninger ved køb af ydelser</li>
                <li>
                  Tekniske oplysninger ved brug af hjemmesiden (cookies, IP adresse)
                </li>
              </ul>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                3. Formål med behandlingen
              </h2>
              <p>Vi behandler dine personoplysninger til følgende formål:</p>
              <ul>
                <li>At besvare henvendelser og kommunikere med dig</li>
                <li>At levere de ydelser, du har købt</li>
                <li>At administrere din relation til os som kunde</li>
                <li>At opfylde lovkrav, herunder bogføringsloven</li>
              </ul>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                4. Retsgrundlag
              </h2>
              <p>
                Vi behandler dine personoplysninger på følgende retsgrundlag i henhold til artikel 6 i EU's Databeskyttelsesforordning (GDPR):
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Samtykke (artikel 6, stk. 1, litra a), når du frivilligt giver samtykke til behandlingen.</li>
                <li>Opfyldelse af kontrakt (artikel 6, stk. 1, litra b), når behandlingen er nødvendig for at levere coachingforløb eller andre ydelser, du har købt.</li>
                <li>Retlig forpligtelse (artikel 6, stk. 1, litra c), når vi er forpligtet til at opbevare oplysninger i henhold til gældende lovgivning, f.eks. bogføringsloven.</li>
                <li>Legitime interesser (artikel 6, stk. 1, litra f), f.eks. for at administrere vores virksomhed, sikre vores systemer og forbedre vores ydelser.</li>
              </ul>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                5. Opbevaring
              </h2>
              <p>
                Vi opbevarer dine personoplysninger, så længe det er nødvendigt
                for at opfylde de formål, hvortil de er indsamlet, eller så længe
                det er påkrævet i henhold til lovgivningen.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                6. Dine rettigheder
              </h2>
              <p>Du har følgende rettigheder i forhold til dine personoplysninger:</p>
              <ul>
                <li>Ret til indsigt i dine personoplysninger</li>
                <li>Ret til berigtigelse af urigtige oplysninger</li>
                <li>Ret til sletning af dine oplysninger</li>
                <li>Ret til begrænsning af behandlingen</li>
                <li>Ret til dataportabilitet</li>
                <li>Ret til at gøre indsigelse mod behandlingen</li>
              </ul>
              <p>
                Du kan altid tilbagekalde et samtykke ved at kontakte os.
                Tilbagekaldelsen påvirker ikke lovligheden af den behandling,
                der er baseret på samtykke før tilbagekaldelsen.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                7. Cookies
              </h2>
              <p>
                Vores hjemmeside bruger cookies til at forbedre din oplevelse.<br />
                Du kan til enhver tid slette eller blokere cookies i din browsers indstillinger.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                8. Klage
              </h2>
              <p>
                Hvis du er utilfreds med vores behandling af dine personoplysninger,
                kan du klage til Datatilsynet:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li>Datatilsynet</li>
                <li>Carl Jacobsens Vej 35</li>
                <li>2500 Valby</li>
                <li>E-mail: dt@datatilsynet.dk</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
