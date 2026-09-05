const prompt = require("prompt-sync")();

// let nbr = Number(prompt("Entrer Un Numbre : "))

for(let i=0 ; i < 10 ; i++)
{
    let nbr = Number(prompt("Entrer Un Numbre : "))
    if(nbr < 10)
    {

        console.log("khtar kbar mno")
    }
    else if( nbr > 10)
    {
        console.log("khttar sghar mno")
    }
    else if(nbr ==10)
    {
         console.log    ("Hewa hada")
         break ;    
    }
}
console.log("Game over")