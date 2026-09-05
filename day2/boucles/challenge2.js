const prompt = require("prompt-sync")();
let number = prompt("Ecriver un numero : ")
for(i=1 ; i <= number ; i++)
{
    if(i % 2 == 0)
    {
        console.log(i)
    }
}