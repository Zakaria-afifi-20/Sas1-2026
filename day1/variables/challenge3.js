//Exercice 3
const  prompt = require("prompt-sync")();
let cap = prompt("Entrer la capacite en Gigaoctets : ");
console.log("La capacite en MegaOctets est : " + cap * 1024);