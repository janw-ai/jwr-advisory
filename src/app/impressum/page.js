export const metadata = {
  title: 'Impressum – JWR Advisory GmbH',
  description: 'Impressum der JWR Advisory GmbH, München.',
  robots: 'noindex, follow',
}

export default function Impressum() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="w" style={{ maxWidth: 780 }}>
        <h1 style={{ fontSize: 32 }}>Impressum</h1>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 24 }}>
          <strong style={{ color: '#fff', fontWeight: 600 }}>Angaben gemäß § 5 TMG und Medienstaatsvertrag:</strong><br />
          JWR Advisory GmbH
        </p>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 16 }}>
          <strong style={{ color: '#fff', fontWeight: 600 }}>Postanschrift:</strong><br />
          Menterschwaigstrasse 1a<br />
          81545 München
        </p>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 16 }}>
          <strong style={{ color: '#fff', fontWeight: 600 }}>Kontakt:</strong><br />
          E-Mail: <a href="mailto:info@jwr-advisory.com" style={{ color: '#007ADE' }}>info@jwr-advisory.com</a><br />
          Website: <a href="https://jwr-advisory.com" style={{ color: '#007ADE' }}>www.jwr-advisory.com</a>
        </p>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 16 }}>
          <strong style={{ color: '#fff', fontWeight: 600 }}>Vertreten durch:</strong> GF Jan Wichmann
        </p>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 16 }}>
          <strong style={{ color: '#fff', fontWeight: 600 }}>Sitz der Gesellschaft:</strong> München<br />
          <strong style={{ color: '#fff', fontWeight: 600 }}>Amtsgericht München</strong><br />
          HRB: 271192<br />
          Umsatzsteuer-ID: DE349726690
        </p>

        <p style={{ fontSize: 14, fontWeight: 300, color: '#939A9E', marginTop: 16 }}>
          © 2026 JWR Advisory GmbH
        </p>

        <h2 style={{ fontSize: 20, marginTop: 32 }}>Haftung für Inhalte</h2>
        <p style={{ fontSize: 13, fontWeight: 300, color: '#939A9E' }}>Die Inhalte unserer Seiten werden mit der größtmöglichen Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h2 style={{ fontSize: 20, marginTop: 32 }}>Haftung für Links</h2>
        <p style={{ fontSize: 13, fontWeight: 300, color: '#939A9E' }}>Soweit die Website Verknüpfungen zu Websites Dritter enthält, unterliegen diese der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung die fremden Inhalte überprüft und festgestellt, dass keine Rechtsverstöße ersichtlich sind. Eine ständige Kontrolle der externen Links ist ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h2 style={{ fontSize: 20, marginTop: 32 }}>Urheberrecht</h2>
        <p style={{ fontSize: 13, fontWeight: 300, color: '#939A9E' }}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Anbieters oder Rechteinhabers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      </div>
    </section>
  )
}
