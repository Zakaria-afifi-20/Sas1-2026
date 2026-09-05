//Exercice 6
const prompt = require("prompt-sync")();
let s1 = +prompt("Score Partie 1 : ");
let s2 = +prompt("Score Partie 2 : ");
let s3 = +prompt("Score Partie 3 : ");
let s4 = +prompt("Score Partie 4 : ");
let total = s1 + s2 + s3 + s4;
console.log("Score total est : " + total);
console.log("Score moyen est : " + total / 4);
