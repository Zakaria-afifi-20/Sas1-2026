const prompt = require("prompt-sync")();
let distance = prompt("Entrer la distance en Km : ");
let carb = prompt("Entrer la quantite de carburant consommee en litres : ");
console.log("La consommation en L est : " + carb / distance * 100 + " L:100km");