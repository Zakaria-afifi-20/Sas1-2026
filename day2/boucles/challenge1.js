const prompt = require("prompt-sync")();
let part = prompt("taper le nombre des participants : ");
for (let i=1 ; i<=part ; i++)
{
    console.log("Participant " + i)
}