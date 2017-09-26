const Jouet = require('./Jouet.js');
const TrancheAge = require('./trancheAge.js');
const Categorie = require('./Categorie');

console.log("Bienvenue dans le catalogue de jouet");

let tranche25 = new TrancheAge("tranche25",2,5);
console.log(tranche25.toString());

let unJouet = new Jouet("Draisienne junior bleue", tranche25);
console.log(unJouet.trancheAge);

let categorie1 = new Categorie("Plein Air");
console.log(categorie1.libelle);