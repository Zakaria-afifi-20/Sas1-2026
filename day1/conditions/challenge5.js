const prompt = require("prompt-sync")();

 let score = prompt("Entrer votre Score : ")
 let rang 
 let rest = 0 
  
 if(score<1000)
 {
    rang = "Bronze"
    rest = 1000 - score 

 }
 else if(score>1000 && score<1999)
 {
    rang  = "Argent" 
    rest = 2000 - score 
 }
 else if(score>2000 && score<2999)
 {
    rang = "Or"
    rest = 3000 - score 
 }
 else if(score>3000 && score<4999)
 {
    rang = "Diamant"
    rest = 5000 - score 
 }
 else rang = "Legende"
 console.log("Votre rang est : " + rang)
 console.log( ` ${rest} Points rest pour le rang suivant  `)
