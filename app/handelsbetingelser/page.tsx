import { Metadata } from "next"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Handelsbetingelser | Lise Sandberg Coaching",
  description:
    "Læs handelsbetingelserne for Lise Sandberg Coaching, herunder vilkår for booking, betaling og afbestilling.",
}

export default function HandelsbetingelserPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-deep-brown mb-8">
              Handelsbetingelser
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="prose prose-lg max-w-none text-warm-taupe">


              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                1. Generelt
              </h2>
              <p>
                Disse handelsbetingelser gælder for alle ydelser leveret af 
                Lise Sandberg Coaching. Ved at booke en session eller et forløb 
                accepterer du disse betingelser.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                2. Ydelser
              </h2>
              <p>
                Lise Sandberg Coaching tilbyder individuel coaching, gruppeforløb 
                og workshops. Indholdet af den enkelte session eller forløbet 
                aftales i dialog mellem coach og klient.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                3. Booking og bekræftelse
              </h2>
              <p>
                Booking af sessions sker via e-mail eller telefon. En booking er 
                først gyldig, når du har modtaget en skriftlig bekræftelse fra 
                Lise Sandberg Coaching.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                4. Priser og betaling
              </h2>
              <ul>
                <li>Alle priser er i danske kroner og inkluderer moms.</li>
                <li>Betaling sker forud via faktura eller MobilePay.</li>
                <li>Betalingsfristen er 8 dage fra fakturadato.</li>
                <li>Ved forsinket betaling pålægges rykkergebyr på 100 kr.</li>
              </ul>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                5. Afbestilling og ombooking
              </h2>
              <p>
                Afbestilling og ombooking skal ske skriftligt til 
                coaching@lise-sandberg.dk. Følgende regler gælder:
              </p>
              <ul>
                <li>
                  <strong>Mere end 48 timer før:</strong> Gratis afbestilling 
                  eller ombooking.
                </li>
                <li>
                  <strong>24-48 timer før:</strong> 50% af prisen opkræves.
                </li>
                <li>
                  <strong>Mindre end 24 timer før:</strong> Fuld pris opkræves.
                </li>
              </ul>
              <p>
                Ved sygdom eller force majeure kan der efter aftale laves særlige 
                arrangementer.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                6. Fortrolighed
              </h2>
              <p>
                Alt, hvad der drøftes under coachingsessioner, behandles 
                fortroligt. Jeg er bundet af tavshedspligt og deler ikke 
                oplysninger om dig med tredjeparter uden dit samtykke.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                7. Ansvar
              </h2>
              <p>
                Coaching er ikke terapi eller behandling og erstatter ikke 
                professionel psykologisk eller medicinsk hjælp. Klienten er 
                selv ansvarlig for de beslutninger og handlinger, der træffes 
                på baggrund af coachingen.
              </p>
              <p>
                Lise Sandberg Coaching kan ikke holdes ansvarlig for indirekte 
                tab eller følgeskader i forbindelse med coachingforløbet.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                8. Force majeure
              </h2>
              <p>
                Ved force majeure (sygdom, naturkatastrofer, pandemier mv.) kan 
                sessioner flyttes uden omkostninger for begge parter.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                9. Lovvalg og værneting
              </h2>
              <p>
                Disse handelsbetingelser er underlagt dansk ret. Eventuelle 
                tvister afgøres ved de danske domstole.
              </p>

              <h2 className="font-serif text-2xl text-deep-brown mt-8 mb-4">
                10. Kontakt
              </h2>
              <p>
                Har du spørgsmål til disse handelsbetingelser, er du velkommen 
                til at kontakte mig:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li>E-mail: coaching@lise-sandberg.dk</li>
                <li>Telefon: 26 14 73 31</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
