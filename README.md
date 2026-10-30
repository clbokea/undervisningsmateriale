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
- Brug talpræfikser (`01-`, `02-`, …) – menuen sorteres efter titel.
- Billeder kan ligge i samme mappe og linkes relativt: `![diagram](diagram.png)`
- Links mellem filer skrives som på GitHub: `[næste](../02-kanban/README.md)` – de virker begge steder.
- Valgfrit: tilføj front matter med `nav_order:` for at styre rækkefølgen i menuen.

## Nyt fag

Opret en mappe med en `README.md`, hvis første `# Overskrift` er fagets navn. Tilføj derefter to blokke under
`defaults:` i `_config.yml` (kopiér et af de eksisterende fag): én der giver fagets forside en `nav_order`,
og én der sætter `parent` til fagets navn for alle sider i undermapperne.

Siden bruger temaet [Just the Docs](https://just-the-docs.github.io/just-the-docs/). Moduler i 3. niveau
(fx `cloud/03-kubernetes/opgave-1/README.md`) skal have `parent:` og `grand_parent:` i front matter.

## Kør lokalt (valgfrit)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```
