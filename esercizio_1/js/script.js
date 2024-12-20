
// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.

emailList = [

    "daniele.gattuso@gugu.it",
    "gabriele.diperna@gugu.com",
    "gioiatauro@marcel.org",
    "riccardo.rasa@gaga.it",
    "marcello.ilbello@mams.com"
]

let requestEmail = prompt("Sei invitato alla festa? Inserisci la tua email e scoprilo!")

let boolean = false
for(i=0; i< emailList.length; i++){

    if(requestEmail === emailList[i]){
        boolean = true

    }
    
    
}

if(boolean){
    console.log("SEI NELLA LISTA");
    
}else{
    console.log("PURTROPPO NON SEI STATO INVITATO");
    
}



   
    
