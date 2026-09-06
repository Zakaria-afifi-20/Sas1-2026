const prompt = require("prompt-sync")();
 
function compterVoyelles(chaine)
{
    let len = chaine.length
    let compt = 0
    
   for(let i=0 ; i < len ; i++)
   {
    let car = chaine[i]
    if(car == 'a' || car == 'A' || car == 'e' || car == 'E' || car == 'i' || car == 'I' || car == 'u' || car == 'U'|| car == 'y' || car == 'Y' || car == 'O' || car == 'o') 
        compt++
   }
    console.log(`Le nombre des voyelles dans le mot ${chaine} est : ${compt}`)
}

 let mot = prompt("Entrer un mot : ")
 compterVoyelles(mot)
