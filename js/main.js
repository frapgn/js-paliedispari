//ESERCIZIO 1: Una funzione per capire se la parola è palindroma
var inputWord = prompt('Inserisci una parola e ti dirò se è palindroma.');
var pal = isPalindrome(inputWord);

if (pal) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}


function isPalindrome(word) {
    wordSplit = word.split("");
    wordReverse = wordSplit.reverse();
    wordJoin = wordReverse.join("");
    if (word == wordJoin) {
        return true;
    } else {
        return false;
    }
}


/*  ESERCIZIO 2:
    prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
    prompt ---> “Scegli un numero”         --------> ES: 5
    creo un numero RANDOM                --------> ES: 10
    10 + 5 = 15 è un numero DISPARI
    log     -------->   Spiacente, hai scelto PARI, ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!
*/

var userBet = prompt('È ora di scommettere! Scegli se il numero sarà PARI o DISPARI!');
userBet = userBet.toLowerCase();
console.log('Controllo se la stringa inserita è stata trasformata in minuscolo: ' + userBet);
while (userBet == 'pari' || userBet == 'dispari') {
    if (userBet == 'pari') {
        userBet = true;
    } else if (userBet == 'dispari') {
        userBet = false;
    } else {
        userBet = prompt('Inserisci un valore corretto fra \'pari\' e \'dispari\'');
    }
}
console.log('Assegno valore boolean: ' + userBet);

var userNum = parseInt(prompt('Ora scegli un numero, verrà sommato col numero casuale estratto dal computer!'))
console.log('Hai inserito il numero: ' + userNum);
var cpuNum = generaRandomMinMax(1, 50);
console.log('Numero estratto dal computer: ' + cpuNum);
sum = userNum + cpuNum;
console.log('Somma dei due numeri: ' + sum);

var isEven = isEven(sum);
if (isEven == true) {
    var winNotice = 'Il numero è pari';
    var loseNotice = 'il numero è pari';
} else {
    var winNotice = 'Il numero è dipari';
    var loseNotice = 'il numero è dipari';
}
console.log('Il numero è pari? ' + isEven);

if (userBet == isEven) {
    console.log('Hai vinto! ' + winNotice);
} else {
    console.log('Mi dispiace, ' + loseNotice);
}







function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
