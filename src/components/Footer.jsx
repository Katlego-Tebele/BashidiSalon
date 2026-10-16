import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top container">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-crown">♛</span>
            <span className="footer__logo-text">
              <span className="footer__logo-main">BADISHI</span>
              <span className="footer__logo-sub">Beauty Salon</span>
            </span>
          </div>
          <p className="footer__slogan">Your Hair, Your Crown.</p>
          <p className="footer__tagline">
            Premium wigs, hairstyling, nail services &amp; pedicures in the heart of Randburg.
          </p>
          <a
            href="https://wa.me/27761595942?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20your%20available%20dates%20and%20times."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm footer__wa-btn"
          >
            <WhatsAppIcon /> Book on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__col-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hair">Hair &amp; Beauty Supply</Link></li>
            <li><Link to="/services">Salon Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About &amp; Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__col-links">
            <li>Hairstyling</li>
            <li>Frontal Wigs</li>
            <li>Hair Products</li>
            <li>Nail Services</li>
            <li>Pedicures</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__col-contact">
            <li>
              <span className="footer__contact-icon">📍</span>
              <span>Co.Space Entrepreneur Village,<br />Randburg, Johannesburg,<br />South Africa</span>
            </li>
            <li>
              <span className="footer__contact-icon">📲</span>
              <a href="https://wa.me/27761595942" target="_blank" rel="noopener noreferrer">
                076 159 5942 <span className="footer__wa-tag">(Salon Bookings)</span>
              </a>
            </li>
            <li>
              <span className="footer__contact-icon">📞</span>
              <span>060 123 4567 <span className="footer__wa-tag">(Beauty Supply)</span></span>
            </li>
            <li>
              <span className="footer__contact-icon">🕐</span>
              <span className="footer__placeholder">Opening hours — coming soon</span>
            </li>
          </ul>
          <p className="footer__walkin">Walk-ins Welcome</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Badishi Beauty Salon &amp; Beauty Supply. All rights reserved.</p>
          <p className="footer__bottom-right">Made with ♥ for beauty.</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
