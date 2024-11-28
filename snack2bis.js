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
3. inserisco un ciclo che iteri tutti gli oggetti dell'array di oggetti, ad ogni ciclo genero randomicamente il valore delle chiavi punti fatti e falli subiti, e aggiorno le proprietà di ogni oggetto dell'array.
4. creiamo un nuovo array che contiene solo proprietà nome e falli subiti, poi stampiamo in console
*/

//1. 2.
const squadre = [
  { nome:'Ajax', puntiFatti:0, falliSubiti: 0},
  { nome:'Juventus', puntiFatti:0, falliSubiti: 0},
  { nome:'Pontedera', puntiFatti:0, falliSubiti: 0},
  { nome:'Salernitana', puntiFatti:0, falliSubiti: 0},
  { nome:'Pisa', puntiFatti:0, falliSubiti: 0,}
]

//3.

for(let squadra of squadre){
    squadra.puntiFatti = getRandomNumber(0,30)
    squadra.falliSubiti = getRandomNumber(0,30)
}

// console.log(squadre);


const nuoveSquadre = []

for(let squadra of squadre){
  const nuovaSquadra = {
    nome: squadra.nome, 
    falliSubiti: squadra.falliSubiti,
    
  }
  nuoveSquadre.push(nuovaSquadra)
  console.log(squadra)

}
console.log(nuoveSquadre);







function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min +1) + min)
  }
