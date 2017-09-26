const Categorie = require('../Categorie');
const TrancheAge = require('../TrancheAge');
const Jouet = require('../Jouet');

const assert = require('assert');

describe("Jouet",() =>{
    describe("jouetConvient",() =>{
        let categorie1;
        let unJouet;
        let tranche25;

        before(function () {
            ageMin = 2;
            ageMax = 5;
            categorie1 = new Categorie(1,"Plein Air");
            tranche25 = new TrancheAge(1,"tranche25",ageMin,ageMax);
            unJouet = new Jouet(1,"Draisienne junior bleue", tranche25,categorie1);
        });

        it("le jouet convient min",() =>{
            assert.equal(unJouet.convenir(2),true,"la limite Min pas incluse");
        });

        it("le jouet convient med",() =>{
            assert.equal(unJouet.convenir(3),true,"l'age entre Min et Max est pas incluse");
        });

        it("le jouet convient max",() =>{
            assert.equal(unJouet.convenir(5),true,"la limite Max est pas incluse");
        });

        it("le jouet ne convient pas moins",() =>{
            assert.equal(unJouet.convenir(1),false,"l'age en dessous de la limite Min est pas exclue");
        });

        it("le jouet ne convient pas plus",() =>{
            assert.equal(unJouet.convenir(18),false,"l'age au dessus de la limite Max est pas exclue");
        });


    });
});