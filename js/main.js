// Una funzione per capire se la parola è palindroma
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
