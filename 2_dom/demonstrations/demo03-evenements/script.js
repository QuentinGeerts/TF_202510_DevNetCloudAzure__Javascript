// Démonstration 03 - Événéments


const btn = document.getElementById('btn');

// 1. Au travers de la proprité onclick (déconseillé)
btn.onclick = handleClick;
btn.onclick = function () { console.log("Déclenché depuis anonyme"); }
btn.onclick = () => { console.log("Déclenché depuis flêchée"); }
btn.onclick = null;

function handleClick () {
  console.log("Déclenché depuis handleClick");
}

// 2. Au travers de la méthode addEventListener (conseillé)
btn.addEventListener("click", handleClick)
btn.addEventListener("click", function () { console.log("Déclenché depuis anonyme"); })
btn.addEventListener("click", () => { console.log("Déclenché depuis flêchée"); })

btn.removeEventListener("click", handleClick);

// 3. Paramètres du listener

const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn2.addEventListener("click", function (event) {
  console.log('[anonyme] this :>> ', this);
  console.log('event :>> ', event);
  console.log('event.target :>> ', event.target);
});

btn3.addEventListener("click", (event) => {
  console.log('[flêchée] this :>> ', this);
  console.log('event :>> ', event);
  console.log('event.target :>> ', event.target);
});

// 4. Gestion d'un formulaire

console.log('document.forms :>> ', document.forms);
console.log('document.forms[0] :>> ', document.forms[0]);
console.log('document.forms["login-form"] :>> ', document.forms["login-form"]);
const form = document.forms.namedItem("login-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const { nom, prenom } = e.target.elements;

  if (nom.value == "" || prenom.value == "") return;

  const values = { nom: nom.value, prenom: prenom.value };

  console.log('values :>> ', values);

});