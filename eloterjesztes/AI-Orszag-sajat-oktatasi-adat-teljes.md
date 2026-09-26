# AI-Ország: saját oktatási adat, saját eszközzel

## Előterjesztés a meglévő oktatási adathozzáférés biztonságos és visszavonható delegálásáról

*Teljes változat. A javaslat indokolását, a normaszöveget, a bizalmi és felhasználási modellt, valamint a funkciókatalógus vázlatát egy dokumentum tartalmazza.*

A szülő ma belép a KRÉTA-ba, és látja a gyermeke jegyeit, hiányzásait, órarendjét, számonkéréseit. A tanuló ugyanezt a sajátjára, a hallgató a Neptunban a vizsgáit és a határidőit. Ez a hozzáférés létezik és jogszerű. Egyetlen korlátja, hogy kizárólag azon az alkalmazáson keresztül gyakorolható, amelyet a rendszer üzemeltetője ad ki. Az előterjesztés azt javasolja, hogy a felhasználó ezt a már meglévő hozzáférését átadhassa az általa választott szoftvernek, a jelszava átadása nélkül, a hivatalos felületen látható és bármikor visszavonható módon, miközben pontosan tudja, mi történik az adatával.

Az anyag egy működő prototípus tapasztalataiból épült. Az Üzenőfüzet nyílt forráskódú prototípus a valódi KRÉTA-val működik, és a szülő hozzáférését köti össze egy MI-asszisztenssel. Nyilvános szolgáltatásként nem érhető el: a fejlesztés éppen azon a ponton állt meg, ahol a nyilvánossá tétel következett volna, mert ahhoz olyan megoldásokra lett volna szükség, amelyeket az 1.6 pont sorol fel. A javaslathoz tartozó funkciókatalógus vázlata ugyanebből a prototípusból készült, húsz valós végpont besorolásával.

Az „AI-Ország: szabad tananyag" előterjesztés ugyanennek az oktatási pilotnak a másik felét írja le. A tananyag azt határozza meg, mit tud egy oktatási MI; ez az anyag azt, hogy kiről és mire használhatja. A tananyag-előterjesztés közpénzből előállított művek nyílt licencéről szól, és a személyes adatokat kifejezetten kizárja a hatálya alól; ez az anyag kizárólag személyes adatról szól. Más törvényeket módosítanak, tehát egy csomagban is ütközés nélkül állnak egymás mellett.

---

## Vezetői összefoglaló

A felhasználó digitális élete ma rendszerekre van szabdalva, és a rendszerek közötti átjárást neki magának kell elvégeznie. A szülőnek külön alkalmazása van a munkahelyéhez, a bankjához, a parkoláshoz, az egészségügyi időpontokhoz és a háztartási gépeihez, és ezek mellé jön az iskolai, két gyerek esetén akár kettő. A pedagógusnál ugyanez ismétlődik más rendszerekkel: a napló az egyikben van, a kommunikáció a másikban, az órarend a harmadikban. Mindkét szerepben az ember végzi az integrációt, ő hordja fejben az információt egyikből a másikba.

A javaslat célja ezért az, hogy a felhasználó a saját digitális eszközén keresztül is használhassa azt az adatot, amihez amúgy is hozzáfér.

A jogosultsági kör változatlan marad. A szülő, a tanuló és a hallgató pontosan ugyanahhoz az adathoz fér hozzá, mint ma, csak a csatorna válik választhatóvá. Ami újdonságot hoz, az az adat további útja: a felhatalmazott szoftver is megkapja az adatot, és azzal kezd valamit, jellemzően továbbküldi egy MI-szolgáltatónak, tárolja, esetleg az Unión kívülre viszi. A javaslat súlypontja ezért a felhasználás szabályozásán van.

Négy elemet javaslunk. Új ágazati jogosultságot a köznevelési és a felsőoktatási törvényben, amely a meglévő hozzáférés delegálását teszi lehetővé, külön és szigorúbb szabállyal az intézményi feladatkörben gyakorolt jogosultságra. Nyilvános, dokumentált és verziózott programozói felületet tesztkörnyezettel, ugyanazt, amelyet a hivatalos alkalmazások ma is használnak. Kockázatarányos bizalmi keretet, amelyben a felhatalmazható szoftverek háromszintű nyilvántartásba kerülnek, és a jogosultság mértéke a bizalmi szinthez kötött. Végül felhasználási réteget: a felhasználó köznyelven kapjon tájékoztatást arról, mi történik az adatával a kiadás után, és külön szabály határozza meg, milyen oktatási adatkör vihető egyáltalán tovább külső szolgáltatóhoz.

### Mit nem állítunk

A javaslat senkinek nem ad hozzáférést olyan adathoz, amit ma nem lát. A csatorna változik, a jogosultság nem. Azt sem állítjuk, hogy az érintettnek tulajdonjoga volna a róla kezelt adatokon, mert az uniós adatvédelmi jog ilyet nem ismer; a címben szereplő „saját oktatási adat" köznyelvi fordulat.

A javasolt jogosultság a hatályos jogból nem vezethető le. Új ágazati jogosultságról van szó, amit vállalunk, és nem álcázunk meglévő jog technikai megvalósításának; a részletes levezetést a 3.1 és 3.2 pont adja. Az MI-rendelet és az adatrendelet ebben az összefüggésben irányjelző, nem jogalap.

Nem javasoljuk, hogy ellenőrzés nélkül regisztrált szoftver írási műveletet végezhessen az oktatási nyilvántartásban, és azt sem, hogy a pedagógus a saját elhatározásából engedhesse át szoftvernek a munkaköri jogosultságát. Arról sem beszélünk, hogy bármilyen oktatási adat szabadon továbbítható volna külső MI-szolgáltatóhoz; a 7.3 pont ennek a szabályozásáról szól.

Végül a javaslat a rendszerek jelenlegi működését nem minősíti jogsértőnek. Egy új csatornára vonatkozó szabályozást kér. Ahol a 7.3 pont szerinti besorolás szűkebb annál, mint amit a hivatalos felület ma megjelenít, ott ennek az az oka, hogy az automatizált, ismételt lekérdezés más kitettséget jelent, mint az alkalmi kézi megtekintés. A hatályos gyakorlat megítélése az adatvédelmi hatóság és a bíróság hatásköre.

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

A javaslat ezért két rétegben gondolkodik. A hozzáférési réteg azt szabályozza, ki kaphat felhatalmazást és milyen műveletre; ezt a 7.2 pont fejti ki. A felhasználási réteg azt, hogy mi történik az adattal azután, és miről kell a felhasználót tájékoztatni; ez a 7.3 pont. A második réteg nélkül a szabályozás a valódi kockázatot hagyná érintetlenül.

### 1.4 Dokumentált tények

Az adatot ma csak a hivatalos alkalmazás éri el. A KRÉTA a szülőnek, a tanulónak és a pedagógusnak külön mobilalkalmazást kínál, amelyekben órarend, számonkérések, házi feladatok, jegyek és mulasztások jelennek meg, a pedagógus pedig naplózási és értékelési műveleteket is végezhet. Az alkalmazások mögött tehát működő programozói felület áll, amelyet azonban kizárólag a hivatalos alkalmazás használhat: a belépési rendszer nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével klienst regisztráljon, és a felület dokumentációja nem nyilvános.

Az üzemeltető a nem hivatalos kliens használatát kifejezetten rendellenesnek minősíti. A KRÉTA saját tudásbázisa szerint a mobilos belépés biztonsági okból ideiglenesen felfüggeszthető, mert a fiókhoz rendellenes működést észleltek, és ez akkor fordulhat elő, ha nem hivatalos KRÉTA-alkalmazás fut a készüléken vagy ugyanazzal a profillal egy másik készüléken. Ugyanez a lap kimondja, hogy a harmadik fél által fejlesztett alkalmazások használata nem javasolt és saját felelősségre történik, és hogy az üzemeltető ezek működéséért, biztonságáért és adatkezelési gyakorlatáért felelősséget nem vállal. Ennek az az önmagán túlmutató jelentősége, hogy a zártság szándékolt üzemeltetői álláspont, amely jogszabályi beavatkozás nélkül várhatóan fennmarad.

A felsőoktatásban a hivatalos mobilcsatorna megszűnt. A Neptun hivatalos mobilalkalmazása 2023. október 19-én, a kétfaktoros belépés bevezetésekor szűnt meg. Egyes egyetemek saját alkalmazásai, például a Magyar Agrár- és Élettudományi Egyetem MyMATE és a Debreceni Egyetem UD Studyversity alkalmazása, továbbra is megjelenítik a hallgatók Neptun-adatait. A felület tehát létezik, és intézményi alkalmazások használják is, de a hallgató és az oktató saját eszköze nem kapcsolódhat hozzá.

### 1.5 Az érintettek

| Érintett csoport | Létszám | Forrás |
|---|---|---|
| nappali rendszerű általános iskolai tanulók | kb. 710 000 fő | KSH, 2024/2025, előzetes |
| általános iskolai pedagógusok | kb. 73 000 fő | KSH, 2024/2025, előzetes |
| középfokú iskolai pedagógusok, oktatók | kb. 43 000 fő | KSH, 2024/2025, előzetes |
| óvodapedagógusok | kb. 31 000 fő | KSH, 2024/2025, előzetes |
| felsőoktatási hallgatók | kb. 351 000 fő | KSH, 2025/2026, előzetes |
| felsőoktatási oktatók | kb. 27 000 fő | KSH, 2023/2024 |
| szülők, gondviselők | nagyságrendileg a tanulói létszámmal arányos | levezetés |

A köznevelésben és a szakképzésben főállásban foglalkoztatott pedagógusok és oktatók száma összesen közel 148 ezer fő. A 4. fejezet hatásbecslése ennél szűkebb kört vesz alapul, az általános és középfokú iskolai pedagógusokat, összesen mintegy 116 ezer főt, mert tanulmányi rendszerhez kapcsolódó adminisztrációról az ő esetükben beszélhetünk értelmesen.

Rajtuk kívül érintettek a köznevelési és felsőoktatási intézmények mint adatkezelők és fenntartóik, a rendszerüzemeltetők, köztük az eKRÉTA Zrt. és a tanulmányi rendszerek szállítói, valamint a hazai fejlesztők.

### 1.6 A szülői oldal megkerülő megoldásai

A szülő napi valósága az, hogy sok felületet kell végigkattintania, és az iskolai a sokadik a sorban. Két gyerek esetén külön fiók, külön belépés és külön értesítési sor tartozik hozzá, az összefésülés pedig rá marad. Amit szeretne, az egyetlen kérdés a már használt eszközében: mi vár a gyerekekre a héten, melyik tantárgyból romlottak a jegyek, mikor kell igazolást beadni. Hivatalos út hiányában erre ma csak kockázatos megoldások állnak rendelkezésre.

Erre konkrét példa az Üzenőfüzet nyílt forráskódú prototípus, amelyet az előterjesztés készítője fejlesztett, és amely a szülő MI-asszisztensét köti össze a KRÉTA-val. Ahhoz, hogy egyáltalán működjön, át kell vennie a szülőtől a KRÉTA-jelszót, a nevében kell belépnie, és a belépési tokeneket magának kell tárolnia. A hivatalos tanulói mobilalkalmazás kliensazonosítóját és nem dokumentált végpontjait használja, ezért bármely rendszerfrissítés után működésképtelenné válhat. A hívásokat lakossági hálózaton keresztül továbbítja, mert a rendszer az adatközponti hálózatokból érkező kéréseket elutasítja. Végül saját adatkezelési tájékoztatójában kell rendeznie, hogy a lekért adatok, köztük kiskorúak adatai, a szülő által választott, akár az Unión kívüli MI-szolgáltatóhoz kerülnek.

A szülő a kiadott hozzáférést a KRÉTA-ban nem látja, és ott nem is tudja visszavonni. Ezek a kényszerek együtt oda vezettek, hogy a prototípus nyilvános szolgáltatásként nem vállalható, és a fejlesztés ezen a ponton megállt. Az előterjesztő érdekeltségét itt jelezzük: a javaslat elfogadása éppen ezeket a közvetítő megoldásokat tenné szükségtelenné.

Az utolsó pont már a felhasználás kérdése, amit ma minden szolgáltató a saját tájékoztatójában, saját belátása szerint rendez. A 7.3 pont erre ad szabályt.

### 1.7 A tanári oldal szabálytalan gyakorlata

A pedagógusnál a napló, a kommunikáció, az órarend, a tananyag és az értékelés külön rendszerben van, adott esetben egy tanulásszervezési rendszerrel, e-mailekkel, megosztott dokumentumokkal és belső intézményi felületekkel együtt. Az információ átvitele egyikből a másikba kézi munka, és ez a kézi munka jelenik meg az adminisztrációs időben.

A teher mérhető. Az OECD TALIS 2024 felmérése szerint a magyar főállású pedagógusok heti 3,2 órát fordítanak általános adminisztratív munkára, szemben a 3 órás OECD-átlaggal, és ez az érték 2018 óta nem csökkent. A stressz leggyakoribb forrásaként a megkérdezettek 55%-a a túl sok adminisztrációt jelölte meg.

Hivatalos kapcsolódás hiányában a pedagógus egyetlen módon tud MI-t használni ehhez a munkához: a tanulói adatokat kézzel bemásolja a saját, magáncélú MI-fiókjába. Egy másolással egy vagy több osztály adatai mozognak, az iskola nevében kezelt adatokként, adatfeldolgozói szerződés nélkül. Az adatkezelő iskola ezt nem látja, korlátozni sem tudja, és semmilyen naplóban nem jelenik meg. A zártság az ellenőrzött használatot akadályozza, a kimásolást pedig nem képes megállítani; erről bővebben a 4.3 pont szól. Arról, hogy ez a gyakorlat milyen gyakori, nincs hazai mérés, és a mérhetetlenség maga is a kár egyik formája.

---

## 2. Előzmények

**2011.** Az Nkt. és az Nftv. rendezi a köznevelési és felsőoktatási adatkezelést. Egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához gépi úton, általa választott szoftverrel hozzáférhessen.

**2012–2015.** Megjelenik az OAuth 2.0 engedélyezési keretrendszer (RFC 6749, 2012), majd a nyilvános kliensek védelmét szolgáló PKCE (RFC 7636, 2015), a dinamikus kliensregisztráció (RFC 7591, 2015) és a tokenvisszavonás (RFC 7009, 2013). A jelszóátadás nélküli, visszavonható, harmadik fél általi hozzáférés ettől kezdve iparági alapmegoldás.

**2015–2019.** A pénzügyi szektor ugyanezt a problémát oldja meg. A PSD2 és az (EU) 2018/389 rendelet dedikált, biztonságos felületet követel meg, nyilvános specifikációval és tesztkörnyezettel, a harmadik fél szolgáltatók pedig engedélyezett szereplők. A párhuzam mindkét élét a 3.6 pont vezeti végig.

**2016–2018.** A GDPR 2018. május 25-től alkalmazandó. Bevezeti az adathordozhatóságot a 20. cikkben, de a közérdekű feladat keretében végzett adatkezelést kiveszi a hatálya alól.

**2019 körül.** Megjelennek a KRÉTA hivatalos mobilalkalmazásai, és a KRÉTA-adatok mobil elérése kizárólag ezeken keresztül válik lehetségessé. [ELLENŐRIZENDŐ: az egyes alkalmazások megjelenési éve]

**2023.** Október 19-én megszűnik a Neptun hivatalos mobilalkalmazása. Ugyanebben az évben születik az adatrendelet, amely a 3.4 pontban írt korlátokkal a felhasználói adathozzáférés irányát jelzi.

**2024–2025.** 2024 novemberében megjelenik a Model Context Protocol, amely szabványos módot ad MI-asszisztensek külső rendszerekhez kapcsolására. A protokoll 2025. márciusi változata OAuth 2.1-re épülő felhatalmazási réteggel egészül ki, vagyis ugyanazt a megoldást írja elő, amelyet ez az előterjesztés javasol. 2025 januárjában megjelenik az RFC 9700 (BCP 240), az OAuth 2.0 biztonsági legjobb gyakorlata, amely kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a jelszó alapú folyamatot, és kezeli az összekeverési támadásokat.

**2025.** Hatályba lép az (EU) 2025/327 rendelet az európai egészségügyi adattérről. Ágazati jogszabály hoz létre elektronikus hozzáférési jogot közfeladaton alapuló, különösen érzékeny nyilvántartásban; a párhuzamot a 3.3 pont fejti ki.

Az oktatási rendszerek felülete mindeközben változatlan maradt.

---

## 3. A hatályos jogi helyzet

### 3.1 Amit a hatályos jog ad

A GDPR 15. cikke hozzáférési jogot biztosít az érintettnek, kérelemre adott adatmásolat formájában, amely eseti és nem folyamatos gépi hozzáférés. A (63) preambulumbekezdés ennél tovább megy, amikor lehetőségként rögzíti, hogy ahol lehetséges, az adatkezelő legyen képes távoli hozzáférést biztosítani olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz. Ez támogatja a javaslatot, azzal a korláttal, hogy a preambulumbekezdés ajánlás, és programozói felületet nem ír elő. A 12. cikk (2) bekezdése az adatkezelő általános kötelezettségeként rögzíti az érintetti jogok gyakorlásának elősegítését.

### 3.2 Amit a hatályos jog nem ad

A GDPR 20. cikke szerinti adathordozhatóság a hozzájáruláson vagy szerződésen alapuló, automatizált adatkezelésre vonatkozik. A 20. cikk (3) bekezdése a közérdekű vagy közhatalmi feladat végrehajtása keretében végzett adatkezelést kiveszi a hatálya alól, és az oktatási nyilvántartás ilyen. A 20. cikk itt tehát nem hívható fel.

Ugyanennek a cikknek a (4) bekezdése kimondja, hogy az adathordozhatóság mások jogait és szabadságait nem sértheti. Ez a korlát a javaslatra is irányadó elvi mérce, és a vegyes adatkörök kezelésének kiindulópontja, amiről a 7.3 pont szól.

A köznevelési és a felsőoktatási törvény rendezi az oktatási adatkezelést és a nyilvántartásokat, de egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához az általa választott szoftverrel hozzáférhessen.

Ebből az következik, hogy a javasolt jogosultság új, és ágazati jogalkotást igényel.

### 3.3 Precedens: az európai egészségügyi adattér

Az (EU) 2025/327 rendelet ugyanezt a szerkezetet valósítja meg: ágazati uniós jogszabály hoz létre elektronikus hozzáférési jogot olyan adatkörben, ahol maga az adatkezelés közfeladaton alapul, és ahol az érintett maga adhat hozzáférést az általa választott szereplőnek. A rendelet 3. cikke az érintett elektronikus egészségügyi adataihoz való azonnali, ingyenes elektronikus hozzáférést és letöltést biztosítja. Hatályba lépett 2025. március 26-án. Az általános alkalmazás 2027. március 26-tól kezdődik, a 3–15. cikk alkalmazása azonban csak 2031. március 26-tól. Az Unió tehát ugyanerre a feladatra a hatálybalépéstől számítva hat évet szánt, és a 8. fejezet ütemterve ehhez mérve gyorsabb. [ELLENŐRIZENDŐ: a 3. cikk bekezdéseinek pontos hivatkozása a Hivatalos Lap szövege alapján]

Az analógia két ponton erős. Azonos a jogi szerkezet, vagyis közfeladaton alapuló nyilvántartás mellé kerül ágazati hozzáférési jog, és azonos az érzékenységi szint, hiszen egészségügyi adatról, illetve kiskorúak oktatási adatáról van szó.

### 3.4 Az adatrendelet mint irányjelző

Az (EU) 2023/2854 rendelet kézenfekvő hivatkozásnak tűnik. A rendelet II. fejezete az összekapcsolt termékek és a kapcsolódó szolgáltatások használata során keletkező adatokra vonatkozik, tipikus tárgya a dologi, érzékelőalapú termékadat. A KRÉTA vagy a Neptun tanulmányi nyilvántartása ebbe a körbe nem tartozik. Az adatrendeletet ezért jogpolitikai irányjelzőként hívjuk fel, jogalapként a javaslat nem támaszkodik rá.

### 3.5 Az MI-rendelet

Az (EU) 2024/1689 rendelet 4. cikke 2025. február 2-tól előírja, hogy az MI-rendszereket alkalmazó szervezetek gondoskodjanak munkatársaik MI-jártasságáról. Az MI-rendelet önmagában nem alapoz meg API-nyitási kötelezettséget; a pedagógusi oldal indoka szakpolitikai, és az 5.3 pont fejti ki.

### 3.6 A PSD2-analógia mindkét éle

A pénzügyi szektor párhuzama a javaslat mellett és ellen egyaránt felhozható, ezért érdemes végigvezetni.

A javaslat mellett szól, hogy az (EU) 2015/2366 irányelv és az (EU) 2018/389 felhatalmazáson alapuló rendelet 2019. szeptember 14-től dedikált, biztonságos felületet követel meg; a technikai specifikáció átadására és a tesztkörnyezet biztosítására a számlavezetők már fél évvel korábban, 2019. március 14-től kötelezettek voltak. A brit versenyhatóság pedig a Retail Banking Market Investigation Order 2017 alapján 2018. január 13-tól egységes nyílt banki API-szabványt tett kötelezővé a kilenc legnagyobb bank számára. Az az állítás tehát, hogy egy monopolizált ügyfélfelület jogszabállyal megnyitható, és ettől a szektor nem omlik össze, empirikusan igazolt.

A javaslat ellen szól, hogy a PSD2-ben a harmadik fél szolgáltatók engedélyezett, felügyelt szereplők, és a rendszer minősített tanúsítványokra épít. Egy olyan kliensregisztráció, amely egyedi engedélyezési eljárás nélkül működik, éppen a példa legfontosabb elemét hagyná ki. Ezt az ellenérvet elfogadjuk, és a 7.2 pont bizalmi kerete válaszol rá.


---

## 4. Okozott kár

A fejezet megkülönbözteti a dokumentált tényeket a példaszámításoktól és a feltételezésektől, és ezt az alfejezetek címe is jelzi.

### 4.1 Elvesztegetett pedagógusi kapacitás, példaszámítás

Az általános és középfokú iskolai pedagógusok száma mintegy 116 ezer fő, ebből 73 ezer általános iskolai és 43 ezer középfokú (KSH 2024/2025, előzetes). Ez szűkebb kör a köznevelés és a szakképzés együttes 148 ezres létszámánál, mert az óvodapedagógusokat és a tanulmányi rendszerhez nem kapcsolódó feladatköröket kihagytuk. Heti 3,2 óra általános adminisztráció és 36 tanítási hét mellett ez évente mintegy 13,4 millió pedagógusi munkaóra.

Egyetlen százalékos érték ebből nem vezethető le megbízhatóan. A TALIS „általános adminisztratív munka" kategóriája tágabb annál, amit egy tanulmányi rendszerhez kapcsolt MI érinteni tud, hiszen sok adminisztráció papíralapú, szervezési jellegű, vagy nem a naplóhoz kötődik. Ezért két külön paraméterrel számolunk:

> eredő megtakarítás = érinthető arány × időnyereség az érintett részen

Az érinthető arány az adminisztrációnak azt a részét jelöli, amely egyáltalán kötődik tanulmányi rendszerből származó adathoz. Az időnyereség azt mutatja, ezen belül mennyit rövidít az integrált MI, beleszámítva az utólagos ellenőrzés idejét is.

| Érinthető arány ↓ / Időnyereség → | 30% | 40% | 50% |
|---|---|---|---|
| **25%** | 7,5% — 1,0 millió óra | 10,0% — 1,3 millió óra | 12,5% — 1,7 millió óra |
| **35%** | 10,5% — 1,4 millió óra | **14,0% — 1,9 millió óra** | 17,5% — 2,3 millió óra |
| **45%** | 13,5% — 1,8 millió óra | 18,0% — 2,4 millió óra | 22,5% — 3,0 millió óra |

A kiemelt cella példaszámítás. Ha az adminisztráció 35%-a érinthető, és azon belül 40% időnyereség érhető el, az eredő 14%: évente mintegy 1,9 millió pedagógusi munkaóra, pedagógusonként körülbelül 16 óra. Egyik paraméterre sincs hazai mérés, ezért a táblázat inkább a nagyságrendet mutatja meg, és azt, melyik feltevésre érzékeny a végeredmény. A valódi értéket a 4.2 pont szerinti pilotnak kell megadnia.

A felszabaduló időt szándékosan nem fejezzük ki bérértéken. A pedagógusok létszáma nem csökken és a bérük sem lesz kevesebb, tehát költségvetési megtakarítás nem keletkezik; ami keletkezik, az felszabaduló szakmai kapacitás. Az évi 1,9 millió óra és a pedagógusonkénti évi 16 óra olyan állítás, amely a költségvetési oldalt olvasó számára sem félrevezető.

A számítás költségoldala, vagyis az üzemeltetői ráfordítás, a nyilvántartás működtetése és az intézményi felkészítés, még nem készült el. Ezt a 9. fejezet nyitott kérdésként rögzíti.

### 4.2 A pilot

A fenti számítás legnagyobb gyengesége, hogy magyar mérés nélkül készült, ezért a javaslat kötelező pilot-mérést ír elő a 6./IV. pont szerint, amelynek eredménye a műveleti szakasz indítása előtt rendelkezésre áll.

A pilot néhány száz pedagógussal, több intézménytípusban zajlik, és öt kérdést mér. Hogy mire megy ma az adminisztrációs idő, folyamatonként bontva: napló, jegyrögzítés, szöveges értékelés, mulasztáskövetés, szülői kommunikáció, időszaki összesítés. Hogy mely folyamatok igényelnek tanulmányi rendszerből adatot, ami az érinthető arány tényleges értékét adja. Hogy ugyanaz a folyamat mennyi idő integrált MI-vel, ahol lehetséges hasonló feladatot végző kontrollcsoporttal összevetve. Hogy mekkora az utóellenőrzési idő, vagyis mennyit tölt a pedagógus az MI kimenetének átnézésével és javításával, mert e nélkül a nyereség túlbecsült marad. Végül hogy változik-e a hibaarány a rögzített adatokban és a kimenő kommunikációban.

Az utolsó kérdés érdemben is fontos, mert egy gyorsabb, de hibásabb adminisztráció nem eredmény. A pilotnak ezért időt és minőséget egyaránt mérnie kell, és ezután a hatásvizsgálat már magyar mérésre épülhet.

### 4.3 Biztonsági és adatvédelmi kockázat, feltételezés

Arról, hogy hány szülő adta át a KRÉTA-jelszavát harmadik félnek, és hány pedagógus másol tanulói adatot magáncélú MI-fiókba, nincs adat. Ez a probléma természetéből következik, hiszen az adatkezelő iskola sem tudja, mert a jelenség nem hagy nyomot a rendszerben. Egyetlen pedagógus egyetlen másolással egy teljes osztálynyi tanuló adatát viheti ki szerződés nélkül.

A javaslat ezen a ponton önmagában is hoz eredményt, mert bevezetése után minden felhatalmazás naplózott, megtekinthető és megszámlálható lesz, akkor is, ha kiderül, hogy a jelenség a feltételezettnél ritkább.

### 4.4 Esélyegyenlőségi kár, feltételezés

Az MI-asszisztens feltehetően azoknak a szülőknek segít a legtöbbet, akiknek az iskolai rendszerek kezelése ma nehézséget okoz: a kevésbé gyakorlott digitális felhasználóknak, a több gyermeket nevelő, időhiányos családoknak és a nem magyar anyanyelvű szülőknek. Ha ez így van, akkor hivatalos út hiányában éppen ők maradnak ki, vagy ők vállalják a legnagyobb kockázatot. Ezt az állítást hazai adat nem támasztja alá, és a hatásmérés egyik kérdése éppen ez legyen.

### 4.5 Innovációs kár, részben dokumentált

Hazai fejlesztő ma nem tud stabil, jogszerű terméket építeni az oktatási rendszerekre, mert nincs dokumentált felület, és az üzemeltető a nem hivatalos klienst rendellenesnek minősíti az 1.4 pont szerint. A meglévő megoldások egy rendszerfrissítéssel megszűnhetnek. Hogy ez konkrétan hány vállalkozást tartott vissza, arról nincs felmérés, a mechanizmus azonban az 1.6 pontban leírt működési kényszerekből közvetlenül látszik.

---

## 5. Megoldási célok

### 5.1 A meglévő hozzáférés delegálható legyen, meghatározott funkciókörben

A hozzáférés körét nem szükséges újraszabályozni, mert azt a rendszerek meglévő jogosultságkezelése eldönti. Szabályozásra a csatorna és a felhasználás szorul.

Teljes funkcióparitást nem ígérünk. A felületi és a programozói funkciók nem képezhetők le mindig egy az egyben, és egy jövőbeli, különösen érzékeny új funkció automatikus megnyílása nem vállalható. Helyette funkciókatalógust javaslunk, a PSD2 mintájára, amely szintén meghatározott szolgáltatásokhoz szabályoz hozzáférést.

A kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és mindegyikhez hozzárendeli a szükséges bizalmi szintet, valamint a 7.3 pont szerinti adatkör-besorolást. Új hivatalos funkció megjelenésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz, a katalógust pedig a miniszter évente felülvizsgálja.

*Mérhető célok:* a katalógus 2027. szeptember 1-jén lefedi a hivatalos alkalmazások olvasási funkcióinak 100%-át az alapadatkörben; 2028. szeptember 1-jén tartalmazza a műveleti funkciók besorolását, és jelszóátadásra egyetlen katalógusbeli funkcióhoz sincs szükség.

### 5.2 A felület legyen nyilvános, stabil és megkülönböztetésmentes

A dokumentáció legyen nyilvános, verziózott és tesztkörnyezettel ellátott. A nyilvánosság a specifikációra vonatkozik, az adathoz való hozzáférés pedig hitelesített és a felhasználó jogosultságához kötött marad. A megkülönböztetésmentesség tartalmát a 7.2 pont adja meg.

*Mérhető célok:* a dokumentáció és a szintetikus adatokat tartalmazó tesztkörnyezet 2027. június 30-ig publikus; a visszafelé nem kompatibilis változásokat legalább kilencven nappal előre bejelentik.

*Nemzetközi példa:* az amerikai Ed-Fi Alliance nyílt adatszabványa és az 1EdTech OneRoster-szabványa a közoktatási nyilvántartó rendszerek és harmadik fél alkalmazások közötti adatcserére; felsőoktatásban az uniós Erasmus Without Paper hálózat.

### 5.3 A pedagógusi MI-használat legyen intézményileg megszervezhető

Ez a javaslat szakpolitikai magja, és az indoklása is szakpolitikai.

Az MI-jártasság nem pusztán képzési kérdés. Tanfolyamon meg lehet tanulni, mi az a nyelvi modell, de azt, hogy egy konkrét kimenetben hol lehet megbízni, csak a saját munkán lehet megtanulni. A pedagógus akkor tud az MI-vel szakmailag és kritikusan bánni, ha az a tényleges munkafolyamataiban jogszerűen használható. Amíg ez a feltétel hiányzik, vagy nem használja, vagy szabálytalanul használja, és mindkét esetben kívülálló marad azzal az eszközzel szemben, amelyről később szakmai döntéseket kellene hoznia.

Az is számít, hogyan érkezik az eszköz. Ha az MI külön alkalmazásként jelenik meg, amelyet meg kell nyitni és amelybe kézzel kell bemásolni az adatot, akkor csak eggyel több rendszer kerül egy már most is hosszú sorba. Akkor válik használhatóvá, ha hozzáfér a pedagógus által amúgy is használt rendszerekhez, és természetes nyelvű munkafelületet ad föléjük, hogy a rendszerek adata jusson el az emberhez.

Az adminisztráció rövidítése a legkönnyebben mérhető haszon, de nem a legfontosabb. Egy tanulmányi rendszerhez kapcsolt, felügyelt MI segíthet egy helyen áttekinteni a lemaradásra utaló, a pedagógus számára amúgy is rendelkezésre álló jeleket, vagyis a jegyeket, a hiányzásokat és a határidőket, amelyek ma külön felületeken állnak. Segíthet előkészíteni a szülői kommunikációt, tényszerű összefoglalót adva arról, mi történt egy tanulóval az elmúlt hetekben. Segíthet az időszaki összesítésekben a félévi és év végi zárásnál, és támogathatja a szöveges értékelést egy első megfogalmazással, amelyet a pedagógus felülír. A rögzítés és a szakmai döntés minden esetben a pedagógusnál marad.

A jelenlegi zártság elsősorban a mindennapi, kontrollált, intézményileg engedélyezett és naplózott használatot zárja ki. A kimásolásos gyakorlatra nincs hatással. Hogy az eszköz állami fejlesztésű, központilag beszerzett vagy fenntartói szerződéssel biztosított, a javaslat szempontjából közömbös, mert mindegyik ugyanazon a nyilvános felületen, a harmadik bizalmi szinten kapcsolódik.

*Mérhető cél:* 2028. szeptember 1-jéig minden KRÉTA-t használó intézményben elérhető a pedagógusi felhatalmazások intézményi szintű listázása, engedélyezése és visszavonása.

### 5.4 A felhasználó tudja, mi történik az adatával

*Mérhető célok:* 2027. szeptember 1-jétől minden felhatalmazás a 7.3 pont szerinti, köznyelvi tájékoztatással jön létre; a felhatalmazások 100%-a megtekinthető és visszavonható a hivatalos felületen; 2029-től évente nyilvános jelentés készül a regisztrált kliensekről bizalmi szintenként, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

---

## 6. Várható haszon

| Szereplő | Rövid táv (2027–2028) | Közép- és hosszú táv |
|---|---|---|
| **Szülők, gondviselők** | jelszóátadás nélkül, láthatóan és visszavonhatóan kapcsolják a választott asszisztensüket; a döntés pillanatában megtudják, hová kerül az adat; nem kell még egy külön iskolai alkalmazás, több gyerekhez sem külön felület | a kevésbé gyakorlott digitális felhasználók és a nem magyar anyanyelvű családok is könnyebben követik az iskolai ügyeket (a 4.4 pont szerint feltételezés) |
| **Tanulók** | órarend, feladatok, határidők a saját eszközeikben | tanulástámogató alkalmazások naprakész iskolai adatra építhetnek |
| **Pedagógusok** | 2028-tól az intézmény által engedélyezett eszköz szabályosan kapcsolódik; a kézi másolás helyére ellenőrizhető folyamat lép, és a kockázatot nem a pedagógus viseli személyesen | az 5.3 pontban felsorolt munkafolyamatok támogatása, a pilot által mért tényleges időnyereséggel |
| **Intézmények, fenntartók** | először látják és korlátozhatják, milyen szoftverek férnek hozzá az általuk kezelt adathoz | az MI-eszközök beszerzése szállítófüggetlenné válik |
| **Hallgatók, oktatók** | — | 2028-tól a tanulmányi rendszerek adatai intézménytől függetlenül, egységesen kezelhetők |
| **Hazai fejlesztők** | dokumentált, stabil felület; a tisztább adatkezelés a jóváhagyó képernyőn versenyelőny | 2030-tól a megoldások a nemzetközi szabványok mentén exportálhatók |
| **Üzemeltetők, állam** | a megkerülő megoldások nem tervezett forgalma szabályozott, azonosítható forgalommá válik; az üzemeltetői felelősség a 7.4 pont szerint egyértelművé válik | a pilot és a nyilvános hatásmérés alapján az oktatási digitalizáció eredménye mérhető |

Az üzemeltetői oldalon a bevezetés a meglévő felületekre és a már OAuth-alapú hitelesítési infrastruktúrára építhet. Emellett új kliensregisztrációs, felhatalmazás-kezelési, dokumentációs, biztonsági és üzemeltetési képességeket igényel, köztük kérésszám-korlátozást, visszaélés-felismerést, felügyeletet, tesztkörnyezet-fenntartást és fejlesztői támogatást. Ezek ráfordítását a 9. fejezet nyitott kérdésként kezeli.

---

## 7. Pontos szakpolitikai változás

### 7.1 Három külön kérdés, három külön szabály

A javaslat három, egymástól élesen elváló helyzetet érint, és a normaszöveg is végig külön kezeli őket. Egyetlen elvként összefoglalva — „aki hozzáfér, ugyanazt tehesse a saját eszközével is" — a legvédhetőbb esetre szabott indokolás a legkockázatosabbat is igazolni látszana.

| | **A) Saját adat olvasása** | **B) Saját adatkörben műveletvégzés** | **C) Intézményi feladatkörben gyakorolt jogosultság** |
|---|---|---|---|
| Ki gyakorolja | tanuló, szülő, gondviselő, hallgató | tanuló, szülő, gondviselő, hallgató | pedagógus, oktató |
| Mire terjed ki | a rá, illetve a gyermekére vonatkozó adat lekérdezése | igazolás beküldése, vizsgajelentkezés, üzenetküldés | más érintettek adatainak kezelése: jegy, mulasztás, értékelés, haladási napló |
| Kinek az érdekkörében | az érintett magáncélja | az érintett magáncélja | az intézmény közfeladata |
| Ki dönt a felhatalmazásról | az érintett egyedül | az érintett egyedül | az intézmény mint adatkezelő |
| Kockázat, ha elromlik | az érintett saját adata kerül rossz helyre | az érintett nevében jön létre hamis nyilatkozat | egy vagy több osztálynyi tanuló adata kerül ki, vagy hamis bejegyzés keletkezik a hivatalos nyilvántartásban |
| Szükséges bizalmi szint | első | második | harmadik |
| Éles indulás | 2027. szeptember 1. | 2028. szeptember 1. | 2028. szeptember 1. |

Az A) eset a legerősebb, mert az érintett a saját adatát nézi, és más jogát nem érinti. A B) eset már nyilatkozatot hoz létre az érintett nevében, ezért azonosított kiadó kell mögé, de továbbra is az érintett saját ügye marad.

A C) eset szerkezete más. A pedagógus tanulók adatát kezeli, az intézmény utasítására, az intézmény adatkezelői felelőssége mellett. Itt az adatkezelő intézmény rendszeresít egy eszközt, amelyet a pedagógus a saját munkamenetéhez köt, és a felhatalmazás az ő jogosultságát követi.

### 7.2 Bizalmi és biztonsági modell

Ez a réteg azt szabályozza, ki kapcsolódhat és milyen műveletre. Az adat további sorsáról a 7.3 pont szól.

**Első bizalmi szint, bejelentett kliens.** Kizárólag olvasás, kizárólag az érintett saját, illetve a szülő esetében a gyermekére vonatkozó adatkörében. A regisztráció önkiszolgáló, dinamikus kliensregisztrációval (RFC 7591), egyedi engedélyezési eljárás nélkül. Feltétele működő kapcsolattartási cím, közzétett adatkezelési tájékoztató, a kliens nyilvános megnevezése és a 7.3 pont szerinti továbbítási nyilatkozat. A hitelesítés OAuth 2.0 authorization code folyamat kötelező PKCE-vel, az RFC 9700 szerint; implicit és jelszó alapú folyamat nem alkalmazható. Korlátozza kérésszám-korlát, rövid tokenélettartam, felhasználónkénti egyedi jóváhagyás, és a jóváhagyó képernyőn megjelenő jelzés arról, hogy a kiadó nincs átvilágítva.

**Második bizalmi szint, nyilvántartásba vett szolgáltató.** Az előző szint jogosultságain túl műveletvégzés az érintett saját adatkörében, valamint pedagógusi és oktatói olvasás. Feltétele azonosított kiadó cégjegyzék- vagy nyilvántartási számmal, székhellyel és felelős kapcsolattartóval, a biztonsági incidens bejelentésének vállalása, továbbá a nyilvántartás által kibocsátott, aláírt szoftvernyilatkozat. A kliens bizalmas kliensként, aszimmetrikus kulcsú hitelesítéssel és birtokláshoz kötött hozzáférési tokennel csatlakozik.

**Harmadik bizalmi szint, intézményi adatfeldolgozó.** Műveletvégzés pedagógusi vagy oktatói jogosultság körében, más érintettek adataival. Feltétele az előző szint követelményein túl érvényes, a GDPR 28. cikke szerinti adatfeldolgozói szerződés az adatkezelő intézménnyel vagy a fenntartóval, és szereplés az intézmény engedélyezőlistáján. Emelt biztonsági profilt (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldást és kliensattesztációt igényel.

**Megkülönböztetésmentesség.** Egy böngészőben futó nyilvános kliens, egy mobilalkalmazás és egy szerveroldali bizalmas kliens kockázata eltér, és az RFC 9700 éppen ezekre az eltérésekre ad külön ellenintézkedéseket. A szabály célja az, hogy az üzemeltető ne tudja biztonsági indokra hivatkozva elsorvasztani a harmadik fél klienseit. Négy elemből áll. Az azonos bizalmi szintbe tartozó klienseket azonos feltételekkel kell kiszolgálni. Az üzemeltető hivatalos alkalmazása csak olyan képességgel és szolgáltatásminőséggel rendelkezhet, amely azonos bizalmi szintű felhatalmazott kliens számára is elérhető, és a hivatalos alkalmazást e célból be kell sorolni valamelyik szintbe. Kockázatalapú korlátozás alkalmazható, ha előre közzétett, objektív kritériumon alapul, és minden azonos helyzetű kliensre kiterjed. Egyedi kliens felfüggesztése bizonyítékkal alátámasztott biztonsági okból lehetséges, írásbeli indokolással, jogorvoslati lehetőséggel, és a felfüggesztések számát az éves nyilvános jelentésben közölni kell.

**Kompromittált vagy visszaélő kliens.** A nyilvántartást vezető szerv a kliens regisztrációját visszavonhatja, és ekkor az adott klienshez tartozó összes felhatalmazás azonnal hatályát veszti. Az üzemeltető köteles értesíteni azokat a felhasználókat, akiknek a felhatalmazása a visszavont kliensre vonatkozott. A kiadó a tudomásszerzéstől számított hetvenkét órán belül köteles bejelenteni a klienst érintő biztonsági incidenst.

**Adathalászat elleni alapvédelem.** A jóváhagyó képernyő a hivatalos felületen jelenik meg. A kliens megnevezését és kiadóját a hivatalos felület a nyilvántartásból veszi, és a kliens ezt nem írhatja felül. A felhatalmazás határozott, legfeljebb tizenkét hónapos időtartamra szól, majd megújítandó.

**Amit ez a keret elér és amit nem.** A bizalmi szint azt szabályozza, ki kapcsolódhat. A felhasználó döntését a 7.3 pont szerinti tájékoztatás javítja, de a döntés az övé marad. Az első bizalmi szinten átvilágítatlan kiadó is kaphat olvasási hozzáférést kiskorú adataihoz, szülői jóváhagyással. Ezt vállaltan tartjuk így, mert e nélkül a javaslat lényege veszne el, és mert a szülő ma ugyanennek a körnek ad jelszót, a rendszer számára láthatatlanul. A jóváhagyó képernyő ezért kifejezetten jelzi, ha a kiadó nincs átvilágítva.

### 7.3 A felhasználás rétege és az adatkör-besorolás

A felhasználó jogosultsága nem változik: a szülő ma is látja a gyermeke jegyeit, és ezután is ugyanazokat fogja látni. Az új kockázat abból fakad, hogy rajta kívül a felhatalmazott szoftver is hozzáfér ehhez az adathoz, majd azt tovább kezeli, jellemzően továbbküldi egy MI-szolgáltatónak.

A szabályozás kérdése ezen a ponton az, hogy a felhasználó tudja-e, mi történik az adatával. A hatályos gyakorlatban ezt minden szolgáltató a saját adatkezelési tájékoztatójában, saját nyelvezetével rendezi, a felhasználó pedig egy jelölőnégyzetet pipál ki. A javaslat ezért érthető tájékoztatást ír elő a döntés pillanatában, és korlátot arra, mi vihető egyáltalán tovább.

**A döntési képernyő köznyelven.** A jóváhagyó képernyő a hivatalos felületen jelenik meg, és köznyelven mondja meg, mi történik az adattal. A részletes jogi tájékoztató mögötte állhat, egy kattintásra, de a döntés önmagában is megalapozható legyen.

**A továbbítási nyilatkozat.** Ahhoz, hogy a hivatalos felület ezt meg tudja jeleníteni, a kliens kiadójának a regisztrációkor nyilatkoznia kell arról, hogy az adatot kinek továbbítja, hová, meddig tárolja, és használja-e modellfejlesztésre. A nyilatkozat a nyilvántartásba kerül, a hivatalos felület onnan veszi, és a kliens felülírni nem tudja. Valótlan nyilatkozat esetén a szoftver törlődik a nyilvántartásból.

A kötelező tartalmi elemeket a normaszöveg sorolja fel tételesen a 7./I. B) § (1) bekezdésének a)–h) pontjában. A rendeletnek a tartalmat kell előírnia, a szövegezést nem. Az alábbi minta azt mutatja, hogyan néz ki ez a gyakorlatban:

> **Engedélyt kér: Üzenőfüzet** — kiadó: Példa Kft. (második bizalmi szint, azonosított kiadó)
> **Mit kap meg:** Anna jegyei, hiányzásai, órarendje, házi feladatai és számonkérései.
> **Mit nem kap meg:** fegyelmi és gyermekvédelmi bejegyzések, egészségügyi adatok, a pedagógusok egymás közti üzenetei.
> **Hová kerül az adat:** a program továbbküldi az általad választott MI-asszisztensnek (OpenAI ChatGPT). Az adat elhagyja az Európai Uniót (Egyesült Államok).
> **Meddig tárolják:** az MI-szolgáltató 30 napig tárolja, utána törli.
> **Modellfejlesztésre használják-e:** nem.
> **Ha visszavonod:** a program azonnal elveszti a hozzáférést. A korábban elküldött adatot a fenti törlési határidő szerint törlik.
> **Meddig szól:** 12 hónapig, 2028. szeptember 1-jéig. Utána újra kell engedélyezned.
> **Bármikor visszavonhatod:** KRÉTA → Engedélyeim.
> [Részletes tájékoztató] [Nem engedélyezem] [Engedélyezem]

Ha a kiadó valamelyik elemről nem tud nyilatkozni, azt a tényt kell megjeleníteni. A „nem ismert, hogy az MI-szolgáltató meddig tárolja" önmagában is információ a szülőnek, és versenyhátrány annak, aki így nyilatkozik. A rendelkezés ezért a piacra is hat: aki tisztább adatkezelést tud vállalni, azt a jóváhagyó képernyőn láthatóvá teszi.

**Az adatkörök.** A jegy és az órarend más elbírálást kíván, mint egy gyermekvédelmi jelzés, egy fegyelmi eljárás irata, egy egészségügyi vagy sajátos nevelési igényre vonatkozó adat, vagy egy olyan bejegyzés, amely más tanulót is érint. A javaslat ezért három adatkört különböztet meg.

| Adatkör | Példa | Alapszabály |
|---|---|---|
| **Alapadatkör** | jegy, órarend, házi feladat, számonkérés, saját hiányzás | delegálható és továbbítható, ha a tájékoztatás megtörtént |
| **Korlátozott továbbítású adatkör** | gyermekvédelmi jelzés, fegyelmi ügy irata, egészségügyi adat, sajátos nevelési igény, szociális támogatás | a delegált hozzáférés keretében külső szolgáltatóhoz nem továbbítható; a hivatalos felületen továbbra is látható |
| **Más személyt is érintő adat** | pedagógusi üzenetváltás, csoportot érintő bejegyzés | csak szűkítve, a harmadik személyre vonatkozó rész elhagyásával, vagy nem delegálható |

A „korlátozott továbbítású adatkör" ennek a javaslatnak a saját szabályozási kategóriája, teljes alakjában a delegált továbbítás szempontjából fokozott védelem alá sorolt adatkör. A besorolás az adat jogi minősítését érintetlenül hagyja, és arról szól, mi mehet ki a delegált csatornán. Ebből következik a legfontosabb pontosítás: a szabály a szülő látási jogát érintetlenül hagyja, és azt korlátozza, hogy ez az adat a delegált csatornán automatikusan egy külső MI-szolgáltatóhoz kerüljön.

A szülői és tanulói olvasási funkciókra a besorolás első vázlata elkészült, és a 11. fejezetben szerepel. Húsz valós KRÉTA-végpontból tizenhárom tiszta alapadatkör, a többi részleges elhagyást igényel, egy pedig egyáltalán nem delegálható. A vázlatból két általános szabály rajzolódott ki. Ahol a válasz más természetes személy adatát is tartalmazza, ott az alapértelmezés a rész elhagyása, ami a rendelettől mezőszintű besorolást, az üzemeltetőtől mezőszintű szűrést kíván. Ahol pedig a funkció teljes értéke más személyek adatából áll, ott a funkció nem delegálható.

**Mit vállal az előterjesztés ezen a rétegen.** Megnevezi magát a réteget, vagyis kimondja, hogy a felhasználás szabályozása önálló kérdés a hozzáférésétől, és a szolgáltatók belátására nem hagyható. Rögzíti az alapértelmezést, amely szerint a korlátozott továbbítású adatkör mindaddig nem továbbítható, amíg külön szabály mást nem mond. Megadja a besorolás helyét a kormányrendelet funkciókatalógusában, ahol a törvény nyitása nélkül felülvizsgálható. És előírja a tájékoztatást, amely a besorolástól függetlenül minden esetben érvényes.

Az adatkörök tételes, mezőszintű besorolását és annak eldöntését, hogy egy MI-szolgáltató mit tehet a kapott adattal a saját rendszerén belül, a javaslat a 9. fejezet nyitott kérdései közé sorolja.

### 7.4 Felelősségi és adatkezelői szerepek

| Szereplő | A) és B) eset | C) eset |
|---|---|---|
| Rendszerüzemeltető (eKRÉTA Zrt., tanulmányi rendszerek szállítói) | adatfeldolgozó az intézmény megbízásából; felel a felületért, a hitelesítésért és a felhatalmazás-kezelésért | ugyanaz |
| Köznevelési vagy felsőoktatási intézmény | adatkezelő | adatkezelő; dönt arról, mely szoftver kaphat felhatalmazást |
| A felhatalmazott szoftver kiadója | önálló adatkezelő a felhasználó megbízásából végzett saját adatkezeléséért; felel a továbbítási nyilatkozat valóságáért | az intézmény adatfeldolgozója, a GDPR 28. cikke szerinti szerződéssel |
| Érintett (tanuló, szülő, hallgató) | a felhatalmazás jogosultja | — |
| Pedagógus, oktató | — | az intézmény utasítása szerint jár el; a felhatalmazás nem személyes joga |

Három rendelkezést ehhez ki kell mondani a normaszövegben.

A pedagógusi felhatalmazás az intézmény döntése. Az intézmény rendszeresít eszközt, amelyet a pedagógus a saját munkamenetéhez köt, és ha a pedagógus jogviszonya megszűnik vagy a jogosultsága változik, a felhatalmazás automatikusan követi.

Az üzemeltető felelőssége és a felhatalmazott szoftver önálló adatkezelői felelőssége elválik. Az üzemeltető a felhatalmazott szoftvernek szabályszerűen átadott adat ezt követő, önálló adatkezelőként végzett kezeléséért nem felel. Ennek kimondása nélkül az üzemeltetőnek közvetlen érdeke fűződik ahhoz, hogy a nyitást ellehetetlenítse, és a gyakorlatban ez a rendelkezés dönti el, hogy a jogszabály működni fog-e.

A kiadó felel a nyilatkozatáért. Valótlan továbbítási nyilatkozat esetén a szoftver törlődik a nyilvántartásból, és minden hozzá tartozó felhatalmazás megszűnik. Ez a szankció teszi a tájékoztatási szabályt érvényesíthetővé.

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

**Bizalmi szintek és kliensregisztráció.** A rendelet a 7.2 pont szerinti három bizalmi szintet állapítja meg, szintenként meghatározva a regisztráció módját, a kliens hitelesítésének követelményeit és az elérhető funkciókört. Az első szintre a dinamikus kliensregisztráció (RFC 7591) egyedi engedélyezési eljárás nélkül érvényes; a harmadik szinthez emelt biztonsági profil (FAPI 2.0 Security Profile) vagy azzal egyenértékű megoldás és kliensattesztáció szükséges.

**Funkciókatalógus és adatkör-besorolás.** A rendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a szükséges bizalmi szintet, valamint az adatkör besorolását: alapadatkör, korlátozott továbbítású adatkör, vagy más személyt is érintő adat. Új hivatalos funkció bevezetésekor az üzemeltető kilencven napon belül besorolási javaslatot tesz; a katalógust a miniszter évente felülvizsgálja.

**A továbbítási nyilatkozat és a jóváhagyó képernyő.** A kiadó a nyilvántartásba vételkor nyilatkozik az Nkt. B) § (1) bekezdése szerinti adatokról. A jóváhagyó képernyő a hivatalos felületen jelenik meg, köznyelven, a nyilvántartás adatai alapján, a szoftver által nem módosítható módon. A rendelet a kötelező tartalmi elemeket írja elő, a szövegezést nem.

**Visszavonás és incidenskezelés.** A tokenek visszavonása az RFC 7009 szerint támogatott; a felhasználó által visszavont felhatalmazás legfeljebb öt percen belül hatályát veszti. A kiadó a tudomásszerzéstől számított hetvenkét órán belül bejelenti a klienst érintő biztonsági incidenst. A nyilvántartásból törölt szoftverhez tartozó felhatalmazások azonnal hatályukat vesztik.

**Átláthatóság.** Az üzemeltető évente nyilvános jelentést tesz közzé a regisztrált kliensek bizalmi szintenkénti számáról, az aktív felhatalmazásokról, a visszavonásokról, a kliensfelfüggesztésekről és a biztonsági incidensekről.

**Szabványkövetés.** A rendelet a hivatkozott szabványok megnevezését a nemzetközi szabványfejlődéshez igazodva módosíthatja, a bizalmi szintekhez rendelt garanciák változatlanul hagyásával.

### IV. A hatásmérés előírása: pilot

*(javasolt indulás: 2027. szeptember 1., eredmény: 2028. március 31.)*

Javasoljuk, hogy a kormányrendelet írjon elő pilot-mérést, amelynek eredménye a műveleti és a pedagógusi szakasz indítása előtt rendelkezésre áll. A mérés legalább néhány száz pedagógusra terjedjen ki, több intézménytípusból, köztük általános iskolából, gimnáziumból és szakképző intézményből, és több fenntartótól. Tárgya a 4.2 pontban felsorolt öt kérdés: az adminisztrációs idő folyamatonkénti megoszlása, a tanulmányi rendszerből adatot igénylő folyamatok aránya, az azonos folyamat időigénye integrált MI-vel, az utóellenőrzésre fordított idő, valamint a hibaarány változása. Ahol lehetséges, hasonló feladatot végző kontrollcsoporttal összevetve mérjen, hogy az eredmény ne pusztán az előtte-utána különbségén múljon. Az eredmény nyilvános, és a funkciókatalógus, valamint a 2028. szeptemberi szakasz megalapozását szolgálja.

Ha a pilot nem igazolja az időnyereséget, a javaslat olvasási része akkor is indokolt marad, mert annak indoka az érintett saját adatához való hozzáférés.

---

## 8. Bevezetési ütemterv

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

## 9. Nyitott kérdések

Az alábbi kérdéseket a javaslat nem dönti el, de a szakmai vitában várhatóan felmerülnek, ezért érdemesnek tartottuk megnevezni őket.

1. **A kliensnyilvántartás vezetése.** Mely szerv vezesse, milyen eljárásrenddel, jogorvoslattal és finanszírozással. Az előterjesztés csak annyit rögzít, hogy a szervet a Kormány rendeletben jelöli ki.
2. **A nagykorúsághoz közeledő tanuló.** Hogyan viszonyul egymáshoz a tanuló saját felhatalmazása és a szülői felhatalmazás, melyik életkortól illeti meg a tanulót önálló jog, és mit lát ilyenkor a szülő.
3. **Az adatkörök mezőszintű besorolása.** A 7.3 pont megadja a kategóriákat és az alapértelmezést, de a besorolás elvégzése önálló, jelentős szakmai munka. A szülői és tanulói olvasási funkciókra készült egy első vázlat a 11. fejezetben, amely húsz valós KRÉTA-végpontot sorol be, és hat nehéz esetet nevez meg. A műveleti és a pedagógusi funkciók besorolása még hátravan, és az üzemeltető funkciólistáját igényli.
4. **Az MI-szolgáltató belső adatkezelése.** A javaslat előírja, hogy erről tájékoztatni kell, és megtiltja a korlátozott továbbítású adatkör továbbítását, de nem szabályozza, mit tehet a szolgáltató a kapott adattal a saját rendszerén belül. Ez önálló szabályozási réteg.
5. **A költségoldal.** Az üzemeltetői ráfordítás, a nyilvántartás működtetése, a pilot és az intézményi felkészítés költsége még nincs becsülve.
6. **A továbbítási nyilatkozat ellenőrzése.** A javaslat szankcionálja a valótlan nyilatkozatot, de nem mondja meg, ki és milyen rendszerességgel ellenőrzi.
7. **Statisztikai pontosítások.** A KRÉTA-alkalmazások megjelenési éve és az egészségügyi adattérről szóló rendelet 3. cikkének bekezdésszintű hivatkozása még pótlandó; a szövegben [ELLENŐRIZENDŐ] jelöli őket.
8. **Az érdekütközés kezelése.** Az 1.6 pontban leírt prototípust az előterjesztés készítője fejlesztette. A javaslat elfogadása a prototípus jelenlegi közvetítő megoldásait tenné szükségtelenné, és a létrejövő piacon az előterjesztő is szereplő lehet.

---

## 10. Források

**Jogforrások**

- Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR), különösen a 12., 15., 20. és 28. cikk, valamint a (63) preambulumbekezdés
- Az Európai Parlament és a Tanács (EU) 2015/2366 irányelve (PSD2) és a Bizottság (EU) 2018/389 felhatalmazáson alapuló rendelete
- Az Európai Parlament és a Tanács (EU) 2023/2854 rendelete (adatrendelet), II. fejezet
- Az Európai Parlament és a Tanács (EU) 2024/1689 rendelete (MI-rendelet), 4. cikk
- Az Európai Parlament és a Tanács (EU) 2025/327 rendelete (európai egészségügyi adattér), 3. cikk
- 2011. évi CXC. törvény a nemzeti köznevelésről; 2011. évi CCIV. törvény a nemzeti felsőoktatásról
- Competition and Markets Authority (Egyesült Királyság): Retail Banking Market Investigation Order 2017

**Műszaki szabványok**

- RFC 6749 — The OAuth 2.0 Authorization Framework (2012)
- RFC 7009 — OAuth 2.0 Token Revocation (2013)
- RFC 7591 — OAuth 2.0 Dynamic Client Registration Protocol (2015)
- RFC 7636 — Proof Key for Code Exchange (PKCE) (2015)
- RFC 8414 — OAuth 2.0 Authorization Server Metadata (2018)
- RFC 9700 (BCP 240) — Best Current Practice for OAuth 2.0 Security (2025. január) — https://datatracker.ietf.org/doc/rfc9700/
- OpenID Foundation: FAPI 2.0 Security Profile
- Model Context Protocol (2024. november; OAuth 2.1-re épülő felhatalmazási réteg a 2025. márciusi változattól)

**Egyéb források**

- KRÉTA Tudásbázis: Gyakran Ismételt Kérdések — KRÉTA Mobil applikációk — https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065021 [ELLENŐRIZENDŐ: lekérdezési dátum és archivált példány]

**Statisztikai források**

- KSH: Oktatási adatok, 2024/2025 (előzetes adatok) — https://www.ksh.hu/s/kiadvanyok/oktatasi-adatok-2024-2025-elozetes-adatok/index.html
- KSH: Oktatási adatok, 2025/2026 (előzetes adatok) — https://www.ksh.hu/s/kiadvanyok/oktatasi-adatok-2025-2026-elozetes-adatok/
- KSH: A köznevelési és a szakképző intézményekben alkalmazott pedagógusok és oktatók feladatonként (23.1.1.3.) — https://www.ksh.hu/stadat_files/okt/hu/okt0003.html
- OECD: Results from TALIS 2024 — Country note: Hungary — https://www.oecd.org/en/publications/results-from-talis-2024-country-notes_e127f9e2-en/hungary_29960fb1-en.html

**Szerkesztői jelölés:** a [ELLENŐRIZENDŐ: …] helyeken a számot vagy a tényt publikálás előtt elsődleges forrásból pótolni kell. A statisztikai adatok keresőn keresztül elért kiadványokból származnak; a végleges szövegben a KSH és az OECD elsődleges táblázataival egyeztetendők.

---

## 11. Melléklet: a funkciókatalógus első vázlata

A kormányrendelet melléklete tételesen felsorolja a delegált hozzáféréssel elérhető funkciókat, és funkciónként megadja a bizalmi szintet és az adatkör besorolását. A 9. fejezet ezt a besorolást nevezi meg a javaslat legmunkaigényesebb részének. Az alábbi vázlat elvégzi rajta az első menetet.

### 11.1 Mire épül és meddig terjed

Az Üzenőfüzet prototípus tizenhét KRÉTA-végpontot olvas a szülő nevében. A lista működő integrációból származik, tehát pontosan azt a funkciókört fedi le, amelyet egy delegált hozzáférés első szakasza érintene.

A vázlat kizárólag az A) esetre vonatkozik, vagyis az érintett saját adatának olvasására. A B) eset műveletvégzését és a C) eset pedagógusi jogosultságát ez a forrás nem tartalmazza, mert a prototípus szülői oldalú és csak olvas; azokhoz az üzemeltető saját funkciólistája kell. A felsőoktatási tanulmányi rendszerek önálló katalógust igényelnek.

A besorolás a végpontok szemantikáján alapul, mert mezőszintű válaszséma nem áll rendelkezésre, ezért minden sor validálandó a valódi válaszszerkezet ismeretében. Ez önmagában is érv a javaslat mellett: a katalógus addig nem készíthető el, amíg az üzemeltető nem teszi közzé a felület leírását.

### 11.2 A katalógus

Jelölés: **A** alapadatkör, **K** korlátozott továbbítású adatkör, **M** más személyt is érintő adat.

| # | Funkció | KRÉTA-végpont | Adatkör | Szint | Megjegyzés |
|---|---|---|---|---|---|
| 1 | Kapcsolat ellenőrzése | `sajat/TanuloAdatlap` (metaadat) | A | 1 | csak a kapcsolat élő voltát igazolja |
| 2 | Tanulói adatlap | `sajat/TanuloAdatlap` | A, a más gondviselőre vonatkozó rész elhagyásával | 1 | lásd 11.3 |
| 3 | Gondviselői adatlap | `sajat/GondviseloAdatlap` | A | 1 | a felhatalmazó szülő saját adata; tanulói munkamenetből M |
| 4 | Osztályok és csoportok | `sajat/OsztalyCsoportok` | A | 1 | a pedagógusnevek szakmai minőségben szerepelnek |
| 5 | Értékelések, jegyek | `sajat/Ertekelesek` | A | 1 | a szöveges értékelés szabad szöveg; lásd 11.3 |
| 6 | Mulasztások | `sajat/Mulasztasok` | A, az igazolás indoka K | 1 | lásd 11.3 |
| 7 | Feljegyzések | `sajat/Feljegyzesek` | **K** | 1 | alapértelmezésben nem továbbítható; lásd 11.3 |
| 8 | Faliújság | `sajat/FaliujsagElemek` | A | 1 | intézményi közlés, nyilvános körben |
| 9 | Tanév rendje | `sajat/Intezmenyek/TanevRendjeElemek` | A | 1 | intézményi adat |
| 10 | Lázár Ervin Program előadásai | `Lep/Eloadasok` | A | 1 | alacsony érzékenységű |
| 11 | Órarend | `sajat/OrarendElemek` | A | 1 | pedagógusnév, terem, tantárgy |
| 12 | Órarendi elem részletei | `sajat/OrarendElem` | A | 1 | mint a 11. |
| 13 | Házi feladatok | `sajat/HaziFeladatok` | A | 1 | |
| 14 | Házi feladat részletei | `sajat/HaziFeladatok/{uid}` | A | 1 | |
| 15 | Bejelentett számonkérések | `sajat/BejelentettSzamonkeresek` | A | 1 | |
| 16 | Fogadóórák | `sajat/Fogadoorak` | A, más szülő foglalásának elhagyásával | 1 | lásd 11.3 |
| 17 | Fogadóóra részletei | `sajat/Fogadoorak/{uid}` | A, más szülő foglalásának elhagyásával | 1 | mint a 16. |
| 18 | Heti intézményi beosztás | `sajat/Intezmenyek/Hetirendek/Orarendi` | A | 1 | intézményi adat |
| 19 | Osztályátlagok | `sajat/Ertekelesek/Atlagok/OsztalyAtlagok` | **M** | — | **nem delegálható**; lásd 11.3 |
| 20 | Tárgyi eszköz státusza | `TargyiEszkoz/IsEszkozKiosztva`, `IsRegisztralt` | **K** | 1 | lásd 11.3 |

Húsz funkcióból tizenhárom tiszta alapadatkör, kettő korlátozott továbbítású, három részleges elhagyást igényel, egy pedig nem delegálható. A bizalmi szint a delegálható funkcióknál mindenhol az első, mert kizárólag olvasásról van szó.

A besorolásból két vezérelv rajzolódik ki. Ahol a válasz más természetes személy adatát is tartalmazza, ott az alapértelmezés a rész elhagyása. Ahol a funkció teljes értéke más személyek adatából áll, ott a funkció nem delegálható. Mindkettő a normaszöveg 7./I. A) § (4) bekezdésének alkalmazása.

### 11.3 A nehéz esetek

**A tanulói adatlap gondviselői blokkot tartalmaz.** A tanuló adatlapja jellemzően a gondviselők nevét és elérhetőségét is tartalmazza, ami egy szülő számára részben a másik szülő adata. A funkció delegálható, de a válaszból a felhatalmazást adó gondviselőn kívüli gondviselők elérhetőségi adatait el kell hagyni. Ehhez az üzemeltetőnek mezőszintű szűrést kell tudnia a válaszban.

**A mulasztás igazolási indoka egészségügyi következtetést enged.** A mulasztás ténye a tanuló saját adata. Az igazolás típusa viszont, legyen az orvosi, szülői vagy hatósági, az egészségi állapotára utaló információ: ha egy tanuló mulasztásainak nagy része orvosi igazolású, az önmagában beszédes. A mulasztás dátuma, tantárgya és az igazoltság ténye alapadatkör; az igazolás konkrét indoka és kiállítója korlátozott továbbítású. Ez a sor mutatja meg, miért kevés a végpontszintű besorolás: egyetlen válaszon belül két adatkör van.

**A feljegyzések a legvegyesebb végpont.** Ez a végpont egyaránt tartalmazhat dicséretet, szaktanári figyelmeztetést, magatartási bejegyzést, fegyelmi ügy előzményét, és adott esetben gyermekvédelmi jelzéshez kapcsolódó kontextust, amelyek végpontszinten nem különböztethetők meg. Alapértelmezésben ezért korlátozott továbbítású, a legérzékenyebb lehetséges tartalomhoz igazodva. A besorolás finomítható, ha az üzemeltető típuskódot ad a feljegyzésekhez: akkor a dicséret és a semleges tanári közlés alapadatkörbe kerülhet, a fegyelmi és gyermekvédelmi vonatkozású pedig korlátozott marad. Ez konkrét kérés az üzemeltető felé, és a vázlat egyik fő hozadéka, mert megmutatja, hogy a szabályozás finomsága a mögöttes adatszerkezeten múlik.

**Az osztályátlag az osztály adata.** Az A) eset köznyelvi neve „a saját adat olvasása", a normaszöveg viszont a felhasználó meglévő jogosultságának körét jelöli meg. A legtöbb végpontnál a kettő egybeesik, az osztályátlagnál szétválik: a szülő látja a KRÉTA-ban, tehát a jogosultsága kiterjed rá, de az átlag az osztály adata, más tanulók értékeléseiből képezve. A funkció ezért nem delegálható. Ez az A) § (4) bekezdésének alkalmazása, amely szerint más természetes személy adatára a felhatalmazás csak akkor terjed ki, ha a katalógus erre kifejezetten feljogosít.

A kizárás nem minősíti jogsértőnek a mai megjelenítést. Egy valódi aggregátum jellemzően nem személyes adat, és ahol mégis azzá válhat, ott sem következik automatikusan a jogellenesség. A kizárás indoka az, hogy az automatizált, ismételt lekérdezés más kitettséget jelent, mint az alkalmi kézi megtekintés: a hivatalos felületen a szülő alkalmanként ránéz, egy asszisztens naponta lekérdezheti és el is tárolhatja.

A szülő ezzel elveszíti azt a lehetőséget, hogy az asszisztensén keresztül kérdezzen rá, hogyan áll a gyereke az osztályhoz képest. A hivatalos felületen továbbra is látja, és a szűkítést maga a normaszöveg írja elő. Cserébe elmarad egy egész védelmi gépezet: küszöbérték nélkül nem kell csoportlétszámot kérni az üzemeltetőtől, és nem kell kezelni azt a helyzetet sem, amikor egy asszisztens hétfőn és pénteken is lekéri az átlagot, és a két érték különbségéből kiszámítható az időközben bekerült egyetlen jegy. Ez utóbbi akármekkora csoportnál működik, tehát küszöbértékkel nem is volna kivédhető.

**A szöveges értékelés szabad szöveg.** A szöveges értékelés a tanuló saját adata, tehát alapadatkör. Szabad szöveg lévén a pedagógus magatartási vagy családi körülményre utaló megjegyzést is beleírhat, és ezt a tartalmi kockázatot besorolással kezelni nem lehet. Amit a javaslat tehet: a jóváhagyó képernyőn a szöveges értékelés külön nevesítve jelenjen meg, hogy a szülő tudja, szabad szöveges pedagógusi megjegyzés is kimegy.

**Az eszközstátusz szociális helyzetre utalhat.** A tárgyi eszköz végpontjai azt mondják meg, kiosztottak-e a tanulónak eszközt és regisztrálták-e. Önmagában technikai adat, csakhogy az állami eszközkiosztási programok jellemzően rászorultsági alapon célzottak, így a kiosztás ténye szociális helyzetre enged következtetni. Korlátozott továbbítású; a szülő a hivatalos felületen látja, MI-szolgáltatóhoz nem megy ki. A funkció egy asszisztensben amúgy is marginális haszonnal jár.

**A fogadóóra-foglalás.** Ha a lista megmutatja, hogy egy idősávot már lefoglaltak, az időpontkezelési információ. Ha a foglaló nevét vagy a gyerek nevét is mutatja, az más szülő és más tanuló adata. A szabad és foglalt idősávok delegálhatók, a foglaló azonosítása nem.

### 11.4 Amit az üzemeltetőtől kell kérni

A katalógus lezárásához három dolog kell, és mindhárom az üzemeltető oldalán van. Mezőszintű válaszséma minden végponthoz, amely nélkül a besorolás végpontnévre épül. Típuskód a feljegyzésekhez, amellyel az a végpont felbontható. És mezőszintű szűrés képessége a válaszban, mert három eset részleges elhagyást igényel.

### 11.5 Amit ez a vázlat megmutat

A besorolás elvégezhető: húsz funkcióból tizenhárom egyértelmű, hat a mögöttes adatszerkezet ismeretében eldönthető, egy pedig kimarad.

A végpontszintű szabályozás kevés. Három esetben egyetlen válaszon belül több adatkör van, ezért a rendeletnek mezőszintű besorolást kell lehetővé tennie, az üzemeltetőnek pedig mezőszintű szűrést kell tudnia.

A katalógus a felület nyilvánosságán múlik. Ezt a vázlatot azért lehetett csak részben elkészíteni, mert a válaszmezők nem publikusak. A funkciókatalógus tehát a nyitás következménye: a dokumentáció közzététele nélkül a besorolást senki nem tudja elvégezni, sem a jogalkotó, sem az adatvédelmi hatóság, sem maga az üzemeltető külső ellenőrzés mellett.

A katalógus a normaszöveget is teszteli. Az osztályátlag esete megmutatta, hogy a „saját adat" és a „meglévő jogosultság" szétválhat, és hogy ilyenkor az A) § (4) bekezdése helyesen dönt: más személy adatára a felhatalmazás alapértelmezésben nem terjed ki.
