const form = document.forms.namedItem("myForm");
const clearButton = document.getElementById("clear-btn");

form.addEventListener("submit", handleForm);
clearButton.addEventListener("click", clearList);

/**
 * Permet de gérer la validation du formulaire
 *
 * @param {SubmitEvent} event
 */
function handleForm(event) {
  // Empêcher le déclenchement du comportement par défaut
  event.preventDefault();
  
  // Vérification que la méthode soit bien déclenchée par un formulaire
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  // Récupérer le champ de l'intitulé
  const { task } = form.elements;

  // Nettoyer la valeur, réinitiliser le champ et refocus le champ
  const cleanedValue = task.value.trim();
  task.value = "";
  task.focus();

  if (!cleanedValue) return;

  // Création de l'élément de liste
  const ul = document.getElementById("liste");
  const li = ul.appendChild(document.createElement("li"));
  const btnRemove = document.createElement("button");
  li.textContent = cleanedValue;
  li.insertAdjacentElement("beforeend", btnRemove);
  btnRemove.textContent = "❌"
  btnRemove.addEventListener("click", removeTask)
}

function clearList () {
  const liste = document.getElementById("liste");
  for (const element of liste.children) {
    element.remove();
  }
}

/**
 * Permet de retirer l'élément de liste
 *
 * @param {PointerEvent} event
 */
function removeTask (event) {
  event.target.parentElement.remove();
}