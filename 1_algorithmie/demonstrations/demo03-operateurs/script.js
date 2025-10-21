// Démonstration 03 - Opérateurs

// 1. Opérateurs arithmétiques

let a = 10, b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} / ${b} = ${parseInt(a / b)}`);
console.log(`${a} % ${b} = ${a % b}`);

// 2. Opérateurs de comparaison

console.log(`${4} == ${4}: ${4 == 4}`);
// Vérification de la valeur
console.log(`${4} == '${4}': ${4 == '4'}`);
// Vérification de la valeur ET du type
console.log(`${4} === '${4}': ${4 === '4'}`);

console.log(`${4} != ${4}: ${4 != 4}`);
// Vérification de la valeur
console.log(`${4} != '${4}': ${4 != '4'}`);
// Vérification de la valeur ET du type
console.log(`${4} !== '${4}': ${4 !== '4'}`);

// 3. Opérateurs de logique

console.log(`${true} && ${true}: ${true && true}`);
console.log(`${false} && ${true}: ${false && true}`);
console.log(`${true} && ${false}: ${true && false}`);
console.log(`${false} && ${false}: ${false && false}`);

console.log(`${true} || ${true}: ${true || true}`);
console.log(`${false} || ${true}: ${false || true}`);
console.log(`${true} || ${false}: ${true || false}`);
console.log(`${false} || ${false}: ${false || false}`);

console.log(`!true: ${!true}`);
console.log(`!false: ${!false}`);

// 4. Opérateurs raccourcis 

// a = a + 5
// a += 5
a += 5;

// 5. Post/pré-incrémentation / décrémentation

let c = 5;

let d = c++; // d: 5, c: 6
let e = ++c; // e: 7, c: 7

let f = c--; // f: 7, c: 6
let g = --c; // g: 5, c: 5