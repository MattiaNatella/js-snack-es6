/*
**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

**PSEUDO-CODICE**
1. dichiaro un'array di oggetti
2. popolo l'array di oggetti con le chiavi nome e peso per ogni bici che intendo inserire
3. inserisco un ciclo che iteri tutti gli oggetti dell'array salvando il valore del peso in una nuova variabile se quella presa in considerazione è minore rispetto al valore della nuova variabile
4. stampo il nome ed il peso della bici con peso minore
*/

const biciclette = [
  {
    nome:'Air Force 1',
    peso:'15kg',
  },
  {
    nome:'Air Force Strike 2',
    peso:'20kg',
  },
  {
    nome:'Mountain Climber',
    peso:'5kg',
  },
  {
    nome:'Mountain Destroyer',
    peso:'3kg',
  },
  {
    nome:'F500-PTR2',
    peso:'30kg',
  }
]
 
console.log(biciclette);

let biciPiuLeggera = biciclette[0]

console.log(biciPiuLeggera);

for(let key in biciclette){
  const bici = biciclette[key]
  if(biciPiuLeggera.peso > biciclette[key].peso) {
    biciPiuLeggera = biciclette[key]
  }
  console.log(bici)

  document.getElementById('print').innerHTML = `La bicicletta ${biciPiuLeggera.nome} è la più leggera! con un peso di ${biciPiuLeggera.peso}`
  


}
