import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import './HomePage.css'

/* WhatsApp helpers */
const WA_BASE = 'https://wa.me/27761595942'
const waBook  = `${WA_BASE}?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20your%20available%20dates%20and%20times.`
const waNails = `${WA_BASE}?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20a%20nail%20service.%20Please%20share%20your%20available%20times.`
const waPedi  = `${WA_BASE}?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20a%20pedicure.%20Please%20share%20your%20available%20times.`
const waWig   = `${WA_BASE}?text=Hello%20Badishi%20Beauty%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20your%20frontal%20wigs.`

export default function HomePage() {
  return (
    <main className="home">

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero section">
        <div className="hero__bg-decor" aria-hidden="true" />

        <div className="hero__inner container">
          {/* Text side */}
          <div className="hero__content fade-up">
            <span className="hero__eyebrow">Welcome to</span>
            <h1 className="hero__brand">
              <span className="hero__brand-main">BADISHI</span>
              <span className="hero__brand-sub">Beauty Salon &amp; Beauty Supply</span>
            </h1>
            <span className="hero__slogan">Your Hair, Your Crown.</span>
            <p className="hero__desc">
              Enhance your beauty. Own your crown. Premium wigs, expert hairstyling,
              luxurious nail services and pedicures — all in one place, right here in Randburg.
            </p>

            <div className="hero__actions">
              <a
                href={waBook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                aria-label="Book appointment via WhatsApp"
              >
                📲 Book Your Appointment
              </a>
              <Link to="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="hero__badges">
              <span className="hero__badge">✔ Walk-ins Welcome</span>
              <span className="hero__badge">✔ WhatsApp Bookings</span>
              <span className="hero__badge">✔ Randburg, JHB</span>
            </div>
          </div>

          {/* Image side */}
          <div className="hero__image-wrap fade-in">
            <div className="hero__image-frame">
              <img
                src="/assets/hero-girl.jpg"
                alt="Beautiful woman showcasing Badishi Beauty Salon hairstyle"
                className="hero__img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback shown if image not yet placed */}
              <div className="hero__img-fallback img-placeholder" style={{ display: 'none' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.4rem', color: 'var(--color-rose-dark)' }}>
                    Place your hero photo here
                  </p>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    Save as <strong>public/assets/hero-girl.jpg</strong>
                  </p>
                </div>
              </div>
              <div className="hero__image-badge" aria-hidden="true">
                <span className="hero__image-badge-crown">♛</span>
                <span>Your Crown</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="section bg-cream home-services" aria-label="Our services">
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            script="Our Services"
            title="Beauty That Speaks for Itself"
            description="From stunning wigs to flawless nails, we take care of every detail."
          />

          <div className="home-services__grid">
            {services.map((s) => (
              <div className="home-service-card card" key={s.title}>
                <div className="home-service-card__icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a
                  href={s.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm mt-3"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED WIGS ===== */}
      <section className="section home-wigs" aria-label="Featured wigs">
        <div className="container">
          <SectionHeader
            eyebrow="Badishi Beauty Supply"
            script="Wigs & Hair"
            title="13×4 SDD Pixie Curly Frontal Wigs"
            description="Luscious curly frontal wigs available from 18 inch to 30 inch. Quality you can see, texture you can feel."
          />

          <div className="home-wigs__grid">
            {wigPreviews.map((w) => (
              <div className="home-wig-card card" key={w.label}>
                <div className="home-wig-card__img-wrap">
                  <img
                    src={w.src}
                    alt={w.alt}
                    className="home-wig-card__img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="img-placeholder home-wig-card__fallback" style={{ display: 'none', height: '260px' }}>
                    <span>{w.label}</span>
                  </div>
                </div>
                <div className="home-wig-card__body">
                  <span className="home-wig-card__label">{w.label}</span>
                  <span className="home-wig-card__price">{w.price}</span>
                  <a
                    href={`${WA_BASE}?text=${encodeURIComponent(`Hello Badishi Beauty Salon, I would like to enquire about the ${w.label} curly frontal wig priced at ${w.price}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/hair" className="btn btn-outline">View Full Wig Collection</Link>
          </div>
        </div>
      </section>

      {/* ===== NAILS & PEDICURE HIGHLIGHT ===== */}
      <section className="section bg-blush home-nails" aria-label="Nail and pedicure services">
        <div className="container">
          <SectionHeader
            eyebrow="Nail &amp; Pedicure Services"
            script="Flawless Nails"
            title="Treat Your Hands &amp; Feet"
            description="Affordable luxury — because every detail matters."
          />

          <div className="home-nails__grid">
            {nailServices.map((n) => (
              <div className="home-nail-card card" key={n.name}>
                <div className="home-nail-card__img-wrap">
                  <img
                    src={n.src}
                    alt={n.alt}
                    className="home-nail-card__img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="img-placeholder home-nail-card__fallback" style={{ display: 'none', height: '220px' }}>
                    <span>{n.name}</span>
                  </div>
                  <span className="home-nail-card__price-badge">{n.price}</span>
                </div>
                <div className="home-nail-card__body">
                  <h3>{n.name}</h3>
                  <p>{n.desc}</p>
                  <a
                    href={n.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-rose btn-sm"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-outline">View All Services &amp; Prices</Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section home-gallery-preview" aria-label="Gallery preview">
        <div className="container">
          <SectionHeader
            eyebrow="Our Work"
            script="Gallery"
            title="Beauty in Every Detail"
          />

          <div className="home-gallery-preview__grid">
            {galleryPreviews.map((g, i) => (
              <div
                className="home-gallery-preview__item card"
                key={i}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="img-placeholder" style={{ display: 'none', height: '200px' }}>
                  <span>{g.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/gallery" className="btn btn-gold">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ===== BOOK CTA BANNER ===== */}
      <section className="home-cta bg-brown" aria-label="Book appointment call to action">
        <div className="container home-cta__inner">
          <div>
            <span className="home-cta__crown" aria-hidden="true">♛</span>
            <h2 className="home-cta__title">Ready to Own Your Crown?</h2>
            <p className="home-cta__sub">
              Book your appointment today — we're also happy with walk-ins.
              Located at Co.Space Entrepreneur Village, Randburg.
            </p>
          </div>
          <div className="home-cta__actions">
            <a
              href={waBook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              📲 Book on WhatsApp
            </a>
            <Link to="/about" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Find Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ---- Data ------------------------------------------------- */
const services = [
  {
    icon: '💇‍♀️',
    title: 'Hairstyling',
    desc: 'Expert styling for every occasion. Let our skilled stylists transform your look.',
    waLink: waBook,
  },
  {
    icon: '👑',
    title: 'Wigs & Frontals',
    desc: '13×4 SDD Pixie Curly Frontal Wigs in lengths from 18" to 30". Installed and styled to perfection.',
    waLink: waWig,
  },
  {
    icon: '💅',
    title: 'Nail Services',
    desc: 'Beautiful short nail sets from R300. Clean, precise, and perfectly finished.',
    waLink: waNails,
  },
  {
    icon: '🦶',
    title: 'Pedicures',
    desc: 'Plain pedicure from R250. Relax and let us take care of your feet.',
    waLink: waPedi,
  },
]

const wigPreviews = [
  { src: '/assets/wigs/wig-curly-01.jpg', alt: 'Badishi 22-inch curly frontal wig', label: '22 Inch', price: 'R2,990' },
  { src: '/assets/wigs/wig-curly-02.jpg', alt: 'Badishi 24-inch curly frontal wig', label: '24 Inch', price: 'R3,450' },
  { src: '/assets/wigs/wig-curly-03.jpg', alt: 'Badishi 26-inch curly frontal wig', label: '26 Inch', price: 'R3,950' },
]

const nailServices = [
  {
    name: 'Short Nails',
    price: 'R300',
    src: '/assets/nails/nail-art-01.jpg',
    alt: 'Short nail set by Badishi Beauty Salon',
    desc: 'Clean, precise short nail sets with your choice of finish.',
    waLink: waNails,
  },
  {
    name: 'Plain Pedicure',
    price: 'R250',
    src: '/assets/nails/pedicure-01.jpg',
    alt: 'Pedicure treatment at Badishi Beauty Salon',
    desc: 'Soothing pedicure treatment — your feet deserve the best.',
    waLink: waPedi,
  },
  {
    name: 'Nail + Pedi Combo',
    price: 'R550',
    src: '/assets/nails/nail-art-01.jpg',
    alt: 'Nail and pedicure combo at Badishi Beauty Salon',
    desc: 'Get both short nails and a plain pedicure at a special combo price.',
    waLink: `${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I would like to book the Nail + Pedicure combo (R550). Please share your available dates and times.')}`,
  },
]

const galleryPreviews = [
  { src: '/assets/wigs/wig-curly-01.jpg',  alt: 'Curly frontal wig' },
  { src: '/assets/wigs/wig-curly-02.jpg',  alt: 'Curly frontal wig style 2' },
  { src: '/assets/nails/nail-art-01.jpg',  alt: 'Nail art by Badishi' },
  { src: '/assets/nails/pedicure-01.jpg',  alt: 'Pedicure treatment' },
  { src: '/assets/wigs/wig-curly-03.jpg',  alt: 'Curly frontal wig style 3' },
  { src: '/assets/hero-girl.jpg',          alt: 'Badishi beauty look' },
]
