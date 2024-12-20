
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

let personNumber = (Math.floor(Math.random() * 6) + 1);
let pcNumber = (Math.floor(Math.random() * 6) + 1); 

// console.log( pcNumber, personNumber); 
let gameStart = prompt("BENVENUTO AL GIOCO DEI DADI! PREMERE UN TASTO QUALSIASI PER")

if(personNumber > pcNumber){
    console.log("Hai vinto tu");
    
    
}else if(personNumber< pcNumber){
    console.log("Ha vinto il computer");
    
}else {
    console.log("Pareggio");
    
}

