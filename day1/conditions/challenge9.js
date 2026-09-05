const prompt = require("prompt-sync")();

let type = prompt("Entrer le type de billet : ")
let quant = Number(prompt("Entrer la quantite : "))
var total 
 
switch(type)
{
    case "standard" :  total = quant * 80
    break ; 
    case "vip" :  total = quant * 200
    break ; 
    case "premium" :  total = quant * 350
    break ; 
     case "enfant" :  total = quant * 40
    break ; 
    default : console.log("Choisise un valide type")
}
console.log(`Vous avez choisissez ${quant} de type  ${type} le total est : ${total}`)