import React from 'react'
import SectionHeader from '../components/SectionHeader'
import './SalonServices.css'

const WA_BASE = 'https://wa.me/27761595942'

function waBook(service) {
  const msg = `Hello Badishi Beauty Salon, I would like to book a ${service}. Please share your available dates and times.`
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}

const confirmedServices = [
  {
    id: 'short-nails',
    category: 'Nails',
    name: 'Short Nails',
    price: 'R300',
    icon: '💅',
    desc: 'Clean, precise short nail sets finished to perfection. Your nails, your style.',
    imgSrc: '/assets/nails/nail-art-01.jpg',
    imgAlt: 'Short nail set at Badishi Beauty Salon',
    waMsg: 'Short Nails (R300)',
  },
  {
    id: 'pedicure',
    category: 'Pedicure',
    name: 'Plain Pedicure',
    price: 'R250',
    icon: '🦶',
    desc: 'Soothing, relaxing pedicure treatment. Smooth skin, beautiful feet.',
    imgSrc: '/assets/nails/pedicure-01.jpg',
    imgAlt: 'Pedicure treatment at Badishi Beauty Salon',
    waMsg: 'Plain Pedicure (R250)',
  },
  {
    id: 'combo',
    category: 'Combo',
    name: 'Nails + Pedicure Combo',
    price: 'R550',
    icon: '✨',
    desc: 'Get short nails and a plain pedicure together at a special combo price. Save and treat yourself.',
    imgSrc: '/assets/nails/nail-art-01.jpg',
    imgAlt: 'Nail and pedicure combo at Badishi Beauty Salon',
    waMsg: 'Nail + Pedicure Combo (R550)',
    isCombo: true,
  },
]

/* Placeholder services — update when owner confirms */
const placeholderServices = [
  { name: 'Nail Art & Designs', icon: '🎨', desc: 'Prices to be confirmed — contact us on WhatsApp.' },
  { name: 'Braiding & Weaves',  icon: '💇‍♀️', desc: 'Prices to be confirmed — contact us on WhatsApp.' },
  { name: 'Wig Installation',   icon: '👑', desc: 'Prices to be confirmed — contact us on WhatsApp.' },
  { name: 'Hair Treatments',    icon: '🌿', desc: 'Prices to be confirmed — contact us on WhatsApp.' },
]

export default function SalonServices() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__bg" aria-hidden="true" />
        <div className="container services-hero__inner">
          <span className="eyebrow-light">Badishi Beauty Salon</span>
          <span className="script-heading" style={{ color: 'var(--color-gold-light)' }}>Our Services</span>
          <h1 className="services-hero__title">Beauty Services &amp; Price List</h1>
          <p className="services-hero__sub">
            Affordable luxury for every woman. Book via WhatsApp — walk-ins always welcome.
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I would like to book an appointment. Please share your available dates and times.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            📲 Book Your Appointment
          </a>
        </div>
      </section>

      {/* Quick price summary strip */}
      <section className="services-price-strip bg-blush">
        <div className="container services-price-strip__inner">
          <div className="services-price-strip__item">
            <span className="services-price-strip__icon">💅</span>
            <strong>Short Nails</strong>
            <span className="services-price-strip__price">R300</span>
          </div>
          <div className="services-price-strip__divider" aria-hidden="true" />
          <div className="services-price-strip__item">
            <span className="services-price-strip__icon">🦶</span>
            <strong>Plain Pedicure</strong>
            <span className="services-price-strip__price">R250</span>
          </div>
          <div className="services-price-strip__divider" aria-hidden="true" />
          <div className="services-price-strip__item">
            <span className="services-price-strip__icon">✨</span>
            <strong>Combo Deal</strong>
            <span className="services-price-strip__price">R550</span>
          </div>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I would like to book an appointment. Please share your available dates and times.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Confirmed services */}
      <section className="section services-main">
        <div className="container">
          <SectionHeader
            eyebrow="Current Pricing"
            script="Nail Services"
            title="Our Confirmed Services"
            description="All prices as per our current price list. WhatsApp us to book your slot."
          />

          <div className="services-grid">
            {confirmedServices.map(svc => (
              <article
                className={`svc-card card${svc.isCombo ? ' svc-card--combo' : ''}`}
                key={svc.id}
                aria-label={`${svc.name}, ${svc.price}`}
              >
                {svc.isCombo && (
                  <div className="svc-card__combo-banner">
                    ✨ Best Value Combo
                  </div>
                )}

                <div className="svc-card__img-wrap">
                  <img
                    src={svc.imgSrc}
                    alt={svc.imgAlt}
                    className="svc-card__img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="img-placeholder svc-card__img-fallback" style={{ display: 'none', height: '240px' }}>
                    <span style={{ fontSize: '3rem' }}>{svc.icon}</span>
                  </div>
                  <span className="svc-card__category">{svc.category}</span>
                </div>

                <div className="svc-card__body">
                  <div className="svc-card__header">
                    <h3 className="svc-card__name">{svc.name}</h3>
                    <span className="svc-card__price">{svc.price}</span>
                  </div>
                  <p className="svc-card__desc">{svc.desc}</p>
                  <a
                    href={waBook(svc.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm ${svc.isCombo ? 'btn-gold' : 'btn-rose'}`}
                    aria-label={`Book ${svc.name} on WhatsApp`}
                  >
                    📲 Book on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="section bg-cream services-table-section">
        <div className="container">
          <SectionHeader
            eyebrow="Price Summary"
            title="Service Price List"
          />
          <div className="services-table-wrap">
            <table className="services-table" aria-label="Service price list">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Book</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Short Nails</strong></td>
                  <td>Clean, precise short nail set</td>
                  <td className="services-table__price">R300</td>
                  <td>
                    <a href={waBook('Short Nails (R300)')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                      Book
                    </a>
                  </td>
                </tr>
                <tr>
                  <td><strong>Plain Pedicure</strong></td>
                  <td>Soothing pedicure treatment</td>
                  <td className="services-table__price">R250</td>
                  <td>
                    <a href={waBook('Plain Pedicure (R250)')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                      Book
                    </a>
                  </td>
                </tr>
                <tr className="services-table__combo-row">
                  <td><strong>Nails + Pedicure Combo</strong></td>
                  <td>Short nails + plain pedicure — best value</td>
                  <td className="services-table__price">R550</td>
                  <td>
                    <a href={waBook('Nail + Pedicure Combo (R550)')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                      Book
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="services-table-note">
            * Prices confirmed from our current price list. Walk-ins welcome. For additional services, contact us on WhatsApp.
          </p>
        </div>
      </section>

      {/* Coming soon placeholder services */}
      <section className="section services-coming-soon">
        <div className="container">
          <SectionHeader
            eyebrow="More Services"
            title="Additional Services"
            description="The following services are available. Pricing will be confirmed soon — WhatsApp us to enquire."
          />
          <div className="services-placeholders">
            {placeholderServices.map(svc => (
              <div className="svc-placeholder card" key={svc.name}>
                <span className="svc-placeholder__icon">{svc.icon}</span>
                <h4>{svc.name}</h4>
                <p>{svc.desc}</p>
                <a
                  href={`${WA_BASE}?text=${encodeURIComponent(`Hello Badishi Beauty Salon, I would like to enquire about ${svc.name}. Please share pricing and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm mt-2"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk-in banner */}
      <section className="services-walkin-banner">
        <div className="container services-walkin-banner__inner">
          <div>
            <h2>Walk-ins Welcome</h2>
            <p>
              No appointment? No problem. Come visit us at Co.Space Entrepreneur Village, Randburg.
              We'll fit you in.
            </p>
          </div>
          <div className="services-walkin-banner__actions">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I would like to book an appointment. Please share your available dates and times.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              📲 Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
