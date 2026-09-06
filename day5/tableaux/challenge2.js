const prompt = require("prompt-sync")();
function calculerSomme(tab)
{
    let len = tab.length
    let somme = 0
  for(let i=0 ; i<len ; i++)
   {
    somme = somme + tab[i]
   } 
   console.log(somme)
} 
let tableau = [10,20,30,40]
calculerSomme(tableau)