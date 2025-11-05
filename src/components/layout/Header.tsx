'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Réalisations',
    href: '/realisations',
    dropdown: [
      { name: 'Bassins', href: '/bassins' },
      { name: 'Déchets & Terres polluées', href: '/dechets-terres-polluees' },
      { name: 'Couvertures flottantes', href: '/couvertures-flottantes' },
    ],
  },
  { name: 'Actus', href: '/actus' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-sm'
            : 'bg-proterra-navy-500 text-white'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-proterra-lime-500 to-proterra-blue-500">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <div className="flex flex-col">
                <span className={cn('text-xl font-bold', isScrolled ? 'text-proterra-navy-500' : 'text-white')}>
                  PROTERRA
                </span>
                <span className={cn('text-xs', isScrolled ? 'text-gray-600' : 'text-white/80')}>
                  environnement
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map(item => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-proterra-lime-500 hover:text-proterra-navy-900',
                      pathname === item.href
                        ? isScrolled
                          ? 'bg-proterra-lime-500 text-proterra-navy-900'
                          : 'bg-white/20 text-white'
                        : isScrolled
                        ? 'text-gray-700 hover:bg-proterra-lime-500'
                        : 'text-white hover:bg-white/10'
                    )}
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full mt-2 hidden w-64 rounded-lg bg-white p-2 shadow-xl group-hover:block">
                      {item.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-proterra-lime-500 hover:text-proterra-navy-900"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Button variant="primary" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'rounded-lg p-2 transition-colors lg:hidden',
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl lg:hidden">
            <div className="flex h-20 items-center justify-between border-b px-6">
              <span className="text-xl font-bold text-proterra-navy-500">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {navigation.map(item => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-proterra-lime-500 text-proterra-navy-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
