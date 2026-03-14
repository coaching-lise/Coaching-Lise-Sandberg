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
            Lise Sandberg
          </h1>
          <h2 className="mt-4 font-serif text-xl sm:text-2xl md:text-3xl text-warm-taupe tracking-[0.3em] uppercase">
            LIFE - BALANCE
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-warm-taupe max-w-2xl mx-auto leading-relaxed">
            Her indsætter vi noget text
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
