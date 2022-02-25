// SNACK 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

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



// SNACK 2
// l'utente inserisce due parole in successione, con due prompt.
// il software stampa prima la parola più corta, poi la parola più lunga.

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



// SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

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
    resultSnack3.innerHTML = 'La somma dei numeri è' + somma;
});


// SNACK 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o  no alla festa.

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

// SNACK 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

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

    resultSnack5.innerHTML = ('i numeri dispari chce hai inserito sono: ' + numeroSnack5);
});