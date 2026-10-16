# Badishi Beauty Salon — Image Setup Guide

Place your photos in the correct folder and the website will display them automatically.
Until a photo is added, the site shows a branded placeholder box — nothing breaks.

---

## Folder structure

```
assets/
└── images/
    ├── hero-girl.jpg          ← Homepage hero photo (your girl's portrait)
    ├── favicon.svg            ← Already created ✓
    ├── wigs/
    │   ├── wig-curly-01.jpg   ← Wig style 1  (used for 18" and 26")
    │   ├── wig-curly-02.jpg   ← Wig style 2  (used for 20" and 28")
    │   ├── wig-curly-03.jpg   ← Wig style 3  (used for 22" and 30")
    │   └── wig-curly-04.jpg   ← Wig style 4  (used for 24")
    └── nails/
        ├── nail-art-01.jpg    ← Nail set photo
        └── pedicure-01.jpg    ← Pedicure photo
```

---

## Hero photo

Save as: `assets/images/hero-girl.jpg`
Recommended size: 800×1100 px portrait, JPG quality 85.

---

## Wig photos

Extract from your Badishi Beauty Supply poster.
Crop each individual wig model — remove poster text, prices, and TikTok UI.
Save each crop as a separate file in `assets/images/wigs/`.
Recommended: 600×700 px or larger, JPG quality 85.

---

## Nail and pedicure photos

Extract from your Badishi nail/pedicure price-list poster.
Save in `assets/images/nails/`.
Recommended: 600×500 px, JPG quality 85.

---

## Adding more photos to the gallery

Open `gallery.html` and copy an existing `.gal-item` block.
Update the `src`, `alt`, `data-category`, and `data-label` attributes.
Also update the filter counts in the `<span class="gal-count">` buttons at the top.

---

## GitHub Pages

This site works on GitHub Pages as-is.
Push all files (including `assets/`, `css/`, `js/`, and all `.html` files) to your repo.
Enable GitHub Pages from the `main` branch root in your repo settings.
