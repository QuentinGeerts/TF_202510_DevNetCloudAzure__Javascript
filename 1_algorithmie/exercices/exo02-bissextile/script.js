/*
  Créer un programme qui permet à l'utilisateur d'encoder une année.
  Le programme doit déterminé si l'année est une année bissextile ou non.

  Pour rappel, une année est une année bissextile si elle est divisible par 4, mais pas par 100. Ou si elle est divisible par 400.

  L'affichage doit se faire en console.
*/

let year = prompt("Entrez une année: ");

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  console.log(`L'année ${year} est bissextile.`);
}
else {
  console.log(`L'année ${year} n'est pas bissextile.`);
}
