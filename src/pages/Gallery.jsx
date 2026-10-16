import React, { useState, useEffect, useCallback } from 'react'
import SectionHeader from '../components/SectionHeader'
import './Gallery.css'

const WA_BASE = 'https://wa.me/27761595942'

const allImages = [
  /* Wigs */
  { id: 1,  src: '/assets/wigs/wig-curly-01.jpg',  alt: '13×4 Curly Frontal Wig — Style 1', category: 'wigs',  label: 'Curly Frontal Wig' },
  { id: 2,  src: '/assets/wigs/wig-curly-02.jpg',  alt: '13×4 Curly Frontal Wig — Style 2', category: 'wigs',  label: 'Curly Frontal Wig' },
  { id: 3,  src: '/assets/wigs/wig-curly-03.jpg',  alt: '13×4 Curly Frontal Wig — Style 3', category: 'wigs',  label: 'Curly Frontal Wig' },
  { id: 4,  src: '/assets/wigs/wig-curly-04.jpg',  alt: '13×4 Curly Frontal Wig — Style 4', category: 'wigs',  label: 'Curly Frontal Wig' },
  /* Nails */
  { id: 5,  src: '/assets/nails/nail-art-01.jpg',  alt: 'Short nail set by Badishi Beauty Salon',   category: 'nails', label: 'Short Nails' },
  { id: 6,  src: '/assets/nails/pedicure-01.jpg',  alt: 'Pedicure treatment at Badishi Beauty Salon', category: 'nails', label: 'Pedicure' },
  /* Hero / general */
  { id: 7,  src: '/assets/hero-girl.jpg',           alt: 'Badishi Beauty Salon featured look',       category: 'looks', label: 'Beauty Look' },
]

const categories = [
  { key: 'all',   label: 'All Work' },
  { key: 'wigs',  label: 'Wigs & Hair' },
  { key: 'nails', label: 'Nails & Pedicure' },
  { key: 'looks', label: 'Beauty Looks' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox]         = useState(null) // index into filtered

  const filtered = activeFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeFilter)

  const openLightbox  = (idx) => setLightbox(idx)
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % filtered.length)
  }, [filtered.length])

  // Keyboard nav
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'Escape')     closeLightbox()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, prev, next])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <main className="gallery-page">

      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero__bg" aria-hidden="true" />
        <div className="container gallery-hero__inner">
          <span className="eyebrow-light">Our Work</span>
          <span className="script-heading" style={{ color: 'var(--color-gold-light)', fontSize: '3rem' }}>Gallery</span>
          <h1 className="gallery-hero__title">Beauty in Every Detail</h1>
          <p className="gallery-hero__sub">Browse our collection of wigs, nail art, pedicures, and beautiful looks.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-main">
        <div className="container">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Our Beauty Work"
            description="Click any image to view it in full. New photos are added regularly."
          />

          {/* Filters */}
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
            {categories.map(cat => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeFilter === cat.key}
                className={`gallery-filter-btn${activeFilter === cat.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
                <span className="gallery-filter-count">
                  {cat.key === 'all' ? allImages.length : allImages.filter(i => i.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid" role="list">
            {filtered.map((img, idx) => (
              <button
                key={img.id}
                className="gallery-item"
                role="listitem"
                onClick={() => openLightbox(idx)}
                aria-label={`View ${img.alt}`}
              >
                <div className="gallery-item__img-wrap">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery-item__img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="img-placeholder gallery-item__fallback" style={{ display: 'none', height: '100%', minHeight: '220px' }}>
                    <span>{img.label}</span>
                  </div>
                  <div className="gallery-item__overlay" aria-hidden="true">
                    <span className="gallery-item__overlay-icon">🔍</span>
                    <span className="gallery-item__overlay-label">{img.label}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="gallery-empty">No images in this category yet. Check back soon!</p>
          )}
        </div>
      </section>

      {/* Add photos note */}
      <section className="section-sm bg-cream gallery-upload-note">
        <div className="container">
          <div className="gallery-upload-note__inner">
            <span className="gallery-upload-note__icon">📸</span>
            <div>
              <h4>Growing Gallery</h4>
              <p>
                New photos are added regularly. To order any wig or book a nail service you see here,
                WhatsApp us directly.
              </p>
            </div>
            <a
              href={`${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I saw your gallery and I would like to enquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
            >
              📲 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close image viewer">✕</button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">‹</button>

          <div className="lightbox__content">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="lightbox__img"
            />
            <div className="lightbox__caption">
              <span>{filtered[lightbox].label}</span>
              <span className="lightbox__counter">{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">›</button>
        </div>
      )}

    </main>
  )
}
