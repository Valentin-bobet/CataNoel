class TrancheAge {

    construcor(libelle, ageMin,ageMax){
        this._libelle = libelle;
        this._ageMax = ageMax;
        this._ageMin = ageMin;
    }

    get libelle(){
        return this._libelle;
    }

    get ageMin(){
        return this._ageMin;
    }

    get ageMax(){
        return this._ageMax;
    }

    toString(){
        return 'Tranche : '+this._ageMin+ ' and ' + this._ageMax+' ans';
    }
}
module.exports = TrancheAge;