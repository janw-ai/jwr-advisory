import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

const Press = () => <div className="logos"><div className="logos-inner">{['Handelsblatt','Süddeutsche Zeitung','WirtschaftsWoche','Finanz-Szene','Versicherungsmonitor','IT Finanzmagazin','AssCompact'].map(n=><span key={n}>{n}</span>)}</div></div>

export default function Home() {
  const posts = getAllPosts().slice(0,3)
  return (<>
    <section className="hero">
      <div className="w">
        <p className="label" style={{textAlign:'center'}}>Financial Services · DACH</p>
        <h1>Technologie trifft<br/>regulierte Finanzwelt.</h1>
        <p className="sub">Embedded Finance. KI-Beratung und operatives Consulting für Banken, Versicherungen und Fintechs im DACH-Raum.</p>
        <div style={{display:'flex',gap:12,alignItems:'center',justifyContent:'center'}}>
          <a href="/kontakt" className="btn">Gespräch vereinbaren</a>
          <span style={{fontSize:13,color:'var(--grey-light)'}}>30 Min. Unverbindlich.</span>
        </div>
      </div>
    </section>

    <Press/>

    <div className="stats-bar">{[{v:'20+',l:'Jahre FS'},{v:'70+',l:'Projekte'},{v:'DACH',l:'Marktfokus'}].map((s,i)=><div key={i} style={{textAlign:'center'}}><div className="stat-val">{s.v}</div><div className="stat-label">{s.l}</div></div>)}</div>

    <section style={{paddingTop:40}}>
      <div className="w">
        <p className="label">Leistungen</p>
        <h2>Drei Bereiche. Ein Ziel: Wirkung.</h2>
        <div className="grid3" style={{marginTop:24}}>
          {[
            {tag:'Embedded Finance',title:'Embedded Finance',text:'Integration von Zahlungs-, Kredit- und Bankingfunktionen in bestehende Plattformen. Von der Strategie über Partnerauswahl bis Go-Live.',tags:['BaaS','Payments','Lending','FIDA'],href:'/embedded-finance'},
            {tag:'KI-Beratung',title:'KI für Finanzdienstleister',text:'KI-Einsatz in regulierten Umgebungen. Standortbestimmung, Pilotierung, produktiver Betrieb. EU-souverän, BaFin-konform.',tags:['Claude','EU AI Act','BaFin'],href:'/ki-beratung'},
            {tag:'Consulting',title:'Consulting & Interim',text:'Programmleitung, Interim Management und Due Diligence für Finanzdienstleister in Transformationsphasen.',tags:['Programmleitung','Interim','Due Diligence'],href:'/consulting'},
          ].map((s,i)=>(
            <Link key={i} href={s.href} className="svc-card" style={{textDecoration:'none',color:'inherit'}}>
              <div><span className="mtag">{s.tag}</span><h3>{s.title}</h3><p style={{fontSize:15,marginBottom:16}}>{s.text}</p><div>{s.tags.map(t=><span key={t} className="tag">{t}</span>)}</div></div>
              <div className="svc-link">Mehr erfahren →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="dark" style={{marginTop:40}}>
      <div className="w">
        <p className="label">Projekte</p>
        <h2>Woran wir arbeiten.</h2>
        {[
          {m:'Live',ml:'EF Suite',t:'E-Commerce-Plattform · DE',tags:['Embedded Finance','Payments'],c:[{l:'Ausgangslage',p:'SaaS, 15.000+ Händler. Zahlungen und Finanzierung gewünscht. Kein regulatorischer Rahmen.'},{l:'Lösung',p:'EF-Strategie, Partner evaluiert. API bis BaFin-Abstimmung.'},{l:'Ergebnis',p:'Händler wickeln Zahlungen ab und beantragen Kredite aus dem Dashboard.'}]},
          {m:'8 Wo.',ml:'1. Use Case',t:'Versicherer · DACH',tags:['KI-Beratung','Readiness'],c:[{l:'Ausgangslage',p:'KI gewünscht. Dutzende Ideen, keine Priorisierung.'},{l:'Lösung',p:'Reifegrad-Analyse, drei Use Cases, Pilot aufgesetzt. Governance parallel.'},{l:'Ergebnis',p:'Erster Use Case nach acht Wochen produktiv.'}]},
          {m:'9 Mo.',ml:'Value Creation',t:'Finanzdienstleister · Post-Merger',tags:['Interim','Value Creation'],c:[{l:'Ausgangslage',p:'PE, Post-Merger. Tech-Konsolidierung, regulatorische Integration.'},{l:'Lösung',p:'Programmleitung. Vendor-Konsolidierung, IT-Roadmap, BaFin.'},{l:'Ergebnis',p:'Programm planmäßig übergeben. Ziele erreicht.'}]},
        ].map((c,i)=>(
          <div key={i} className="case" style={{marginTop:i===0?24:0}}>
            <div className="case-num"><strong>{c.m}</strong><span>{c.ml}</span></div>
            <div><h4 style={{fontSize:16,fontWeight:700,marginBottom:12}}>{c.t}</h4>
              <div className="case-cols">{c.c.map((col,j)=><div key={j}><p className="col-label">{col.l}</p><p style={{fontSize:13}}>{col.p}</p></div>)}</div>
            </div>
          </div>
        ))}
        <p style={{fontSize:12,color:'rgba(255,255,255,.25)',marginTop:8,fontStyle:'italic'}}>Referenzen im persönlichen Gespräch.</p>
      </div>
    </section>

    <section>
      <div className="w">
        <p className="label">Ansatz</p>
        <h2>Operativ. Hands-on. Ergebnisorientiert.</h2>
        <div className="grid3" style={{marginTop:24}}>
          {[{n:'01',t:'Verstehen',p:'Deep Dive in Ihre Realität. Prozesse, Regulatorik, Tech-Stack.'},{n:'02',t:'Entscheiden',p:'Klare Empfehlung. Businesscase, Risiken, Timeline.'},{n:'03',t:'Umsetzen',p:'Hands-on. Partnerauswahl, Integration, Pilot – bis es läuft.'}].map((s,i)=>(
            <div key={i} className="approach-step"><div className="approach-num">{s.n}</div><h3 style={{marginTop:-8}}>{s.t}</h3><p style={{fontSize:15}}>{s.p}</p></div>
          ))}
        </div>
      </div>
    </section>

    {posts.length>0&&<section className="bg"><div className="w">
      <p className="label">Blog</p><h2>Insights.</h2>
      <div className="grid3" style={{marginTop:16}}>{posts.map(p=>(
        <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card" style={{textDecoration:'none',color:'inherit'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}><span className="blog-tag">{p.tag}</span><span className="blog-date">{p.date}</span></div>
          <h3 style={{fontSize:16,lineHeight:1.4}}>{p.title}</h3>
        </Link>
      ))}</div>
    </div></section>}

    <div id="about"><div className="w"><div className="sep"/></div></div>
    <section style={{background:'var(--light)',borderTop:'1px solid var(--border)'}}>
      <div className="w">
        <p className="label">Über JWR Advisory</p>
        <h2>Operator-Perspektive. Boutique.</h2>
        <p style={{maxWidth:580,marginBottom:32}}>Über 20 Jahre Financial Services. München und Frankfurt. Wir haben selbst regulierte Finanzdienstleister aufgebaut. Bewusst Boutique.</p>
        <div className="grid2" style={{gap:48,alignItems:'start'}}>
          <div><h3>Jan Wichmann</h3><p style={{fontSize:11,fontWeight:700,letterSpacing:2,color:'var(--blue)',textTransform:'uppercase',marginBottom:12}}>Gründer</p><p style={{marginBottom:10}}>Serial Founder und Berater im DACH-Finanzmarkt. Co-Founder BANKSapi – BaFin-Lizenz, Marktführer Open Banking. Davor KPMG.</p><p>MSc Betriebswirtschaft (Passau), MBA (Budapest).</p></div>
          <div className="focus-box"><h4 style={{fontSize:11,fontWeight:700,letterSpacing:2,color:'var(--blue)',textTransform:'uppercase',marginBottom:16}}>Fokusthemen</h4>{['Embedded Finance Strategie','KI-Beratung für Financial Services','KI-Governance (BaFin, DORA, EU AI Act)','Banking-as-a-Service','Open Banking / PSD2 / FIDA'].map(f=><div key={f} className="focus-item"><div className="focus-dot"/>{f}</div>)}</div>
        </div>
      </div>
    </section>
  </>)
}
