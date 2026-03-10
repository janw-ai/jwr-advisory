import './globals.css'

export const metadata = {
  title: 'JWR Advisory – Embedded Finance & KI-Beratung für Financial Services | DACH',
  description: 'JWR Advisory berät Banken, Versicherungen und Fintechs im DACH-Raum. Embedded Finance, KI-Beratung, Consulting & Interim Management.',
  keywords: 'Embedded Finance Beratung, KI Beratung Finanzdienstleister, Banking-as-a-Service, Claude Anthropic Financial Services, Interim Management Bank, EU AI Act, DORA, BaFin, DACH',
  openGraph: { type: 'website', locale: 'de_DE', url: 'https://jwr-advisory.com', siteName: 'JWR Advisory', title: 'JWR Advisory – Embedded Finance & KI-Beratung', description: 'Beratung für Banken, Versicherungen und Fintechs im DACH-Raum.' },
  alternates: { canonical: 'https://jwr-advisory.com' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>
          <a href="/" style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: 2, color: 'var(--navy)' }}>JWR</span>
            <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 4, color: 'var(--grey-light)', textTransform: 'uppercase' }}>Advisory</span>
          </a>
          <div style={{ display: 'flex', gap: 28 }}>
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
          <div><span style={{ fontWeight: 800, color: 'var(--navy)', letterSpacing: 2 }}>JWR</span> <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase' }}>Advisory</span></div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/impressum">Impressum</a>
            <a href="/rechtliches">Rechtliche Hinweise</a>
            <a href="/cookies">Cookies</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
          <span>© 2026 JWR Advisory GmbH</span>
        </footer>
      </body>
    </html>
  )
}
