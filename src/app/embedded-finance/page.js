import Link from 'next/link'

export const metadata = {
  title: 'Embedded Finance Beratung für Finanzdienstleister | JWR Advisory',
  description: 'Embedded Finance Implementation für Banken, Versicherungen und Plattformen im DACH-Raum. Banking-as-a-Service, Payments, Lending. PSD2, FIDA, DORA. Von der Strategie bis Go-Live.',
  keywords: 'Embedded Finance Beratung, Banking-as-a-Service Deutschland, BaaS Beratung, Embedded Payments, Embedded Lending, PSD2, FIDA, DORA, Open Banking Beratung DACH',
  alternates: { canonical: 'https://jwr-advisory.com/embedded-finance' },
  openGraph: { title: 'Embedded Finance Beratung – JWR Advisory', description: 'Von der Strategie bis zur Live-Integration. Für Banken, Versicherungen und Plattformen im DACH-Raum.' },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Embedded Finance Beratung",
  "provider": { "@type": "Organization", "name": "JWR Advisory" },
  "description": "Strategieberatung und Implementierungsbegleitung für Embedded Finance im regulierten Finanzumfeld. Banking-as-a-Service, Payments, Lending, Contextual Finance.",
  "areaServed": [{ "@type": "Country", "name": "Germany" }, { "@type": "Country", "name": "Austria" }, { "@type": "Country", "name": "Switzerland" }],
  "serviceType": "Embedded Finance Consulting"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Was ist Embedded Finance?", "acceptedAnswer": { "@type": "Answer", "text": "Embedded Finance bedeutet, Finanzprodukte dort anzubieten, wo Kunden ihre Geschäfte tätigen – innerhalb von Plattformen, SaaS-Lösungen oder Mobility-Apps." }},
    { "@type": "Question", "name": "Wie lange dauert eine Embedded Finance Integration?", "acceptedAnswer": { "@type": "Answer", "text": "BaaS-Partnerauswahl 6-8 Wochen. Von Strategie bis erste Live-Produkte 4-6 Monate." }},
    { "@type": "Question", "name": "Was ist der Unterschied zwischen BaaS und Embedded Finance?", "acceptedAnswer": { "@type": "Answer", "text": "BaaS ist die Infrastruktur – lizenzierte Bankprodukte über APIs. Embedded Finance ist die Anwendung – diese Produkte in eine nicht-finanzielle Plattform integrieren." }},
    { "@type": "Question", "name": "Brauche ich eine Banklizenz für Embedded Finance?", "acceptedAnswer": { "@type": "Answer", "text": "In den meisten Fällen nicht. Über BaaS-Partner können Sie lizenzierte Bankprodukte anbieten, ohne selbst eine Lizenz zu besitzen." }},
    { "@type": "Question", "name": "Welche Regulatorik gilt für Embedded Finance in Deutschland?", "acceptedAnswer": { "@type": "Answer", "text": "PSD2, FIDA, AML/KYC, DORA. Dazu BaFin-Anforderungen je nach Produktart." }},
  ]
}

export default function EmbeddedFinance() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <span className="mtag">Embedded Finance</span>
        <h1>Finanzservices gehören<br /><span className="b">ins Produkt.</span></h1>
        <p className="sub">Zahlungen, Kredite, Versicherungen und Banking-Funktionen werden Teil von Plattformen – in E-Commerce, SaaS, Mobility und Healthcare. Wir bringen Embedded Finance von der Strategie in die Umsetzung. Mit regulatorischer Erfahrung aus dem Aufbau lizenzierter Finanzdienstleister im deutschen Markt.</p>
        <p className="g" style={{ fontSize: 13, fontWeight: 300, maxWidth: 580, marginBottom: 24 }}>Unsere Kunden sind Banken, die neue Vertriebswege erschließen, Versicherer, die Produkte kontextbezogen anbieten, und Tech-Plattformen, die Finanzservices integrieren. Wir kennen beide Seiten – Finanzregulierung und Tech-Architektur.</p>
        <a href="/kontakt" className="btn">Strategiegespräch vereinbaren</a>

        <p className="label" style={{ marginTop: 44 }}>Leistungen</p>
        <h2>Von der Strategie zur <span className="b">Live-Integration.</span></h2>
        <div className="grid2" style={{ marginTop: 12 }}>
          <div className="card"><div className="accent" /><h3>Strategie & Roadmap</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Strategieentwicklung für Embedded Finance im regulierten Umfeld. Positionierung im Open-Finance-Umfeld (FIDA, PSD2), Wettbewerbsanalyse, priorisierte Use Cases mit belastbarem Business Case.</p></div>
          <div className="card"><div className="accent" /><h3>Partnerauswahl & Integration</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Systematische Evaluation von BaaS-, Payment- und Lending-Partnern. API-Design, Compliance-Prüfung (PSD2, FIDA, AML, KYC, DORA). RfP, SLA-Verhandlung, Begleitung bis Go-Live.</p></div>
          <div className="card"><div className="accent" /><h3>Regulatorik & Compliance</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>PSD2, FIDA, AML, KYC, DORA – Compliance als Teil der Architektur, nicht als Nachgedanke. Regulatorisches Mapping, Dokumentation, Abstimmung mit Aufsicht.</p></div>
          <div className="card"><div className="accent" /><h3>Geschäftsmodell & Monetarisierung</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Identifikation von Erlösquellen durch eingebettete Finanzprodukte. Transaktionsdaten, kontextbezogene Angebote, Plattform-Monetarisierung.</p></div>
        </div>

        <div className="grid2" style={{ marginTop: 12 }}>
          <div className="card"><div className="accent" /><h3>Tech & Delivery</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>API-Architektur, Partnerintegration, Koordination mit internen IT-Teams. Cloud-Infrastruktur (AWS, Google Cloud). Regulatorische Anforderungen DACH.</p></div>
        </div>

        <p className="label" style={{ marginTop: 36 }}>Lösungsfelder</p>
        <div className="grid4" style={{ marginTop: 10 }}>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>Banking-as-a-Service</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>Konten, Karten, Transaktionen in bestehende Plattformen. Für SaaS-Anbieter, Versicherer, Plattformen.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>Payments</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>Nahtlose Zahlungsprozesse. PSP-Integration, compliant Zahlungsstrecken.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>Lending</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>SME-Kredite und BNPL am Point-of-Sale. Lending-Prozess-Design, Partner-APIs.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>Contextual Finance</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>Transaktionsdaten für personalisierte Finanzangebote am Point of Need.</p></div>
        </div>
      </div>
    </section>

    <section className="bg" style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label">Fallstudie</p>
        <div className="case-card">
          <div className="case-metric"><div className="case-metric-val">Live</div><div className="case-metric-label">Embedded Finance Suite</div></div>
          <div className="case-body">
            <h3>E-Commerce-Plattform · Deutschland</h3>
            <div className="case-cols" style={{ marginTop: 12 }}>
              <div><p className="case-col-label">Ausgangslage</p><p>SaaS-Anbieter mit 15.000+ Händlern. Zahlungsabwicklung und Händlerfinanzierung gewünscht – direkt in der Plattform. Kein internes Finanz-Know-how, kein regulatorischer Rahmen.</p></div>
              <div><p className="case-col-label">Lösung</p><p>Embedded-Finance-Strategie, Payment- und Lending-Partner evaluiert, Integration begleitet – API-Spezifikation bis BaFin-Abstimmung.</p></div>
              <div><p className="case-col-label">Ergebnis</p><p>Händler wickeln Zahlungen ab und beantragen Betriebsmittelkredite direkt aus dem Dashboard. Neue Erlösquelle für die Plattform.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section style={{ padding: '50px 0' }}>
      <div className="w" style={{ maxWidth: 780 }}>
        <p className="label">Häufige Fragen</p>
        <h2>Embedded Finance <span className="b">Implementation.</span></h2>
        {[
          { q: 'Was ist Embedded Finance und warum ist es relevant für Banken und Versicherer?', a: 'Embedded Finance bedeutet, Finanzprodukte dort anzubieten, wo Kunden ihre Geschäfte tätigen – innerhalb von Plattformen, SaaS-Lösungen oder Mobility-Apps. Für Banken eröffnet es neue Vertriebswege jenseits der eigenen Kanäle. Für Versicherer ermöglicht es kontextbezogene Produkte am Point of Need. Der Markt wird bis 2030 auf über 200 Milliarden Euro geschätzt.' },
          { q: 'Wie lange dauert eine Embedded Finance Integration?', a: 'Abhängig vom Umfang. Eine BaaS-Partnerauswahl dauert typischerweise 6-8 Wochen. Von der Strategie bis zu ersten Live-Produkten rechnen wir mit 4-6 Monaten. Entscheidend ist die Kombination aus regulatorischer Klarheit und technischer Reife des Partners.' },
          { q: 'Was ist der Unterschied zwischen Banking-as-a-Service und Embedded Finance?', a: 'Banking-as-a-Service (BaaS) ist die Infrastruktur – lizenzierte Bankprodukte über APIs. Embedded Finance ist die Anwendung – diese Produkte in eine nicht-finanzielle Plattform integrieren. BaaS ist ein Mittel, Embedded Finance ist das Ziel. Wir beraten bei beidem.' },
          { q: 'Welche regulatorischen Anforderungen gelten für Embedded Finance in Deutschland?', a: 'PSD2 für Zahlungsdienste, FIDA für den Zugang zu Finanzdaten, AML/KYC für Identitätsprüfung, DORA für operative Resilienz. Dazu BaFin-Anforderungen je nach Produktart. Wir bauen Compliance von Anfang an in die Architektur.' },
          { q: 'Brauche ich eine eigene Banklizenz für Embedded Finance?', a: 'In den meisten Fällen nicht. Über BaaS-Partner können Sie lizenzierte Bankprodukte anbieten, ohne selbst eine Lizenz zu besitzen. Die regulatorische Verantwortung verteilt sich zwischen Ihnen und dem Partner. Wir klären die Lizenzfrage im Rahmen der Strategieentwicklung.' },
          { q: 'Was kostet Embedded Finance Beratung?', a: 'Eine Strategieentwicklung mit Roadmap und Partnerscreening liegt typischerweise im mittleren fünfstelligen Bereich. Vollständige Begleitung bis Go-Live im sechsstelligen Bereich. Projektbasiert mit klaren Meilensteinen.' },
        ].map((faq, i) => (
          <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(39,71,110,.12)' }}>
            <h3 style={{ fontSize: 15, marginBottom: 8 }}>{faq.q}</h3>
            <p className="g" style={{ fontSize: 13, fontWeight: 300 }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: '50px 0' }}>
        <div className="grid3">
          <Link href="/ki-beratung" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">KI-Beratung</span><h3>KI-Beratung für Finanzdienstleister</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Von der Standortbestimmung bis zum produktiven Einsatz.</p></Link>
          <Link href="/consulting" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">Consulting</span><h3>Consulting & Interim Management</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Programmleitung, Interim, Due Diligence.</p></Link>
          <Link href="/blog/hub-international-claude-insurance" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="blog-tag">Blog</span><h3 style={{ marginTop: 8 }}>HUB International spart 2,6 Mio. Stunden/Jahr</h3></Link>
        </div>
      </div>
    </section>
  </>)
}
