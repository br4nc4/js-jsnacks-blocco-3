const containerNumber = [];
let somma = 0;

while (containerNumber.length < 5){
    const inputNumber = parseInt(prompt("inserisci un numero"));
    containerNumber.push(inputNumber);
    somma += inputNumber;
}
console.log(containerNumber);
console.log(somma)