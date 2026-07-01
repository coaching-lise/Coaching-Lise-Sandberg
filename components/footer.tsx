import Link from "next/link"
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/om-lise", label: "Om Lise" },
  { href: "/kontakt", label: "Kontakt" },
]

const socialLinks = [
  { href: "https://www.instagram.com/lilunda/?__d=1", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/lise.l.andersen.50", icon: Facebook, label: "Facebook" },
  {
    href: "https://www.linkedin.com/in/lise-lund-sandberg-7bb58419/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByZTUfUw3TryBdGz3CTfb%2Bg%3D%3D",
    icon: Linkedin,
    label: "LinkedIn",
  },
]

export function Footer() {
  return (
    <footer className="bg-background text-warm-taupe border-t border-soft-terracotta/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Column */}
          <div className="flex justify-start">
            <div className="text-left">
              <h3 className="font-serif text-xl mb-6 text-deep-brown">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-warm-taupe" />
                  <a
                    href="tel:+4526147331"
                    className="hover:text-deep-brown transition-colors"
                  >
                    26 14 73 31
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-warm-taupe" />
                  <a
                    href="mailto:coaching@lise-sandberg.dk"
                    className="hover:text-deep-brown transition-colors"
                  >
                    coaching@lise-sandberg.dk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex justify-start md:justify-center">
            <div className="text-left min-w-[120px]">
              <h3 className="font-serif text-xl mb-6 text-deep-brown">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-deep-brown transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex justify-start md:justify-end">
            <div className="text-left md:text-center">
              <h3 className="font-serif text-xl mb-6 text-deep-brown">Følg med</h3>
              <div className="flex gap-4 mb-8 justify-start md:justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full bg-soft-terracotta/10 hover:bg-soft-terracotta/30 transition-colors text-warm-taupe hover:text-deep-brown"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-soft-terracotta/20 relative flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-taupe/70">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <p>&copy; {new Date().getFullYear()} Lise Sandberg Coaching</p>
            <p>CVR: 46316797</p>
          </div>
          <a
            href="https://companio.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-deep-brown transition-colors md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            Lavet af Companio
          </a>
          <ul className="flex gap-6 sm:gap-8">
            <li>
              <Link
                href="/privatlivspolitik"
                className="hover:text-deep-brown transition-colors"
              >
                Privatlivspolitik
              </Link>
            </li>
            <li>
              <Link
                href="/handelsbetingelser"
                className="hover:text-deep-brown transition-colors"
              >
                Handelsbetingelser
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
