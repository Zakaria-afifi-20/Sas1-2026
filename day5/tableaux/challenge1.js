const prompt = require("prompt-sync")();

function afficherElement(tab)
{
    let len = tab.length

  for(let i=0 ; i<len ; i++)
   {
    console.log(tab[i])
   } 
} 
let tableau = [10,20,30,40]
afficherElement(tableau)