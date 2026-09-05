const prompt = require("prompt-sync")();

let num = prompt("Numero de Base : ")
let expo = prompt("Exposant : ")
let i = 0
let res = 1
while(i < expo)
{
    res = res * num
    i++
}
console.log("Resultat : " + res)