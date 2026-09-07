function trouverPremierMajeur(utilisateur)
{
 return utilisateur.find(a => a.age>=18)
}
const user =[{nom: "Ahmed",age: 15 },
            {nom: "Lina",age: 20 },
            {nom: "Amine",age: 12 },
            {nom: "Oussama",age: 22 }]
console.log(trouverPremierMajeur(user))