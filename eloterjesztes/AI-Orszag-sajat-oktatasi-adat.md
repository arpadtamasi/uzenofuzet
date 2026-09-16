# AI-Ország: saját oktatási adat, saját eszközzel

## Előterjesztés a meglévő oktatási adathozzáférés biztonságos és visszavonható delegálásáról

> **Egy bekezdésben.** Ma minden rendszer külön felületet követel, ezért az ember hordja közöttük az információt. A javaslat azt teszi lehetővé, hogy a már meglévő jogosultságát a felhasználó biztonságosan átadhassa a saját eszközének, miközben pontosan látja és kontrollálja, mi történik az adatával.

---

## Vezetői összefoglaló

**A probléma nem az, hogy nincs elég iskolai alkalmazás. Az, hogy túl sok van — és egyik sem tud együttműködni azzal az eszközzel, amit a felhasználó már használ.** A szülőnél és a pedagógusnál egyaránt ugyanaz történik: **az ember az integrációs réteg** a rendszerek között, ő hordja fejben az információt egyikből a másikba (1.1).

**Nem még egy oktatási appra van szükség.** Arra van szükség, hogy a felhasználó a saját digitális eszközén keresztül használhassa azt az adatot, amihez amúgy is hozzáfér.

**A jogosultsági kör nem bővül.** A szülő, a tanuló és a hallgató pontosan ugyanahhoz az adathoz fér hozzá, mint ma — csak nem kizárólag a hivatalos kliensen keresztül. Amit javaslunk, az nem az oktatási adatok megnyitása, hanem az, hogy a felhasználó a saját, már meglévő hozzáférését **biztonságosan, láthatóan és bármikor visszavonhatóan delegálhassa** az általa választott szoftvernek, a jelszava átadása nélkül.

**A felhasználó jogosultsága nem változik; az új kockázat abból fakad, hogy a felhatalmazott szoftver is hozzáfér az adathoz, majd azt tovább kezeli.** Aki ma a KRÉTA-ban látja a gyermeke jegyeit, holnap is ugyanazokat fogja látni. Ami új, az az, hogy rajta kívül egy program is megkapja őket, és azokkal kezd valamit: továbbküldheti egy MI-szolgáltatónak, tárolhatja, esetleg az Unión kívülre viheti. A javaslat súlypontja ezért a felhasználás szabályozásán van.

Négy dolgot javaslunk:

1. **Új ágazati jogosultság** a köznevelési és a felsőoktatási törvényben a meglévő hozzáférés delegálására — az érintett saját adatkörére, és külön, szigorúbb szabállyal az intézményi feladatkörben gyakorolt jogosultságra.
2. **Nyilvános, dokumentált, verziózott programozói felület**, tesztkörnyezettel; ugyanaz a felület, amelyet a hivatalos alkalmazások ma is használnak.
3. **Kockázatarányos bizalmi keret**: a felhatalmazható szoftverek háromszintű nyilvántartása, ahol a jogosultság mértéke a bizalmi szinthez kötött.
4. **Felhasználási réteg**: a felhasználó emberi nyelven kapjon tájékoztatást arról, mi történik az adatával a kiadás után, és külön szabály mondja meg, milyen oktatási adatkör vihető egyáltalán tovább külső szolgáltatóhoz.

### Mit nem állítunk

Ezt a listát azért tesszük az előterjesztés elejére, mert a javaslattal szembeni ellenérvek többsége nem magát a javaslatot, hanem annak túlfogalmazását szokta célozni.

- **Nem javasoljuk a jogosultsági kör bővítését.** Senki nem lát többet, mint ma; a csatorna változik, nem a jogosultság.
- **Nem állítjuk, hogy az érintettnek tulajdonjoga van a róla kezelt adatokon.** Az uniós adatvédelmi jog nem ismer adat-tulajdonjogot; a „saját oktatási adat” a címben köznyelvi fordulat.
- **Nem állítjuk, hogy a javasolt jogosultság a hatályos jogból levezethető.** Amit javaslunk, **új ágazati jogosultság** (3.1–3.2). Ezt vállaljuk, nem álcázzuk meglévő jog technikai megvalósításának. Az MI-rendelet és az adatrendelet irányjelző, nem jogalap (3.4–3.5).
- **Nem javasoljuk, hogy ellenőrzés nélkül regisztrált szoftver írási műveletet végezhessen**, sem azt, hogy a pedagógus saját elhatározásából engedhesse át szoftvernek a munkaköri jogosultságát.
- **Nem állítjuk, hogy bármilyen oktatási adat szabadon továbbítható külső MI-szolgáltatóhoz.** A 8. fejezet ennek az ellenkezőjét javasolja.

---

## 1. Mit javasolunk — és mit nem

### 1.1 A probléma nem az appok hiánya, hanem a széttöredezettség

Az előterjesztést könnyű félreérteni úgy, hogy „hiányzik az MI-integráció az oktatásból”. A hiány valódi, de nem ez a probléma gyökere. A gyökér az, hogy a felhasználó digitális élete rendszerekre van szabdalva, és a rendszerek közti átjárást neki magának kell elvégeznie.

**A szülő oldalán** ez így néz ki. Külön alkalmazás a munkahelyi levelezéshez, külön a bankhoz, a parkoláshoz, az egészségügyi időpontokhoz, a közműszámlákhoz, a háztartási gépekhez, a tévéhez, az okosotthonhoz. Ezek mellé jön az iskolai alkalmazás — és ha két gyerek van, akkor több fiók, több felület, több értesítés és több napi rutin. A szülő nem még egy alkalmazást akar használni. Azt szeretné, hogy a már használt eszközében feltehessen egy kérdést:

> „Mi van ezen a héten a két gyerekkel? Mi a házi, mik a számonkérések, van-e valami, amire figyelnem kell?”

**A pedagógus oldalán** ugyanez a probléma, más szerepben. A napló az egyik rendszerben van, a kommunikáció a másikban, az órarend a harmadikban, a tananyag és a beadandók egy tanulásszervezési rendszerben, emellett e-mail, megosztott dokumentumok és belső intézményi felületek. A pedagógus ugyanúgy az integrációs réteg: megnézi az egyikben, mit lát, és átviszi a másikba. Az ő kérdése ez volna:

> „Kik maradtak le, kinek kell írnom, és mit kell ma adminisztrálnom?”

**Miért nem a jobb KRÉTA-app a válasz.** Egy szebb, gyorsabb, okosabb hivatalos alkalmazás ezt nem oldja meg. Akármilyen jó, továbbra is **egy újabb felület**, amelyet meg kell nyitni, amelyben külön kell keresni, és amely nem tud mit kezdeni azzal, hogy a szülőnek két gyereke van két iskolában, vagy hogy a pedagógus a leveleit máshol olvassa. A „még egy app” logika minden újabb körrel súlyosbítja azt a problémát, amelyet enyhíteni akar.

A cél tehát nem az, hogy legyen egy jobb KRÉTA-app, hanem hogy **a KRÉTA-adat ne legyen egyetlen felületbe bezárva**.

**Az elv egy mondatban:** ne az ember legyen az integrációs réteg a rendszerek között.

### 1.2 A hozzáférés megvan; a csatorna hiányzik

A szülő ma belép a KRÉTA-ba, és látja a gyermeke jegyeit, hiányzásait, órarendjét, számonkéréseit. A tanuló ugyanezt a sajátjára, a hallgató a Neptunban a vizsgáit. Ez a hozzáférés **létezik, jogszerű és megszokott**; egyetlen korlátja, hogy kizárólag az üzemeltető által kiadott alkalmazáson keresztül gyakorolható. A jogosult felhasználó hozzáférésének ténye önmagában nem indokolja ezt a kizárólagosságot. A korlát oka technikai: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével kapcsolódjon.

Ebből következik, hogy a javaslat **egyetlen adatmezőt sem tesz elérhetővé olyan személy számára, aki ma nem látja**. A delegált hozzáférés a felhasználó meglévő jogosultságára épül, és annál szűkebb is lehet, mert a felhasználó szűkítheti. A leggyakoribb félreértés az, hogy „megnyitjuk a KRÉTA-t”. A KRÉTA ma is nyitva van a jogosult felhasználó felé, egyetlen csatornán; a javaslat a csatornát teszi választhatóvá, és cserébe **láthatóvá és visszavonhatóvá** azt, ami ma jelszóátadással, láthatatlanul történik.

### 1.3 Ami valóban új: az adat további útja

Ha a szülő a saját asszisztensével nézi meg a gyermeke jegyeit, akkor az adat elhagyja a KRÉTA-t, és egy másik rendszerbe kerül. Ez a különbség a mai állapothoz képest — nem a hozzáférés, hanem a **továbbhaladás**.

Ez a kockázat ma is fennáll, csak szabályozatlanul: a szülő kimásolja a képernyőt és bemásolja egy MI-asszisztensbe, vagy jelszót ad egy közvetítő szolgáltatásnak. A különbség az, hogy ma erről senki nem tájékoztatja, senki nem tartja nyilván, és senki nem tudja visszavonni.

A javaslat ezért két rétegből áll:

| Réteg | Kérdés | Hol |
|---|---|---|
| **Hozzáférési réteg** | Ki kaphat felhatalmazást, és milyen műveletre? | 7. fejezet |
| **Felhasználási réteg** | Mi történik az adattal azután, és miről kell a felhasználót tájékoztatni? | 8. fejezet |

Az 1.0 és a 2.0 változat csak az első réteget kezelte. A második réteg nélkül a javaslat a valódi kockázatot hagyná szabályozatlanul.

---

## 2. Három külön kérdés — három külön szabály

A javaslat három, egymástól élesen elváló helyzetet érint. Egyetlen elvként összefoglalni őket — „aki hozzáfér, ugyanazt tehesse a saját eszközével is” — azért hibás, mert a legvédhetőbb esetre szabott indokolás így a legkockázatosabbat is igazolni látszik. A három esetet ezért végig külön kezeljük, a normaszövegben is.

| | **A) Saját adat olvasása** | **B) Saját adatkörben műveletvégzés** | **C) Intézményi feladatkörben gyakorolt jogosultság** |
|---|---|---|---|
| Ki gyakorolja | tanuló, szülő, gondviselő, hallgató | tanuló, szülő, gondviselő, hallgató | pedagógus, oktató |
| Mire terjed ki | a rá, illetve a gyermekére vonatkozó adat lekérdezése | pl. igazolás beküldése, vizsgajelentkezés, üzenetküldés | más érintettek adatainak kezelése: jegy, mulasztás, értékelés, haladási napló |
| Kinek az érdekkörében | az érintett magáncélja | az érintett magáncélja | az intézmény közfeladata |
| Ki dönt a felhatalmazásról | az érintett egyedül | az érintett egyedül | az intézmény mint adatkezelő |
| Kockázat, ha elromlik | az érintett saját adata kerül rossz helyre | az érintett nevében jön létre hamis nyilatkozat | egy vagy több osztálynyi tanuló adata kerül ki, vagy hamis bejegyzés keletkezik a hivatalos nyilvántartásban |
| Szükséges bizalmi szint | 1. szint | 2. szint | 3. szint |
| Éles indulás | 2027. szeptember 1. | 2028. szeptember 1. | 2028. szeptember 1. |

Az **A)** eset a legerősebb: az érintett a saját adatát nézi, más jogát nem érinti. A **B)** eset már nyilatkozatot hoz létre az érintett nevében, ezért azonosított kiadó kell mögé, de továbbra is az érintett saját ügye.

A **C)** eset **nem az érintett joga**. A pedagógus nem a saját adatát kezeli, hanem tanulókét, az intézmény utasítására, az intézmény adatkezelői felelőssége mellett. Itt tehát nem „a pedagógus delegálja a jogosultságát”, hanem **az adatkezelő intézmény rendszeresít egy eszközt**, amelyet a pedagógus a saját munkamenetéhez köt.

---

## 3. A jogi helyzet pontosan

### 3.1 Amit a hatályos jog ad

- **GDPR 15. cikk** — hozzáférési jog. Egyszeri másolatra szól, nem folyamatos gépi hozzáférésre.
- **GDPR (63) preambulumbekezdés** — ahol lehetséges, az adatkezelő biztosítson távoli hozzáférést olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz. Ez **támogató érv** az A) esethez, de preambulumbekezdés: nem kötelező szabály, és nem ír elő programozói felületet.
- **GDPR 12. cikk (2) bekezdés** — az adatkezelő köteles elősegíteni az érintetti jogok gyakorlását.

### 3.2 Amit a hatályos jog nem ad

- **GDPR 20. cikk** — az adathordozhatóság a hozzájáruláson vagy szerződésen alapuló, automatizált adatkezelésre vonatkozik. A 20. cikk (3) bekezdése a közérdekű vagy közhatalmi feladat végrehajtása keretében végzett adatkezelést kifejezetten kiveszi. Az oktatási nyilvántartás ilyen. **A 20. cikk tehát itt nem hívható fel.**
- **GDPR 20. cikk (4) bekezdés** — az adathordozhatóság nem sértheti mások jogait és szabadságait. Ez a korlát a mi javaslatunkra is irányadó elvi mérce; a vegyes adatkörök kezelésének kiindulópontja (lásd 8.3).
- **Nkt. és Nftv.** — a 2011. évi CXC. és CCIV. törvény rendezi az oktatási adatkezelést és nyilvántartásokat, de egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához az általa választott szoftverrel hozzáférhessen.

Következtetés: **a javasolt jogosultság új.** Nem a GDPR technikai kivetülése. Ágazati jogalkotás kell hozzá, ahogy az alábbi precedensben is.

### 3.3 A legjobb precedens: az európai egészségügyi adattér

Az **(EU) 2025/327 rendelet** (európai egészségügyi adattér, EHDS) pontosan azt a konstrukciót valósítja meg, amelyet itt javasolunk: **ágazati uniós jogszabály hoz létre elektronikus hozzáférési jogot olyan adatkörben, ahol maga az adatkezelés közfeladaton alapul**, és az érintett maga adhat hozzáférést az általa választott szereplőnek. A rendelet 3. cikke az érintett elektronikus egészségügyi adataihoz való azonnali, ingyenes elektronikus hozzáférést és letöltést biztosítja. A rendelet 2025. március 25-én lépett hatályba, alkalmazása jellemzően 2027. március 26-tól kezdődik. [ELLENŐRIZENDŐ: a 3. cikk bekezdéseinek pontos hivatkozása a Hivatalos Lap szövege alapján]

Ez az analógia két okból erős: azonos a jogi szerkezet (közfeladaton alapuló nyilvántartás és ágazati hozzáférési jog), és azonos az érzékenységi szint (egészségügyi adat, illetve kiskorúak oktatási adata).

### 3.4 Az adatrendelet — irányjelző, nem jogalap

Az **(EU) 2023/2854 rendelet** (adatrendelet) kézenfekvő hivatkozásnak tűnik, de jogalapként nem állja meg a helyét. A rendelet II. fejezete az **összekapcsolt termékek és a kapcsolódó szolgáltatások** használata során keletkező adatokra vonatkozik; tipikus tárgya a dologi, érzékelőalapú termékadat. A KRÉTA vagy a Neptun tanulmányi nyilvántartása nem ilyen. Az adatrendeletet ezért **jogpolitikai irányjelzőként** hívjuk fel, **jogalapként nem**.

### 3.5 Az MI-rendelet — szűkített jogi következtetés

Az **(EU) 2024/1689 rendelet** 4. cikke 2025. február 2-tól előírja, hogy az MI-rendszereket alkalmazó szervezetek gondoskodjanak munkatársaik MI-jártasságáról. **Az MI-rendelet önmagában nem alapoz meg API-nyitási kötelezettséget; a pedagógusi oldal indoka szakpolitikai** — lásd a 10.3 pontot.

### 3.6 A PSD2-analógia — vállalva mindkét élét

**Mellette szól:** az (EU) 2015/2366 irányelv (PSD2) és az (EU) 2018/389 felhatalmazáson alapuló rendelet 2019. szeptember 14-től **dedikált, biztonságos felületet**, nyilvános technikai specifikációt és tesztelési lehetőséget követel meg; a brit versenyhatóság (CMA) 2018-tól egységes nyílt banki API-szabványt tett kötelezővé. Az az állítás tehát, hogy egy monopolizált ügyfélfelület jogszabállyal megnyitható, és ettől a szektor nem omlik össze, empirikusan igazolt.

**Ellene szól:** a PSD2-ben a harmadik fél szolgáltatók **engedélyezett, felügyelt szereplők**, és a rendszer minősített tanúsítványokra épít. Egy „egyedi engedélyezési eljárás nélküli” kliensregisztráció tehát éppen a példa legfontosabb elemét hagyná ki: a **bizalmi keretet**. Ezt az ellenérvet elfogadjuk; a 7. fejezet pótolja a hiányt.

---

## 4. Mi a probléma?

### 4.1 Dokumentált tények

**Az adatot ma csak a hivatalos alkalmazás éri el.** A KRÉTA a szülőnek, a tanulónak és a pedagógusnak külön hivatalos mobilalkalmazást kínál. Ezekben órarend, számonkérések, házi feladatok, jegyek és mulasztások jelennek meg; a pedagógus naplózási és értékelési műveleteket is végezhet. Az alkalmazások mögött tehát működő programozói felület áll — amelyet azonban kizárólag a hivatalos alkalmazás használhat: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével klienst regisztráljon, és a felület dokumentációja nem nyilvános.

**Az üzemeltető a nem hivatalos kliens használatát kifejezetten rendellenesnek minősíti.** A KRÉTA saját tudásbázisa szerint rendellenes működésnek minősülhet, ha ugyanazt a profilt nem hivatalos alkalmazás használja. [ELLENŐRIZENDŐ: a tudásbázis-cikk pontos címe, URL-je és lekérdezési dátuma] Ez azért fontos, mert megmutatja: a zártság nem műszaki mellékhatás, hanem szándékolt üzemeltetői álláspont — tehát jogszabály nélkül nem fog megváltozni.

**A felsőoktatásban a hivatalos mobilcsatorna megszűnt.** A Neptun hivatalos mobilalkalmazása 2023. október 19-én, a kétfaktoros belépés bevezetésekor megszűnt. Egyes egyetemek saját alkalmazásai — például a Magyar Agrár- és Élettudományi Egyetem MyMATE és a Debreceni Egyetem UD Studyversity alkalmazása — továbbra is megjelenítik a hallgatók Neptun-adatait. A felület tehát létezik, és intézményi alkalmazások használják is; a hallgató és az oktató saját eszköze viszont nem kapcsolódhat hozzá.

### 4.2 Az érintettek

| Érintett csoport | Létszám | Forrás |
|---|---|---|
| nappali rendszerű általános iskolai tanulók | kb. 710 000 fő | KSH, 2024/2025, előzetes |
| általános iskolai pedagógusok | kb. 74 000 fő | KSH, 2024/2025, előzetes |
| középfokú iskolai pedagógusok, oktatók | kb. 43 000 fő | KSH, 2024/2025, előzetes |
| óvodapedagógusok | kb. 31 000 fő | KSH, 2024/2025, előzetes |
| felsőoktatási hallgatók | kb. 351 000 fő | KSH, 2025/2026, előzetes |
| felsőoktatási oktatók | kb. 27 000 fő | KSH, 2023/2024 |
| szülők, gondviselők | nagyságrendileg a tanulói létszámmal arányos | levezetés |

A köznevelésben és a szakképzésben főállásban foglalkoztatott pedagógusok és oktatók száma összesen közel 148 ezer fő. A 6. fejezet hatásbecslése ennél **szűkebb kört** vesz alapul: az általános és középfokú iskolai pedagógusokat, összesen mintegy 117 ezer főt, mert tanulmányi rendszerhez kapcsolódó adminisztrációról az ő esetükben beszélhetünk értelmesen.

Rajtuk kívül érintettek a köznevelési és felsőoktatási intézmények mint adatkezelők és fenntartóik, a rendszerüzemeltetők (az eKRÉTA Zrt. és a tanulmányi rendszerek szállítói, köztük az SDA Informatika Zrt.), valamint a hazai fejlesztők.

### 4.3 A szülői oldalon a széttöredezettség megkerülő megoldásokat szül

A szülő napi valósága nem az, hogy hiányzik neki egy MI-asszisztens. Az, hogy túl sok felületet kell végigkattintania, és az iskolai a sokadik a sorban. Két gyerek esetén nem is egy: külön fiók, külön belépés, külön értesítési sor — az összefésülés pedig a szülő fejében történik.

Amit szeretne, az egyetlen kérdés a már használt eszközében: mi vár a gyerekekre a héten, melyik tantárgyból romlottak a jegyek, mikor kell igazolást beadni. Hivatalos út nélkül erre csak kockázatos módok vannak.

Konkrét példa az **Üzenőfüzet** nyílt forráskódú szolgáltatás, amelyet az előterjesztés készítője üzemeltet, és amely a szülők MI-asszisztensét köti össze a KRÉTA-val. Ehhez ma kénytelen:

- a szülőtől átvenni a KRÉTA-jelszót, a nevében belépni, és a belépési tokeneket maga tárolni;
- a hivatalos tanulói mobilalkalmazás kliensazonosítóját és nem dokumentált végpontjait használni, így bármely rendszerfrissítés után működésképtelenné válhat;
- a hívásokat lakossági hálózaton továbbítani, mert a rendszer az adatközponti hálózatokból érkező kéréseket elutasítja;
- saját tájékoztatóban kezelni, hogy a lekért adatok — köztük kiskorúak adatai — a szülő által választott, akár az Unión kívüli MI-szolgáltatóhoz kerülnek.

A szülő a kiadott hozzáférést a KRÉTA-ban nem látja és ott nem tudja visszavonni. **Az Üzenőfüzet célja, hogy ez a közvetítő szerep ebben a formában feleslegessé váljon.** Az előterjesztő érdekeltségét itt jelezzük: a javaslat elfogadása a saját szolgáltatásunk jelenlegi működési modelljét szünteti meg.

Figyeljük meg, hogy az utolsó pont már nem hozzáférési, hanem **felhasználási** kérdés. Ma ezt minden szolgáltató a saját tájékoztatójában, saját belátása szerint kezeli. A 8. fejezet erre ad szabályt.

### 4.4 A tanári oldalon a széttöredezettség szabálytalan használatot szül

A pedagógus ugyanezt éli meg, más szerepben. A napló, a kommunikáció, az órarend, a tananyag, az értékelés, adott esetben egy tanulásszervezési rendszer, emellett e-mail, megosztott dokumentumok és belső intézményi felületek — mind külön. Az információ átvitele egyikből a másikba kézi munka, és éppen ez a kézi munka jelenik meg az adminisztrációs időben.

A teher mérhető: az OECD TALIS 2024 felmérése szerint a magyar főállású pedagógusok heti **3,2 órát** fordítanak általános adminisztratív munkára (OECD-átlag: 3 óra), és ez az érték 2018 óta nem csökkent. A stressz leggyakoribb forrásaként a megkérdezettek **55%-a** a túl sok adminisztrációt jelölte meg.

Hivatalos kapcsolódás hiányában a pedagógus egyetlen módon tud MI-t használni ehhez a munkához: a tanulói adatokat kézzel bemásolja a saját, magáncélú MI-fiókjába. Egy másolással egy vagy több osztály adatai mozognak, az iskola nevében kezelt adatokként, adatfeldolgozói szerződés nélkül. Az adatkezelő iskola ezt nem látja, nem tudja korlátozni, és semmilyen naplóban nem jelenik meg.

**A zártság tehát nem az ellenőrizetlen használatot akadályozza, hanem az ellenőrzöttet** (bővebben 10.3). Arról viszont, hogy ez a gyakorlat milyen gyakori, nincs hazai mérés — és éppen ez a kár egyik formája: a jelenség szerkezeti okból mérhetetlen.

---

## 5. Hogyan jutottunk ide?

**2011 — az oktatási nyilvántartások jogi kerete.** Az Nkt. és az Nftv. rendezi a köznevelési és felsőoktatási adatkezelést. Egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához gépi úton, általa választott szoftverrel hozzáférhessen.

**2012–2015 — a delegált hozzáférés szabványai.** Megjelenik az OAuth 2.0 engedélyezési keretrendszer (RFC 6749, 2012), majd a nyilvános kliensek védelmét szolgáló PKCE (RFC 7636, 2015), a dinamikus kliensregisztráció (RFC 7591, 2015) és a tokenvisszavonás (RFC 7009, 2013). A jelszóátadás nélküli, visszavonható, harmadik fél általi hozzáférés ettől kezdve iparági alapmegoldás.

**2015–2019 — a pénzügyi szektor megoldja ugyanezt a problémát.** A PSD2 és az (EU) 2018/389 rendelet dedikált, biztonságos felületet követel meg, nyilvános specifikációval és tesztkörnyezettel; a harmadik fél szolgáltatók engedélyezett szereplők (lásd 3.6).

**2016–2018 — a GDPR.** Alkalmazandó 2018. május 25-től. Bevezeti az adathordozhatóságot (20. cikk), de a közérdekű feladat keretében végzett adatkezelést kiveszi alóla.

**2019 körül — megjelennek a KRÉTA hivatalos mobilalkalmazásai.** A KRÉTA-adatok mobil elérése kizárólag a saját kliensein keresztül lehetséges. [ELLENŐRIZENDŐ: az egyes alkalmazások megjelenési éve]

**2023 — a Neptun-app megszűnése.** 2023. október 19-én megszűnik a Neptun hivatalos mobilalkalmazása. Ugyanebben az évben születik az adatrendelet, amely — a 3.4 pontban írt korlátokkal — a felhasználói adathozzáférés irányát jelzi.

**2024–2025 — a szabványos csatlakozás és a biztonsági alapvetés.** 2024 novemberében megjelenik a Model Context Protocol, amely OAuth-alapú delegált hozzáférésre építve ad szabványos módot MI-asszisztensek külső rendszerekhez kapcsolására. 2025 januárjában megjelenik az **RFC 9700** (BCP 240), az OAuth 2.0 biztonsági legjobb gyakorlata, amely kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a jelszó alapú folyamatot, és kezeli az összekeverési (mix-up) támadásokat.

**2025 — az európai egészségügyi adattér.** Az (EU) 2025/327 rendelet hatályba lép: ágazati jogszabály hoz létre elektronikus hozzáférési jogot közfeladaton alapuló, különösen érzékeny nyilvántartásban (lásd 3.3).

Az oktatási rendszerek felülete mindeközben változatlan maradt.

---

## 6. Milyen kárt okoz a jelenlegi helyzet?

Ebben a fejezetben külön jelöljük, mi **dokumentált tény**, mi **példaszámítás**, és mi **feltételezés**.

### 6.1 Elvesztegetett pedagógusi kapacitás — példaszámítás, nem előrejelzés

**A kiindulás.** Az általános és középfokú iskolai pedagógusok száma mintegy **117 ezer fő** (74 ezer általános iskolai és 43 ezer középfokú, KSH 2024/2025, előzetes). Ez szűkebb kör, mint a köznevelés és a szakképzés együttes 148 ezres létszáma: az óvodapedagógusokat és a tanulmányi rendszerhez nem kapcsolódó feladatköröket kihagytuk, mert rájuk a javaslat nem értelmezhető.

Heti 3,2 óra általános adminisztráció és 36 tanítási hét mellett ez évente **mintegy 13,5 millió pedagógusi munkaóra**.

**Miért nem elég egyetlen százalék.** A TALIS „általános adminisztratív munka” kategóriája nem azonos azzal, amit egy tanulmányi rendszerhez kapcsolt MI érinteni tud: sok adminisztráció papíralapú, szervezési, vagy nem a naplóhoz kötődik. Ezért **két külön paraméterrel** számolunk:

> eredő megtakarítás = **érinthető arány** × **időnyereség az érintett részen**

Az **érinthető arány** az adminisztrációnak azt a részét jelöli, amely egyáltalán kötődik tanulmányi rendszerből származó adathoz; az **időnyereség** azt, hogy ezen belül mennyit rövidít az integrált MI — beleszámítva az utólagos ellenőrzés idejét is.

| Érinthető arány ↓ / Időnyereség → | 30% | 40% | 50% |
|---|---|---|---|
| **25%** | 7,5% — 1,0 millió óra | 10,0% — 1,3 millió óra | 12,5% — 1,7 millió óra |
| **35%** | 10,5% — 1,4 millió óra | **14,0% — 1,9 millió óra** | 17,5% — 2,4 millió óra |
| **45%** | 13,5% — 1,8 millió óra | 18,0% — 2,4 millió óra | 22,5% — 3,0 millió óra |

**A kiemelt cella példaszámítás.** Ha az adminisztráció 35%-a érinthető, és azon belül 40% időnyereség érhető el, az eredő 14%: évente **mintegy 1,9 millió pedagógusi munkaóra**, pedagógusonként **körülbelül 16 óra**.

Ez **nem előrejelzés és nem vállalás**. Egyik paraméterre sincs hazai mérés; a két szám azt mutatja meg, milyen nagyságrendről beszélünk, és hogy a végeredmény melyik feltevésre érzékeny. A valódi értéket a 6.2 pont szerinti pilotnak kell megadnia.

**Miért nem forintosítunk.** A felszabaduló időt szándékosan nem fejezzük ki bérértéken. A pedagógusok létszáma nem csökken, a bérük nem lesz kevesebb, tehát **költségvetési megtakarítás nem keletkezik**; ami keletkezik, az felszabaduló szakmai kapacitás. Az „évi 1,9 millió óra” és a „pedagógusonként évi 16 óra” védhetőbb állítás bármely forintösszegnél, és nem téveszti meg azt sem, aki a költségvetési oldalt olvassa.

**A költségoldal** — az üzemeltetői ráfordítás, a nyilvántartás működtetése, az intézményi felkészítés — még nem készült el. Ezt a 14. fejezet nyitott kérdésként rögzíti.

### 6.2 Amit mérni kell: pilot a hatásvizsgálat helyett

A fenti számítás legnagyobb gyengesége, hogy magyar mérés nélkül készült. Ezt nem magyarázni kell, hanem orvosolni. **A javaslat ezért kötelező pilot-mérést ír elő** (lásd 12./IV.), amelynek eredménye a műveleti szakasz indítása előtt rendelkezésre áll.

A pilot néhány száz pedagógussal, több intézménytípusban, a következőket méri:

1. **Mire megy ma az adminisztrációs idő**, folyamatonként bontva: napló, jegyrögzítés, szöveges értékelés, mulasztáskövetés, szülői kommunikáció, időszaki összesítés.
2. **Mely folyamatok igényelnek tanulmányi rendszerből adatot** — ez adja az „érinthető arány” tényleges értékét.
3. **Ugyanaz a folyamat mennyi idő integrált MI-vel** — ahol lehetséges, hasonló feladatot végző kontrollcsoporttal összevetve. Ez adja az időnyereséget.
4. **Mekkora az utóellenőrzési idő**: mennyit tölt a pedagógus az MI kimenetének átnézésével és javításával. E nélkül a nyereség túlbecsült.
5. **Változik-e a hibaarány** a rögzített adatokban és a kimenő kommunikációban — javul, romlik vagy marad.

Az ötödik pont a legfontosabb. Egy gyorsabb, de hibásabb adminisztráció nem nyereség. A pilotnak ezért nemcsak időt, hanem minőséget is mérnie kell.

Ezután a hatásvizsgálat nem feltételezett arányokra, hanem magyar mérésre épül.

### 6.3 Biztonsági és adatvédelmi kockázat — feltételezés, szerkezeti okból mérhetetlen

Hogy hány szülő adta át a KRÉTA-jelszavát harmadik félnek, és hány pedagógus másol tanulói adatot magáncélú MI-fiókba, arról nincs adat. Ezt nem tényként állítjuk, hanem a probléma természeteként: **az adatkezelő iskola sem tudja**, mert a jelenség nem hagy nyomot a rendszerben. Egyetlen pedagógus egyetlen másolással egy teljes osztálynyi tanuló adatát viheti ki szerződés nélkül. [ELLENŐRIZENDŐ: átlagos osztálylétszám, KSH]

A javaslat ezen a ponton önmagában is hoz eredményt: bevezetése után minden felhatalmazás naplózott, megtekinthető és megszámlálható lesz — akkor is, ha kiderül, hogy a jelenség a feltételezettnél ritkább.

### 6.4 Esélyegyenlőségi kár — feltételezés

Az MI-asszisztens feltehetően azoknak a szülőknek segít a legtöbbet, akiknek az iskolai rendszerek kezelése ma nehézséget okoz: kevésbé gyakorlott digitális felhasználóknak, több gyermeket nevelő, időhiányos családoknak, nem magyar anyanyelvű szülőknek. Ha ez igaz, akkor hivatalos út hiányában éppen ők maradnak ki, vagy ők vállalják a legnagyobb kockázatot. **Ezt az állítást hazai adat nem támasztja alá**; a hatásmérés egyik kérdése éppen ez legyen.

### 6.5 Innovációs kár — részben dokumentált

Hazai fejlesztő ma nem tud stabil, jogszerű terméket építeni az oktatási rendszerekre, mert nincs dokumentált felület, és az üzemeltető a nem hivatalos klienst rendellenesnek minősíti (4.1). A meglévő megoldások egy rendszerfrissítéssel megszűnhetnek. Hogy ez konkrétan hány vállalkozást tartott vissza, arról nincs felmérés; a mechanizmus azonban a 4.3 pontban leírt működési kényszerekből közvetlenül látszik.

---

## 7. Bizalmi és biztonsági modell — ki kaphat felhatalmazást

Ez a fejezet az első réteg: azt szabályozza, **ki** kapcsolódhat és **milyen műveletre**. Azt, hogy az adattal utána mi történik, a 8. fejezet rendezi.

### 7.1 Kliensosztályok

**1. bizalmi szint — bejelentett kliens.**
*Mit tehet:* kizárólag olvasás, kizárólag az érintett saját, illetve a szülő esetében a gyermekére vonatkozó adatkörében (A) eset).
*Regisztráció:* önkiszolgáló, dinamikus kliensregisztrációval (RFC 7591), egyedi engedélyezési eljárás nélkül.
*Feltétel:* működő kapcsolattartási cím, közzétett adatkezelési tájékoztató elérhetősége, a kliens nyilvános megnevezése, valamint a 8.2 pont szerinti **továbbítási nyilatkozat**.
*Hitelesítés:* OAuth 2.0 authorization code folyamat, kötelező PKCE-vel, az RFC 9700 szerint; implicit és jelszó alapú folyamat tilos.
*Korlátok:* kérésszám-korlát, rövid tokenélettartam, felhasználónkénti egyedi jóváhagyás, és a jóváhagyó képernyőn kifejezett jelzés arról, hogy a kliens kiadója nincs átvilágítva.

**2. bizalmi szint — nyilvántartásba vett szolgáltató.**
*Mit tehet:* az 1. szint jogosultságai, továbbá műveletvégzés az érintett saját adatkörében (B) eset), valamint pedagógusi és oktatói olvasás.
*Feltétel:* azonosított kiadó (cégjegyzék- vagy nyilvántartási szám, székhely, felelős kapcsolattartó), biztonsági incidens bejelentésének vállalása, a nyilvántartás által kibocsátott, aláírt szoftvernyilatkozat (software statement).
*Hitelesítés:* bizalmas kliens, aszimmetrikus kulcsú kliensauthentikáció, a birtokláshoz kötött (sender-constrained) hozzáférési token.

**3. bizalmi szint — intézményi adatfeldolgozó.**
*Mit tehet:* műveletvégzés pedagógusi vagy oktatói jogosultság körében, más érintettek adataival (C) eset).
*Feltétel:* a 2. szint feltételei, továbbá érvényes, a GDPR 28. cikke szerinti adatfeldolgozói szerződés az adatkezelő intézménnyel vagy a fenntartóval, és szereplés az intézmény engedélyezőlistáján.
*Hitelesítés:* emelt biztonsági profil (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldás, kliensattesztáció.

### 7.2 Megkülönböztetésmentesség — a szabály helyes megfogalmazása

Egy böngészőben futó nyilvános kliens, egy mobilalkalmazás és egy szerveroldali bizalmas kliens kockázata nem azonos, és az RFC 9700 éppen ezekre az eltérésekre ad külön ellenintézkedéseket. A szabály célja ezért nem az azonos bánásmód, hanem az, hogy az üzemeltető ne tudja biztonsági indokra hivatkozva elsorvasztani a harmadik fél klienseit:

1. Az azonos bizalmi szintbe tartozó klienseket **azonos feltételekkel** kell kiszolgálni.
2. Az üzemeltető hivatalos alkalmazása **nem kaphat olyan képességet vagy szolgáltatásminőséget**, amelyet azonos bizalmi szintű felhatalmazott kliens nem kaphat meg. A hivatalos alkalmazást e célból a megfelelő bizalmi szintbe be kell sorolni.
3. Kockázatalapú korlátozás **megengedett**, ha előre közzétett, objektív kritériumon alapul, és minden azonos helyzetű kliensre vonatkozik.
4. Egyedi kliens felfüggesztése **kizárólag** bizonyítékkal alátámasztott biztonsági okból lehetséges, írásbeli indokolással, jogorvoslati lehetőséggel, és a felfüggesztések számának megjelenítésével az éves nyilvános jelentésben.

### 7.3 Kompromittált vagy visszaélő kliens

- A nyilvántartást vezető szerv a kliens regisztrációját visszavonhatja; ekkor az adott klienshez tartozó **összes felhatalmazás azonnal hatályát veszti**.
- Az üzemeltető köteles értesíteni azokat a felhasználókat, akiknek felhatalmazása visszavont kliensre vonatkozott.
- A kiadó a tudomásszerzéstől számított 72 órán belül köteles bejelenteni a klienst érintő biztonsági incidenst.

### 7.4 Adathalászat elleni alapvédelem

- A jóváhagyó képernyő **a hivatalos felületen** jelenik meg.
- A kliens megnevezését és kiadóját a hivatalos felület **a nyilvántartásból veszi**; a kliens ezt nem írhatja felül.
- A felhatalmazás **határozott, legfeljebb tizenkét hónapos** időtartamra szól, majd megújítandó.

### 7.5 Amit ez a keret nem old meg

A bizalmi szint azt szabályozza, ki kapcsolódhat, nem azt, hogy a felhasználó jól dönt-e. A 8.2 szerinti tájékoztatás a döntést jobbá teszi, de nem veszi el.

Az 1. bizalmi szinten átvilágítatlan kiadó is kaphat olvasási hozzáférést kiskorú adataihoz, szülői jóváhagyással. Ezt vállaltan tartjuk így: e nélkül a javaslat lényege veszne el, és a szülő ma ugyanennek a körnek ad jelszót, csak láthatatlanul. A jóváhagyó képernyő ezért kifejezetten jelzi, ha a kiadó nincs átvilágítva.

---

## 8. A felhasználás rétege — mi történik az adattal a kiadás után

### 8.1 Miért ez a valódi új kockázat

A felhasználó jogosultsága nem változik: a szülő ma is látja a gyermeke jegyeit, és ezután is ugyanazokat fogja látni. Az új kockázat abból fakad, hogy rajta kívül **a felhatalmazott szoftver is hozzáfér** ehhez az adathoz, majd azt tovább kezeli — jellemzően továbbküldi egy MI-szolgáltatónak.

Ezen a ponton a szabályozásnak nem az a kérdése, hogy a szülő láthatja-e az adatot, hanem hogy **tudja-e, mi történik vele**. A hatályos gyakorlat erre nem ad választ: minden szolgáltató a saját adatkezelési tájékoztatójában, saját nyelvezetével, saját belátása szerint rendezi. A szülő pedig egy jelölőnégyzetet pipál ki.

A javaslat ezért két dolgot ír elő: **érthető tájékoztatást a döntés pillanatában** (8.2), és **korlátot arra, mi vihető egyáltalán tovább** (8.3).

### 8.2 A döntési képernyő emberi nyelven

**A követelmény.** A felhatalmazás jóváhagyó képernyője a hivatalos felületen jelenik meg, és **köznyelven** mondja meg, mi történik az adattal. Nem jogszabályi hivatkozásokkal, nem rövidítésekkel, nem „az adatkezelés jogalapja” fordulattal. A részletes jogi tájékoztató lehet mögötte, egy kattintásra — de a döntés nem azon múlhat, hogy a szülő elolvas-e nyolc oldalt.

**A továbbítási nyilatkozat.** Ahhoz, hogy a hivatalos felület ezt meg tudja jeleníteni, a kliens kiadójának a regisztrációkor nyilatkoznia kell arról, hogy az adatot kinek továbbítja, hová, meddig tárolja, és használja-e modellfejlesztésre. A nyilatkozat a nyilvántartásba kerül, a hivatalos felület onnan veszi, és a kliens **nem írhatja felül**. A valótlan nyilatkozat a nyilvántartásból való törlést vonja maga után.

**Mintaszöveg.** A rendeletnek nem szövegezést kell előírnia, hanem a kötelező tartalmi elemeket. Az alábbi minta azt mutatja, hogyan néz ki ez a gyakorlatban:

> **Engedélyt kér: Üzenőfüzet** — kiadó: Példa Kft. (2. bizalmi szint, azonosított kiadó)
> **Mit kap meg:** Anna jegyei, hiányzásai, órarendje, házi feladatai és számonkérései.
> **Mit nem kap meg:** fegyelmi és gyermekvédelmi bejegyzések, egészségügyi adatok, a pedagógusok egymás közti üzenetei.
> **Hová kerül az adat:** a program továbbküldi az általad választott MI-asszisztensnek (OpenAI ChatGPT). Az adat **elhagyja az Európai Uniót** (Egyesült Államok).
> **Meddig tárolják:** az MI-szolgáltató 30 napig tárolja, utána törli.
> **Modellfejlesztésre használják-e:** nem.
> **Ha visszavonod:** a program azonnal elveszti a hozzáférést. A korábban elküldött adatot a fenti törlési határidő szerint törlik.
> **Meddig szól:** 12 hónapig, 2028. szeptember 1-jéig. Utána újra kell engedélyezned.
> **Bármikor visszavonhatod:** KRÉTA → Engedélyeim.
> [Részletes tájékoztató] [Nem engedélyezem] [Engedélyezem]

**A kötelező tartalmi elemeket** — az átadott és az át nem adott adatkörtől a továbbítás címzettjén, az Unión kívülre kerülésen, a tárolási időn és a modellfejlesztési felhasználáson át a visszavonás következményéig — a normaszöveg tételesen felsorolja (12./I. B) § (1) bekezdés a)–h) pont). A rendeletnek a tartalmat kell előírnia, nem a szövegezést.

**Ha a kiadó nem tud válaszolni**, azt is ki kell írni. A „nem ismert, hogy az MI-szolgáltató meddig tárolja” önmagában is információ a szülőnek, és versenyhátrány annak, aki így nyilatkozik. Ez a rendelkezés a piacra is hat: aki tisztább adatkezelést tud vállalni, azt a jóváhagyó képernyőn láthatóvá teszi.

### 8.3 Mi vihető tovább: az adatkör kérdése

Nem minden oktatási adat egyforma. A jegy és az órarend nem kezelendő ugyanúgy, mint egy gyermekvédelmi jelzés, egy fegyelmi eljárás irata, egy egészségügyi vagy sajátos nevelési igényre vonatkozó adat, vagy egy olyan bejegyzés, amely más tanulót is érint.

A javaslat ezért **három adatkört** különböztet meg, és mindegyikhez más alapszabályt rendel:

| Adatkör | Példa | Alapszabály |
|---|---|---|
| **Alapadatkör** | jegy, órarend, házi feladat, számonkérés, saját hiányzás | delegálható és továbbítható, ha a 8.2 szerinti tájékoztatás megtörtént |
| **Korlátozott továbbítású adatkör** | gyermekvédelmi jelzés, fegyelmi ügy irata, egészségügyi adat, sajátos nevelési igény, szociális támogatás | a delegált hozzáférés keretében **külső szolgáltatóhoz nem továbbítható**; a hivatalos felületen továbbra is látható |
| **Más személyt is érintő adat** | pedagógusi üzenetváltás, csoportot érintő bejegyzés | csak szűkítve, a harmadik személyre vonatkozó rész elhagyásával, vagy nem delegálható |

A szülői és tanulói olvasási funkciókra a besorolás első vázlata elkészült (külön melléklet): húsz valós KRÉTA-végpontból tizenhárom tiszta alapadatkör, a többi vegyes vagy korlátozott. A vázlat egyben azt is megmutatja, hogy **három esetben egyetlen válaszon belül több adatkör van**, tehát a rendeletnek mezőszintű besorolást kell lehetővé tennie.

**A „korlátozott továbbítású adatkör” ennek a javaslatnak a saját szabályozási kategóriája**, nem a hatályos adatvédelmi jog terminusa. Teljes alakja: a delegált továbbítás szempontjából fokozott védelem alá sorolt adatkör. A besorolás nem az adat jogi minősítését változtatja meg, hanem azt mondja meg, mi mehet ki a delegált csatornán.

Ebből következik a legfontosabb pontosítás: a szabály **nem a szülő látási jogát korlátozza** — azt nem érinti. Azt korlátozza, hogy ez az adat a delegált csatornán automatikusan egy külső MI-szolgáltatóhoz kerüljön.

### 8.4 Mit szabályoz ez az előterjesztés, és mit hagy külön rétegre

Nem állítjuk, hogy ez az előterjesztés kimerítően rendezi, milyen oktatási adat kerülhet külső MI-szolgáltatóhoz. Ez önálló, tartalmi adatvédelmi kérdés, amely a javaslattól függetlenül is fennáll, és amelyre a válasz részben szakmai, nem jogalkotói.

Amit ez az előterjesztés vállal:

- **megnevezi a réteget**: a felhasználás szabályozása külön kérdés a hozzáférésétől, és nem hagyható a szolgáltatók belátására;
- **rögzíti az alapértelmezést**: a korlátozott továbbítású adatkör nem továbbítható, amíg külön szabály mást nem mond;
- **megadja a helyét**: a besorolás a kormányrendelet funkciókatalógusába kerül, tehát felülvizsgálható anélkül, hogy a törvényt kellene nyitni;
- **előírja a tájékoztatást**: bármi is a besorolás, a felhasználó a döntés pillanatában, érthetően megtudja, mi történik az adatával.

Amit **nem** vállal: az adatkörök tételes, mezőszintű besorolását, és annak eldöntését, hogy egy MI-szolgáltató mit tehet a kapott adattal a saját rendszerén belül. Mindkettő a 14. fejezet nyitott kérdése.

---

## 9. Felelősségi modell

| Szereplő | A) és B) eset | C) eset |
|---|---|---|
| Rendszerüzemeltető (eKRÉTA Zrt., tanulmányi rendszerek szállítói) | adatfeldolgozó az intézmény megbízásából; felel a felületért, a hitelesítésért és a felhatalmazás-kezelésért | ugyanaz |
| Köznevelési vagy felsőoktatási intézmény | adatkezelő | adatkezelő; dönt arról, mely szoftver kaphat felhatalmazást |
| A felhatalmazott szoftver kiadója | **önálló adatkezelő** a felhasználó megbízásából végzett saját adatkezeléséért; felel a továbbítási nyilatkozat valóságáért | **az intézmény adatfeldolgozója**, a GDPR 28. cikke szerinti szerződéssel |
| Érintett (tanuló, szülő, hallgató) | a felhatalmazás jogosultja | — |
| Pedagógus, oktató | — | az intézmény utasítása szerint jár el; a felhatalmazás nem személyes joga |

Három rendelkezést ehhez ki kell mondani a normaszövegben:

**A pedagógusi felhatalmazás nem személyes jog.** A pedagógus nem „kiadja” a munkaköri jogosultságát egy szoftvernek; az intézmény rendszeresít eszközt, amelyet a pedagógus a saját munkamenetéhez köt. Ha a pedagógus jogviszonya megszűnik vagy jogosultsága változik, a felhatalmazás automatikusan követi.

**Az üzemeltető felelőssége és a felhatalmazott szoftver önálló adatkezelői felelőssége elválik.** Az üzemeltető nem felel a felhatalmazott szoftvernek szabályszerűen átadott adat ezt követő, önálló adatkezelőként végzett kezeléséért. Ennek kimondása nélkül az üzemeltetőnek közvetlen érdeke fűződik ahhoz, hogy a nyitást ellehetetlenítse — a gyakorlatban ez a rendelkezés dönti el, hogy a jogszabály működni fog-e.

**A kiadó felel a nyilatkozatáért.** Ha a továbbítási nyilatkozat valótlan, az a nyilvántartásból való törlést vonja maga után, és minden hozzá tartozó felhatalmazás megszűnik. Ez a szankció teszi a 8.2 pontot érvényesíthetővé.

---

## 10. Mit szeretnénk elérni?

### 10.1 Cél 1: a meglévő hozzáférés delegálható legyen — meghatározott funkciókörben

A hozzáférés **körét** nem kell újraszabályozni: azt a rendszerek meglévő jogosultságkezelése eldönti. Amit szabályozni kell, az a **csatorna** és a **felhasználás**.

Teljes funkcióparitást nem ígérünk: a felületi és a programozói funkciók nem képezhetők le mindig egy az egyben, és egy jövőbeli, különösen érzékeny új funkció automatikus megnyílása nem vállalható. Helyette **funkciókatalógust** javaslunk, a PSD2 mintájára.

A kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és mindegyikhez hozzárendeli a szükséges bizalmi szintet és a 8.3 szerinti adatkör-besorolást. Új hivatalos funkció megjelenésekor az üzemeltető 90 napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

*Mérhető célok:* a katalógus 2027. szeptember 1-jén lefedi a hivatalos alkalmazások **olvasási** funkcióinak 100%-át az alapadatkörben; 2028. szeptember 1-jén tartalmazza a **műveleti** funkciók besorolását, és jelszóátadásra egyetlen katalógusbeli funkcióhoz sincs szükség.

### 10.2 Cél 2: a felület legyen nyilvános, stabil és megkülönböztetésmentes

A dokumentáció legyen nyilvános, verziózott, tesztkörnyezettel. A nyilvánosság a **specifikációra** vonatkozik; az adathoz való hozzáférés hitelesített és a felhasználó jogosultságához kötött marad. A megkülönböztetésmentesség tartalmát a 7.2 pont adja.

*Mérhető célok:* a dokumentáció és a szintetikus adatokat tartalmazó tesztkörnyezet 2027. június 30-ig publikus; a visszafelé nem kompatibilis változásokat legalább 90 nappal előre bejelentik.

*Nemzetközi példa:* az amerikai Ed-Fi Alliance nyílt adatszabványa és az 1EdTech OneRoster-szabványa a közoktatási nyilvántartó rendszerek és harmadik fél alkalmazások közötti adatcserére; felsőoktatásban az uniós Erasmus Without Paper hálózat.

### 10.3 Cél 3: a pedagógusi MI-használat legyen intézményileg megszervezhető

Ez a javaslat szakpolitikai magja, ezért nem jogi levezetéssel indokoljuk.

**Az MI-jártasság nem pusztán képzési kérdés.** Tanfolyamon meg lehet tanulni, mi az a nyelvi modell. Azt, hogy egy konkrét kimenetben hol lehet megbízni és hol nem, csak a saját munkán lehet megtanulni. Egy pedagógus akkor tud az MI-vel szakmailag és kritikusan bánni, ha az a **tényleges munkafolyamataiban** jogszerűen használható. Amíg nem az, addig vagy nem használja, vagy szabálytalanul használja — és mindkét esetben megmarad kívülállónak azzal az eszközzel szemben, amelyről később szakmai döntéseket kellene hoznia.

**Ne még egy felület legyen.** Ha az MI külön alkalmazásként érkezik, amelyet meg kell nyitni és amelybe kézzel kell bemásolni az adatot, akkor csak eggyel több rendszer lesz abban a sorban, amely már most is túl hosszú. Akkor lesz használható, ha **hozzáfér a pedagógus által amúgy is használt rendszerekhez**, és természetes nyelvű munkafelületet ad föléjük. Nem az embernek kell a rendszerekhez járnia; a rendszerek adata jön az emberhez.

**Nem csak gyorsítás.** Az adminisztráció rövidítése a legkönnyebben mérhető haszon, de nem a legfontosabb. Egy tanulmányi rendszerhez kapcsolt, felügyelt MI segíthet:

- **áttekinteni a lemaradásra utaló, a pedagógus számára amúgy is rendelkezésre álló jeleket** — a jegyeket, hiányzásokat és határidőket együtt, ahelyett hogy három felületen kellene összenéznie őket;
- **szülői kommunikációt előkészíteni** — tényszerű összefoglalót adni arról, mi történt egy tanulóval az elmúlt hetekben;
- **időszaki összesítéseket készíteni** félévi és év végi zárásra;
- **szöveges értékelést támogatni** — a megfogalmazás első változatával, amelyet a pedagógus felülír.

Mindegyikben a rögzítés és a szakmai döntés a pedagógusnál marad. Az MI nem osztályoz és nem dönt.

**Amit a zártság valójában akadályoz.** A jelenlegi helyzet nem az ellenőrizetlen MI-használatot akadályozza — a kimásolást semmi nem állítja meg. Amit megakadályoz, az a **mindennapi, kontrollált, intézményileg engedélyezett és naplózott** használat. A zárt rendszer tehát pontosan a kívánatos változatot zárja ki, a nem kívánatosat pedig nem.

Hogy az eszköz állami fejlesztésű, központilag beszerzett vagy fenntartói szerződéssel biztosított, a javaslat szempontjából közömbös: mindegyik ugyanazon a nyilvános felületen, a 3. bizalmi szinten kapcsolódik.

*Mérhető cél:* 2028. szeptember 1-jéig minden KRÉTA-t használó intézményben elérhető a pedagógusi felhatalmazások intézményi szintű listázása, engedélyezése és visszavonása.

### 10.4 Cél 4: a felhasználó tudja, mi történik az adatával

*Mérhető célok:* 2027. szeptember 1-jétől minden felhatalmazás a 8.2 szerinti, köznyelvi tájékoztatással jön létre; a felhatalmazások 100%-a megtekinthető és visszavonható a hivatalos felületen; 2029-től évente nyilvános jelentés a regisztrált kliensekről bizalmi szintenként, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

---

## 11. Mi lenne a várható haszon?

| Szereplő | Rövid táv (2027–2028) | Közép- és hosszú táv |
|---|---|---|
| **Szülők, gondviselők** | jelszóátadás nélkül, láthatóan és visszavonhatóan kapcsolják a választott asszisztensüket; a döntés pillanatában megtudják, hová kerül az adat; nem kell még egy külön iskolai alkalmazás, több gyerekhez sem külön felület | a kevésbé gyakorlott digitális felhasználók és a nem magyar anyanyelvű családok is könnyebben követik az iskolai ügyeket (6.4 szerint feltételezés) |
| **Tanulók** | órarend, feladatok, határidők a saját eszközeikben | tanulástámogató alkalmazások naprakész iskolai adatra építhetnek |
| **Pedagógusok** | 2028-tól az intézmény által engedélyezett eszköz szabályosan kapcsolódik; a kézi másolás helyére ellenőrizhető folyamat lép, és a kockázatot nem a pedagógus viseli személyesen | a 10.3 pontban felsorolt munkafolyamatok támogatása, a pilot által mért tényleges időnyereséggel |
| **Intézmények, fenntartók** | először látják és korlátozhatják, milyen szoftverek férnek hozzá az általuk kezelt adathoz | az MI-eszközök beszerzése szállítófüggetlenné válik |
| **Hallgatók, oktatók** | — | 2028-tól a tanulmányi rendszerek adatai intézménytől függetlenül, egységesen kezelhetők |
| **Hazai fejlesztők** | dokumentált, stabil felület; a tisztább adatkezelés a jóváhagyó képernyőn versenyelőny | 2030-tól a megoldások a nemzetközi szabványok mentén exportálhatók |
| **Üzemeltetők, állam** | a megkerülő megoldások nem tervezett forgalma szabályozott, azonosítható forgalommá válik; az üzemeltetői felelősség a 9. fejezet szerint egyértelművé válik | a pilot és a nyilvános hatásmérés alapján az oktatási digitalizáció eredménye mérhető |

Az üzemeltetői oldalon a bevezetés a meglévő felületekre és a már OAuth-alapú hitelesítési infrastruktúrára építhet, de új kliensregisztrációs, felhatalmazás-kezelési, dokumentációs, biztonsági és üzemeltetési képességeket igényel — köztük kérésszám-korlátozást, visszaélés-felismerést, felügyeletet, tesztkörnyezet-fenntartást és fejlesztői támogatást. Ezek ráfordítását a 14. fejezet nyitott kérdésként kezeli.

---

## 12. Pontosan milyen változtatást javaslunk?

### I. A nemzeti köznevelésről szóló 2011. évi CXC. törvény kiegészítése

*(javasolt elfogadás: 2026. december 31.; a szakaszszámozás a kodifikáció során állapítandó meg)*

**„A) § — Az érintett saját adatkörében adott felhatalmazás**

(1) A köznevelési intézmény elektronikus naplóját és az e törvény szerinti elektronikus nyilvántartásokat működtető informatikai rendszer üzemeltetője (a továbbiakban: üzemeltető) biztosítja, hogy a tanuló, a szülő, valamint az a felhasználó, aki a hivatalos elektronikus felületen saját, illetve gyermeke személyes adataihoz fér hozzá, ezeket az adatokat az általa felhatalmazott szoftver útján is lekérdezhesse, továbbá a kormányrendeletben meghatározott funkciókatalógus szerinti műveleteket elvégezhesse.

(2) A felhatalmazás nem hoz létre és nem bővít jogosultságot: legfeljebb a felhasználónak a hivatalos elektronikus felületen gyakorolható jogosultságai körére terjed ki, amelyet a felhasználó szűkíthet.

(3) A felhatalmazás
a) a felhasználó jelszavának vagy más hitelesítő adatának átadása nélkül jön létre,
b) határozott, legfeljebb tizenkét hónapos időtartamra szól,
c) a hivatalos elektronikus felületen bármikor megtekinthető és visszavonható.

(4) Ha a felhasználó jogosultsága olyan adatra is kiterjed, amely más természetes személy személyes adata, a felhatalmazás erre az adatkörre csak annyiban terjed ki, amennyiben a funkciókatalógus az adott funkciót erre kifejezetten feljogosítja.

(5) A funkciókatalógusban korlátozott továbbításúként megjelölt adatkör felhatalmazott szoftver részére nem adható át. E rendelkezés nem érinti a felhasználó jogát arra, hogy az adatot a hivatalos elektronikus felületen megismerje.

**B) § — Tájékoztatás az adat további kezeléséről**

(1) A felhatalmazás megadására szolgáló felület a hivatalos elektronikus felület része. Azon közérthetően, köznyelven meg kell jeleníteni legalább azt, hogy
a) a szoftver mely adatkört kapja meg, és mely adatkört nem kapja meg,
b) a szoftver kiadója az adatot továbbítja-e más szolgáltatónak, és ha igen, kinek,
c) az adat elhagyja-e az Európai Gazdasági Térséget, és ha igen, mely országba kerül,
d) az adatot tárolják-e, és ha igen, mennyi ideig,
e) az adatot felhasználják-e szoftver vagy mesterséges intelligencia fejlesztésére, tanítására,
f) a felhatalmazás visszavonása mikor szünteti meg a hozzáférést, és mi történik a már átadott adattal,
g) a felhatalmazás meddig szól és hol vonható vissza,
h) szülő által adott felhatalmazás esetén annak a gyermeknek a neve, akinek az adataira a felhatalmazás vonatkozik.

(2) Az (1) bekezdés szerinti adatokat a szoftver kiadója a nyilvántartásba vételkor nyilatkozatban adja meg. A hivatalos elektronikus felület a nyilatkozat adatait jeleníti meg; azokat a szoftver nem módosíthatja.

(3) Ha a kiadó az (1) bekezdés valamely eleméről nem tud nyilatkozni, ezt a tényt kell megjeleníteni.

(4) A részletes adatkezelési tájékoztató az (1) bekezdés szerinti megjelenítést nem helyettesíti; ahhoz kapcsolódóan, külön hozzáférhetővé téve közölhető.

(5) A valóságnak nem megfelelő nyilatkozat a szoftver nyilvántartásból való törlését vonja maga után.

**C) § — Az intézményi feladatkörben gyakorolt jogosultság**

(1) A pedagógus és más, intézményi feladatköréből fakadó jogosultsággal rendelkező felhasználó e jogosultsága körében kizárólag olyan szoftvert használhat, amelyet az adatkezelő köznevelési intézmény vagy annak fenntartója engedélyezett.

(2) Az engedélyezés feltétele, hogy a szoftver kiadója az intézménnyel vagy a fenntartóval az (EU) 2016/679 rendelet 28. cikke szerinti adatfeldolgozói szerződést kössön, és a szoftver a D) § szerinti nyilvántartásban a legmagasabb bizalmi szinten szerepeljen.

(3) A felhatalmazás a felhasználó jogosultságát követi: annak megszűnésével megszűnik, módosulásával módosul.

(4) Az intézmény a feladatkörében gyakorolt jogosultságokhoz kapcsolódó felhatalmazásokat intézményi szinten megtekintheti, korlátozhatja és visszavonhatja.

(5) E § nem hoz létre a felhasználót önállóan megillető jogosultságot arra, hogy az intézményi feladatköréből fakadó jogosultságát szoftver részére átengedje.

**D) § — A programozói felület és a nyilvántartás**

(1) Az üzemeltető a funkciókatalógus szerinti funkciókat lefedő programozói felület leírását nyilvánosan közzéteszi, a felületet verziókövetéssel működteti, a visszafelé nem kompatibilis változtatásokat legalább kilencven nappal előre közzéteszi, és szintetikus adatokat tartalmazó tesztkörnyezetet biztosít.

(2) Az üzemeltető az azonos bizalmi szintbe tartozó felhatalmazott szoftvereket azonos feltételekkel szolgálja ki. Az üzemeltető hivatalos alkalmazása nem rendelkezhet olyan képességgel vagy szolgáltatásminőséggel, amely azonos bizalmi szintű felhatalmazott szoftver számára nem érhető el.

(3) Biztonsági célú korlátozás akkor alkalmazható, ha előre közzétett, objektív feltételen alapul, és az azonos helyzetű valamennyi szoftverre kiterjed. Egyedi szoftver hozzáférése kizárólag bizonyítékkal alátámasztott biztonsági okból, írásbeli indokolással függeszthető fel; a felfüggesztéssel szemben jogorvoslatnak van helye.

(4) A felhatalmazható szoftverekről a Kormány által rendeletben kijelölt szerv nyilvántartást vezet, amely a szoftvereket bizalmi szint szerint sorolja be, és nyilvántartja a B) § szerinti nyilatkozatot. A nyilvántartásból való törlés a szoftverhez tartozó valamennyi felhatalmazást megszünteti; erről az üzemeltető az érintett felhasználókat értesíti.

(5) Az üzemeltető nem felel a felhatalmazott szoftvernek szabályszerűen átadott adat ezt követő, a szoftver kiadója által önálló adatkezelőként végzett kezeléséért.”

**Felhatalmazó rendelkezés:**

„Felhatalmazást kap a Kormány, hogy az A)–D) § szerinti felhatalmazás, tájékoztatás, funkciókatalógus, adatkör-besorolás, programozói felület és nyilvántartás műszaki és eljárási követelményeit, valamint a nyilvántartást vezető szervet rendeletben állapítsa meg.”

### II. A nemzeti felsőoktatásról szóló 2011. évi CCIV. törvény kiegészítése

*(javasolt elfogadás: 2026. december 31.)*

Az Nftv. adatkezelési rendelkezéseit az I. pont szerinti szöveggel azonos tartalmú új szakaszokkal javasoljuk kiegészíteni, a következő eltérésekkel: a szabály a felsőoktatási intézmény tanulmányi rendszerére vonatkozik; az A) § szerinti jogosultság a hallgatót illeti meg a saját adatkörében; a C) § szerinti engedélyezési jog a felsőoktatási intézményt illeti meg, és az oktatóra vonatkozik.

### III. Kormányrendelet a delegált hozzáférés műszaki és eljárási követelményeiről

*(javasolt kihirdetés: 2027. március 31.)*

**Hitelesítés és felhatalmazás.** A felhatalmazás az OAuth 2.0 engedélyezési keretrendszer (RFC 6749) szerint, kötelezően PKCE-vel (RFC 7636), az RFC 9700 (BCP 240) biztonsági ajánlásaival összhangban valósul meg; implicit és jelszó alapú folyamat nem alkalmazható. Az engedélyező szerver metaadatait az RFC 8414 szerint teszi közzé.

**Bizalmi szintek és kliensregisztráció.** A rendelet a 7.1 pont szerinti három bizalmi szintet állapítja meg, szintenként meghatározva a regisztráció módját, a kliens hitelesítésének követelményeit és az elérhető funkciókört. Az 1. szintre a dinamikus kliensregisztráció (RFC 7591) egyedi engedélyezési eljárás nélkül érvényes; a 3. szinthez emelt biztonsági profil (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldás és kliensattesztáció szükséges.

**Funkciókatalógus és adatkör-besorolás.** A rendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a szükséges bizalmi szintet, valamint az adatkör besorolását: alapadatkör, korlátozott továbbítású adatkör, vagy más személyt is érintő adat. Új hivatalos funkció bevezetésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

**A továbbítási nyilatkozat és a jóváhagyó képernyő.** A kiadó a nyilvántartásba vételkor nyilatkozik az Nkt. B) § (1) bekezdése szerinti adatokról. A jóváhagyó képernyő a hivatalos felületen jelenik meg, köznyelven, a nyilvántartás adatai alapján, a szoftver által nem módosítható módon. A rendelet a kötelező tartalmi elemeket írja elő, nem a szövegezést.

**Visszavonás és incidenskezelés.** A tokenek visszavonása az RFC 7009 szerint támogatott; a felhasználó által visszavont felhatalmazás legfeljebb öt percen belül hatályát veszti. A kiadó a tudomásszerzéstől számított hetvenkét órán belül bejelenti a klienst érintő biztonsági incidenst. A nyilvántartásból törölt szoftverhez tartozó felhatalmazások azonnal hatályukat vesztik.

**Átláthatóság.** Az üzemeltető évente nyilvános jelentést tesz közzé a regisztrált kliensek bizalmi szintenkénti számáról, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

**Szabványkövetés.** A rendelet a hivatkozott szabványok megnevezését a nemzetközi szabványfejlődéshez igazodva módosíthatja, a bizalmi szintekhez rendelt garanciák változatlanul hagyásával.

### IV. A hatásmérés előírása: pilot

*(javasolt indulás: 2027. szeptember 1., eredmény: 2028. március 31.)*

Javasoljuk, hogy a kormányrendelet írjon elő pilot-mérést, amelynek eredménye a műveleti és a pedagógusi szakasz indítása előtt rendelkezésre áll.

- **Kör:** legalább néhány száz pedagógus, több intézménytípusból (általános iskola, gimnázium, szakképző intézmény) és több fenntartótól.
- **Mit mér:** a 6.2 pontban felsorolt öt kérdést — az adminisztrációs idő folyamatonkénti megoszlását, a tanulmányi rendszerből adatot igénylő folyamatok arányát, az azonos folyamat időigényét integrált MI-vel, az utóellenőrzésre fordított időt, valamint a hibaarány változását.
- **Hogyan mér:** ahol lehetséges, hasonló feladatot végző kontrollcsoporttal összevetve, hogy az eredmény ne pusztán az előtte-utána különbségén múljon.
- **Eredménye:** nyilvános, és a funkciókatalógus, valamint a 2028. szeptemberi szakasz megalapozását szolgálja.
- **Ha a pilot nem igazolja az időnyereséget**, a javaslat olvasási része akkor is indokolt marad: az az érintett saját adatához való hozzáférésről szól, nem a pedagógusi hatékonyságról.

---

## 13. Bevezetési ütemterv

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | Az Nkt. és az Nftv. módosításának elfogadása |
| 2027. március 31. | A műszaki és eljárási követelményekről szóló kormányrendelet kihirdetése, a funkciókatalógus és az adatkör-besorolás első kiadásával |
| 2027. június 30. | KRÉTA: a programozói felület dokumentációjának és tesztkörnyezetének közzététele; a kliensnyilvántartás felállítása |
| 2027. szeptember 1. | KRÉTA, **1. szakasz**: éles delegált **olvasási** hozzáférés szülői és tanulói jogosultságra, 1. bizalmi szinten, alapadatkörben, a köznyelvi tájékoztatással együtt. **A pedagógusi pilot indulása** |
| 2028. március 31. | A pilot eredményének közzététele. Felsőoktatás: dokumentáció és tesztkörnyezet. KRÉTA: a műveleti funkciók katalógusbesorolása |
| 2028. szeptember 1. | KRÉTA, **2. szakasz**: műveletvégzés az érintett saját adatkörében (2. szint); pedagógusi hozzáférés intézményi engedélyezéssel (3. szint), a pilot eredményére alapozva. Felsőoktatás: éles delegált olvasási hozzáférés |
| 2029. március 31. | Felsőoktatás: műveletvégzés és oktatói hozzáférés |
| 2029. december 31., majd évente | Első nyilvános hatásjelentés és a funkciókatalógus felülvizsgálata |

A szakaszolás lényege: **az olvasás előbb megy élesbe, mint az írás**, a pedagógusi hozzáférés csak az intézményi engedélyezéssel együtt indul, és **a pedagógusi szakaszt magyar mérés előzi meg**.

---

## 14. Nyitott kérdések

Ezeket a kérdéseket a javaslat nem dönti el. Azért soroljuk fel, mert a szakmai vitában úgyis előkerülnek, és jobb, ha az előterjesztő nevezi meg őket.

1. **Ki vezesse a kliensnyilvántartást**, milyen eljárásrenddel, jogorvoslattal és finanszírozással? Az előterjesztés csak annyit rögzít, hogy a szervet a Kormány rendeletben jelöli ki.
2. **A nagykorúsághoz közeledő tanuló** saját felhatalmazása és a szülői felhatalmazás viszonya; melyik életkortól illeti meg a tanulót önálló jog, és mit lát ilyenkor a szülő.
3. **Az adatkörök tételes, mezőszintű besorolása** a funkciókatalógusban. A 8.3 pont megadja a három kategóriát és az alapértelmezést; a besorolás elvégzése önálló, jelentős szakmai munka. A szülői és tanulói **olvasási** funkciókra készült egy első vázlat (külön melléklet), amely húsz valós KRÉTA-végpontot sorol be, és hat nehéz esetet nevez meg. A műveleti és a pedagógusi funkciók besorolása még hátravan, és az üzemeltető funkciólistáját igényli.
4. **Mit tehet az MI-szolgáltató a kapott adattal a saját rendszerén belül?** A javaslat előírja, hogy erről tájékoztatni kell, és megtiltja a korlátozott továbbítású adatkör továbbítását, de nem szabályozza a szolgáltató belső adatkezelését. Ez önálló szabályozási réteg.
5. **A költségoldal.** Az üzemeltetői ráfordítás, a nyilvántartás működtetése, a pilot és az intézményi felkészítés költsége még nincs becsülve.
6. **A továbbítási nyilatkozat ellenőrzése.** A javaslat szankcionálja a valótlan nyilatkozatot, de nem mondja meg, ki és hogyan ellenőrzi. Bejelentésre, mintavétellel vagy rendszeresen?
7. **Statisztikai pontosítások.** Az átlagos osztálylétszám, a KRÉTA-alkalmazások megjelenési éve és a KRÉTA-tudásbázis hivatkozásának pontos adatai még pótlandók (a szövegben [ELLENŐRIZENDŐ] jelöléssel).
8. **Az érdekütközés kezelése.** Az előterjesztés készítője a 4.3 pontban leírt szolgáltatás üzemeltetője. A javaslat elfogadása ezt a szolgáltatást a jelenlegi formájában feleslegessé teszi, de a jövőbeli piacon az előterjesztő is szereplő lehet.

---

## 15. Források

**Jogforrások**

- Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR), különösen a 12., 15., 20. és 28. cikk, valamint a (63) preambulumbekezdés
- Az Európai Parlament és a Tanács (EU) 2015/2366 irányelve (PSD2) és a Bizottság (EU) 2018/389 felhatalmazáson alapuló rendelete
- Az Európai Parlament és a Tanács (EU) 2023/2854 rendelete (adatrendelet), II. fejezet
- Az Európai Parlament és a Tanács (EU) 2024/1689 rendelete (MI-rendelet), 4. cikk
- Az Európai Parlament és a Tanács (EU) 2025/327 rendelete (európai egészségügyi adattér), 3. cikk
- 2011. évi CXC. törvény a nemzeti köznevelésről; 2011. évi CCIV. törvény a nemzeti felsőoktatásról

**Műszaki szabványok**

- RFC 6749 — The OAuth 2.0 Authorization Framework (2012)
- RFC 7009 — OAuth 2.0 Token Revocation (2013)
- RFC 7591 — OAuth 2.0 Dynamic Client Registration Protocol (2015)
- RFC 7636 — Proof Key for Code Exchange (PKCE) (2015)
- RFC 8414 — OAuth 2.0 Authorization Server Metadata (2018)
- RFC 9700 (BCP 240) — Best Current Practice for OAuth 2.0 Security (2025. január) — https://datatracker.ietf.org/doc/rfc9700/
- OpenID Foundation: FAPI 2.0 Security Profile
- Model Context Protocol (2024. november)

**Statisztikai források**

- KSH: Oktatási adatok, 2024/2025 (előzetes adatok) — https://www.ksh.hu/s/kiadvanyok/oktatasi-adatok-2024-2025-elozetes-adatok/index.html
- KSH: Oktatási adatok, 2025/2026 (előzetes adatok) — https://www.ksh.hu/s/kiadvanyok/oktatasi-adatok-2025-2026-elozetes-adatok/
- KSH: A köznevelési és a szakképző intézményekben alkalmazott pedagógusok és oktatók feladatonként (23.1.1.3.) — https://www.ksh.hu/stadat_files/okt/hu/okt0003.html
- OECD: Results from TALIS 2024 — Country note: Hungary — https://www.oecd.org/en/publications/results-from-talis-2024-country-notes_e127f9e2-en/hungary_29960fb1-en.html

**Szerkesztői jelölés:** a [ELLENŐRIZENDŐ: …] helyeken a számot vagy a tényt publikálás előtt elsődleges forrásból pótolni kell. A statisztikai adatok keresőn keresztül elért kiadványokból származnak; a végleges szövegben a KSH és az OECD elsődleges táblázataival egyeztetendők.
