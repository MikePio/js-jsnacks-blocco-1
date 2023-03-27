/*
JSnack 5

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
 */

console.log('test');

//* con numeri dipari
const oddNumbers = [];

for(let i = 0; i < 6; i++){
  let promptNumber = parseInt(prompt('Inserisci un numero:'));
  if(promptNumber % 2 != 0){
    console.log('numero dispari');
    oddNumbers.push(promptNumber);
    console.log(promptNumber);
    console.log('Array con numeri dispari', oddNumbers);
  }
  else{
    console.log('numero pari');
    console.log(promptNumber);
    // console.log(oddNumbers);
  }
}

// * con numeri pari
// const evenNumbers = [];

// for(let i = 0; i < 6; i++){
//   let promptNumber = parseInt(prompt('Inserisci un numero:'));
//   if(promptNumber % 2 == 0){
//     console.log('numero pari');
//     evenNumbers.push(promptNumber);
//     console.log(promptNumber);
//     console.log('Array con numeri pari', evenNumbers);
//   }
//   else{
//     console.log('numero dispari');
//     console.log(promptNumber);
//     // console.log(evenNumbers);
//   }
// }

























