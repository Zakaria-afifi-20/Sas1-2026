const prompt = require("prompt-sync")();

function FilterPaires(tab)
{
let len = tab.length
let newtab = []
let compt = 0
    for(let i=0 ; i<len ; i++)
   {
     if(tab[i] % 2 == 0 )
     {
      newtab[compt] = tab[i]
       compt ++
     }
   }   
  return newtab
}

let tableau = [1,2,3,4,5,6]
console.log(FilterPaires(tableau))
