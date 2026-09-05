const prompt = require("prompt-sync")();

function verifierMotdePasse(mdp)
{
   let mdplenght = mdp.length
  if(mdplenght >= 8 && mdp.includes("@"))
  {
   return true;
  }
else 
   return false ;
}

let mdp = prompt("Entrer le Mot De Passe : ")
console.log(verifierMotdePasse(mdp))   