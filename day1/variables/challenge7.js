//Exercice 7
const prompt= require("prompt-sync")();
let noteCC = +prompt("Entrer La Note De Controle Continu : ")
let noteProjet = +prompt ("Entrer La Note de Projet : ")
let noteExam = +prompt("Entrer La Note De Examen : ")
let noteF = ((noteCC*2)+(noteProjet*3)+(noteExam*5))/10
console.log("Note Finale : " +noteF )

