const prompt = require("prompt-sync")();
 
function inverserChaine(chaine)
{
    let len = chaine.length
    let inverse = ""

  for( let i=0 ; i<len ; i++)
  {
     inverse = chaine[i] + inverse
  }
   console.log(inverse)
}
let mot = prompt("Entrer un mot : ")
inverserChaine(mot)