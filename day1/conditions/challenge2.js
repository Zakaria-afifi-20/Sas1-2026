//Exercice 2
const prompt = require("prompt-sync")();

let color = prompt("Entrer la couleur :  ")

// if(color =="rouge")
//   {
//     console.log("Arretez-vous")
//   }
//   else if (color == "orange")
//   {
//     console.log("Ralentisser")
//   }
//   else if (color == "vert")
//   {
//     console.log("Vous Pouvez Passer")
// }
// else {
//     console.log("Couleur invalid")
// }

  switch(color)
  {
    case "rouge" : console.log("Arretez-vous")
    break;
    case "orange" : console.log("Ralentissez")
    break;
    case "rouge" : console.log("Vous Pouvez Pazsser")
    break;
    default : console.log("Couleur invalide")
  }