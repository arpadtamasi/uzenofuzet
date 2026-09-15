# Válaszok a szakmai észrevételekre

A 12 pontos bírálat pontonkénti feldolgozása. Minden pont ugyanazt az öt kérdést
járja végig: mit állít a kifogás, megáll-e, mi volt az 1.0 szövegében, mi lett
belőle a 2.0-ban, és mi maradt nyitva.

A bírálat záró diagnózisa a legpontosabb mondat az egészben:

> a dokumentum nagyon meggyőzően érvel amellett, hogy kell szabályozott harmadik
> fél hozzáférés, de ebből túl gyorsan ugrik arra, hogy ennek nyílt, automatikus
> kliensregisztrációjú, teljes funkcióparitású rendszernek kell lennie.

A 2.0 változat szerkezete erre a mondatra válasz. A problémafelvetés maradt, a
belőle levezetett architektúra szakaszokra bomlott, és közé bekerült a hiányzó
bizalmi, adatvédelmi és felelősségi modell.

## Áttekintés

| # | Kifogás | Verdikt | Hol a javítás |
|---|---|---|---|
| 1 | „saját oktatási adat” mint jogi állítás | megáll, de nem jogi, hanem retorikai hiba | Mit nem állítunk; 2.1–2.2 |
| 2 | az „ugyanezt” olvasásból tranzakciót csinál | megáll, ez a legsúlyosabb | 1.; 6.1; 10./I; 11. |
| 3 | tanuló/szülő és pedagógus egy dobozban | megáll | 1.; 7.; 10./I. A) és B) § |
| 4 | a biztonsági szabály túl merev | megáll, de a szándéka védhető volt | 6.2; 10./I. C) § |
| 5 | regisztráció egyedi engedély nélkül | megáll, a 2. ponttal együtt végzetes | 6.1; 10./III |
| 6 | a PSD2-analógia visszafelé is elsül | megáll | 2.6; 6.1 |
| 7 | a Data Act retorika, nem jogalap | megáll, elhelyezési hiba | 2.3; 2.4 |
| 8 | az MI-rendelet és az MCP túl sokat bizonyít | megáll | 2.5; 4. |
| 9 | hipotézisek tényként | megáll | 5.1–5.4 |
| 10 | a hatásbecslés nincs kész | megáll, de a valódi baj nem a hiányzó szám | 5.1 |
| 11 | a 100% funkcióparitás túl nagy fogás | megáll | 8.1; 10./III |
| 12 | szülői autonómia és vegyes adatkörök | megáll | 6.5; 10./I. A) § (3) |

---

## 1. A „saját oktatási adat” mint jogi állítás

**A kifogás.** A nyitás azt sugallja, hogy amihez az érintett hozzáfér, ahhoz
joga van bármilyen programmal is hozzáférni. A GDPR viszont nem ad adat-tulajdonjogot.
A 20. cikk szerinti hordozhatóság közérdekű feladatnál nem alkalmazandó, a 15. cikk
hozzáférési joga pedig nem jelent folyamatos gépi hozzáférést. A javaslat tehát új
jogosultságot akar létrehozni, nem egy meglévő digitális alapjogot megvalósítani.

**Megáll?** Megáll, de érdemes pontosítani, hol a hiba. A dokumentum jogilag
**nem tévedett**: az 5. pontja pontosan és helyesen leírta, hogy a 20. cikk itt nem
alkalmazandó, és hogy a 15. cikk egyszeri másolatra szól. A hiba **retorikai és
szerkezeti**: a cím és a nyitómondat úgy hangzik, mintha meglévő jogot kérnénk
számon, a szöveg közepe pedig bevallja, hogy nincs ilyen jog. Egy ellenséges olvasó
a nyitást idézi, és az 5. pontot nem. Ez a legkönnyebben javítható a tizenkettőből,
mert csak ki kell mondani, amit a szöveg amúgy is tud magáról.

**Az 1.0 szövege.**

> Aki ma a KRÉTA-ban vagy egy felsőoktatási tanulmányi rendszerben hozzáfér
> valamihez […] ugyanahhoz férjen hozzá az általa választott szoftverrel is.

**Mi lett belőle.** A vezetői összefoglalóba bekerült egy „Mit nem állítunk”
szakasz, még a javaslat kifejtése előtt:

> Nem állítjuk, hogy az érintettnek tulajdonjoga van a róla kezelt adatokon. […]
> Nem állítjuk, hogy a javasolt jogosultság a hatályos jogból levezethető. […]
> Amit javaslunk, új ágazati jogosultság. Ezt vállaljuk, nem álcázzuk meglévő jog
> technikai megvalósításának.

A 2.1 és 2.2 pont ezt szétszedi arra, amit a hatályos jog ad, és amit nem ad. A
15. cikk és a (63) preambulumbekezdés **támogató érvként** marad benne, kifejezett
megjegyzéssel arról, hogy a preambulumbekezdés nem kötelező szabály.

**Mi maradt nyitva.** A cím nem változott. Ez tudatos: a „saját oktatási adat”
politikai cím, nem jogi minősítés, és a 2.0 ezt ki is mondja. Aki a címet támadja,
annak a válasz a dokumentum harmadik bekezdésében van.

---

## 2. Az „ugyanezt” olvasásból tranzakciós felületet csinál

**A kifogás.** A normaszöveg szerint aki a hivatalos felületen adathoz hozzáfér
vagy műveletet végez, ugyanezt felhatalmazott szoftverrel is megtehesse. Olvasásnál
ez védhető. Pedagógusnál viszont jegybeírást, mulasztásrögzítést, naplózást és
értékelést is jelent. Ez már nem adatportabilitási javaslat, hanem általános,
harmadik fél általi tranzakciós felület az oktatási nyilvántartáshoz.

**Megáll?** Megáll, és ez a bírálat legsúlyosabb pontja. Egyetlen névmás vitte át
a javaslatot a legvédhetőbb esetből a legkockázatosabba, anélkül hogy az indokolás
követte volna. A „vagy műveletet végez” fordulat ráadásul nem véletlen csúszás volt:
a szöveg szándékosan akarta lefedni a tanári adminisztrációt, csak nem vette észre,
hogy ehhez külön indokolás és külön garanciák kellenek.

**Az 1.0 szövege.**

> (1) […] biztosítja, hogy aki a rendszer hivatalos elektronikus felületén adathoz
> hozzáfér vagy műveletet végez (a továbbiakban: felhasználó), **ugyanezt** az általa
> felhatalmazott szoftver útján is megtehesse.

**Mi lett belőle.** Az „ugyanezt” eltűnt. Helyette három eset van, az 1. fejezet
táblázatában szembeállítva, és a normaszövegben külön szakaszokban:

- **A)** saját adat olvasása, 1. bizalmi szint, éles indulás 2027. szeptember 1.
- **B)** műveletvégzés a saját adatkörben, 2. bizalmi szint, 2028. szeptember 1.
- **C)** intézményi feladatkörben gyakorolt jogosultság, 3. bizalmi szint, 2028. szeptember 1.

Az A) § már nem „aki hozzáfér”-rel kezdődik, hanem tételesen megnevezi a tanulót,
a szülőt és a saját adatkörében jogosult felhasználót, és a műveletvégzést a
funkciókatalógushoz köti.

**Mi maradt nyitva.** Az, hogy a B) és C) eset egyáltalán szerepel, továbbra is
vállalás: ez tényleg tranzakciós felület, csak szakaszolva és bizalmi szinthez
kötve. Aki elvi alapon ellenzi a harmadik fél általi írást az oktatási
nyilvántartásban, annak a 2.0 sem ad mást, mint hogy később és szigorúbb
feltételekkel javasolja.

---

## 3. A tanuló, a szülő és a pedagógus nem rakható egy dobozba

**A kifogás.** A tanuló a saját adatait nézi, a szülő a gyermekéhez kapcsolódó
adatokat, a tanár viszont intézményi feladatból, más érintettek személyes adataival
dolgozik. A dokumentum ezt az intézményi korlátozásnál felismeri, de előtte egyetlen
általános elvként vezeti fel az egészet. Egy adatvédelmi jogász itt vágja ketté a
konstrukciót.

**Megáll?** Megáll. Az 1.0 a különbséget a normaszöveg **negyedik** bekezdésében,
kivételként kezelte, miután a szöveg már három bekezdésen át egységes jogként írta
le az egészet. Kivételként megfogalmazva a tanári eset úgy néz ki, mint a főszabály
szűkítése. Valójában fordítva van: a tanári eset nem szűkített érintetti jog, hanem
**egy másik jogintézmény**, amelyet az adatkezelő felelőssége tart össze.

**Az 1.0 szövege.**

> A szülő a gyermeke adataihoz, a tanuló és a hallgató a sajátjához, a pedagógus és
> az oktató az osztályaiéhoz, csoportjaiéhoz fér hozzá – ugyanez legyen elérhető, a
> műveletekkel együtt, a felhasználó által felhatalmazott szoftveren keresztül.

**Mi lett belőle.** A tanári eset kikerült az érintetti jog alól, és önálló
szakaszt kapott. A kulcsmondat a normaszövegben:

> (5) E § nem hoz létre a felhasználót önállóan megillető jogosultságot arra, hogy
> az intézményi feladatköréből fakadó jogosultságát szoftver részére átengedje.

A magyarázat az 1. fejezet végén áll: nem a pedagógus delegálja a jogosultságát,
hanem **az adatkezelő intézmény rendszeresít egy eszközt**, amelyet a pedagógus a
saját munkamenetéhez köt. Ehhez jön a 7. fejezet felelősségi táblázata, amely
esetenként megmondja, ki adatkezelő és ki adatfeldolgozó.

**Mi maradt nyitva.** A B) és C) eset határa nem mindig éles. Egy nagykorú hallgató
saját vizsgajelentkezése B), de a vizsgaeredmény rögzítése az oktató részéről C).
A funkciókatalógus feladata, hogy ezt funkciónként eldöntse, és ez a besorolás lesz
a szakmai vita valódi terepe.

---

## 4. A biztonsági szabály túl merev

**A kifogás.** A törvényszöveg szerint a szoftvereket egymáshoz és a hivatalos
apphoz képest egyenlően kell kiszolgálni, és biztonsági korlátozás csak minden
szoftverre egyformán alkalmazható. Egy böngészős public client, egy mobilapp és egy
szerveroldali hitelesített kliens nem azonos kockázatú. Az RFC 9700 külön számol
ezekkel az eltérésekkel, a magas biztonságú API-khoz pedig külön FAPI 2.0 profil van.

**Megáll?** Megáll, de itt érdemes megvédeni az eredeti szándékot. A szabály nem
azért született, hogy a biztonsági mérnököt megkösse, hanem hogy az üzemeltető ne
tudjon **biztonsági indokra hivatkozva** elsorvasztani minden harmadik fél klienst.
Ez reális kockázat: ha a korlátozás mértéke az üzemeltető szabad belátásán múlik, a
jogszabály papíron marad. A hiba a megfogalmazás volt, nem a cél. A javítás ezért
nem a szabály törlése, hanem a cél pontos kifejezése.

**Az 1.0 szövege.**

> Biztonsági célú korlátozás kizárólag minden szoftverre egyformán alkalmazható.

**Mi lett belőle.** Négyelemű szabály, amely a kockázatarányosságot megengedi, az
önkényt viszont kizárja:

1. azonos bizalmi szinten azonos feltételek;
2. a hivatalos alkalmazás nem kaphat olyan képességet vagy szolgáltatásminőséget,
   amelyet azonos bizalmi szintű felhatalmazott kliens nem kaphat meg, és e célból
   a hivatalos alkalmazást is be kell sorolni valamelyik szintbe;
3. kockázatalapú korlátozás megengedett, ha előre közzétett, objektív, és minden
   azonos helyzetű kliensre vonatkozik;
4. egyedi kliens felfüggesztése csak bizonyítékkal alátámasztott biztonsági okból,
   írásbeli indokolással, jogorvoslattal, és az éves jelentésben megjelenítve.

A második elem a lényeg: ez váltja ki az „egyformán” szót anélkül, hogy a hivatalos
app kiváltságot kapna. A kormányrendelet a 2. és 3. szinthez emelt profilt ír elő,
és az egész hitelesítést az RFC 9700-hoz köti.

**Mi maradt nyitva.** A negyedik elem jogorvoslati fóruma nincs megnevezve. Ez a
nyilvántartást vezető szerv kijelölésével együtt dönthető el, ami a 12. fejezet
nyitott kérdése.

---

## 5. Önkiszolgáló regisztráció egyedi engedélyezés nélkül

**A kifogás.** A szöveg egyszerre beszél kiskorúak adatairól, tanári írási
jogosultságokról, és arról, hogy lényegében bárki regisztrálhasson klienst. Hogyan
különbözteted meg a normális szolgáltatót az adathalász apptól? Hogyan történik a
publisher-azonosítás, milyen kliensattesztáció van, mi van a kompromittált klienssel?
A dokumentum ezekre nem válaszol.

**Megáll?** Megáll, és a 2. ponttal együtt ez volt a javaslat végzetes kombinációja.
Külön-külön mindkettő vitatható lett volna. Együtt azt jelentették, hogy egy
tetszőlegesen regisztrált szoftver jegyet írhat be egy kiskorú hivatalos
nyilvántartásába. Ezt egyetlen adatvédelmi vagy biztonsági szakértő sem engedte
volna át, és jogosan.

**Az 1.0 szövege.**

> A kliensregisztráció dinamikus kliensregisztrációval (RFC 7591), egyedi
> engedélyezési eljárás nélkül érhető el; ez alól kizárólag az Nkt. és az Nftv.
> szerinti intézményi korlátozás jelent kivételt.

**Mi lett belőle.** Háromszintű bizalmi keret, ahol nem a regisztráció nehezedik,
hanem a **jogosultság kötődik a szinthez**:

| Szint | Ki regisztrálhat | Mit tehet | Mit kell hozzá igazolni |
|---|---|---|---|
| 1. | bárki, önkiszolgálóan, RFC 7591 szerint | **csak olvasás**, az érintett saját adatkörében | működő kapcsolattartás, közzétett tájékoztató, kérésszám-korlát, rövid token |
| 2. | azonosított kiadó | műveletvégzés a saját adatkörben, pedagógusi olvasás | cégadat, felelős kapcsolattartó, incidensbejelentés vállalása, aláírt szoftvernyilatkozat, bizalmas kliens |
| 3. | intézményi adatfeldolgozó | műveletvégzés intézményi feladatkörben | a 2. szint, plusz GDPR 28. cikk szerinti szerződés, intézményi engedélyezőlista, FAPI 2.0 vagy egyenértékű, kliensattesztáció |

A bírálat négy konkrét kérdésére adott válasz: a publisher-azonosítás a 2. szint
belépője; a kliensattesztáció a 3. szinten kötelező; a kompromittált klienst a 6.3
pont kezeli, ahol a nyilvántartásból törlés minden kapcsolódó felhatalmazást
megszüntet és az érintetteket értesíteni kell; az adathalász app ellen a 6.4 pont
véd, ahol a kliens nevét a hivatalos felület a nyilvántartásból veszi, és a kliens
nem írhatja felül.

**Mi maradt nyitva.** Az 1. szint továbbra is átvilágítatlan kiadóknak enged
olvasási hozzáférést kiskorú adataihoz, szülői jóváhagyással. Ezt vállaltan
tartottuk meg, mert e nélkül a javaslat lényege veszne el, és mert a szülő ma
jelszót ad át ugyanennek a körnek, csak láthatatlanul. A jóváhagyó képernyő ezért
kifejezetten jelzi, ha a kiadó nincs átvilágítva.

---

## 6. A PSD2-analógia visszafelé is elsül

**A kifogás.** A PSD2 jó példa arra, hogy egy monopolizált frontend megnyitható
dokumentációval és tesztkörnyezettel. De ott a harmadik fél szolgáltatók
azonosított, engedélyezett szereplők, és a rendszer minősített tanúsítványokra épít.
Aki ismeri az Open Bankinget, azt mondhatja: pont a saját példád mutatja, hogy
hiányzik egy teljes trust framework.

**Megáll?** Megáll. Az 1.0 az analógiának csak a kényelmes felét használta.

**Az 1.0 szövege.** A PSD2 kizárólag a „Nemzetközi példa” címke alatt jelent meg,
a dedikált felület és a nyilvános specifikáció alátámasztására. Az engedélyezett
szolgáltatói kör említés nélkül maradt.

**Mi lett belőle.** A 2.6 pont most maga vezeti le mindkét élét, „Mellette szól” és
„Ellene szól” alcímekkel, és a záró mondata elfogadja az ellenérvet:

> Ezt az ellenérvet elfogadjuk. A 6. fejezet pótolja a hiányt, és a bizalmi szintet
> ahhoz köti, amit a kliens tehet.

A 6.1 pont háromszintű nyilvántartása szerkezetileg ugyanaz, mint amit a PSD2 a
szolgáltatói engedéllyel megold, csak arányosítva: a legkisebb kockázatú
művelethez nem kell engedély, a legnagyobbhoz szerződés és attesztáció kell.

**Mi maradt nyitva.** A PSD2 minősített tanúsítványokat ír elő; a javaslat nem megy
el eIDAS-szintű tanúsítványokig. A 3. szinten ez felmerülhet, és a kormányrendelet
szabványkövetési klauzulája nyitva hagyja az utat.

---

## 7. A Data Act retorika, nem jogalap

**A kifogás.** A dokumentum úgy illeszti a fejlődéstörténetbe, hogy a felhasználó
hozzáférhet a használat során keletkező adathoz és átadhatja választott harmadik
félnek. Ez igaz a rendelet saját tárgyi körében, de az adatrendelet összekapcsolt
termékekről és kapcsolódó szolgáltatásokról szól, tipikusan IoT-jellegű termékadatról.
A KRÉTA vagy a Neptun nyilvántartása nem ettől válik megnyithatóvá.

**Megáll?** Megáll, és itt is érdemes pontosítani a hibát: az 1.0 **helyesen idézte**
a rendeletet, még az „összekapcsolt termékek felhasználója” fordulatot is leírta.
A baj az **elhelyezés** volt. A „Hogyan jutottunk ide?” fejezet egy jogfejlődési
láncot mutat be, és ebben a környezetben minden felsorolt elem úgy olvasódik, mint
a javaslat egyik jogi előzménye. A pontos idézet félrevezető kontextusban ugyanúgy
támadható, mint a pontatlan.

**Mi lett belőle.** Két lépés. Egy: a 2.4 pont kifejezett helyesbítést tartalmaz,
amely megnevezi, hogy az 1.0 mit csinált rosszul, és az adatrendeletet
**jogpolitikai irányjelzővé** minősíti vissza, jogalap helyett.

Kettő, és ez a fontosabb: a kiürült helyre jobb precedens került. Az **európai
egészségügyi adattérről szóló (EU) 2025/327 rendelet** pontosan azt a konstrukciót
valósítja meg, amit a javaslat kér. Ágazati uniós jogszabály hoz létre elektronikus
hozzáférési jogot olyan adatkörben, ahol maga az adatkezelés közfeladaton alapul,
és ahol az érintett maga adhat hozzáférést választott szereplőnek. Azonos jogi
szerkezet, és azonos érzékenységi szint: egészségügyi adat, illetve kiskorúak
oktatási adata.

**Mi maradt nyitva.** Az EHDS cikkhivatkozása `[ELLENŐRIZENDŐ]` jelöléssel szerepel.
A rendelet szövegét ebből a munkakörnyezetből nem tudtam letölteni, ezért a pontos
bekezdéshivatkozást a Hivatalos Lap alapján kell véglegesíteni.

---

## 8. Az MI-rendelet és az MCP túl sokat akar bizonyítani

**A kifogás.** Az MI-rendelet valóban előír MI-jártassági intézkedéseket, de ebből
nem következik, hogy a KRÉTA-nak API-t kell nyitnia. Az MCP valóban OAuth-alapú
mintákat használ, de az az állítás, hogy 2025-re a nagy szolgáltatók általánosan
támogatják, külön bizonyítást igényel, és gyorsan avuló termékpiaci állítás. Egy
jogszabály-előkészítő anyagban ezt könnyű oldalba rúgni azzal, hogy technológiai
divatot keversz a szabályozási szükséglettel.

**Megáll?** Megáll. A piaci elterjedtségre vonatkozó mondat a dokumentum
legrövidebb életű állítása volt: bármely szolgáltatói döntés elavulttá teheti, és
akkor az egész bekezdés hitelessége sérül.

**Az 1.0 szövege.**

> 2024 novemberében megjelenik a Model Context Protocol […]; 2025-re a nagy
> AI-szolgáltatók általánosan támogatják.

**Mi lett belőle.** A piaci állítás törölve. Az MCP annyiban maradt benne, hogy
létezik és OAuth-alapú delegált hozzáférésre épít, elterjedtségi állítás nélkül.
A helyére tartalmilag az **RFC 9700 (BCP 240)** került, amely 2025 januárjában
jelent meg, kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a
jelszó alapú folyamatot, és kezeli az összekeverési támadásokat. Ez szabvány, nem
termékpiaci hír, tehát nem avul el egy szolgáltatói döntéssel.

Az MI-rendeletből egyetlen, szűk következtetés maradt, kifejezett elhatárolással:

> Ebből nem következik, hogy bármely oktatási rendszernek programozói felületet
> kellene nyitnia; az 1.0 változat itt többet akart bizonyítani, mint amennyi
> következik. Egyetlen, szűk következtetést vonunk le: ha az iskoláknak
> jogszabályi kötelességük felkészülten megszervezni az MI-használatot, akkor
> ehhez jogszerű technikai csatornának is léteznie kell.

**Mi maradt nyitva.** Semmi lényeges. Ez a pont teljes egészében javítható volt
törléssel és szűkítéssel.

---

## 9. Hipotézisek tényként megfogalmazva

**A kifogás.** Több kárállítás plauzibilis, de bizonyíték nélküli: hogy ez az a
munka, amelyben az MI a legtöbbet segíthet; hogy tiltással nem szüntethető meg;
hogy éppen ők maradnak ki; hogy a befektetést eleve elriasztja. Egy ellenséges
olvasó mindenhová odaírhatja: forrás?

**Megáll?** Megáll. Az 1.0 nem különböztette meg a dokumentált tényt a levezetéstől
és a feltételezéstől, és ettől a **jól alátámasztott állítások is gyengébbnek
látszottak**. Ez a pont azért fontos, mert a javítása nem az állítások törlése,
hanem a megjelölésük: egy vállalt feltételezés erősebb, mint egy leleplezett tény.

**Mi lett belőle.** Az 5. fejezet minden alfejezete a címében jelzi a státuszt:

- 5.1 Elvesztegetett pedagógusi kapacitás — **levezetett becslés**
- 5.2 Biztonsági és adatvédelmi kockázat — **feltételezés, szerkezeti okból mérhetetlen**
- 5.3 Esélyegyenlőségi kár — **feltételezés**
- 5.4 Innovációs kár — **részben dokumentált**

Az esélyegyenlőségi érv például most így zárul:

> Ezt az állítást hazai adat nem támasztja alá; a javaslat szerinti hatásmérés
> egyik kérdése éppen ez legyen.

A 3.1 pont ezzel szemben „Dokumentált tények” címmel gyűjti össze azt a hármat,
ami valóban áll: a hivatalos appok kizárólagosságát, az üzemeltető saját
állásfoglalását a nem hivatalos kliensről, és a Neptun-app megszűnését. A bírálat
maga is ezt nevezte a szöveg legerősebb részének, ezért kapott külön címet.

**Mi maradt nyitva.** A KRÉTA-tudásbázis hivatkozása `[ELLENŐRIZENDŐ]` jelöléssel
áll. Ez a dokumentum egyik legerősebb bizonyítéka, mert azt mutatja, hogy a zártság
szándékolt üzemeltetői álláspont, nem műszaki mellékhatás. Érdemes a pontos
cikkcímet, URL-t és lekérdezési dátumot pótolni, sőt archivált másolatot készíteni
róla.

---

## 10. A hatásbecslés nincs kész

**A kifogás.** Létszámok, TALIS-adat, osztálylétszám, óradíj, végső munkaóra mind
`[ELLENŐRIZENDŐ]` vagy `[SZÁMÍTANDÓ]`, közben bekerül egy felülről választott
„10%-ot kivált” feltételezés. A dokumentum első fele jog- és biztonságpolitikai
érvelésként működik, aztán hirtelen egy számszerű gazdasági hatásígéretet vállal,
amely gyengébb, mint az előtte levő érvelés.

**Megáll?** Megáll, de a bírálat itt a tünetet nevezi meg, nem a betegséget. A baj
nem elsősorban az volt, hogy hiányoztak a számok, hanem hogy a dokumentum **egyáltalán
számszerű gazdasági ígéretet tett**, méghozzá forintban, egy olyan érvelés végén,
amely jogi és biztonsági alapon állt. A javítás ezért kétirányú: a számokat pótolni
kell, **és egyben kisebbre venni, amit ígérnek**.

**Mi lett belőle.** Először a számok, forrással:

| Bemenet | Érték | Forrás |
|---|---|---|
| pedagógusok, oktatók | kb. 148 000 fő | KSH, 2024/2025, előzetes |
| heti általános adminisztráció | 3,2 óra | OECD TALIS 2024, Magyarország |
| bruttó havi átlagkereset | 840 753 Ft | KSH, pedagógusok, 2025 |
| tanítási hetek | 36 | levezetés |

Ebből évi mintegy 17,0 millió pedagógusi munkaóra adódik általános adminisztratív
munkával. A „10%” helyére érzékenységi sáv lépett:

| Kiváltott arány | Felszabaduló óra/év | Bérértéken | Álláshelyre átszámítva |
|---|---|---|---|
| 5% | 0,85 millió | 4,7 Mrd Ft | kb. 500 |
| 10% | 1,70 millió | 9,3 Mrd Ft | kb. 990 |
| 20% | 3,41 millió | 18,6 Mrd Ft | kb. 1980 |

Ezután jön a két megszorítás, amelyet az 1.0 elhallgatott. Egy: **ez nem
költségvetési megtakarítás**, mert a létszám nem csökken és a bér nem lesz kevesebb;
amiről szó van, az visszanyert szakmai kapacitás, és a forintérték csak a nagyságrend
érzékeltetésére szolgál. Kettő: a TALIS „általános adminisztratív munka” kategóriája
**nem azonos** a KRÉTA-adminisztrációval, és a felmérés az alsó középfokú
pedagógusokra reprezentatív, tehát az egész köznevelési létszámra vetítés
nagyságrendi, nem pontos.

**Mi maradt nyitva.** Kettő, és mindkettő szerepel a 12. fejezetben.

A **költségoldal** hiányzik: az üzemeltetői ráfordítás, a nyilvántartás működtetése
és az intézményi felkészítés költsége nincs becsülve, így a hatásvizsgálat nem teljes.
Egy hasznot mutató, költséget nem mutató becslés önmagában is támadható.

A **források másodkézből** származnak. A KSH és az OECD oldalait a munkakörnyezet
hálózati szabályai blokkolták, ezért a számok keresőn át elért kiadványokból jöttek.
Publikálás előtt az elsődleges táblázatokkal egyeztetendők.

---

## 11. A 100% funkcióparitás túl nagy fogás

**A kifogás.** 2027. szeptember 1-jére minden hivatalos KRÉTA-funkció delegálható
lenne. Ha holnap megjelenik egy különösen érzékeny új művelet, elvileg azt is ki
kell nyitni. Ráadásul az API és a GUI funkciók nem feltétlenül képezhetők le
egy az egyben. A banki szabályozás sem azt mondja, hogy minden banki UI-művelet
legyen API-n reprodukálható, hanem meghatározott szolgáltatásokhoz szabályoz hozzáférést.

**Megáll?** Megáll, mindhárom részében. A leképezhetőségi érv a legtechnikaibb, de
a jövőbeli funkcióra vonatkozó a legveszélyesebb: egy ilyen szabály mellett az
üzemeltetőnek **érdeke lenne késleltetni** minden új funkció bevezetését, ami éppen
a fejlődés ellen hat.

**Az 1.0 szövege.**

> Mérhető cél: 2027. szeptember 1-jéig a KRÉTA hivatalos alkalmazásaiban elérhető
> funkciók 100%-a elérhető delegált hozzáféréssel.

**Mi lett belőle.** A 100% visszavonva, helyette **funkciókatalógus**, a PSD2
mintájára, amely szintén meghatározott szolgáltatásokhoz szabályoz hozzáférést. A
kormányrendelet melléklete tételesen felsorolja a delegálható funkciókat, és
mindegyikhez hozzárendeli a szükséges bizalmi szintet, valamint azt, hogy a funkció
az érintett saját adatkörébe tartozik-e.

A jövőbeli funkció kérdését eljárás oldja meg, nem automatizmus: új hivatalos
funkció megjelenésekor az üzemeltető kilencven napon belül **besorolási javaslatot
tesz**, a katalógust pedig a miniszter évente felülvizsgálja.

A 100% csak ott maradt, ahol vállalható:

> a katalógus 2027. szeptember 1-jén lefedi a hivatalos alkalmazások **olvasási**
> funkcióinak 100%-át; 2028. szeptember 1-jén tartalmazza a **műveleti** funkciók
> besorolását.

**Mi maradt nyitva.** A besorolási javaslat az üzemeltetőnél van, tehát nála van a
lassítás lehetősége is. A kilencven napos határidő és az éves miniszteri
felülvizsgálat ezt korlátozza, de nem szünteti meg. Ha a szakmai vita ezt kifogásolja,
a válasz egy jogvesztő határidő vagy egy hallgatólagos besorolási szabály lehet.

---

## 12. Szülői autonómia és vegyes adatkörök

**A kifogás.** A javaslat szerint az intézmény korlátozhat szoftvert, ha a
jogosultság más személy adataira terjed ki, de ez nem érinti a szülő gyermekére
vonatkozó felhatalmazását. Csakhogy egy gyermek KRÉTA-rekordja nem steril módon
csak a gyermek adataiból áll: lehet benne tanári kommunikáció, más személyt érintő
kontextus. A GDPR maga is kimondja, hogy az adathordozhatóság nem sértheti mások
jogait és szabadságait. Nincs végigvezetve, mi történik a vegyes adatkörökkel.

**Megáll?** Megáll. Az 1.0 egy elvi mondattal intézte el a kérdést, amely ráadásul
**a rossz irányba** zárta le: a szülői felhatalmazást kivette az intézményi
korlátozás alól, holott éppen ott van a vegyes adatkör. A tanári üzenet, a fegyelmi
ügy és a más tanulót is érintő bejegyzés mind a gyermek rekordjában él.

**Az 1.0 szövege.**

> E korlátozás nem érinti a tanuló saját adataira, illetve a szülő gyermeke adataira
> vonatkozó felhatalmazását.

**Mi lett belőle.** A kérdés kikerült az elvi szintről, és a funkciókatalógusba
került, tételes besorolásként. A normaszövegben:

> (3) Ha a felhasználó jogosultsága olyan adatra is kiterjed, amely más természetes
> személy személyes adata, a felhatalmazás erre az adatkörre csak annyiban terjed ki,
> amennyiben a funkciókatalógus az adott funkciót erre kifejezetten feljogosítja.

A 6.5 pont indokolja, miért katalógusban és nem törvényben: a besorolás vitatható és
felülvizsgálandó, tehát rendeleti mellékletbe való. Ahol a funkció más személy adatát
is elérhetővé tenné, ott a funkció vagy nem delegálható, vagy csak szűkített, a
harmadik személyre vonatkozó részt elhagyó formában.

**Mi maradt nyitva.** Maga a besorolás. Ez a 12. fejezet 3. nyitott kérdése, és
őszintén szólva ez a javaslat legmunkaigényesebb része: végig kell menni a KRÉTA
minden adatmezőjén, és eldönteni, kinek az adata. E nélkül a normaszöveg (3)
bekezdése üres keret.

Ide tartozik a 2. nyitott kérdés is: a nagykorúsághoz közeledő tanuló saját
felhatalmazása és a szülői felhatalmazás viszonya. Melyik életkortól illeti meg a
tanulót önálló jog, és mit lát ilyenkor a szülő.

---

## Amit a bírálat nem kért, de hiányzott

A bírálat záró mondata szerint hiányzik körülbelül egy fél fejezetnyi biztonsági,
adatvédelmi és felelősségi modell. A biztonsági és adatvédelmi részt a 6. fejezet
pótolja, a 12 pont mentén. A **felelősségi** rész azonban egyik pontban sem szerepelt
kifejezetten, pedig e nélkül a konstrukció nem működik. A 7. fejezet ezért új.

**Ki adatkezelő és ki adatfeldolgozó.** Táblázat, amely esetenként megmondja. A
felhatalmazott szoftver kiadója az A) és B) esetben önálló adatkezelő a felhasználó
megbízásából, a C) esetben viszont az intézmény adatfeldolgozója.

**A pedagógusi felhatalmazás nem személyes jog.** Ha a pedagógus jogviszonya
megszűnik vagy jogosultsága változik, a felhatalmazás automatikusan követi.

**Az üzemeltető felelőssége a felületig terjed.** Azért, amit a felhatalmazott
szoftver az adattal a kiadás után tesz, az üzemeltető nem felel. Ez a
legpraktikusabb mondat az egész javaslatban: e nélkül az eKRÉTA-nak közvetlen
érdeke fűződik ahhoz, hogy a nyitást ellehetetlenítse, és a jogszabály papíron marad.

Ezen kívül bekerült három elem, amelyre a bírálat 5. pontja kérdezett rá, de amelyre
külön pont nem jutott: a kompromittált kliens kezelése (6.3), az adathalászat elleni
alapvédelem (6.4), és egy „Amit ez a keret nem old meg” szakasz (6.6), amely
felsorolja a maradék kockázatot. A 12. fejezet pedig a nyitott kérdéseket nevezi
meg, köztük az előterjesztő saját érdekütközését.

Ennek a két utolsó szakasznak nem az őszinteség a célja, hanem a tárgyalási pozíció:
amit az előterjesztő maga nevez meg gyengeségként, azt a bíráló már nem tudja
leleplezésként felmutatni.
