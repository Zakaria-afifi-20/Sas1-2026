const prompt = require("prompt-sync")();

// const tabfrt = ["pommes", "ananas", "kiwi"]

// for  (i=0 ; i <tabfrt.length ;i++)
// {
//     console.log(tabfrt[i])
// }
 
// const tabfrt = []

// for  (let i=0 ; i < 4 ;i++)
// {
//    let n = prompt("entrer les noms des fruits : ")
//    tabfrt.push(n)
   
// }
//   console.log(tabfrt)
const tabfrt = []
 let  nom = ""
do
{
  nom = prompt("entrer les noms des fruits : ")
   if(nom != "exit")
   tabfrt.push(nom)
}
while(nom != "exit")

    console.log(tabfrt)

    

   

