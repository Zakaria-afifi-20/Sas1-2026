const prompt = require("prompt-sync")();

function contientElement(tab , valeur)
{
let len = tab.length
    for(let i=0 ; i<len ; i++)
   {
     if(tab[i] === valeur)
        return true 
   } 
       return false
} 
let tableau = ['pomme' ,'banan', 'kiwi', 'anans']
let element = prompt("Entrer un element : ")
console.log(contientElement(tableau, element))