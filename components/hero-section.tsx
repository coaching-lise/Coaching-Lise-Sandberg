"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "./fade-in"

const backgroundImages = [
  "/b1.png",
  "/b2.png",
  "/b3.png",
  "/b4.png",
  "/b5.png",
  "/b6.png",
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-off-white via-warm-blush/30 to-off-white pt-20 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-1000">
        <Image
          src={backgroundImages[currentImageIndex]}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <button
          onClick={prevImage}
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm text-warm-taupe/80 hover:text-warm-taupe transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextImage}
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm text-warm-taupe/80 hover:text-warm-taupe transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

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
