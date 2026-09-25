# Melléklet az „AI-Ország: saját oktatási adat, saját eszközzel" előterjesztéshez

## A jogi, bizalmi, felhasználási és felelősségi modell

*Ez a melléklet a törzsanyag azon fejezeteit tartalmazza, amelyek a közös előterjesztési sablonon kívül esnek, de a normaszöveg megértéséhez és megvédéséhez szükségesek. A törzsanyag önmagában is olvasható; a melléklet azt egészíti ki teljessé.*

| Melléklet | Mire válaszol | Melyik törzsfejezethez tartozik |
|---|---|---|
| **M1.** Három külön kérdés | Miért nem kezelhető egyetlen elvként a szülő, a tanuló és a pedagógus esete? | 6. Pontos szakpolitikai változás |
| **M2.** A jogi helyzet pontosan | Mit ad és mit nem ad a hatályos jog, és milyen precedens van? | 1. Probléma, 2. Előzmények |
| **M3.** Bizalmi és biztonsági modell | Ki kaphat felhatalmazást, és milyen műveletre? | 6./III. Kormányrendelet |
| **M4.** A felhasználás rétege | Mi történik az adattal a kiadás után, és mi vihető tovább? | 6./I. B) §, 4.1 Cél |
| **M5.** Felelősségi modell | Ki adatkezelő, ki adatfeldolgozó, és meddig terjed az üzemeltető felelőssége? | 6./I. D) § |

A funkciókatalógus első vázlata — húsz valós KRÉTA-végpont adatkör-besorolása — önálló mellékletben szerepel.

---

## M1. Három külön kérdés — három külön szabály

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

## M2. A jogi helyzet pontosan

### M2.1 Amit a hatályos jog ad

- **GDPR 15. cikk** — hozzáférési jog. Egyszeri másolatra szól, nem folyamatos gépi hozzáférésre.
- **GDPR (63) preambulumbekezdés** — ahol lehetséges, az adatkezelő biztosítson távoli hozzáférést olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz. Ez **támogató érv** az A) esethez, de preambulumbekezdés: nem kötelező szabály, és nem ír elő programozói felületet.
- **GDPR 12. cikk (2) bekezdés** — az adatkezelő köteles elősegíteni az érintetti jogok gyakorlását.

### M2.2 Amit a hatályos jog nem ad

- **GDPR 20. cikk** — az adathordozhatóság a hozzájáruláson vagy szerződésen alapuló, automatizált adatkezelésre vonatkozik. A 20. cikk (3) bekezdése a közérdekű vagy közhatalmi feladat végrehajtása keretében végzett adatkezelést kifejezetten kiveszi. Az oktatási nyilvántartás ilyen. **A 20. cikk tehát itt nem hívható fel.**
- **GDPR 20. cikk (4) bekezdés** — az adathordozhatóság nem sértheti mások jogait és szabadságait. Ez a korlát a mi javaslatunkra is irányadó elvi mérce; a vegyes adatkörök kezelésének kiindulópontja (lásd M4.3).
- **Nkt. és Nftv.** — a 2011. évi CXC. és CCIV. törvény rendezi az oktatási adatkezelést és nyilvántartásokat, de egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához az általa választott szoftverrel hozzáférhessen.

Következtetés: **a javasolt jogosultság új.** Nem a GDPR technikai kivetülése. Ágazati jogalkotás kell hozzá, ahogy az alábbi precedensben is.

### M2.3 A legjobb precedens: az európai egészségügyi adattér

Az **(EU) 2025/327 rendelet** (európai egészségügyi adattér, EHDS) pontosan azt a konstrukciót valósítja meg, amelyet itt javasolunk: **ágazati uniós jogszabály hoz létre elektronikus hozzáférési jogot olyan adatkörben, ahol maga az adatkezelés közfeladaton alapul**, és az érintett maga adhat hozzáférést az általa választott szereplőnek. A rendelet 3. cikke az érintett elektronikus egészségügyi adataihoz való azonnali, ingyenes elektronikus hozzáférést és letöltést biztosítja. A rendelet 2025. március 25-én lépett hatályba, alkalmazása jellemzően 2027. március 26-tól kezdődik. [ELLENŐRIZENDŐ: a 3. cikk bekezdéseinek pontos hivatkozása a Hivatalos Lap szövege alapján]

Ez az analógia két okból erős: azonos a jogi szerkezet (közfeladaton alapuló nyilvántartás és ágazati hozzáférési jog), és azonos az érzékenységi szint (egészségügyi adat, illetve kiskorúak oktatási adata).

### M2.4 Az adatrendelet — irányjelző, nem jogalap

Az **(EU) 2023/2854 rendelet** (adatrendelet) kézenfekvő hivatkozásnak tűnik, de jogalapként nem állja meg a helyét. A rendelet II. fejezete az **összekapcsolt termékek és a kapcsolódó szolgáltatások** használata során keletkező adatokra vonatkozik; tipikus tárgya a dologi, érzékelőalapú termékadat. A KRÉTA vagy a Neptun tanulmányi nyilvántartása nem ilyen. Az adatrendeletet ezért **jogpolitikai irányjelzőként** hívjuk fel, **jogalapként nem**.

### M2.5 Az MI-rendelet — szűkített jogi következtetés

Az **(EU) 2024/1689 rendelet** 4. cikke 2025. február 2-tól előírja, hogy az MI-rendszereket alkalmazó szervezetek gondoskodjanak munkatársaik MI-jártasságáról. **Az MI-rendelet önmagában nem alapoz meg API-nyitási kötelezettséget; a pedagógusi oldal indoka szakpolitikai** — lásd a törzsanyag 4.3 pontját.

### M2.6 A PSD2-analógia — vállalva mindkét élét

**Mellette szól:** az (EU) 2015/2366 irányelv (PSD2) és az (EU) 2018/389 felhatalmazáson alapuló rendelet 2019. szeptember 14-től **dedikált, biztonságos felületet**, nyilvános technikai specifikációt és tesztelési lehetőséget követel meg; a brit versenyhatóság (CMA) 2018-tól egységes nyílt banki API-szabványt tett kötelezővé. Az az állítás tehát, hogy egy monopolizált ügyfélfelület jogszabállyal megnyitható, és ettől a szektor nem omlik össze, empirikusan igazolt.

**Ellene szól:** a PSD2-ben a harmadik fél szolgáltatók **engedélyezett, felügyelt szereplők**, és a rendszer minősített tanúsítványokra épít. Egy „egyedi engedélyezési eljárás nélküli” kliensregisztráció tehát éppen a példa legfontosabb elemét hagyná ki: a **bizalmi keretet**. Ezt az ellenérvet elfogadjuk; az M3. fejezet pótolja a hiányt.

---

## M3. Bizalmi és biztonsági modell — ki kaphat felhatalmazást

Ez a fejezet az első réteg: azt szabályozza, **ki** kapcsolódhat és **milyen műveletre**. Azt, hogy az adattal utána mi történik, az M4. fejezet rendezi.

### M3.1 Kliensosztályok

**1. bizalmi szint — bejelentett kliens.**
*Mit tehet:* kizárólag olvasás, kizárólag az érintett saját, illetve a szülő esetében a gyermekére vonatkozó adatkörében (A) eset).
*Regisztráció:* önkiszolgáló, dinamikus kliensregisztrációval (RFC 7591), egyedi engedélyezési eljárás nélkül.
*Feltétel:* működő kapcsolattartási cím, közzétett adatkezelési tájékoztató elérhetősége, a kliens nyilvános megnevezése, valamint az M4.2 pont szerinti **továbbítási nyilatkozat**.
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

### M3.2 Megkülönböztetésmentesség — a szabály helyes megfogalmazása

Egy böngészőben futó nyilvános kliens, egy mobilalkalmazás és egy szerveroldali bizalmas kliens kockázata nem azonos, és az RFC 9700 éppen ezekre az eltérésekre ad külön ellenintézkedéseket. A szabály célja ezért nem az azonos bánásmód, hanem az, hogy az üzemeltető ne tudja biztonsági indokra hivatkozva elsorvasztani a harmadik fél klienseit:

1. Az azonos bizalmi szintbe tartozó klienseket **azonos feltételekkel** kell kiszolgálni.
2. Az üzemeltető hivatalos alkalmazása **nem kaphat olyan képességet vagy szolgáltatásminőséget**, amelyet azonos bizalmi szintű felhatalmazott kliens nem kaphat meg. A hivatalos alkalmazást e célból a megfelelő bizalmi szintbe be kell sorolni.
3. Kockázatalapú korlátozás **megengedett**, ha előre közzétett, objektív kritériumon alapul, és minden azonos helyzetű kliensre vonatkozik.
4. Egyedi kliens felfüggesztése **kizárólag** bizonyítékkal alátámasztott biztonsági okból lehetséges, írásbeli indokolással, jogorvoslati lehetőséggel, és a felfüggesztések számának megjelenítésével az éves nyilvános jelentésben.

### M3.3 Kompromittált vagy visszaélő kliens

- A nyilvántartást vezető szerv a kliens regisztrációját visszavonhatja; ekkor az adott klienshez tartozó **összes felhatalmazás azonnal hatályát veszti**.
- Az üzemeltető köteles értesíteni azokat a felhasználókat, akiknek felhatalmazása visszavont kliensre vonatkozott.
- A kiadó a tudomásszerzéstől számított 72 órán belül köteles bejelenteni a klienst érintő biztonsági incidenst.

### M3.4 Adathalászat elleni alapvédelem

- A jóváhagyó képernyő **a hivatalos felületen** jelenik meg.
- A kliens megnevezését és kiadóját a hivatalos felület **a nyilvántartásból veszi**; a kliens ezt nem írhatja felül.
- A felhatalmazás **határozott, legfeljebb tizenkét hónapos** időtartamra szól, majd megújítandó.

### M3.5 Amit ez a keret nem old meg

A bizalmi szint azt szabályozza, ki kapcsolódhat, nem azt, hogy a felhasználó jól dönt-e. Az M4.2 szerinti tájékoztatás a döntést jobbá teszi, de nem veszi el.

Az 1. bizalmi szinten átvilágítatlan kiadó is kaphat olvasási hozzáférést kiskorú adataihoz, szülői jóváhagyással. Ezt vállaltan tartjuk így: e nélkül a javaslat lényege veszne el, és a szülő ma ugyanennek a körnek ad jelszót, csak láthatatlanul. A jóváhagyó képernyő ezért kifejezetten jelzi, ha a kiadó nincs átvilágítva.

---

## M4. A felhasználás rétege — mi történik az adattal a kiadás után

### M4.1 Miért ez a valódi új kockázat

A felhasználó jogosultsága nem változik: a szülő ma is látja a gyermeke jegyeit, és ezután is ugyanazokat fogja látni. Az új kockázat abból fakad, hogy rajta kívül **a felhatalmazott szoftver is hozzáfér** ehhez az adathoz, majd azt tovább kezeli — jellemzően továbbküldi egy MI-szolgáltatónak.

Ezen a ponton a szabályozásnak nem az a kérdése, hogy a szülő láthatja-e az adatot, hanem hogy **tudja-e, mi történik vele**. A hatályos gyakorlat erre nem ad választ: minden szolgáltató a saját adatkezelési tájékoztatójában, saját nyelvezetével, saját belátása szerint rendezi. A szülő pedig egy jelölőnégyzetet pipál ki.

A javaslat ezért két dolgot ír elő: **érthető tájékoztatást a döntés pillanatában** (M4.2), és **korlátot arra, mi vihető egyáltalán tovább** (M4.3).

### M4.2 A döntési képernyő emberi nyelven

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

**A kötelező tartalmi elemeket** — az átadott és az át nem adott adatkörtől a továbbítás címzettjén, az Unión kívülre kerülésen, a tárolási időn és a modellfejlesztési felhasználáson át a visszavonás következményéig — a normaszöveg tételesen felsorolja (törzsanyag 6./I. B) § (1) bekezdés a)–h) pont). A rendeletnek a tartalmat kell előírnia, nem a szövegezést.

**Ha a kiadó nem tud válaszolni**, azt is ki kell írni. A „nem ismert, hogy az MI-szolgáltató meddig tárolja” önmagában is információ a szülőnek, és versenyhátrány annak, aki így nyilatkozik. Ez a rendelkezés a piacra is hat: aki tisztább adatkezelést tud vállalni, azt a jóváhagyó képernyőn láthatóvá teszi.

### M4.3 Mi vihető tovább: az adatkör kérdése

Nem minden oktatási adat egyforma. A jegy és az órarend nem kezelendő ugyanúgy, mint egy gyermekvédelmi jelzés, egy fegyelmi eljárás irata, egy egészségügyi vagy sajátos nevelési igényre vonatkozó adat, vagy egy olyan bejegyzés, amely más tanulót is érint.

A javaslat ezért **három adatkört** különböztet meg, és mindegyikhez más alapszabályt rendel:

| Adatkör | Példa | Alapszabály |
|---|---|---|
| **Alapadatkör** | jegy, órarend, házi feladat, számonkérés, saját hiányzás | delegálható és továbbítható, ha az M4.2 szerinti tájékoztatás megtörtént |
| **Korlátozott továbbítású adatkör** | gyermekvédelmi jelzés, fegyelmi ügy irata, egészségügyi adat, sajátos nevelési igény, szociális támogatás | a delegált hozzáférés keretében **külső szolgáltatóhoz nem továbbítható**; a hivatalos felületen továbbra is látható |
| **Más személyt is érintő adat** | pedagógusi üzenetváltás, csoportot érintő bejegyzés | csak szűkítve, a harmadik személyre vonatkozó rész elhagyásával, vagy nem delegálható |

A szülői és tanulói olvasási funkciókra a besorolás első vázlata elkészült (külön melléklet): húsz valós KRÉTA-végpontból tizenhárom tiszta alapadatkör, a többi részleges elhagyást igényel, egy pedig egyáltalán nem delegálható. A vázlatból két szabály rajzolódott ki. Egy: **ahol a válasz más természetes személy adatát is tartalmazza, az alapértelmezés a rész elhagyása, nem a funkció tiltása** — ehhez a rendeletnek mezőszintű besorolást kell lehetővé tennie, az üzemeltetőnek pedig mezőszintű szűrést kell tudnia. Kettő: **ahol a funkció teljes értéke más személyek adatából áll, a funkció nem delegálható.**

**A „korlátozott továbbítású adatkör” ennek a javaslatnak a saját szabályozási kategóriája**, nem a hatályos adatvédelmi jog terminusa. Teljes alakja: a delegált továbbítás szempontjából fokozott védelem alá sorolt adatkör. A besorolás nem az adat jogi minősítését változtatja meg, hanem azt mondja meg, mi mehet ki a delegált csatornán.

Ebből következik a legfontosabb pontosítás: a szabály **nem a szülő látási jogát korlátozza** — azt nem érinti. Azt korlátozza, hogy ez az adat a delegált csatornán automatikusan egy külső MI-szolgáltatóhoz kerüljön.

### M4.4 Mit szabályoz ez az előterjesztés, és mit hagy külön rétegre

Nem állítjuk, hogy ez az előterjesztés kimerítően rendezi, milyen oktatási adat kerülhet külső MI-szolgáltatóhoz. Ez önálló, tartalmi adatvédelmi kérdés, amely a javaslattól függetlenül is fennáll, és amelyre a válasz részben szakmai, nem jogalkotói.

Amit ez az előterjesztés vállal:

- **megnevezi a réteget**: a felhasználás szabályozása külön kérdés a hozzáférésétől, és nem hagyható a szolgáltatók belátására;
- **rögzíti az alapértelmezést**: a korlátozott továbbítású adatkör nem továbbítható, amíg külön szabály mást nem mond;
- **megadja a helyét**: a besorolás a kormányrendelet funkciókatalógusába kerül, tehát felülvizsgálható anélkül, hogy a törvényt kellene nyitni;
- **előírja a tájékoztatást**: bármi is a besorolás, a felhasználó a döntés pillanatában, érthetően megtudja, mi történik az adatával.

Amit **nem** vállal: az adatkörök tételes, mezőszintű besorolását, és annak eldöntését, hogy egy MI-szolgáltató mit tehet a kapott adattal a saját rendszerén belül. Mindkettő a törzsanyag 8. fejezetének nyitott kérdése.

---

## M5. Felelősségi modell

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

**A kiadó felel a nyilatkozatáért.** Ha a továbbítási nyilatkozat valótlan, az a nyilvántartásból való törlést vonja maga után, és minden hozzá tartozó felhatalmazás megszűnik. Ez a szankció teszi az M4.2 pontot érvényesíthetővé.

---

