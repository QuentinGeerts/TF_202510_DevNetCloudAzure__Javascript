/*

Créer une fonction qui permet de retourner une chaîne de 
caractères formatée en prenant en paramètre un tableau et 
un séparateur.

Le séparateur doit être optionnel.

*/

/**
 * Permet de retourner une chaîne formatée avec les valeurs d'un tableau.
 * Les valeurs sont séparées par un séparateur. (Par défaut: ',')
 *
 * @param {Array<any>} array Le tableau à formater
 * @param {string} [separator=','] Le séparateur
 * @return {string} La chaîne formatée
 */
function customJoin (array, separator = ',') {
  let format = "";
  for (const element of array) {
    format += element + separator;
  }
  format = format.substring(0, format.length - separator.length);
  return format;
}

const tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tab2 = [2, 4, 6, 8, 10];

console.log("tab1:", customJoin(tab1));
console.log("tab2:", customJoin(tab2, " @ "));

