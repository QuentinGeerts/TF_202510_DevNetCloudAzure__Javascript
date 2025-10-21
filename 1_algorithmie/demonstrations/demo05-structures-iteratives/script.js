// Démonstration 05 - Structures itératives

// 1. While

/*

while (expression_booléenne) {
  // bloc d'instructions
}

*/

// 2. Do...While

/*

do {
  // bloc d'instructions
} while (expression_booléenne);

*/

// 3. For

/*

for (initialisation; condition; incrémentation) {
  // bloc d'instructions
}

*/

// 4. Foreach

const fruits = [ "pomme", "poire", "ananas", "cerise", "litchi", "banane" ];

// 4.1. for...of

for (let fruit of fruits) {
  console.log("Fruit:", fruit)
}

for (let lettre of "bonjour") {
  console.log("lettre:", lettre);
}

// 4.2. for...in

for (let index in fruits) {
  console.log(`fruits[${index}]`, fruits[index]);
}

const personne = {
  nom: 'Geerts',
  prenom: 'Quentin',
  dateNaissance: new Date(1996, 3, 3)
};

for (let prop in personne) {
  console.log(`${prop}:`, personne[prop]);
}

// 4.3. Array.prototype.foreach(...)

fruits.forEach((value, index, array) => {
  console.log(value, index, array);
});

fruits.forEach(function (value) {
  console.log(value);
});

fruits.forEach(handleForEach);


function handleForEach (value, index, array) {
  console.log(`${value} - ${index} - ${array.length}`);
}

// 5. break / continue

for (let i = 0; i < 10; i++) {
  if (i == 4) break; // sortir de la structure
  console.log("i:", i);
}

for (let i = 0; i < 10; i++) {
  if (i == 4) continue; // sortir de l'itération en cours
  console.log("i:", i);
}
