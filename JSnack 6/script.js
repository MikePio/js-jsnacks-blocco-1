/*
JSnack 6

Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
 */


// const numero = parseFloat(prompt('Inserisci un numero:'));

//* programma per controllare se un numero è primo o no e successivamente prende il numero primo e lo trasforma in cubo
const number = parseInt(prompt("Inserisci un numero positivo:"));
let isPrime = true;

// controlla se il numero è uguale a 1
if (number === 1) {
    console.log("1 non è né primo né composto.");
}

// controlla se il numero è > a 1
else if (number > 1) {

  // ciclo dal 2 al numero -1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
    
  if (isPrime) {
    console.log(`${number} è un numero primo`);
    // numero al cubo
    console.log('numero inserito', number);
    console.log('numero al cubo ', number ** 3);
  } else {
    console.log(`${number} non è un numero primo`);
  }
}

// controlla se il numero è minore di 1
else {
  console.log("Il numero non è un numero primo.");
}



//* numero al cubo
// console.log('numero inserito', numero);
// console.log('numero al cubo ', numero ** 3);
//* OPPURE
// console.log('numero al cubo', numero * numero * numero);
//* OPPURE
// console.log(Math.pow(numero,3));


//* SOLUZIONE 1
// //* programma per controllare se un numero è primo o no(se è divisibile solo per se stesso o no)
// if (numero > 1) {
//   let divisori = 0;
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       divisori++;
//       break;
//     }
//   }
//   if (divisori === 0) {
//     console.log(numero + " è divisibile solo per se stesso");
//   } else {
//     console.log(numero + " non è divisibile solo per se stesso");
//   }
// } else {
//   console.log(numero + " non è un numero valido");
// }



//* SOLUZIONE 2 (+ completa)
//* programma per controllare se un numero è primo o no

// const number = parseInt(prompt("Inserisci un numero positivo:"));
// let isPrime = true;

// // controlla se il numero è uguale a 1
// if (number === 1) {
//     console.log("1 non è né primo né composto.");
// }

// // controlla se il numero è > a 1
// else if (number > 1) {

//   // ciclo dal 2 al numero -1
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//     }
//   }
    
//   if (isPrime) {
//     console.log(`${number} è un numero primo`);
//   } else {
//     console.log(`${number} non è un numero primo`);
//   }
// }

// // controlla se il numero è minore di 1
// else {
//   console.log("Il numero non è un numero primo.");
// }

//* Verifica se il primo numero è primo
// let num1 = prompt("Inserisci il primo numero:");
// let isPrime1 = true;
// for (let i = 2; i < num1; i++) {
//   if (num1 % i === 0) {
//     isPrime1 = false;
//   }
// }
// if (isPrime1) {
//   console.log(num1 + " è un numero primo");
// }else{
//   console.log(num1 + " non è un numero primo");
// }














