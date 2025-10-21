// Démonstration 04 - Structures conditionelles

// 1. if 

/*

if (expression_booléenne) {
  // bloc d'instructions
}
else if (expression_booléenne) {
  // bloc d'instructions
}
else {
    // bloc d'instructions
}

*/

// 2. switch

/*

switch (expression) {

  case valeur:
  case valeur:
    // bloc d'instructions
  case valeur:
    // bloc d'instructions
    break;

  default:
    // bloc d'instructions
}

*/

switch (navigator.language) {
  case 'fr':
    console.log("Bonjour");
    break;
  case 'en':
  case 'US-en':
    console.log("Hello");
    break;
  default:
    console.log("Veuillez saisir une langue");
}

// 3. ternaire

let sexe = 'f';

console.log(`Bonjour ${sexe === 'f' ? 'Madame' : 'Monsieur'}`);

// 4. opérateur null (?.)

let message = prompt("Ca va ?");
console.log("length:", message?.replace("o", "a"));

// 5. opéarteur nullish coalescing 

const BASE_API = configFile.URL ?? "127.0.0.1";

message ??= "valeur par défaut";


