# A két oktatási előterjesztés viszonya

## „AI-Ország: szabad tananyag" és „AI-Ország: saját oktatási adat, saját eszközzel"

*Munkaanyag a munkacsoport számára. Célja, hogy a két anyag összehasonlítható, és szükség esetén összevonható legyen.*

---

## 1. A két anyag nem versenyzik, hanem kiegészíti egymást

Ugyanannak az oktatási pilotnak a két fele. Tárgyi átfedés nincs, szándékbeli átfedés teljes.

| | **Szabad tananyag** | **Saját oktatási adat** |
|---|---|---|
| Mire vonatkozik | tananyag, tankönyv, feladatbank, NAT, kerettanterv | tanulói és szülői személyes adat a KRÉTA-ban és a Neptunban |
| Az adat jellege | **nem személyes adat**, közpénzből előállított mű | **kizárólag személyes adat** |
| A kérdés | ki használhatja fel, és milyen licenc alatt | ki férhet hozzá, milyen eszközzel, és mi történik vele azután |
| A megoldás eszköze | nyílt licenc (CC BY 4.0) és gépi olvasható közzététel | felhatalmazáson alapuló delegált hozzáférés |
| Érintett jogszabály | 2012. évi LXIII., 2013. évi CCXXXII., 110/2012. Korm. r. | 2011. évi CXC. (Nkt.), 2011. évi CCIV. (Nftv.) |
| Kockázati profil | szerzői jogi és jogdíjpolitikai | adatvédelmi és biztonsági |

**Egyik sem old meg semmit a másik nélkül.** Nyílt tananyag nélkül egy magyar oktatási MI-nek nincs mire tanulnia. Delegált hozzáférés nélkül nincs miből dolgoznia a konkrét gyerekre. A két anyag együtt írja le, mi kell ahhoz, hogy egy magyar fejlesztésű oktatási asszisztens létezhessen.

Ez az egymondatos megfogalmazás, amely mindkét anyag elejére illik:

> A tananyag azt adja meg, **mit tud** egy oktatási MI. A saját oktatási adat azt, hogy **kiről és mire** használhatja.

## 2. A közös váz — a két anyag ugyanabból a sablonból indult

A „szabad tananyag" fejezetei és a mi fejezeteink megfeleltethetők. A sablon megvan mindkettőben, nálunk kiegészítésekkel.

| Sablon | Szabad tananyag | Saját oktatási adat |
|---|---|---|
| absztrakt | dőlt bevezető | „Egy bekezdésben" + Vezetői összefoglaló |
| Probléma | Probléma | 4. Mi a probléma? |
| Előzmények | Előzmények | 5. Hogyan jutottunk ide? |
| Okozott kár | Okozott kár | 6. Milyen kárt okoz a jelenlegi helyzet? |
| Megoldási célok | Megoldási célok (Cél 1–12) | 10. Mit szeretnénk elérni? (Cél 1–4) |
| Várható haszon | Várható haszon | 11. Mi lenne a várható haszon? |
| Pontos szakpolitikai változás | I., II., IV., VIII. pont | 12. Pontosan milyen változtatást javaslunk? |
| Intézményi és pénzügyi feltételek | VIII. pont | részben a 13. ütemtervben |
| — | — | 1–3., 7–9., 14–15. (kiegészítések) |

A mi többletfejezeteink: a keretezés (1–2.), a jogi helyzet tételes végigvezetése (3.), a bizalmi, felhasználási és felelősségi modell (7–9.), a nyitott kérdések (14.) és a források (15.).

**Javaslat:** ne a mi fejezeteinket szabdaljuk vissza a sablonra, hanem a sablon legyen a közös gerinc, és mindkét anyag jelölje, hol tartja a sablon szerinti tartalmat. Ez a táblázat maga elvégzi ezt.

## 3. Módszertani különbség — és ez érdemes kimondani

**A „szabad tananyag" jogforrásból indul.** Végigveszi a hazai és uniós adatjogi fejlődést, és abból vezeti le, hol hiányzik a kötelező erejű szabály. Ez a klasszikus jogalkotás-előkészítő módszer, és erős: a hivatkozási háló sűrű és pontos.

**A „saját oktatási adat" egy működő prototípusból indul.** Az Üzenőfüzet nyílt forráskódú prototípus a valódi KRÉTA-val működik, nyilvános szolgáltatásként viszont nem érhető el: a fejlesztés éppen a nyilvánossá tétel akadályain állt meg. A javaslat réseit ezekből az akadályokból vezettük le, és a funkciókatalógus vázlata is a prototípus valódi végpontlistájából készült.

Ennek két haszna van a munkacsoport számára:

- **A hiánylista nem elméleti.** Nem azt soroljuk fel, mi hiányozhat, hanem azt, ami egy működő integrációt ma megkerülő megoldásokra kényszerít.
- **A besorolás tesztelhető.** A funkciókatalógus vázlata húsz valós végponton próbálja ki a javasolt szabályt, és a próba talált is hibát — nem a normaszövegben, hanem a besorolásunkban.

A két módszer nem alternatíva. A jogforrás megmondja, mit szabad; az implementáció megmondja, mi törik el. Érdemes mindkét anyagban egy mondattal jelezni, melyikből indult.

## 4. Szintkülönbségek — mindkét irányban

### Amiben a „szabad tananyag" erősebb

- **Nemzetközi példák sűrűsége.** Franciaország, Egyesült Államok, UNESCO OER-ajánlás, Lengyelország (ZPE), Norvégia (NDLA). A mi anyagunkban négy példa van, náluk hat, és mindegyik pontosan a tárgyhoz illik.
- **Az „AI-ready" adatszegmens kidolgozottsága.** Az adateredet, a feldolgozási lánc, a minőségi jelentés és a gépi olvasható jogi feltételek együttes előírása komoly, és nálunk nincs megfelelője.
- **A szerzői jogi levezetés pontos.** Hogy a NAT a 110/2012. Korm. rendelet melléklete, ezért az Szjt. alapján eleve nem áll szerzői jogi védelem alatt, tehát ott nem licencre hanem gépi olvasható közzétételre van szükség — ez éles, helyes megkülönböztetés.
- **A CC0 helyett CC BY indoklása.** A személyhez fűződő jogokról nem lehet érvényesen lemondani, ezért a CC0 nem biztonságos alapértelmezés. Ez pontos.

### Amiben a mi anyagunk jelenleg előrébb tart

Ez nem érdem, hanem annak a következménye, hogy a mi szövegünk már átment egy tizenkét pontos ellenséges szakmai bíráláson és három javítási körön. A bírálat pontjai nagyrészt a „szabad tananyag"-ra is illenek, tehát ez a lista inkább **előrejelzés arról, mit fognak számon kérni**, mint kritika.

- **A célok listája.** Náluk tizenkét cél, mérhető célérték és határidő nélkül, és a Cél7 valójában nem cél, hanem probléma („A tantervi elemek közötti kapcsolatok láthatatlansága"). Nálunk négy cél, mindegyikhez dátumozott, mérhető célérték. Ezt a bírálat nálunk is kérte.
- **Számszerű ígéret bizonyíték nélkül.** Az absztrakt „évi több tíz milliárd forintos hazai értékteremtést" ígér, a szöveg viszont sehol nem vezeti le. Nálunk pontosan ezt támadta a bírálat tizedik pontja, és a javítás kétirányú volt: a számokat forrással pótolni **és** kisebbre venni, amit ígérünk. A mi anyagunk ma nem forintosít, hanem órában és példaszámításként fogalmaz, kötelező pilot-méréssel.
- **Tény és feltételezés keveredése.** „A magyar tanuló idegen tantervi logikára fog tanulni" plauzibilis, de nincs alátámasztva. Nálunk a kár-fejezet minden alfejezete a címében jelzi, hogy dokumentált tény, példaszámítás vagy feltételezés.
- **Számozási és szerkezeti sérülés.** A normaszöveg I., II., majd IV., majd VIII. pontra ugrik, a bekezdések számozása pedig helyenként összeolvadt („2510.", „402516."). A III., V., VI., VII. pont hiányzik. Ez láthatóan a szülődokumentumból való átemelés nyoma, és javítandó, mielőtt a munkacsoport elé kerül.
- **Hatókör-csúszás.** A cím és a bevezető az oktatási pilotra szűkít, a 9–23. és 43–50. pont viszont az általános Közszolgáltatási Adat- és API-keretrendszerről szól: föderáció, technológiasemlegesség, beszállítófüggőség, digitális szuverenitás, kilépési terv. Ez a terjedelem nagyjából fele, és nem tananyagról szól. Vagy a cím tágítandó, vagy ez a blokk visszakerül a szülődokumentumba, és innen hivatkozás marad rá.
- **Hiányzó szakaszok.** Nincs „mit nem állítunk", nincs nyitott kérdések fejezet, nincs forrásjegyzék, és nincs érdekütközési nyilatkozat. Mind a négy olyan elem, amelyet a bírálat nálunk hiányolt, és amely a tárgyalási pozíciót erősíti: amit az előterjesztő maga nevez meg gyengeségként, azt a bíráló már nem tudja leleplezésként felmutatni.

## 5. Amit össze kell hangolni, mielőtt egy csomagban mennek

Öt ponton a két anyag ma eltérően kezel ugyanazt. Ezek közül kettő érdemi ellentmondás.

**1. Az adatrendelet státusza — érdemi.** A „szabad tananyag" az (EU) 2023/2854 rendeletet a beérő uniós adatjog láncszemeként hozza. A mi anyagunk kifejezetten helyesbít: a rendelet II. fejezete összekapcsolt termékekre vonatkozik, a tanulmányi nyilvántartásra nem, ezért jogpolitikai irányjelző és **nem jogalap**. Ha a két anyag egy csomagban megy, egy bíráló ezt az eltérést azonnal megtalálja. Egységes álláspont kell.

**2. Az EHDS szerepe — összehangolható.** Mindketten hivatkozzuk az (EU) 2025/327 rendeletet, de másra: ők a másodlagos felhasználási rendszerre és az adathozzáférési szerv kijelölésére, mi arra, hogy ágazati jogszabály hozhat létre elektronikus hozzáférési jogot közfeladaton alapuló nyilvántartásban. A kettő nem mond ellent, sőt erősíti egymást. Érdemes kölcsönösen hivatkozni.

**3. Dátumok — kis eltérés.** A kormányrendelet kihirdetése náluk 2027. február 28., nálunk 2027. március 31. A törvénymódosítás mindkettőnél 2026. december 31. Egy hónap, de egy csomagban zavaró. Javaslat: közös dátum.

**4. API-követelmények — átfedés.** A nyilvános, verziózott, dokumentált felület, a tesztkörnyezet és a szabványkövetés mindkét anyagban szerepel. Náluk általános keretként, nálunk a KRÉTA-ra szabva. Nem ellentmondás, de kétszer leírt szabály. Összevonásnál a mi 10.2 pontunk az ő 1. és 7. pontjuk különös esete.

**5. Egy tényadat pontosítandó.** Az OPEN Government Data Act a 2018-as Foundations for Evidence-Based Policymaking Act II. címe, de az aláírás 2019. január 14-én történt. A „2018-ban" megfogalmazás a törvény nevére igaz, a hatálybalépésre nem. Apróság, de hivatkozásjegyzékben számít.

## 6. Ha összevonjuk

Egy közös „AI-Ország: oktatási pilot" anyag váza, amely mindkét felet megtartja:

1. **Közös felvezetés.** A széttöredezettség és a hiányzó tananyagvagyon ugyanannak az állapotnak a két tünete. Egy magyar oktatási MI ma sem azt nem tudja, mit tanítson, sem azt, kiről beszél.
2. **Két külön probléma-, kár- és céltengely.** A tartalom és a személyes adat végig elválasztva, mert a jogi logikájuk különbözik. Ezt nem szabad összemosni, ahogy a mi anyagunkban sem mostuk össze az A), B) és C) esetet.
3. **Közös előzmények.** Az uniós adatjogi fejlődés egyszer, mindkét ágra hivatkozva.
4. **Két külön normaszöveg.** Más törvényeket módosítanak, tehát nincs ütközés; egyszerűen egymás után állnak.
5. **Közös ütemterv.** Egy dátumsor, két sávval.
6. **Közös intézményi és pénzügyi rész.** A koordinációs tanács, a költségvetési sor és a nyilvános hatásmérés mindkét ágra érvényes.
7. **Közös nyitott kérdések, források és érdekütközés.**

Ebben a szerkezetben a mi bizalmi, felhasználási és felelősségi modellünk a személyes adat sáv melléklete marad, az ő „AI-ready" adatszegmensük pedig a tartalom sávé. Egyik sem hígul.

## 7. Teendők

**A közös csomaghoz, mindkét anyagon:**

- egyeztetett álláspont az adatrendeletről;
- kölcsönös EHDS-hivatkozás;
- közös dátumsor;
- egy mondat arról, melyik anyag melyik módszerből indult.

**A „szabad tananyag" anyagon, ha a mi bírálati köreinket meg akarja előzni:**

- a célok mérhetővé és dátumozottá tétele, a Cél7 átfogalmazása;
- a „több tíz milliárd" vagy levezetés forrásokkal, vagy kivétel az absztraktból;
- tény, levezetés és feltételezés szétválasztása a kár-fejezetben;
- a számozás helyreállítása, a hiányzó III., V., VI., VII. pont pótlása vagy a számozás újrakezdése;
- a hatókör rendezése: a föderációs, technológiasemlegességi és szuverenitási blokk vagy a címbe, vagy vissza a szülődokumentumba;
- „mit nem állítunk", nyitott kérdések, forrásjegyzék és érdekütközés hozzáadása.

**A mi anyagunkon:**

- a sablon-megfeleltetés táblázata bekerült ide, a dokumentumba magába nem kell;
- egy mondat a testvéranyagról és a munkamegosztásról;
- egy mondat a módszerről: működő implementációból vezettük le a réseket.
