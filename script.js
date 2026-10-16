/* ============================================================
   BADISHI BEAUTY SALON — Main JavaScript
   ============================================================ */

const WA_NUMBER = '27761595942';
const WA_SUPPLY = '27601234567';

function waLink(msg, supply = false) {
  const num = supply ? WA_SUPPLY : WA_NUMBER;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

/* ============================================================
   1. NAVBAR — scroll effect, active link, mobile drawer
   ============================================================ */
(function initNavbar() {
  const navbar   = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const drawer   = document.querySelector('.nav-drawer');

  if (!navbar) return;

  /* Scrolled class */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on link click */
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') &&
          !drawer.contains(e.target) &&
          !hamburger.contains(e.target)) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* Active link highlighting */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .drawer-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const hPage = href.split('/').pop();
    const isHome = (currentPage === 'index.html' || currentPage === '') && (hPage === 'index.html' || hPage === '');
    const isMatch = hPage && hPage !== 'index.html' && currentPage === hPage;
    if (isHome || isMatch) a.classList.add('active');
  });
})();

/* ============================================================
   2. SCROLL REVEAL ANIMATION
   ============================================================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();

/* ============================================================
   3. PRODUCT FILTER (Hair & Beauty Supply page)
   ============================================================ */
(function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.prod-card').forEach(card => {
        const cat = card.dataset.category || 'all';
        const show = filter === 'all' || cat === filter;
        card.style.display = show ? '' : 'none';
        card.style.animation = show ? 'fadeUp .45s ease both' : 'none';
      });
    });
  });
})();

/* ============================================================
   4. GALLERY FILTER + LIGHTBOX
   ============================================================ */
(function initGallery() {
  /* --- Filter buttons --- */
  const galFilterBtns = document.querySelectorAll('.gal-filter-btn');
  const galItems      = document.querySelectorAll('.gal-item');

  if (galFilterBtns.length) {
    galFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.dataset.filter;
        let visible = 0;
        galItems.forEach(item => {
          const cat = item.dataset.category || '';
          const show = filter === 'all' || cat === filter;
          item.style.display = show ? '' : 'none';
          if (show) visible++;
        });

        const emptyMsg = document.querySelector('.gal-empty');
        if (emptyMsg) emptyMsg.style.display = visible === 0 ? '' : 'none';
      });
    });
  }

  /* --- Lightbox --- */
  const lightbox  = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbImg     = lightbox.querySelector('.lb-img');
  const lbLabel   = lightbox.querySelector('.lb-label');
  const lbCounter = lightbox.querySelector('.lb-counter');
  const lbClose   = lightbox.querySelector('.lb-close');
  const lbPrev    = lightbox.querySelector('.lb-prev');
  const lbNext    = lightbox.querySelector('.lb-next');

  let currentIndex = 0;

  function getVisibleItems() {
    return Array.from(document.querySelectorAll('.gal-item'))
      .filter(el => el.style.display !== 'none');
  }

  function openLightbox(index) {
    const items = getVisibleItems();
    if (!items[index]) return;
    currentIndex = index;

    const img   = items[index].querySelector('img');
    const label = items[index].dataset.label || '';

    if (img) {
      lbImg.src = img.src;
      lbImg.alt = img.alt || label;
    }
    if (lbLabel)   lbLabel.textContent   = label;
    if (lbCounter) lbCounter.textContent = `${index + 1} / ${items.length}`;

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    const items = getVisibleItems();
    currentIndex = (currentIndex + dir + items.length) % items.length;
    openLightbox(currentIndex);
  }

  /* Open on gallery item click */
  document.querySelectorAll('.gal-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      const visIdx = visibleItems.indexOf(item);
      if (visIdx !== -1) openLightbox(visIdx);
    });
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click',  () => navigate(-1));
  if (lbNext)  lbNext.addEventListener('click',  () => navigate(1));

  /* Close on backdrop click */
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  /* Keyboard nav */
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ============================================================
   5. CONTACT FORM — validates then opens WhatsApp
   ============================================================ */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  if (!form) return;

  const success = document.getElementById('formSuccess');
  const resetBtn = document.getElementById('formReset');

  function getField(id)     { return document.getElementById(id); }
  function getError(id)     { return document.getElementById(id + 'Error'); }

  function showError(id, msg) {
    const input = getField(id);
    const err   = getError(id);
    if (input) input.classList.add('error');
    if (err)   { err.textContent = msg; err.classList.add('visible'); }
  }

  function clearError(id) {
    const input = getField(id);
    const err   = getError(id);
    if (input) input.classList.remove('error');
    if (err)   err.classList.remove('visible');
  }

  /* Live clear on input */
  ['contactName','contactPhone','contactMessage'].forEach(id => {
    const el = getField(id);
    if (el) el.addEventListener('input', () => clearError(id));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const name    = (getField('contactName')?.value    || '').trim();
    const phone   = (getField('contactPhone')?.value   || '').trim();
    const message = (getField('contactMessage')?.value || '').trim();

    if (!name)    { showError('contactName',    'Please enter your name.');         valid = false; }
    if (!phone)   { showError('contactPhone',   'Please enter your phone number.'); valid = false; }
    if (!message) { showError('contactMessage', 'Please enter a message.');         valid = false; }

    if (!valid) return;

    /* Build WhatsApp URL */
    const waMsg = `Hello Badishi Beauty Salon!\n\nName: ${name}\nPhone: ${phone}\n\nMessage: ${message}`;
    window.open(waLink(waMsg), '_blank', 'noopener,noreferrer');

    /* Show success state */
    form.style.display = 'none';
    if (success) success.classList.add('visible');
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = '';
      if (success) success.classList.remove('visible');
      ['contactName','contactPhone','contactMessage'].forEach(id => clearError(id));
    });
  }
})();

/* ============================================================
   6. SMOOTH SCROLL for anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   7. LAZY IMAGE FALLBACK — show placeholder if image 404s
   ============================================================ */
document.querySelectorAll('img[data-ph]').forEach(img => {
  img.addEventListener('error', function () {
    const ph = document.getElementById(this.dataset.ph);
    if (ph) {
      this.style.display = 'none';
      ph.style.display   = 'flex';
    }
  });
});

/* ============================================================
   8. YEAR in footer copyright
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============================================================
   9. WHATSAPP LINK HELPERS
      Called from inline onclick attributes in HTML
   ============================================================ */
function bookAppointment() {
  window.open(waLink('Hello Badishi Beauty Salon, I would like to book an appointment. Please share your available dates and times.'), '_blank', 'noopener,noreferrer');
}

function enquireWig(length, price) {
  const msg = `Hello Badishi Beauty Salon, I would like to enquire about the ${length} 13x4 SDD Pixie Curly Frontal Wig priced at ${price}. Please share more details.`;
  window.open(waLink(msg), '_blank', 'noopener,noreferrer');
}

function bookService(name, price) {
  const msg = `Hello Badishi Beauty Salon, I would like to book ${name} (${price}). Please share your available dates and times.`;
  window.open(waLink(msg), '_blank', 'noopener,noreferrer');
}

function enquireSupply() {
  window.open(waLink('Hello Badishi Beauty Supply, I would like to enquire about your hair products and wigs. Please share more details.', true), '_blank', 'noopener,noreferrer');
}
