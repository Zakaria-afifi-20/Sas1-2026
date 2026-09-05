const prompt = require("prompt-sync")();

function saluerclient(nom , titre)
{
    if(titre == "")  titre = "Client "

    let msg = (`Bonjour  ${titre}  ${nom} `)
    return msg;
        
}

   let nom = prompt("Entrer Votre Nom : ")
   let titre = prompt("Entrer Votre Titre : ")
    
   console.log(saluerclient(nom, titre))
