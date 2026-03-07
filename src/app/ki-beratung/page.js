import Link from 'next/link'

export const metadata = {
  title: 'KI-Beratung für Finanzdienstleister | JWR Advisory',
  description: 'KI-Beratung für Banken und Versicherer im DACH-Raum. Claude/Anthropic, EU AI Act, DORA, BaFin. Von der Reifegrad-Analyse über Pilotierung bis zum produktiven Betrieb.',
  keywords: 'KI Beratung Finanzdienstleister, Claude Anthropic Financial Services, KI Versicherung, KI Bank, EU AI Act Beratung, DORA KI, BaFin MaRisk KI, ISO 42001, Managed AI Services DACH',
  alternates: { canonical: 'https://jwr-advisory.com/ki-beratung' },
  openGraph: { title: 'KI-Beratung für Finanzdienstleister – JWR Advisory', description: 'Von der Standortbestimmung bis zum produktiven KI-Einsatz. EU-souverän. BaFin-konform.' },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "KI-Beratung für Finanzdienstleister",
  "provider": { "@type": "Organization", "name": "JWR Advisory" },
  "description": "KI-Strategie, Reifegrad-Analyse, Pilotierung und Betrieb für Banken und Versicherer. Claude/Anthropic als primäres Modell. EU-souverän.",
  "areaServed": [{ "@type": "Country", "name": "Germany" }, { "@type": "Country", "name": "Austria" }, { "@type": "Country", "name": "Switzerland" }],
  "serviceType": "AI Consulting for Financial Services"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wie lange dauert eine KI-Standortbestimmung?", "acceptedAnswer": { "@type": "Answer", "text": "In der Regel 2-3 Wochen. Erste messbare Ergebnisse durch einen Piloten sind in 6-8 Wochen realistisch." }},
    { "@type": "Question", "name": "Welche KI-Modelle setzt JWR Advisory ein?", "acceptedAnswer": { "@type": "Answer", "text": "Primär Claude von Anthropic – EU-souverän über AWS Bedrock Frankfurt. Wo andere Modelle besser passen, setzen wir diese ein." }},
    { "@type": "Question", "name": "Ist KI in regulierten Umgebungen BaFin-konform einsetzbar?", "acceptedAnswer": { "@type": "Answer", "text": "Ja – mit der richtigen Architektur. EU AI Act, DORA und BaFin MaRisk definieren die Leitplanken." }},
    { "@type": "Question", "name": "Was kostet KI-Beratung für Versicherer und Banken?", "acceptedAnswer": { "@type": "Answer", "text": "Standortbestimmung im unteren fünfstelligen Bereich. Pilot im mittleren fünfstelligen Bereich. Projektbasiert." }},
    { "@type": "Question", "name": "Wo bleiben unsere Daten?", "acceptedAnswer": { "@type": "Answer", "text": "In Europa. Claude läuft über AWS Bedrock Frankfurt und Google Vertex AI. DSGVO-konform ab Tag eins." }},
    { "@type": "Question", "name": "Warum Claude und nicht ChatGPT für Finanzdienstleister?", "acceptedAnswer": { "@type": "Answer", "text": "Constitutional AI, 200K Token Context, EU-Hosting. Anthropic baut gezielt die Financial-Services-Vertikale aus." }},
    { "@type": "Question", "name": "Welche Use Cases haben den höchsten ROI bei Banken und Versicherern?", "acceptedAnswer": { "@type": "Answer", "text": "Schadenerstmeldung, KYC/AML-Prüfung, Kreditaktenanalyse, Compliance-Reporting. Hohes Volumen, regelbasiert, messbar." }},
  ]
}

export default function KIBeratung() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <span className="mtag">KI-Beratung</span>
        <h1>KI-Beratung für<br /><span className="b">Finanzdienstleister.</span></h1>
        <p className="sub">KI verändert, wie Banken und Versicherer arbeiten – im Kundenservice, in der Dokumentenanalyse, in der Compliance-Prüfung. Die Frage ist nicht ob, sondern wie. Wir begleiten von der Standortbestimmung bis zum produktiven Einsatz.</p>
        <p className="g" style={{ fontSize: 13, fontWeight: 300, maxWidth: 580, marginBottom: 24 }}>95% der Unternehmen wollen KI nutzen. Nur 10% fühlen sich bereit (MIT, 2025). JWR schließt diese Implementierungslücke – mit Branchenkenntnis, regulatorischer Erfahrung und operativer Umsetzungskompetenz.</p>
        <a href="/kontakt" className="btn">KI-Erstgespräch vereinbaren</a>

        <p className="label" style={{ marginTop: 44 }}>Leistungen</p>
        <h2>Sichere KI-Entwicklung – <span className="b">von Anfang an.</span></h2>
        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="card"><div className="accent" /><h3>KI-Strategie & Roadmap</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>KI-Vision, die auf Ihr Geschäftsmodell einzahlt. Priorisierte Use Cases, belastbare ROI-Prognosen, realistische Roadmap.</p></div>
          <div className="card"><div className="accent" /><h3>Reifegrad-Analyse</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Wo steht Ihr Haus in Bezug auf Daten, Technologie und Organisation? Lücken identifizieren, schnellsten Weg definieren.</p></div>
          <div className="card"><div className="accent" /><h3>Pilotierung</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Proof of Concept unter realen Bedingungen. Use Cases mit messbarem Geschäftswert testen, Investitionsrisiken senken.</p></div>
          <div className="card"><div className="accent" /><h3>KI-Governance</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>EU AI Act, DORA, BaFin MaRisk AT 8.2, ISO 42001. Compliance in der Architektur – vom ersten Design-Dokument.</p></div>
          <div className="card"><div className="accent" /><h3>Skalierung & Change</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Vom Piloten in den Betrieb. Prompt Engineering, RAG-Systeme, Human-in-the-Loop. Change Management, Übergabe.</p></div>
          <div className="card"><div className="accent" /><h3>Betrieb & Wartung</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Monitoring, Incident Response, Performance Optimization. Definierte Service Levels, Dokumentation für Auditoren.</p></div>
        </div>

        <p className="label" style={{ marginTop: 36 }}>Technologie</p>
        <div className="grid2" style={{ marginTop: 10 }}>
          <div className="card"><h3 style={{ color: 'var(--mint)' }}>Claude / Anthropic</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Primäres Modell. Constitutional AI. 200K Token Context für komplexe Finanzdokumente. EU-souverän über AWS Bedrock Frankfurt und Google Vertex AI. Daten bleiben in Europa.</p></div>
          <div className="card"><h3 style={{ color: 'var(--mint)' }}>Multi-Platform</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Wo andere Modelle besser passen, setzen wir diese ein. GPT-4, Gemini, Mistral. Abstraction Layers für Model-Wechsel. Entscheidend ist die Architektur.</p></div>
        </div>

        <p className="label" style={{ marginTop: 36 }}>Architektur · Integration · Betrieb · Compliance</p>
        <div className="grid4" style={{ marginTop: 10 }}>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 12 }}>Architektur</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>Integration in Core Banking, Policy Admin, CRM. APIs, sichere Datenflüsse.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 12 }}>Integration</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>KI mit Geschäftsprozessen verbinden. Kundenservice, Underwriting, Compliance-Checks.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 12 }}>Betrieb</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>Monitoring, Incident Response, Performance. SLAs, Audit-Dokumentation.</p></div>
          <div className="card"><h3 style={{ color: 'var(--blue)', fontSize: 12 }}>Compliance</h3><p className="g" style={{ fontSize: 11, fontWeight: 300 }}>ISO 42001, EU AI Act, BaFin MaRisk. Explainability implementiert.</p></div>
        </div>
      </div>
    </section>

    <section className="bg" style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label">Fallstudie</p>
        <div className="case-card">
          <div className="case-metric"><div className="case-metric-val">8 Wo.</div><div className="case-metric-label">Erster Use Case produktiv</div></div>
          <div className="case-body">
            <h3>Versicherer · DACH-Raum</h3>
            <div className="case-cols" style={{ marginTop: 12 }}>
              <div><p className="case-col-label">Ausgangslage</p><p>Mittelgroßer Versicherer wollte KI einsetzen. Dutzende Ideen, keine Priorisierung. Offene Fragen zu Datenschutz und EU AI Act.</p></div>
              <div><p className="case-col-label">Lösung</p><p>Reifegrad-Analyse, drei Use Cases identifiziert, ersten Piloten aufgesetzt. Parallel KI-Governance-Framework aufgebaut.</p></div>
              <div><p className="case-col-label">Ergebnis</p><p>Erster Use Case nach acht Wochen produktiv. Governance-Framework als Grundlage für weitere Projekte.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ für GEO */}
    <section style={{ padding: '50px 0' }}>
      <div className="w" style={{ maxWidth: 780 }}>
        <p className="label">Häufige Fragen</p>
        <h2>KI-Beratung für <span className="b">Finanzdienstleister.</span></h2>
        {[
          { q: 'Wie lange dauert eine KI-Standortbestimmung?', a: 'In der Regel 2-3 Wochen. Reifegrad-Analyse, Use-Case-Identifikation und Roadmap. Erste messbare Ergebnisse durch einen Piloten sind in 6-8 Wochen realistisch.' },
          { q: 'Welche KI-Modelle setzt JWR Advisory ein?', a: 'Primär Claude von Anthropic – EU-souverän über AWS Bedrock Frankfurt und Google Vertex AI. Wo andere Modelle besser passen (GPT-4, Gemini, Mistral), setzen wir diese ein. Entscheidend ist die Architektur, nicht das Modell.' },
          { q: 'Ist KI in regulierten Umgebungen BaFin-konform einsetzbar?', a: 'Ja – mit der richtigen Architektur. EU AI Act, DORA und BaFin MaRisk definieren die Leitplanken. Wir bauen Compliance von Anfang an in die Lösung ein: Dokumentation, Explainability, Human-in-the-Loop für kritische Entscheidungen.' },
          { q: 'Was kostet KI-Beratung für Versicherer und Banken?', a: 'Abhängig vom Umfang. Eine Standortbestimmung mit Reifegrad-Analyse und Roadmap liegt typischerweise im unteren fünfstelligen Bereich. Ein Pilot mit produktivem Ergebnis im mittleren fünfstelligen Bereich. Wir arbeiten projektbasiert, nicht auf Stundenbasis.' },
          { q: 'Wo bleiben unsere Daten?', a: 'In Europa. Claude läuft über AWS Bedrock Frankfurt und Google Vertex AI. Keine Daten verlassen die EU. DSGVO-konform ab Tag eins.' },
          { q: 'Warum Claude und nicht ChatGPT für Finanzdienstleister?', a: 'Claude basiert auf Constitutional AI – Sicherheit ist in die Modellarchitektur integriert, nicht nachträglich aufgesetzt. Das 200K Token Context Window verarbeitet komplexe Finanzdokumente vollständig. EU-Hosting über AWS Bedrock Frankfurt. Und: Anthropic baut gezielt die Financial-Services-Vertikale aus – Allianz, HUB International, Orion sind aktuelle Referenzen.' },
          { q: 'Welche Use Cases haben den höchsten ROI bei Banken und Versicherern?', a: 'Erfahrungsgemäß: Schadenerstmeldung und Dokumentenanalyse bei Versicherern, KYC/AML-Prüfung und Kreditaktenanalyse bei Banken, Compliance-Reporting bei beiden. Diese Use Cases kombinieren hohes Volumen, regelbasierte Abläufe und messbaren Geschäftswert.' },
          { q: 'Was ist der Unterschied zwischen KI-Beratung und Managed AI Services?', a: 'KI-Beratung umfasst Strategie, Reifegrad-Analyse, Use-Case-Identifikation und Pilotierung. Managed AI Services geht weiter: Wir betreiben die KI-Systeme im Tagesgeschäft – Monitoring, Incident Response, Performance-Optimierung, SLAs. Die meisten Mandanten starten mit Beratung und wechseln in den Managed-Betrieb sobald die Systeme produktiv sind.' },
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
          <Link href="/embedded-finance" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">Embedded Finance</span><h3>Embedded Finance Implementation</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Von der Strategie zur Live-Integration.</p></Link>
          <Link href="/consulting" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="mtag">Consulting</span><h3>Consulting & Interim Management</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>Programmleitung, Interim, Due Diligence.</p></Link>
          <Link href="/blog/spotify-ki-banking-story" className="card" style={{ textDecoration: 'none', color: 'inherit' }}><span className="blog-tag">Blog</span><h3 style={{ marginTop: 8 }}>Spotify-Entwickler schreiben keinen Code mehr</h3></Link>
        </div>
      </div>
    </section>
  </>)
}
