const prompt = require("prompt-sync")();
function compterLetrre(chaine, lettre)
{
    let len = chaine.length
    let nombrelettre = 0

    for(let i=0 ; i <= len ; i++)
    {
      if(lettre == chaine[i])
      { nombrelettre++}
      
    }
    console.log(`Le nombre de ${lettre} dans ${chaine} est : ${nombrelettre}`)
}

let mot = prompt("Entrer un mot : ")
let caractere = prompt("Entrer la caractere : ")

compterLetrre(mot,caractere) 

