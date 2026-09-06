const prompt = require("prompt-sync")();
 
function estPalindrome(chaine)
{
    let len = chaine.length
    let inverse = ""
    
    for( let i=0 ; i<len ; i++)
    {
     inverse = chaine[i] + inverse
    }
 return chaine === inverse
}

let mot = prompt("Entrer un mot : ")
console.log(estPalindrome(mot))

 