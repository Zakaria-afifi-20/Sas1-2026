const prompt = require("prompt-sync")();
let mont = +prompt("Tapez le Montant : ")

if(mont<500)
{
    let red = mont * 0.05
    let total = mont - red 
    console.log("Reduction : " + red )
    console.log("Total : " + total)
}
else if(mont >= 500 && mont > 999)
    {
       red = mont * 0.10
      total = mont - red
      console.log("Reduction : " + red )
      console.log("Total  : " + total)
    }
    else if(mont > 1000 && mont > 1999)
    {
       red = mont * 0.15
       total = mont - red 
      console.log("Reduction : " + red)
      console.log("Total : " + total)
    }
else {
    console.log("Ancune Reduction")
    console.log("Total : "+ mont)
}