/* ======================================================================
   JavaScript alapok – számonkérés · A csoport
   5. feladat: Névsor   (10 pont)
   ======================================================================

   FELADAT
   A "nevek" tömbben rosszul írt nevek vannak (vegyesen kis- és
   nagybetűk).

   Írj egy formaz(nev) függvényt, amely minden névrészt nagy
   kezdőbetűvel, a többi betűt kisbetűvel adja vissza ("kiss anna" →
   "Kiss Anna"), és egy monogram(nev) függvényt ("Kiss Anna" → "K.
   A.").

   Formázd meg az összes nevet egy új tömbbe, rendezd ábécébe, majd írd
   ki sorszámozva: a nevet 15 karakter szélesre kiegészítve, mellette a
   monogrammal.

   MINTA KIMENET
   A <…> jelölésű részek helyére a programod által kiszámolt érték kerül;
   a "…" azt jelzi, hogy ott a sorok ugyanígy folytatódnak.

     1. <Vezetéknév Keresztnév>  <V. K.>
     … (minden névre egy sor, ábécérendben)

     Egy kitalált névvel így néz ki egy sor (a név 15 karakterre kiegészítve):
     1. Minta Márta     M. M.

   Futtatás a terminálban:  node f5.js
   ====================================================================== */

// ---------- Kiinduló adatok (ne módosítsd) ----------
const nevek = ['kiss anna', 'NAGY béla', 'szabó Csilla', 'tóth DÁVID'];

// ---------- Ide írd a megoldásodat ----------
function formaz(nev) {
  nev[0].toUpperCase()
  for (let i = 0; i < nev.length; i++)
    {
      if (i >= 1){
        if (nev[i - 1] === " ") {
          nev[i] = nev[i].toUpperCase();
        }
      }   
    }
      for (let i = 0; i < nev.length; i++)
    {
      if (i >= 1){
        if (nev[i - 1] === " ") nev[i] = nev[i].toUpperCase();
      }   
    }
  return nev;
}

function monogram(nev) {
  let randomkarakter = "";
  return randomkarakter;
}
