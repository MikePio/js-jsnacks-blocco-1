/*
## JSnack 7 

Stampa le potenze di 2 fino a 1000.
questo snack cela un trabocchetto:  1000 non è una potenza di 2
perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
perché altrimenti il controllo viene fatto dopo e si sfora

*/

//* ciclo for

for (let i = 1; i < 1000; i *= 2) {
  //* OPPURE
  // for (let i = 1; i < 1000; i = i * 2) {
  console.log(i);
}

//* ciclo while

let numero = 1;
while (numero < 1000){
  // il console.log deve essere stampato per primo oppure comparirà anche 1024
  console.log(numero);
  // numero = numero * 2;
  //* OPPURE
  numero *= 2;
}

//* ciclo do-while 

let num = 1;
do {
  // il console.log deve essere stampato per primo oppure comparirà anche 1024
  console.log(num);
  num = num * 2;
  //* OPPURE
  // num *= 2;
} while (num <= 1000);



















