const prompt =require("prompt-sync")();

   let n = prompt("Tapez le 1er numero : ")
   let x = prompt("Tapez le 2eme numero : ")
   let res = 0
   let cmpt = 0 
 for(let i=1 ; x * i <= n; i++ )
 { 
    res = x * i
    if(res >n) break
   console.log(res)
   cmpt++

 }
 console.log("le nombre total de multiples trouves est : " + cmpt)