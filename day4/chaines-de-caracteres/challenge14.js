const prompt = require("prompt-sync")();

function masqueCarte (numero)
{
    
      let num = numero.slice(-4)
      let masqnum = num.padStart(numero.length,"*")

      console.log(masqnum)

}
let nom = prompt("entre num cart : ")
masqueCarte(nom)





















