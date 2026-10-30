# ITA4 - forår 27

Materiale til fagene **IT-arkitektur**, **Agil udvikling** og **Cloud**.
Siden udgives automatisk på GitHub Pages: <https://clbokea.github.io/undervisningsmateriale/>

## Struktur

```
it-arkitektur/            ← fag (mappenavn = id i _config.yml)
  README.md               ← fagets forside
  01-introduktion/
    README.md             ← et modul
  02-arkitekturmoenstre/
    README.md
agil-udvikling/
cloud/
```

## Tilføj materiale

1. Opret en ny mappe i faget, fx `cloud/03-kubernetes/`
2. Læg en `README.md` i mappen. Første `# Overskrift` bliver sidens titel.
3. Commit og push – siden bygges automatisk og menuen opdateres af sig selv.

**Tips**
- Brug talpræfikser (`01-`, `02-`, …) – modulerne sorteres efter mappenavn.
- Billeder kan ligge i samme mappe og linkes relativt: `![diagram](diagram.png)`
- Links mellem filer skrives som på GitHub: `[næste](../02-kanban/README.md)` – de virker begge steder.
- Matematik: tilføj `mathjax: true` i front matter, så kan du skrive formler som `$E = mc^2$`.

## Nyt fag

Opret en mappe med en `README.md`, hvis første `# Overskrift` er fagets navn, og tilføj mappenavnet under
`courses:` i `_config.yml`. Rækkefølgen dér er rækkefølgen i menuen.

Siden bruger temaet [jekyll-gitbook](https://sighingnow.github.io/jekyll-gitbook/). Menuen, forrige/næste-pilene og
de danske tekster er tilpasset i `_includes/` og `_layouts/`; egne CSS-regler ligger i `assets/gitbook/custom-local.css`.

## Kør lokalt (valgfrit)

Med Docker – kræver ikke Ruby:

```bash
docker compose up
```

Åbn <http://localhost:4000/undervisningsmateriale/>. Ændringer i filerne bygges automatisk (ændringer i
`_config.yml` kræver en genstart); stop med `docker compose down`.

Eller med Ruby installeret:

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```
