const prompt = require("prompt-sync")();

let a =  Number (prompt ("Entrer la 1er longeurs : "))
let b =  Number (prompt ("Entrer la 2eme longeurs : "))
let c =  Number (prompt ("Entrer la 3eme longeurs : "))
  
let l1 = a + b > c
let l2 = a + c > b
let l3 = b + c > a

 
if(l1 && l2 && l3)
{
    console.log("Triangle valide")
     if (a==b && b==c)
    {
       console.log("Triangle Equilateral")
    }
    else if ((a==b && b!=c) || (c==a && b!=a) || (b==c && c!=a))
    {
        console.log("Triangle Isocele")
    }
    else if (a!=b && c!=a && b!=c)
    {
        console.log("Triangle Scalene")
    }
}
else 
console.log("Triangle invalide")


