const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log("Bienvenue dans le catalogue de jouet");

let unJouet = new Jouet("Draisienne junior bleue");
console.log(unJouet.libelle);

let tranche25 = new TrancheAge("tranche25",2,5);
console.log(tranche25.toString());