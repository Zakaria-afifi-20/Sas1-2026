const prompt = require("prompt-sync")();

function obtenirInitiales(nomcomplet)
{
  let name = nomcomplet.split(' ')
  let ncompl = name.map(car => car[0].toUpperCase()).join(".")
  
  console.log(ncompl)
}

let nom = prompt("entrer votre nom : ")
obtenirInitiales(nom)
