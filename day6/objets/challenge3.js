let product = {

    name: "Grafic Card",
    price : 20,
    category: "Electronic",
    quantity: 300,
    available: true
}
console.log(`Produt : ${product.name}`)
console.log(`Price : ${product.price}`)
console.log(`Category : ${product.category}`)
if(product.available)
{
 console.log("Product is Available")
}else{ console.log("Product is Not Available")}

let prix = product.price * product.quantity
console.log(`Total  : ${prix}`)

 