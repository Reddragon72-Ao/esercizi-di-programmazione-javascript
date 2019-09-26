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
var tempo=780364; //tempo complessivo in secondi
var sc_min=60; //secondi in un minuto
var min_ora=60; //minuti in un'min_ora
var secondi = (tempo%(sc_min)); //resto dei secondi da minuti e ore
var minuti = ((tempo-secondi)/sc_min)%min_ora;//resto dei minuti dalle ore
var ore = (tempo-secondi-(minuti*sc_min))/(sc_min*min_ora);//calcolo delle ore effettive
//output
console.log('ore: '+ ore);
console.log('minuti: ' + minuti);
console.log('secondi: ' + secondi);
