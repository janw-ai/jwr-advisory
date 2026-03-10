import Link from 'next/link'
export const metadata = { title:'Embedded Finance Beratung | JWR Advisory', description:'Embedded Finance Implementation für Banken, Versicherungen und Plattformen im DACH-Raum. Banking-as-a-Service, Payments, Lending. PSD2, FIDA, DORA.', alternates:{canonical:'https://jwr-advisory.com/embedded-finance'} }

export default function EF() { return (<>
  <section className="page-hero"><div className="w">
    <span className="mtag">Embedded Finance</span>
    <h1>Finanzservices gehören<br/><span className="b">ins Produkt.</span></h1>
    <p className="sub">Zahlungen, Kredite, Versicherungen und Banking-Funktionen werden Teil von Plattformen. Wir bringen Embedded Finance von der Strategie in die Umsetzung – mit regulatorischer Erfahrung aus dem Aufbau lizenzierter Finanzdienstleister.</p>
    <a href="/kontakt" className="btn">Strategiegespräch vereinbaren</a>
  </div></section>

  <section><div className="w">
    <p className="label">Leistungen</p>
    <h2>Von der Strategie zur Live-Integration.</h2>
    <div className="grid2" style={{marginTop:24}}>
      {[{t:'Strategie & Roadmap',p:'Strategieentwicklung im regulierten Umfeld. FIDA, PSD2-Positionierung, Wettbewerbsanalyse, Use Cases mit belastbarem Business Case.'},{t:'Partnerauswahl & Integration',p:'Evaluation von BaaS-, Payment- und Lending-Partnern. API-Design, Compliance-Prüfung, RfP, SLA-Verhandlung, Go-Live-Begleitung.'},{t:'Regulatorik & Compliance',p:'PSD2, FIDA, AML, KYC, DORA. Compliance als Teil der Architektur. Regulatorisches Mapping, Abstimmung mit Aufsicht.'},{t:'Geschäftsmodell',p:'Erlösquellen durch eingebettete Finanzprodukte. Transaktionsdaten, kontextbezogene Angebote, Plattform-Monetarisierung.'}].map((s,i)=>(
        <div key={i} className="card"><div className="accent"/><h3>{s.t}</h3><p style={{fontSize:15}}>{s.p}</p></div>
      ))}
    </div>
    <p className="label" style={{marginTop:48}}>Lösungsfelder</p>
    <div className="grid4" style={{marginTop:12}}>
      {[{t:'Banking-as-a-Service',p:'Konten, Karten, Transaktionen in bestehende Plattformen.'},{t:'Payments',p:'PSP-Integration, compliant Zahlungsstrecken.'},{t:'Lending',p:'SME-Kredite, BNPL am Point-of-Sale.'},{t:'Contextual Finance',p:'Personalisierte Angebote am Point of Need.'}].map((s,i)=>(
        <div key={i} className="card"><h3 style={{fontSize:16,color:'var(--blue)'}}>{s.t}</h3><p style={{fontSize:14}}>{s.p}</p></div>
      ))}
    </div>
  </div></section>

  <section className="dark"><div className="w">
    <p className="label">Fallstudie</p>
    <div className="case"><div className="case-num"><strong>Live</strong><span>EF Suite</span></div><div><h4 style={{fontSize:16,fontWeight:700,marginBottom:12}}>E-Commerce-Plattform · Deutschland</h4><div className="case-cols"><div><p className="col-label">Ausgangslage</p><p style={{fontSize:13}}>SaaS-Anbieter, 15.000+ Händler. Zahlungen und Finanzierung gewünscht. Kein regulatorischer Rahmen.</p></div><div><p className="col-label">Lösung</p><p style={{fontSize:13}}>EF-Strategie, Partner evaluiert. API-Spezifikation bis BaFin-Abstimmung.</p></div><div><p className="col-label">Ergebnis</p><p style={{fontSize:13}}>Händler wickeln Zahlungen ab und beantragen Kredite direkt aus dem Dashboard.</p></div></div></div></div>
  </div></section>

  <section><div className="w">
    <p className="label">Verwandte Themen</p>
    <div className="grid3">{[{h:'/ki-beratung',t:'KI-Beratung',d:'KI für Finanzdienstleister'},{h:'/consulting',t:'Consulting',d:'Consulting & Interim'},{h:'/blog',t:'Blog',d:'Insights'}].map((l,i)=><Link key={i} href={l.h} className="card" style={{textDecoration:'none',color:'inherit'}}><span className="mtag">{l.t}</span><h3>{l.d}</h3></Link>)}</div>
  </div></section>
</>)}
