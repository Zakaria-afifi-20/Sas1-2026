const prompt = require("prompt-sync")();

let salaire = Number(prompt("Entrer votre Salaire : "))
let encien  = Number(prompt("Entrer nombre de annees : "))
var prime  
var bonuce 

if(encien < 1)
{
    prime = 0 
}
else if(encien>=1 && encien<=3)
{
    prime = salaire * 0.05
}
else if(encien>=4 && encien<=7)
{
    prime = salaire * 0.10
}
else if(encien>7)
{
    prime = salaire * 0.15
}

if(salaire>6000)  
{
    bonuce = salaire * 0.02
    console.log(`Prime de salaire inférieur a 6000dh : ${bonuce}Dh`)
    salaire = prime + bonuce + salaire
}
    
salaire = prime +  salaire

console.log(`Le prime est : ${prime} DH`)
console.log(`Le Neveau Salaire est : ${salaire} DH`)
