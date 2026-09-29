/* ======================================================================
   JavaScript alapok – számonkérés · A csoport
   1. feladat: Bevásárlólista   (10 pont)
   ======================================================================

   FELADAT
   A bevásárlólista adott a "lista" tömbben (név, ár, darab).

   Írj egy vegosszeg(lista) függvényt, amely visszaadja a lista teljes
   árát (tételenként ár × darab, összegezve).

   Írd ki tételenként a sorösszeget, majd a részösszeget (ezt a
   függvénnyel számold). Ha a részösszeg legalább 10 000 Ft, a
   szállítás ingyenes, egyébként 1500 Ft. Írd ki a szállítási díjat és
   a fizetendő összeget.

   MINTA KIMENET
   A <…> jelölésű részek helyére a programod által kiszámolt érték kerül;
   a "…" azt jelzi, hogy ott a sorok ugyanígy folytatódnak.

     <név>: <db> db × <ár> Ft = <sorösszeg> Ft
     … (minden tételre egy sor)
     Részösszeg: <összeg> Ft
     Szállítás: <1500 Ft vagy: ingyenes>
     Fizetendő: <összeg> Ft

   Futtatás a terminálban:  node f1.js
   ====================================================================== */

// ---------- Kiinduló adatok (ne módosítsd) ----------
const lista = [
  { nev: 'kenyér', ar: 890, db: 2 },
  { nev: 'tej', ar: 459, db: 3 },
  { nev: 'sajt', ar: 2490, db: 1 },
  { nev: 'alma', ar: 699, db: 4 }
];

// ---------- Ide írd a megoldásodat ----------
function vegosszeg(lista) {
  return lista.ar * lista.db
}

let osszeg = 0;
for (let i = 0; i < lista.length; i++)
{
  console.log(`${lista[i].nev}: ${lista[i].db} db x ${lista[i].ar} Ft = ${vegosszeg(lista[i])} Ft`)
  osszeg += lista[i].ar * lista[i].db
}
console.log(`Részösszeg: ${osszeg} Ft`);
console.log(osszeg >= 10000 ? "Szállítás: ingyenes" :`Szállítás: 1500 Ft`);
console.log(osszeg >= 10000 ? `Fizetendő: ${osszeg} Ft` :`Fizetendő: ${osszeg + 1500} Ft`);



