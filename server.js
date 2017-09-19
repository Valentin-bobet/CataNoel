const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log("Bienvenue dans le catalogue de jouet");

let unJouet = new Jouet("Draisienne junior bleue", tranche25);
console.log(unJouet.trancheAge);

let tranche25 = new TrancheAge("tranche25",2,5);
console.log(tranche25.toString());