const prompt = require("prompt-sync")();

let prix = Number(prompt("Entrer le prix : "))
let quant = Number(prompt("Entrer le prix : "))
let argent = Number(prompt("Entrer le prix : "))
let rest 
let total = Number(prix * quant)

if(argent > total)
{
    if(total < 100)
    {
        rest = argent - total
    }
    else if(total >= 100)
    {
        total = total - (total * 0.10)
        rest = argent - total
    }
    else if( total >= 200 )
    {
        total = total - (total * 0.20)
        rest = argent - total
    }
    else if(total >= 500)
    {
         total = total - (total * 0.50)
         rest = argent - total
    }
}
