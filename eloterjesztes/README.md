# Előterjesztés

**AI-Ország: saját oktatási adat, saját eszközzel** — előterjesztés az oktatási
nyilvántartásokhoz (KRÉTA, Neptun és más tanulmányi rendszerek) való,
felhatalmazáson alapuló szoftveres hozzáférésről.

| Fájl | Mi ez |
| --- | --- |
| [`munkacsoporti-osszefoglalo.md`](munkacsoporti-osszefoglalo.md) | **2 oldal a munkacsoportnak** — ezt érdemes kiküldeni |
| [`munkacsoporti-osszefoglalo-szabad-tananyag.md`](munkacsoporti-osszefoglalo-szabad-tananyag.md) | ugyanez a testvéranyagból, szerkesztői javaslatként a szerzőnek |
| [`donteshozoi-osszefoglalo.md`](donteshozoi-osszefoglalo.md) | 1–2 oldalas döntéshozói összefoglaló; ezt kapja, aki dönt |
| `donteshozoi-osszefoglalo.docx` | ugyanaz Word-formátumban |
| [`AI-Orszag-sajat-oktatasi-adat-torzs.md`](AI-Orszag-sajat-oktatasi-adat-torzs.md) | **törzsanyag** a munkacsoport közös sablonja szerint (Probléma, Előzmények, Okozott kár, Megoldási célok, Várható haszon, Pontos szakpolitikai változás) |
| [`AI-Orszag-sajat-oktatasi-adat-melleklet.md`](AI-Orszag-sajat-oktatasi-adat-melleklet.md) | **melléklet**: a jogi, bizalmi, felhasználási és felelősségi modell — ami a törzset teljessé egészíti ki |
| [`kommentek-szabad-tananyag.md`](kommentek-szabad-tananyag.md) | kollegiális kommentek a testvéranyaghoz, 30 pontban |
| [`AI-Orszag-sajat-oktatasi-adat.md`](AI-Orszag-sajat-oktatasi-adat.md) | az egybefüggő teljes változat, amelyből a törzs és a melléklet készült |
| `*.docx` | mindegyikből a Word-változat |
| [`funkciokatalogus-vazlat.md`](funkciokatalogus-vazlat.md) | a szülői és tanulói olvasási funkciók adatkör-besorolása, az Üzenőfüzet valós KRÉTA-végpontjai alapján |
| `funkciokatalogus-vazlat.docx` | ugyanaz Word-formátumban |
| [`osszehasonlitas-szabad-tananyag.md`](osszehasonlitas-szabad-tananyag.md) | a testvéranyaggal („AI-Ország: szabad tananyag") való összevetés, közös váz és összehangolandó pontok |
| `osszehasonlitas-szabad-tananyag.docx` | ugyanaz Word-formátumban |
| [`valaszok-a-review-ra.md`](valaszok-a-review-ra.md) | a 12 pontos bírálat pontonkénti feldolgozása: mit állít, megáll-e, mi volt az 1.0-ban, mi lett a 2.0-ban, mi maradt nyitva |
| [`build-docx.cjs`](build-docx.cjs) | a Markdown→docx konverter |

## A .docx újragenerálása

A konverter a `docx` npm csomagot használja, amely nem függősége a projektnek:

```bash
npm install docx --prefix /tmp/docxbuild
export NODE_PATH=/tmp/docxbuild/node_modules
node build-docx.cjs AI-Orszag-sajat-oktatasi-adat.md AI-Orszag-sajat-oktatasi-adat.docx
node build-docx.cjs donteshozoi-osszefoglalo.md donteshozoi-osszefoglalo.docx
node build-docx.cjs funkciokatalogus-vazlat.md funkciokatalogus-vazlat.docx
node build-docx.cjs osszehasonlitas-szabad-tananyag.md osszehasonlitas-szabad-tananyag.docx
node build-docx.cjs AI-Orszag-sajat-oktatasi-adat-torzs.md AI-Orszag-sajat-oktatasi-adat-torzs.docx
node build-docx.cjs AI-Orszag-sajat-oktatasi-adat-melleklet.md AI-Orszag-sajat-oktatasi-adat-melleklet.docx
node build-docx.cjs kommentek-szabad-tananyag.md kommentek-szabad-tananyag.docx
node build-docx.cjs munkacsoporti-osszefoglalo.md munkacsoporti-osszefoglalo.docx
node build-docx.cjs munkacsoporti-osszefoglalo-szabad-tananyag.md munkacsoporti-osszefoglalo-szabad-tananyag.docx
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
