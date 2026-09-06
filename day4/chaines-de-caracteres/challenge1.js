const prompt = require("prompt-sync")();

// function compterCaracteres(chaine)
// {
//     let nom = prompt("Entrer un nom : " )
//     let len = nom.length
//     console.log(`le nombre de caracteres du ${nom} est : ${len}`)

// }
// compterCaracteres()


function compterCaracteres(chaine)
{
    let len = chaine.length
    console.log(`le nombre de caracteres du ${chaine} est : ${len}`)
}
let nom = prompt("Entrer un nom : " )
compterCaracteres(nom)