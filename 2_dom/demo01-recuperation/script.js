// Démonstration 01 - Récupération d'éléments du DOM


// 1. document.getElementById(id: string): HTMLElement | null

const b01 = document.getElementById("b01");
console.log('b01 :>> ', b01);

// 2. Document.getElementsByClassName(classNames: string): HTMLCollectionOf<Element> 

const titles = document.getElementsByClassName("title");
console.log('titles :>> ', titles);
console.log('titles[0] :>> ', titles[0]);
console.log('titles.t01 :>> ', titles.t01);
console.log('titles["t-01"] :>> ', titles["t-01"]);