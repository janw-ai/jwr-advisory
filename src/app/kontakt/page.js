export const metadata = {
  title: 'Kontakt – JWR Advisory | Gespräch vereinbaren',
  description: 'Kontaktieren Sie JWR Advisory für ein unverbindliches Erstgespräch. Embedded Finance, KI-Beratung, Consulting für Finanzdienstleister.',
  alternates: { canonical: 'https://jwr-advisory.com/kontakt' },
}

export default function Kontakt() {
  return (
    <section className="cta-section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Bereit für ein Gespräch<br /><span className="b">ohne PowerPoint?</span></h1>
        <p className="g" style={{ fontSize: 14, fontWeight: 300, marginBottom: 32, textAlign: 'center' }}>30 Minuten. Unverbindlich.</p>
        <div style={{ maxWidth: 420, margin: '0 auto', textAlign: 'left' }}>
          <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>E-Mail</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}><a href="mailto:info@jwr-advisory.com" style={{ color: 'var(--grey)' }}>info@jwr-advisory.com</a></p></div>
          <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>LinkedIn</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}><a href="https://www.linkedin.com/in/janwichmann/" target="_blank" rel="noopener" style={{ color: 'var(--grey)' }}>Jan Wichmann</a></p></div>
          <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>Unternehmen</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}>JWR Advisory GmbH · München &amp; Frankfurt</p></div>
        </div>
      </div>
    </section>
  )
}
