# AI-Ország: saját oktatási adat, saját eszközzel

## Döntéshozói összefoglaló

*A részletes előterjesztés: „AI-Ország: saját oktatási adat, saját eszközzel — Előterjesztés a meglévő oktatási adathozzáférés biztonságos és visszavonható delegálásáról”. Ez az összefoglaló a döntéshez szükséges minimumot tartalmazza; a hivatkozott fejezetszámok a részletes anyagra utalnak.*

---

## A javaslat egy bekezdésben

Ma minden rendszer külön felületet követel, ezért az ember hordja közöttük az információt. A javaslat azt teszi lehetővé, hogy a már meglévő jogosultságát a felhasználó biztonságosan átadhassa a saját eszközének, miközben pontosan látja és kontrollálja, mi történik az adatával.

## A probléma

A szülő ma látja a gyermeke jegyeit és hiányzásait a KRÉTA-ban, a hallgató a vizsgáit a Neptunban. Ez a hozzáférés létezik és jogszerű — de kizárólag az üzemeltető által kiadott alkalmazáson keresztül gyakorolható. A Neptun hivatalos mobilalkalmazása 2023 októberében meg is szűnt.

Aki ezt meg akarja kerülni, ma jelszót ad át harmadik félnek, vagy kimásolja az adatot. A pedagógus ugyanezt teszi, amikor tanulói adatot másol magáncélú MI-fiókjába: egy másolással egy osztálynyi adat mozdul, adatfeldolgozói szerződés nélkül, naplózatlanul. **A zártság tehát nem az ellenőrizetlen használatot akadályozza, hanem az ellenőrzöttet.**

Az üzemeltető a nem hivatalos kliens használatát saját tudásbázisában rendellenes működésnek minősíti. A zártság nem műszaki mellékhatás, hanem szándékolt álláspont — jogszabály nélkül nem fog megváltozni.

## Amit javaslunk

1. **Új ágazati jogosultság** a köznevelési és a felsőoktatási törvényben: a felhasználó a meglévő hozzáférését jelszóátadás nélkül, láthatóan és bármikor visszavonhatóan delegálhassa az általa választott szoftvernek.
2. **Nyilvános, verziózott programozói felület** tesztkörnyezettel — ugyanaz, amelyet a hivatalos alkalmazások ma is használnak.
3. **Kockázatarányos bizalmi keret**: a felhatalmazható szoftverek háromszintű nyilvántartása. Az 1. szinten önkiszolgáló regisztráció, de kizárólag olvasásra. Írási művelethez azonosított kiadó, tanári hozzáféréshez adatfeldolgozói szerződés és intézményi engedély kell.
4. **Felhasználási réteg**: a felhasználó köznyelven megtudja, hová kerül az adata, meddig tárolják, használják-e modellfejlesztésre, és mi történik visszavonáskor. Ehhez a kiadó nyilatkozatot tesz, amelyet a hivatalos felület jelenít meg, a szoftver nem írhat felül, és amelynek valótlansága a nyilvántartásból való törlést vonja maga után.

## Amit kifejezetten nem javaslunk

- **A jogosultsági kör bővítését.** Senki nem lát többet, mint ma; a csatorna változik, nem a jogosultság.
- **Ellenőrzés nélküli írási hozzáférést.** Az önkiszolgáló regisztráció csak olvasásra, az érintett saját adatkörében érvényes.
- **Érzékeny adatkörök szabad továbbítását.** A gyermekvédelmi, fegyelmi, egészségügyi és sajátos nevelési igényre vonatkozó adat a delegált csatornán külső szolgáltatóhoz nem továbbítható. A szülő látási jogát ez nem érinti.
- **Hogy a pedagógus saját elhatározásából engedje át a munkaköri jogosultságát.** A tanári oldalon az intézmény mint adatkezelő dönt.

## Mit hozhat

A hatás nem költségvetési megtakarítás, hanem felszabaduló szakmai kapacitás. Az alábbi **példaszámítás, nem előrejelzés**: 117 ezer általános és középfokú pedagógus, heti 3,2 óra általános adminisztráció (OECD TALIS 2024), 36 tanítási hét.

| Feltevés | Eredmény |
|---|---|
| az adminisztráció 35%-a érinthető, azon belül 40% időnyereség | évi kb. 1,9 millió óra, pedagógusonként kb. 16 óra |

Egyik paraméterre sincs hazai mérés, ezért **a javaslat kötelező pilotot ír elő**: néhány száz pedagógus, több intézménytípusban, ahol lehetséges kontrollcsoporttal. A pilot azt is méri, mennyi időt vesz el az MI kimenetének utólagos ellenőrzése, és javul-e vagy romlik-e a hibaarány. Eredménye 2028 márciusában nyilvános, tehát **a pedagógusi szakaszról már magyar mérés alapján lehet dönteni.**

Ha a pilot nem igazolja az időnyereséget, a javaslat olvasási része akkor is indokolt marad: az az érintett saját adatához való hozzáférésről szól, nem a pedagógusi hatékonyságról.

## Ütemezés

| Határidő | Mérföldkő |
|---|---|
| 2026. december 31. | Az Nkt. és az Nftv. módosításának elfogadása |
| 2027. március 31. | Kormányrendelet a műszaki követelményekről és a funkciókatalógusról |
| 2027. szeptember 1. | KRÉTA, 1. szakasz: éles **olvasási** hozzáférés szülőnek és tanulónak. A pedagógusi pilot indulása |
| 2028. március 31. | A pilot eredménye nyilvános |
| 2028. szeptember 1. | KRÉTA, 2. szakasz: **műveletvégzés** és pedagógusi hozzáférés. Felsőoktatás: olvasás |
| 2029. március 31. | Felsőoktatás: műveletvégzés és oktatói hozzáférés |

Az olvasás előbb megy élesbe, mint az írás, és a pedagógusi szakaszt mérés előzi meg.

## Mit kell most eldönteni

1. **Elindul-e a jogalkotás** az Nkt. és az Nftv. módosításával, a fenti szerkezetben.
2. **Mely szerv vezeti a kliensnyilvántartást**, milyen eljárásrenddel és finanszírozással. Az előterjesztés ezt nyitva hagyja.
3. **Ki és mikor végzi el az adatkörök tételes besorolását** a funkciókatalógusban. Ez a javaslat legmunkaigényesebb része, és e nélkül a szabály üres keret marad.
4. **Ki finanszírozza a pilotot** és az üzemeltetői ráfordítást.

## Amit az előterjesztés nem old meg

Az üzemeltetői ráfordítás költsége nincs becsülve, így a hatásvizsgálat költségoldala hiányos. A javaslat nem szabályozza, mit tehet egy MI-szolgáltató a kapott adattal a saját rendszerén belül — csak azt írja elő, hogy erről tájékoztatni kell, és megtiltja az érzékeny adatkör továbbítását. Néhány statisztikai adat elsődleges forrásból még pótlandó.

## Érdekütközés

Az előterjesztés készítője üzemelteti az Üzenőfüzet nevű nyílt forráskódú szolgáltatást, amely ma a leírt megkerülő módon köti össze a szülők MI-asszisztensét a KRÉTA-val. A javaslat elfogadása ezt a szolgáltatást a jelenlegi formájában feleslegessé teszi, de a jövőbeli piacon az előterjesztő is szereplő lehet.
