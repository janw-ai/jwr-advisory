import Link from 'next/link'
export const metadata = { title:'KI-Beratung für Finanzdienstleister | JWR Advisory', description:'KI-Beratung für Banken und Versicherer. Claude/Anthropic, EU AI Act, DORA, BaFin. Von der Reifegrad-Analyse bis zum produktiven Betrieb.', alternates:{canonical:'https://jwr-advisory.com/ki-beratung'} }

export default function KI() { return (<>
  <section className="page-hero"><div className="w">
    <span className="mtag">KI-Beratung</span>
    <h1>KI-Beratung für<br/><span className="b">Finanzdienstleister.</span></h1>
    <p className="sub">KI verändert, wie Banken und Versicherer arbeiten. Die Frage ist nicht ob, sondern wie. Wir begleiten von der Standortbestimmung bis zum produktiven Einsatz.</p>
    <a href="/kontakt" className="btn">KI-Erstgespräch vereinbaren</a>
  </div></section>

  <section><div className="w">
    <p className="label">Leistungen</p>
    <h2>Sichere KI-Entwicklung – von Anfang an.</h2>
    <div className="grid3" style={{marginTop:24}}>
      {[{t:'KI-Strategie & Roadmap',p:'KI-Vision auf Ihr Geschäftsmodell. Use Cases, ROI-Prognosen, Roadmap.'},{t:'Reifegrad-Analyse',p:'Daten, Technologie, Organisation. Lücken identifizieren, schnellsten Weg definieren.'},{t:'Pilotierung',p:'PoC unter realen Bedingungen. Messbare Ergebnisse in 6-8 Wochen.'},{t:'KI-Governance',p:'EU AI Act, DORA, BaFin MaRisk AT 8.2, ISO 42001. Compliance ab Tag eins.'},{t:'Skalierung & Change',p:'Pilot in Betrieb. Prompt Engineering, RAG, Human-in-the-Loop.'},{t:'Betrieb & Wartung',p:'Monitoring, Incident Response, SLAs, Audit-Dokumentation.'}].map((s,i)=>(
        <div key={i} className="card"><div className="accent"/><h3>{s.t}</h3><p style={{fontSize:15}}>{s.p}</p></div>
      ))}
    </div>

    <p className="label" style={{marginTop:48}}>Technologie</p>
    <div className="grid2" style={{marginTop:12}}>
      <div className="card"><h3 style={{color:'var(--blue)'}}>Claude / Anthropic</h3><p style={{fontSize:15}}>Constitutional AI. 200K Token Context. EU-souverän über AWS Bedrock Frankfurt und Google Vertex AI. Daten bleiben in Europa.</p></div>
      <div className="card"><h3 style={{color:'var(--blue)'}}>Multi-Platform</h3><p style={{fontSize:15}}>GPT-4, Gemini, Mistral – wenn es für den Use Case besser performt. Abstraction Layers. Entscheidend ist die Architektur.</p></div>
    </div>
  </div></section>

  <section className="dark"><div className="w">
    <p className="label">Fallstudie</p>
    <div className="case"><div className="case-num"><strong>8 Wo.</strong><span>1. Use Case</span></div><div><h4 style={{fontSize:16,fontWeight:700,marginBottom:12}}>Versicherer · DACH-Raum</h4><div className="case-cols"><div><p className="col-label">Ausgangslage</p><p style={{fontSize:13}}>KI gewünscht. Dutzende Ideen, keine Priorisierung. EU AI Act Fragen offen.</p></div><div><p className="col-label">Lösung</p><p style={{fontSize:13}}>Reifegrad-Analyse, drei Use Cases, Pilot. Governance-Framework parallel.</p></div><div><p className="col-label">Ergebnis</p><p style={{fontSize:13}}>Erster Use Case nach acht Wochen produktiv.</p></div></div></div></div>
  </div></section>

  <section className="bg"><div className="w" style={{maxWidth:820}}>
    <p className="label">Häufige Fragen</p>
    <h2>KI-Beratung für Finanzdienstleister.</h2>
    {[
      {q:'Wie lange dauert eine KI-Standortbestimmung?',a:'2-3 Wochen. Reifegrad-Analyse, Use-Case-Identifikation, Roadmap. Erste Ergebnisse durch Piloten in 6-8 Wochen.'},
      {q:'Welche KI-Modelle setzt JWR ein?',a:'Primär Claude von Anthropic – EU-souverän über AWS Bedrock Frankfurt. Wo GPT-4, Gemini oder Mistral besser passen, setzen wir diese ein.'},
      {q:'Ist KI BaFin-konform einsetzbar?',a:'Ja. EU AI Act, DORA und BaFin MaRisk definieren die Leitplanken. Wir bauen Compliance von Anfang an ein: Dokumentation, Explainability, Human-in-the-Loop.'},
      {q:'Was kostet KI-Beratung?',a:'Standortbestimmung im unteren fünfstelligen Bereich. Pilot im mittleren fünfstelligen Bereich. Projektbasiert.'},
      {q:'Wo bleiben unsere Daten?',a:'In Europa. AWS Bedrock Frankfurt, Google Vertex AI. DSGVO-konform ab Tag eins.'},
      {q:'Warum Claude statt ChatGPT?',a:'Constitutional AI, 200K Token Context, EU-Hosting. Anthropic baut gezielt die Financial-Services-Vertikale aus – Allianz, HUB International, Orion.'},
    ].map((f,i)=>(
      <div key={i} style={{padding:'20px 0',borderBottom:'1px solid var(--border)'}}>
        <h3 style={{fontSize:16,marginBottom:8}}>{f.q}</h3>
        <p style={{fontSize:15}}>{f.a}</p>
      </div>
    ))}
  </div></section>

  <section><div className="w">
    <p className="label">Verwandte Themen</p>
    <div className="grid3">{[{h:'/embedded-finance',t:'Embedded Finance',d:'Von der Strategie bis Go-Live'},{h:'/consulting',t:'Consulting',d:'Programmleitung & Interim'},{h:'/blog',t:'Blog',d:'Insights'}].map((l,i)=><Link key={i} href={l.h} className="card" style={{textDecoration:'none',color:'inherit'}}><span className="mtag">{l.t}</span><h3>{l.d}</h3></Link>)}</div>
  </div></section>
</>)}
