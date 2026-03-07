import Link from 'next/link'

export const metadata = {
  title: 'Consulting & Interim Management für Financial Services | JWR Advisory',
  description: 'Interim Management, Programmleitung und Due Diligence für Banken und Versicherer im DACH-Raum. Operative Erfahrung aus dem Aufbau regulierter Finanzdienstleister.',
  keywords: 'Interim Management Bank, Programmleitung Versicherung, Due Diligence Financial Services, Value Creation Post-Merger, CDO Interim DACH, CTO Interim Finanzdienstleister',
  alternates: { canonical: 'https://jwr-advisory.com/consulting' },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Consulting & Interim Management für Financial Services",
  "provider": { "@type": "Organization", "name": "JWR Advisory" },
  "description": "Programmleitung, Interim Management, Due Diligence und Value Creation für Finanzdienstleister in Transformationsphasen.",
  "areaServed": [{ "@type": "Country", "name": "Germany" }, { "@type": "Country", "name": "Austria" }, { "@type": "Country", "name": "Switzerland" }],
  "serviceType": "Interim Management and Consulting for Financial Services"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wie schnell ist JWR Advisory verfügbar?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 2-4 Wochen. Für dringende Mandate auch kurzfristiger." }},
    { "@type": "Question", "name": "Welche Rollen übernimmt JWR im Interim Management?", "acceptedAnswer": { "@type": "Answer", "text": "CDO, CTO, Head of Digital, Programmleiter. Immer mit Financial-Services-Erfahrung." }},
    { "@type": "Question", "name": "Was unterscheidet JWR von Interim-Vermittlern?", "acceptedAnswer": { "@type": "Answer", "text": "Wir übernehmen selbst operative Verantwortung. Unser Gründer hat regulierte Finanzdienstleister aufgebaut – BaFin-Lizenz, Marktführerschaft." }},
    { "@type": "Question", "name": "Wie unterstützt JWR Private Equity bei Financial Services?", "acceptedAnswer": { "@type": "Answer", "text": "Investment-Thesen, Target-Screening, technische Due Diligence, Value-Creation-Pläne erstellen und umsetzen." }},
  ]
}

export default function Consulting() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <span className="mtag">Consulting</span>
        <h1>Consulting &<br /><span className="b">Interim Management.</span></h1>
        <p className="sub">Wenn kurzfristig Führungskompetenz gebraucht wird – in einer Transformationsphase, bei einer vakanten Position, für ein komplexes Programm. Kein Beratungskonzept. Operative Verantwortung.</p>
        <p className="g" style={{ fontSize: 13, fontWeight: 300, maxWidth: 580, marginBottom: 24 }}>Wir bringen operative Erfahrung aus dem Aufbau und der Führung regulierter Finanzdienstleister. Wir kennen die Perspektive von Entscheidern, weil wir selbst in diesen Rollen gearbeitet haben.</p>
        <a href="/kontakt" className="btn">Erstgespräch vereinbaren</a>

        <p className="label" style={{ marginTop: 44 }}>Wann man uns anruft</p>
        <div className="grid2" style={{ marginTop: 12 }}>
          <div className="card"><div className="accent" /><h3>Programmleitung</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Ein Transformationsprogramm braucht operative Steuerung mit Financial-Services-Erfahrung. Stakeholder-Management, Deadlines, Ergebnisse.</p></div>
          <div className="card"><div className="accent" /><h3>Interim Management</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>CDO, CTO oder Head of Digital ist vakant – die nächsten Monate sind entscheidend. Operative Verantwortung auf Zeit, saubere Übergabe.</p></div>
          <div className="card"><div className="accent" /><h3>Due Diligence & Value Creation</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Unabhängige Bewertung von Technologie, Prozessen und Skalierungspotenzial. Value-Creation-Pläne mit konkreten Hebeln.</p></div>
          <div className="card"><div className="accent" /><h3>KI-Expertise auf Zeit</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>KI-Implementierung geplant, aber dem Team fehlt regulatorische Erfahrung und Kapazität. Wir bringen beides mit.</p></div>
        </div>
      </div>
    </section>

    <section className="bg" style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label">Fallstudie</p>
        <div className="case-card">
          <div className="case-metric"><div className="case-metric-val">9 Mo.</div><div className="case-metric-label">Value Creation</div></div>
          <div className="case-body">
            <h3>Finanzdienstleister · Post-Merger</h3>
            <div className="case-cols" style={{ marginTop: 12 }}>
              <div><p className="case-col-label">Ausgangslage</p><p>PE-Investor hatte einen Finanzdienstleister übernommen. Technologie-Konsolidierung, Prozessharmonisierung, regulatorische Integration – gleichzeitig.</p></div>
              <div><p className="case-col-label">Lösung</p><p>Programmleitung übernommen. Workstreams priorisiert, Umsetzung gesteuert. Vendor-Konsolidierung, IT-Roadmap, BaFin-Abstimmung.</p></div>
              <div><p className="case-col-label">Ergebnis</p><p>Programm nach neun Monaten planmäßig an interne Organisation übergeben. Value-Creation-Ziele erreicht.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section style={{ padding: '50px 0' }}>
      <div className="w" style={{ maxWidth: 780 }}>
        <p className="label">Häufige Fragen</p>
        <h2>Consulting & Interim <span className="b">für Financial Services.</span></h2>
        {[
          { q: 'Wie schnell ist JWR Advisory verfügbar?', a: 'In der Regel innerhalb von 2-4 Wochen. Für dringende Mandate auch kurzfristiger. Wir sind bewusst schlank aufgestellt, damit wir flexibel reagieren können.' },
          { q: 'Welche Rollen übernimmt JWR im Interim Management?', a: 'CDO, CTO, Head of Digital, Programmleiter. Immer mit Financial-Services-Erfahrung und regulatorischem Verständnis. Operative Verantwortung, nicht nur Beratung.' },
          { q: 'Wie läuft eine Due Diligence mit JWR ab?', a: 'Technologie- und Prozessbewertung, Skalierungspotenzial, Risiko-Mapping. Ergebnis ist ein strukturierter Report mit konkreten Value-Creation-Hebeln. Typische Dauer: 4-6 Wochen.' },
          { q: 'Was unterscheidet JWR von klassischen Interim-Vermittlern?', a: 'Wir sind keine Vermittler. Wir übernehmen selbst operative Verantwortung. Unser Gründer hat selbst regulierte Finanzdienstleister aufgebaut – BaFin-Lizenz, Marktführerschaft, KPMG-Erfahrung. Das ist der Unterschied zwischen jemandem, der die Theorie kennt, und jemandem, der es gemacht hat.' },
          { q: 'Wie unterstützt JWR Private Equity bei Financial Services Investments?', a: 'Über den gesamten Zyklus: Investment-Thesen entwickeln, Targets screenen, technische Due Diligence durchführen, Value-Creation-Pläne erstellen und umsetzen. Wir kennen den DACH-Markt für IT-Services und FinTech-Beteiligungen aus eigener Erfahrung.' },
          { q: 'Was kostet Interim Management durch JWR Advisory?', a: 'Wir arbeiten mit Tagessätzen, die sich am Umfang und der Komplexität orientieren. Programmleitung typischerweise 3-6 Monate, Due Diligence 4-6 Wochen, Interim-Rollen 6-12 Monate. Konkrete Konditionen besprechen wir im Erstgespräch.' },
        ].map((faq, i) => (
          <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(39,71,110,.12)' }}>
            <h3 style={{ fontSize: 15, marginBottom: 8 }}>{faq.q}</h3>
            <p className="g" style={{ fontSize: 13, fontWeight: 300 }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: '30px 0 50px' }}>
      <div className="w">
        <p className="label">Verwandte Themen</p>
        <div className="grid3">
          <Link href="/embedded-finance" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">Embedded Finance</span><h3>Embedded Finance Implementation</h3></Link>
          <Link href="/ki-beratung" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">KI-Beratung</span><h3>KI-Beratung für Finanzdienstleister</h3></Link>
          <Link href="/blog/cobol-claude-banking-legacy" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="blog-tag">Blog</span><h3 style={{ marginTop: 8 }}>95% aller Banktransaktionen laufen auf COBOL</h3></Link>
        </div>
      </div>
    </section>
  </>)
}
