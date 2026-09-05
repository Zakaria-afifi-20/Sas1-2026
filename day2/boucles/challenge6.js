const prompt = require("prompt-sync")();

let depart = prompt("Entrer un nombre : ")
while (depart >= 0)
{
    console.log(depart)
    depart--
}