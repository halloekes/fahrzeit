# Fahrtzeit PWA

Historisch basierte Fahrzeitprognose für Deutschland – als installierbare PWA.

**Live:** [halloekes.github.io/fahrzeit](https://halloekes.github.io/fahrzeit/)

## Was es kann

- **Abfahrt planen** – Uhrzeit und Wochentag eingeben, App zeigt günstige / typische / ungünstige Fahrtzeit mit Ankunftszeit
- **Ankunft planen** – Wunsch-Ankunftszeit eingeben, App berechnet wann man spätestens (und frühestens) losfahren sollte
- Freie Eingabe von Start und Ziel (mit Autocomplete)
- Prognose basiert auf historischen Verkehrsdaten via Google Distance Matrix API
- Installierbar als PWA auf Handy und Desktop

## API Key

Der Google Maps API Key ist in `index.html` hinterlegt und per HTTP-Referrer auf `halloekes.github.io` eingeschränkt.  
Benötigte APIs: **Distance Matrix API**, **Places API** (Google Cloud Console).

## Kosten

Ca. 0,005 $ pro Abfrage (3 Requests pro Berechnung = ~0,015 $).  
Für privaten Gebrauch im einstelligen Cent-Bereich pro Monat.  
Kostenlimit in der Google Cloud Console unter Billing → Budgets empfohlen.

## Tech Stack

- Vanilla HTML/CSS/JS – kein Framework, keine Dependencies
- Google Distance Matrix API mit `departure_time` + `traffic_model`
- Service Worker für Offline-Caching
- PWA mit manifest.json, installierbar
