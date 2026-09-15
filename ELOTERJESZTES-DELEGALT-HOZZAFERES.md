# AI-Ország: saját oktatási adat, saját eszközzel

*Aki ma a KRÉTA-ban vagy egy felsőoktatási tanulmányi rendszerben hozzáfér valamihez – szülő, tanuló, pedagógus, hallgató, oktató –, ugyanahhoz férjen hozzá az általa választott szoftverrel is, akár mesterségesintelligencia-asszisztenssel. Ehhez két dolgot javaslunk: legyen kötelező a jelszóátadás nélküli, felhasználói felhatalmazáson alapuló (delegált) hozzáférés, és legyen nyilvános az a programozói felület, amelyet a hivatalos alkalmazások ma is használnak.*

> Szerkesztői jelölés: a `[ELLENŐRIZENDŐ: …]` helyeken a számot vagy a tényt publikálás előtt forrásból pótolni kell.

## Mi a probléma?

**1. Az adatot ma csak a hivatalos alkalmazás éri el.** A KRÉTA a szülőnek, a tanulónak és a pedagógusnak külön hivatalos mobilalkalmazást kínál (KRÉTA Szülőknek, KRÉTA Tanulóknak, KRÉTA Tanároknak). Ezekben órarend, számonkérések, házi feladatok, jegyek és mulasztások jelennek meg, a pedagógus pedig naplózási és értékelési műveleteket is végezhet. Az alkalmazások mögött tehát működő programozói felület áll, amelyet azonban kizárólag a hivatalos alkalmazás használhat: a KRÉTA belépési rendszere nem teszi lehetővé, hogy harmadik fél szoftvere a felhasználó engedélyével klienst regisztráljon, és a felület dokumentációja nem nyilvános.

**2. Érintettek.**

- **Szülők és gondviselők** – a KRÉTA Szülőknek alkalmazás felhasználói; nem tudják a gyermekük iskolai adatait az általuk választott eszközzel kezelni.
- **Tanulók** – a KRÉTA Tanulóknak alkalmazás felhasználói; ugyanez a saját adataikra.
- **Pedagógusok** – a KRÉTA Tanároknak alkalmazás felhasználói; az adminisztrációs terhük csökkentésére alkalmas AI-eszközt nem tudnak szabályosan a rendszerhez kapcsolni.
- **Köznevelési intézmények mint adatkezelők és fenntartóik** – nem látják és nem tudják szabályozni, milyen szoftverek férnek hozzá az általuk kezelt adatokhoz.
- **Hallgatók és oktatók** – a felsőoktatási tanulmányi rendszerek (elsősorban a Neptun) felhasználói.
- **Felsőoktatási intézmények** – a tanulmányi rendszerek adatkezelői.
- **Rendszerüzemeltetők** – az eKRÉTA Zrt. (KRÉTA) és a felsőoktatási tanulmányi rendszerek szállítói, köztük az SDA Informatika Zrt. (Neptun).
- **Hazai fejlesztők** – nem tudnak stabil, jogszerű terméket építeni az oktatási rendszerekre.

**3. A szülői oldalon a hiány megkerülő megoldásokat szül.** A szülő szeretné egy mondatban megkérdezni, mi vár a gyermekére a héten, melyik tantárgyból romlottak a jegyei, mikor kell igazolást beadni. Hivatalos út nélkül erre csak kockázatos módok vannak. Konkrét példa az Üzenőfüzet nyílt forráskódú szolgáltatás (az előterjesztés készítője üzemelteti), amely a szülők AI-asszisztensét köti össze a KRÉTA-val, és ehhez kénytelen:

- a szülőtől **átvenni a KRÉTA-jelszót**, és a nevében belépni;
- a hivatalos tanulói mobilalkalmazás kliensazonosítóját és **nem dokumentált végpontjait** használni, így bármely rendszerfrissítés után működésképtelenné válhat;
- a belépési **tokeneket saját maga tárolni** és frissen tartani;
- a KRÉTA-hívásokat **lakossági hálózaton keresztül továbbítani**, mert a rendszer az adatközponti hálózatokból érkező kéréseket elutasítja;
- saját tájékoztatóban kezelni, hogy a lekért adatok – köztük **kiskorúak adatai – a szülő által választott, akár az Európai Unión kívüli AI-szolgáltatóhoz** kerülnek.

A szülő a kiadott hozzáférést a KRÉTA-ban nem látja és ott nem tudja visszavonni. Az Üzenőfüzet célja, hogy ez a közvetítő szerep ebben a formában feleslegessé váljon.

**4. A tanári oldalon a hiány szabálytalan használatot szül – nagyobb tétekkel.** A pedagógusok adminisztratív terhe közismert: haladási napló, jegyek és mulasztások rögzítése, szöveges értékelések, félévi és év végi összesítések, szülői levelezés, a lemaradó tanulók követése. Ez pontosan az a munka, amelyben a mesterséges intelligencia ma a legtöbbet segíthet. Hivatalos kapcsolódás hiányában a pedagógus ezt egyetlen módon teheti: a tanulói adatokat **kézzel másolja be saját, magáncélú AI-fiókjába**. Egy másolással egy vagy több osztály adatai mozognak, az iskola nevében kezelt adatokként, adatfeldolgozói szerződés nélkül. Az adatkezelő iskola ezt nem látja, nem tudja korlátozni, és semmilyen naplóban nem jelenik meg. Tiltással ez nem szüntethető meg, mert a szabályos alternatíva technikailag sem létezik: az iskola akkor sem tudna AI-eszközt a KRÉTA-hoz kapcsolni, ha jogszerű szerződése lenne rá.

**5. A hatályos adatvédelmi jog ezt önmagában nem oldja meg.** Az (EU) 2016/679 rendelet (GDPR) 20. cikke szerinti adathordozhatóság csak hozzájáruláson vagy szerződésen alapuló adatkezelésre vonatkozik, a közérdekű feladat végrehajtásához szükséges adatkezelésre – mint az oktatási nyilvántartásokra – a 20. cikk (3) bekezdése alapján kifejezetten nem. A 15. cikk szerinti hozzáférési jog egyszeri adatmásolatot biztosít, nem folyamatos, gépi hozzáférést. A tanulónak, a szülőnek és a hallgatónak ezért ma nincs kikényszeríthető joga ahhoz, hogy a saját adatát a saját eszközével érje el – az iskolának pedig nincs technikai eszköze ahhoz, hogy a pedagógusai szabályozott módon tegyék ugyanezt.

**6. A felsőoktatásban a helyzet még rosszabb.** A Neptun hivatalos mobilalkalmazása 2023. október 19-én, a kétfaktoros belépés bevezetésekor megszűnt. Egyes egyetemek saját alkalmazásai (például a Magyar Agrár- és Élettudományi Egyetem MyMATE és a Debreceni Egyetem UD Studyversity alkalmazása) továbbra is megjelenítik a hallgatók Neptun-adatait. A felület tehát létezik; a hallgató és az oktató saját eszköze viszont nem kapcsolódhat hozzá.

## Hogyan jutottunk ide?

**2011 – az oktatási nyilvántartások jogi kerete.** A nemzeti köznevelésről szóló 2011. évi CXC. törvény (Nkt.) és a nemzeti felsőoktatásról szóló 2011. évi CCIV. törvény (Nftv.) rendezi a köznevelési és felsőoktatási adatkezelést és nyilvántartásokat. Egyik sem tartalmaz rendelkezést arról, hogy az érintett a saját adatához gépi úton, általa választott szoftverrel hozzáférhessen.

**2012–2015 – a delegált hozzáférés szabványai.** Megjelenik az OAuth 2.0 engedélyezési keretrendszer (RFC 6749, 2012), majd kiegészítései: a nyilvános kliensek védelmét szolgáló PKCE (RFC 7636, 2015), a dinamikus kliensregisztráció (RFC 7591, 2015) és a tokenvisszavonás (RFC 7009, 2013). A jelszóátadás nélküli, visszavonható, harmadik fél általi hozzáférés ettől kezdve iparági alapmegoldás.

**2015–2019 – a pénzügyi szektor megoldja ugyanezt a problémát.** A jelszómegosztáson és képernyőkaparáson alapuló számlaaggregátorok kockázatai miatt az (EU) 2015/2366 irányelv (PSD2) előírja, hogy a bankok biztosítsanak hozzáférést az ügyfél által felhatalmazott szolgáltatók számára; az (EU) 2018/389 felhatalmazáson alapuló rendelet 2019. szeptember 14-től dedikált, biztonságos felületet követel meg. Az Egyesült Királyságban a versenyhatóság (CMA) 2018-tól egységes, nyílt banki API-szabványt (Open Banking) tesz kötelezővé a legnagyobb bankoknak.

**2016–2018 – a GDPR.** Az (EU) 2016/679 rendelet 2018. május 25-től alkalmazandó. Bevezeti az adathordozhatósághoz való jogot (20. cikk), de a közérdekű feladat keretében végzett adatkezelést – így az oktatási nyilvántartásokat – kiveszi alóla.

**2019 körül – megjelennek a KRÉTA hivatalos mobilalkalmazásai.** A szülői és tanulói, később a pedagógusi alkalmazás a KRÉTA-adatok mobil elérését kizárólag a saját klienseken keresztül biztosítja. `[ELLENŐRIZENDŐ: az alkalmazások megjelenési éve]`

**2023 – az adatrendelet és a Neptun-app megszűnése.** Az (EU) 2023/2854 rendelet (adatrendelet) kimondja, hogy az összekapcsolt termékek felhasználója hozzáférhet a használat során keletkező adatokhoz és megoszthatja azokat az általa választott harmadik féllel; a rendelet 2025. szeptember 12-től alkalmazandó. Ugyanebben az évben, 2023. október 19-én megszűnik a Neptun hivatalos mobilalkalmazása.

**2024–2025 – az AI-asszisztensek kapcsolódni kezdenek.** A mesterséges intelligenciáról szóló (EU) 2024/1689 rendelet (MI-rendelet) 4. cikke 2025. február 2-től előírja, hogy az MI-rendszereket alkalmazó szervezetek gondoskodjanak munkatársaik MI-jártasságáról. 2024 novemberében megjelenik a Model Context Protocol, amely az OAuth-alapú delegált hozzáférésre építve szabványos módot ad az AI-asszisztensek külső rendszerekhez kapcsolására; 2025-re a nagy AI-szolgáltatók általánosan támogatják. Szülők és pedagógusok elkezdik használni az AI-asszisztenseket iskolai ügyekre. Az oktatási rendszerek felülete változatlan maradt, a kapcsolódás megkerülő megoldásokkal és kézi másolással történik.

## Milyen kárt okoz a jelenlegi helyzet?

**Az érintettek köre.** A probléma a teljes köznevelést és felsőoktatást érinti:

| Érintett csoport | Létszám |
|---|---|
| köznevelési tanulók (általános és középfokú oktatás) | `[ELLENŐRIZENDŐ: KSH, legutóbbi tanév]` |
| szülők, gondviselők | nagyságrendileg a tanulói létszámmal arányos |
| pedagógusok | `[ELLENŐRIZENDŐ: KSH / Oktatási Hivatal]` |
| felsőoktatási hallgatók | `[ELLENŐRIZENDŐ: KSH / Felvi, legutóbbi tanév]` |
| felsőoktatási oktatók | `[ELLENŐRIZENDŐ: KSH]` |

**Elvesztegetett pedagógusi munkaidő – levezetett becslés.** Az AI-támogatás hiányának ára a pedagógusok adminisztrációra fordított idejében mérhető. A becslés képlete:

> éves kiváltható munkaidő = pedagóguslétszám × heti adminisztrációs óraszám × kiváltható arány × tanítási hetek száma (36)

A heti adminisztrációs óraszám hazai értékét az OECD TALIS felmérés adja `[ELLENŐRIZENDŐ: TALIS, magyar pedagógusok heti általános adminisztratív munkaideje]`. Ha az AI-támogatás ennek csak 10%-át váltja ki, az a fenti létszám mellett évente `[SZÁMÍTANDÓ]` pedagógusi munkaórát jelent, amely `[SZÁMÍTANDÓ: átlagos pedagógusi óradíjjal]` forint bérértéknek felel meg. Ez nagyságrendi becslés; a pontos értéket a javaslat szerinti nyilvános hatásmérés adja.

**Biztonsági és adatvédelmi kockázat, amelyet ma senki nem mér.** Hogy hány szülő adta át KRÉTA-jelszavát harmadik félnek, és hány pedagógus másol tanulói adatot magáncélú AI-fiókba, arról nincs adat – és éppen ez a kár egyik formája: az adatkezelő iskola sem tudja. Egyetlen pedagógus egyetlen másolással egy teljes osztály – `[ELLENŐRIZENDŐ: átlagos osztálylétszám, KSH]` tanuló – adatait viheti ki szerződés nélkül. A delegált hozzáférés bevezetése után minden felhatalmazás naplózott és megszámlálható lesz.

**Esélyegyenlőségi kár.** Az AI-asszisztens azoknak a szülőknek segíthet a legtöbbet, akiknek az iskolai rendszerek kezelése ma nehézséget okoz: kevésbé gyakorlott digitális felhasználóknak, több gyermeket nevelő, időhiányos családoknak, nem magyar anyanyelvű szülőknek. Hivatalos út nélkül éppen ők maradnak ki, vagy ők vállalják a legnagyobb kockázatot.

**Innovációs kár.** Hazai fejlesztő ma nem tud stabil, jogszerű terméket építeni az oktatási rendszerekre – sem szülőknek, sem pedagógusoknak –, mert nincs dokumentált felület. A meglévő megoldások egy rendszerfrissítéssel megszűnhetnek, ami a befektetést és a vállalkozásindítást eleve elriasztja.

## Mit szeretnénk elérni?

**Cél 1: Aki hozzáfér, az az általa választott eszközzel is hozzáférhessen.** A hozzáférés körét nem kell újraszabályozni: azt a rendszerek meglévő jogosultságkezelése már eldönti. A szülő a gyermeke adataihoz, a tanuló és a hallgató a sajátjához, a pedagógus és az oktató az osztályaiéhoz, csoportjaiéhoz fér hozzá – ugyanez legyen elérhető, a műveletekkel együtt, a felhasználó által felhatalmazott szoftveren keresztül.
*Mérhető cél:* 2027. szeptember 1-jéig a KRÉTA hivatalos alkalmazásaiban elérhető funkciók 100%-a elérhető delegált hozzáféréssel; jelszóátadásra egyetlen funkcióhoz sincs szükség.
*Nemzetközi példa:* a PSD2 és az (EU) 2018/389 rendelet szerinti dedikált banki felület; a brit Open Banking-szabvány.

**Cél 2: A felület legyen nyilvános, stabil és megkülönböztetésmentes.** A programozói felület dokumentációja legyen nyilvános, verziózott, és minden felhatalmazott kliens azonos feltételekkel használhassa. A nyilvánosság a specifikációra vonatkozik; az adatokhoz való hozzáférés hitelesített és a felhasználó jogosultságához kötött marad.
*Mérhető cél:* a dokumentáció 2027. június 30-ig publikus, tesztkörnyezettel együtt; a kliensregisztráció önkiszolgáló, egyedi engedélyezési eljárás nélkül; a visszafelé nem kompatibilis változásokat legalább 90 nappal előre bejelentik.
*Nemzetközi példa:* az amerikai Ed-Fi Alliance nyílt adatszabványa és API-ja, valamint az 1EdTech OneRoster-szabványa a közoktatási nyilvántartó rendszerek és a harmadik fél alkalmazások közötti adatcserére; felsőoktatásban az uniós Erasmus Without Paper hálózat.

**Cél 3: A pedagógusok AI-használata legyen jogszerűen megszervezhető.** A delegált hozzáférés a tanári oldalon az iskola eszköze. Hogy a pedagógus milyen AI-t használhat a tanulói adatokkal, azt továbbra is a GDPR és az adatkezelő szabályai határozzák meg – de ehhez most először lesz technikai alap: az adatkezelő meghatározhatja, mely szoftverek kaphatnak felhatalmazást a pedagógusi jogosultságok alapján. Hogy ez az AI állami fejlesztésű, központilag beszerzett vagy fenntartói szerződéssel biztosított, a javaslat szempontjából közömbös: bármelyik ugyanazon a nyilvános felületen kapcsolódhat.
*Mérhető cél:* 2027. szeptember 1-jéig minden KRÉTA-t használó intézményben elérhető a pedagógusi felhatalmazások intézményi szintű listázása és korlátozása.

**Cél 4: Látható és szabályozható hozzáférés.** A delegált hozzáférés a meglévő jogosultságokra épül, és a mai ellenőrizetlen gyakorlatot láthatóvá teszi.
*Mérhető cél:* a felhatalmazások 100%-a megtekinthető és visszavonható a hivatalos felületen; 2028-tól évente nyilvános jelentés a regisztrált kliensek, az aktív felhatalmazások, a visszavonások és a biztonsági incidensek számáról.

## Mi lenne a várható haszon?

**Szülők és gondviselők.**
*Rövid táv (2027–2028):* jelszóátadás nélkül, a KRÉTA-ban látható és visszavonható módon kapcsolhatják saját asszisztensüket a gyermekük iskolai adataihoz. *Középtáv (2028–2030):* a kevésbé gyakorlott digitális felhasználók és a nem magyar anyanyelvű családok is könnyebben követik gyermekük iskolai ügyeit.

**Tanulók.**
*Rövid táv:* a saját órarendjüket, feladataikat és határidőiket az általuk használt eszközökben kezelhetik. *Középtáv:* tanulástámogató alkalmazások építhetnek a valós, naprakész iskolai adatokra.

**Pedagógusok.**
*Rövid táv:* az iskola vagy a fenntartó által jóváhagyott AI-eszköz szabályosan kapcsolódhat a KRÉTA-hoz; a kézi másolás helyére ellenőrizhető folyamat lép, és a pedagógus nem viseli személyesen a szabálytalan használat kockázatát. *Középtáv:* az adminisztrációs idő egy része – szöveges értékelések megfogalmazása, mulasztások és lemaradások követése, szülői kommunikáció, időszaki összesítések – kiváltható, miközben a rögzítés és a döntés a pedagógusnál marad.

**Köznevelési intézmények és fenntartók.**
*Rövid táv:* először látják, milyen szoftverek férnek hozzá az általuk kezelt adatokhoz, és korlátozhatják azokat. *Középtáv:* az AI-eszközök beszerzése szállítófüggetlenné válik, mert minden megoldás ugyanazon a nyilvános felületen kapcsolódik.

**Hallgatók és oktatók.**
*Középtáv (2028-tól):* a Neptun és a többi tanulmányi rendszer adatai – órarend, vizsgák, határidők – az általuk választott eszközzel kezelhetők, intézménytől függetlenül egységes módon.

**Hazai fejlesztők.**
*Középtáv:* stabil, dokumentált felületre építhetnek szülői, tanulói és pedagógusi termékeket. *Hosszú táv (2030-tól):* a magyar oktatási rendszerekre épülő megoldások a hasonló nemzetközi szabványok mentén exportálhatók.

**Rendszerüzemeltetők és az állam.**
*Rövid táv:* a meglévő felület és a már OAuth-alapú belépési rendszer miatt a bevezetés a kliensregisztráció megnyitásából, egy felhatalmazáskezelő felületből és a dokumentáció közzétételéből áll. A megkerülő megoldások okozta nem tervezett forgalom szabályozott, azonosítható forgalommá válik. *Középtáv:* a nyilvános hatásmérés alapján az oktatási digitalizáció eredménye mérhető.

## Pontosan milyen változtatást javaslunk?

**I. A nemzeti köznevelésről szóló 2011. évi CXC. törvény kiegészítése (javasolt elfogadás: 2026. december 31.)**

Javasoljuk az Nkt. adatkezelési rendelkezéseit az alábbi új szakasszal kiegészíteni (a szakasz számozása a kodifikáció során állapítandó meg):

> **(1)** A köznevelési intézmény elektronikus naplóját és az e törvény szerinti elektronikus nyilvántartásokat működtető informatikai rendszer üzemeltetője (a továbbiakban: üzemeltető) biztosítja, hogy aki a rendszer hivatalos elektronikus felületén adathoz hozzáfér vagy műveletet végez (a továbbiakban: felhasználó), ugyanezt az általa felhatalmazott szoftver útján is megtehesse.
>
> **(2)** Az (1) bekezdés szerinti felhatalmazás
> a) a felhasználó jelszavának vagy más hitelesítő adatának átadása nélkül jön létre,
> b) legfeljebb a felhasználó hivatalos elektronikus felületen gyakorolható jogosultságainak körére terjed ki, amelyet a felhasználó szűkíthet,
> c) a hivatalos elektronikus felületen bármikor megtekinthető és visszavonható.
>
> **(3)** Az üzemeltető a hivatalos alkalmazásokkal azonos funkciókört lefedő programozói felület leírását nyilvánosan közzéteszi, a felületet verziókövetéssel működteti, a visszafelé nem kompatibilis változtatásokat legalább kilencven nappal előre közzéteszi, és a felhatalmazott szoftvereket egymáshoz és a hivatalos alkalmazásokhoz képest egyenlő feltételekkel szolgálja ki. Biztonsági célú korlátozás kizárólag minden szoftverre egyformán alkalmazható.
>
> **(4)** Ha a felhasználó jogosultsága más személy személyes adataira is kiterjed, az adatkezelő köznevelési intézmény meghatározhatja, mely szoftverek részére adható felhatalmazás, és a felhatalmazásokat intézményi szinten megtekintheti. E korlátozás nem érinti a tanuló saját adataira, illetve a szülő gyermeke adataira vonatkozó felhatalmazását.

Az Nkt. felhatalmazó rendelkezései közé:

> Felhatalmazást kap a Kormány, hogy a [új szakasz] szerinti felhatalmazás és programozói felület műszaki követelményeit rendeletben állapítsa meg.

**II. A nemzeti felsőoktatásról szóló 2011. évi CCIV. törvény kiegészítése (javasolt elfogadás: 2026. december 31.)**

Javasoljuk az Nftv. adatkezelési rendelkezéseit az I. pont szerinti szöveggel azonos tartalmú új szakasszal kiegészíteni, a következő eltérésekkel: a szabály a felsőoktatási intézmény tanulmányi rendszerére vonatkozik; a (4) bekezdés szerinti korlátozási jog a felsőoktatási intézményt illeti meg, és nem érinti a hallgató saját adataira vonatkozó felhatalmazását.

**III. Kormányrendelet a delegált hozzáférés műszaki követelményeiről (javasolt kihirdetés: 2027. március 31.)**

Javasoljuk, hogy a rendelet legalább a következőket írja elő:

1. A felhatalmazás az OAuth 2.0 engedélyezési keretrendszer (RFC 6749) szerint valósul meg, kötelezően PKCE-vel (RFC 7636); az engedélyező szerver metaadatait az RFC 8414 szerint teszi közzé.
2. A kliensregisztráció dinamikus kliensregisztrációval (RFC 7591), egyedi engedélyezési eljárás nélkül érhető el; ez alól kizárólag az Nkt. és az Nftv. szerinti intézményi korlátozás jelent kivételt.
3. A tokenek visszavonása az RFC 7009 szerint támogatott; a felhasználó által a hivatalos felületen visszavont felhatalmazás legfeljebb öt percen belül hatályát veszti.
4. A felhatalmazás engedélyezési képernyője a hivatalos felületen jelenik meg, és megnevezi a szoftvert, a kért jogosultságokat, valamint a felhasználót és – szülő esetén – a gyermeket, akinek adataira a felhatalmazás vonatkozik.
5. Az üzemeltető tesztkörnyezetet biztosít szintetikus adatokkal.
6. Az üzemeltető évente nyilvános jelentést tesz közzé a regisztrált kliensek, az aktív felhatalmazások, a visszavonások és a biztonsági incidensek számáról.

A szabványok megnevezését a rendelet a mindenkori nemzetközi szabványfejlődéshez igazodva módosíthatja, a (2) bekezdés szerinti garanciák változatlanul hagyásával.

**IV. Bevezetési ütemterv**

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | Az Nkt. és az Nftv. módosításának elfogadása |
| 2027. március 31. | A műszaki követelményekről szóló kormányrendelet kihirdetése |
| 2027. június 30. | KRÉTA: a programozói felület dokumentációjának és tesztkörnyezetének közzététele |
| 2027. szeptember 1. | KRÉTA: éles delegált hozzáférés szülői, tanulói és pedagógusi jogosultságokra; intézményi korlátozás elérhető |
| 2028. március 31. | Felsőoktatási tanulmányi rendszerek: dokumentáció és tesztkörnyezet közzététele |
| 2028. szeptember 1. | Felsőoktatási tanulmányi rendszerek: éles delegált hozzáférés |
| 2028. december 31., majd évente | Első nyilvános hatásjelentés |
