//Exercice 8
const prompt = require ("prompt-sync")();
let u = +prompt("Entrer La tension U en volts : ")
let i = +prompt("Entrer Lintensite I en ampreres : ")
let t = +prompt("Entrer Le Temps T en Heures : ")
let energie = u * i * t 
//console.log("Tension : " + u + " V")
//console.log("Intensite  : " + i + " A")
//console.log("Temps : " + t + " Heures")
console.log("Energie : " + energie + " Wh")
