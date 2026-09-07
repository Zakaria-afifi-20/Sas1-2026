const prompt = require("prompt-sync")();

function inverserTableau(tab)
{
   let newtab = []
   let compt = 0
   let len = tab.length - 1
    for(let i=len ; i>=0 ; i--)
   {
     newtab[compt] = tab [i]
     compt ++
   } 
   console.log(newtab)
} 
let tableaux = [10,20,30,40]
inverserTableau(tableaux)