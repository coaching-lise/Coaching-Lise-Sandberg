"use client"

import Link from "next/link"
import { FadeIn } from "./fade-in"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white via-warm-blush/30 to-off-white pt-20">
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-soft-terracotta/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pastel-blue/30 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-deep-brown leading-tight tracking-tight text-balance">
            Find din retning
            <span className="block mt-2 text-warm-taupe">– med hjertet som kompas</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-warm-taupe max-w-2xl mx-auto leading-relaxed">
            Professionel coaching der skaber varig forandring. 
            Sammen finder vi vejen til det liv, du drømmer om.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown transition-colors duration-300"
            >
              Book en samtale
            </Link>
            <Link
              href="/ydelser"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-warm-taupe text-warm-taupe rounded-lg font-medium tracking-wide hover:bg-warm-blush transition-colors duration-300"
            >
              Se ydelser
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
