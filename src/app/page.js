import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

const Press = () => (
  <div className="press">
    <p className="press-label">Bekannt aus</p>
    {['Handelsblatt','Süddeutsche Zeitung','WirtschaftsWoche','Finanz-Szene','Versicherungsmonitor','IT Finanzmagazin','AssCompact'].map(n => <span key={n}>{n}</span>)}
  </div>
)

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (<>
    {/* HERO */}
    <section id="home" style={{ padding: '70px 0 0' }}>
      <div className="w">
        <div className="hero-badge"><div className="hero-dot" /><span className="hero-badge-text">Financial Services · DACH</span></div>
        <h1>Technologie trifft<br /><span className="b">regulierte Finanzwelt.</span></h1>
        <p className="sub">Embedded Finance, KI-Beratung und operatives Consulting für Banken, Versicherungen und Fintechs im DACH-Raum.</p>
        <a href="/kontakt" className="btn">Gespräch vereinbaren</a>
        <span className="g" style={{ fontSize: 12, marginLeft: 12 }}>30 Min. Unverbindlich.</span>
      </div>
    </section>

    <div className="w" style={{ paddingTop: 40 }}><Press /></div>

    <div className="w">
      <div className="stats">
        {[{v:'20+',l:'Jahre Financial Services'},{v:'70+',l:'Projekte'},{v:'2',l:'Offices'},{v:'EBITDA+',l:'seit zwei Jahren'}].map((s,i) => (
          <div key={i} className="stat"><div className="stat-val">{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
    </div>

    {/* LEISTUNGEN */}
    <section id="leistungen" style={{ padding: '50px 0 40px' }}>
      <div className="w">
        <p className="label">Leistungen</p>
        <h2>Drei Bereiche. Ein Ziel: <span className="b">Wirkung.</span></h2>
        {[
          { tag: 'Embedded Finance', title: 'Embedded Finance Implementation', text: 'Wir begleiten Finanzinstitute und Plattformen bei der Integration von Zahlungs-, Kredit- und Bankingfunktionen. Von der Strategie über Partnerauswahl bis zur technischen Umsetzung.', tags: ['BaaS','Payments','Lending','FIDA'], href: '/embedded-finance' },
          { tag: 'KI-Beratung', title: 'KI-Beratung für Finanzdienstleister', text: 'Wir unterstützen Banken und Versicherer beim Einsatz von KI in regulierten Umgebungen. Von der Standortbestimmung über Pilotierung bis zum produktiven Betrieb.', tags: ['Claude / Anthropic','EU AI Act','BaFin','ISO 42001'], href: '/ki-beratung' },
          { tag: 'Consulting', title: 'Consulting & Interim Management', text: 'Projekt- und Programmleitung, Interim Management und Due Diligence für Finanzdienstleister in Transformationsphasen.', tags: ['Programmleitung','Interim','Due Diligence'], href: '/consulting' },
        ].map((s,i) => (
          <Link key={i} href={s.href} className="svc" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
              <span className="mtag">{s.tag}</span>
              <h3 style={{ fontSize: 17 }}>{s.title}</h3>
              <p className="g" style={{ fontSize: 13, fontWeight: 300, maxWidth: 600 }}>{s.text}</p>
              <div style={{ marginTop: 10 }}>{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </section>

    {/* PROJEKTE */}
    <section id="projekte" className="bg" style={{ padding: '50px 0 60px' }}>
      <div className="w">
        <p className="label">Ausgewählte Projekte</p>
        <h2>Woran wir arbeiten.</h2>
        {[
          { metric: 'Live', metricLabel: 'Embedded Finance Suite', title: 'E-Commerce-Plattform · Deutschland', tags: ['Embedded Finance','Payments','Lending'], cols: [
            { l: 'Ausgangslage', p: 'SaaS-Anbieter mit 15.000+ Händlern. Zahlungsabwicklung und Händlerfinanzierung gewünscht – direkt in der Plattform. Kein internes Finanz-Know-how, kein regulatorischer Rahmen.' },
            { l: 'Lösung', p: 'Embedded-Finance-Strategie, Payment- und Lending-Partner evaluiert, Integration begleitet – API-Spezifikation bis BaFin-Abstimmung.' },
            { l: 'Ergebnis', p: 'Händler wickeln Zahlungen ab und beantragen Betriebsmittelkredite direkt aus dem Dashboard. Neue Erlösquelle für die Plattform.' },
          ]},
          { metric: '8 Wo.', metricLabel: 'Erster Use Case produktiv', title: 'Versicherer · DACH-Raum', tags: ['KI-Beratung','KI-Readiness'], cols: [
            { l: 'Ausgangslage', p: 'Mittelgroßer Versicherer wollte KI einsetzen. Dutzende Ideen, keine Priorisierung. Offene Fragen zu Datenschutz und EU AI Act.' },
            { l: 'Lösung', p: 'Reifegrad-Analyse, drei Use Cases mit höchstem Geschäftswert identifiziert, ersten Piloten aufgesetzt: automatisierte Schadenerstmeldungsanalyse. Parallel KI-Governance-Framework aufgebaut.' },
            { l: 'Ergebnis', p: 'Erster Use Case nach acht Wochen produktiv. Governance-Framework als Grundlage für weitere Projekte. Organisation weiß jetzt, wie KI bei ihnen funktioniert.' },
          ]},
          { metric: '9 Mo.', metricLabel: 'Value Creation', title: 'Finanzdienstleister · Post-Merger', tags: ['Interim','Value Creation'], cols: [
            { l: 'Ausgangslage', p: 'PE-Investor hatte einen Finanzdienstleister übernommen. Technologie-Konsolidierung, Prozessharmonisierung, regulatorische Integration – gleichzeitig. Kurzfristig Programmleitung gebraucht.' },
            { l: 'Lösung', p: 'Programmleitung übernommen. Workstreams priorisiert, Umsetzung gesteuert. Vendor-Konsolidierung, IT-Roadmap, BaFin-Abstimmung.' },
            { l: 'Ergebnis', p: 'Programm nach neun Monaten planmäßig an interne Organisation übergeben. Value-Creation-Ziele erreicht.' },
          ]},
        ].map((c,i) => (
          <div key={i} className="case-card">
            <div className="case-metric"><div className="case-metric-val">{c.metric}</div><div className="case-metric-label">{c.metricLabel}</div></div>
            <div className="case-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <h3>{c.title}</h3>
                <div>{c.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="case-cols">
                {c.cols.map((col,j) => (
                  <div key={j}><p className="case-col-label">{col.l}</p><p>{col.p}</p></div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <p className="g" style={{ fontSize: 11, fontStyle: 'italic', marginTop: 8 }}>Über 70 Projekte mit namhaften Mandanten. Referenzen teilen wir gerne im persönlichen Gespräch.</p>
      </div>
    </section>

    {/* ANSATZ */}
    <section style={{ padding: '60px 0' }}>
      <div className="w">
        <p className="label">Ansatz</p>
        <h2>Kein Consulting-Theater. <span className="b">Ergebnisse.</span></h2>
        <div className="grid3" style={{ marginTop: 20 }}>
          {[
            { n: '01', t: 'Verstehen', p: 'Deep Dive in Ihre Realität. Prozesse, Regulatorik, Tech-Stack. Keine PowerPoint-Analyse aus der Ferne.' },
            { n: '02', t: 'Entscheiden', p: 'Klare Empfehlung mit maximal drei Optionen. Businesscase, Risiken, Timeline. Entscheidungsvorlage, kein Strategiepapier.' },
            { n: '03', t: 'Umsetzen', p: 'Hands-on Implementierung. Ob Partnerauswahl, API-Integration oder KI-Pilot – wir bleiben, bis es läuft.' },
          ].map((s,i) => (
            <div key={i}><div className="step-num">{s.n}</div><h3 style={{ fontSize: 17, marginBottom: 8 }}>{s.t}</h3><p className="g" style={{ fontSize: 13, fontWeight: 300 }}>{s.p}</p></div>
          ))}
        </div>
      </div>
    </section>

    <div className="w"><div className="sep" /></div>

    {/* DNA */}
    <section style={{ padding: '60px 0' }}>
      <div className="w">
        <p className="label">DNA</p>
        <h2>Operativ und pragmatisch. <span className="b">Unser Ansatz.</span></h2>
        <div className="grid4" style={{ marginTop: 16 }}>
          {[
            { t: 'Persönlich', p: 'Direkter Zugang zum Entscheider. Bei uns sprechen Sie mit Leuten, die das Problem verstanden haben und Lösungen kennen.' },
            { t: 'Digital', p: 'Eigene Delivery-Kompetenz. Wir entwickeln APIs, integrieren Systeme, betreiben Infrastruktur. Kernkompetenz, nicht ausgelagerte Leistung.' },
            { t: 'Partnerschaftlich', p: 'Wir betrachten die Ziele unserer Kunden als unsere eigenen. Wir definieren, liefern und verantworten Ergebnisse.' },
            { t: 'Fokussiert', p: 'Embedded Finance und KI-Beratung. Fokussierung ermöglicht echte Expertise statt oberflächliche Kompetenz in vielen Feldern.' },
          ].map((d,i) => (
            <div key={i} className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>{d.t}</h3><p className="g" style={{ fontSize: 12, fontWeight: 300 }}>{d.p}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* BLOG TEASER */}
    <section className="bg" style={{ padding: '50px 0 60px' }}>
      <div className="w">
        <p className="label">Blog</p>
        <h2>Insights.</h2>
        <div className="grid3" style={{ marginTop: 16 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 style={{ fontSize: 15, lineHeight: 1.4 }}>{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ÜBER UNS */}
    <div id="about"><div className="w"><div className="sep" /></div></div>
    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label">Über JWR Advisory</p>
        <h2>20 Jahre Financial Services. Operator-Perspektive. <span className="b">Boutique-DNA.</span></h2>
        <p className="g" style={{ fontSize: 14, fontWeight: 300, maxWidth: 680, marginBottom: 32 }}>JWR Advisory berät Banken, Versicherungen und Fintechs im DACH-Raum. In über 70 Projekten. München und Frankfurt. Wir haben selbst regulierte Finanzdienstleister aufgebaut und geführt. Bewusst Boutique – weil Fokus bessere Ergebnisse liefert als Breite.</p>
        <div className="grid2" style={{ gap: 32, alignItems: 'start' }}>
          <div>
            <h2>Jan Wichmann</h2>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 14 }}>Gründer</p>
            <p className="g" style={{ fontSize: 13, fontWeight: 300, marginBottom: 10 }}>Serial Founder und Berater im DACH-Finanzmarkt. Strategie, digitale Transformation und Go-to-Market in Banking, Insurance und FinTech.</p>
            <p className="g" style={{ fontSize: 13, fontWeight: 300, marginBottom: 10 }}>Co-Founder von BANKSapi – Aufbau bis zur BaFin-Lizenz und Marktführerschaft im deutschen Open Banking. Davor KPMG.</p>
            <p className="g" style={{ fontSize: 13, fontWeight: 300 }}>MSc Betriebswirtschaft (Passau), MBA (Budapest). Speaker und vernetzt in Gremien der deutschen Finanzindustrie.</p>
          </div>
          <div className="focus-box">
            <h3 style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 12 }}>Fokusthemen</h3>
            {['Embedded Finance Strategie & Partnerauswahl','KI-Beratung für Financial Services','KI-Governance (BaFin, DORA, EU AI Act)','Banking-as-a-Service Architektur','Open Banking / PSD2 / FIDA','Digitale Transformation regulierter Märkte'].map(f => (
              <div key={f} className="focus-item"><div className="focus-dot" />{f}</div>
            ))}
          </div>
        </div>
        <Press />
      </div>
    </section>

    {/* KONTAKT */}
    <div id="kontakt"><div className="w"><div className="sep" /></div></div>
    <section className="cta-section">
      <h2>Bereit für ein Gespräch<br /><span className="b">ohne PowerPoint?</span></h2>
      <p className="g" style={{ fontSize: 14, fontWeight: 300, marginBottom: 32 }}>30 Minuten. Unverbindlich.</p>
      <div style={{ maxWidth: 420, margin: '0 auto', textAlign: 'left' }}>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>E-Mail</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}><a href="mailto:info@jwr-advisory.com" style={{ color: 'var(--grey)' }}>info@jwr-advisory.com</a></p></div>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>LinkedIn</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}><a href="https://www.linkedin.com/in/janwichmann/" target="_blank" rel="noopener" style={{ color: 'var(--grey)' }}>Jan Wichmann</a></p></div>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>Unternehmen</p><p style={{ fontSize: 14, fontWeight: 300, color: 'var(--grey)' }}>JWR Advisory GmbH · München &amp; Frankfurt</p></div>
      </div>
    </section>
  </>)
}
