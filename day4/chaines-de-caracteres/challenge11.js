const prompt = require("prompt-sync")();
 
function formmaterText(chaine)
{ 
    let upper = chaine.toUpperCase()
    let lower = chaine.toLowerCase()
    
   console.log(`Majuscule : ${upper} , Minuscule : ${lower}`)
}

let mot = prompt("Entrer un mot : ")
formmaterText(mot)