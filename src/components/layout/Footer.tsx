import Link from 'next/link'
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-proterra-navy-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500">
                <span className="text-2xl font-bold">P</span>
              </div>
              <div>
                <div className="text-xl font-bold">PROTERRA</div>
                <div className="text-sm text-white/80">environnement</div>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Expert en étanchéité par géosynthétiques. Solutions durables pour vos projets
              industriels et environnementaux.
            </p>
            <div className="flex gap-4">
              <a
                href="https://fr.linkedin.com/company/proterra-environnement"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-proterra-lime-500 hover:text-proterra-navy-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/bassins"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  Bassins
                </Link>
              </li>
              <li>
                <Link
                  href="/dechets-terres-polluees"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  Déchets & Terres polluées
                </Link>
              </li>
              <li>
                <Link
                  href="/couvertures-flottantes"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  Couvertures flottantes
                </Link>
              </li>
              <li>
                <Link
                  href="/actus"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact La Ville-aux-Dames */}
          <div>
            <h3 className="mb-6 text-lg font-bold">La Ville-aux-Dames</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                <div className="text-sm leading-relaxed text-white/80">
                  Z.I du bois de Planté
                  <br />
                  32, rue Jacqueline Auriol
                  <br />
                  37700 LA VILLE-AUX-DAMES
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-proterra-lime-500" />
                <a
                  href="tel:0247428282"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  02 47 42 82 82
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Trappes */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Trappes</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                <div className="text-sm leading-relaxed text-white/80">
                  ZAI des Bruyères
                  <br />
                  3 avenue Le Verrier
                  <br />
                  78190 TRAPPES
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-proterra-lime-500" />
                <a
                  href="tel:0134001580"
                  className="text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
                >
                  01 34 00 15 80
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Emails */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:proterra@proterra-environnement.com"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
            >
              <Mail size={16} className="text-proterra-lime-500" />
              Contact général
            </a>
            <a
              href="mailto:commercial@proterra-environnement.com"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
            >
              <Mail size={16} className="text-proterra-lime-500" />
              Commercial
            </a>
            <a
              href="mailto:etude@proterra-environnement.com"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
            >
              <Mail size={16} className="text-proterra-lime-500" />
              Études
            </a>
            <a
              href="mailto:recrutement@proterra-environnement.com"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-proterra-lime-500"
            >
              <Mail size={16} className="text-proterra-lime-500" />
              Recrutement
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Proterra Environnement. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
