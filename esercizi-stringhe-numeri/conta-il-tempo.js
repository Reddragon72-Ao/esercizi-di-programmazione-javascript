/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var tempo;
var sc_min=60;
var min_ora=60;
input ('scrivi il tempo che vuoi calcolare /"in secondi": 'tempo);
secondi = tempo%sc_min;
minuti = tempo%(sc_min/min_ora);
ore = tempo/sc_min/min_ora;
console.log(ore,minuti,secondi);
