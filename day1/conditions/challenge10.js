const prompt = require("prompt-sync")();

let choix = prompt("Entrer Votre Choix : ")
let valeur = Number(prompt("Entrer la valeur : "))
var conv 
 
switch(choix)
{
  case "1" : conv = valeur * 1000 
  console.log(`Resultat : ${conv} Metres`)
  break ;
  case "2" : conv = valeur * 1000
  console.log(`Resultat : ${conv} Cm`)
  break ;
  case "3" : conv = valeur * 1000
  console.log(`Resultat : ${conv} Grammes`)
  break ;  
  case "4" : conv = valeur * 1000
  console.log(`Resultat : ${conv} Millilittres`)
  break ;
  default: console.log("Entrer un choix valide")
}

