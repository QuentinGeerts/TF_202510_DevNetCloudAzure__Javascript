// Démonstration 06 - Tableaux

// Déclaration

const monTableau = []; // à la volée
const monTableau2 = new Array(); // constructeur

const monTableau3 = [ 'Jean-Baptiste', 'Adam', 'Anthony' ];
const monTableau4 = new Array(42); // 42 emplacements vides

console.log('monTableau :>> ', monTableau);
console.log('monTableau2 :>> ', monTableau2);
console.log('monTableau3 :>> ', monTableau3);
console.log('monTableau4 :>> ', monTableau4);

// Récupérer la taille: .length
console.log('monTableau3.length :>> ', monTableau3.length);

// Accéder à un indice: [ ]
console.log('monTableau3[0] :>> ', monTableau3[0]);
console.log('monTableau3[-1] :>> ', monTableau3[-1]);
console.log('monTableau3[9999] :>> ', monTableau3[9999]);

// Tableau associatif

const platJours = [];
platJours["lundi"] = "Sandwich";
platJours["mardi"] = "Sandwich";
platJours["mercredi"] = "Sandwich";
platJours["jeudi"] = "Sandwich";

console.log('platJours :>> ', platJours);
console.log('platJours.length :>> ', platJours.length);
console.log(Object.keys(platJours).length);

