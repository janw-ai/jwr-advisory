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
    <section style={{ padding: '80px 0 0' }}>
      <div className="w fade-in">
        <div className="hero-badge"><div className="hero-dot" /><span className="hero-badge-text">Financial Services · DACH</span></div>
        <h1>Technologie trifft<br /><span className="b">regulierte Finanzwelt.</span></h1>
        <p className="sub">Embedded Finance, KI-Beratung und operatives Consulting für Banken, Versicherungen und Fintechs im DACH-Raum.</p>
        <a href="/kontakt" className="btn">Gespräch vereinbaren</a>
        <span className="g" style={{ fontSize: 12, marginLeft: 12 }}>30 Min. Unverbindlich.</span>
      </div>
    </section>

    <div className="w" style={{ paddingTop: 36 }}><Press /></div>

    {/* STATS – 3 statt 4, EBITDA raus */}
    <div className="w fade-in fade-d1">
      <div className="stats">
        {[{v:'20+',l:'Jahre Financial Services'},{v:'70+',l:'Projekte'},{v:'DACH',l:'Marktfokus'}].map((s,i) => (
          <div key={i} className="stat"><div className="stat-val">{s.v}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>
    </div>

    {/* LEISTUNGEN – 3 nebeneinander */}
    <section id="leistungen" style={{ padding: '50px 0 40px' }}>
      <div className="w">
        <p className="label fade-in">Leistungen</p>
        <h2 className="fade-in">Drei Bereiche. Ein Ziel: <span className="b">Wirkung.</span></h2>
        <div className="grid3 fade-in fade-d1" style={{ marginTop: 16 }}>
          {[
            { tag: 'Embedded Finance', title: 'Embedded Finance', text: 'Integration von Zahlungs-, Kredit- und Bankingfunktionen in bestehende Plattformen. Von der Strategie über Partnerauswahl bis Go-Live.', tags: ['BaaS','Payments','Lending','FIDA'], href: '/embedded-finance' },
            { tag: 'KI-Beratung', title: 'KI für Finanzdienstleister', text: 'KI-Einsatz in regulierten Umgebungen. Standortbestimmung, Pilotierung, produktiver Betrieb. EU-souverän, BaFin-konform.', tags: ['Claude','EU AI Act','BaFin'], href: '/ki-beratung' },
            { tag: 'Consulting', title: 'Consulting & Interim', text: 'Programmleitung, Interim Management und Due Diligence für Finanzdienstleister in Transformationsphasen.', tags: ['Programmleitung','Interim','Due Diligence'], href: '/consulting' },
          ].map((s,i) => (
            <Link key={i} href={s.href} className="svc-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <span className="mtag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p style={{ fontSize: 13 }}>{s.text}</p>
                <div style={{ marginTop: 10 }}>{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="svc-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* PROJEKTE – kompakter */}
    <section id="projekte" className="bg" style={{ padding: '44px 0 50px' }}>
      <div className="w">
        <p className="label fade-in">Projekte</p>
        <h2 className="fade-in" style={{ fontSize: 22 }}>Woran wir arbeiten.</h2>
        {[
          { metric: 'Live', metricLabel: 'EF Suite', title: 'E-Commerce-Plattform · DE', tags: ['Embedded Finance','Payments'], cols: [
            { l: 'Ausgangslage', p: 'SaaS-Anbieter, 15.000+ Händler. Zahlungsabwicklung und Finanzierung gewünscht. Kein regulatorischer Rahmen.' },
            { l: 'Lösung', p: 'EF-Strategie, Payment- und Lending-Partner evaluiert. API-Spezifikation bis BaFin-Abstimmung.' },
            { l: 'Ergebnis', p: 'Händler wickeln Zahlungen ab und beantragen Kredite direkt aus dem Dashboard.' },
          ]},
          { metric: '8 Wo.', metricLabel: '1. Use Case live', title: 'Versicherer · DACH', tags: ['KI-Beratung','Readiness'], cols: [
            { l: 'Ausgangslage', p: 'KI-Einsatz gewünscht. Dutzende Ideen, keine Priorisierung. Offene Fragen zu EU AI Act.' },
            { l: 'Lösung', p: 'Reifegrad-Analyse, drei Use Cases priorisiert, Pilot aufgesetzt. KI-Governance-Framework parallel.' },
            { l: 'Ergebnis', p: 'Erster Use Case nach acht Wochen produktiv. Framework als Basis für weitere Projekte.' },
          ]},
          { metric: '9 Mo.', metricLabel: 'Value Creation', title: 'Finanzdienstleister · Post-Merger', tags: ['Interim','Value Creation'], cols: [
            { l: 'Ausgangslage', p: 'PE-Investor, Post-Merger. Tech-Konsolidierung, Prozessharmonisierung, regulatorische Integration.' },
            { l: 'Lösung', p: 'Programmleitung übernommen. Workstreams priorisiert. Vendor-Konsolidierung, BaFin-Abstimmung.' },
            { l: 'Ergebnis', p: 'Programm nach neun Monaten planmäßig übergeben. Value-Creation-Ziele erreicht.' },
          ]},
        ].map((c,i) => (
          <div key={i} className={`case-card fade-in fade-d${i+1}`}>
            <div className="case-metric"><div className="case-metric-val">{c.metric}</div><div className="case-metric-label">{c.metricLabel}</div></div>
            <div className="case-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 6 }}>
                <h3 style={{ fontSize: 14 }}>{c.title}</h3>
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
        <p style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(39,71,110,.5)', marginTop: 6 }}>Referenzen im persönlichen Gespräch.</p>
      </div>
    </section>

    {/* ANSATZ */}
    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label fade-in">Ansatz</p>
        <h2 className="fade-in">Operativ. Hands-on. <span className="b">Ergebnisorientiert.</span></h2>
        <div className="grid3 fade-in fade-d1" style={{ marginTop: 16 }}>
          {[
            { n: '01', t: 'Verstehen', p: 'Deep Dive in Ihre Realität. Prozesse, Regulatorik, Tech-Stack.' },
            { n: '02', t: 'Entscheiden', p: 'Klare Empfehlung. Businesscase, Risiken, Timeline.' },
            { n: '03', t: 'Umsetzen', p: 'Hands-on. Partnerauswahl, Integration, KI-Pilot – bis es läuft.' },
          ].map((s,i) => (
            <div key={i}><div className="step-num">{s.n}</div><h3>{s.t}</h3><p style={{ fontSize: 13 }}>{s.p}</p></div>
          ))}
        </div>
      </div>
    </section>

    <div className="w"><div className="sep" /></div>

    {/* DNA */}
    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label fade-in">DNA</p>
        <h2 className="fade-in">Operativ und pragmatisch.</h2>
        <div className="grid4 fade-in fade-d1" style={{ marginTop: 12 }}>
          {[
            { t: 'Persönlich', p: 'Direkter Zugang zum Entscheider.' },
            { t: 'Digital', p: 'Eigene Delivery-Kompetenz.' },
            { t: 'Partnerschaftlich', p: 'Ihre Ziele sind unsere.' },
            { t: 'Fokussiert', p: 'EF + KI. Tiefe statt Breite.' },
          ].map((d,i) => (
            <div key={i} className="card"><h3 style={{ color: 'var(--blue)', fontSize: 13 }}>{d.t}</h3><p style={{ fontSize: 12 }}>{d.p}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* BLOG TEASER */}
    {posts.length > 0 && (
    <section className="bg" style={{ padding: '44px 0 50px' }}>
      <div className="w">
        <p className="label fade-in">Blog</p>
        <h2 className="fade-in" style={{ fontSize: 22 }}>Insights.</h2>
        <div className="grid3 fade-in fade-d1" style={{ marginTop: 12 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 style={{ fontSize: 14, lineHeight: 1.4 }}>{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
    )}

    {/* ÜBER UNS */}
    <div id="about"><div className="w"><div className="sep" /></div></div>
    <section style={{ padding: '50px 0' }}>
      <div className="w">
        <p className="label fade-in">Über JWR Advisory</p>
        <h2 className="fade-in">Operator-Perspektive. <span className="b">Boutique.</span></h2>
        <p className="fade-in fade-d1" style={{ fontSize: 14, maxWidth: 640, marginBottom: 28 }}>Über 20 Jahre Financial Services. München und Frankfurt. Wir haben selbst regulierte Finanzdienstleister aufgebaut und geführt. Bewusst Boutique.</p>
        <div className="grid2 fade-in fade-d2" style={{ gap: 28, alignItems: 'start' }}>
          <div>
            <h3 style={{ fontSize: 20 }}>Jan Wichmann</h3>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 12 }}>Gründer</p>
            <p style={{ fontSize: 13, marginBottom: 8 }}>Serial Founder und Berater im DACH-Finanzmarkt. Co-Founder BANKSapi – BaFin-Lizenz, Marktführer Open Banking. Davor KPMG.</p>
            <p style={{ fontSize: 13 }}>MSc Betriebswirtschaft (Passau), MBA (Budapest).</p>
          </div>
          <div className="focus-box">
            <h3>Fokusthemen</h3>
            {['Embedded Finance Strategie','KI-Beratung für Financial Services','KI-Governance (BaFin, DORA, EU AI Act)','Banking-as-a-Service','Open Banking / PSD2 / FIDA'].map(f => (
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
      <h2 className="fade-in">Bereit für ein Gespräch<br /><span className="b">ohne PowerPoint?</span></h2>
      <p className="fade-in fade-d1" style={{ fontSize: 14, marginBottom: 28 }}>30 Minuten. Unverbindlich.</p>
      <div className="fade-in fade-d2" style={{ maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>E-Mail</p><p style={{ fontSize: 14 }}><a href="mailto:info@jwr-advisory.com" style={{ color: 'var(--grey)' }}>info@jwr-advisory.com</a></p></div>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>LinkedIn</p><p style={{ fontSize: 14 }}><a href="https://www.linkedin.com/in/janwichmann/" target="_blank" rel="noopener" style={{ color: 'var(--grey)' }}>Jan Wichmann</a></p></div>
        <div className="contact-row"><p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 2 }}>Unternehmen</p><p style={{ fontSize: 14 }}>JWR Advisory GmbH · München &amp; Frankfurt</p></div>
      </div>
    </section>
  </>)
}
