const prompt = require("prompt-sync")();

let choix = prompt("Entrer votre choix : ")
let niveau 
let enemie = 0
let pointenemie
switch(choix)
{
    case "1": niveau="Facile", enemie = 30 , pointenemie = 10
    break;
    case "2": niveau="Normal", enemie = 40 , pointenemie = 20
    break;
    case "3": niveau="Difficile", enemie = 50 , pointenemie = 30
    break;
    case "4": niveau="Extreme", enemie = 60 , pointenemie = 40
    break;
    default : console.log("Entrer un numbre entre 1 et 4")
}
console.log(`Niveau : ${niveau}    `)
console.log(`Ennemis : ${enemie}`)
console.log(`Point Par ennemi ${pointenemie}`)