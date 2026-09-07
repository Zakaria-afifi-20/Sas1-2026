

function trierTableaux(tab)
{
    let len = tab.length
    let newnum
  for(let i=0 ; i<len ; i++)
   {

    for(let j=i+1 ; j<len ; j++)
   { 
      if(tab[i] > tab[j])
      {
         newnum = tab[i]
         tab[i] = tab[j]
         tab[j] = newnum
      }
   }  
 } 
 
   return tab
}

 console.log(trierTableaux( [10,5,6,8,1,3,45,87]))