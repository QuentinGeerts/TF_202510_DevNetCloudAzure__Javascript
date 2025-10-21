console.log("Exécuté depuis un fichier externe.");

const p01bis = document.getElementById("p01");

console.log("[script.js] p01bis:", p01bis);

console.clear(); // Nettoyer la console
console.warn("Permet de mettre un avertissement");
console.error("Permet de mettre une erreur");
console.dir(p01); // Permet de déplier les propriétés d'un objet
console.table(p01); // Permet d'afficher sous forme d'un tableau
console.time("counter01"); // Permet d'afficher le temps écoulé
setTimeout(() => {
  console.timeEnd("counter01");
}, 4000);