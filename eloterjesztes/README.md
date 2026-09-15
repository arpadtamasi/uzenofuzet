# Előterjesztés

**AI-Ország: saját oktatási adat, saját eszközzel** — előterjesztés az oktatási
nyilvántartásokhoz (KRÉTA, Neptun és más tanulmányi rendszerek) való,
felhatalmazáson alapuló szoftveres hozzáférésről.

| Fájl | Mi ez |
| --- | --- |
| [`AI-Orszag-sajat-oktatasi-adat.md`](AI-Orszag-sajat-oktatasi-adat.md) | a dokumentum forrása, ez a szerkesztendő változat |
| `AI-Orszag-sajat-oktatasi-adat.docx` | a forrásból generált, beadható változat |
| [`valaszok-a-review-ra.md`](valaszok-a-review-ra.md) | a 12 pontos bírálat pontonkénti feldolgozása: mit állít, megáll-e, mi volt az 1.0-ban, mi lett a 2.0-ban, mi maradt nyitva |
| [`build-docx.cjs`](build-docx.cjs) | a Markdown→docx konverter |

## A .docx újragenerálása

A konverter a `docx` npm csomagot használja, amely nem függősége a projektnek:

```bash
npm install docx --prefix /tmp/docxbuild
NODE_PATH=/tmp/docxbuild/node_modules \
  node build-docx.cjs AI-Orszag-sajat-oktatasi-adat.md AI-Orszag-sajat-oktatasi-adat.docx
```

A Markdownból címsorok, bekezdések, felsorolások, számozott listák, táblázatok,
idézetblokkok, valamint a félkövér, dőlt és kódjelölés jön át.

## A dokumentum állapota

A 2.0 változat a 12 pontos szakmai bírálat átvezetésével készült. A szövegben
`[ELLENŐRIZENDŐ: …]` jelöli azt a néhány tényadatot, amelyet publikálás előtt
elsődleges forrásból pótolni kell; a nyitott szakmai kérdéseket a dokumentum
12. fejezete sorolja fel.

Az előterjesztés az Üzenőfüzet projekthez kapcsolódik: a 3.3 pont a szolgáltatás
jelenlegi működési kényszereit írja le példaként, és a javaslat elfogadása ezt a
közvetítő szerepet éppen feleslegessé tenné.
