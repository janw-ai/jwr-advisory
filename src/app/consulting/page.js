import Link from 'next/link'
export const metadata = { title:'Consulting & Interim Management | JWR Advisory', description:'Interim Management, Programmleitung, Due Diligence für Banken und Versicherer. Operative Erfahrung aus dem Aufbau regulierter Finanzdienstleister.', alternates:{canonical:'https://jwr-advisory.com/consulting'} }

export default function CO() { return (<>
  <section className="page-hero"><div className="w">
    <span className="mtag">Consulting</span>
    <h1>Consulting &<br/><span className="b">Interim Management.</span></h1>
    <p className="sub">Wenn kurzfristig Führungskompetenz gebraucht wird – in einer Transformationsphase, bei einer vakanten Position, für ein komplexes Programm. Kein Beratungskonzept. Operative Verantwortung.</p>
    <a href="/kontakt" className="btn">Erstgespräch vereinbaren</a>
  </div></section>

  <section><div className="w">
    <p className="label">Warum JWR</p>
    <h2>Operator-Perspektive. Nicht nur Berater.</h2>
    <p style={{maxWidth:640,marginBottom:32,fontSize:16}}>Wir haben selbst regulierte Finanzdienstleister aufgebaut – von der BaFin-Lizenz bis zur Marktführerschaft. Wir kennen die Perspektive von Entscheidern, weil wir selbst in diesen Rollen gearbeitet haben. Das unterscheidet uns von Beratungen, die Strategiepapiere liefern.</p>
    <div className="grid2" style={{marginTop:8}}>
      {[{t:'Programmleitung',p:'Transformationsprogramme brauchen operative Steuerung mit Financial-Services-Erfahrung. Stakeholder-Management, Deadlines, Ergebnisse.'},{t:'Interim Management',p:'CDO, CTO, Head of Digital vakant – die nächsten Monate entscheidend. Operative Verantwortung auf Zeit, saubere Übergabe.'},{t:'Due Diligence & Value Creation',p:'Unabhängige Bewertung von Technologie, Prozessen und Skalierungspotenzial. Value-Creation-Pläne mit konkreten Hebeln.'},{t:'KI-Expertise auf Zeit',p:'KI-Implementierung geplant, aber dem Team fehlt regulatorische Erfahrung und Kapazität.'}].map((s,i)=>(
        <div key={i} className="card"><div className="accent"/><h3>{s.t}</h3><p style={{fontSize:15}}>{s.p}</p></div>
      ))}
    </div>
  </div></section>

  <section className="dark"><div className="w">
    <p className="label">Fallstudie</p>
    <div className="case"><div className="case-num"><strong>9 Mo.</strong><span>Value Creation</span></div><div><h4 style={{fontSize:16,fontWeight:700,marginBottom:12}}>Finanzdienstleister · Post-Merger</h4><div className="case-cols"><div><p className="col-label">Ausgangslage</p><p style={{fontSize:13}}>PE-Investor, Post-Merger. Tech-Konsolidierung, Prozessharmonisierung, regulatorische Integration gleichzeitig.</p></div><div><p className="col-label">Lösung</p><p style={{fontSize:13}}>Programmleitung. Workstreams priorisiert. Vendor-Konsolidierung, IT-Roadmap, BaFin-Abstimmung.</p></div><div><p className="col-label">Ergebnis</p><p style={{fontSize:13}}>Programm nach neun Monaten planmäßig übergeben. Value-Creation-Ziele erreicht.</p></div></div></div></div>
  </div></section>

  <section className="bg"><div className="w" style={{maxWidth:820}}>
    <p className="label">Häufige Fragen</p>
    <h2>Consulting & Interim.</h2>
    {[
      {q:'Wie schnell ist JWR verfügbar?',a:'2-4 Wochen. Für dringende Mandate auch kurzfristiger.'},
      {q:'Welche Rollen übernimmt JWR?',a:'CDO, CTO, Head of Digital, Programmleiter. Immer mit Financial-Services-Erfahrung und regulatorischem Verständnis.'},
      {q:'Was unterscheidet JWR von Interim-Vermittlern?',a:'Wir sind keine Vermittler. Wir übernehmen selbst operative Verantwortung. Unser Gründer hat regulierte Finanzdienstleister aufgebaut.'},
      {q:'Wie unterstützt JWR Private Equity?',a:'Investment-Thesen, Target-Screening, technische Due Diligence, Value-Creation-Pläne. DACH-Markt für IT-Services und FinTech.'},
      {q:'Was kostet es?',a:'Tagessätze nach Umfang und Komplexität. Programmleitung 3-6 Monate, Due Diligence 4-6 Wochen, Interim 6-12 Monate.'},
    ].map((f,i)=>(
      <div key={i} style={{padding:'20px 0',borderBottom:'1px solid var(--border)'}}>
        <h3 style={{fontSize:16,marginBottom:8}}>{f.q}</h3>
        <p style={{fontSize:15}}>{f.a}</p>
      </div>
    ))}
  </div></section>

  <section><div className="w">
    <p className="label">Verwandte Themen</p>
    <div className="grid3">{[{h:'/embedded-finance',t:'Embedded Finance',d:'Von der Strategie bis Go-Live'},{h:'/ki-beratung',t:'KI-Beratung',d:'KI für Finanzdienstleister'},{h:'/blog',t:'Blog',d:'Insights'}].map((l,i)=><Link key={i} href={l.h} className="card" style={{textDecoration:'none',color:'inherit'}}><span className="mtag">{l.t}</span><h3>{l.d}</h3></Link>)}</div>
  </div></section>
</>)}
