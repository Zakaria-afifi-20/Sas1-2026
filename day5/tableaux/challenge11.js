function formaterChaine(tab)
{ 
    tab.shift()
    tab.pop()
    
    console.log(tab.join("_"))
} 

formaterChaine([10,20,30,40])