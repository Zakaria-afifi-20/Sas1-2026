const prompt = require("prompt-sync")();
let num = prompt("Entrer un numero : ")

switch(num)
{
    case"1" : console.log("Janvier")
    break;
    case"2" : console.log("Fevrier")
    break;
    case"3" : console.log("Mars")
    break;
    case"4" : console.log("Avril")
    break;
    case"5" : console.log("Mai")
    break;
    case"6" : console.log("Juine")
    break;
    case"7" : console.log("Juillet")
    break;
    case"8" : console.log("Aout")
    break;
    case"9" : console.log("Septembre")
    break;
    case"10" : console.log("Octobre")
    break;
    case"11" : console.log("Novembre")
    break;
    case"12" : console.log("Decembre")
    break;
    default : console.log("Il ya juste 12 Mois")

}