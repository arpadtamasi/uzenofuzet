# AI-Ország: saját oktatási adat, saját eszközzel

## Előterjesztés az oktatási nyilvántartásokhoz való, felhatalmazáson alapuló szoftveres hozzáférésről

**2.0 változat — a szakmai észrevételek átvezetésével.** Az 1.0 változathoz képest a szöveg szétválasztja az érintett saját adatához való hozzáférést, a saját adatkörben végzett műveletet és a pedagógus intézményi jogosultságát; kockázatarányossá teszi a biztonsági szabályt; pótolja a bizalmi, biztonsági és felelősségi modellt; a hatásbecslést forrásokkal és érzékenységi sávval látja el.

---

## Vezetői összefoglaló

Aki ma a KRÉTA-ban vagy egy felsőoktatási tanulmányi rendszerben a hivatalos felületen adathoz hozzáfér, ugyanahhoz az adathoz az általa felhatalmazott szoftverrel is hozzáférhessen — a jelszava átadása nélkül, a hivatalos felületen láthatóan, és bármikor visszavonhatóan.

Ehhez három dolgot javaslunk:

1. **Új ágazati jogosultság** a köznevelési és a felsőoktatási törvényben, az érintett saját adatkörére és — külön, szigorúbb szabállyal — az intézményi feladatkörben gyakorolt jogosultságra.
2. **Nyilvános, dokumentált, verziózott programozói felület**, tesztkörnyezettel; ugyanaz a felület, amelyet a hivatalos alkalmazások ma is használnak.
3. **Kockázatarányos bizalmi keret**: a felhatalmazható szoftverek háromszintű nyilvántartása, ahol a jogosultság mértéke a bizalmi szinthez kötött.

### Mit nem állítunk

Ezt a listát azért tesszük az előterjesztés elejére, mert az 1.0 változat ellenérveinek többsége nem a javaslatot, hanem a javaslat túlfogalmazását támadta.

- **Nem állítjuk, hogy az érintettnek tulajdonjoga van a róla kezelt adatokon.** Az uniós adatvédelmi jog nem ismer adat-tulajdonjogot. A „saját oktatási adat” a címben köznyelvi fordulat, nem jogi minősítés.
- **Nem állítjuk, hogy a javasolt jogosultság a hatályos jogból levezethető.** A GDPR 20. cikke szerinti adathordozhatóság a közérdekű feladat végrehajtásához szükséges adatkezelésre — így az oktatási nyilvántartásokra — a 20. cikk (3) bekezdése alapján nem alkalmazandó. A 15. cikk szerinti hozzáférési jog egyszeri másolatra szól, nem folyamatos gépi hozzáférésre. Amit javaslunk, **új ágazati jogosultság**. Ezt vállaljuk, nem álcázzuk meglévő jog technikai megvalósításának.
- **Nem állítjuk, hogy az MI-rendelet vagy az adatrendelet kötelezné az üzemeltetőt felület nyitására.** Ezeket irányjelzőként hívjuk fel, nem jogalapként.
- **Nem javasoljuk, hogy ellenőrzés nélkül regisztrált szoftver írási műveletet végezhessen az oktatási nyilvántartásban.** Az 1.0 változat — a dinamikus kliensregisztráció és a teljes funkcióparitás egyidejű előírásával — ezt a látszatot keltette. A 6. fejezet ezt rendezi.
- **Nem javasoljuk, hogy a pedagógus saját elhatározásából szoftvernek engedhesse át a munkaköri jogosultságát.** A tanári oldalon a felhatalmazás az adatkezelő intézmény döntése, nem a pedagógusé.

---

## 1. Három külön kérdés — három külön szabály

A javaslat három, egymástól élesen elváló helyzetet érint. Az 1.0 változat ezeket egyetlen elvként vezette fel — „aki hozzáfér, ugyanazt tehesse a saját eszközével is” —, és ez volt a szöveg legsúlyosabb szerkezeti hibája: a legvédhetőbb esetre szabott indokolás a legkockázatosabb esetet is igazolni látszott. A 2.0 változat a három esetet végig külön kezeli, a normaszövegben is.

| | **A) Saját adat olvasása** | **B) Saját adatkörben műveletvégzés** | **C) Intézményi feladatkörben gyakorolt jogosultság** |
|---|---|---|---|
| Ki gyakorolja | tanuló, szülő, gondviselő, hallgató | tanuló, szülő, gondviselő, hallgató | pedagógus, oktató |
| Mire terjed ki | a rá, illetve a gyermekére vonatkozó adat lekérdezése | pl. igazolás beküldése, vizsgajelentkezés, üzenetküldés | más érintettek adatainak kezelése: jegy, mulasztás, értékelés, haladási napló |
| Kinek az érdekkörében | az érintett magáncélja | az érintett magáncélja | az intézmény közfeladata |
| Ki dönt a felhatalmazásról | az érintett egyedül | az érintett egyedül | az intézmény mint adatkezelő |
| Kockázat, ha elromlik | az érintett saját adata kerül rossz helyre | az érintett nevében jön létre hamis nyilatkozat | egy vagy több osztálynyi tanuló adata kerül ki, vagy hamis bejegyzés keletkezik a hivatalos nyilvántartásban |
| Szükséges bizalmi szint | 1. szint | 2. szint | 3. szint |
| Éles indulás | 2027. szeptember 1. | 2028. szeptember 1. | 2028. szeptember 1. |

Az **A)** eset a legerősebb: az érintett a saját adatát nézi, más jogát nem érinti, és a hozzáférés ma is megvan — csak kizárólag egyetlen, az üzemeltető által kiadott alkalmazáson át.

A **B)** eset már nyilatkozatot hoz létre az érintett nevében, ezért azonosított kiadó kell mögé, de továbbra is az érintett saját ügye.

A **C)** eset **nem az érintett joga**. A pedagógus nem a saját adatát kezeli, hanem tanulókét, az intézmény utasítására, az intézmény adatkezelői felelőssége mellett. Itt tehát nem „a pedagógus delegálja a jogosultságát”, hanem **az adatkezelő intézmény rendszeresít egy eszközt**, amelyet a pedagógus a saját munkamenetéhez köt. A normaszöveg ezt kifejezetten kimondja, hogy a konstrukció ne legyen félreolvasható.

---

## 2. A jogi helyzet pontosan

### 2.1 Amit a hatályos jog ad

- **GDPR 15. cikk** — hozzáférési jog. Egyszeri másolatra szól, nem folyamatos gépi hozzáférésre.
- **GDPR (63) preambulumbekezdés** — ahol lehetséges, az adatkezelő biztosítson távoli hozzáférést olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz. Ez **támogató érv** az A) esethez, de preambulumbekezdés: nem kötelező szabály, és nem ír elő programozói felületet.
- **GDPR 12. cikk (2) bekezdés** — az adatkezelő köteles elősegíteni az érintetti jogok gyakorlását.

### 2.2 Amit a hatályos jog nem ad

- **GDPR 20. cikk** — az adathordozhatóság a hozzájáruláson vagy szerződésen alapuló, automatizált adatkezelésre vonatkozik. A 20. cikk (3) bekezdése a közérdekű vagy közhatalmi feladat végrehajtása keretében végzett adatkezelést kifejezetten kiveszi. Az oktatási nyilvántartás ilyen. **A 20. cikk tehát itt nem hívható fel.**
- **GDPR 20. cikk (4) bekezdés** — az adathordozhatóság nem sértheti mások jogait és szabadságait. Ez a korlát a mi javaslatunkra is irányadó elvi mérce; a vegyes adatkörök kezelésének kiindulópontja (lásd 6.5).
- **Nkt. és Nftv.** — a 2011. évi CXC. és CCIV. törvény rendezi az oktatási adatkezelést és nyilvántartásokat, de egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához az általa választott szoftverrel hozzáférhessen.

Következtetés: **a javasolt jogosultság új.** Nem a GDPR technikai kivetülése. Ágazati jogalkotás kell hozzá, ahogy az alábbi precedensben is.

### 2.3 A legjobb precedens: az európai egészségügyi adattér

Az **(EU) 2025/327 rendelet** (európai egészségügyi adattér, EHDS) pontosan azt a konstrukciót valósítja meg, amelyet itt javasolunk: **ágazati uniós jogszabály hoz létre elektronikus hozzáférési jogot olyan adatkörben, ahol maga az adatkezelés közfeladaton alapul**, és az érintett maga adhat hozzáférést az általa választott szereplőnek. A rendelet 3. cikke az érintett elektronikus egészségügyi adataihoz való azonnali, ingyenes elektronikus hozzáférést és letöltést biztosítja. A rendelet 2025. március 25-én lépett hatályba, alkalmazása jellemzően 2027. március 26-tól kezdődik. [ELLENŐRIZENDŐ: a 3. cikk bekezdéseinek pontos hivatkozása a Hivatalos Lap szövege alapján]

Ez az analógia két okból erős: azonos a jogi szerkezet (közfeladaton alapuló nyilvántartás + ágazati hozzáférési jog), és azonos az érzékenységi szint (egészségügyi adat, illetve kiskorúak oktatási adata).

### 2.4 Az adatrendelet — helyesbítés az 1.0 változathoz képest

Az 1.0 változat az **(EU) 2023/2854 rendeletet** (adatrendelet) a jogfejlődés láncszemeként mutatta be. Ez pontatlan volt. A rendelet II. fejezete az **összekapcsolt termékek és a kapcsolódó szolgáltatások** használata során keletkező adatokra vonatkozik; tipikus tárgya a dologi, érzékelőalapú termékadat. A KRÉTA vagy a Neptun tanulmányi nyilvántartása nem ilyen. Az adatrendeletet ezért a 2.0 változat **jogpolitikai irányjelzőként** hívja fel — az uniós jogalkotó szemléletét mutatja, amely szerint a felhasználó hozzáférhet a használat során keletkező adathoz és átadhatja azt választott harmadik félnek —, **jogalapként nem**.

### 2.5 Az MI-rendelet — szűkített következtetés

Az **(EU) 2024/1689 rendelet** 4. cikke 2025. február 2-tól előírja, hogy az MI-rendszereket alkalmazó szervezetek gondoskodjanak munkatársaik MI-jártasságáról. Ebből **nem következik**, hogy bármely oktatási rendszernek programozói felületet kellene nyitnia; az 1.0 változat itt többet akart bizonyítani, mint amennyi következik. Egyetlen, szűk következtetést vonunk le: ha az iskoláknak jogszabályi kötelességük felkészülten megszervezni az MI-használatot, akkor ehhez **jogszerű technikai csatornának is léteznie kell** — ma pedig nem létezik.

### 2.6 A PSD2-analógia — vállalva mindkét élét

A pénzügyi szektor analógiája a javaslat mellett és ellen is felhozható, ezért végigvezetjük.

**Mellette szól:** az (EU) 2015/2366 irányelv (PSD2) és az (EU) 2018/389 felhatalmazáson alapuló rendelet 2019. szeptember 14-től **dedikált, biztonságos felületet**, nyilvános technikai specifikációt és tesztelési lehetőséget követel meg. A brit versenyhatóság (CMA) 2018-tól egységes nyílt banki API-szabványt tett kötelezővé a legnagyobb bankoknak. Az az állítás tehát, hogy egy monopolizált ügyfélfelület jogszabállyal megnyitható, és ettől a szektor nem omlik össze, empirikusan igazolt.

**Ellene szól:** a PSD2 világában a harmadik fél szolgáltatók **engedélyezett, felügyelt szereplők**, és a rendszer minősített tanúsítványokra épít. Aki ismeri az Open Bankinget, joggal mondhatja, hogy az 1.0 változat „egyedi engedélyezési eljárás nélküli” kliensregisztrációja éppen a példa legfontosabb elemét hagyta ki: a **bizalmi keretet**.

Ezt az ellenérvet elfogadjuk. A 6. fejezet pótolja a hiányt, és a bizalmi szintet ahhoz köti, amit a kliens tehet.

---

## 3. Mi a probléma?

### 3.1 Dokumentált tények

**Az adatot ma csak a hivatalos alkalmazás éri el.** A KRÉTA a szülőnek, a tanulónak és a pedagógusnak külön hivatalos mobilalkalmazást kínál. Ezekben órarend, számonkérések, házi feladatok, jegyek és mulasztások jelennek meg; a pedagógus naplózási és értékelési műveleteket is végezhet. Az alkalmazások mögött tehát működő programozói felület áll — amelyet azonban kizárólag a hivatalos alkalmazás használhat: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével klienst regisztráljon, és a felület dokumentációja nem nyilvános.

**Az üzemeltető a nem hivatalos kliens használatát kifejezetten rendellenesnek minősíti.** A KRÉTA saját tudásbázisa szerint rendellenes működésnek minősülhet, ha ugyanazt a profilt nem hivatalos alkalmazás használja. [ELLENŐRIZENDŐ: a tudásbázis-cikk pontos címe, URL-je és lekérdezési dátuma] Ez azért fontos, mert megmutatja: a zártság nem műszaki mellékhatás, hanem szándékolt üzemeltetői álláspont — tehát jogszabály nélkül nem fog megváltozni.

**A felsőoktatásban a hivatalos mobilcsatorna megszűnt.** A Neptun hivatalos mobilalkalmazása 2023. október 19-én, a kétfaktoros belépés bevezetésekor megszűnt. Egyes egyetemek saját alkalmazásai — például a Magyar Agrár- és Élettudományi Egyetem MyMATE és a Debreceni Egyetem UD Studyversity alkalmazása — továbbra is megjelenítik a hallgatók Neptun-adatait. A felület tehát létezik, és intézményi alkalmazások használják is; a hallgató és az oktató saját eszköze viszont nem kapcsolódhat hozzá.

### 3.2 Az érintettek

| Érintett csoport | Létszám | Forrás |
|---|---|---|
| nappali rendszerű általános iskolai tanulók | kb. 710 000 fő | KSH, 2024/2025, előzetes |
| köznevelési és szakképzési főállású pedagógusok, oktatók | kb. 148 000 fő | KSH, 2024/2025, előzetes |
| felsőoktatási hallgatók | kb. 351 000 fő | KSH, 2025/2026, előzetes |
| felsőoktatási oktatók | kb. 27 000 fő | KSH, 2023/2024 |
| szülők, gondviselők | nagyságrendileg a tanulói létszámmal arányos | levezetés |

Rajtuk kívül érintettek a köznevelési és felsőoktatási intézmények mint adatkezelők és fenntartóik, a rendszerüzemeltetők (az eKRÉTA Zrt. és a tanulmányi rendszerek szállítói, köztük az SDA Informatika Zrt.), valamint a hazai fejlesztők.

### 3.3 A szülői oldalon a hiány megkerülő megoldásokat szül

A szülő egy mondatban szeretné megkérdezni, mi vár a gyermekére a héten, melyik tantárgyból romlottak a jegyei, mikor kell igazolást beadni. Hivatalos út nélkül erre csak kockázatos módok vannak.

Konkrét példa az **Üzenőfüzet** nyílt forráskódú szolgáltatás, amelyet az előterjesztés készítője üzemeltet, és amely a szülők MI-asszisztensét köti össze a KRÉTA-val. Ehhez ma kénytelen:

- a szülőtől átvenni a KRÉTA-jelszót, és a nevében belépni;
- a hivatalos tanulói mobilalkalmazás kliensazonosítóját és nem dokumentált végpontjait használni, így bármely rendszerfrissítés után működésképtelenné válhat;
- a belépési tokeneket saját maga tárolni és frissen tartani;
- a KRÉTA-hívásokat lakossági hálózaton keresztül továbbítani, mert a rendszer az adatközponti hálózatokból érkező kéréseket elutasítja;
- saját tájékoztatóban kezelni, hogy a lekért adatok — köztük kiskorúak adatai — a szülő által választott, akár az Európai Unión kívüli MI-szolgáltatóhoz kerülnek.

A szülő a kiadott hozzáférést a KRÉTA-ban nem látja és ott nem tudja visszavonni. **Az Üzenőfüzet célja, hogy ez a közvetítő szerep ebben a formában feleslegessé váljon.** Az előterjesztő érdekeltségét itt jelezzük: a javaslat elfogadása a saját szolgáltatásunk jelenlegi működési modelljét szünteti meg.

### 3.4 A tanári oldalon a hiány szabálytalan használatot szül

A pedagógusok adminisztratív terhe mérhető: az OECD TALIS 2024 felmérése szerint a magyar főállású pedagógusok heti **3,2 órát** fordítanak általános adminisztratív munkára (OECD-átlag: 3 óra), és ez az érték 2018 óta nem csökkent. A stressz leggyakoribb forrásaként a megkérdezettek **55%-a** a túl sok adminisztrációt jelölte meg.

Hivatalos kapcsolódás hiányában a pedagógus egyetlen módon tud MI-t használni ehhez a munkához: a tanulói adatokat kézzel bemásolja a saját, magáncélú MI-fiókjába. Egy másolással egy vagy több osztály adatai mozognak, az iskola nevében kezelt adatokként, adatfeldolgozói szerződés nélkül. Az adatkezelő iskola ezt nem látja, nem tudja korlátozni, és semmilyen naplóban nem jelenik meg.

Ez a leírás **feltételezést is tartalmaz**: arról, hogy ez a gyakorlat milyen gyakori, nincs hazai mérés. Éppen ez a kár egyik formája — a jelenség szerkezeti okból mérhetetlen. A javaslat egyik hozadéka, hogy a szabályos út bevezetésétől kezdve a felhatalmazások naplózottak és megszámlálhatók lesznek.

---

## 4. Hogyan jutottunk ide?

**2011 — az oktatási nyilvántartások jogi kerete.** Az Nkt. és az Nftv. rendezi a köznevelési és felsőoktatási adatkezelést. Egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához gépi úton, általa választott szoftverrel hozzáférhessen.

**2012–2015 — a delegált hozzáférés szabványai.** Megjelenik az OAuth 2.0 engedélyezési keretrendszer (RFC 6749, 2012), majd a nyilvános kliensek védelmét szolgáló PKCE (RFC 7636, 2015), a dinamikus kliensregisztráció (RFC 7591, 2015) és a tokenvisszavonás (RFC 7009, 2013). A jelszóátadás nélküli, visszavonható, harmadik fél általi hozzáférés ettől kezdve iparági alapmegoldás.

**2015–2019 — a pénzügyi szektor megoldja ugyanezt a problémát.** A PSD2 és az (EU) 2018/389 rendelet dedikált, biztonságos felületet követel meg, nyilvános specifikációval és tesztkörnyezettel; a harmadik fél szolgáltatók engedélyezett szereplők (lásd 2.6).

**2016–2018 — a GDPR.** Alkalmazandó 2018. május 25-től. Bevezeti az adathordozhatóságot (20. cikk), de a közérdekű feladat keretében végzett adatkezelést kiveszi alóla.

**2019 körül — megjelennek a KRÉTA hivatalos mobilalkalmazásai.** A KRÉTA-adatok mobil elérése kizárólag a saját kliensein keresztül lehetséges. [ELLENŐRIZENDŐ: az egyes alkalmazások megjelenési éve]

**2023 — a Neptun-app megszűnése.** 2023. október 19-én megszűnik a Neptun hivatalos mobilalkalmazása. Ugyanebben az évben születik az adatrendelet, amely — a 2.4 pontban írt korlátokkal — a felhasználói adathozzáférés irányát jelzi.

**2024–2025 — a szabványos csatlakozás és a biztonsági alapvetés.** 2024 novemberében megjelenik a Model Context Protocol, amely OAuth-alapú delegált hozzáférésre építve ad szabványos módot MI-asszisztensek külső rendszerekhez kapcsolására. 2025 januárjában megjelenik az **RFC 9700** (BCP 240), az OAuth 2.0 biztonsági legjobb gyakorlata, amely kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a jelszó alapú folyamatot, és kezeli az összekeverési (mix-up) támadásokat. Az MI-rendelet 4. cikke alkalmazandóvá válik.

**2025 — az európai egészségügyi adattér.** Az (EU) 2025/327 rendelet hatályba lép: ágazati jogszabály hoz létre elektronikus hozzáférési jogot közfeladaton alapuló, különösen érzékeny nyilvántartásban (lásd 2.3).

Az oktatási rendszerek felülete mindeközben változatlan maradt.

---

## 5. Milyen kárt okoz a jelenlegi helyzet?

Ebben a fejezetben külön jelöljük, mi **dokumentált tény**, mi **levezetett becslés**, és mi **feltételezés**. Az 1.0 változat ezeket nem választotta szét, és emiatt az egész fejezet gyengébbnek látszott, mint amilyen.

### 5.1 Elvesztegetett pedagógusi kapacitás — levezetett becslés

A becslés képlete:

> éves adminisztrációs munkaidő = pedagóguslétszám × heti adminisztrációs óraszám × tanítási hetek száma

Bemenetek: 148 000 fő (KSH, 2024/2025, előzetes), 3,2 óra/hét (OECD TALIS 2024, Magyarország), 36 tanítási hét. Ez évente **mintegy 17,0 millió pedagógusi munkaóra** általános adminisztratív munkával.

Arra, hogy ebből mennyit vált ki az MI-támogatás, nincs hazai mérés. Ezért **egyetlen szám helyett sávot adunk**, és a feltételezést nyíltan feltételezésként kezeljük:

| Kiváltott arány | Felszabaduló óra/év | Bérértéken | Teljes munkaidős álláshelyre átszámítva |
|---|---|---|---|
| 5% (óvatos) | kb. 0,85 millió óra | kb. 4,7 Mrd Ft | kb. 500 álláshely |
| 10% (közepes) | kb. 1,70 millió óra | kb. 9,3 Mrd Ft | kb. 990 álláshely |
| 20% (kedvező) | kb. 3,41 millió óra | kb. 18,6 Mrd Ft | kb. 1980 álláshely |

A bérérték számítási alapja: 840 753 Ft bruttó havi átlagkereset (KSH, pedagógusok, 2025), 13% szociális hozzájárulási adóval növelve, 174 havi munkaórával osztva — kb. 5 460 Ft teljes munkáltatói óraköltség.

**Két korlátozó megjegyzés, amelyet az 1.0 változat elhallgatott.**

Egy: ez **nem költségvetési megtakarítás**. A pedagógusok létszáma nem csökken, a bérük nem kevesebb lesz. Amiről szó van, az **visszanyert szakmai kapacitás**; a forintérték csak a nagyságrend érzékeltetésére szolgál, és költségvetési bevételként nem tervezhető.

Kettő: a TALIS „általános adminisztratív munka” kategóriája nem azonos a KRÉTA-adminisztrációval, és a felmérés az alsó középfokú pedagógusokra reprezentatív. Az egész köznevelési létszámra vetítés ezért **nagyságrendi**, nem pontos becslés. A pontos értéket a javaslat szerinti nyilvános hatásmérésnek kell megadnia.

A számítás **költségoldala** — az üzemeltetői ráfordítás, a nyilvántartás működtetése, az intézményi felkészítés — még nem készült el. Ezt a 12. fejezet nyitott kérdésként rögzíti.

### 5.2 Biztonsági és adatvédelmi kockázat — feltételezés, szerkezeti okból mérhetetlen

Hogy hány szülő adta át a KRÉTA-jelszavát harmadik félnek, és hány pedagógus másol tanulói adatot magáncélú MI-fiókba, arról nincs adat. Ezt nem tényként állítjuk, hanem a probléma természeteként: **az adatkezelő iskola sem tudja**, mert a jelenség nem hagy nyomot a rendszerben. Egyetlen pedagógus egyetlen másolással egy teljes osztálynyi tanuló adatát viheti ki szerződés nélkül. [ELLENŐRIZENDŐ: átlagos osztálylétszám, KSH]

A javaslat ezen a ponton önmagában is hoz eredményt: bevezetése után minden felhatalmazás naplózott, megtekinthető és megszámlálható lesz — akkor is, ha kiderül, hogy a jelenség a feltételezettnél ritkább.

### 5.3 Esélyegyenlőségi kár — feltételezés

Az MI-asszisztens feltehetően azoknak a szülőknek segít a legtöbbet, akiknek az iskolai rendszerek kezelése ma nehézséget okoz: kevésbé gyakorlott digitális felhasználóknak, több gyermeket nevelő, időhiányos családoknak, nem magyar anyanyelvű szülőknek. Ha ez igaz, akkor hivatalos út hiányában éppen ők maradnak ki, vagy ők vállalják a legnagyobb kockázatot. **Ezt az állítást hazai adat nem támasztja alá**; a javaslat szerinti hatásmérés egyik kérdése éppen ez legyen.

### 5.4 Innovációs kár — részben dokumentált

Hazai fejlesztő ma nem tud stabil, jogszerű terméket építeni az oktatási rendszerekre, mert nincs dokumentált felület, és az üzemeltető a nem hivatalos klienst rendellenesnek minősíti (3.1). A meglévő megoldások egy rendszerfrissítéssel megszűnhetnek. Hogy ez konkrétan hány vállalkozást tartott vissza, arról nincs felmérés; a mechanizmus azonban a 3.3 pontban leírt működési kényszerekből közvetlenül látszik.

---

## 6. Bizalmi és biztonsági modell

Ez a fejezet az 1.0 változatból hiányzott, és ez volt a legnagyobb rés. Az alábbi keret nélkül a javaslat azt kérné, hogy kiskorúak adatait és tanári írási jogosultságokat tegyenek elérhetővé bárki által, ellenőrzés nélkül regisztrált szoftvernek.

### 6.1 Kliensosztályok

**1. bizalmi szint — bejelentett kliens.**
*Mit tehet:* kizárólag olvasás, kizárólag az érintett saját, illetve a szülő esetében a gyermekére vonatkozó adatkörében (A) eset).
*Regisztráció:* önkiszolgáló, dinamikus kliensregisztrációval (RFC 7591), egyedi engedélyezési eljárás nélkül.
*Feltétel:* működő kapcsolattartási cím, közzétett adatkezelési tájékoztató elérhetősége, a kliens nyilvános megnevezése.
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

### 6.2 Megkülönböztetésmentesség — a szabály helyes megfogalmazása

Az 1.0 változat azt írta, hogy „biztonsági célú korlátozás kizárólag minden szoftverre egyformán alkalmazható”. Ez tarthatatlan: egy böngészőben futó nyilvános kliens, egy mobilalkalmazás és egy szerveroldali bizalmas kliens kockázata nem azonos, és az RFC 9700 éppen ezekre az eltérésekre ad külön ellenintézkedéseket. A szabály **valódi célja** nem az azonos bánásmód volt, hanem az, hogy az üzemeltető ne tudja biztonsági indokra hivatkozva elsorvasztani a harmadik fél klienseit. Ezt a célt így fogalmazzuk újra:

1. Az azonos bizalmi szintbe tartozó klienseket **azonos feltételekkel** kell kiszolgálni.
2. Az üzemeltető hivatalos alkalmazása **nem kaphat olyan képességet vagy szolgáltatásminőséget**, amelyet azonos bizalmi szintű felhatalmazott kliens nem kaphat meg. A hivatalos alkalmazást e célból a megfelelő bizalmi szintbe be kell sorolni.
3. Kockázatalapú korlátozás **megengedett**, ha előre közzétett, objektív kritériumon alapul, és minden azonos helyzetű kliensre vonatkozik.
4. Egyedi kliens felfüggesztése **kizárólag** bizonyítékkal alátámasztott biztonsági okból lehetséges, írásbeli indokolással, jogorvoslati lehetőséggel, és a felfüggesztések számának megjelenítésével az éves nyilvános jelentésben.

### 6.3 Kompromittált vagy visszaélő kliens

- A nyilvántartást vezető szerv a kliens regisztrációját visszavonhatja; ekkor az adott klienshez tartozó **összes felhatalmazás azonnal hatályát veszti**.
- Az üzemeltető köteles értesíteni azokat a felhasználókat, akiknek felhatalmazása visszavont kliensre vonatkozott.
- A kiadó a tudomásszerzéstől számított 72 órán belül köteles bejelenteni a klienst érintő biztonsági incidenst.

### 6.4 Adathalászat elleni alapvédelem

- A jóváhagyó képernyő **a hivatalos felületen** jelenik meg.
- A kliens megnevezését és kiadóját a hivatalos felület **a nyilvántartásból veszi**; a kliens ezt nem írhatja felül.
- A képernyő megjeleníti a **bizalmi szintet**, a kért jogosultságokat, a felhasználót, és — szülői felhatalmazásnál — kifejezetten megnevezi a gyermeket, akinek adataira a felhatalmazás vonatkozik.
- A felhatalmazás **határozott, legfeljebb tizenkét hónapos** időtartamra szól, majd megújítandó.

### 6.5 Vegyes adatkörök

Egy tanuló nyilvántartási rekordja nem feltétlenül áll kizárólag a tanuló adataiból: tartalmazhat pedagógusi kommunikációt, más tanulót is érintő bejegyzést, fegyelmi vagy gyermekvédelmi kontextust. A GDPR maga is kimondja, hogy az érintetti adattovábbítási jog nem sértheti mások jogait és szabadságait.

Ezt a javaslat **nem elvi kijelentéssel, hanem tételes besorolással** kezeli: a funkciókatalógus (8.1) minden funkciónál megadja, hogy az érintett saját adatkörébe tartozik-e. Ahol a funkció más személy adatát is elérhetővé tenné, ott a funkció vagy nem delegálható, vagy csak szűkített, a harmadik személyre vonatkozó részt elhagyó formában. A besorolás vitatható és felülvizsgálandó — ezért kerül kormányrendeleti mellékletbe, nem törvénybe.

### 6.6 Amit ez a keret nem old meg

- Nem akadályozza meg, hogy a felhasználó rossz döntést hozzon és megbízhatatlan szoftvernek adjon felhatalmazást. Csökkenti a kárt, nem szünteti meg.
- Nem szabályozza, mi történik az adattal a klienshez érkezése után, azon túl, hogy a kliens kiadója a saját adatkezeléséért felel (7. fejezet).
- Nem dönti el, hogy kiskorú adata kikerülhet-e Unión kívüli MI-szolgáltatóhoz. Ez a kérdés ma is fennáll, a javaslattól függetlenül; a javaslat annyit tesz hozzá, hogy **láthatóvá és visszavonhatóvá** teszi az adatáramlást.

---

## 7. Felelősségi modell

| Szereplő | A) és B) eset | C) eset |
|---|---|---|
| Rendszerüzemeltető (eKRÉTA Zrt., tanulmányi rendszerek szállítói) | adatfeldolgozó az intézmény megbízásából; felel a felületért, a hitelesítésért és a felhatalmazás-kezelésért | ugyanaz |
| Köznevelési vagy felsőoktatási intézmény | adatkezelő | adatkezelő; dönt arról, mely szoftver kaphat felhatalmazást |
| A felhatalmazott szoftver kiadója | **önálló adatkezelő** a felhasználó megbízásából végzett saját adatkezeléséért | **az intézmény adatfeldolgozója**, a GDPR 28. cikke szerinti szerződéssel |
| Érintett (tanuló, szülő, hallgató) | a felhatalmazás jogosultja | — |
| Pedagógus, oktató | — | az intézmény utasítása szerint jár el; a felhatalmazás nem személyes joga |

Két rendelkezést ehhez ki kell mondani a normaszövegben:

**A pedagógusi felhatalmazás nem személyes jog.** A pedagógus nem „kiadja” a munkaköri jogosultságát egy szoftvernek; az intézmény rendszeresít eszközt, amelyet a pedagógus a saját munkamenetéhez köt. Ha a pedagógus jogviszonya megszűnik vagy jogosultsága változik, a felhatalmazás automatikusan követi.

**Az üzemeltető felelőssége a felületig terjed.** Azért, amit a felhatalmazott szoftver az adattal a kiadás után tesz, az üzemeltető nem felel. Ennek kimondása nélkül az üzemeltetőnek közvetlen érdeke fűződik ahhoz, hogy a nyitást ellehetetlenítse — a gyakorlatban ez a rendelkezés dönti el, hogy a jogszabály működni fog-e.

---

## 8. Mit szeretnénk elérni?

### 8.1 Cél 1: aki hozzáfér, az a választott eszközével is hozzáférhessen — meghatározott funkciókörben

A hozzáférés **körét** nem kell újraszabályozni: azt a rendszerek meglévő jogosultságkezelése eldönti. Amit szabályozni kell, az a **csatorna**.

Az 1.0 változat „a hivatalos alkalmazásokban elérhető funkciók 100%-át” ígérte. Ezt visszavonjuk, két okból: a felületi és a programozói funkciók nem képezhetők le mindig egy az egyben, és egy jövőbeli, különösen érzékeny új funkció automatikus megnyílása nem vállalható. Helyette **funkciókatalógust** javaslunk, a PSD2 mintájára, amely szintén meghatározott szolgáltatásokhoz szabályoz hozzáférést.

A kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és mindegyikhez hozzárendeli a szükséges bizalmi szintet és az adatkör besorolását (6.5). Új hivatalos funkció megjelenésekor az üzemeltető 90 napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

*Mérhető célok:* a katalógus 2027. szeptember 1-jén lefedi a hivatalos alkalmazások **olvasási** funkcióinak 100%-át; 2028. szeptember 1-jén tartalmazza a **műveleti** funkciók besorolását, és jelszóátadásra egyetlen katalógusbeli funkcióhoz sincs szükség.

### 8.2 Cél 2: a felület legyen nyilvános, stabil és megkülönböztetésmentes

A dokumentáció legyen nyilvános, verziózott, tesztkörnyezettel. A nyilvánosság a **specifikációra** vonatkozik; az adathoz való hozzáférés hitelesített és a felhasználó jogosultságához kötött marad. A megkülönböztetésmentesség tartalmát a 6.2 pont adja.

*Mérhető célok:* a dokumentáció és a szintetikus adatokat tartalmazó tesztkörnyezet 2027. június 30-ig publikus; a visszafelé nem kompatibilis változásokat legalább 90 nappal előre bejelentik.

*Nemzetközi példa:* az amerikai Ed-Fi Alliance nyílt adatszabványa és az 1EdTech OneRoster-szabványa a közoktatási nyilvántartó rendszerek és harmadik fél alkalmazások közötti adatcserére; felsőoktatásban az uniós Erasmus Without Paper hálózat.

### 8.3 Cél 3: a pedagógusok MI-használata legyen jogszerűen megszervezhető

A tanári oldalon a delegált hozzáférés **az intézmény eszköze**. Hogy a pedagógus milyen MI-t használhat tanulói adatokkal, azt továbbra is a GDPR és az adatkezelő szabályai határozzák meg — de ehhez most először lesz technikai alap. Hogy az eszköz állami fejlesztésű, központilag beszerzett vagy fenntartói szerződéssel biztosított, a javaslat szempontjából közömbös: mindegyik ugyanazon a nyilvános felületen, a 3. bizalmi szinten kapcsolódik.

*Mérhető cél:* 2028. szeptember 1-jéig minden KRÉTA-t használó intézményben elérhető a pedagógusi felhatalmazások intézményi szintű listázása, engedélyezése és visszavonása.

### 8.4 Cél 4: látható és szabályozható hozzáférés

*Mérhető célok:* a felhatalmazások 100%-a megtekinthető és visszavonható a hivatalos felületen; 2029-től évente nyilvános jelentés a regisztrált kliensekről bizalmi szintenként, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

---

## 9. Mi lenne a várható haszon?

**Szülők és gondviselők.** Rövid táv (2027–2028): jelszóátadás nélkül, a KRÉTA-ban látható és visszavonható módon kapcsolhatják a választott asszisztensüket a gyermekük iskolai adataihoz. Középtáv (2028–2030): a kevésbé gyakorlott digitális felhasználók és a nem magyar anyanyelvű családok is könnyebben követik gyermekük iskolai ügyeit — ez az 5.3 pont szerint feltételezés, amelyet a hatásmérésnek igazolnia kell.

**Tanulók.** Rövid táv: a saját órarendjüket, feladataikat és határidőiket az általuk használt eszközökben kezelhetik. Középtáv: tanulástámogató alkalmazások építhetnek naprakész iskolai adatokra.

**Pedagógusok.** Rövid táv (2028-tól): az intézmény vagy a fenntartó által engedélyezett eszköz szabályosan kapcsolódhat; a kézi másolás helyére ellenőrizhető folyamat lép, és a pedagógus nem viseli személyesen a szabálytalan használat kockázatát. Középtáv: az adminisztrációs idő egy része kiváltható — szöveges értékelések megfogalmazása, mulasztások és lemaradások követése, szülői kommunikáció, időszaki összesítések —, miközben a rögzítés és a szakmai döntés a pedagógusnál marad.

**Intézmények és fenntartók.** Rövid táv: először látják, milyen szoftverek férnek hozzá az általuk kezelt adatokhoz, és korlátozhatják azokat. Középtáv: az MI-eszközök beszerzése szállítófüggetlenné válik.

**Hallgatók és oktatók.** Középtáv (2028-tól): a tanulmányi rendszerek adatai — órarend, vizsgák, határidők — intézménytől függetlenül, egységes módon kezelhetők.

**Hazai fejlesztők.** Középtáv: stabil, dokumentált felületre építhetnek. Hosszú táv (2030-tól): a megoldások a hasonló nemzetközi szabványok mentén exportálhatók.

**Rendszerüzemeltetők és az állam.** Rövid táv: a meglévő felület és a már OAuth-alapú belépési rendszer miatt a bevezetés a kliensregisztráció megnyitásából, egy felhatalmazáskezelő felületből, a nyilvántartás felállításából és a dokumentáció közzétételéből áll. A megkerülő megoldások okozta nem tervezett forgalom szabályozott, azonosítható forgalommá válik, és az üzemeltető felelőssége a 7. fejezet szerint egyértelművé válik. Középtáv: a nyilvános hatásmérés alapján az oktatási digitalizáció eredménye mérhető.

---

## 10. Pontosan milyen változtatást javaslunk?

### I. A nemzeti köznevelésről szóló 2011. évi CXC. törvény kiegészítése

*(javasolt elfogadás: 2026. december 31.; a szakaszszámozás a kodifikáció során állapítandó meg)*

**„A) § — Az érintett saját adatkörében adott felhatalmazás**

(1) A köznevelési intézmény elektronikus naplóját és az e törvény szerinti elektronikus nyilvántartásokat működtető informatikai rendszer üzemeltetője (a továbbiakban: üzemeltető) biztosítja, hogy a tanuló, a szülő, valamint az a felhasználó, aki a hivatalos elektronikus felületen saját, illetve gyermeke személyes adataihoz fér hozzá, ezeket az adatokat az általa felhatalmazott szoftver útján is lekérdezhesse, továbbá a kormányrendeletben meghatározott funkciókatalógus szerinti műveleteket elvégezhesse.

(2) Az (1) bekezdés szerinti felhatalmazás
a) a felhasználó jelszavának vagy más hitelesítő adatának átadása nélkül jön létre,
b) legfeljebb a felhasználónak a hivatalos elektronikus felületen gyakorolható jogosultságai körére terjed ki, amelyet a felhasználó szűkíthet,
c) határozott, legfeljebb tizenkét hónapos időtartamra szól,
d) a hivatalos elektronikus felületen bármikor megtekinthető és visszavonható.

(3) Ha a felhasználó jogosultsága olyan adatra is kiterjed, amely más természetes személy személyes adata, a felhatalmazás erre az adatkörre csak annyiban terjed ki, amennyiben a funkciókatalógus az adott funkciót erre kifejezetten feljogosítja.

(4) A felhatalmazás megadására szolgáló felület a hivatalos elektronikus felület része; azon a felhatalmazással érintett szoftver megnevezése, kiadója és bizalmi szintje a nyilvántartás adatai alapján jelenik meg.

**B) § — Az intézményi feladatkörben gyakorolt jogosultság**

(1) A pedagógus és más, intézményi feladatköréből fakadó jogosultsággal rendelkező felhasználó e jogosultsága körében kizárólag olyan szoftvert használhat, amelyet az adatkezelő köznevelési intézmény vagy annak fenntartója engedélyezett.

(2) Az engedélyezés feltétele, hogy a szoftver kiadója az intézménnyel vagy a fenntartóval az (EU) 2016/679 rendelet 28. cikke szerinti adatfeldolgozói szerződést kössön, és a szoftver a C) § szerinti nyilvántartásban a legmagasabb bizalmi szinten szerepeljen.

(3) A felhatalmazás a felhasználó jogosultságát követi: annak megszűnésével megszűnik, módosulásával módosul.

(4) Az intézmény a feladatkörében gyakorolt jogosultságokhoz kapcsolódó felhatalmazásokat intézményi szinten megtekintheti, korlátozhatja és visszavonhatja.

(5) E § nem hoz létre a felhasználót önállóan megillető jogosultságot arra, hogy az intézményi feladatköréből fakadó jogosultságát szoftver részére átengedje.

**C) § — A programozói felület és a nyilvántartás**

(1) Az üzemeltető a funkciókatalógus szerinti funkciókat lefedő programozói felület leírását nyilvánosan közzéteszi, a felületet verziókövetéssel működteti, a visszafelé nem kompatibilis változtatásokat legalább kilencven nappal előre közzéteszi, és szintetikus adatokat tartalmazó tesztkörnyezetet biztosít.

(2) Az üzemeltető az azonos bizalmi szintbe tartozó felhatalmazott szoftvereket azonos feltételekkel szolgálja ki. Az üzemeltető hivatalos alkalmazása nem rendelkezhet olyan képességgel vagy szolgáltatásminőséggel, amely azonos bizalmi szintű felhatalmazott szoftver számára nem érhető el.

(3) Biztonsági célú korlátozás akkor alkalmazható, ha előre közzétett, objektív feltételen alapul, és az azonos helyzetű valamennyi szoftverre kiterjed. Egyedi szoftver hozzáférése kizárólag bizonyítékkal alátámasztott biztonsági okból, írásbeli indokolással függeszthető fel; a felfüggesztéssel szemben jogorvoslatnak van helye.

(4) A felhatalmazható szoftverekről a Kormány által rendeletben kijelölt szerv nyilvántartást vezet, amely a szoftvereket bizalmi szint szerint sorolja be. A nyilvántartásból való törlés a szoftverhez tartozó valamennyi felhatalmazást megszünteti; erről az üzemeltető az érintett felhasználókat értesíti.

(5) Az üzemeltető nem felel azért az adatkezelésért, amelyet a felhatalmazott szoftver kiadója az adat átadását követően, saját adatkezelőként végez.”

**Felhatalmazó rendelkezés:**

„Felhatalmazást kap a Kormány, hogy az A)–C) § szerinti felhatalmazás, funkciókatalógus, programozói felület és nyilvántartás műszaki és eljárási követelményeit, valamint a nyilvántartást vezető szervet rendeletben állapítsa meg.”

### II. A nemzeti felsőoktatásról szóló 2011. évi CCIV. törvény kiegészítése

*(javasolt elfogadás: 2026. december 31.)*

Az Nftv. adatkezelési rendelkezéseit az I. pont szerinti szöveggel azonos tartalmú új szakaszokkal javasoljuk kiegészíteni, a következő eltérésekkel: a szabály a felsőoktatási intézmény tanulmányi rendszerére vonatkozik; az A) § szerinti jogosultság a hallgatót illeti meg a saját adatkörében; a B) § szerinti engedélyezési jog a felsőoktatási intézményt illeti meg, és az oktatóra vonatkozik.

### III. Kormányrendelet a delegált hozzáférés műszaki és eljárási követelményeiről

*(javasolt kihirdetés: 2027. március 31.)*

Javasoljuk, hogy a rendelet legalább a következőket írja elő.

**Hitelesítés és felhatalmazás.** A felhatalmazás az OAuth 2.0 engedélyezési keretrendszer (RFC 6749) szerint, kötelezően PKCE-vel (RFC 7636), az RFC 9700 (BCP 240) biztonsági ajánlásaival összhangban valósul meg; implicit és jelszó alapú folyamat nem alkalmazható. Az engedélyező szerver metaadatait az RFC 8414 szerint teszi közzé.

**Bizalmi szintek és kliensregisztráció.**
- *1. szint:* önkiszolgáló, dinamikus kliensregisztráció (RFC 7591), egyedi engedélyezési eljárás nélkül; kizárólag olvasás az érintett saját adatkörében; kérésszám-korlát és rövid tokenélettartam; a jóváhagyó képernyő jelzi, hogy a kiadó nincs átvilágítva.
- *2. szint:* azonosított kiadó, a nyilvántartás által kibocsátott aláírt szoftvernyilatkozat, bizalmas kliens aszimmetrikus kulcsú hitelesítéssel, birtokláshoz kötött hozzáférési token; műveletvégzés az érintett saját adatkörében, valamint pedagógusi és oktatói olvasás.
- *3. szint:* a 2. szint feltételei, valamint érvényes adatfeldolgozói szerződés és intézményi engedélyezés; emelt biztonsági profil (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldás és kliensattesztáció; műveletvégzés intézményi feladatkörben.

**Funkciókatalógus.** A rendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a szükséges bizalmi szintet, valamint azt, hogy a funkció az érintett saját adatkörébe tartozik-e. Új hivatalos funkció bevezetésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

**Visszavonás és incidenskezelés.** A tokenek visszavonása az RFC 7009 szerint támogatott; a felhasználó által visszavont felhatalmazás legfeljebb öt percen belül hatályát veszti. A kiadó a tudomásszerzéstől számított hetvenkét órán belül bejelenti a klienst érintő biztonsági incidenst. A nyilvántartásból törölt szoftverhez tartozó felhatalmazások azonnal hatályukat vesztik.

**A jóváhagyó képernyő.** A hivatalos felületen jelenik meg; megnevezi a szoftvert és kiadóját a nyilvántartás adatai alapján, a bizalmi szintet, a kért jogosultságokat, a felhasználót, és — szülői felhatalmazás esetén — a gyermeket, akinek adataira a felhatalmazás vonatkozik.

**Átláthatóság.** Az üzemeltető évente nyilvános jelentést tesz közzé a regisztrált kliensek bizalmi szintenkénti számáról, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

**Szabványkövetés.** A rendelet a hivatkozott szabványok megnevezését a nemzetközi szabványfejlődéshez igazodva módosíthatja, a bizalmi szintekhez rendelt garanciák változatlanul hagyásával.

---

## 11. Bevezetési ütemterv

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | Az Nkt. és az Nftv. módosításának elfogadása |
| 2027. március 31. | A műszaki és eljárási követelményekről szóló kormányrendelet kihirdetése, a funkciókatalógus első kiadásával |
| 2027. június 30. | KRÉTA: a programozói felület dokumentációjának és tesztkörnyezetének közzététele; a kliensnyilvántartás felállítása |
| 2027. szeptember 1. | KRÉTA, **1. szakasz**: éles delegált **olvasási** hozzáférés szülői és tanulói jogosultságra, 1. bizalmi szinten |
| 2028. március 31. | Felsőoktatási tanulmányi rendszerek: dokumentáció és tesztkörnyezet közzététele. KRÉTA: a műveleti funkciók katalógusbesorolásának közzététele |
| 2028. szeptember 1. | KRÉTA, **2. szakasz**: műveletvégzés az érintett saját adatkörében (2. szint); pedagógusi hozzáférés intézményi engedélyezéssel (3. szint). Felsőoktatás: éles delegált olvasási hozzáférés |
| 2029. március 31. | Felsőoktatás: műveletvégzés és oktatói hozzáférés |
| 2029. december 31., majd évente | Első nyilvános hatásjelentés és a funkciókatalógus felülvizsgálata |

A szakaszolás lényege: **az olvasás előbb megy élesbe, mint az írás**, és a pedagógusi hozzáférés csak az intézményi engedélyezési mechanizmussal együtt indul. Az 1.0 változat egyetlen, 2027. szeptemberi dátumon vezette volna be mindhármat.

---

## 12. Nyitott kérdések

Ezeket a kérdéseket a javaslat nem dönti el. Azért soroljuk fel, mert a szakmai vitában úgyis előkerülnek, és jobb, ha az előterjesztő nevezi meg őket.

1. **Ki vezesse a kliensnyilvántartást**, milyen eljárásrenddel, jogorvoslattal és finanszírozással? Az előterjesztés csak annyit rögzít, hogy a szervet a Kormány rendeletben jelöli ki.
2. **A nagykorúsághoz közeledő tanuló** saját felhatalmazása és a szülői felhatalmazás viszonya; melyik életkortól illeti meg a tanulót önálló jog, és mit lát ilyenkor a szülő.
3. **A vegyes adatkörök tételes besorolása** a funkciókatalógusban: pedagógusi üzenetek, fegyelmi és gyermekvédelmi bejegyzések, más tanulót is érintő tartalmak.
4. **Kiskorúak adatainak Unión kívüli MI-szolgáltatóhoz kerülése.** Ezt a javaslat nem oldja meg; láthatóvá és visszavonhatóvá teszi, de a tartalmi kérdés — mit szabad egy asszisztensnek a kapott adattal tenni — külön szabályozást igényel.
5. **A költségoldal.** Az üzemeltetői ráfordítás, a nyilvántartás működtetése és az intézményi felkészítés költsége még nincs becsülve; a hatásvizsgálat e nélkül nem teljes.
6. **Statisztikai pontosítások.** Az átlagos osztálylétszám, a KRÉTA-alkalmazások megjelenési éve és a KRÉTA-tudásbázis hivatkozásának pontos adatai még pótlandók (a szövegben [ELLENŐRIZENDŐ] jelöléssel).
7. **Az érdekütközés kezelése.** Az előterjesztés készítője a 3.3 pontban leírt szolgáltatás üzemeltetője. A javaslat elfogadása ezt a szolgáltatást a jelenlegi formájában feleslegessé teszi, de a jövőbeli piacon az előterjesztő is szereplő lehet. Ezt itt jelezzük.

---

## 13. Források

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
- KSH: Köznevelésben dolgozó pedagógusok bruttó átlagkeresete (23.1.1.32.) — https://www.ksh.hu/stadat_files/okt/hu/okt0046.html
- OECD: Results from TALIS 2024 — Country note: Hungary — https://www.oecd.org/en/publications/results-from-talis-2024-country-notes_e127f9e2-en/hungary_29960fb1-en.html

**Szerkesztői jelölés:** a [ELLENŐRIZENDŐ: …] helyeken a számot vagy a tényt publikálás előtt elsődleges forrásból pótolni kell. A statisztikai adatok keresőn keresztül elért kiadványokból származnak; a végleges szövegben a KSH és az OECD elsődleges táblázataival egyeztetendők.
