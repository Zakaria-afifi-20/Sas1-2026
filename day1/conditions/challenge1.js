//Exercice 1
const prompt = require("prompt-sync")();
let mont = +prompt("Tapez le Montant : ")

if(mont<100)
{
    let liv = 30
     total = mont + liv
    console.log("frais de livraison : " + liv)
    console.log("Total a Payer : " + total)
}
else if(mont >= 100 && mont < 299)
    {
       liv = 20
      total = mont + liv 
      console.log("frais de livraison : " + liv)
      console.log("Total a Payer : " + total)
    }
    else if(mont > 300 && mont < 499)
    {
       liv = 10
       total = mont + liv 
      console.log("frais de livraison : " + liv)
      console.log("Total a Payer : " + total)
    }
else {
    console.log("livraison gratuite")
    console.log("Total a Payer : "+ mont)
}
    