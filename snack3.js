/*
**Snack 3 (Bonus)**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

const colors = ['rosso','giallo','verde','blu','arancione','viola']



function filterArray (min,max,array){
  const newArray = []
  for (let i in array){
    if(i >= min && i <= max)
      newArray.push(array[i])
  } 
  return newArray
}

console.log(filterArray(2,3,colors))


ongotpointercapture

//oppure faccio un ciclo for dove i = min; i <= max; i++ e pusho direttamente gli elementi di indice i che sono chiaramente compresi fra il min e max


//oppure const nuovoArray = (array, num1, num2) => array.slice(num1, num2 + 1)