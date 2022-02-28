/*SNACK 1.1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

const input1Snack1 = document.querySelector('#input1-snack1');
const input2Snack1 = document.querySelector('#input2-snack1');
const btnSnack1 = document.querySelector('#btn-snack1');
const resultSnack1 = document.querySelector('#result-snack1');

btnSnack1.addEventListener('click', function() {
    let num1 = parseInt(input1Snack1.value);
    let num2 = parseInt(input2Snack1.value);
    
    if (num1 > num2) {
        resultSnack1.innerHTML = num1 + ' è maggiore di ' + num2
    } else if (num1 < num2) {
        resultSnack1.innerHTML = num2 + ' è maggiore di ' + num1
    } else {
        resultSnack1.innerHTML = num1 + ' e ' + num2 + 'sono uguali' 
    }
})

/* SNACK 1.2
l'utente inserisce due parole in successione, con due prompt.
il software stampa prima la parola più corta, poi la parola più lunga.*/

const input1Snack2 = document.querySelector('#input1-snack2');
const input2Snack2 = document.querySelector('#input2-snack2');
const btnSnack2 = document.querySelector('#btn-snack2');
const resultSnack2 = document.querySelector('#result-snack2');

btnSnack2.addEventListener('click', function() {
    if (input1Snack2.value.length > input2Snack2.value.length) {
        resultSnack2.innerHTML = input1Snack2.value + ' è più lunga di ' + input2Snack2.value;
    } else if (input1Snack2.value.length < input2Snack2.value.length) {
        resultSnack2.innerHTML = input2Snack2.value + ' è più lunga di ' + input1Snack2.value;
    } else {
        resultSnack2.innerHTML = input1Snack2.value + 'e ' + input2Snack2.value + ' sono lunghe uguali';
    }

});

/* SNACK 1.3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/

const btnSnack3 = document.querySelector('#btn-snack3');
const resultSnack3 = document.querySelector('#result-snack3');

btnSnack3.addEventListener('click', function() {
    let numeri = [];
    for (let i = 0; i < 10; i++) {
        let addN = parseInt(prompt('inserire un numero'));
        numeri.push(addN)
    }

    let somma = 0;
    for (i = 0; i < numeri.length; i++) {
        somma += numeri[i]
    }
    resultSnack3.innerHTML = 'La somma dei numeri è ' + somma;
});
// OPPURE SENZA ARRAY
const btn2Snack3 = document.querySelector('#btn2-snack3');

btn2Snack3.addEventListener('click', function() {
    let somma = 0;
    for (let i = 0; i < 10; i++) {
        let addN = parseInt(prompt('inserire un numero'));
        somma += addN;
    }
    resultSnack3.innerHTML = 'La somma dei numeri è ' + somma;
});


/* SNACK 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o  no alla festa.*/

const input1Snack4 = document.querySelector('#input1-snack4');
const btnSnack4 = document.querySelector('#btn-snack4');
const resultSnack4 = document.querySelector('#result-snack4');

const invitati = ['paolo', 'henry', 'mauro', 'gabriel', 'chiara'];

btnSnack4.addEventListener('click', function() { 
    let trovato = false;
    for (let i = 0; i < invitati.length; i++) {
    
        if (invitati[i].toLowerCase() == input1Snack4.value.toLowerCase()) {
            trovato = true;
        }
    }
        
    if (trovato) {
        resultSnack4.innerHTML = ('Puoi entrare alla festa, perchè sei stato invitato');
    } else {
        resultSnack4.innerHTML = ('Non sei stato invitato alla festa, non puoi entrare');
    }

});

/* SNACK 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const btnSnack5 = document.querySelector('#btn-snack5');
const resultSnack5 = document.querySelector('#result-snack5');

let numeroSnack5 = [] 

btnSnack5.addEventListener('click', function() {   
    for (let i = 0; i < 6; i++) {
        let addNumber = parseInt(prompt('inserire un numero'));

        if (addNumber % 2 !== 0) {
        numeroSnack5.push(addNumber);
        }
    }

    resultSnack5.innerHTML = ('i numeri dispari che hai inserito sono: ' + numeroSnack5);
});

/* SNACK 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

const input1Snack6 = document.querySelector('#input1-snack6');
const btnSnack6 = document.querySelector('#btn-snack6');
const resultSnack6 = document.querySelector('#result-snack6');

btnSnack6.addEventListener('click', function() {
    if (input1Snack6.value.length == 4) {
        let arrNum = input1Snack6.value
        let somma = 0;  

        for (i = 0; i < arrNum.length; i++) {
            somma += parseInt(arrNum[i])
        }
        resultSnack6.innerHTML = 'La somma dei 4 numeri è ' + somma;
    }

});

/* SNACK 1.9
Calcola la somma e la media dei primi 10 numeri.*/
const btnSnack9 = document.querySelector('#btn1-snack9');
const btn2Snack9 = document.querySelector('#btn2-snack9');
const resultSnack9 = document.querySelector('#result-snack9');

btnSnack9.addEventListener('click', function() {
    let sommaSnack9 = 0;
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt('inserire un numero'));
        sommaSnack9 += numero
    }
    resultSnack9.innerHTML = `La Somma dei numeri inseriti è ${sommaSnack9}, <br>
    la media dei numeri inseriti è: ${sommaSnack9 / 10}`


});
// OPPURE CON WHILE 
btn2Snack9.addEventListener('click', function() {
    let i = 0;
    let sommaSnack9 = 0;
    while ( i < 10) {
        let numero = parseInt(prompt('inserire un numero'));
        sommaSnack9 += numero
        i++
    }
    resultSnack9.innerHTML = `La Somma dei numeri inseriti è ${sommaSnack9}, <br>
    la media dei numeri inseriti è: ${sommaSnack9 / 10}`
});


/* SNACK 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/
const btnSnack2_1 = document.querySelector('#btn1-snack2-1');
const btn2Snack2_1 = document.querySelector('#btn2-snack2-1');
const resultSnack2_1 = document.querySelector('#result-snack2-1');
// METODO FOR 
btnSnack2_1.addEventListener('click', function() {
    let somma = 0;
    for (let i = 0; i < 5; i++) {
        let addN = parseInt(prompt('inserire un numero'));
        somma += addN;
    }
    resultSnack2_1.innerHTML = 'La somma dei numeri è ' + somma;
});
// METODO WHILE 
btn2Snack2_1.addEventListener('click', function() {
    let i = 0;
    let somma = 0;
    while ( i < 5) {
        let addN = parseInt(prompt('inserire un numero'));
        somma += addN
        i++
    }
    resultSnack2_1.innerHTML = 'La somma dei numeri è ' + somma;
});


/* SNACK 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo*/
const btnSnack2_2 = document.querySelector('#btn-snack2-2');
const resultSnack2_2 = document.querySelector('#result-snack2-2');

btnSnack2_2.addEventListener('click', function() {
    let numero = parseInt(prompt('inserire un numero'));

    if (numero % 2 == 0) {
        resultSnack2_2.innerHTML = 'Il numero scelto è ' + numero;
    } else {
        numero++
        resultSnack2_2.innerHTML = 'Il numero scelto è ' + numero;
    }
});


/* SNACK 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
Gatsby vuole generare una falsa lista di 3 invitati.*/
const btnSnack2_3 = document.querySelector('#btn-snack2-3');
const btn2Snack2_3 = document.querySelector('#btn2-snack2-3');
const resultSnack2_3 = document.querySelector('#result-snack2-3');
const ulSnack2_3 = document.querySelector('#list-snack2-3');

let nomi = ['Paolo', 'Stefano', 'Mauro', 'Gabriel', 'Chiara', 'Henri'];
let cognomi =['Calafiore', 'Trovato', 'Constantinescu', 'Spanu', 'Passaro', 'Kapidani']
let eleListItem = document.createElement('li')
// METODO FOR 
btnSnack2_3.addEventListener('click', function() {
    ulSnack2_3.innerHTML = ''
    for (let i = 0; i < 3; i++) {
        let nomeRandom = Math.floor(Math.random() * nomi.length );
        let cognomeRandom = Math.floor(Math.random() * cognomi.length );
        let falso = nomi[nomeRandom] + ' ' + cognomi[cognomeRandom]
        eleListItem = document.createElement('li')
        eleListItem.innerHTML = falso
        ulSnack2_3.append(eleListItem)
    }
});
// METODO WHILE
btn2Snack2_3.addEventListener('click', function() {
    ulSnack2_3.innerHTML = ''
    let i = 0
    while (i < 3) {
        let nomeRandom = Math.floor(Math.random() * nomi.length );
        let cognomeRandom = Math.floor(Math.random() * cognomi.length );
        let falso = nomi[nomeRandom] + ' ' + cognomi[cognomeRandom]
        eleListItem = document.createElement('li')
        eleListItem.innerHTML = falso
        ulSnack2_3.append(eleListItem)
        i++
    }
});