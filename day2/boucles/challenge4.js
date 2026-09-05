const prompt =require("prompt-sync")();
let num = prompt("tapez un numero : ");
 for(i=1 ; i <=10 ; i++)
{
    let multi = num * i
    console.log(num +" x "+ i + " = "+ multi)

}