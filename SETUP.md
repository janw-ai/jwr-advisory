# JWR Advisory – Setup-Anleitung

## Was du hast
Ein fertiges Next.js-Projekt mit:
- Homepage mit allem Content (Leistungen, Cases, Ansatz, DNA, Über uns, Kontakt)
- Blog-System das Markdown-Dateien automatisch als Artikel anzeigt
- 3 Blog-Artikel fertig (HUB International, Spotify, COBOL)
- SEO/GEO-Optimierung (Meta-Tags, Schema.org, OpenGraph)
- JWR Brand (Navy, Signal Blue, Raleway, alles)

## Einmaliges Setup (10 Minuten)

### 1. GitHub Account erstellen (falls keiner existiert)
- Gehe zu github.com → Sign Up
- Erstelle ein neues Repository: "jwr-advisory"
- Lade den gesamten Inhalt dieses Zip-Ordners dort hoch

### 2. Vercel verbinden
- Gehe zu vercel.com → Sign Up mit GitHub
- "New Project" → wähle dein "jwr-advisory" Repository
- Vercel erkennt Next.js automatisch → Deploy klicken
- Fertig. Deine Seite ist live unter einer vercel.app URL

### 3. Domain umleiten
- In Vercel: Settings → Domains → "jwr-advisory.com" hinzufügen
- Bei Mittwald: DNS-Einstellungen ändern:
  - A Record: 76.76.21.21
  - CNAME: cname.vercel-dns.com
- Fertig. jwr-advisory.com zeigt auf deine neue Seite.

## Neuen Blog-Artikel veröffentlichen (5 Minuten)

### Workflow: LinkedIn-Post → Blog

1. Schreib deinen LinkedIn-Post (machst du eh)
2. Sag mir in Claude: "Mach Blog-Artikel aus diesem Post: [Post einfügen]"
3. Ich gebe dir eine .md Datei
4. Lade die .md Datei in den Ordner `content/blog/` auf GitHub hoch
5. Vercel baut automatisch neu. Artikel ist live.

### Markdown-Format (so sehen die Dateien aus):

```
---
title: "Dein Artikel-Titel"
date: "Mrz 2026"
tag: "KI · Insurance"
author: "Jan Wichmann"
readtime: "5 min Lesezeit"
excerpt: "Kurzbeschreibung für die Übersicht"
tags: ["KI", "Insurance", "DACH"]
cta_title: "Frage am Ende des Artikels?"
cta_text: "Beschreibung unter der Frage"
---

Dein Artikeltext hier. Normales Markdown.

## Zwischenüberschrift

Weiterer Text.
```

## Text auf der Homepage ändern

Option A: Direkt auf GitHub die Datei `src/app/page.js` editieren.
Such nach dem Text den du ändern willst, editiere, speichere.
Vercel baut automatisch neu.

Option B: Sag mir in Claude was du ändern willst. Ich gebe dir die aktualisierte Datei.

## Projektstruktur

```
jwr-site/
├── content/blog/          ← Hier kommen neue .md Blog-Dateien rein
│   ├── hub-international-claude-insurance.md
│   ├── spotify-ki-banking-story.md
│   └── cobol-claude-banking-legacy.md
├── src/
│   ├── app/
│   │   ├── layout.js      ← Nav, Footer, Meta-Tags
│   │   ├── page.js        ← Homepage Content
│   │   ├── globals.css    ← JWR Brand Styles
│   │   └── blog/
│   │       ├── page.js    ← Blog-Übersicht
│   │       └── [slug]/page.js ← Einzelner Blog-Artikel
│   └── lib/blog.js        ← Markdown-Verarbeitung
├── public/robots.txt
├── next.config.js
└── package.json
```

## Kosten
- Vercel: 0€ (Free Tier reicht für diese Seite)
- Domain: Behalten bei Mittwald oder zu Vercel transferieren
- Mittwald: Kündigen sobald Domain umgezogen ist
