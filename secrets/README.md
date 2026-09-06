# secrets/

Helyi belépési adatok fejlesztéshez. **Ebből a mappából a Git egyedül ezt a
README-t követi** — a `.gitignore` mindent mást kizár (`secrets/*`), tehát ide
nyugodtan kerülhet valódi jelszó.

Ellenőrizni bármikor lehet:

```bash
git check-ignore -v secrets/<fájl>   # ki kell írnia a kizáró szabályt
git status --short secrets/          # csak a README látszhat
```

## Mi van itt

| Fájl | Mire való |
| --- | --- |
| `.env` | A hosztolt szerver helyi futtatásához: `GOOGLE_CLASSROOM_CLIENT_ID`, `GOOGLE_CLASSROOM_CLIENT_SECRET`, `OAUTH_ISSUER`. A teljes mezőlista: [`../server/.env.example`](../server/.env.example). |
| `.env.marci`, `.env.benedek` | Valódi KRÉTA-belépések kézi próbához (`KRETA_USERNAME`, `KRETA_PASSWORD`, `KRETA_INSTITUTE_CODE`). A megszűnt Python MCP-szerverből maradtak; egyik jelenlegi csomag sem olvassa őket automatikusan. |

Egyik fájlt sem tölti be magától semmi. A szerver a környezetből olvas:

```bash
cd server
set -a && . ../secrets/.env && set +a
TOKEN_SEALING_KEY="$(npm run --silent keygen)" npm run dev
```

Az asztali bővítmény **nem** ezeket használja: a gyerekek adatait a saját
titkosított tárolójába írja a beállító oldalról (lásd
[`../desktop/README.md`](../desktop/README.md)).

## Ha egy titok mégis kikerül

A `.env` Classroom client secretje a Google Cloud konzolban cserélhető; a
KRÉTA-jelszavak a KRÉTA-ban. A fájl törlése önmagában nem elég, ha egyszer
commit lett belőle — akkor a titkot magát kell lecserélni.
