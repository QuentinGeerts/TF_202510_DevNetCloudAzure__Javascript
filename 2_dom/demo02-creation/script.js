// Démonstration 02 - Création d'élément


// 1. Création de l'élément HTML
const newP = document.createElement("p");
console.log('newP :>> ', newP);

const newH1 = document.createElement('h1');

// 2. Modification du contenu

// Le code ne sera pas interprété
newP.textContent = "Hello, World !"; // ❤️
newP.innerText = "<strong>Hello World !</strong>";
newH1.textContent = "Mon beau titre";

// Le code sera interprété
newP.innerHTML = "<strong>Hello World !</strong>";

// 3. Modification des attributs

newP.title = "";
newP.title = null;
newP.title = "Mon beau paragraphe";
// → préféré pour la récupération de la valeur
console.log('newP.title :>> ', newP.title);

// → pour la gestion, préféré utilisation des méthodes

const hasTitle = newP.hasAttribute("title");
newP.setAttribute("title", "Mon paragraphe");
// → l'attribut existe: modifié
// → l'attribut n'existe pas: ajouté
const titleValue = newP.getAttribute("title");
const hasBeenRemoved = newP.toggleAttribute("title");
// → l'attribut existe: retiré
// → l'attribut n'existe pas: ajouté
newP.removeAttribute("title");

// 4. Modification des classes

newP.setAttribute('class', 'txt-red bg-yellow bold'); // 💩
console.log('newP.className :>> ', newP.className);
console.log('newP.classList :>> ', newP.classList); // ❤️

newP.classList.add("p", "underline");
newP.classList.remove("bg-yellow", "underline");

console.clear();

// 5. Ajouter l'élément sur la page

// 5.1. Ajouter en tant que dernier enfant

const container = document.getElementById("container");
// console.log('container :>> ', container);

container.append(newH1, newP);
const h2Container = container.appendChild(document.createElement('h2'));
h2Container.textContent = "Mon titre de niveau 2";

// 5.2. Insérer à un endroit spécifié

const myList = document.getElementById('myList');
console.log('myList.children :>> ', myList.children);
console.log('myList.children[1] :>> ', myList.children[1]);

myList.children[0].insertAdjacentText("afterbegin", "<strong>🚀</strong>");
myList.children[1].insertAdjacentHTML("afterbegin", "<strong>Beautiful</strong> ");
const span = myList.children[2].insertAdjacentElement("beforeend", document.createElement("span"));
span.textContent = " ❤️";

// 6. Supprimer un élément

// newP.remove(); // Supprime directement l'élément
// const removedNode = myList.removeChild(myList.children[1]);
// console.log('removedNode :>> ', removedNode);

// 7. Astuces

// Récupération du parent
const parent = myList.children[0].parentElement;
console.log('parent :>> ', parent);

const previousElement = myList.children[1].previousElementSibling;
console.log('previousElement :>> ', previousElement);

const nextElement = myList.children[1].nextElementSibling;
console.log('nextElement :>> ', nextElement);