# Funkciókatalógus — első vázlat

## A szülői és tanulói olvasási funkciók adatkör-besorolása

*Az előterjesztés 12./III. pontja szerint a kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a szükséges bizalmi szintet, valamint az adatkör besorolását. A 14. fejezet 3. nyitott kérdése ezt a besorolást nevezi meg a javaslat legmunkaigényesebb részének. Ez a vázlat az első menetet végzi el rajta.*

---

## 1. Mi ez, és mi nem

**Mi ez.** Az Üzenőfüzet nyílt forráskódú szolgáltatás ma 17 KRÉTA-végpontot olvas a szülő nevében. Ez a lista nem elméleti: működő integrációból származik, tehát pontosan azt a funkciókört fedi le, amelyet egy delegált hozzáférés első szakasza érintene. A vázlat minden végponthoz hozzárendel egy adatkör-besorolást és egy bizalmi szintet.

**Mi nem.**

- **Nem teljes.** Kizárólag az előterjesztés **A) esetét** fedi le: az érintett saját adatának olvasását. A B) eset (műveletvégzés) és a C) eset (pedagógusi jogosultság) funkcióit ez a forrás nem tartalmazza, mert az Üzenőfüzet szülői oldalú és csak olvas. Azokhoz az üzemeltető saját funkciólistája kell.
- **Nem a Neptunra vonatkozik.** A felsőoktatási tanulmányi rendszerek külön katalógust igényelnek.
- **Nem végleges, mert mezőszintű sémát nem láttunk.** A besorolás a végpontok szemantikáján alapul, nem a tényleges válaszmezőkön. **Minden sor validálandó a valódi válaszszerkezet ismeretében.** Ez önmagában is érv a javaslat mellett: a katalógus nem készíthető el addig, amíg az üzemeltető nem teszi közzé a felület leírását.

## 2. A három adatkör

| Jel | Adatkör | Alapszabály |
|---|---|---|
| **A** | alapadatkör | delegálható és külső szolgáltatóhoz továbbítható, ha a tájékoztatás megtörtént |
| **K** | korlátozott továbbítású adatkör | delegált csatornán külső szolgáltatóhoz nem továbbítható; a hivatalos felületen továbbra is látható |
| **M** | más személyt is érintő adat | csak szűkítve, a harmadik személyre vonatkozó rész elhagyásával, vagy nem delegálható |

## 3. A katalógus

| # | Funkció | KRÉTA-végpont | Adatkör | Szint | Megjegyzés |
|---|---|---|---|---|---|
| 1 | Kapcsolat ellenőrzése | `sajat/TanuloAdatlap` (metaadat) | A | 1 | csak a kapcsolat élő voltát igazolja |
| 2 | Tanulói adatlap | `sajat/TanuloAdatlap` | A, **a más gondviselőre vonatkozó rész elhagyásával** | 1 | lásd 4.1 |
| 3 | Gondviselői adatlap | `sajat/GondviseloAdatlap` | A | 1 | a felhatalmazó szülő saját adata; tanulói munkamenetből M |
| 4 | Osztályok és csoportok | `sajat/OsztalyCsoportok` | A | 1 | a pedagógusnevek szakmai minőségben szerepelnek |
| 5 | Értékelések, jegyek | `sajat/Ertekelesek` | A | 1 | a szöveges értékelés szabad szöveg; lásd 4.5 |
| 6 | Mulasztások | `sajat/Mulasztasok` | A, **az igazolás indoka K** | 1 | az igazolástípus egészségügyi következtetést enged — lásd 4.2 |
| 7 | Feljegyzések | `sajat/Feljegyzesek` | **K** | 1 | alapértelmezésben nem továbbítható — lásd 4.3 |
| 8 | Faliújság | `sajat/FaliujsagElemek` | A | 1 | intézményi közlés; más tanulót nevesíthet, de nyilvános körben |
| 9 | Tanév rendje | `sajat/Intezmenyek/TanevRendjeElemek` | A | 1 | intézményi adat, jellemzően nem személyes adat |
| 10 | Lázár Ervin Program előadásai | `Lep/Eloadasok` | A | 1 | a részvétel ténye programhoz kötött, alacsony érzékenységű |
| 11 | Órarend | `sajat/OrarendElemek` | A | 1 | pedagógusnév, terem, tantárgy |
| 12 | Órarendi elem részletei | `sajat/OrarendElem` | A | 1 | mint a 11. |
| 13 | Házi feladatok | `sajat/HaziFeladatok` | A | 1 | |
| 14 | Házi feladat részletei | `sajat/HaziFeladatok/{uid}` | A | 1 | |
| 15 | Bejelentett számonkérések | `sajat/BejelentettSzamonkeresek` | A | 1 | |
| 16 | Fogadóórák | `sajat/Fogadoorak` | A, **más szülő foglalásának elhagyásával** | 1 | lásd 4.7 |
| 17 | Fogadóóra részletei | `sajat/Fogadoorak/{uid}` | A, **más szülő foglalásának elhagyásával** | 1 | mint a 16. |
| 18 | Heti intézményi beosztás | `sajat/Intezmenyek/Hetirendek/Orarendi` | A | 1 | intézményi adat |
| 19 | Osztályátlagok | `sajat/Ertekelesek/Atlagok/OsztalyAtlagok` | **M** | — | **nem delegálható**: nem a tanuló adata — lásd 4.4 |
| 20 | Tárgyi eszköz státusza | `TargyiEszkoz/IsEszkozKiosztva`, `IsRegisztralt` | **K** | 1 | szociális támogatásra enged következtetni — lásd 4.6 |

Húsz funkcióból **tizenhárom tiszta alapadatkör**, kettő korlátozott továbbítású, három részleges elhagyást igényel, egy pedig egyáltalán nem delegálható. A bizalmi szint a delegálható funkcióknál mindenhol 1, mert kizárólag olvasásról van szó.

**A vezérelv, amely a besorolásból kirajzolódott:** ahol a válasz más természetes személy adatát is tartalmazza, az alapértelmezés a **rész elhagyása**, nem a funkció tiltása; ahol viszont a funkció teljes értéke más személyek adatából áll, ott a funkció **nem delegálható**. Ez nem új szabály, hanem az előterjesztés A) § (4) bekezdésének alkalmazása: más személy adatára a felhatalmazás csak akkor terjed ki, ha a katalógus kifejezetten feljogosít.

## 4. A nehéz esetek

Ez a fejezet a katalógus lényege. A tiszta eseteknél a besorolás mechanikus; itt dől el, hogy a szabály működik-e.

### 4.1 A tanulói adatlap gondviselői blokkot tartalmaz

A tanuló adatlapja jellemzően nem csak a tanuló adataiból áll: tartalmazza a gondviselők nevét és elérhetőségét. Egy szülő számára ez részben **a másik szülő adata**.

*Javasolt megoldás:* a funkció delegálható, de a válaszból a felhatalmazást adó gondviselőn kívüli gondviselők elérhetőségi adatait el kell hagyni. Ez a 4.4-ben megfogalmazott vezérelv első fele: a rész elhagyása, nem a funkció tiltása. Ehhez az üzemeltetőnek mezőszintű szűrést kell tudnia a válaszban — ez műszaki követelmény, nem jogi.

### 4.2 A mulasztás igazolási indoka egészségügyi adat lehet

A mulasztás ténye a tanuló saját adata. Az igazolás típusa viszont — „orvosi igazolás”, „szülői igazolás”, „hatósági” — **egészségügyi következtetést enged**: ha egy tanuló mulasztásainak nagy része orvosi igazolású, az az egészségi állapotára utaló információ.

*Javasolt megoldás:* a mulasztás dátuma, tantárgya, típusa (igazolt vagy igazolatlan) alapadatkör; **az igazolás konkrét indoka és kiállítója korlátozott továbbítású**. A hivatalos felületen a szülő továbbra is látja.

Ez a sor jól mutatja, miért nem elég végpontszintű besorolás: **egyetlen válaszon belül két adatkör van**.

### 4.3 A feljegyzések a legvegyesebb végpont

A `Feljegyzesek` egyaránt tartalmazhat dicséretet, szaktanári figyelmeztetést, magatartási bejegyzést, fegyelmi ügy előzményét, és adott esetben gyermekvédelmi jelzéshez kapcsolódó kontextust. Végpontszinten ezek nem különböztethetők meg.

*Javasolt megoldás:* **alapértelmezésben korlátozott továbbítású**, mert a legérzékenyebb lehetséges tartalomhoz kell igazodni. Ez feloldható, ha az üzemeltető típuskódot ad a feljegyzésekhez: akkor a dicséret és a semleges tanári közlés alapadatkörbe kerülhet, a fegyelmi és gyermekvédelmi vonatkozású pedig korlátozott marad.

**Ez konkrét kérés az üzemeltető felé**, és a katalógus egyik legfontosabb hozadéka: kiderül, hogy a szabályozás finomsága a mögöttes adatszerkezeten múlik.

### 4.4 Az osztályátlag nem a tanuló adata

Ez a sor a katalógus legtanulságosabb esete, mert egy fogalmi csúszást leplez le.

Az A) eset köznyelvi neve „a saját adat olvasása”, a normaszöveg viszont nem ezt mondja: a felhatalmazás a felhasználó **meglévő jogosultságának** körére terjed ki. A legtöbb végpontnál a kettő egybeesik. Az osztályátlagnál szétválik: a szülő látja a KRÉTA-ban, tehát a jogosultsága kiterjed rá — **de az átlag nem a gyereke adata**, hanem az osztályé, más tanulók értékeléseiből képezve.

*Javasolt megoldás:* **a funkció nem delegálható.** Nem küszöbérték kell hozzá, hanem az, hogy ne kerüljön be a delegálható körbe. Ez nem új szabály: az előterjesztés A) § (4) bekezdése szerint más természetes személy adatára a felhatalmazás csak akkor terjed ki, ha a katalógus kifejezetten feljogosít — és az átlagra ilyen indítvány nincs.

**Mit veszítünk vele.** A szülő az asszisztensén keresztül nem tudja megkérdezni, hogyan áll a gyereke az osztályhoz képest. A hivatalos felületen továbbra is látja. Ez a szűkítés nem sérti a javaslat ígéretét, mert az ígéret az, hogy a jogosultság **nem bővül**; a más személyek adatára vonatkozó szűkítést maga a normaszöveg írja elő.

**Amit nyerünk vele.** Elmarad egy egész védelmi gépezet. Küszöbérték nélkül nem kell csoportlétszámot kérni az üzemeltetőtől, és nem kell kezelni a következő problémát sem: ha egy asszisztens lekéri az átlagot hétfőn és pénteken, és közben egyetlen új jegy került be, akkor az a jegy a két átlag különbségéből kiszámítható — **akármekkora a csoport**. Az ismételt, automatizált lekérdezés éppen ezt a különbségi támadást hozza be, és küszöbértékkel nem védhető ki. A funkció kihagyása igen.

### 4.5 A szöveges értékelés szabad szöveg

A szöveges értékelés a tanuló saját adata, tehát alapadatkör. De szabad szöveg, amelybe a pedagógus bármit írhat, ideértve magatartási vagy családi körülményre utaló megjegyzést is.

*Javasolt megoldás:* besorolás szerint marad alapadatkör — a tartalmi kockázat nem besorolással kezelhető. Amit a javaslat tehet: a jóváhagyó képernyőn a szöveges értékelés külön nevesítve jelenjen meg, hogy a szülő tudja, szabad szöveges pedagógusi megjegyzés is kimegy.

### 4.6 Az eszközstátusz szociális helyzetre utalhat

A `TargyiEszkoz` végpontok azt mondják meg, kiosztottak-e a tanulónak eszközt és regisztrálták-e. Önmagában technikai adat. Csakhogy az állami eszközkiosztási programok jellemzően rászorultsági alapon célzottak, így **a kiosztás ténye szociális helyzetre enged következtetni**.

*Javasolt megoldás:* korlátozott továbbítású. A szülő a hivatalos felületen látja; MI-szolgáltatóhoz nem megy ki. Ez a funkció amúgy is marginális haszonnal jár egy asszisztensben.

### 4.7 A fogadóóra-foglalás más szülő adata

Ha a fogadóórák listája megmutatja, hogy egy idősávot már lefoglaltak, az önmagában időpontkezelési információ. Ha viszont a foglaló nevét vagy a gyerek nevét is mutatja, az **más szülő és más tanuló adata**.

*Javasolt megoldás:* a szabad és foglalt idősávok delegálhatók, a foglaló azonosítása nem. Ugyanaz a vezérelv, mint a 4.1-nél: rész elhagyása.

## 5. Amit az üzemeltetőtől kell kérni

A katalógus lezárásához négy dolog kell, és mindegyik az üzemeltető oldalán van:

1. **Mezőszintű válaszséma** minden végponthoz. E nélkül a besorolás végpontnévre épül, ami a 4.1 és 4.2 eset alapján nem elég.
2. **Típuskód a feljegyzésekhez**, hogy a 4.3 eset feloldható legyen.
3. **Mezőszintű szűrés képessége** a válaszban, mert három eset is részleges elhagyást igényel, nem a funkció tiltását.

A vázlat első menete után a csoportlétszámra vonatkozó kérés okafogyottá vált: az osztályátlag kikerült a delegálható körből (4.4), így küszöbértékre nincs szükség.

## 6. Mi hiányzik még

- **A B) eset**: műveletvégzés az érintett saját adatkörében — igazolás beküldése, jelentkezések, üzenetküldés. Ehhez az üzemeltető írási funkciólistája kell.
- **A C) eset**: pedagógusi és oktatói funkciók. Ez a legnagyobb hiányzó blokk, és a legérzékenyebb, mert ott más érintettek adatairól van szó.
- **A felsőoktatás**: a Neptun és a többi tanulmányi rendszer önálló katalógusa.
- **Validálás**: a fenti húsz sor mindegyike ellenőrizendő valódi válaszszerkezeten.

## 7. Amit ez a vázlat bizonyít

Három dolgot, és mindhárom az előterjesztés érvelését erősíti.

**A besorolás elvégezhető.** Nem elméleti feladat: húsz funkcióból tizenhárom egyértelmű, hat a mögöttes adatszerkezet ismeretében eldönthető, egy pedig egyszerűen kimarad.

**A „saját adat” és a „meglévő jogosultság” nem ugyanaz.** Az osztályátlag esete (4.4) megmutatta, hogy a kettő szétválhat, és hogy ilyenkor a normaszöveg helyesen dönt: más személy adatára a felhatalmazás alapértelmezésben nem terjed ki. A katalógus tehát nemcsak besorol, hanem **teszteli is a normaszöveget** — és ezen a ponton a teszt sikeres volt.

**A végpontszintű szabályozás nem elég.** Három esetben — tanulói adatlap, mulasztás, fogadóóra — egyetlen válaszon belül több adatkör van. A rendeletnek ezért mezőszintű besorolást kell lehetővé tennie, és az üzemeltetőnek mezőszintű szűrést kell tudnia.

**A katalógus a felület nyilvánosságán múlik.** Ezt a vázlatot azért lehetett csak részben elkészíteni, mert a válaszmezők nem publikusak. A funkciókatalógus tehát nem előfeltétele a nyitásnak, hanem **következménye**: a dokumentáció közzététele nélkül senki nem tudja elvégezni a besorolást — sem a jogalkotó, sem az adatvédelmi hatóság, sem maga az üzemeltető külső ellenőrzés mellett.
