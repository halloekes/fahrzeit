# Fahrtzeit

Reisezeit-Rechner mit Echtzeit-Verkehrsprognose für Deutschland — als installierbare PWA.

**Live:** [halloekes.github.io/fahrzeit](https://halloekes.github.io/fahrzeit/)

## Features

- **Ankunftszeit berechnen** — Abfahrtszeit und Wochentag wählen, App zeigt günstige / typische / ungünstige Ankunftszeit
- **Abfahrtszeit berechnen** — Wunsch-Ankunftszeit eingeben, App berechnet wann man losfahren sollte (mit Puffer)
- **Verkehrsprognose** — Tages- und uhrzeitabhängige Verkehrseinschätzung (Berufsverkehr, Freitag-Reiseverkehr, Wochenende etc.)
- **E-Auto-Modus** — 50+ Fahrzeugmodelle, Ladezeit-Berechnung mit Einfluss auf Abfahrt-/Ankunftszeit
- **Routenkarte** — Google Maps mit Streckeninfo (Entfernung, Fahrzeit, Durchschnittsgeschwindigkeit)
- Autocomplete für Start- und Zielort (Deutschland)
- Wochentag-Auswahl und iOS-Style Scroll-Wheel für Uhrzeiten
- Installierbar als PWA auf iPhone, Android, iPad und Desktop
- Responsive Design (Handy, Tablet, Desktop)

## API

Nutzt die **Google Maps Directions API** für Routenberechnung mit historischen Verkehrsdaten (`drivingOptions.departureTime`).

Der API Key ist in `index.html` hinterlegt und per HTTP-Referrer auf `halloekes.github.io/fahrzeit/*` eingeschränkt.

Benötigte APIs in der Google Cloud Console:
- Maps JavaScript API
- Places API
- Directions API

## Kosten

Ca. 0,005–0,01 $ pro Berechnung (ein Directions API Request).
Für privaten Gebrauch im einstelligen Cent-Bereich pro Monat.
Kostenlimit in der Google Cloud Console unter Billing > Budgets empfohlen.

## Tech Stack

- Vanilla HTML/CSS/JS — kein Framework, keine Build-Tools
- Google Maps JavaScript SDK v3
- Service Worker (network-first mit Offline-Fallback)
- PWA mit manifest.json
