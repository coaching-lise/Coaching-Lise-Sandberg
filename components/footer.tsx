import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/om-lise", label: "Om Lise" },
  { href: "/kontakt", label: "Kontakt" },
]

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-footer-bg text-warm-blush">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-off-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-soft-terracotta" />
                <a
                  href="tel:+4526147331"
                  className="hover:text-soft-terracotta transition-colors"
                >
                  26 14 73 31
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-soft-terracotta" />
                <a
                  href="mailto:coaching@lise-sandberg.dk"
                  className="hover:text-soft-terracotta transition-colors"
                >
                  coaching@lise-sandberg.dk
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-soft-terracotta" />
                <span>5230 Odense M</span>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-off-white">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-soft-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-off-white">Følg med</h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-warm-blush/10 hover:bg-soft-terracotta/30 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privatlivspolitik"
                  className="hover:text-soft-terracotta transition-colors"
                >
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link
                  href="/handelsbetingelser"
                  className="hover:text-soft-terracotta transition-colors"
                >
                  Handelsbetingelser
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-warm-blush/20 text-center text-sm text-warm-blush/70">
          <p>&copy; {new Date().getFullYear()} Lise Sandberg Coaching</p>
        </div>
      </div>
    </footer>
  )
}
