"use client"

import { useState, FormEvent } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-soft-terracotta/30 mx-auto flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-deep-brown"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-deep-brown mb-4">
          Tak for din besked!
        </h3>
        <p className="text-warm-taupe">
          Jeg vender tilbage til dig hurtigst muligt.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Navn <span className="text-warm-taupe">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-off-white border border-soft-terracotta/30 text-deep-brown placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-warm-taupe/30 transition-colors"
          placeholder="Dit fulde navn"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          E-mail <span className="text-warm-taupe">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-off-white border border-soft-terracotta/30 text-deep-brown placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-warm-taupe/30 transition-colors"
          placeholder="din@email.dk"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Telefon <span className="text-warm-taupe text-xs">(valgfrit)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg bg-off-white border border-soft-terracotta/30 text-deep-brown placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-warm-taupe/30 transition-colors"
          placeholder="Dit telefonnummer"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-deep-brown mb-2"
        >
          Besked <span className="text-warm-taupe">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-off-white border border-soft-terracotta/30 text-deep-brown placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-warm-taupe/30 transition-colors resize-none"
          placeholder="Skriv din besked her..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-warm-taupe text-off-white rounded-lg font-medium tracking-wide hover:bg-deep-brown disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-300"
      >
        {isSubmitting ? "Sender..." : "Send besked"}
      </button>

      <p className="text-xs text-warm-taupe text-center">
        Ved at sende denne formular accepterer du min{" "}
        <a href="/privatlivspolitik" className="underline hover:text-deep-brown">
          privatlivspolitik
        </a>
        .
      </p>
    </form>
  )
}
