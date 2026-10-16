import React from 'react'

export default function SectionHeader({ eyebrow, title, script, description }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {script  && <span className="script-heading">{script}</span>}
      {title   && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <div className="divider-gold" />
    </div>
  )
}
