const prompt = require("prompt-sync")();

let code = prompt("Entrer Le code de votre Compte : ")

switch(code)
{
    case "1" : console.log("Compte Courant -> 20 DH")
    break;
    case "2" : console.log("Compte Epargne -> 10 DH")
    break;
    case "3" : console.log("Compte Etudiant -> 0 DH ")
    break;
    case "4" : console.log("Compte Professionnel -> 50 DH")
    break;
    default : console.log("Entrer un numero entre 1 et 4")
}