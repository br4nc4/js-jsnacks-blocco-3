const containerEmpty = [];
//APPUNTI
//sommma = somma + Input
//somma < 50
let somma = 0;

do{
    const input = parseInt(prompt("inserisci un numero"));
    somma = somma + input;
    containerEmpty.push(input);
    if (somma > 50){
        alert("la somma supera il valore di 50");
    }
} while (somma < 50)

alert(somma)