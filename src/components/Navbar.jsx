import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/',        label: 'Home' },
    { to: '/hair',    label: 'Hair & Beauty Supply' },
    { to: '/services',label: 'Salon Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about',   label: 'About & Contact' },
  ]

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Badishi Beauty Salon Home">
          <span className="navbar__logo-crown" aria-hidden="true">♛</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">BADISHI</span>
            <span className="navbar__logo-sub">Beauty Salon</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    'navbar__link' + (isActive ? ' navbar__link--active' : '')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book CTA */}
        <a
          href="https://wa.me/27761595942?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20your%20available%20dates%20and%20times."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-sm navbar__cta"
          aria-label="Book appointment on WhatsApp"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="navbar__drawer-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  'navbar__drawer-link' + (isActive ? ' navbar__drawer-link--active' : '')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/27761595942?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20your%20available%20dates%20and%20times."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold navbar__drawer-book"
            >
              📲 Book on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
