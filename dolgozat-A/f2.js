/* ======================================================================
   JavaScript alapok – számonkérés · A csoport
   2. feladat: Jelszógenerátor   (10 pont)
   ======================================================================

   FELADAT
   A felhasználható karakterek (kis- és nagybetűk, számjegyek) adottak
   a KARAKTEREK szövegben.

   Írj egy jelszo(hossz) függvényt, amely egy megadott hosszúságú
   véletlen jelszót ad vissza: minden karaktere a KARAKTEREK szöveg egy
   véletlenszerűen kiválasztott karaktere legyen.

   Generálj a függvénnyel egy 6, egy 10 és egy 16 karakteres jelszót,
   és mindegyik mellé írd ki, hogy "erős" (legalább 10 karakter) vagy
   "gyenge".

   MINTA KIMENET
   A <…> jelölésű részek helyére a programod által kiszámolt érték kerül;
   a "…" azt jelzi, hogy ott a sorok ugyanígy folytatódnak.

     6 karakter: <jelszó> (<erős vagy gyenge>)
     10 karakter: <jelszó> (<erős vagy gyenge>)
     16 karakter: <jelszó> (<erős vagy gyenge>)

   Futtatás a terminálban:  node f2.js
   ====================================================================== */

// ---------- Kiinduló adatok (ne módosítsd) ----------
const KARAKTEREK = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// ---------- Ide írd a megoldásodat ----------
function jelszo(hossz) {
  let randomkarakter = "";
  return randomkarakter;
}


console.log(6 >= 10 ? `6 karakter: ${jelszo(6)} erős` : `6 karakter: ${jelszo(6)} gyenge`);
console.log(10 >= 10 ? `10 karakter: ${jelszo(10)} erős` : `6 karakter: ${jelszo(10)} gyenge`);
console.log(16 >= 10 ? `10 karakter: ${jelszo(16)} erős` : `6 karakter: ${jelszo(16)} gyenge`);
