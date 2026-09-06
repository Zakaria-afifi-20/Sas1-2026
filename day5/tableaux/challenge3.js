const prompt = require("prompt-sync")();

function trouverMax(tab)
{
    let len = tab.length
    let max = 0
  for(let i=0 ; i<len ; i++)
   {
    if(tab[i] > max)
    {
        max = tab[i]
    }
   } 
   console.log(max)
} 
let tableau = [100,20,30,40]
trouverMax(tableau)