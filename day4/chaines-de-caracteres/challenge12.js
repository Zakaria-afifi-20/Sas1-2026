const prompt = require("prompt-sync")();

function verifierEmail(email)
{
   let end = "@gmail.com"   
   return email.endsWith(end) ;
}

let mail = prompt("Entrer votre email : ")
console.log(verifierEmail(mail))

