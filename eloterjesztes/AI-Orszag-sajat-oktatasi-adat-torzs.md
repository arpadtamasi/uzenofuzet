# AI-Ország: saját oktatási adat, saját eszközzel

## Előterjesztés a meglévő oktatási adathozzáférés biztonságos és visszavonható delegálásáról

*Törzsanyag. A jogi háttér részletes végigvezetését, valamint a bizalmi, felhasználási és felelősségi modellt külön melléklet tartalmazza.*

A szülő ma belép a KRÉTA-ba, és látja a gyermeke jegyeit, hiányzásait, órarendjét, számonkéréseit. A tanuló ugyanezt a sajátjára, a hallgató a Neptunban a vizsgáit és a határidőit. Ez a hozzáférés létezik és jogszerű. Egyetlen korlátja, hogy kizárólag azon az alkalmazáson keresztül gyakorolható, amelyet a rendszer üzemeltetője ad ki. Az előterjesztés azt javasolja, hogy a felhasználó ezt a már meglévő hozzáférését átadhassa az általa választott szoftvernek, a jelszava átadása nélkül, a hivatalos felületen látható és bármikor visszavonható módon, miközben pontosan tudja, mi történik az adatával.

Az anyag egy működő implementáció tapasztalataiból épült. Az Üzenőfüzet nyílt forráskódú szolgáltatás ma ténylegesen összeköti a szülők MI-asszisztensét a KRÉTA-val, és minden megkerülő megoldás, amelyre a szolgáltatás rákényszerül, egy-egy hiányzó szabályra mutat rá. Ezeket az 1.6 pont sorolja fel. A javaslathoz tartozó funkciókatalógus vázlata is ebből a szolgáltatásból készült, húsz valós végpont besorolásával, így a javasolt szabály kipróbálható anyagon áll.

Az „AI-Ország: szabad tananyag" előterjesztés ugyanennek az oktatási pilotnak a másik felét írja le. A tananyag azt határozza meg, mit tud egy oktatási MI; ez az anyag azt, hogy kiről és mire használhatja. A tananyag-előterjesztés közpénzből előállított művek nyílt licencéről szól, és a személyes adatokat kifejezetten kizárja a hatálya alól; ez az anyag kizárólag személyes adatról szól. Más törvényeket módosítanak, tehát egy csomagban is ütközés nélkül állnak egymás mellett.

---

## Vezetői összefoglaló

A felhasználó digitális élete ma rendszerekre van szabdalva, és a rendszerek közötti átjárást neki magának kell elvégeznie. A szülőnek külön alkalmazása van a munkahelyéhez, a bankjához, a parkoláshoz, az egészségügyi időpontokhoz és a háztartási gépeihez, és ezek mellé jön az iskolai, két gyerek esetén akár kettő. A pedagógusnál ugyanez ismétlődik más rendszerekkel: a napló az egyikben van, a kommunikáció a másikban, az órarend a harmadikban. Mindkét szerepben az ember végzi az integrációt, ő hordja fejben az információt egyikből a másikba.

A javaslat célja ezért az, hogy a felhasználó a saját digitális eszközén keresztül is használhassa azt az adatot, amihez amúgy is hozzáfér.

A jogosultsági kör változatlan marad. A szülő, a tanuló és a hallgató pontosan ugyanahhoz az adathoz fér hozzá, mint ma, csak a csatorna válik választhatóvá. Ami újdonságot hoz, az az adat további útja: a felhatalmazott szoftver is megkapja az adatot, és azzal kezd valamit, jellemzően továbbküldi egy MI-szolgáltatónak, tárolja, esetleg az Unión kívülre viszi. A javaslat súlypontja ezért a felhasználás szabályozásán van.

Négy elemet javaslunk. Új ágazati jogosultságot a köznevelési és a felsőoktatási törvényben, amely a meglévő hozzáférés delegálását teszi lehetővé, külön és szigorúbb szabállyal az intézményi feladatkörben gyakorolt jogosultságra. Nyilvános, dokumentált és verziózott programozói felületet tesztkörnyezettel, ugyanazt, amelyet a hivatalos alkalmazások ma is használnak. Kockázatarányos bizalmi keretet, amelyben a felhatalmazható szoftverek háromszintű nyilvántartásba kerülnek, és a jogosultság mértéke a bizalmi szinthez kötött. Végül felhasználási réteget: a felhasználó köznyelven kapjon tájékoztatást arról, mi történik az adatával a kiadás után, és külön szabály határozza meg, milyen oktatási adatkör vihető egyáltalán tovább külső szolgáltatóhoz.

### Mit nem állítunk

A javaslat senkinek nem ad hozzáférést olyan adathoz, amit ma nem lát. A csatorna változik, a jogosultság nem. Azt sem állítjuk, hogy az érintettnek tulajdonjoga volna a róla kezelt adatokon, mert az uniós adatvédelmi jog ilyet nem ismer; a címben szereplő „saját oktatási adat" köznyelvi fordulat.

A javasolt jogosultság a hatályos jogból nem vezethető le. Új ágazati jogosultságról van szó, amit vállalunk, és nem álcázunk meglévő jog technikai megvalósításának; a részletes levezetést a melléklet M2.1 és M2.2 pontja adja. Az MI-rendelet és az adatrendelet ebben az összefüggésben irányjelző, nem jogalap.

Nem javasoljuk, hogy ellenőrzés nélkül regisztrált szoftver írási műveletet végezhessen az oktatási nyilvántartásban, és azt sem, hogy a pedagógus a saját elhatározásából engedhesse át szoftvernek a munkaköri jogosultságát. Arról sem beszélünk, hogy bármilyen oktatási adat szabadon továbbítható volna külső MI-szolgáltatóhoz; a melléklet M4. fejezete ennek a szabályozásáról szól.

Végül a javaslat a rendszerek jelenlegi működését nem minősíti jogsértőnek. Egy új csatornára vonatkozó szabályozást kér. Ahol a melléklet M4.3 pontja szerinti besorolás szűkebb annál, mint amit a hivatalos felület ma megjelenít, ott ennek az az oka, hogy az automatizált, ismételt lekérdezés más kitettséget jelent, mint az alkalmi kézi megtekintés. A hatályos gyakorlat megítélése az adatvédelmi hatóság és a bíróság hatásköre.

---

## 1. Probléma

### 1.1 A digitális élet széttöredezettsége

Könnyű úgy olvasni ezt az előterjesztést, mintha az MI-integráció hiányáról szólna. A hiány valódi, de mélyebben az áll mögötte, hogy a felhasználónak ma minden rendszerhez külön felületen kell odamennie, és az összefésülést a saját fejében kell elvégeznie.

A szülő oldalán ez így néz ki. Külön alkalmazás a munkahelyi levelezéshez, külön a bankhoz, a parkoláshoz, az egészségügyi időpontokhoz, a közműszámlákhoz, a háztartási gépekhez. Ezek mellé jön az iskolai alkalmazás, és ha két gyerek van, akkor több fiók, több felület, több értesítés és több napi rutin. Amit a szülő szeretne, az egyetlen kérdés a már használt eszközében:

> „Mi van ezen a héten a két gyerekkel? Mi a házi, mik a számonkérések, van-e valami, amire figyelnem kell?"

A pedagógus ugyanezt éli meg, más szerepben. A napló az egyik rendszerben van, a kommunikáció a másikban, az órarend a harmadikban, a tananyag és a beadandók egy tanulásszervezési rendszerben, emellett e-mail, megosztott dokumentumok és belső intézményi felületek. Ő is az egyikben nézi meg, mit lát, és viszi át a másikba. Az ő kérdése ez volna:

> „Kik maradtak le, kinek kell írnom, és mit kell ma adminisztrálnom?"

Egy szebb és gyorsabb hivatalos alkalmazás ezen keveset változtatna, mert az is egy újabb felület, amelyet meg kell nyitni, amelyben külön kell keresni, és amely önmagában nem tud mit kezdeni azzal, hogy a szülőnek két gyereke van két iskolában, vagy hogy a pedagógus a leveleit máshol olvassa. Minden újabb alkalmazás azt a terhet növeli, amelyen enyhíteni akar. A cél ezért az, hogy a KRÉTA adata elérhető legyen azon az eszközön is, amelyet a felhasználó már amúgy is használ.

### 1.2 A hozzáférés megvan, a csatorna hiányzik

A hozzáférés ma is létezik és megszokott, azzal a korláttal, hogy kizárólag az üzemeltető által kiadott alkalmazáson keresztül gyakorolható. A kizárólagosságnak technikai oka van: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével kapcsolódjon. A jogosult felhasználó hozzáférésének ténye önmagában nem indokolja a fenntartását.

Ebből következik, hogy a javaslat egyetlen adatmezőt sem tesz elérhetővé olyan személy számára, aki ma nem látja. A delegált hozzáférés a felhasználó meglévő jogosultságára épül, és annál szűkebb is lehet, mert a felhasználó maga szűkítheti. A KRÉTA ma is nyitva áll a jogosult felhasználó felé, egyetlen csatornán; a javaslat ezt a csatornát teszi választhatóvá, és cserébe láthatóvá és visszavonhatóvá teszi azt, ami ma jelszóátadással, a rendszer számára észrevétlenül történik.

### 1.3 Az adat további útja

Ha a szülő a saját asszisztensével nézi meg a gyermeke jegyeit, az adat elhagyja a KRÉTA-t, és egy másik rendszerbe kerül. Ez a valódi újdonság a mai állapothoz képest.

A kockázat ma is fennáll, csak szabályozatlanul. A szülő kimásolja a képernyő tartalmát és bemásolja egy MI-asszisztensbe, vagy jelszót ad egy közvetítő szolgáltatásnak. Ilyenkor senki nem tájékoztatja arról, hová kerül az adat, a hozzáférés sehol nem jelenik meg nyilvántartásban, és visszavonni sem lehet.

A javaslat ezért két rétegben gondolkodik. A hozzáférési réteg azt szabályozza, ki kaphat felhatalmazást és milyen műveletre; ezt a melléklet M3. fejezete fejti ki. A felhasználási réteg azt, hogy mi történik az adattal azután, és miről kell a felhasználót tájékoztatni; ez a melléklet M4. fejezete. A második réteg nélkül a szabályozás a valódi kockázatot hagyná érintetlenül.

### 1.4 Dokumentált tények

Az adatot ma csak a hivatalos alkalmazás éri el. A KRÉTA a szülőnek, a tanulónak és a pedagógusnak külön mobilalkalmazást kínál, amelyekben órarend, számonkérések, házi feladatok, jegyek és mulasztások jelennek meg, a pedagógus pedig naplózási és értékelési műveleteket is végezhet. Az alkalmazások mögött tehát működő programozói felület áll, amelyet azonban kizárólag a hivatalos alkalmazás használhat: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével klienst regisztráljon, és a felület dokumentációja nem nyilvános.

Az üzemeltető a nem hivatalos kliens használatát kifejezetten rendellenesnek minősíti. A KRÉTA saját tudásbázisa szerint rendellenes működésnek minősülhet, ha ugyanazt a profilt nem hivatalos alkalmazás használja. [ELLENŐRIZENDŐ: a tudásbázis-cikk pontos címe, URL-je és lekérdezési dátuma] Ennek az az önmagán túlmutató jelentősége, hogy a zártság szándékolt üzemeltetői álláspont, amely jogszabályi beavatkozás nélkül várhatóan fennmarad.

A felsőoktatásban a hivatalos mobilcsatorna megszűnt. A Neptun hivatalos mobilalkalmazása 2023. október 19-én, a kétfaktoros belépés bevezetésekor szűnt meg. Egyes egyetemek saját alkalmazásai, például a Magyar Agrár- és Élettudományi Egyetem MyMATE és a Debreceni Egyetem UD Studyversity alkalmazása, továbbra is megjelenítik a hallgatók Neptun-adatait. A felület tehát létezik, és intézményi alkalmazások használják is, de a hallgató és az oktató saját eszköze nem kapcsolódhat hozzá.

### 1.5 Az érintettek

| Érintett csoport | Létszám | Forrás |
|---|---|---|
| nappali rendszerű általános iskolai tanulók | kb. 710 000 fő | KSH, 2024/2025, előzetes |
| általános iskolai pedagógusok | kb. 74 000 fő | KSH, 2024/2025, előzetes |
| középfokú iskolai pedagógusok, oktatók | kb. 43 000 fő | KSH, 2024/2025, előzetes |
| óvodapedagógusok | kb. 31 000 fő | KSH, 2024/2025, előzetes |
| felsőoktatási hallgatók | kb. 351 000 fő | KSH, 2025/2026, előzetes |
| felsőoktatási oktatók | kb. 27 000 fő | KSH, 2023/2024 |
| szülők, gondviselők | nagyságrendileg a tanulói létszámmal arányos | levezetés |

A köznevelésben és a szakképzésben főállásban foglalkoztatott pedagógusok és oktatók száma összesen közel 148 ezer fő. A 3. fejezet hatásbecslése ennél szűkebb kört vesz alapul, az általános és középfokú iskolai pedagógusokat, összesen mintegy 117 ezer főt, mert tanulmányi rendszerhez kapcsolódó adminisztrációról az ő esetükben beszélhetünk értelmesen.

Rajtuk kívül érintettek a köznevelési és felsőoktatási intézmények mint adatkezelők és fenntartóik, a rendszerüzemeltetők, köztük az eKRÉTA Zrt. és a tanulmányi rendszerek szállítói, valamint a hazai fejlesztők.

### 1.6 A szülői oldal megkerülő megoldásai

A szülő napi valósága az, hogy sok felületet kell végigkattintania, és az iskolai a sokadik a sorban. Két gyerek esetén külön fiók, külön belépés és külön értesítési sor tartozik hozzá, az összefésülés pedig rá marad. Amit szeretne, az egyetlen kérdés a már használt eszközében: mi vár a gyerekekre a héten, melyik tantárgyból romlottak a jegyek, mikor kell igazolást beadni. Hivatalos út hiányában erre ma csak kockázatos megoldások állnak rendelkezésre.

Erre konkrét példa az Üzenőfüzet nyílt forráskódú szolgáltatás, amelyet az előterjesztés készítője üzemeltet, és amely a szülők MI-asszisztensét köti össze a KRÉTA-val. A szolgáltatás ma kénytelen átvenni a szülőtől a KRÉTA-jelszót, a nevében belépni és a belépési tokeneket maga tárolni. A hivatalos tanulói mobilalkalmazás kliensazonosítóját és nem dokumentált végpontjait használja, ezért bármely rendszerfrissítés után működésképtelenné válhat. A hívásokat lakossági hálózaton keresztül továbbítja, mert a rendszer az adatközponti hálózatokból érkező kéréseket elutasítja. Végül saját adatkezelési tájékoztatójában kell rendeznie, hogy a lekért adatok, köztük kiskorúak adatai, a szülő által választott, akár az Unión kívüli MI-szolgáltatóhoz kerülnek.

A szülő a kiadott hozzáférést a KRÉTA-ban nem látja, és ott nem is tudja visszavonni. Az Üzenőfüzet célja éppen az, hogy ez a közvetítő szerep ebben a formában feleslegessé váljon. Az előterjesztő érdekeltségét itt jelezzük: a javaslat elfogadása a saját szolgáltatásunk jelenlegi működési modelljét szünteti meg.

Az utolsó pont már a felhasználás kérdése, amit ma minden szolgáltató a saját tájékoztatójában, saját belátása szerint rendez. A melléklet M4. fejezete erre ad szabályt.

### 1.7 A tanári oldal szabálytalan gyakorlata

A pedagógusnál a napló, a kommunikáció, az órarend, a tananyag és az értékelés külön rendszerben van, adott esetben egy tanulásszervezési rendszerrel, e-mailekkel, megosztott dokumentumokkal és belső intézményi felületekkel együtt. Az információ átvitele egyikből a másikba kézi munka, és ez a kézi munka jelenik meg az adminisztrációs időben.

A teher mérhető. Az OECD TALIS 2024 felmérése szerint a magyar főállású pedagógusok heti 3,2 órát fordítanak általános adminisztratív munkára, szemben a 3 órás OECD-átlaggal, és ez az érték 2018 óta nem csökkent. A stressz leggyakoribb forrásaként a megkérdezettek 55%-a a túl sok adminisztrációt jelölte meg.

Hivatalos kapcsolódás hiányában a pedagógus egyetlen módon tud MI-t használni ehhez a munkához: a tanulói adatokat kézzel bemásolja a saját, magáncélú MI-fiókjába. Egy másolással egy vagy több osztály adatai mozognak, az iskola nevében kezelt adatokként, adatfeldolgozói szerződés nélkül. Az adatkezelő iskola ezt nem látja, korlátozni sem tudja, és semmilyen naplóban nem jelenik meg. A zártság az ellenőrzött használatot akadályozza, a kimásolást pedig nem képes megállítani; erről bővebben a 4.3 pont szól. Arról, hogy ez a gyakorlat milyen gyakori, nincs hazai mérés, és a mérhetetlenség maga is a kár egyik formája.

---

## 2. Előzmények

**2011.** Az Nkt. és az Nftv. rendezi a köznevelési és felsőoktatási adatkezelést. Egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához gépi úton, általa választott szoftverrel hozzáférhessen.

**2012–2015.** Megjelenik az OAuth 2.0 engedélyezési keretrendszer (RFC 6749, 2012), majd a nyilvános kliensek védelmét szolgáló PKCE (RFC 7636, 2015), a dinamikus kliensregisztráció (RFC 7591, 2015) és a tokenvisszavonás (RFC 7009, 2013). A jelszóátadás nélküli, visszavonható, harmadik fél általi hozzáférés ettől kezdve iparági alapmegoldás.

**2015–2019.** A pénzügyi szektor ugyanezt a problémát oldja meg. A PSD2 és az (EU) 2018/389 rendelet dedikált, biztonságos felületet követel meg, nyilvános specifikációval és tesztkörnyezettel, a harmadik fél szolgáltatók pedig engedélyezett szereplők. A párhuzam mindkét élét a melléklet M2.6 pontja vezeti végig.

**2016–2018.** A GDPR 2018. május 25-től alkalmazandó. Bevezeti az adathordozhatóságot a 20. cikkben, de a közérdekű feladat keretében végzett adatkezelést kiveszi a hatálya alól.

**2019 körül.** Megjelennek a KRÉTA hivatalos mobilalkalmazásai, és a KRÉTA-adatok mobil elérése kizárólag ezeken keresztül válik lehetségessé. [ELLENŐRIZENDŐ: az egyes alkalmazások megjelenési éve]

**2023.** Október 19-én megszűnik a Neptun hivatalos mobilalkalmazása. Ugyanebben az évben születik az adatrendelet, amely a melléklet M2.4 pontjában írt korlátokkal a felhasználói adathozzáférés irányát jelzi.

**2024–2025.** 2024 novemberében megjelenik a Model Context Protocol, amely OAuth-alapú delegált hozzáférésre építve ad szabványos módot MI-asszisztensek külső rendszerekhez kapcsolására. 2025 januárjában megjelenik az RFC 9700 (BCP 240), az OAuth 2.0 biztonsági legjobb gyakorlata, amely kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a jelszó alapú folyamatot, és kezeli az összekeverési támadásokat.

**2025.** Hatályba lép az (EU) 2025/327 rendelet az európai egészségügyi adattérről. Ágazati jogszabály hoz létre elektronikus hozzáférési jogot közfeladaton alapuló, különösen érzékeny nyilvántartásban; a párhuzamot a melléklet M2.3 pontja fejti ki.

Az oktatási rendszerek felülete mindeközben változatlan maradt.

---

## 3. Okozott kár

A fejezet megkülönbözteti a dokumentált tényeket a példaszámításoktól és a feltételezésektől, és ezt az alfejezetek címe is jelzi.

### 3.1 Elvesztegetett pedagógusi kapacitás, példaszámítás

Az általános és középfokú iskolai pedagógusok száma mintegy 117 ezer fő, ebből 74 ezer általános iskolai és 43 ezer középfokú (KSH 2024/2025, előzetes). Ez szűkebb kör a köznevelés és a szakképzés együttes 148 ezres létszámánál, mert az óvodapedagógusokat és a tanulmányi rendszerhez nem kapcsolódó feladatköröket kihagytuk. Heti 3,2 óra általános adminisztráció és 36 tanítási hét mellett ez évente mintegy 13,5 millió pedagógusi munkaóra.

Egyetlen százalékos érték ebből nem vezethető le megbízhatóan. A TALIS „általános adminisztratív munka" kategóriája tágabb annál, amit egy tanulmányi rendszerhez kapcsolt MI érinteni tud, hiszen sok adminisztráció papíralapú, szervezési jellegű, vagy nem a naplóhoz kötődik. Ezért két külön paraméterrel számolunk:

> eredő megtakarítás = érinthető arány × időnyereség az érintett részen

Az érinthető arány az adminisztrációnak azt a részét jelöli, amely egyáltalán kötődik tanulmányi rendszerből származó adathoz. Az időnyereség azt mutatja, ezen belül mennyit rövidít az integrált MI, beleszámítva az utólagos ellenőrzés idejét is.

| Érinthető arány ↓ / Időnyereség → | 30% | 40% | 50% |
|---|---|---|---|
| **25%** | 7,5% — 1,0 millió óra | 10,0% — 1,3 millió óra | 12,5% — 1,7 millió óra |
| **35%** | 10,5% — 1,4 millió óra | **14,0% — 1,9 millió óra** | 17,5% — 2,4 millió óra |
| **45%** | 13,5% — 1,8 millió óra | 18,0% — 2,4 millió óra | 22,5% — 3,0 millió óra |

A kiemelt cella példaszámítás. Ha az adminisztráció 35%-a érinthető, és azon belül 40% időnyereség érhető el, az eredő 14%: évente mintegy 1,9 millió pedagógusi munkaóra, pedagógusonként körülbelül 16 óra. Egyik paraméterre sincs hazai mérés, ezért a táblázat inkább a nagyságrendet mutatja meg, és azt, melyik feltevésre érzékeny a végeredmény. A valódi értéket a 3.2 pont szerinti pilotnak kell megadnia.

A felszabaduló időt szándékosan nem fejezzük ki bérértéken. A pedagógusok létszáma nem csökken és a bérük sem lesz kevesebb, tehát költségvetési megtakarítás nem keletkezik; ami keletkezik, az felszabaduló szakmai kapacitás. Az évi 1,9 millió óra és a pedagógusonkénti évi 16 óra olyan állítás, amely a költségvetési oldalt olvasó számára sem félrevezető.

A számítás költségoldala, vagyis az üzemeltetői ráfordítás, a nyilvántartás működtetése és az intézményi felkészítés, még nem készült el. Ezt a 8. fejezet nyitott kérdésként rögzíti.

### 3.2 A pilot

A fenti számítás legnagyobb gyengesége, hogy magyar mérés nélkül készült, ezért a javaslat kötelező pilot-mérést ír elő a 6./IV. pont szerint, amelynek eredménye a műveleti szakasz indítása előtt rendelkezésre áll.

A pilot néhány száz pedagógussal, több intézménytípusban zajlik, és öt kérdést mér. Hogy mire megy ma az adminisztrációs idő, folyamatonként bontva: napló, jegyrögzítés, szöveges értékelés, mulasztáskövetés, szülői kommunikáció, időszaki összesítés. Hogy mely folyamatok igényelnek tanulmányi rendszerből adatot, ami az érinthető arány tényleges értékét adja. Hogy ugyanaz a folyamat mennyi idő integrált MI-vel, ahol lehetséges hasonló feladatot végző kontrollcsoporttal összevetve. Hogy mekkora az utóellenőrzési idő, vagyis mennyit tölt a pedagógus az MI kimenetének átnézésével és javításával, mert e nélkül a nyereség túlbecsült marad. Végül hogy változik-e a hibaarány a rögzített adatokban és a kimenő kommunikációban.

Az utolsó kérdés érdemben is fontos, mert egy gyorsabb, de hibásabb adminisztráció nem eredmény. A pilotnak ezért időt és minőséget egyaránt mérnie kell, és ezután a hatásvizsgálat már magyar mérésre épülhet.

### 3.3 Biztonsági és adatvédelmi kockázat, feltételezés

Arról, hogy hány szülő adta át a KRÉTA-jelszavát harmadik félnek, és hány pedagógus másol tanulói adatot magáncélú MI-fiókba, nincs adat. Ez a probléma természetéből következik, hiszen az adatkezelő iskola sem tudja, mert a jelenség nem hagy nyomot a rendszerben. Egyetlen pedagógus egyetlen másolással egy teljes osztálynyi tanuló adatát viheti ki szerződés nélkül. [ELLENŐRIZENDŐ: átlagos osztálylétszám, KSH]

A javaslat ezen a ponton önmagában is hoz eredményt, mert bevezetése után minden felhatalmazás naplózott, megtekinthető és megszámlálható lesz, akkor is, ha kiderül, hogy a jelenség a feltételezettnél ritkább.

### 3.4 Esélyegyenlőségi kár, feltételezés

Az MI-asszisztens feltehetően azoknak a szülőknek segít a legtöbbet, akiknek az iskolai rendszerek kezelése ma nehézséget okoz: a kevésbé gyakorlott digitális felhasználóknak, a több gyermeket nevelő, időhiányos családoknak és a nem magyar anyanyelvű szülőknek. Ha ez így van, akkor hivatalos út hiányában éppen ők maradnak ki, vagy ők vállalják a legnagyobb kockázatot. Ezt az állítást hazai adat nem támasztja alá, és a hatásmérés egyik kérdése éppen ez legyen.

### 3.5 Innovációs kár, részben dokumentált

Hazai fejlesztő ma nem tud stabil, jogszerű terméket építeni az oktatási rendszerekre, mert nincs dokumentált felület, és az üzemeltető a nem hivatalos klienst rendellenesnek minősíti az 1.4 pont szerint. A meglévő megoldások egy rendszerfrissítéssel megszűnhetnek. Hogy ez konkrétan hány vállalkozást tartott vissza, arról nincs felmérés, a mechanizmus azonban az 1.6 pontban leírt működési kényszerekből közvetlenül látszik.

---

## 4. Megoldási célok

### 4.1 A meglévő hozzáférés delegálható legyen, meghatározott funkciókörben

A hozzáférés körét nem szükséges újraszabályozni, mert azt a rendszerek meglévő jogosultságkezelése eldönti. Szabályozásra a csatorna és a felhasználás szorul.

Teljes funkcióparitást nem ígérünk. A felületi és a programozói funkciók nem képezhetők le mindig egy az egyben, és egy jövőbeli, különösen érzékeny új funkció automatikus megnyílása nem vállalható. Helyette funkciókatalógust javaslunk, a PSD2 mintájára, amely szintén meghatározott szolgáltatásokhoz szabályoz hozzáférést.

A kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és mindegyikhez hozzárendeli a szükséges bizalmi szintet, valamint a melléklet M4.3 pontja szerinti adatkör-besorolást. Új hivatalos funkció megjelenésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz, a katalógust pedig a miniszter évente felülvizsgálja.

*Mérhető célok:* a katalógus 2027. szeptember 1-jén lefedi a hivatalos alkalmazások olvasási funkcióinak 100%-át az alapadatkörben; 2028. szeptember 1-jén tartalmazza a műveleti funkciók besorolását, és jelszóátadásra egyetlen katalógusbeli funkcióhoz sincs szükség.

### 4.2 A felület legyen nyilvános, stabil és megkülönböztetésmentes

A dokumentáció legyen nyilvános, verziózott és tesztkörnyezettel ellátott. A nyilvánosság a specifikációra vonatkozik, az adathoz való hozzáférés pedig hitelesített és a felhasználó jogosultságához kötött marad. A megkülönböztetésmentesség tartalmát a melléklet M3.2 pontja adja meg.

*Mérhető célok:* a dokumentáció és a szintetikus adatokat tartalmazó tesztkörnyezet 2027. június 30-ig publikus; a visszafelé nem kompatibilis változásokat legalább kilencven nappal előre bejelentik.

*Nemzetközi példa:* az amerikai Ed-Fi Alliance nyílt adatszabványa és az 1EdTech OneRoster-szabványa a közoktatási nyilvántartó rendszerek és harmadik fél alkalmazások közötti adatcserére; felsőoktatásban az uniós Erasmus Without Paper hálózat.

### 4.3 A pedagógusi MI-használat legyen intézményileg megszervezhető

Ez a javaslat szakpolitikai magja, és az indoklása is szakpolitikai.

Az MI-jártasság nem pusztán képzési kérdés. Tanfolyamon meg lehet tanulni, mi az a nyelvi modell, de azt, hogy egy konkrét kimenetben hol lehet megbízni, csak a saját munkán lehet megtanulni. A pedagógus akkor tud az MI-vel szakmailag és kritikusan bánni, ha az a tényleges munkafolyamataiban jogszerűen használható. Amíg ez a feltétel hiányzik, vagy nem használja, vagy szabálytalanul használja, és mindkét esetben kívülálló marad azzal az eszközzel szemben, amelyről később szakmai döntéseket kellene hoznia.

Az is számít, hogyan érkezik az eszköz. Ha az MI külön alkalmazásként jelenik meg, amelyet meg kell nyitni és amelybe kézzel kell bemásolni az adatot, akkor csak eggyel több rendszer kerül egy már most is hosszú sorba. Akkor válik használhatóvá, ha hozzáfér a pedagógus által amúgy is használt rendszerekhez, és természetes nyelvű munkafelületet ad föléjük, hogy a rendszerek adata jusson el az emberhez.

Az adminisztráció rövidítése a legkönnyebben mérhető haszon, de nem a legfontosabb. Egy tanulmányi rendszerhez kapcsolt, felügyelt MI segíthet egy helyen áttekinteni a lemaradásra utaló, a pedagógus számára amúgy is rendelkezésre álló jeleket, vagyis a jegyeket, a hiányzásokat és a határidőket, amelyek ma külön felületeken állnak. Segíthet előkészíteni a szülői kommunikációt, tényszerű összefoglalót adva arról, mi történt egy tanulóval az elmúlt hetekben. Segíthet az időszaki összesítésekben a félévi és év végi zárásnál, és támogathatja a szöveges értékelést egy első megfogalmazással, amelyet a pedagógus felülír. A rögzítés és a szakmai döntés minden esetben a pedagógusnál marad.

A jelenlegi zártság elsősorban a mindennapi, kontrollált, intézményileg engedélyezett és naplózott használatot zárja ki. A kimásolásos gyakorlatra nincs hatással. Hogy az eszköz állami fejlesztésű, központilag beszerzett vagy fenntartói szerződéssel biztosított, a javaslat szempontjából közömbös, mert mindegyik ugyanazon a nyilvános felületen, a harmadik bizalmi szinten kapcsolódik.

*Mérhető cél:* 2028. szeptember 1-jéig minden KRÉTA-t használó intézményben elérhető a pedagógusi felhatalmazások intézményi szintű listázása, engedélyezése és visszavonása.

### 4.4 A felhasználó tudja, mi történik az adatával

*Mérhető célok:* 2027. szeptember 1-jétől minden felhatalmazás a melléklet M4.2 pontja szerinti, köznyelvi tájékoztatással jön létre; a felhatalmazások 100%-a megtekinthető és visszavonható a hivatalos felületen; 2029-től évente nyilvános jelentés készül a regisztrált kliensekről bizalmi szintenként, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

---

## 5. Várható haszon

| Szereplő | Rövid táv (2027–2028) | Közép- és hosszú táv |
|---|---|---|
| **Szülők, gondviselők** | jelszóátadás nélkül, láthatóan és visszavonhatóan kapcsolják a választott asszisztensüket; a döntés pillanatában megtudják, hová kerül az adat; nem kell még egy külön iskolai alkalmazás, több gyerekhez sem külön felület | a kevésbé gyakorlott digitális felhasználók és a nem magyar anyanyelvű családok is könnyebben követik az iskolai ügyeket (a 3.4 pont szerint feltételezés) |
| **Tanulók** | órarend, feladatok, határidők a saját eszközeikben | tanulástámogató alkalmazások naprakész iskolai adatra építhetnek |
| **Pedagógusok** | 2028-tól az intézmény által engedélyezett eszköz szabályosan kapcsolódik; a kézi másolás helyére ellenőrizhető folyamat lép, és a kockázatot nem a pedagógus viseli személyesen | a 4.3 pontban felsorolt munkafolyamatok támogatása, a pilot által mért tényleges időnyereséggel |
| **Intézmények, fenntartók** | először látják és korlátozhatják, milyen szoftverek férnek hozzá az általuk kezelt adathoz | az MI-eszközök beszerzése szállítófüggetlenné válik |
| **Hallgatók, oktatók** | — | 2028-tól a tanulmányi rendszerek adatai intézménytől függetlenül, egységesen kezelhetők |
| **Hazai fejlesztők** | dokumentált, stabil felület; a tisztább adatkezelés a jóváhagyó képernyőn versenyelőny | 2030-tól a megoldások a nemzetközi szabványok mentén exportálhatók |
| **Üzemeltetők, állam** | a megkerülő megoldások nem tervezett forgalma szabályozott, azonosítható forgalommá válik; az üzemeltetői felelősség a melléklet M5. fejezete szerint egyértelművé válik | a pilot és a nyilvános hatásmérés alapján az oktatási digitalizáció eredménye mérhető |

Az üzemeltetői oldalon a bevezetés a meglévő felületekre és a már OAuth-alapú hitelesítési infrastruktúrára építhet. Emellett új kliensregisztrációs, felhatalmazás-kezelési, dokumentációs, biztonsági és üzemeltetési képességeket igényel, köztük kérésszám-korlátozást, visszaélés-felismerést, felügyeletet, tesztkörnyezet-fenntartást és fejlesztői támogatást. Ezek ráfordítását a 8. fejezet nyitott kérdésként kezeli.

---

## 6. Pontos szakpolitikai változás

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

**Bizalmi szintek és kliensregisztráció.** A rendelet a melléklet M3.1 pontja szerinti három bizalmi szintet állapítja meg, szintenként meghatározva a regisztráció módját, a kliens hitelesítésének követelményeit és az elérhető funkciókört. Az első szintre a dinamikus kliensregisztráció (RFC 7591) egyedi engedélyezési eljárás nélkül érvényes; a harmadik szinthez emelt biztonsági profil (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldás és kliensattesztáció szükséges.

**Funkciókatalógus és adatkör-besorolás.** A rendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a szükséges bizalmi szintet, valamint az adatkör besorolását: alapadatkör, korlátozott továbbítású adatkör, vagy más személyt is érintő adat. Új hivatalos funkció bevezetésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

**A továbbítási nyilatkozat és a jóváhagyó képernyő.** A kiadó a nyilvántartásba vételkor nyilatkozik az Nkt. B) § (1) bekezdése szerinti adatokról. A jóváhagyó képernyő a hivatalos felületen jelenik meg, köznyelven, a nyilvántartás adatai alapján, a szoftver által nem módosítható módon. A rendelet a kötelező tartalmi elemeket írja elő, a szövegezést nem.

**Visszavonás és incidenskezelés.** A tokenek visszavonása az RFC 7009 szerint támogatott; a felhasználó által visszavont felhatalmazás legfeljebb öt percen belül hatályát veszti. A kiadó a tudomásszerzéstől számított hetvenkét órán belül bejelenti a klienst érintő biztonsági incidenst. A nyilvántartásból törölt szoftverhez tartozó felhatalmazások azonnal hatályukat vesztik.

**Átláthatóság.** Az üzemeltető évente nyilvános jelentést tesz közzé a regisztrált kliensek bizalmi szintenkénti számáról, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

**Szabványkövetés.** A rendelet a hivatkozott szabványok megnevezését a nemzetközi szabványfejlődéshez igazodva módosíthatja, a bizalmi szintekhez rendelt garanciák változatlanul hagyásával.

### IV. A hatásmérés előírása: pilot

*(javasolt indulás: 2027. szeptember 1., eredmény: 2028. március 31.)*

Javasoljuk, hogy a kormányrendelet írjon elő pilot-mérést, amelynek eredménye a műveleti és a pedagógusi szakasz indítása előtt rendelkezésre áll. A mérés legalább néhány száz pedagógusra terjedjen ki, több intézménytípusból, köztük általános iskolából, gimnáziumból és szakképző intézményből, és több fenntartótól. Tárgya a 3.2 pontban felsorolt öt kérdés: az adminisztrációs idő folyamatonkénti megoszlása, a tanulmányi rendszerből adatot igénylő folyamatok aránya, az azonos folyamat időigénye integrált MI-vel, az utóellenőrzésre fordított idő, valamint a hibaarány változása. Ahol lehetséges, hasonló feladatot végző kontrollcsoporttal összevetve mérjen, hogy az eredmény ne pusztán az előtte-utána különbségén múljon. Az eredmény nyilvános, és a funkciókatalógus, valamint a 2028. szeptemberi szakasz megalapozását szolgálja.

Ha a pilot nem igazolja az időnyereséget, a javaslat olvasási része akkor is indokolt marad, mert annak indoka az érintett saját adatához való hozzáférés.

---

## 7. Bevezetési ütemterv

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | Az Nkt. és az Nftv. módosításának elfogadása |
| 2027. március 31. | A műszaki és eljárási követelményekről szóló kormányrendelet kihirdetése, a funkciókatalógus és az adatkör-besorolás első kiadásával |
| 2027. június 30. | KRÉTA: a programozói felület dokumentációjának és tesztkörnyezetének közzététele; a kliensnyilvántartás felállítása |
| 2027. szeptember 1. | KRÉTA, **1. szakasz**: éles delegált **olvasási** hozzáférés szülői és tanulói jogosultságra, első bizalmi szinten, alapadatkörben, a köznyelvi tájékoztatással együtt. **A pedagógusi pilot indulása** |
| 2028. március 31. | A pilot eredményének közzététele. Felsőoktatás: dokumentáció és tesztkörnyezet. KRÉTA: a műveleti funkciók katalógusbesorolása |
| 2028. szeptember 1. | KRÉTA, **2. szakasz**: műveletvégzés az érintett saját adatkörében (második szint); pedagógusi hozzáférés intézményi engedélyezéssel (harmadik szint), a pilot eredményére alapozva. Felsőoktatás: éles delegált olvasási hozzáférés |
| 2029. március 31. | Felsőoktatás: műveletvégzés és oktatói hozzáférés |
| 2029. december 31., majd évente | Első nyilvános hatásjelentés és a funkciókatalógus felülvizsgálata |

A szakaszolás lényege, hogy az olvasás előbb megy élesbe, mint az írás, a pedagógusi hozzáférés csak az intézményi engedélyezési mechanizmussal együtt indul, és a pedagógusi szakaszt magyar mérés előzi meg.

---

## 8. Nyitott kérdések

Az alábbi kérdéseket a javaslat nem dönti el, de a szakmai vitában várhatóan felmerülnek, ezért érdemesnek tartottuk megnevezni őket.

1. **A kliensnyilvántartás vezetése.** Mely szerv vezesse, milyen eljárásrenddel, jogorvoslattal és finanszírozással. Az előterjesztés csak annyit rögzít, hogy a szervet a Kormány rendeletben jelöli ki.
2. **A nagykorúsághoz közeledő tanuló.** Hogyan viszonyul egymáshoz a tanuló saját felhatalmazása és a szülői felhatalmazás, melyik életkortól illeti meg a tanulót önálló jog, és mit lát ilyenkor a szülő.
3. **Az adatkörök mezőszintű besorolása.** A melléklet M4.3 pontja megadja a kategóriákat és az alapértelmezést, de a besorolás elvégzése önálló, jelentős szakmai munka. A szülői és tanulói olvasási funkciókra készült egy első vázlat külön mellékletben, amely húsz valós KRÉTA-végpontot sorol be, és hat nehéz esetet nevez meg. A műveleti és a pedagógusi funkciók besorolása még hátravan, és az üzemeltető funkciólistáját igényli.
4. **Az MI-szolgáltató belső adatkezelése.** A javaslat előírja, hogy erről tájékoztatni kell, és megtiltja a korlátozott továbbítású adatkör továbbítását, de nem szabályozza, mit tehet a szolgáltató a kapott adattal a saját rendszerén belül. Ez önálló szabályozási réteg.
5. **A költségoldal.** Az üzemeltetői ráfordítás, a nyilvántartás működtetése, a pilot és az intézményi felkészítés költsége még nincs becsülve.
6. **A továbbítási nyilatkozat ellenőrzése.** A javaslat szankcionálja a valótlan nyilatkozatot, de nem mondja meg, ki és milyen rendszerességgel ellenőrzi.
7. **Statisztikai pontosítások.** Az átlagos osztálylétszám, a KRÉTA-alkalmazások megjelenési éve és a KRÉTA-tudásbázis hivatkozásának pontos adatai még pótlandók; a szövegben [ELLENŐRIZENDŐ] jelöli őket.
8. **Az érdekütközés kezelése.** Az előterjesztés készítője az 1.6 pontban leírt szolgáltatás üzemeltetője. A javaslat elfogadása ezt a szolgáltatást a jelenlegi formájában feleslegessé teszi. A jövőbeli piacon az előterjesztő is szereplő lehet.

---

## 9. Források

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
