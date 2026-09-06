const prompt = require("prompt-sync")();

function ajouterAlafin(tab, element)
{
    let num = tab.length
    tab[num] = element
    console.log(tab)
} 

let tableaux = [10,20,30,40]
let nombre = prompt("Ajouter un nombre : ")

ajouterAlafin(tableaux, nombre)