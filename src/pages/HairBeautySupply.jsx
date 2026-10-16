import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import './HairBeautySupply.css'

const WA_BASE = 'https://wa.me/27761595942'

/* Wig data — update prices/images here */
const wigs = [
  { id: 1, length: '18 Inch', price: 'R2,500', src: '/assets/wigs/wig-curly-01.jpg', alt: 'Badishi 18-inch pixie curly frontal wig' },
  { id: 2, length: '20 Inch', price: 'R2,700', src: '/assets/wigs/wig-curly-02.jpg', alt: 'Badishi 20-inch pixie curly frontal wig' },
  { id: 3, length: '22 Inch', price: 'R2,990', src: '/assets/wigs/wig-curly-03.jpg', alt: 'Badishi 22-inch pixie curly frontal wig' },
  { id: 4, length: '24 Inch', price: 'R3,450', src: '/assets/wigs/wig-curly-04.jpg', alt: 'Badishi 24-inch pixie curly frontal wig' },
  { id: 5, length: '26 Inch', price: 'R3,950', src: '/assets/wigs/wig-curly-01.jpg', alt: 'Badishi 26-inch pixie curly frontal wig' },
  { id: 6, length: '28 Inch', price: 'R4,550', src: '/assets/wigs/wig-curly-02.jpg', alt: 'Badishi 28-inch pixie curly frontal wig' },
  { id: 7, length: '30 Inch', price: 'R5,590', src: '/assets/wigs/wig-curly-03.jpg', alt: 'Badishi 30-inch pixie curly frontal wig' },
]

function waLink(wig) {
  const msg = `Hello Badishi Beauty Salon, I would like to enquire about the ${wig.length} 13x4 SDD Pixie Curly Frontal Wig priced at ${wig.price}. Please share more details.`
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}

export default function HairBeautySupply() {
  const [activeFilter, setActiveFilter] = useState('all')

  const shortWigs = wigs.filter(w => parseInt(w.length) <= 22)
  const medWigs   = wigs.filter(w => parseInt(w.length) > 22 && parseInt(w.length) <= 26)
  const longWigs  = wigs.filter(w => parseInt(w.length) > 26)

  const filtered =
    activeFilter === 'short' ? shortWigs :
    activeFilter === 'medium' ? medWigs :
    activeFilter === 'long'   ? longWigs : wigs

  return (
    <main className="hair-page">

      {/* Hero Banner */}
      <section className="hair-hero">
        <div className="hair-hero__bg" aria-hidden="true" />
        <div className="container hair-hero__inner">
          <span className="eyebrow-light">Badishi Beauty Supply</span>
          <span className="script-heading" style={{ color: '#fff' }}>Hair &amp; Wigs</span>
          <h1 className="hair-hero__title">13×4 SDD Pixie Curly<br />Frontal Wigs</h1>
          <p className="hair-hero__sub">
            Premium quality curly frontal wigs — available in 7 lengths, starting from R2,500.
            Order via WhatsApp and we'll assist you every step of the way.
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Supply, I would like to enquire about your frontal wigs. Please share more details.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            📲 Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Product Info Strip */}
      <section className="section-sm bg-blush">
        <div className="container hair-info-strip">
          <div className="hair-info-strip__item">
            <span className="hair-info-strip__icon">👑</span>
            <div>
              <strong>Product</strong>
              <span>13×4 SDD Pixie Curly Frontal Wig</span>
            </div>
          </div>
          <div className="hair-info-strip__item">
            <span className="hair-info-strip__icon">📏</span>
            <div>
              <strong>Lengths Available</strong>
              <span>18" — 30"</span>
            </div>
          </div>
          <div className="hair-info-strip__item">
            <span className="hair-info-strip__icon">💰</span>
            <div>
              <strong>Starting From</strong>
              <span>R2,500</span>
            </div>
          </div>
          <div className="hair-info-strip__item">
            <span className="hair-info-strip__icon">📲</span>
            <div>
              <strong>Order Via</strong>
              <span>WhatsApp — 060 123 4567 (Beauty Supply)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wig Collection */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Collection"
            script="Wigs for Every Length"
            title="Choose Your Perfect Wig"
            description="Each wig is carefully crafted with a 13×4 lace frontal for a natural hairline and a full, luscious curly texture."
          />

          {/* Filter */}
          <div className="hair-filters">
            {[
              { key: 'all',    label: 'All Lengths' },
              { key: 'short',  label: 'Short (18"–22")' },
              { key: 'medium', label: 'Medium (24"–26")' },
              { key: 'long',   label: 'Long (28"–30")' },
            ].map(f => (
              <button
                key={f.key}
                className={`hair-filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="hair-wigs__grid">
            {filtered.map(wig => (
              <article className="wig-card card" key={wig.id} aria-label={`${wig.length} frontal wig, ${wig.price}`}>
                <div className="wig-card__img-wrap">
                  <img
                    src={wig.src}
                    alt={wig.alt}
                    className="wig-card__img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="img-placeholder wig-card__img-fallback" style={{ display: 'none', height: '300px' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.3rem' }}>{wig.length}</p>
                      <p style={{ fontSize: '0.78rem', marginTop: '0.3rem' }}>
                        Add photo: <code>/assets/wigs/wig-curly-0{wig.id}.jpg</code>
                      </p>
                    </div>
                  </div>
                  <span className="wig-card__length-tag">{wig.length}</span>
                </div>

                <div className="wig-card__body">
                  <h3 className="wig-card__title">13×4 Pixie Curly Frontal Wig</h3>
                  <p className="wig-card__desc">
                    Lace frontal, natural hairline, full curly texture.
                    Available in {wig.length}.
                  </p>
                  <div className="wig-card__footer">
                    <span className="wig-card__price">{wig.price}</span>
                    <a
                      href={waLink(wig)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                      aria-label={`Order ${wig.length} wig on WhatsApp`}
                    >
                      📲 Order on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="section bg-cream hair-price-table-section">
        <div className="container">
          <SectionHeader
            eyebrow="Transparent Pricing"
            title="Wig Price List"
            description="All prices are for 13×4 SDD Pixie Curly Frontal Wigs. Contact us on WhatsApp to confirm availability."
          />

          <div className="hair-price-table-wrap">
            <table className="hair-price-table" aria-label="Wig price list">
              <thead>
                <tr>
                  <th>Length</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Order</th>
                </tr>
              </thead>
              <tbody>
                {wigs.map(w => (
                  <tr key={w.id}>
                    <td><strong>{w.length}</strong></td>
                    <td>13×4 SDD Pixie Curly Frontal Wig</td>
                    <td className="hair-price-table__price">{w.price}</td>
                    <td>
                      <a
                        href={waLink(w)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        Order
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hair-price-note">
            * Prices subject to change. Contact us on WhatsApp to confirm current pricing and availability.
            For beauty supply enquiries, call <strong>060 123 4567</strong>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brown hair-cta">
        <div className="container text-center">
          <span className="script-heading" style={{ color: 'var(--color-gold-light)', fontSize: '2.5rem' }}>
            Ready for Your New Look?
          </span>
          <p style={{ color: 'rgba(253,246,239,0.75)', maxWidth: '480px', margin: '1rem auto 2rem' }}>
            Message us on WhatsApp and we'll help you find the perfect wig length and style.
          </p>
          <a
            href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Supply, I would like to enquire about your frontal wigs. Please share more details and availability.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            📲 Chat With Us on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
