import './globals.css'

export const metadata = {
  title: 'JWR Advisory – Embedded Finance & KI-Beratung für Financial Services | DACH',
  description: 'JWR Advisory berät Banken, Versicherungen und Fintechs im DACH-Raum. Embedded Finance, KI-Beratung, Consulting & Interim Management. Über 70 Projekte. München & Frankfurt.',
  keywords: 'Embedded Finance Beratung, KI Beratung Finanzdienstleister, Banking-as-a-Service, Claude Anthropic Financial Services, Interim Management Bank, EU AI Act, DORA, BaFin, DACH',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://jwr-advisory.com',
    siteName: 'JWR Advisory',
    title: 'JWR Advisory – Embedded Finance & KI-Beratung für Financial Services',
    description: 'Beratung und Implementierung für Banken, Versicherungen und Fintechs im DACH-Raum.',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://jwr-advisory.com' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="orb" />
        <nav>
          <a href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 3 }}>JWR</span>
            <span style={{ fontSize: 9, fontWeight: 300, letterSpacing: 4, color: '#939A9E', textTransform: 'uppercase' }}>Advisory</span>
          </a>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="/embedded-finance" className="nl">Embedded Finance</a>
            <a href="/ki-beratung" className="nl">KI-Beratung</a>
            <a href="/consulting" className="nl">Consulting</a>
            <a href="/#about" className="nl">Über uns</a>
            <a href="/blog" className="nl">Blog</a>
            <a href="/kontakt" className="nl">Kontakt</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 2 }}>JWR</span>
            <span style={{ fontSize: 8, color: '#939A9E', textTransform: 'uppercase', letterSpacing: 2 }}>Advisory</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/impressum" style={{ fontSize: 9, color: '#939A9E' }}>Impressum</a>
            <a href="/rechtliches" style={{ fontSize: 9, color: '#939A9E' }}>Rechtliche Hinweise</a>
            <a href="/cookies" style={{ fontSize: 9, color: '#939A9E' }}>Cookies</a>
            <a href="/datenschutz" style={{ fontSize: 9, color: '#939A9E' }}>Datenschutz</a>
            <a href="/kontakt" style={{ fontSize: 9, color: '#939A9E' }}>Kontakt</a>
          </div>
          <span style={{ fontSize: 8, color: '#27476E' }}>© 2026 JWR Advisory GmbH · München · Frankfurt</span>
        </footer>
      </body>
    </html>
  )
}
