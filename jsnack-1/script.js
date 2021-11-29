/**
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma (prima senza funzione e poi con funzione)
 */

function checkPalindromo(parola) {
    const parolaDivisa = parola.split();
    const parolaReverse = parolaDivisa.reverse();
    const parolaInvertita = parolaReverse.join();
    if (parola.toLowerCase() == parolaInvertita.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

let parolaUtente = prompt("Inserire una palora");
let check = checkPalindromo(parolaUtente);
if (check ==  true) {
    alert ("La parola è palindroma");
} else {
    alert ("La parola non è palindroma");
}