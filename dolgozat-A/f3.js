/* ======================================================================
   JavaScript alapok – számonkérés · A csoport
   3. feladat: Kockastatisztika   (10 pont)
   ======================================================================

   FELADAT
   Dobj 60-szor egy kockával (véletlen egész szám 1 és 6 között). A
   "gyakorisag" tömbben számold, hogy melyik szám hányszor jött ki: a
   gyakorisag[3] például a hármasok száma (a 0. elemet nem használjuk).

   Írd ki az eredményt számonként annyi csillaggal, ahány dobás volt
   belőle, a darabszámmal együtt. Végül írd ki, melyik szám jött ki a
   legtöbbször.

   MINTA KIMENET
   A <…> jelölésű részek helyére a programod által kiszámolt érték kerül;
   a "…" azt jelzi, hogy ott a sorok ugyanígy folytatódnak.

     1: <annyi *, ahány egyes jött ki> (<darab>)
     2: <annyi *, ahány kettes jött ki> (<darab>)
     … (6-ig minden számra egy sor; pl. "3: ******* (7)" jelentése: 7 hármas)
     Leggyakoribb dobás: <szám>

   Futtatás a terminálban:  node f3.js
   ====================================================================== */

// ---------- Kiinduló adatok (ne módosítsd) ----------
const gyakorisag = [0, 0, 0, 0, 0, 0, 0];   // index = a dobott szám (1–6), a 0. elem nem használt

// ---------- Ide írd a megoldásodat ----------
let random = Math.random() * 60
