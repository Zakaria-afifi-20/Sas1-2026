const prompt = require("prompt-sync")();

// function additionnerTout(tab)
// {
//     console.log(rempliretab(tab))

//     let somme = 0
//     let r = tab.length - 2
//   for(let i = 0 ; i < r ; i++){
//     somme = somme + tab[i]
//   }
//   return somme 
// }

// function rempliretab(tab)
// {
//      let num ;
//      do
//      { 
//          num = Number(prompt("Entrer les numeros : "))
//          tab.push(num)
//      }
//     while(!isNaN(num) )
//       return num;
// }
// console.log(additionnerTout(rempliretab))


 let somme = 0 
 let num = prompt("Entrer les numeros (ex : 1 2 3 4 5 ) : ")
 let numspace = num.split(' ')
 
 function additionnerTout(...par)
 {
  let len = par.length
   for(i=0 ; i < len ; i++)
   {
    somme = somme + Number(par[i])
   }
    return somme
 }
   
   console.log(additionnerTout(...numspace))