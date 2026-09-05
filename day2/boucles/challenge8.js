const prompt = require("prompt-sync")();

let num = prompt("Number of Missions : ")
let i =1 
let score = 100
while(i <= num)
{
 console.log("Missions " + i + " Score : " + score)
 score = score + 100 
 i++
}