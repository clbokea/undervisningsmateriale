# Undervisningsmateriale

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
- Brug talpræfikser (`01-`, `02-`, …) – menuen sorteres efter mappenavn.
- Undermapper (fx `cloud/03-kubernetes/opgave-1/README.md`) vises indrykket i menuen.
- Billeder kan ligge i samme mappe og linkes relativt: `![diagram](diagram.png)`
- Links mellem filer skrives som på GitHub: `[næste](../02-kanban/README.md)` – de virker begge steder.
- Valgfrit: tilføj front matter med `description:` for at styre teksten på modulkortet.

## Nyt fag

Tilføj et fag under `courses:` i `_config.yml` (id, titel, beskrivelse, ikon og farve) og opret en mappe med samme navn.

## Kør lokalt (valgfrit)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```
