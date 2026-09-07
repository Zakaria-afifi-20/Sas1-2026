const prompt = require("prompt-sync")();

function FusionnerTableaux(tab1, tab2)
{
let len = tab1.length
let newtab = []
let compt = 0
    for(let i=0 ; i<len ; i++)
   {
     newtab [i] = tab1[i]

   }
   let s = newtab.length
   let len2 = tab2.length
    for(let j=0 ; j<len2 ; j++)
   {
     newtab [s] = tab2[j]
     s++
   }
   return newtab
}


console.log(FusionnerTableaux([5,2], [3,4]))
