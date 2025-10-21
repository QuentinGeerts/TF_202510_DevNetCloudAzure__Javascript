// Démonstration 07 - Fonctions

// Déclaration

// Fonction nommée (par défaut)
function addition(nb1, nb2) {
  return nb1 + nb2;
}

console.log(addition(2, 4));

// Fonction anonyme (sans nom)
const nombrePair = function (nb) {
  return nb % 2 === 0;
}

console.log(nombrePair); // référence en mémoire
console.log(nombrePair(5)); // Exécution


// Fonction flêchée (raccourci d'écriture)

const nombreImpair = (nb) => {
  return nb % 2 !== 0;
}

const nombreImpair2 = nb => {
  return nb % 2 !== 0;
}

const nombreImpair3 = nb => nb % 2 !== 0;

// Rest operator (...) = équivalent params en C#

function sum (...values) {
  return values.reduce((acc, v) => acc + v);
}

let result = sum(1, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 0, 1, 1, 2, 0);
console.log('result :>> ', result);

console.clear();

// Callback

/**
 * @typedef { {id: number, nom: string, prenom: string, age: number, sexe: 'M' | 'F'} } Personne
 */

/** 
 * @type {Array<Personne>} 
*/
const personnes = [
  { id: 1, nom: 'Geerts', prenom: 'Quentin', age: 29, sexe: 'M' },
  { id: 2, nom: 'Morre', prenom: 'Thierry', age: 50, sexe: 'M' },
  { id: 3, nom: 'Herssens', prenom: 'Caroline', age: 40, sexe: 'F' },
  { id: 4, nom: 'Geerts', prenom: 'Mélanie', age: 37, sexe: 'F' },
  { id: 5, nom: 'Dupont', prenom: 'Thommy', age: 15, sexe: 'M' },
];

/**
 * Fonction qui permet de filtrer un tableau
 *
 * @param {Array<Personne>} array
 * @param {(element: Personne) => boolean} compareFn
 * @return {*} 
 */
function customFilter (array, compareFn) {
  const filteredArray = [];
  for (const element of array) {
    if (compareFn(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}


const filtered = customFilter(personnes, minorOnlyFn);
console.log('filtered :>> ', filtered);

/**
 *
 *
 * @param {Personne} person
 * @return {*} 
 */
function womanOnlyFn (person) {
  return person.sexe === 'F';
}

/**
 * 
 * @param {Personne} person
 * @return {*} 
 */
function manOnlyFn (person) {
  return person.sexe === 'M';
}

function adultOnlyFn (person) {
  return person.age >= 18;
}

function minorOnlyFn (person) {
  return !adultOnlyFn(person);
}


const geertsOnly = customFilter(personnes, p => p.nom === 'Geerts');

