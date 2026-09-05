const prompt = require("prompt-sync")();

// function calculerAgeChien()
// {
//      let ageHumain = prompt("Entrer votre age : ")
//      let ageChien = ageHumain * 7
//      console.log(`L age de chien est : ${ageChien}`)
// } 
// calculerAgeChien()

 function calculerAgeChien(ageHumain)
 {
    let age = ageHumain * 7
    return age ;
 }
 let ageHumain = prompt("Entrer votre age : ")
 console.log(calculerAgeChien(ageHumain))

