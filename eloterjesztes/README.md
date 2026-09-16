# Előterjesztés

**AI-Ország: saját oktatási adat, saját eszközzel** — előterjesztés az oktatási
nyilvántartásokhoz (KRÉTA, Neptun és más tanulmányi rendszerek) való,
felhatalmazáson alapuló szoftveres hozzáférésről.

| Fájl | Mi ez |
| --- | --- |
| [`donteshozoi-osszefoglalo.md`](donteshozoi-osszefoglalo.md) | 1–2 oldalas döntéshozói összefoglaló; ezt kapja, aki dönt |
| `donteshozoi-osszefoglalo.docx` | ugyanaz Word-formátumban |
| [`AI-Orszag-sajat-oktatasi-adat.md`](AI-Orszag-sajat-oktatasi-adat.md) | a teljes előterjesztés forrása, háttéranyag |
| `AI-Orszag-sajat-oktatasi-adat.docx` | ugyanaz Word-formátumban |
| [`valaszok-a-review-ra.md`](valaszok-a-review-ra.md) | a 12 pontos bírálat pontonkénti feldolgozása: mit állít, megáll-e, mi volt az 1.0-ban, mi lett a 2.0-ban, mi maradt nyitva |
| [`build-docx.cjs`](build-docx.cjs) | a Markdown→docx konverter |

## A .docx újragenerálása

A konverter a `docx` npm csomagot használja, amely nem függősége a projektnek:

```bash
npm install docx --prefix /tmp/docxbuild
export NODE_PATH=/tmp/docxbuild/node_modules
node build-docx.cjs AI-Orszag-sajat-oktatasi-adat.md AI-Orszag-sajat-oktatasi-adat.docx
node build-docx.cjs donteshozoi-osszefoglalo.md donteshozoi-osszefoglalo.docx
```

A Markdownból címsorok, bekezdések, felsorolások, számozott listák, táblázatok,
idézetblokkok, valamint a félkövér, dőlt és kódjelölés jön át.

## A dokumentum állapota

A szöveg egy 12 pontos szakmai bírálat átvezetésével, majd három további
egyeztetési kör után nyerte el a jelenlegi formáját; a köröket a válaszjegyzék
dokumentálja. A hosszú anyag háttéranyagként működik, a döntéshez a
[döntéshozói összefoglaló](donteshozoi-osszefoglalo.md) készült. A szövegben
`[ELLENŐRIZENDŐ: …]` jelöli azt a néhány tényadatot, amelyet publikálás előtt
elsődleges forrásból pótolni kell; a nyitott szakmai kérdéseket a dokumentum
12. fejezete sorolja fel.

Az előterjesztés az Üzenőfüzet projekthez kapcsolódik: a 3.3 pont a szolgáltatás
jelenlegi működési kényszereit írja le példaként, és a javaslat elfogadása ezt a
közvetítő szerepet éppen feleslegessé tenné.
