'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import Container from './Container'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className='fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background text-brand lg:sticky lg:top-0 lg:border-b lg:border-t-0'>
      <Container>
        <div className='grid h-16 grid-cols-3 items-center lg:flex lg:justify-between'>
          <div className='justify-self-start'>
            <Logo className='transition-opacity hover:opacity-50' />
          </div>

          <button
            type='button'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='justify-self-center rounded-lg border border-border bg-background p-1 text-brand lg:hidden'
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' className='fill-brand'>
                <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' className='fill-brand'>
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
              </svg>
            )}
          </button>

          <div className='justify-self-end lg:hidden'>
            <ThemeToggle />
          </div>

          <div className='hidden items-center gap-10 lg:flex'>
            <nav className='flex gap-4' aria-label='Navegación principal'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`rounded-full px-4 py-0.5 font-semibold text-brand transition-all duration-300 hover:bg-muted ${isActive(link.href) ? 'bg-muted' : ''}`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>

        <nav
          aria-label='Navegación móvil'
          className={`fixed bottom-16 left-0 z-40 w-full border-t border-border bg-background transition-all duration-300 lg:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`block w-full p-4 text-center text-xl font-bold text-brand transition hover:bg-muted ${isActive(link.href) ? 'bg-muted' : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
