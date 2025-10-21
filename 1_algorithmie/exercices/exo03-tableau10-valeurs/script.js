/*

Créer un programme qui demander 10 valeurs à l'utilisateur
et les stocke dans une tableau.
Faire la moyenne du tableau et l'affiche.
Afficher également le tableau formatté.

Format demandé: "[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]"

*/

const myArray = new Array(10);
// let somme = 0;

for (let i = 0; i < myArray.length; i++) {
  let valeur;
  do {
    valeur = parseInt(prompt(`Entrez la valeur n°${i + 1}:`));
  } while (isNaN(valeur));

  myArray[i] = valeur;
  // somme += valeur;
}

// console.log('somme :>> ', somme);

let somme = myArray.reduce((acc, value) => acc + value, 0);
let moyenne = somme / myArray.length;
let format = `[ ${myArray.join(', ')} ]`;

console.log(`Tableau: ${format}`);
console.log(`Moyenne: ${moyenne}, somme: ${somme}`);

