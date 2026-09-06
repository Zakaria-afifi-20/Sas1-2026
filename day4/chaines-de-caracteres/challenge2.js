const prompt = require("prompt-sync")();
function compterLetrre(chaine, lettre)
{
    let len = chaine.length
    let nomrelettre = 0

    for(let i=0 ; i <= len ; i++)
    {
      if(lettre == chaine[i])
      { nomrelettre++}
      
    }
    console.log(`Le nombre de ${lettre} dans ${chaine} est : ${nomrelettre}`)
}

let mot = prompt("Entrer un mot : ")
let caractere = prompt("Entrer la caractere : ")

compterLetrre(mot,caractere) 

