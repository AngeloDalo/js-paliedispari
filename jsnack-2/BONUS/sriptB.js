/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari
 * Dichiariamo chi ha vinto
 * (corrispondenza tra scelta pari e dispari e somma pari o dispari)
 * In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
 */

 function randomNumeroCpu(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sommaNumeri(num1, num2) {
    return num1+num2;
}

let sceltaUtente = prompt("Inserisci pari o dispari");
while (sceltaUtente!="pari" && sceltaUtente!="dispari") {
    sceltaUtente = prompt("Inserisci pari o dispari (ATTENTO: TUTTO IN MINUSCOLO");
}

const randomCPU = randomNumeroCpu (1, 5);

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (numeroUtente<1 || numeroUtente>5) {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5 ATTENTO:NUMERO COMPRESO TRA 1 E 5"));
}

const somma=sommaNumeri(numeroUtente, randomCPU);
//console.log (somma);

if ((somma%2 == 0) && (sceltaUtente=="pari")) {
    alert ("HAI VINTO!");
} else if ((somma%2 != 0) && (sceltaUtente == "dispari")) {
    alert ("HAI VINTO!");
} else {
    alert ("HAI PERSO");
}