//APPUNTI
//prompt
//input del prompt genera x array
//es. input = 4 allora 4 array generati
//ogni array ha 10 numeri
//i numeri sono generati casualmente
const n = parseInt(prompt("inserisci il numero di array"));


for (let i = 0; i < n; i++){
    let array = [];
    for (let i=0; i<10; i++){
        array.push(Math.floor(Math.random()*100)+1);
    }
    console.log(array)
}


