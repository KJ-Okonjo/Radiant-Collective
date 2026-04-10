'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const navbarClasses = `main-navbar ${
    isHomePage && !isScrolled ? 'transparent' : 'scrolled'
  }`

  return (
    <nav className={navbarClasses}>
      <div className="main-navbar__container">
        <Link href="/" className="main-navbar__logo">
          <Image 
            src="/assets/images/logos/radiantlogowhite.png" 
            alt="Radiant Collective" 
            width={140}
            height={40}
            priority
          />
        </Link>

        <div className={`main-navbar__center ${isMenuOpen ? 'is-open' : ''}`}>
          <Link href="/membership" className="main-navbar__link" onClick={() => setIsMenuOpen(false)}>
            Membership
          </Link>
          <Link href="/about" className="main-navbar__link" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="main-navbar__link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="main-navbar__right">
          <Link href="/login" className="main-navbar__login-btn">
            Log In
          </Link>
        </div>

        <div
          className={`main-navbar__hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
