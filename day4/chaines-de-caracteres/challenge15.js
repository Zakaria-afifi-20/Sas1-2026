const prompt = require("prompt-sync")();

function capitaliserPhrase(phrase)
{
    let space = phrase.split(' ') 
    let firstcar = space.map(car => car[0].toUpperCase() + car.slice(1))
    let capital = firstcar.join(' ')

    console.log(capital)

}

let name = prompt("entrer : ")
capitaliserPhrase(name)