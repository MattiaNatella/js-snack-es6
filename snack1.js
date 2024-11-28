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
  { nome:'Air Force 1', peso:'15kg'},
  { nome:'Air Force Strike 2', peso:'20kg'},
  { nome:'Mountain Climber', peso:'5kg'},
  { nome:'Mountain Destroyer', peso:'1kg'},
  { nome:'F500-PTR2', peso:'30kg'}
]

const lista = document.getElementById('lista')

for (let i in biciclette) {
  //creo l'elemento (il tag) li
  const li = document.createElement('li');
  // inserisco all'interno del tag li le proprietà di biciclette
  li.innerText = `Nome: ${biciclette[i].nome}, Peso: ${biciclette[i].peso}`
  //aggiungo l'elemento li che comprende le proprietà dell'array dentro l'elemento lista
  lista.append(li)
}

//SNACK 1
let biciPiuLeggera = biciclette[0]

console.log(biciPiuLeggera);

for(let key in biciclette){
  const bici = biciclette[key]
  
  if(parseInt(biciPiuLeggera.peso) > parseInt(bici.peso)) {
    biciPiuLeggera = bici
    }
  document.getElementById('print').innerHTML = `La bicicletta ${biciPiuLeggera.nome} è la più leggera! con un peso di ${biciPiuLeggera.peso}`
  


}
