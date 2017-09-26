const Categorie = require('../Categorie');
const TrancheAge = require('../trancheAge');
const Jouet = require('../Jouet');

const assert = require('assert');

describe("Jouet",() =>{
    describe("jouetConvient",() =>{
        let categorie1;
        let unJouet;
        let tranche25;

        before(function () {
            categorie1 = new Categorie("Plein Air");
            tranche25 = new TrancheAge("tranche25",2,5);
            unJouet = new Jouet("Draisienne junior bleue", tranche25,categorie1);
        });

        it("le jouet convient",() =>{
            assert.equal(unJouet.convenir(2),1,"la limite Min pas incluse");
            assert.equal(unJouet.convenir(3),1,"l'age entre Min et Max est pas incluse");
            assert.equal(unJouet.convenir(5),1,"la limite Max est pas incluse");
        });
        it("le jouet ne convient pas",() =>{
            assert.equal(unJouet.convenir(1),0,"l'age en dessous de la limite Min est pas exclue");
            assert.equal(unJouet.convenir(18),0,"l'age au dessus de la limite Max est pas exclue");
        });
    });
});