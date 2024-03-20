//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let nr1 = 12
let nr2 = 16

if (nr1 > nr2) {
    console.log(`${nr1} e' piu' grande di ${nr2}`)
} else {
    console.log(`${nr2} e' piu' grande di ${nr1}`)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 3

if (num < 5) {
    console.log("Tiny")
} else if (num < 10) {
    console.log("Small")
} else if (num < 15) {
    console.log("Medium")
} else if (num < 20) {
    console.log("Large")
} else if (num >= 20) {
    console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let i1

for (i1 = 0; i1 <= 10; i1 ++) {
    if (i1 === 3 || i1 === 8) {
        continue
    } else {
        console.log(i1)
    }
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let i

for (i = 0; i <= 15; i ++) {
    if(i % 2 === 0) {
        console.log(i, "Pari")
    } else {
        console.log(i, "Dispari")
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 5
let num2 = 16

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
    console.log("Uno dei casi si e' verificato!")
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 25
let shipping = 10

if (totalShoppingCart > 50) {
  console.log(`The total is : ${totalShoppingCart}`)
} else {
  console.log(`The total is : ${totalShoppingCart + shipping}`)
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 60
let shipping1 = 10
let discount1 = totalShoppingCart1 * 0.2

if (totalShoppingCart > 50) {
  console.log(`The total is : ${discount1}`)
} else {
  console.log(`The total is : ${discount1 + shipping1}`)
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true
let gender = isMale ? "Male" : "Female"

console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let int = 1; int <=100; int ++) {
  const isMultipleOfThree = int % 3 === 0
  const isMultipleOfFive = int % 5 === 0
  const isMultipleOfBoth = int % 3 === 0 && int % 5 === 0

  if (isMultipleOfBoth) {
    console.log(int, "FizzBuzz")
  } else if (isMultipleOfThree) {
    console.log(int, "Fizz")
  } else if (isMultipleOfFive) {
    console.log(int, "Buzz")
  } else {
    console.log(int)
  }
}