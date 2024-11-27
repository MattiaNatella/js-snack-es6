/*
**Snack2**
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


**PSEUDO-CODICE**
1. dichiaro un'array di oggetti -- OK
2. popolo l'array di oggetti con le proprietà nome, punti fatti, falli subiti -- OK
3. inserisco un ciclo che iteri tutte le proprietà dell'array di oggetti, ad ogni ciclo genero randomicamente il valore delle chiavi punti fatti e falli subiti, e pusho in un nuovo array le proprietà nome e falli subiti 
4. stampo il nuovo array in console
*/

//1.-2. DICHIARO E ASSEGNO ARRAY DI OGGETTI
const squadre = [
  { nome:'Ajax', puntiFatti:0, falliSubiti: 0},
  { nome:'Juventus', puntiFatti:0, falliSubiti: 0},
  { nome:'Pontedera', puntiFatti:0, falliSubiti: 0},
  { nome:'Salernitana', puntiFatti:0, falliSubiti: 0},
  { nome:'Pisa', puntiFatti:0, falliSubiti: 0,}
]

//3. inserisco un ciclo che iteri tutte le proprietà dell'array di oggetti, ad ogni ciclo genero randomicamente il valore delle chiavi punti fatti e falli subiti, e pusho in un nuovo array le proprietà nome e falli subiti 

let nomiEFalli = []

for(let i in squadre) {
  squadre[i].puntiFatti = getRandomNumber(0,30)
  squadre[i].falliSubiti = getRandomNumber(0,30)
  nomiEFalli.push(squadre[i].nome,squadre[i].falliSubiti)

}
//4. stampo il nuovo array in console
console.log(squadre)
console.log(nomiEFalli)

//5. stampo i nuovi array in liste nel DOM

const listaSquadre = document.getElementById('lista-squadre')
const listaFalli = document.getElementById('lista-falli')

//lista completa
for (let i in squadre) {

  const li = document.createElement('li');
  li.innerText = `Nome: ${squadre[i].nome}, punti Fatti: ${squadre[i].puntiFatti}, Falli Subiti:${squadre[i].falliSubiti}`
  
  listaSquadre.append(li)
}

//lista nome squadre e falli
for (let i = 0; i < nomiEFalli.length; i++) {
  if(isNaN(nomiEFalli[i])){
    const li = document.createElement('li')
    li.innerText = `Nome: ${nomiEFalli[i]}, Falli Subiti:${nomiEFalli[i + 1]}`
    
    listaFalli.append(li)
  }
}



//3. FUNCTIONS

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min +1) + min)
  }