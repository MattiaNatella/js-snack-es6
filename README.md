Js Snack Array e Oggetti

===

**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

**PSEUDO-CODICE**
1. dichiaro un'array di oggetti
2. popolo l'array di oggetti con le chiavi nome e peso per ogni bici che intendo inserire
3. inserisco un ciclo che iteri tutti gli oggetti dell'array salvando il valore del peso in una nuova variabile se quella presa in considerazione è minore rispetto al valore della nuova variabile
4. stampo il nome ed il peso della bici con peso minore


**Snack2**
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


**PSEUDO-CODICE**
1. dichiaro un'array di oggetti
2. popolo l'array di oggetti con le proprietà nome, punti fatti, falli subiti
3. inserisco un ciclo che iteri tutte le proprietà dell'array di oggetti, ad ogni ciclo genero randomicamente il valore delle chiavi punti fatti e falli subiti, e pusho in un nuovo array le proprietà nome e falli subiti 
4. stampo il nuovo array in console


**Snack 3 (Bonus)**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.