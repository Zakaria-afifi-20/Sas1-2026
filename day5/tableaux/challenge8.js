const prompt = require("prompt-sync")();

// function supprimerDoublons(tab)
// {
//   let compt = 0
//   let newtab = []
//   let len = tab.length
//    for(let i=0 ; i<len ; i++)
//    {
//         let num = tab[i]
//        for(let j=i+1 ; j<len ; j++)
//          if(tab[j] != num)
//           {
//              newtab[compt] = tab[j]
//              compt++
//           }
//    } 
//    console.log(newtab)
// }

// let z = [1,2,3,4,1]
// supprimerDoublons(z)


// function sup(tab)
// {
//   let compt = 0
//   let newtab = []
//   let len = tab.length
//    newtab[0] = tab[0]
//   for(let i=1 ; i<len ; i++)
//    {
//         if(tab[i+1] != newtab[compt+1])
//         {
//          newtab[compt+1] = tab[i+1]
//          compt++
         
//         }
       
//    } 
//    return newtab


// }

// let z = [1,1,2,2,3,4,1]
// console.log(sup(z))

function supprimerDoublons()
{
let result=[];

for(let i = 0; i < ni.length; i++) 
{
    let found = false;
    let compt = 0
    for(let j = 0; j < result.length; j++) 
    {
        if(tab[i]==result[j])
        {
          true;
            break;
        }
        compt++
    }
    if(found==false)
    {
       result [compt] = tab[i]
    }
}
 console.log(result);
}


 let tableau = [1,1,2,2,3,4,1]

 supprimerDoublons(tableau)
