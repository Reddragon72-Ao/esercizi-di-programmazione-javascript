/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var anno=2019;
var annoNascita=1972;
var anni=anno-annoNascita;
var ai=100-anni;
console.log('Attualmente siamo nel ' + anno );
console.log('Il mio anno di nascita è ' + annoNascita );
console.log('Attualmente ho ' + anni + ' anni' );
console.log('Compirò 100 anni fra ' + ai + ' anni' );
