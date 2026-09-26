# Hivatkozás-ellenőrzés

Az `AI-Orszag-sajat-oktatasi-adat-teljes.md` minden jogi, műszaki és statisztikai hivatkozásának ellenőrzése. Két kérdést tettünk fel mindegyikre: létezik-e a hivatkozott forrás a megadott azonosítóval, és valóban azt tartalmazza-e, amit a szöveg állít róla.

**Ellenőrzés dátuma:** 2026. szeptember 26.

## Az ellenőrzés módszere és korlátja

A munkakörnyezet hálózati szabályzata a mérvadó forrásokat közvetlenül nem engedi elérni. Blokkolt a `rfc-editor.org`, a `datatracker.ietf.org`, az `eur-lex.europa.eu`, a `ksh.hu`, az `oecd.org` és a `tudasbazis.ekreta.hu` is, böngészővel és `curl`-lel egyaránt. Az ellenőrzés ezért kereséssel elért találatokra és a hivatkozott szövegek ismert tartalmára épül.

Ennek a gyakorlati következménye az, hogy a Hivatalos Lap és a szabványszövegek betű szerinti egyeztetése nem történt meg. Ahol a bekezdésszint dönt, ott ezt a jelentés külön jelzi. A találati szinten megerősített adatoknál a forrás URL-je rendelkezésre áll, a végleges szöveghez a lekérdezést elsődleges forrásból érdemes megismételni.

## 1. Amit javítani kell

Négy tárgyi tévedést találtunk.

### 1.1 A Model Context Protocol és az OAuth összekapcsolása téves dátumon

A 2. fejezet azt írja, hogy „2024 novemberében megjelenik a Model Context Protocol, amely OAuth-alapú delegált hozzáférésre építve ad szabványos módot MI-asszisztensek külső rendszerekhez kapcsolására".

A protokoll 2024. november 5-i első kiadása nem tartalmazott engedélyezési réteget. Az OAuth 2.1-re épülő felhatalmazási specifikáció a 2025. március 26-i változattal került be, a Streamable HTTP átvitellel együtt. A mondat mai formájában olyan tulajdonságot tulajdonít a 2024 novemberi kiadásnak, amely akkor még nem volt a része.

Ez azért nem mellékes, mert éppen ez a hivatkozás mondja ki, hogy a javaslat műszaki megoldása iparági szabvány. Egy bíráló, aki utánanéz, itt talál fogást a szövegen.

*Javasolt szöveg:* „2024 novemberében megjelenik a Model Context Protocol, amely szabványos módot ad MI-asszisztensek külső rendszerekhez kapcsolására. A protokoll 2025. márciusi változata OAuth 2.1-re épülő felhatalmazási réteggel egészül ki, vagyis ugyanazt a megoldást írja elő, amelyet ez az előterjesztés javasol."

### 1.2 Az egészségügyi adattér hatálybalépésének napja

A 3.3 pont szerint a rendelet „hatályba lépett 2025. március 25-én". A rendeletet 2025. március 5-én hirdették ki, és a kihirdetést követő huszadik napon, **2025. március 26-án** lépett hatályba.

### 1.3 A 3. cikk alkalmazásának kezdete négy évvel későbbi, mint ahogy a szöveg írja

Ez a jelentés legsúlyosabb megállapítása.

A 3.3 pont szerint a rendelet „alkalmazása jellemzően 2027. március 26-tól kezdődik". Az általános alkalmazási időpontra ez igaz. A 3–15. cikk, a 23. cikk (2)–(6) bekezdése, a 25., 26., 27., 47., 48. és 49. cikk alkalmazása azonban **2027. március 26. helyett 2031. március 26-án** kezdődik.

Az előterjesztés éppen a 3. cikket hívja fel precedensként. A jelenlegi megfogalmazás tehát azt sugallja, hogy a precedens fél éven belül élő joggá válik, miközben a hivatkozott cikk a valóságban 2031-ig nem alkalmazandó.

A javítás a precedens erejét nem rontja le, mert a jogi szerkezet ugyanaz marad: ágazati uniós jogszabály hoz létre elektronikus hozzáférési jogot közfeladaton alapuló, különösen érzékeny nyilvántartásban. Amit a pontosítás megváltoztat, az az ütemezés olvasata, és ez a javaslat javára fordítható. Az Unió ugyanerre a feladatra hat évet szánt a hatálybalépéstől. Az előterjesztés 2027 szeptemberi éles indulása ehhez mérve gyors, és a 8. fejezet ütemterve a nemzetközi gyakorlathoz képest nem tekinthető elnagyoltnak.

*Javasolt szöveg:* „Hatályba lépett 2025. március 26-án. Az általános alkalmazás 2027. március 26-tól kezdődik, a 3–15. cikk alkalmazása azonban csak 2031. március 26-tól. Az Unió tehát ugyanerre a feladatra a hatálybalépéstől számítva hat évet szánt; az alábbi ütemterv ehhez mérve gyorsabb."

### 1.4 A pedagóguslétszám két tanévből származik, egyetlen forrásmegjelöléssel

Az 1.5 pont táblázata az általános iskolai pedagógusok számát „kb. 74 000 fő", forrásként „KSH, 2024/2025, előzetes" megjelöléssel adja meg. A 2024/2025-ös előzetes adat **73 ezer fő**; a 74 ezer a 2025/2026-os tanév adata. A táblázat többi köznevelési sora 2024/2025-ös, tehát a 74 ezer önmagában áll ki a sorból.

A javítás továbbvezet a 4.1 pont számításába:

| Érték | Jelenlegi szöveg | Javított |
|---|---|---|
| általános iskolai pedagógus | 74 ezer | 73 ezer |
| a hatásbecslés alapköre | 117 ezer | 116 ezer |
| éves adminisztrációs óraszám | 13,5 millió | 13,4 millió |
| a kiemelt példa (14%) | 1,9 millió óra, 16 óra/pedagógus | változatlan |
| a 17,5%-os cella | 2,4 millió óra | 2,3 millió óra |

A példaszámítás tehát nem sérül, és a fejezet fő állítása sem. Egyetlen rácscella és két összesítő szám változik.

A köznevelés és a szakképzés együttes 148 ezres létszáma a 2024/2025-ös adathoz illeszkedik: a 2025/2026-os előzetes adat 149 ezer fő, ami egy év alatt 1600 fős növekedés.

## 2. Amit pontosítani érdemes

Ezek nem tévedések, hanem olyan megfogalmazások, amelyeknél a hivatkozott szöveg mást vagy kevesebbet mond, mint amit az olvasó a mondatból kiolvas.

### 2.1 A (63) preambulumbekezdés megengedő, nem ajánló

A 3.1 pont szerint a preambulumbekezdés „azt ajánlja, hogy ahol lehetséges, az adatkezelő biztosítson távoli hozzáférést". A szöveg valójában úgy szól, hogy ahol lehetséges, az adatkezelő **legyen képes** távoli hozzáférést biztosítani olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz.

A különbség kicsi, de egy jogi bíráló pontosan itt fog megállni. A mai mondat kötelezettség-közeli ajánlást olvas bele egy megengedő fordulatba, és mivel a bekezdés úgyis csak preambulum, a pontosítás semmit nem vesz el az érvből.

*Javasolt szöveg:* „A (63) preambulumbekezdés ennél tovább megy, amikor lehetőségként rögzíti, hogy ahol lehetséges, az adatkezelő legyen képes távoli hozzáférést biztosítani olyan biztonságos rendszerhez, amely az érintettnek közvetlen hozzáférést ad a saját adataihoz."

### 2.2 A 15. cikk szerinti másolat nem „egyszeri"

A 3.1 pont a hozzáférési jogot „egyszeri adatmásolat formájában" írja le. A 15. cikk (3) bekezdése az első másolatot ingyenesen biztosítja, a további másolatokért az adatkezelő észszerű díjat kérhet. A szöveg által kifejezni kívánt tartalom, vagyis hogy ez eseti kérelemre adott másolat és nem folyamatos gépi hozzáférés, pontosabban is megfogalmazható.

*Javasolt szöveg:* „…hozzáférési jogot biztosít az érintettnek, kérelemre adott adatmásolat formájában, amely eseti és nem folyamatos gépi hozzáférés."

### 2.3 A brit versenyhatósági kötelezés megnevezhető

A 3.6 pont szerint „a brit versenyhatóság pedig 2018-tól egységes nyílt banki API-szabványt tett kötelezővé". Ez tartalmilag helyes. A kötelezést tartalmazó jogi eszköz a *Retail Banking Market Investigation Order 2017*, amelynek 14. cikke 2018. január 13-át szabta végrehajtási határidőül a kilenc legnagyobb bank számára. A megnevezés hozzáadása a hivatkozást ellenőrizhetővé teszi.

### 2.4 A dokumentációs kötelezettség fél évvel a megfelelési határnap előtt kezdődött

A 3.6 pont a dedikált felület, a nyilvános specifikáció és a tesztkörnyezet követelményét 2019. szeptember 14-hez kapcsolja. A megfelelési határnapra ez igaz, a dokumentáció átadására és a tesztkörnyezet biztosítására azonban már 2019. március 14-től kötelezettek voltak a számlavezetők, tehát fél évvel a felület éles indulása előtt.

Ez a részlet a javaslat mellett szól, mert ugyanezt a szerkezetet követi a 8. fejezet ütemterve is, amikor a dokumentáció és a tesztkörnyezet közzétételét 2027. június 30-ra, az éles indulást 2027. szeptember 1-jére teszi. Érdemes kimondani, hogy ez a sorrend a PSD2 gyakorlatából származik.

## 3. Egy [ELLENŐRIZENDŐ] jelölés feloldható

Az 1.4 pont a KRÉTA tudásbázisára hivatkozik, a cikk pontos adatait pótolandóként jelölve. A hivatkozott tartalom megtalálható:

**Gyakran Ismételt Kérdések – KRÉTA Mobil applikációk, KRÉTA Tudásbázis**
https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId=4065021

A lap tartalma megerősíti az előterjesztés állítását: ha a felhasználó adatai helyesek és a webes belépés sikeres, a mobilos belépés biztonsági okból ideiglenesen felfüggeszthető, mert a fiókhoz rendellenes működést észleltek, és ez akkor fordulhat elő, ha nem hivatalos KRÉTA-alkalmazás fut a készüléken vagy ugyanazzal a profillal egy másik készüléken.

A lap ezen túl is megy, és ezt az előterjesztés ma nem használja ki. Kimondja, hogy a KRÉTA-hoz kapcsolódó, nem hivatalos, harmadik fél által fejlesztett alkalmazások használata nem javasolt és saját felelősségre történik, továbbá hogy az üzemeltető semmilyen felelősséget nem vállal ezek működéséért, biztonságáért, adatkezelési gyakorlatáért, sem a használatukból eredő kárért, adatvesztésért vagy adatvédelmi incidensért.

Ez az 1.4 pont állítását, vagyis hogy a zártság szándékolt üzemeltetői álláspont, közvetlen idézettel támasztja alá. A lap ebben a környezetben nem elérhető, ezért a betű szerinti magyar szöveget és a lekérdezés dátumát a végleges változatba kézzel kell bemásolni, lehetőleg archivált példánnyal együtt.

## 4. Ami nyitva marad

**Az átlagos osztálylétszám** (4.3 pont) a KSH előzetes oktatási kiadványában nem szerepel. Ami szerepel, az az egy pedagógusra jutó tanulók száma, országos átlagban 9,7 fő a 2024/2025-ös tanévben. A 4.3 pont érve azonban nem igényel pontos osztálylétszámot, hiszen azt állítja, hogy egyetlen másolással egy teljes osztály adata mozdul. A jelölés elhagyható, ha a mondat számot nem nevez meg.

**A KRÉTA-alkalmazások megjelenési éve** (2. fejezet) nem oldható fel kereséssel. Az alkalmazásáruházak közzétételi dátuma vagy a tudásbázis változásnaplója adhatja meg.

**Az egészségügyi adattér 3. cikkének bekezdésszintű hivatkozása** továbbra is nyitott. A cikk címe és tárgya megerősített, vagyis a természetes személy joga a saját elektronikus egészségügyi adataihoz való hozzáféréshez, beleértve az európai csereformátumban való letöltést. Az az állítás, hogy az érintett maga adhat hozzáférést az általa választott szereplőnek, a cikk későbbi bekezdéseiben szerepel, de a bekezdés száma a Hivatalos Lap szövege nélkül nem állapítható meg.

## 5. Amit az ellenőrzés megerősített

### Jogforrások

| Hivatkozás | Létezik | A tartalom egyezik | Megjegyzés |
|---|---|---|---|
| GDPR 12. cikk (2) | igen | igen | az érintetti jogok gyakorlásának elősegítése |
| GDPR 15. cikk | igen | pontosítandó | lásd 2.2 |
| GDPR 20. cikk (3) | igen | igen | a közérdekű vagy közhatalmi feladat kivétele |
| GDPR 20. cikk (4) | igen | igen | mások jogait és szabadságait nem sértheti |
| GDPR 28. cikk | igen | igen | adatfeldolgozói szerződés |
| GDPR (63) preambulum | igen | pontosítandó | lásd 2.1 |
| GDPR alkalmazása 2018. május 25. | igen | igen | |
| (EU) 2015/2366 irányelv (PSD2) | igen | igen | irányelv, a forrásjegyzék így is jelöli |
| (EU) 2018/389 felhatalmazáson alapuló rendelet | igen | igen | 2017. november 27-i, dedikált felület, nyilvános dokumentáció, tesztkörnyezet; a dátumhoz lásd 2.4 |
| (EU) 2023/2854 (adatrendelet) II. fejezet | igen | igen | a II. fejezet a 3–7. cikk, összekapcsolt termékek és kapcsolódó szolgáltatások; a tanulmányi nyilvántartás valóban kívül esik, a szöveg helyesen csak irányjelzőként hívja fel |
| (EU) 2024/1689 (MI-rendelet) 4. cikk | igen | igen | MI-jártasság, 2025. február 2-tól alkalmazandó |
| (EU) 2025/327 (egészségügyi adattér) 3. cikk | igen | részben | a cikk tárgya egyezik, a dátumok javítandók, lásd 1.2 és 1.3 |
| 2011. évi CXC. törvény a nemzeti köznevelésről | igen | igen | |
| 2011. évi CCIV. törvény a nemzeti felsőoktatásról | igen | igen | |
| brit versenyhatósági nyílt banki kötelezés | igen | igen | megnevezéshez lásd 2.3 |

### Műszaki szabványok

| Hivatkozás | Létezik | Cím és év helyes | Megjegyzés |
|---|---|---|---|
| RFC 6749 | igen | igen | The OAuth 2.0 Authorization Framework, 2012 |
| RFC 7009 | igen | igen | OAuth 2.0 Token Revocation, 2013 |
| RFC 7591 | igen | igen | OAuth 2.0 Dynamic Client Registration Protocol, 2015 |
| RFC 7636 | igen | igen | a teljes cím: Proof Key for Code Exchange by OAuth Public Clients, 2015 |
| RFC 8414 | igen | igen | OAuth 2.0 Authorization Server Metadata, 2018 |
| RFC 9700 (BCP 240) | igen | igen | Best Current Practice for OAuth 2.0 Security, 2025. január; kötelezővé teszi a PKCE-t, elavulttá nyilvánítja az implicit és a jelszó alapú folyamatot, kezeli az összekeverési támadásokat, és ajánlja a birtokláshoz kötött tokeneket. A 7.2 és a III. pont minden állítása helyes. |
| FAPI 2.0 Security Profile | igen | igen | OpenID Foundation, végleges specifikációként 2025 februárjában elfogadva, formális biztonsági elemzéssel |
| Model Context Protocol | igen | javítandó | lásd 1.1 |
| Ed-Fi Alliance | igen | igen | nyílt adatszabvány közoktatási rendszerek adatcseréjéhez |
| 1EdTech OneRoster | igen | igen | |
| Erasmus Without Paper | igen | igen | |

### Statisztikai források

| Adat | A szövegben | Ellenőrzés | Állapot |
|---|---|---|---|
| ált. isk. adminisztrációs idő | heti 3,2 óra | 3,2 óra, TALIS 2024 Magyarország | egyezik |
| OECD-átlag | 3 óra | 3 óra | egyezik |
| 2018 óta nem csökkent | igen | „has not changed since 2018" | egyezik |
| a stressz forrása | 55% túl sok adminisztráció | 55% | egyezik |
| ált. isk. tanulók | kb. 710 000 | 710 ezer, 2024/2025 | egyezik |
| ált. isk. pedagógusok | kb. 74 000 | 73 ezer 2024/2025-ben | javítandó, lásd 1.4 |
| középfokú pedagógusok | kb. 43 000 | 43 ezer, 2024/2025 | egyezik |
| óvodapedagógusok | kb. 31 000 | 31 ezer felett, 2024/2025 | egyezik |
| felsőoktatási hallgatók | kb. 351 000 | 351 ezer, 2025/2026 | egyezik |
| köznevelés és szakképzés együtt | közel 148 ezer | 2025/2026-ban 149 ezer, egy évvel korábban 1600 fővel kevesebb | egyezik a 2024/2025-ös évre |
| Neptun mobilalkalmazás | 2023. október 19. | 2023. október 19., a kétfaktoros belépés bevezetésével | egyezik |

A TALIS 2024 magyar országjelentésének mind a négy felhasznált száma pontosan egyezik. A 4.1 pont heti 3,2 órát 36 tanítási héttel számol, ami a magyar tanév hosszához illeszkedik, és a TALIS a tanítási időszak egy jellemző hetére kérdez rá.

## 6. Mit jelent ez a javaslat egészére

Az ellenőrzés negyvennégy hivatkozást érintett. Egyetlen hivatkozott jogszabály, szabvány vagy kiadvány sem hiányzik vagy tévesen azonosított, tehát olyan hiba nem fordult elő, amely a javaslat érvelését alapjaiban érintené.

A négy tárgyi tévedés közül három dátum, egy pedig egy statisztikai év elcsúszása. A javítás egyike sem igényel szerkezeti változtatást, és a hatásbecslés kiemelt példaszámítása érintetlen marad.

Egy megállapítás érdemben is hasznos. Az egészségügyi adattér 3. cikkének 2031-es alkalmazási időpontja a javaslat ütemtervét kedvezőbb megvilágításba helyezi, mint a mostani szöveg, és ezt az érvet érdemes kimondani a 3.3 pontban.

A KRÉTA-tudásbázis feloldott hivatkozása pedig többet kínál, mint amennyit a szöveg ma használ: az üzemeltető kifejezett, írásbeli felelősségkizárása a harmadik fél alkalmazásaira nézve az 1.4 pont központi állítását közvetlen idézettel támasztja alá.
