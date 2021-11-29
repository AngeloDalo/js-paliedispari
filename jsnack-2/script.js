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

const sceltaUtente = prompt("Inserisci Pari o Dispari");
const randomCPU = randomNumeroCpu (1, 5);
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
const somma=sommaNumeri(numeroUtente, randomCPU);
//console.log (somma);

if ((somma%2 == 0) && (sceltaUtente=="Pari")) {
    alert ("HAI VINTO!");
} else if ((somma%2 != 0) && (sceltaUtente == "Dispari")) {
    alert ("HAI VINTO!");
} else {
    alert ("HAI PERSO");
}

