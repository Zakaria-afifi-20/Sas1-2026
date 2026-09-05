//Exercice 5 
const prompt = require("prompt-sync")();
let time = prompt("Entrer la duree de film en minutes : ");
if (time < 60) {
    console.log("Court Metrage");
}   else if (time >= 60 && time < 120) {
    console.log("Film Standard");
} else {
    console.log("Film Long");
}
