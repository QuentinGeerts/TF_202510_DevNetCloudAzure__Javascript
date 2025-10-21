// Démonstration 01 - Variables

// Déclaration
// let, const vs var

// let et const sont arrivés à l'ES6 (2015)
// var avant 2015

// let nomVariable: any; // Uniquement possible en TypeScript
let nomVariable;

console.log("nomVariable:", typeof nomVariable); // undefined

// Affectation et types de données

nomVariable = "Quentin";
console.log("nomVariable:", typeof nomVariable); // string

nomVariable = 42;
console.log("nomVariable:", typeof nomVariable); // number

nomVariable = 4.2;
console.log("nomVariable:", typeof nomVariable); // number

nomVariable = true;
console.log("nomVariable:", typeof nomVariable); // boolean

nomVariable = [];
console.log("nomVariable:", typeof nomVariable); // object (any[])

nomVariable = new Date();
console.log("nomVariable:", typeof nomVariable); // object (Date)
console.log("nomVariable:", nomVariable.constructor.name); // Date

nomVariable = {};
console.log("nomVariable:", typeof nomVariable); // object ({})

nomVariable = function () {};
console.log("nomVariable:", typeof nomVariable); // funciton (() => void)

// Constantes

const BASE_URL = "127.0.0.1:5500";
// BASE_URL = "Hello"; // Uncaught TypeError: Assignment to constant variable.



