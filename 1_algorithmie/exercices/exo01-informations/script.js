/*

Écrire un programme qui permet de demander à l'utilisateur d'encoder son nom, prénom et date de naissance.
Ensuite, afficher dans la console: "Bonjour [prenom] [nom], vous êtes né le [dateNaissance]".

C#: $"Bonjour {Hello}"
JS: `Bonjour ${hello}`

*/

let nom = prompt("Entrez votre nom:");
let prenom = prompt("Entrez votre prénom:");
let dateNaissance = prompt("Entrez votre date de naissance (AAAA-MM-JJ):");

console.log(`Bonjour ${prenom} ${nom}, vous êtes né le ${dateNaissance}`);
