import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import './AboutContact.css'

const WA_BASE = 'https://wa.me/27761595942'
const waBook  = `${WA_BASE}?text=${encodeURIComponent('Hello Badishi Beauty Salon, I would like to book an appointment. Please share your available dates and times.')}`

export default function AboutContact() {
  const [form, setForm]     = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent]     = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name.'
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number.'
    if (!form.message.trim()) e.message = 'Please enter a message.'
    return e
  }

  const handleChange = (field) => (ev) => {
    setForm(f => ({ ...f, [field]: ev.target.value }))
    setErrors(e => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    /* Redirect to WhatsApp with prefilled message */
    const msg = `Hello Badishi Beauty Salon!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    const url  = `${WA_BASE}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true" />
        <div className="container about-hero__inner">
          <span className="eyebrow-light">Get to Know Us</span>
          <span className="script-heading" style={{ color: 'var(--color-gold-light)', fontSize: '3rem' }}>About Badishi</span>
          <h1 className="about-hero__title">Beauty, Confidence &amp; Quality</h1>
          <p className="about-hero__sub">
            Your go-to destination for stunning wigs, expert nail services, and everything that
            makes you feel like the queen you are.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <SectionHeader
              eyebrow="Our Story"
              script="Who We Are"
              title="Badishi Beauty Salon"
            />
            <p>
              Badishi Beauty Salon &amp; Beauty Supply is a proudly South African beauty destination
              based in Randburg, Johannesburg. We believe every woman deserves to look and feel
              extraordinary — and we're here to make that happen.
            </p>
            <p style={{ marginTop: '1rem' }}>
              From premium 13×4 SDD Pixie Curly Frontal Wigs to flawless nail sets and
              relaxing pedicures, we take every detail seriously. Our goal is simple: to give
              you a beauty experience that leaves you feeling confident, beautiful, and ready to
              own your crown.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We welcome walk-ins and bookings via WhatsApp. Come as you are — leave looking
              like the best version of yourself.
            </p>

            <div className="about-story__values">
              {[
                { icon: '♛', label: 'Quality First'   },
                { icon: '💫', label: 'Confidence'      },
                { icon: '❤️', label: 'Care for Every Client' },
              ].map(v => (
                <div className="about-value-chip" key={v.label}>
                  <span>{v.icon}</span>
                  <span>{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-story__img-col">
            <div className="about-story__img-frame">
              <img
                src="/assets/hero-girl.jpg"
                alt="Badishi Beauty Salon — Your Hair, Your Crown"
                className="about-story__img"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="img-placeholder about-story__img-fallback" style={{ display: 'none', minHeight: '420px' }}>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.8rem' }}>Badishi Beauty</span>
              </div>
              <div className="about-story__img-badge">
                <span>♛</span>
                <span>Your Crown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-sm bg-blush about-info">
        <div className="container about-info__grid">
          <div className="about-info-card card">
            <span className="about-info-card__icon">📍</span>
            <h4>Location</h4>
            <p>Co.Space Entrepreneur Village<br />Randburg, Johannesburg<br />South Africa</p>
            <a
              href="https://maps.google.com/?q=Co.Space+Entrepreneur+Village,+Randburg,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-2"
              aria-label="Get directions to Badishi Beauty Salon on Google Maps"
            >
              Get Directions
            </a>
          </div>

          <div className="about-info-card card">
            <span className="about-info-card__icon">📲</span>
            <h4>Salon Bookings</h4>
            <p>
              Book your appointment on WhatsApp — we'll confirm your slot quickly.
              Walk-ins are also welcome.
            </p>
            <a
              href={waBook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm mt-2"
            >
              076 159 5942
            </a>
          </div>

          <div className="about-info-card card">
            <span className="about-info-card__icon">💈</span>
            <h4>Beauty Supply</h4>
            <p>
              For wig and hair product enquiries, contact our beauty supply line.
            </p>
            <a
              href={`https://wa.me/27601234567?text=${encodeURIComponent('Hello Badishi Beauty Supply, I would like to enquire about your hair products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-2"
            >
              060 123 4567
            </a>
          </div>

          <div className="about-info-card card">
            <span className="about-info-card__icon">🕐</span>
            <h4>Opening Hours</h4>
            <p className="about-info-card__placeholder">
              Opening hours will be published soon. WhatsApp us to confirm availability.
            </p>
            <a
              href={waBook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-2"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* Map + Contact form */}
      <section className="section about-contact">
        <div className="container about-contact__grid">

          {/* Map */}
          <div className="about-map">
            <h3 className="about-map__title">Find Us</h3>
            <div className="about-map__embed">
              <iframe
                title="Badishi Beauty Salon location — Co.Space Entrepreneur Village, Randburg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5498!2d27.9898!3d-26.1045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573e8cfe0c90d%3A0x6d76d48a0f6d6a70!2sCo.Space%20Entrepreneur%20Village%2C%20Randburg!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="340"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Co.Space+Entrepreneur+Village,+Randburg,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-3"
            >
              📍 Open in Google Maps
            </a>
          </div>

          {/* Contact Form */}
          <div className="about-form-wrap">
            <h3>Send Us a Message</h3>
            <p className="about-form-note">
              Fill in the form and it will open WhatsApp with your message pre-filled —
              no email needed.
            </p>

            {sent ? (
              <div className="about-form-success">
                <span>🎉</span>
                <h4>Message sent to WhatsApp!</h4>
                <p>We'll get back to you as soon as possible.</p>
                <button className="btn btn-outline btn-sm mt-3" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="about-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="about-form__group">
                  <label htmlFor="name">Your Name <span aria-hidden="true">*</span></label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="e.g. Thabo Mokoena"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span id="name-error" className="about-form__error" role="alert">{errors.name}</span>}
                </div>

                <div className="about-form__group">
                  <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    placeholder="e.g. 076 123 4567"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span id="phone-error" className="about-form__error" role="alert">{errors.phone}</span>}
                </div>

                <div className="about-form__group">
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="e.g. I'd like to enquire about a 24-inch wig / book a nail appointment..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span id="message-error" className="about-form__error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-whatsapp">
                  📲 Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Media Placeholder */}
      <section className="section-sm bg-cream about-social">
        <div className="container text-center">
          <h3>Follow Us</h3>
          <p className="mt-1" style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>
            Social media links coming soon — follow us on Instagram, Facebook, and TikTok for the latest looks.
          </p>
          <div className="about-social-placeholders">
            <span className="about-social-chip">Instagram — coming soon</span>
            <span className="about-social-chip">Facebook — coming soon</span>
            <span className="about-social-chip">TikTok — coming soon</span>
          </div>
        </div>
      </section>

    </main>
  )
}
