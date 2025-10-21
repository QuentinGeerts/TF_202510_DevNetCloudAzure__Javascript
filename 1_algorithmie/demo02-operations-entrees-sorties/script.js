// Démonstration 02 - Entrées et sorties

// 1. Sorties

// 1.1. Console

console.log("Message");
// ...

// 1.2. Boite de dialogue
// alert("Un message");

// 1.3. DOM
const messageBox = document.getElementById("message-box");
messageBox.textContent = "Hello World";

// 2. Entrées

// 2.1. Boite de dialogue
// let message = prompt("Dis bonjour");
// console.log('message:', message);

// 2.2. DOM

const userInput = document.getElementById("userInput");
console.log("input:", userInput.value);
