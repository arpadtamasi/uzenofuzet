# Üzenőfüzet — asztali bővítmény

Csak olvasható hozzáférés a gyerekeid KRÉTA e-naplójához, a Claude asztali
alkalmazásából. A bővítmény a **saját gépeden** fut, és közvetlenül a KRÉTA
szerverével beszél — nincs köztes szerver, nincs fiók, nincs kiadott token.

## Telepítés

1. Töltsd le a `uzenofuzet-<verzió>.mcpb` fájlt.
2. Kattints rá duplán. A Claude asztali alkalmazás telepíti.
3. Nincs mit kitölteni.

## Gyerek hozzáadása

Írd a Claude-nak: *„add hozzá Marcit a KRÉTA-hoz”*. Megnyílik egy beállító
oldal a böngésződben, a saját gépeden:

- az iskolát **név szerint** keresed, nem kódot kell kimásolnod egy URL-ből;
- a KRÉTA-jelszót ott adod meg, **nem a beszélgetésben** — így nem kerül bele a
  Claude-nak küldött szövegbe;
- a mentés előtt a bővítmény belép a KRÉTA-ba, tehát az elgépelt jelszó ott
  helyben kiderül.

Ugyanezzel a paranccsal frissítheted egy meglévő gyerek jelszavát, és
tetszőleges számú gyereket vehetsz fel. A `kreta_list_children` megmutatja,
ki van beállítva, a `kreta_remove_child` pedig törli — a tárolt jelszavával
együtt.

## Mi hol tárolódik

| Adat | Hol | Meddig |
| --- | --- | --- |
| KRÉTA-jelszó | AES-256-GCM-mel titkosítva a gépeden | amíg nem törlöd |
| titkosító kulcs | macOS kulcstartó / Windows DPAPI / Linux Secret Service | amíg nem törlöd |
| KRÉTA hozzáférési token | csak a memóriában | a Claude bezárásáig |
| gyerek neve, iskolája, felhasználóneve | olvasható szövegként a beállításfájlban | amíg nem törlöd |

A beállításfájl helye:

- macOS: `~/Library/Application Support/Uzenofuzet/children.json`
- Windows: `%APPDATA%\Uzenofuzet\children.json`
- Linux: `~/.config/uzenofuzet/children.json`

Ha a gépeden nem érhető el kulcstároló, a kulcs egy csak általad olvasható
fájlba kerül a beállítások mellé. Ez elrejtés, nem védelem — a `kreta_login`
és a beállító oldal meg is mondja, melyik eset áll fenn.

## Mit tud és mit nem

Minden művelet olvasás: jegyek, órarend, hiányzások, házi feladatok,
bejelentett dolgozatok, feljegyzések, faliújság, fogadóórák, osztályátlagok,
tanév rendje. Nincs írás, nincs törlés, és nincs olyan tool, amivel tetszőleges
KRÉTA-címet le lehetne kérni.

A Google Classroom nem része az asztali bővítménynek: ahhoz Google OAuth kell,
aminek a titkos kulcsa egy letölthető csomagban nem tudna titok maradni.

## Fejlesztés

```bash
npm install                      # a repó gyökeréből
npm test -w @uzenofuzet/desktop
npm run build -w @uzenofuzet/desktop
npm run pack:desktop             # dist/uzenofuzet-<verzió>.mcpb
```

A beállító oldal önmagában is megnézhető, egy hamis KRÉTA-val a háttérben:

```bash
npm run demo:setup -w @uzenofuzet/desktop   # kiírja az URL-t
```

Hasznos környezeti változók:

- `UZENOFUZET_DATA_DIR` — más beállításmappa (teszteléshez);
- `UZENOFUZET_KEY_STORAGE=file` — a rendszer kulcstárolójának megkerülése.

A KRÉTA-kliens, az iskolakereső és a tool-tábla a [`../core`](../core)
csomagban van, közösen a hosztolt szolgáltatással.

---

Független projekt. Nem áll kapcsolatban az eKRÉTA Zrt.-vel, és nem hivatalos
KRÉTA-termék.
