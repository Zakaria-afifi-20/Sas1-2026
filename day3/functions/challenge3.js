const prompt = require("prompt-sync")();

function genereEmail(nom , prenom)
{
  
   let mail =(` ${prenom}.${nom}@entreprise.com`).toLocaleLowerCase()

     return mail
}

   let nom = prompt("Entrer votre nom : ")
   let prenom = prompt("Entrer votre prenom : ")

   console.log(genereEmail(nom, prenom))