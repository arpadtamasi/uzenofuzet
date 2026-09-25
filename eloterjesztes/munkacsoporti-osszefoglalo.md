# AI-Ország: saját oktatási adat, saját eszközzel

## Munkacsoporti összefoglaló

*Három oldal. A részletes előterjesztés és mellékletei külön elérhetők; a hivatkozott pontszámok azokra utalnak.*

### Miről szól

A szülő ma belép a KRÉTA-ba, és látja a gyermeke jegyeit, hiányzásait, órarendjét. A tanuló ugyanezt a sajátjára, a hallgató a Neptunban a vizsgáit. Ez a hozzáférés létezik és jogszerű, azzal a korláttal, hogy kizárólag azon az alkalmazáson keresztül gyakorolható, amelyet a rendszer üzemeltetője ad ki. A javaslat azt teszi lehetővé, hogy a felhasználó ezt a már meglévő hozzáférését átadhassa az általa választott szoftvernek, a jelszava átadása nélkül, a hivatalos felületen látható és bármikor visszavonható módon.

### Viszonya a szabad tananyag előterjesztéshez

A két anyag ugyanannak az oktatási pilotnak a két fele, és a tárgyuk nem fedi egymást. A tananyag azt határozza meg, mit tud egy oktatási MI; ez az anyag azt, hogy kiről és mire használhatja. A tananyag-előterjesztés közpénzből előállított művek nyílt licencéről szól, és a személyes adatokat kifejezetten kizárja a hatálya alól. Ez az anyag kizárólag személyes adatról szól. Más törvényeket módosítanak: a tananyag a közadatok újrahasznosításáról szóló és a tankönyvellátási törvényt, ez az anyag a köznevelési és a felsőoktatási törvényt. Egy csomagban ütközés nélkül állnak egymás mellett.

### A probléma

A felhasználó digitális élete rendszerekre van szabdalva, és az átjárást neki magának kell elvégeznie. A szülőnek külön alkalmazása van a munkahelyéhez, a bankjához, az egészségügyi időpontokhoz, és ezek mellé jön az iskolai, két gyerek esetén akár kettő. A pedagógusnál ugyanez ismétlődik: a napló az egyik rendszerben van, a kommunikáció a másikban, az órarend a harmadikban. Mindkét szerepben az ember végzi az integrációt.

Hivatalos csatorna hiányában megkerülő megoldások születnek. A szülő jelszót ad egy közvetítő szolgáltatásnak, vagy kimásolja a képernyő tartalmát egy MI-asszisztensbe. A pedagógus a tanulói adatokat kézzel bemásolja a saját, magáncélú MI-fiókjába, ahol egy másolással egy vagy több osztály adatai mozognak, adatfeldolgozói szerződés nélkül, naplózatlanul. A zártság az ellenőrzött használatot akadályozza, a kimásolást pedig nem képes megállítani.

A KRÉTA üzemeltetője a nem hivatalos kliens használatát saját tudásbázisában rendellenes működésnek minősíti, tehát a zártság szándékolt álláspont, amely jogszabályi beavatkozás nélkül várhatóan fennmarad. A felsőoktatásban a Neptun hivatalos mobilalkalmazása 2023 októberében megszűnt.

### Mit javasolunk

Új ágazati jogosultságot a köznevelési és a felsőoktatási törvényben, amely a meglévő hozzáférés delegálását teszi lehetővé, külön és szigorúbb szabállyal az intézményi feladatkörben gyakorolt jogosultságra. Nyilvános, dokumentált és verziózott programozói felületet tesztkörnyezettel, ugyanazt, amelyet a hivatalos alkalmazások ma is használnak. Kockázatarányos bizalmi keretet, amelyben a felhatalmazható szoftverek háromszintű nyilvántartásba kerülnek: az első szinten önkiszolgáló regisztráció, de kizárólag olvasásra, írási művelethez azonosított kiadó, tanári hozzáféréshez adatfeldolgozói szerződés és intézményi engedély kell. Végül felhasználási réteget: a felhasználó köznyelven tudja meg, hová kerül az adata, meddig tárolják, használják-e modellfejlesztésre, és mi történik visszavonáskor.

### Amit a javaslat nem kér

A jogosultsági kör változatlan marad, senki nem lát többet, mint ma. Az érzékeny adatkörök, vagyis a gyermekvédelmi, fegyelmi, egészségügyi és sajátos nevelési igényre vonatkozó adatok a delegált csatornán külső szolgáltatóhoz nem továbbíthatók; a szülő látási jogát ez nem érinti. A javaslat a rendszerek jelenlegi működését nem minősíti jogsértőnek, és a pedagógus sem a saját elhatározásából adhat felhatalmazást.

### Mit hozhat

A hatás felszabaduló szakmai kapacitás, nem költségvetési megtakarítás. Az alábbi példaszámítás 117 ezer általános és középfokú pedagógussal, heti 3,2 óra általános adminisztrációval (OECD TALIS 2024) és 36 tanítási héttel dolgozik.

| Feltevés | Eredmény |
|---|---|
| az adminisztráció 35%-a érinthető, azon belül 40% időnyereség | évi kb. 1,9 millió óra, pedagógusonként kb. 16 óra |

Egyik paraméterre sincs hazai mérés, ezért a javaslat kötelező pilotot ír elő: néhány száz pedagógus, több intézménytípusban, ahol lehetséges kontrollcsoporttal. A pilot azt is méri, mennyi időt vesz el az MI kimenetének utólagos ellenőrzése, és javul-e vagy romlik-e a hibaarány. Eredménye 2028 márciusában nyilvános, tehát a pedagógusi szakaszról magyar mérés alapján lehet dönteni. Ha a pilot nem igazolja az időnyereséget, az olvasási rész akkor is indokolt marad, mert annak indoka az érintett saját adatához való hozzáférés.

### Ütemezés

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | A köznevelési és a felsőoktatási törvény módosításának elfogadása |
| 2027. március 31. | Kormányrendelet a műszaki követelményekről és a funkciókatalógusról |
| 2027. szeptember 1. | KRÉTA: éles olvasási hozzáférés szülőnek és tanulónak. A pedagógusi pilot indulása |
| 2028. március 31. | A pilot eredménye nyilvános |
| 2028. szeptember 1. | KRÉTA: műveletvégzés és pedagógusi hozzáférés. Felsőoktatás: olvasás |
| 2029. március 31. | Felsőoktatás: műveletvégzés és oktatói hozzáférés |

Az olvasás előbb megy élesbe, mint az írás, és a pedagógusi szakaszt mérés előzi meg.

### Amit a munkacsoporttól kérünk

**Egy csomag vagy kettő.** Döntsön a munkacsoport arról, hogy a két oktatási anyag egy előterjesztésként, két sávban megy tovább, vagy külön-külön. Ettől függ a terjedelem és a hatókör mindkét oldalon.

**Egységes álláspont az adatrendeletről.** A tananyag-előterjesztés az (EU) 2023/2854 rendeletet a beérő uniós adatjog láncszemeként hozza. Ez az anyag kifejezetten helyesbít: a rendelet II. fejezete összekapcsolt termékekre vonatkozik, a tanulmányi nyilvántartásra nem, ezért jogpolitikai irányjelző és nem jogalap. Egy csomagban ezt az eltérést egy bíráló megtalálja.

**Közös dátumsor.** A kormányrendelet kihirdetése a tananyag-anyagban 2027. február 28., itt 2027. március 31. A törvénymódosítás mindkettőnél 2026. december 31.

**Az adatkörök besorolása.** A javaslat legmunkaigényesebb része, hogy a KRÉTA minden adatmezőjéről el kell dönteni, kinek az adata és mi vihető tovább. A szülői és tanulói olvasási funkciókra készült egy vázlat húsz valós végpont besorolásával. A műveleti és a pedagógusi funkciókhoz az üzemeltető funkciólistája kell, tehát ehhez egyeztetés szükséges az eKRÉTA Zrt.-vel. Döntsön a munkacsoport arról, ki kezdeményezi ezt.

### További anyagok

A részletes előterjesztés tizenkét oldal, és a fenti állításokat forrásokkal, normaszöveggel és ütemtervvel vezeti végig. Hozzá tartozik egy hatoldalas melléklet a jogi, bizalmi, felhasználási és felelősségi modellről, valamint egy négyoldalas funkciókatalógus-vázlat húsz KRÉTA-végpont adatkör-besorolásával. Mindhárom elérhető, de a vitához ez az összefoglaló elegendő.

### Érdekütközés

Az előterjesztés készítője fejlesztette az Üzenőfüzet nevű nyílt forráskódú prototípust, amely a leírt megkerülő módon köti össze a szülő MI-asszisztensét a KRÉTA-val. Nyilvános szolgáltatásként nem üzemel: a fejlesztés éppen a nyilvánossá tétel akadályain állt meg, és a javaslat réseit ezekből az akadályokból vezettük le. A javaslat elfogadása ezeket az akadályokat szüntetné meg, és a létrejövő piacon az előterjesztő is szereplő lehet.

### Amit az előterjesztés nem old meg

Az üzemeltetői ráfordítás költsége nincs becsülve, így a hatásvizsgálat költségoldala hiányos. A javaslat nem szabályozza, mit tehet egy MI-szolgáltató a kapott adattal a saját rendszerén belül; csak azt írja elő, hogy erről tájékoztatni kell. Néhány statisztikai adat elsődleges forrásból még pótlandó.
