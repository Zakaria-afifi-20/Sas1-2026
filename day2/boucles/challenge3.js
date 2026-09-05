const prompt =require("prompt-sync")();
 let num = prompt("Tapez un numero : ")
 let sum = 0
 for (i=0 ; i<=num ;i++)
 { 
      sum = sum + i
 }
  console.log("Somme : " + sum)